"use client"

import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/shared/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"

const FormSchema = z.object({
    username: z.string().min(1, {
        message: "Введите имя",
    }),
    phone: z.string().min(1, {
        message: "Введите телефон",
    }),
    bio: z
        .string()
        .min(1, {
            message: "Введите Описание",
        })
        .max(800, {
            message: "Максимум 800 символов",
        }),
})

export function OrderForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            phone: "",
            bio: "",
        },
    })

    async function sendTelegramMessage(data: z.infer<typeof FormSchema>) {
        const TOKEN = "7609911041:AAEukD-G3bxU8MiuyikUhe9us042dzsRfBo"
        const CHAT_ID = "-4727934737"
        const message = `📨 Новая заявка:
    
👤 Имя: ${data.username}
📞 Телефон: ${data.phone}
📝 Описание: ${data.bio}`

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML",
            }),
        })
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            await sendTelegramMessage(data)
            toast({
                title: "Успешно отправлено!",
                description: "Мы получили вашу заявку. Спасибо!",
            })
            form.reset()
        } catch (error) {
            console.error(error)
            toast({
                title: "Ошибка отправки",
                description: "Пожалуйста, попробуйте позже.",
                variant: "destructive",
            })
        }
    }

    function validate(e: React.KeyboardEvent<HTMLInputElement>) {
        const key = e.key
        const regex = /^[0-9.]$/
        if (!regex.test(key)) {
            e.preventDefault()
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 min-h-full items-stretch relative w-full py-formSpaceYPadding px-formSpaceXPadding duration-300 text-background mb-[50px]"
            >
                <h3 className="text-orderContactsSize mb-orderContactsMargin font-semibold text-background">
                    Ваши контакты
                </h3>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[22px]">Имя</FormLabel>
                            <FormControl className="text-background">
                                <Input
                                    className="text-background"
                                    placeholder="Имя"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[22px]">Телефон</FormLabel>
                            <FormControl className="text-background">
                                <Input
                                    className="text-background"
                                    onKeyDown={validate}
                                    placeholder="+7 (0000) 00-00-00"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <h3 className="text-orderContactsSize mb-orderContactsMargin font-semibold">
                    Расскажите про вашу задачу
                </h3>
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[22px]">Описание</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Описание"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div
                    className="g-recaptcha"
                    data-sitekey="6LcHvZ8qAAAAAPcsVxxP3LUyUVRMBwKpMD-ApTjg"
                ></div>
                <Button
                    className="rounded-[50px] px-10 py-6 text-[20px] tracking-wide bg-mainColor hover:bg-darkMain duration-300 hover:duration-150"
                    type="submit"
                >
                    Отправить
                </Button>
            </form>
        </Form>
    )
}