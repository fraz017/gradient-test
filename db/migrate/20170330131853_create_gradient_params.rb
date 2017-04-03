class CreateGradientParams < ActiveRecord::Migration[5.0]
  def change
    create_table :gradient_params do |t|
      t.string :colorType
      t.string :gradientType
      t.string :position
      t.string :topColor
      t.string :bottomColor

      t.timestamps
    end
  end
end
