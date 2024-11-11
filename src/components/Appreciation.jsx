import ListItem from "./animations/list-item/ListItem";
import { useAppreciation } from "../contexts/appreciationContext";

const Appreciation = ({ charityFunds }) => {
  const { appreciationType } = useAppreciation();
  return (
    <>
      <div className="flex flex-col gap-2 items-center pt-6 container">
        <h1 className="text-xl xl:text-4xl font-lora-regular text-primary">
          {appreciationType === "quyen-gop"
            ? "Cảm ơn các bạn đã quyên góp"
            : "Cảm ơn các bạn đã tham gia"}
        </h1>
        <span className="text-xs xl:text-xl">
          {appreciationType === "quyen-gop"
            ? '"Từ bi sẻ chia ươm mầm ước mơ"'
            : '"Chung tay vì nụ cười trẻ thơ, cùng nhau gieo mầm từ bi"'}
        </span>
        <div className="flex flex-col gap-4 py-3">
          <p className="text-sm">
            {appreciationType === "quyen-gop"
              ? "Chúng tôi xin chân thành cảm ơn tấm lòng nhân ái và sự hỗ trợ quý báu từ bạn. Sự đóng góp của bạn sẽ trực tiếp giúp đỡ các trẻ em mồ côi và nhà chùa, mang đến cho các em một cuộc sống tốt đẹp hơn và những cơ hội mới. Nhờ vào sự quan tâm của những người như bạn, chúng tôi có thể tiếp tục sứ mệnh hỗ trợ và lan tỏa yêu thương. Chúc bạn và gia đình luôn gặp nhiều may mắn, hạnh phúc và bình an."
              : "Chúng tôi vô cùng cảm kích trước tinh thần thiện nguyện và sự sẵn lòng cống hiến của bạn. Đăng ký của bạn đã được ghi nhận, và chúng tôi sẽ gửi thông tin chi tiết về chương trình qua email trong vòng 3-5 ngày làm việc tới. Sự tham gia của bạn sẽ giúp mang lại những điều tốt đẹp hơn cho các trẻ em mồ côi và ngôi chùa. Chúng tôi mong chờ được cùng bạn chung tay trong suốt cuộc hành trình."}
          </p>
          <span className="text-sm font-semibold">
            {appreciationType === "quyen-gop"
              ? "Trân trọng cảm ơn!"
              : "Xin chân thành cảm ơn và hẹn gặp bạn sớm!"}
          </span>
        </div>
      </div>

      <ListItem
        title={"Hoàn cảnh quyên góp"}
        type={"charity_funds"}
        items={charityFunds}
        padding={"py-8"}
      />
    </>
  );
};

export default Appreciation;
