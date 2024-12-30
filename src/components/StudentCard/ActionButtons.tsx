import React from 'react';
import { LikeButton } from './LikeButton';
import { MoreButton } from './MoreButton';

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
      <MoreButton onClick={onTalkClick} />
    </div>
  );
};