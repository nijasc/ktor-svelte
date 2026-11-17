typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,qu=ArrayBuffer.isView,os=Math.clz32;class gc{}class Se{}class Lh{}class Ph{constructor(r){this.w_1=r}x(){return Ep(this.w_1)}}class Mh{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class Rh{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let Bh=class{constructor(){Ru=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Sn{constructor(r){Nc(),this.x1_1=r}i2(r){return mn(this.x1_1,r)}d(r){return bb(this,r)}toString(){return yr(this.x1_1)}equals(r){return kb(this.x1_1,r)}hashCode(){return xb(this.x1_1)}}class W{}class qe{}class En{}class Xe{}class yn{}class ia{}let _w=class{};class ie{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Oe(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof ie?r:g())}equals(r){return this===r}hashCode(){return Lb(this)}toString(){return this.w2_1}}let Fh=class{constructor(){Bu=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends Lh{constructor(r,e){bl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return er(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return po(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return Ab(this)}valueOf(){return Wn(this)}}class bn{}class $h{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw qr.r(""+this.h3_1);return r}}class gw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class mw{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class yw{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class ww{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class bw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class kw{}class xw{}class Jh{constructor(){Xu=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class dn{}class dl{toString(){return"kotlin.Unit"}}class ha{static x4(r){return bi(this,r)}l1(r){var e;r:{var t;if(E(this,W)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,Nx(this))}toArray(){return r_(this)}}class bs extends ha{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class mc{constructor(r,e){Mc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw qr.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw Sr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class Hh extends mc{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),On.j5(e,this.i5_1.c1()),this.a5_1=e}}class Gh extends bs{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new mc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Hh(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&E(r,En)?On.n5(this,r):!1}hashCode(){return On.o5(this)}}class Kh{static w5(){var r=bi(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return Pv(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&E(r,Xe)))return!1;var e=r.k2(),t=r.l2(),i=(E(this,yn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(E(this,yn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,yn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=Pv(this,r);return e==null?null:e.l2()}hashCode(){return Er(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=kd.pg(this)}return on(this.u5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,Lx(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=xd.sg(this)}return on(this.v5_1)}}class Wh extends Kh{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return nd.z5(this)}a6(){return td.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class ks extends bs{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&E(r,qe)?ds.f6(this,r):!1}hashCode(){return ds.g6(this)}}let Yh=class{constructor(){Qu=this;var r=this,e=q.g1(0);e.l_1=!0,r.h6_1=e}};class xs{}class q extends Gh{constructor(r){return new.target.i4(r)}static i4(r){Ha();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Ha();var r=[];return this.i4(r)}static g1(r){Ha();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw j.v(b(i))}return t}static f1(r){Ha();var e=mi(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Ha().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[gu(this,r)]}v4(r,e){this.y4(),gu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(bk(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=wk(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=qs(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),gu(this,r),this.d5_1=this.d5_1+1|0;var e;return r===Os(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return Ow(this.k_1,r)}toString(){return Ub(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw oe.p6()}}class ls extends Wh{static w6(r){var e=this.t5();return zk(e),e.u6_1=r,e}static x6(){return this.w6(Qe.i7())}static j7(r,e){return this.w6(Qe.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(Qe.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return Zh.q7(this.u6_1)}a6(){return Vh.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=Qh.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class Zh extends ks{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw oe.p6()}h1(r){throw oe.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class Vh extends bs{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw oe.p6()}n(r){return this.y7(r)}z7(r){throw oe.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class Xh extends ks{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&E(r,Xe)?this.e8(r!=null&&E(r,Xe)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw oe.p6()}n(r){return this.f8(r!=null&&E(r,Xe)?r:g())}h1(r){throw oe.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class Qh extends Xh{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class rd{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class nd extends ks{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw oe.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new rd(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class ed{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class td extends bs{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw oe.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new ed(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class vi extends ks{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(Qe.i7())}static o8(r){for(var e=this.m8(Qe.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(Qe.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class id{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class pl{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw Sr.o3(b(r))}this.g9_1.w7(),h_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw co.m9()}}class ad extends pl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class sd extends pl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=on(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class od extends pl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new ld(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:Er(t),a=i??0,s=on(this.g9_1.z6_1)[this.i9_1],o=s==null?null:Er(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=on(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class ld{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return bv(this),this.v8_1.y6_1[this.w8_1]}l2(){return bv(this),on(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&E(r,Xe)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:Er(r),t=e??0,i=this.l2(),a=i==null?null:Er(i);return t^(a??0)}toString(){return le(this.k2())+"="+le(this.l2())}}class ud{}function Sw(n){var r;r:{var e;if(E(n,W)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&E(a,Xe)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class Qe{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=bi(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=o_(hs,nt(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(e_(r),null,new Int32Array(r),new Int32Array(s_(hs,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw j.v(b(i))}return t}n2(r){return Tk(this,r)>=0}o2(r){var e=Vs(this,r);return e<0?null:on(this.z6_1)[e]}o7(r){return Vs(this,r)>=0}s2(r,e){var t=v_(this,r),i=u_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),Uk(this,r.r2())}t2(r){this.w7();var e=Vs(this,r);if(e<0)return null;var t=on(this.z6_1)[e];return h_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);mo(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||mo(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,xl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,yn)?t=Ok(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=nn.fa(2+lr(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw oe.p6()}g8(r){var e=Vs(this,r.k2());return e<0?!1:P(on(this.z6_1)[e],r.l2())}ga(r){return this.g8(E(r,Xe)?r:g())}v7(){return new ad(this)}a8(){return new sd(this)}d8(){return new od(this)}}class vr extends ls{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class Cn extends vi{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class tt{}class cd{ka(){var r="This continuation is already complete";throw Sr.o3(b(r))}la(r){var e="This continuation is already complete";throw Sr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class yc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(o1),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&on(this.ka().wa(o1)).ya(r),this.ta_1=d_}}class wc extends yc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return on(this.qa_1)}ra(r){var e=_s(),t=g0(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new ri(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===_s())return sr;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=m0(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class fd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;_S(r)&&e(r);var t=this.gb_1,i=g0(r);return i==null||t(i),sr}ma(r){return this.la(r)}}class us extends Error{static nb(){var r=Vi(this,Error,[null]);return Xi(r),wu(r),r}static k3(r){var e=Vi(this,Error,[r]);return Xi(e,r),wu(e),e}static ob(r,e){var t=Vi(this,Error,[r,Jp(e)]);return Xi(t,r,e),wu(t),t}}class se extends us{static hb(){var r=this.nb();return yu(r),r}static a9(r){var e=this.k3(r);return yu(e),e}static mb(r,e){var t=this.ob(r,e);return yu(t),t}}class oe extends se{static p6(){var r=this.hb();return kv(r),r}static k8(r){var e=this.a9(r);return kv(e),e}}class j extends se{static kb(){var r=this.hb();return mu(r),r}static v(r){var e=this.a9(r);return mu(e),e}static lb(r,e){var t=this.mb(r,e);return mu(t),t}}class qr extends se{static j1(){var r=this.hb();return xv(r),r}static r(r){var e=this.a9(r);return xv(e),e}}class Gn extends se{static sb(){var r=this.hb();return Sv(r),r}static tb(r){var e=this.a9(r);return Sv(e),e}}class Sr extends se{static ub(){var r=this.hb();return Ev(r),r}static o3(r){var e=this.a9(r);return Ev(e),e}}class co extends se{static m9(){var r=this.hb();return zv(r),r}static u8(r){var e=this.a9(r);return zv(e),e}}class Ou extends se{static yb(){var r=this.hb();return Iv(r),r}static zb(r){var e=this.a9(r);return Iv(e),e}}class fo extends Error{static ec(){var r=Vi(this,Error,[null]);return Xi(r),bu(r),r}static hc(r){var e=Vi(this,Error,[r]);return Xi(e,r),bu(e),e}static gc(r,e){var t=Vi(this,Error,[r,Jp(e)]);return Xi(t,r,e),bu(t),t}}class Xa extends fo{static cc(){var r=this.ec();return Cv(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return Cv(t),t}}class ju extends j{static mc(){var r=this.kb();return Av(r),r}static nc(r){var e=this.v(r);return Av(e),e}}class Uu extends se{static s3(){var r=this.hb();return Rk(r),r}}class Nu extends se{static w3(){var r=this.hb();return Bk(r),r}}class Du extends se{static a4(){var r=this.hb();return Fk(r),r}}class Ge{}class da{equals(r){var e;return r instanceof bc?e=!1:r instanceof da?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:ae(r);return e??0}toString(){return"class "+this.oc()}}class en extends da{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class bc extends da{constructor(){yo=null,super(),yo=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw oe.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Lu extends da{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return nk(r,this.vc_1)}}class yi{}class vd{constructor(){n1=this;var r=this,e=Object;r.anyClass=new en(e,"Any",Wk);var t=this,i=Number;t.numberClass=new en(i,"Number",Yk),this.nothingClass=Kk();var a=this,s=Boolean;a.booleanClass=new en(s,"Boolean",Zk);var o=this,u=Number;o.byteClass=new en(u,"Byte",Vk);var c=this,f=Number;c.shortClass=new en(f,"Short",Xk);var v=this,h=Number;v.intClass=new en(h,"Int",Qk);var d=this,_=y;d.longClass=new en(_,"Long",rx);var m=this,w=Number;m.floatClass=new en(w,"Float",nx);var x=this,k=Number;x.doubleClass=new en(k,"Double",ex);var S=this,z=Array;S.arrayClass=new en(z,"Array",tx);var I=this,A=String;I.stringClass=new en(A,"String",ix);var O=this,D=Error;O.throwableClass=new en(D,"Throwable",ax);var J=this,T=Array;J.booleanArrayClass=new en(T,"BooleanArray",sx);var M=this,F=Uint16Array;M.charArrayClass=new en(F,"CharArray",ox);var B=this,L=Int8Array;B.byteArrayClass=new en(L,"ByteArray",lx);var H=this,X=Int16Array;H.shortArrayClass=new en(X,"ShortArray",ux);var $=this,tr=Int32Array;$.intArrayClass=new en(tr,"IntArray",cx);var Y=this,G=typeof BigInt>"u"?l:BigInt;Y.bigIntClass=new en(G,"BigInt",fx);var ar=this,ur=Array;ar.longArrayClass=new en(ur,"LongArray",vx);var Q=this,Tr=Float32Array;Q.floatArrayClass=new en(Tr,"FloatArray",hx);var wr=this,dr=Float64Array;wr.doubleArrayClass=new en(dr,"DoubleArray",dx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=Tv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new en(i,a,px(r));Tv()[r]=s,t=s}else t=e;return t}}class ev extends us{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return ln(e,e.ud_1),e}static wd(){return this.vd(null)}}class nn{constructor(r){return new.target.xd(r)}static xd(r){var e=bi(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Gn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return te(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+le(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+le(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return On.j5(r,this.a()),this.e_1=te(this.e_1,0,r)+yr(e)+at(this.e_1,r),this}de(r){if(r<0)throw j.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=te(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return On.i6(r,this.a()),this.e_1=te(this.e_1,0,r)+at(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return On.ge(e,t,i.length),this.e_1=this.e_1+te(i,e,t),this}}class hd{constructor(){e1=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class bt{constructor(r,e){return new.target.se(r,e)}static se(r,e){bo();var t=bi(this);return t.me_1=r,t.ne_1=it(e),t.oe_1=new RegExp(r,xx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return bo(),this.se(r,At())}ue(r){gx(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Gn.tb("Start index out of bounds: "+e+", input length: "+C(r));return w_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Gn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=bx(this,r,e);return Yx(t,kx)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=nn.fa(a);do{var o=on(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){rf(e);for(var t=this.xe(r),i=e===0?t:_b(t,e-1|0),a=q.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(qn(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(qn(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class _l{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return ae(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof _l)||this.gf_1!==r.gf_1)}}class dd extends ha{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=lb(Rx(this));return Es(r,Ex(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new _l(e),t}}class kc extends ha{static wf(r){return this.x4(r)}x(){return new xc(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new gd(this,r)}equals(r){return r===this?!0:r!=null&&E(r,En)?On.n5(this,r):!1}hashCode(){return On.o5(this)}}class pd extends kc{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class _d{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=dd.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=pd.vf(this.qf_1)}return on(this.of_1)}z(){return w_(this.rf_1,this.sf_1,this.pf_1.i1()?zx(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let Ew=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}};class _t extends ie{constructor(r,e,t){super(r,e),this.cg_1=t}}class xc{constructor(r,e){Mc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw qr.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class gd extends xc{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),On.j5(e,this.lg_1.c1()),this.hg_1=e}}class md{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Gn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Gn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Gn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw j.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Gn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw j.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:Er(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class yd{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class wd{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class zw{}class bd extends ha{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&E(r,qe)?ds.f6(this,r):!1}hashCode(){return ds.g6(this)}}class kd extends bd{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new yd(r)}c1(){return this.og_1.c1()}}class xd extends ha{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new wd(r)}c1(){return this.rg_1.c1()}}class Sd{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:Er(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Ed{constructor(){t1=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,En)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Gn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return ps}m1(r){if(r!==0)throw Gn.tb("Index: "+r);return ps}}class zd{y(){return!1}z(){throw qr.j1()}}class gl{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+le(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=lr(r,31)+(this.xg_1==null?0:Er(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof gl)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class Id{constructor(r){this.yg_1=r}x(){return new Cd(this.yg_1())}}class Cd{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new gl(qs(r),this.zg_1.z())}}class Ad{}class Td{constructor(){i1=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,yn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return s1()}p2(){return s1()}q2(){return T_()}}class qd{z(){return this.jh()}}class Od{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class jd{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Od(this)}}class ml{}class Ud{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw qr.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class yl{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw j.v(b(t))}}v1(r){return r>=this.rh_1?this:new yl(this.qh_1,r)}x(){return new Ud(this)}}class Nd{x(){return ps}v1(r){return Il}}class Dd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&Fv(this),this.th_1===0)throw qr.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&Fv(this),this.th_1===1}}class Sc{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new Dd(this)}}class Ld{constructor(){a1=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,qe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return ps}}class Pd{zh(r,e){return Oe(r,e)}compare(r,e){var t=r!=null&&Ku(r)?r:g();return this.zh(t,e!=null&&Ku(e)?e:g())}}let Md=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}},Rd=class{};class Iw{}class Bd{constructor(){l1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class Fd extends ie{}class $d extends kc{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return On.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=iv(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof ie?this.ei(r instanceof ie?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=iv(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof ie?this.fi(r instanceof ie?r:g()):-1}}class Jd{constructor(){u1=this,this.p1_1=new It(1,0)}}class Ss{constructor(r,e,t){if(t===0)throw j.v("Step must be non-zero.");if(t===-2147483648)throw j.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=s2(r,e,t),this.t1_1=t}x(){return new Hd(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Ss?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class Yi{}class It extends Ss{constructor(r,e){B_(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof It?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class Hd extends qd{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw qr.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class Gd{q1(r,e,t){return new Ss(r,e,t)}}class Kd{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=hb(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&Gv(this),this.li_1===0)throw qr.j1();var r=this.oi_1,e=r instanceof It?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&Gv(this),this.li_1===1}}class Wd{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new Kd(this)}}class Cw{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class Yd{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=rr(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&rr(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw qr.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(qn(t,e,r))}}class Zd{constructor(r){this.dj_1=r}x(){return new Yd(this.dj_1)}}class Vd{constructor(){c1=this,this.ej_1=new y(0,0),this.fj_1=Et(new y(-1,1073741823)),this.gj_1=Et(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new me(r),t=e.kj_1;if(nf(t)){var i=wn(t);if(!(er(new y(387905,-1073741824),i)<=0&&er(i,new y(-387905,1073741823))<=0))throw Xa.fc(wn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=wn(t);if(er(new y(1,-1073741824),s)<0&&er(s,new y(-1,1073741823))<0)a=!1;else{var o=wn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw Xa.fc(wn(t).toString()+" ms is out of milliseconds range");var u=wn(t);if(er(new y(1108857478,-1074),u)<=0&&er(u,new y(-1108857478,1073))<=0)throw Xa.fc(wn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new me($2(r,!0)),i=t.kj_1;if(P(new me(i),new me(Jr().ij_1))){var a="invariant failed";throw Sr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof j){var s=o;throw j.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class me{constructor(r){Jr(),this.kj_1=r}mj(r){return e0(this.kj_1,r)}d(r){return U2(this,r)}toString(){return M2(this.kj_1)}hashCode(){return B2(this.kj_1)}equals(r){return F2(this.kj_1,r)}}class Xd{constructor(){f1=this,this.nj_1=new Pu(new y(-1,1073741823),!0),this.oj_1=new Pu(new y(-1,2147483647),!1)}}class Pu{constructor(r,e){l0(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Cr(i,R(10));var a=this,s=this.pj_1;a.sj_1=St(s,R(10))}}class Aw{}class Qd{constructor(){h1=this,this.tj_1=new rt(new y(342103040,-7347440),0),this.uj_1=new rt(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Cr(e,t);if(er(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Br(a,Ze())}var s=i,o=hr(r,s);if(er(Ae(r,o),new y(0,0))<0&&er(Ae(r,s),new y(0,0))>=0)return er(r,new y(0,0))>0?wt().uj_1:wt().tj_1;var u=o,c;if(er(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(er(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=St(e,f),h=hr(v,vs(f,zs(vs(Ae(v,f),pi(v,tn(v))),63))),d=Vr(h);c=new rt(u,d)}return c}wj(r,e){return this.vj(r,R(e))}xj(r){return sS(r).yj()}}class rt{constructor(r,e){wt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(er(new y(342103040,-7347440),t)<=0&&er(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw j.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:Oe(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof rt?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof rt?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+lr(51,this.ak_1)|0}toString(){return aS(this)}}class rp{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(er(this.kk_1,wt().tj_1.zj_1)<0||er(this.kk_1,wt().uj_1.zj_1)>0)throw Ic.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return wt().wj(this.kk_1,this.lk_1)}}class Ec{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw Ic.qk(this.rk_1+' when parsing an Instant from "'+tf(this.sk_1,64)+'"')}}class np{ck(r){var e=r.zj_1,t=new y(86400,0),i=Cr(e,t);if(er(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Br(a,Ze())}var s=i,o=new y(86400,0),u=St(e,o),c=hr(u,vs(o,zs(vs(Ae(u,o),pi(u,tn(u))),63))),f=Vr(c),v,h,d,_=hr(s,R(719528)),m=_;_=Br(m,R(60));var w=new y(0,0);if(er(_,new y(0,0))<0){var x=_,k=hr(x,R(1)),S=Cr(k,R(146097)),z=Br(S,R(1));w=Ar(z,R(400));var I=_,A=tn(z),O=Ar(A,R(146097));_=hr(I,O)}var D=Ar(Ln(400),_),J=hr(D,R(591)),T=Cr(J,R(146097)),M=_,F=Ar(Ln(365),T),B=T,L=Cr(B,R(4)),H=hr(F,L),X=T,$=Cr(X,R(100)),tr=Br(H,$),Y=T,G=Cr(Y,R(400)),ar=Br(M,hr(tr,G));if(er(ar,new y(0,0))<0){var ur=T;T=Br(ur,Ze());var Q=_,Tr=Ar(Ln(365),T),wr=T,dr=Cr(wr,R(4)),Ir=hr(Tr,dr),br=T,kr=Cr(br,R(100)),Pr=Br(Ir,kr),_r=T,Gr=Cr(_r,R(400));ar=Br(Q,hr(Pr,Gr))}T=hr(T,w);var an=Vr(ar),Kr=(lr(an,5)+2|0)/153|0;h=((Kr+2|0)%12|0)+1|0,d=(an-((lr(Kr,306)+5|0)/10|0)|0)+1|0;var gr=T,Wr=Kr/10|0,Qr=hr(gr,R(Wr));v=Vr(Qr);var un=f/3600|0,Fr=f-lr(un,3600)|0,rn=Fr/60|0,pn=Fr-lr(rn,60)|0;return new zc(v,h,d,un,rn,pn,r.ak_1)}}class zc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class Ic extends j{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return ln(e,e.pk_1),e}}class ep{}class tp{constructor(r){this.uk_1=r}}class ip extends ep{constructor(r,e){super();var t=this;t.vk_1=rk(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=E(this,tt)?this:g(),this.yk_1=Su()}ka(){return M_()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=E(t,tt)?t:g(),this.wk_1=r,_s()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new ri(r)instanceof ri?r:g();return wS(i),i}else t=e;var a=t;if(P(new ri(Su()),new ri(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=Dk(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=m0(c);a.ma(f);continue r}else throw d}var v=s;if(v!==_s()){var h=v;a.ma(h)}}else this.yk_1=Su(),a.ma(r)}}}class ap extends ie{}class Cc{constructor(r){this.bl_1=r,this.cl_1=ao}l2(){return this.cl_1===ao&&(this.cl_1=on(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==ao}toString(){return this.dl()?le(this.l2()):"Lazy value not initialized yet."}}class sp{}class Tw{}class Ct{constructor(r){this.el_1=r}equals(r){var e;return r instanceof Ct?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return Er(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class ri{constructor(r){this.fl_1=r}toString(){return gS(this.fl_1)}hashCode(){return mS(this.fl_1)}equals(r){return yS(this.fl_1,r)}}class tv extends fo{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return ln(e,e.ab_1),e}}class wl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+le(this.ch_1)+", "+le(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:Er(this.ch_1);return r=lr(r,31)+(this.dh_1==null?0:Er(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof wl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class op{constructor(){d1=this,this.dg_1=new kt(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new kt(r,e),t}gl(r){var e;switch(r.length){case 36:e=jx(r);break;case 32:e=Ux(r);break;default:throw j.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+bS(r,64)+'" of length '+r.length))}return e}}class kt{constructor(r,e){Ns(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Ga(this.hl_1,r,0,0,4);var e=45,t=Z(e);r[8]=Nn(t),Ga(this.hl_1,r,9,4,6);var i=45,a=Z(i);r[13]=Nn(a),Ga(this.hl_1,r,14,6,8);var s=45,o=Z(s);r[18]=Nn(o),Ga(this.il_1,r,19,0,2);var u=45,c=Z(u);return r[23]=Nn(c),Ga(this.il_1,r,24,2,8),Ix(r)}equals(r){return this===r?!0:r instanceof kt?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=yt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=yt(i,s)}return e}d(r){return this.kl(r instanceof kt?r:g())}hashCode(){return Ae(this.hl_1,this.il_1).hashCode()}}class lp{constructor(){p1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class Pe{constructor(r){Nl(),this.pl_1=r}ql(r){return y0(this.pl_1,r)}d(r){return kS(this,r)}toString(){return _1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return xS(this.pl_1,r)}}class up{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw qr.r(this.sl_1.toString());return r}z(){return new Pe(this.tl())}}class ei{constructor(r){this.ul_1=r}c1(){return li(this.ul_1)}x(){return zS(this.ul_1)}vl(r){return w0(this.ul_1,r)}l1(r){return IS(this,r)}i1(){return CS(this.ul_1)}toString(){return AS(this.ul_1)}hashCode(){return TS(this.ul_1)}equals(r){return qS(this.ul_1,r)}}class cp{constructor(){g1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Zn{constructor(r){Dl(),this.am_1=r}bm(r){return b0(this.am_1,r)}d(r){return OS(this,r)}toString(){return m1(this.am_1)}hashCode(){return this.am_1}equals(r){return jS(this.am_1,r)}}class fp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw qr.r(this.dm_1.toString());return r}z(){return new Zn(this.em())}}class ti{constructor(r){this.fm_1=r}c1(){return ui(this.fm_1)}x(){return DS(this.fm_1)}gm(r){return k0(this.fm_1,r)}l1(r){return LS(this,r)}i1(){return PS(this.fm_1)}toString(){return MS(this.fm_1)}hashCode(){return RS(this.fm_1)}equals(r){return BS(this.fm_1,r)}}class vp{constructor(){y1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Vn{constructor(r){Ds(),this.lm_1=r}mm(r){return x0(this.lm_1,r)}d(r){return FS(this,r)}toString(){return w1(this.lm_1)}hashCode(){return $S(this.lm_1)}equals(r){return JS(this.lm_1,r)}}class hp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw qr.r(this.om_1.toString());return r}z(){return new Vn(this.pm())}}class ii{constructor(r){this.qm_1=r}c1(){return ci(this.qm_1)}x(){return KS(this.qm_1)}rm(r){return S0(this.qm_1,r)}l1(r){return WS(this,r)}i1(){return YS(this.qm_1)}toString(){return ZS(this.qm_1)}hashCode(){return VS(this.qm_1)}equals(r){return XS(this.qm_1,r)}}class dp{constructor(){b1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Me{constructor(r){Ll(),this.wm_1=r}xm(r){return E0(this.wm_1,r)}d(r){return QS(this,r)}toString(){return k1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return rE(this.wm_1,r)}}class pp{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw qr.r(this.zm_1.toString());return r}z(){return new Me(this.an())}}class ai{constructor(r){this.bn_1=r}c1(){return fi(this.bn_1)}x(){return tE(this.bn_1)}cn(r){return z0(this.bn_1,r)}l1(r){return iE(this,r)}i1(){return aE(this.bn_1)}toString(){return sE(this.bn_1)}hashCode(){return oE(this.bn_1)}equals(r){return lE(this.bn_1,r)}}function qw(n){return new It(0,Ac(n))}function Ow(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function jw(n,r){return Lw(n,r)>=0}function Uw(n,r){return Pw(n,r)>=0}function Nw(n,r){return Mw(n,r)>=0}function Dw(n,r){return Rw(n,r)>=0}function Ac(n){return n.length-1|0}function Lw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Pw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Mw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function Rw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Bw(n){return n.length-1|0}function _p(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Fw(n,nn.f(),r,e,t,i,a,s).toString()}function Fw(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)F_(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function $w(n){return new It(0,Kw(n))}function Jw(n){var r;switch(n.length){case 0:r=mr();break;case 1:r=Ee(n[0]);break;default:var e=n.slice();r=kl(e);break}return r}function Hw(n){return new Id(Xw(n))}function gp(n){switch(n.length){case 0:return At();case 1:return Hc(n[0]);default:return mp(n,Cn.i(n.length))}}function Gw(n){return Ww(n,q.m())}function Kw(n){return n.length-1|0}function mp(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function Ww(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function Yw(n,r){return Vw(n,r)>=0}function yp(n){var r;switch(n.length){case 0:throw qr.r("Array is empty.");case 1:r=n[0];break;default:throw j.v("Array has more than one element.")}return r}function Zw(n){return n.length===0?D_():new Ph(n)}function Vw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function iv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function Xw(n){return()=>Ep(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,wp(n,nn.f(),r,e,t,i,a,s).toString()}function wp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)F_(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Qw(n){return cs(n,vi.b1(Yr(n,12)))}function rb(n){for(var r=ho(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function si(n){if(E(n,W)){if(n.c1()<=1)return pa(n);var r=mi(n),e=Cs(r)?r:g();return ik(e),kl(e)}var t=Oc(n);return mk(t),t}function aa(n){return pa(qc(n))}function it(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=At();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=Hc(e);break;default:r=cs(n,Cn.i(n.c1()));break}return r}return Vx(cs(n,Cn.e1()))}function we(n,r){if(E(r,W)){var e=q.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=q.f1(n);return ka(t,r),t}}function nb(n){if(n.i1())throw qr.r("List is empty.");return n.d1(0)}function pa(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=mr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=Ee(e);break;default:r=xp(n);break}return r}return q_(Oc(n))}function Tc(n){return n.c1()===1?n.d1(0):null}function eb(n,r){var e=n.x();if(!e.y())throw qr.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function qc(n){var r;return E(n,W)?r=Cn.k1(n):r=cs(n,Cn.e1()),r}function hi(n,r){var e=q.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function tb(n,r){return E(n,W)?n.l1(r):sb(n,r)>=0}function vu(n){return n.i1()?null:n.d1(0)}function bp(n){var r;switch(n.c1()){case 0:throw qr.r("List is empty.");case 1:r=n.d1(0);break;default:throw j.v("List has more than one element.")}return r}function ib(n){if(E(n,En))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function ab(n,r){var e;if(E(n,W)){var t=n.c1()-r|0;if(t<=0)return mr();if(t===1)return Ee(ob(n));if(e=q.g1(t),E(n,En)){if(E(n,xs)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=q.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return q_(e)}function kp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function cs(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Oc(n){return E(n,W)?xp(n):cs(n,q.m())}function wi(n,r){if(E(n,W)){if(n.c1()<=1)return pa(n);var e=mi(n),t=Cs(e)?e:g();return ak(t,r),kl(t)}var i=Oc(n);return yk(i,r),i}function xp(n){return q.f1(n)}function sb(n,r){if(E(n,En))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(qs(e),P(r,i))return e;e=e+1|0}return-1}function ob(n){if(E(n,En))return Mu(n);var r=n.x();if(!r.y())throw qr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Mu(n){if(n.i1())throw qr.r("List is empty.");return n.d1(Os(n))}function lb(n){return new Mh(n)}function ub(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Oe(e,t)>0&&(e=t)}return e}function jc(n,r){return r<=-2147483648?B_().p1_1:Le(n,r-1|0)}function cb(n,r){return Xc.q1(n,r,-1)}function xt(n,r){return n>r?r:n}function fn(n,r){return n<r?r:n}function fb(n,r){return Xc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Uc(n,r,e){if(er(r,e)>0)throw j.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return er(n,r)<0?r:er(n,e)>0?e:n}function vb(n,r){return er(n,r)<0?r:n}function hb(n,r,e){if(r>e)throw j.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function hu(n,r){return er(n,r)>0?r:n}function ro(n,r){var e=db(r);return e!=null?n.u1(e):!1}function db(n){return er(new y(-2147483648,-1),n)<=0&&er(n,new y(2147483647,0))<=0?Vr(n):null}function Es(n,r){return new jd(n,r)}function Sp(n){var r=n.x();if(!r.y())return mr();var e=r.z();if(!r.y())return Ee(e);var t=q.m();for(t.n(e);r.y();)t.n(r.z());return t}function pb(n){return new Rh(n)}function _b(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw j.v(b(e))}var t;return r===0?t=D_():E(n,ml)?t=n.v1(r):t=new yl(n,r),t}function av(n,r){var e=Fx(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=Cn.i(i??lr(n.c1(),2));return a.h1(n),ka(a,r),a}function vo(n,r){var e=Cn.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function gb(n){if(C(n)===0)throw qr.r("Char sequence is empty.");return rr(n,0)}function mb(n){var r;switch(C(n)){case 0:throw qr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw j.v("Char sequence has more than one element.")}return r}function yb(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw j.v(b(e))}return at(n,xt(r,n.length))}function wb(n){var r=n&65535;return r}function mn(n,r){return n-r|0}function bb(n,r){return mn(n.x1_1,r instanceof Sn?r.x1_1:g())}function ee(n,r){return n-r|0}function Z(n){return n}function yr(n){return String.fromCharCode(n)}function kb(n,r){return r instanceof Sn?n===r.x1_1:!1}function xb(n){return n}var Ru;function Nc(){return Ru===l&&new Bh,Ru}function le(n){var r=n==null?null:b(n);return r??"null"}function Sb(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Bu;function bl(){return Bu===l&&new Fh,Bu}function Eb(n){var r;return n<0?r=-n:r=n,r}function Ep(n){return new $h(n)}function ho(n){var r="BooleanArray",e=zp(Array(n),!1);return e.$type$=r,e}function zp(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function fs(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function di(n){var r="LongArray",e=zp(Array(n),new y(0,0));return e.$type$=r,e}function _a(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function du(){return ga(),Ip}var Ip;function Cp(){return ga(),Ap}var Ap;function Fu(){return ga(),Tp}var Tp;function qp(){return ga(),Op}var Op;function zb(){return ga(),jp}var jp;function Ib(n){return ga(),(n|0)===n?_o(n):(Cp()[0]=n,lr(Fu()[zb()],31)+Fu()[qp()]|0)}var sv;function ga(){sv||(sv=!0,Ip=new ArrayBuffer(8),Ap=new Float64Array(du()),new Float32Array(du()),Tp=new Int32Array(du()),Cp()[0]=-1,Op=Fu()[0]!==0?1:0,jp=1-qp()|0)}function Ye(){return pr(),Up}var Up;function Ze(){return pr(),Np}var Np;function ov(){return pr(),Dp}var Dp;function Cb(){return pr(),Lp}var Lp;function De(){return pr(),Pp}var Pp;function lv(){return pr(),Mp}var Mp;function er(n,r){if(pr(),ir(n,r))return 0;var e=ge(n),t=ge(r);return e&&!t?-1:!e&&t?1:ge(Br(n,r))?-1:1}function $u(n){return pr(),Nn(n.d3_1)}function Ju(n){return pr(),Bc(n.d3_1)}function Vr(n){return pr(),n.d3_1}function Wn(n){return pr(),n.e3_1*4294967296+Tb(n)}function po(n,r){if(pr(),oi(n))return"0";if(ge(n))if(ir(n,De())){var e=R(r),t=Cr(n,e),i=Vr(Br(Ar(t,e),n)),a=po(t,r);return a+i.toString(r)}else return"-"+po(tn(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=sa(Math.pow(r,s)),u=n,c="";;){var f=Cr(u,o),v=Vr(Br(u,Ar(f,o))),h=v.toString(r);if(u=f,oi(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return pr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Ab(n){return pr(),n.d3_1^n.e3_1}function R(n){return pr(),new y(n,n<0?-1:0)}function ge(n){return pr(),n.e3_1<0}function Br(n,r){return pr(),hr(n,tn(r))}function Tb(n){return pr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function oi(n){return pr(),n.e3_1===0&&n.d3_1===0}function Ar(n,r){if(pr(),oi(n))return Ye();if(oi(r))return Ye();if(ir(n,De()))return uv(r)?De():Ye();if(ir(r,De()))return uv(n)?De():Ye();if(ge(n)){var e;return ge(r)?e=Ar(tn(n),tn(r)):e=tn(Ar(tn(n),r)),e}else if(ge(r))return tn(Ar(n,tn(r)));if(cv(n,lv())&&cv(r,lv()))return sa(Wn(n)*Wn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+lr(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+lr(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,f)+lr(i,c)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function tn(n){return pr(),hr(Dc(n),new y(1,0))}function sa(n){if(pr(),Ts(n))return Ye();if(n<=-9223372036854776e3)return De();if(n+1>=9223372036854776e3)return Cb();if(n<0)return tn(sa(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){pr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function uv(n){return pr(),(n.d3_1&1)===1}function cv(n,r){return pr(),er(n,r)<0}function Dc(n){return pr(),new y(~n.d3_1,~n.e3_1)}function Cr(n,r){if(pr(),oi(r))throw us.k3("division by zero");if(oi(n))return Ye();if(ir(n,De())){if(ir(r,Ze())||ir(r,ov()))return De();if(ir(r,De()))return Ze();var e=zs(n,1),t=Yn(Cr(e,r),1);if(ir(t,Ye()))return ge(r)?Ze():ov();var i=Br(n,Ar(r,t));return hr(t,Cr(i,r))}else if(ir(r,De()))return Ye();if(ge(n)){var a;return ge(r)?a=Cr(tn(n),tn(r)):a=tn(Cr(tn(n),r)),a}else if(ge(r))return tn(Cr(n,tn(r)));for(var s=Ye(),o=n;Ob(o,r);){for(var u=Wn(o)/Wn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=sa(c),d=Ar(h,r);ge(d)||qb(d,o);)c=c-v,h=sa(c),d=Ar(h,r);oi(h)&&(h=Ze()),s=hr(s,h),o=Br(o,d)}return s}function zs(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Yn(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function qb(n,r){return pr(),er(n,r)>0}function Ob(n,r){return pr(),er(n,r)>=0}function St(n,r){return pr(),Br(n,Ar(Cr(n,r),r))}function vs(n,r){return pr(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function pi(n,r){return pr(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Ae(n,r){return pr(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Lc(n,r){pr();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function Ln(n){pr();var r;return n instanceof y?r=n:r=sa(n),r}function Zi(n){return pr(),_i(n)&&n.$type$==="LongArray"}function jb(n){return pr(),n!=null?Zi(n):!1}var fv;function pr(){if(!fv){fv=!0,Up=R(0),Np=R(1),Dp=R(-1),Lp=new y(-1,2147483647),Pp=new y(0,-2147483648),Mp=R(16777216);var n=Array;new en(n,"LongArray",jb)}}function rr(n,r){var e;return Pc(n)?e=K(n,r):e=n.b(r),e}function Pc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Pc(n)?r=n.length:r=n.a(),r}function qn(n,r,e){var t;return Pc(n)?t=te(n,r,e):t=n.c(r,e),t}function Ub(n){return _p(n,", ","[","]",l,l,Nb)}function Rp(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!Yp(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function Bp(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+Er(r[a])|0}while(t<i);return e}function Nb(n){return b(n)}function Oe(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=vv(n,r):r instanceof y?t=vv(n,Wn(r)):t=hv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=hv(n,r);break;default:e=Db(n,r);break}return e}function vv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function hv(n,r){return n<r?-1:n>r?1:0}function Db(n,r){return n.d(r)}function Lb(n){return Hu(n)}function Hu(n){if(!("kotlinHashCodeValue$"in n)){var r=Fp(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function Fp(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":Yp(n)?r="[...]":typeof n.toString!="function"?r=Pb(n):r=n.toString(),r}function Pb(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Gu(n)&&Gu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!_i(n.$bound)||!_i(r.$bound))return!1;var a=n.$bound,s=r.$bound;return Rp(a,s)}return n===r}function Er(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Hu(n);break;case"function":e=Gu(n)?Mb(n):Hu(n);break;case"number":e=Ib(n);break;case"boolean":e=$p(n);break;case"string":e=ae(String(n));break;case"bigint":e=Rb(n);break;case"symbol":e=Bb(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Mb(n){var r=n.$flags;r=lr(31,r)+Er(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&_i(i)){var a=i;r=lr(31,r)+Bp(a)|0}return r}function $p(n){return n?1231:1237}function ae(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function Rb(n){var r=BigInt(32),e=BigInt(4294967295),t=Eb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function Bb(n){var r=Fb(n)?$b():Jb(),e=r.get(n);if(e!==l)return e;var t=Fp();return r.set(n,t),t}function Fb(n){return Symbol.keyFor(n)!=l}function $b(){return pu===l&&(pu=new Map),pu}function Jb(){return _u===l&&(_u=new WeakMap),_u}var pu,_u;function ln(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function bi(n,r){var e=Object.create(n.prototype);return Mc(e,r),e}function Mc(n,r){r!==l&&Object.assign(n,r)}function Vi(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function Hb(n){return n===l}function Jp(n){return{cause:n}}function Xi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(Hb(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function Gb(){return Gp(),Hp}var Hp;function Kb(n,r){return Gp(),n!=l&&n[Gb()]?r(n):Pk(r)}var dv;function Gp(){dv||(dv=!0,Hp=tt.Symbol)}function Is(){throw Uu.s3()}function Wb(){throw Nu.w3()}function g(){throw Du.a4()}function on(n){var r;return n==null?Wb():r=n,r}function Kp(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Rc(u,n,r,e,t,i,a,s,o)}function Rc(n,r,e,t,i,a,s,o,u){var c=Kp(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function N(n,r,e,t,i,a,s,o){var u="object";Rc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Rc(u,n,r,e,t,i,a,s,o)}function Xr(n,r,e,t){N(n,"Companion",l,r,e,t,l,l)}function Yb(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&Cs(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function Nn(n){return n<<24>>24}function _o(n){var r;return n instanceof y?r=Vr(n):r=Zb(n),r}function Zb(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Bc(n){return n<<16>>16}function Ke(n){var r=_o(n),e=Bc(r);return wb(e)}function Le(n,r){return new It(n,r)}function Vb(){return ya(),Wp}var Wp;function Bi(){return ya(),Kp("class",l,l,l,l,l)}function ma(n,r,e,t,i,a){return ya(),t.get=t,t.set=i,t.callableName=n,Xb(t,Qb(r,i),e)}function Xb(n,r,e){ya(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function Qb(n,r){return ya(),Vb()[n][r==null?0:1]}function Re(n,r,e,t,i,a){return ya(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var pv;function ya(){if(!pv){pv=!0;var n=[Bi(),Bi()],r=[Bi(),Bi()];Wp=[n,r,[Bi(),Bi()]]}}function Yp(n){return _i(n)||qu(n)}function _i(n){return Array.isArray(n)}function Gu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function Cs(n){var r;return _i(n)?r=!n.$type$:r=!1,r}function rk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function Zp(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Ku(n){var r=typeof n;return r==="string"||r==="boolean"||Zp(n)||E(n,Se)}function As(n){return typeof n=="string"||E(n,gc)}function Qa(n){return _i(n)&&n.$type$==="BooleanArray"}function rs(n){return n instanceof Int8Array}function ns(n){return n instanceof Int16Array}function es(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function ts(n){return n instanceof Int32Array}function is(n){return n instanceof Float32Array}function as(n){return n instanceof Float64Array}function nk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?ek(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?E(n,i):n instanceof i}function ek(n){return Object.getPrototypeOf(n)}var l;function gi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Vp(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}return p_(n,r,null)}function Fc(n,r){return Rp(n,r)}function tk(n){return Bp(n)}function kl(n){return q.i4(n)}function Wu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,fs(r));else if(r>t){var a=fs(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function Yu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Zu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function oa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}return ki(n,di(r))}function la(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function ua(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Vu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t="BooleanArray",i=p_(n,r,!1);return i.$type$=t,i}function ik(n){n.length>1&&kk(n)}function ak(n,r){n.length>1&&t_(n,r)}function Xp(n){var r=Z(n),e=ok(_v().j4_1,r),t=r-_v().j4_1[e]|0;return t<10?t:-1}function sk(n){return Xp(n)>=0}function ok(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var Xu;function _v(){return Xu===l&&new Jh,Xu}function lk(n){var r=Z(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function uk(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function Ts(n){return n!==n}function ck(n){var r;return n===0?r=0:r=1<<(31-os(n)|0),r}function fk(n){return n===1/0||n===-1/0}function gv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+os(t)|0}else e=os(r);return e}function $c(n){return!vk(n)&&!hk(n)}function Jc(n){return!fk(n)&&!Ts(n)}function Qp(n){var r=n.d3_1;return r===0?32+mv(n.e3_1)|0:mv(r)}function vk(n){return n===1/0||n===-1/0}function hk(n){return n!==n}function mv(n){var r=~(n|(-n|0));return 32-os(r)|0}var sr;function Qi(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function yt(n,r){return Ae(n,new y(0,-2147483648)).f3(Ae(r,new y(0,-2147483648)))}function dk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function pk(n,r){var e=n,t=r;if(er(t,new y(0,0))<0){var i;return yt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(er(e,new y(0,0))>=0)return Cr(e,t);var a=Yn(Cr(Lc(e,1),t),1),s=Br(e,Ar(a,t)),o,u=s,c=t;yt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,R(f));return v}function _k(n,r){if(er(n,new y(0,0))>=0)return ku(n,r);var e=Lc(n,1),t=Cr(e,R(r)),i=Yn(t,1),a=i,s=Ar(a,R(r)),o=Br(n,s);if(er(o,R(r))>=0){var u=o;o=Br(u,R(r));var c=i;i=hr(c,R(1))}return ku(i,r)+ku(o,r)}function mi(n){var r;return n.toArray!==void 0?r=n.toArray():r=r_(n),r}function qs(n){return n<0&&Px(),n}function gk(n,r,e,t,i){On.u4(t,i,n.length);var a=i-t|0;if(On.u4(e,e+a|0,r.length),qu(r)&&qu(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function r_(n){return Mx(n)}function Ee(n){var r=[n];return q.i4(r)}function go(n){return Kx([n])}function Hc(n){return Xx([n])}function mk(n){n_(n,L_())}function yk(n,r){n_(n,r)}function n_(n,r){if(n.c1()<=1)return sr;var e=mi(n);t_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function e_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw j.v(b(r))}return Array(n)}function mo(n,r,e){n.fill(null,r,e)}function yv(n,r){return Vp(n,r)}function wv(n,r){n[r]=null}var Qu;function Ha(){return Qu===l&&new Yh,Qu}function wk(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function gu(n,r){return On.i6(r,n.c1()),r}function bk(n,r){return On.j5(r,n.c1()),r}var no;function t_(n,r){if(i_()){var e=xk(r);n.sort(e)}else a_(n,0,Ac(n),r)}function kk(n){if(i_()){var r=Sk;n.sort(r)}else a_(n,0,Ac(n),L_())}function i_(){var n=no;if(n!=null)return n;no=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=Ek;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return no=!0,!0}function a_(n,r,e,t){var i=n.length,a=Array(i),s=r1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function r1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=r1(n,r,e,a,i),o=r1(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function xk(n){return(r,e)=>n.compare(r,e)}function Sk(n,r){return Oe(n,r)}function Ek(n,r){return(n&3)-(r&3)|0}function zk(n){n.v6_1=null}function s_(n,r){return ck(lr(fn(r,1),3))}function o_(n,r){return os(r)+1|0}function bv(n){if(n.v8_1.f7_1!==n.x8_1)throw co.u8("The backing map has been modified after this entry was obtained.")}function ca(n){return n.y6_1.length}function nt(n){return n.b7_1.length}function xl(n){n.f7_1=n.f7_1+1|0}function l_(n,r){Ik(n,r)?c_(n,!0):Ck(n,n.d7_1+r|0)}function Ik(n,r){var e=ca(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(ca(n)/4|0)}function Ck(n,r){if(r<0)throw se.a9("too many elements");if(r>ca(n)){var e=On.b9(ca(n),r);n.y6_1=yv(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:yv(i,e),n.a7_1=gi(n.a7_1,e);var a=s_(hs,e);a>nt(n)&&f_(n,a)}}function u_(n){var r=n.z6_1;if(r!=null)return r;var e=e_(ca(n));return n.z6_1=e,e}function Sl(n,r){return r==null?0:lr(Er(r),-1640531527)>>>n.e7_1|0}function c_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}mo(n.y6_1,t,n.d7_1),i==null||mo(i,t,n.d7_1),n.d7_1=t}function f_(n,r){xl(n),n.d7_1>n.g7_1&&c_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=o_(hs,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!Ak(n,t))throw Sr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Ak(n,r){for(var e=Sl(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function Vs(n,r){for(var e=Sl(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function Tk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(on(n.z6_1)[e],r))return e}return-1}function v_(n,r){n.w7();r:for(;;)for(var e=Sl(n,r),t=xt(lr(n.c7_1,2),nt(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=ca(n)){l_(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,xl(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){f_(n,lr(nt(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=nt(n)-1|0)}}function h_(n,r){wv(n.y6_1,r);var e=n.z6_1;e==null||wv(e,r),qk(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,xl(n)}function qk(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,sr;var o=Sl(n,n.y6_1[s-1|0]);((o-e|0)&(nt(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function Ok(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function jk(n,r){var e=v_(n,r.k2()),t=u_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function Uk(n,r){if(r.i1())return!1;l_(n,r.c1());for(var e=r.x(),t=!1;e.y();)jk(n,e.z())&&(t=!0);return t}var hs,d_;function Nk(n,r){var e=new wc(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function Dk(n,r,e,t){var i=new wc(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function Lk(n){var r=n instanceof yc?n:null,e=r==null?null:r.va();return e??n}function Pk(n){return new Promise(Mk(n))}function Mk(n){return(r,e)=>{var t=M_(),i=new fd(t,r,e);return e2(n,i),sr}}function kv(n){ln(n,n.o6_1)}function mu(n){ln(n,n.u_1)}function yu(n){ln(n,n.z8_1)}function wu(n){ln(n,n.j3_1)}function xv(n){ln(n,n.q_1)}function Sv(n){ln(n,n.rb_1)}function Ev(n){ln(n,n.n3_1)}function zv(n){ln(n,n.t8_1)}function Iv(n){ln(n,n.xb_1)}function Cv(n){ln(n,n.bc_1)}function bu(n){ln(n,n.dc_1)}function Av(n){ln(n,n.lc_1)}function Rk(n){ln(n,n.r3_1)}function Bk(n){ln(n,n.v3_1)}function Fk(n){ln(n,n.z3_1)}function ki(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function p_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function eo(n,r){return new Cc(r)}function __(n){return new Cc(n)}function $k(n){return Vr(pi(zs(n,63),Lc(tn(n),63)))}function Jk(n){return er(n,new y(0,0))<0?tn(n):n}function Hk(n){var r;if(Ts(n))throw j.v("Cannot round NaN value.");return n>Wn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Wn(new y(0,-2147483648))?r=new y(0,-2147483648):r=Ln(Math.round(n)),r}function Gk(n){return n<0?-n|0:n}var yo;function Kk(){return yo===l&&new bc,yo}function Tv(){return _x(),g_}var g_;function Wk(n){return n!=null}function Yk(n){return Zp(n)}function Zk(n){return n!=null?typeof n=="boolean":!1}function Vk(n){return n!=null?typeof n=="number":!1}function Xk(n){return n!=null?typeof n=="number":!1}function Qk(n){return n!=null?typeof n=="number":!1}function rx(n){return n instanceof y}function nx(n){return n!=null?typeof n=="number":!1}function ex(n){return n!=null?typeof n=="number":!1}function tx(n){return n!=null?Cs(n):!1}function ix(n){return n!=null?typeof n=="string":!1}function ax(n){return n instanceof Error}function sx(n){return n!=null?Qa(n):!1}function ox(n){return n!=null?es(n):!1}function lx(n){return n!=null?rs(n):!1}function ux(n){return n!=null?ns(n):!1}function cx(n){return n!=null?ts(n):!1}function fx(n){return typeof n=="bigint"}function vx(n){return n!=null?Zi(n):!1}function hx(n){return n!=null?is(n):!1}function dx(n){return n!=null?as(n):!1}function px(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var n1;function xr(){return n1===l&&new vd,n1}var qv;function _x(){qv||(qv=!0,g_=Array(0))}function jr(n){if(n===String)return xr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Lu(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Lu(n);return e}function Ur(n){var r;switch(typeof n){case"string":r=xr().stringClass;break;case"number":var e;(n|0)===n?e=xr().intClass:e=xr().doubleClass,r=e;break;case"bigint":r=xr().bigIntClass;break;case"boolean":r=xr().booleanClass;break;case"function":var t=xr();r=t.functionClass(n.length);break;default:var i;if(Qa(n))i=xr().booleanArrayClass;else if(es(n))i=xr().charArrayClass;else if(rs(n))i=xr().byteArrayClass;else if(ns(n))i=xr().shortArrayClass;else if(ts(n))i=xr().intArrayClass;else if(Zi(n))i=xr().qd();else if(is(n))i=xr().floatArrayClass;else if(as(n))i=xr().doubleArrayClass;else if(E(n,Ge))i=jr(Ge);else if(Cs(n))i=xr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=xr().anyClass;else if(a===Error)s=xr().throwableClass;else{var o=a;s=jr(o)}i=s}r=i;break}return r}function gx(n){n.lastIndex=0}function Ov(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function mx(n){return 48<=n&&n<=57?!0:mn(n,128)<0?!1:sk(n)}function Gc(n){return lk(n)}function ku(n,r){return po(n,wa(r))}function wa(n){if(!(2<=n&&n<=36))throw j.v("radix "+n+" was not in valid range 2..36");return n}function m_(n){var r=+n,e;return Ts(r)&&!y_(n)||r===0&&lt(n)?e=null:e=r,e}function yx(n,r){return n.toString(wa(r))}function wo(n){var r=+n;return(Ts(r)&&!y_(n)||r===0&&lt(n))&&xa(n),r}function El(n,r){var e=mn(n,48)>=0&&mn(n,57)<=0?ee(n,48):mn(n,65)>=0&&mn(n,90)<=0?ee(n,65)+10|0:mn(n,97)>=0&&mn(n,122)<=0?ee(n,97)+10|0:mn(n,128)<0?-1:mn(n,65313)>=0&&mn(n,65338)<=0?ee(n,65313)+10|0:mn(n,65345)>=0&&mn(n,65370)<=0?ee(n,65345)+10|0:Xp(n);return e>=r?-1:e}function wx(n){var r=Al(n),e;return r==null?xa(n):e=r,e}function y_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var e1;function bo(){return e1===l&&new hd,e1}function bx(n,r,e){return()=>n.re(r,e)}function kx(n){return n.z()}function xx(n,r){return V(n,"",r,l,l,l,Sx)}function w_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Le(i.index,n.lastIndex-1|0);return new _d(a,i,t,r)}function Sx(n){return n.jf_1}function Ex(n){return r=>n.d1(r)}function zx(n,r){if(r<ot(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function te(n,r,e){return n.substring(r,e)}function at(n,r){return n.substring(r)}function Ix(n){return Ax(n,0,n.length)}function Kn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(bo().ke(r),t?"gui":"gu"),a=bo().le(e);return n.replace(i,a)}function be(n,r,e){return e=e===l?!1:e,e?Kc(n,0,r,0,r.length,e):n.startsWith(r,0)}function Kc(n,r,e,t,i,a){return a=a===l?!1:a,Tl(n,r,e,t,i,a)}function Cx(n,r,e){return e=e===l?!1:e,e?Kc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function jv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!Cl(s,o,e))return!1}while(t<i);return!0}function Ax(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw j.v(b(i))}for(var a=r,s=nn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(Ke(u));else if(u>>5===-2){var c=Tx(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(Ke(c)),a=a+1|0)}else if(u>>4===-2){var f=qx(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(Ke(f)),a=a+2|0)}else if(u>>3===-2){var v=Ox(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(Ke(h)),s.da(Ke(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Tx(n,r,e,t,i){if(!(r&30)||e>=t)return In(0);var a=n[e];return(a&192)!==128?In(0):r<<6^a^3968}function qx(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return In(0)}else if((a&192)!==128)return In(0)}else if((a&224)!==160)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];return(s&192)!==128?In(1):r<<12^a<<6^s^-123008}function Ox(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return In(0)}else if((r&15)>4)return In(0)}else if((a&240)<=128)return In(0);if((a&192)!==128)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];if((s&192)!==128)return In(1);if((e+2|0)===t)return In(2);var o=n[e+2|0];return(o&192)!==128?In(2):r<<18^a<<12^s<<6^o^3678080}function In(n,r,e){return-n|0}var Uv;function ba(){if(Uv)return sr;Uv=!0,b_=new _t("NANOSECONDS",0,1),new _t("MICROSECONDS",1,1e3),k_=new _t("MILLISECONDS",2,1e6),x_=new _t("SECONDS",3,1e9),S_=new _t("MINUTES",4,6e10),E_=new _t("HOURS",5,36e11),z_=new _t("DAYS",6,864e11)}var b_,k_,x_,S_,E_,z_;function I_(n,r,e){var t=Oe(r.cg_1,e.cg_1),i;if(t>0){var a=Ln(r.cg_1/e.cg_1),s=Ar(n,a);i=ir(Cr(s,a),n)?s:er(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Cr(n,Ln(e.cg_1/r.cg_1)):i=n;return i}function Nv(n,r,e){var t=Oe(r.cg_1,e.cg_1);return t>0?Ar(n,Ln(r.cg_1/e.cg_1)):t<0?Cr(n,Ln(e.cg_1/r.cg_1)):n}function ko(){return ba(),b_}function xo(){return ba(),k_}function Wc(){return ba(),x_}function C_(){return ba(),S_}function A_(){return ba(),E_}function Yc(){return ba(),z_}function Ga(n,r,e,t,i){var a=e;t<4&&(a=Dv(n.e3_1,r,a,t,xt(i,4))),i>4&&Dv(n.d3_1,r,a,fn(t-4|0,0),i-4|0)}function jx(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Z(o);if(!(u>>>8|0)&&gn()[u]>=0){s=gn()[u];break r}Hn(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";Hn(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Z(w);if(!(x>>>8|0)&&gn()[x]>=0){m=gn()[x];break r}Hn(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Hn(n,S,13)}var z=0,I=14;if(I<18)do{var A=I;I=I+1|0;var O=z<<4,D;r:{var J=K(n,A),T=Z(J);if(!(T>>>8|0)&&gn()[T]>=0){D=gn()[T];break r}Hn(n,r,A)}z=O|D}while(I<18);var M=z;if(K(n,18)!==45){var F="'-' (hyphen)";Hn(n,F,18)}var B=0,L=19;if(L<23)do{var H=L;L=L+1|0;var X=B<<4,$;r:{var tr=K(n,H),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){$=gn()[Y];break r}Hn(n,r,H)}B=X|$}while(L<23);var G=B;if(K(n,23)!==45){var ar="'-' (hyphen)";Hn(n,ar,23)}var ur=0,Q=24;if(Q<28)do{var Tr=Q;Q=Q+1|0;var wr=ur<<4,dr;r:{var Ir=K(n,Tr),br=Z(Ir);if(!(br>>>8|0)&&gn()[br]>=0){dr=gn()[br];break r}Hn(n,r,Tr)}ur=wr|dr}while(Q<28);var kr=ur,Pr=0,_r=28;if(_r<36)do{var Gr=_r;_r=_r+1|0;var an=Pr<<4,Kr;r:{var gr=K(n,Gr),Wr=Z(gr);if(!(Wr>>>8|0)&&gn()[Wr]>=0){Kr=gn()[Wr];break r}Hn(n,r,Gr)}Pr=an|Kr}while(_r<36);var Qr=Pr,un=k<<16|M,Fr=new y(un,c),rn=G<<16|kr,pn=new y(Qr,rn);return Ns().gg(Fr,pn)}function Ux(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Z(s);if(!(o>>>8|0)&&gn()[o]>=0){a=gn()[o];break r}var u="a hexadecimal digit";Hn(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Z(m);if(!(w>>>8|0)&&gn()[w]>=0){_=gn()[w];break r}var x="a hexadecimal digit";Hn(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),z=0,I=16;if(I<24)do{var A=I;I=I+1|0;var O=z<<4,D;r:{var J=K(n,A),T=Z(J);if(!(T>>>8|0)&&gn()[T]>=0){D=gn()[T];break r}var M="a hexadecimal digit";Hn(n,M,A)}z=O|D}while(I<24);var F=z,B=0,L=24;if(L<32)do{var H=L;L=L+1|0;var X=B<<4,$;r:{var tr=K(n,H),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){$=gn()[Y];break r}var G="a hexadecimal digit";Hn(n,G,H)}B=X|$}while(L<32);var ar=B,ur=new y(ar,F);return Ns().gg(S,ur)}function Dv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=o2()[f],h=a;a=h+1|0,r[h]=Nn(v>>8);var d=a;a=d+1|0,r[d]=Nn(v)}while(u!==o);return a}function Nx(n){return r=>r===n?"(this Collection)":le(r)}var On;function Dx(n,r){return Lv(n,r.k2())+"="+Lv(n,r.l2())}function Lv(n,r){return r===n?"(this Map)":le(r)}function Pv(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function Lx(n){return r=>Dx(n,r)}var ds;function Os(n){return n.c1()-1|0}function Px(){throw Ou.zb("Index overflow has happened.")}function Mx(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function mr(){return T_()}function st(n){return Gw(n)}function ra(n){return n.length>0?kl(n):mr()}var t1;function T_(){return t1===l&&new Ed,t1}var ps;function q_(n){switch(n.c1()){case 0:return mr();case 1:return Ee(n.d1(0));default:return n}}function Rx(n){return Le(0,n.c1()-1|0)}function Bx(n){for(var r=q.m(),e=n.x();e.y();){var t=e.z();ka(r,t)}return r}function Yr(n,r){var e;return E(n,W)?e=n.c1():e=r,e}function Fx(n){var r;return E(n,W)?r=n.c1():r=null,r}function $x(n,r){if(E(n,Ad))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw qr.r("Key "+le(r)+" is missing in the map.");e=t;break r}return e}function Nr(){var n=Hx();return E(n,yn)?n:g()}function zl(n){return n.length>0?j_(n,vr.ha(n.length)):Nr()}function ye(n,r){return $x(n,r)}function O_(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=Nr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=go(e);break;default:r=Rv(n,vr.ha(n.c1()));break}return r}return U_(Rv(n,vr.q4()))}function Mv(n){return j_(n,vr.ha(n.length))}function et(n,r){var e;if(n.i1())e=go(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function Zc(n){return vr.ia(n)}function Jx(n,r){var e=Zc(n);return e.t2(r),U_(e)}var i1;function Hx(){return i1===l&&new Td,i1}function j_(n,r){return N_(r,n),r}function Rv(n,r){return Gx(r,n),r}function U_(n){var r;switch(n.c1()){case 0:r=Nr();break;case 1:r=n;break;default:r=n;break}return r}function N_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function Gx(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function Kx(n){var r=ls.l7(n.length);return N_(r,n),r}function ka(n,r){if(E(r,W))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function Bv(n){var r;if(n.i1())throw qr.r("List is empty.");return r=n.e5(Os(n)),r}function Vc(n,r){var e;return n==null?e=Il:e=new Sc(Zx(n),r),e}function Wx(n){return Zw(n)}function Yx(n,r){return new Sc(n,r)}function D_(){return Il}var Il;function Fv(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(on(n.sh_1)),n.th_1=n.sh_1==null?0:1}function Zx(n){return()=>n}function Qt(n){return gp(n)}function At(){return s1()}var a1;function s1(){return a1===l&&new Ld,a1}function Vx(n){switch(n.c1()){case 0:return At();case 1:return Hc(n.x().z());default:return n}}function Xx(n){return mp(n,vi.b1(n.length))}function Qx(n){if(!(n.length>0)){var r="Failed requirement.";throw j.v(b(r))}var e=n2(n);return new Md(e)}function Tt(n,r){return n==null?r==null?0:-1:r==null?1:Oe(n!=null&&Ku(n)?n:g(),r)}function L_(){var n=P_;return E(n,dn)?n:g()}function r2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=Tt(s,o);if(u!==0)return u}return 0}var P_;function n2(n){return(r,e)=>r2(r,e,n)}function e2(n,r){var e=Lk(Nk(n,r)),t=sr;e.ma(t)}var o1,l1;function M_(){return l1===l&&new Bd,l1}function _s(){return i2()}var $v;function t2(){if($v)return sr;$v=!0,R_=new Fd("COROUTINE_SUSPENDED",0)}var R_;function i2(){return t2(),R_}function a2(n){return $d.di(n)}function s2(n,r,e){var t;if(e>0)t=n>=r?r:r-Jv(r,n,e)|0;else if(e<0)t=n<=r?r:r+Jv(n,r,-e|0)|0;else throw j.v("Step is zero.");return t}function Jv(n,r,e){return xu(xu(n,e)-xu(r,e)|0,e)}function xu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var u1;function B_(){return u1===l&&new Jd,u1}var Xc;function F_(n,r,e){e!=null?n.g(e(r)):r==null||As(r)?n.g(r):r instanceof Sn?n.da(r.x1_1):n.g(b(r))}function Cl(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Ov(n),i=Ov(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function o2(){return H_(),$_}var $_;function l2(){return H_(),J_}var J_;function gn(){return l2()}var Hv;function H_(){if(!Hv){Hv=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Z(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Z(a),n=n+1|0}$_=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Z(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Z(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=rr(m,w);w=w+1|0;var k=_;_=k+1|0,d[Z(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<C(z);){var A=rr(z,I);I=I+1|0;var O=S;S=O+1|0,d[Z(A)]=O}J_=d;for(var D=0,J=di(256);D<256;)J[D]=new y(-1,-1),D=D+1|0;for(var T=0,M="0123456789abcdef",F=0;F<C(M);){var B=rr(M,F);F=F+1|0;var L=T;T=L+1|0,J[Z(B)]=R(L)}for(var H=0,X="0123456789ABCDEF",$=0;$<C(X);){var tr=rr(X,$);$=$+1|0;var Y=H;H=Y+1|0,J[Z(tr)]=R(Y)}}}function u2(n){var r;return C(n)===0?r=h2:r=d2(n),r}function c2(n){return f2(n,"")}function f2(n,r){r=r===l?"":r;for(var e=Y_(n),t=q.m(),i=e.x();i.y();){var a=i.z();lt(a)||t.n(a)}for(var s=q.g1(Yr(t,10)),o=t.x();o.y();){var u=o.z(),c=v2(u);s.n(c)}for(var f=ub(s),v=f??0,h=n.length+lr(r.length,e.c1())|0,d=u2(r),_=Os(e),m=q.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var z=qs(S),I;if((z===0||z===_)&&lt(k))I=null;else{var A=yb(k,v),O;A==null?O=null:O=d(A);var D=O;I=D??k}var J=I;J==null||m.n(J)}return wp(m,nn.fa(h),`
`).toString()}function v2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=rr(n,i);if(!Gc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function h2(n){return n}function d2(n){return r=>n+r}function Al(n){return p2(n,10)}function p2(n,r){wa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=El(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=lr(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function xa(n){throw ju.nc("Invalid number format: '"+n+"'")}function _2(n){return g2(n,10)}function g2(n,r){wa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Cr(o,R(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=El(K(n,h),r);if(d<0)return null;if(er(f,c)<0)if(ir(c,u)){var _=a;if(c=Cr(_,R(r)),er(f,c)<0)return null}else return null;var m=f;f=Ar(m,R(r));var w=f,x=a,k=hr(x,R(d));if(er(w,k)<0)return null;var S=f;f=Br(S,R(d))}while(v<e);return i?f:tn(f)}function G_(n,r){var e=As(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=rr(e,s),u=Yw(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=qn(e,t,i+1|0);return b(c)}function Gi(n,r){return m2(n,r)?te(n,0,n.length-C(r)|0):n}function js(n,r,e){e=e===l?n:e;var t=y2(n,r);return t===-1?e:te(n,t+1|0,n.length)}function gs(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=So(n,r,l,e)>=0:t=Qc(n,r,0,C(n),e)>=0,t}function K_(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return w2(n,yr(r[0]),e,t);for(var i=pb(b2(n,r,l,e,t)),a=q.g1(Yr(i,10)),s=i.x();s.y();){var o=s.z(),u=k2(n,o);a.n(u)}return a}function W_(n,r){return x2(n,r)?at(n,C(r)):n}function Y_(n){return Sp(S2(n))}function Z_(n,r,e){return e=e===l?32:e,b(E2(As(n)?n:g(),r,e))}function ot(n){return C(n)-1|0}function lt(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Gc(t)){r=!1;break r}}r=!0}return r}function m2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Cx(n,r):Tl(n,C(n)-C(r)|0,r,0,C(r),e)}function y2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=_a([r]);i=z2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function So(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=Qc(n,r,e,C(n),t):i=n.indexOf(r,e),i}function Qc(n,r,e,t,i,a){a=a===l?!1:a;var s=a?cb(xt(e,ot(n)),fn(t,0)):Le(fn(e,0),xt(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,Kc(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,Tl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function V_(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=rr(n,i),s=Gc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return qn(n,r,e+1|0)}function w2(n,r,e,t){rf(t);var i=0,a=So(n,r,i,e);if(a===-1||t===1)return Ee(b(n));var s=t>0,o=q.g1(s?xt(t,10):10);r:do{var u=i,c=a,f=b(qn(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=So(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(qn(n,v,h));return o.n(d),o}function b2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,rf(i),new Wd(n,e,i,q2(r,t))}function k2(n,r){return b(qn(n,r.df(),r.ef()+1|0))}function x2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?be(n,r):Tl(n,0,r,0,C(r),e)}function S2(n){return new Zd(n)}function E2(n,r,e){if(e=e===l?32:e,r<0)throw j.v("Desired length "+r+" is less than zero.");if(r<=C(n))return qn(n,0,C(n));var t=nn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function Tl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!Cl(rr(n,r+o|0),rr(e,t+o|0),a))return!1}while(s<i);return!0}function z2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=yp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=xt(e,ot(n));if(0<=o)do{var u=o;o=o+-1|0;var c=rr(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Cl(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function rf(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw j.v(b(r))}return sr}function Gv(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Le(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Le(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=jc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function X_(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=yp(r),s=yr(a);return n.indexOf(s,e)}var o=fn(e,0),u=ot(n);if(o<=u)do{var c=o;o=o+1|0;var f=rr(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,Cl(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function ql(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=_a([r]);i=X_(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function I2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function C2(n,r,e){e=e===l?n:e;var t=ql(n,r);return t===-1?e:te(n,0,t)}function A2(n,r,e){e=e===l?n:e;var t=ql(n,r);return t===-1?e:te(n,t+1|0,n.length)}function T2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=Qc(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function q2(n,r){return(e,t)=>{var i=X_(e,n,t,r);return i<0?null:U(i,1)}}function wn(n){return zs(n,1)}function nf(n){return(Vr(n)&1)===0}function Q_(n){return(Vr(n)&1)===1}function O2(n){return nf(n)?ko():xo()}var c1;function Jr(){return c1===l&&new Vd,c1}function r0(n){var r=tn(wn(n)),e=Vr(n)&1;return J2(r,e)}function j2(n,r){var e,t=Vr(n)&1;if(t===(Vr(r)&1)){var i;if(nf(n))i=H2(hr(wn(n),wn(r)));else{var a=ef(wn(n),wn(r)),s;if(ir(a,new y(-16162,2147483647)))throw j.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=Et(a):s=G2(a),i=s}e=i}else Q_(n)?e=Kv(n,wn(n),wn(r)):e=Kv(n,wn(r),wn(n));return e}function Kv(n,r,e){var t=o0(e),i=ef(r,t),a;if(er(new y(1108857478,-1074),i)<=0&&er(i,new y(-1108857478,1073))<=0){var s=Br(e,Eo(t));a=Ul(hr(Eo(i),s))}else a=Et(i);return a}function Ol(n){return er(n,new y(0,0))<0}function Us(n){return ir(n,Jr().fj_1)||ir(n,Jr().gj_1)}function n0(n){return Ol(n)?r0(n):n}function e0(n,r){var e=Ae(n,r);if(er(e,new y(0,0))<0||!(Vr(e)&1))return n.f3(r);var t=Vr(n)&1,i=t-(Vr(r)&1)|0;return Ol(n)?-i|0:i}function U2(n,r){return e0(n.kj_1,r instanceof me?r.kj_1:g())}function N2(n){var r;if(Us(n))r=0;else{var e=s0(n),t=St(e,R(24));r=Vr(t)}return r}function t0(n){var r;if(Us(n))r=0;else{var e=L2(n),t=St(e,R(60));r=Vr(t)}return r}function i0(n){var r;if(Us(n))r=0;else{var e=P2(n),t=St(e,R(60));r=Vr(t)}return r}function a0(n){var r;if(Us(n))r=0;else if(Q_(n)){var e=wn(n),t=St(e,R(1e3));r=Vr(Eo(t))}else{var i=wn(n),a=1e9,s=St(i,R(a));r=Vr(s)}return r}function jl(n,r){var e=n;return ir(e,Jr().fj_1)?new y(-1,2147483647):ir(e,Jr().gj_1)?new y(0,-2147483648):I_(wn(n),O2(n),r)}function D2(n){return jl(n,Yc())}function s0(n){return jl(n,A_())}function L2(n){return jl(n,C_())}function P2(n){return jl(n,Wc())}function M2(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Jr().fj_1))e="Infinity";else if(ir(r,Jr().gj_1))e="-Infinity";else{var t=Ol(n),i=nn.f();t&&i.da(45);var a=n0(n),s=D2(a),o=N2(a),u=t0(a),c=i0(a),f=a0(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?to(n,i,c,f,9,"s",!1):f>=1e6?to(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?to(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function to(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=Z_(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,rr(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function R2(n){var r=nn.f();Ol(n)&&r.da(45),r.ca("PT");var e=n0(n),t=s0(e),i=t0(e),a=i0(e),s=a0(e),o=t;Us(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&to(n,r,a,s,9,"S",!0),r.toString()}function B2(n){return n.hashCode()}function F2(n,r){if(!(r instanceof me))return!1;var e=r.kj_1;return!!ir(n,e)}function Et(n){var r=Jr(),e=Yn(n,1),t=hr(e,R(1));return r.jj(t)}function Wv(n,r){var e=Nv(new y(-387905,1073741823),ko(),r),t;if(er(tn(e),n)<=0&&er(n,e)<=0)t=Ul(Nv(n,r,ko()));else if(r.y2(xo())>=0){var i=$k(n),a=new y(0,-2147483648),s=hr(a,R(1));t=Et(Ar(Ln(i),v1(Jk(vb(n,s)),r)))}else t=Et(Uc(I_(n,r,xo()),new y(1,-1073741824),new y(-1,1073741823)));return t}function $2(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw j.v(t);return Jr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw j.v(u);return Jr().ij_1}else if(K(n,i)===80)o=K2(n,i+1|0,e);else{if(e)throw j.v("");return Jr().ij_1}var c=o;return s&&!P(new me(c),new me(Jr().ij_1))?r0(c):c}function J2(n,r){var e=Jr(),t=Yn(n,1),i=hr(t,R(r));return e.jj(i)}function H2(n){var r;return er(new y(387905,-1073741824),n)<=0&&er(n,new y(-387905,1073741823))<=0?r=Ul(n):r=Et(o0(n)),r}function ef(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;er(new y(1,-1073741824),r)<0&&er(r,new y(-1,1073741823))<0?i=!0:i=er(Ae(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Uc(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function G2(n){var r;return er(new y(1108857478,-1074),n)<=0&&er(n,new y(-1108857478,1073))<=0?r=Ul(Eo(n)):r=Et(Uc(n,new y(1,-1073741824),new y(-1,1073741823))),r}function o0(n){return Cr(n,R(1e6))}function Eo(n){return Ar(n,R(1e6))}function Ul(n){return Jr().jj(Yn(n,1))}function K2(n,r,e){var t=r;if(t===n.length){if(e)throw j.v("");return Jr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw j.v("");return Jr().ij_1}s=!0;continue r}var f=t,v,h=l0().nj_1,d=t,_;n:{var m=1,w=d;if(Y2(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var z=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=ee(I,48);if(er(z,Yv(h))>0||ir(z,Yv(h))&&er(R(A),Z2(h))>0){var O=w;t:for(;;){var D;if(O<n.length){var J=K(n,O);D=48<=J?J<=57:!1}else D=!1;if(!D)break t;O=O+1|0}w=O;var T=w,M=m;if(t=T,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw j.v("");return Jr().ij_1}v=M,_=W2(h);break n}var F=z,B=hr(Yn(F,3),Yn(F,1));z=hr(B,R(A)),w=w+1|0}var L=w,H=m;if(t=L,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw j.v("");return Jr().ij_1}v=H,_=z}var X=_;if(K(n,t)===46){t=t+1|0;var $=t,tr=$,Y=tr,G=Y+6|0,ar=n.length,ur=Math.min(G,ar),Q=0;n:for(;Y<ur;){var Tr=K(n,Y);if(!(48<=Tr&&Tr<=57))break n;var wr=Q;Q=((wr<<3)+(wr<<1)|0)+ee(Tr,48)|0,Y=Y+1|0}var dr=6-(Y-tr|0)|0,Ir=0;if(Ir<dr)do{Ir=Ir+1|0;var br=Q;Q=(br<<3)+(br<<1)|0}while(Ir<dr);$=Y;var kr=Q,Pr=$,_r=Pr,Gr=_r+9|0,an=n.length,Kr=Math.min(Gr,an),gr=0;n:for(;_r<Kr;){var Wr=K(n,_r);if(!(48<=Wr&&Wr<=57))break n;var Qr=gr;gr=((Qr<<3)+(Qr<<1)|0)+ee(Wr,48)|0,_r=_r+1|0}var un=9-(_r-Pr|0)|0,Fr=0;if(Fr<un)do{Fr=Fr+1|0;var rn=gr;gr=(rn<<3)+(rn<<1)|0}while(Fr<un);$=_r;var pn=gr,vn=$;n:for(;;){var _n;if(vn<n.length){var re=K(n,vn);_n=48<=re?re<=57:!1}else _n=!1;if(!_n)break n;vn=vn+1|0}$=vn;var Fn=$;if(Fn===t||Fn===n.length||K(n,Fn)!==83){if(e)throw j.v("");return Jr().ij_1}t=Fn;var $n=R(kr),de=1e9,je=Ar($n,R(de)),pe=hr(je,R(pn));a=Ar(Ln(v),V2(pe,Wc()))}var Fe=X2(n,t),$e;if(Fe==null){var Ie="Unknown duration unit short name: "+yr(K(n,t));if(e)throw j.v(Ie);return Jr().ij_1}else $e=Fe;var Jn=$e;if(o!=null&&o.y2(Jn)<=0){var An="Unexpected order of duration components";if(e)throw j.v(An);return Jr().ij_1}if(o=Jn,Jn.equals(Yc())){if(s){if(e)throw j.v("");return Jr().ij_1}i=Ar(Ln(v),v1(X,Jn))}else{if(!s){if(e)throw j.v("");return Jr().ij_1}var xn=ef(i,Ar(Ln(v),v1(X,Jn)));if(ir(xn,new y(-16162,2147483647))){if(e)throw j.v("");return Jr().ij_1}i=xn}t=t+1|0}return j2(Wv(i,xo()),Wv(a,ko()))}var f1;function l0(){return f1===l&&new Xd,f1}function W2(n){return n.pj_1}function Y2(n){return n.qj_1}function Yv(n){return n.rj_1}function Z2(n){return n.sj_1}function V2(n,r){var e=Q2(r),t=Wn(n)*e;return Hk(t)}function X2(n,r){var e=K(n,r);return e===68?Yc():e===72?A_():e===77?C_():e===83?Wc():null}function Q2(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw Sr.o3(b(e))}return r}function v1(n,r){return rS(n,nS(r))}function rS(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=hu(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=hu(n,new y(-1,1073741823));else{var t=(128-gv(n)|0)-gv(r)|0;e=t<63?Ar(n,r):t>63?new y(-1,1073741823):hu(Ar(n,r),new y(-1,1073741823))}return e}function nS(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw Sr.o3(b(e))}return r}function io(){return Rn(),u0}var u0;function eS(){return Rn(),c0}var c0;function tS(){return Rn(),f0}var f0;function iS(){return Rn(),v0}var v0,h1;function wt(){return h1===l&&new Qd,h1}function aS(n){Rn();var r=nn.f(),e=h0.ck(n),t=e.dk_1;if(Gk(t)<1e3){var i=nn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Ka(r,r,e.ek_1),r.da(45),Ka(r,r,e.fk_1),r.da(84),Ka(r,r,e.gk_1),r.da(58),Ka(r,r,e.hk_1),r.da(58),Ka(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%io()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/io()[a]|0;r.ca(at((s+io()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function sS(n){Rn();var r=n,e=0;if(C(r)===0)return new Ec("An empty string is not a valid Instant",n);var t=rr(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=rr(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+ee(rr(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return sn(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&mn(rr(r,s),50)>=0)return sn(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return sn(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return sn(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return sn(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return sn(n,"The input string is too short");var d=e,_=Fi(n,"'-'",d,lS);if(_!=null)return _;var m=e+3|0,w=Fi(n,"'-'",m,uS);if(w!=null)return w;var x=e+6|0,k=Fi(n,"'T' or 't'",x,cS);if(k!=null)return k;var S=e+9|0,z=Fi(n,"':'",S,fS);if(z!=null)return z;var I=e+12|0,A=Fi(n,"':'",I,vS);if(A!=null)return A;for(var O=eS(),D=0,J=O.length;D<J;){var T=O[D];D=D+1|0;var M=e+T|0,F=Fi(n,"an ASCII digit",M,hS);if(F!=null)return F}var B=dt(r,e+1|0),L=dt(r,e+4|0),H=dt(r,e+7|0),X=dt(r,e+10|0),$=dt(r,e+13|0),tr;if(rr(r,e+15|0)===46){var Y=e+16|0;e=Y;var G=0;r:for(;;){var ar;if(e<C(r)){var ur=rr(r,e);ar=48<=ur?ur<=57:!1}else ar=!1;if(!ar)break r;G=lr(G,10)+ee(rr(r,e),48)|0,e=e+1|0}var Q=e-Y|0,Tr;if(1<=Q&&Q<=9)Tr=lr(G,io()[9-Q|0]);else return sn(n,"1..9 digits are supported for the fraction of the second, got "+Q+" digits");tr=Tr}else e=e+15|0,tr=0;var wr=tr;if(e>=C(r))return sn(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),Ir;if(dr===122||dr===90){var br;if(C(r)===(e+1|0))br=0;else return sn(n,"Extra text after the instant at position "+(e+1|0));Ir=br}else if(dr===45||dr===43){var kr=C(r)-e|0;if(kr>9){var Pr=e,_r=C(r),Gr=b(qn(r,Pr,_r));return sn(n,'The UTC offset string "'+tf(Gr,16)+'" is too long')}if(kr%3|0){var an=e,Kr=C(r),gr=b(qn(r,an,Kr));return sn(n,'Invalid UTC offset string "'+gr+'"')}var Wr=tS(),Qr=0,un=Wr.length;r:for(;Qr<un;){var Fr=Wr[Qr];if(Qr=Qr+1|0,(e+Fr|0)>=C(r))break r;if(rr(r,e+Fr|0)!==58)return sn(n,"Expected ':' at index "+(e+Fr|0)+", got '"+yr(rr(r,e+Fr|0))+"'")}var rn=iS(),pn=0,vn=rn.length;r:for(;pn<vn;){var _n=rn[pn];if(pn=pn+1|0,(e+_n|0)>=C(r))break r;var re=rr(r,e+_n|0);if(!(48<=re&&re<=57))return sn(n,"Expected an ASCII digit at index "+(e+_n|0)+", got '"+yr(rr(r,e+_n|0))+"'")}var Fn=dt(r,e+1|0),$n;kr>3?$n=dt(r,e+4|0):$n=0;var de=$n,je;kr>6?je=dt(r,e+7|0):je=0;var pe=je;if(de>59)return sn(n,"Expected offset-minute-of-hour in 0..59, got "+de);if(pe>59)return sn(n,"Expected offset-second-of-minute in 0..59, got "+pe);if(Fn>17&&!(Fn===18&&de===0&&pe===0)){var Fe=e,$e=C(r),Ie=b(qn(r,Fe,$e));return sn(n,"Expected an offset in -18:00..+18:00, got "+Ie)}Ir=lr((lr(Fn,3600)+lr(de,60)|0)+pe|0,dr===45?-1:1)}else return sn(n,"Expected the UTC offset at position "+e+", got '"+yr(dr)+"'");var Jn=Ir;if(!(1<=B&&B<=12))return sn(n,"Expected a month number in 1..12, got "+B);if(!(1<=L&&L<=oS(B,Zv(h))))return sn(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+L);if(H>23)return sn(n,"Expected hour in 0..23, got "+H);if(X>59)return sn(n,"Expected minute-of-hour in 0..59, got "+X);if($>59)return sn(n,"Expected second-of-minute in 0..59, got "+$);var An=new zc(h,B,L,H,X,$,wr),xn=R(An.dk_1),zn=Ar(Ln(365),xn);if(er(xn,new y(0,0))>=0){var Ue=zn,Ti=hr(xn,R(3)),Ne=Cr(Ti,R(4)),ft=hr(xn,R(99)),qi=Cr(ft,R(100)),Oi=Br(Ne,qi),vt=hr(xn,R(399)),Ot=Cr(vt,R(400));zn=hr(Ue,hr(Oi,Ot))}else{var Ua=zn,Na=Cr(xn,R(-4)),Da=Cr(xn,R(-100)),La=Br(Na,Da),ji=Cr(xn,R(-400));zn=Br(Ua,hr(La,ji))}var jt=zn,ht=(lr(367,An.ek_1)-362|0)/12|0;zn=hr(jt,R(ht));var Ce=zn,Pa=An.fk_1-1|0;if(zn=hr(Ce,R(Pa)),An.ek_1>2){var Ui=zn;if(zn=Br(Ui,Ze()),!Zv(An.dk_1)){var Ut=zn;zn=Br(Ut,Ze())}}var Nt=zn,Ma=Br(Nt,R(719528)),Ni=(lr(An.gk_1,3600)+lr(An.hk_1,60)|0)+An.ik_1|0,Dt=Ar(Ma,R(86400)),Di=hr(Dt,R(Ni)),Lt=Br(Di,R(Jn)),Li=An.jk_1;return new rp(Lt,Li)}var h0;function tf(n,r){Rn();var e;return C(n)<=r?e=b(n):e=b(qn(n,0,r))+"...",e}function oS(n,r){switch(Rn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function Zv(n){return Rn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Ka(n,r,e){e<10&&n.da(48),r.ae(e)}function sn(n,r){return new Ec(r+' when parsing an Instant from "'+tf(n,64)+'"',n)}function Fi(n,r,e,t){var i=rr(n,e),a;return t(new Sn(i))?a=null:a=sn(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function lS(n){return Rn(),P(n,new Sn(45))}function uS(n){return Rn(),P(n,new Sn(45))}function cS(n){return Rn(),P(n,new Sn(84))||P(n,new Sn(116))}function fS(n){return Rn(),P(n,new Sn(58))}function vS(n){return Rn(),P(n,new Sn(58))}function hS(n){Rn();var r=n.x1_1;return 48<=r?r<=57:!1}function dt(n,r){return lr(ee(rr(n,r),48),10)+ee(rr(n,r+1|0),48)|0}var Vv;function Rn(){Vv||(Vv=!0,u0=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),c0=new Int32Array([1,2,4,5,7,8,10,11,13,14]),f0=new Int32Array([3,6]),v0=new Int32Array([1,2,4,5,7,8]))}function Su(){return p0(),d0}var d0;function dS(n,r){return p0(),new ip(n.uk_1,r).zk()}var Xv;function p0(){if(!Xv){Xv=!0;var n=_s();d0=n}}var Qv;function pS(){if(Qv)return sr;Qv=!0,_0=new ap("PUBLICATION",1)}var _0,ao;function so(){return pS(),_0}function _S(n){var r=n;return!(r instanceof Ct)}function g0(n){var r;return n instanceof Ct?r=n.el_1:r=null,r}function gS(n){var r;return n instanceof Ct?r=n.toString():r="Success("+le(n)+")",r}function mS(n){return n==null?0:Er(n)}function yS(n,r){if(!(r instanceof ri))return!1;var e=r.fl_1;return!!P(n,e)}function wS(n){var r=n;if(r instanceof Ct)throw n.el_1}function m0(n){return new Ct(n)}function U(n,r){return new wl(n,r)}var d1;function Ns(){return d1===l&&new op,d1}function bS(n,r){return n.length<=r?n:te(n,0,r)+"..."}function Hn(n,r,e){throw j.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var p1;function Nl(){return p1===l&&new lp,p1}function y0(n,r){var e=n&255,t=r&255;return Oe(e,t)}function kS(n,r){return y0(n.pl_1,r instanceof Pe?r.pl_1:g())}function _1(n){return(n&255).toString()}function xS(n,r){return!(!(r instanceof Pe)||n!==r.pl_1)}function rh(n){return new Int8Array(n)}function SS(n,r){var e=n[r];return e}function ES(n,r,e){var t=n;t[r]=e}function li(n){return n.length}function zS(n){return new up(n)}function w0(n,r){var e=n,t=r;return jw(e,t)}function IS(n,r){return r instanceof Pe?w0(n.ul_1,r instanceof Pe?r.pl_1:g()):!1}function CS(n){return n.length===0}function AS(n){return"UByteArray(storage="+b(n)+")"}function TS(n){return Er(n)}function qS(n,r){if(!(r instanceof ei))return!1;var e=r.ul_1;return!!P(n,e)}var g1;function Dl(){return g1===l&&new cp,g1}function b0(n,r){return Qi(n,r)}function OS(n,r){return b0(n.am_1,r instanceof Zn?r.am_1:g())}function m1(n){return(n>>>0).toString()}function jS(n,r){return!(!(r instanceof Zn)||n!==r.am_1)}function nh(n){return new Int32Array(n)}function US(n,r){var e=n[r];return e}function NS(n,r,e){var t=n;t[r]=e}function ui(n){return n.length}function DS(n){return new fp(n)}function k0(n,r){var e=n,t=r;return Uw(e,t)}function LS(n,r){return r instanceof Zn?k0(n.fm_1,r instanceof Zn?r.am_1:g()):!1}function PS(n){return n.length===0}function MS(n){return"UIntArray(storage="+b(n)+")"}function RS(n){return Er(n)}function BS(n,r){if(!(r instanceof ti))return!1;var e=r.fm_1;return!!P(n,e)}var y1;function Ds(){return y1===l&&new vp,y1}function x0(n,r){return yt(n,r)}function FS(n,r){return x0(n.lm_1,r instanceof Vn?r.lm_1:g())}function w1(n){var r=n;return _k(r,10)}function $S(n){return n.hashCode()}function JS(n,r){if(!(r instanceof Vn))return!1;var e=r.lm_1;return!!ir(n,e)}function eh(n){return di(n)}function HS(n,r){var e=n[r];return e}function GS(n,r,e){var t=n;t[r]=e}function ci(n){return n.length}function KS(n){return new hp(n)}function S0(n,r){var e=n,t=r;return Nw(e,t)}function WS(n,r){return r instanceof Vn?S0(n.qm_1,r instanceof Vn?r.lm_1:g()):!1}function YS(n){return n.length===0}function ZS(n){return"ULongArray(storage="+b(n)+")"}function VS(n){return Er(n)}function XS(n,r){if(!(r instanceof ii))return!1;var e=r.qm_1;return!!P(n,e)}var b1;function Ll(){return b1===l&&new dp,b1}function E0(n,r){var e=n&65535,t=r&65535;return Oe(e,t)}function QS(n,r){return E0(n.wm_1,r instanceof Me?r.wm_1:g())}function k1(n){return(n&65535).toString()}function rE(n,r){return!(!(r instanceof Me)||n!==r.wm_1)}function th(n){return new Int16Array(n)}function nE(n,r){var e=n[r];return e}function eE(n,r,e){var t=n;t[r]=e}function fi(n){return n.length}function tE(n){return new pp(n)}function z0(n,r){var e=n,t=r;return Dw(e,t)}function iE(n,r){return r instanceof Me?z0(n.bn_1,r instanceof Me?r.wm_1:g()):!1}function aE(n){return n.length===0}function sE(n){return"UShortArray(storage="+b(n)+")"}function oE(n){return Er(n)}function lE(n,r){if(!(r instanceof ai))return!1;var e=r.bn_1;return!!P(n,e)}function I0(n){return hE(n,10)}function uE(n){var r=dE(n),e,t=r;return(t==null?null:new Zn(t))==null?xa(n):e=r,e}function cE(n){var r=I0(n),e,t=r;return(t==null?null:new Vn(t))==null?xa(n):e=r,e}function fE(n){var r=pE(n),e,t=r;return(t==null?null:new Pe(t))==null?xa(n):e=r,e}function vE(n){var r=_E(n),e,t=r;return(t==null?null:new Me(t))==null?xa(n):e=r,e}function hE(n,r){wa(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=R(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=El(K(n,v),r);if(h<0)return null;var d=c,_=o;if(yt(d,_)>0)if(P(new Vn(o),new Vn(s))){o=pk(t,u);var m=c,w=o;if(yt(m,w)>0)return null}else return null;var x=c;c=Ar(x,u);var k=c,S=c,z=h,I=z,A=vs(R(I),new y(-1,0)),O=A;c=hr(S,O);var D=c;if(yt(D,k)<0)return null}while(f<e);return c}function dE(n){return af(n,10)}function pE(n){return gE(n,10)}function _E(n){return mE(n,10)}function af(n,r){wa(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=El(K(n,v),r);if(h<0)return null;var d=c,_=o;if(Qi(d,_)>0)if(P(new Zn(o),new Zn(s))){o=dk(t,u);var m=c,w=o;if(Qi(m,w)>0)return null}else return null;var x=c;c=lr(x,u);var k=c,S=c,z=h;c=S+z|0;var I=c;if(Qi(I,k)<0)return null}while(f<e);return c}function gE(n,r){var e=af(n,r),t,i=e;if((i==null?null:new Zn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(Qi(a,o)>0)return null;var u=a;return Nn(u)}function mE(n,r){var e=af(n,r),t,i=e;if((i==null?null:new Zn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(Qi(a,o)>0)return null;var u=a;return Bc(u)}Mr(gc,"CharSequence");Mr(Se,"Comparable");p(Lh,"Number");p(Ph);p(Mh);p(Rh);Xr(Bh);p(Sn,"Char",l,l,[Se]);Mr(W,"Collection");Mr(qe,"Set",l,l,[W]);Mr(En,"List",l,l,[W]);Mr(Xe,"Entry");Mr(yn,"Map");Mr(ia,"MutableMap",l,l,[yn]);Xr(_w);p(ie,"Enum",l,l,[Se]);Xr(Fh);p(y,"Long",l,l,[Se]);Mr(bn,"FunctionAdapter");p($h);N(gw,"ByteCompanionObject");N(mw,"ShortCompanionObject");N(yw,"IntCompanionObject");N(ww,"FloatCompanionObject");N(bw,"DoubleCompanionObject");N(kw,"StringCompanionObject");N(xw,"BooleanCompanionObject");N(Jh,"Digit");Mr(dn,"Comparator");N(dl,"Unit");p(ha,"AbstractCollection",l,l,[W]);p(bs,"AbstractMutableCollection",l,l,[W]);p(mc,"IteratorImpl");p(Hh,"ListIteratorImpl");p(Gh,"AbstractMutableList",l,l,[En,W]);p(Kh,"AbstractMap",l,l,[yn]);p(Wh,"AbstractMutableMap",l,l,[ia]);p(ks,"AbstractMutableSet",l,l,[qe,W]);Xr(Yh);Mr(xs,"RandomAccess");p(q,"ArrayList",q.m,l,[En,W,xs]);p(ls,"HashMap",ls.x6,l,[ia]);p(Zh,"HashMapKeys",l,l,[qe,W]);p(Vh,"HashMapValues",l,l,[W]);p(Xh,"HashMapEntrySetBase",l,l,[qe,W]);p(Qh,"HashMapEntrySet");p(rd);p(nd,"HashMapKeysDefault");p(ed);p(td,"HashMapValuesDefault");p(vi,"HashSet",vi.n8,l,[qe,W]);Xr(id);p(pl,"Itr");p(ad,"KeysItr");p(sd,"ValuesItr");p(od,"EntriesItr");p(ld,"EntryRef",l,l,[Xe]);Mr(ud,"InternalMap");Lr(Qe).h8=Sw;p(Qe,"InternalHashMap",Qe.i7,l,[ud]);p(vr,"LinkedHashMap",vr.q4,l,[ia]);p(Cn,"LinkedHashSet",Cn.e1,l,[qe,W]);Mr(tt,"Continuation");N(cd,"CompletedContinuation",l,l,[tt]);p(yc,"InterceptedCoroutine",l,l,[tt]);p(wc,"GeneratorCoroutineImpl",l,l,[tt]);p(fd,l,l,l,[tt]);p(us,"Exception",us.nb);p(se,"RuntimeException",se.hb);p(oe,"UnsupportedOperationException",oe.p6);p(j,"IllegalArgumentException",j.kb);p(qr,"NoSuchElementException",qr.j1);p(Gn,"IndexOutOfBoundsException",Gn.sb);p(Sr,"IllegalStateException",Sr.ub);p(co,"ConcurrentModificationException",co.m9);p(Ou,"ArithmeticException",Ou.yb);p(fo,"Error",fo.ec);p(Xa,"AssertionError",Xa.cc);p(ju,"NumberFormatException",ju.mc);p(Uu,"NoWhenBranchMatchedException",Uu.s3);p(Nu,"NullPointerException",Nu.w3);p(Du,"ClassCastException",Du.a4);Mr(Ge,"KClass");p(da,"KClassImpl",l,l,[Ge]);p(en,"PrimitiveKClassImpl");N(bc,"NothingKClassImpl");p(Lu,"SimpleKClassImpl");Mr(yi,"KProperty1");N(vd,"PrimitiveClasses");p(ev,"CharacterCodingException",ev.wd);p(nn,"StringBuilder",nn.f,l,[gc]);Xr(hd);p(bt,"Regex");p(_l,"MatchGroup");p(dd,l,l,l,[W]);p(kc,"AbstractList",l,l,[En]);p(pd);p(_d);p(Ew,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(_t,"DurationUnit");p(xc,"IteratorImpl");p(gd,"ListIteratorImpl");Xr(md);p(yd);p(wd);Xr(zw);p(bd,"AbstractSet",l,l,[qe]);p(kd);p(xd);Xr(Sd);N(Ed,"EmptyList",l,l,[En,xs]);N(zd,"EmptyIterator");p(gl,"IndexedValue");p(Id,"IndexingIterable");p(Cd,"IndexingIterator");Mr(Ad,"MapWithDefault",l,l,[yn]);N(Td,"EmptyMap",l,l,[yn]);p(qd,"IntIterator");p(Od);p(jd,"TransformingSequence");Mr(ml,"DropTakeSequence");p(Ud);p(yl,"TakeSequence",l,l,[ml]);N(Nd,"EmptySequence",l,l,[ml]);p(Dd);p(Sc,"GeneratorSequence");N(Ld,"EmptySet",l,l,[qe]);N(Pd,"NaturalOrderComparator",l,l,[dn]);p(Md,"sam$kotlin_Comparator$0",l,l,[dn,bn]);N(Rd,"Key");Mr(Iw,"ContinuationInterceptor");N(Bd,"EmptyCoroutineContext");p(Fd,"CoroutineSingletons");p($d,"EnumEntriesList",l,l,[En,xs]);Xr(Jd);p(Ss,"IntProgression");Mr(Yi,"ClosedRange");p(It,"IntRange",l,l,[Yi]);p(Hd,"IntProgressionIterator");Xr(Gd);p(Kd);p(Wd,"DelimitedRangesSequence");N(Cw,"State");p(Yd,"LinesIterator");p(Zd);Xr(Vd);p(me,"Duration",l,l,[Se]);Xr(Xd);p(Pu,"LongParser");N(Aw,"FractionalParser");Xr(Qd);p(rt,"Instant",l,l,[Se]);p(rp,"Success");p(Ec,"Failure");Xr(np);p(zc,"UnboundLocalDateTime");p(Ic,"InstantFormatException");p(ep,"DeepRecursiveScope",l,l,l,[1,2]);p(tp,"DeepRecursiveFunction");p(ip,"DeepRecursiveScopeImpl",l,l,[tt],[1,2]);p(ap,"LazyThreadSafetyMode");p(Cc,"UnsafeLazyImpl");N(sp,"UNINITIALIZED_VALUE");Xr(Tw);p(Ct,"Failure");p(ri,"Result");p(tv,"NotImplementedError",tv.bb);p(wl,"Pair");Xr(op);p(kt,"Uuid",l,l,[Se]);Xr(lp);p(Pe,"UByte",l,l,[Se]);p(up,"Iterator");p(ei,"UByteArray",l,l,[W]);Xr(cp);p(Zn,"UInt",l,l,[Se]);p(fp,"Iterator");p(ti,"UIntArray",l,l,[W]);Xr(vp);p(Vn,"ULong",l,l,[Se]);p(hp,"Iterator");p(ii,"ULongArray",l,l,[W]);Xr(dp);p(Me,"UShort",l,l,[Se]);p(pp,"Iterator");p(ai,"UShortArray",l,l,[W]);sr=new dl;no=null;hs=new id;d_=new cd;On=new md;ds=new Sd;ps=new zd;Il=new Nd;P_=new Pd;o1=new Rd;Xc=new Gd;h0=new np;ao=new sp;var Zr=Math.imul;class Pl{}class na{}class cr{}class Pn extends j{static nn(){var r=this.kb();return Eu(r),r}static on(r){var e=this.v(r);return Eu(e),e}static pn(r,e){var t=this.lb(r,e);return Eu(t),t}}class Ml extends Pn{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return ln(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Ml.xn(r,this,this.un_1,this.vn_1)}}class fe{}function xi(){return!1}function Si(){return!1}function Ls(){return mr()}class C0{}class A0{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class T0{constructor(r){this.po_1=r}x(){return new A0(this.po_1)}}class q0{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=mr(),this.to_1=q.m(),this.uo_1=vi.n8(),this.vo_1=q.m(),this.wo_1=q.m(),this.xo_1=q.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw j.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?mr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=sr):s=a.yo.call(this,r,e,t,i),s}}class Ps{}class Sa{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=Qw(a.to_1);var s=this,o=a.to_1;s.fp_1=mi(o),this.gp_1=O1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=mi(c),this.ip_1=rb(a.xo_1);for(var f=this,v=Hw(this.fp_1),h=q.g1(Yr(v,10)),d=v.x();d.y();){var _=d.z(),m=U(_.xg_1,_.wg_1);h.n(m)}f.jp_1=O_(h),this.kp_1=O1(i);var w=this;w.lp_1=__(JE(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return ea(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return ea(this.hp_1,r)}lo(r){return ea(this.gp_1,r)}mo(r){return um(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Sa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Fc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return Vg(this)}toString(){return im(this)}}class Ea{toString(){return on(Ur(this).oc())}hashCode(){return ae(this.toString())}}class Rl extends Ea{constructor(){zo=null,super(),zo=this}}class O0 extends Ea{constructor(){Io=null,super(),Io=this}}class Ms extends Ea{}class j0 extends Ms{constructor(){Co=null,super(),Co=this}}class U0 extends Ms{constructor(){Ao=null,super(),Ao=this}}class N0 extends Ms{constructor(){To=null,super(),To=this}}class D0 extends Ms{constructor(){qo=null,super(),qo=this}}class Bn extends Ea{}class L0 extends Bn{constructor(){Oo=null,super(),Oo=this}}class P0 extends Bn{constructor(){jo=null,super(),jo=this}}class M0 extends Bn{constructor(){Uo=null,super(),Uo=this}}class R0 extends Bn{constructor(){No=null,super(),No=this}}class B0 extends Bn{constructor(){Do=null,super(),Do=this}}class F0 extends Bn{constructor(){Lo=null,super(),Lo=this}}class $0 extends Bn{constructor(){Po=null,super(),Po=this}}class J0 extends Bn{constructor(){Mo=null,super(),Mo=this}}class H0 extends Bn{constructor(){Ro=null,super(),Ro=this}}class za extends Ea{}class G0 extends za{constructor(){Bo=null,super(),Bo=this}}class Bl{}function K0(n){return n.fn(this)}class Fl{}function W0(){return!1}function Y0(n){return-1}function Z0(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class Ei{np(){throw Pn.on(b(Ur(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof Sn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class sf{}function yE(n,r){return this.cq(n)}function wE(n,r){n.en(this,r)}class Rs{static tq(){return bi(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw Pn.on("Non-serializable "+b(Ur(r))+" is not supported by "+b(Ur(this))+" encoder")}wq(){throw Pn.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new Sn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):hz()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class fa{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class V0{constructor(){z1=this,this.vr_1=dz()}dn(){return this.vr_1}wr(r,e){throw Pn.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw Pn.on("'kotlin.Nothing' does not have instances")}}class X0{constructor(){I1=this,this.xr_1=new kn("kotlin.time.Duration",Aa())}dn(){return this.xr_1}yr(r,e){r.fr(R2(e))}en(r,e){return this.yr(r,e instanceof me?e.kj_1:g())}zr(r){return Jr().lj(r.yp())}fn(r){return new me(this.zr(r))}}class Q0{constructor(){C1=this,this.as_1=new kn("kotlin.time.Instant",Aa())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof rt?e:g())}fn(r){return wt().xj(r.yp())}}class rg{constructor(){A1=this,this.cs_1=new kn("kotlin.uuid.Uuid",Aa())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof kt?e:g())}fn(r){return Ns().gl(r.yp())}}class qt{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Fs()}go(){return this.hs_1}io(r){return gt(r,this.co()),r.toString()}jo(r){var e=Al(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return gt(r,this.co()),!1}ko(r){return gt(r,this.co()),mr()}lo(r){return gt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof qt?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Zr(Er(this.gs_1),31)+ae(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class ng extends qt{co(){return"kotlin.collections.ArrayList"}}class zi{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Kl()}go(){return this.ls_1}io(r){return gt(r,this.co()),r.toString()}jo(r){var e=Al(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return gt(r,this.co()),!1}ko(r){return gt(r,this.co()),mr()}lo(r){gt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw Sr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof zi)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=ae(this.co());return r=Zr(31,r)+Er(this.js_1)|0,r=Zr(31,r)+Er(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class eg extends zi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class tg extends qt{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class of{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw j.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+fn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=sr):s=a.gt.call(this,r,e,t,i),s}}class lf extends of{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw j.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class ig extends lf{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&E(r,W)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&E(r,W)?r:g())}}class ag extends ig{constructor(r){super(r),this.qs_1=new ng(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?q.m():q.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof q?r:g())}us(r){return r}vs(r){return this.us(r instanceof q?r:g())}ws(r,e){if(r instanceof q)return r.k6(e),r;if(e===r.c1())return q.f1(r);var t=q.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&E(r,En)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof q?r:g(),e,t)}}class sg extends of{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw j.v(b(a))}var s=fb(jc(0,Zr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&E(e,ia)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw j.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Bn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,ye(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&E(t,ia)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class og extends sg{constructor(r,e){super(r,e),this.lt_1=new eg(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&E(r,yn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&E(r,yn)?r:g())}rs(r){return r===-1?vr.q4():ih(r)}qt(r){return Zr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=ih(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&E(r,yn)?r:g(),e)}}class ve extends lf{constructor(r){super(r),this.yt_1=new tg(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof jn?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof jn?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw Sr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw Sr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof jn?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class jn{static ku(){return bi(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=sr):t=e.lu.call(this,r),t}}let lg=class{constructor(){T1=this,this.nu_1=di(0)}};class ug{constructor(r,e){ah(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Yn(new y(-1,-1),t),i.qu_1=a,this.ru_1=ah().nu_1}else this.qu_1=new y(0,0),this.ru_1=lz(this,t)}su(r){r<64?this.qu_1=pi(this.qu_1,Yn(new y(1,0),r)):uz(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=Qp(Dc(this.qu_1));if(this.qu_1=pi(this.qu_1,Yn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?cz(this):-1}}class Ia{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=ho(this.jv_1),this.pv_1=Nr();var f=this,v=so();f.qv_1=eo(v,wz(this));var h=this,d=so();h.rv_1=eo(d,kz(this));var _=this,m=so();_.sv_1=eo(m,Sz(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Gl()}ho(){var r=this.nv_1;return r??mr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=yi;return ma("typeParameterDescriptors",1,e,xz(),null),r.l2()}lo(r){return ea(nm(this),r).dn()}mo(r){return um(this.ov_1,r)}ko(r){var e=ea(this.mv_1,r);return e??mr()}io(r){return ea(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ia)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Fc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return em(this)}toString(){return im(this)}}class $l extends Ia{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Zr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof $l)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&Fc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class cg{}function bE(){return am()}class uf{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw Sr.o3(b(r))}en(r,e){var t="unsupported";throw Sr.o3(b(t))}fn(r){var e="unsupported";throw Sr.o3(b(e))}}class fg extends Rs{constructor(){return new.target.yv()}static yv(){Fo=null;var r=this.tq();return Fo=r,r.xv_1=Wl(),r}pq(){return this.xv_1}vq(r){return sr}wq(){return sr}xq(r){return sr}yq(r){return sr}zq(r){return sr}ar(r){return sr}br(r){return sr}cr(r){return sr}dr(r){return sr}er(r){return sr}fr(r){return sr}}class Bs{constructor(){q1=this,this.zv_1=mf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Wa()}jo(r){Wa()}mo(r){Wa()}lo(r){Wa()}ko(r){Wa()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return ae(this.aw_1)+Zr(31,this.zv_1.hashCode())|0}}class vg{}class hg{constructor(r,e){this.bw_1=e,this.cw_1=mr();var t=this,i=so();t.dw_1=eo(i,_z(r,this))}dn(){var r=this.dw_1,e=yi;return ma("descriptor",1,e,gz(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw Pn.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class dg extends ve{constructor(){$o=null,super(Gg(Nc())),$o=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&es(r)?r:g())}iw(r,e){return e===r.length?Rt.lw(r):Rt.mw(Wu(r,e),r.length)}xs(r,e){return this.iw(r!=null&&es(r)?r:g(),e)}gu(r){return Rt.nw(r)}fu(){return Rt.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof Rt?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof Rt?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&es(e)?e:g(),t)}}class pg extends ve{constructor(){Jo=null,super(Kg()),Jo=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&as(r)?r:g())}vw(r,e){return e===r.length?Bt.yw(r):Bt.zw(Yu(r,e),r.length)}xs(r,e){return this.vw(r!=null&&as(r)?r:g(),e)}gu(r){return Bt.ax(r)}fu(){return Bt.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Bt?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Bt?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&as(e)?e:g(),t)}}class _g extends ve{constructor(){Ho=null,super(Wg()),Ho=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&is(r)?r:g())}ix(r,e){return e===r.length?Ft.lx(r):Ft.mx(Zu(r,e),r.length)}xs(r,e){return this.ix(r!=null&&is(r)?r:g(),e)}gu(r){return Ft.nx(r)}fu(){return Ft.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Ft?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Ft?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&is(e)?e:g(),t)}}class gg extends ve{constructor(){Go=null,super(pf(bl())),Go=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&Zi(r)?r:g())}vx(r,e){return e===r.length?$t.yx(r):$t.zx(oa(r,e),r.length)}xs(r,e){return this.vx(r!=null&&Zi(r)?r:g(),e)}gu(r){return $t.ay(r)}fu(){return $t.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof $t?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof $t?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&Zi(e)?e:g(),t)}}class mg extends ve{constructor(){Ko=null,super(Jl(Ds())),Ko=this}hy(r){return ci(r)}nt(r){return this.hy(r instanceof ii?r.qm_1:g())}iy(r,e){if(e===ci(r))return Jt.ly(r);var t=oa(r,e);return Jt.my(t,ci(r))}xs(r,e){return this.iy(r instanceof ii?r.qm_1:g(),e)}gu(r){return Jt.ny(r)}fu(){return Jt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Jt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Jt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=HS(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof ii?e.qm_1:g(),t)}}class yg extends ve{constructor(){Wo=null,super(df()),Wo=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&ts(r)?r:g())}vy(r,e){return e===r.length?Ht.yy(r):Ht.zy(gi(r,e),r.length)}xs(r,e){return this.vy(r!=null&&ts(r)?r:g(),e)}gu(r){return Ht.az(r)}fu(){return Ht.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Ht?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&ts(e)?e:g(),t)}}class wg extends ve{constructor(){Yo=null,super(ff(Dl())),Yo=this}hz(r){return ui(r)}nt(r){return this.hz(r instanceof ti?r.fm_1:g())}iz(r,e){if(e===ui(r))return Gt.lz(r);var t=gi(r,e);return Gt.mz(t,ui(r))}xs(r,e){return this.iz(r instanceof ti?r.fm_1:g(),e)}gu(r){return Gt.nz(r)}fu(){return Gt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Gt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Gt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=US(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof ti?e.fm_1:g(),t)}}class bg extends ve{constructor(){Zo=null,super(gf()),Zo=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&ns(r)?r:g())}vz(r,e){return e===r.length?Kt.yz(r):Kt.zz(la(r,e),r.length)}xs(r,e){return this.vz(r!=null&&ns(r)?r:g(),e)}gu(r){return Kt.a10(r)}fu(){return Kt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Kt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Kt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&ns(e)?e:g(),t)}}class kg extends ve{constructor(){Vo=null,super(hf(Ll())),Vo=this}h10(r){return fi(r)}nt(r){return this.h10(r instanceof ai?r.bn_1:g())}i10(r,e){if(e===fi(r))return Wt.l10(r);var t=la(r,e);return Wt.m10(t,fi(r))}xs(r,e){return this.i10(r instanceof ai?r.bn_1:g(),e)}gu(r){return Wt.n10(r)}fu(){return Wt.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Wt?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Wt?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=nE(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof ai?e.bn_1:g(),t)}}class xg extends ve{constructor(){Xo=null,super(_f()),Xo=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&rs(r)?r:g())}v10(r,e){return e===r.length?Yt.y10(r):Yt.z10(ua(r,e),r.length)}xs(r,e){return this.v10(r!=null&&rs(r)?r:g(),e)}gu(r){return Yt.a11(r)}fu(){return Yt.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof Yt?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof Yt?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&rs(e)?e:g(),t)}}class Sg extends ve{constructor(){Qo=null,super(vf(Nl())),Qo=this}h11(r){return li(r)}nt(r){return this.h11(r instanceof ei?r.ul_1:g())}i11(r,e){if(e===li(r))return Zt.l11(r);var t=ua(r,e);return Zt.m11(t,li(r))}xs(r,e){return this.i11(r instanceof ei?r.ul_1:g(),e)}gu(r){return Zt.n11(r)}fu(){return Zt.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof Zt?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof Zt?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=SS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof ei?e.ul_1:g(),t)}}class Eg extends ve{constructor(){rl=null,super(Yg()),rl=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&Qa(r)?r:g())}v11(r,e){return e===r.length?Vt.y11(r):Vt.z11(Vu(r,e),r.length)}xs(r,e){return this.v11(r!=null&&Qa(r)?r:g(),e)}gu(r){return Vt.a12(r)}fu(){return Vt.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof Vt?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof Vt?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&Qa(e)?e:g(),t)}}class Rt extends jn{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(fs(r),0)}static ow(){return this.mw(fs(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Wu(this.jw_1,fn(r,Zr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Wu(this.jw_1,this.kw_1)}}class Bt extends jn{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=Yu(this.ww_1,fn(r,Zr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return Yu(this.ww_1,this.xw_1)}}class Ft extends jn{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=Zu(this.jx_1,fn(r,Zr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return Zu(this.jx_1,this.kx_1)}}class $t extends jn{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(di(r),0)}static by(){return this.zx(di(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=oa(this.wx_1,fn(r,Zr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return oa(this.wx_1,this.xx_1)}}class Jt extends jn{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,ci(r))}static ny(r){return this.my(eh(r),0)}static oy(){return this.my(eh(10),0)}au(){return this.ky_1}lu(r){if(ci(this.jy_1)<r){var e=this,t=this.jy_1,i=fn(r,Zr(ci(this.jy_1),2));e.jy_1=oa(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,GS(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return oa(r,e)}cu(){return new ii(this.f12())}}class Ht extends jn{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=gi(this.wy_1,fn(r,Zr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return gi(this.wy_1,this.xy_1)}}class Gt extends jn{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,ui(r))}static nz(r){return this.mz(nh(r),0)}static oz(){return this.mz(nh(10),0)}au(){return this.kz_1}lu(r){if(ui(this.jz_1)<r){var e=this,t=this.jz_1,i=fn(r,Zr(ui(this.jz_1),2));e.jz_1=gi(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,NS(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return gi(r,e)}cu(){return new ti(this.g12())}}class Kt extends jn{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=la(this.wz_1,fn(r,Zr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return la(this.wz_1,this.xz_1)}}class Wt extends jn{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,fi(r))}static n10(r){return this.m10(th(r),0)}static o10(){return this.m10(th(10),0)}au(){return this.k10_1}lu(r){if(fi(this.j10_1)<r){var e=this,t=this.j10_1,i=fn(r,Zr(fi(this.j10_1),2));e.j10_1=la(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,eE(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return la(r,e)}cu(){return new ai(this.h12())}}class Yt extends jn{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=ua(this.w10_1,fn(r,Zr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return ua(this.w10_1,this.x10_1)}}class Zt extends jn{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,li(r))}static n11(r){return this.m11(rh(r),0)}static o11(){return this.m11(rh(10),0)}au(){return this.k11_1}lu(r){if(li(this.j11_1)<r){var e=this,t=this.j11_1,i=fn(r,Zr(li(this.j11_1),2));e.j11_1=ua(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,ES(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return ua(r,e)}cu(){return new ei(this.i12())}}class Vt extends jn{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(ho(r),0)}static b12(){return this.z11(ho(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=Vu(this.w11_1,fn(r,Zr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return Vu(this.w11_1,this.x11_1)}}class zg{constructor(){j1=this,this.j12_1=new kn("kotlin.String",Aa())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class kn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){Ya(this)}jo(r){Ya(this)}mo(r){Ya(this)}lo(r){Ya(this)}ko(r){Ya(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof kn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return ae(this.l12_1)+Zr(31,this.m12_1.hashCode())|0}}class Ig{constructor(){U1=this,this.n12_1=new kn("kotlin.Int",XE())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class Cg{constructor(){N1=this,this.p12_1=new kn("kotlin.Long",QE())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class Ag{constructor(){D1=this,this.r12_1=new kn("kotlin.Byte",YE())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class Tg{constructor(){L1=this,this.t12_1=new kn("kotlin.Short",VE())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class qg{constructor(){P1=this,this.v12_1=new kn("kotlin.Char",ZE())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof Sn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new Sn(this.x12(r))}}class Og{constructor(){M1=this,this.y12_1=new kn("kotlin.Double",nz())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class jg{constructor(){R1=this,this.a13_1=new kn("kotlin.Float",rz())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Ug{constructor(){B1=this,this.c13_1=new kn("kotlin.Boolean",WE())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class Ng{constructor(){F1=this,this.e13_1=new hg("kotlin.Unit",sr)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,sr)}en(r,e){return this.f13(r,e instanceof dl?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),sr}}class Ca{constructor(){var r=this;r.m13_1=q.m(),this.n13_1=!1}pq(){return Wl()}r13(r){throw Pn.on(b(Ur(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof Sn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return Qz(this,a,rI(this,t,i))}o13(){return kp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(Os(this.m13_1));return this.n13_1=!0,r}}class Dg extends Ca{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":V(this.m13_1,".","$.")}}class Lg{constructor(){$1=this,this.f14_1=$s("kotlin.UInt",df())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Zn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Zn(this.h14(r))}}class Pg{constructor(){J1=this,this.i14_1=$s("kotlin.ULong",pf(bl()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Vn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Vn(this.k14(r))}}class Mg{constructor(){H1=this,this.l14_1=$s("kotlin.UByte",_f())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof Pe?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new Pe(this.n14(r))}}class Rg{constructor(){G1=this,this.o14_1=$s("kotlin.UShort",gf())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Me?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Me(this.q14(r))}}class Bg{zn(r,e,t){return e=e===l?mr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class Fg extends Bg{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(Ur(e)),a=i!=null&&E(i,Pl)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(E(t,yn)?t:g()).o2(e);var a=i,s=a!=null&&E(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||E(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof $g){var s=E(i,Ge)?i:g(),o=a.c15_1;r.d15(s,E(o,cr)?o:g())}else a instanceof Jg?r.b15(i,a.a15_1):Is()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=E(f,Ge)?f:g(),x=E(_,Ge)?_:g(),k=E(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var z=S.z(),I=z.k2(),A=z.l2(),O=E(I,Ge)?I:g();r.f15(O,typeof A=="function"?A:g())}for(var D=this.x14_1.r2().x();D.y();){var J=D.z(),T=J.k2(),M=J.l2(),F=E(T,Ge)?T:g();r.g15(F,typeof M=="function"?M:g())}}}class cf{}class $g extends cf{}class Jg extends cf{}class Hg{}function kE(n,r){return this.b15(n,oI(r))}class xE{}function SE(n,r,e){var t=n.gn(r,e),i;return t==null?tz(Ur(e),n.hn()):i=t,i}function x1(n,r,e){var t=n.in(r,e),i;return t==null?Qg(e,n.hn()):i=t,i}function Eu(n){ln(n,n.mn_1)}function ms(n){return Bz()}function ff(n){return nI()}function Jl(n){return eI()}function vf(n){return tI()}function hf(n){return iI()}function df(n){return Fz()}function pf(n){return $z()}function _f(n){return Jz()}function gf(n){return Hz()}function Gg(n){return Gz()}function EE(){return Cz()}function Kg(n){return Kz()}function zE(){return Az()}function Wg(n){return Wz()}function IE(){return Tz()}function CE(){return qz()}function AE(){return Oz()}function TE(){return jz()}function qE(){return Uz()}function OE(){return Nz()}function jE(){return Dz()}function UE(){return Lz()}function NE(){return Pz()}function Yg(n){return Yz()}function DE(){return Mz()}function LE(n){return Zz()}function PE(){return iz()}function ME(n){return az()}function RE(n){return sz()}function BE(n){return oz()}function S1(n){return new ag(n)}function E1(n,r){return new og(n,r)}function FE(n,r){var e=Zg(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function Zg(n){var r;return n instanceof C0?r=n.bo_1:n instanceof vg?r=Zg(n.ao_1):r=null,r}function $E(n){return new T0(n)}function Hl(n,r,e,t){var i;if(t===l?i=KE:i=t,t=i,lt(n)){var a="Blank serial names are prohibited";throw j.v(b(a))}if(P(r,Gl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw j.v(b(s))}var o=new q0(n);return t(o),new Sa(n,r,o.to_1.c1(),Jw(e),o)}function Vg(n){var r=n.lp_1,e=yi;return ma("_hashCode",1,e,HE(),null),r.l2()}function JE(n){return()=>tm(n,n.kp_1)}function HE(){return Re(n=>Vg(n),1,0,0)}function GE(n,r){if(lt(n)){var e="Blank serial names are prohibited";throw j.v(b(e))}return Vz(n,r)}function KE(n){return sr}var zo;function Ii(){return zo===l&&new Rl,zo}var Io;function Xg(){return Io===l&&new O0,Io}var Co;function Gl(){return Co===l&&new j0,Co}var Ao;function Fs(){return Ao===l&&new U0,Ao}var To;function Kl(){return To===l&&new N0,To}var qo;function mf(){return qo===l&&new D0,qo}var Oo;function WE(){return Oo===l&&new L0,Oo}var jo;function YE(){return jo===l&&new P0,jo}var Uo;function ZE(){return Uo===l&&new M0,Uo}var No;function VE(){return No===l&&new R0,No}var Do;function XE(){return Do===l&&new B0,Do}var Lo;function QE(){return Lo===l&&new F0,Lo}var Po;function rz(){return Po===l&&new $0,Po}var Mo;function nz(){return Mo===l&&new J0,Mo}var Ro;function Aa(){return Ro===l&&new H0,Ro}var Bo;function ez(){return Bo===l&&new G0,Bo}function tz(n,r){var e=n.oc();Qg(e??b(n),r)}function Qg(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw Pn.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var z1;function iz(){return z1===l&&new V0,z1}var I1;function az(){return I1===l&&new X0,I1}var C1;function sz(){return C1===l&&new Q0,C1}var A1;function oz(){return A1===l&&new rg,A1}function gt(n,r){if(n<0)throw Gn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function ih(n){var r=n;return vr.ha(r)}var T1;function ah(){return T1===l&&new lg,T1}function lz(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=di(e);return t!==0&&(i[Bw(i)]=Yn(new y(-1,-1),r)),i}function uz(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=pi(n.ru_1[e],Yn(new y(1,0),t))}function cz(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Zr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=Qp(Dc(a));a=pi(a,Yn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function $s(n,r){return new $l(n,new uf(r))}function fz(n,r){return n.yn(r)}function vz(n){return yz(n)}var Fo;function hz(){return Fo===l&&fg.yv(),Fo}function Wa(n){throw Sr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var q1;function dz(){return q1===l&&new Bs,q1}function pz(n){return r=>(r.so_1=n.cw_1,sr)}function _z(n,r){return()=>{var e=mf();return Hl(n,e,[],pz(r))}}function gz(){return Re(n=>n.dn(),1,0,1)}function mz(){return yf(),rm}var rm;function yz(n){if(yf(),E(n,Ps))return n.mp();var r=vi.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function O1(n){yf();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=mi(e);var i=t;return i??mz()}var sh;function yf(){sh||(sh=!0,rm=[])}function nm(n){var r=n.qv_1,e=yi;return ma("childSerializers",1,e,bz(),null),r.l2()}function em(n){var r=n.sv_1,e=yi;return ma("_hashCode",1,e,Ez(),null),r.l2()}function wz(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??am()}}function bz(){return Re(n=>nm(n),1,0,2)}function kz(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=q.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return O1(t)}}function xz(){return Re(n=>n.tv(),1,0,3)}function Sz(n){return()=>tm(n,n.tv())}function Ez(){return Re(n=>em(n),1,0,4)}function tm(n,r){var e=ae(n.co());e=Zr(31,e)+tk(r)|0;for(var t=$E(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Zr(31,o),c=s.co(),f=c==null?null:Er(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Zr(31,m),x=_.do(),k=x==null?null:Er(x);h=w+(k??0)|0}var S=h;return e=Zr(31,e)+v|0,e=Zr(31,e)+S|0,e}function im(n){var r=jc(0,n.go()),e=n.co()+"(";return V(r,", ",e,")",l,l,zz(n))}function zz(n){return r=>n.io(r)+": "+n.lo(r).co()}function am(){return Iz(),sm}var sm,oh;function Iz(){oh||(oh=!0,sm=[])}var $o;function Cz(){return $o===l&&new dg,$o}var Jo;function Az(){return Jo===l&&new pg,Jo}var Ho;function Tz(){return Ho===l&&new _g,Ho}var Go;function qz(){return Go===l&&new gg,Go}var Ko;function Oz(){return Ko===l&&new mg,Ko}var Wo;function jz(){return Wo===l&&new yg,Wo}var Yo;function Uz(){return Yo===l&&new wg,Yo}var Zo;function Nz(){return Zo===l&&new bg,Zo}var Vo;function Dz(){return Vo===l&&new kg,Vo}var Xo;function Lz(){return Xo===l&&new xg,Xo}var Qo;function Pz(){return Qo===l&&new Sg,Qo}var rl;function Mz(){return rl===l&&new Eg,rl}function Rz(){return wf(),om}var om,j1;function Bz(){return j1===l&&new zg,j1}function Ya(n){throw Sr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var U1;function Fz(){return U1===l&&new Ig,U1}var N1;function $z(){return N1===l&&new Cg,N1}var D1;function Jz(){return D1===l&&new Ag,D1}var L1;function Hz(){return L1===l&&new Tg,L1}var P1;function Gz(){return P1===l&&new qg,P1}var M1;function Kz(){return M1===l&&new Og,M1}var R1;function Wz(){return R1===l&&new jg,R1}var B1;function Yz(){return B1===l&&new Ug,B1}var F1;function Zz(){return F1===l&&new Ng,F1}function Vz(n,r){return wf(),Xz(n),new kn(n,r)}function Xz(n){wf();for(var r=Rz().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw j.v(c2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Ur(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var lh;function wf(){lh||(lh=!0,om=lI())}function Qz(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function rI(n,r,e){return()=>n.aq(r,e)}var $1;function nI(){return $1===l&&new Lg,$1}var J1;function eI(){return J1===l&&new Pg,J1}var H1;function tI(){return H1===l&&new Mg,H1}var G1;function iI(){return G1===l&&new Rg,G1}function aI(){return sI(),lm}var lm,uh;function sI(){uh||(uh=!0,lm=new Fg(Nr(),Nr(),Nr(),Nr(),Nr(),!1))}function Wl(){return aI()}function oI(n){return r=>n}function ea(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Gn.tb("Index "+r+" out of bounds "+qw(n).toString());return n[r]}function um(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Gn.tb("Index "+r+" out of bounds "+$w(n).toString());return n[r]}function lI(){return zl([U(xr().id(),ms()),U(jr(Sn),Gg(Nc())),U(xr().ld(),EE()),U(xr().gd(),Kg()),U(xr().sd(),zE()),U(xr().fd(),Wg()),U(xr().rd(),IE()),U(xr().ed(),pf(bl())),U(xr().qd(),CE()),U(jr(Vn),Jl(Ds())),U(jr(ii),AE()),U(xr().dd(),df()),U(xr().od(),TE()),U(jr(Zn),ff(Dl())),U(jr(ti),qE()),U(xr().cd(),gf()),U(xr().nd(),OE()),U(jr(Me),hf(Ll())),U(jr(ai),jE()),U(xr().bd(),_f()),U(xr().md(),UE()),U(jr(Pe),vf(Nl())),U(jr(ei),NE()),U(xr().ad(),Yg()),U(xr().kd(),DE()),U(jr(dl),LE()),U(xr().zc(),PE()),U(jr(me),ME(Jr())),U(jr(rt),RE(wt())),U(jr(kt),BE(Ns()))])}Mr(Pl,"SerializationStrategy");Mr(na,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[Pl,na]);p(Pn,"SerializationException",Pn.nn);p(Ml,"MissingFieldException");Mr(fe,"SerialDescriptor");p(C0,"ContextDescriptor",l,l,[fe]);p(A0);p(T0);p(q0,"ClassSerialDescriptorBuilder");Mr(Ps,"CachedNames");Lr(Sa).eo=xi;Lr(Sa).fo=Si;p(Sa,"SerialDescriptorImpl",l,l,[fe,Ps]);p(Ea,"SerialKind");N(Rl,"ENUM");N(O0,"CONTEXTUAL");p(Ms,"StructureKind");N(j0,"CLASS");N(U0,"LIST");N(N0,"MAP");N(D0,"OBJECT");p(Bn,"PrimitiveKind");N(L0,"BOOLEAN");N(P0,"BYTE");N(M0,"CHAR");N(R0,"SHORT");N(B0,"INT");N(F0,"LONG");N($0,"FLOAT");N(J0,"DOUBLE");N(H0,"STRING");p(za,"PolymorphicKind");N(G0,"SEALED");Mr(Bl,"Decoder");Mr(Fl,"CompositeDecoder");Lr(Ei).oq=Z0;Lr(Ei).bq=K0;Lr(Ei).qq=W0;Lr(Ei).sq=Y0;p(Ei,"AbstractDecoder",l,l,[Bl,Fl]);Mr(sf,"Encoder");Lr(Rs).sr=yE;Lr(Rs).rr=wE;p(Rs,"AbstractEncoder",l,l,[sf]);p(fa,"AbstractPolymorphicSerializer",l,l,[cr]);N(V0,"NothingSerializer",l,l,[cr]);N(X0,"DurationSerializer",l,l,[cr]);N(Q0,"InstantSerializer",l,l,[cr]);N(rg,"UuidSerializer",l,l,[cr]);Lr(qt).eo=xi;Lr(qt).fo=Si;Lr(qt).ho=Ls;p(qt,"ListLikeDescriptor",l,l,[fe]);p(ng,"ArrayListClassDesc");Lr(zi).eo=xi;Lr(zi).fo=Si;Lr(zi).ho=Ls;p(zi,"MapLikeDescriptor",l,l,[fe]);p(eg,"LinkedHashMapClassDesc");p(tg,"PrimitiveArrayDescriptor");p(of,"AbstractCollectionSerializer",l,l,[cr]);p(lf,"CollectionLikeSerializer");p(ig,"CollectionSerializer");p(ag,"ArrayListSerializer");p(sg,"MapLikeSerializer");p(og,"LinkedHashMapSerializer");p(ve,"PrimitiveArraySerializer");p(jn,"PrimitiveArrayBuilder");Xr(lg);p(ug,"ElementMarker");Lr(Ia).eo=xi;Lr(Ia).fo=Si;p(Ia,"PluginGeneratedSerialDescriptor",l,l,[fe,Ps]);p($l,"InlineClassDescriptor");Mr(cg,"GeneratedSerializer",l,l,[cr]);Lr(uf).wv=bE;p(uf,l,l,l,[cg]);N(fg,"NoOpEncoder");Lr(Bs).eo=xi;Lr(Bs).fo=Si;Lr(Bs).ho=Ls;N(Bs,"NothingSerialDescriptor",l,l,[fe]);p(vg,"SerialDescriptorForNullable",l,l,[fe,Ps]);p(hg,"ObjectSerializer",l,l,[cr]);N(dg,"CharArraySerializer",l,l,[cr]);N(pg,"DoubleArraySerializer",l,l,[cr]);N(_g,"FloatArraySerializer",l,l,[cr]);N(gg,"LongArraySerializer",l,l,[cr]);N(mg,"ULongArraySerializer",l,l,[cr]);N(yg,"IntArraySerializer",l,l,[cr]);N(wg,"UIntArraySerializer",l,l,[cr]);N(bg,"ShortArraySerializer",l,l,[cr]);N(kg,"UShortArraySerializer",l,l,[cr]);N(xg,"ByteArraySerializer",l,l,[cr]);N(Sg,"UByteArraySerializer",l,l,[cr]);N(Eg,"BooleanArraySerializer",l,l,[cr]);p(Rt,"CharArrayBuilder");p(Bt,"DoubleArrayBuilder");p(Ft,"FloatArrayBuilder");p($t,"LongArrayBuilder");p(Jt,"ULongArrayBuilder");p(Ht,"IntArrayBuilder");p(Gt,"UIntArrayBuilder");p(Kt,"ShortArrayBuilder");p(Wt,"UShortArrayBuilder");p(Yt,"ByteArrayBuilder");p(Zt,"UByteArrayBuilder");p(Vt,"BooleanArrayBuilder");N(zg,"StringSerializer",l,l,[cr]);Lr(kn).eo=xi;Lr(kn).fo=Si;Lr(kn).ho=Ls;p(kn,"PrimitiveSerialDescriptor",l,l,[fe]);N(Ig,"IntSerializer",l,l,[cr]);N(Cg,"LongSerializer",l,l,[cr]);N(Ag,"ByteSerializer",l,l,[cr]);N(Tg,"ShortSerializer",l,l,[cr]);N(qg,"CharSerializer",l,l,[cr]);N(Og,"DoubleSerializer",l,l,[cr]);N(jg,"FloatSerializer",l,l,[cr]);N(Ug,"BooleanSerializer",l,l,[cr]);N(Ng,"UnitSerializer",l,l,[cr]);Lr(Ca).oq=Z0;Lr(Ca).bq=K0;Lr(Ca).qq=W0;Lr(Ca).sq=Y0;p(Ca,"TaggedDecoder",l,l,[Bl,Fl]);p(Dg,"NamedValueDecoder");N(Lg,"UIntSerializer",l,l,[cr]);N(Pg,"ULongSerializer",l,l,[cr]);N(Mg,"UByteSerializer",l,l,[cr]);N(Rg,"UShortSerializer",l,l,[cr]);p(Bg,"SerializersModule");p(Fg,"SerialModuleImpl");p(cf,"ContextualProvider");p($g,"Argless");p(Jg,"WithTypeArguments");Mr(Hg,"SerializersModuleCollector");p(xE,"SerializableWith",l,l,l,l,0);var Js=Math.imul;class bf{constructor(r,e){ke(),this.h15_1=r,this.i15_1=e,this.j15_1=new Y1}pq(){return this.i15_1}k15(r,e){var t=new V1;try{return $I(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=Ff(this,e),i=new ys(this,nu(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(ct(),r)}}class cm extends bf{constructor(){nl=null,super(new kf,Wl()),nl=this}}class fm{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw j.v(b(r))}if(!this.l16_1.equals(Fm())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw j.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=rr(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw j.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw j.v(b(t))}return new kf(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class vm extends bf{constructor(r,e){super(r,e),vI(this)}}class hm{}class dm{}class pm{}class kf{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?Fm():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+le(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class oo extends ie{}class Yl{}class _m{t17(){return ct()}}class We{}class uI{}class fr extends We{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class cI{}class cn extends We{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return Er(this.x17_1)}toString(){var r=Js(this.x17_1.c1()+1|0,2),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof We?this.y17(r instanceof We?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof We?this.z17(r instanceof We?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class gm{t17(){return Vl()}}class nr extends We{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return Er(this.a18_1)}toString(){var r=Js(this.a18_1.c1(),6),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,ll(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class ue extends fr{constructor(){el=null,super(),el=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class ut extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw j.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=nn.fa(e);ll(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?ll(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!Ur(this).equals(Ur(r))||(r instanceof ut||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=$p(this.e18_1);return r=Js(31,r)+ae(this.g18_1)|0,r}}class mt{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new nr(this.i18_1)}}class mm{constructor(){var r=this;r.k18_1=q.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new cn(this.k18_1)}}class ym{constructor(){Q1=this;var r=this,e=ez();r.r18_1=Hl("kotlinx.serialization.json.JsonElement",e,[],yI)}dn(){return this.r18_1}s18(r,e){qa(r),e instanceof fr?r.rr(Of(),e):e instanceof nr?r.rr(Vl(),e):e instanceof cn?r.rr(jf(),e):Is()}en(r,e){return this.s18(r,e instanceof We?e:g())}fn(r){var e=Xl(r);return e.s17()}}class wm{constructor(){rc=this,this.m18_1=Hl("kotlinx.serialization.json.JsonPrimitive",Aa(),[])}dn(){return this.m18_1}t18(r,e){qa(r);var t;if(e instanceof ue)r.rr(Uf(),Ws()),t=sr;else{var i=Hm();r.rr(i,e instanceof ut?e:g()),t=sr}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=Xl(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(Ur(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class bm{constructor(){nc=this,this.h19_1=S1(ct()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class km{constructor(){ec=this,this.q18_1=EI()}dn(){return this.q18_1}j19(r,e){qa(r),S1(ct()).en(r,e)}en(r,e){return this.j19(r,e instanceof cn?e:g())}fn(r){return Nf(r),new cn(S1(ct()).fn(r))}}class xm{constructor(){tc=this,this.k19_1=E1(ms(),ct()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class Sm{constructor(){ic=this,this.p18_1=zI()}dn(){return this.p18_1}m19(r,e){qa(r),E1(ms(),ct()).en(r,e)}en(r,e){return this.m19(r,e instanceof nr?e:g())}fn(r){return Nf(r),new nr(E1(ms(),ct()).fn(r))}}class Em{constructor(){ac=this,this.n18_1=Hl("kotlinx.serialization.json.JsonNull",Ii(),[])}dn(){return this.n18_1}n19(r,e){qa(r),r.wq()}en(r,e){return this.n19(r,e instanceof ue?e:g())}fn(r){if(Nf(r),r.op())throw Df("Expected 'null' literal");return r.pp(),Ws()}}class zm{constructor(){sc=this,this.o18_1=GE("kotlinx.serialization.json.JsonLiteral",Aa())}dn(){return this.o18_1}o19(r,e){if(qa(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=_2(e.g18_1);if(t!=null)return r.br(t);var i=I0(e.g18_1),a=i;if((a==null?null:new Vn(a))!=null){var s=i,o=(s==null?null:new Vn(s)).lm_1,u=r.gr(Jl(Ds()).dn()),c=o;return u.br(c),sr}var f=m_(e.g18_1);if(f!=null)return r.dr(f);var v=I2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof ut?e:g())}fn(r){var e=Xl(r),t=e.s17();if(!(t instanceof ut)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(Ur(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Hs{constructor(r){this.p19_1=__(r)}co(){return Je(this).co()}do(){return Je(this).do()}go(){return Je(this).go()}io(r){return Je(this).io(r)}jo(r){return Je(this).jo(r)}ko(r){return Je(this).ko(r)}lo(r){return Je(this).lo(r)}mo(r){return Je(this).mo(r)}}class xf{}class Sf extends Pn{static w19(r){var e=this.on(r);return ln(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class Or extends Sf{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return ln(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Gs extends Sf{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(jI(r,t));return ln(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Ks{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return sr}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return sr}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(R(r))}x1a(r){return this.i1a_1.w1a(R(r))}y1a(r){return this.i1a_1.w1a(R(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class K1 extends Ks{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(m1(e))}else{var t=r;this.r1a(m1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(w1(e))}else{var t=r;this.r1a(w1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(_1(e))}else{var t=r;this.r1a(_1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(k1(e))}else{var t=r;this.r1a(k1(t))}}}class W1 extends Ks{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class Im extends Ks{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class Ef{constructor(r){var e=this;e.n1b_1=new ug(r,qI(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class Cm{}class Am{}class Tm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&ws(this.x1b_1),e===this.z1b_1.length&&gh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&gh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:lc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=oc)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=nn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&E(a,fe))if(P(a.do(),Fs()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===lc?r.ca("[<debug info disabled>]"):a!==oc&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class zf{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(Bm())}b15(r,e){}e15(r,e,t){var i=t.dn();FI(this,i,e)}f15(r,e){}g15(r,e){}}class qm{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=il(this,!0);else if(r===0)e=il(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&ws(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=GI(this)):(t=JI(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&ws(this.x1c_1);var i=Vm(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+ul(r));return e}}class Va extends ie{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class va{}class Y1{constructor(){this.t1b_1=xh(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=xh(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof va?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof va?e:g());var a=i;return a??null}}class Om{constructor(r){this.n1d_1=r}}class ys extends Ei{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new Ef(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new qm(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof fa?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=ol(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=E(r,na)?r:g(),o;r:{var u;if(s instanceof fa?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=ol(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof nr)){var h="Expected "+jr(nr).oc()+", but had "+Ur(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Rr(m))}else _=null;var w=_;throw Or.g19($r(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:Un(k),z=S==null?null:Xn(S),I;try{I=x1(s,this,z)}catch(Q){var A;if(Q instanceof Pn){var O=Q,D=on(O.message),J;if(this.r17().h15_1.p17_1){var T=x.toString();J=b(Rr(T))}else J=null;var M=J;throw Or.g19($r(-1,D,null,null,M),D,-1,null,M,null)}else throw Q}var F=I,B=E(F,na)?F:g();o=sy(this.r17(),c,x,B)}return o}else a=i;var L=a,H;try{H=x1(r,this,L)}catch(Q){var X;if(Q instanceof Pn){var $=Q,tr=Gi(C2(on($.message),10),"."),Y=A2(on($.message),10,"");this.r15_1.s1b(tr,l,Y)}else throw Q;H=X}var G=H,ar=E(G,na)?G:g();return this.u15_1=new Om(t),ar.fn(this)}catch(Q){if(Q instanceof Ml){var ur=Q;throw gs(on(ur.message),"at path")?ur:fz(ur,Sb(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw Q}}cq(r){var e=ey(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),n5(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new ys(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new ys(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&Mf(r,this.p15_1)&&r5(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&Ci(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(sl())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=i5(this,r);break;case 2:e=e5(this);break;default:e=s5(this);break}return this.q15_1.equals(sl())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,R($u(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),$u(r)}sp(){var r=this.r15_1.z1d();return ir(r,R(Ju(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Ju(r)}tp(){var r=this.r15_1.z1d();return ir(r,R(Vr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Vr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=wo(t);break r}catch(s){if(s instanceof j)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||$c(i))return i;vh(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=wo(t);break r}catch(s){if(s instanceof j)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Jc(i))return i;vh(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return Rf(r)?new If(this.r15_1,this.p15_1):super.zp(r)}}class If extends Ei{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw Sr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=uE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=cE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=fE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=vE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class ta extends Rs{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(AI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof fa,i;if(t)i=!this.r17().h15_1.o17_1.equals(Bm());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Gl())||P(s,mf());break;default:Is();break}i=a}var o=i,u=o?ol(r.dn(),this.r17()):null,c;if(t){var f=r instanceof fa?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw j.v(b(v))}else break n;var h=SE(f,this,e);c=E(h,Pl)?h:g()}else c=r;var d=c;if(u!=null){ZI(this.r17(),r,d,u),VI(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=ey(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;u5(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??ta.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(DI(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if(Rf(r)){var t,i=this.k1c_1;if(i instanceof K1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new K1(a,s)}var o=t;e=ta.c1e(o,this.l1c_1,this.m1c_1,null)}else if(c5(r)){var u,c=this.k1c_1;if(c instanceof W1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new W1(f,v)}var h=u;e=ta.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!$c(r))throw hh(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Jc(r))throw hh(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class Zl extends Dg{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof fa?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=ol(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof nr)){var o="Expected "+jr(nr).oc()+", but had "+Ur(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:Un(d),m=_==null?null:Xn(_),w;try{w=x1(r,this,m)}catch(D){if(D instanceof Pn){var x=D,k=on(x.message),S;if(this.r17().h15_1.p17_1){var z=h.toString();S=b(Rr(z))}else S=null;var I=S;throw Or.g19($r(-1,k,null,null,I),k,-1,null,I,null)}else throw D}var A=w,O=E(A,na)?A:g();e=sy(this.r17(),i,h,O)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Fs())?a=!0:a=t instanceof za,a){var s=this.r17(),o=r.co();if(!(e instanceof cn)){var u="Expected "+jr(cn).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Rr(v))}else f=null;var h=f;throw Or.g19($r(-1,u,c,null,h),u,-1,c,h,null)}i=new Z1(s,e)}else if(P(t,Kl())){var d=this.r17(),_=al(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Bn?x=!0:x=P(m,Ii()),x){var k=this.r17(),S=r.co();if(!(e instanceof nr)){var z="Expected "+jr(nr).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var O=b(e);A=b(Rr(O))}else A=null;var D=A;throw Or.g19($r(-1,z,I,null,D),z,-1,I,D,null)}w=new Um(k,e,r)}else if(d.h15_1.b17_1){var J=this.r17(),T=r.co();if(!(e instanceof cn)){var M="Expected "+jr(cn).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+T,F=this.q13(),B;if(this.r17().h15_1.p17_1){var L=b(e);B=b(Rr(L))}else B=null;var H=B;throw Or.g19($r(-1,M,F,null,H),M,-1,F,H,null)}w=new Z1(J,e)}else throw Gm(_);i=w}else{var X=this.r17(),$=r.co();if(!(e instanceof nr)){var tr="Expected "+jr(nr).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+$,Y=this.q13(),G;if(this.r17().h15_1.p17_1){var ar=b(e);G=b(Rr(ar))}else G=null;var ur=G;throw Or.g19($r(-1,tr,Y,null,ur),tr,-1,Y,ur,null)}i=new Ta(X,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof ue)}m1e(r){return this.l1e(r)!==Ws()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Jm(c),v;f==null?Tn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof j)Tn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Ki(c),v,h=Le(-128,127);ro(E(h,Yi)?h:g(),f)?v=$u(f):v=null;var d=v,_;d==null?Tn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof j)Tn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Ki(c),v,h=Le(-32768,32767);ro(E(h,Yi)?h:g(),f)?v=Ju(f):v=null;var d=v,_;d==null?Tn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof j)Tn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Ki(c),v,h=Le(-2147483648,2147483647);ro(E(h,Yi)?h:g(),f)?v=Vr(f):v=null;var d=v,_;d==null?Tn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof j)Tn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Ki(c),v;f==null?Tn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof j)Tn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=gI(c),v;f==null?Tn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof j)Tn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||$c(h))return h;var _=dh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=mI(c),v;f==null?Tn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof j)Tn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Jc(h))return h;var _=dh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new Sn(mb(c.w17())),v;f==null?Tn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof j)Tn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+jr(fr).oc()+", but had "+Ur(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ut)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Rr(d))}else h=null;var _=h;throw Or.g19($r(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Rr(S))}else k=null;var z=k;throw Or.g19($r(-1,m,w,x,z),m,-1,w,z,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if(Rf(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+jr(fr).oc()+", but had "+Ur(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=Ff(i,a.w17());t=new If(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new jm(this.r17(),this.l2(),this.h1e_1).zp(r)}}class Ta extends Zl{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new Ef(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=Ql(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&v5(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!Mf(r,this.r17())&&h5(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??ye(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof nr)){var a="Expected "+jr(nr).oc()+", but had "+Ur(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}return new Ta(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class Z1 extends Zl{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1(wx(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class jm extends Zl{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw j.v(b(e))}return this.y1f_1}}class Um extends Ta{constructor(r,e,t){super(r,e,t),this.l1g_1=pa(e.p2()),this.m1g_1=Js(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?ye(this.l2(),r):ce(r)}dq(r){}}class Nm{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new Tm(this.x15_1),this.a16_1=null,this.b16_1=nn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(rr(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=ul(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=He(r),s=ul(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(rr(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,He(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==rr(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&He(rr(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(qn(t,r,e))}c1d(){return this.a16_1!=null?bh(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=rr(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(d5(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=rr(r,i);var u;o?u=Au(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&p5(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return bh(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=He(rr(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(rr(this.p1g(),r)));for(var t=!1;He(rr(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,Au(this,0,0);r=i}var a;t?a=Au(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=q.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),sr;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Mu(e)!==8&&this.s1b("found ] instead of }"),Bv(e)):i===7?(Mu(e)!==6&&this.s1b("found } instead of ]"),Bv(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return sr}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=T2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw OI(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=rr(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=He(f);if(v!==0)break r;r=r+1|0;var h=ee(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=Ar(d,R(10));a=hr(_,R(h));continue r}var m=i,w=Ar(m,R(10));i=Br(w,R(h)),er(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),rr(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Wn(i)*m5(a,o);(k>Wn(new y(-1,2147483647))||k<Wn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=Ln(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=tn(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(rr(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=g5(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),rr(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class Dm{constructor(){cc=this,this.x1g_1=fs(117),this.y1g_1=new Int8Array(126),w5(this),b5(this)}}class Cf extends Nm{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,He(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return sr;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=ql(this.p1g(),34,r);if(e===-1){this.d1d();var t=ul(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,te(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Lm extends Cf{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,He(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return sr;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,He(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=ql(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=So(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class V1{constructor(){this.n15_1=nn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){ll(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var nl;function ke(){return nl===l&&new cm,nl}function fI(n,r){n=n===l?ke():n;var e=new fm(n);r(e);var t=e.x16();return new vm(t,e.u16_1)}function vI(n){if(P(n.pq(),Wl()))return sr;var r=new zf(n.h15_1);n.pq().s14(r)}var ch;function Af(){if(ch)return sr;ch=!0,Pm=new oo("NONE",0),Mm=new oo("ALL_JSON_OBJECTS",1),Rm=new oo("POLYMORPHIC",2)}var Pm,Mm,Rm;function Bm(){return Af(),Pm}function hI(){return Af(),Mm}function Fm(){return Af(),Rm}function dI(){return he(),$m}var $m,Tf,X1;function Dr(n){he();var r=n instanceof nr?n:null,e;return r==null?qf(n,"JsonObject"):e=r,e}function ce(n){return he(),n==null?Ws():new ut(n,!0)}function ss(n){he();var r=n instanceof cn?n:null,e;return r==null?qf(n,"JsonArray"):e=r,e}var el;function Ws(){return el===l&&new ue,el}function Xn(n){he();var r;return n instanceof ue?r=null:r=n.w17(),r}function Un(n){he();var r=n instanceof fr?n:null,e;return r==null?qf(n,"JsonPrimitive"):e=r,e}function pI(n){he();var r;try{r=Ki(n)}catch(t){var e;if(t instanceof Or)e=null;else throw t;r=e}return r}function _I(n){he();var r;try{r=Ki(n)}catch(o){var e;if(o instanceof Or)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Le(-2147483648,2147483647);return ro(E(s,Yi)?s:g(),a)?Vr(a):null}function Jm(n){return he(),f5(n.w17())}function qf(n,r){throw he(),j.v("Element "+b(Ur(n))+" is not a "+r)}function Ki(n){return he(),Ff(ke(),n.w17()).h18()}function gI(n){he();var r=n.w17();return wo(r)}function mI(n){return he(),wo(n.w17())}var fh;function he(){fh||(fh=!0,$m=$s("kotlinx.serialization.json.JsonUnquotedLiteral",ms()))}function tl(n,r,e){return n.j18(r,ce(e))}function yI(n){return n.zo("JsonPrimitive",Za(wI)),n.zo("JsonNull",Za(bI)),n.zo("JsonLiteral",Za(kI)),n.zo("JsonObject",Za(xI)),n.zo("JsonArray",Za(SI)),sr}function wI(){return Of().m18_1}function bI(){return Uf().n18_1}function kI(){return Hm().o18_1}function xI(){return Vl().p18_1}function SI(){return jf().q18_1}var Q1;function ct(){return Q1===l&&new ym,Q1}var rc;function Of(){return rc===l&&new wm,rc}var nc;function EI(){return nc===l&&new bm,nc}var ec;function jf(){return ec===l&&new km,ec}var tc;function zI(){return tc===l&&new xm,tc}var ic;function Vl(){return ic===l&&new Sm,ic}var ac;function Uf(){return ac===l&&new Em,ac}function Za(n){return new Hs(n)}var sc;function Hm(){return sc===l&&new zm,sc}function qa(n){II(n)}function Xl(n){var r=E(n,Yl)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(Ur(n))));return e=r,e}function Nf(n){Xl(n)}function II(n){var r=E(n,xf)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(Ur(n))));return e=r,e}function Je(n){var r=n.p19_1,e=yi;return ma("original",1,e,CI(),null),r.l2()}function CI(){return Re(n=>Je(n),1,0,5)}function AI(n,r){return r.h15_1.c17_1?new Im(n,r):new Ks(n)}function TI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function qI(n){return Re((r,e)=>{var t=n;return TI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Rr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(qn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=fn(i,0),c=xt(a,C(n));return s+b(qn(n,u,c))+o}function $r(n,r,e,t,i){return Lf(n,r,e,t,i)}function Df(n,r){return r=r===l?null:r,Or.g19(Lf(-1,n,null,r,null),n,-1,null,null,r)}function Ci(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function vh(n,r){n.s1b(Pf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Gm(n){return Gs.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function hh(n,r){return r=r===l?null:r,Gs.h1a(Pf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function dh(n,r){return Pf(n,r)}function Lf(n,r,e,t,i){var a=nn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||lt(e)||(a.ca(" at path: "),a.ca(e)),t==null||lt(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Pf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function OI(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Rr(a,e)):s=null;var o=s;return Or.g19(Lf(e,r,t,i,o),r,e,t,o,i)}function jI(n,r){var e;return r==null||lt(r)?e="":e=`
`+r,n+e}function UI(){return ze(),Km}var Km;function NI(){return ze(),Wm}var Wm;function Mf(n,r){ze();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof dm){i=!0;break r}}i=!1}e=i}return e}function Ql(n,r,e){if(ze(),Ym(r,n)){var t=e.toLowerCase();return zu(n,r,t)}var i=ru(n,r);if(i!=null)return zu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:zu(n,r,e)}function DI(n,r,e){ze();var t=ru(n,r);return t==null?n.io(e):Zm(n,r,t)[e]}function LI(n,r){ze();var e=ru(n,r);return e==null?vz(n):gp(Zm(n,r,e))}function Ym(n,r){return ze(),n.h15_1.l17_1&&P(r.do(),Ii())}function zu(n,r,e){ze();var t=PI(r,n).o2(e);return t??-3}function ru(n,r){return ze(),P(n.do(),Gl())?r.h15_1.k17_1:null}function Zm(n,r,e){ze();var t=uy(r),i=NI();return t.u1b(n,i,RI(n,e))}function PI(n,r){ze();var e=uy(n),t=UI();return e.u1b(r,t,BI(r,n))}function MI(n,r){ze();var e=vr.q4(),t=Ym(r,n),i=ru(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=q.m(),f=u.x();f.y();){var v=f.z();v instanceof pm&&c.n(v)}var h=Tc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,ph(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||ph(e,n,S,o)}while(a<s);var z;return e.i1()?z=Nr():z=e,z}function RI(n,r){return()=>{for(var e=Cn.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Gs.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function BI(n,r){return()=>MI(n,r)}function ph(n,r,e,t){var i=P(r.do(),Ii())?"enum value":"property";if((E(n,yn)?n:g()).m2(e))throw Df("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(ye(n,e))+" in "+b(r)));n.s2(e,t)}var _h;function ze(){_h||(_h=!0,Km=new va,Wm=new va)}var oc,lc;function gh(n){var r=Js(n.b1c_1,2);n.z1b_1=Vp(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;gk(o,i,0,0,s),n.a1c_1=i}function FI(n,r,e){var t=r.do(),i;if(t instanceof za?i=!0:i=P(t,Xg()),i)throw j.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return sr;var a,s;if(P(t,Fs())||P(t,Kl())?s=!0:s=t instanceof Bn,s?a=!0:a=t instanceof Rl,a)throw j.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function $I(n,r,e,t){var i=nu(),a=YI().c1(),s=Array(a),o=ta.t1c(r,n,i,s);o.rr(e,t)}function JI(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||Ci(n.u1c_1),n.u1c_1.z1c(7)),new nr(e)}function*HI(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(sr,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||Ci(n.u1c_1),n.u1c_1.z1c(7)),new nr(i)}function Vm(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=q.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||Ci(n.u1c_1,"array"),n.u1c_1.z1c(9)),new cn(e)}function il(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Ws():new ut(t,r)}function GI(n){return dS(new tp(KI(n)),sr)}function KI(n){return Re((r,e,t)=>Kb(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=il(n,!0);else if(a===0)s=il(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&ws(o.x1c_1);var u=yield*HI(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&ws(c.x1c_1);var f=Vm(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function ws(n){throw Df("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var mh;function Oa(){if(mh)return sr;mh=!0,Xm=new Va("OBJ",0,123,125),Qm=new Va("LIST",1,91,93),ry=new Va("MAP",2,123,125),ny=new Va("POLY_OBJ",3,91,93)}var Xm,Qm,ry,ny;function WI(){return Oa(),[nu(),uc(),sl(),ty()]}function YI(){return Oa(),Iu==null&&(Iu=a2(WI())),Iu}var Iu;function ey(n,r){var e=r.do(),t;if(e instanceof za)t=ty();else if(P(e,Fs()))t=uc();else if(P(e,Kl())){var i=al(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Bn?o=!0:o=P(a,Ii()),o)s=sl();else if(n.h15_1.b17_1)s=uc();else throw Gm(i);t=s}else t=nu();return t}function al(n,r){var e;if(P(n.do(),Xg())){var t=FE(r,n),i=t==null?null:al(t,r);e=i??n}else n.fo()?e=al(n.lo(0),r):e=n;return e}function nu(){return Oa(),Xm}function uc(){return Oa(),Qm}function sl(){return Oa(),ry}function ty(){return Oa(),ny}function ol(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof hm)return t.k1d_1}return r.h15_1.h17_1}function ZI(n,r,e,t){return XI(n,r,e,t)}function VI(n){if(n instanceof Rl){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(r))}if(n instanceof Bn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(e))}if(n instanceof za){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw Sr.o3(b(t))}}function XI(n,r,e,t){if(LI(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(hI())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Gs.h1a(o,a,u)}}function QI(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function r5(n,r){for(;n.rq(r)!==-1;);}function n5(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function e5(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1),t=-1;return t}function t5(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),Ii())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=Ql(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function i5(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=o5(n);n.r15_1.o1d(58);var i=Ql(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&t5(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=a5(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function a5(n,r,e){return Mf(r,n.p15_1)||QI(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function s5(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1,"array"),e=-1),e}function o5(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function l5(){return Bf(),iy}var iy;function u5(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function Rf(n){return Bf(),n.fo()&&l5().l1(n)}function c5(n){return Bf(),n.fo()&&P(n,dI())}var yh;function Bf(){yh||(yh=!0,iy=Qt([ff(Dl()).dn(),Jl(Ds()).dn(),vf(Nl()).dn(),hf(Ll()).dn()]))}function Cu(){return eu(),ay}var ay;function Xs(n){eu();var r=n&15,e;if(r<10){var t=48,i=Z(t);e=Ke(r+i|0)}else{var a=r-10|0,s=97,o=Z(s);e=Ke(a+o|0)}return e}function ll(n,r){eu(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Z(s);o<Cu().length&&Cu()[o]!=null&&(n.yd(r,e,a),n.ca(Cu()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function f5(n){return eu(),jv(n,"true",!0)?!0:jv(n,"false",!0)?!1:null}var wh;function eu(){if(!wh){wh=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=Xs(e>>12),i=Xs(e>>8),a=Xs(e>>4),s=Xs(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Z(o)]='\\"';var u=92;n[Z(u)]="\\\\";var c=9;n[Z(c)]="\\t";var f=8;n[Z(f)]="\\b";var v=10;n[Z(v)]="\\n";var h=13;n[Z(h)]="\\r",n[12]="\\f",ay=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Z(w),k=34,S=Z(k);d[x]=Nn(S);var z=92,I=Z(z),A=92,O=Z(A);d[I]=Nn(O);var D=9,J=Z(D),T=116,M=Z(T);d[J]=Nn(M);var F=8,B=Z(F),L=98,H=Z(L);d[B]=Nn(H);var X=10,$=Z(X),tr=110,Y=Z(tr);d[$]=Nn(Y);var G=13,ar=Z(G),ur=114,Q=Z(ur);d[ar]=Nn(Q);var Tr=102,wr=Z(Tr);d[12]=Nn(wr)}}function sy(n,r,e,t){var i=t.dn();return new Ta(n,e,i,r,i).bq(t)}function Tn(n,r,e,t){var i=be(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}function v5(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof ue:u=!1,u){a=!0;break r}if(P(o.do(),Ii())){var c;if(o.eo()?c=t instanceof ue:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:Xn(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=Ql(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function h5(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,e,t,i,o),e,-1,t,o,i)}function d5(n,r,e){return n.o1g(r,e),_5(n,e+1|0)}function Au(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function bh(n){var r=on(n.a16_1);return n.a16_1=null,r}function p5(n){return rr(n.p1g(),n.y15_1-1|0)!==34}function _5(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i);if(a===117)return oy(n,n.p1g(),e);var s=Z(a),o=y5(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function oy(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),oy(n,r,n.y15_1)):(n.b16_1.da(Ke((((Qs(n,r,e)<<12)+(Qs(n,r,e+1|0)<<8)|0)+(Qs(n,r,e+2|0)<<4)|0)+Qs(n,r,e+3|0)|0)),e+4|0)}function Qs(n,r,e){var t=rr(r,e),i;if(48<=t&&t<=57){var a=Z(t),s=48;i=a-Z(s)|0}else if(97<=t&&t<=102){var o=Z(t),u=97;i=(o-Z(u)|0)+10|0}else if(65<=t&&t<=70){var c=Z(t),f=65;i=(c-Z(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function g5(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i),s=Z(a)|32,o,u=116;if(s===Z(u))kh(n,"rue",e),o=!0;else{var c=102;s===Z(c)?(kh(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function kh(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=rr(n.p1g(),e+a|0),u=Z(s);u!==(Z(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function m5(n,r){var e;switch(r){case!1:var t=-Wn(n);e=Math.pow(10,t);break;case!0:var i=Wn(n);e=Math.pow(10,i);break;default:Is();break}return e}function He(n){var r;if(Z(n)<126){var e=ly().y1g_1;r=e[Z(n)]}else r=0;return r}function ul(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function y5(n){return n<117?ly().x1g_1[n]:0}function w5(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,Xt(n,e,117)}while(r<=31);Xt(n,8,98),Xt(n,9,116),Xt(n,10,110),Xt(n,12,102),Xt(n,13,114),Tu(n,47,47),Tu(n,34,34),Tu(n,92,92)}function b5(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Ji(n,e,127)}while(r<=32);Ji(n,9,3),Ji(n,10,3),Ji(n,13,3),Ji(n,32,3),pt(n,44,4),pt(n,58,5),pt(n,123,6),pt(n,125,7),pt(n,91,8),pt(n,93,9),pt(n,34,1),pt(n,92,2)}function Xt(n,r,e){if(e!==117){var t=Z(e);n.x1g_1[t]=Ke(r)}}function Tu(n,r,e){var t=Z(r);return Xt(n,t,e)}function Ji(n,r,e){n.y1g_1[r]=e}function pt(n,r,e){var t=Z(r);return Ji(n,t,e)}var cc;function ly(){return cc===l&&new Dm,cc}function Ff(n,r){return n.h15_1.n17_1?new Lm(r,n.h15_1):new Cf(r,n.h15_1)}function uy(n){return n.j15_1}function xh(n){return ls.l7(n)}p(bf,"Json");N(cm,"Default");p(fm,"JsonBuilder");p(vm,"JsonImpl");p(hm,"JsonClassDiscriminator");p(dm,"JsonIgnoreUnknownKeys");p(pm,"JsonNames");p(kf,"JsonConfiguration");p(oo,"ClassDiscriminatorMode");Mr(Yl,"JsonDecoder",l,l,[Bl,Fl]);Xr(_m);p(We,"JsonElement",l,l,l,l,l,{0:ct});Xr(uI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Of});Xr(cI);p(cn,"JsonArray",l,l,[En],l,l,{0:jf});Xr(gm);p(nr,"JsonObject",l,l,[yn],l,l,{0:Vl});N(ue,"JsonNull",l,l,l,l,l,{0:Uf});p(ut,"JsonLiteral");p(mt,"JsonObjectBuilder");p(mm,"JsonArrayBuilder");N(ym,"JsonElementSerializer",l,l,[cr]);N(wm,"JsonPrimitiveSerializer",l,l,[cr]);N(bm,"JsonArrayDescriptor",l,l,[fe]);N(km,"JsonArraySerializer",l,l,[cr]);N(xm,"JsonObjectDescriptor",l,l,[fe]);N(Sm,"JsonObjectSerializer",l,l,[cr]);N(Em,"JsonNullSerializer",l,l,[cr]);N(zm,"JsonLiteralSerializer",l,l,[cr]);Lr(Hs).eo=xi;Lr(Hs).fo=Si;Lr(Hs).ho=Ls;p(Hs,l,l,l,[fe]);Mr(xf,"JsonEncoder",l,l,[sf]);p(Sf,"JsonException");p(Or,"JsonDecodingException");p(Gs,"JsonEncodingException");p(Ks,"Composer");p(K1,"ComposerForUnsignedNumbers");p(W1,"ComposerForUnquotedLiterals");p(Im,"ComposerWithPrettyPrint");p(Ef,"JsonElementMarker");N(Cm,"Tombstone");N(Am,"RedactedKey");p(Tm,"JsonPath");Lr(zf).d15=kE;p(zf,"JsonSerializersModuleValidator",l,l,[Hg]);p(qm,"JsonTreeReader",l,l,l,[1]);p(Va,"LexerMode");p(va,"Key",va);p(Y1,"DescriptorSchemaCache",Y1);p(Om,"DiscriminatorHolder");p(ys,"StreamingJsonDecoder",l,l,[Yl]);p(If,"JsonDecoderForUnsignedTypes");p(ta,"StreamingJsonEncoder",l,l,[xf]);p(Zl,"AbstractJsonTreeDecoder",l,l,[Yl]);p(Ta,"JsonTreeDecoder");p(Z1,"JsonTreeListDecoder");p(jm,"JsonPrimitiveDecoder");p(Um,"JsonTreeMapDecoder");p(Nm,"AbstractJsonLexer");N(Dm,"CharMappings");p(Cf,"StringJsonLexer");p(Lm,"StringJsonLexerWithComments");p(V1,"StringJsonWriter",V1);Tf=new _m;X1=new gm;oc=new Cm;lc=new Am;var Sh=Math.imul;class cy{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class fy{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class fc{constructor(r,e,t){this.k1j_1=r,this.l1j_1=e,this.m1j_1=t}}class vy{constructor(r,e){this.s1j_1=r,this.t1j_1=e}}class hy{constructor(r,e,t,i,a,s,o,u,c,f,v){this.u1j_1=r,this.v1j_1=e,this.w1j_1=t,this.x1j_1=i,this.y1j_1=a,this.z1j_1=s,this.a1k_1=o,this.b1k_1=u,this.c1k_1=c,this.d1k_1=f,this.e1k_1=v}}class dy{constructor(r,e,t){this.f1k_1=r,this.g1k_1=e,this.h1k_1=t}}class py{constructor(r){this.i1k_1=r}zf(r,e){return this.i1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.i1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class _y{constructor(r){this.j1k_1=r}zf(r,e){return this.j1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.j1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class gy{constructor(r){this.k1k_1=r}zf(r,e){return this.k1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.k1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class my{constructor(r){this.l1k_1=r}zf(r,e){return this.l1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.l1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class yy{constructor(r){this.p1k_1=r}r4(){return this.p1k_1.x()}q1k(r){return Dn(r.t1j_1)}s4(r){return this.q1k(r)}}class wy{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?mr():e,t=t===l?null:t,i=i===l?mr():i,a=a===l?mr():a,s=s===l?mr():s,o=o===l?mr():o,u=u===l?mr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?mr():v,h=h===l?mr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.d1j_1,S=this.i1i_1,z=st([this.a1i_1,k,S==null?null:S.g1j_1]),I=q.g1(Yr(z,10)),A=z.x();A.y();){var O=A.z(),D=ke().m15(O);I.n(D)}w.m1i_1=I;for(var J=this,T=q.m(),M=u.x();M.y();){var F=M.z();F.t1h_1||T.n(F)}J.n1i_1=T;var B=this,L;if(!this.n1i_1.i1())L=!0;else{var H;r:{var X;if(E(u,W)?X=u.i1():X=!1,X){H=!1;break r}for(var $=u.x();$.y();){var tr=$.z();if(tr.u1h_1!=null){H=!0;break r}}H=!1}L=H}B.o1i_1=L,this.p1i_1=it(i);for(var Y=this,G=q.g1(Yr(r,10)),ar=r.x();ar.y();){var ur=ar.z(),Q="/"+G_(ur,_a([47]));G.n(Q)}Y.q1i_1=G,this.r1i_1=Nr(),this.s1i_1=!1,this.t1i_1=!1;var Tr=this;Tr.u1i_1=Cn.e1();var wr=this;wr.v1i_1=q.m(),this.w1i_1=Nr()}r1k(r,e){this.w1i_1=e;var t=Dr(ke().m15(r)),i=Z5(this,Y5(this,W5(this,t))),a=or(i,"components"),s=a==null?null:or(a,"schemas"),o=s??Nr();this.r1i_1=dC(this,i,o);var u=this,c;if(hl(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(E(f,W)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(hl(_)){v=!0;break r}}v=!1}c=v}u.s1i_1=c;var m=this,w;if(vl(i,uo()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(E(x,W)?S=x.i1():S=!1,S){k=!1;break r}for(var z=x.x();z.y();){var I=z.z();if(vl(I,uo())){k=!0;break r}}k=!1}w=k}m.t1i_1=w;var A=we(this.s1i_1?Dy().q2():mr(),this.t1i_1?uo().q2():mr());this.u1i_1.v2(),this.v1i_1.v2();for(var O=lC(this,o)+rC(this,o)+tC(this,o)+iC(this,o),D=o.p2(),J=q.g1(Yr(D,10)),T=D.x();T.y();){var M=T.z(),F=Dn(M);J.n(F)}for(var B=J,L=or(i,"paths"),H=(L??Nr()).p2(),X=q.g1(Yr(H,10)),$=H.x();$.y();){var tr=$.z(),Y=ew(this,tr);X.n(Y)}var G=we(we(B,X),Hf());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var ar="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw Sr.o3(b(ar))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var Q="permissions needs currentUser, which says who the permissions belong to.";throw Sr.o3(b(Q))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var Tr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(Tr))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var wr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(wr))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var dr="guards needs currentUser, which says who is signed in.";throw Sr.o3(b(dr))}var Ir;if(this.h1i_1.i1())Ir=!0;else{var br=Ih(),kr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){kr=!0;break r}for(var _r=br.x();_r.y();){var Gr=_r.z();if(G.l1(Gr)){kr=!1;break r}}kr=!0}Ir=kr}if(!Ir){var an="guards exports "+V(Ih())+", and the generated client already uses one of the names.";throw Sr.o3(b(an))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Kr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw Sr.o3(b(Kr))}if(!(Ey(this.l1i_1).i1()||!G.l1("cookieConsent"))){var gr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw Sr.o3(b(gr))}for(var Wr=this.n1i_1,Qr=vr.q4(),un=Wr.x();un.y();){var Fr=un.z(),rn=vc(Fr.l1h_1),pn=Qr.o2(rn),vn;if(pn==null){var _n=q.m();Qr.s2(rn,_n),vn=_n}else vn=pn;var re=vn;re.n(Fr)}var Fn=Qr.q2(),$n;r:{for(var de=Fn.x();de.y();){var je=de.z();if(je.c1()>1){$n=je;break r}}$n=null}var pe=$n;if(pe!=null){var Fe="The cookies "+V(pe," and ",l,l,l,l,AC)+" would both be called "+vc(nb(pe).l1h_1)+" in TypeScript.";throw Sr.o3(b(Fe))}var $e=this.c1i_1,Ie;r:{for(var Jn=$e.x();Jn.y();){var An=Jn.z();if(G.l1(An.x1h_1)){Ie=An;break r}}Ie=null}var xn=Ie;if(xn!=null){var zn="constants("+xn.x1h_1+") would be exported as '"+xn.x1h_1+"', which the generated client already uses. Rename the object.";throw Sr.o3(b(zn))}var Ue=Ve("client.ts")+nC(this),Ti=this.j1i_1,Ne;Ti==null?Ne=null:Ne=`
reportErrors('`+Ti+`');
`;var ft=Ne,qi=Ue+(ft??""),Oi=this.k1i_1,vt;Oi==null?vt=null:vt=`
`+Oi+`
`;for(var Ot=vt,Ua=U("client.ts",qi+(Ot??"")),Na=U("form.ts",Ve("form.ts")),Da=U("form-state.svelte.ts",Ve("form-state.svelte.ts")),La=this.d1i_1.i1()&&this.g1i_1.i1()?O:Gi(O,`export {};
`),ji=si(this.u1i_1),jt=U("types.ts",La+V(ji,"",l,l,l,l,TC)+yC(this)+rw(this,"Permission",this.g1i_1)),ht=or(i,"paths"),Ce=ht??Nr(),Pa=vo(o.p2(),"LucideIcon"),Ui=this.r1i_1.q2(),Ut=q.g1(Yr(Ui,10)),Nt=Ui.x();Nt.y();){var Ma=Nt.z(),Ni=Ma.k1j_1;Ut.n(Ni)}var Dt=U("services.ts",_C(this,Ce,av(av(Pa,Ut),A))),Di=Ve("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.o1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Gi("current-user.svelte.ts",".ts")+`.js';
`:""),Lt;this.h1i_1.i1()?Lt="":Lt="export * from './"+Gi("guards.ts",".ts")+`.js';
`;var Li=[Ua,Na,Da,jt,Dt,U("index.ts",Di+Lt+(this.i1i_1!=null?"export * from './"+Gi("preferences.svelte.ts",".ts")+`.js';
`:""))],Pi;this.c1i_1.i1()?Pi=[]:Pi=[U("constants.ts",N5(this.c1i_1))];var Ys=Pi,Mi;this.o1i_1?Mi=[U("cookies.ts",z5(this.l1i_1))]:Mi=[];var lu=Mi,Ra=this.e1i_1,Ri;Ra==null?Ri=null:Ri=[U("current-user.svelte.ts",sC(this,Ra))];var Ba=Ri,Fa;Ba==null?Fa=[]:Fa=Ba;var uu=Fa,Pt;this.h1i_1.i1()?Pt=[]:Pt=[U("guards.ts",eC(this))];var cu=Pt,Zs=this.i1i_1,$a;Zs==null?$a=null:$a=[U("preferences.svelte.ts",aC(this,Zs))];var Ja=$a,Mt;return Ja==null?Mt=[]:Mt=Ja,K5(this,Yb([Li,Ys,lu,uu,cu,Mt,[U("openapi.json",jy().k15(Tf.t17(),i)+`
`)]]))}s1k(r,e,t){return e=e===l?Nr():e,t===l?this.r1k(r,e):t.r1k.call(this,r,e)}}class lo extends ie{constructor(r,e,t){super(r,e),this.o1k_1=t}p1g(){return Ve(this.o1k_1)}}class tu{constructor(r,e,t){this.t1k_1=r,this.u1k_1=e,this.v1k_1=t}toString(){return"GeneratedOperation(name="+this.t1k_1+", method="+this.u1k_1+", path="+this.v1k_1+")"}hashCode(){var r=ae(this.t1k_1);return r=Sh(r,31)+ae(this.u1k_1)|0,r=Sh(r,31)+ae(this.v1k_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof tu)||this.t1k_1!==r.t1k_1||this.u1k_1!==r.u1k_1||this.v1k_1!==r.v1k_1)}}class by{constructor(r){this.w1k_1=r}zf(r,e){return this.w1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class ky{n1j(r){return"Must be at least "+Nh(this,r)+"."}o1j(r){return"Must be at most "+Nh(this,r)+"."}q1j(r,e){return"Must be "+(e?"greater than":"at least")+" "+zt(r)+"."}r1j(r,e){return"Must be "+(e?"less than":"at most")+" "+zt(r)+"."}p1j(r){return"Must match "+r+"."}}function k5(){return Qn(),xy}var xy;function x5(){return Qn(),Sy}var Sy;function ne(n){return Qn(),"'"+Kn(Kn(Kn(Kn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function vc(n){Qn();var r=x5(),e=G_(n,_a([46,95,45])),t=r.ye(e,I5);return k5().ue(t)?t:ne(n)}function S5(n){Qn();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.n1h_1," | ",l,l,l,l,C5);break;default:r="number";break}return r}function E5(n){Qn();var r=S5(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+ne(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+V(n.n1h_1,", ",l,l,l,l,A5)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?ne(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+ne(n.q1h_1),d="sameSite: "+ne(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+ne(m);var x=st([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+vc(n.l1h_1)+": typedCookie"+k+"("+ne(n.l1h_1)+", { "+V(x,", ")+" })"}function Ey(n){Qn();for(var r=q.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return si(aa(r))}function z5(n){Qn();for(var r=q.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=T5,a=new cy(i),s=wi(r,a),o=Ey(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=st([f,d]),m=q.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=V(k,", ",l,l,l,l,q5),z=nn.f();return z.ca("import { "+V(_,", ")+` } from './client.js';
`),s.i1()||z.ca(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,O5())+`
};
`),o.i1()||z.ca(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,j5)+"] as const, ["+S+`]);
`),z.toString()}function I5(n){return Qn(),n.xf().d1(1).toUpperCase()}function C5(n){return Qn(),ne(n)}function A5(n){return Qn(),ne(n)}function T5(n,r){Qn();var e=n.l1h_1,t=r.l1h_1;return Tt(e,t)}function q5(n){Qn();var r=ne(n.l1h_1),e=ne(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+ne(i)+" }"}function O5(){return Re(n=>E5(n),1,0,7,"cookieEntry")}function j5(n){return Qn(),ne(n)}var Eh;function Qn(){Eh||(Eh=!0,xy=bt.te("[A-Za-z_$][A-Za-z0-9_$]*"),Sy=bt.te("[._-]+([A-Za-z0-9])"))}function U5(){return ja(),zy}var zy;function $f(n,r){ja();var e;if(n instanceof fr)e=n.v17()?Iy(n.w17()):n.w17();else if(n instanceof cn)e=V(n,", ","[","]",l,l,D5(r));else if(n instanceof nr){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,L5(r))}e=t}else Is();return e}function Iy(n){return ja(),"'"+Kn(Kn(Kn(Kn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function N5(n){ja();var r=P5,e=new fy(r),t=wi(n,e);return V(t,`
`,l,l,l,l,M5)}function D5(n){return r=>$f(r,n)}function L5(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(U5().ue(e)?e:Iy(e))+": "+$f(t,n+"    ")}}function P5(n,r){ja();var e=n.x1h_1,t=r.x1h_1;return Tt(e,t)}function M5(n){return ja(),"export const "+n.x1h_1+" = "+$f(new nr(n.y1h_1),"")+` as const;
`}var zh;function ja(){zh||(zh=!0,zy=bt.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function Cy(){return zr(),Ay}var Ay;function Jf(){return zr(),Ty}var Ty;function qy(){return zr(),Oy}var Oy;function jy(){return zr(),Uy}var Uy;function Ih(){return zr(),Ny}var Ny;function Dy(){return zr(),Ly}var Ly;function uo(){return zr(),Py}var Py;function R5(){return zr(),My}var My;function B5(){return zr(),Ry}var Ry;function F5(){return zr(),By}var By;function Hf(){return zr(),Fy}var Fy;function $5(){return zr(),$y}var $y;function J5(){return zr(),Jy}var Jy;function H5(){return zr(),Hy}var Hy;function G5(){return zr(),Gy}var Gy;function K5(n,r){var e=zl(r.slice());return et(e,U(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+_p(r,"",l,l,l,l,qC)))}function W5(n,r){for(var e=or(r,"paths"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();oC(n,o)&&i.s2(s.k2(),s.l2())}var u=su(i);return new nr(et(r,U("paths",new nr(u))))}function Y5(n,r){if(n.b1i_1.i1())return r;for(var e=or(r,"components"),t=e??new nr(Nr()),i=or(t,"schemas"),a=i??Nr(),s=Zc(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.x1i_1,f=s.o2(c);if(f==null){var v=ke().m15(u.y1i_1);s.s2(c,v)}}for(var h=or(r,"paths"),d=h??Nr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=Dr(k),z=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),O=A.k2(),D=A.k2(),J=A.l2(),T,M;Cy().l1(D)?M=J instanceof nr:M=!1,M?T=Q5(n,J):T=J;var F=T;z.s2(O,F)}var B=new nr(z);_.s2(x,B)}var L=_;return new nr(et(et(r,U("paths",new nr(L))),U("components",new nr(et(t,U("schemas",new nr(s)))))))}function Z5(n,r){var e=or(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=or(i,"schemas"),s=a??Nr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof nr?v=V5(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new nr(et(Dr(w),U("type",ce("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),z=s.r2().x();z.y();){var I=z.z(),A=I.k2();(E(k,yn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var O=S.r2(),D=fn(Yr(O,10),16),J=vr.ha(D),T=O.x();T.y();){var M=T.z(),F=M.k2(),B=M.l2(),L=B instanceof nr?B:null,H=U(L==null?null:Ch(n,L),F);J.s2(H.ch_1,H.dh_1)}for(var X=J,$=vr.ha(k.c1()),tr=k.r2().x();tr.y();){var Y=tr.z(),G=Y.k2(),ar=Y.k2(),ur=Y.l2(),Q=X.o2(Ch(n,ur)),Tr=Q??ar;$.s2(G,Tr)}for(var wr=$,dr=vr.q4(),Ir=s.r2().x();Ir.y();){var br=Ir.z(),kr=br.k2();(wr.o2(kr)==null||wr.o2(kr)===kr)&&dr.s2(br.k2(),br.l2())}for(var Pr=vr.ha(dr.c1()),_r=dr.r2().x();_r.y();){var Gr=_r.z(),an=Gr.k2(),Kr=Gr.k2(),gr=Gr.l2(),Wr=k.o2(Kr),Qr=Wr??gr;Pr.s2(an,Qr)}var un=Pr,Fr=new nr(et(i,U("schemas",new nr(un))));return Dr(_c(wr,n,new nr(et(r,U("components",Fr)))))}function V5(n,r){var e;if(P(it(Ai(n,r)),Qt(["object","null"]))){var t=or(r,"properties");e=!(t??Nr()).i1()}else e=!1;return e}function Ch(n,r){return new nr(Jx(r,"title"))}function X5(n,r){var e=new mt,t=new mm,i=new mt;tl(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new mt;tl(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function Q5(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=Zc(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new mt;tl(o,"description","");var u=new mt,c="application/json",f=new mt,v=new mt;tl(v,"$ref","#/components/schemas/"+s.x1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.z1i_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var z=m;i.s2(k,z)}}}return new nr(et(r,U("responses",new nr(i))))}function rC(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=Dr(ke().m15(i)),s=Cn.e1();return`
`+Gf(n,"PublicConfig",a,s,r)}function nC(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Kn(Kn(t,"\\","\\\\"),"'","\\'")+`';
`}function eC(n){var r=n.h1i_1,e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.b1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=OC,c=new py(u),f=wi(o,c),v=V(f,"",l,l,l,l,jC),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+Gi("current-user.svelte.ts",".ts")+`.js';
`)+("import type { "+(s?"CurrentUser, Permission":"CurrentUser")+` } from './types.js';

`)+("export const pageGuards: readonly PageGuard<"+(s?"Permission":"never")+`>[] = [
`+v+`];

`)+`export async function signedInUser(url: URL): Promise<CurrentUser> {
    const user = await currentUser.load();
`+("    if (!user) "+h+`;
`),_;return s?_=`    const guard = matchGuard(pageGuards, url.pathname);
    if (guard?.permission && !currentUser.can(guard.permission)) error(403, 'Forbidden');
`:_="",d+_+`    return user;
}

export async function guardPages(event: { url: URL }): Promise<void> {
    if (typeof document === 'undefined' || !matchGuard(pageGuards, event.url.pathname)) return;
    await signedInUser(event.url);
}
`}function tC(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return Ky(n,"CurrentUser",i.c1j_1,i.d1j_1,r)}function iC(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return Ky(n,"UserPreferences",i.f1j_1,i.g1j_1,r)}function Ky(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Dn(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Dn(c)+`;
`;var f=Dr(ke().m15(t)),v=Cn.e1();return`
`+Gf(n,r,f,v,i)}function aC(n,r){for(var e=or(Dr(ke().m15(r.g1j_1)),"properties"),t=(e??Nr()).p2(),i=r.j1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=V(f,", ",l,l,l,l,UC),h=jy().k15(Tf.t17(),ke().m15(r.i1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=Te(r.h1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function sC(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.e1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function oC(n,r){var e,t=n.z1h_1,i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||be(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.q1i_1.i1())u=!0;else{var c=n.q1i_1,f;r:{var v;if(E(c,W)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||be(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function lC(n,r){if(r.i1()&&n.p1i_1.i1()&&n.r1i_1.i1()&&!n.s1i_1&&!n.t1i_1)return`export {};
`;for(var e=Cn.e1(),t=q.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=U(s,Gf(n,Dn(s),Dr(o),e,r));t.n(u)}for(var c=t,f=n.r1i_1.q2(),v=q.m(),h=f.x();h.y();){var d=h.z();d.m1j_1&&v.n(d)}for(var _=q.g1(Yr(v,10)),m=v.x();m.y();){var w=m.z(),x=U(w.k1j_1,Vy(n,w.k1j_1,w.l1j_1));_.n(x)}var k=_,S=we(c,k),z=NC,I=new _y(z),A=wi(S,I),O=V(A,`
`,l,l,l,l,DC),D;e.l1("LucideIcon")?D=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:D="";var J=D,T=r.q2(),M;r:{var F;if(E(T,W)?F=T.i1():F=!1,F){M=!1;break r}for(var B=T.x();B.y();){var L=B.z();if(Wf(n,Dr(L))){M=!0;break r}}M=!1}var H=M,X=`declare const brand: unique symbol;
`,$;H||n.t1i_1?$=X:$=null;var tr=$,Y=Ve("dates.ts"),G;n.s1i_1?G=Y:G=null;var ar=G,ur=Ve("quantities.ts"),Q;n.t1i_1?Q=ur:Q=null;var Tr=Q,wr;C(O)===0?wr=null:wr=O;var dr=wr,Ir=V(st([tr,ar,Tr,dr]),`
`),br;return C(Ir)===0?br=`export {};
`:br=Ir,J+br}function Gf(n,r,e,t,i){var a=fl(n,tw(n,e),""),s=iu(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:ss(u),f;if(c==null)f=null;else{var v;r:{var h;if(E(c,W)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof ue){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+Vy(n,r,s);if(Wf(n,e)){var m=Mn(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(Yf(n,e))return a+("export interface "+r+" "+Xy(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+pc(n,e,i,"    ",At())+`),
`)+cC(n,e)+vC(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+Mn(n,e,t)+`;
`),x=uC(n,r,e,i);return w+(x??"")}function uC(n,r,e,t){var i=or(e,"discriminator"),a=i==null?null:Hr(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=hn(e,"oneOf"),c=u??hn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=or(e,"discriminator"),d=h==null?null:or(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:pa(_),w=m??mr(),x;if(w.i1()){for(var k=q.g1(Yr(v,10)),S=v.x();S.y();){var z=S.z(),I=cl(n,Dr(z)),A;if(I==null)A=null;else{var O=t.o2(I);A=O==null?null:Dr(O)}var D=A,J=D??Dr(z),T=or(J,"properties"),M=T==null?null:or(T,o),F=M==null?null:hn(M,"enum"),B=F==null?null:Tc(F),L=B instanceof fr?B:null,H=L==null?null:Xn(L),X;if(H==null)return null;X=H;var $=X;k.n($)}x=k}else x=w;var tr=x;if(tr.i1())return null;var Y=xe(n,ce(o)),G=V(tr,l,l,l,l,l,LC(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Y+"]]: (value: Extract<"+r+", { "+Be(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Y+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function cC(n,r){for(var e=ou(r,"required"),t=or(r,"properties"),i=t??Nr(),a=q.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=fC(n,Dr(c),e.l1(u)),v;if(f.i1())v=null;else{var h=Be(u);v="        "+h+": { "+V(f,l,l,l,l,l,PC)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+V(_,`
`)+`
    },
`}function fC(n,r,e){var t=Ai(n,r).l1("integer"),i=U("required","true"),a;Wy(n,r,e)?a=i:a=null;var s=a,o=_e(n,r,"minLength"),u;o==null?u=null:u=U("minlength",zt(o));var c=u,f=_e(n,r,"maxLength"),v;f==null?v=null:v=U("maxlength",zt(f));var h=v,d=qh(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=U("min",d);var m=_,w=qh(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=U("max",w);var k=x,S=Hr(r,"pattern"),z;return S==null?z=null:z=U("pattern",xe(n,ce(S))),st([s,c,h,m,k,z])}function Wy(n,r,e){if(Zf(n,r)||r.c18("enum")!=null)return!1;var t;if(Ai(n,r).l1("string")){var i=_e(n,r,"minLength");t=(i??0)>=1}else t=e&&Yy(n,r);return t}function Yy(n,r){var e=Ai(n,r),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function vC(n,r,e,t){if(!Kf(n,e,t,At()))return"";for(var i=ou(e,"required"),a=or(e,"properties"),s=a??Nr(),o=q.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=Dr(v),d="value"+(Jf().ue(f)?"."+f:"["+xe(n,ce(f))+"]"),_=we(hC(n,f,d,h,i.l1(f)),hc(n,h,d,dc(n,f),"        ",0,t));ka(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+V(m,"",l,l,l,l,MC)+`        return errors;
    },
`}function Kf(n,r,e,t){var i;if(Yf(n,r)){var a=or(r,"properties"),s=(a??Nr()).q2(),o;r:{var u;if(E(s,W)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=Dr(f),h,d=G5(),_;n:{var m;if(E(d,W)?m=d.i1():m=!1,m){_=!1;break n}for(var w=d.x();w.y();){var x=w.z();if(_e(n,v,x)!=null||x==="pattern"&&Hr(v,x)!=null){_=!0;break n}}_=!1}if(_)h=!0;else{var k=cl(n,v),S;if(k==null)S=null;else{var z;if(t.l1(k))z=!1;else{var I=e.o2(k),A=I instanceof nr?I:null,O;A==null?O=null:O=Kf(n,A,e,vo(t,k)),z=O===!0}S=z}h=S===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function cl(n,r){var e=Hr(r,"$ref");if(e!=null)return js(e,47);var t=Zy(n,r);if(t!=null)return cl(n,t);if(Ai(n,r).l1("array")){var i=or(r,"items"),a;return i==null?a=null:a=cl(n,i),a}return null}function Zy(n,r){var e=hn(r,"oneOf"),t=e??hn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=q.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof nr?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=q.m(),h=c.x();h.y();){var d=h.z();P(Ai(n,d),Ee("null"))||v.n(d)}f=v}var _=f;return _==null?null:Tc(_)}function hC(n,r,e,t,i){var a=xe(n,ce(r)),s=_e(n,t,"minLength"),o=s==null?null:_o(s),u=_e(n,t,"maxLength"),c=u==null?null:_o(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=_e(n,t,"minimum"),x;w==null?x=null:x=U(w,!1);var k=x,S;if(k==null){var z=_e(n,t,"exclusiveMinimum"),I;z==null?I=null:I=U(z,!0),S=I}else S=k;var A=S,O=_e(n,t,"maximum"),D;O==null?D=null:D=U(O,!1);var J=D,T;if(J==null){var M=_e(n,t,"exclusiveMaximum"),F;M==null?F=null:F=U(M,!0),T=F}else T=J;var B=T,L=q.m();if(Wy(n,t,i)&&Yy(n,t)){var H="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+$i(a,n,"Required.");L.n(H)}if(o!=null||c!=null||m!=null){var X="        if (typeof "+e+" === 'string') {";if(L.n(X),o!=null||c!=null){var $="            const length = [..."+e+"].length;";L.n($)}if(o!=null){var tr="            if (length < "+o+") "+$i(a,n,Hi.n1j(o));L.n(tr)}if(c!=null){var Y="            if (length > "+c+") "+$i(a,n,Hi.o1j(c));L.n(Y)}if(m!=null){var G=n.u1i_1,ar=y7();G.n(ar);var ur="            if (!matches("+xe(n,ce(m))+", "+e+")) "+$i(a,n,Hi.p1j(m));L.n(ur)}var Q="        }";L.n(Q)}if(A!=null||B!=null){var Tr="        if (typeof "+e+" === 'number') {";if(L.n(Tr),A!=null){var wr=A.hh(),dr=A.ih(),Ir=dr?"<=":"<",br="            if ("+e+" "+Ir+" "+zt(wr)+") "+$i(a,n,Hi.q1j(wr,dr));L.n(br)}if(B!=null){var kr=B.hh(),Pr=B.ih(),_r=Pr?">=":">",Gr="            if ("+e+" "+_r+" "+zt(kr)+") "+$i(a,n,Hi.r1j(kr,Pr));L.n(Gr)}var an="        }";L.n(an)}if(!L.i1()){var Kr=n.u1i_1,gr=cw();Kr.n(gr)}return L}function hc(n,r,e,t,i,a,s){var o=Hr(r,"$ref");if(o!=null){var u=js(o,47),c=s.o2(u),f=c instanceof nr?c:null,v;if(f==null)return mr();v=f;var h=v;if(!Kf(n,h,s,At()))return mr();var d=n.u1i_1,_=ra([cw(),m7()]);return ka(d,_),Ee(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Dn(u)+".validate("+e+"));")}var m=Zy(n,r);if(m!=null)return hc(n,m,e,t,i,a,s);if(!Ai(n,r).l1("array"))return mr();var w=or(r,"items"),x;if(w==null)return mr();x=w;var k=x,S=a===0?"":""+(a+1|0),z="item"+S,I="index"+S,A=hc(n,k,z,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?mr():we(we(ra([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+z+", "+I+") => {"]),A),ra([i+"    });",i+"}"]))}function dc(n,r){return Kn(Kn(Kn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function _e(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:Xn(o);return u==null?null:m_(u)}function Ai(n,r){var e=r.c18("type"),t;if(e instanceof cn){for(var i=q.g1(Yr(e,10)),a=e.x();a.y();){var s=a.z(),o=Un(s).w17();i.n(o)}t=i}else e instanceof fr?t=Ee(e.w17()):t=mr();return t}function Vy(n,r,e){var t=V(e,"",l,l,l,l,RC(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function dC(n,r,e){for(var t=vr.q4(),i=su(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=iu(n,Dr(o));if(u!=null){var c=it(u),f=t.o2(c);if(f==null){var v=new fc(Dn(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();Wi(n,h,d,x,Dn(w),Dn(w),!0)}var k=or(r,"paths");k==null||Wi(n,h,d,k,"","",!1);for(var S=h.p2(),z=q.m(),I=S.x();I.y();){var A=I.z(),O;(E(t,yn)?t:g()).m2(A)?O=!1:O=!P(A,n.p1i_1),O&&z.n(A)}for(var D=BC(d),J=new gy(D),T=wi(z,J),M=vr.ha(fn(Yr(T,10),16)),F=T.x();F.y();){var B=F.z(),L=ye(h,B),H=FC,X=eb(L,Qx([H,$C]));M.s2(B,X)}for(var $=M,tr=$.q2(),Y=new yy(tr),G=uk(Y),ar=e.p2(),ur=q.g1(Yr(ar,10)),Q=ar.x();Q.y();){var Tr=Q.z(),wr=Dn(Tr);ur.n(wr)}for(var dr=qc(hi(hi(ur,"LucideIcon"),"PublicConfig")),Ir=vr.ia(t),br=T.x();br.y();){var kr=br.z(),Pr=ye($,kr),_r=Dn(Pr.t1j_1),Gr;if(ye(G,_r)>1||dr.l1(_r)){var an=Pr.s1j_1,Kr;C(an)===0?Kr=_r:Kr=an+_r,Gr=Kr}else Gr=_r;var gr=Gr,Wr;if(!dr.l1(gr))Wr=gr;else{var Qr=Vc(2,JC),un=Es(Qr,HC(gr)),Fr;r:{for(var rn=un.x();rn.y();){var pn=rn.z();if(!dr.l1(pn)){Fr=pn;break r}}throw qr.r("Sequence contains no element matching the predicate.")}Wr=Fr}var vn=Wr;dr.n(vn);var _n=new fc(vn,ye(d,kr),!0);Ir.s2(kr,_n)}return Ir}function iu(n,r){var e=hn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=q.m(),s=i.x();s.y();){var o=s.z();o instanceof ue||a.n(o)}var u=a,c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=q.g1(Yr(u,10)),m=u.x();m.y();){var w=m.z(),x=Un(w).w17();_.n(x)}var k=aa(_),S;return k.c1()>1?S=k:S=null,S}function Wf(n,r){var e,t,i=B5(),a=r.c18("type"),s=a instanceof fr?a:null;if(tb(i,s==null?null:Xn(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(E(o,W)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function Yf(n,r){return or(r,"properties")!=null&&r.c18("allOf")==null}function pc(n,r,e,t,i){var a=or(r,"properties"),s=a??Nr();if(s.i1())return"{}";for(var o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+Be(f)+": "+ni(n,Dr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(hi(we(Ee("{"),d),t+"}"),`
`)}function ni(n,r,e,t,i){if(Zf(n,r))return"null";var a=Hr(r,"$ref");if(a!=null){var s=js(a,47),o=e.o2(s),u=o instanceof nr?o:null,c;if(u==null)return"null";c=u;var f=c;return Yf(n,f)?Dn(s)+".empty()":Wf(n,f)?Dn(s)+"("+ni(n,f,e,t,vo(i,s))+")":i.l1(s)?"null":ni(n,f,e,t,vo(i,s))}var v=r.c18("enum");if(v!=null){var h=vu(ss(v)),d;h==null?d=null:d=xe(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return xe(n,m);var w=hn(r,"oneOf"),x=w??hn(r,"anyOf");if(x!=null){var k=vu(x),S;k==null?S=null:S=ni(n,Dr(k),e,t,i);var z=S;return z??"null"}var I=hn(r,"allOf");if(I!=null)return I.c1()===1?ni(n,Dr(bp(I)),e,t,i):V(I,", ","{ "," }",l,l,GC(n,e,t,i));var A=r.c18("type"),O;if(A instanceof cn){var D=vu(A),J=D==null?null:Un(D);O=J==null?null:J.w17()}else A instanceof fr?O=Xn(A):O=null;var T=O,M;switch(T){case"string":var F=Qf(r),B;F==null?B=null:B="'' as "+F;var L=B,H;if(L==null){var X=sw(r),$;X==null?$=null:$=ye(R5(),X)+" as "+X,H=$}else H=L;var tr=H;M=tr??"''";break;case"integer":case"number":M="0";break;case"boolean":M="false";break;case"array":var Y=hn(r,"prefixItems"),G;Y==null?G=null:G=V(Y,", ","[","]",l,l,KC(n,e,t,i));var ar=G;M=ar??"[]";break;case"object":M=pc(n,r,e,t,i);break;case null:M=r.c18("properties")!=null?pc(n,r,e,t,i):"null";break;default:M="null";break}return M}function Zf(n,r){var e=r.c18("type"),t=hn(r,"oneOf"),i=t??mr(),a=hn(r,"anyOf"),s=a??mr(),o=we(i,s),u,c,f,v,h;if(e instanceof cn){var d;r:{var _;if(E(e,W)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(Un(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:Xn(S))==="true"}if(f)c=!0;else{var z=hn(r,"enum"),I=z??mr(),A;r:{var O;if(E(I,W)?O=I.i1():O=!1,O){A=!1;break r}for(var D=I.x();D.y();){var J=D.z();if(J instanceof ue){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var T;r:{var M;if(E(o,W)?M=o.i1():M=!1,M){T=!1;break r}for(var F=o.x();F.y();){var B=F.z(),L=B instanceof nr?B:null,H;if(L==null?H=null:H=Zf(n,L),H===!0){T=!0;break r}}T=!1}u=T}return u}function Xy(n,r,e,t){for(var i=ou(r,"required"),a=or(r,"properties"),s=a??Nr(),o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=fl(n,tw(n,Dr(v)),t+"    ")+(t+"    "+Be(f)+h+": "+Mn(n,Dr(v),e,t+"    ")+";");o.n(d)}var _=o;return V(hi(we(Ee("{"),_),t+"}"),`
`)}function Mn(n,r,e,t){t=t===l?"":t;var i=Hr(r,"$ref");if(i!=null){var a=Dn(js(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=ss(s),u=q.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:Xn(v);h==null||u.n(h)}var d=it(u),_;if(n.p1i_1.i1()?_=!1:_=P(d,n.p1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=iu(n,r);if(w!=null){var x=n.r1i_1.o2(it(w));if(x!=null){var k=x.k1j_1;e.n(k);var S,z=ss(s),I;r:{var A;if(E(z,W)?A=z.i1():A=!1,A){I=!1;break r}for(var O=z.x();O.y();){var D=O.z();if(D instanceof ue){I=!0;break r}}I=!1}return I?S=x.k1j_1+" | null":S=x.k1j_1,S}}var J=ss(s),T=V(J," | ",l,l,l,l,WC(n)),M;return C(T)===0?M="never":M=T,M}var F=r.c18("const");if(F!=null)return xe(n,F);var B=hn(r,"oneOf");if(B!=null)return Th(n,B,e,t);var L=hn(r,"anyOf");if(L!=null)return Th(n,L,e,t);var H=hn(r,"allOf");if(H!=null)return V(H," & ",l,l,l,l,YC(n,e,t));var X=r.c18("type"),$;if(X==null)$=r.c18("properties")!=null?Qy(n,r,e,t):"unknown";else if(X instanceof cn){for(var tr=q.g1(Yr(X,10)),Y=X.x();Y.y();){var G=Y.z(),ar=Ah(n,Un(G).w17(),r,e,t);tr.n(ar)}$=V(aa(tr)," | ")}else $=Ah(n,Un(X).w17(),r,e,t);return $}function Ah(n,r,e,t,i){var a;switch(r){case"string":var s=Qf(e),o=s??sw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=pC(n,e,t,i);break;case"object":a=Qy(n,e,t,i);break;default:a="unknown";break}return a}function pC(n,r,e,t){var i=hn(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,ZC(n,e,t));var a=r.c18("items"),s=a==null?null:Dr(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=Mn(n,u,e,t);return gs(c," | ")||gs(c," & ")?"("+c+")[]":c+"[]"}function Qy(n,r,e,t){var i=or(r,"properties");if(!(i??Nr()).i1())return Xy(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof nr?a:null;return s!=null?"Record<string, "+Mn(n,s,e,t)+">":"Record<string, unknown>"}function Th(n,r,e,t){for(var i=q.g1(Yr(r,10)),a=r.x();a.y();){var s=a.z(),o=Mn(n,Dr(s),e,t);i.n(o)}return V(aa(i)," | ")}function xe(n,r){var e;if(r instanceof ue)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=Te(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function _C(n,r,e){for(var t=Cn.e1(),i=vr.q4(),a=q.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=Dr(f),h=Cy().x();h.y();){var d=h.z(),_=or(v,d);if(_!=null){var m=ew(n,c),w=i.o2(m),x;if(w==null){var k=q.m();i.s2(m,k),x=k}else x=w;var S=x,z=xC(n,c,d,v,_);S.n(z)}}var I=qc(Hf());I.h1(i.p2());for(var A=I,O=su(i),D=q.g1(O.c1()),J=O.r2().x();J.y();){var T=J.z(),M=T.k2(),F=T.l2(),B=Cn.e1(),L=nn.f(),H=V(F,`
`,l,l,l,l,VC(t,n,B,M,a,s,A,L)),X=L.toString()+`
export const `+M+` = {
`+H+`
};
`;D.n(X)}for(var $=D,tr=si(t),Y=q.m(),G=tr.x();G.y();){for(var ar=G.z(),ur=q.g1(Yr(e,10)),Q=e.x();Q.y();){var Tr=Q.z(),wr=Dn(Tr);ur.n(wr)}ur.l1(ar)&&Y.n(ar)}var dr=Y,Ir,br=Bx(i.q2()),kr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){kr=!1;break r}for(var _r=br.x();_r.y();){var Gr=_r.z();if(Gr.b1k_1){kr=!0;break r}}kr=!1}kr?Ir="ApiError, request, stream":Ir="ApiError, request";var an=Ir,Kr=n.d1i_1.i1()?an:an+", codeMessages, errorCode",gr=nn.f();gr.ca("import { "+Kr+`, type RequestOptions } from './client.js';
`);var Wr=n.a1i_1!=null?hi(dr,"PublicConfig"):dr,Qr=n.d1i_1.i1()?Wr:si(hi(Wr,"ErrorCode"));Qr.i1()||gr.ca("import type { "+V(Qr)+` } from './types.js';
`),gr.ca(`
`);for(var un=$.x();un.y();){var Fr=un.z();gr.ca(Fr).ca(`
`)}if(gr.ca(wC(n,a)),n.d1i_1.i1()||gr.ca(F5()),!s.i1()){gr.ca(`export const uploadRules = {
`);for(var rn=s.r2(),pn=XC,vn=new my(pn),_n=wi(rn,vn).x();_n.y();){var re=_n.z(),Fn=re.k2(),$n=re.l2();gr.ca("    '"+Fn+"': "+$n+`,
`)}gr.ca(`} as const;

`)}return n.a1i_1!=null&&gr.ca(Ve("public-config.ts")),gr.ca("export const api = { "+V(si(i.p2()))+` };
`),gr.ca(Ve("api-with.ts")),gr.toString()}function gC(n,r){var e=or(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=it(ou(r,"required")),c=o.r2(),f=V(c,"; ",l,l,l,l,QC(u));return"{ "+f+" }"}function mC(n,r){var e=r.c18("maxBytes"),t=e==null?null:Un(e),i=t==null?null:pI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=hn(r,"types"),u;if(o==null)u=null;else{for(var c=q.g1(Yr(o,10)),f=o.x();f.y();){var v=f.z(),h=Te(Un(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+V(w)+"]";var k=x,S=r.c18("maxFiles"),z=S==null?null:Un(S),I=z==null?null:_I(z),A;I==null?A=null:A="maxFiles: "+I;var O=st([s,k,A]);return"{ "+V(O)+" }"}function yC(n){return rw(n,"ErrorCode",n.d1i_1)}function rw(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,r7),i=V(e,"",l,l,l,l,n7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function wC(n,r){var e=V(r,"",l,l,l,l,e7),t=V(r,"",l,l,l,l,t7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function bC(n,r,e){var t=Xf(r),i=Vc(1,i7),a=Es(i,a7(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw qr.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function kC(n,r,e,t){var i=Wx([r,r+V(e,"",l,l,l,l,s7)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=Vc(2,o7),v=Es(f,l7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw qr.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function xC(n,r,e,t,i){for(var a=Cn.e1(),s=hn(t,"parameters"),o=s??mr(),u=hn(i,"parameters"),c=u??mr(),f=we(o,c),v=q.g1(Yr(f,10)),h=f.x();h.y();){var d=h.z(),_=Dr(d);v.n(_)}for(var m=v,w=qy().xe(r),x=Sp(Es(w,u7)),k=q.m(),S=x.x();S.y();){var z=S.z(),I;r:{for(var A=m.x();A.y();){var O=A.z();if(Hr(O,"name")===z&&Hr(O,"in")==="path"){I=O;break r}}I=null}var D=I,J=D==null?null:or(D,"schema"),T;J==null?T=null:T=Mn(n,J,a);var M=T,F;if(M==null)F=null;else{var B;M==="unknown"||M==="string"?B=null:B=M,F=B}var L=F,H=L??"string | number",X=iw(z)+": "+H;k.n(X)}var $=or(i,"requestBody"),tr=$==null?null:or($,"content"),Y=tr==null?null:tr.r2(),G;if(Y==null)G=null;else{var ar;r:{for(var ur=Y.x();ur.y();){var Q=ur.z();if(be(Q.k2(),"multipart/")){ar=Q;break r}}ar=null}G=ar}var Tr=G,wr=Tr==null?null:Tr.l2(),dr;wr==null?dr=null:dr=wr instanceof nr?wr:null;var Ir=dr,br=Ir==null?null:or(Ir,"schema"),kr;br==null?kr=null:kr=gC(n,br);var Pr=kr,_r;if(Tr!=null)_r=Pr??"FormData";else{var Gr;tr==null?Gr=null:Gr=nw(n,tr);var an=Gr,Kr;an==null?Kr=null:Kr=Mn(n,an,a),_r=Kr}var gr=_r;if($!=null){var Wr="body: "+(gr??"unknown");k.n(Wr)}for(var Qr=q.m(),un=m.x();un.y();){var Fr=un.z();Hr(Fr,"in")==="query"&&Qr.n(Fr)}var rn=Qr;if(!rn.i1()){var pn=V(rn,"; ",l,l,l,l,c7(n,a)),vn;r:{var _n;if(E(rn,W)?_n=rn.i1():_n=!1,_n){vn=!1;break r}for(var re=rn.x();re.y();){var Fn=re.z(),$n=Fn.c18("required"),de=$n==null?null:Un($n);if((de==null?null:Xn(de))==="true"){vn=!0;break r}}vn=!1}var je=vn,pe="query"+(je?"":"?")+": { "+pn+" }";k.n(pe)}for(var Fe=q.m(),$e=m.x();$e.y();){var Ie=$e.z(),Jn;if(Hr(Ie,"in")==="header"){var An=J5(),xn=Hr(Ie,"name"),zn=(xn??"").toLowerCase();Jn=!An.l1(zn)}else Jn=!1;Jn&&Fe.n(Ie)}var Ue=Fe;if(!Ue.i1()){var Ti=V(Ue,"; ",l,l,l,l,f7(n,a)),Ne;r:{var ft;if(E(Ue,W)?ft=Ue.i1():ft=!1,ft){Ne=!1;break r}for(var qi=Ue.x();qi.y();){var Oi=qi.z(),vt=Oi.c18("required"),Ot=vt==null?null:Un(vt);if((Ot==null?null:Xn(Ot))==="true"){Ne=!0;break r}}Ne=!1}var Ua=Ne,Na="headers"+(Ua?"":"?")+": { "+Ti+" }";k.n(Na)}var Da="options?: RequestOptions";k.n(Da);var La=x.i1()?Te(r):SC(n,r),ji=or(i,"x-ktor-svelte-upload"),jt;ji==null?jt=null:jt=mC(n,ji);var ht=jt,Ce=q.m();Ce.n("...options"),rn.i1()||Ce.n("query"),Ue.i1()||Ce.n("typedHeaders: headers"),$!=null&&Ce.n("body"),ht!=null&&Ce.n("upload: "+ht),Pr!=null&&Ce.n("multipart: true");var Pa=Ce.j6(),Ui=zC(n,i,a),Ut=IC(n,i),Nt=EC(n,i,a),Ma=e.toUpperCase(),Ni=Hr(i,"operationId"),Dt;Ni==null?Dt=null:Dt=au(Ni);for(var Di=Dt,Lt=Di??CC(n,r,e),Li=st([Hr(i,"summary"),Hr(i,"description")]),Pi=q.g1(Yr(Li,10)),Ys=Li.x();Ys.y();){var Mi=Ys.z(),lu=b(V_(As(Mi)?Mi:g()));Pi.n(lu)}for(var Ra=q.m(),Ri=Pi.x();Ri.y();){var Ba=Ri.z();C(Ba)>0&&Ra.n(Ba)}var Fa=aa(Ra),uu="@deprecated",Pt;aw(i)?Pt=uu:Pt=null;var cu=Pt,Zs=n.w1i_1,$a=e.toUpperCase(),Ja=Zs.o2($a+" "+r),Mt;Ja==null?Mt=null:Mt="@see "+Ja;var hw=we(Fa,st([cu,Mt])),dw=v7(Pa,Ut,k,Ui,e,La),nv=V(aa(Nt.q2())," | "),fu;C(nv)===0?fu=null:fu=nv;var pw=fu;return new hy(Ma,r,Lt,hw,x,dw,a,Ut,ht,pw,pa(Nt.p2()))}function SC(n,r){var e=nn.f();e.da(96);for(var t=0,i=qy().xe(r).x();i.y();){var a=i.z();e.ca(dc(n,te(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+iw(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(dc(n,at(r,t))),e.da(96),e.toString()}function EC(n,r,e){for(var t=or(r,"responses"),i=(t??Nr()).r2(),a=q.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=Al(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=or(Dr(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=nw(n,S),I;if(z==null){u=null;break r}else I=z;var A=I;u=U(w,Mn(n,A,e))}var O=u;O==null||a.n(O)}return su(O_(a))}function zC(n,r,e){var t=or(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=q.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();be(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;Oe(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:Dr(z),A;if(I==null)return"unknown";A=I;var O=A,D=or(O,"content"),J;if(D==null)return"void";J=D;var T=J,M=or(T,"text/event-stream");if(M!=null){var F=or(M,"schema"),B;F==null?B=null:B=Mn(n,F,e);var L=B;return L??"string"}var H=T.p2(),X;r:{for(var $=H.x();$.y();){var tr=$.z();if(gs(tr,"json")){X=tr;break r}}X=null}var Y=X;if(Y!=null){var G=or(T,Y),ar=G==null?null:or(G,"schema"),ur;ar==null?ur=null:ur=Mn(n,ar,e);var Q=ur;return Q??"unknown"}return"string"}function IC(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();be(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof nr?h:null,_=d==null?null:or(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function nw(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(gs(a,"json")){t=a;break r}}t=null}var s=t,o=s??ib(r.p2()),u;if(o==null)u=null;else{var c=or(r,o);u=c==null?null:or(c,"schema")}return u}function ew(n,r){var e=n.q1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||be(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=K_(W_(r,o),_a([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!be(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=Xf(d,Hf());var m=_;return m??"root"}function CC(n,r,e){var t=n.q1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||be(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=K_(W_(r,u),_a([47])),f=q.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=q.m(),m=d.x();m.y();){var w=m.z();be(w,"{")||_.n(w)}var x=ab(_,1);if(!x.i1()){var k=e==="post"?"":e;return au(k+V(x,"",l,l,l,l,h7))}var S=kp(d),z=(S==null?null:be(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function tw(n,r){var e=Hr(r,"description"),t;e==null?t=null:t=b(V_(As(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;aw(r)?c=u:c=null;var f=c;return st([o,f])}function fl(n,r,e){if(r.i1())return"";var t=Y_(Kn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+bp(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,d7(e))+(e+` */
`)}function AC(n){return"'"+n.l1h_1+"'"}function TC(n){return`
`+n.p1g()}function qC(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function _c(n,r,e){var t;if(e instanceof nr){var i=Hr(e,"$ref"),a=i==null?null:js(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=_c(n,r,v.l2());c.s2(h,d)}u=new nr(c)}else u=X5(r,o);t=u}else if(e instanceof cn){for(var _=q.g1(Yr(e,10)),m=e.x();m.y();){var w=m.z(),x=_c(n,r,w);_.n(x)}t=new cn(_)}else t=e;return t}function OC(n,r){var e=n.a1j_1,t=r.a1j_1;return Tt(e,t)}function jC(n){var r=n.b1j_1,e;r==null?e=null:e=", permission: "+Te(r);var t=e,i=t??"";return"    { page: "+Te(n.a1j_1)+i+` },
`}function UC(n){var r=n.k2(),e=n.l2();return Be(r)+": "+Te(e)}function NC(n,r){var e=n.ch_1,t=r.ch_1;return Tt(e,t)}function DC(n){return n.dh_1}function LC(n){return r=>xe(n,ce(r))}function PC(n){var r=n.hh(),e=n.ih();return r+": "+e}function qh(n,r,e,t,i,a){var s=_e(n,r,t);if(s!=null)return zt(s);var o=_e(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?zt(c+a):null}function MC(n){return n+`
`}function $i(n,r,e){return"addError(errors, "+n+", "+xe(r,ce(e))+");"}function RC(n){return r=>"    "+Be(r)+": "+xe(n,ce(r))+`,
`}function Wi(n,r,e,t,i,a,s){if(t instanceof cn)for(var o=t.x();o.y();){var u=o.z();Wi(n,r,e,u,i,a,!1)}else if(t instanceof nr){var c=iu(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=it(h),_=r.o2(d),m;if(_==null){var w=q.m();r.s2(d,w),m=w}else m=_;var x=m,k=new vy(i,a);x.n(k);var S=it(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var A=Hr(t,"in")!=null?Hr(t,"name"):null,O=t.r2().x();O.y();){var D=O.z(),J=D.k2(),T=D.l2(),M;if(J==="properties"?M=T instanceof nr:M=!1,M)for(var F=T.r2().x();F.y();){var B=F.z(),L=B.k2(),H=B.l2();Wi(n,r,e,H,i,L,!1)}else J==="schema"&&A!=null?Wi(n,r,e,T,i,A,!1):J!=="enum"&&Wi(n,r,e,T,i,a,!1)}}}function BC(n){return(r,e)=>{var t=V(si(ye(n,r)),"\0"),i=V(si(ye(n,e)),"\0");return Tt(t,i)}}function FC(n){return n.s1j_1}function $C(n){return n.t1j_1}function JC(n){return n+1|0}function HC(n){return r=>n+r}function GC(n,r,e,t){return i=>"..."+ni(n,Dr(i),r,e,t)}function KC(n,r,e,t){return i=>ni(n,Dr(i),r,e,t)}function WC(n){return Re(r=>{var e=n;return xe(e,r)},1,0,8,"literal",[n])}function YC(n,r,e){return t=>Mn(n,Dr(t),r,e)}function ZC(n,r,e){return t=>Mn(n,Dr(t),r,e)}function VC(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.a1k_1;ka(c,f);var v=kC(r,u.w1j_1,u.y1j_1,e),h=t+"."+v,d=r.v1i_1,_=new tu(h,u.u1j_1,u.v1j_1);d.n(_);var m=u.d1k_1;if(m!=null){var w=i,x=new dy(h,m,u.e1k_1);w.n(x)}var k=u.c1k_1;k==null||a.s2(h,k);var S=bC(r,t+"-"+v,s);return o.ca(fl(r,u.x1j_1,"")),o.ca("export const "+S+" = "+u.z1j_1(h)+`;
`),fl(r,u.x1j_1,"    ")+("    "+Be(v)+": "+S+",")}}function XC(n,r){var e=n.k2(),t=r.k2();return Tt(e,t)}function Oh(n){return Hr(n,"type")==="string"&&Hr(n,"format")==="binary"}function QC(n){return r=>{var e=r.k2(),t=r.l2(),i=Dr(t),a;if(Oh(i))a="File";else{var s;if(Hr(i,"type")==="array"){var o=or(i,"items"),u;o==null?u=null:u=Oh(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return Be(e)+(n.l1(e)?"":"?")+": "+c}}function r7(n){return Te(n)}function n7(n){return"    "+Be(n)+": "+Te(n)+`,
`}function e7(n){return"    '"+n.f1k_1+"': "+n.g1k_1+`;
`}function t7(n){return"    '"+n.f1k_1+"': ["+V(n.h1k_1)+`],
`}function i7(n){return n+1|0}function a7(n){return r=>r===1?n:n+r}function s7(n){return Vf(n)}function o7(n){return n+1|0}function l7(n){return r=>n+r}function u7(n){return n.xf().d1(1)}function c7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Un(t),a=(i==null?null:Xn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Mn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Hr(e,"name"),_=d??"";return Be(_)+(a?"":"?")+": "+h}}function f7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Un(t),a=(i==null?null:Xn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Mn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Hr(e,"name"),_=d??"";return Te(_)+(a?"":"?")+": "+h}}function v7(n,r,e,t,i,a){return s=>{var o=V(hi(n,"operation: '"+s+"'")),u=r?"stream":"request",c=V(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function h7(n){return Vf(n)}function d7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Dn(n){zr();for(var r=bt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,_7),o;C(s)===0?o="Unnamed":o=s;var u=o;return mx(gb(u))?"_"+u:u}function Vf(n){zr();var r=au(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+at(r,1)}else e=r;return e}function au(n){zr();for(var r=bt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=q.g1(Yr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(qs(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+at(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+at(c,1)}else m=c;v=m}var k=v;s.n(k)}return V(s,"")}function Xf(n,r){r=r===l?At():r,zr();var e=au(n);return Jf().ue(e)&&!H5().l1(e)&&!r.l1(e)?e:"_"+e}function iw(n){return zr(),Xf(n,$5())}function Be(n){return zr(),Jf().ue(n)?n:Te(n)}function Te(n){zr();var r=nn.f();r.da(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(mn(t,32)<0||t===8232||t===8233){var i=Z(t);r.ca("\\u"+Z_(yx(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function aw(n){zr();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Jm(e))===!0}function or(n,r){zr();var e=n.c18(r);return e instanceof nr?e:null}function su(n){zr();for(var r=n.r2(),e=g7,t=new by(e),i=wi(r,t),a=fn(Yr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=U(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function hn(n,r){zr();var e=n.c18(r);return e instanceof cn?e:null}function Hr(n,r){zr();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:Xn(t)}function ou(n,r){zr();for(var e=hn(n,r),t=e??mr(),i=q.g1(Yr(t,10)),a=t.x();a.y();){var s=a.z(),o=Un(s).w17();i.n(o)}return i}function Qf(n){zr();var r=Hr(n,"format"),e;return r==null?e=null:e=Dy().o2(r),e}function sw(n){zr();var r=Hr(n,"format"),e;return r==null?e=null:e=uo().o2(r),e}function vl(n,r){zr();var e;if(n instanceof nr){var t,i=Hr(n,"format");if((E(r,yn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(E(a,W)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(vl(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof cn){var f;r:{var v;if(E(n,W)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(vl(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function hl(n){zr();var r;if(n instanceof nr){var e;if(Qf(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(hl(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof cn){var u;r:{var c;if(E(n,W)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(hl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var jh;function rv(){if(jh)return sr;jh=!0,ow=new lo("ADD_ERROR",0,"add-error.ts"),lw=new lo("ADD_NESTED",1,"add-nested.ts"),uw=new lo("MATCHES",2,"matches.ts")}var ow,lw,uw;function p7(n){return zr(),n.h16_1=!0,sr}function _7(n){return zr(),Vf(n)}function g7(n,r){zr();var e=n.k2(),t=r.k2();return Tt(e,t)}function cw(){return rv(),ow}function m7(){return rv(),lw}function y7(){return rv(),uw}var Uh;function zr(){Uh||(Uh=!0,Ay=ra(["get","post","put","patch","delete","head","options"]),Ty=bt.te("[A-Za-z_$][A-Za-z0-9_$]*"),Oy=bt.te("\\{([^}]+)\\}"),Uy=fI(l,p7),Ny=ra(["guardPages","signedInUser","pageGuards"]),Ly=Mv([U("date","IsoDate"),U("time","IsoTime"),U("date-time","IsoDateTime")]),Py=Mv([U("duration","IsoDuration"),U("decimal","Decimal")]),My=zl([U("IsoDuration","'PT0S'"),U("Decimal","'0'")]),Ry=Qt(["string","integer","number"]),By=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,Fy=Qt(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),$y=Qt(["body","query","headers","options","encodeURIComponent"]),Jy=Qt(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),Hy=Qt(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Gy=ra(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Nh(n,r){return r===1?"1 character":""+r+" characters"}var Hi;function zt(n){return n%1===0?Ln(n).toString():n.toString()}function w7(){return vw(),fw}var fw;function Ve(n){return vw(),ye(w7(),n)}var Dh;function vw(){Dh||(Dh=!0,fw=zl([U("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),U("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),U("api-with.ts",`
function bindFetch<T extends object>(target: T, fetch: typeof globalThis.fetch): T {
    const bound: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(target)) {
        if (typeof value !== 'function') {
            bound[key] = bindFetch(value as object, fetch);
            continue;
        }
        const arity = value.length;
        bound[key] = (...args: unknown[]) => {
            const padded = args.slice(0, arity);
            padded.length = arity;
            padded[arity - 1] = { fetch, ...(padded[arity - 1] as RequestOptions | undefined) };
            return value(...padded);
        };
    }
    return bound as T;
}

export function apiWith(event: { fetch: typeof globalThis.fetch }): typeof api {
    return bindFetch(api, event.fetch);
}
`),U("client.ts",`export interface UploadProgress {
    loaded: number;
    total?: number;
}

export interface RetryConfig {
    attempts?: number;
    delay?: number;
    maxDelay?: number;
}

export interface RequestOptions extends Omit<RequestInit, 'method' | 'body'> {
    fetch?: typeof fetch;
    onUploadProgress?: (progress: UploadProgress) => void;
    timeout?: number;
    silent?: boolean;
    retry?: boolean | RetryConfig;
    refresh?: boolean;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
    fetch?: typeof fetch;
    onUnauthorized?: (response: Response) => void;
    loginPage?: string;
    sessionWarning?: number;
    dedupeGets?: boolean;
    idempotencyKeys?: boolean;
    timeout?: number;
    onNewBuild?: (build: string) => void;
    onError?: (error: unknown) => void;
    retry?: boolean | RetryConfig;
    sendTimeZone?: boolean;
    onWrite?: () => void;
    onToast?: (message: string, kind: ServerToastKind) => void;
    onNavigate?: (path: string) => void;
}

export type ServerToastKind = 'info' | 'success' | 'warning' | 'error';

export function isTimeoutError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'TimeoutError';
}

export const apiConfig: ApiConfig = { baseUrl: '', headers: {} };

export class ApiError<E = unknown> extends Error {
    constructor(
        readonly status: number,
        readonly body: E,
        readonly url: string,
        readonly operation?: string,
        readonly requestId?: string,
        readonly retryAfter?: number
    ) {
        super(\`Request to \${url} failed with status \${status}\`);
        this.name = 'ApiError';
    }
}

export function isRateLimitError(error: unknown): error is ApiError {
    return error instanceof ApiError && error.status === 429;
}

export interface ValidationProblem {
    message: string;
    fields: Record<string, string[]>;
}

export function isValidationError(error: unknown): error is ApiError<ValidationProblem> {
    return (
        error instanceof ApiError &&
        error.status === 422 &&
        typeof error.body === 'object' &&
        error.body !== null &&
        'fields' in error.body
    );
}

export const errorMessages = {
    network: 'Could not reach the server. Check your connection and try again.',
    timeout: 'The server took too long to answer. Please try again.',
    failed: 'Something went wrong. Please try again.'
};

export type Patch<T> = { [K in keyof T]?: T[K] };

export function patchOf<T extends object>(before: T, after: T): Patch<T> {
    const patch: Patch<T> = {};
    for (const key of Object.keys(after) as (keyof T)[]) {
        const next = after[key] === undefined ? null : after[key];
        if (JSON.stringify(before[key] ?? null) !== JSON.stringify(next)) patch[key] = next as T[keyof T];
    }
    return patch;
}

export function applyPatch<T extends object>(target: T, patch: Patch<T>): T {
    return { ...target, ...patch };
}

export interface VersionConflict<T = unknown> {
    message: string;
    code: 'version.conflict';
    current: T;
}

export function isVersionConflict<T = unknown>(error: unknown): error is ApiError<VersionConflict<T>> {
    if (!(error instanceof ApiError) || error.status !== 409 || typeof error.body !== 'object' || error.body === null) return false;
    return (error.body as { code?: unknown }).code === 'version.conflict' && 'current' in error.body;
}

export const codeMessages: Record<string, string | (() => string) | undefined> = {};

export function errorCode(error: unknown): string | undefined {
    if (!(error instanceof ApiError) || typeof error.body !== 'object' || error.body === null) return undefined;
    const code = (error.body as { code?: unknown }).code;
    return typeof code === 'string' ? code : undefined;
}

export function errorMessage(error: unknown): string {
    if (isTimeoutError(error)) return errorMessages.timeout;
    if (error instanceof TypeError) return errorMessages.network;
    if (!(error instanceof ApiError)) return errorMessages.failed;
    const forCode = codeMessages[errorCode(error) ?? ''];
    if (forCode !== undefined) return typeof forCode === 'function' ? forCode() : forCode;
    const body = error.body as { message?: unknown } | null | undefined;
    const message = typeof body === 'object' && body !== null ? body.message : undefined;
    return typeof message === 'string' && message !== '' ? message : errorMessages.failed;
}

interface InternalOptions extends RequestOptions {
    query?: Record<string, unknown>;
    typedHeaders?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    operation?: string;
    upload?: UploadRules;
    multipart?: boolean;
}

export interface UploadRules {
    readonly maxBytes?: number;
    readonly types?: readonly string[];
    readonly maxFiles?: number;
}

export interface UploadProblem {
    message: string;
    code: 'upload.tooLarge' | 'upload.type' | 'upload.tooMany';
    file?: string;
}

export function isUploadError(error: unknown): error is ApiError<UploadProblem> {
    if (!(error instanceof ApiError) || typeof error.body !== 'object' || error.body === null) return false;
    const code = (error.body as { code?: unknown }).code;
    return typeof code === 'string' && code.startsWith('upload.');
}

function readableSize(bytes: number): string {
    const [value, unit] = bytes >= 1024 * 1024 ? [bytes / (1024 * 1024), 'MiB'] : bytes >= 1024 ? [bytes / 1024, 'KiB'] : [bytes, 'bytes'];
    return unit === 'bytes' ? \`\${value} bytes\` : \`\${value.toFixed(1).replace(/\\.0$/, '')} \${unit}\`;
}

function acceptsFile(types: readonly string[], file: File): boolean {
    if (types.length === 0) return true;
    const type = file.type.split(';')[0].trim().toLowerCase();
    const name = file.name.toLowerCase();
    return types.some((accepted) => {
        const wanted = accepted.trim().toLowerCase();
        if (wanted.startsWith('.')) return name.endsWith(wanted);
        return wanted.endsWith('/*') ? type.startsWith(wanted.slice(0, -1)) : type === wanted;
    });
}

export function uploadProblem(rules: UploadRules, files: Iterable<File>): (UploadProblem & { status: number }) | undefined {
    let count = 0;
    for (const file of files) {
        count++;
        if (rules.maxFiles !== undefined && count > rules.maxFiles) {
            const message = rules.maxFiles === 1 ? 'Only one file can be sent at once.' : \`At most \${rules.maxFiles} files can be sent at once.\`;
            return { status: 400, code: 'upload.tooMany', message };
        }
        if (!acceptsFile(rules.types ?? [], file)) {
            return { status: 415, code: 'upload.type', message: \`\${file.name} is not an accepted file type.\`, file: file.name };
        }
        if (rules.maxBytes !== undefined && file.size > rules.maxBytes) {
            const message = \`\${file.name} is larger than \${readableSize(rules.maxBytes)}.\`;
            return { status: 413, code: 'upload.tooLarge', message, file: file.name };
        }
    }
    return undefined;
}

function checkUpload(rules: UploadRules | undefined, body: unknown, url: string, operation: string | undefined) {
    if (!rules || typeof FormData === 'undefined' || !(body instanceof FormData)) return;
    const files = [...body.values()].filter((value): value is File => typeof value !== 'string');
    const problem = uploadProblem(rules, files);
    if (!problem) return;
    const { status, ...refusal } = problem;
    throw new ApiError(status, refusal, url, operation);
}

function queryString(query: Record<string, unknown> | undefined): string {
    if (!query) return '';
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) params.append(key, String(item));
    }
    const text = params.toString();
    return text ? \`?\${text}\` : '';
}

function toFormData(fields: Record<string, unknown>): FormData {
    const form = new FormData();
    for (const [name, value] of Object.entries(fields)) {
        if (value === undefined || value === null) continue;
        for (const item of Array.isArray(value) ? value : [value]) {
            if (item instanceof Blob) form.append(name, item);
            else form.append(name, String(item));
        }
    }
    return form;
}

function isRawBody(body: unknown): body is BodyInit {
    return typeof body === 'string' || body instanceof FormData || body instanceof Blob || body instanceof URLSearchParams;
}

async function parseResponse(response: Response): Promise<unknown> {
    if (response.status === 204 || response.status === 205) return undefined;
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('json')) return response.json();
    const text = await response.text();
    return text === '' ? undefined : text;
}

function responseHeaders(raw: string): Headers {
    const headers = new Headers();
    for (const line of raw.trim().split(/[\\r\\n]+/)) {
        const separator = line.indexOf(':');
        if (separator > 0) headers.append(line.slice(0, separator).trim(), line.slice(separator + 1).trim());
    }
    return headers;
}

function sendWithProgress(onProgress: (progress: UploadProgress) => void): typeof fetch {
    return (input, init = {}) =>
        new Promise<Response>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(init.method ?? 'GET', String(input));
            new Headers(init.headers).forEach((value, key) => xhr.setRequestHeader(key, value));
            xhr.withCredentials = init.credentials === 'include';
            xhr.responseType = 'blob';
            xhr.upload.onprogress = (event) => onProgress({ loaded: event.loaded, total: event.lengthComputable ? event.total : undefined });
            xhr.onload = () => {
                const empty = [101, 204, 205, 304].includes(xhr.status);
                const headers = responseHeaders(xhr.getAllResponseHeaders());
                resolve(new Response(empty ? null : xhr.response, { status: xhr.status, statusText: xhr.statusText, headers }));
            };
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.onabort = () => reject(new DOMException('The upload was aborted.', 'AbortError'));
            init.signal?.addEventListener('abort', () => xhr.abort());
            xhr.send((init.body ?? null) as XMLHttpRequestBodyInit | null);
        });
}

const userWatchers: { gone: () => void; changed: () => void; ends?: (seconds: number) => void }[] = [];

function isSameOrigin(url: string): boolean {
    if (typeof location === 'undefined') return !/^[a-z][a-z0-9+.-]*:/i.test(url);
    return new URL(url, location.href).origin === location.origin;
}

function newRequestId(): string {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
    return \`\${Date.now().toString(36)}-\${Math.random().toString(36).slice(2, 12)}\`;
}

function withTimeout(signal: AbortSignal | null | undefined, timeout: number | undefined): AbortSignal | undefined {
    if (!timeout || timeout <= 0) return signal ?? undefined;
    const timer = AbortSignal.timeout(timeout);
    return signal ? AbortSignal.any([signal, timer]) : timer;
}

const RETRIED_STATUSES = [502, 503, 504];

function retryPlan(method: string, own: boolean | RetryConfig | undefined): Required<RetryConfig> | undefined {
    const chosen = own ?? apiConfig.retry;
    if (!chosen) return undefined;
    if (method !== 'GET' && (!own || apiConfig.idempotencyKeys === false)) return undefined;
    const config = chosen === true ? {} : chosen;
    return { attempts: config.attempts ?? 3, delay: config.delay ?? 300, maxDelay: config.maxDelay ?? 5000 };
}

function isRetryable(error: unknown): boolean {
    if (isTimeoutError(error) || error instanceof TypeError) return true;
    if (error instanceof ApiError && error.status === 409 && errorCode(error) === 'idempotency.inProgress') return true;
    return error instanceof ApiError && RETRIED_STATUSES.includes(error.status);
}

function pause(milliseconds: number, signal: AbortSignal | null | undefined): Promise<void> {
    return new Promise((resolve, reject) => {
        const aborted = () => signal?.reason ?? new DOMException('The request was aborted.', 'AbortError');
        if (signal?.aborted) return reject(aborted());
        const stop = () => {
            clearTimeout(timer);
            reject(aborted());
        };
        const timer = setTimeout(() => {
            signal?.removeEventListener('abort', stop);
            resolve();
        }, milliseconds);
        signal?.addEventListener('abort', stop, { once: true });
    });
}

function retryAfter(response: Response): number | undefined {
    const value = response.headers.get('retry-after')?.trim();
    if (!value) return undefined;
    if (/^\\d+$/.test(value)) return Number(value) * 1000;
    const date = Date.parse(value);
    return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
}

async function withRetry<T>(
    call: () => Promise<T>,
    plan: Required<RetryConfig> | undefined,
    longestLimitWait: number | undefined,
    signal: AbortSignal | null | undefined
): Promise<T> {
    let waitedForLimit = false;
    for (let tried = 1; ; tried++) {
        try {
            return await call();
        } catch (error) {
            const wait = isRateLimitError(error) ? error.retryAfter : undefined;
            if (!waitedForLimit && wait !== undefined && longestLimitWait !== undefined && wait <= longestLimitWait) {
                waitedForLimit = true;
                tried--;
                await pause(wait, signal);
                continue;
            }
            if (!plan || tried >= plan.attempts || !isRetryable(error)) throw error;
            await pause(Math.min(plan.delay * 2 ** (tried - 1), plan.maxDelay), signal);
        }
    }
}

let ownTimeZone: string | undefined | null = null;

function timeZone(): string | undefined {
    if (ownTimeZone === null) {
        try {
            ownTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
        } catch {
            ownTimeZone = undefined;
        }
    }
    return ownTimeZone;
}

function prepare(method: string, path: string, options: InternalOptions, accept: string, streaming = false) {
    const {
        query,
        typedHeaders,
        body: given,
        operation,
        upload,
        multipart,
        fetch: customFetch,
        headers,
        onUploadProgress,
        timeout,
        signal,
        silent,
        retry,
        refresh,
        ...init
    } = options;
    const body = multipart && given !== undefined && !isRawBody(given) ? toFormData(given as Record<string, unknown>) : given;
    const plan = streaming ? undefined : retryPlan(method, retry);
    const chosenRetry = retry ?? apiConfig.retry;
    const longestLimitWait = streaming || !chosenRetry ? undefined : ((chosenRetry === true ? undefined : chosenRetry.maxDelay) ?? 5000);
    const limit = timeout ?? (streaming ? undefined : apiConfig.timeout);
    const send = onUploadProgress ? sendWithProgress(onUploadProgress) : (customFetch ?? apiConfig.fetch ?? fetch);
    const url = apiConfig.baseUrl + path + queryString(query);
    const merged = new Headers(apiConfig.headers);
    merged.set('Accept', accept);
    if (!merged.has('X-Request-Id') && isSameOrigin(url)) merged.set('X-Request-Id', newRequestId());
    const write = method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS';
    if (write && apiConfig.idempotencyKeys !== false && !merged.has('Idempotency-Key') && isSameOrigin(url)) {
        merged.set('Idempotency-Key', newRequestId());
    }
    const zone = apiConfig.sendTimeZone === false || !isSameOrigin(url) ? undefined : timeZone();
    if (zone && !merged.has('X-Time-Zone')) merged.set('X-Time-Zone', zone);
    for (const [key, value] of Object.entries(typedHeaders ?? {})) if (value !== undefined) merged.set(key, String(value));
    new Headers(headers).forEach((value, key) => merged.set(key, value));
    let payload: BodyInit | undefined;
    if (body !== undefined) {
        payload = isRawBody(body) ? body : JSON.stringify(body);
        if (!isRawBody(body) && !merged.has('Content-Type')) merged.set('Content-Type', 'application/json');
    }
    return {
        url,
        operation,
        send: async () => {
            checkUpload(upload, body, url, operation);
            return send(url, { ...init, method, headers: merged, body: payload, signal: withTimeout(signal, limit) });
        },
        attempt: <T>(call: () => Promise<T>) => withRetry(call, plan, longestLimitWait, signal)
    };
}

let knownBuild: string | undefined;

function noticeBuild(response: Response) {
    const build = response.headers.get('x-ktor-svelte-build');
    if (!build) return;
    if (knownBuild !== undefined && build !== knownBuild) apiConfig.onNewBuild?.(build);
    knownBuild = build;
}

const toastKinds: readonly string[] = ['info', 'success', 'warning', 'error'];

function noticeToasts(response: Response, url: string) {
    const sent = response.headers.get('x-ktor-svelte-toast');
    if (!sent || !apiConfig.onToast || typeof document === 'undefined' || !isSameOrigin(url)) return;
    for (const part of sent.split(',')) {
        const at = part.indexOf(':');
        const kind = part.slice(0, at).trim();
        if (at < 0 || !toastKinds.includes(kind)) continue;
        try {
            apiConfig.onToast(decodeURIComponent(part.slice(at + 1).trim()), kind as ServerToastKind);
        } catch {
            continue;
        }
    }
}

function noticeNavigation(response: Response, url: string) {
    const path = response.headers.get('x-ktor-svelte-navigate');
    if (!path || !apiConfig.onNavigate || typeof document === 'undefined' || !isSameOrigin(url)) return;
    if (!/^\\/(?![/\\\\])/.test(path)) return;
    setTimeout(() => apiConfig.onNavigate?.(path), 0);
}

function insideApp(path: string | null | undefined): path is string {
    return typeof path === 'string' && /^\\/(?![/\\\\])/.test(path);
}

type PageAddress = string | { pathname: string; search: string; hash?: string };

function pathOf(address: PageAddress): string {
    return typeof address === 'string' ? address : address.pathname + address.search + (address.hash ?? '');
}

export function loginPath(from?: PageAddress): string {
    const page = apiConfig.loginPage;
    if (!page) throw new Error('loginPath needs the login page. Say it once on the server: install(Svelte) { loginPage = "/login" }.');
    const here = from === undefined ? (typeof location === 'undefined' ? undefined : pathOf(location)) : pathOf(from);
    if (!insideApp(here)) return page;
    const onLoginPage = (here.split(/[?#]/)[0].replace(/\\/$/, '') || '/') === (page.replace(/\\/$/, '') || '/');
    return onLoginPage ? page : \`\${page}?next=\${encodeURIComponent(here)}\`;
}

export function afterLogin(fallback = '/', from?: PageAddress): string {
    const address = from === undefined ? (typeof location === 'undefined' ? '' : pathOf(location)) : pathOf(from);
    const query = address.split('#')[0].split('?')[1] ?? '';
    const next = new URLSearchParams(query).get('next');
    return insideApp(next) ? next : fallback;
}

function toLogin(silent: boolean | undefined) {
    if (silent || !apiConfig.loginPage || typeof location === 'undefined') return;
    const target = loginPath();
    if (target === apiConfig.loginPage) return;
    setTimeout(() => (apiConfig.onNavigate ?? ((path: string) => location.assign(path)))(target), 0);
}

async function checked(response: Response, url: string, operation: string | undefined, silent?: boolean): Promise<Response> {
    noticeBuild(response);
    noticeToasts(response, url);
    if (response.ok) noticeNavigation(response, url);
    if (isSameOrigin(url)) {
        if (response.status === 401) for (const watcher of userWatchers) watcher.gone();
        else if (response.headers.get('x-ktor-svelte-user') === 'changed') for (const watcher of userWatchers) watcher.changed();
        const left = response.headers.get('x-ktor-svelte-session');
        if (left !== null && response.ok && Number.isFinite(Number(left))) for (const watcher of userWatchers) watcher.ends?.(Number(left));
    }
    if (response.status === 401) {
        if (apiConfig.onUnauthorized) apiConfig.onUnauthorized(response);
        else if (isSameOrigin(url)) toLogin(silent);
    }
    if (!response.ok) {
        const requestId = response.headers.get('x-request-id') ?? undefined;
        throw new ApiError(response.status, await parseResponse(response), url, operation, requestId, retryAfter(response));
    }
    return response;
}

function report(error: unknown, silent: boolean | undefined) {
    if (silent || isAbortError(error)) return;
    try {
        apiConfig.onError?.(error);
    } catch {
        return;
    }
}

let writeNoticed = false;

function noticeWrite(method: string, options: InternalOptions) {
    if (method === 'GET' || method === 'HEAD' || options.refresh === false || !apiConfig.onWrite || writeNoticed) return;
    writeNoticed = true;
    setTimeout(() => {
        writeNoticed = false;
        try {
            apiConfig.onWrite?.();
        } catch {
            return;
        }
    }, 0);
}

const inFlight = new Map<string, Promise<unknown>>();

function isShareable(method: string, options: InternalOptions): boolean {
    return apiConfig.dedupeGets === true && method === 'GET' && !options.signal && !options.fetch && !options.headers;
}

const prefetched = new Map<string, { response: Promise<unknown>; expires: number }>();
let prefetchUntil: number | undefined;

function fromPrefetch<T>(url: string, run: (silent?: boolean) => Promise<T>): Promise<T> | undefined {
    const until = prefetchUntil;
    prefetchUntil = undefined;
    const hit = prefetched.get(url);
    const fresh = hit !== undefined && hit.expires > Date.now();
    if (hit && !fresh) prefetched.delete(url);
    if (until === undefined) {
        if (!fresh) return undefined;
        prefetched.delete(url);
        return hit.response as Promise<T>;
    }
    if (fresh) return hit.response as Promise<T>;
    const response = run(true);
    prefetched.set(url, { response, expires: until });
    response.catch(() => prefetched.delete(url));
    return response;
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    const { url, operation, send, attempt } = prepare(method, path, options, 'application/json');
    const run = async (silent = options.silent) => {
        try {
            const answer = async () => parseResponse(await checked(await send(), url, operation, options.silent));
            const result = (await attempt(answer)) as T;
            noticeWrite(method, options);
            return result;
        } catch (error) {
            report(error, silent);
            throw error;
        }
    };
    if (method === 'GET' && !options.signal && !options.headers) {
        const early = fromPrefetch(url, run);
        if (early) return early;
    } else {
        prefetchUntil = undefined;
    }
    if (!isShareable(method, options)) return run();
    const pending = inFlight.get(url) ?? run().finally(() => inFlight.delete(url));
    inFlight.set(url, pending);
    return pending as Promise<T>;
}

function eventData<T>(data: string): T {
    try {
        return JSON.parse(data) as T;
    } catch {
        return data as T;
    }
}

export async function* stream<T>(method: string, path: string, options: InternalOptions = {}): AsyncGenerator<T, void, undefined> {
    const { url, operation, send } = prepare(method, path, options, 'text/event-stream', true);
    let response: Response;
    try {
        response = await checked(await send(), url, operation, options.silent);
    } catch (error) {
        report(error, options.silent);
        throw error;
    }
    if (!response.body) return;
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = '';
    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += value;
            const frames = buffer.split(/\\r?\\n\\r?\\n/);
            buffer = frames.pop() ?? '';
            for (const frame of frames) {
                const data = frame
                    .split(/\\r?\\n/)
                    .filter((line) => line.startsWith('data:'))
                    .map((line) => line.slice(5).replace(/^ /, ''))
                    .join('\\n');
                if (data !== '') yield eventData<T>(data);
            }
        }
    } finally {
        reader.cancel().catch(() => undefined);
    }
}

export interface UserState<T, P extends string = string> {
    user: T | null;
    ready: boolean;
    sessionEnds?: number | null;
    sessionEnding?: boolean;
    permissions?: P[];
}

interface UserAnswer<T, P extends string> {
    user?: T | null;
    sessionSeconds?: number | null;
    permissions?: P[] | null;
}

const LONGEST_TIMER = 2_000_000_000;

export interface UserStore<T, P extends string = string> {
    readonly user: T | null;
    readonly ready: boolean;
    readonly signedIn: boolean;
    readonly sessionEnds: Date | null;
    readonly sessionEnding: boolean;
    extend(): Promise<T | null>;
    can(permission: P): boolean;
    load(): Promise<T | null>;
    reload(): Promise<T | null>;
    set(user: T | null): void;
    clear(): void;
}

export function userStore<T, P extends string = string>(path: string, state: UserState<T, P>): UserStore<T, P> {
    let pending: Promise<T | null> | undefined;
    let turn = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const plan = (ends: number | null) => {
        if (timer !== undefined) clearTimeout(timer);
        timer = undefined;
        state.sessionEnds = ends;
        if (ends === null) {
            state.sessionEnding = false;
            return;
        }
        const left = ends - Date.now();
        const warning = apiConfig.sessionWarning ?? 120_000;
        state.sessionEnding = left <= warning;
        const wait = left > warning ? left - warning : Math.max(left, 0) + 50;
        timer = setTimeout(
            () => {
                timer = undefined;
                if (state.sessionEnds !== ends) return;
                if (Date.now() < ends) return plan(ends);
                state.sessionEnding = false;
                state.sessionEnds = null;
                void ask();
            },
            Math.min(wait, LONGEST_TIMER)
        );
    };
    const endsFor = (answer: UserAnswer<T, P> | undefined): number | null =>
        answer?.user && typeof answer.sessionSeconds === 'number' ? Date.now() + answer.sessionSeconds * 1000 : null;
    const settle = (user: T | null) => {
        turn++;
        state.user = user;
        state.ready = true;
        if (user === null) {
            plan(null);
            state.permissions = [];
        }
        pending = Promise.resolve(user);
    };
    const ask = (method = 'GET', at = path): Promise<T | null> => {
        const mine = ++turn;
        const asked: Promise<T | null> = request<UserAnswer<T, P>>(method, at, { silent: true }).then(
            (answer) => {
                if (mine !== turn) return pending ?? null;
                state.user = answer?.user ?? null;
                state.permissions = (state.user !== null && answer?.permissions) || [];
                state.ready = true;
                plan(endsFor(answer));
                return state.user;
            },
            () => {
                if (mine !== turn) return pending ?? null;
                pending = undefined;
                state.ready = true;
                return state.user;
            }
        );
        pending = asked;
        return asked;
    };
    userWatchers.push({
        gone: () => settle(null),
        changed: () => {
            if (pending) void ask();
        },
        ends: (seconds) => {
            if (state.user !== null) plan(Date.now() + seconds * 1000);
        }
    });
    return {
        get user() {
            return state.user;
        },
        get ready() {
            return state.ready;
        },
        get signedIn() {
            return state.user !== null;
        },
        get sessionEnds() {
            return typeof state.sessionEnds === 'number' ? new Date(state.sessionEnds) : null;
        },
        get sessionEnding() {
            return state.sessionEnding === true;
        },
        extend: () => ask('POST', \`\${path}/extend\`),
        can: (permission) => state.permissions?.includes(permission) === true,
        load: () => {
            if (typeof document === 'undefined' && !apiConfig.fetch) return Promise.resolve(null);
            return pending ?? ask();
        },
        reload: () => ask(),
        set: settle,
        clear: () => settle(null)
    };
}

const reportedErrors = new Set<string>();

function sendErrorReport(path: string, error: unknown): void {
    if (typeof location === 'undefined' || reportedErrors.size >= 10) return;
    if (error instanceof ApiError && error.status < 500) return;
    const message = error instanceof Error ? \`\${error.name}: \${error.message}\` : String(error);
    if (reportedErrors.has(message)) return;
    reportedErrors.add(message);
    const report = {
        message: message.slice(0, 500),
        stack: error instanceof Error ? error.stack?.slice(0, 2000) : undefined,
        page: location.pathname,
        requestId: error instanceof ApiError ? error.requestId : undefined
    };
    try {
        const sent = (apiConfig.fetch ?? fetch)(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report),
            keepalive: true
        });
        void sent.catch(() => undefined);
    } catch {
        return;
    }
}

export function reportErrors(path: string): void {
    const host = globalThis as unknown as { addEventListener?: (name: string, listener: (event: never) => void) => void; __ktorSvelteReportError?: unknown };
    host.__ktorSvelteReportError = (error: unknown) => sendErrorReport(path, error);
    if (typeof host.addEventListener !== 'function') return;
    host.addEventListener('error', (event: { error?: unknown; message?: string }) => sendErrorReport(path, event.error ?? event.message));
    host.addEventListener('unhandledrejection', (event: { reason?: unknown }) => sendErrorReport(path, event.reason));
}

interface TimingEntry {
    startTime: number;
    duration: number;
    value?: number;
    hadRecentInput?: boolean;
    interactionId?: number;
    responseStart?: number;
    name?: string;
}

export function reportVitals(path: string, sampleRate = 1): void {
    const host = globalThis as unknown as {
        PerformanceObserver?: new (seen: (list: { getEntries(): TimingEntry[] }) => void) => {
            observe(options: { type: string; buffered: boolean; durationThreshold?: number }): void;
        };
        addEventListener?: (name: string, listener: () => void) => void;
        document?: { visibilityState?: string };
        navigator?: { sendBeacon?: (url: string, body: string) => boolean };
    };
    const Observer = host.PerformanceObserver;
    if (!Observer || typeof host.addEventListener !== 'function' || typeof location === 'undefined' || Math.random() >= sampleRate) return;
    const page = location.pathname;
    const metrics: Record<string, number> = {};
    const watch = (type: string, seen: (entry: TimingEntry) => void, durationThreshold?: number) => {
        try {
            new Observer((list) => list.getEntries().forEach(seen)).observe({ type, buffered: true, durationThreshold });
        } catch {
            return;
        }
    };
    watch('navigation', (entry) => {
        if (typeof entry.responseStart === 'number' && entry.responseStart > 0) metrics.TTFB = entry.responseStart;
    });
    watch('paint', (entry) => {
        if (entry.name === 'first-contentful-paint') metrics.FCP = entry.startTime;
    });
    watch('largest-contentful-paint', (entry) => {
        metrics.LCP = entry.startTime;
    });
    watch('layout-shift', (entry) => {
        if (!entry.hadRecentInput) metrics.CLS = (metrics.CLS ?? 0) + (entry.value ?? 0);
    });
    watch(
        'event',
        (entry) => {
            if (entry.interactionId) metrics.INP = Math.max(metrics.INP ?? 0, entry.duration);
        },
        40
    );
    let sent = false;
    const send = () => {
        if (sent || Object.keys(metrics).length === 0) return;
        sent = true;
        const rounded = Object.fromEntries(Object.entries(metrics).map(([name, value]) => [name, Math.round(value * 1000) / 1000]));
        const body = JSON.stringify({ page, metrics: rounded });
        try {
            if (host.navigator?.sendBeacon?.(path, body)) return;
            void (apiConfig.fetch ?? fetch)(path, { method: 'POST', body, keepalive: true }).catch(() => undefined);
        } catch {
            return;
        }
    };
    host.addEventListener('visibilitychange', () => {
        if (host.document?.visibilityState === 'hidden') send();
    });
    host.addEventListener('pagehide', send);
}

export interface PreferenceState<T> {
    value: T;
    ready: boolean;
}

export interface PreferenceStore<T> {
    readonly value: T;
    readonly ready: boolean;
    load(): Promise<T>;
    set(change: Partial<T>): Promise<void>;
}

interface PreferenceAnswer<T> {
    preferences: T;
    signedIn: boolean;
}

const cookieWord = /^[A-Za-z0-9_.-]+$/;

export function preferenceStore<T extends object>(
    path: string,
    state: PreferenceState<T>,
    defaults: T,
    cookies: Partial<Record<keyof T & string, string>> = {}
): PreferenceStore<T> {
    const bound = Object.entries(cookies) as [keyof T & string, string][];
    const memory = \`ktor-svelte-preferences:\${path}\`;
    let pending: Promise<T> | undefined;
    let signedIn = false;
    let turn = 0;
    let saving: Promise<void> = Promise.resolve();
    const remembered = (): Record<string, string | undefined> => {
        try {
            return JSON.parse(localStorage.getItem(memory) ?? '{}') as Record<string, string | undefined>;
        } catch {
            return {};
        }
    };
    const remember = (values: Record<string, string | undefined> | undefined) => {
        try {
            if (values) localStorage.setItem(memory, JSON.stringify(values));
            else localStorage.removeItem(memory);
        } catch {
            return;
        }
    };
    const cookieOf = (name: string): string | undefined =>
        typeof document === 'undefined' ? undefined : document.cookie.match(new RegExp(\`(?:^|; )\${name}=([^;]+)\`))?.[1];
    const show = (field: string, cookie: string, value: string): boolean => {
        if (cookieOf(cookie) === value) return false;
        document.cookie = \`\${cookie}=\${value}; path=/; max-age=31536000; samesite=lax\`;
        if (field === 'theme') document.documentElement.dataset.theme = value;
        return field !== 'theme';
    };
    const send = (shown: Record<string, string> = {}): Promise<void> => {
        const body = state.value;
        saving = saving
            .catch(() => undefined)
            .then(() => request<unknown>('PUT', path, { body }))
            .then(() => {
                if (Object.keys(shown).length > 0) remember({ ...remembered(), ...shown });
            });
        return saving;
    };
    const reconcile = (stored: T, before: Record<string, string | undefined>): T => {
        if (typeof document === 'undefined' || !signedIn || bound.length === 0) return stored;
        const last = remembered();
        const mine: Record<string, string> = {};
        let reload = false;
        for (const [field, cookie] of bound) {
            const here = cookieOf(cookie);
            const there = (stored as Record<string, unknown>)[field];
            const known = typeof there === 'string' && cookieWord.test(there) ? there : undefined;
            const picked = (field in last && here !== last[field]) || here !== before[field];
            const changedHere = here !== undefined && here !== known && (known === undefined || picked);
            if (changedHere) mine[field] = here;
            else if (known !== undefined && show(field, cookie, known)) reload = true;
            if (!changedHere) last[field] = known ?? here;
        }
        remember(last);
        if (reload) setTimeout(() => location.reload(), 0);
        if (Object.keys(mine).length === 0) return stored;
        const merged = { ...stored, ...mine } as T;
        state.value = merged;
        void send(mine).catch(() => undefined);
        return merged;
    };
    const ask = (): Promise<T> => {
        const mine = ++turn;
        const before: Record<string, string | undefined> = {};
        for (const [field, cookie] of bound) before[field] = cookieOf(cookie);
        const asked: Promise<T> = request<PreferenceAnswer<T>>('GET', path, { silent: true }).then(
            (answer) => {
                if (mine !== turn) return pending ?? state.value;
                signedIn = answer?.signedIn === true;
                state.value = { ...defaults, ...(answer?.preferences ?? {}) };
                state.ready = true;
                return reconcile(state.value, before);
            },
            () => {
                if (mine !== turn) return pending ?? state.value;
                pending = undefined;
                state.ready = true;
                return state.value;
            }
        );
        pending = asked;
        return asked;
    };
    const load = (): Promise<T> => {
        if (typeof document === 'undefined' && !apiConfig.fetch) return Promise.resolve(state.value);
        return pending ?? ask();
    };
    userWatchers.push({
        gone: () => {
            turn++;
            signedIn = false;
            pending = undefined;
            remember(undefined);
            state.value = { ...defaults };
        },
        changed: () => {
            remember(undefined);
            if (pending) void ask();
        }
    });
    if (typeof MutationObserver !== 'undefined' && typeof document !== 'undefined' && bound.length > 0) {
        new MutationObserver(() => {
            if (!signedIn || !state.ready) return;
            const moved: Record<string, string> = {};
            for (const [field, cookie] of bound) {
                const here = cookieOf(cookie);
                if (here !== undefined && here !== (state.value as Record<string, unknown>)[field]) moved[field] = here;
            }
            if (Object.keys(moved).length === 0) return;
            state.value = { ...state.value, ...moved } as T;
            void send(moved).catch(() => undefined);
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'lang'] });
    }
    return {
        get value() {
            if (!pending && typeof document !== 'undefined') void load();
            return state.value;
        },
        get ready() {
            return state.ready;
        },
        load,
        set: (change) => {
            state.value = { ...state.value, ...change };
            const shown: Record<string, string> = {};
            if (typeof document !== 'undefined') {
                for (const [field, cookie] of bound) {
                    const next = (change as Record<string, unknown>)[field];
                    if (typeof next !== 'string' || !cookieWord.test(next)) continue;
                    show(field, cookie, next);
                    shown[field] = next;
                }
            }
            return signedIn ? send(shown) : Promise.resolve();
        }
    };
}

export interface PageGuard<P extends string = string> {
    page: string;
    permission?: P;
}

export function matchGuard<P extends string>(guards: readonly PageGuard<P>[], path: string): PageGuard<P> | undefined {
    const clean = path.replace(/\\/+$/, '') || '/';
    let best: PageGuard<P> | undefined;
    for (const guard of guards) {
        const covers = clean === guard.page || clean.startsWith(\`\${guard.page}/\`);
        if (covers && (!best || guard.page.length > best.page.length)) best = guard;
    }
    return best;
}

export interface PageOf<T> {
    items: T[];
    next?: string | null;
}

export async function* pages<Q extends { cursor?: string }, T>(
    load: (query: Q, options?: RequestOptions) => Promise<PageOf<T>>,
    query?: Omit<Q, 'cursor'>,
    options?: RequestOptions
): AsyncGenerator<T[], void, undefined> {
    let cursor: string | undefined;
    do {
        const page = await load({ ...query, cursor } as Q, options);
        yield page.items;
        cursor = page.next ?? undefined;
    } while (cursor !== undefined);
}

export interface BuildInfo {
    version?: string;
    commit?: string;
    time?: string;
}

let buildInfo: Promise<BuildInfo> | undefined;

export function loadBuildInfo(options?: RequestOptions): Promise<BuildInfo> {
    buildInfo ??= request<BuildInfo>('GET', '/_ktor-svelte/build.json', { ...options }).catch((error: unknown) => {
        buildInfo = undefined;
        throw error;
    });
    return buildInfo;
}

export function isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'AbortError';
}

export function latest<A extends unknown[], R>(call: (...args: A) => Promise<R>): (...args: A) => Promise<R> {
    let previous: AbortController | undefined;
    return (...args: A) => {
        previous?.abort();
        const current = new AbortController();
        previous = current;
        const arity = call.length;
        const padded = args.slice(0, arity);
        padded.length = arity;
        const options = (padded[arity - 1] ?? {}) as RequestOptions;
        const signal = options.signal ? AbortSignal.any([options.signal, current.signal]) : current.signal;
        padded[arity - 1] = { ...options, signal };
        return call(...(padded as A)).catch((error: unknown) => {
            if (signal.aborted && !isAbortError(error)) throw new DOMException('The request was superseded.', 'AbortError');
            throw error;
        });
    };
}

export async function prefetch(call: () => Promise<unknown>, ttl = 10_000): Promise<void> {
    prefetchUntil = Date.now() + ttl;
    let pending: Promise<unknown>;
    try {
        pending = call();
    } finally {
        prefetchUntil = undefined;
    }
    await pending.catch(() => undefined);
}

export function prefetchOnHover(node: HTMLElement, call: () => Promise<unknown>) {
    let current = call;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const now = () => {
        clearTimeout(timer);
        void prefetch(current);
    };
    const soon = () => {
        clearTimeout(timer);
        timer = setTimeout(now, 50);
    };
    const cancel = () => clearTimeout(timer);
    node.addEventListener('mouseenter', soon);
    node.addEventListener('mouseleave', cancel);
    node.addEventListener('focus', now);
    node.addEventListener('touchstart', now, { passive: true });
    return {
        update: (next: () => Promise<unknown>) => {
            current = next;
        },
        destroy: () => {
            cancel();
            node.removeEventListener('mouseenter', soon);
            node.removeEventListener('mouseleave', cancel);
            node.removeEventListener('focus', now);
            node.removeEventListener('touchstart', now);
        }
    };
}

export interface ApiFixture {
    method: string;
    path: string;
    status: number;
    request?: unknown;
    response?: unknown;
}

export interface ApiFixtures {
    recorded?: string;
    calls: ApiFixture[];
}

export function fixtureFetch(fixtures: ApiFixtures): typeof fetch {
    const answered = new Map<string, number>();
    return (async (input: RequestInfo | URL, init?: RequestInit) => {
        const address = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
        const url = new URL(address, 'http://fixtures.invalid');
        const method = (init?.method ?? (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const wanted = \`\${method} \${url.pathname}\${url.search}\`;
        const recorded = fixtures.calls.filter((call) => \`\${call.method.toUpperCase()} \${call.path}\` === wanted);
        if (recorded.length === 0) {
            throw new Error(\`No fixture for \${wanted}. Make that call in the app, then save the fixtures from the dev panel again.\`);
        }
        const turn = answered.get(wanted) ?? 0;
        answered.set(wanted, turn + 1);
        const call = recorded[Math.min(turn, recorded.length - 1)];
        const empty = call.response === undefined || call.status === 204;
        const text = typeof call.response === 'string';
        return new Response(empty ? null : text ? (call.response as string) : JSON.stringify(call.response), {
            status: call.status,
            headers: empty ? {} : { 'content-type': text ? 'text/plain' : 'application/json' }
        });
    }) as typeof fetch;
}

export interface CookieRules<T> {
    kind: 'string' | 'int' | 'number' | 'boolean' | 'enum';
    values?: readonly string[];
    default?: T;
    maxAge?: number;
    path: string;
    sameSite: 'lax' | 'strict' | 'none';
    secure: boolean;
    category?: string;
}

export interface TypedCookie<T, D extends T | undefined = undefined> {
    readonly name: string;
    readonly rules: CookieRules<T>;
    get(header?: string): T | D;
    set(value: T): void;
    clear(): void;
}

const CONSENT_COOKIE = 'cookie-consent';
const CONSENT_SECONDS = 15552000;

function cookieText(name: string, header?: string): string | undefined {
    const source = header ?? (typeof document === 'undefined' ? '' : document.cookie);
    return source
        .split(/;\\s*/)
        .find((part) => part.startsWith(\`\${name}=\`))
        ?.slice(name.length + 1);
}

function consentAllows(category: string | undefined, header?: string): boolean {
    return category === undefined || (cookieText(CONSENT_COOKIE, header)?.split('.').includes(category) ?? false);
}

function cookieValue(raw: string, rules: CookieRules<unknown>): unknown {
    let text: string;
    try {
        text = decodeURIComponent(raw);
    } catch {
        return undefined;
    }
    if (rules.kind === 'string') return text;
    if (rules.kind === 'boolean') return text === 'true' ? true : text === 'false' ? false : undefined;
    if (rules.kind === 'enum') return rules.values?.includes(text) ? text : undefined;
    const number = text.trim() === '' ? NaN : Number(text);
    if (!Number.isFinite(number)) return undefined;
    return rules.kind === 'int' && !Number.isInteger(number) ? undefined : number;
}

export function typedCookie<T, D extends T | undefined = undefined>(name: string, rules: CookieRules<T>): TypedCookie<T, D> {
    const attributes = \`; path=\${rules.path}; samesite=\${rules.sameSite}\${rules.secure ? '; secure' : ''}\`;
    return {
        name,
        rules,
        get(header) {
            const found = consentAllows(rules.category, header) ? cookieText(name, header) : undefined;
            const value = found === undefined ? undefined : cookieValue(found, rules);
            return (value ?? rules.default) as T | D;
        },
        set(value) {
            if (!consentAllows(rules.category)) return;
            const age = rules.maxAge === undefined ? '' : \`; max-age=\${rules.maxAge}\`;
            document.cookie = \`\${name}=\${encodeURIComponent(String(value))}\${attributes}\${age}\`;
        },
        clear() {
            document.cookie = \`\${name}=\${attributes}; max-age=0\`;
        }
    };
}

export interface ConsentState<C extends string> {
    decided: boolean;
    accepted: readonly C[];
}

export interface ConsentBannerOptions<C extends string> {
    text: string;
    accept: string;
    refuse: string;
    title?: string;
    labels?: Partial<Record<C, string>>;
    save?: string;
    link?: { href: string; text: string };
}

export interface ConsentStore<C extends string> {
    readonly categories: readonly C[];
    decided(): boolean;
    allows(category: C): boolean;
    accept(categories?: readonly C[]): void;
    refuse(): void;
    reset(): void;
    subscribe(run: (state: ConsentState<C>) => void): () => void;
    banner(options: ConsentBannerOptions<C>): () => void;
}

export function consentStore<C extends string>(
    categories: readonly C[],
    optional: readonly { name: string; path: string; category: C }[]
): ConsentStore<C> {
    const listeners = new Set<(state: ConsentState<C>) => void>();

    function state(): ConsentState<C> {
        const chosen = cookieText(CONSENT_COOKIE)?.split('.');
        return { decided: chosen !== undefined, accepted: categories.filter((category) => chosen?.includes(category)) };
    }

    function changed(): void {
        const accepted = state().accepted;
        for (const cookie of optional) {
            if (!accepted.includes(cookie.category)) document.cookie = \`\${cookie.name}=; path=\${cookie.path}; max-age=0\`;
        }
        const now = state();
        listeners.forEach((run) => run(now));
    }

    const store: ConsentStore<C> = {
        categories,
        decided: () => state().decided,
        allows: (category) => state().accepted.includes(category),
        accept(chosen = categories) {
            const kept = categories.filter((category) => chosen.includes(category));
            document.cookie = \`\${CONSENT_COOKIE}=\${kept.length === 0 ? 'none' : kept.join('.')}; path=/; samesite=lax; max-age=\${CONSENT_SECONDS}\`;
            changed();
        },
        refuse() {
            store.accept([]);
        },
        reset() {
            document.cookie = \`\${CONSENT_COOKIE}=; path=/; samesite=lax; max-age=0\`;
            changed();
        },
        subscribe(run) {
            listeners.add(run);
            run(state());
            return () => void listeners.delete(run);
        },
        banner(options) {
            if (typeof document === 'undefined' || store.decided()) return () => undefined;
            const box = document.createElement('div');
            box.className = 'ktor-svelte-consent';
            box.setAttribute('role', 'region');
            box.setAttribute('aria-label', options.title ?? 'Cookies');
            Object.assign(box.style, {
                position: 'fixed',
                inset: 'auto 0 0 0',
                zIndex: '2147483000',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 16px',
                background: 'Canvas',
                color: 'CanvasText',
                borderTop: '1px solid GrayText'
            });
            const text = document.createElement('p');
            text.style.margin = '0';
            text.textContent = options.text;
            if (options.link) {
                const link = document.createElement('a');
                link.className = 'link';
                link.href = options.link.href;
                link.textContent = options.link.text;
                text.append(' ', link);
            }
            box.append(text);
            const boxes = new Map<C, HTMLInputElement>();
            for (const category of categories) {
                const name = options.labels?.[category];
                if (name === undefined) continue;
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'checkbox checkbox-sm';
                input.value = category;
                label.append(input, \` \${name}\`);
                boxes.set(category, input);
                box.append(label);
            }
            const close = () => box.remove();
            const button = (label: string, className: string, run: () => void) => {
                const node = document.createElement('button');
                node.type = 'button';
                node.className = className;
                node.textContent = label;
                node.addEventListener('click', () => {
                    run();
                    close();
                });
                box.append(node);
            };
            button(options.refuse, 'btn btn-sm', () => store.refuse());
            if (boxes.size > 0 && options.save !== undefined) {
                button(options.save, 'btn btn-sm', () => store.accept([...boxes].filter(([, input]) => input.checked).map(([category]) => category)));
            }
            button(options.accept, 'btn btn-sm btn-primary', () => store.accept());
            document.body.append(box);
            return close;
        }
    };
    return store;
}

`),U("dates.ts",`declare const iso: unique symbol;

const pad = (value: number, width = 2) => String(value).padStart(width, '0');

export type IsoDate = string & { readonly [iso]: 'date' };

export const IsoDate = {
    parse: (value: IsoDate): Date => {
        const [year, month, day] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        date.setFullYear(year);
        return date;
    },
    from: (date: Date): IsoDate => \`\${pad(date.getFullYear(), 4)}-\${pad(date.getMonth() + 1)}-\${pad(date.getDate())}\` as IsoDate,
    today: (): IsoDate => IsoDate.from(new Date()),
};

export type IsoTime = string & { readonly [iso]: 'time' };

export const IsoTime = {
    from: (date: Date): IsoTime => \`\${pad(date.getHours())}:\${pad(date.getMinutes())}:\${pad(date.getSeconds())}\` as IsoTime,
};

export type IsoDateTime = string & { readonly [iso]: 'date-time' };

export const IsoDateTime = {
    parse: (value: IsoDateTime): Date => new Date(value),
    from: (date: Date): IsoDateTime => date.toISOString() as IsoDateTime,
    fromLocal: (date: Date): IsoDateTime => \`\${IsoDate.from(date)}T\${IsoTime.from(date)}\` as IsoDateTime,
    now: (): IsoDateTime => IsoDateTime.from(new Date()),
};
`),U("form-state.svelte.ts",`import { untrack } from 'svelte';
import { errorMessage, isValidationError, isVersionConflict, type RequestOptions } from './client.js';

export type FieldErrors = Record<string, string[]>;

export type FieldCheckRoute = (query: { value: string }, options?: RequestOptions) => Promise<{ message?: string | null }>;

export interface FormStateOptions<T> {
    validate?: (draft: T) => FieldErrors | null | undefined;
    resetOnSuccess?: boolean;
    checks?: Partial<Record<keyof T & string, FieldCheckRoute>>;
    checkDelay?: number;
}

export interface FormState<T> {
    draft: T;
    readonly dirty: boolean;
    readonly submitting: boolean;
    readonly checking: boolean;
    readonly errors: FieldErrors;
    readonly error: unknown;
    readonly message: string;
    readonly conflict: unknown;
    keepMine(): void;
    takeTheirs(next?: T): void;
    reset(next?: T): void;
    submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined>;
}

export function formState<T extends object>(initial: T, options: FormStateOptions<T> = {}): FormState<T> {
    let saved = $state.snapshot(initial) as T;
    let draft = $state($state.snapshot(initial) as T);
    let baseline = $state(JSON.stringify(initial));
    let submitting = $state(false);
    let errors = $state.raw<FieldErrors>({});
    let failure = $state.raw<unknown>(undefined);
    let checked = $state.raw<FieldErrors>({});
    let conflict = $state.raw<unknown>(undefined);
    let checking = $state(0);
    const dirty = $derived(JSON.stringify(draft) !== baseline);
    const shown = $derived.by(() => {
        const merged: FieldErrors = { ...errors };
        for (const [name, messages] of Object.entries(checked)) merged[name] = [...(merged[name] ?? []), ...messages];
        return merged;
    });

    function textOf(holder: T, name: string): string {
        return String((holder as Record<string, unknown>)[name] ?? '');
    }

    function watch(name: string, ask: FieldCheckRoute) {
        $effect(() => {
            const value = textOf(draft, name);
            untrack(() => {
                if (!(name in checked)) return;
                const rest = { ...checked };
                delete rest[name];
                checked = rest;
            });
            if (value === '' || value === textOf(saved, name)) return;
            const controller = new AbortController();
            const timer = setTimeout(() => {
                checking += 1;
                ask({ value }, { signal: controller.signal, silent: true })
                    .then((answer) => {
                        if (!controller.signal.aborted && answer.message) checked = { ...checked, [name]: [answer.message] };
                    })
                    .catch(() => undefined)
                    .finally(() => {
                        checking -= 1;
                    });
            }, options.checkDelay ?? 300);
            return () => {
                clearTimeout(timer);
                controller.abort();
            };
        });
    }

    for (const [name, ask] of Object.entries(options.checks ?? {})) {
        if (ask) watch(name, ask as FieldCheckRoute);
    }

    function settle(value: T) {
        saved = $state.snapshot(value) as T;
        baseline = JSON.stringify(saved);
    }

    function reset(next?: T) {
        if (next !== undefined) settle(next);
        draft = $state.snapshot(saved) as T;
        errors = {};
        checked = {};
        failure = undefined;
        conflict = undefined;
    }

    function keepMine() {
        const theirs = conflict as { version?: unknown } | undefined;
        if (theirs === undefined) return;
        (draft as { version?: unknown }).version = theirs.version;
        conflict = undefined;
        failure = undefined;
    }

    function takeTheirs(next?: T) {
        if (conflict === undefined) return;
        reset(next ?? (conflict as T));
    }

    async function submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined> {
        if (submitting) return undefined;
        const sending = $state.snapshot(draft) as T;
        const invalid = options.validate?.(sending);
        failure = undefined;
        conflict = undefined;
        if (invalid && Object.keys(invalid).length > 0) {
            errors = invalid;
            return undefined;
        }
        errors = {};
        if (Object.keys(checked).length > 0) return undefined;
        submitting = true;
        try {
            const result = await send(sending);
            if (options.resetOnSuccess) reset();
            else if (JSON.stringify(draft) === JSON.stringify(sending)) settle(sending);
            return result;
        } catch (error) {
            if (isValidationError(error)) errors = error.body.fields ?? {};
            else failure = error;
            if (isVersionConflict(error)) conflict = error.body.current;
            return undefined;
        } finally {
            submitting = false;
        }
    }

    return {
        get draft() {
            return draft;
        },
        set draft(value: T) {
            draft = value;
        },
        get dirty() {
            return dirty;
        },
        get submitting() {
            return submitting;
        },
        get checking() {
            return checking > 0;
        },
        get errors() {
            return shown;
        },
        get error() {
            return failure;
        },
        get message() {
            return failure === undefined ? '' : errorMessage(failure);
        },
        get conflict() {
            return conflict;
        },
        keepMine,
        takeTheirs,
        reset,
        submit
    };
}
`),U("form.ts",`export interface FieldBounds {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    pattern?: string;
}

export interface FieldOptions {
    bounds?: FieldBounds;
    errors?: string[];
    errorClass?: string;
    describedBy?: string;
}

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

let fieldCount = 0;

const typedBeforeHydration = new WeakMap<EventTarget, string>();
let remembering = false;

function remember(node: EventTarget | null) {
    const textInput = (node instanceof HTMLInputElement && node.type !== 'file') || node instanceof HTMLTextAreaElement;
    if (!textInput) return;
    if (node.value === node.defaultValue) typedBeforeHydration.delete(node);
    else typedBeforeHydration.set(node, node.value);
}

function rememberInput(event: Event) {
    remember(event.target);
}

if (typeof document !== 'undefined') {
    document.querySelectorAll('input, textarea').forEach(remember);
    document.addEventListener('input', rememberInput, true);
    remembering = true;
}

function restoreTypedValue(node: FieldElement) {
    if (remembering) {
        remembering = false;
        queueMicrotask(() => document.removeEventListener('input', rememberInput, true));
    }
    const typed = typedBeforeHydration.get(node);
    if (typed === undefined) return;
    typedBeforeHydration.delete(node);
    if (node.value === typed) return;
    node.value = typed;
    node.dispatchEvent(new Event('input', { bubbles: true }));
}

export function field(node: FieldElement, options: FieldOptions = {}) {
    const message = document.createElement('p');
    message.id = \`ktor-svelte-field-\${++fieldCount}\`;
    message.setAttribute('role', 'alert');
    const applied = new Set<string>();

    function apply({ bounds = {}, errors = [], errorClass = 'field-error', describedBy }: FieldOptions) {
        applied.forEach((name) => node.removeAttribute(name));
        applied.clear();
        for (const [name, value] of Object.entries(bounds)) {
            if (value === undefined || value === false) continue;
            node.setAttribute(name, value === true ? '' : String(value));
            applied.add(name);
        }
        const text = errors.join(' ');
        message.className = errorClass;
        message.textContent = text;
        if (text === '') {
            node.removeAttribute('aria-invalid');
            if (describedBy) node.setAttribute('aria-describedby', describedBy);
            else node.removeAttribute('aria-describedby');
            message.remove();
            return;
        }
        node.setAttribute('aria-invalid', 'true');
        node.setAttribute('aria-describedby', describedBy ? \`\${describedBy} \${message.id}\` : message.id);
        if (!message.isConnected) node.after(message);
    }

    apply(options);
    restoreTypedValue(node);
    return { update: apply, destroy: () => message.remove() };
}
`),U("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),U("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),U("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

export function readPublicConfig(): PublicConfig | undefined {
    if (typeof document === 'undefined') return undefined;
    const element = document.getElementById('ktor-svelte-config');
    if (!element?.textContent) return undefined;
    return JSON.parse(element.textContent) as PublicConfig;
}

export function loadPublicConfig(options?: RequestOptions): Promise<PublicConfig> {
    const inline = readPublicConfig();
    if (inline) return Promise.resolve(inline);
    publicConfig ??= request<PublicConfig>('GET', '/_ktor-svelte/config.json', { ...options });
    return publicConfig;
}

`),U("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

const DURATION = /^(-)?P(?:(\\d+)D)?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$/;

const two = (value: number) => String(value).padStart(2, '0');

export const IsoDuration = {
    toMillis: (value: IsoDuration): number => {
        const parts = DURATION.exec(value);
        if (!parts) return NaN;
        const [, sign, days, hours, minutes, seconds] = parts;
        const total =
            Number(days ?? 0) * 86_400_000 + Number(hours ?? 0) * 3_600_000 + Number(minutes ?? 0) * 60_000 + Math.round(Number(seconds ?? 0) * 1000);
        return sign ? -total : total;
    },
    fromMillis: (millis: number): IsoDuration => {
        const total = Math.abs(Math.round(millis));
        const hours = Math.floor(total / 3_600_000);
        const minutes = Math.floor((total % 3_600_000) / 60_000);
        const seconds = (total % 60_000) / 1000;
        const time = \`\${hours ? \`\${hours}H\` : ''}\${minutes ? \`\${minutes}M\` : ''}\${seconds || total === 0 ? \`\${seconds}S\` : ''}\`;
        return \`\${millis < 0 && total > 0 ? '-' : ''}PT\${time}\` as IsoDuration;
    },
    add: (first: IsoDuration, second: IsoDuration): IsoDuration => IsoDuration.fromMillis(IsoDuration.toMillis(first) + IsoDuration.toMillis(second)),
    format: (value: IsoDuration): string => {
        const millis = IsoDuration.toMillis(value);
        const total = Math.floor(Math.abs(millis) / 1000);
        const clock = \`\${Math.floor(total / 3600)}:\${two(Math.floor((total % 3600) / 60))}:\${two(total % 60)}\`;
        return millis < 0 && total > 0 ? \`-\${clock}\` : clock;
    },
};

export type Decimal = string & { readonly [brand]: 'Decimal' };

const DECIMAL = /^-?\\d+(?:\\.\\d+)?$/;

const scaleOf = (value: string) => (value.split('.')[1] ?? '').length;

function digitsOf(value: string, scale: number): bigint {
    const negative = value.startsWith('-');
    const [whole, fraction = ''] = (negative ? value.slice(1) : value).split('.');
    const digits = BigInt(whole + fraction.padEnd(scale, '0'));
    return negative ? -digits : digits;
}

function decimalOf(digits: bigint, scale: number): Decimal {
    const negative = digits < BigInt(0);
    const text = (negative ? -digits : digits).toString().padStart(scale + 1, '0');
    const fraction = scale > 0 ? \`.\${text.slice(text.length - scale)}\` : '';
    return \`\${negative ? '-' : ''}\${text.slice(0, text.length - scale)}\${fraction}\` as Decimal;
}

function combine(first: Decimal, second: Decimal, sign: 1 | -1): Decimal {
    const scale = Math.max(scaleOf(first), scaleOf(second));
    return decimalOf(digitsOf(first, scale) + BigInt(sign) * digitsOf(second, scale), scale);
}

export const Decimal = {
    from: (value: string | number): Decimal => {
        const text = typeof value === 'number' ? String(value) : value.trim();
        if (!DECIMAL.test(text)) throw new RangeError(\`'\${text}' is not a decimal number such as 12.50.\`);
        return text as Decimal;
    },
    toNumber: (value: Decimal): number => Number(value),
    add: (first: Decimal, second: Decimal): Decimal => combine(first, second, 1),
    subtract: (first: Decimal, second: Decimal): Decimal => combine(first, second, -1),
    times: (value: Decimal, count: number): Decimal => {
        if (!Number.isInteger(count)) throw new RangeError(\`Decimal.times takes a whole number, but got \${count}.\`);
        const scale = scaleOf(value);
        return decimalOf(digitsOf(value, scale) * BigInt(count), scale);
    },
    compare: (first: Decimal, second: Decimal): number => {
        const scale = Math.max(scaleOf(first), scaleOf(second));
        const difference = digitsOf(first, scale) - digitsOf(second, scale);
        return difference < BigInt(0) ? -1 : difference > BigInt(0) ? 1 : 0;
    },
    format: (value: Decimal, locale?: string, options?: Intl.NumberFormatOptions): string =>
        new Intl.NumberFormat(locale, { minimumFractionDigits: scaleOf(value), ...options }).format(value as unknown as number),
};
`)]))}function A7(n,r){var e;try{for(var t=new wy(Ee(r)).s1k(n),i=ke(),a=X1.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=ce(u.l2());s.s2(c,f)}e=i.k15(a,new nr(go(U("files",new nr(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=ke(),_=X1.t17(),m=h.message;v=d.k15(_,new nr(go(U("error",ce(m??h.toString())))))}else throw w;e=v}return e}p(cy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(fy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(fc,"EnumType");p(vy,"EnumUsage");p(hy,"Endpoint");p(dy,"ErrorEntry");p(py,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(_y,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(gy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(my,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(yy);p(wy,"TypeScriptGenerator");p(lo,"ValidationHelper");p(tu,"GeneratedOperation");p(by,"sam$kotlin_Comparator$0",l,l,[dn,bn]);N(ky,"ConstraintMessages");Hi=new ky;export{A7 as generateTypeScript};
