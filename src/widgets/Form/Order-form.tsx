"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import ReCAPTCHA from "react-google-recaptcha"

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

// ✅ Обновленная схема с капчей и согласием
const FormSchema = z.object({
    username: z.string().min(1, { message: "Введите имя" }),
    phone: z.string()
        .min(1, { message: "Введите телефон" })
        .refine(val => {
            const digitsOnly = val.replace(/\D/g, "")
            return digitsOnly.length >= 10
        }, { message: "Телефон должен содержать минимум 10 цифр" }),
    bio: z.string()
        .min(1, { message: "Введите описание" })
        .max(800, { message: "Максимум 800 символов" }),
    captcha: z.string().min(1, { message: "Подтвердите, что вы не робот" }),
    consent: z.literal(true, {
        errorMap: () => ({
            message: "Вы должны дать согласие на обработку персональных данных",
        }),
    }),
})

export function OrderForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            phone: "",
            bio: "",
            captcha: "",
            consent: true,
        },
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)

    async function sendTelegramMessage(data: z.infer<typeof FormSchema>) {
        const TOKEN = "7609911041:AAEukD-G3bxU8MiuyikUhe9us042dzsRfBo"
        const CHAT_ID = "-4727934737"
        const message = `📨 Новая заявка:\n\n👤 Имя: ${data.username}\n📞 Телефон: ${data.phone}\n📝 Описание: ${data.bio}`

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML",
            }),
        })
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setIsSubmitting(true)
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
        } finally {
            setIsSubmitting(false)
            alert("Ваша заявка отправлена, мы обязательно свяжемся с вами")
        }
    }

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value
        value = value.replace(/[^\d+ ]/g, "")
        if (!value.startsWith("+")) {
            value = "+" + value.replace(/\+/g, "")
        }
        value = value.replace(/ {2,}/g, " ")
        form.setValue("phone", value)
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
                                    value={field.value}
                                    onChange={handlePhoneChange}
                                    placeholder="+7 (000) 000-00-00"
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

                {/* ReCAPTCHA */}
                <FormField
                    control={form.control}
                    name="captcha"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ReCAPTCHA
                                    sitekey="6LfKkCUrAAAAAERkmg83_GzpKKInWJ4zAaqtbO0K"
                                    onChange={(token: string | null) => field.onChange(token)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Согласие на обработку данных */}
                <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                        <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                                <input
                                    type="checkbox"
                                    id="consent"
                                    className="mt-1"
                                    checked={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <div className="flex flex-col">
                                <FormLabel
                                    htmlFor="consent"
                                    className="text-sm font-normal text-background"
                                >
                                    Я прочитал и даю{" "}
                                    <a
                                        href="/personal-consent"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-blue-600 hover:text-blue-800"
                                    >
                                        согласие на обработку персональных данных
                                    </a>
                                </FormLabel>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <Button
                    className="rounded-[50px] px-10 py-6 text-[20px] tracking-wide bg-mainColor hover:bg-darkMain duration-300 hover:duration-150"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
            </form>
        </Form>
    )
}
