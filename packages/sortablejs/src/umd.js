import Sortable from "../../sortable/src/Sortable";
import Swap from "../../plugins/swap/src";
import MultiDrag from "../../plugins/multi-drag/src";
import { RemoveOnSpill, RevertOnSpill } from "../../plugins/on-spill/src";
import AutoScroll from "../../plugins/auto-scroll/src";

Sortable.mount(new AutoScroll());
Sortable.mount(RemoveOnSpill, RevertOnSpill);
Sortable.mount(new Swap());
Sortable.mount(new MultiDrag());

export default Sortable;
