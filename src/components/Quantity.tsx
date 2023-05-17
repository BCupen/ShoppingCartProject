import { useNumberInput, Button, Input, HStack } from "@chakra-ui/react";
import { QuantityProps } from "../interfaces";

export default function Quantity({ value=1, onQtyChange }: QuantityProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      onChange: (stringValue, numValue) => onQtyChange(numValue),
      value: value
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const buttonStyle = {
    w:'20px',
    maxH:'25px',
    px:'0.5',
    bg: 'brand.tan',
    _active: {
        bg: 'brand.gold'
    },
    _hover: {
        bg: 'brand.gold',
        border: 'none'
    }
  }

  return (
    <HStack flex='1' spacing='0' >
      <Button {...dec} {...buttonStyle} >-</Button>
      <Input {...input} w='25px' maxH='25px' fontSize='xs' p='0' textAlign='center'/>
      <Button {...inc} {...buttonStyle}>+</Button>
    </HStack>
  );
}
