'use client'

import Link from "next/link"

const angle = (cx: any, cy: any, ex: any, ey: any) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const anchor = document.getElementById('anchor');
    const rekt = anchor?.getBoundingClientRect();
    const anchorX = rekt?.left + rekt?.width / 2;
    const anchorY = rekt?.top + rekt?.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    const pointDiv = document.getElementById('point');
    pointDiv.style.transform = `rotate(${180 + angleDeg}deg)`
})

export default function Nav() {
    return (
        <div className="flex w-full h-16 pt-10 pb-10 bg-primary justify-center fixed border-b-4 z-0">
            <div className="flex items-center gap-12 justify-evenly">
                <div className="flex gap-12">
                    <Link href={``} className="capitalize hover:text-red-600">Home</Link>
                    <Link href={``} className="capitalize hover:text-red-600">About</Link>
                </div>
                <div id="anchor" className="w-16 h-16 rounded-full relative flex justify-center items-center">
                    <div id="point" className="point">
                        {/* <h1 className="font-bold">.</h1> */}
                        <img src="/ship.png" />
                    </div>
                </div>
                <div className="flex gap-12">
                    <Link href={``} className="capitalize hover:text-red-600">Projects</Link>
                    <Link href={``} className="capitalize hover:text-red-600">Contact</Link>
                </div>
            </div>
        </div >
    )
}