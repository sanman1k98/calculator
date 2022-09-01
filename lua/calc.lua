local M = {}

local display = "0"

local operands = { 0, nil }
local operator = nil

local operations = {
  add = function(x, y) return x + y end,
  sub = function(x, y) return x - y end,
  mul = function(x, y) return x * y end,
  div = function(x, y) return x / y end,
}

local append_digit = function(x)
  local display_num = tonumber(display)
  local is_float = display_num:type() == "float"
  local last_digit = display[#display - 1]

  if x == "." and is_float or last_digit == "." then
    return
  end
  display = display .. tostring(x)
end

local evaluate = function()
  if operator == nil then return end
  local x, y = operands[1], operands[2]
  local result = operations[operator](x, y)
  display = tostring(result)
  operands[1], operands[2] = result, nil
end

local clear = function()
  display = "0"
  operands[1], operands[2] = 0, nil
  operator = nil
end

M.print_display = function()
  print(display)
end

M.press_button = function(b)
  local num = tonumber(b)
  if num then
    append_digit(num)
  elseif b == "." then
    append_digit(b)
  else
    if b == "clear" then clear()
    elseif b == "+" then operator = "add"
    elseif b == "-" then operator = "sub"
    elseif b == "x" then operator = "mul"
    elseif b == "/" then operator = "div"
    elseif b == "=" then clear()
    else
      print "not a valid button press"
    end
  end
end

return M
