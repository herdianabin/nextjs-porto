// declarations.d.ts
import { MeshLineMaterial } from 'three.meshline';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineMaterial: ReactThreeFiber.Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>;
    }
  }
}
