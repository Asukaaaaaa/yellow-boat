import {
  createEffect,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  onMount,
} from 'solid-js';
import { customElement } from 'solid-element';

interface BannerObj {
  name: string;
  pic: string;
  litpic: string;
  url: string;
  id: string;
  is_split_layer: number;
  split_layer: {
    version: string;
    layers: {
      resources: {
        src: string;
        id: number;
      }[];
      scale: Partial<{
        initial: number;
        offset: number;
      }>;
      rotate: Partial<{
        initial: number;
        offset: number;
      }>;
      translate: Partial<{
        initial: number[];
        offset: number[];
      }>;
      blur: Partial<{}>;
      opacity: Partial<{
        initial: number;
        offset: number;
        wrap: 'clamp';
      }>;
      id: number;
      name: string;
    }[];
  };
  request_id: string;
}

const DEFAULT_PROP = {
  dataString: `
{
	"name": "",
	"pic": "http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002Fe5b7fca0c001cbe0b77a2956e4c861d9f19c4575.png",
	"litpic": "http:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002Fc8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
	"url": "",
	"is_split_layer": 1,
	"split_layer": "{\"version\":\"1\",\"layers\":[{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F75ec2d45ce8c942a1f7379d4641171da4d90ab0d.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":0,\"name\":\"19-背景水\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F286eb259a60a0eabfcde96d7ea92d239fe68b3fe.png\",\"id\":0}],\"scale\":{\"initial\":0.53},\"rotate\":{},\"translate\":{\"offset\":[10,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":1,\"name\":\"18-再远景\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F782d55aeca6cc75f51d2d630005f514a61a0ddfa.png\",\"id\":0}],\"scale\":{\"initial\":0.55},\"rotate\":{},\"translate\":{\"offset\":[10,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":3,\"name\":\"16-远景房子1\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fd6c941cf2d5fc6c717173f7e3f166dbc444aa15b.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":4,\"name\":\"15-两侧房子\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F27e411d92729604aa594858beb5130ed60aad76d.png\",\"id\":0}],\"scale\":{\"initial\":0.55,\"offset\":0.2},\"rotate\":{},\"translate\":{\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":2,\"name\":\"17-远景鲸鱼机\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F09d0855b6b6d6965e8f02404777986237848c6c9.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,10]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":5,\"name\":\"14-中景鲸鱼机\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F40878bbef514e2d4bf5d660fe1145c869567bec2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[20,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":6,\"name\":\"13-窗外垃圾\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F42485baddbca05d2c4c7710a0b76b74d303e06d7.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"offset\":[80,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":7,\"name\":\"12-机场\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F8ea0e95a8e5fc85ae227810925dba1ace1e9fcba.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[120,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":8,\"name\":\"11-空姐\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fc13ca9c6405c71bf864ed2bc421680cb437f45ef.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[80,40]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":9,\"name\":\"10-泡泡04\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fa43c6833d262301373234ffbd6934559d2ce7fb2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[100,50]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":10,\"name\":\"09-泡泡03\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fce8c5e45230a6d3805baf60f5916f1cd441aac8e.png\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"offset\":[130,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":11,\"name\":\"08-22\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fcbf19f3682dfb02e62557d07fefaf241a80296a1.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[200,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":12,\"name\":\"07-近路人\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F4a4c1f6b2977478c73e41f39a2910c3b3c33167e.webm\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[1000,0],\"offset\":[20,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":21,\"name\":\"右气泡\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F7998ca9f0bc267375fb7b45f75626d96806f94d7.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":13,\"name\":\"06-两侧前景植物\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F198efffbc58493300854c04ab0ea8d979a6f9223.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[280,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":15,\"name\":\"04-顶部摸鱼牌子\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F142a486b8dd500a626a60b68ad993af8dabc8b55.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"offset\":[300,130]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":16,\"name\":\"03-泡泡02\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fbb6266e1525a51f7920fc8881e47cadeee271b0c.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"initial\":[200,0],\"offset\":[350,20]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":17,\"name\":\"02-泡泡01\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fcd68251cde11936871237ca94360acb451bf7ed2.png\",\"id\":0}],\"scale\":{\"initial\":0.52},\"rotate\":{},\"translate\":{\"initial\":[-200,0],\"offset\":[500,0]},\"blur\":{},\"opacity\":{\"initial\":0.5,\"wrap\":\"clamp\"},\"id\":18,\"name\":\"01-光\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F426073f920477b718b8aee5ec141aca3889500f7.webm\",\"id\":0}],\"scale\":{\"initial\":0.54},\"rotate\":{},\"translate\":{\"initial\":[400,0],\"offset\":[50,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":19,\"name\":\"中气泡\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F0de9fb9822d2d00500abc8bdb143907eb1802ddb.webm\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-700,0],\"offset\":[30,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":20,\"name\":\"左气泡\"}]}",
	"request_id": "1720597670"
}`,
  // `
  // {
  //   "name": "",
  //   "pic": "https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20240101003030\u002Fhttp:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002F721ecf6ed5ef7cf406e801216513f7f318353704.png",
  //   "litpic": "https:\u002F\u002Fweb.archive.org\u002Fweb\u002F20240101003030\u002Fhttp:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Farchive\u002Fc8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
  //   "url": "",
  //   "is_split_layer": 1,
  //   "split_layer": "{\"version\":\"1\",\"layers\":[{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fcb5b4ca963e3a1a6d3917182561844b24a05fc20.png\",\"id\":0}],\"scale\":{\"initial\":1.2},\"rotate\":{},\"translate\":{},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":0,\"name\":\"19天空\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fbad95b1085650b58108b3491c9c13e1ef4e6b41f.png\",\"id\":0}],\"scale\":{\"initial\":1.2},\"rotate\":{},\"translate\":{\"offset\":[2,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":1,\"name\":\"19天空\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fb28b35a71a658e8bc449cd570337d7d9662d07d7.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"offset\":[12,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":2,\"name\":\"17极光\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F596c782fe6636269c65a50a9188fd4d16d12a83e.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[0,10]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":3,\"name\":\"16背景山\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F4cbfd5b2c00e1abb157e9ca3e79380bfa40d2b26.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[0,55],\"offset\":[100,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":4,\"name\":\"15冰面\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F6b8bf544dec0088423136771f01696c68112a145.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[0,40],\"offset\":[20,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":5,\"name\":\"14中景\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fcd6dadba219330bf44d3f8bcb584aede77d37f79.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-250,-10],\"offset\":[60,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":6,\"name\":\"13树\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F31ff321fe1c2b003ab5c42beebb07f6c1652f66e.png\",\"id\":0}],\"scale\":{\"initial\":0.5},\"rotate\":{},\"translate\":{\"initial\":[600,50],\"offset\":[-150,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":11,\"name\":\"08狐狸\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fcfb54458ad3e2101d245f3434222e33453825f4e.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[130,20],\"offset\":[70,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":7,\"name\":\"12中间房子+雪人\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F5103762686dc9627619b028354c15ba2a72b0886.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-320,20],\"offset\":[100,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":10,\"name\":\"10大鹅\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F09fa68c0c716596cebf6b1f81ed69a2a7a0a8c89.png\",\"id\":0}],\"scale\":{\"initial\":0.9},\"rotate\":{},\"translate\":{\"initial\":[-200,20],\"offset\":[120,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":9,\"name\":\"0933\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fc2914ea86a54203e59b9b9fb1b8ab3461a5976ed.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[75,19],\"offset\":[150,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":8,\"name\":\"1122\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F0cea6143cb8fce3ac55c0e1888a889c906a976aa.png\",\"id\":0}],\"scale\":{\"initial\":1.2},\"rotate\":{},\"translate\":{\"initial\":[-600,40],\"offset\":[200,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":12,\"name\":\"07左地面\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fc7cb3d67462676f79b3e702db60f4d4b038f3f28.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-600,-5],\"offset\":[400,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":13,\"name\":\"04冰屋\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F459fbeaaff1fbeced05ac36f1cb0c0c70df3ff01.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-850,0],\"offset\":[500,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":14,\"name\":\"02左树\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fbba2f3520bedef31ef33a816f11a9d22487b80aa.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[-1200,55],\"offset\":[700,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":15,\"name\":\"01左前植物\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F7c2d36bba37320de03c417ed7d86111f7b05347e.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[450,20],\"offset\":[500,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":17,\"name\":\"06右边雪人\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Faa01bb2357ea84d7cc6cf3030769f2581a3ac98f.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[350,50],\"offset\":[600,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":18,\"name\":\"05萝卜兔子\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F89d1c8fb55797a064a4d4aca51be2ebb8d86643a.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[700,0],\"offset\":[800,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":16,\"name\":\"03右树\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002Fbba2f3520bedef31ef33a816f11a9d22487b80aa.png\",\"id\":0}],\"scale\":{},\"rotate\":{},\"translate\":{\"initial\":[1200,55],\"offset\":[850,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":20,\"name\":\"前树\"},{\"resources\":[{\"src\":\"https:\u002F\u002Fi0.hdslb.com\u002Fbfs\u002Fvc\u002F3b226df45a1d6af2cdfeb20b9963849e13356f3d.webm\",\"id\":0}],\"scale\":{\"initial\":1.1},\"rotate\":{},\"translate\":{\"offset\":[50,0]},\"blur\":{},\"opacity\":{\"wrap\":\"clamp\"},\"id\":19,\"name\":\"下雪\"}]}",
  //   "request_id": "1704069030"
  // }
  // `
};

customElement('bili-banner', (props: { dataString: string }) => {
  props = mergeProps(DEFAULT_PROP, props);
  let root: HTMLDivElement;

  const data = createMemo(
    () =>
      Object.fromEntries(
        Array.from(props.dataString.matchAll(/"(\w+)":\s"(.*)",?\n/g)).map(
          ([_, key, value]) => [
            key,
            value?.length > 200 ? JSON.parse(value) : value,
          ]
        )
      ) as BannerObj
  );
  createEffect(() => {
    console.log(data());
  });

  const [movement, setMovement] = createSignal<[number, number]>([0, 0]);
  const movementOver1 = createMemo<[number, number]>(() => {
    const [x, y] = movement();
    return root ? [x / root.clientWidth, y / root.clientHeight] : [0, 0];
  });
  createEffect(() => {
    console.log(movementOver1());
  });

  const [isExiting, setIsExiting] = createSignal(false);

  const handleMouse = (e: MouseEvent) => {
    if (e.type === 'mouseenter' /* 动画开始 */) {
      setMovement([0, 0]);
    } else if (e.type === 'mousemove' /* 动画进行 */) {
      const [x, y] = movement();
      if (!isExiting()) setMovement([x + e.movementX, y + e.movementY]);
    } else if (e.type === 'mouseleave' /* 动画结束 */) {
      setIsExiting(true);
      setTimeout(() => setIsExiting(false), 500);
      setMovement([0, 0]);
    }
  };

  return (
    <>
      <div
        ref={root!}
        class="animated"
        classList={{ exiting: isExiting() }}
        onMouseEnter={handleMouse}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouse}
      >
        {data().split_layer.layers.map((_) => (
          <Layer {..._} move={movementOver1()} />
        ))}
      </div>
      <style>
        {`
        .animated {
          position: relative;
          width: 100%;
          min-width: 1000px;
          height: 155px;
          overflow: hidden;

          > .layer {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            > img {
              // display: none;
            }
          }
          > .layer:has(video) {
            // z-index: 9999;
          }
        }
        .animated.exiting > .layer > * {
          transition: all 0.5s ease-in-out;
        }
        `}
      </style>
    </>
  );
});

function Layer(
  props: BannerObj['split_layer']['layers'][number] & { move: [number, number] }
) {
  console.log('enter Layer fn.');

  const { resources, translate, rotate, scale, opacity } = props;
  const { src } = resources[0];
  const extname = src.split('.').pop()!;

  let dataSize: [number, number];
  if (extname === 'png') dataSize = [3200, 300];
  else if (extname === 'webm') dataSize = [500, 200];
  else dataSize = [0, 0];
  const scaleSize = dataSize.map((size) => size * (scale.initial ?? 1));

  const getTranslate = (move: typeof props.move) => {
    const { initial = [0, 0], offset = [0, 0] } = translate;
    const [x] = move;
    // todo add initial value
    const HORIZON_RATIO = 0.0003;
    const VERTICAL_RATIO = 0.003;
    const arr = [
      initial[0] / 2 + offset[0] * x * scaleSize[0] * HORIZON_RATIO,
      initial[1] / 2 + offset[1] * x * scaleSize[1] * VERTICAL_RATIO,
    ];
    return `translate(${arr[0]}px, ${arr[1]}px)`;
  };

  const getRotate = (move: typeof props.move) => {
    const { initial = 0, offset = 0 } = rotate;
    const [x] = move;
    // todo add initial value
    const val = offset * x * 1; // ? unknown rotate ratio
    return `rotate(${val}deg)`;
  };

  const getScale = (move: typeof props.move) => {
    // 'initial' is to calc scaleSize, it's useless here.
    const { offset = 0 } = scale;
    const [x] = move;
    const val = 1 + offset * x * 1; // ? unknown scale ratio
    return `scale(${val})`;
  };

  const getOpacity = (move: typeof props.move) => {
    const { initial = 0, offset = 0 } = opacity;
    const [x] = move;
    // todo add initial value
    const val = offset * x * 1; // ? unknown opacity ratio
    return `${1}`;
  };

  const style = createMemo<JSX.CSSProperties>(() => {
    return {
      width: `${scaleSize[0]}px`,
      height: `${scaleSize[1]}px`,
      transform: `${getTranslate(props.move)} ${getRotate(
        props.move
      )} ${getScale(props.move)}`,
      opacity: getOpacity(props.move),
    };
  });

  let content: JSX.Element;
  if (extname === 'png') {
    content = (
      <img
        src={src + '@1c.webp'}
        style={style()}
        width={scaleSize[0]}
        height={scaleSize[1]}
        data-width={dataSize[0]}
        data-height={dataSize[1]}
      />
    );
  } else if (extname === 'webm') {
    content = (
      <video
        src={src}
        loop
        playsinline
        muted
        autoplay
        style={{
          ...style(),
          'object-fit': 'cover',
        }}
        width={scaleSize[0]}
        height={scaleSize[1]}
        data-width={dataSize[0]}
        data-height={dataSize[1]}
      />
    );
  }

  onMount(() => {
    // let el = content as HTMLElement;
    // if (el.tagName === 'VIDEO') {
    // 	let video = el as HTMLVideoElement;
    // 	video.play();
    // }
  });

  return <div class="layer">{content}</div>;
}
