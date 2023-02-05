import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MessagePage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]">
          <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col gap-[50px] items-start justify-start p-[18px] w-[100%]">
            <div className="flex flex-row gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] mt-[16px] md:w-[100%] sm:w-[100%] w-[67%]">
              <Img
                src="images/logo.png"
                className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                alt="Ellipse1015"
              />
              <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] w-[62%]">
                <Text
                  className="font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Vibe.3
                </Text>
                <Text
                  className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  @NASA
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-black_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_clock_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_user_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium mt-[5px] text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Community
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/settings")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  Market
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/market")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[41%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[24px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/activebid")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/upload.svg"
                        className="h-[24px] w-[24px]"
                        alt="judge"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upload
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/saved")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[39%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock One"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Liked Songs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  MY PROFILE
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilecollection")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="user Two"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilewallet")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[38%]">
                      <Img
                        src="images/img_computer.svg"
                        className="h-[24px] w-[24px]"
                        alt="computer"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilehistory")}
                  >
                    {/* <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[40%]">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock Two"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        History
                      </Te>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist h-[258px] md:h-[261px] sm:h-[261px] mb-[17px] md:ml-[0] sm:ml-[0] ml-[16px] relative md:w-[100%] sm:w-[100%] w-[88%]">
              <div className="absolute bg-gray_900 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-radius15 w-[234px]"></div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                <Button
                  className="flex h-[50px] items-center justify-center rounded-radius50 w-[50px]"
                  size="lgIcn"
                  variant="icbOutlineGray5003f"
                >
                  <Img
                    src="images/img_question.svg"
                    className="h-[24px]"
                    alt="question"
                  />
                </Button>
                <Text
                  className="font-semibold mt-[14px] text-left text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Help Center
                </Text>
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[12px] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Having trouble in Enefti?
                    <br />
                    Please contact us for more question
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[206px] text-[14px] text-center text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Go To Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        

                    
            div
          <div className="head">
            <h1>Join our Community</h1>
          </div>
        <div className="msg1">
                    <p className="p1">Join the rhythm of a united beat</p>
                    <p className="p1">and find the people having same vibes</p>
        </div>


        <div>
          {/* <button className="button">Join The Hub</button> */}
        </div>

        <div>
          <button className="button">Find your vibe</button>
        </div>

        <div className="image-back">
          <Img
           src="Images/back-img.png"
            alt="background-img"
            className="background-img" />
        </div>

        {/* <div className="last">
                <p>Empower your music collection with the security and transparency of blockchan!</p>
               <p>Join the future of music streaming and support your favorite artists directly !</p>

              <p>Be part of the community where music and blockchain meet!</p>
        </div> */}
      


      </div>
      <div hig className="bg-gradient  flex flex-col gap-[34px] items-start justify-center p-[30px] sm:px-[20px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[14px] items-start justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[77%]">
                      <Text
                        className="text-left text-white_A700 tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <p className="foot1">We vibe with everyone - feel free to connect !</p>
                        <p className="connect">@nandanpathakk</p>
                        <p className="connect">@Shah__Sarthak</p>
                        <p className="connect">@saumyajeet_6103</p>
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700_a2 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                      </Text>
      </div>
      </div>
 
    </>

  );
};

export default MessagePage;
