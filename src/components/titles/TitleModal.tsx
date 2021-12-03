import React, { FC } from 'react';

type Props = {
    text: string;
};

const TitleModal: FC<Props> = ({text}) => {
    return (
        <div className="my-5">
            <h3 className="text-center font-bold text-4xl capitalize">
                {text}
            </h3>
            <hr className="h-1 mt-2 bg-red-400 w-12 mx-auto rounded-full" />
        </div>
    );
};

export default TitleModal;