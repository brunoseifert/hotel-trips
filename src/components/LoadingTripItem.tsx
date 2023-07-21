import React from 'react'

export const LoadingTripItem = () => {
  return (
    <div className="flex w-full flex-col gap-6 md:mt-10 md:grid md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] md:gap-10">
      {new Array(6).fill('').map((item, index) => {
        return (
          <div key={index} className="flex w-full flex-col gap-[10px] ">
            <div className="h-72 w-full animate-pulse rounded-2xl bg-gray-200 object-cover" />

            <div className="flex flex-col gap-2">
              <h3 className="h-4 animate-pulse rounded-2xl bg-gray-200 text-sm font-medium text-primaryDarker"></h3>
              <div className="flex h-4  animate-pulse items-center gap-2 rounded-2xl bg-gray-200">
                <p className="h-4 animate-pulse  rounded-2xl bg-gray-200 text-xs font-normal text-grayPrimary"></p>
              </div>
              <p className="h-4 animate-pulse rounded-2xl  bg-gray-200 text-sm font-normal text-grayPrimary"></p>
              <p className="h-4 animate-pulse rounded-2xl  bg-gray-200 text-xs font-normal text-grayPrimary">
                <span className="h-4 animate-pulse rounded-2xl  bg-gray-200 font-semibold text-primaryLighter"></span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}