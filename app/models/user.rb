class User < ApplicationRecord
  broadcasts_to -> (_) { "users" }, inserts_by: :append, target: "users"

  def full_name
    "#{name} #{last_name}"
  end
end
