"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    const imgUrl = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/placeholder.png`
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Dale a tus
                            <span className="block degradedBlue bg-red-300">
                                uñas el cuidado
                            </span>
                            que merecen
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Servicios de manicura de alta calidad</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-red-300">Contactanos</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src={imgUrl} alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
