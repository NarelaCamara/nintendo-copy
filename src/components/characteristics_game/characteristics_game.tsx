import React from "react";

const CharacteristicsGame = () => {
  const characteristics = [
    "Release date",
    "No. of players",
    "Genre",
    "Publisher",
    "Developer",
    "ESRB rating",
    "Supported play modes",
    "Game file size",
    "Supported languages",
  ];

  const characteristics_ = [
    "October 5, 2017",
    "Single System (1)Local wireless (1) Online (1-4)",
    "Role-playing Simulation",
    "ConcernedApe",
    "ConcernedApe",
    "Everyone 10",
    "TV mode, Tabletop mode, Handheld mode",
    "1.6 GB",
    "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
  ];

  const unirDosArrays = () => {
    return characteristics.map((e, i) => {
      return { text: e, value: characteristics_[i] };
    });
  };

  return (
    <>
      {unirDosArrays().map(({ text, value }) => {
        return (
          <div key={text}>
            <div className=" flex flex-row flex-nowrap justify-start   p-2">
              <div className="  w-1/2 ">
                <p>{text}</p>
              </div>

              <div className=" w-2/2  ">
                <p>{value}</p>
              </div>
            </div>
            <div className="m-1">
              <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CharacteristicsGame;
