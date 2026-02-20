
import Image from 'next/image';

export default function Logo({ className = "w-8 h-8", priority = false }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/johnnyDEV_FAVICON lime.png"
                alt="JohnnyDEV Logo"
                fill
                className="object-contain"
                priority={priority}
            />
        </div>
    );
}
