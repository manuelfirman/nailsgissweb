import Image from "next/image";

export function BackgroundRadialRight() {
    const imgUrl = `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/background-floated-right.png`
    return (
        <div className="right-0 absolute -z-50 top-0">
            <Image src={imgUrl} width={850} height={650} alt="Circle Right" className="filter hue-rotate-270"/>
        </div>
    )
}
