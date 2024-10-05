import Image from "next/image";

export function BackgroundRadialLeft() {
    const imgUrl = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/background-floated-left.png`
    return (
        <div className="left-0 absolute -z-50 top-0">
            <Image src={imgUrl} width={850} height={650} alt="Circle Left" />
        </div>
    )
}
