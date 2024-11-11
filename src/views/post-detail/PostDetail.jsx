import { useState } from "react";
import facebook from "../../assets/images/icons/Facebook.svg";
import messenger from "../../assets/images/icons/Messenger.svg";
import instagram from "../../assets/images/icons/Instagram.svg";
import zalo from "../../assets/images/icons/zalo.svg";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: id,
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Tiêu đề bài viết",
      thumb:
        "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      title: "Tiêu đề bài viết",
      thumb:
        "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      title: "Tiêu đề bài viết",
      thumb:
        "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      title: "Tiêu đề bài viết",
      thumb:
        "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  return (
    <div className="w-full bg-white pt-6 pb-16 xl:pt-10 xl:pb-[120px]">
      <div className="container">
        <div className="flex flex-col xl:grid xl:grid-cols-8 gap-16 xl:gap-20 w-full">
          <div className="xl:col-span-5 flex flex-col">
            <div className="flex flex-col xl:flex-row xl:items-end xl:h-[2.5rem] mb-6 w-full gap-3">
              <span className="text-primary text-sm xl:hidden tracking-wider">
                {/* {new Date(post?.created_at).toLocaleDateString("en-GB")} */}
                20/11/2010
              </span>
              <h1 className="text-[1.5rem] xl:text-[2rem] font-bold leading-none">
                {/* {post?.title} */}
                Tiêu đề bài viết
              </h1>
            </div>

            <div className="border-t border-primary-4 border-b xl:border-b-0 border-opacity-50 flex-grow mb-5 xl:mb-0">
              <div className="flex flex-col gap-7 pt-6 xl:pt-8 pb-5 xl:pb-20">
                <span className="text-primary-1 hidden xl:block">
                  {/* {new Date(post?.created_at).toLocaleDateString("en-GB")} */}
                  20/11/2010
                </span>
                <div
                  className="max-w-full font-light tracking-wide text-sm xl:text-base"
                  // dangerouslySetInnerHTML={{ __html: post?.content }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium error maxime aliquam! Saepe nisi nesciunt debitis
                  ad beatae voluptatibus excepturi dolorum? Nam sit eligendi
                  suscipit voluptatem reprehenderit et porro aut?

                  <img src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="mt-2 xl:mt-3" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <h1 className="font-semibold text-lg">SHARE:</h1>
              <div className="flex gap-2">
                <img src={facebook} alt="facebook" />
                <img src={messenger} alt="messenger" />
                <img src={instagram} alt="instagram" />
                <img src={zalo} alt="zalo" />
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 flex flex-col">
            <div className="flex items-end h-[2.5rem] mb-3 xl:mb-6">
              <h1 className="text-2xl xl:text-[1rem] font-bold xl:font-light leading-none">
                Bài viết liên quan
              </h1>
            </div>
            <div className="flex flex-col xl:gap-4 xl:border-t xl:border-primary-4 xl:border-opacity-50 pt-5 xl:pt-8 flex-grow">
              {posts.slice(1, 5).map((post, index) => (
                <div
                  key={post.id}
                  className={`flex gap-2 ${
                    index > 0 ? "border-opacity-30 pt-5 xl:pt-8" : ""
                  }`}
                >
                  <div className="flex-1 relative h-[8rem] xl:h-[8rem]">
                    <img
                      src={post?.thumb}
                      alt="pride"
                      style={{ objectFit: "cover" }}
                      fill={true}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <h1 className="font-light line-clamp-2 overflow-hidden cursor-pointer hover:underline transition-all duration-300">
                      {post?.title}
                    </h1>
                    <span className="text-primary-1">
                      {new Date(post?.created_at).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
