local calc = require "calc"

while true do
  calc.print_display()
  print '"Press" a button: '
  local b = io.read()
  calc.press_button(b)
end
