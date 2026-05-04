import {
  FACEBOOK_ICON,
  FACEBOOK_LINK,
  ZALO_ICON,
  ZALO_LINK,
} from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";

export async function SocialLinks() {
  return (
    <>
      <Link href={FACEBOOK_LINK} target="_blank" className="text-gray-500">
        <Image
          width={40}
          height={40}
          src={FACEBOOK_ICON}
          alt="facebook"
          title="facebook"
          className="md:size-10 size-8"
          loading="lazy"
        />
      </Link>
      <Link href={ZALO_LINK} target="_blank" className="text-gray-500">
        <Image
          width={40}
          height={40}
          src={ZALO_ICON}
          alt="zalo"
          title="zalo"
          className="md:size-10 size-8"
          loading="lazy"
        />
      </Link>
    </>
  );
}
