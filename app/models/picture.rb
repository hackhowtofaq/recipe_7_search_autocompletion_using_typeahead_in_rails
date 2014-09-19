# == Schema Information
#
# Table name: pictures
#
#  id                 :integer          not null, primary key
#  description        :string(255)
#  image              :string(255)
#  gallery_id         :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  gallery_token      :string(255)
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Picture < ActiveRecord::Base

  belongs_to :gallery

  has_attached_file :image,
    :path => ":rails_root/public/images/:id/:filename",
    :url  => "/images/:id/:filename"

  do_not_validate_attachment_file_type :image

end
