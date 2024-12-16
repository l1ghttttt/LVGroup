"use client"

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/shared/ui/button"
import {
    Form,
    FormControl, FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    bio: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
})

export function OrderForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            phone: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 min-h-full items-stretch relative z-50 w-full py-formSpaceYPadding px-formSpaceXPadding duration-1000 text-white">
                <h3 className={`text-orderContactsSize mb-orderContactsMargin font-semibold text-white`}>Ваши контакты</h3>
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className={`text-[22px]`}>Имя</FormLabel>
                            <FormControl className={`text-white`}>
                                <Input className={`text-white`} placeholder="Имя" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className={`text-[22px]`}>Телефон</FormLabel>
                            <FormControl className={`text-white`}>
                                <Input className={`text-white`} placeholder="+7 (0000) 00-00-00" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <h3 className={`text-orderContactsSize mb-orderContactsMargin font-semibold`}>Расскажите про вашу задачу</h3>
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={`text-[22px]`}>Описание</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Отправить</Button>
            </form>
        </Form>
    )
}
