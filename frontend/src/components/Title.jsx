import React from "react";

const Title = ({ text1, text2, subtitle }) => {
    return (
        <div className="text-center my-16 px-4">

            <div className="flex items-center justify-center mb-6">
                <div className="flex-1 max-w-[250px] h-[2px] bg-gray-300"></div>

                <h2 className="mx-4 text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
                    {text1}{" "}
                    <span className="text-blue-600">
                        {text2}
                    </span>
                </h2>

                <div className="flex-1 max-w-[250px] h-[2px] bg-gray-300 "></div>
            </div>

            {subtitle && (
                <p className="text-gray-500/90 text-xs sm:text-lg md:text:sm max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default Title;
