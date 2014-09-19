# == Schema Information
#
# Table name: galleries
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  cover       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  token       :string(255)
#

class Gallery < ActiveRecord::Base

  has_many :pictures, :dependent => :destroy
end
