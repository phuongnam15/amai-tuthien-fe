import useCheckScreen from "../../utils/hooks/useCheckScreen";
import TopImage from "../../components/TopImage";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import banner from "../../assets/images/backgrounds/banner.webp";
import banner2 from "../../assets/images/backgrounds/banner2.webp";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const questions = [
  {
    title: "Tâm bồ đề là gì?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Tôi Đi Từ Thiện có thu lợi nhuận từ việc gây quỹ không?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title:
      "Sau bao lâu kể từ khi quyên góp, tiền sẽ được chuyển đến tay hoàn cảnh?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Làm thế nào để liên hệ và gửi hoàn cảnh tới Tôi Đi Từ Thiện?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
  {
    title: "Nếu hoàn cảnh gây quỹ không thành công thì sao?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nisi ullam ipsam pariatur ipsum quam odio, illum, provident libero sint doloremque recusandae rem itaque obcaecati, corporis quidem hic voluptatibus cupiditate!",
  },
];

const ContactPage = () => {
  const { isMobileScreen } = useCheckScreen();
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud3} image={banner2} />
      )}
      <div className="w-full bg-white" id="register-section">
        <div className="container">
          <div className="w-full xl:px-[200px] flex flex-col gap-4 xl:gap-6 py-8 xl:py-20">
            <h1 className="text-xl xl:text-4xl font-lora-regular text-center text-primary">
              Thông Tin Liên Hệ
            </h1>
            <span className="text-xs xl:text-base text-center">
              Nếu bạn có câu hỏi cần giải đáp, chúng tôi rất sẵn lòng trò chuyện
              cùng bạn. Hãy điền vào biểu mẫu bên dưới, chúng tôi sẽ liên hệ lại
              trong thời gian sớm nhất.
            </span>
            <input type="text" placeholder="Họ và tên" className="form-input" />
            <div className="flex flex-row gap-4 xl:gap-6">
              <input
                type="text"
                placeholder="Tổ chức"
                className="form-input min-w-0 flex-1"
              />
              <input
                type="text"
                placeholder="Chức danh"
                className="form-input min-w-0 flex-1"
              />
            </div>
            <div className="flex flex-row gap-4 xl:gap-6">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="form-input min-w-0 flex-1"
              />
              <input
                type="text"
                placeholder="Email"
                className="form-input min-w-0 flex-1"
              />
            </div>
            <input type="text" placeholder="Tiêu đề" className="form-input" />
            <textarea
              placeholder="Lời nhắn"
              className="form-input h-[85px] xl:h-[180px]"
            />

            <button className="px-10 xl:px-[45px] py-[7px] xl:py-[10px] rounded-[30px] xl:rounded-[32px] bg-primary text-sm xl:text-base font-semibold self-start text-white">
              Gửi
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white pb-8 xl:pb-[60px]">
        <div className="container flex flex-col xl:gap-[60px]">
          <div className="w-full">
            <h1 className="font-lora-regular text-xl xl:text-4xl text-center text-primary">
              Câu hỏi thường gặp
            </h1>
          </div>
          <div className="relative">
            <div className="absolute hidden xl:block top-0 bottom-0 w-[3px] bg-linear-3"></div>
            <div className="w-full flex flex-col gap-[18px] xl:gap-7 xl:pl-16 py-10">
              {questions.map((item, index) => {
                return (
                  <div className="flex flex-col border-b border-gray-300 xl:border-none pb-3 xl:pb-0">
                    <div
                      onClick={() =>
                        setSelectedQuestion(
                          selectedQuestion === index ? null : index
                        )
                      }
                      className="xl:py-4 cursor-pointer xl:hover:bg-[#F3BC17] transition-all duration-500 xl:px-6 rounded-2xl xl:bg-primary-3 flex justify-between xl:justify-normal gap-5 xl:gap-10 items-center xl:self-start relative"
                    >
                      <div className="absolute hidden xl:block left-0 w-[30px] h-[30px] rounded-full bg-[#F3BC17] top-1/2 -translate-y-1/2 -translate-x-[77.5px]"></div>
                      <span className="font-semibold text-base xl:text-xl">
                        {item.title}
                      </span>
                      {selectedQuestion === index ? (
                        <FiChevronDown className="text-2xl xl:text-3xl flex-shrink-0" />
                      ) : (
                        <FiChevronRight className="text-2xl xl:text-3xl flex-shrink-0" />
                      )}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        selectedQuestion === index ? "max-h-[200px]" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm xl:text-base xl:border-[#404040] xl:pt-3 mt-3 xl:border-t xl:border-opacity-50">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
