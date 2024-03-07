import React from "react";

function Sentiment() {
  return (
    <>
      <div className="flex my-6  flex-col px-6 pt-7 pb-12 bg-white rounded-lg w-full max-md:px-5">
        <div className="text-2xl font-semibold leading-7 text-slate-900 max-md:max-w-full">
          Sentiment
        </div>
        <div className="flex gap-1.5 justify-start pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap  max-md:pr-5 ">
          <div className="">Key Events</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcfa675217f62cddcc7d5620b928a189ac291b85ba7bc0fa6cd5af3417888cc?"
            className="w-5 aspect-square"
          />
        </div>
        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch px-5 pt-5 pb-10 w-full text-sm leading-5 bg-indigo-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5 max-md:max-w-full">
                <div className="flex gap-2 justify-between py-px">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65af558a92e5fa5e48309d4cbe602361ca48bc66829d63eebc7196712ce4031?"
                    className="self-start w-11 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-zinc-900">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis
                      dignissim mattis enim tincidunt.
                    </div>
                    <div className="mt-2 text-slate-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                      est faucibus metus quis. Amet sapien quam viverra
                      adipiscing condimentum. Ac consectetur et pretium in a
                      bibendum in. Sed vitae sit nisi viverra natoque lacinia
                      libero enim.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch pt-5 pb-10 pl-5 mx-auto w-full text-sm leading-5 bg-emerald-50 rounded-xl border-0 border-solid border-[color:var(--www\_indstocks\_com\_stocks\_zomato-ltd-share-price\_1440x810\_default-Solitude,#E8F4FD)] max-md:mt-3.5">
                <div className="flex gap-2 justify-between py-px">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9cbaad8305734893e92aa1696df0fb017f2463eab9155cc992926558850a29?"
                    className="self-start w-11 aspect-square"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-medium text-zinc-900">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis
                      dignissim mattis enim tincidunt.
                    </div>
                    <div className="mt-2 text-slate-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                      est faucibus metus quis. Amet sapien quam viverra
                      adipiscing condimentum. Ac consectetur et pretium in a
                      bibendum in. Sed vitae sit nisi viverra <br />
                      in a adipisinc metus quis del
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 justify-start pr-20 mt-6 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap  max-md:pr-5 ">
          <div className="">Analyst Estimates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5df1b26288b9b075358355c6de9bbdcfea14843aff5481756f9489aaf39fc4b?"
            className="w-5 aspect-square"
          />
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-9 py-8 h-32 w-32 mx-auto  font-medium text-emerald-500 whitespace-nowrap bg-emerald-50 rounded-full ">
                <div className="flex gap-0.5 justify-between py-1.5">
                  <div className="grow text-4xl">76</div>
                  <div className="grow my-auto text-base leading-6">%</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow self-stretch my-auto font-medium text-gray-500 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                <div className="flex  justify-between py-2 max-md:flex-wrap max-md:max-w-full items-center">
                  <div className="text-base w-[5%] leading-6">Buy</div>
                  <div className="my-auto max-w-full h-2 bg-emerald-500 rounded-sm w-[349px]" />
                  <div className="flex-auto text-sm leading-5 ml-2">76%</div>
                </div>
                <div className="flex  justify-between py-2 max-md:flex-wrap max-md:max-w-full items-center">
                  <div className="text-base w-[5%]  leading-6">Hold</div>
                  <div className="my-auto max-w-full h-2 bg-gray-500 rounded-sm w-[25px]" />
                  <div className="flex-auto text-sm leading-5 ml-2">8%</div>
                </div>
                <div className="flex  justify-between py-2 max-md:flex-wrap max-md:max-w-full items-center">
                  <div className="text-base w-[5%]  leading-6">Sell</div>
                  <div className="my-auto max-w-full h-2 bg-red-500 rounded-sm w-[65px]" />
                  <div className="flex-auto text-sm leading-5 ml-2">16%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sentiment;
