import { ZRCanvasRenderingContext } from "../../core/types";

const SHADOW_PROPS = {
    'shadowBlur': 1,
    'shadowOffsetX': 1,
    'shadowOffsetY': 1,
    'textShadowBlur': 1,
    'textShadowOffsetX': 1,
    'textShadowOffsetY': 1,
    'textBoxShadowBlur': 1,
    'textBoxShadowOffsetX': 1,
    'textBoxShadowOffsetY': 1
};

export default function (
    ctx: CanvasRenderingContext2D,
    propName: string,
    value: number
) {
    if (SHADOW_PROPS.hasOwnProperty(propName)) {
        return value *= (ctx as ZRCanvasRenderingContext).dpr;
    }
    return value;
}
