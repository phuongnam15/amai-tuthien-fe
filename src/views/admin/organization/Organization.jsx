import { useState } from "react";
import {
  searchOrganization,
  getListOrganization,
  saveOrganization,
} from "../../../api/adminApi";

const Organization = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [isSearchScreen, setIsSearchScreen] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [organization, setOrganization] = useState([]);

  const handleSearchOrganization = async () => {
    try {
      const input = {
        keyword: organizationName,
      };
      const response = await searchOrganization(input);
      if (response) {
        setOrganization(response?.data?.list);
      }
    } catch (error) {
      console.log(error?.response?.data?.error_msg);
    }
  };
  const handleGetListOrganization = async () => {
    try {
      const response = await getListOrganization();
      if (response) {
        console.log(response);
        setOrganizations(response?.data?.data);
      }
    } catch (error) {
      console.log(error?.response?.data?.error_msg);
    }
  };

  const handleSaveOrganization = async (input) => {
    try {
      const response = await saveOrganization(input);
      if (response) {
        handleGetListOrganization();
        console.log("lưu thành công");
      }
    } catch (error) {
      console.log(error?.response?.data?.error_msg);
    }
  };

  useState(() => {
    handleGetListOrganization();
  }, []);

  return (
    <>
      {!isSearchScreen ? (
        <>
          <button
            onClick={() => setIsSearchScreen(true)}
            className="bg-green-600 text-white p-2 mb-2 rounded-md hover:bg-green-700 transition-colors duration-100"
          >
            Tìm kiếm tổ chức
          </button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Tên
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                    Ảnh
                  </th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((post) => (
                  <tr key={post?.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {post.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {post?.username}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <img
                        src={post?.profilePhoto}
                        alt="thumbnail"
                        className="w-32 h-auto object-cover"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          perPage={perPage}
          totalItems={totalPosts}
        /> */}
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-end mb-3">
            <button
              onClick={() => setIsSearchScreen(false)}
              className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-colors duration-100"
            >
              Quay lại
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <input
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              type="text"
              className="outline-none border border-gray-200 rounded-md p-2"
              placeholder="Nhập tên tổ chức"
            />
            <button
              onClick={handleSearchOrganization}
              className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-100"
            >
              Search
            </button>
          </div>
          {organization.map((item) => {
            return (
              <div className="mt-4 p-4 border rounded-md shadow-md bg-white">
                <h2 className="text-lg font-semibold">
                  Thông tin doanh nghiệp
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-2">
                    <img
                      src={item.profilePhoto.small.url}
                      alt="Profile"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-md font-bold">{item.fullname}</p>
                      <p className="text-sm text-gray-600">
                        Username: {item.username}
                      </p>
                      <p className="text-sm text-gray-600">ID: {item.id}</p>
                      <p className="text-sm text-gray-600">
                        Verified:{" "}
                        {item.verified ? (
                          <span className="text-green-500">✔️</span>
                        ) : (
                          <span className="text-red-500">●</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveOrganization(item)}
                    className="bg-purple-500 rounded-md p-2 text-white"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Organization;
