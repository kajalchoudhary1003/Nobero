import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "./ui/checkbox";

function SideFilter({ className }) {
  return (
    <div className={`side-filter ${className}`}>
      <div className="flex justify-between mb-4">
        <span className="text-[#1A1E31] text-lg font-semibold">Filter</span>
        <span className="text-[#92780E] font-semibold text-base">
          Clear All
        </span>
      </div>
      <div className="w-full h-[1px] bg-[#c2c2c2]"></div>
      <Accordion
        type="multiple"
        defaultValue={["price", "color", "size"]}
        className="w-full"
      >
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="text-base text-[#7d7d7d]">
              <div className="flex space-x-4">
                <RadioGroupItem value="500" id="r1" />
                <Label htmlFor="r1">Less than ₹500</Label>
              </div>
              <div className="flex space-x-4">
                <RadioGroupItem value="1000" id="r2" />
                <Label htmlFor="r2">₹500 - ₹1000</Label>
              </div>
              <div className="flex space-x-4">
                <RadioGroupItem value="1500" id="r3" />
                <Label htmlFor="r3">₹1000 - ₹1500</Label>
              </div>
              <div className="flex space-x-4">
                <RadioGroupItem value="1500" id="r4" />
                <Label htmlFor="r4">₹1500 - ₹2000</Label>
              </div>
              <div className="flex space-x-4">
                <RadioGroupItem value="2000" id="r5" />
                <Label htmlFor="r5">More than ₹2000</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div>
                <Checkbox id="one" />
                <Label htmlFor="one" className="ml-2 text-base text-[#5e5e5e]">
                  Red
                </Label>
              </div>
              <div>
                <Checkbox id="two" />
                <Label htmlFor="two" className="ml-2 text-base text-[#5e5e5e]">
                  Blue
                </Label>
              </div>
              <div>
                <Checkbox id="three" />
                <Label
                  htmlFor="three"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  Green
                </Label>
              </div>
              <div>
                <Checkbox id="four" />
                <Label htmlFor="four" className="ml-2 text-base text-[#5e5e5e]">
                  Yellow
                </Label>
              </div>
              <div>
                <Checkbox id="five" />
                <Label htmlFor="five" className="ml-2 text-base text-[#5e5e5e]">
                  Black
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div>
                <Checkbox id="s-one" />
                <Label
                  htmlFor="s-one"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  S
                </Label>
              </div>
              <div>
                <Checkbox id="s-two" />
                <Label
                  htmlFor="s-two"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  M
                </Label>
              </div>
              <div>
                <Checkbox id="s-three" />
                <Label
                  htmlFor="s-three"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  L
                </Label>
              </div>
              <div>
                <Checkbox id="s-four" />
                <Label
                  htmlFor="s-four"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  XL
                </Label>
              </div>
              <div>
                <Checkbox id="s-five" />
                <Label
                  htmlFor="s-five"
                  className="ml-2 text-base text-[#5e5e5e]"
                >
                  XXL
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SideFilter;
