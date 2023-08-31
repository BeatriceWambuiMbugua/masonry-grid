import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className=" masonry mt-10">
        <div className="self-start col-span-1 row-span-1 ">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-100  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-100">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-300">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imagetwo.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Wilson Kinyua</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  In this code, we use the grid class to define a grid
                  container. We set the number of columns using grid-cols-4 and
                  let the rows automatically adjust their height with
                  grid-rows-auto. F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600 max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  In this code, we use the grid class to define a grid
                  container. We set the number of columns using grid-cols-4 and
                  let the rows automatically adjust their height with
                  grid-rows-auto. F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  In this code, we use the grid class to define a grid
                  container. We set the number of columns using grid-cols-4 and
                  let the rows automatically adjust their height with
                  grid-rows-auto. F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600 max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  In this code, we use the grid class to define a grid
                  container. We set the number of columns using grid-cols-4 and
                  let the rows automatically adjust their height with
                  grid-rows-auto. F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600  max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  In this code, we use the grid class to define a grid
                  container. We set the number of columns using grid-cols-4 and
                  let the rows automatically adjust their height with
                  grid-rows-auto. F
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start col-span-1 row-span-1">
          <div className="text-white whitespace-normal border border-gray-600 mb-2.5 p-0.5 block relative overflow-hidden rounded-xl">
            <div className="z-10 w-full h-full rounded-xl py-7 px-10 relative overflow-hidden">
              <Link href="" className="flex gap-4 text-gray-600 max-w-full">
                <Image
                  src={"/imageone.webp"}
                  width={120}
                  height={120}
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <p className="text-base">Beatrice Wambui</p>
                  <p className="text-xs text-gray-400">Technical Mentor</p>
                </div>
              </Link>
              <div className="mt-12">
                <p className="text-base text-gray-600">
                  This is me attempting to build a masonry grid
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
