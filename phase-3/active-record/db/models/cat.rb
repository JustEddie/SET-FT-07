class Cat < ActiveRecord::Base
  belongs_to :owner

  # def as_json(options = {})
  #   {
  #     name: name,
  #     age: age,
  #     breed: breed,
  #     owner: owner
  #   }
  # end

  # def to_json(*options)
  #   as_json(*options).to_json(*options)
  # end
end
