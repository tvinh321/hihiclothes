import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedStylists = () => {
  const itemsPerPage = 4;

  const stylistList = [
    {
      id: 1,
      name: "Xii Tran",
      img: `https://i.pravatar.cc/150?img=32`,
      description:
        "A professional stylist with 10 years of experience. She has worked with many celebrities and has a great reputation in the industry.",
      keywords: ["chic", "elegant", "artsy"],
    },
    {
      id: 2,
      name: "Quan Lee",
      img: `https://i.pravatar.cc/150?img=59`,
      description:
        "Not only is he a professional stylist, but he is also a fashion designer and a clothing shop owner.",
      keywords: ["sporty", "biker", "streetwear"],
    },
    {
      id: 3,
      name: "Nguyen Cong Hoan",
      img: `https://i.pravatar.cc/150?img=54`,
      description:
        "Hoan has won many awards for his work as a stylist. He is a very talented stylist and has a great reputation in the industry.",
      keywords: ["rock", "biker", "gothic"],
    },
    {
      id: 4,
      name: "Amber Hoa Le",
      img: `https://i.pravatar.cc/150?img=44`,
      description:
        "Amber is the founder of famous local clothing brand, Amber's Closet. She has worked as a fashion stylist for 5 years.",
      keywords: ["boho", "artsy", "girly"],
    },
    {
      id: 5,
      name: "Vivian Nguyen",
      img: `https://i.pravatar.cc/150?img=49`,
      description:
        "Vivian graduated from the Fashion Institute of Technology in New York. She has worked as a stylist for 5 years.",
      keywords: ["artsy", "boho", "garconne"],
    },
    {
      id: 6,
      name: "minnie de first",
      img: `https://i.pravatar.cc/150?img=31`,
      description:
        "minnie is a young and talented Korean stylist. She has worked with many singers and has a great reputation in the industry.",
      keywords: ["chic", "artsy", "kawaii"],
    },
    {
      id: 7,
      name: "Nguyen Tri",
      img: `https://i.pravatar.cc/150?img=11`,
      description:
        "Tri is the founder of Gentleman, a famous brand of men's bussiness clothing. He has worked as a stylist for 5 years.",
      keywords: ["bussiness", "formal", "classic"],
    },
    {
      id: 8,
      name: "Andrew Nguyen",
      img: `https://i.pravatar.cc/150?img=53`,
      description:
        "Andrew is the co-founder of Gentleman, a famous brand of men's bussiness clothing. He has worked as a stylist for 5 years.",
      keywords: ["bussiness", "formal", "classic"],
    },
    {
      id: 9,
      name: "Aaron Chau",
      img: `https://i.pravatar.cc/150?img=8`,
      description:
        "Aaron studied abroad in the United States and has worked as a stylist of Amber's Closet for 7 years.",
      keywords: ["boho", "vintage", "chic"],
    },
    {
      id: 10,
      name: "tyty",
      img: `https://i.pravatar.cc/150?img=43`,
      description:
        "tyty is one of the stylists of Miss Universe Thailand 2019. She has worked as a stylist for 5 years.",
      keywords: ["artsy", "boho", "vintage"],
    },
    {
      id: 10,
      name: "Le Hoa",
      img: `https://i.pravatar.cc/150?img=52`,
      description:
        "Hoa has worked as a stylist in Melbourne, Australia for 5 years before coming back to Vietnam",
      keywords: ["boho", "chic", "lagenlook"],
    },
    {
      id: 11,
      name: "Anh Hoang",
      img: `https://i.pravatar.cc/150?img=1`,
      description:
        "Anh Hoang graduated from the Fashion Institute of Technology in New York with the highest score in 2019. ",
      keywords: ["business", "artsy", "elegance"],
    },
    {
      id: 12,
      name: "Mi Loo",
      img: `https://i.pravatar.cc/150?img=48`,
      description:
        "With the love of rock music, Loo grown her own brand of rock clothing. She has worked as a stylist for 5 years.",
      keywords: ["rock", "hiphop", "modern"],
    },
    {
      id: 13,
      name: "Trang Pham",
      img: `https://i.pravatar.cc/150?img=21`,
      description:
        "Trang has her own academy of fashion design, where she teaches students how to design and sew clothes.",
      keywords: ["girly", "artsy", "trendy"],
    },
    {
      id: 14,
      name: "Min Mieu",
      img: `https://i.pravatar.cc/150?img=40`,
      description:
        "Min Mieu has won the first prize in Cosplay competition in 2019 and was the runner-up in 2020.",
      keywords: ["kawaii", "girly", "trendy"],
    },
    {
      id: 15,
      name: "Andrew Smith",
      img: `https://i.pravatar.cc/150?img=50`,
      description:
        "He was the stylist for many music videos and has worked with many famous singers.",
      keywords: ["sporty", "streetwear", "chic"],
    },
    {
      id: 16,
      name: "BaoAn Nguyen",
      img: `https://i.pravatar.cc/150?img=38`,
      description:
        "BaoAn is the young stylist for many famous movies and has worked with many famous actors.",
      keywords: ["elegance", "sexy", "artsy"],
    },
    {
      id: 18,
      name: "Minh Anh",
      img: `https://i.pravatar.cc/150?img=33`,
      description:
        "Besides being an actor, Minh Anh is also a well-known stylist for many movies. He has worked with many famous actors.",
      keywords: ["streetwear", "sporty", "minimalism"],
    },
  ];

  function Items({ currentItems }) {
    return (
      <div className=" w-10/12 mx-auto flex items-center justify-center gap-x-14">
        {currentItems &&
          currentItems.map((item, index) => (
            <div class="w-60 rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src={item.img}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.name}</div>
                <p class="text-gray-700 text-base">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                {item.keywords.map((keyword) => (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = stylistList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(stylistList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % stylistList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        className="flex justify-center items-center gap-x-6 mt-10 text-hihiclothes-1 font-bold"
      />
    </>
  );
};

export default PaginatedStylists;
