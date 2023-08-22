import { Icons, Images } from '@/constants';
import { CommentType } from '../types';
import clsx from 'clsx';
import { dateUtils } from '@/utils';

interface CommentItemProps {
  comment: CommentType.Type;
  className?: string;
}

const USER = {
  WITHCH: {
    name: 'Scarlet withch',
    avatar: Images.USER_AVATAR_1,
  },
  KATE: {
    name: 'Kate Moss',
    avatar: Images.USER_AVATAR_2,
  },
};

export const CommentItem = ({ comment, className }: CommentItemProps) => {
  const { content, createdAt, replies, userId } = comment;
  const user = userId === '1' ? USER.WITHCH : USER.KATE;
  return (
    <div className={clsx('flex', className)}>
      <div className="">
        <img src={user.avatar} alt="" className="h-[70px] w-[70px]" />
      </div>
      <div className="ml-2 flex-1 overflow-hidden">
        <div className="flex flex-wrap">
          <p className="font-body-small mb-2 w-full">{user.name}</p>
          <p className="font-body-small text-darkGray">
            {dateUtils.formatDate(createdAt)}
          </p>
          <button className="font-body-small ml-auto flex items-center">
            <Icons.Reply className="mr-1" /> Reply
          </button>
        </div>
        <div className="mt-4">
          <p className="font-body-small mb-6 text-darkGray">{content}</p>
          {replies.length > 0 &&
            replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} />
            ))}
        </div>
      </div>
    </div>
  );
};
