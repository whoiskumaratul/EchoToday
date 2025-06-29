import React, {useState, useEffect} from 'react'
import IMAGES from '../../../assets/Images';
//import IMAGES from '../../images/Images';
//import tech from '../../data/tech.json'; // Assuming you have a JSON file with tech data
import politics from '../../../data/politics/politics.json'; // Adjust the path as needed
import { IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import ForYou from '../../forYou/ForYou'; // Adjust the import path as needed
//import Navbar from '../navbar/Navbar'; // Adjust the import path as needed
import Navbar from '../../navbar/Navbar'; // Adjust the import path as needed


const PoliticsCard = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(politics);

  useEffect(() => {
    const filtered = politics.filter(article =>
      // article.title.toLowerCase().includes(searchTern.toLowerCase()) ||
      // article.description.toLowerCase().includes(searchTern.toLowerCase())

       article.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredArticles(filtered);
  }, [searchTerm]);

  
 const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem('bookmarks');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleBookmark = (id) => {
    let updatedBookmarks;
    if (bookmarks.includes(id)) {
      updatedBookmarks = bookmarks.filter((b) => b !== id);
    } else {
      updatedBookmarks = [...bookmarks, id];
    }

    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };





  const navigate = useNavigate();
  return (
    <div>

    <Navbar onSearch={setSearchTerm} />

     <ForYou />
    
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1280px] lg:mx-auto mr-2 gap-6 p-4 min-h-screen mt-5">
        {filteredArticles.map((article) => {
          const isBookmarked = bookmarks.includes(article.title);

          return (
            <div
              key={article.id}
              className="bg-[#1a1a1a] cursor-pointer rounded-lg shadow-md p-4 text-white flex flex-col justify-between"
            >
    
    {/* Header */}
    <div onClick={() => navigate(article.path)}>
   <div className="flex items-center gap-2 mb-2">
            <img
               src={IMAGES[article.image]}
               
              alt="publisher"
              className="w-6 h-6 rounded-full"
            />
            <div className="text-sm">
              <span className="font-semibold hover:text-yellow-400">{article.publisher}</span>{" "}
              <span className="text-gray-400">
                EchoToday into {article.section}
              </span>
            </div>
          </div>

          {/* Image */}
          <img
             src={IMAGES[article.image]}
            alt={article.title}
            className="rounded-md w-full h-48 object-cover mb-3"
          />

          {/* Meta Info */}
          <p className="text-sm text-gray-400 mb-1">{article.time}</p>

          {/* Title */}
          <h2 className="text-lg font-bold leading-snug mb-1">
            {article.title}
          </h2>

          {/* Source & Author */}
          <p className="text-sm text-gray-300 mb-2">
            {article.source} – {article.author}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-400 line-clamp-3 mb-4">
            {article.description}
          </p>
          </div>

          {/* Actions */}
          <div className="flex justify-between text-gray-400 border-t border-gray-700 pt-3 text-sm">
            <div className="flex gap-4">
              <span className="flex items-center gap-1 cursor-pointer hover:text-white">
                ❤️ {article.likes}
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-white">
                💬 {article.comments}
              </span>
              
            </div>
             <span
                  onClick={() => toggleBookmark(article.title)}
                  className={`cursor-pointer hover:text-white ${
                    isBookmarked ? 'text-yellow-400' : ''
                  }`}
                  title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
                >
                  <IoBookmarkOutline />
                </span>

          </div>
        </div>
          );
        })}
    </div>
    </div>

  );
};

export default PoliticsCard;