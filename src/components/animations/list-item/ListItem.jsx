import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import CharityFundCard from "../../CharityFundCard";
import Preschool from "../../Preschool";
import Post from "../../Post";
import Feeling from "../../Feeling";
import { useState } from "react";
import useCheckMobileScreen from "../../../utils/hooks/useCheckMobileScreen";
import SeeMoreButton from "../button/SeeMoreButton";

const ListItem = ({ cloud, bgColor, title, type, items, padding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobileScreen = useCheckMobileScreen();
  const itemsPerPage =
    type === "posts" || type === "feeling"
      ? 1
      : type === "partner" && !isMobileScreen
      ? 4
      : 2;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const getPageItems = (page) => {
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  return (
    <div className={`${bgColor} ${padding} relative overflow-hidden`}>
      {cloud && (
        <div className="absolute w-full top-[90%]">
          <img src={cloud} alt="" className="w-full" />
        </div>
      )}
      <div
        className={`container flex flex-col gap-6 ${
          type === "partner" ? "xl:gap-9" : "xl:gap-[60px]"
        }`}
      >
        {title && (
          <h1
            className={`text-center ${
              type === "partner" || type === "feeling"
                ? ""
                : "text-primary"
            } text-xl xl:text-4xl font-lora-regular ${
              type === "feeling" && "px-14"
            }`}
          >
            {title}
          </h1>
        )}

        {type === "charity_funds" ? (
          isMobileScreen ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px] w-full">
                  {getPageItems(currentPage).map((item, index) => {
                    return <CharityFundCard item={item} index={index} />;
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px]">
              {items.map((item, index) => {
                return <CharityFundCard item={item} index={index} />;
              })}
            </div>
          )
        ) : type === "preschools" ? (
          isMobileScreen ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px] w-full">
                  {getPageItems(currentPage).map((item, index) => {
                    return <Preschool item={item} index={index} />;
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px]">
              {items.map((item, index) => {
                return <Preschool item={item} index={index} />;
              })}
            </div>
          )
        ) : type === "posts" ? (
          isMobileScreen ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px] w-full">
                  {getPageItems(currentPage).map((item, index) => {
                    return (
                      <div className="col-span-6">
                        <Post item={item} index={index} />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="grid grid-cols-6 gap-3 xl:gap-x-6 xl:gap-y-[60px]">
              {items.map((item, index) => {
                return (
                  <div className="col-span-2">
                    <Post item={item} index={index} />
                  </div>
                );
              })}
            </div>
          )
        ) : type === "partner" ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex gap-3 xl:gap-x-6 w-full">
                {getPageItems(currentPage).map((item, index) => {
                  return (
                    <div key={index} className="flex-1">
                      <img src={item.image} alt="" className="w-full" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : type === "feeling" ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex w-full">
                {getPageItems(currentPage).map((item, index) => {
                  return <Feeling item={item} index={index} />;
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          ""
        )}

        {/* dot */}
        {(type === "partner" || type === "feeling") && (
          <div
            className={`${
              type === "partner" && "xl:hidden"
            } flex justify-center gap-1`}
          >
            {[...Array(totalPages)].map((_, i) => (
              <motion.div
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`${
                  currentPage === i + 1
                    ? "bg-primary w-[25px] xl:w-[65px]"
                    : "bg-transparent w-[5px] xl:w-[10px]"
                } ${
                  type === "feeling" && "xl:-mt-[60px] xl:translate-x-4"
                } border-primary border transition-all duration-300 cursor-pointer rounded-full h-[5px] xl:h-[10px] flex justify-center items-center`}
              ></motion.div>
            ))}
          </div>
        )}

        {/* arrow */}
        <div
          className={`${
            type === "partner" || type === "feeling"
              ? "hidden xl:flex justify-end"
              : "xl:hidden justify-center"
          } ${type === "feeling" && "-mt-[152px]"} flex gap-6 relative`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={prevPage}
          >
            <button className="p-1.5 rounded-full border border-primary-4">
              <FiArrowLeft className="text-lg " />
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={nextPage}
          >
            <button className="p-1.5 rounded-full border border-primary-4">
              <FiArrowRight className="text-lg " />
            </button>
          </motion.div>
        </div>

        {/* see more */}
        {!isMobileScreen &&
          (type === "charity_funds" ||
            type === "preschools" ||
            type === "posts") && (
            <SeeMoreButton text={"Xem thêm"} Icon={FiArrowRight} />
          )}
      </div>
    </div>
  );
};

export default ListItem;
