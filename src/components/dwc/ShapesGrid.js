import React from 'react';
import Circle from "./shapes/Circle";
import Square from "./shapes/Square";
import Triangle from "./shapes/Triangle";
import Rectangle from "./shapes/Rectangle";
import Oval from "./shapes/Oval";
import Trapezoid from "./shapes/Trapezoid";
import Star from "./shapes/Star";
import Parallelogram from './shapes/Parallelogram';
import Pentagon from './shapes/Pentagon';
import Hexagon from "./shapes/Hexagon";
import Octagon from "./shapes/Octagon";
import Heart from "./shapes/Octagon";
import "./shapegrid.scss";
import "./shapes/css-shapes.scss"

export default function ShapesGrid() {
        return (
          <div className="shapesgrid__container px-4 md:px-0 py-10 md:py-16">
            <div className="grid grid-cols-4 lg:grid-cols-6 w-full max-w-5xl">
                {/* Circle */}
                <div className="shapebox shapebox-1">
                    <Circle cname="circle shape-1 transition-colors" />
                </div>
                 {/* Square */}
                <div className="shapebox shapebox-2">
                    <Square cname="square shape-2" />
                </div>
                 {/* Triangle */}
                <div className="shapebox shapebox-3">
                    <Triangle cname="triangle shape-3" />
                </div>
                {/* Pentagon */}
                <div className="shapebox shapebox-4">
                    <Pentagon cname="pentagon shape-4" />
                </div>
                {/* Oval */}
                <div className="shapebox shapebox-5">
                    <Oval cname="oval shape-5" />
                </div>
                {/* Trapezoid */}
                <div className="shapebox shapebox-6">
                    <Trapezoid cname="trapezoid shape-6" />
                </div>
                {/* Octgon */}
                <div className="shapebox shapebox-7">
                    <Octagon cname="octagon shape-7" />
                </div>
                {/* Parallelogram */}
                <div className="shapebox shapebox-8">
                    <Parallelogram cname="parallelogram shape-8" />
                </div>
                {/* Rectangle*/}
                <div className="shapebox shapebox-9">
                    <Rectangle cname="rectangle shape-9" />
                </div>
                {/* Hexagon */}
                <div className="shapebox shapebox-10">
                    <Hexagon cname="hexagon shape-10" />
                </div>
                {/* Star */}
                <div className="shapebox shapebox-11">
                    <Star cname="star shape-11" />
                </div>
                {/* Heart */}
                <div className="shapebox shapebox-12">
                    <Heart cname="heart shape-12" />
                </div>
            </div>
          </div>
        );
      }
      