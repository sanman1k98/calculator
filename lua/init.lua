local calc = require "calc"

local show_calc = function(disp)
  local buttons = "clear\t\t\t/\n\n7\t8\t9\tx\n\n4\t5\t6\t-\n\n1\t2\t3\t+\n\n0\t\t.\t=\n\n\n"
  io.write(string.format("[ Casio ]: \t%s\n\n", disp))
  io.write(string.format(buttons))
end


while true do
  calc.print_display()
  local b = io.read()
  b = string.sub(b, 1, 1) -- get first char
  calc.handle_event(b)
end
