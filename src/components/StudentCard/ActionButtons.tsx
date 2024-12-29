import React from 'react';
import { LikeButton } from './LikeButton';
import { TalkButton } from './TalkButton';

type ActionButtonsProps = {
  isLiked: boolean;
  onLikeToggle: () => void;
  onTalkClick: () => void;
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isLiked,
  onLikeToggle,
  onTalkClick,
}) => {
  return (
    <div className="flex gap-3">
      <LikeButton isLiked={isLiked} onToggle={onLikeToggle} />
      <TalkButton onClick={onTalkClick} />
    </div>
  );
};