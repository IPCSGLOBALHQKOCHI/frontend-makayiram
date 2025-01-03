import { useState } from 'react';

interface ReadMoreProps {
  text: string;
  limit: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (isExpanded) {
      return text;
    }

    const words = text.split(' ');
    if (words.length <= limit) {
      return text;
    }

    return words.slice(0, limit).join(' ') + '...';
  };

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: renderText() }} className='activity'></p>
      {text.split(' ').length > limit && (
        <button onClick={toggleReadMore} className='text-sm text-blue-500 font-semibold'>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
