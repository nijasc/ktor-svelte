typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,Mu=ArrayBuffer.isView,cs=Math.clz32;class jf{}class Ae{}class ud{}class fd{constructor(r){this.w_1=r}x(){return Qp(this.w_1)}}class cd{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class vd{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let hd=class{constructor(){Zu=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class zn{constructor(r){Zf(),this.x1_1=r}i2(r){return pn(this.x1_1,r)}d(r){return tk(this,r)}toString(){return yr(this.x1_1)}equals(r){return ik(this.x1_1,r)}hashCode(){return ak(this.x1_1)}}class Y{}class Pe{}class qn{}class et{}class wn{}class ca{}let Xw=class{};class le{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Be(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof le?r:m())}equals(r){return this===r}hashCode(){return yk(this)}toString(){return this.w2_1}}let dd=class{constructor(){Vu=this,this.z2_1=new w(0,-2147483648),this.a3_1=new w(-1,2147483647),this.b3_1=8,this.c3_1=64}};class w extends ud{constructor(r,e){jl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return tr(this,r)}d(r){return this.f3(r instanceof w?r:m())}toString(){return So(this,10)}equals(r){var e;return r instanceof w?e=ir(this,r):e=!1,e}hashCode(){return ck(this)}valueOf(){return re(this)}}class Sn{}class pd{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw Or.r(""+this.h3_1);return r}}class Qw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class rb{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class nb{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class eb{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class tb{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class ib{}class ab{}class _d{constructor(){l1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class gd{constructor(){u1=this;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Int32Array(128),t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a);e[G(s)]=a}while(t<=i);var o="hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD",u=Iu(o,e,222),f=new Int32Array(u.length),c=0,v=u.length-1|0;if(c<=v)do{var h=c;c=c+1|0,h===0?f[h]=u[h]:f[h]=f[h-1|0]+u[h]|0}while(c<=v);this.k4_1=f;var d="aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL";this.l4_1=Iu(d,e,222);var p="GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB";this.m4_1=Iu(p,e,222)}}class gn{}class El{toString(){return"kotlin.Unit"}}class wa{static a5(r){return qi(this,r)}l1(r){var e;r:{var t;if(E(this,Y)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(D(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,Y)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,y2(this))}toArray(){return A_(this)}}class Es extends wa{static z4(){return this.a5()}h1(r){this.b5();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.b5();for(var r=this.x();r.y();)r.z(),r.c5()}toJSON(){return this.toArray()}b5(){}}class Of{constructor(r,e){rc(this,e),this.f5_1=r,this.d5_1=0,this.e5_1=-1}y(){return this.d5_1<this.f5_1.c1()}z(){if(!this.y())throw Or.j1();var r=this,e=this.d5_1;return this.d5_1=e+1|0,r.e5_1=e,this.f5_1.d1(this.e5_1)}c5(){if(this.e5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw xr.o3(b(r))}this.f5_1.h5(this.e5_1),this.d5_1=this.e5_1,this.e5_1=-1}}class md extends Of{constructor(r,e,t){t===l&&(t={}),t.l5_1=r,super(r,t),Rn.m5(e,this.l5_1.c1()),this.d5_1=e}}class yd extends Es{static n5(){var r=this.z4();return r.g5_1=0,r}n(r){return this.b5(),this.o5(this.c1(),r),!0}v2(){this.b5(),this.p5(0,this.c1())}x(){return new Of(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(D(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new md(this,r)}p5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.c5();while(a<i)}equals(r){return r===this?!0:r!=null&&E(r,qn)?Rn.q5(this,r):!1}hashCode(){return Rn.r5(this)}}class wd{static z5(){var r=qi(this);return r.x5_1=null,r.y5_1=null,r}m2(r){return lh(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(E(e,Y)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(D(s.l2(),r)){t=!0;break r}}t=!1}return t}g6(r){if(!(r!=null&&E(r,et)))return!1;var e=r.k2(),t=r.l2(),i=(E(this,wn)?this:m()).o2(e);if(!D(t,i))return!1;var a;return i==null?a=!(E(this,wn)?this:m()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,wn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(E(e,Y)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.g6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=lh(this,r);return e==null?null:e.l2()}hashCode(){return Sr(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.x5_1==null){var r=this;r.x5_1=Zd.vg(this)}return fn(this.x5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,b2(this))}q2(){if(this.y5_1==null){var r=this;r.y5_1=Vd.yg(this)}return fn(this.y5_1)}}class bd extends wd{static w5(){var r=this.z5();return r.u5_1=null,r.v5_1=null,r}a6(){return Cd.c6(this)}d6(){return Ad.f6(this)}p2(){var r=this.u5_1,e;if(r==null){var t=this.a6();this.u5_1=t,e=t}else e=r;return e}q2(){var r=this.v5_1,e;if(r==null){var t=this.d6();this.v5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.b5();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(D(r,i)){var a=t.l2();return e.c5(),a}}return null}b5(){}}class Is extends Es{static h6(){return this.z4()}equals(r){return r===this?!0:r!=null&&E(r,Pe)?ms.i6(this,r):!1}hashCode(){return ms.j6(this)}}let kd=class{constructor(){f1=this;var r=this,e=O.g1(0);e.l_1=!0,r.k6_1=e}};class zs{}class O extends yd{constructor(r){return new.target.i4(r)}static i4(r){Ya();var e=this.n5();return e.k_1=r,e.l_1=!1,e}static m(){Ya();var r=[];return this.i4(r)}static g1(r){Ya();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw B.v(b(i))}return t}static f1(r){Ya();var e=Ei(r);return this.i4(e)}m6(){return this.b5(),this.l_1=!0,this.c1()>0?this:Ya().k6_1}n6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[zu(this,r)]}y4(r,e){this.b5(),zu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.b5(),this.k_1.push(r),this.g5_1=this.g5_1+1|0,!0}o5(r,e){this.b5(),this.k_1.splice(tx(this,r),0,e),this.g5_1=this.g5_1+1|0}h1(r){if(this.b5(),r.i1())return!1;for(var e=ex(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Bs(s);this.k_1[e+o|0]=a}return this.g5_1=this.g5_1+1|0,!0}h5(r){this.b5(),zu(this,r),this.g5_1=this.g5_1+1|0;var e;return r===Ns(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}p5(r,e){this.b5(),this.g5_1=this.g5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.b5();var r=this;r.k_1=[],this.g5_1=this.g5_1+1|0}n1(r){return db(this.k_1,r)}toString(){return _k(this.k_1)}o6(){return[].slice.call(this.k_1)}toArray(){return this.o6()}b5(){if(this.l_1)throw ve.s6()}}class vs extends bd{static z6(r){var e=this.w5();return lx(e),e.x6_1=r,e}static a7(){return this.z6(Me.l7())}static m7(r,e){return this.z6(Me.n7(r,e))}static o7(r){return this.m7(r,1)}static p7(r){return this.z6(Me.q7(r))}v2(){this.x6_1.v2()}m2(r){return this.x6_1.r7(r)}n2(r){return this.x6_1.n2(r)}a6(){return xd.t7(this.x6_1)}d6(){return Sd.v7(this.x6_1)}r2(){var r=this.y6_1,e;if(r==null){var t=Id.x7(this.x6_1);this.y6_1=t,e=t}else e=r;return e}o2(r){return this.x6_1.o2(r)}s2(r,e){return this.x6_1.s2(r,e)}t2(r){return this.x6_1.t2(r)}c1(){return this.x6_1.c1()}u2(r){return this.x6_1.u2(r)}}class xd extends Is{constructor(r){return new.target.t7(r)}static t7(r){var e=this.h6();return e.s7_1=r,e}c1(){return this.s7_1.c1()}i1(){return this.s7_1.c1()===0}l1(r){return this.s7_1.r7(r)}v2(){return this.s7_1.v2()}n(r){throw ve.s6()}h1(r){throw ve.s6()}x(){return this.s7_1.y7()}b5(){return this.s7_1.z7()}}class Sd extends Es{constructor(r){return new.target.v7(r)}static v7(r){var e=this.z4();return e.u7_1=r,e}c1(){return this.u7_1.c1()}i1(){return this.u7_1.c1()===0}a8(r){return this.u7_1.n2(r)}l1(r){return this.a8(r)}b8(r){throw ve.s6()}n(r){return this.b8(r)}c8(r){throw ve.s6()}h1(r){return this.c8(r)}x(){return this.u7_1.d8()}b5(){return this.u7_1.z7()}}class Ed extends Is{static f8(r){var e=this.h6();return e.e8_1=r,e}c1(){return this.e8_1.c1()}i1(){return this.e8_1.c1()===0}h8(r){return this.e8_1.j8(r)}l1(r){return r!=null&&E(r,et)?this.h8(r!=null&&E(r,et)?r:m()):!1}v2(){return this.e8_1.v2()}i8(r){throw ve.s6()}n(r){return this.i8(r!=null&&E(r,et)?r:m())}h1(r){throw ve.s6()}j2(r){return this.e8_1.k8(r)}b5(){return this.e8_1.z7()}}class Id extends Ed{constructor(r){return new.target.x7(r)}static x7(r){return this.f8(r)}x(){return this.e8_1.g8()}}class zd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().k2()}c5(){return this.l8_1.c5()}}class Cd extends Is{constructor(r){return new.target.c6(r)}static c6(r){var e=this.h6();return e.b6_1=r,e}m8(r){throw ve.n8("Add is not supported on keys")}n(r){return this.m8(r)}v2(){return this.b6_1.v2()}r7(r){return this.b6_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.b6_1.r2().x();return new zd(r)}c1(){return this.b6_1.c1()}b5(){return this.b6_1.b5()}}class qd{constructor(r){this.o8_1=r}y(){return this.o8_1.y()}z(){return this.o8_1.z().l2()}c5(){return this.o8_1.c5()}}class Ad extends Es{constructor(r){return new.target.f6(r)}static f6(r){var e=this.z4();return e.e6_1=r,e}b8(r){throw ve.n8("Add is not supported on values")}n(r){return this.b8(r)}a8(r){return this.e6_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.e6_1.r2().x();return new qd(r)}c1(){return this.e6_1.c1()}b5(){return this.e6_1.b5()}}class yi extends Is{static p8(r){var e=this.h6();return e.a1_1=r,e}static q8(){return this.p8(Me.l7())}static r8(r){for(var e=this.p8(Me.s8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static t8(r,e){return this.p8(Me.n7(r,e))}static b1(r){return this.t8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.r7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.y7()}c1(){return this.a1_1.c1()}}class Td{constructor(){this.f9_1=-1640531527,this.g9_1=8,this.h9_1=2,this.i9_1=-1}}class Il{constructor(r){this.j9_1=r,this.k9_1=0,this.l9_1=-1,this.m9_1=this.j9_1.i7_1,this.n9()}n9(){for(;this.k9_1<this.j9_1.g7_1&&this.j9_1.d7_1[this.k9_1]<0;)this.k9_1=this.k9_1+1|0}y(){return this.k9_1<this.j9_1.g7_1}c5(){if(this.o9(),this.l9_1===-1){var r="Call next() before removing element from the iterator.";throw xr.o3(b(r))}this.j9_1.z7(),$_(this.j9_1,this.l9_1),this.l9_1=-1,this.m9_1=this.j9_1.i7_1}o9(){if(this.j9_1.i7_1!==this.m9_1)throw wo.p9()}}class jd extends Il{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Or.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1];return this.n9(),t}}class Od extends Il{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Or.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=fn(this.j9_1.c7_1)[this.l9_1];return this.n9(),t}}class Pd extends Il{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Or.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=new Bd(this.j9_1,this.l9_1);return this.n9(),t}ca(){if(this.k9_1>=this.j9_1.g7_1)throw Or.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1],i=t==null?null:Sr(t),a=i??0,s=fn(this.j9_1.c7_1)[this.l9_1],o=s==null?null:Sr(s),u=a^(o??0);return this.n9(),u}da(r){if(this.k9_1>=this.j9_1.g7_1)throw Or.j1();var e=this,t=this.k9_1;this.k9_1=t+1|0,e.l9_1=t;var i=this.j9_1.b7_1[this.l9_1];D(i,this.j9_1)?r.fa("(this Map)"):r.ea(i),r.ga(61);var a=fn(this.j9_1.c7_1)[this.l9_1];D(a,this.j9_1)?r.fa("(this Map)"):r.ea(a),this.n9()}}class Bd{constructor(r,e){this.y8_1=r,this.z8_1=e,this.a9_1=this.y8_1.i7_1}k2(){return Hv(this),this.y8_1.b7_1[this.z8_1]}l2(){return Hv(this),fn(this.y8_1.c7_1)[this.z8_1]}equals(r){var e,t;return r!=null&&E(r,et)?t=D(r.k2(),this.k2()):t=!1,t?e=D(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:Sr(r),t=e??0,i=this.l2(),a=i==null?null:Sr(i);return t^(a??0)}toString(){return he(this.k2())+"="+he(this.l2())}}class Nd{}function sb(n){var r;r:{var e;if(E(n,Y)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&E(a,et)?s=this.ka(a):s=!1,!s){r=!1;break r}}r=!0}return r}class Me{constructor(r,e,t,i,a,s){return new.target.ha(r,e,t,i,a,s)}static ha(r,e,t,i,a,s){var o=qi(this);return o.b7_1=r,o.c7_1=e,o.d7_1=t,o.e7_1=i,o.f7_1=a,o.g7_1=s,o.h7_1=U_(gs,it(o)),o.i7_1=0,o.j7_1=0,o.k7_1=!1,o}c1(){return this.j7_1}static l7(){return this.s8(8)}static s8(r){return this.ha(j_(r),null,new Int32Array(r),new Int32Array(N_(gs,r)),2,0)}static q7(r){var e=this.s8(r.c1());return e.u2(r),e}static n7(r,e){var t=this.s8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw B.v(b(i))}return t}ia(){this.z7(),this.k7_1=!0}n2(r){return vx(this,r)>=0}o2(r){var e=so(this,r);return e<0?null:fn(this.c7_1)[e]}r7(r){return so(this,r)>=0}s2(r,e){var t=F_(this,r),i=R_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.z7(),_x(this,r.r2())}t2(r){this.z7();var e=so(this,r);if(e<0)return null;var t=fn(this.c7_1)[e];return $_(this,e),t}v2(){this.z7();var r=0,e=this.g7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.d7_1[t];i>=0&&(this.e7_1[i]=0,this.d7_1[t]=-1)}while(t!==e);zo(this.b7_1,0,this.g7_1);var a=this.c7_1;a==null||zo(a,0,this.g7_1),this.j7_1=0,this.g7_1=0,Pl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,wn)?t=dx(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.g8();e.y();)r=r+e.ca()|0;return r}toString(){var r=Qr.ja(2+lr(this.j7_1,3)|0);r.fa("{");for(var e=0,t=this.g8();t.y();)e>0&&r.fa(", "),t.da(r),e=e+1|0;return r.fa("}"),r.toString()}z7(){if(this.k7_1)throw ve.s6()}j8(r){var e=so(this,r.k2());return e<0?!1:D(fn(this.c7_1)[e],r.l2())}ka(r){return this.j8(E(r,et)?r:m())}y7(){return new jd(this)}d8(){return new Od(this)}g8(){return new Pd(this)}}class Ud{constructor(){v1=this;var r=this,e=Me.s8(0);e.ia(),r.la_1=fr.ma(e)}}class fr extends vs{static t4(){var r=this.a7();return r}static na(r){var e=this.o7(r);return e}static oa(r){var e=this.p7(r);return e}static ma(r){var e=this.z6(r);return e}m6(){this.x6_1.ia();var r;return this.c1()>0?r=this:r=gx().la_1,r}b5(){return this.x6_1.z7()}}class Pn extends yi{static e1(){var r=this.q8();return r}static k1(r){var e=this.r8(r);return e}static pa(r,e){var t=this.t8(r,e);return t}static i(r){return this.pa(r,1)}b5(){return this.a1_1.z7()}}class st{}class Dd{qa(){var r="This continuation is already complete";throw xr.o3(b(r))}ra(r){var e="This continuation is already complete";throw xr.o3(b(e))}sa(r){return this.ra(r)}toString(){return"This continuation is already complete"}}class Pf{constructor(){this.za_1=null}bb(){var r=this.za_1,e;if(r==null){var t=this.qa().cb(y1),i=t==null?null:t.db(this),a=i??this;this.za_1=a,e=a}else e=r;return e}ab(){var r=this.za_1;r!=null&&r!==this&&fn(this.qa().cb(y1)).eb(r),this.za_1=J_}}class Bf extends Pf{constructor(r){super(),this.ua_1=r;var e=this;e.va_1=l;var t=this,i=this.ua_1;t.wa_1=i==null?null:i.qa()}qa(){return fn(this.wa_1)}xa(r){var e=ws(),t=Gg(r),i=t==null?this.va_1.next(r):this.va_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(c){var o=c,u=this.va_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var f=this.va_1.next(s);s=f.value,a=f.done}return s}ya(r,e){return r=r===l?null:r,e===l?this.xa(r):e.xa.call(this,new oi(r))}ra(r){var e=null,t;try{t=this.xa(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===ws())return or;this.ab();var o=this.ua_1;if(o!=null)if(e!=null){var u=e,f=Kg(u);o.sa(f)}else{var c=s;o.sa(c)}}sa(r){return this.ra(r)}}class Rd{constructor(r,e,t){this.kb_1=r,this.lb_1=e,this.mb_1=t}qa(){return this.kb_1}ra(r){var e=this.lb_1;rE(r)&&e(r);var t=this.mb_1,i=Gg(r);return i==null||t(i),or}sa(r){return this.ra(r)}}class hs extends Error{static tb(){var r=aa(this,Error,[null]);return sa(r),Au(r),r}static k3(r){var e=aa(this,Error,[r]);return sa(e,r),Au(e),e}static ub(r,e){var t=aa(this,Error,[r,m_(e)]);return sa(t,r,e),Au(t),t}}class ce extends hs{static nb(){var r=this.tb();return qu(r),r}static d9(r){var e=this.k3(r);return qu(e),e}static sb(r,e){var t=this.ub(r,e);return qu(t),t}}class ve extends ce{static s6(){var r=this.nb();return Gv(r),r}static n8(r){var e=this.d9(r);return Gv(e),e}}class B extends ce{static qb(){var r=this.nb();return Cu(r),r}static v(r){var e=this.d9(r);return Cu(e),e}static rb(r,e){var t=this.sb(r,e);return Cu(t),t}}class Or extends ce{static j1(){var r=this.nb();return Kv(r),r}static r(r){var e=this.d9(r);return Kv(e),e}}class Xn extends ce{static yb(){var r=this.nb();return Wv(r),r}static zb(r){var e=this.d9(r);return Wv(e),e}}class xr extends ce{static ac(){var r=this.nb();return Yv(r),r}static o3(r){var e=this.d9(r);return Yv(e),e}}class wo extends ce{static p9(){var r=this.nb();return Zv(r),r}static x8(r){var e=this.d9(r);return Zv(e),e}}class Fu extends ce{static ec(){var r=this.nb();return Vv(r),r}static fc(r){var e=this.d9(r);return Vv(e),e}}class bo extends Error{static kc(){var r=aa(this,Error,[null]);return sa(r),Tu(r),r}static nc(r){var e=aa(this,Error,[r]);return sa(e,r),Tu(e),e}static mc(r,e){var t=aa(this,Error,[r,m_(e)]);return sa(t,r,e),Tu(t),t}}class es extends bo{static ic(){var r=this.kc();return Xv(r),r}static lc(r){var e=r==null?null:b(r),t=this.mc(e,r instanceof Error?r:null);return Xv(t),t}}class $u extends B{static sc(){var r=this.qb();return Qv(r),r}static tc(r){var e=this.v(r);return Qv(e),e}}class Ju extends ce{static s3(){var r=this.nb();return xx(r),r}}class Hu extends ce{static w3(){var r=this.nb();return Sx(r),r}}class Gu extends ce{static a4(){var r=this.nb();return Ex(r),r}}class Ve{}class ba{equals(r){var e;return r instanceof Nf?e=!1:r instanceof ba?e=D(this.zc(),r.zc())&&this.uc()==r.uc():e=!1,e}hashCode(){var r=this.uc(),e=r==null?null:fe(r);return e??0}toString(){return"class "+this.uc()}}class en extends ba{constructor(r,e,t){super(),this.wc_1=r,this.xc_1=e,this.yc_1=t}zc(){return this.wc_1}uc(){return this.xc_1}vc(r){return this.yc_1(r)}}class Nf extends ba{constructor(){Co=null,super(),Co=this,this.ad_1="Nothing"}uc(){return this.ad_1}vc(r){return!1}zc(){throw ve.n8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Ku extends ba{constructor(r){super(),this.bd_1=r;var e=this,t=this.bd_1.$metadata$;e.cd_1=t==null?null:t.simpleName}zc(){return this.bd_1}uc(){return this.cd_1}vc(r){return Uk(r,this.bd_1)}}class Ii{}class Ld{constructor(){h1=this;var r=this,e=Object;r.anyClass=new en(e,"Any",Tx);var t=this,i=Number;t.numberClass=new en(i,"Number",jx),this.nothingClass=Ax();var a=this,s=Boolean;a.booleanClass=new en(s,"Boolean",Ox);var o=this,u=Number;o.byteClass=new en(u,"Byte",Px);var f=this,c=Number;f.shortClass=new en(c,"Short",Bx);var v=this,h=Number;v.intClass=new en(h,"Int",Nx);var d=this,p=w;d.longClass=new en(p,"Long",Ux);var g=this,y=Number;g.floatClass=new en(y,"Float",Dx);var x=this,k=Number;x.doubleClass=new en(k,"Double",Rx);var S=this,I=Array;S.arrayClass=new en(I,"Array",Lx);var z=this,q=String;z.stringClass=new en(q,"String",Mx);var T=this,P=Error;T.throwableClass=new en(P,"Throwable",Fx);var $=this,j=Array;$.booleanArrayClass=new en(j,"BooleanArray",$x);var U=this,J=Uint16Array;U.charArrayClass=new en(J,"CharArray",Jx);var M=this,F=Int8Array;M.byteArrayClass=new en(F,"ByteArray",Hx);var R=this,X=Int16Array;R.shortArrayClass=new en(X,"ShortArray",Gx);var H=this,er=Int32Array;H.intArrayClass=new en(er,"IntArray",Kx);var Z=this,W=typeof BigInt>"u"?l:BigInt;Z.bigIntClass=new en(W,"BigInt",Wx);var sr=this,ur=Array;sr.longArrayClass=new en(ur,"LongArray",Yx);var rr=this,Er=Float32Array;rr.floatArrayClass=new en(Er,"FloatArray",Zx);var Ir=this,mr=Float64Array;Ir.doubleArrayClass=new en(mr,"DoubleArray",Vx)}dd(){return this.anyClass}ed(){return this.numberClass}fd(){return this.nothingClass}gd(){return this.booleanClass}hd(){return this.byteClass}id(){return this.shortClass}jd(){return this.intClass}kd(){return this.longClass}ld(){return this.floatClass}md(){return this.doubleClass}nd(){return this.arrayClass}od(){return this.stringClass}pd(){return this.throwableClass}qd(){return this.booleanArrayClass}rd(){return this.charArrayClass}sd(){return this.byteArrayClass}td(){return this.shortArrayClass}ud(){return this.intArrayClass}vd(){return this.bigIntClass}wd(){return this.longArrayClass}xd(){return this.floatArrayClass}yd(){return this.doubleArrayClass}functionClass(r){var e=rh()[r],t;if(e==null){var i=Function,a="Function"+r,s=new en(i,a,Xx(r));rh()[r]=s,t=s}else t=e;return t}}class Iv extends hs{constructor(r){return new.target.be(r)}static be(r){var e=this.k3(r);return cn(e,e.ae_1),e}static ce(){return this.be(null)}}class Qr{constructor(r){return new.target.de(r)}static de(r){var e=qi(this);return e.e_1=r,e}static ja(r){return this.f()}static f(){return this.de("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=Q(e,r);else throw Xn.zb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return oe(this.e_1,r,e)}ga(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+he(r),this}ee(r,e,t){return this.fe(r??"null",e,t)}ea(r){return this.e_1=this.e_1+he(r),this}ge(r){return this.fa(r.toString())}he(r){return this.fa(r.toString())}fa(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ie(r,e){return Rn.m5(r,this.a()),this.e_1=oe(this.e_1,0,r)+yr(e)+lt(this.e_1,r),this}je(r){if(r<0)throw B.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=oe(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ke(){return this.e_1="",this}le(r){return Rn.l6(r,this.a()),this.e_1=oe(this.e_1,0,r)+lt(this.e_1,r+1|0),this}fe(r,e,t){var i=b(r);return Rn.me(e,t,i.length),this.e_1=this.e_1+oe(i,e,t),this}}class Md{constructor(){d1=this,this.ne_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.oe_1=new RegExp("[\\\\$]","g"),this.pe_1=new RegExp("\\$","g")}qe(r){var e=this.ne_1;return r.replace(e,"\\$&")}re(r){var e=this.pe_1;return r.replace(e,"$$$$")}}class It{constructor(r,e){return new.target.ye(r,e)}static ye(r,e){Ao();var t=qi(this);return t.se_1=r,t.te_1=ot(e),t.ue_1=new RegExp(r,o2(e,"gu")),t.ve_1=null,t.we_1=null,t}static ze(r){return Ao(),this.ye(r,Pt())}af(r){r2(this.ue_1);var e=this.ue_1.exec(b(r));return e!=null&&e.index===0&&this.ue_1.lastIndex===C(r)}xe(r,e){if(e<0||e>C(r))throw Xn.zb("Start index out of bounds: "+e+", input length: "+C(r));return Y_(this.ue_1,b(r),e,this.ue_1)}bf(r,e,t){return e=e===l?0:e,t===l?this.xe(r,e):t.xe.call(this,r,e)}cf(r,e){if(e<0||e>C(r))throw Xn.zb("Start index out of bounds: "+e+", input length: "+C(r));var t=a2(this,r,e);return O2(t,s2)}df(r,e,t){return e=e===l?0:e,t===l?this.cf(r,e):t.cf.call(this,r,e)}ef(r,e){var t=this.bf(r);if(t==null)return b(r);var i=0,a=C(r),s=Qr.ja(a);do{var o=fn(t);s.ee(r,i,o.ff().jf()),s.g(e(o)),i=o.ff().kf()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.ee(r,i,a),s.toString()}lf(r,e){_c(e);for(var t=this.df(r),i=e===0?t:Xb(t,e-1|0),a=O.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(Dn(r,s,u.ff().jf()))),s=u.ff().kf()+1|0}return a.n(b(Dn(r,s,C(r)))),a}toString(){return this.ue_1.toString()}}class zl{constructor(r){this.mf_1=r}toString(){return"MatchGroup(value="+this.mf_1+")"}hashCode(){return fe(this.mf_1)}equals(r){return this===r?!0:!(!(r instanceof zl)||this.mf_1!==r.mf_1)}}class Fd extends wa{constructor(r,e){return new.target.zf(r,e)}static zf(r,e,t){return t===l&&(t={}),t.qf_1=r,t.rf_1=e,this.a5(t)}c1(){return this.qf_1.length}x(){var r=Jb(S2(this));return qs(r,u2(this)).x()}d1(r){var e=this.qf_1[r],t;return e==null?t=null:t=new zl(e),t}}class Uf extends wa{static cg(r){return this.a5(r)}x(){return new Df(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(D(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Hd(this,r)}equals(r){return r===this?!0:r!=null&&E(r,qn)?Rn.q5(this,r):!1}hashCode(){return Rn.r5(this)}}class $d extends Uf{constructor(r){return new.target.bg(r)}static bg(r,e){return e===l&&(e={}),e.ag_1=r,this.cg(e)}c1(){return this.ag_1.length}d1(r){var e=this.ag_1[r];return e??""}}class Jd{constructor(r,e,t,i){this.vf_1=r,this.wf_1=e,this.xf_1=t,this.yf_1=i,this.sf_1=r;var a=this;a.tf_1=Fd.zf(e,this),this.uf_1=null}ff(){return this.sf_1}dg(){if(this.uf_1==null){var r=this;r.uf_1=$d.bg(this.wf_1)}return fn(this.uf_1)}z(){return Y_(this.xf_1,this.yf_1,this.vf_1.i1()?f2(this,this.vf_1.jf()):this.vf_1.kf()+1|0,this.xf_1)}}let ob=class{constructor(r){this.eg_1=r}fg(r,e){return this.eg_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.eg_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}};class bt extends le{constructor(r,e,t){super(r,e),this.ig_1=t}}class Df{constructor(r,e){rc(this,e),this.og_1=r,this.ng_1=0}y(){return this.ng_1<this.og_1.c1()}z(){if(!this.y())throw Or.j1();var r=this.ng_1;return this.ng_1=r+1|0,this.og_1.d1(r)}}class Hd extends Df{constructor(r,e,t){t===l&&(t={}),t.rg_1=r,super(r,t),Rn.m5(e,this.rg_1.c1()),this.ng_1=e}}class Gd{constructor(){this.w4_1=2147483639}l6(r,e){if(r<0||r>=e)throw Xn.zb("index: "+r+", size: "+e)}m5(r,e){if(r<0||r>e)throw Xn.zb("index: "+r+", size: "+e)}x4(r,e,t){if(r<0||e>t)throw Xn.zb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw B.v("fromIndex: "+r+" > toIndex: "+e)}me(r,e,t){if(r<0||e>t)throw Xn.zb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw B.v("startIndex: "+r+" > endIndex: "+e)}e9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}r5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:Sr(i);e=a+(s??0)|0}return e}q5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!D(a,s))return!1}return!0}}class Kd{constructor(r){this.sg_1=r}y(){return this.sg_1.y()}z(){return this.sg_1.z().k2()}}class Wd{constructor(r){this.tg_1=r}y(){return this.tg_1.y()}z(){return this.tg_1.z().l2()}}class lb{}class Yd extends wa{static wg(r){return this.a5(r)}equals(r){return r===this?!0:r!=null&&E(r,Pe)?ms.i6(this,r):!1}hashCode(){return ms.j6(this)}}class Zd extends Yd{constructor(r){return new.target.vg(r)}static vg(r,e){return e===l&&(e={}),e.ug_1=r,this.wg(e)}r7(r){return this.ug_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.ug_1.r2().x();return new Kd(r)}c1(){return this.ug_1.c1()}}class Vd extends wa{constructor(r){return new.target.yg(r)}static yg(r,e){return e===l&&(e={}),e.xg_1=r,this.a5(e)}a8(r){return this.xg_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.xg_1.r2().x();return new Wd(r)}c1(){return this.xg_1.c1()}}class Xd{j6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:Sr(i);e=a+(s??0)|0}return e}i6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Qd{constructor(){p1=this,this.zg_1=new w(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,qn)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ah(r){return!1}l1(r){return!1}d1(r){throw Xn.zb("Empty list doesn't contain element at index "+r+".")}bh(r){return-1}n1(r){return-1}x(){return ys}m1(r){if(r!==0)throw Xn.zb("Index: "+r);return ys}}class rp{y(){return!1}z(){throw Or.j1()}}class Cl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"IndexedValue(index="+this.ch_1+", value="+he(this.dh_1)+")"}hashCode(){var r=this.ch_1;return r=lr(r,31)+(this.dh_1==null?0:Sr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Cl)||this.ch_1!==r.ch_1||!D(this.dh_1,r.dh_1))}}class np{constructor(r){this.eh_1=r}x(){return new ep(this.eh_1())}}class ep{constructor(r){this.fh_1=r,this.gh_1=0}y(){return this.fh_1.y()}z(){var r=this.gh_1;return this.gh_1=r+1|0,new Cl(Bs(r),this.fh_1.z())}}class tp{}class ip{constructor(){_1=this,this.kh_1=new w(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,wn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}lh(r){return!1}m2(r){return this.lh(r)}mh(r){return null}o2(r){return this.mh(r)}r2(){return m1()}p2(){return m1()}q2(){return ag()}}class ap{z(){return this.ph()}}class sp{constructor(r){this.rh_1=r,this.qh_1=r.sh_1.x()}z(){return this.rh_1.th_1(this.qh_1.z())}y(){return this.qh_1.y()}}class op{constructor(r,e){this.sh_1=r,this.th_1=e}x(){return new sp(this)}}class ql{}class lp{constructor(r){this.uh_1=r.xh_1,this.vh_1=r.wh_1.x()}z(){if(this.uh_1===0)throw Or.j1();return this.uh_1=this.uh_1-1|0,this.vh_1.z()}y(){return this.uh_1>0&&this.vh_1.y()}}class Al{constructor(r,e){if(this.wh_1=r,this.xh_1=e,!(this.xh_1>=0)){var t="count must be non-negative, but was "+this.xh_1+".";throw B.v(b(t))}}v1(r){return r>=this.xh_1?this:new Al(this.wh_1,r)}x(){return new lp(this)}}class up{x(){return ys}v1(r){return Ul}}class fp{constructor(r){this.ai_1=r,this.yh_1=null,this.zh_1=-2}z(){if(this.zh_1<0&&vh(this),this.zh_1===0)throw Or.j1();var r=this.yh_1,e=r??m();return this.zh_1=-1,e}y(){return this.zh_1<0&&vh(this),this.zh_1===1}}class Rf{constructor(r,e){this.bi_1=r,this.ci_1=e}x(){return new fp(this)}}class cp{constructor(){g1=this,this.di_1=new w(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,Pe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ah(r){return!1}l1(r){return!1}ei(r){return r.i1()}j2(r){return this.ei(r)}x(){return ys}}class vp{fi(r,e){return Be(r,e)}compare(r,e){var t=r!=null&&t1(r)?r:m();return this.fi(t,e!=null&&t1(e)?e:m())}}let hp=class{constructor(r){this.gi_1=r}fg(r,e){return this.gi_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.gi_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}},dp=class{};class ub{}class pp{constructor(){w1=this,this.hi_1=new w(0,0)}cb(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class _p extends le{}class gp extends Uf{constructor(r){return new.target.ji(r)}static ji(r){var e=this.cg();return e.ii_1=r,e}c1(){return this.ii_1.length}d1(r){return Rn.l6(r,this.ii_1.length),this.ii_1[r]}ki(r){if(r===null)return!1;var e=Cv(this.ii_1,r.x2_1);return e===r}l1(r){return r instanceof le?this.ki(r instanceof le?r:m()):!1}li(r){if(r===null)return-1;var e=r.x2_1,t=Cv(this.ii_1,e);return t===r?e:-1}n1(r){return r instanceof le?this.li(r instanceof le?r:m()):-1}}class mp{constructor(){b1=this,this.p1_1=new jt(1,0)}}class Cs{constructor(r,e,t){if(t===0)throw B.v("Step must be non-zero.");if(t===-2147483648)throw B.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=J2(r,e,t),this.t1_1=t}x(){return new yp(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Cs?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class ta{}class jt extends Cs{constructor(r,e){_g(),super(r,e,1)}jf(){return this.r1_1}kf(){return this.s1_1}mi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.mi(typeof r=="number"?r:m())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof jt?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class yp extends ap{constructor(r,e,t){super(),this.ni_1=t,this.oi_1=e,this.pi_1=this.ni_1>0?r<=e:r>=e,this.qi_1=this.pi_1?r:this.oi_1}y(){return this.pi_1}ph(){var r=this.qi_1;if(r===this.oi_1){if(!this.pi_1)throw Or.j1();this.pi_1=!1}else this.qi_1=this.qi_1+this.ni_1|0;return r}}class wp{q1(r,e,t){return new Cs(r,e,t)}}class bp{constructor(r){this.wi_1=r,this.ri_1=-1,this.si_1=Yb(r.yi_1,0,C(r.xi_1)),this.ti_1=this.si_1,this.ui_1=null,this.vi_1=0}z(){if(this.ri_1===-1&&_h(this),this.ri_1===0)throw Or.j1();var r=this.ui_1,e=r instanceof jt?r:m();return this.ui_1=null,this.ri_1=-1,e}y(){return this.ri_1===-1&&_h(this),this.ri_1===1}}class kp{constructor(r,e,t,i){this.xi_1=r,this.yi_1=e,this.zi_1=t,this.aj_1=i}x(){return new bp(this)}}class fb{constructor(){this.bj_1=0,this.cj_1=1,this.dj_1=2}}class xp{constructor(r){this.ej_1=r,this.fj_1=0,this.gj_1=0,this.hj_1=0,this.ij_1=0}y(){if(this.fj_1!==0)return this.fj_1===1;if(this.ij_1<0)return this.fj_1=2,!1;var r=-1,e=C(this.ej_1),t=this.gj_1,i=C(this.ej_1);if(t<i)r:do{var a=t;t=t+1|0;var s=Q(this.ej_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.ej_1)&&Q(this.ej_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.fj_1=1,this.ij_1=r,this.hj_1=e,!0}z(){if(!this.y())throw Or.j1();this.fj_1=0;var r=this.hj_1,e=this.gj_1;this.gj_1=this.hj_1+this.ij_1|0;var t=this.ej_1;return b(Dn(t,e,r))}}class Sp{constructor(r){this.jj_1=r}x(){return new xp(this.jj_1)}}class Ep{constructor(){k1=this,this.kj_1=new w(0,0),this.lj_1=At(new w(-1,1073741823)),this.mj_1=At(new w(1,-1073741824)),this.nj_1=new w(-16162,2147483647),this.oj_1=new w(-16162,2147483647)}pj(r){var e=new Ie(r),t=e.qj_1;if(gc(t)){var i=kn(t);if(!(tr(new w(387905,-1073741824),i)<=0&&tr(i,new w(-387905,1073741823))<=0))throw es.lc(kn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=kn(t);if(tr(new w(1,-1073741824),s)<0&&tr(s,new w(-1,1073741823))<0)a=!1;else{var o=kn(t);a=!(ir(o,new w(-1,1073741823))||ir(o,new w(1,-1073741824)))}if(a)throw es.lc(kn(t).toString()+" ms is out of milliseconds range");var u=kn(t);if(tr(new w(1108857478,-1074),u)<=0&&tr(u,new w(-1108857478,1073))<=0)throw es.lc(kn(t).toString()+" ms is denormalized")}return e.qj_1}rj(r){var e;try{var t=new Ie(zS(r,!0)),i=t.qj_1;if(D(new Ie(i),new Ie(Wr().oj_1))){var a="invariant failed";throw xr.o3(b(a))}e=t.qj_1}catch(o){if(o instanceof B){var s=o;throw B.rb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class Ie{constructor(r){Wr(),this.qj_1=r}sj(r){return Tg(this.qj_1,r)}d(r){return mS(this,r)}toString(){return xS(this.qj_1)}hashCode(){return ES(this.qj_1)}equals(r){return IS(this.qj_1,r)}}class Ip{constructor(){x1=this,this.tj_1=new Wu(new w(-1,1073741823),!0),this.uj_1=new Wu(new w(-1,2147483647),!1)}}class Wu{constructor(r,e){Ug(),this.vj_1=r,this.wj_1=e;var t=this,i=this.vj_1;t.xj_1=qr(i,L(10));var a=this,s=this.vj_1;a.yj_1=qt(s,L(10))}}class cb{}class zp{constructor(){E1=this,this.zj_1=new tt(new w(342103040,-7347440),0),this.ak_1=new tt(new w(-90867457,7347410),999999999)}bk(r,e){var t=new w(1e9,0),i=qr(e,t);if(tr(Oe(e,t),new w(0,0))<0&&!ir(Tr(i,t),e)){var a=i;i=Hr(a,nt())}var s=i,o=dr(r,s);if(tr(Oe(r,o),new w(0,0))<0&&tr(Oe(r,s),new w(0,0))>=0)return tr(r,new w(0,0))>0?Et().ak_1:Et().zj_1;var u=o,f;if(tr(u,new w(342103040,-7347440))<0)f=this.zj_1;else if(tr(u,new w(-90867457,7347410))>0)f=this.ak_1;else{var c=new w(1e9,0),v=qt(e,c),h=dr(v,_s(c,As(_s(Oe(v,c),ki(v,an(v))),63))),d=Xr(h);f=new tt(u,d)}return f}ck(r,e){return this.bk(r,L(e))}dk(r){return JS(r).ek()}}class tt{constructor(r,e){Et(),this.fk_1=r,this.gk_1=e;var t=this.fk_1;if(!(tr(new w(342103040,-7347440),t)<=0&&tr(t,new w(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw B.v(b(i))}}hk(r){var e=this.fk_1.f3(r.fk_1);return e!==0?e:Be(this.gk_1,r.gk_1)}d(r){return this.hk(r instanceof tt?r:m())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof tt?i=ir(this.fk_1,r.fk_1):i=!1,i?t=this.gk_1===r.gk_1:t=!1,e=t}return e}hashCode(){return this.fk_1.hashCode()+lr(51,this.gk_1)|0}toString(){return $S(this)}}class Cp{constructor(r,e){this.qk_1=r,this.rk_1=e}ek(){if(tr(this.qk_1,Et().zj_1.fk_1)<0||tr(this.qk_1,Et().ak_1.fk_1)>0)throw Ff.wk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.qk_1.toString()+")");return Et().ck(this.qk_1,this.rk_1)}}class Lf{constructor(r,e){this.xk_1=r,this.yk_1=e}ek(){throw Ff.wk(this.xk_1+' when parsing an Instant from "'+yc(this.yk_1,64)+'"')}}class qp{ik(r){var e=r.fk_1,t=new w(86400,0),i=qr(e,t);if(tr(Oe(e,t),new w(0,0))<0&&!ir(Tr(i,t),e)){var a=i;i=Hr(a,nt())}var s=i,o=new w(86400,0),u=qt(e,o),f=dr(u,_s(o,As(_s(Oe(u,o),ki(u,an(u))),63))),c=Xr(f),v,h,d,p=dr(s,L(719528)),g=p;p=Hr(g,L(60));var y=new w(0,0);if(tr(p,new w(0,0))<0){var x=p,k=dr(x,L(1)),S=qr(k,L(146097)),I=Hr(S,L(1));y=Tr(I,L(400));var z=p,q=an(I),T=Tr(q,L(146097));p=dr(z,T)}var P=Tr(Un(400),p),$=dr(P,L(591)),j=qr($,L(146097)),U=p,J=Tr(Un(365),j),M=j,F=qr(M,L(4)),R=dr(J,F),X=j,H=qr(X,L(100)),er=Hr(R,H),Z=j,W=qr(Z,L(400)),sr=Hr(U,dr(er,W));if(tr(sr,new w(0,0))<0){var ur=j;j=Hr(ur,nt());var rr=p,Er=Tr(Un(365),j),Ir=j,mr=qr(Ir,L(4)),zr=dr(Er,mr),br=j,Cr=qr(br,L(100)),Rr=Hr(zr,Cr),pr=j,Yr=qr(pr,L(400));sr=Hr(rr,dr(Rr,Yr))}j=dr(j,y);var sn=Xr(sr),Gr=(lr(sn,5)+2|0)/153|0;h=((Gr+2|0)%12|0)+1|0,d=(sn-((lr(Gr,306)+5|0)/10|0)|0)+1|0;var _r=j,Mr=Gr/10|0,$r=dr(_r,L(Mr));v=Xr($r);var nn=c/3600|0,Fr=c-lr(nn,3600)|0,on=Fr/60|0,ln=Fr-lr(on,60)|0;return new Mf(v,h,d,nn,on,ln,r.gk_1)}}class Mf{constructor(r,e,t,i,a,s,o){this.jk_1=r,this.kk_1=e,this.lk_1=t,this.mk_1=i,this.nk_1=a,this.ok_1=s,this.pk_1=o}toString(){return"UnboundLocalDateTime("+this.jk_1+"-"+this.kk_1+"-"+this.lk_1+" "+this.mk_1+":"+this.nk_1+":"+this.ok_1+"."+this.pk_1+")"}}class Ff extends B{constructor(r){return new.target.wk(r)}static wk(r){var e=this.v(r);return cn(e,e.vk_1),e}}class Ap{}class Tp{constructor(r){this.al_1=r}}class jp extends Ap{constructor(r,e){super();var t=this;t.bl_1=Nk(r,2)?r:m(),this.cl_1=e;var i=this;i.dl_1=E(this,st)?this:m(),this.el_1=Pu()}qa(){return dg()}gl(r){this.dl_1=null,this.el_1=r}sa(r){return this.gl(r)}*zk(r,e){return yield()=>{var t=e,i=this;return i.dl_1=E(t,st)?t:m(),this.cl_1=r,ws()}}fl(){r:for(;;){var r=this.el_1,e=this.dl_1,t;if(e==null){var i=new oi(r)instanceof oi?r:m();return iE(i),i}else t=e;var a=t;if(D(new oi(Pu()),new oi(r))){var s;try{var o=this.bl_1,u=this.cl_1;s=yx(o,this,u,a)}catch(d){if(d instanceof Error){var f=d,c=Kg(f);a.sa(c);continue r}else throw d}var v=s;if(v!==ws()){var h=v;a.sa(h)}}else this.el_1=Pu(),a.sa(r)}}}class Op extends le{}class $f{constructor(r){this.hl_1=r,this.il_1=po}l2(){return this.il_1===po&&(this.il_1=fn(this.hl_1)(),this.hl_1=null),this.il_1}jl(){return this.il_1!==po}toString(){return this.jl()?he(this.l2()):"Lazy value not initialized yet."}}class Pp{}class vb{}class Ot{constructor(r){this.kl_1=r}equals(r){var e;return r instanceof Ot?e=D(this.kl_1,r.kl_1):e=!1,e}hashCode(){return Sr(this.kl_1)}toString(){return"Failure("+this.kl_1.toString()+")"}}class oi{constructor(r){this.ll_1=r}toString(){return nE(this.ll_1)}hashCode(){return eE(this.ll_1)}equals(r){return tE(this.ll_1,r)}}class zv extends bo{constructor(r){return new.target.hb(r)}static hb(r){r=r===l?"An operation is not implemented.":r;var e=this.nc(r);return cn(e,e.gb_1),e}}class Tl{constructor(r,e){this.ih_1=r,this.jh_1=e}toString(){return"("+he(this.ih_1)+", "+he(this.jh_1)+")"}nh(){return this.ih_1}oh(){return this.jh_1}hashCode(){var r=this.ih_1==null?0:Sr(this.ih_1);return r=lr(r,31)+(this.jh_1==null?0:Sr(this.jh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Tl)||!D(this.ih_1,r.ih_1)||!D(this.jh_1,r.jh_1))}}class Bp{constructor(){I1=this,this.jg_1=new zt(new w(0,0),new w(0,0)),this.kg_1=16,this.lg_1=128}mg(r,e){var t;return ir(r,new w(0,0))&&ir(e,new w(0,0))?t=this.jg_1:t=new zt(r,e),t}ml(r){var e;switch(r.length){case 36:e=g2(r);break;case 32:e=m2(r);break;default:throw B.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+aE(r,64)+'" of length '+r.length))}return e}}class zt{constructor(r,e){Rs(),this.nl_1=r,this.ol_1=e}toString(){return this.pl()}pl(){var r=new Int8Array(36);Za(this.nl_1,r,0,0,4);var e=45,t=G(e);r[8]=$n(t),Za(this.nl_1,r,9,4,6);var i=45,a=G(i);r[13]=$n(a),Za(this.nl_1,r,14,6,8);var s=45,o=G(s);r[18]=$n(o),Za(this.ol_1,r,19,0,2);var u=45,f=G(u);return r[23]=$n(f),Za(this.ol_1,r,24,2,8),c2(r)}equals(r){return this===r?!0:r instanceof zt?ir(this.nl_1,r.nl_1)&&ir(this.ol_1,r.ol_1):!1}ql(r){var e;if(ir(this.nl_1,r.nl_1)){var o=this.ol_1,u=o,f=r.ol_1,c=f;e=St(u,c)}else{var t=this.nl_1,i=t,a=r.nl_1,s=a;e=St(i,s)}return e}d(r){return this.ql(r instanceof zt?r:m())}hashCode(){return Oe(this.nl_1,this.ol_1).hashCode()}}class Np{constructor(){z1=this,this.rl_1=0,this.sl_1=-1,this.tl_1=1,this.ul_1=8}}class $e{constructor(r){Hl(),this.vl_1=r}wl(r){return Wg(this.vl_1,r)}d(r){return sE(this,r)}toString(){return C1(this.vl_1)}hashCode(){return this.vl_1}equals(r){return oE(this.vl_1,r)}}class Up{constructor(r){this.xl_1=r,this.yl_1=0}y(){return this.yl_1<this.xl_1.length}zl(){var r;if(this.yl_1<this.xl_1.length){var e=this.yl_1;this.yl_1=e+1|0;var t=this.xl_1[e];r=t}else throw Or.r(this.yl_1.toString());return r}z(){return new $e(this.zl())}}class ui{constructor(r){this.am_1=r}c1(){return pi(this.am_1)}x(){return fE(this.am_1)}bm(r){return Yg(this.am_1,r)}l1(r){return cE(this,r)}i1(){return vE(this.am_1)}toString(){return hE(this.am_1)}hashCode(){return dE(this.am_1)}equals(r){return pE(this.am_1,r)}}class Dp{constructor(){q1=this,this.cm_1=0,this.dm_1=-1,this.em_1=4,this.fm_1=32}}class ee{constructor(r){Gl(),this.gm_1=r}hm(r){return Zg(this.gm_1,r)}d(r){return _E(this,r)}toString(){return A1(this.gm_1)}hashCode(){return this.gm_1}equals(r){return gE(this.gm_1,r)}}class Rp{constructor(r){this.im_1=r,this.jm_1=0}y(){return this.jm_1<this.im_1.length}km(){var r;if(this.jm_1<this.im_1.length){var e=this.jm_1;this.jm_1=e+1|0;var t=this.im_1[e];r=t}else throw Or.r(this.jm_1.toString());return r}z(){return new ee(this.km())}}class fi{constructor(r){this.lm_1=r}c1(){return _i(this.lm_1)}x(){return wE(this.lm_1)}mm(r){return Vg(this.lm_1,r)}l1(r){return bE(this,r)}i1(){return kE(this.lm_1)}toString(){return xE(this.lm_1)}hashCode(){return SE(this.lm_1)}equals(r){return EE(this.lm_1,r)}}class Lp{constructor(){T1=this,this.nm_1=new w(0,0),this.om_1=new w(-1,-1),this.pm_1=8,this.qm_1=64}}class te{constructor(r){Ls(),this.rm_1=r}sm(r){return Xg(this.rm_1,r)}d(r){return IE(this,r)}toString(){return j1(this.rm_1)}hashCode(){return zE(this.rm_1)}equals(r){return CE(this.rm_1,r)}}class Mp{constructor(r){this.tm_1=r,this.um_1=0}y(){return this.um_1<this.tm_1.length}vm(){var r;if(this.um_1<this.tm_1.length){var e=this.um_1;this.um_1=e+1|0;var t=this.tm_1[e];r=t}else throw Or.r(this.um_1.toString());return r}z(){return new te(this.vm())}}class ci{constructor(r){this.wm_1=r}c1(){return gi(this.wm_1)}x(){return TE(this.wm_1)}xm(r){return Qg(this.wm_1,r)}l1(r){return jE(this,r)}i1(){return OE(this.wm_1)}toString(){return PE(this.wm_1)}hashCode(){return BE(this.wm_1)}equals(r){return NE(this.wm_1,r)}}class Fp{constructor(){O1=this,this.ym_1=0,this.zm_1=-1,this.an_1=2,this.bn_1=16}}class Je{constructor(r){Kl(),this.cn_1=r}dn(r){return rm(this.cn_1,r)}d(r){return UE(this,r)}toString(){return P1(this.cn_1)}hashCode(){return this.cn_1}equals(r){return DE(this.cn_1,r)}}class $p{constructor(r){this.en_1=r,this.fn_1=0}y(){return this.fn_1<this.en_1.length}gn(){var r;if(this.fn_1<this.en_1.length){var e=this.fn_1;this.fn_1=e+1|0;var t=this.en_1[e];r=t}else throw Or.r(this.fn_1.toString());return r}z(){return new Je(this.gn())}}class vi{constructor(r){this.hn_1=r}c1(){return mi(this.hn_1)}x(){return ME(this.hn_1)}in(r){return nm(this.hn_1,r)}l1(r){return FE(this,r)}i1(){return $E(this.hn_1)}toString(){return JE(this.hn_1)}hashCode(){return HE(this.hn_1)}equals(r){return GE(this.hn_1,r)}}function hb(n){return new jt(0,Jf(n))}function db(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,D(r,n[o]))return o}while(a<=s)}return-1}function pb(n,r){return yb(n,r)>=0}function _b(n,r){return wb(n,r)>=0}function gb(n,r){return bb(n,r)>=0}function mb(n,r){return kb(n,r)>=0}function Jf(n){return n.length-1|0}function yb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function wb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function bb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function kb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function xb(n){return n.length-1|0}function Jp(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Sb(n,Qr.f(),r,e,t,i,a,s).toString()}function Sb(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,f=0,c=n.length;r:for(;f<c;){var v=n[f];if(f=f+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)gg(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Eb(n){return new jt(0,qb(n))}function Ib(n){var r;switch(n.length){case 0:r=hr();break;case 1:r=Nn(n[0]);break;default:var e=n.slice();r=Ol(e);break}return r}function zb(n){return new np(Pb(n))}function Hp(n){switch(n.length){case 0:return Pt();case 1:return sc(n[0]);default:return Gp(n,Pn.i(n.length))}}function Cb(n){return Ab(n,O.m())}function qb(n){return n.length-1|0}function Gp(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function Ab(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function Tb(n,r){return Ob(n,r)>=0}function Kp(n){var r;switch(n.length){case 0:throw Or.r("Array is empty.");case 1:r=n[0];break;default:throw B.v("Array has more than one element.")}return r}function jb(n){return n.length===0?cg():new fd(n)}function Ob(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Cv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function Pb(n){return()=>Qp(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Wp(n,Qr.f(),r,e,t,i,a,s).toString()}function Wp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,f=n.x();r:for(;f.y();){var c=f.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)gg(r,c,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Bb(n){return ds(n,yi.b1(Zr(n,12)))}function Nb(n){for(var r=xo(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function hi(n){if(E(n,Y)){if(n.c1()<=1)return zi(n);var r=Ei(n),e=js(r)?r:m();return Lk(e),Ol(e)}var t=Kf(n);return rx(t),t}function va(n){return zi(Gf(n))}function ot(n){if(E(n,Y)){var r;switch(n.c1()){case 0:r=Pt();break;case 1:var e;E(n,qn)?e=n.d1(0):e=n.x().z(),r=sc(e);break;default:r=ds(n,Pn.i(n.c1()));break}return r}return B2(ds(n,Pn.e1()))}function ue(n,r){if(E(r,Y)){var e=O.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=O.f1(n);return Ca(t,r),t}}function Ub(n){if(n.i1())throw Or.r("List is empty.");return n.d1(0)}function zi(n){if(E(n,Y)){var r;switch(n.c1()){case 0:r=hr();break;case 1:var e;E(n,qn)?e=n.d1(0):e=n.x().z(),r=Nn(e);break;default:r=Vp(n);break}return r}return sg(Kf(n))}function Hf(n){return n.c1()===1?n.d1(0):null}function Db(n,r){var e=n.x();if(!e.y())throw Or.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function Gf(n){var r;return E(n,Y)?r=Pn.k1(n):r=ds(n,Pn.e1()),r}function wi(n,r){var e=O.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function Rb(n,r){return E(n,Y)?n.l1(r):Fb(n,r)>=0}function bu(n){return n.i1()?null:n.d1(0)}function Yp(n){var r;switch(n.c1()){case 0:throw Or.r("List is empty.");case 1:r=n.d1(0);break;default:throw B.v("List has more than one element.")}return r}function Lb(n){if(E(n,qn))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function Mb(n,r){var e;if(E(n,Y)){var t=n.c1()-r|0;if(t<=0)return hr();if(t===1)return Nn($b(n));if(e=O.g1(t),E(n,qn)){if(E(n,zs)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=O.m();for(var f=0,c=n.x();c.y();){var v=c.z();f>=r?e.n(v):f=f+1|0}return sg(e)}function Zp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function ds(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Kf(n){return E(n,Y)?Vp(n):ds(n,O.m())}function Ci(n,r){if(E(n,Y)){if(n.c1()<=1)return zi(n);var e=Ei(n),t=js(e)?e:m();return Mk(t,r),Ol(t)}var i=Kf(n);return nx(i,r),i}function Vp(n){return O.f1(n)}function Fb(n,r){if(E(n,qn))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Bs(e),D(r,i))return e;e=e+1|0}return-1}function $b(n){if(E(n,qn))return Yu(n);var r=n.x();if(!r.y())throw Or.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Yu(n){if(n.i1())throw Or.r("List is empty.");return n.d1(Ns(n))}function Jb(n){return new cd(n)}function Hb(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Be(e,t)>0&&(e=t)}return e}function Wf(n,r){return r<=-2147483648?_g().p1_1:Fe(n,r-1|0)}function Gb(n,r){return dc.q1(n,r,-1)}function Ct(n,r){return n>r?r:n}function dn(n,r){return n<r?r:n}function Kb(n,r){return dc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Yf(n,r,e){if(tr(r,e)>0)throw B.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return tr(n,r)<0?r:tr(n,e)>0?e:n}function Wb(n,r){return tr(n,r)<0?r:n}function Yb(n,r,e){if(r>e)throw B.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function ku(n,r){return tr(n,r)>0?r:n}function uo(n,r){var e=Zb(r);return e!=null?n.u1(e):!1}function Zb(n){return tr(new w(-2147483648,-1),n)<=0&&tr(n,new w(2147483647,0))<=0?Xr(n):null}function qs(n,r){return new op(n,r)}function Xp(n){var r=n.x();if(!r.y())return hr();var e=r.z();if(!r.y())return Nn(e);var t=O.m();for(t.n(e);r.y();)t.n(r.z());return t}function Vb(n){return new vd(n)}function Xb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw B.v(b(e))}var t;return r===0?t=cg():E(n,ql)?t=n.v1(r):t=new Al(n,r),t}function qv(n,r){var e=I2(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=Pn.i(i??lr(n.c1(),2));return a.h1(n),Ca(a,r),a}function ko(n,r){var e=Pn.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function Qb(n){if(C(n)===0)throw Or.r("Char sequence is empty.");return Q(n,0)}function rk(n){var r;switch(C(n)){case 0:throw Or.r("Char sequence is empty.");case 1:r=Q(n,0);break;default:throw B.v("Char sequence has more than one element.")}return r}function nk(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw B.v(b(e))}return lt(n,Ct(r,n.length))}function ek(n){var r=n&65535;return r}function pn(n,r){return n-r|0}function tk(n,r){return pn(n.x1_1,r instanceof zn?r.x1_1:m())}function se(n,r){return n-r|0}function G(n){return n}function yr(n){return String.fromCharCode(n)}function ik(n,r){return r instanceof zn?n===r.x1_1:!1}function ak(n){return n}var Zu;function Zf(){return Zu===l&&new hd,Zu}function he(n){var r=n==null?null:b(n);return r??"null"}function sk(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Vu;function jl(){return Vu===l&&new dd,Vu}function ok(n){var r;return n<0?r=-n:r=n,r}function Qp(n){return new pd(n)}function xo(n){var r="BooleanArray",e=r_(Array(n),!1);return e.$type$=r,e}function r_(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function ps(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function bi(n){var r="LongArray",e=r_(Array(n),new w(0,0));return e.$type$=r,e}function ka(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function xu(){return xa(),n_}var n_;function e_(){return xa(),t_}var t_;function Xu(){return xa(),i_}var i_;function a_(){return xa(),s_}var s_;function lk(){return xa(),o_}var o_;function uk(n){return xa(),(n|0)===n?Eo(n):(e_()[0]=n,lr(Xu()[lk()],31)+Xu()[a_()]|0)}var Av;function xa(){Av||(Av=!0,n_=new ArrayBuffer(8),t_=new Float64Array(xu()),new Float32Array(xu()),i_=new Int32Array(xu()),e_()[0]=-1,s_=Xu()[0]!==0?1:0,o_=1-a_()|0)}function rt(){return gr(),l_}var l_;function nt(){return gr(),u_}var u_;function Tv(){return gr(),f_}var f_;function fk(){return gr(),c_}var c_;function Le(){return gr(),v_}var v_;function jv(){return gr(),h_}var h_;function tr(n,r){if(gr(),ir(n,r))return 0;var e=Ee(n),t=Ee(r);return e&&!t?-1:!e&&t?1:Ee(Hr(n,r))?-1:1}function Qu(n){return gr(),$n(n.d3_1)}function r1(n){return gr(),ec(n.d3_1)}function Xr(n){return gr(),n.d3_1}function re(n){return gr(),n.e3_1*4294967296+vk(n)}function So(n,r){if(gr(),di(n))return"0";if(Ee(n))if(ir(n,Le())){var e=L(r),t=qr(n,e),i=Xr(Hr(Tr(t,e),n)),a=So(t,r);return a+i.toString(r)}else return"-"+So(an(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=ha(Math.pow(r,s)),u=n,f="";;){var c=qr(u,o),v=Xr(Hr(u,Tr(c,o))),h=v.toString(r);if(u=c,di(u))return h+f;for(;h.length<s;)h="0"+h;f=h+f}}function ir(n,r){return gr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function ck(n){return gr(),n.d3_1^n.e3_1}function L(n){return gr(),new w(n,n<0?-1:0)}function Ee(n){return gr(),n.e3_1<0}function Hr(n,r){return gr(),dr(n,an(r))}function vk(n){return gr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function di(n){return gr(),n.e3_1===0&&n.d3_1===0}function Tr(n,r){if(gr(),di(n))return rt();if(di(r))return rt();if(ir(n,Le()))return Ov(r)?Le():rt();if(ir(r,Le()))return Ov(n)?Le():rt();if(Ee(n)){var e;return Ee(r)?e=Tr(an(n),an(r)):e=an(Tr(an(n),r)),e}else if(Ee(r))return an(Tr(n,an(r)));if(Pv(n,jv())&&Pv(r,jv()))return ha(re(n)*re(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,f=r.d3_1>>>16|0,c=r.d3_1&65535,v=0,h=0,d=0,p=0;return p=p+lr(s,c)|0,d=d+(p>>>16|0)|0,p=p&65535,d=d+lr(a,c)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,f)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,c)+lr(i,f)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new w(d<<16|p,v<<16|h)}function an(n){return gr(),dr(Vf(n),new w(1,0))}function ha(n){if(gr(),Ps(n))return rt();if(n<=-9223372036854776e3)return Le();if(n+1>=9223372036854776e3)return fk();if(n<0)return an(ha(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new w(e,t)}function dr(n,r){gr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,f=r.d3_1&65535,c=0,v=0,h=0,d=0;return d=d+(a+f|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,c=c+(v>>>16|0)|0,v=v&65535,c=c+(e+s|0)|0,c=c&65535,new w(h<<16|d,c<<16|v)}function Ov(n){return gr(),(n.d3_1&1)===1}function Pv(n,r){return gr(),tr(n,r)<0}function Vf(n){return gr(),new w(~n.d3_1,~n.e3_1)}function qr(n,r){if(gr(),di(r))throw hs.k3("division by zero");if(di(n))return rt();if(ir(n,Le())){if(ir(r,nt())||ir(r,Tv()))return Le();if(ir(r,Le()))return nt();var e=As(n,1),t=ne(qr(e,r),1);if(ir(t,rt()))return Ee(r)?nt():Tv();var i=Hr(n,Tr(r,t));return dr(t,qr(i,r))}else if(ir(r,Le()))return rt();if(Ee(n)){var a;return Ee(r)?a=qr(an(n),an(r)):a=an(qr(an(n),r)),a}else if(Ee(r))return an(qr(n,an(r)));for(var s=rt(),o=n;dk(o,r);){for(var u=re(o)/re(r),f=Math.max(1,Math.floor(u)),c=Math.ceil(Math.log(f)/Math.LN2),v=c<=48?1:Math.pow(2,c-48),h=ha(f),d=Tr(h,r);Ee(d)||hk(d,o);)f=f-v,h=ha(f),d=Tr(h,r);di(h)&&(h=nt()),s=dr(s,h),o=Hr(o,d)}return s}function As(n,r){gr();var e=r&63;return e===0?n:e<32?new w(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new w(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function ne(n,r){gr();var e=r&63;return e===0?n:e<32?new w(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new w(0,n.d3_1<<(e-32|0))}function hk(n,r){return gr(),tr(n,r)>0}function dk(n,r){return gr(),tr(n,r)>=0}function qt(n,r){return gr(),Hr(n,Tr(qr(n,r),r))}function _s(n,r){return gr(),new w(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function ki(n,r){return gr(),new w(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Oe(n,r){return gr(),new w(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Xf(n,r){gr();var e=r&63;if(e===0)return n;if(e<32)return new w(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new w(n.e3_1,0):t=new w(n.e3_1>>>(e-32|0)|0,0),t}function Un(n){gr();var r;return n instanceof w?r=n:r=ha(n),r}function ia(n){return gr(),xi(n)&&n.$type$==="LongArray"}function pk(n){return gr(),n!=null?ia(n):!1}var Bv;function gr(){if(!Bv){Bv=!0,l_=L(0),u_=L(1),f_=L(-1),c_=new w(-1,2147483647),v_=new w(0,-2147483648),h_=L(16777216);var n=Array;new en(n,"LongArray",pk)}}function Q(n,r){var e;return Qf(n)?e=K(n,r):e=n.b(r),e}function Qf(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Qf(n)?r=n.length:r=n.a(),r}function Dn(n,r,e){var t;return Qf(n)?t=oe(n,r,e):t=n.c(r,e),t}function _k(n){return Jp(n,", ","[","]",l,l,gk)}function d_(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!x_(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!D(e[s],t[s]))return!1}while(i<a);return!0}function p_(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+Sr(r[a])|0}while(t<i);return e}function gk(n){return b(n)}function Be(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=Nv(n,r):r instanceof w?t=Nv(n,re(r)):t=Uv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Uv(n,r);break;default:e=mk(n,r);break}return e}function Nv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Uv(n,r){return n<r?-1:n>r?1:0}function mk(n,r){return n.d(r)}function yk(n){return n1(n)}function n1(n){if(!("kotlinHashCodeValue$"in n)){var r=__(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function __(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":x_(n)?r="[...]":typeof n.toString!="function"?r=wk(n):r=n.toString(),r}function wk(n){return Object.prototype.toString.call(n)}function D(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(e1(n)&&e1(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!xi(n.$bound)||!xi(r.$bound))return!1;var a=n.$bound,s=r.$bound;return d_(a,s)}return n===r}function Sr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():n1(n);break;case"function":e=e1(n)?bk(n):n1(n);break;case"number":e=uk(n);break;case"boolean":e=g_(n);break;case"string":e=fe(String(n));break;case"bigint":e=kk(n);break;case"symbol":e=xk(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function bk(n){var r=n.$flags;r=lr(31,r)+Sr(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&xi(i)){var a=i;r=lr(31,r)+p_(a)|0}return r}function g_(n){return n?1231:1237}function fe(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function kk(n){var r=BigInt(32),e=BigInt(4294967295),t=ok(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function xk(n){var r=Sk(n)?Ek():Ik(),e=r.get(n);if(e!==l)return e;var t=__();return r.set(n,t),t}function Sk(n){return Symbol.keyFor(n)!=l}function Ek(){return Su===l&&(Su=new Map),Su}function Ik(){return Eu===l&&(Eu=new WeakMap),Eu}var Su,Eu;function cn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Dr(n){return n.prototype}function qi(n,r){var e=Object.create(n.prototype);return rc(e,r),e}function rc(n,r){r!==l&&Object.assign(n,r)}function aa(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function zk(n){return n===l}function m_(n){return{cause:n}}function sa(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(zk(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function Ck(){return w_(),y_}var y_;function qk(n,r){return w_(),n!=l&&n[Ck()]?r(n):bx(r)}var Dv;function w_(){Dv||(Dv=!0,y_=st.Symbol)}function Ts(){throw Ju.s3()}function Ak(){throw Hu.w3()}function m(){throw Gu.a4()}function fn(n){var r;return n==null?Ak():r=n,r}function b_(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function _(n,r,e,t,i,a,s,o){var u="class";nc(u,n,r,e,t,i,a,s,o)}function nc(n,r,e,t,i,a,s,o,u){var f=b_(n,e,t,o,u,s);r.$metadata$=f;var c=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(c,d.prototype),c[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function N(n,r,e,t,i,a,s,o){var u="object";nc(u,n,r,e,t,i,a,s,o)}function Lr(n,r,e,t,i,a,s,o){var u="interface";nc(u,n,r,e,t,i,a,s,o)}function rn(n,r,e,t){N(n,"Companion",l,r,e,t,l,l)}function Tk(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&js(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function $n(n){return n<<24>>24}function Eo(n){var r;return n instanceof w?r=Xr(n):r=jk(n),r}function jk(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function ec(n){return n<<16>>16}function Xe(n){var r=Eo(n),e=ec(r);return ek(e)}function Fe(n,r){return new jt(n,r)}function Ok(){return Ea(),k_}var k_;function Yi(){return Ea(),b_("class",l,l,l,l,l)}function Sa(n,r,e,t,i,a){return Ea(),t.get=t,t.set=i,t.callableName=n,Pk(t,Bk(r,i),e)}function Pk(n,r,e){Ea(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function Bk(n,r){return Ea(),Ok()[n][r==null?0:1]}function Ge(n,r,e,t,i,a){return Ea(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var Rv;function Ea(){if(!Rv){Rv=!0;var n=[Yi(),Yi()],r=[Yi(),Yi()];k_=[n,r,[Yi(),Yi()]]}}function x_(n){return xi(n)||Mu(n)}function xi(n){return Array.isArray(n)}function e1(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function js(n){var r;return xi(n)?r=!n.$type$:r=!1,r}function Nk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,f=0,c=o.length;r:for(;f<c;){var v=o[f];if(f=f+1|0,r===v){u=!0;break r}}return u}function S_(n){var r;return typeof n=="number"?r=!0:r=n instanceof w,r}function t1(n){var r=typeof n;return r==="string"||r==="boolean"||S_(n)||E(n,Ae)}function Os(n){return typeof n=="string"||E(n,jf)}function ts(n){return xi(n)&&n.$type$==="BooleanArray"}function is(n){return n instanceof Int8Array}function as(n){return n instanceof Int16Array}function ss(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function os(n){return n instanceof Int32Array}function ls(n){return n instanceof Float32Array}function us(n){return n instanceof Float64Array}function Uk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?Dk(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?E(n,i):n instanceof i}function Dk(n){return Object.getPrototypeOf(n)}var l;function Si(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function E_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}return H_(n,r,null)}function tc(n,r){return d_(n,r)}function Rk(n){return p_(n)}function Ol(n){return O.i4(n)}function i1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,ps(r));else if(r>t){var a=ps(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function a1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function s1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function da(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}return Ai(n,bi(r))}function pa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function _a(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ai(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function o1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw B.v(b(e))}var t="BooleanArray",i=H_(n,r,!1);return i.$type$=t,i}function Lk(n){n.length>1&&ix(n)}function Mk(n,r){n.length>1&&O_(n,r)}function Iu(n,r,e){for(var t=new Int32Array(e),i=0,a=0,s=0,o=0,u=n.length;o<u;){var f=K(n,o);o=o+1|0;var c=r[G(f)];if(a=a|(c&31)<<s,c<32){var v=i;i=v+1|0,t[v]=a,a=0,s=0}else s=s+5|0}return t}function I_(n){return z_(n)>=0}function z_(n){var r=G(n),e=C_(Lv().j4_1,r),t=r-Lv().j4_1[e]|0;return t<10?t:-1}function C_(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var l1;function Lv(){return l1===l&&new _d,l1}function Fk(n){return $k(n)!==0}function $k(n){var r=G(n),e=C_(ao().k4_1,r),t=ao().k4_1[e],i=(t+ao().l4_1[e]|0)-1|0,a=ao().m4_1[e];if(r>i)return 0;var s=a&3;if(s===0){var o=2,u=t,f=0;if(f<=1)do{if(f=f+1|0,u=u+(a>>o&127)|0,u>r)return 3;if(o=o+7|0,u=u+(a>>o&127)|0,u>r)return 0;o=o+7|0}while(f<=1);return 3}if(a<=7)return s;var c=r-t|0,v=a<=31?c%2|0:c;return a>>lr(2,v)&3}var u1;function ao(){return u1===l&&new gd,u1}function Jk(n){var r=G(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function Hk(n){for(var r=fr.t4(),e=n.u4();e.y();){var t=e.z(),i=n.v4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function Ps(n){return n!==n}function Gk(n){var r;return n===0?r=0:r=1<<(31-cs(n)|0),r}function Kk(n){return n===1/0||n===-1/0}function Mv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+cs(t)|0}else e=cs(r);return e}function ic(n){return!Wk(n)&&!Yk(n)}function ac(n){return!Kk(n)&&!Ps(n)}function q_(n){var r=n.d3_1;return r===0?32+Fv(n.e3_1)|0:Fv(r)}function Wk(n){return n===1/0||n===-1/0}function Yk(n){return n!==n}function Fv(n){var r=~(n|(-n|0));return 32-cs(r)|0}var or;function oa(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function St(n,r){return Oe(n,new w(0,-2147483648)).f3(Oe(r,new w(0,-2147483648)))}function Zk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function Vk(n,r){var e=n,t=r;if(tr(t,new w(0,0))<0){var i;return St(n,r)<0?i=new w(0,0):i=new w(1,0),i}if(tr(e,new w(0,0))>=0)return qr(e,t);var a=ne(qr(Xf(e,1),t),1),s=Hr(e,Tr(a,t)),o,u=s,f=t;St(u,f)>=0?o=1:o=0;var c=o,v=dr(a,L(c));return v}function Xk(n,r){if(tr(n,new w(0,0))>=0)return ju(n,r);var e=Xf(n,1),t=qr(e,L(r)),i=ne(t,1),a=i,s=Tr(a,L(r)),o=Hr(n,s);if(tr(o,L(r))>=0){var u=o;o=Hr(u,L(r));var f=i;i=dr(f,L(1))}return ju(i,r)+ju(o,r)}function Ei(n){var r;return n.toArray!==void 0?r=n.toArray():r=A_(n),r}function Bs(n){return n<0&&k2(),n}function Qk(n,r,e,t,i){Rn.x4(t,i,n.length);var a=i-t|0;if(Rn.x4(e,e+a|0,r.length),Mu(r)&&Mu(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function A_(n){return x2(n)}function Nn(n){var r=[n];return O.i4(r)}function Io(n){return T2([n])}function sc(n){return N2([n])}function rx(n){T_(n,vg())}function nx(n,r){T_(n,r)}function T_(n,r){if(n.c1()<=1)return or;var e=Ei(n);O_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.y4(a,e[a])}while(t<i)}function j_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw B.v(b(r))}return Array(n)}function zo(n,r,e){n.fill(null,r,e)}function $v(n,r){return E_(n,r)}function Jv(n,r){n[r]=null}var f1;function Ya(){return f1===l&&new kd,f1}function ex(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function zu(n,r){return Rn.l6(r,n.c1()),r}function tx(n,r){return Rn.m5(r,n.c1()),r}var fo;function O_(n,r){if(P_()){var e=ax(r);n.sort(e)}else B_(n,0,Jf(n),r)}function ix(n){if(P_()){var r=sx;n.sort(r)}else B_(n,0,Jf(n),vg())}function P_(){var n=fo;if(n!=null)return n;fo=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=ox;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],f=r[o];if((u&3)===(f&3)&&u>=f)return!1}while(a<s);return fo=!0,!0}function B_(n,r,e,t){var i=n.length,a=Array(i),s=c1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function c1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=c1(n,r,e,a,i),o=c1(n,r,a+1|0,t,i),u=s===r?n:r,f=e,c=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,f<=a&&c<=t){var d=s[f],p=o[c];i.compare(d,p)<=0?(u[h]=d,f=f+1|0):(u[h]=p,c=c+1|0)}else f<=a?(u[h]=s[f],f=f+1|0):(u[h]=o[c],c=c+1|0)}while(h!==t);return u}function ax(n){return(r,e)=>n.compare(r,e)}function sx(n,r){return Be(n,r)}function ox(n,r){return(n&3)-(r&3)|0}function lx(n){n.y6_1=null}function N_(n,r){return Gk(lr(dn(r,1),3))}function U_(n,r){return cs(r)+1|0}function Hv(n){if(n.y8_1.i7_1!==n.a9_1)throw wo.x8("The backing map has been modified after this entry was obtained.")}function ga(n){return n.b7_1.length}function it(n){return n.e7_1.length}function Pl(n){n.i7_1=n.i7_1+1|0}function D_(n,r){ux(n,r)?L_(n,!0):fx(n,n.g7_1+r|0)}function ux(n,r){var e=ga(n)-n.g7_1|0,t=n.g7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(ga(n)/4|0)}function fx(n,r){if(r<0)throw ce.d9("too many elements");if(r>ga(n)){var e=Rn.e9(ga(n),r);n.b7_1=$v(n.b7_1,e);var t=n,i=n.c7_1;t.c7_1=i==null?null:$v(i,e),n.d7_1=Si(n.d7_1,e);var a=N_(gs,e);a>it(n)&&M_(n,a)}}function R_(n){var r=n.c7_1;if(r!=null)return r;var e=j_(ga(n));return n.c7_1=e,e}function Bl(n,r){return r==null?0:lr(Sr(r),-1640531527)>>>n.h7_1|0}function L_(n,r){for(var e=0,t=0,i=n.c7_1;e<n.g7_1;){var a=n.d7_1[e];a>=0&&(n.b7_1[t]=n.b7_1[e],i!=null&&(i[t]=i[e]),r&&(n.d7_1[t]=a,n.e7_1[a]=t+1|0),t=t+1|0),e=e+1|0}zo(n.b7_1,t,n.g7_1),i==null||zo(i,t,n.g7_1),n.g7_1=t}function M_(n,r){Pl(n),n.g7_1>n.j7_1&&L_(n,!1),n.e7_1=new Int32Array(r),n.h7_1=U_(gs,r);for(var e=0;e<n.g7_1;){var t=e;if(e=t+1|0,!cx(n,t))throw xr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function cx(n,r){for(var e=Bl(n,n.b7_1[r]),t=n.f7_1;;){var i=n.e7_1[e];if(i===0)return n.e7_1[e]=r+1|0,n.d7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=it(n)-1|0)}}function so(n,r){for(var e=Bl(n,r),t=n.f7_1;;){var i=n.e7_1[e];if(i===0)return-1;if(D(n.b7_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=it(n)-1|0)}}function vx(n,r){var e=n.g7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.d7_1[e]>=0&&D(fn(n.c7_1)[e],r))return e}return-1}function F_(n,r){n.z7();r:for(;;)for(var e=Bl(n,r),t=Ct(lr(n.f7_1,2),it(n)/2|0),i=0;;){var a=n.e7_1[e];if(a===0){if(n.g7_1>=ga(n)){D_(n,1);continue r}var s=n.g7_1;n.g7_1=s+1|0;var o=s;return n.b7_1[o]=r,n.d7_1[o]=e,n.e7_1[e]=o+1|0,n.j7_1=n.j7_1+1|0,Pl(n),i>n.f7_1&&(n.f7_1=i),o}if(D(n.b7_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){M_(n,lr(it(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=it(n)-1|0)}}function $_(n,r){Jv(n.b7_1,r);var e=n.c7_1;e==null||Jv(e,r),hx(n,n.d7_1[r]),n.d7_1[r]=-1,n.j7_1=n.j7_1-1|0,Pl(n)}function hx(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=it(n)-1|0);var s=n.e7_1[e];if(i=i+1|0,i>n.f7_1||s===0)return n.e7_1[t]=0,or;var o=Bl(n,n.b7_1[s-1|0]);((o-e|0)&(it(n)-1|0))>=i&&(n.e7_1[t]=s,n.d7_1[s-1|0]=t,t=e,i=0)}}function dx(n,r){return n.j7_1===r.c1()&&n.k8(r.r2())}function px(n,r){var e=F_(n,r.k2()),t=R_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return D(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function _x(n,r){if(r.i1())return!1;D_(n,r.c1());for(var e=r.x(),t=!1;e.y();)px(n,e.z())&&(t=!0);return t}var gs,v1;function gx(){return v1===l&&new Ud,v1}var J_;function mx(n,r){var e=new Bf(r),t=e,i=n;return t.va_1=typeof i=="function"?i(e):n.ib(e),e}function yx(n,r,e,t){var i=new Bf(t),a=n,s=typeof a=="function"?a(r,e,i):n.jb(r,e,i);return i.va_1=s,i.ya()}function wx(n){var r=n instanceof Pf?n:null,e=r==null?null:r.bb();return e??n}function bx(n){return new Promise(kx(n))}function kx(n){return(r,e)=>{var t=dg(),i=new Rd(t,r,e);return L2(n,i),or}}function Gv(n){cn(n,n.r6_1)}function Cu(n){cn(n,n.u_1)}function qu(n){cn(n,n.c9_1)}function Au(n){cn(n,n.j3_1)}function Kv(n){cn(n,n.q_1)}function Wv(n){cn(n,n.xb_1)}function Yv(n){cn(n,n.n3_1)}function Zv(n){cn(n,n.w8_1)}function Vv(n){cn(n,n.dc_1)}function Xv(n){cn(n,n.hc_1)}function Tu(n){cn(n,n.jc_1)}function Qv(n){cn(n,n.rc_1)}function xx(n){cn(n,n.r3_1)}function Sx(n){cn(n,n.v3_1)}function Ex(n){cn(n,n.z3_1)}function Ai(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function H_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function co(n,r){return new $f(r)}function G_(n){return new $f(n)}function Ix(n){return Xr(ki(As(n,63),Xf(an(n),63)))}function zx(n){return tr(n,new w(0,0))<0?an(n):n}function Cx(n){var r;if(Ps(n))throw B.v("Cannot round NaN value.");return n>re(new w(-1,2147483647))?r=new w(-1,2147483647):n<re(new w(0,-2147483648))?r=new w(0,-2147483648):r=Un(Math.round(n)),r}function qx(n){return n<0?-n|0:n}var Co;function Ax(){return Co===l&&new Nf,Co}function rh(){return Qx(),K_}var K_;function Tx(n){return n!=null}function jx(n){return S_(n)}function Ox(n){return n!=null?typeof n=="boolean":!1}function Px(n){return n!=null?typeof n=="number":!1}function Bx(n){return n!=null?typeof n=="number":!1}function Nx(n){return n!=null?typeof n=="number":!1}function Ux(n){return n instanceof w}function Dx(n){return n!=null?typeof n=="number":!1}function Rx(n){return n!=null?typeof n=="number":!1}function Lx(n){return n!=null?js(n):!1}function Mx(n){return n!=null?typeof n=="string":!1}function Fx(n){return n instanceof Error}function $x(n){return n!=null?ts(n):!1}function Jx(n){return n!=null?ss(n):!1}function Hx(n){return n!=null?is(n):!1}function Gx(n){return n!=null?as(n):!1}function Kx(n){return n!=null?os(n):!1}function Wx(n){return typeof n=="bigint"}function Yx(n){return n!=null?ia(n):!1}function Zx(n){return n!=null?ls(n):!1}function Vx(n){return n!=null?us(n):!1}function Xx(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var h1;function kr(){return h1===l&&new Ld,h1}var nh;function Qx(){nh||(nh=!0,K_=Array(0))}function Br(n){if(n===String)return kr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Ku(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Ku(n);return e}function Nr(n){var r;switch(typeof n){case"string":r=kr().stringClass;break;case"number":var e;(n|0)===n?e=kr().intClass:e=kr().doubleClass,r=e;break;case"bigint":r=kr().bigIntClass;break;case"boolean":r=kr().booleanClass;break;case"function":var t=kr();r=t.functionClass(n.length);break;default:var i;if(ts(n))i=kr().booleanArrayClass;else if(ss(n))i=kr().charArrayClass;else if(is(n))i=kr().byteArrayClass;else if(as(n))i=kr().shortArrayClass;else if(os(n))i=kr().intArrayClass;else if(ia(n))i=kr().wd();else if(ls(n))i=kr().floatArrayClass;else if(us(n))i=kr().doubleArrayClass;else if(E(n,Ve))i=Br(Ve);else if(js(n))i=kr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=kr().anyClass;else if(a===Error)s=kr().throwableClass;else{var o=a;s=Br(o)}i=s}r=i;break}return r}function r2(n){n.lastIndex=0}function eh(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function n2(n){return 97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57?!0:pn(n,128)<0?!1:I_(n)||Fk(n)}function e2(n){return 48<=n&&n<=57?!0:pn(n,128)<0?!1:I_(n)}function oc(n){return Jk(n)}function ju(n,r){return So(n,Ia(r))}function Ia(n){if(!(2<=n&&n<=36))throw B.v("radix "+n+" was not in valid range 2..36");return n}function lc(n){var r=+n,e;return Ps(r)&&!W_(n)||r===0&&ft(n)?e=null:e=r,e}function t2(n,r){return n.toString(Ia(r))}function qo(n){var r=+n;return(Ps(r)&&!W_(n)||r===0&&ft(n))&&qa(n),r}function Nl(n,r){var e=pn(n,48)>=0&&pn(n,57)<=0?se(n,48):pn(n,65)>=0&&pn(n,90)<=0?se(n,65)+10|0:pn(n,97)>=0&&pn(n,122)<=0?se(n,97)+10|0:pn(n,128)<0?-1:pn(n,65313)>=0&&pn(n,65338)<=0?se(n,65313)+10|0:pn(n,65345)>=0&&pn(n,65370)<=0?se(n,65345)+10|0:z_(n);return e>=r?-1:e}function i2(n){var r=Rl(n),e;return r==null?qa(n):e=r,e}function W_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var d1;function Ao(){return d1===l&&new Md,d1}function a2(n,r,e){return()=>n.xe(r,e)}function s2(n){return n.z()}function o2(n,r){return V(n,"",r,l,l,l,l2)}function Y_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Fe(i.index,n.lastIndex-1|0);return new Jd(a,i,t,r)}function l2(n){return n.pf_1}function u2(n){return r=>n.d1(r)}function f2(n,r){if(r<ut(n.yf_1)){var e=n.yf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.yf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function oe(n,r,e){return n.substring(r,e)}function lt(n,r){return n.substring(r)}function c2(n){return h2(n,0,n.length)}function Qn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(Ao().qe(r),t?"gui":"gu"),a=Ao().re(e);return n.replace(i,a)}function Ce(n,r,e){return e=e===l?!1:e,e?uc(n,0,r,0,r.length,e):n.startsWith(r,0)}function uc(n,r,e,t,i,a){return a=a===l?!1:a,Ll(n,r,e,t,i,a)}function v2(n,r,e){return e=e===l?!1:e,e?uc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function th(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!Dl(s,o,e))return!1}while(t<i);return!0}function h2(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw B.v(b(i))}for(var a=r,s=Qr.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.ga(Xe(u));else if(u>>5===-2){var f=d2(n,u,a,e);f<=0?(s.ga(65533),a=a+(-f|0)|0):(s.ga(Xe(f)),a=a+1|0)}else if(u>>4===-2){var c=p2(n,u,a,e);c<=0?(s.ga(65533),a=a+(-c|0)|0):(s.ga(Xe(c)),a=a+2|0)}else if(u>>3===-2){var v=_2(n,u,a,e);if(v<=0)s.ga(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.ga(Xe(h)),s.ga(Xe(d)),a=a+3|0}}else s.ga(65533)}return s.toString()}function d2(n,r,e,t,i){if(!(r&30)||e>=t)return jn(0);var a=n[e];return(a&192)!==128?jn(0):r<<6^a^3968}function p2(n,r,e,t,i){if(e>=t)return jn(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return jn(0)}else if((a&192)!==128)return jn(0)}else if((a&224)!==160)return jn(0);if((e+1|0)===t)return jn(1);var s=n[e+1|0];return(s&192)!==128?jn(1):r<<12^a<<6^s^-123008}function _2(n,r,e,t,i){if(e>=t)return jn(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return jn(0)}else if((r&15)>4)return jn(0)}else if((a&240)<=128)return jn(0);if((a&192)!==128)return jn(0);if((e+1|0)===t)return jn(1);var s=n[e+1|0];if((s&192)!==128)return jn(1);if((e+2|0)===t)return jn(2);var o=n[e+2|0];return(o&192)!==128?jn(2):r<<18^a<<12^s<<6^o^3678080}function jn(n,r,e){return-n|0}var ih;function za(){if(ih)return or;ih=!0,Z_=new bt("NANOSECONDS",0,1),new bt("MICROSECONDS",1,1e3),V_=new bt("MILLISECONDS",2,1e6),X_=new bt("SECONDS",3,1e9),Q_=new bt("MINUTES",4,6e10),rg=new bt("HOURS",5,36e11),ng=new bt("DAYS",6,864e11)}var Z_,V_,X_,Q_,rg,ng;function eg(n,r,e){var t=Be(r.ig_1,e.ig_1),i;if(t>0){var a=Un(r.ig_1/e.ig_1),s=Tr(n,a);i=ir(qr(s,a),n)?s:tr(n,new w(0,0))>0?new w(-1,2147483647):new w(0,-2147483648)}else t<0?i=qr(n,Un(e.ig_1/r.ig_1)):i=n;return i}function ah(n,r,e){var t=Be(r.ig_1,e.ig_1);return t>0?Tr(n,Un(r.ig_1/e.ig_1)):t<0?qr(n,Un(e.ig_1/r.ig_1)):n}function To(){return za(),Z_}function jo(){return za(),V_}function fc(){return za(),X_}function tg(){return za(),Q_}function ig(){return za(),rg}function cc(){return za(),ng}function Za(n,r,e,t,i){var a=e;t<4&&(a=sh(n.e3_1,r,a,t,Ct(i,4))),i>4&&sh(n.d3_1,r,a,dn(t-4|0,0),i-4|0)}function g2(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=G(o);if(!(u>>>8|0)&&yn()[u]>=0){s=yn()[u];break r}Vn(n,r,i)}e=a|s}while(t<8);var f=e;if(K(n,8)!==45){var c="'-' (hyphen)";Vn(n,c,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var p=v<<4,g;r:{var y=K(n,d),x=G(y);if(!(x>>>8|0)&&yn()[x]>=0){g=yn()[x];break r}Vn(n,r,d)}v=p|g}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Vn(n,S,13)}var I=0,z=14;if(z<18)do{var q=z;z=z+1|0;var T=I<<4,P;r:{var $=K(n,q),j=G($);if(!(j>>>8|0)&&yn()[j]>=0){P=yn()[j];break r}Vn(n,r,q)}I=T|P}while(z<18);var U=I;if(K(n,18)!==45){var J="'-' (hyphen)";Vn(n,J,18)}var M=0,F=19;if(F<23)do{var R=F;F=F+1|0;var X=M<<4,H;r:{var er=K(n,R),Z=G(er);if(!(Z>>>8|0)&&yn()[Z]>=0){H=yn()[Z];break r}Vn(n,r,R)}M=X|H}while(F<23);var W=M;if(K(n,23)!==45){var sr="'-' (hyphen)";Vn(n,sr,23)}var ur=0,rr=24;if(rr<28)do{var Er=rr;rr=rr+1|0;var Ir=ur<<4,mr;r:{var zr=K(n,Er),br=G(zr);if(!(br>>>8|0)&&yn()[br]>=0){mr=yn()[br];break r}Vn(n,r,Er)}ur=Ir|mr}while(rr<28);var Cr=ur,Rr=0,pr=28;if(pr<36)do{var Yr=pr;pr=pr+1|0;var sn=Rr<<4,Gr;r:{var _r=K(n,Yr),Mr=G(_r);if(!(Mr>>>8|0)&&yn()[Mr]>=0){Gr=yn()[Mr];break r}Vn(n,r,Yr)}Rr=sn|Gr}while(pr<36);var $r=Rr,nn=k<<16|U,Fr=new w(nn,f),on=W<<16|Cr,ln=new w($r,on);return Rs().mg(Fr,ln)}function m2(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=G(s);if(!(o>>>8|0)&&yn()[o]>=0){a=yn()[o];break r}var u="a hexadecimal digit";Vn(n,u,t)}r=i|a}while(e<8);var f=r,c=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=c<<4,p;r:{var g=K(n,h),y=G(g);if(!(y>>>8|0)&&yn()[y]>=0){p=yn()[y];break r}var x="a hexadecimal digit";Vn(n,x,h)}c=d|p}while(v<16);var k=c,S=new w(k,f),I=0,z=16;if(z<24)do{var q=z;z=z+1|0;var T=I<<4,P;r:{var $=K(n,q),j=G($);if(!(j>>>8|0)&&yn()[j]>=0){P=yn()[j];break r}var U="a hexadecimal digit";Vn(n,U,q)}I=T|P}while(z<24);var J=I,M=0,F=24;if(F<32)do{var R=F;F=F+1|0;var X=M<<4,H;r:{var er=K(n,R),Z=G(er);if(!(Z>>>8|0)&&yn()[Z]>=0){H=yn()[Z];break r}var W="a hexadecimal digit";Vn(n,W,R)}M=X|H}while(F<32);var sr=M,ur=new w(sr,J);return Rs().mg(S,ur)}function sh(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var f=u<<3,c=n>>f&255,v=H2()[c],h=a;a=h+1|0,r[h]=$n(v>>8);var d=a;a=d+1|0,r[d]=$n(v)}while(u!==o);return a}function y2(n){return r=>r===n?"(this Collection)":he(r)}var Rn;function w2(n,r){return oh(n,r.k2())+"="+oh(n,r.l2())}function oh(n,r){return r===n?"(this Map)":he(r)}function lh(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(D(a.k2(),r)){t=a;break r}}t=null}return t}function b2(n){return r=>w2(n,r)}var ms;function Ns(n){return n.c1()-1|0}function k2(){throw Fu.fc("Index overflow has happened.")}function x2(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function hr(){return ag()}function He(n){return Cb(n)}function tn(n){return n.length>0?Ol(n):hr()}var p1;function ag(){return p1===l&&new Qd,p1}var ys;function sg(n){switch(n.c1()){case 0:return hr();case 1:return Nn(n.d1(0));default:return n}}function S2(n){return Fe(0,n.c1()-1|0)}function E2(n){for(var r=O.m(),e=n.x();e.y();){var t=e.z();Ca(r,t)}return r}function Zr(n,r){var e;return E(n,Y)?e=n.c1():e=r,e}function I2(n){var r;return E(n,Y)?r=n.c1():r=null,r}function z2(n,r){if(E(n,tp))return n.hh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw Or.r("Key "+he(r)+" is missing in the map.");e=t;break r}return e}function Ar(){var n=q2();return E(n,wn)?n:m()}function Us(n){return n.length>0?lg(n,fr.na(n.length)):Ar()}function ze(n,r){return z2(n,r)}function og(n){if(E(n,Y)){var r;switch(n.c1()){case 0:r=Ar();break;case 1:var e;E(n,qn)?e=n.d1(0):e=n.x().z(),r=Io(e);break;default:r=fh(n,fr.na(n.c1()));break}return r}return ug(fh(n,fr.t4()))}function uh(n){return lg(n,fr.na(n.length))}function at(n,r){var e;if(n.i1())e=Io(r);else{var t=fr.oa(n);t.s2(r.ih_1,r.jh_1),e=t}return e}function vc(n){return fr.oa(n)}function C2(n,r){var e=vc(n);return e.t2(r),ug(e)}var _1;function q2(){return _1===l&&new ip,_1}function lg(n,r){return fg(r,n),r}function fh(n,r){return A2(r,n),r}function ug(n){var r;switch(n.c1()){case 0:r=Ar();break;case 1:r=n;break;default:r=n;break}return r}function fg(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.nh(),s=i.oh();n.s2(a,s)}}function A2(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.nh(),a=t.oh();n.s2(i,a)}}function T2(n){var r=vs.o7(n.length);return fg(r,n),r}function Ca(n,r){if(E(r,Y))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function ch(n){var r;if(n.i1())throw Or.r("List is empty.");return r=n.h5(Ns(n)),r}function hc(n,r){var e;return n==null?e=Ul:e=new Rf(P2(n),r),e}function j2(n){return jb(n)}function O2(n,r){return new Rf(n,r)}function cg(){return Ul}var Ul;function vh(n){n.yh_1=n.zh_1===-2?n.ai_1.bi_1():n.ai_1.ci_1(fn(n.yh_1)),n.zh_1=n.yh_1==null?0:1}function P2(n){return()=>n}function si(n){return Hp(n)}function Pt(){return m1()}var g1;function m1(){return g1===l&&new cp,g1}function B2(n){switch(n.c1()){case 0:return Pt();case 1:return sc(n.x().z());default:return n}}function N2(n){return Gp(n,yi.b1(n.length))}function U2(n){if(!(n.length>0)){var r="Failed requirement.";throw B.v(b(r))}var e=R2(n);return new hp(e)}function Bt(n,r){return n==null?r==null?0:-1:r==null?1:Be(n!=null&&t1(n)?n:m(),r)}function vg(){var n=hg;return E(n,gn)?n:m()}function D2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=Bt(s,o);if(u!==0)return u}return 0}var hg;function R2(n){return(r,e)=>D2(r,e,n)}function L2(n,r){var e=wx(mx(n,r)),t=or;e.sa(t)}var y1,w1;function dg(){return w1===l&&new pp,w1}function ws(){return F2()}var hh;function M2(){if(hh)return or;hh=!0,pg=new _p("COROUTINE_SUSPENDED",0)}var pg;function F2(){return M2(),pg}function $2(n){return gp.ji(n)}function J2(n,r,e){var t;if(e>0)t=n>=r?r:r-dh(r,n,e)|0;else if(e<0)t=n<=r?r:r+dh(n,r,-e|0)|0;else throw B.v("Step is zero.");return t}function dh(n,r,e){return Ou(Ou(n,e)-Ou(r,e)|0,e)}function Ou(n,r){var e=n%r|0;return e>=0?e:e+r|0}var b1;function _g(){return b1===l&&new mp,b1}var dc;function gg(n,r,e){e!=null?n.g(e(r)):r==null||Os(r)?n.g(r):r instanceof zn?n.ga(r.x1_1):n.g(b(r))}function Dl(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=eh(n),i=eh(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function H2(){return wg(),mg}var mg;function G2(){return wg(),yg}var yg;function yn(){return G2()}var ph;function wg(){if(!ph){ph=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=G(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|G(a),n=n+1|0}mg=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,f=K("0123456789ABCDEF",u>>4),c=G(f)<<8,v=K("0123456789ABCDEF",u&15);o[u]=c|G(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var p=0,g="0123456789abcdef",y=0;y<C(g);){var x=Q(g,y);y=y+1|0;var k=p;p=k+1|0,d[G(x)]=k}for(var S=0,I="0123456789ABCDEF",z=0;z<C(I);){var q=Q(I,z);z=z+1|0;var T=S;S=T+1|0,d[G(q)]=T}yg=d;for(var P=0,$=bi(256);P<256;)$[P]=new w(-1,-1),P=P+1|0;for(var j=0,U="0123456789abcdef",J=0;J<C(U);){var M=Q(U,J);J=J+1|0;var F=j;j=F+1|0,$[G(M)]=L(F)}for(var R=0,X="0123456789ABCDEF",H=0;H<C(X);){var er=Q(X,H);H=H+1|0;var Z=R;R=Z+1|0,$[G(er)]=L(Z)}}}function K2(n){var r;return C(n)===0?r=V2:r=X2(n),r}function W2(n){return Y2(n,"")}function Y2(n,r){r=r===l?"":r;for(var e=Sg(n),t=O.m(),i=e.x();i.y();){var a=i.z();ft(a)||t.n(a)}for(var s=O.g1(Zr(t,10)),o=t.x();o.y();){var u=o.z(),f=Z2(u);s.n(f)}for(var c=Hb(s),v=c??0,h=n.length+lr(r.length,e.c1())|0,d=K2(r),p=Ns(e),g=O.m(),y=0,x=e.x();x.y();){var k=x.z(),S=y;y=S+1|0;var I=Bs(S),z;if((I===0||I===p)&&ft(k))z=null;else{var q=nk(k,v),T;q==null?T=null:T=d(q);var P=T;z=P??k}var $=z;$==null||g.n($)}return Wp(g,Qr.ja(h),`
`).toString()}function Z2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=Q(n,i);if(!oc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function V2(n){return n}function X2(n){return r=>n+r}function Rl(n){return Q2(n,10)}function Q2(n,r){Ia(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(pn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,f=0,c=t;if(c<e)do{var v=c;c=c+1|0;var h=Nl(K(n,v),r);if(h<0)return null;if(f<u)if(u===o){if(u=a/r|0,f<u)return null}else return null;if(f=lr(f,r),f<(a+h|0))return null;f=f-h|0}while(c<e);return i?f:-f|0}function qa(n){throw $u.tc("Invalid number format: '"+n+"'")}function rS(n){return nS(n,10)}function nS(n,r){Ia(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(pn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new w(0,-2147483648);else if(s===43)i=!1,a=new w(1,-2147483648);else return null}else t=0,i=!1,a=new w(1,-2147483648);var o=new w(1,-2147483648),u=qr(o,L(36)),f=u,c=new w(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Nl(K(n,h),r);if(d<0)return null;if(tr(c,f)<0)if(ir(f,u)){var p=a;if(f=qr(p,L(r)),tr(c,f)<0)return null}else return null;var g=c;c=Tr(g,L(r));var y=c,x=a,k=dr(x,L(d));if(tr(y,k)<0)return null;var S=c;c=Hr(S,L(d))}while(v<e);return i?c:an(c)}function bg(n,r){var e=Os(n)?n:m(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=Q(e,s),u=Tb(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var f=Dn(e,t,i+1|0);return b(f)}function ra(n,r){return eS(n,r)?oe(n,0,n.length-C(r)|0):n}function Aa(n,r,e){e=e===l?n:e;var t=tS(n,r);return t===-1?e:oe(n,t+1|0,n.length)}function bs(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=Oo(n,r,l,e)>=0:t=pc(n,r,0,C(n),e)>=0,t}function kg(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return iS(n,yr(r[0]),e,t);for(var i=Vb(aS(n,r,l,e,t)),a=O.g1(Zr(i,10)),s=i.x();s.y();){var o=s.z(),u=sS(n,o);a.n(u)}return a}function xg(n,r){return oS(n,r)?lt(n,C(r)):n}function Sg(n){return Xp(lS(n))}function Eg(n,r,e){return e=e===l?32:e,b(uS(Os(n)?n:m(),r,e))}function ut(n){return C(n)-1|0}function ft(n){var r;r:{for(var e=0;e<C(n);){var t=Q(n,e);if(e=e+1|0,!oc(t)){r=!1;break r}}r=!0}return r}function eS(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?v2(n,r):Ll(n,C(n)-C(r)|0,r,0,C(r),e)}function tS(n,r,e,t){e=e===l?ut(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ka([r]);i=fS(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function Oo(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=pc(n,r,e,C(n),t):i=n.indexOf(r,e),i}function pc(n,r,e,t,i,a){a=a===l?!1:a;var s=a?Gb(Ct(e,ut(n)),dn(t,0)):Fe(dn(e,0),Ct(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,f=s.s1_1,c=s.t1_1;if(c>0&&u<=f||c<0&&f<=u)do{var v=u;if(u=u+c|0,uc(r,0,n,v,r.length,i))return v}while(v!==f)}else{var h=s.r1_1,d=s.s1_1,p=s.t1_1;if(p>0&&h<=d||p<0&&d<=h)do{var g=h;if(h=h+p|0,Ll(r,0,n,g,C(r),i))return g}while(g!==d)}return-1}function Ig(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=Q(n,i),s=oc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Dn(n,r,e+1|0)}function iS(n,r,e,t){_c(t);var i=0,a=Oo(n,r,i,e);if(a===-1||t===1)return Nn(b(n));var s=t>0,o=O.g1(s?Ct(t,10):10);r:do{var u=i,f=a,c=b(Dn(n,u,f));if(o.n(c),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=Oo(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(Dn(n,v,h));return o.n(d),o}function aS(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,_c(i),new kp(n,e,i,pS(r,t))}function sS(n,r){return b(Dn(n,r.jf(),r.kf()+1|0))}function oS(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Ce(n,r):Ll(n,0,r,0,C(r),e)}function lS(n){return new Sp(n)}function uS(n,r,e){if(e=e===l?32:e,r<0)throw B.v("Desired length "+r+" is less than zero.");if(r<=C(n))return Dn(n,0,C(n));var t=Qr.ja(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.ga(e)}while(s!==a);return t.g(n),t}function Ll(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!Dl(Q(n,r+o|0),Q(e,t+o|0),a))return!1}while(s<i);return!0}function fS(n,r,e,t){e=e===l?ut(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Kp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=Ct(e,ut(n));if(0<=o)do{var u=o;o=o+-1|0;var f=Q(n,u),c;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Dl(d,f,t)){c=!0;break r}}c=!1}if(c)return u}while(0<=o);return-1}function _c(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw B.v(b(r))}return or}function _h(n){if(n.ti_1<0)n.ri_1=0,n.ui_1=null;else{var r,e;if(n.wi_1.zi_1>0?(n.vi_1=n.vi_1+1|0,e=n.vi_1>=n.wi_1.zi_1):e=!1,e?r=!0:r=n.ti_1>C(n.wi_1.xi_1),r)n.ui_1=Fe(n.si_1,ut(n.wi_1.xi_1)),n.ti_1=-1;else{var t=n.wi_1.aj_1(n.wi_1.xi_1,n.ti_1);if(t==null)n.ui_1=Fe(n.si_1,ut(n.wi_1.xi_1)),n.ti_1=-1;else{var i=t.nh(),a=t.oh();n.ui_1=Wf(n.si_1,i),n.si_1=i+a|0,n.ti_1=n.si_1+(a===0?1:0)|0}}n.ri_1=1}}function zg(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Kp(r),s=yr(a);return n.indexOf(s,e)}var o=dn(e,0),u=ut(n);if(o<=u)do{var f=o;o=o+1|0;var c=Q(n,f),v;r:{for(var h=0,d=r.length;h<d;){var p=r[h];if(h=h+1|0,Dl(p,c,t)){v=!0;break r}}v=!1}if(v)return f}while(f!==u);return-1}function Ml(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ka([r]);i=zg(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function cS(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function vS(n,r,e){e=e===l?n:e;var t=Ml(n,r);return t===-1?e:oe(n,0,t)}function hS(n,r,e){e=e===l?n:e;var t=Ml(n,r);return t===-1?e:oe(n,t+1|0,n.length)}function dS(n,r,e,t){e=e===l?ut(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=pc(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function pS(n,r){return(e,t)=>{var i=zg(e,n,t,r);return i<0?null:A(i,1)}}function kn(n){return As(n,1)}function gc(n){return(Xr(n)&1)===0}function Cg(n){return(Xr(n)&1)===1}function _S(n){return gc(n)?To():jo()}var k1;function Wr(){return k1===l&&new Ep,k1}function qg(n){var r=an(kn(n)),e=Xr(n)&1;return CS(r,e)}function gS(n,r){var e,t=Xr(n)&1;if(t===(Xr(r)&1)){var i;if(gc(n))i=qS(dr(kn(n),kn(r)));else{var a=mc(kn(n),kn(r)),s;if(ir(a,new w(-16162,2147483647)))throw B.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new w(-1,1073741823))||ir(a,new w(1,-1073741824))?s=At(a):s=AS(a),i=s}e=i}else Cg(n)?e=gh(n,kn(n),kn(r)):e=gh(n,kn(r),kn(n));return e}function gh(n,r,e){var t=Ng(e),i=mc(r,t),a;if(tr(new w(1108857478,-1074),i)<=0&&tr(i,new w(-1108857478,1073))<=0){var s=Hr(e,Po(t));a=Jl(dr(Po(i),s))}else a=At(i);return a}function Fl(n){return tr(n,new w(0,0))<0}function Ds(n){return ir(n,Wr().lj_1)||ir(n,Wr().mj_1)}function Ag(n){return Fl(n)?qg(n):n}function Tg(n,r){var e=Oe(n,r);if(tr(e,new w(0,0))<0||!(Xr(e)&1))return n.f3(r);var t=Xr(n)&1,i=t-(Xr(r)&1)|0;return Fl(n)?-i|0:i}function mS(n,r){return Tg(n.qj_1,r instanceof Ie?r.qj_1:m())}function yS(n){var r;if(Ds(n))r=0;else{var e=Bg(n),t=qt(e,L(24));r=Xr(t)}return r}function jg(n){var r;if(Ds(n))r=0;else{var e=bS(n),t=qt(e,L(60));r=Xr(t)}return r}function Og(n){var r;if(Ds(n))r=0;else{var e=kS(n),t=qt(e,L(60));r=Xr(t)}return r}function Pg(n){var r;if(Ds(n))r=0;else if(Cg(n)){var e=kn(n),t=qt(e,L(1e3));r=Xr(Po(t))}else{var i=kn(n),a=1e9,s=qt(i,L(a));r=Xr(s)}return r}function $l(n,r){var e=n;return ir(e,Wr().lj_1)?new w(-1,2147483647):ir(e,Wr().mj_1)?new w(0,-2147483648):eg(kn(n),_S(n),r)}function wS(n){return $l(n,cc())}function Bg(n){return $l(n,ig())}function bS(n){return $l(n,tg())}function kS(n){return $l(n,fc())}function xS(n){var r=n,e;if(ir(r,new w(0,0)))e="0s";else if(ir(r,Wr().lj_1))e="Infinity";else if(ir(r,Wr().mj_1))e="-Infinity";else{var t=Fl(n),i=Qr.f();t&&i.ga(45);var a=Ag(n),s=wS(a),o=yS(a),u=jg(a),f=Og(a),c=Pg(a),v=!ir(s,new w(0,0)),h=o!==0,d=u!==0,p=f!==0||c!==0,g=0;if(v&&(i.he(s).ga(100),g=g+1|0),h||v&&(d||p)){var y=g;g=y+1|0,y>0&&i.ga(32),i.ge(o).ga(104)}if(d||p&&(h||v)){var x=g;g=x+1|0,x>0&&i.ga(32),i.ge(u).ga(109)}if(p){var k=g;g=k+1|0,k>0&&i.ga(32),f!==0||v||h||d?vo(n,i,f,c,9,"s",!1):c>=1e6?vo(n,i,c/1e6|0,c%1e6|0,6,"ms",!1):c>=1e3?vo(n,i,c/1e3|0,c%1e3|0,3,"us",!1):i.ge(c).fa("ns")}t&&g>1&&i.ie(1,40).ga(41),e=i.toString()}return e}function vo(n,r,e,t,i,a,s){if(r.ge(e),t!==0){r.ga(46);var o=Eg(t.toString(),i,48),u;r:{var f=C(o)-1|0;if(0<=f)do{var c=f;if(f=f+-1|0,Q(o,c)!==48){u=c;break r}}while(0<=f);u=-1}var v=u+1|0;if(!s&&v<3)r.fe(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.fe(o,0,h)}}r.fa(a)}function SS(n){var r=Qr.f();Fl(n)&&r.ga(45),r.fa("PT");var e=Ag(n),t=Bg(e),i=jg(e),a=Og(e),s=Pg(e),o=t;Ds(n)&&(o=new w(1316134911,2328));var u=!ir(o,new w(0,0)),f=a!==0||s!==0,c=i!==0||f&&u;return u&&r.he(o).ga(72),c&&r.ge(i).ga(77),(f||!u&&!c)&&vo(n,r,a,s,9,"S",!0),r.toString()}function ES(n){return n.hashCode()}function IS(n,r){if(!(r instanceof Ie))return!1;var e=r.qj_1;return!!ir(n,e)}function At(n){var r=Wr(),e=ne(n,1),t=dr(e,L(1));return r.pj(t)}function mh(n,r){var e=ah(new w(-387905,1073741823),To(),r),t;if(tr(an(e),n)<=0&&tr(n,e)<=0)t=Jl(ah(n,r,To()));else if(r.y2(jo())>=0){var i=Ix(n),a=new w(0,-2147483648),s=dr(a,L(1));t=At(Tr(Un(i),S1(zx(Wb(n,s)),r)))}else t=At(Yf(eg(n,r,jo()),new w(1,-1073741824),new w(-1,1073741823)));return t}function zS(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw B.v(t);return Wr().oj_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw B.v(u);return Wr().oj_1}else if(K(n,i)===80)o=TS(n,i+1|0,e);else{if(e)throw B.v("");return Wr().oj_1}var f=o;return s&&!D(new Ie(f),new Ie(Wr().oj_1))?qg(f):f}function CS(n,r){var e=Wr(),t=ne(n,1),i=dr(t,L(r));return e.pj(i)}function qS(n){var r;return tr(new w(387905,-1073741824),n)<=0&&tr(n,new w(-387905,1073741823))<=0?r=Jl(n):r=At(Ng(n)),r}function mc(n,r){var e;if(ir(n,new w(-1,1073741823))||ir(n,new w(1,-1073741824))){var t,i;tr(new w(1,-1073741824),r)<0&&tr(r,new w(-1,1073741823))<0?i=!0:i=tr(Oe(n,r),new w(0,0))>=0,i?t=n:t=new w(-16162,2147483647),e=t}else ir(r,new w(-1,1073741823))||ir(r,new w(1,-1073741824))?e=r:e=Yf(dr(n,r),new w(1,-1073741824),new w(-1,1073741823));return e}function AS(n){var r;return tr(new w(1108857478,-1074),n)<=0&&tr(n,new w(-1108857478,1073))<=0?r=Jl(Po(n)):r=At(Yf(n,new w(1,-1073741824),new w(-1,1073741823))),r}function Ng(n){return qr(n,L(1e6))}function Po(n){return Tr(n,L(1e6))}function Jl(n){return Wr().pj(ne(n,1))}function TS(n,r,e){var t=r;if(t===n.length){if(e)throw B.v("");return Wr().oj_1}var i=new w(0,0),a=new w(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var f;if(s?f=!0:(t=t+1|0,f=t===n.length),f){if(e)throw B.v("");return Wr().oj_1}s=!0;continue r}var c=t,v,h=Ug().tj_1,d=t,p;n:{var g=1,y=d;if(OS(h)){var x=K(n,y);x===45?(g=-1,y=y+1|0):x===43&&(y=y+1|0)}var k=y;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}y=k;var I=new w(0,0);e:for(;y<n.length;){var z=K(n,y);if(!(48<=z&&z<=57))break e;var q=se(z,48);if(tr(I,yh(h))>0||ir(I,yh(h))&&tr(L(q),PS(h))>0){var T=y;t:for(;;){var P;if(T<n.length){var $=K(n,T);P=48<=$?$<=57:!1}else P=!1;if(!P)break t;T=T+1|0}y=T;var j=y,U=g;if(t=j,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw B.v("");return Wr().oj_1}v=U,p=jS(h);break n}var J=I,M=dr(ne(J,3),ne(J,1));I=dr(M,L(q)),y=y+1|0}var F=y,R=g;if(t=F,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw B.v("");return Wr().oj_1}v=R,p=I}var X=p;if(K(n,t)===46){t=t+1|0;var H=t,er=H,Z=er,W=Z+6|0,sr=n.length,ur=Math.min(W,sr),rr=0;n:for(;Z<ur;){var Er=K(n,Z);if(!(48<=Er&&Er<=57))break n;var Ir=rr;rr=((Ir<<3)+(Ir<<1)|0)+se(Er,48)|0,Z=Z+1|0}var mr=6-(Z-er|0)|0,zr=0;if(zr<mr)do{zr=zr+1|0;var br=rr;rr=(br<<3)+(br<<1)|0}while(zr<mr);H=Z;var Cr=rr,Rr=H,pr=Rr,Yr=pr+9|0,sn=n.length,Gr=Math.min(Yr,sn),_r=0;n:for(;pr<Gr;){var Mr=K(n,pr);if(!(48<=Mr&&Mr<=57))break n;var $r=_r;_r=(($r<<3)+($r<<1)|0)+se(Mr,48)|0,pr=pr+1|0}var nn=9-(pr-Rr|0)|0,Fr=0;if(Fr<nn)do{Fr=Fr+1|0;var on=_r;_r=(on<<3)+(on<<1)|0}while(Fr<nn);H=pr;var ln=_r,mn=H;n:for(;;){var bn;if(mn<n.length){var ye=K(n,mn);bn=48<=ye?ye<=57:!1}else bn=!1;if(!bn)break n;mn=mn+1|0}H=mn;var Mn=H;if(Mn===t||Mn===n.length||K(n,Mn)!==83){if(e)throw B.v("");return Wr().oj_1}t=Mn;var Zn=L(Cr),we=1e9,Fn=Tr(Zn,L(we)),be=dr(Fn,L(ln));a=Tr(Un(v),BS(be,fc()))}var je=NS(n,t),Ne;if(je==null){var Ue="Unknown duration unit short name: "+yr(K(n,t));if(e)throw B.v(Ue);return Wr().oj_1}else Ne=je;var ke=Ne;if(o!=null&&o.y2(ke)<=0){var An="Unexpected order of duration components";if(e)throw B.v(An);return Wr().oj_1}if(o=ke,ke.equals(cc())){if(s){if(e)throw B.v("");return Wr().oj_1}i=Tr(Un(v),S1(X,ke))}else{if(!s){if(e)throw B.v("");return Wr().oj_1}var In=mc(i,Tr(Un(v),S1(X,ke)));if(ir(In,new w(-16162,2147483647))){if(e)throw B.v("");return Wr().oj_1}i=In}t=t+1|0}return gS(mh(i,jo()),mh(a,To()))}var x1;function Ug(){return x1===l&&new Ip,x1}function jS(n){return n.vj_1}function OS(n){return n.wj_1}function yh(n){return n.xj_1}function PS(n){return n.yj_1}function BS(n,r){var e=US(r),t=re(n)*e;return Cx(t)}function NS(n,r){var e=K(n,r);return e===68?cc():e===72?ig():e===77?tg():e===83?fc():null}function US(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw xr.o3(b(e))}return r}function S1(n,r){return DS(n,RS(r))}function DS(n,r){var e;if(ir(n,new w(0,0)))e=new w(0,0);else if(ir(n,new w(1,0)))e=ku(r,new w(-1,1073741823));else if(ir(r,new w(1,0)))e=ku(n,new w(-1,1073741823));else{var t=(128-Mv(n)|0)-Mv(r)|0;e=t<63?Tr(n,r):t>63?new w(-1,1073741823):ku(Tr(n,r),new w(-1,1073741823))}return e}function RS(n){var r;switch(n.x2_1){case 6:r=new w(864e5,0);break;case 5:r=new w(36e5,0);break;case 4:r=new w(6e4,0);break;case 3:r=new w(1e3,0);break;case 2:r=new w(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw xr.o3(b(e))}return r}function ho(){return Wn(),Dg}var Dg;function LS(){return Wn(),Rg}var Rg;function MS(){return Wn(),Lg}var Lg;function FS(){return Wn(),Mg}var Mg,E1;function Et(){return E1===l&&new zp,E1}function $S(n){Wn();var r=Qr.f(),e=Fg.ik(n),t=e.jk_1;if(qx(t)<1e3){var i=Qr.f();t>=0?i.ge(t+1e4|0).le(0):i.ge(t-1e4|0).le(1),r.g(i)}else t>=1e4&&r.ga(43),r.ge(t);if(r.ga(45),Va(r,r,e.kk_1),r.ga(45),Va(r,r,e.lk_1),r.ga(84),Va(r,r,e.mk_1),r.ga(58),Va(r,r,e.nk_1),r.ga(58),Va(r,r,e.ok_1),e.pk_1!==0){r.ga(46);for(var a=0;!(e.pk_1%ho()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.pk_1/ho()[a]|0;r.fa(lt((s+ho()[9-a|0]|0).toString(),1))}return r.ga(90),r.toString()}function JS(n){Wn();var r=n,e=0;if(C(r)===0)return new Lf("An empty string is not a valid Instant",n);var t=Q(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var f=Q(r,e);u=48<=f?f<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+se(Q(r,e),48)|0,e=e+1|0}var c=e-s|0,v;if(c>10)return un(n,"Expected at most 10 digits for the year number, got "+c+" digits");if(c===10&&pn(Q(r,s),50)>=0)return un(n,"Expected at most 9 digits for the year number or year 1000000000, got "+c+" digits");if(c<4)return un(n,"The year number must be padded to 4 digits, got "+c+" digits");if(a===43&&c===4)return un(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&c!==4)return un(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return un(n,"The input string is too short");var d=e,p=Zi(n,"'-'",d,GS);if(p!=null)return p;var g=e+3|0,y=Zi(n,"'-'",g,KS);if(y!=null)return y;var x=e+6|0,k=Zi(n,"'T' or 't'",x,WS);if(k!=null)return k;var S=e+9|0,I=Zi(n,"':'",S,YS);if(I!=null)return I;var z=e+12|0,q=Zi(n,"':'",z,ZS);if(q!=null)return q;for(var T=LS(),P=0,$=T.length;P<$;){var j=T[P];P=P+1|0;var U=e+j|0,J=Zi(n,"an ASCII digit",U,VS);if(J!=null)return J}var M=yt(r,e+1|0),F=yt(r,e+4|0),R=yt(r,e+7|0),X=yt(r,e+10|0),H=yt(r,e+13|0),er;if(Q(r,e+15|0)===46){var Z=e+16|0;e=Z;var W=0;r:for(;;){var sr;if(e<C(r)){var ur=Q(r,e);sr=48<=ur?ur<=57:!1}else sr=!1;if(!sr)break r;W=lr(W,10)+se(Q(r,e),48)|0,e=e+1|0}var rr=e-Z|0,Er;if(1<=rr&&rr<=9)Er=lr(W,ho()[9-rr|0]);else return un(n,"1..9 digits are supported for the fraction of the second, got "+rr+" digits");er=Er}else e=e+15|0,er=0;var Ir=er;if(e>=C(r))return un(n,"The UTC offset at the end of the string is missing");var mr=Q(r,e),zr;if(mr===122||mr===90){var br;if(C(r)===(e+1|0))br=0;else return un(n,"Extra text after the instant at position "+(e+1|0));zr=br}else if(mr===45||mr===43){var Cr=C(r)-e|0;if(Cr>9){var Rr=e,pr=C(r),Yr=b(Dn(r,Rr,pr));return un(n,'The UTC offset string "'+yc(Yr,16)+'" is too long')}if(Cr%3|0){var sn=e,Gr=C(r),_r=b(Dn(r,sn,Gr));return un(n,'Invalid UTC offset string "'+_r+'"')}var Mr=MS(),$r=0,nn=Mr.length;r:for(;$r<nn;){var Fr=Mr[$r];if($r=$r+1|0,(e+Fr|0)>=C(r))break r;if(Q(r,e+Fr|0)!==58)return un(n,"Expected ':' at index "+(e+Fr|0)+", got '"+yr(Q(r,e+Fr|0))+"'")}var on=FS(),ln=0,mn=on.length;r:for(;ln<mn;){var bn=on[ln];if(ln=ln+1|0,(e+bn|0)>=C(r))break r;var ye=Q(r,e+bn|0);if(!(48<=ye&&ye<=57))return un(n,"Expected an ASCII digit at index "+(e+bn|0)+", got '"+yr(Q(r,e+bn|0))+"'")}var Mn=yt(r,e+1|0),Zn;Cr>3?Zn=yt(r,e+4|0):Zn=0;var we=Zn,Fn;Cr>6?Fn=yt(r,e+7|0):Fn=0;var be=Fn;if(we>59)return un(n,"Expected offset-minute-of-hour in 0..59, got "+we);if(be>59)return un(n,"Expected offset-second-of-minute in 0..59, got "+be);if(Mn>17&&!(Mn===18&&we===0&&be===0)){var je=e,Ne=C(r),Ue=b(Dn(r,je,Ne));return un(n,"Expected an offset in -18:00..+18:00, got "+Ue)}zr=lr((lr(Mn,3600)+lr(we,60)|0)+be|0,mr===45?-1:1)}else return un(n,"Expected the UTC offset at position "+e+", got '"+yr(mr)+"'");var ke=zr;if(!(1<=M&&M<=12))return un(n,"Expected a month number in 1..12, got "+M);if(!(1<=F&&F<=HS(M,wh(h))))return un(n,"Expected a valid day-of-month for month "+M+" of year "+h+", got "+F);if(R>23)return un(n,"Expected hour in 0..23, got "+R);if(X>59)return un(n,"Expected minute-of-hour in 0..59, got "+X);if(H>59)return un(n,"Expected second-of-minute in 0..59, got "+H);var An=new Mf(h,M,F,R,X,H,Ir),In=L(An.jk_1),Tn=Tr(Un(365),In);if(tr(In,new w(0,0))>=0){var Ma=Tn,Ut=dr(In,L(3)),dt=qr(Ut,L(4)),pt=dr(In,L(99)),Dt=qr(pt,L(100)),Ui=Hr(dt,Dt),_t=dr(In,L(399)),Di=qr(_t,L(400));Tn=dr(Ma,dr(Ui,Di))}else{var De=Tn,Fa=qr(In,L(-4)),gt=qr(In,L(-100)),Rt=Hr(Fa,gt),Ri=qr(In,L(-400));Tn=Hr(De,dr(Rt,Ri))}var $a=Tn,Li=(lr(367,An.kk_1)-362|0)/12|0;Tn=dr($a,L(Li));var Lt=Tn,Ja=An.lk_1-1|0;if(Tn=dr(Lt,L(Ja)),An.kk_1>2){var Ha=Tn;if(Tn=Hr(Ha,nt()),!wh(An.jk_1)){var Mi=Tn;Tn=Hr(Mi,nt())}}var Fi=Tn,Mt=Hr(Fi,L(719528)),Ft=(lr(An.mk_1,3600)+lr(An.nk_1,60)|0)+An.ok_1|0,$t=Tr(Mt,L(86400)),$i=dr($t,L(Ft)),Ji=Hr($i,L(ke)),mt=An.pk_1;return new Cp(Ji,mt)}var Fg;function yc(n,r){Wn();var e;return C(n)<=r?e=b(n):e=b(Dn(n,0,r))+"...",e}function HS(n,r){switch(Wn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function wh(n){return Wn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Va(n,r,e){e<10&&n.ga(48),r.ge(e)}function un(n,r){return new Lf(r+' when parsing an Instant from "'+yc(n,64)+'"',n)}function Zi(n,r,e,t){var i=Q(n,e),a;return t(new zn(i))?a=null:a=un(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function GS(n){return Wn(),D(n,new zn(45))}function KS(n){return Wn(),D(n,new zn(45))}function WS(n){return Wn(),D(n,new zn(84))||D(n,new zn(116))}function YS(n){return Wn(),D(n,new zn(58))}function ZS(n){return Wn(),D(n,new zn(58))}function VS(n){Wn();var r=n.x1_1;return 48<=r?r<=57:!1}function yt(n,r){return lr(se(Q(n,r),48),10)+se(Q(n,r+1|0),48)|0}var bh;function Wn(){bh||(bh=!0,Dg=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),Rg=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Lg=new Int32Array([3,6]),Mg=new Int32Array([1,2,4,5,7,8]))}function Pu(){return Jg(),$g}var $g;function XS(n,r){return Jg(),new jp(n.al_1,r).fl()}var kh;function Jg(){if(!kh){kh=!0;var n=ws();$g=n}}var xh;function QS(){if(xh)return or;xh=!0,Hg=new Op("PUBLICATION",1)}var Hg,po;function _o(){return QS(),Hg}function rE(n){var r=n;return!(r instanceof Ot)}function Gg(n){var r;return n instanceof Ot?r=n.kl_1:r=null,r}function nE(n){var r;return n instanceof Ot?r=n.toString():r="Success("+he(n)+")",r}function eE(n){return n==null?0:Sr(n)}function tE(n,r){if(!(r instanceof oi))return!1;var e=r.ll_1;return!!D(n,e)}function iE(n){var r=n;if(r instanceof Ot)throw n.kl_1}function Kg(n){return new Ot(n)}function A(n,r){return new Tl(n,r)}var I1;function Rs(){return I1===l&&new Bp,I1}function aE(n,r){return n.length<=r?n:oe(n,0,r)+"..."}function Vn(n,r,e){throw B.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var z1;function Hl(){return z1===l&&new Np,z1}function Wg(n,r){var e=n&255,t=r&255;return Be(e,t)}function sE(n,r){return Wg(n.vl_1,r instanceof $e?r.vl_1:m())}function C1(n){return(n&255).toString()}function oE(n,r){return!(!(r instanceof $e)||n!==r.vl_1)}function Sh(n){return new Int8Array(n)}function lE(n,r){var e=n[r];return e}function uE(n,r,e){var t=n;t[r]=e}function pi(n){return n.length}function fE(n){return new Up(n)}function Yg(n,r){var e=n,t=r;return pb(e,t)}function cE(n,r){return r instanceof $e?Yg(n.am_1,r instanceof $e?r.vl_1:m()):!1}function vE(n){return n.length===0}function hE(n){return"UByteArray(storage="+b(n)+")"}function dE(n){return Sr(n)}function pE(n,r){if(!(r instanceof ui))return!1;var e=r.am_1;return!!D(n,e)}var q1;function Gl(){return q1===l&&new Dp,q1}function Zg(n,r){return oa(n,r)}function _E(n,r){return Zg(n.gm_1,r instanceof ee?r.gm_1:m())}function A1(n){return(n>>>0).toString()}function gE(n,r){return!(!(r instanceof ee)||n!==r.gm_1)}function Eh(n){return new Int32Array(n)}function mE(n,r){var e=n[r];return e}function yE(n,r,e){var t=n;t[r]=e}function _i(n){return n.length}function wE(n){return new Rp(n)}function Vg(n,r){var e=n,t=r;return _b(e,t)}function bE(n,r){return r instanceof ee?Vg(n.lm_1,r instanceof ee?r.gm_1:m()):!1}function kE(n){return n.length===0}function xE(n){return"UIntArray(storage="+b(n)+")"}function SE(n){return Sr(n)}function EE(n,r){if(!(r instanceof fi))return!1;var e=r.lm_1;return!!D(n,e)}var T1;function Ls(){return T1===l&&new Lp,T1}function Xg(n,r){return St(n,r)}function IE(n,r){return Xg(n.rm_1,r instanceof te?r.rm_1:m())}function j1(n){var r=n;return Xk(r,10)}function zE(n){return n.hashCode()}function CE(n,r){if(!(r instanceof te))return!1;var e=r.rm_1;return!!ir(n,e)}function Ih(n){return bi(n)}function qE(n,r){var e=n[r];return e}function AE(n,r,e){var t=n;t[r]=e}function gi(n){return n.length}function TE(n){return new Mp(n)}function Qg(n,r){var e=n,t=r;return gb(e,t)}function jE(n,r){return r instanceof te?Qg(n.wm_1,r instanceof te?r.rm_1:m()):!1}function OE(n){return n.length===0}function PE(n){return"ULongArray(storage="+b(n)+")"}function BE(n){return Sr(n)}function NE(n,r){if(!(r instanceof ci))return!1;var e=r.wm_1;return!!D(n,e)}var O1;function Kl(){return O1===l&&new Fp,O1}function rm(n,r){var e=n&65535,t=r&65535;return Be(e,t)}function UE(n,r){return rm(n.cn_1,r instanceof Je?r.cn_1:m())}function P1(n){return(n&65535).toString()}function DE(n,r){return!(!(r instanceof Je)||n!==r.cn_1)}function zh(n){return new Int16Array(n)}function RE(n,r){var e=n[r];return e}function LE(n,r,e){var t=n;t[r]=e}function mi(n){return n.length}function ME(n){return new $p(n)}function nm(n,r){var e=n,t=r;return mb(e,t)}function FE(n,r){return r instanceof Je?nm(n.hn_1,r instanceof Je?r.cn_1:m()):!1}function $E(n){return n.length===0}function JE(n){return"UShortArray(storage="+b(n)+")"}function HE(n){return Sr(n)}function GE(n,r){if(!(r instanceof vi))return!1;var e=r.hn_1;return!!D(n,e)}function em(n){return VE(n,10)}function KE(n){var r=XE(n),e,t=r;return(t==null?null:new ee(t))==null?qa(n):e=r,e}function WE(n){var r=em(n),e,t=r;return(t==null?null:new te(t))==null?qa(n):e=r,e}function YE(n){var r=QE(n),e,t=r;return(t==null?null:new $e(t))==null?qa(n):e=r,e}function ZE(n){var r=rI(n),e,t=r;return(t==null?null:new Je(t))==null?qa(n):e=r,e}function VE(n,r){Ia(r);var e=n.length;if(e===0)return null;var t=new w(-1,-1),i,a=K(n,0);if(pn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new w(477218588,119304647),o=s,u=L(r),f=new w(0,0),c=i;if(c<e)do{var v=c;c=c+1|0;var h=Nl(K(n,v),r);if(h<0)return null;var d=f,p=o;if(St(d,p)>0)if(D(new te(o),new te(s))){o=Vk(t,u);var g=f,y=o;if(St(g,y)>0)return null}else return null;var x=f;f=Tr(x,u);var k=f,S=f,I=h,z=I,q=_s(L(z),new w(-1,0)),T=q;f=dr(S,T);var P=f;if(St(P,k)<0)return null}while(c<e);return f}function XE(n){return wc(n,10)}function QE(n){return nI(n,10)}function rI(n){return eI(n,10)}function wc(n,r){Ia(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(pn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,f=0,c=i;if(c<e)do{var v=c;c=c+1|0;var h=Nl(K(n,v),r);if(h<0)return null;var d=f,p=o;if(oa(d,p)>0)if(D(new ee(o),new ee(s))){o=Zk(t,u);var g=f,y=o;if(oa(g,y)>0)return null}else return null;var x=f;f=lr(x,u);var k=f,S=f,I=h;f=S+I|0;var z=f;if(oa(z,k)<0)return null}while(c<e);return f}function nI(n,r){var e=wc(n,r),t,i=e;if((i==null?null:new ee(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(oa(a,o)>0)return null;var u=a;return $n(u)}function eI(n,r){var e=wc(n,r),t,i=e;if((i==null?null:new ee(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(oa(a,o)>0)return null;var u=a;return ec(u)}Lr(jf,"CharSequence");Lr(Ae,"Comparable");_(ud,"Number");_(fd);_(cd);_(vd);rn(hd);_(zn,"Char",l,l,[Ae]);Lr(Y,"Collection");Lr(Pe,"Set",l,l,[Y]);Lr(qn,"List",l,l,[Y]);Lr(et,"Entry");Lr(wn,"Map");Lr(ca,"MutableMap",l,l,[wn]);rn(Xw);_(le,"Enum",l,l,[Ae]);rn(dd);_(w,"Long",l,l,[Ae]);Lr(Sn,"FunctionAdapter");_(pd);N(Qw,"ByteCompanionObject");N(rb,"ShortCompanionObject");N(nb,"IntCompanionObject");N(eb,"FloatCompanionObject");N(tb,"DoubleCompanionObject");N(ib,"StringCompanionObject");N(ab,"BooleanCompanionObject");N(_d,"Digit");N(gd,"Letter");Lr(gn,"Comparator");N(El,"Unit");_(wa,"AbstractCollection",l,l,[Y]);_(Es,"AbstractMutableCollection",l,l,[Y]);_(Of,"IteratorImpl");_(md,"ListIteratorImpl");_(yd,"AbstractMutableList",l,l,[Y,qn]);_(wd,"AbstractMap",l,l,[wn]);_(bd,"AbstractMutableMap",l,l,[ca]);_(Is,"AbstractMutableSet",l,l,[Pe,Y]);rn(kd);Lr(zs,"RandomAccess");_(O,"ArrayList",O.m,l,[Y,qn,zs]);_(vs,"HashMap",vs.a7,l,[ca]);_(xd,"HashMapKeys",l,l,[Pe,Y]);_(Sd,"HashMapValues",l,l,[Y]);_(Ed,"HashMapEntrySetBase",l,l,[Pe,Y]);_(Id,"HashMapEntrySet");_(zd);_(Cd,"HashMapKeysDefault");_(qd);_(Ad,"HashMapValuesDefault");_(yi,"HashSet",yi.q8,l,[Pe,Y]);rn(Td);_(Il,"Itr");_(jd,"KeysItr");_(Od,"ValuesItr");_(Pd,"EntriesItr");_(Bd,"EntryRef",l,l,[et]);Lr(Nd,"InternalMap");Dr(Me).k8=sb;_(Me,"InternalHashMap",Me.l7,l,[Nd]);N(Ud,"EmptyHolder");_(fr,"LinkedHashMap",fr.t4,l,[ca]);_(Pn,"LinkedHashSet",Pn.e1,l,[Pe,Y]);Lr(st,"Continuation");N(Dd,"CompletedContinuation",l,l,[st]);_(Pf,"InterceptedCoroutine",l,l,[st]);_(Bf,"GeneratorCoroutineImpl",l,l,[st]);_(Rd,l,l,l,[st]);_(hs,"Exception",hs.tb);_(ce,"RuntimeException",ce.nb);_(ve,"UnsupportedOperationException",ve.s6);_(B,"IllegalArgumentException",B.qb);_(Or,"NoSuchElementException",Or.j1);_(Xn,"IndexOutOfBoundsException",Xn.yb);_(xr,"IllegalStateException",xr.ac);_(wo,"ConcurrentModificationException",wo.p9);_(Fu,"ArithmeticException",Fu.ec);_(bo,"Error",bo.kc);_(es,"AssertionError",es.ic);_($u,"NumberFormatException",$u.sc);_(Ju,"NoWhenBranchMatchedException",Ju.s3);_(Hu,"NullPointerException",Hu.w3);_(Gu,"ClassCastException",Gu.a4);Lr(Ve,"KClass");_(ba,"KClassImpl",l,l,[Ve]);_(en,"PrimitiveKClassImpl");N(Nf,"NothingKClassImpl");_(Ku,"SimpleKClassImpl");Lr(Ii,"KProperty1");N(Ld,"PrimitiveClasses");_(Iv,"CharacterCodingException",Iv.ce);_(Qr,"StringBuilder",Qr.f,l,[jf]);rn(Md);_(It,"Regex");_(zl,"MatchGroup");_(Fd,l,l,l,[Y]);_(Uf,"AbstractList",l,l,[qn]);_($d);_(Jd);_(ob,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(bt,"DurationUnit");_(Df,"IteratorImpl");_(Hd,"ListIteratorImpl");rn(Gd);_(Kd);_(Wd);rn(lb);_(Yd,"AbstractSet",l,l,[Pe]);_(Zd);_(Vd);rn(Xd);N(Qd,"EmptyList",l,l,[qn,zs]);N(rp,"EmptyIterator");_(Cl,"IndexedValue");_(np,"IndexingIterable");_(ep,"IndexingIterator");Lr(tp,"MapWithDefault",l,l,[wn]);N(ip,"EmptyMap",l,l,[wn]);_(ap,"IntIterator");_(sp);_(op,"TransformingSequence");Lr(ql,"DropTakeSequence");_(lp);_(Al,"TakeSequence",l,l,[ql]);N(up,"EmptySequence",l,l,[ql]);_(fp);_(Rf,"GeneratorSequence");N(cp,"EmptySet",l,l,[Pe]);N(vp,"NaturalOrderComparator",l,l,[gn]);_(hp,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);N(dp,"Key");Lr(ub,"ContinuationInterceptor");N(pp,"EmptyCoroutineContext");_(_p,"CoroutineSingletons");_(gp,"EnumEntriesList",l,l,[qn,zs]);rn(mp);_(Cs,"IntProgression");Lr(ta,"ClosedRange");_(jt,"IntRange",l,l,[ta]);_(yp,"IntProgressionIterator");rn(wp);_(bp);_(kp,"DelimitedRangesSequence");N(fb,"State");_(xp,"LinesIterator");_(Sp);rn(Ep);_(Ie,"Duration",l,l,[Ae]);rn(Ip);_(Wu,"LongParser");N(cb,"FractionalParser");rn(zp);_(tt,"Instant",l,l,[Ae]);_(Cp,"Success");_(Lf,"Failure");rn(qp);_(Mf,"UnboundLocalDateTime");_(Ff,"InstantFormatException");_(Ap,"DeepRecursiveScope",l,l,l,[1,2]);_(Tp,"DeepRecursiveFunction");_(jp,"DeepRecursiveScopeImpl",l,l,[st],[1,2]);_(Op,"LazyThreadSafetyMode");_($f,"UnsafeLazyImpl");N(Pp,"UNINITIALIZED_VALUE");rn(vb);_(Ot,"Failure");_(oi,"Result");_(zv,"NotImplementedError",zv.hb);_(Tl,"Pair");rn(Bp);_(zt,"Uuid",l,l,[Ae]);rn(Np);_($e,"UByte",l,l,[Ae]);_(Up,"Iterator");_(ui,"UByteArray",l,l,[Y]);rn(Dp);_(ee,"UInt",l,l,[Ae]);_(Rp,"Iterator");_(fi,"UIntArray",l,l,[Y]);rn(Lp);_(te,"ULong",l,l,[Ae]);_(Mp,"Iterator");_(ci,"ULongArray",l,l,[Y]);rn(Fp);_(Je,"UShort",l,l,[Ae]);_($p,"Iterator");_(vi,"UShortArray",l,l,[Y]);or=new El;fo=null;gs=new Td;J_=new Dd;Rn=new Gd;ms=new Xd;ys=new rp;Ul=new up;hg=new vp;y1=new dp;dc=new wp;Fg=new qp;po=new Pp;var Vr=Math.imul;class Wl{}class la{}class cr{}class Gn extends B{static tn(){var r=this.qb();return Bu(r),r}static un(r){var e=this.v(r);return Bu(e),e}static vn(r,e){var t=this.rb(r,e);return Bu(t),t}}class Yl extends Gn{constructor(r,e,t,i){return new.target.do(r,e,t,i)}static do(r,e,t,i){var a=this.vn(r,e);return cn(a,a.co_1),a.ao_1=t,a.bo_1=i,a}eo(r){return Yl.do(r,this,this.ao_1,this.bo_1)}}class _e{}function Ti(){return!1}function ji(){return!1}function Ms(){return hr()}class tm{}class im{constructor(r){this.uo_1=r,this.to_1=r.mo()}y(){return this.to_1>0}z(){var r=this.uo_1.mo(),e=this.to_1;return this.to_1=e-1|0,this.uo_1.ro(r-e|0)}}class am{constructor(r){this.vo_1=r}x(){return new im(this.vo_1)}}class sm{constructor(r){this.wo_1=r,this.xo_1=!1,this.yo_1=hr(),this.zo_1=O.m(),this.ap_1=yi.q8(),this.bp_1=O.m(),this.cp_1=O.m(),this.dp_1=O.m()}ep(r,e,t,i){if(!this.ap_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.wo_1;throw B.v(b(a))}this.zo_1.n(r),this.bp_1.n(e),this.cp_1.n(t),this.dp_1.n(i)}fp(r,e,t,i,a){t=t===l?hr():t,i=i===l?!1:i;var s;return a===l?(this.ep(r,e,t,i),s=or):s=a.ep.call(this,r,e,t,i),s}}class Fs{}class Ta{constructor(r,e,t,i,a){this.gp_1=r,this.hp_1=e,this.ip_1=t,this.jp_1=a.yo_1,this.kp_1=Bb(a.zo_1);var s=this,o=a.zo_1;s.lp_1=Ei(o),this.mp_1=J1(a.bp_1);var u=this,f=a.cp_1;u.np_1=Ei(f),this.op_1=Nb(a.dp_1);for(var c=this,v=zb(this.lp_1),h=O.g1(Zr(v,10)),d=v.x();d.y();){var p=d.z(),g=A(p.dh_1,p.ch_1);h.n(g)}c.pp_1=og(h),this.qp_1=J1(i);var y=this;y.rp_1=G_(CI(this))}io(){return this.gp_1}jo(){return this.hp_1}mo(){return this.ip_1}no(){return this.jp_1}sp(){return this.kp_1}oo(r){return ua(this.lp_1,r)}po(r){var e=this.pp_1.o2(r);return e??-3}qo(r){return ua(this.np_1,r)}ro(r){return ua(this.mp_1,r)}so(r){return D0(this.op_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ta)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!tc(this.qp_1,r.qp_1)){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,i=this.mo();if(t<i)do{var a=t;if(t=t+1|0,this.ro(a).io()!==r.ro(a).io()){e=!1;break r}if(!D(this.ro(a).jo(),r.ro(a).jo())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return I0(this)}toString(){return O0(this)}}class ja{toString(){return fn(Nr(this).uc())}hashCode(){return fe(this.toString())}}class Zl extends ja{constructor(){Bo=null,super(),Bo=this}}class om extends ja{constructor(){No=null,super(),No=this}}class $s extends ja{}class lm extends $s{constructor(){Uo=null,super(),Uo=this}}class um extends $s{constructor(){Do=null,super(),Do=this}}class fm extends $s{constructor(){Ro=null,super(),Ro=this}}class cm extends $s{constructor(){Lo=null,super(),Lo=this}}class Yn extends ja{}class vm extends Yn{constructor(){Mo=null,super(),Mo=this}}class hm extends Yn{constructor(){Fo=null,super(),Fo=this}}class dm extends Yn{constructor(){$o=null,super(),$o=this}}class pm extends Yn{constructor(){Jo=null,super(),Jo=this}}class _m extends Yn{constructor(){Ho=null,super(),Ho=this}}class gm extends Yn{constructor(){Go=null,super(),Go=this}}class mm extends Yn{constructor(){Ko=null,super(),Ko=this}}class ym extends Yn{constructor(){Wo=null,super(),Wo=this}}class wm extends Yn{constructor(){Yo=null,super(),Yo=this}}class Oa extends ja{}class bm extends Oa{constructor(){Zo=null,super(),Zo=this}}class Vl{}function km(n){return n.ln(this)}class Xl{}function xm(){return!1}function Sm(n){return-1}function Em(n,r,e,t,i){return t=t===l?null:t,i===l?this.tq(n,r,e,t):i.tq.call(this,n,r,e,t)}class Oi{tp(){throw Gn.un(b(Nr(this))+" can't retrieve untyped values")}up(){return!0}vp(){return null}wp(){var r=this.tp();return typeof r=="boolean"?r:m()}xp(){var r=this.tp();return typeof r=="number"?r:m()}yp(){var r=this.tp();return typeof r=="number"?r:m()}zp(){var r=this.tp();return typeof r=="number"?r:m()}aq(){var r=this.tp();return r instanceof w?r:m()}bq(){var r=this.tp();return typeof r=="number"?r:m()}cq(){var r=this.tp();return typeof r=="number"?r:m()}dq(){var r=this.tp();return r instanceof zn?r.x1_1:m()}eq(){var r=this.tp();return typeof r=="string"?r:m()}fq(r){return this}gq(r,e){return this.hq(r)}iq(r){return this}jq(r){}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.yp()}nq(r,e){return this.zp()}oq(r,e){return this.aq()}pq(r,e){return this.bq()}qq(r,e){return this.cq()}rq(r,e){return this.dq()}sq(r,e){return this.fq(r.ro(e))}tq(r,e,t,i){return this.gq(t,i)}}class bc{}function tI(n,r){return this.iq(n)}function iI(n,r){n.kn(this,r)}class Js{static zq(){return qi(this)}iq(r){return this}jq(r){}ar(r,e){return!0}br(r){throw Gn.un("Non-serializable "+b(Nr(r))+" is not supported by "+b(Nr(this))+" encoder")}cr(){throw Gn.un("'null' is not supported by default")}dr(r){return this.br(r)}er(r){return this.br(r)}fr(r){return this.br(r)}gr(r){return this.br(r)}hr(r){return this.br(r)}ir(r){return this.br(r)}jr(r){return this.br(r)}kr(r){return this.br(new zn(r))}lr(r){return this.br(r)}mr(r){return this}nr(r,e,t){this.ar(r,e)&&this.dr(t)}or(r,e,t){this.ar(r,e)&&this.er(t)}pr(r,e,t){this.ar(r,e)&&this.fr(t)}qr(r,e,t){this.ar(r,e)&&this.gr(t)}rr(r,e,t){this.ar(r,e)&&this.hr(t)}sr(r,e,t){this.ar(r,e)&&this.ir(t)}tr(r,e,t){this.ar(r,e)&&this.jr(t)}ur(r,e,t){this.ar(r,e)&&this.kr(t)}vr(r,e){return this.ar(r,e)?this.mr(r.ro(e)):VI()}wr(r,e,t,i){this.ar(r,e)&&this.xr(t,i)}}class ma{on(r,e){return r.vq().zr(this.nn(),e)}mn(r,e){return r.vq().as(this.nn(),e)}}class Im{constructor(){D1=this,this.bs_1=XI()}jn(){return this.bs_1}cs(r,e){throw Gn.un("'kotlin.Nothing' cannot be serialized")}kn(r,e){var t;return t=m(),this.cs(r,t)}ln(r){throw Gn.un("'kotlin.Nothing' does not have instances")}}class zm{constructor(){R1=this,this.ds_1=new En("kotlin.time.Duration",Na())}jn(){return this.ds_1}es(r,e){r.lr(SS(e))}kn(r,e){return this.es(r,e instanceof Ie?e.qj_1:m())}fs(r){return Wr().rj(r.eq())}ln(r){return new Ie(this.fs(r))}}class Cm{constructor(){L1=this,this.gs_1=new En("kotlin.time.Instant",Na())}jn(){return this.gs_1}hs(r,e){r.lr(e.toString())}kn(r,e){return this.hs(r,e instanceof tt?e:m())}ln(r){return Et().dk(r.eq())}}class qm{constructor(){M1=this,this.is_1=new En("kotlin.uuid.Uuid",Na())}jn(){return this.is_1}js(r,e){r.lr(e.toString())}kn(r,e){return this.js(r,e instanceof zt?e:m())}ln(r){return Rs().ml(r.eq())}}class Nt{constructor(r){this.ms_1=r,this.ns_1=1}jo(){return Gs()}mo(){return this.ns_1}oo(r){return kt(r,this.io()),r.toString()}po(r){var e=Rl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}so(r){return kt(r,this.io()),!1}qo(r){return kt(r,this.io()),hr()}ro(r){return kt(r,this.io()),this.ms_1}equals(r){return this===r?!0:r instanceof Nt?!!(D(this.ms_1,r.ms_1)&&this.io()===r.io()):!1}hashCode(){return Vr(Sr(this.ms_1),31)+fe(this.io())|0}toString(){return this.io()+"("+b(this.ms_1)+")"}}class Am extends Nt{io(){return"kotlin.collections.ArrayList"}}class Pi{constructor(r,e,t){this.os_1=r,this.ps_1=e,this.qs_1=t,this.rs_1=2}io(){return this.os_1}jo(){return tu()}mo(){return this.rs_1}oo(r){return kt(r,this.io()),r.toString()}po(r){var e=Rl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}so(r){return kt(r,this.io()),!1}qo(r){return kt(r,this.io()),hr()}ro(r){kt(r,this.io());var e;switch(r%2|0){case 0:e=this.ps_1;break;case 1:e=this.qs_1;break;default:var t="Unreached";throw xr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Pi)||this.io()!==r.io()||!D(this.ps_1,r.ps_1)||!D(this.qs_1,r.qs_1))}hashCode(){var r=fe(this.io());return r=Vr(31,r)+Sr(this.ps_1)|0,r=Vr(31,r)+Sr(this.qs_1)|0,r}toString(){return this.io()+"("+b(this.ps_1)+", "+b(this.qs_1)+")"}}class Tm extends Pi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class jm extends Nt{constructor(r){super(r),this.us_1=r.io()+"Array"}io(){return this.us_1}}class kc{ot(r,e){var t=r.iq(this.jn()),i=t.yq(this.jn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw B.v(b(a))}var s;e!=null?s=this.dt(e,this.tt(e)+dn(i,0)|0):s=this.xs(i);var o=s,u=this.zs(o);if(t.wq())this.lt(t,o,u,i);else r:for(;;){var f=t.xq(this.jn());if(f===-1)break r;this.nt(t,u+f|0,o)}return t.jq(this.jn()),this.bt(o)}ln(r){return this.ot(r,null)}nt(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.mt(r,e,t,i),s=or):s=a.mt.call(this,r,e,t,i),s}}class xc extends kc{constructor(r){super(),this.jt_1=r}kt(r,e){var t=this.tt(e),i=this.jn(),a=r.yr(i,t),s=this.vt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.wr(this.jn(),u,this.jt_1,s.z())}while(o<t);a.jq(i)}kn(r,e){return this.kt(r,e)}lt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw B.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.mt(r,t+o|0,e,!1)}while(s<i)}mt(r,e,t,i){this.ft(t,e,r.uq(this.jn(),e,this.jt_1))}}class Om extends xc{ht(r){return r.c1()}tt(r){return this.ht(r!=null&&E(r,Y)?r:m())}it(r){return r.x()}vt(r){return this.it(r!=null&&E(r,Y)?r:m())}}class Pm extends Om{constructor(r){super(r),this.ws_1=new Am(r.jn())}jn(){return this.ws_1}xs(r){return r===-1?O.m():O.g1(r)}ys(r){return r.c1()}zs(r){return this.ys(r instanceof O?r:m())}at(r){return r}bt(r){return this.at(r instanceof O?r:m())}ct(r,e){if(r instanceof O)return r.n6(e),r;if(e===r.c1())return O.f1(r);var t=O.g1(e);return t.h1(r),t}dt(r,e){return this.ct(r!=null&&E(r,qn)?r:m(),e)}et(r,e,t){r.o5(e,t)}ft(r,e,t){return this.et(r instanceof O?r:m(),e,t)}}class Bm extends kc{constructor(r,e){super(),this.zt_1=r,this.au_1=e}bu(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw B.v(b(a))}var s=Kb(Wf(0,Vr(i,2)),2),o=s.r1_1,u=s.s1_1,f=s.t1_1;if(f>0&&o<=u||f<0&&u<=o)do{var c=o;o=o+f|0,this.cu(r,t+c|0,e,!1)}while(c!==u)}lt(r,e,t,i){return this.bu(r,e!=null&&E(e,ca)?e:m(),t,i)}cu(r,e,t,i){var a=r.uq(this.jn(),e,this.zt_1),s;if(i){var o=r.xq(this.jn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw B.v(b(u))}s=o}else s=e+1|0;var f=s,c,v;if(t.m2(a)){var h=this.au_1.jn().jo();v=!(h instanceof Yn)}else v=!1;v?c=r.tq(this.jn(),f,this.au_1,ze(t,a)):c=r.uq(this.jn(),f,this.au_1);var d=c;t.s2(a,d)}mt(r,e,t,i){return this.cu(r,e,t!=null&&E(t,ca)?t:m(),i)}kt(r,e){for(var t=this.tt(e),i=this.jn(),a=r.yr(i,t),s=this.vt(e),o=0,u=s;u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=this.jn(),d=o;o=d+1|0,a.wr(h,d,this.zt_1,c);var p=this.jn(),g=o;o=g+1|0,a.wr(p,g,this.au_1,v)}a.jq(i)}kn(r,e){return this.kt(r,e)}}class Nm extends Bm{constructor(r,e){super(r,e),this.rt_1=new Tm(r.jn(),e.jn())}jn(){return this.rt_1}st(r){return r.c1()}tt(r){return this.st(r!=null&&E(r,wn)?r:m())}ut(r){return r.r2().x()}vt(r){return this.ut(r!=null&&E(r,wn)?r:m())}xs(r){return r===-1?fr.t4():Ch(r)}wt(r){return Vr(r.c1(),2)}zs(r){return this.wt(r instanceof fr?r:m())}xt(r){return r}bt(r){return this.xt(r instanceof fr?r:m())}yt(r,e){if(r instanceof fr)return r;if(e<=r.c1())return fr.oa(r);var t=Ch(e);return t.u2(r),t}dt(r,e){return this.yt(r!=null&&E(r,wn)?r:m(),e)}}class ge extends xc{constructor(r){super(r),this.eu_1=new jm(r.jn())}jn(){return this.eu_1}fu(r){return r.gu()}zs(r){return this.fu(r instanceof Ln?r:m())}hu(r){return r.iu()}bt(r){return this.hu(r instanceof Ln?r:m())}ju(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw xr.o3(b(e))}vt(r){return this.ju(r)}ku(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw xr.o3(b(i))}ft(r,e,t){return this.ku(r instanceof Ln?r:m(),e,t)}xs(r){return r===-1?this.lu():this.mu(r)}pu(r,e){var t=this.tt(e),i=this.eu_1,a=r.yr(i,t);this.ou(a,e,t),a.jq(i)}kn(r,e){return this.pu(r,e)}kt(r,e){return this.pu(r,e)}ln(r){return this.ot(r,null)}}class Ln{static qu(){return qi(this)}su(r,e){r=r===l?this.gu()+1|0:r;var t;return e===l?(this.ru(r),t=or):t=e.ru.call(this,r),t}}let Um=class{constructor(){F1=this,this.tu_1=bi(0)}};class Dm{constructor(r,e){qh(),this.uu_1=r,this.vu_1=e;var t=this.uu_1.mo();if(t<=64){var i=this,a;t===64?a=new w(0,0):a=ne(new w(-1,-1),t),i.wu_1=a,this.xu_1=qh().tu_1}else this.wu_1=new w(0,0),this.xu_1=GI(this,t)}yu(r){r<64?this.wu_1=ki(this.wu_1,ne(new w(1,0),r)):KI(this,r)}zu(){for(var r=this.uu_1.mo();!ir(this.wu_1,new w(-1,-1));){var e=q_(Vf(this.wu_1));if(this.wu_1=ki(this.wu_1,ne(new w(1,0),e)),this.vu_1(this.uu_1,e))return e}return r>64?WI(this):-1}}class Pa{constructor(r,e,t){e=e===l?null:e,this.nv_1=r,this.ov_1=e,this.pv_1=t,this.qv_1=-1;for(var i=this,a=0,s=this.pv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.rv_1=o;var u=this,f=this.pv_1;u.sv_1=Array(f),this.tv_1=null,this.uv_1=xo(this.pv_1),this.vv_1=Ar();var c=this,v=_o();c.wv_1=co(v,iz(this));var h=this,d=_o();h.xv_1=co(d,sz(this));var p=this,g=_o();p.yv_1=co(g,lz(this))}io(){return this.nv_1}mo(){return this.pv_1}jo(){return eu()}no(){var r=this.tv_1;return r??hr()}sp(){return this.vv_1.p2()}zv(){var r=this.xv_1,e=Ii;return Sa("typeParameterDescriptors",1,e,oz(),null),r.l2()}ro(r){return ua(A0(this),r).jn()}so(r){return D0(this.uv_1,r)}qo(r){var e=ua(this.sv_1,r);return e??hr()}oo(r){return ua(this.rv_1,r)}po(r){var e=this.vv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Pa)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!tc(this.zv(),r.zv())){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,i=this.mo();if(t<i)do{var a=t;if(t=t+1|0,this.ro(a).io()!==r.ro(a).io()){e=!1;break r}if(!D(this.ro(a).jo(),r.ro(a).jo())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return T0(this)}toString(){return O0(this)}}class Ql extends Pa{constructor(r,e){super(r,e,1),this.mv_1=!0}lo(){return this.mv_1}hashCode(){return Vr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ql)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!(r.mv_1&&tc(this.zv(),r.zv()))){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,i=this.mo();if(t<i)do{var a=t;if(t=t+1|0,this.ro(a).io()!==r.ro(a).io()){e=!1;break r}if(!D(this.ro(a).jo(),r.ro(a).jo())){e=!1;break r}}while(t<i);e=!0}return e}}class Rm{}function aI(){return P0()}class Sc{constructor(r){this.aw_1=r}bw(){return[this.aw_1]}jn(){var r="unsupported";throw xr.o3(b(r))}kn(r,e){var t="unsupported";throw xr.o3(b(t))}ln(r){var e="unsupported";throw xr.o3(b(e))}}class Lm extends Js{constructor(){return new.target.ew()}static ew(){Vo=null;var r=this.zq();return Vo=r,r.dw_1=iu(),r}vq(){return this.dw_1}br(r){return or}cr(){return or}dr(r){return or}er(r){return or}fr(r){return or}gr(r){return or}hr(r){return or}ir(r){return or}jr(r){return or}kr(r){return or}lr(r){return or}}class Hs{constructor(){$1=this,this.fw_1=Oc(),this.gw_1="kotlin.Nothing"}jo(){return this.fw_1}io(){return this.gw_1}mo(){return 0}oo(r){Xa()}po(r){Xa()}so(r){Xa()}ro(r){Xa()}qo(r){Xa()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return fe(this.gw_1)+Vr(31,this.fw_1.hashCode())|0}}class Mm{}class Fm{constructor(r,e){this.hw_1=e,this.iw_1=hr();var t=this,i=_o();t.jw_1=co(i,rz(r,this))}jn(){var r=this.jw_1,e=Ii;return Sa("descriptor",1,e,nz(),null),r.l2()}kw(r,e){r.iq(this.jn()).jq(this.jn())}kn(r,e){return this.kw(r,e??m())}ln(r){var e=this.jn(),t=r.iq(e);r:{if(t.wq())break r;var i=t.xq(this.jn());if(i===-1)break r;throw Gn.un("Unexpected index "+i)}return t.jq(e),this.hw_1}}class $m extends ge{constructor(){Xo=null,super(b0(Zf())),Xo=this}nw(r){return r.length}tt(r){return this.nw(r!=null&&ss(r)?r:m())}ow(r,e){return e===r.length?Kt.rw(r):Kt.sw(i1(r,e),r.length)}dt(r,e){return this.ow(r!=null&&ss(r)?r:m(),e)}mu(r){return Kt.tw(r)}lu(){return Kt.uw()}vw(r,e,t,i){t.ww(r.rq(this.eu_1,e))}mt(r,e,t,i){return this.vw(r,e,t instanceof Kt?t:m(),i)}nu(r,e,t,i){return this.vw(r,e,t instanceof Kt?t:m(),i)}xw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ur(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.xw(r,e!=null&&ss(e)?e:m(),t)}}class Jm extends ge{constructor(){Qo=null,super(k0()),Qo=this}ax(r){return r.length}tt(r){return this.ax(r!=null&&us(r)?r:m())}bx(r,e){return e===r.length?Wt.ex(r):Wt.fx(a1(r,e),r.length)}dt(r,e){return this.bx(r!=null&&us(r)?r:m(),e)}mu(r){return Wt.gx(r)}lu(){return Wt.hx()}ix(r,e,t,i){t.jx(r.qq(this.eu_1,e))}mt(r,e,t,i){return this.ix(r,e,t instanceof Wt?t:m(),i)}nu(r,e,t,i){return this.ix(r,e,t instanceof Wt?t:m(),i)}kx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.tr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.kx(r,e!=null&&us(e)?e:m(),t)}}class Hm extends ge{constructor(){rl=null,super(x0()),rl=this}nx(r){return r.length}tt(r){return this.nx(r!=null&&ls(r)?r:m())}ox(r,e){return e===r.length?Yt.rx(r):Yt.sx(s1(r,e),r.length)}dt(r,e){return this.ox(r!=null&&ls(r)?r:m(),e)}mu(r){return Yt.tx(r)}lu(){return Yt.ux()}vx(r,e,t,i){t.wx(r.pq(this.eu_1,e))}mt(r,e,t,i){return this.vx(r,e,t instanceof Yt?t:m(),i)}nu(r,e,t,i){return this.vx(r,e,t instanceof Yt?t:m(),i)}xx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.sr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.xx(r,e!=null&&ls(e)?e:m(),t)}}class Gm extends ge{constructor(){nl=null,super(Ac(jl())),nl=this}ay(r){return r.length}tt(r){return this.ay(r!=null&&ia(r)?r:m())}by(r,e){return e===r.length?Zt.ey(r):Zt.fy(da(r,e),r.length)}dt(r,e){return this.by(r!=null&&ia(r)?r:m(),e)}mu(r){return Zt.gy(r)}lu(){return Zt.hy()}iy(r,e,t,i){t.jy(r.oq(this.eu_1,e))}mt(r,e,t,i){return this.iy(r,e,t instanceof Zt?t:m(),i)}nu(r,e,t,i){return this.iy(r,e,t instanceof Zt?t:m(),i)}ky(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.rr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.ky(r,e!=null&&ia(e)?e:m(),t)}}class Km extends ge{constructor(){el=null,super(ru(Ls())),el=this}ny(r){return gi(r)}tt(r){return this.ny(r instanceof ci?r.wm_1:m())}oy(r,e){if(e===gi(r))return Vt.ry(r);var t=da(r,e);return Vt.sy(t,gi(r))}dt(r,e){return this.oy(r instanceof ci?r.wm_1:m(),e)}mu(r){return Vt.ty(r)}lu(){return Vt.uy()}vy(r,e,t,i){var a=r.sq(this.eu_1,e).aq(),s=a;t.wy(s)}mt(r,e,t,i){return this.vy(r,e,t instanceof Vt?t:m(),i)}nu(r,e,t,i){return this.vy(r,e,t instanceof Vt?t:m(),i)}xy(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.vr(this.eu_1,a),o=qE(e,a),u=o;s.hr(u)}while(i<t)}ou(r,e,t){return this.xy(r,e instanceof ci?e.wm_1:m(),t)}}class Wm extends ge{constructor(){tl=null,super(qc()),tl=this}az(r){return r.length}tt(r){return this.az(r!=null&&os(r)?r:m())}bz(r,e){return e===r.length?Xt.ez(r):Xt.fz(Si(r,e),r.length)}dt(r,e){return this.bz(r!=null&&os(r)?r:m(),e)}mu(r){return Xt.gz(r)}lu(){return Xt.hz()}iz(r,e,t,i){t.jz(r.nq(this.eu_1,e))}mt(r,e,t,i){return this.iz(r,e,t instanceof Xt?t:m(),i)}nu(r,e,t,i){return this.iz(r,e,t instanceof Xt?t:m(),i)}kz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.qr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.kz(r,e!=null&&os(e)?e:m(),t)}}class Ym extends ge{constructor(){il=null,super(Ic(Gl())),il=this}nz(r){return _i(r)}tt(r){return this.nz(r instanceof fi?r.lm_1:m())}oz(r,e){if(e===_i(r))return Qt.rz(r);var t=Si(r,e);return Qt.sz(t,_i(r))}dt(r,e){return this.oz(r instanceof fi?r.lm_1:m(),e)}mu(r){return Qt.tz(r)}lu(){return Qt.uz()}vz(r,e,t,i){var a=r.sq(this.eu_1,e).zp(),s=a;t.wz(s)}mt(r,e,t,i){return this.vz(r,e,t instanceof Qt?t:m(),i)}nu(r,e,t,i){return this.vz(r,e,t instanceof Qt?t:m(),i)}xz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.vr(this.eu_1,a),o=mE(e,a),u=o;s.gr(u)}while(i<t)}ou(r,e,t){return this.xz(r,e instanceof fi?e.lm_1:m(),t)}}class Zm extends ge{constructor(){al=null,super(jc()),al=this}a10(r){return r.length}tt(r){return this.a10(r!=null&&as(r)?r:m())}b10(r,e){return e===r.length?ri.e10(r):ri.f10(pa(r,e),r.length)}dt(r,e){return this.b10(r!=null&&as(r)?r:m(),e)}mu(r){return ri.g10(r)}lu(){return ri.h10()}i10(r,e,t,i){t.j10(r.mq(this.eu_1,e))}mt(r,e,t,i){return this.i10(r,e,t instanceof ri?t:m(),i)}nu(r,e,t,i){return this.i10(r,e,t instanceof ri?t:m(),i)}k10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.pr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.k10(r,e!=null&&as(e)?e:m(),t)}}class Vm extends ge{constructor(){sl=null,super(Cc(Kl())),sl=this}n10(r){return mi(r)}tt(r){return this.n10(r instanceof vi?r.hn_1:m())}o10(r,e){if(e===mi(r))return ni.r10(r);var t=pa(r,e);return ni.s10(t,mi(r))}dt(r,e){return this.o10(r instanceof vi?r.hn_1:m(),e)}mu(r){return ni.t10(r)}lu(){return ni.u10()}v10(r,e,t,i){var a=r.sq(this.eu_1,e).yp(),s=a;t.w10(s)}mt(r,e,t,i){return this.v10(r,e,t instanceof ni?t:m(),i)}nu(r,e,t,i){return this.v10(r,e,t instanceof ni?t:m(),i)}x10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.vr(this.eu_1,a),o=RE(e,a),u=o;s.fr(u)}while(i<t)}ou(r,e,t){return this.x10(r,e instanceof vi?e.hn_1:m(),t)}}class Xm extends ge{constructor(){ol=null,super(Tc()),ol=this}a11(r){return r.length}tt(r){return this.a11(r!=null&&is(r)?r:m())}b11(r,e){return e===r.length?ei.e11(r):ei.f11(_a(r,e),r.length)}dt(r,e){return this.b11(r!=null&&is(r)?r:m(),e)}mu(r){return ei.g11(r)}lu(){return ei.h11()}i11(r,e,t,i){t.j11(r.lq(this.eu_1,e))}mt(r,e,t,i){return this.i11(r,e,t instanceof ei?t:m(),i)}nu(r,e,t,i){return this.i11(r,e,t instanceof ei?t:m(),i)}k11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.k11(r,e!=null&&is(e)?e:m(),t)}}class Qm extends ge{constructor(){ll=null,super(zc(Hl())),ll=this}n11(r){return pi(r)}tt(r){return this.n11(r instanceof ui?r.am_1:m())}o11(r,e){if(e===pi(r))return ti.r11(r);var t=_a(r,e);return ti.s11(t,pi(r))}dt(r,e){return this.o11(r instanceof ui?r.am_1:m(),e)}mu(r){return ti.t11(r)}lu(){return ti.u11()}v11(r,e,t,i){var a=r.sq(this.eu_1,e).xp(),s=a;t.w11(s)}mt(r,e,t,i){return this.v11(r,e,t instanceof ti?t:m(),i)}nu(r,e,t,i){return this.v11(r,e,t instanceof ti?t:m(),i)}x11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.vr(this.eu_1,a),o=lE(e,a),u=o;s.er(u)}while(i<t)}ou(r,e,t){return this.x11(r,e instanceof ui?e.am_1:m(),t)}}class r0 extends ge{constructor(){ul=null,super(S0()),ul=this}a12(r){return r.length}tt(r){return this.a12(r!=null&&ts(r)?r:m())}b12(r,e){return e===r.length?ii.e12(r):ii.f12(o1(r,e),r.length)}dt(r,e){return this.b12(r!=null&&ts(r)?r:m(),e)}mu(r){return ii.g12(r)}lu(){return ii.h12()}i12(r,e,t,i){t.j12(r.kq(this.eu_1,e))}mt(r,e,t,i){return this.i12(r,e,t instanceof ii?t:m(),i)}nu(r,e,t,i){return this.i12(r,e,t instanceof ii?t:m(),i)}k12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.eu_1,a,e[a])}while(i<t)}ou(r,e,t){return this.k12(r,e!=null&&ts(e)?e:m(),t)}}class Kt extends Ln{constructor(r,e){return new.target.sw(r,e)}static sw(r,e){var t=this.qu();return t.pw_1=r,t.qw_1=e,t}static rw(r){return this.sw(r,r.length)}static tw(r){return this.sw(ps(r),0)}static uw(){return this.sw(ps(10),0)}gu(){return this.qw_1}ru(r){this.pw_1.length<r&&(this.pw_1=i1(this.pw_1,dn(r,Vr(this.pw_1.length,2))))}ww(r){this.su();var e=this.pw_1,t=this.qw_1;this.qw_1=t+1|0,e[t]=r}iu(){return i1(this.pw_1,this.qw_1)}}class Wt extends Ln{constructor(r,e){return new.target.fx(r,e)}static fx(r,e){var t=this.qu();return t.cx_1=r,t.dx_1=e,t}static ex(r){return this.fx(r,r.length)}static gx(r){return this.fx(new Float64Array(r),0)}static hx(){return this.fx(new Float64Array(10),0)}gu(){return this.dx_1}ru(r){this.cx_1.length<r&&(this.cx_1=a1(this.cx_1,dn(r,Vr(this.cx_1.length,2))))}jx(r){this.su();var e=this.cx_1,t=this.dx_1;this.dx_1=t+1|0,e[t]=r}iu(){return a1(this.cx_1,this.dx_1)}}class Yt extends Ln{constructor(r,e){return new.target.sx(r,e)}static sx(r,e){var t=this.qu();return t.px_1=r,t.qx_1=e,t}static rx(r){return this.sx(r,r.length)}static tx(r){return this.sx(new Float32Array(r),0)}static ux(){return this.sx(new Float32Array(10),0)}gu(){return this.qx_1}ru(r){this.px_1.length<r&&(this.px_1=s1(this.px_1,dn(r,Vr(this.px_1.length,2))))}wx(r){this.su();var e=this.px_1,t=this.qx_1;this.qx_1=t+1|0,e[t]=r}iu(){return s1(this.px_1,this.qx_1)}}class Zt extends Ln{constructor(r,e){return new.target.fy(r,e)}static fy(r,e){var t=this.qu();return t.cy_1=r,t.dy_1=e,t}static ey(r){return this.fy(r,r.length)}static gy(r){return this.fy(bi(r),0)}static hy(){return this.fy(bi(10),0)}gu(){return this.dy_1}ru(r){this.cy_1.length<r&&(this.cy_1=da(this.cy_1,dn(r,Vr(this.cy_1.length,2))))}jy(r){this.su();var e=this.cy_1,t=this.dy_1;this.dy_1=t+1|0,e[t]=r}iu(){return da(this.cy_1,this.dy_1)}}class Vt extends Ln{constructor(r,e){return new.target.sy(r,e)}static sy(r,e){var t=this.qu();return t.py_1=r,t.qy_1=e,t}static ry(r){return this.sy(r,gi(r))}static ty(r){return this.sy(Ih(r),0)}static uy(){return this.sy(Ih(10),0)}gu(){return this.qy_1}ru(r){if(gi(this.py_1)<r){var e=this,t=this.py_1,i=dn(r,Vr(gi(this.py_1),2));e.py_1=da(t,i)}}wy(r){this.su();var e=this.py_1,t=this.qy_1;this.qy_1=t+1|0,AE(e,t,r)}l12(){var r=this.py_1,e=this.qy_1;return da(r,e)}iu(){return new ci(this.l12())}}class Xt extends Ln{constructor(r,e){return new.target.fz(r,e)}static fz(r,e){var t=this.qu();return t.cz_1=r,t.dz_1=e,t}static ez(r){return this.fz(r,r.length)}static gz(r){return this.fz(new Int32Array(r),0)}static hz(){return this.fz(new Int32Array(10),0)}gu(){return this.dz_1}ru(r){this.cz_1.length<r&&(this.cz_1=Si(this.cz_1,dn(r,Vr(this.cz_1.length,2))))}jz(r){this.su();var e=this.cz_1,t=this.dz_1;this.dz_1=t+1|0,e[t]=r}iu(){return Si(this.cz_1,this.dz_1)}}class Qt extends Ln{constructor(r,e){return new.target.sz(r,e)}static sz(r,e){var t=this.qu();return t.pz_1=r,t.qz_1=e,t}static rz(r){return this.sz(r,_i(r))}static tz(r){return this.sz(Eh(r),0)}static uz(){return this.sz(Eh(10),0)}gu(){return this.qz_1}ru(r){if(_i(this.pz_1)<r){var e=this,t=this.pz_1,i=dn(r,Vr(_i(this.pz_1),2));e.pz_1=Si(t,i)}}wz(r){this.su();var e=this.pz_1,t=this.qz_1;this.qz_1=t+1|0,yE(e,t,r)}m12(){var r=this.pz_1,e=this.qz_1;return Si(r,e)}iu(){return new fi(this.m12())}}class ri extends Ln{constructor(r,e){return new.target.f10(r,e)}static f10(r,e){var t=this.qu();return t.c10_1=r,t.d10_1=e,t}static e10(r){return this.f10(r,r.length)}static g10(r){return this.f10(new Int16Array(r),0)}static h10(){return this.f10(new Int16Array(10),0)}gu(){return this.d10_1}ru(r){this.c10_1.length<r&&(this.c10_1=pa(this.c10_1,dn(r,Vr(this.c10_1.length,2))))}j10(r){this.su();var e=this.c10_1,t=this.d10_1;this.d10_1=t+1|0,e[t]=r}iu(){return pa(this.c10_1,this.d10_1)}}class ni extends Ln{constructor(r,e){return new.target.s10(r,e)}static s10(r,e){var t=this.qu();return t.p10_1=r,t.q10_1=e,t}static r10(r){return this.s10(r,mi(r))}static t10(r){return this.s10(zh(r),0)}static u10(){return this.s10(zh(10),0)}gu(){return this.q10_1}ru(r){if(mi(this.p10_1)<r){var e=this,t=this.p10_1,i=dn(r,Vr(mi(this.p10_1),2));e.p10_1=pa(t,i)}}w10(r){this.su();var e=this.p10_1,t=this.q10_1;this.q10_1=t+1|0,LE(e,t,r)}n12(){var r=this.p10_1,e=this.q10_1;return pa(r,e)}iu(){return new vi(this.n12())}}class ei extends Ln{constructor(r,e){return new.target.f11(r,e)}static f11(r,e){var t=this.qu();return t.c11_1=r,t.d11_1=e,t}static e11(r){return this.f11(r,r.length)}static g11(r){return this.f11(new Int8Array(r),0)}static h11(){return this.f11(new Int8Array(10),0)}gu(){return this.d11_1}ru(r){this.c11_1.length<r&&(this.c11_1=_a(this.c11_1,dn(r,Vr(this.c11_1.length,2))))}j11(r){this.su();var e=this.c11_1,t=this.d11_1;this.d11_1=t+1|0,e[t]=r}iu(){return _a(this.c11_1,this.d11_1)}}class ti extends Ln{constructor(r,e){return new.target.s11(r,e)}static s11(r,e){var t=this.qu();return t.p11_1=r,t.q11_1=e,t}static r11(r){return this.s11(r,pi(r))}static t11(r){return this.s11(Sh(r),0)}static u11(){return this.s11(Sh(10),0)}gu(){return this.q11_1}ru(r){if(pi(this.p11_1)<r){var e=this,t=this.p11_1,i=dn(r,Vr(pi(this.p11_1),2));e.p11_1=_a(t,i)}}w11(r){this.su();var e=this.p11_1,t=this.q11_1;this.q11_1=t+1|0,uE(e,t,r)}o12(){var r=this.p11_1,e=this.q11_1;return _a(r,e)}iu(){return new ui(this.o12())}}class ii extends Ln{constructor(r,e){return new.target.f12(r,e)}static f12(r,e){var t=this.qu();return t.c12_1=r,t.d12_1=e,t}static e12(r){return this.f12(r,r.length)}static g12(r){return this.f12(xo(r),0)}static h12(){return this.f12(xo(10),0)}gu(){return this.d12_1}ru(r){this.c12_1.length<r&&(this.c12_1=o1(this.c12_1,dn(r,Vr(this.c12_1.length,2))))}j12(r){this.su();var e=this.c12_1,t=this.d12_1;this.d12_1=t+1|0,e[t]=r}iu(){return o1(this.c12_1,this.d12_1)}}class n0{constructor(){H1=this,this.p12_1=new En("kotlin.String",Na())}jn(){return this.p12_1}q12(r,e){return r.lr(e)}kn(r,e){return this.q12(r,e!=null&&typeof e=="string"?e:m())}ln(r){return r.eq()}}class En{constructor(r,e){this.r12_1=r,this.s12_1=e}io(){return this.r12_1}jo(){return this.s12_1}mo(){return 0}oo(r){Qa(this)}po(r){Qa(this)}so(r){Qa(this)}ro(r){Qa(this)}qo(r){Qa(this)}toString(){return"PrimitiveDescriptor("+this.r12_1+")"}equals(r){return this===r?!0:r instanceof En?!!(this.r12_1===r.r12_1&&D(this.s12_1,r.s12_1)):!1}hashCode(){return fe(this.r12_1)+Vr(31,this.s12_1.hashCode())|0}}class e0{constructor(){G1=this,this.t12_1=new En("kotlin.Int",NI())}jn(){return this.t12_1}u12(r,e){return r.gr(e)}kn(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.zp()}}class t0{constructor(){K1=this,this.v12_1=new En("kotlin.Long",UI())}jn(){return this.v12_1}w12(r,e){return r.hr(e)}kn(r,e){return this.w12(r,e instanceof w?e:m())}ln(r){return r.aq()}}class i0{constructor(){W1=this,this.x12_1=new En("kotlin.Byte",OI())}jn(){return this.x12_1}y12(r,e){return r.er(e)}kn(r,e){return this.y12(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.xp()}}class a0{constructor(){Y1=this,this.z12_1=new En("kotlin.Short",BI())}jn(){return this.z12_1}a13(r,e){return r.fr(e)}kn(r,e){return this.a13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.yp()}}class s0{constructor(){Z1=this,this.b13_1=new En("kotlin.Char",PI())}jn(){return this.b13_1}c13(r,e){return r.kr(e)}kn(r,e){return this.c13(r,e instanceof zn?e.x1_1:m())}d13(r){return r.dq()}ln(r){return new zn(this.d13(r))}}class o0{constructor(){V1=this,this.e13_1=new En("kotlin.Double",RI())}jn(){return this.e13_1}f13(r,e){return r.jr(e)}kn(r,e){return this.f13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.cq()}}class l0{constructor(){X1=this,this.g13_1=new En("kotlin.Float",DI())}jn(){return this.g13_1}h13(r,e){return r.ir(e)}kn(r,e){return this.h13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.bq()}}class u0{constructor(){Q1=this,this.i13_1=new En("kotlin.Boolean",jI())}jn(){return this.i13_1}j13(r,e){return r.dr(e)}kn(r,e){return this.j13(r,e!=null&&typeof e=="boolean"?e:m())}ln(r){return r.wp()}}class f0{constructor(){rf=this,this.k13_1=new Fm("kotlin.Unit",or)}jn(){return this.k13_1.jn()}l13(r,e){this.k13_1.kw(r,or)}kn(r,e){return this.l13(r,e instanceof El?e:m())}m13(r){this.k13_1.ln(r)}ln(r){return this.m13(r),or}}class Ba{constructor(){var r=this;r.s13_1=O.m(),this.t13_1=!1}vq(){return iu()}x13(r){throw Gn.un(b(Nr(this))+" can't retrieve untyped values")}y13(r){return!0}z13(r){var e=this.x13(r);return typeof e=="boolean"?e:m()}a14(r){var e=this.x13(r);return typeof e=="number"?e:m()}b14(r){var e=this.x13(r);return typeof e=="number"?e:m()}c14(r){var e=this.x13(r);return typeof e=="number"?e:m()}d14(r){var e=this.x13(r);return e instanceof w?e:m()}e14(r){var e=this.x13(r);return typeof e=="number"?e:m()}f14(r){var e=this.x13(r);return typeof e=="number"?e:m()}g14(r){var e=this.x13(r);return e instanceof zn?e.x1_1:m()}h14(r){var e=this.x13(r);return typeof e=="string"?e:m()}i14(r,e){return this.j14(r),this}gq(r,e){return this.hq(r)}fq(r){return this.i14(this.k14(),r)}up(){var r=this.u13(),e;if(r==null)return!1;e=r;var t=e;return this.y13(t)}vp(){return null}wp(){return this.z13(this.k14())}xp(){return this.a14(this.k14())}yp(){return this.b14(this.k14())}zp(){return this.c14(this.k14())}aq(){return this.d14(this.k14())}bq(){return this.e14(this.k14())}cq(){return this.f14(this.k14())}dq(){return this.g14(this.k14())}eq(){return this.h14(this.k14())}iq(r){return this}jq(r){}kq(r,e){return this.z13(this.p13(r,e))}lq(r,e){return this.a14(this.p13(r,e))}mq(r,e){return this.b14(this.p13(r,e))}nq(r,e){return this.c14(this.p13(r,e))}oq(r,e){return this.d14(this.p13(r,e))}pq(r,e){return this.e14(this.p13(r,e))}qq(r,e){return this.f14(this.p13(r,e))}rq(r,e){return this.g14(this.p13(r,e))}sq(r,e){return this.i14(this.p13(r,e),r.ro(e))}tq(r,e,t,i){var a=this.p13(r,e);return Uz(this,a,Dz(this,t,i))}u13(){return Zp(this.s13_1)}j14(r){this.s13_1.n(r)}k14(){var r=this.s13_1.h5(Ns(this.s13_1));return this.t13_1=!0,r}}class c0 extends Ba{p13(r,e){return this.r13(this.q13(r,e))}r13(r){var e=this.u13();return this.v13(e??"",r)}q13(r,e){return r.oo(e)}v13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}w13(){return this.s13_1.i1()?"$":V(this.s13_1,".","$.")}}class v0{constructor(){nf=this,this.l14_1=Ks("kotlin.UInt",qc())}jn(){return this.l14_1}m14(r,e){var t=r.mr(this.l14_1),i=e;t.gr(i)}kn(r,e){return this.m14(r,e instanceof ee?e.gm_1:m())}n14(r){var e=r.fq(this.l14_1).zp();return e}ln(r){return new ee(this.n14(r))}}class h0{constructor(){ef=this,this.o14_1=Ks("kotlin.ULong",Ac(jl()))}jn(){return this.o14_1}p14(r,e){var t=r.mr(this.o14_1),i=e;t.hr(i)}kn(r,e){return this.p14(r,e instanceof te?e.rm_1:m())}q14(r){var e=r.fq(this.o14_1).aq();return e}ln(r){return new te(this.q14(r))}}class d0{constructor(){tf=this,this.r14_1=Ks("kotlin.UByte",Tc())}jn(){return this.r14_1}s14(r,e){var t=r.mr(this.r14_1),i=e;t.er(i)}kn(r,e){return this.s14(r,e instanceof $e?e.vl_1:m())}t14(r){var e=r.fq(this.r14_1).xp();return e}ln(r){return new $e(this.t14(r))}}class p0{constructor(){af=this,this.u14_1=Ks("kotlin.UShort",jc())}jn(){return this.u14_1}v14(r,e){var t=r.mr(this.u14_1),i=e;t.fr(i)}kn(r,e){return this.v14(r,e instanceof Je?e.cn_1:m())}w14(r){var e=r.fq(this.u14_1).yp();return e}ln(r){return new Je(this.w14(r))}}class _0{fo(r,e,t){return e=e===l?hr():e,t===l?this.x14(r,e):t.x14.call(this,r,e)}}class g0 extends _0{constructor(r,e,t,i,a,s){super(),this.z14_1=r,this.a15_1=e,this.b15_1=t,this.c15_1=i,this.d15_1=a,this.e15_1=s}as(r,e){if(!r.vc(e))return null;var t=this.a15_1.o2(r),i=t==null?null:t.o2(Nr(e)),a=i!=null&&E(i,Wl)?i:null;if(a!=null)return a;var s=this.b15_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}zr(r,e){var t=this.c15_1.o2(r),i;t==null?i=null:i=(E(t,wn)?t:m()).o2(e);var a=i,s=a!=null&&E(a,cr)?a:null;if(s!=null)return s;var o=this.d15_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}x14(r,e){var t=this.z14_1.o2(r),i=t==null?null:t.f15(e);return i==null||E(i,cr)?i:null}y14(r){for(var e=this.z14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof m0){var s=E(i,Ve)?i:m(),o=a.i15_1;r.j15(s,E(o,cr)?o:m())}else a instanceof y0?r.h15(i,a.g15_1):Ts()}for(var u=this.a15_1.r2().x();u.y();)for(var f=u.z(),c=f.k2(),v=f.l2(),h=v.r2().x();h.y();){var d=h.z(),p=d.k2(),g=d.l2(),y=E(c,Ve)?c:m(),x=E(p,Ve)?p:m(),k=E(g,cr)?g:m();r.k15(y,x,k)}for(var S=this.b15_1.r2().x();S.y();){var I=S.z(),z=I.k2(),q=I.l2(),T=E(z,Ve)?z:m();r.l15(T,typeof q=="function"?q:m())}for(var P=this.d15_1.r2().x();P.y();){var $=P.z(),j=$.k2(),U=$.l2(),J=E(j,Ve)?j:m();r.m15(J,typeof U=="function"?U:m())}}}class Ec{}class m0 extends Ec{}class y0 extends Ec{}class w0{}function sI(n,r){return this.h15(n,Hz(r))}class oI{}function lI(n,r,e){var t=n.mn(r,e),i;return t==null?MI(Nr(e),n.nn()):i=t,i}function B1(n,r,e){var t=n.on(r,e),i;return t==null?C0(e,n.nn()):i=t,i}function Bu(n){cn(n,n.sn_1)}function ks(n){return Ez()}function Ic(n){return Rz()}function ru(n){return Lz()}function zc(n){return Mz()}function Cc(n){return Fz()}function qc(n){return Iz()}function Ac(n){return zz()}function Tc(n){return Cz()}function jc(n){return qz()}function b0(n){return Az()}function uI(){return vz()}function k0(n){return Tz()}function fI(){return hz()}function x0(n){return jz()}function cI(){return dz()}function vI(){return pz()}function hI(){return _z()}function dI(){return gz()}function pI(){return mz()}function _I(){return yz()}function gI(){return wz()}function mI(){return bz()}function yI(){return kz()}function S0(n){return Oz()}function wI(){return xz()}function bI(n){return Pz()}function kI(){return FI()}function xI(n){return $I()}function SI(n){return JI()}function EI(n){return HI()}function N1(n){return new Pm(n)}function U1(n,r){return new Nm(n,r)}function II(n,r){var e=E0(r),t;if(e==null)t=null;else{var i=n.fo(e);t=i==null?null:i.jn()}return t}function E0(n){var r;return n instanceof tm?r=n.ho_1:n instanceof Mm?r=E0(n.go_1):r=null,r}function zI(n){return new am(n)}function nu(n,r,e,t){var i;if(t===l?i=TI:i=t,t=i,ft(n)){var a="Blank serial names are prohibited";throw B.v(b(a))}if(D(r,eu())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw B.v(b(s))}var o=new sm(n);return t(o),new Ta(n,r,o.zo_1.c1(),Ib(e),o)}function I0(n){var r=n.rp_1,e=Ii;return Sa("_hashCode",1,e,qI(),null),r.l2()}function CI(n){return()=>j0(n,n.qp_1)}function qI(){return Ge(n=>I0(n),1,0,0)}function AI(n,r){if(ft(n)){var e="Blank serial names are prohibited";throw B.v(b(e))}return Bz(n,r)}function TI(n){return or}var Bo;function Bi(){return Bo===l&&new Zl,Bo}var No;function z0(){return No===l&&new om,No}var Uo;function eu(){return Uo===l&&new lm,Uo}var Do;function Gs(){return Do===l&&new um,Do}var Ro;function tu(){return Ro===l&&new fm,Ro}var Lo;function Oc(){return Lo===l&&new cm,Lo}var Mo;function jI(){return Mo===l&&new vm,Mo}var Fo;function OI(){return Fo===l&&new hm,Fo}var $o;function PI(){return $o===l&&new dm,$o}var Jo;function BI(){return Jo===l&&new pm,Jo}var Ho;function NI(){return Ho===l&&new _m,Ho}var Go;function UI(){return Go===l&&new gm,Go}var Ko;function DI(){return Ko===l&&new mm,Ko}var Wo;function RI(){return Wo===l&&new ym,Wo}var Yo;function Na(){return Yo===l&&new wm,Yo}var Zo;function LI(){return Zo===l&&new bm,Zo}function MI(n,r){var e=n.uc();C0(e??b(n),r)}function C0(n,r){var e="in the polymorphic scope of '"+r.uc()+"'";throw Gn.un(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.uc()+"' has to be sealed and '@Serializable'."))}var D1;function FI(){return D1===l&&new Im,D1}var R1;function $I(){return R1===l&&new zm,R1}var L1;function JI(){return L1===l&&new Cm,L1}var M1;function HI(){return M1===l&&new qm,M1}function kt(n,r){if(n<0)throw Xn.zb("Illegal index "+n+", "+r+" expects only non-negative indices")}function Ch(n){var r=n;return fr.na(r)}var F1;function qh(){return F1===l&&new Um,F1}function GI(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=bi(e);return t!==0&&(i[xb(i)]=ne(new w(-1,-1),r)),i}function KI(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.xu_1[e]=ki(n.xu_1[e],ne(new w(1,0),t))}function WI(n){var r=0,e=n.xu_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Vr(t+1|0,64),a=n.xu_1[t];!ir(a,new w(-1,-1));){var s=q_(Vf(a));a=ki(a,ne(new w(1,0),s));var o=i+s|0;if(n.vu_1(n.uu_1,o))return n.xu_1[t]=a,o}n.xu_1[t]=a}while(r<=e);return-1}function Ks(n,r){return new Ql(n,new Sc(r))}function YI(n,r){return n.eo(r)}function ZI(n){return tz(n)}var Vo;function VI(){return Vo===l&&Lm.ew(),Vo}function Xa(n){throw xr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var $1;function XI(){return $1===l&&new Hs,$1}function QI(n){return r=>(r.yo_1=n.iw_1,or)}function rz(n,r){return()=>{var e=Oc();return nu(n,e,[],QI(r))}}function nz(){return Ge(n=>n.jn(),1,0,1)}function ez(){return Pc(),q0}var q0;function tz(n){if(Pc(),E(n,Fs))return n.sp();var r=yi.b1(n.mo()),e=0,t=n.mo();if(e<t)do{var i=e;e=e+1|0;var a=n.oo(i);r.n(a)}while(e<t);return r}function J1(n){Pc();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=Ei(e);var i=t;return i??ez()}var Ah;function Pc(){Ah||(Ah=!0,q0=[])}function A0(n){var r=n.wv_1,e=Ii;return Sa("childSerializers",1,e,az(),null),r.l2()}function T0(n){var r=n.yv_1,e=Ii;return Sa("_hashCode",1,e,uz(),null),r.l2()}function iz(n){return()=>{var r=n.ov_1,e=r==null?null:r.bw();return e??P0()}}function az(){return Ge(n=>A0(n),1,0,2)}function sz(n){return()=>{var r=n.ov_1,e=r==null?null:r.cw(),t;if(e==null)t=null;else{for(var i=O.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.jn();i.n(u)}t=i}return J1(t)}}function oz(){return Ge(n=>n.zv(),1,0,3)}function lz(n){return()=>j0(n,n.zv())}function uz(){return Ge(n=>T0(n),1,0,4)}function j0(n,r){var e=fe(n.io());e=Vr(31,e)+Rk(r)|0;for(var t=zI(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Vr(31,o),f=s.io(),c=f==null?null:Sr(f);i=u+(c??0)|0}for(var v=i,h=1,d=t.x();d.y();){var p=d.z(),g=h,y=Vr(31,g),x=p.jo(),k=x==null?null:Sr(x);h=y+(k??0)|0}var S=h;return e=Vr(31,e)+v|0,e=Vr(31,e)+S|0,e}function O0(n){var r=Wf(0,n.mo()),e=n.io()+"(";return V(r,", ",e,")",l,l,fz(n))}function fz(n){return r=>n.oo(r)+": "+n.ro(r).io()}function P0(){return cz(),B0}var B0,Th;function cz(){Th||(Th=!0,B0=[])}var Xo;function vz(){return Xo===l&&new $m,Xo}var Qo;function hz(){return Qo===l&&new Jm,Qo}var rl;function dz(){return rl===l&&new Hm,rl}var nl;function pz(){return nl===l&&new Gm,nl}var el;function _z(){return el===l&&new Km,el}var tl;function gz(){return tl===l&&new Wm,tl}var il;function mz(){return il===l&&new Ym,il}var al;function yz(){return al===l&&new Zm,al}var sl;function wz(){return sl===l&&new Vm,sl}var ol;function bz(){return ol===l&&new Xm,ol}var ll;function kz(){return ll===l&&new Qm,ll}var ul;function xz(){return ul===l&&new r0,ul}function Sz(){return Bc(),N0}var N0,H1;function Ez(){return H1===l&&new n0,H1}function Qa(n){throw xr.o3("Primitive descriptor "+n.r12_1+" does not have elements")}var G1;function Iz(){return G1===l&&new e0,G1}var K1;function zz(){return K1===l&&new t0,K1}var W1;function Cz(){return W1===l&&new i0,W1}var Y1;function qz(){return Y1===l&&new a0,Y1}var Z1;function Az(){return Z1===l&&new s0,Z1}var V1;function Tz(){return V1===l&&new o0,V1}var X1;function jz(){return X1===l&&new l0,X1}var Q1;function Oz(){return Q1===l&&new u0,Q1}var rf;function Pz(){return rf===l&&new f0,rf}function Bz(n,r){return Bc(),Nz(n),new En(n,r)}function Nz(n){Bc();for(var r=Sz().q2(),e=r.x();e.y();){var t=e.z(),i=t.jn().io();if(n===i)throw B.v(W2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Nr(t).uc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var jh;function Bc(){jh||(jh=!0,N0=Gz())}function Uz(n,r,e){n.j14(r);var t=e();return n.t13_1||n.k14(),n.t13_1=!1,t}function Dz(n,r,e){return()=>n.gq(r,e)}var nf;function Rz(){return nf===l&&new v0,nf}var ef;function Lz(){return ef===l&&new h0,ef}var tf;function Mz(){return tf===l&&new d0,tf}var af;function Fz(){return af===l&&new p0,af}function $z(){return Jz(),U0}var U0,Oh;function Jz(){Oh||(Oh=!0,U0=new g0(Ar(),Ar(),Ar(),Ar(),Ar(),!1))}function iu(){return $z()}function Hz(n){return r=>n}function ua(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Xn.zb("Index "+r+" out of bounds "+hb(n).toString());return n[r]}function D0(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Xn.zb("Index "+r+" out of bounds "+Eb(n).toString());return n[r]}function Gz(){return Us([A(kr().od(),ks()),A(Br(zn),b0(Zf())),A(kr().rd(),uI()),A(kr().md(),k0()),A(kr().yd(),fI()),A(kr().ld(),x0()),A(kr().xd(),cI()),A(kr().kd(),Ac(jl())),A(kr().wd(),vI()),A(Br(te),ru(Ls())),A(Br(ci),hI()),A(kr().jd(),qc()),A(kr().ud(),dI()),A(Br(ee),Ic(Gl())),A(Br(fi),pI()),A(kr().id(),jc()),A(kr().td(),_I()),A(Br(Je),Cc(Kl())),A(Br(vi),gI()),A(kr().hd(),Tc()),A(kr().sd(),mI()),A(Br($e),zc(Hl())),A(Br(ui),yI()),A(kr().gd(),S0()),A(kr().qd(),wI()),A(Br(El),bI()),A(kr().fd(),kI()),A(Br(Ie),xI(Wr())),A(Br(tt),SI(Et())),A(Br(zt),EI(Rs()))])}Lr(Wl,"SerializationStrategy");Lr(la,"DeserializationStrategy");Lr(cr,"KSerializer",l,l,[Wl,la]);_(Gn,"SerializationException",Gn.tn);_(Yl,"MissingFieldException");Lr(_e,"SerialDescriptor");_(tm,"ContextDescriptor",l,l,[_e]);_(im);_(am);_(sm,"ClassSerialDescriptorBuilder");Lr(Fs,"CachedNames");Dr(Ta).ko=Ti;Dr(Ta).lo=ji;_(Ta,"SerialDescriptorImpl",l,l,[_e,Fs]);_(ja,"SerialKind");N(Zl,"ENUM");N(om,"CONTEXTUAL");_($s,"StructureKind");N(lm,"CLASS");N(um,"LIST");N(fm,"MAP");N(cm,"OBJECT");_(Yn,"PrimitiveKind");N(vm,"BOOLEAN");N(hm,"BYTE");N(dm,"CHAR");N(pm,"SHORT");N(_m,"INT");N(gm,"LONG");N(mm,"FLOAT");N(ym,"DOUBLE");N(wm,"STRING");_(Oa,"PolymorphicKind");N(bm,"SEALED");Lr(Vl,"Decoder");Lr(Xl,"CompositeDecoder");Dr(Oi).uq=Em;Dr(Oi).hq=km;Dr(Oi).wq=xm;Dr(Oi).yq=Sm;_(Oi,"AbstractDecoder",l,l,[Vl,Xl]);Lr(bc,"Encoder");Dr(Js).yr=tI;Dr(Js).xr=iI;_(Js,"AbstractEncoder",l,l,[bc]);_(ma,"AbstractPolymorphicSerializer",l,l,[cr]);N(Im,"NothingSerializer",l,l,[cr]);N(zm,"DurationSerializer",l,l,[cr]);N(Cm,"InstantSerializer",l,l,[cr]);N(qm,"UuidSerializer",l,l,[cr]);Dr(Nt).ko=Ti;Dr(Nt).lo=ji;Dr(Nt).no=Ms;_(Nt,"ListLikeDescriptor",l,l,[_e]);_(Am,"ArrayListClassDesc");Dr(Pi).ko=Ti;Dr(Pi).lo=ji;Dr(Pi).no=Ms;_(Pi,"MapLikeDescriptor",l,l,[_e]);_(Tm,"LinkedHashMapClassDesc");_(jm,"PrimitiveArrayDescriptor");_(kc,"AbstractCollectionSerializer",l,l,[cr]);_(xc,"CollectionLikeSerializer");_(Om,"CollectionSerializer");_(Pm,"ArrayListSerializer");_(Bm,"MapLikeSerializer");_(Nm,"LinkedHashMapSerializer");_(ge,"PrimitiveArraySerializer");_(Ln,"PrimitiveArrayBuilder");rn(Um);_(Dm,"ElementMarker");Dr(Pa).ko=Ti;Dr(Pa).lo=ji;_(Pa,"PluginGeneratedSerialDescriptor",l,l,[_e,Fs]);_(Ql,"InlineClassDescriptor");Lr(Rm,"GeneratedSerializer",l,l,[cr]);Dr(Sc).cw=aI;_(Sc,l,l,l,[Rm]);N(Lm,"NoOpEncoder");Dr(Hs).ko=Ti;Dr(Hs).lo=ji;Dr(Hs).no=Ms;N(Hs,"NothingSerialDescriptor",l,l,[_e]);_(Mm,"SerialDescriptorForNullable",l,l,[_e,Fs]);_(Fm,"ObjectSerializer",l,l,[cr]);N($m,"CharArraySerializer",l,l,[cr]);N(Jm,"DoubleArraySerializer",l,l,[cr]);N(Hm,"FloatArraySerializer",l,l,[cr]);N(Gm,"LongArraySerializer",l,l,[cr]);N(Km,"ULongArraySerializer",l,l,[cr]);N(Wm,"IntArraySerializer",l,l,[cr]);N(Ym,"UIntArraySerializer",l,l,[cr]);N(Zm,"ShortArraySerializer",l,l,[cr]);N(Vm,"UShortArraySerializer",l,l,[cr]);N(Xm,"ByteArraySerializer",l,l,[cr]);N(Qm,"UByteArraySerializer",l,l,[cr]);N(r0,"BooleanArraySerializer",l,l,[cr]);_(Kt,"CharArrayBuilder");_(Wt,"DoubleArrayBuilder");_(Yt,"FloatArrayBuilder");_(Zt,"LongArrayBuilder");_(Vt,"ULongArrayBuilder");_(Xt,"IntArrayBuilder");_(Qt,"UIntArrayBuilder");_(ri,"ShortArrayBuilder");_(ni,"UShortArrayBuilder");_(ei,"ByteArrayBuilder");_(ti,"UByteArrayBuilder");_(ii,"BooleanArrayBuilder");N(n0,"StringSerializer",l,l,[cr]);Dr(En).ko=Ti;Dr(En).lo=ji;Dr(En).no=Ms;_(En,"PrimitiveSerialDescriptor",l,l,[_e]);N(e0,"IntSerializer",l,l,[cr]);N(t0,"LongSerializer",l,l,[cr]);N(i0,"ByteSerializer",l,l,[cr]);N(a0,"ShortSerializer",l,l,[cr]);N(s0,"CharSerializer",l,l,[cr]);N(o0,"DoubleSerializer",l,l,[cr]);N(l0,"FloatSerializer",l,l,[cr]);N(u0,"BooleanSerializer",l,l,[cr]);N(f0,"UnitSerializer",l,l,[cr]);Dr(Ba).uq=Em;Dr(Ba).hq=km;Dr(Ba).wq=xm;Dr(Ba).yq=Sm;_(Ba,"TaggedDecoder",l,l,[Vl,Xl]);_(c0,"NamedValueDecoder");N(v0,"UIntSerializer",l,l,[cr]);N(h0,"ULongSerializer",l,l,[cr]);N(d0,"UByteSerializer",l,l,[cr]);N(p0,"UShortSerializer",l,l,[cr]);_(_0,"SerializersModule");_(g0,"SerialModuleImpl");_(Ec,"ContextualProvider");_(m0,"Argless");_(y0,"WithTypeArguments");Lr(w0,"SerializersModuleCollector");_(oI,"SerializableWith",l,l,l,l,0);var Ws=Math.imul;class Nc{constructor(r,e){qe(),this.n15_1=r,this.o15_1=e,this.p15_1=new lf}vq(){return this.o15_1}q15(r,e){var t=new ff;try{return zC(this,t,r,e),t.toString()}finally{t.u15()}}r15(r,e){var t=iv(this,e),i=new xs(this,cu(),t,r.jn(),null),a=i.hq(r);return t.i16(),a}s15(r){return this.r15(vt(),r)}}class R0 extends Nc{constructor(){fl=null,super(new Uc,iu()),fl=this}}class L0{constructor(r){this.j16_1=r.n15_1.e17_1,this.k16_1=r.n15_1.j17_1,this.l16_1=r.n15_1.f17_1,this.m16_1=r.n15_1.g17_1,this.n16_1=r.n15_1.i17_1,this.o16_1=r.n15_1.k17_1,this.p16_1=r.n15_1.l17_1,this.q16_1=r.n15_1.n17_1,this.r16_1=r.n15_1.u17_1,this.s16_1=r.n15_1.p17_1,this.t16_1=r.n15_1.q17_1,this.u16_1=r.n15_1.r17_1,this.v16_1=r.n15_1.s17_1,this.w16_1=r.n15_1.t17_1,this.x16_1=r.n15_1.o17_1,this.y16_1=r.n15_1.h17_1,this.z16_1=r.n15_1.m17_1,this.a17_1=r.vq(),this.b17_1=r.n15_1.v17_1,this.c17_1=r.n15_1.w17_1}d17(){if(this.z16_1){if(this.q16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw B.v(b(r))}if(!this.r16_1.equals(gy())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw B.v(b(e))}}if(this.n16_1){if(this.o16_1!=="    "){var i=this.o16_1,a;r:{for(var s=0;s<C(i);){var o=Q(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var f="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.o16_1;throw B.v(b(f))}}}else if(this.o16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw B.v(b(t))}return new Uc(this.j16_1,this.l16_1,this.m16_1,this.y16_1,this.n16_1,this.k16_1,this.o16_1,this.p16_1,this.z16_1,this.q16_1,this.x16_1,this.s16_1,this.t16_1,this.u16_1,this.v16_1,this.w16_1,this.r16_1,this.b17_1,this.c17_1)}}class M0 extends Nc{constructor(r,e){super(r,e),Zz(this)}}class F0{}class $0{}class J0{}class Uc{constructor(r,e,t,i,a,s,o,u,f,c,v,h,d,p,g,y,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,f=f===l?!1:f,c=c===l?"type":c,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,p=p===l?!1:p,g=g===l?!1:g,y=y===l?!1:y,x=x===l?gy():x,k=k===l?!0:k,S=S===l?400:S,this.e17_1=r,this.f17_1=e,this.g17_1=t,this.h17_1=i,this.i17_1=a,this.j17_1=s,this.k17_1=o,this.l17_1=u,this.m17_1=f,this.n17_1=c,this.o17_1=v,this.p17_1=h,this.q17_1=d,this.r17_1=p,this.s17_1=g,this.t17_1=y,this.u17_1=x,this.v17_1=k,this.w17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.e17_1+", ignoreUnknownKeys="+this.f17_1+", isLenient="+this.g17_1+", "+("allowStructuredMapKeys="+this.h17_1+", prettyPrint="+this.i17_1+", explicitNulls="+this.j17_1+", ")+("prettyPrintIndent='"+this.k17_1+"', coerceInputValues="+this.l17_1+", useArrayPolymorphism="+this.m17_1+", ")+("classDiscriminator='"+this.n17_1+"', allowSpecialFloatingPointValues="+this.o17_1+", ")+("useAlternativeNames="+this.p17_1+", namingStrategy="+he(this.q17_1)+", decodeEnumsCaseInsensitive="+this.r17_1+", ")+("allowTrailingComma="+this.s17_1+", allowComments="+this.t17_1+", classDiscriminatorMode="+this.u17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.v17_1+", maxNestingDepth="+this.w17_1+")")}}class go extends le{}class au{}class H0{z17(){return vt()}}class Qe{}class Kz{}class vr extends Qe{toString(){return this.c18()}a18(r){r.fa(this.c18())}}class Wz{}class hn extends Qe{constructor(r){super(),this.d18_1=r}equals(r){return D(this.d18_1,r)}hashCode(){return Sr(this.d18_1)}toString(){var r=Ws(this.d18_1.c1()+1|0,2),e=Qr.ja(r);return this.a18(e),e.toString()}a18(r){r.ga(91);for(var e=!0,t=this.d18_1.x();t.y();){var i=t.z();e||r.ga(44),e=!1,i.a18(r)}r.ga(93)}i1(){return this.d18_1.i1()}e18(r){return this.d18_1.l1(r)}l1(r){return r instanceof Qe?this.e18(r instanceof Qe?r:m()):!1}x(){return this.d18_1.x()}d1(r){return this.d18_1.d1(r)}f18(r){return this.d18_1.n1(r)}n1(r){return r instanceof Qe?this.f18(r instanceof Qe?r:m()):-1}m1(r){return this.d18_1.m1(r)}c1(){return this.d18_1.c1()}}class G0{z17(){return ou()}}class nr extends Qe{constructor(r){super(),this.g18_1=r}equals(r){return D(this.g18_1,r)}hashCode(){return Sr(this.g18_1)}toString(){var r=Ws(this.g18_1.c1(),6),e=Qr.ja(r);return this.a18(e),e.toString()}a18(r){r.ga(123);for(var e=!0,t=this.g18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.ga(44),e=!1,gl(r,a),r.ga(58),s.a18(r)}r.ga(125)}i1(){return this.g18_1.i1()}h18(r){return this.g18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.h18(r!=null&&typeof r=="string"?r:m()):!1}i18(r){return this.g18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.i18(r!=null&&typeof r=="string"?r:m()):null}c1(){return this.g18_1.c1()}p2(){return this.g18_1.p2()}q2(){return this.g18_1.q2()}r2(){return this.g18_1.r2()}}class de extends vr{constructor(){cl=null,super(),cl=this,this.j18_1="null"}b18(){return!1}c18(){return this.j18_1}}class ct extends vr{constructor(r,e,t){if(t=t===l?null:t,super(),this.k18_1=e,this.l18_1=t,this.m18_1=b(r),this.l18_1!=null&&!this.l18_1.lo()){var i="Failed requirement.";throw B.v(b(i))}}b18(){return this.k18_1}c18(){return this.m18_1}toString(){var r;if(this.k18_1){var e=this.m18_1.length+2|0,t=Qr.ja(e);gl(t,this.m18_1),r=t.toString()}else r=this.m18_1;return r}a18(r){this.k18_1?gl(r,this.m18_1):r.fa(this.m18_1)}equals(r){return this===r?!0:!(r==null||!Nr(this).equals(Nr(r))||(r instanceof ct||m(),this.k18_1!==r.k18_1)||this.m18_1!==r.m18_1)}hashCode(){var r=g_(this.k18_1);return r=Ws(31,r)+fe(this.m18_1)|0,r}}class xt{constructor(){var r=this;r.o18_1=fr.t4()}p18(r,e){return this.o18_1.s2(r,e)}d17(){return new nr(this.o18_1)}}class K0{constructor(){var r=this;r.q18_1=O.m()}r18(r){return this.q18_1.n(r),!0}d17(){return new hn(this.q18_1)}}class W0{constructor(){vf=this;var r=this,e=LI();r.x18_1=nu("kotlinx.serialization.json.JsonElement",e,[],tC)}jn(){return this.x18_1}y18(r,e){Da(r),e instanceof vr?r.xr(Wc(),e):e instanceof nr?r.xr(ou(),e):e instanceof hn?r.xr(Yc(),e):Ts()}kn(r,e){return this.y18(r,e instanceof Qe?e:m())}ln(r){var e=lu(r);return e.y17()}}class Y0{constructor(){hf=this,this.s18_1=nu("kotlinx.serialization.json.JsonPrimitive",Na(),[])}jn(){return this.s18_1}z18(r,e){Da(r);var t;if(e instanceof de)r.xr(Zc(),Xs()),t=or;else{var i=yy();r.xr(i,e instanceof ct?e:m()),t=or}return t}kn(r,e){return this.z18(r,e instanceof vr?e:m())}ln(r){var e=lu(r),t=e.y17();if(!(t instanceof vr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(Nr(t)),a;if(e.x17().n15_1.v17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw Pr.m19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Z0{constructor(){df=this,this.n19_1=N1(vt()).jn(),this.o19_1="kotlinx.serialization.json.JsonArray"}io(){return this.o19_1}oo(r){return this.n19_1.oo(r)}po(r){return this.n19_1.po(r)}qo(r){return this.n19_1.qo(r)}ro(r){return this.n19_1.ro(r)}so(r){return this.n19_1.so(r)}jo(){return this.n19_1.jo()}ko(){return this.n19_1.ko()}lo(){return this.n19_1.lo()}mo(){return this.n19_1.mo()}no(){return this.n19_1.no()}}class V0{constructor(){pf=this,this.w18_1=uC()}jn(){return this.w18_1}p19(r,e){Da(r),N1(vt()).kn(r,e)}kn(r,e){return this.p19(r,e instanceof hn?e:m())}ln(r){return Vc(r),new hn(N1(vt()).ln(r))}}class X0{constructor(){_f=this,this.q19_1=U1(ks(),vt()).jn(),this.r19_1="kotlinx.serialization.json.JsonObject"}io(){return this.r19_1}oo(r){return this.q19_1.oo(r)}po(r){return this.q19_1.po(r)}qo(r){return this.q19_1.qo(r)}ro(r){return this.q19_1.ro(r)}so(r){return this.q19_1.so(r)}jo(){return this.q19_1.jo()}ko(){return this.q19_1.ko()}lo(){return this.q19_1.lo()}mo(){return this.q19_1.mo()}no(){return this.q19_1.no()}}class Q0{constructor(){gf=this,this.v18_1=fC()}jn(){return this.v18_1}s19(r,e){Da(r),U1(ks(),vt()).kn(r,e)}kn(r,e){return this.s19(r,e instanceof nr?e:m())}ln(r){return Vc(r),new nr(U1(ks(),vt()).ln(r))}}class ry{constructor(){mf=this,this.t18_1=nu("kotlinx.serialization.json.JsonNull",Bi(),[])}jn(){return this.t18_1}t19(r,e){Da(r),r.cr()}kn(r,e){return this.t19(r,e instanceof de?e:m())}ln(r){if(Vc(r),r.up())throw Xc("Expected 'null' literal");return r.vp(),Xs()}}class ny{constructor(){yf=this,this.u18_1=AI("kotlinx.serialization.json.JsonLiteral",Na())}jn(){return this.u18_1}u19(r,e){if(Da(r),e.k18_1)return r.lr(e.m18_1);if(e.l18_1!=null)return r.mr(e.l18_1).lr(e.m18_1);var t=rS(e.m18_1);if(t!=null)return r.hr(t);var i=em(e.m18_1),a=i;if((a==null?null:new te(a))!=null){var s=i,o=(s==null?null:new te(s)).rm_1,u=r.mr(ru(Ls()).jn()),f=o;return u.hr(f),or}var c=lc(e.m18_1);if(c!=null)return r.jr(c);var v=cS(e.m18_1);if(v!=null)return r.dr(v);r.lr(e.m18_1)}kn(r,e){return this.u19(r,e instanceof ct?e:m())}ln(r){var e=lu(r),t=e.y17();if(!(t instanceof ct)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(Nr(t)),a;if(e.x17().n15_1.v17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw Pr.m19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Ys{constructor(r){this.v19_1=G_(r)}io(){return We(this).io()}jo(){return We(this).jo()}mo(){return We(this).mo()}oo(r){return We(this).oo(r)}po(r){return We(this).po(r)}qo(r){return We(this).qo(r)}ro(r){return We(this).ro(r)}so(r){return We(this).so(r)}}class Dc{}class Rc extends Gn{static c1a(r){var e=this.un(r);return cn(e,e.b1a_1),e.a1a_1=r,delete e.message,e}ob(){return this.a1a_1}get message(){return this.ob()}}class Pr extends Rc{constructor(r,e,t,i,a,s){return new.target.m19(r,e,t,i,a,s)}static m19(r,e,t,i,a,s){var o=this.c1a(r);return cn(o,o.l19_1),o.g19_1=e,o.h19_1=t,o.i19_1=i,o.j19_1=a,o.k19_1=s,o}}class Zs extends Rc{constructor(r,e,t){return new.target.n1a(r,e,t)}static n1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.c1a(gC(r,t));return cn(i,i.m1a_1),i.j1a_1=r,i.k1a_1=e,i.l1a_1=t,i}}class Vs{constructor(r){this.o1a_1=r,this.p1a_1=!0}q1a(){this.p1a_1=!0}r1a(){return or}s1a(){this.p1a_1=!1}t1a(){this.p1a_1=!1}u1a(){return or}v1a(r){return this.o1a_1.w1a(r)}x1a(r){return this.o1a_1.y1a(r)}z1a(r){return this.o1a_1.y1a(r.toString())}a1b(r){return this.o1a_1.y1a(r.toString())}b1b(r){return this.o1a_1.c1b(L(r))}d1b(r){return this.o1a_1.c1b(L(r))}e1b(r){return this.o1a_1.c1b(L(r))}f1b(r){return this.o1a_1.c1b(r)}g1b(r){return this.o1a_1.y1a(r.toString())}h1b(r){return this.o1a_1.i1b(r)}}class sf extends Vs{constructor(r,e){super(r),this.l1b_1=e}e1b(r){if(this.l1b_1){var e=r;this.h1b(A1(e))}else{var t=r;this.x1a(A1(t))}}f1b(r){if(this.l1b_1){var e=r;this.h1b(j1(e))}else{var t=r;this.x1a(j1(t))}}b1b(r){if(this.l1b_1){var e=r;this.h1b(C1(e))}else{var t=r;this.x1a(C1(t))}}d1b(r){if(this.l1b_1){var e=r;this.h1b(P1(e))}else{var t=r;this.x1a(P1(t))}}}class of extends Vs{constructor(r,e){super(r),this.o1b_1=e}h1b(r){this.o1b_1?super.h1b(r):super.x1a(r)}}class ey extends Vs{constructor(r,e){super(r),this.r1b_1=e,this.s1b_1=0}q1a(){this.p1a_1=!0,this.s1b_1=this.s1b_1+1|0}r1a(){this.s1b_1=this.s1b_1-1|0}s1a(){this.p1a_1=!1,this.x1a(`
`);var r=this.s1b_1,e=0;if(e<r)do e=e+1|0,this.x1a(this.r1b_1.n15_1.k17_1);while(e<r)}t1a(){this.p1a_1?this.p1a_1=!1:this.s1a()}u1a(){this.v1a(32)}}class Lc{constructor(r){var e=this;e.t1b_1=new Dm(r,pC(this)),this.u1b_1=!1}v1b(r){this.t1b_1.yu(r)}w1b(){return this.t1b_1.zu()}}class ty{}class iy{}class ay{constructor(r){this.d1c_1=r.w17_1,this.e1c_1=r.v17_1;var e=this;e.f1c_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.g1c_1=a,this.h1c_1=-1}i1c(r){this.h1c_1=this.h1c_1+1|0;var e=this.h1c_1;e>=this.d1c_1&&Ss(this.d1c_1),e===this.f1c_1.length&&Mh(this),this.f1c_1[e]=r}j1c(r){this.g1c_1[this.h1c_1]=r}k1c(r){var e;this.g1c_1[this.h1c_1]!==-2?(this.h1c_1=this.h1c_1+1|0,e=this.h1c_1===this.f1c_1.length):e=!1,e&&Mh(this),this.f1c_1[this.h1c_1]=this.e1c_1?r:bf,this.g1c_1[this.h1c_1]=-2}l1c(){this.g1c_1[this.h1c_1]===-2&&(this.f1c_1[this.h1c_1]=wf)}m1c(){var r=this.h1c_1;this.g1c_1[r]===-2&&(this.g1c_1[r]=-1,this.h1c_1=this.h1c_1-1|0),this.h1c_1!==-1&&(this.h1c_1=this.h1c_1-1|0)}n1c(){var r=Qr.f();r.fa("$");var e=this.h1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.f1c_1[i];if(a!=null&&E(a,_e))if(D(a.jo(),Gs()))this.g1c_1[i]!==-1&&(r.fa("["),r.ge(this.g1c_1[i]),r.fa("]"));else{var s=this.g1c_1[i];s>=0&&(r.fa("."),r.fa(a.oo(s)))}else a===bf?r.fa("[<debug info disabled>]"):a!==wf&&(r.fa("["),r.fa("'"),r.ea(a),r.fa("'"),r.fa("]"))}while(t<e);return r.toString()}toString(){return this.n1c()}}class Mc{constructor(r){this.o1c_1=r.m17_1,this.p1c_1=!r.u17_1.equals(_y())}h15(r,e){}k15(r,e,t){var i=t.jn();IC(this,i,e)}l15(r,e){}m15(r,e){}}class sy{constructor(r,e){this.a1d_1=e,this.b1d_1=r.g17_1,this.c1d_1=r.s17_1,this.d1d_1=r.w17_1,this.e1d_1=this.a1d_1.f16_1.h1c_1}k1d(){var r=this.a1d_1.g1d(),e;if(r===1)e=hl(this,!0);else if(r===0)e=hl(this,!1);else if(r===6){this.e1d_1=this.e1d_1+1|0,this.e1d_1>=this.d1d_1&&Ss(this.d1d_1);var t;this.e1d_1===200?(this.e1d_1=this.e1d_1-1|0,t=AC(this)):(t=CC(this),this.e1d_1=this.e1d_1-1|0),e=t}else if(r===8){this.e1d_1=this.e1d_1+1|0,this.e1d_1>=this.d1d_1&&Ss(this.d1d_1);var i=Ey(this);this.e1d_1=this.e1d_1-1|0,e=i}else this.a1d_1.y1b("Cannot read Json element because of unexpected "+ml(r));return e}}class ns extends le{constructor(r,e,t,i){super(r,e),this.o1d_1=t,this.p1d_1=i}}class ya{}class lf{constructor(){this.z1b_1=Kh(16)}r1d(r,e,t){var i=this.z1b_1,a=i.o2(r),s;if(a==null){var o=Kh(2);i.s2(r,o),s=o}else s=a;var u=s,f=e instanceof ya?e:m(),c=t??m();u.s2(f,c)}a1c(r,e,t){var i=this.s1d(r,e);if(i!=null)return i;var a=t();return this.r1d(r,e,a),a}s1d(r,e){var t=this.z1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof ya?e:m());var a=i;return a??null}}class oy{constructor(r){this.t1d_1=r}}class xs extends Oi{constructor(r,e,t,i,a){super(),this.v15_1=r,this.w15_1=e,this.x15_1=t,this.y15_1=this.v15_1.vq(),this.z15_1=-1,this.a16_1=a,this.b16_1=this.v15_1.n15_1,this.c16_1=this.b16_1.j17_1?null:new Lc(i)}x17(){return this.v15_1}vq(){return this.y15_1}y17(){return new sy(this.v15_1.n15_1,this.x15_1).k1d()}hq(r){try{var e;if(r instanceof ma?e=this.v15_1.n15_1.m17_1:e=!0,e)return r.ln(this);var t=_l(r.jn(),this.v15_1),i=this.x15_1.c1e(t,this.b16_1.g17_1),a;if(i==null){var s=E(r,la)?r:m(),o;r:{var u;if(s instanceof ma?u=this.x17().n15_1.m17_1:u=!0,u){o=s.ln(this);break r}var f=_l(s.jn(),this.x17()),c=this.y17(),v=s.jn().io();if(!(c instanceof nr)){var h="Expected "+Br(nr).uc()+", but had "+Nr(c).uc()+" as the serialized body of "+v,d=this.x15_1.f16_1.n1c(),p;if(this.x17().n15_1.v17_1){var g=b(c);p=b(Jr(g))}else p=null;var y=p;throw Pr.m19(Kr(-1,h,d,null,y),h,-1,d,y,null)}var x=c,k=x.i18(f),S=k==null?null:On(k),I=S==null?null:Hn(S),z;try{z=B1(s,this,I)}catch(rr){var q;if(rr instanceof Gn){var T=rr,P=fn(T.message),$;if(this.x17().n15_1.v17_1){var j=x.toString();$=b(Jr(j))}else $=null;var U=$;throw Pr.m19(Kr(-1,P,null,null,U),P,-1,null,U,null)}else throw rr}var J=z,M=E(J,la)?J:m();o=Py(this.x17(),f,x,M)}return o}else a=i;var F=a,R;try{R=B1(r,this,F)}catch(rr){var X;if(rr instanceof Gn){var H=rr,er=ra(vS(fn(H.message),10),"."),Z=hS(fn(H.message),10,"");this.x15_1.y1b(er,l,Z)}else throw rr;R=X}var W=R,sr=E(W,la)?W:m();return this.a16_1=new oy(t),sr.ln(this)}catch(rr){if(rr instanceof Yl){var ur=rr;throw bs(fn(ur.message),"at path")?ur:YI(ur,sk(ur.message," at path: ")+this.x15_1.f16_1.n1c())}else throw rr}}iq(r){var e=Ay(this.v15_1,r);this.x15_1.f16_1.i1c(r),this.x15_1.u1d(e.o1d_1),RC(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new xs(this.v15_1,e,this.x15_1,r,this.a16_1);break;default:var i;this.w15_1.equals(e)&&this.v15_1.n15_1.j17_1?i=this:i=new xs(this.v15_1,e,this.x15_1,r,this.a16_1),t=i;break}return t}jq(r){r.mo()===0&&nv(r,this.v15_1)&&DC(this,r),this.x15_1.v1d()&&!this.v15_1.n15_1.s17_1&&Ni(this.x15_1,""),this.x15_1.u1d(this.w15_1.p1d_1),this.x15_1.f16_1.m1c()}up(){var r,e=this.c16_1,t=e==null?null:e.u1b_1;return t??!1?r=!1:r=!this.x15_1.d1e(),r}vp(){return null}tq(r,e,t,i){var a=this.w15_1.equals(pl())&&(e&1)===0;a&&this.x15_1.f16_1.l1c();var s=super.tq(r,e,t,i);return a&&this.x15_1.f16_1.k1c(s),s}xq(r){var e;switch(this.w15_1.x2_1){case 0:e=FC(this,r);break;case 2:e=LC(this);break;default:e=JC(this);break}return this.w15_1.equals(pl())||this.x15_1.f16_1.j1c(e),e}wp(){return this.x15_1.e1e()}xp(){var r=this.x15_1.f1e();return ir(r,L(Qu(r)))||this.x15_1.y1b("Failed to parse byte for input '"+r.toString()+"'"),Qu(r)}yp(){var r=this.x15_1.f1e();return ir(r,L(r1(r)))||this.x15_1.y1b("Failed to parse short for input '"+r.toString()+"'"),r1(r)}zp(){var r=this.x15_1.f1e();return ir(r,L(Xr(r)))||this.x15_1.y1b("Failed to parse int for input '"+r.toString()+"'"),Xr(r)}aq(){return this.x15_1.f1e()}bq(){var r=this.x15_1,e;r:{var t=r.j1d();try{e=qo(t);break r}catch(s){if(s instanceof B)r.y1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.v15_1.n15_1.o17_1;if(a||ic(i))return i;Nh(this.x15_1,i)}cq(){var r=this.x15_1,e;r:{var t=r.j1d();try{e=qo(t);break r}catch(s){if(s instanceof B)r.y1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.v15_1.n15_1.o17_1;if(a||ac(i))return i;Nh(this.x15_1,i)}dq(){var r=this.x15_1.j1d();return r.length!==1&&this.x15_1.y1b("Expected single char, but got '"+r+"'"),K(r,0)}eq(){var r;return this.b16_1.g17_1?r=this.x15_1.b1e():r=this.x15_1.i1d(),r}fq(r){return ev(r)?new Fc(this.x15_1,this.v15_1):super.fq(r)}}class Fc extends Oi{constructor(r,e){super(),this.g1e_1=r,this.h1e_1=e.vq()}vq(){return this.h1e_1}xq(r){var e="unsupported";throw xr.o3(b(e))}zp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var i=KE(t);e=i;break r}catch(a){if(a instanceof B)r.y1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}aq(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var i=WE(t);e=i;break r}catch(a){if(a instanceof B)r.y1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}xp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var i=YE(t);e=i;break r}catch(a){if(a instanceof B)r.y1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}yp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var i=ZE(t);e=i;break r}catch(a){if(a instanceof B)r.y1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class fa extends Js{constructor(r,e,t,i){return new.target.i1e(r,e,t,i)}static i1e(r,e,t,i){var a=this.zq();a.q1c_1=r,a.r1c_1=e,a.s1c_1=t,a.t1c_1=i,a.u1c_1=a.r1c_1.vq(),a.v1c_1=a.r1c_1.n15_1,a.w1c_1=!1,a.x1c_1=null,a.y1c_1=null;var s=a.s1c_1.x2_1;return a.t1c_1!=null&&(a.t1c_1[s]!==null||a.t1c_1[s]!==a)&&(a.t1c_1[s]=a),a}x17(){return this.r1c_1}static z1c(r,e,t,i){return this.i1e(hC(r,e),e,t,i)}vq(){return this.u1c_1}xr(r,e){r:{if(this.x17().n15_1.m17_1){r.kn(this,e);break r}var t=r instanceof ma,i;if(t)i=!this.x17().n15_1.u17_1.equals(_y());else{var a;switch(this.x17().n15_1.u17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.jn().jo();a=D(s,eu())||D(s,Oc());break;default:Ts();break}i=a}var o=i,u=o?_l(r.jn(),this.x17()):null,f;if(t){var c=r instanceof ma?r:m();n:if(e==null){var v="Value for serializer "+b(r.jn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw B.v(b(v))}else break n;var h=lI(c,this,e);f=E(h,Wl)?h:m()}else f=r;var d=f;if(u!=null){PC(this.x17(),r,d,u),BC(d.jn().jo());var p=d.jn().io();this.x1c_1=u,this.y1c_1=p}d.kn(this,e)}}iq(r){var e=Ay(this.r1c_1,r);e.o1d_1!==0&&(this.q1c_1.v1a(e.o1d_1),this.q1c_1.q1a());var t=this.x1c_1;if(t!=null){var i=this.y1c_1;KC(this,t,i??r.io()),this.x1c_1=null,this.y1c_1=null}if(this.s1c_1.equals(e))return this;var a=this.t1c_1,s=a==null?null:a[e.x2_1];return s??fa.i1e(this.q1c_1,this.r1c_1,e,this.t1c_1)}jq(r){this.s1c_1.p1d_1!==0&&(this.q1c_1.r1a(),this.q1c_1.t1a(),this.q1c_1.v1a(this.s1c_1.p1d_1))}ar(r,e){switch(this.s1c_1.x2_1){case 1:this.q1c_1.p1a_1||this.q1c_1.v1a(44),this.q1c_1.s1a();break;case 2:if(this.q1c_1.p1a_1)this.w1c_1=!0,this.q1c_1.s1a();else{var t=this,i;e%2|0?(this.q1c_1.v1a(58),this.q1c_1.u1a(),i=!1):(this.q1c_1.v1a(44),this.q1c_1.s1a(),i=!0),t.w1c_1=i}break;case 3:e===0&&(this.w1c_1=!0),e===1&&(this.q1c_1.v1a(44),this.q1c_1.u1a(),this.w1c_1=!1);break;default:this.q1c_1.p1a_1||this.q1c_1.v1a(44),this.q1c_1.s1a(),this.lr(wC(r,this.r1c_1,e)),this.q1c_1.v1a(58),this.q1c_1.u1a();break}return!0}mr(r){var e;if(ev(r)){var t,i=this.q1c_1;if(i instanceof sf)t=this.q1c_1;else{var a=this.q1c_1.o1a_1,s=this.w1c_1;t=new sf(a,s)}var o=t;e=fa.i1e(o,this.r1c_1,this.s1c_1,null)}else if(WC(r)){var u,f=this.q1c_1;if(f instanceof of)u=this.q1c_1;else{var c=this.q1c_1.o1a_1,v=this.w1c_1;u=new of(c,v)}var h=u;e=fa.i1e(h,this.r1c_1,this.s1c_1,null)}else this.x1c_1!=null?(this.y1c_1=r.io(),e=this):e=super.mr(r);return e}cr(){this.q1c_1.x1a("null")}dr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.g1b(r)}er(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.b1b(r)}fr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.d1b(r)}gr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.e1b(r)}hr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.f1b(r)}ir(r){if(this.w1c_1?this.lr(r.toString()):this.q1c_1.z1a(r),!this.v1c_1.o17_1&&!ic(r))throw Uh(r)}jr(r){if(this.w1c_1?this.lr(r.toString()):this.q1c_1.a1b(r),!this.v1c_1.o17_1&&!ac(r))throw Uh(r)}kr(r){this.lr(yr(r))}lr(r){return this.q1c_1.h1b(r)}}class su extends c0{constructor(r,e,t){t=t===l?null:t,super(),this.l1e_1=r,this.m1e_1=e,this.n1e_1=t,this.o1e_1=this.x17().n15_1}x17(){return this.l1e_1}l2(){return this.m1e_1}vq(){return this.x17().vq()}q1e(){var r=this.u13(),e;r==null?e=null:e=this.r1e(r);var t=e;return t??this.l2()}p1e(r){return this.w13()+("."+r)}y17(){return this.q1e()}hq(r){var e;r:{var t;if(r instanceof ma?t=this.x17().n15_1.m17_1:t=!0,t){e=r.ln(this);break r}var i=_l(r.jn(),this.x17()),a=this.y17(),s=r.jn().io();if(!(a instanceof nr)){var o="Expected "+Br(nr).uc()+", but had "+Nr(a).uc()+" as the serialized body of "+s,u=this.w13(),f;if(this.x17().n15_1.v17_1){var c=b(a);f=b(Jr(c))}else f=null;var v=f;throw Pr.m19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.i18(i),p=d==null?null:On(d),g=p==null?null:Hn(p),y;try{y=B1(r,this,g)}catch(P){if(P instanceof Gn){var x=P,k=fn(x.message),S;if(this.x17().n15_1.v17_1){var I=h.toString();S=b(Jr(I))}else S=null;var z=S;throw Pr.m19(Kr(-1,k,null,null,z),k,-1,null,z,null)}else throw P}var q=y,T=E(q,la)?q:m();e=Py(this.x17(),i,h,T)}return e}v13(r,e){return e}iq(r){var e=this.q1e(),t=r.jo(),i,a;if(D(t,Gs())?a=!0:a=t instanceof Oa,a){var s=this.x17(),o=r.io();if(!(e instanceof hn)){var u="Expected "+Br(hn).uc()+", but had "+Nr(e).uc()+" as the serialized body of "+o,f=this.w13(),c;if(this.x17().n15_1.v17_1){var v=b(e);c=b(Jr(v))}else c=null;var h=c;throw Pr.m19(Kr(-1,u,f,null,h),u,-1,f,h,null)}i=new uf(s,e)}else if(D(t,tu())){var d=this.x17(),p=dl(r.ro(0),d.vq()),g=p.jo(),y,x;if(g instanceof Yn?x=!0:x=D(g,Bi()),x){var k=this.x17(),S=r.io();if(!(e instanceof nr)){var I="Expected "+Br(nr).uc()+", but had "+Nr(e).uc()+" as the serialized body of "+S,z=this.w13(),q;if(this.x17().n15_1.v17_1){var T=b(e);q=b(Jr(T))}else q=null;var P=q;throw Pr.m19(Kr(-1,I,z,null,P),I,-1,z,P,null)}y=new uy(k,e,r)}else if(d.n15_1.h17_1){var $=this.x17(),j=r.io();if(!(e instanceof hn)){var U="Expected "+Br(hn).uc()+", but had "+Nr(e).uc()+" as the serialized body of "+j,J=this.w13(),M;if(this.x17().n15_1.v17_1){var F=b(e);M=b(Jr(F))}else M=null;var R=M;throw Pr.m19(Kr(-1,U,J,null,R),U,-1,J,R,null)}y=new uf($,e)}else throw wy(p);i=y}else{var X=this.x17(),H=r.io();if(!(e instanceof nr)){var er="Expected "+Br(nr).uc()+", but had "+Nr(e).uc()+" as the serialized body of "+H,Z=this.w13(),W;if(this.x17().n15_1.v17_1){var sr=b(e);W=b(Jr(sr))}else W=null;var ur=W;throw Pr.m19(Kr(-1,er,Z,null,ur),er,-1,Z,ur,null)}i=new Ua(X,e,r,this.n1e_1)}return i}jq(r){}up(){var r=this.q1e();return!(r instanceof de)}s1e(r){return this.r1e(r)!==Xs()}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:m())}t1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of boolean",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=Gc(f),v;c==null?Bn(this,f,"boolean",r):v=c,e=v;break r}catch(h){if(h instanceof B)Bn(this,f,"boolean",r);else throw h}}return e}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:m())}u1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of byte",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=na(f),v,h=Fe(-128,127);uo(E(h,ta)?h:m(),c)?v=Qu(c):v=null;var d=v,p;d==null?Bn(this,f,"byte",r):p=d,e=p;break r}catch(g){if(g instanceof B)Bn(this,f,"byte",r);else throw g}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:m())}v1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of short",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=na(f),v,h=Fe(-32768,32767);uo(E(h,ta)?h:m(),c)?v=r1(c):v=null;var d=v,p;d==null?Bn(this,f,"short",r):p=d,e=p;break r}catch(g){if(g instanceof B)Bn(this,f,"short",r);else throw g}}return e}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:m())}w1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of int",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=na(f),v,h=Fe(-2147483648,2147483647);uo(E(h,ta)?h:m(),c)?v=Xr(c):v=null;var d=v,p;d==null?Bn(this,f,"int",r):p=d,e=p;break r}catch(g){if(g instanceof B)Bn(this,f,"int",r);else throw g}}return e}c14(r){return this.w1e(r!=null&&typeof r=="string"?r:m())}x1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of long",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=na(f),v;c==null?Bn(this,f,"long",r):v=c,e=v;break r}catch(h){if(h instanceof B)Bn(this,f,"long",r);else throw h}}return e}d14(r){return this.x1e(r!=null&&typeof r=="string"?r:m())}y1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of float",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=nC(f),v;c==null?Bn(this,f,"float",r):v=c,e=v;break r}catch(S){if(S instanceof B)Bn(this,f,"float",r);else throw S}}var h=e,d=this.x17().n15_1.o17_1;if(d||ic(h))return h;var p=Dh(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.x17().n15_1.v17_1){var x=b(this.q1e());y=b(Jr(x))}else y=null;var k=y;throw Pr.m19(Kr(-1,p,null,g,k),p,-1,null,k,g)}e14(r){return this.y1e(r!=null&&typeof r=="string"?r:m())}z1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of double",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=eC(f),v;c==null?Bn(this,f,"double",r):v=c,e=v;break r}catch(S){if(S instanceof B)Bn(this,f,"double",r);else throw S}}var h=e,d=this.x17().n15_1.o17_1;if(d||ac(h))return h;var p=Dh(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.x17().n15_1.v17_1){var x=b(this.q1e());y=b(Jr(x))}else y=null;var k=y;throw Pr.m19(Kr(-1,p,null,g,k),p,-1,null,k,g)}f14(r){return this.z1e(r!=null&&typeof r=="string"?r:m())}a1f(r){var e;r:{var t=this.r1e(r);if(!(t instanceof vr)){var i="Expected "+Br(vr).uc()+", but had "+Nr(t).uc()+" as the serialized body of char",a=this.p1e(r),s;if(this.x17().n15_1.v17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw Pr.m19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var f=t;try{var c=new zn(rk(f.c18())),v;c==null?Bn(this,f,"char",r):v=c,e=v.x1_1;break r}catch(h){if(h instanceof B)Bn(this,f,"char",r);else throw h}}return e}g14(r){return this.a1f(r!=null&&typeof r=="string"?r:m())}b1f(r){var e=this.r1e(r);if(!(e instanceof vr)){var t="Expected "+Br(vr).uc()+", but had "+Nr(e).uc()+" as the serialized body of string",i=this.p1e(r),a;if(this.x17().n15_1.v17_1){var s=b(e);a=b(Jr(s))}else a=null;var o=a;throw Pr.m19(Kr(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ct)){var f="Expected string value for a non-null key '"+r+"', got null literal instead",c=this.p1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.x17().n15_1.v17_1){var d=b(this.q1e());h=b(Jr(d))}else h=null;var p=h;throw Pr.m19(Kr(-1,f,c,v,p),f,-1,c,p,v)}if(!u.k18_1&&!this.x17().n15_1.g17_1){var g="String literal for value of key '"+r+"' should be quoted",y=this.p1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.x17().n15_1.v17_1){var S=b(this.q1e());k=b(Jr(S))}else k=null;var I=k;throw Pr.m19(Kr(-1,g,y,x,I),g,-1,y,I,x)}return u.m18_1}h14(r){return this.b1f(r!=null&&typeof r=="string"?r:m())}c1f(r,e){var t;if(ev(e)){var i=this.x17(),a=this.r1e(r),s=e.io();if(!(a instanceof vr)){var o="Expected "+Br(vr).uc()+", but had "+Nr(a).uc()+" as the serialized body of "+s,u=this.p1e(r),f;if(this.x17().n15_1.v17_1){var c=b(a);f=b(Jr(c))}else f=null;var v=f;throw Pr.m19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=iv(i,a.c18());t=new Fc(h,this.x17())}else t=super.i14(r,e);return t}i14(r,e){return this.c1f(r!=null&&typeof r=="string"?r:m(),e)}fq(r){return this.u13()!=null?super.fq(r):new ly(this.x17(),this.l2(),this.n1e_1).fq(r)}}class Ua extends su{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.j1f_1=e,this.k1f_1=a,this.l1f_1=this.l2().r2().x(),this.m1f_1=this.o1e_1.j17_1?null:new Lc(t),this.n1f_1=null,this.o1f_1=null}l2(){return this.j1f_1}xq(r){var e=this.l1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=uu(r,this.x17(),i);if(a!==-3){if(this.o1e_1.l17_1&&ZC(this,r,a,t.l2()))continue r;var s=this.m1f_1;return s==null||s.v1b(a),this.n1f_1=i,this.o1f_1=t.l2(),a}i!==this.n1e_1&&!nv(r,this.x17())&&VC(this,i)}var o=this.m1f_1,u=o==null?null:o.w1b(),f=u??-1;return f!==-1&&(this.n1f_1=r.oo(f),this.o1f_1=null),f}up(){var r,e=this.m1f_1,t=e==null?null:e.u1b_1;return t??!1?r=!1:r=super.up(),r}q13(r,e){var t=this.n1f_1;return t??r.oo(e)}r1e(r){var e=this.o1f_1;return e??ze(this.l2(),r)}iq(r){if(r===this.k1f_1){var e=this.x17(),t=this.q1e(),i=this.k1f_1.io();if(!(t instanceof nr)){var a="Expected "+Br(nr).uc()+", but had "+Nr(t).uc()+" as the serialized body of "+i,s=this.w13(),o;if(this.x17().n15_1.v17_1){var u=b(t);o=b(Jr(u))}else o=null;var f=o;throw Pr.m19(Kr(-1,a,s,null,f),a,-1,s,f,null)}return new Ua(e,t,r,this.n1e_1,this.k1f_1)}return super.iq(r)}}class uf extends su{constructor(r,e){super(r,e),this.v1f_1=e,this.w1f_1=this.v1f_1.c1(),this.x1f_1=-1}l2(){return this.v1f_1}q13(r,e){return e.toString()}r1e(r){return this.v1f_1.d1(i2(r))}xq(r){for(;this.x1f_1<(this.w1f_1-1|0);)return this.x1f_1=this.x1f_1+1|0,this.x1f_1;return-1}}class ly extends su{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.e1g_1=e,this.j14("primitive")}l2(){return this.e1g_1}xq(r){return 0}r1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw B.v(b(e))}return this.e1g_1}}class uy extends Ua{constructor(r,e,t){super(r,e,t),this.r1g_1=zi(e.p2()),this.s1g_1=Ws(this.r1g_1.c1(),2),this.t1g_1=-1}q13(r,e){var t=e/2|0;return this.r1g_1.d1(t)}xq(r){for(;this.t1g_1<(this.s1g_1-1|0);)return this.t1g_1=this.t1g_1+1|0,this.t1g_1;return-1}r1e(r){return this.t1g_1%2|0?ze(this.l2(),r):xn(r)}jq(r){}}class fy{constructor(r){this.d16_1=r,this.e16_1=0,this.f16_1=new ay(this.d16_1),this.g16_1=null,this.h16_1=Qr.f()}x1g(){}v1d(){var r=this.y1g(),e=this.v1g();return r>=C(e)||r===-1?!1:Q(e,r)===44?(this.e16_1=this.e16_1+1|0,!0):!1}z1g(r){return!(r===125||r===93||r===58||r===44)}i16(){var r=this.l1d();r!==10&&this.y1b("Expected EOF after parsing, but had "+yr(Q(this.v1g(),this.e16_1-1|0))+" instead")}f1d(r){var e=this.l1d();if(e!==r){var t=ml(r),i=this.e16_1>0?this.e16_1-1|0:this.e16_1,a=this.e16_1===C(this.v1g())||i<0?"EOF":yr(Q(this.v1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.y1b(s,i)}return e}a1h(r){if(this.e16_1>0&&r===34){var e;r:{var t=this.e16_1;try{this.e16_1=this.e16_1-1|0,e=this.j1d();break r}finally{this.e16_1=t}}var i=e;i==="null"&&this.x1b("Expected string literal but 'null' literal was found",this.e16_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=Ze(r),s=ml(a),o=this.e16_1>0?this.e16_1-1|0:this.e16_1,u=this.e16_1===C(this.v1g())||o<0?"EOF":yr(Q(this.v1g(),o)),f="Expected "+s+", but had '"+u+"' instead";this.y1b(f,o)}g1d(){var r=this.v1g(),e=this.e16_1;r:for(;;){if(e=this.w1g(e),e===-1)break r;var t=Q(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.e16_1=e,Ze(t)}return this.e16_1=e,10}w1d(r){var e=this.y1g();e=this.w1g(e);var t=C(this.v1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==Q(this.v1g(),e+a|0))return!1}while(i<=3);return t>4&&Ze(Q(this.v1g(),e+4|0))===0?!1:(r&&(this.e16_1=e+4|0),!0)}d1e(r,e){return r=r===l?!0:r,e===l?this.w1d(r):e.w1d.call(this,r)}x1d(r){var e=this.g1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.j1d()}else{if(e!==1)return null;t=this.i1d()}var i=t;return this.g16_1=i,i}b1h(){this.g16_1=null}c1h(r,e){var t=this.v1g();return b(Dn(t,r,e))}i1d(){return this.g16_1!=null?Hh(this):this.a1e()}consumeString2(r,e,t){for(var i=t,a=e,s=Q(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.w1g(XC(this,a,i)),i===-1&&this.y1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.u1g(a,i),i=this.w1g(i),i===-1&&this.y1b("Unexpected EOF",i),a=i)),s=Q(r,i);var u;o?u=Ru(this,a,i):u=this.c1h(a,i);var f=u;return this.e16_1=i+1|0,f}b1e(){var r=this.j1d();return r==="null"&&QC(this)&&this.y1b("Unexpected 'null' value instead of string literal"),r}j1d(){if(this.g16_1!=null)return Hh(this);var r=this.y1g();(r>=C(this.v1g())||r===-1)&&this.y1b("EOF",r);var e=Ze(Q(this.v1g(),r));if(e===1)return this.i1d();e!==0&&this.y1b("Expected beginning of the string, but got "+yr(Q(this.v1g(),r)));for(var t=!1;Ze(Q(this.v1g(),r))===0;)if(r=r+1|0,r>=C(this.v1g())){t=!0,this.u1g(this.e16_1,r);var i=this.w1g(r);if(i===-1)return this.e16_1=r,Ru(this,0,0);r=i}var a;t?a=Ru(this,this.e16_1,r):a=this.c1h(this.e16_1,r);var s=a;return this.e16_1=r,s}u1g(r,e){this.h16_1.ee(this.v1g(),r,e)}z1d(r){var e=O.m(),t=this.g1d();if(t!==8&&t!==6)return this.j1d(),or;r:for(;;){if(t=this.g1d(),t===1){r?this.j1d():this.a1e();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Yu(e)!==8&&this.y1b("found ] instead of }"),ch(e)):i===7?(Yu(e)!==6&&this.y1b("found } instead of ]"),ch(e)):i===10&&this.y1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.l1d(),e.c1()===0)return or}}toString(){return"JsonReader(source='"+b(this.v1g())+"', currentPosition="+this.e16_1+")"}y1d(r){var e=this.c1h(0,this.e16_1),t=dS(e,r);this.x1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}x1b(r,e,t){throw _C(this,r,e,this.f16_1.n1c(),t,this.v1g())}y1b(r,e,t,i){return e=e===l?this.e16_1:e,t=t===l?null:t,i===l?this.x1b(r,e,t):i.x1b.call(this,r,e,t)}f1e(){var r=this.y1g();r=this.w1g(r),(r>=C(this.v1g())||r===-1)&&this.y1b("EOF");var e;Q(this.v1g(),r)===34?(r=r+1|0,r===C(this.v1g())&&this.y1b("EOF"),e=!0):e=!1;var t=e,i=new w(0,0),a=new w(0,0),s=!1,o=!1,u=!1,f=r;r:for(;r!==C(this.v1g());){var c=Q(this.v1g(),r);if((c===101||c===69)&&!u){r===f&&this.y1b("Unexpected symbol '"+yr(c)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(c===45&&u){r===f&&this.y1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(c===43&&u){r===f&&this.y1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(c===45){r!==f&&this.y1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Ze(c);if(v!==0)break r;r=r+1|0;var h=se(c,48);if(0<=h&&h<=9||this.y1b("Unexpected symbol '"+yr(c)+"' in numeric literal",r-1|0),u){var d=a,p=Tr(d,L(10));a=dr(p,L(h));continue r}var g=i,y=Tr(g,L(10));i=Hr(y,L(h)),tr(i,new w(0,0))>0&&this.y1b("Numeric value overflow")}var x=r!==f;if((f===r||s&&f===(r-1|0))&&this.y1b("Expected numeric literal",r),t&&(x||this.y1b("EOF"),Q(this.v1g(),r)!==34&&this.y1b("Expected closing quotation mark",r),r=r+1|0),this.e16_1=r,u){var k=re(i)*e7(a,o);(k>re(new w(-1,2147483647))||k<re(new w(0,-2147483648)))&&this.y1b("Numeric value overflow"),Math.floor(k)!==k&&this.y1b("Can't convert "+k+" to Long"),i=Un(k)}var S;return s?S=i:ir(i,new w(0,-2147483648))?this.y1b("Numeric value overflow"):S=an(i),S}n18(){var r=this.f1e(),e=this.l1d();if(e!==10){var t=this.e16_1>0?this.e16_1-1|0:this.e16_1,i=this.e16_1===C(this.v1g())||t<0?"EOF":yr(Q(this.v1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.y1b(a,t)}return r}e1e(){var r=this.y1g();r===C(this.v1g())&&this.y1b("EOF");var e;Q(this.v1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=n7(this,r);return t&&(this.e16_1===C(this.v1g())&&this.y1b("EOF"),Q(this.v1g(),this.e16_1)!==34&&this.y1b("Expected closing quotation mark"),this.e16_1=this.e16_1+1|0),i}}class cy{constructor(){xf=this,this.d1h_1=ps(117),this.e1h_1=new Int8Array(126),i7(this),a7(this)}}class $c extends fy{constructor(r,e){super(e),this.q1h_1=r}v1g(){return this.q1h_1}w1g(r){return r<this.v1g().length?r:-1}l1d(){var r=this.v1g(),e=this.e16_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.e16_1=e,Ze(i)}return this.e16_1=r.length,10}h1d(){var r=this.e16_1;if(r===-1)return!1;var e=this.v1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.e16_1=r,this.z1g(t)}return this.e16_1=r,!1}y1g(){var r=this.e16_1;if(r===-1)return r;var e=this.v1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.e16_1=r,r}u1d(r){this.e16_1===-1&&this.a1h(r);var e=this.v1g(),t=this.e16_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.e16_1=t,a===r)return or;this.a1h(r)}this.e16_1=-1,this.a1h(r)}a1e(){this.u1d(34);var r=this.e16_1,e=Ml(this.v1g(),34,r);if(e===-1){this.j1d();var t=ml(1),i=this.e16_1,a=this.e16_1===C(this.v1g())||i<0?"EOF":yr(Q(this.v1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.y1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.v1g(),u)===92)return this.consumeString2(this.v1g(),this.e16_1,u)}while(o<e);return this.e16_1=e+1|0,oe(this.v1g(),r,e)}c1e(r,e){var t=this.e16_1;try{if(this.l1d()!==6)return null;var i=this.x1d(e);return i!==r||(this.b1h(),this.l1d()!==5)?null:this.x1d(e)}finally{this.e16_1=t,this.b1h()}}}class vy extends $c{l1d(){var r=this.v1g(),e=this.y1g();return e>=r.length||e===-1?10:(this.e16_1=e+1|0,Ze(K(r,e)))}h1d(){var r=this.y1g();return r>=this.v1g().length||r===-1?!1:this.z1g(K(this.v1g(),r))}u1d(r){var e=this.v1g(),t=this.y1g();(t>=e.length||t===-1)&&(this.e16_1=-1,this.a1h(r));var i=K(e,t);if(this.e16_1=t+1|0,i===r)return or;this.a1h(r)}g1d(){var r=this.v1g(),e=this.y1g();return e>=r.length||e===-1?10:(this.e16_1=e,Ze(K(r,e)))}y1g(){var r=this.e16_1;if(r===-1)return r;var e=this.v1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=Ml(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=Oo(e,"*/",r+2|0),r===-1?(this.e16_1=e.length,this.y1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.e16_1=r,r}}class ff{constructor(){this.t15_1=Qr.ja(128)}c1b(r){this.t15_1.he(r)}w1a(r){this.t15_1.ga(r)}y1a(r){this.t15_1.fa(r)}i1b(r){gl(this.t15_1,r)}u15(){this.t15_1.ke()}toString(){return this.t15_1.toString()}}var fl;function qe(){return fl===l&&new R0,fl}function Yz(n,r){n=n===l?qe():n;var e=new L0(n);r(e);var t=e.d17();return new M0(t,e.a17_1)}function Zz(n){if(D(n.vq(),iu()))return or;var r=new Mc(n.n15_1);n.vq().y14(r)}var Ph;function Jc(){if(Ph)return or;Ph=!0,hy=new go("NONE",0),dy=new go("ALL_JSON_OBJECTS",1),py=new go("POLYMORPHIC",2)}var hy,dy,py;function _y(){return Jc(),hy}function Vz(){return Jc(),dy}function gy(){return Jc(),py}function Xz(){return me(),my}var my,Hc,cf;function jr(n){me();var r=n instanceof nr?n:null,e;return r==null?Kc(n,"JsonObject"):e=r,e}function xn(n){return me(),n==null?Xs():new ct(n,!0)}function fs(n){me();var r=n instanceof hn?n:null,e;return r==null?Kc(n,"JsonArray"):e=r,e}var cl;function Xs(){return cl===l&&new de,cl}function Hn(n){me();var r;return n instanceof de?r=null:r=n.c18(),r}function On(n){me();var r=n instanceof vr?n:null,e;return r==null?Kc(n,"JsonPrimitive"):e=r,e}function Qz(n){me();var r;try{r=na(n)}catch(t){var e;if(t instanceof Pr)e=null;else throw t;r=e}return r}function rC(n){me();var r;try{r=na(n)}catch(o){var e;if(o instanceof Pr)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Fe(-2147483648,2147483647);return uo(E(s,ta)?s:m(),a)?Xr(a):null}function Gc(n){return me(),YC(n.c18())}function Kc(n,r){throw me(),B.v("Element "+b(Nr(n))+" is not a "+r)}function na(n){return me(),iv(qe(),n.c18()).n18()}function nC(n){me();var r=n.c18();return qo(r)}function eC(n){return me(),qo(n.c18())}var Bh;function me(){Bh||(Bh=!0,my=Ks("kotlinx.serialization.json.JsonUnquotedLiteral",ks()))}function vl(n,r,e){return n.p18(r,xn(e))}function tC(n){return n.fp("JsonPrimitive",rs(iC)),n.fp("JsonNull",rs(aC)),n.fp("JsonLiteral",rs(sC)),n.fp("JsonObject",rs(oC)),n.fp("JsonArray",rs(lC)),or}function iC(){return Wc().s18_1}function aC(){return Zc().t18_1}function sC(){return yy().u18_1}function oC(){return ou().v18_1}function lC(){return Yc().w18_1}var vf;function vt(){return vf===l&&new W0,vf}var hf;function Wc(){return hf===l&&new Y0,hf}var df;function uC(){return df===l&&new Z0,df}var pf;function Yc(){return pf===l&&new V0,pf}var _f;function fC(){return _f===l&&new X0,_f}var gf;function ou(){return gf===l&&new Q0,gf}var mf;function Zc(){return mf===l&&new ry,mf}function rs(n){return new Ys(n)}var yf;function yy(){return yf===l&&new ny,yf}function Da(n){cC(n)}function lu(n){var r=E(n,au)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(Nr(n))));return e=r,e}function Vc(n){lu(n)}function cC(n){var r=E(n,Dc)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(Nr(n))));return e=r,e}function We(n){var r=n.v19_1,e=Ii;return Sa("original",1,e,vC(),null),r.l2()}function vC(){return Ge(n=>We(n),1,0,5)}function hC(n,r){return r.n15_1.i17_1?new ey(n,r):new Vs(n)}function dC(n,r,e){return n.u1b_1=!r.so(e)&&r.ro(e).ko(),n.u1b_1}function pC(n){return Ge((r,e)=>{var t=n;return dC(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(Dn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=dn(i,0),f=Ct(a,C(n));return s+b(Dn(n,u,f))+o}function Kr(n,r,e,t,i){return Qc(n,r,e,t,i)}function Xc(n,r){return r=r===l?null:r,Pr.m19(Qc(-1,n,null,r,null),n,-1,null,null,r)}function Ni(n,r){r=r===l?"object":r,n.x1b("Trailing comma before the end of JSON "+r,n.e16_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Nh(n,r){n.y1b(rv(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function wy(n){return Zs.n1a("Value of type '"+n.io()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.jo().toString()+"'"),n.io(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Uh(n,r){return r=r===l?null:r,Zs.n1a(rv(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Dh(n,r){return rv(n,r)}function Qc(n,r,e,t,i){var a=Qr.f();return n>=0&&a.fa("Unexpected JSON token at offset "+n+": "),a.fa(r),e==null||ft(e)||(a.fa(" at path: "),a.fa(e)),t==null||ft(t)||a.fa(`
`+t),i!=null&&(a.fa(`
JSON input: `),a.fa(i)),a.toString()}function rv(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function _C(n,r,e,t,i,a){var s;n.d16_1.v17_1?s=b(Jr(a,e)):s=null;var o=s;return Pr.m19(Qc(e,r,t,i,o),r,e,t,o,i)}function gC(n,r){var e;return r==null||ft(r)?e="":e=`
`+r,n+e}function mC(){return Te(),by}var by;function yC(){return Te(),ky}var ky;function nv(n,r){Te();var e;if(r.n15_1.f17_1)e=!0;else{var t=n.no(),i;r:{var a;if(E(t,Y)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof $0){i=!0;break r}}i=!1}e=i}return e}function uu(n,r,e){if(Te(),xy(r,n)){var t=e.toLowerCase();return Nu(n,r,t)}var i=fu(n,r);if(i!=null)return Nu(n,r,e);var a=n.po(e);return a!==-3||!r.n15_1.p17_1?a:Nu(n,r,e)}function wC(n,r,e){Te();var t=fu(n,r);return t==null?n.oo(e):Sy(n,r,t)[e]}function bC(n,r){Te();var e=fu(n,r);return e==null?ZI(n):Hp(Sy(n,r,e))}function xy(n,r){return Te(),n.n15_1.r17_1&&D(r.jo(),Bi())}function Nu(n,r,e){Te();var t=kC(r,n).o2(e);return t??-3}function fu(n,r){return Te(),D(n.jo(),eu())?r.n15_1.q17_1:null}function Sy(n,r,e){Te();var t=Uy(r),i=yC();return t.a1c(n,i,SC(n,e))}function kC(n,r){Te();var e=Uy(n),t=mC();return e.a1c(r,t,EC(r,n))}function xC(n,r){Te();var e=fr.t4(),t=xy(r,n),i=fu(n,r),a=0,s=n.mo();if(a<s)do{var o=a;a=a+1|0;for(var u=n.qo(o),f=O.m(),c=u.x();c.y();){var v=c.z();v instanceof J0&&f.n(v)}var h=Hf(f),d=h==null?null:h.b1c_1;if(d!=null)for(var p=0,g=d.length;p<g;){var y=d[p];p=p+1|0;var x;t?x=y.toLowerCase():x=y,Rh(e,n,x,o)}var k;t?k=n.oo(o).toLowerCase():i!=null?k=i.c1c(n,o,n.oo(o)):k=null;var S=k;S==null||Rh(e,n,S,o)}while(a<s);var I;return e.i1()?I=Ar():I=e,I}function SC(n,r){return()=>{for(var e=Pn.e1(),t=0,i=n.mo(),a=Array(i);t<i;){var s=t,o=n.oo(s),u=r.c1c(n,s,o);if(!e.n(u))throw Zs.n1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.io());a[s]=u,t=t+1|0}return a}}function EC(n,r){return()=>xC(n,r)}function Rh(n,r,e,t){var i=D(r.jo(),Bi())?"enum value":"property";if((E(n,wn)?n:m()).m2(e))throw Xc("The suggested name '"+e+"' for "+i+" "+r.oo(t)+" is already one of the names for "+i+" "+(r.oo(ze(n,e))+" in "+b(r)));n.s2(e,t)}var Lh;function Te(){Lh||(Lh=!0,by=new ya,ky=new ya)}var wf,bf;function Mh(n){var r=Ws(n.h1c_1,2);n.f1c_1=E_(n.f1c_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.g1c_1,s=a.length,o=a;Qk(o,i,0,0,s),n.g1c_1=i}function IC(n,r,e){var t=r.jo(),i;if(t instanceof Oa?i=!0:i=D(t,z0()),i)throw B.v("Serializer for "+e.uc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.o1c_1||!n.p1c_1)return or;var a,s;if(D(t,Gs())||D(t,tu())?s=!0:s=t instanceof Yn,s?a=!0:a=t instanceof Zl,a)throw B.v("Serializer for "+e.uc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function zC(n,r,e,t){var i=cu(),a=OC().c1(),s=Array(a),o=fa.z1c(r,n,i,s);o.xr(e,t)}function CC(n){var r=n.a1d_1.f1d(6);n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var e=fr.t4();r:for(;n.a1d_1.h1d();){var t=n.b1d_1?n.a1d_1.j1d():n.a1d_1.i1d();n.a1d_1.f1d(5);var i=n.k1d();e.s2(t,i),r=n.a1d_1.l1d();var a=r;if(a!==4){if(a===7)break r;n.a1d_1.y1b("Expected end of the object or comma")}}return r===6?n.a1d_1.f1d(7):r===4&&(n.c1d_1||Ni(n.a1d_1),n.a1d_1.f1d(7)),new nr(e)}function*qC(n,r,e){var t=n.a1d_1.f1d(6);n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var i=fr.t4();r:for(;n.a1d_1.h1d();){var a=n.b1d_1?n.a1d_1.j1d():n.a1d_1.i1d();n.a1d_1.f1d(5);var s=yield*r.zk(or,e);i.s2(a,s),t=n.a1d_1.l1d();var o=t;if(o!==4){if(o===7)break r;n.a1d_1.y1b("Expected end of the object or comma")}}return t===6?n.a1d_1.f1d(7):t===4&&(n.c1d_1||Ni(n.a1d_1),n.a1d_1.f1d(7)),new nr(i)}function Ey(n){var r=n.a1d_1.l1d();n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var e=O.m();r:for(;n.a1d_1.h1d();){var t=n.k1d();if(e.n(t),r=n.a1d_1.l1d(),r!==4){var i=n.a1d_1,a=r===9,s=i.e16_1;if(!a){var o="Expected end of the array or comma";i.y1b(o,s)}break r}}return r===8?n.a1d_1.f1d(9):r===4&&(n.c1d_1||Ni(n.a1d_1,"array"),n.a1d_1.f1d(9)),new hn(e)}function hl(n,r){var e;n.b1d_1||!r?e=n.a1d_1.j1d():e=n.a1d_1.i1d();var t=e;return!r&&t==="null"?Xs():new ct(t,r)}function AC(n){return XS(new Tp(TC(n)),or)}function TC(n){return Ge((r,e,t)=>qk(t,function*(i){var a=n.a1d_1.g1d(),s;if(a===1)s=hl(n,!0);else if(a===0)s=hl(n,!1);else if(a===6){var o=n;o.e1d_1=o.e1d_1+1|0,o.e1d_1>=o.d1d_1&&Ss(o.d1d_1);var u=yield*qC(n,r,i);o.e1d_1=o.e1d_1-1|0,s=u}else if(a===8){var f=n;f.e1d_1=f.e1d_1+1|0,f.e1d_1>=f.d1d_1&&Ss(f.d1d_1);var c=Ey(n);f.e1d_1=f.e1d_1-1|0,s=c}else n.a1d_1.y1b("Can't begin reading element, unexpected token");return s}),2)}function Ss(n){throw Xc("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var Fh;function Ra(){if(Fh)return or;Fh=!0,Iy=new ns("OBJ",0,123,125),zy=new ns("LIST",1,91,93),Cy=new ns("MAP",2,123,125),qy=new ns("POLY_OBJ",3,91,93)}var Iy,zy,Cy,qy;function jC(){return Ra(),[cu(),kf(),pl(),Ty()]}function OC(){return Ra(),Uu==null&&(Uu=$2(jC())),Uu}var Uu;function Ay(n,r){var e=r.jo(),t;if(e instanceof Oa)t=Ty();else if(D(e,Gs()))t=kf();else if(D(e,tu())){var i=dl(r.ro(0),n.vq()),a=i.jo(),s,o;if(a instanceof Yn?o=!0:o=D(a,Bi()),o)s=pl();else if(n.n15_1.h17_1)s=kf();else throw wy(i);t=s}else t=cu();return t}function dl(n,r){var e;if(D(n.jo(),z0())){var t=II(r,n),i=t==null?null:dl(t,r);e=i??n}else n.lo()?e=dl(n.ro(0),r):e=n;return e}function cu(){return Ra(),Iy}function kf(){return Ra(),zy}function pl(){return Ra(),Cy}function Ty(){return Ra(),qy}function _l(n,r){for(var e=n.no().x();e.y();){var t=e.z();if(t instanceof F0)return t.q1d_1}return r.n15_1.n17_1}function PC(n,r,e,t){return NC(n,r,e,t)}function BC(n){if(n instanceof Zl){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(r))}if(n instanceof Yn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(e))}if(n instanceof Oa){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw xr.o3(b(t))}}function NC(n,r,e,t){if(bC(e.jn(),n).l1(t)){var i=r.jn().io(),a=e.jn().io(),s=n.n15_1.u17_1.equals(Vz())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Zs.n1a(o,a,u)}}function UC(n,r,e){return r==null?!1:r.t1d_1===e?(r.t1d_1=null,!0):!1}function DC(n,r){for(;n.xq(r)!==-1;);}function RC(n){n.x15_1.g1d()===4&&n.x15_1.y1b("Unexpected leading comma")}function LC(n){var r=!1,e=!!(n.z15_1%2|0);e?n.z15_1!==-1&&(r=n.x15_1.v1d()):n.x15_1.u1d(58);var t;if(n.x15_1.h1d()){if(e)if(n.z15_1===-1){var i=n.x15_1,a=!r,s=i.e16_1;if(!a){var o="Unexpected leading comma";i.y1b(o,s)}}else{var u=n.x15_1,f=r,c=u.e16_1;if(!f){var v="Expected comma after the key-value pair";u.y1b(v,c)}}n.z15_1=n.z15_1+1|0,t=n.z15_1}else r&&!n.v15_1.n15_1.s17_1&&Ni(n.x15_1),t=-1;return t}function MC(n,r,e){var t=n.v15_1,i;r:{var a=r.so(e),s=r.ro(e),o;if(a&&!s.ko()?o=n.x15_1.w1d(!0):o=!1,o){i=!0;break r}if(D(s.jo(),Bi())){var u;if(s.ko()?u=n.x15_1.w1d(!1):u=!1,u){i=!1;break r}var f=n.x15_1.x1d(n.b16_1.g17_1),c;if(f==null){i=!1;break r}else c=f;var v=c,h=uu(s,t,v),d=!t.n15_1.j17_1&&s.ko();if(h===-3&&(a||d)){n.x15_1.i1d(),i=!0;break r}}i=!1}return i}function FC(n,r){for(var e=n.x15_1.v1d();n.x15_1.h1d();){e=!1;var t=HC(n);n.x15_1.u1d(58);var i=uu(r,n.v15_1,t),a;if(i!==-3){var s;if(n.b16_1.l17_1&&MC(n,r,i))e=n.x15_1.v1d(),s=!1;else{var o=n.c16_1;return o==null||o.v1b(i),i}a=s}else a=!0;var u=a;u&&(e=$C(n,r,t))}e&&!n.v15_1.n15_1.s17_1&&Ni(n.x15_1);var f=n.c16_1,c=f==null?null:f.w1b();return c??-1}function $C(n,r,e){return nv(r,n.v15_1)||UC(n,n.a16_1,e)?n.x15_1.z1d(n.b16_1.g17_1):(n.x15_1.f16_1.m1c(),n.x15_1.y1d(e)),n.x15_1.v1d()}function JC(n){var r=n.x15_1.v1d(),e;return n.x15_1.h1d()?(n.z15_1!==-1&&!r&&n.x15_1.y1b("Expected end of the array or comma"),n.z15_1=n.z15_1+1|0,e=n.z15_1):(r&&!n.v15_1.n15_1.s17_1&&Ni(n.x15_1,"array"),e=-1),e}function HC(n){var r;return n.b16_1.g17_1?r=n.x15_1.b1e():r=n.x15_1.a1e(),r}function GC(){return tv(),jy}var jy;function KC(n,r,e){n.q1c_1.s1a(),n.lr(r),n.q1c_1.v1a(58),n.q1c_1.u1a(),n.lr(e)}function ev(n){return tv(),n.lo()&&GC().l1(n)}function WC(n){return tv(),n.lo()&&D(n,Xz())}var $h;function tv(){$h||($h=!0,jy=si([Ic(Gl()).jn(),ru(Ls()).jn(),zc(Hl()).jn(),Cc(Kl()).jn()]))}function Du(){return vu(),Oy}var Oy;function oo(n){vu();var r=n&15,e;if(r<10){var t=48,i=G(t);e=Xe(r+i|0)}else{var a=r-10|0,s=97,o=G(s);e=Xe(a+o|0)}return e}function gl(n,r){vu(),n.ga(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=G(s);o<Du().length&&Du()[o]!=null&&(n.ee(r,e,a),n.fa(Du()[o]),e=a+1|0)}while(t<i);e!==0?n.ee(r,e,r.length):n.fa(r),n.ga(34)}function YC(n){return vu(),th(n,"true",!0)?!0:th(n,"false",!0)?!1:null}var Jh;function vu(){if(!Jh){Jh=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=oo(e>>12),i=oo(e>>8),a=oo(e>>4),s=oo(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[G(o)]='\\"';var u=92;n[G(u)]="\\\\";var f=9;n[G(f)]="\\t";var c=8;n[G(c)]="\\b";var v=10;n[G(v)]="\\n";var h=13;n[G(h)]="\\r",n[12]="\\f",Oy=n;var d=new Int8Array(128),p=0;if(p<=31)do{var g=p;p=p+1|0,d[g]=1}while(p<=31);var y=34,x=G(y),k=34,S=G(k);d[x]=$n(S);var I=92,z=G(I),q=92,T=G(q);d[z]=$n(T);var P=9,$=G(P),j=116,U=G(j);d[$]=$n(U);var J=8,M=G(J),F=98,R=G(F);d[M]=$n(R);var X=10,H=G(X),er=110,Z=G(er);d[H]=$n(Z);var W=13,sr=G(W),ur=114,rr=G(ur);d[sr]=$n(rr);var Er=102,Ir=G(Er);d[12]=$n(Ir)}}function Py(n,r,e,t){var i=t.jn();return new Ua(n,e,i,r,i).hq(t)}function Bn(n,r,e,t){var i=Ce(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.p1e(t),o;if(n.x17().n15_1.v17_1){var u=b(n.q1e());o=b(Jr(u))}else o=null;var f=o;throw Pr.m19(Kr(-1,a,s,null,f),a,-1,s,f,null)}function ZC(n,r,e,t){var i=n.x17(),a;r:{var s=r.so(e),o=r.ro(e),u;if(s&&!o.ko()?u=t instanceof de:u=!1,u){a=!0;break r}if(D(o.jo(),Bi())){var f;if(o.ko()?f=t instanceof de:f=!1,f){a=!1;break r}var c=t instanceof vr?t:null,v=c==null?null:Hn(c),h;if(v==null){a=!1;break r}else h=v;var d=h,p=uu(o,i,d),g=!i.n15_1.j17_1&&o.ko();if(p===-3&&(s||g)){a=!0;break r}}a=!1}return a}function VC(n,r){var e="Encountered an unknown key '"+r+"'",t=n.w13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.x17().n15_1.v17_1){var s=n.l2().toString();a=b(Jr(s))}else a=null;var o=a;throw Pr.m19(Kr(-1,e,t,i,o),e,-1,t,o,i)}function XC(n,r,e){return n.u1g(r,e),r7(n,e+1|0)}function Ru(n,r,e){n.u1g(r,e);var t=n.h16_1.toString();return n.h16_1.je(0),t}function Hh(n){var r=fn(n.g16_1);return n.g16_1=null,r}function QC(n){return Q(n.v1g(),n.e16_1-1|0)!==34}function r7(n,r){var e=r;e=n.w1g(e),e===-1&&n.y1b("Expected escape sequence to continue, got EOF");var t=n.v1g(),i=e;e=i+1|0;var a=Q(t,i);if(a===117)return By(n,n.v1g(),e);var s=G(a),o=t7(s);return o===0&&n.y1b("Invalid escaped char '"+yr(a)+"'"),n.h16_1.ga(o),e}function By(n,r,e){return(e+4|0)>=C(r)?(n.e16_1=e,n.x1g(),(n.e16_1+4|0)>=C(r)&&n.y1b("Unexpected EOF during unicode escape"),By(n,r,n.e16_1)):(n.h16_1.ga(Xe((((lo(n,r,e)<<12)+(lo(n,r,e+1|0)<<8)|0)+(lo(n,r,e+2|0)<<4)|0)+lo(n,r,e+3|0)|0)),e+4|0)}function lo(n,r,e){var t=Q(r,e),i;if(48<=t&&t<=57){var a=G(t),s=48;i=a-G(s)|0}else if(97<=t&&t<=102){var o=G(t),u=97;i=(o-G(u)|0)+10|0}else if(65<=t&&t<=70){var f=G(t),c=65;i=(f-G(c)|0)+10|0}else n.y1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function n7(n,r){var e=n.w1g(r);(e>=C(n.v1g())||e===-1)&&n.y1b("EOF");var t=n.v1g(),i=e;e=i+1|0;var a=Q(t,i),s=G(a)|32,o,u=116;if(s===G(u))Gh(n,"rue",e),o=!0;else{var f=102;s===G(f)?(Gh(n,"alse",e),o=!1):n.y1b("Expected valid boolean literal prefix, but had '"+n.j1d()+"'")}return o}function Gh(n,r,e){(C(n.v1g())-e|0)<r.length&&n.y1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=Q(n.v1g(),e+a|0),u=G(s);u!==(G(o)|32)&&n.y1b("Expected valid boolean literal prefix, but had '"+n.j1d()+"'")}while(t<=i);n.e16_1=e+r.length|0}function e7(n,r){var e;switch(r){case!1:var t=-re(n);e=Math.pow(10,t);break;case!0:var i=re(n);e=Math.pow(10,i);break;default:Ts();break}return e}function Ze(n){var r;if(G(n)<126){var e=Ny().e1h_1;r=e[G(n)]}else r=0;return r}function ml(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function t7(n){return n<117?Ny().d1h_1[n]:0}function i7(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,ai(n,e,117)}while(r<=31);ai(n,8,98),ai(n,9,116),ai(n,10,110),ai(n,12,102),ai(n,13,114),Lu(n,47,47),Lu(n,34,34),Lu(n,92,92)}function a7(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Vi(n,e,127)}while(r<=32);Vi(n,9,3),Vi(n,10,3),Vi(n,13,3),Vi(n,32,3),wt(n,44,4),wt(n,58,5),wt(n,123,6),wt(n,125,7),wt(n,91,8),wt(n,93,9),wt(n,34,1),wt(n,92,2)}function ai(n,r,e){if(e!==117){var t=G(e);n.d1h_1[t]=Xe(r)}}function Lu(n,r,e){var t=G(r);return ai(n,t,e)}function Vi(n,r,e){n.e1h_1[r]=e}function wt(n,r,e){var t=G(r);return Vi(n,t,e)}var xf;function Ny(){return xf===l&&new cy,xf}function iv(n,r){return n.n15_1.t17_1?new vy(r,n.n15_1):new $c(r,n.n15_1)}function Uy(n){return n.p15_1}function Kh(n){return vs.o7(n)}_(Nc,"Json");N(R0,"Default");_(L0,"JsonBuilder");_(M0,"JsonImpl");_(F0,"JsonClassDiscriminator");_($0,"JsonIgnoreUnknownKeys");_(J0,"JsonNames");_(Uc,"JsonConfiguration");_(go,"ClassDiscriminatorMode");Lr(au,"JsonDecoder",l,l,[Vl,Xl]);rn(H0);_(Qe,"JsonElement",l,l,l,l,l,{0:vt});rn(Kz);_(vr,"JsonPrimitive",l,l,l,l,l,{0:Wc});rn(Wz);_(hn,"JsonArray",l,l,[qn],l,l,{0:Yc});rn(G0);_(nr,"JsonObject",l,l,[wn],l,l,{0:ou});N(de,"JsonNull",l,l,l,l,l,{0:Zc});_(ct,"JsonLiteral");_(xt,"JsonObjectBuilder");_(K0,"JsonArrayBuilder");N(W0,"JsonElementSerializer",l,l,[cr]);N(Y0,"JsonPrimitiveSerializer",l,l,[cr]);N(Z0,"JsonArrayDescriptor",l,l,[_e]);N(V0,"JsonArraySerializer",l,l,[cr]);N(X0,"JsonObjectDescriptor",l,l,[_e]);N(Q0,"JsonObjectSerializer",l,l,[cr]);N(ry,"JsonNullSerializer",l,l,[cr]);N(ny,"JsonLiteralSerializer",l,l,[cr]);Dr(Ys).ko=Ti;Dr(Ys).lo=ji;Dr(Ys).no=Ms;_(Ys,l,l,l,[_e]);Lr(Dc,"JsonEncoder",l,l,[bc]);_(Rc,"JsonException");_(Pr,"JsonDecodingException");_(Zs,"JsonEncodingException");_(Vs,"Composer");_(sf,"ComposerForUnsignedNumbers");_(of,"ComposerForUnquotedLiterals");_(ey,"ComposerWithPrettyPrint");_(Lc,"JsonElementMarker");N(ty,"Tombstone");N(iy,"RedactedKey");_(ay,"JsonPath");Dr(Mc).j15=sI;_(Mc,"JsonSerializersModuleValidator",l,l,[w0]);_(sy,"JsonTreeReader",l,l,l,[1]);_(ns,"LexerMode");_(ya,"Key",ya);_(lf,"DescriptorSchemaCache",lf);_(oy,"DiscriminatorHolder");_(xs,"StreamingJsonDecoder",l,l,[au]);_(Fc,"JsonDecoderForUnsignedTypes");_(fa,"StreamingJsonEncoder",l,l,[Dc]);_(su,"AbstractJsonTreeDecoder",l,l,[au]);_(Ua,"JsonTreeDecoder");_(uf,"JsonTreeListDecoder");_(ly,"JsonPrimitiveDecoder");_(uy,"JsonTreeMapDecoder");_(fy,"AbstractJsonLexer");N(cy,"CharMappings");_($c,"StringJsonLexer");_(vy,"StringJsonLexerWithComments");_(ff,"StringJsonWriter",ff);Hc=new H0;cf=new G0;wf=new ty;bf=new iy;var Wh=Math.imul;class Dy{constructor(r){this.b1i_1=r}fg(r,e){return this.b1i_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.b1i_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class vn{constructor(r,e){e=e===l?null:e,this.c1i_1=r,this.d1i_1=e}}class Ry{constructor(r){this.e1i_1=r}fg(r,e){return this.e1i_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.e1i_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Sf{constructor(r,e,t){this.t1j_1=r,this.u1j_1=e,this.v1j_1=t}}class Ly{constructor(r,e){this.l1k_1=r,this.m1k_1=e}}class My{constructor(r,e,t,i,a,s,o,u,f,c,v){this.n1k_1=r,this.o1k_1=e,this.p1k_1=t,this.q1k_1=i,this.r1k_1=a,this.s1k_1=s,this.t1k_1=o,this.u1k_1=u,this.v1k_1=f,this.w1k_1=c,this.x1k_1=v}}class Fy{constructor(r,e,t){this.y1k_1=r,this.z1k_1=e,this.a1l_1=t}}class $y{constructor(r){this.b1l_1=r}fg(r,e){return this.b1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.b1l_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Jy{constructor(r){this.c1l_1=r}fg(r,e){return this.c1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.c1l_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Hy{constructor(r){this.d1l_1=r}fg(r,e){return this.d1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.d1l_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Gy{constructor(r){this.e1l_1=r}fg(r,e){return this.e1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.e1l_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Ky{constructor(r){this.k1l_1=r}u4(){return this.k1l_1.x()}l1l(r){return Jn(r.m1k_1)}v4(r){return this.l1l(r)}}class Wy{constructor(r,e,t,i,a,s,o,u,f,c,v,h,d,p,g){e=e===l?hr():e,t=t===l?null:t,i=i===l?hr():i,a=a===l?hr():a,s=s===l?hr():s,o=o===l?hr():o,u=u===l?hr():u,f=f===l?null:f,c=c===l?null:c,v=v===l?hr():v,h=h===l?hr():h,d=d===l?null:d,p=p===l?null:p,g=g===l?null:g,this.h1i_1=e,this.i1i_1=t,this.j1i_1=a,this.k1i_1=s,this.l1i_1=o,this.m1i_1=f,this.n1i_1=c,this.o1i_1=v,this.p1i_1=h,this.q1i_1=d,this.r1i_1=p,this.s1i_1=g,this.t1i_1=u;for(var y=this,x=this.m1i_1,k=x==null?null:x.m1j_1,S=this.q1i_1,I=He([this.i1i_1,k,S==null?null:S.p1j_1]),z=O.g1(Zr(I,10)),q=I.x();q.y();){var T=q.z(),P=qe().s15(T);z.n(P)}y.u1i_1=z;for(var $=this,j=O.m(),U=u.x();U.y();){var J=U.z();J.z1h_1||j.n(J)}$.v1i_1=j,this.w1i_1=Ar();var M=this,F;if(!this.v1i_1.i1())F=!0;else{var R;r:{var X;if(E(u,Y)?X=u.i1():X=!1,X){R=!1;break r}for(var H=u.x();H.y();){var er=H.z();if(er.a1i_1!=null){R=!0;break r}}R=!1}F=R}M.x1i_1=F,this.y1i_1=ot(i);for(var Z=this,W=O.g1(Zr(r,10)),sr=r.x();sr.y();){var ur=sr.z(),rr="/"+bg(ur,ka([47]));W.n(rr)}Z.z1i_1=W,this.a1j_1=Ar(),this.b1j_1=!1,this.c1j_1=!1;var Er=this;Er.d1j_1=Pn.e1();var Ir=this;Ir.e1j_1=O.m(),this.f1j_1=Ar()}m1l(r,e){this.f1j_1=e;var t=jr(qe().s15(r)),i=U7(this,N7(this,B7(this,t))),a=ar(i,"components"),s=a==null?null:ar(a,"schemas"),o=s??Ar();this.w1i_1=o,this.a1j_1=eq(this,i,o);var u=this,f;if(xl(i))f=!0;else{var c=this.u1i_1,v;r:{var h;if(E(c,Y)?h=c.i1():h=!1,h){v=!1;break r}for(var d=c.x();d.y();){var p=d.z();if(xl(p)){v=!0;break r}}v=!1}f=v}u.b1j_1=f;var g=this,y;if(kl(i,yo()))y=!0;else{var x=this.u1i_1,k;r:{var S;if(E(x,Y)?S=x.i1():S=!1,S){k=!1;break r}for(var I=x.x();I.y();){var z=I.z();if(kl(z,yo())){k=!0;break r}}k=!1}y=k}g.c1j_1=y;var q=ue(this.b1j_1?hw().q2():hr(),this.c1j_1?yo().q2():hr());this.d1j_1.v2(),this.e1j_1.v2();for(var T=Y7(this,o)+M7(this,o)+J7(this,o)+H7(this,o),P=o.p2(),$=O.g1(Zr(P,10)),j=P.x();j.y();){var U=j.z(),J=Jn(U);$.n(J)}for(var M=$,F=ar(i,"paths"),R=(F??Ar()).p2(),X=O.g1(Zr(R,10)),H=R.x();H.y();){var er=H.z(),Z=Tw(this,er);X.n(Z)}var W=ue(ue(M,X),lv());if(!(this.l1i_1.i1()||!W.l1("ErrorCode"))){var sr="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw xr.o3(b(sr))}if(!(this.m1i_1==null||!W.l1("CurrentUser")&&!W.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(ur))}if(!(this.o1i_1.i1()||this.m1i_1!=null)){var rr="permissions needs currentUser, which says who the permissions belong to.";throw xr.o3(b(rr))}if(!(this.o1i_1.i1()||!W.l1("Permission")&&!W.l1("can"))){var Er="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(Er))}if(!(this.q1i_1==null||!W.l1("UserPreferences")&&!W.l1("preferences"))){var Ir="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(Ir))}if(!(this.p1i_1.i1()||this.m1i_1!=null)){var mr="guards needs currentUser, which says who is signed in.";throw xr.o3(b(mr))}var zr;if(this.p1i_1.i1())zr=!0;else{var br=Xh(),Cr;r:{var Rr;if(E(br,Y)?Rr=br.i1():Rr=!1,Rr){Cr=!0;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(W.l1(Yr)){Cr=!1;break r}}Cr=!0}zr=Cr}if(!zr){var sn="guards exports "+V(Xh())+", and the generated client already uses one of the names.";throw xr.o3(b(sn))}if(!(this.v1i_1.i1()||!W.l1("cookies"))){var Gr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw xr.o3(b(Gr))}if(!(rw(this.t1i_1).i1()||!W.l1("cookieConsent"))){var _r="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw xr.o3(b(_r))}for(var Mr=this.v1i_1,$r=fr.t4(),nn=Mr.x();nn.y();){var Fr=nn.z(),on=Ef(Fr.r1h_1),ln=$r.o2(on),mn;if(ln==null){var bn=O.m();$r.s2(on,bn),mn=bn}else mn=ln;var ye=mn;ye.n(Fr)}var Mn=$r.q2(),Zn;r:{for(var we=Mn.x();we.y();){var Fn=we.z();if(Fn.c1()>1){Zn=Fn;break r}}Zn=null}var be=Zn;if(be!=null){var je="The cookies "+V(be," and ",l,l,l,l,yq)+" would both be called "+Ef(Ub(be).r1h_1)+" in TypeScript.";throw xr.o3(b(je))}var Ne=this.k1i_1,Ue;r:{for(var ke=Ne.x();ke.y();){var An=ke.z();if(W.l1(An.f1i_1)){Ue=An;break r}}Ue=null}var In=Ue;if(In!=null){var Tn="constants("+In.f1i_1+") would be exported as '"+In.f1i_1+"', which the generated client already uses. Rename the object.";throw xr.o3(b(Tn))}var Ma=Re("client.ts")+F7(this),Ut=this.r1i_1,dt;Ut==null?dt=null:dt=`
reportErrors('`+Ut+`');
`;var pt=dt,Dt=Ma+(pt??""),Ui=this.s1i_1,_t;Ui==null?_t=null:_t=`
`+Ui+`
`;for(var Di=_t,De=A("client.ts",Dt+(Di??"")),Fa=A("form.ts",Re("form.ts")+lq(this)),gt=A("form-state.svelte.ts",Re("form-state.svelte.ts")),Rt=A("pending-writes.svelte.ts",Re("pending-writes.svelte.ts")),Ri=this.l1i_1.i1()&&this.o1i_1.i1()?T:ra(T,`export {};
`),$a=hi(this.d1j_1),Li=A("types.ts",Ri+V($a,"",l,l,l,l,wq)+oq(this)+Aw(this,"Permission",this.o1i_1)),Lt=ar(i,"paths"),Ja=Lt??Ar(),Ha=ko(o.p2(),"LucideIcon"),Mi=this.a1j_1.q2(),Fi=O.g1(Zr(Mi,10)),Mt=Mi.x();Mt.y();){var Ft=Mt.z(),$t=Ft.t1j_1;Fi.n($t)}var $i=A("services.ts",iq(this,Ja,qv(qv(Ha,Fi),q))),Ji=Re("index.ts")+(this.k1i_1.i1()?"":`export * from './constants.js';
`)+(this.x1i_1?`export * from './cookies.js';
`:"")+(this.m1i_1!=null?"export * from './"+ra("current-user.svelte.ts",".ts")+`.js';
`:""),mt;this.p1i_1.i1()?mt="":mt="export * from './"+ra("guards.ts",".ts")+`.js';
`;var Qs=[De,Fa,gt,Rt,Li,$i,A("index.ts",Ji+mt+(this.q1i_1!=null?"export * from './"+ra("preferences.svelte.ts",".ts")+`.js';
`:""))],Jt;this.k1i_1.i1()?Jt=[]:Jt=[A("constants.ts",k7(this.k1i_1))];var Ga=Jt,Ht;this.x1i_1?Ht=[A("cookies.ts",f7(this.t1i_1))]:Ht=[];var ro=Ht,xe=this.m1i_1,Ka;xe==null?Ka=null:Ka=[A("current-user.svelte.ts",K7(this,xe))];var no=Ka,Hi;no==null?Hi=[]:Hi=no;var eo=Hi,Wa;this.p1i_1.i1()?Wa=[]:Wa=[A("guards.ts",$7(this))];var to=Wa,Gi=this.q1i_1,Ki;Gi==null?Ki=null:Ki=[A("preferences.svelte.ts",G7(this,Gi))];var io=Ki,Wi;return io==null?Wi=[]:Wi=io,P7(this,Tk([Qs,Ga,ro,eo,to,Wi,[A("openapi.json",fw().q15(Hc.z17(),i)+`
`)]]))}n1l(r,e,t){return e=e===l?Ar():e,t===l?this.m1l(r,e):t.m1l.call(this,r,e)}}class mo extends le{constructor(r,e,t){super(r,e),this.h1l_1=t}v1g(){return Re(this.h1l_1)}}class hu{constructor(r,e,t){this.o1l_1=r,this.p1l_1=e,this.q1l_1=t}toString(){return"GeneratedOperation(name="+this.o1l_1+", method="+this.p1l_1+", path="+this.q1l_1+")"}hashCode(){var r=fe(this.o1l_1);return r=Wh(r,31)+fe(this.p1l_1)|0,r=Wh(r,31)+fe(this.q1l_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof hu)||this.o1l_1!==r.o1l_1||this.p1l_1!==r.p1l_1||this.q1l_1!==r.q1l_1)}}class Yy{constructor(r){this.r1l_1=r}fg(r,e){return this.r1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.r1l_1}equals(r){var e;if(r!=null&&E(r,gn)){var t;r!=null&&E(r,Sn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Zy{d1k(r){return"Must be at least "+od(this,r)+"."}e1k(r){return"Must be at most "+od(this,r)+"."}j1k(r,e){return"Must be "+(e?"greater than":"at least")+" "+Tt(r)+"."}k1k(r,e){return"Must be "+(e?"less than":"at most")+" "+Tt(r)+"."}f1k(r){return"Must match "+r+"."}}class Ye{constructor(r,e){this.i1l_1=r,this.j1l_1=e}}class Xi{constructor(r,e,t){this.g1k_1=r,this.h1k_1=e,this.i1k_1=t}}class Vy{constructor(){Tf=this,this.w1j_1=new Xi("email",Nn(new Ye("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.x1j_1=new Xi("uri",Nn(new Ye("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.y1j_1=new Xi("phone",Nn(new Ye("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.z1j_1=new Xi("slug",Nn(new Ye("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.a1k_1=new Xi("strong-password",tn([new Ye("^[\\s\\S]{10,}$","at least 10 characters"),new Ye("[a-z]","a lowercase letter"),new Ye("[A-Z]","an uppercase letter"),new Ye("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.b1k_1=tn([this.w1j_1,this.x1j_1,this.y1j_1,this.z1j_1,this.a1k_1])}c1k(r){var e=this.b1k_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(a.g1k_1===r){t=a;break r}}t=null}return t}}function s7(){return ie(),Xy}var Xy;function o7(){return ie(),Qy}var Qy;function ae(n){return ie(),"'"+Qn(Qn(Qn(Qn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function Ef(n){ie();var r=o7(),e=bg(n,ka([46,95,45])),t=r.ef(e,c7);return s7().af(t)?t:ae(n)}function l7(n){ie();var r;switch(n.s1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.t1h_1," | ",l,l,l,l,v7);break;default:r="number";break}return r}function u7(n){ie();var r=l7(n),e=n.s1h_1==="string"||n.s1h_1==="enum",t="kind: "+ae(n.s1h_1),i;n.s1h_1==="enum"?i="values: ["+V(n.t1h_1,", ",l,l,l,l,h7)+"]":i=null;var a=i,s=n.u1h_1,o;s==null?o=null:o="default: "+(e?ae(s):s);var u=o,f=n.v1h_1,c;f==null?c=null:c="maxAge: "+f.toString();var v=c,h="path: "+ae(n.w1h_1),d="sameSite: "+ae(n.x1h_1),p="secure: "+n.y1h_1,g=n.a1i_1,y;g==null?y=null:y="category: "+ae(g);var x=He([t,a,u,v,h,d,p,y]),k=n.u1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+Ef(n.r1h_1)+": typedCookie"+k+"("+ae(n.r1h_1)+", { "+V(x,", ")+" })"}function rw(n){ie();for(var r=O.m(),e=n.x();e.y();){var t=e.z(),i=t.a1i_1;i==null||r.n(i)}return hi(va(r))}function f7(n){ie();for(var r=O.m(),e=n.x();e.y();){var t=e.z();t.z1h_1||r.n(t)}var i=d7,a=new Dy(i),s=Ci(r,a),o=rw(n),u="consentStore",f;o.i1()?f=null:f=u;var c=f,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,p=He([c,d]),g=O.m(),y=s.x();y.y();){var x=y.z();x.a1i_1!=null&&g.n(x)}var k=g,S=V(k,", ",l,l,l,l,p7),I=Qr.f();return I.fa("import { "+V(p,", ")+` } from './client.js';
`),s.i1()||I.fa(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,_7())+`
};
`),o.i1()||I.fa(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,g7)+"] as const, ["+S+`]);
`),I.toString()}function c7(n){return ie(),n.dg().d1(1).toUpperCase()}function v7(n){return ie(),ae(n)}function h7(n){return ie(),ae(n)}function d7(n,r){ie();var e=n.r1h_1,t=r.r1h_1;return Bt(e,t)}function p7(n){ie();var r=ae(n.r1h_1),e=ae(n.w1h_1),t=n.a1i_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+ae(i)+" }"}function _7(){return Ge(n=>u7(n),1,0,7,"cookieEntry")}function g7(n){return ie(),ae(n)}var Yh;function ie(){Yh||(Yh=!0,Xy=It.ze("[A-Za-z_$][A-Za-z0-9_$]*"),Qy=It.ze("[._-]+([A-Za-z0-9])"))}function m7(){return av(),nw}var nw;function y7(){return av(),ew}var ew;function w7(n,r){av();var e=m7(),t=Qr.f(),i=0,a=C(n);if(i<a)do{var s=i;i=i+1|0;var o=Q(n,s);n2(o)&&t.ga(o)}while(i<a);var u=t.toString().toLowerCase(),f=e.o2(u),c;r==null?c=null:c=y7().o2(r);var v=c,h;if(v==null)h=f;else if(f==null)h=v;else{var d=v.c1i_1,p=d??f.c1i_1,g=v.d1i_1;h=new vn(p,g??f.d1i_1)}return h}var Zh;function av(){if(!Zh){Zh=!0;for(var n=fr.t4(),r=tn(["email","emailaddress","mail"]).x();r.y();){var e=r.z();n.s2(e,new vn("email","email"))}for(var t=tn(["password","currentpassword"]).x();t.y();){var i=t.z();n.s2(i,new vn("current-password","password"))}for(var a=tn(["newpassword","passwordrepeat","repeatpassword","confirmpassword","passwordconfirmation"]).x();a.y();){var s=a.z();n.s2(s,new vn("new-password","password"))}for(var o=tn(["name","fullname","displayname"]).x();o.y();){var u=o.z();n.s2(u,new vn("name"))}for(var f=tn(["givenname","firstname","forename"]).x();f.y();){var c=f.z();n.s2(c,new vn("given-name"))}for(var v=tn(["familyname","lastname","surname"]).x();v.y();){var h=v.z();n.s2(h,new vn("family-name"))}for(var d=tn(["username","login","loginname"]).x();d.y();){var p=d.z();n.s2(p,new vn("username"))}for(var g=tn(["phone","phonenumber","tel","telephone","mobile","mobilephone"]).x();g.y();){var y=g.z();n.s2(y,new vn("tel","tel"))}for(var x=tn(["street","streetaddress","address","addressline"]).x();x.y();){var k=x.z();n.s2(k,new vn("street-address"))}for(var S=tn(["postalcode","postcode","zip","zipcode"]).x();S.y();){var I=S.z();n.s2(I,new vn("postal-code"))}for(var z=tn(["city","town","locality"]).x();z.y();){var q=z.z();n.s2(q,new vn("address-level2"))}for(var T=tn(["country","countryname"]).x();T.y();){var P=T.z();n.s2(P,new vn("country-name"))}for(var $=tn(["organization","organisation","company"]).x();$.y();){var j=$.z();n.s2(j,new vn("organization"))}for(var U=tn(["birthday","birthdate","dateofbirth"]).x();U.y();){var J=U.z();n.s2(J,new vn("bday"))}for(var M=tn(["url","website","homepage"]).x();M.y();){var F=M.z();n.s2(F,new vn("url","url"))}for(var R=tn(["onetimecode","otp","verificationcode"]).x();R.y();){var X=R.z();n.s2(X,new vn("one-time-code"))}nw=n.m6(),ew=Us([A("email",new vn("email","email")),A("uri",new vn("url","url")),A("phone",new vn("tel","tel")),A("strong-password",new vn("new-password","password"))])}}function b7(){return La(),tw}var tw;function sv(n,r){La();var e;if(n instanceof vr)e=n.b18()?iw(n.c18()):n.c18();else if(n instanceof hn)e=V(n,", ","[","]",l,l,x7(r));else if(n instanceof nr){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,S7(r))}e=t}else Ts();return e}function iw(n){return La(),"'"+Qn(Qn(Qn(Qn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function k7(n){La();var r=E7,e=new Ry(r),t=Ci(n,e);return V(t,`
`,l,l,l,l,I7)}function x7(n){return r=>sv(r,n)}function S7(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(b7().af(e)?e:iw(e))+": "+sv(t,n+"    ")}}function E7(n,r){La();var e=n.f1i_1,t=r.f1i_1;return Bt(e,t)}function I7(n){return La(),"export const "+n.f1i_1+" = "+sv(new nr(n.g1i_1),"")+` as const;
`}var Vh;function La(){Vh||(Vh=!0,tw=It.ze("[A-Za-z_$][A-Za-z0-9_$]*"))}function aw(){return wr(),sw}var sw;function ov(){return wr(),ow}var ow;function lw(){return wr(),uw}var uw;function fw(){return wr(),cw}var cw;function Xh(){return wr(),vw}var vw;function hw(){return wr(),dw}var dw;function yo(){return wr(),pw}var pw;function z7(){return wr(),_w}var _w;function C7(){return wr(),gw}var gw;function q7(){return wr(),mw}var mw;function lv(){return wr(),yw}var yw;function A7(){return wr(),ww}var ww;function T7(){return wr(),bw}var bw;function j7(){return wr(),kw}var kw;function O7(){return wr(),xw}var xw;function P7(n,r){var e=Us(r.slice());return at(e,A(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+Jp(r,"",l,l,l,l,bq)))}function B7(n,r){for(var e=ar(r,"paths"),t=e??Ar(),i=fr.t4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();W7(n,o)&&i.s2(s.k2(),s.l2())}var u=_u(i);return new nr(at(r,A("paths",new nr(u))))}function N7(n,r){if(n.j1i_1.i1())return r;for(var e=ar(r,"components"),t=e??new nr(Ar()),i=ar(t,"schemas"),a=i??Ar(),s=vc(a),o=n.j1i_1.x();o.y();){var u=o.z(),f=u.g1j_1,c=s.o2(f);if(c==null){var v=qe().s15(u.h1j_1);s.s2(f,v)}}for(var h=ar(r,"paths"),d=h??Ar(),p=fr.na(d.c1()),g=d.r2().x();g.y();){for(var y=g.z(),x=y.k2(),k=y.l2(),S=jr(k),I=fr.na(S.c1()),z=S.r2().x();z.y();){var q=z.z(),T=q.k2(),P=q.k2(),$=q.l2(),j,U;aw().l1(P)?U=$ instanceof nr:U=!1,U?j=L7(n,$):j=$;var J=j;I.s2(T,J)}var M=new nr(I);p.s2(x,M)}var F=p;return new nr(at(at(r,A("paths",new nr(F))),A("components",new nr(at(t,A("schemas",new nr(s)))))))}function U7(n,r){var e=ar(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=ar(i,"schemas"),s=a??Ar(),o=fr.t4(),u=s.r2().x();u.y();){var f=u.z(),c=f.l2(),v;c instanceof nr?v=D7(n,c):v=!1,v&&o.s2(f.k2(),f.l2())}for(var h=fr.na(o.c1()),d=o.r2().x();d.y();){var p=d.z(),g=p.k2(),y=p.l2(),x=new nr(at(jr(y),A("type",xn("object"))));h.s2(g,x)}var k=h;if(k.i1())return r;for(var S=fr.t4(),I=s.r2().x();I.y();){var z=I.z(),q=z.k2();(E(k,wn)?k:m()).m2(q)||S.s2(z.k2(),z.l2())}for(var T=S.r2(),P=dn(Zr(T,10),16),$=fr.na(P),j=T.x();j.y();){var U=j.z(),J=U.k2(),M=U.l2(),F=M instanceof nr?M:null,R=A(F==null?null:Qh(n,F),J);$.s2(R.ih_1,R.jh_1)}for(var X=$,H=fr.na(k.c1()),er=k.r2().x();er.y();){var Z=er.z(),W=Z.k2(),sr=Z.k2(),ur=Z.l2(),rr=X.o2(Qh(n,ur)),Er=rr??sr;H.s2(W,Er)}for(var Ir=H,mr=fr.t4(),zr=s.r2().x();zr.y();){var br=zr.z(),Cr=br.k2();(Ir.o2(Cr)==null||Ir.o2(Cr)===Cr)&&mr.s2(br.k2(),br.l2())}for(var Rr=fr.na(mr.c1()),pr=mr.r2().x();pr.y();){var Yr=pr.z(),sn=Yr.k2(),Gr=Yr.k2(),_r=Yr.l2(),Mr=k.o2(Gr),$r=Mr??_r;Rr.s2(sn,$r)}var nn=Rr,Fr=new nr(at(i,A("schemas",new nr(nn))));return jr(Af(Ir,n,new nr(at(r,A("components",Fr)))))}function D7(n,r){var e;if(D(ot(ht(n,r)),si(["object","null"]))){var t=ar(r,"properties");e=!(t??Ar()).i1()}else e=!1;return e}function Qh(n,r){return new nr(C2(r,"title"))}function R7(n,r){var e=new xt,t=new K0,i=new xt;vl(i,"$ref","#/components/schemas/"+r);var a=i.d17();t.r18(a);var s=new xt;vl(s,"type","null");var o=s.d17();t.r18(o);var u=t.d17();return e.p18("oneOf",u),e.d17()}function L7(n,r){for(var e=ar(r,"responses"),t=e??Ar(),i=vc(t),a=n.j1i_1.x();a.y();){var s=a.z(),o=new xt;vl(o,"description","");var u=new xt,f="application/json",c=new xt,v=new xt;vl(v,"$ref","#/components/schemas/"+s.g1j_1);var h=v.d17();c.p18("schema",h);var d=c.d17();u.p18(f,d);var p=u.d17();o.p18("content",p);for(var g=o.d17(),y=s.i1j_1.x();y.y();){var x=y.z(),k=x.toString(),S=i.o2(k);if(S==null){var I=g;i.s2(k,I)}}}return new nr(at(r,A("responses",new nr(i))))}function M7(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t,a=jr(qe().s15(i)),s=Pn.e1();return`
`+uv(n,"PublicConfig",a,s,r)}function F7(n){var r=n.n1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Qn(Qn(t,"\\","\\\\"),"'","\\'")+`';
`}function $7(n){var r=n.p1i_1,e;r:{var t;if(E(r,Y)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.k1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.p1i_1,u=kq,f=new $y(u),c=Ci(o,f),v=V(c,"",l,l,l,l,xq),h=n.n1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.n1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.n1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+ra("current-user.svelte.ts",".ts")+`.js';
`)+("import type { "+(s?"CurrentUser, Permission":"CurrentUser")+` } from './types.js';

`)+("export const pageGuards: readonly PageGuard<"+(s?"Permission":"never")+`>[] = [
`+v+`];

`)+`export async function signedInUser(url: URL): Promise<CurrentUser> {
    const user = await currentUser.load();
`+("    if (!user) "+h+`;
`),p;return s?p=`    const guard = matchGuard(pageGuards, url.pathname);
    if (guard?.permission && !currentUser.can(guard.permission)) error(403, 'Forbidden');
`:p="",d+p+`    return user;
}

export async function guardPages(event: { url: URL }): Promise<void> {
    if (typeof document === 'undefined' || !matchGuard(pageGuards, event.url.pathname)) return;
    await signedInUser(event.url);
}
`}function J7(n,r){var e=n.m1i_1,t;if(e==null)return"";t=e;var i=t;return Sw(n,"CurrentUser",i.l1j_1,i.m1j_1,r)}function H7(n,r){var e=n.q1i_1,t;if(e==null)return"";t=e;var i=t;return Sw(n,"UserPreferences",i.o1j_1,i.p1j_1,r)}function Sw(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Jn(u)===e){s=u;break r}}s=null}var f=s;if(f!=null)return`
export type `+r+" = "+Jn(f)+`;
`;var c=jr(qe().s15(t)),v=Pn.e1();return`
`+uv(n,r,c,v,i)}function G7(n,r){for(var e=ar(jr(qe().s15(r.p1j_1)),"properties"),t=(e??Ar()).p2(),i=r.s1j_1,a=fr.t4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var f=a,c=f.r2(),v=V(c,", ",l,l,l,l,Sq),h=fw().q15(Hc.z17(),qe().s15(r.r1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,p=pe(r.q1j_1),g;return C(v)===0?g="":g=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(p+", state, defaults, {"+g+`});
`)}function K7(n,r){var e=!n.o1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.n1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function W7(n,r){var e,t=n.h1i_1,i;r:{var a;if(E(t,Y)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||Ce(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.z1i_1.i1())u=!0;else{var f=n.z1i_1,c;r:{var v;if(E(f,Y)?v=f.i1():v=!1,v){c=!1;break r}for(var h=f.x();h.y();){var d=h.z();if(d==="/"||r===d||Ce(r,d+"/")){c=!0;break r}}c=!1}u=c}e=u}else e=!1;return e}function Y7(n,r){if(r.i1()&&n.y1i_1.i1()&&n.a1j_1.i1()&&!n.b1j_1&&!n.c1j_1)return`export {};
`;for(var e=Pn.e1(),t=O.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=A(s,uv(n,Jn(s),jr(o),e,r));t.n(u)}for(var f=t,c=n.a1j_1.q2(),v=O.m(),h=c.x();h.y();){var d=h.z();d.v1j_1&&v.n(d)}for(var p=O.g1(Zr(v,10)),g=v.x();g.y();){var y=g.z(),x=A(y.t1j_1,zw(n,y.t1j_1,y.u1j_1));p.n(x)}var k=p,S=ue(f,k),I=Eq,z=new Jy(I),q=Ci(S,z),T=V(q,`
`,l,l,l,l,Iq),P;e.l1("LucideIcon")?P=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:P="";var $=P,j=r.q2(),U;r:{var J;if(E(j,Y)?J=j.i1():J=!1,J){U=!1;break r}for(var M=j.x();M.y();){var F=M.z();if(cv(n,jr(F))){U=!0;break r}}U=!1}var R=U,X=`declare const brand: unique symbol;
`,H;R||n.c1j_1?H=X:H=null;var er=H,Z=Re("dates.ts"),W;n.b1j_1?W=Z:W=null;var sr=W,ur=Re("quantities.ts"),rr;n.c1j_1?rr=ur:rr=null;var Er=rr,Ir;C(T)===0?Ir=null:Ir=T;var mr=Ir,zr=V(He([er,sr,Er,mr]),`
`),br;return C(zr)===0?br=`export {};
`:br=zr,$+br}function uv(n,r,e,t,i){var a=bl(n,jw(n,e),""),s=du(n,e),o;if(s!=null){var u=e.i18("enum"),f=u==null?null:fs(u),c;if(f==null)c=null;else{var v;r:{var h;if(E(f,Y)?h=f.i1():h=!1,h){v=!0;break r}for(var d=f.x();d.y();){var p=d.z();if(p instanceof de){v=!1;break r}}v=!0}c=v}o=c===!0}else o=!1;if(o)return a+zw(n,r,s);if(cv(n,e)){var g=Kn(n,e,t);return a+("export type "+r+" = "+g+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+g+"): "+r+" => value as "+r+`;
`)}if(vv(n,e))return a+("export interface "+r+" "+Cw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+Cf(n,e,i,"    ",Pt())+`),
`)+V7(n,e)+rq(n,r,e,i)+`};
`;var y=a+("export type "+r+" = "+Kn(n,e,t)+`;
`),x=Z7(n,r,e,i);return y+(x??"")}function Z7(n,r,e,t){var i=ar(e,"discriminator"),a=i==null?null:Ur(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=_n(e,"oneOf"),f=u??_n(e,"anyOf"),c;if(f==null)return null;c=f;var v=c,h=ar(e,"discriminator"),d=h==null?null:ar(h,"mapping"),p=d==null?null:d.p2(),g=p==null?null:zi(p),y=g??hr(),x;if(y.i1()){for(var k=O.g1(Zr(v,10)),S=v.x();S.y();){var I=S.z(),z=yl(n,jr(I)),q;if(z==null)q=null;else{var T=t.o2(z);q=T==null?null:jr(T)}var P=q,$=P??jr(I),j=ar($,"properties"),U=j==null?null:ar(j,o),J=U==null?null:_n(U,"enum"),M=J==null?null:Hf(J),F=M instanceof vr?M:null,R=F==null?null:Hn(F),X;if(R==null)return null;X=R;var H=X;k.n(H)}x=k}else x=y;var er=x;if(er.i1())return null;var Z=Cn(n,xn(o)),W=V(er,l,l,l,l,l,zq(n));return`
export const `+r+` = {
`+("    types: ["+W+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Z+"]]: (value: Extract<"+r+", { "+Ke(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Z+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function V7(n,r){for(var e=gu(r,"required"),t=ar(r,"properties"),i=t??Ar(),a=O.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),f=o.l2(),c=ue(Q7(n,jr(f),e.l1(u)),X7(n,u,jr(f))),v;if(c.i1())v=null;else{var h=Ke(u);v="        "+h+": { "+V(c,l,l,l,l,l,Cq)+" },"}var d=v;d==null||a.n(d)}var p=a;return p.i1()?"":`    bounds: {
`+V(p,`
`)+`
    },
`}function X7(n,r,e){var t;if(ht(n,e).l1("string"))t=!1;else{var i=wl(n,e),a=i==null?null:ht(n,i);t=(a==null?null:a.l1("string"))!==!0}if(t)return hr();var s=Ur(e,"format"),o;if(s==null){var u=wl(n,e);o=u==null?null:Ur(u,"format")}else o=s;var f=w7(r,o),c;if(f==null)return hr();c=f;var v=c,h=v.c1i_1,d;h==null?d=null:d=A("autocomplete",Cn(n,xn(h)));var p=d,g=v.d1i_1,y;return g==null?y=null:y=A("type",Cn(n,xn(g))),He([p,y])}function Q7(n,r,e){var t=ht(n,r).l1("integer"),i=A("required","true"),a;Ew(n,r,e)?a=i:a=null;var s=a,o=Se(n,r,"minLength"),u;o==null?u=null:u=A("minlength",Tt(o));var f=u,c=Se(n,r,"maxLength"),v;c==null?v=null:v=A("maxlength",Tt(c));var h=v,d=ed(n,r,t,"minimum","exclusiveMinimum",1),p;d==null?p=null:p=A("min",d);var g=p,y=ed(n,r,t,"maximum","exclusiveMaximum",-1),x;y==null?x=null:x=A("max",y);var k=x,S=Ur(r,"pattern"),I;return S==null?I=null:I=A("pattern",Cn(n,xn(S))),He([s,f,h,g,k,I])}function Ew(n,r,e){if(hv(n,r)||r.i18("enum")!=null)return!1;var t;if(ht(n,r).l1("string")){var i=Se(n,r,"minLength");t=(i??0)>=1}else t=e&&Iw(n,r);return t}function Iw(n,r){var e=ht(n,r),t;r:{var i;if(E(e,Y)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function rq(n,r,e,t){if(!fv(n,e,t,Pt()))return"";for(var i=gu(e,"required"),a=ar(e,"properties"),s=a??Ar(),o=O.m(),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=jr(v),d="value"+(ov().af(c)?"."+c:"["+Cn(n,xn(c))+"]"),p=ue(nq(n,c,d,h,i.l1(c)),If(n,h,d,zf(n,c),"        ",0,t));Ca(o,p)}var g=o,y="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return y+V(g,"",l,l,l,l,qq)+`        return errors;
    },
`}function fv(n,r,e,t){var i;if(vv(n,r)){var a=ar(r,"properties"),s=(a??Ar()).q2(),o;r:{var u;if(E(s,Y)?u=s.i1():u=!1,u){o=!1;break r}for(var f=s.x();f.y();){var c=f.z(),v=jr(c),h,d,p=O7(),g;n:{var y;if(E(p,Y)?y=p.i1():y=!1,y){g=!1;break n}for(var x=p.x();x.y();){var k=x.z();if(Se(n,v,k)!=null||k==="pattern"&&Ur(v,k)!=null){g=!0;break n}}g=!1}if(g?d=!0:d=Sl().c1k(Ur(v,"format"))!=null,d)h=!0;else{var S=yl(n,v),I;if(S==null)I=null;else{var z;if(t.l1(S))z=!1;else{var q=e.o2(S),T=q instanceof nr?q:null,P;T==null?P=null:P=fv(n,T,e,ko(t,S)),z=P===!0}I=z}h=I===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function yl(n,r){var e=Ur(r,"$ref");if(e!=null)return Aa(e,47);var t=wl(n,r);if(t!=null)return yl(n,t);if(ht(n,r).l1("array")){var i=ar(r,"items"),a;return i==null?a=null:a=yl(n,i),a}return null}function wl(n,r){var e=_n(r,"oneOf"),t=e??_n(r,"anyOf"),i;if(t==null)i=null;else{for(var a=O.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof nr?o:null;u==null||a.n(u)}i=a}var f=i,c;if(f==null)c=null;else{for(var v=O.m(),h=f.x();h.y();){var d=h.z();D(ht(n,d),Nn("null"))||v.n(d)}c=v}var p=c;return p==null?null:Hf(p)}function nq(n,r,e,t,i){var a=Cn(n,xn(r)),s=Se(n,t,"minLength"),o=s==null?null:Eo(s),u=Se(n,t,"maxLength"),f=u==null?null:Eo(u),c=t.i18("pattern"),v=c instanceof vr?c:null,h;if(v==null)h=null;else{var d;v.b18()?d=v:d=null,h=d}var p=h,g=p==null?null:p.c18(),y=Sl().c1k(Ur(t,"format")),x=Se(n,t,"minimum"),k;x==null?k=null:k=A(x,!1);var S=k,I;if(S==null){var z=Se(n,t,"exclusiveMinimum"),q;z==null?q=null:q=A(z,!0),I=q}else I=S;var T=I,P=Se(n,t,"maximum"),$;P==null?$=null:$=A(P,!1);var j=$,U;if(j==null){var J=Se(n,t,"exclusiveMaximum"),M;J==null?M=null:M=A(J,!0),U=M}else U=j;var F=U,R=O.m();if(Ew(n,t,i)&&Iw(n,t)){var X="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Gt(a,n,"Required.");R.n(X)}if(o!=null||f!=null||g!=null||y!=null){var H="        if (typeof "+e+" === 'string') {";if(R.n(H),o!=null||f!=null){var er="            const length = [..."+e+"].length;";R.n(er)}if(o!=null){var Z="            if (length < "+o+") "+Gt(a,n,Qi.d1k(o));R.n(Z)}if(f!=null){var W="            if (length > "+f+") "+Gt(a,n,Qi.e1k(f));R.n(W)}if(g!=null){var sr=n.d1j_1,ur=ad();sr.n(ur);var rr="            if (!matches("+Cn(n,xn(g))+", "+e+")) "+Gt(a,n,Qi.f1k(g));R.n(rr)}if(y!=null){var Er=n.d1j_1,Ir=ad();Er.n(Ir);var mr=V(y.h1k_1," && ",l,l,l,l,Aq(n,e)),zr="            if (!("+mr+")) "+Gt(a,n,y.i1k_1);R.n(zr)}var br="        }";R.n(br)}if(T!=null||F!=null){var Cr="        if (typeof "+e+" === 'number') {";if(R.n(Cr),T!=null){var Rr=T.nh(),pr=T.oh(),Yr=pr?"<=":"<",sn="            if ("+e+" "+Yr+" "+Tt(Rr)+") "+Gt(a,n,Qi.j1k(Rr,pr));R.n(sn)}if(F!=null){var Gr=F.nh(),_r=F.oh(),Mr=_r?">=":">",$r="            if ("+e+" "+Mr+" "+Tt(Gr)+") "+Gt(a,n,Qi.k1k(Gr,_r));R.n($r)}var nn="        }";R.n(nn)}if(!R.i1()){var Fr=n.d1j_1,on=Lw();Fr.n(on)}return R}function If(n,r,e,t,i,a,s){var o=Ur(r,"$ref");if(o!=null){var u=Aa(o,47),f=s.o2(u),c=f instanceof nr?f:null,v;if(c==null)return hr();v=c;var h=v;if(!fv(n,h,s,Pt()))return hr();var d=n.d1j_1,p=tn([Lw(),vA()]);return Ca(d,p),Nn(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Jn(u)+".validate("+e+"));")}var g=wl(n,r);if(g!=null)return If(n,g,e,t,i,a,s);if(!ht(n,r).l1("array"))return hr();var y=ar(r,"items"),x;if(y==null)return hr();x=y;var k=x,S=a===0?"":""+(a+1|0),I="item"+S,z="index"+S,q=If(n,k,I,t+"[${"+z+"}]",i+"        ",a+1|0,s);return q.i1()?hr():ue(ue(tn([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+I+", "+z+") => {"]),q),tn([i+"    });",i+"}"]))}function zf(n,r){return Qn(Qn(Qn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function Se(n,r,e){var t=r.i18(e),i=t instanceof vr?t:null,a;if(i==null)a=null;else{var s;i.b18()?s=null:s=i,a=s}var o=a,u=o==null?null:Hn(o);return u==null?null:lc(u)}function ht(n,r){var e=r.i18("type"),t;if(e instanceof hn){for(var i=O.g1(Zr(e,10)),a=e.x();a.y();){var s=a.z(),o=On(s).c18();i.n(o)}t=i}else e instanceof vr?t=Nn(e.c18()):t=hr();return t}function zw(n,r,e){var t=V(e,"",l,l,l,l,Tq(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function eq(n,r,e){for(var t=fr.t4(),i=_u(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=du(n,jr(o));if(u!=null){var f=ot(u),c=t.o2(f);if(c==null){var v=new Sf(Jn(s),u,!1);t.s2(f,v)}}}for(var h=fr.t4(),d=fr.t4(),p=e.r2().x();p.y();){var g=p.z(),y=g.k2(),x=g.l2();ea(n,h,d,x,Jn(y),Jn(y),!0)}var k=ar(r,"paths");k==null||ea(n,h,d,k,"","",!1);for(var S=h.p2(),I=O.m(),z=S.x();z.y();){var q=z.z(),T;(E(t,wn)?t:m()).m2(q)?T=!1:T=!D(q,n.y1i_1),T&&I.n(q)}for(var P=jq(d),$=new Hy(P),j=Ci(I,$),U=fr.na(dn(Zr(j,10),16)),J=j.x();J.y();){var M=J.z(),F=ze(h,M),R=Oq,X=Db(F,U2([R,Pq]));U.s2(M,X)}for(var H=U,er=H.q2(),Z=new Ky(er),W=Hk(Z),sr=e.p2(),ur=O.g1(Zr(sr,10)),rr=sr.x();rr.y();){var Er=rr.z(),Ir=Jn(Er);ur.n(Ir)}for(var mr=Gf(wi(wi(ur,"LucideIcon"),"PublicConfig")),zr=fr.oa(t),br=j.x();br.y();){var Cr=br.z(),Rr=ze(H,Cr),pr=Jn(Rr.m1k_1),Yr;if(ze(W,pr)>1||mr.l1(pr)){var sn=Rr.l1k_1,Gr;C(sn)===0?Gr=pr:Gr=sn+pr,Yr=Gr}else Yr=pr;var _r=Yr,Mr;if(!mr.l1(_r))Mr=_r;else{var $r=hc(2,Bq),nn=qs($r,Nq(_r)),Fr;r:{for(var on=nn.x();on.y();){var ln=on.z();if(!mr.l1(ln)){Fr=ln;break r}}throw Or.r("Sequence contains no element matching the predicate.")}Mr=Fr}var mn=Mr;mr.n(mn);var bn=new Sf(mn,ze(d,Cr),!0);zr.s2(Cr,bn)}return zr}function du(n,r){var e=_n(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=O.m(),s=i.x();s.y();){var o=s.z();o instanceof de||a.n(o)}var u=a,f;r:{var c;if(E(u,Y)?c=u.i1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof vr?d=!h.b18():d=!0,d){f=!0;break r}}f=!1}if(f)return null;for(var p=O.g1(Zr(u,10)),g=u.x();g.y();){var y=g.z(),x=On(y).c18();p.n(x)}var k=va(p),S;return k.c1()>1?S=k:S=null,S}function cv(n,r){var e,t,i=C7(),a=r.i18("type"),s=a instanceof vr?a:null;if(Rb(i,s==null?null:Hn(s))?t=r.i18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var f;if(E(o,Y)?f=o.i1():f=!1,f){u=!0;break r}for(var c=o.x();c.y();){var v=c.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function vv(n,r){return ar(r,"properties")!=null&&r.i18("allOf")==null}function Cf(n,r,e,t,i){var a=ar(r,"properties"),s=a??Ar();if(s.i1())return"{}";for(var o=O.g1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=t+"    "+Ke(c)+": "+li(n,jr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(wi(ue(Nn("{"),d),t+"}"),`
`)}function li(n,r,e,t,i){if(hv(n,r))return"null";var a=Ur(r,"$ref");if(a!=null){var s=Aa(a,47),o=e.o2(s),u=o instanceof nr?o:null,f;if(u==null)return"null";f=u;var c=f;return vv(n,c)?Jn(s)+".empty()":cv(n,c)?Jn(s)+"("+li(n,c,e,t,ko(i,s))+")":i.l1(s)?"null":li(n,c,e,t,ko(i,s))}var v=r.i18("enum");if(v!=null){var h=bu(fs(v)),d;h==null?d=null:d=Cn(n,h);var p=d;return p??"null"}var g=r.i18("const");if(g!=null)return Cn(n,g);var y=_n(r,"oneOf"),x=y??_n(r,"anyOf");if(x!=null){var k=bu(x),S;k==null?S=null:S=li(n,jr(k),e,t,i);var I=S;return I??"null"}var z=_n(r,"allOf");if(z!=null)return z.c1()===1?li(n,jr(Yp(z)),e,t,i):V(z,", ","{ "," }",l,l,Uq(n,e,t,i));var q=r.i18("type"),T;if(q instanceof hn){var P=bu(q),$=P==null?null:On(P);T=$==null?null:$.c18()}else q instanceof vr?T=Hn(q):T=null;var j=T,U;switch(j){case"string":var J=_v(r),M;J==null?M=null:M="'' as "+J;var F=M,R;if(F==null){var X=Nw(r),H;X==null?H=null:H=ze(z7(),X)+" as "+X,R=H}else R=F;var er=R;U=er??"''";break;case"integer":case"number":U="0";break;case"boolean":U="false";break;case"array":var Z=_n(r,"prefixItems"),W;Z==null?W=null:W=V(Z,", ","[","]",l,l,Dq(n,e,t,i));var sr=W;U=sr??"[]";break;case"object":U=Cf(n,r,e,t,i);break;case null:U=r.i18("properties")!=null?Cf(n,r,e,t,i):"null";break;default:U="null";break}return U}function hv(n,r){var e=r.i18("type"),t=_n(r,"oneOf"),i=t??hr(),a=_n(r,"anyOf"),s=a??hr(),o=ue(i,s),u,f,c,v,h;if(e instanceof hn){var d;r:{var p;if(E(e,Y)?p=e.i1():p=!1,p){d=!1;break r}for(var g=e.x();g.y();){var y=g.z();if(On(y).c18()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof vr?x=e.c18()==="null":x=!1,v=x}if(v)c=!0;else{var k=r.i18("nullable"),S=k instanceof vr?k:null;c=(S==null?null:Hn(S))==="true"}if(c)f=!0;else{var I=_n(r,"enum"),z=I??hr(),q;r:{var T;if(E(z,Y)?T=z.i1():T=!1,T){q=!1;break r}for(var P=z.x();P.y();){var $=P.z();if($ instanceof de){q=!0;break r}}q=!1}f=q}if(f)u=!0;else{var j;r:{var U;if(E(o,Y)?U=o.i1():U=!1,U){j=!1;break r}for(var J=o.x();J.y();){var M=J.z(),F=M instanceof nr?M:null,R;if(F==null?R=null:R=hv(n,F),R===!0){j=!0;break r}}j=!1}u=j}return u}function Cw(n,r,e,t){for(var i=gu(r,"required"),a=ar(r,"properties"),s=a??Ar(),o=O.g1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=i.l1(c)?"":"?",d=Bw(jr(v))?"readonly ":"",p=bl(n,jw(n,jr(v)),t+"    ")+(t+"    "+d+Ke(c)+h+": "+Kn(n,jr(v),e,t+"    ")+";");o.n(p)}var g=o;return V(wi(ue(Nn("{"),g),t+"}"),`
`)}function Kn(n,r,e,t){t=t===l?"":t;var i=Ur(r,"$ref");if(i!=null){var a=Jn(Aa(i,47));return e.n(a),a}var s=r.i18("enum");if(s!=null){for(var o=fs(s),u=O.m(),f=o.x();f.y();){var c=f.z(),v=c instanceof vr?c:null,h=v==null?null:Hn(v);h==null||u.n(h)}var d=ot(u),p;if(n.y1i_1.i1()?p=!1:p=D(d,n.y1i_1),p){var g="LucideIcon";return e.n(g),"LucideIcon"}var y=du(n,r);if(y!=null){var x=n.a1j_1.o2(ot(y));if(x!=null){var k=x.t1j_1;e.n(k);var S,I=fs(s),z;r:{var q;if(E(I,Y)?q=I.i1():q=!1,q){z=!1;break r}for(var T=I.x();T.y();){var P=T.z();if(P instanceof de){z=!0;break r}}z=!1}return z?S=x.t1j_1+" | null":S=x.t1j_1,S}}var $=fs(s),j=V($," | ",l,l,l,l,Rq(n)),U;return C(j)===0?U="never":U=j,U}var J=r.i18("const");if(J!=null)return Cn(n,J);var M=_n(r,"oneOf");if(M!=null)return nd(n,M,e,t);var F=_n(r,"anyOf");if(F!=null)return nd(n,F,e,t);var R=_n(r,"allOf");if(R!=null)return V(R," & ",l,l,l,l,Lq(n,e,t));var X=r.i18("type"),H;if(X==null)H=r.i18("properties")!=null?qw(n,r,e,t):"unknown";else if(X instanceof hn){for(var er=O.g1(Zr(X,10)),Z=X.x();Z.y();){var W=Z.z(),sr=rd(n,On(W).c18(),r,e,t);er.n(sr)}H=V(va(er)," | ")}else H=rd(n,On(X).c18(),r,e,t);return H}function rd(n,r,e,t,i){var a;switch(r){case"string":var s=_v(e),o=s??Nw(e),u;o==null?u=null:(t.n(o),u=o);var f=u;a=f??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=tq(n,e,t,i);break;case"object":a=qw(n,e,t,i);break;default:a="unknown";break}return a}function tq(n,r,e,t){var i=_n(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,Mq(n,e,t));var a=r.i18("items"),s=a==null?null:jr(a),o;if(s==null)return"unknown[]";o=s;var u=o,f=Kn(n,u,e,t);return bs(f," | ")||bs(f," & ")?"("+f+")[]":f+"[]"}function qw(n,r,e,t){var i=ar(r,"properties");if(!(i??Ar()).i1())return Cw(n,r,e,t);var a=r.i18("additionalProperties"),s=a instanceof nr?a:null;return s!=null?"Record<string, "+Kn(n,s,e,t)+">":"Record<string, unknown>"}function nd(n,r,e,t){for(var i=O.g1(Zr(r,10)),a=r.x();a.y();){var s=a.z(),o=Kn(n,jr(s),e,t);i.n(o)}return V(va(i)," | ")}function Cn(n,r){var e;if(r instanceof de)e="null";else{var t;r instanceof vr?t=r.b18():t=!1,t?e=pe(r.c18()):r instanceof vr?e=r.c18():e="unknown"}return e}function iq(n,r,e){for(var t=Pn.e1(),i=fr.t4(),a=O.m(),s=fr.t4(),o=r.r2().x();o.y();)for(var u=o.z(),f=u.k2(),c=u.l2(),v=jr(c),h=aw().x();h.y();){var d=h.z(),p=ar(v,d);if(p!=null){var g=Tw(n,f),y=i.o2(g),x;if(y==null){var k=O.m();i.s2(g,k),x=k}else x=y;var S=x,I=vq(n,f,d,v,p);S.n(I)}}var z=Gf(lv());z.h1(i.p2());for(var q=z,T=_u(i),P=O.g1(T.c1()),$=T.r2().x();$.y();){var j=$.z(),U=j.k2(),J=j.l2(),M=Pn.e1(),F=Qr.f(),R=V(J,`
`,l,l,l,l,Fq(t,n,M,U,a,s,q,F)),X=F.toString()+`
export const `+U+` = {
`+R+`
};
`;P.n(X)}for(var H=P,er=hi(t),Z=O.m(),W=er.x();W.y();){for(var sr=W.z(),ur=O.g1(Zr(e,10)),rr=e.x();rr.y();){var Er=rr.z(),Ir=Jn(Er);ur.n(Ir)}ur.l1(sr)&&Z.n(sr)}var mr=Z,zr,br=E2(i.q2()),Cr;r:{var Rr;if(E(br,Y)?Rr=br.i1():Rr=!1,Rr){Cr=!1;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(Yr.u1k_1){Cr=!0;break r}}Cr=!1}Cr?zr="ApiError, request, stream":zr="ApiError, request";var sn=zr,Gr=n.l1i_1.i1()?sn:sn+", codeMessages, errorCode",_r=Qr.f();_r.fa("import { "+Gr+`, type RequestOptions } from './client.js';
`);var Mr=n.i1i_1!=null?wi(mr,"PublicConfig"):mr,$r=n.l1i_1.i1()?Mr:hi(wi(Mr,"ErrorCode"));$r.i1()||_r.fa("import type { "+V($r)+` } from './types.js';
`),_r.fa(`
`);for(var nn=H.x();nn.y();){var Fr=nn.z();_r.fa(Fr).fa(`
`)}if(_r.fa(uq(n,a)),n.l1i_1.i1()||_r.fa(q7()),!s.i1()){_r.fa(`export const uploadRules = {
`);for(var on=s.r2(),ln=$q,mn=new Gy(ln),bn=Ci(on,mn).x();bn.y();){var ye=bn.z(),Mn=ye.k2(),Zn=ye.l2();_r.fa("    '"+Mn+"': "+Zn+`,
`)}_r.fa(`} as const;

`)}return n.i1i_1!=null&&_r.fa(Re("public-config.ts")),_r.fa("export const api = { "+V(hi(i.p2()))+` };
`),_r.fa(Re("api-with.ts")),_r.toString()}function aq(n,r){var e=ar(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=ot(gu(r,"required")),f=o.r2(),c=V(f,"; ",l,l,l,l,Jq(u));return"{ "+c+" }"}function sq(n,r){var e=r.i18("maxBytes"),t=e==null?null:On(e),i=t==null?null:Qz(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=_n(r,"types"),u;if(o==null)u=null;else{for(var f=O.g1(Zr(o,10)),c=o.x();c.y();){var v=c.z(),h=pe(On(v).c18());f.n(h)}u=f}var d=u,p;if(d==null)p=null;else{var g;d.i1()?g=null:g=d,p=g}var y=p,x;y==null?x=null:x="types: ["+V(y)+"]";var k=x,S=r.i18("maxFiles"),I=S==null?null:On(S),z=I==null?null:rC(I),q;z==null?q=null:q="maxFiles: "+z;var T=He([s,k,q]);return"{ "+V(T)+" }"}function oq(n){return Aw(n,"ErrorCode",n.l1i_1)}function lq(n){var r=Sl().a1k_1.h1k_1,e=V(r,"",l,l,l,l,Hq(n));return`
export interface PasswordRule {
    readonly pattern: string;
    readonly requirement: string;
}

`+(`export const passwordRules: readonly PasswordRule[] = [
`+e+`];

`)+("export const passwordMessage = "+Cn(n,xn(Sl().a1k_1.i1k_1))+`;

`)+`export interface PasswordStrength {
    readonly met: readonly PasswordRule[];
    readonly missing: readonly PasswordRule[];
    readonly score: number;
    readonly strong: boolean;
}

export function passwordStrength(password: string): PasswordStrength {
    const met = passwordRules.filter((rule) => new RegExp(rule.pattern).test(password));
    const missing = passwordRules.filter((rule) => !met.includes(rule));
    return { met, missing, score: met.length / passwordRules.length, strong: missing.length === 0 };
}
`}function Aw(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,Gq),i=V(e,"",l,l,l,l,Kq);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function uq(n,r){var e=V(r,"",l,l,l,l,Wq),t=V(r,"",l,l,l,l,Yq);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function fq(n,r,e){var t=pv(r),i=hc(1,Zq),a=qs(i,Vq(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw Or.r("Sequence contains no element matching the predicate.")}var f=s;return e.n(f),f}function cq(n,r,e,t){var i=j2([r,r+V(e,"",l,l,l,l,Xq)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,f;if(u==null){var c=hc(2,Qq),v=qs(c,rA(r)),h;r:{for(var d=v.x();d.y();){var p=d.z();if(!t.l1(p)){h=p;break r}}throw Or.r("Sequence contains no element matching the predicate.")}f=h}else f=u;var g=f;return t.n(g),g}function vq(n,r,e,t,i){for(var a=Pn.e1(),s=_n(t,"parameters"),o=s??hr(),u=_n(i,"parameters"),f=u??hr(),c=ue(o,f),v=O.g1(Zr(c,10)),h=c.x();h.y();){var d=h.z(),p=jr(d);v.n(p)}for(var g=v,y=lw().df(r),x=Xp(qs(y,nA)),k=O.m(),S=x.x();S.y();){var I=S.z(),z;r:{for(var q=g.x();q.y();){var T=q.z();if(Ur(T,"name")===I&&Ur(T,"in")==="path"){z=T;break r}}z=null}var P=z,$=P==null?null:ar(P,"schema"),j;$==null?j=null:j=Kn(n,$,a);var U=j,J;if(U==null)J=null;else{var M;U==="unknown"||U==="string"?M=null:M=U,J=M}var F=J,R=F??"string | number",X=Ow(I)+": "+R;k.n(X)}var H=ar(i,"requestBody"),er=H==null?null:ar(H,"content"),Z=er==null?null:er.r2(),W;if(Z==null)W=null;else{var sr;r:{for(var ur=Z.x();ur.y();){var rr=ur.z();if(Ce(rr.k2(),"multipart/")){sr=rr;break r}}sr=null}W=sr}var Er=W,Ir=Er==null?null:Er.l2(),mr;Ir==null?mr=null:mr=Ir instanceof nr?Ir:null;var zr=mr,br=zr==null?null:ar(zr,"schema"),Cr;br==null?Cr=null:Cr=aq(n,br);var Rr=Cr,pr;if(Er!=null)pr=Rr??"FormData";else{var Yr;er==null?Yr=null:Yr=qf(n,er);var sn=Yr,Gr;sn==null?Gr=null:Gr=Kn(n,sn,a),pr=Gr}var _r=pr,Mr;if(Er==null){var $r;er==null?$r=null:$r=qf(n,er);var nn=$r,Fr;nn==null?Fr=null:Fr=hq(n,nn);var on=Fr;Mr=on??hr()}else Mr=hr();var ln=Mr,mn;ln.i1()?mn=_r:mn="Omit<"+_r+", "+V(ln," | ",l,l,l,l,eA)+">";var bn=mn;if(H!=null){var ye="body: "+(bn??"unknown");k.n(ye)}for(var Mn=O.m(),Zn=g.x();Zn.y();){var we=Zn.z();Ur(we,"in")==="query"&&Mn.n(we)}var Fn=Mn;if(!Fn.i1()){var be=V(Fn,"; ",l,l,l,l,tA(n,a)),je;r:{var Ne;if(E(Fn,Y)?Ne=Fn.i1():Ne=!1,Ne){je=!1;break r}for(var Ue=Fn.x();Ue.y();){var ke=Ue.z(),An=ke.i18("required"),In=An==null?null:On(An);if((In==null?null:Hn(In))==="true"){je=!0;break r}}je=!1}var Tn=je,Ma="query"+(Tn?"":"?")+": { "+be+" }";k.n(Ma)}for(var Ut=O.m(),dt=g.x();dt.y();){var pt=dt.z(),Dt;if(Ur(pt,"in")==="header"){var Ui=T7(),_t=Ur(pt,"name"),Di=(_t??"").toLowerCase();Dt=!Ui.l1(Di)}else Dt=!1;Dt&&Ut.n(pt)}var De=Ut;if(!De.i1()){var Fa=V(De,"; ",l,l,l,l,iA(n,a)),gt;r:{var Rt;if(E(De,Y)?Rt=De.i1():Rt=!1,Rt){gt=!1;break r}for(var Ri=De.x();Ri.y();){var $a=Ri.z(),Li=$a.i18("required"),Lt=Li==null?null:On(Li);if((Lt==null?null:Hn(Lt))==="true"){gt=!0;break r}}gt=!1}var Ja=gt,Ha="headers"+(Ja?"":"?")+": { "+Fa+" }";k.n(Ha)}var Mi="options?: RequestOptions";k.n(Mi);var Fi=x.i1()?pe(r):dq(n,r),Mt=ar(i,"x-ktor-svelte-upload"),Ft;Mt==null?Ft=null:Ft=sq(n,Mt);var $t=Ft,$i=i.i18("x-ktor-svelte-timeout"),Ji=$i==null?null:On($i),mt=Ji==null?null:Hn(Ji),Qs=mt==null?null:lc(mt),Jt=Qs==null?null:Un(Qs),Ga;if(Jt==null)Ga=null;else{var Ht;tr(Jt,new w(0,0))>0?Ht=Jt:Ht=null,Ga=Ht}var ro=Ga,xe=O.m();ro!=null&&xe.n("timeout: "+ro.toString()),xe.n("...options"),Fn.i1()||xe.n("query"),De.i1()||xe.n("typedHeaders: headers"),H!=null&&xe.n("body"),ln.i1()||xe.n("omit: ["+V(ln,l,l,l,l,l,aA)+"]"),$t!=null&&xe.n("upload: "+$t),Rr!=null&&xe.n("multipart: true");var Ka=xe.m6(),no=_q(n,i,a),Hi=gq(n,i),eo=pq(n,i,a),Wa=e.toUpperCase(),to=Ur(i,"operationId"),Gi;to==null?Gi=null:Gi=pu(to);for(var Ki=Gi,io=Ki??mq(n,r,e),Wi=He([Ur(i,"summary"),Ur(i,"description")]),mv=O.g1(Zr(Wi,10)),yv=Wi.x();yv.y();){var wv=yv.z(),$w=b(Ig(Os(wv)?wv:m()));mv.n($w)}for(var bv=O.m(),kv=mv.x();kv.y();){var xv=kv.z();C(xv)>0&&bv.n(xv)}var Jw=va(bv),Hw="@deprecated",mu;Pw(i)?mu=Hw:mu=null;var Gw=mu,Kw=n.f1j_1,Ww=e.toUpperCase(),Sv=Kw.o2(Ww+" "+r),yu;Sv==null?yu=null:yu="@see "+Sv;var Yw=ue(Jw,He([Gw,yu])),Zw=sA(Ka,Hi,k,no,e,Fi),Ev=V(va(eo.q2())," | "),wu;C(Ev)===0?wu=null:wu=Ev;var Vw=wu;return new My(Wa,r,io,Yw,x,Zw,a,Hi,$t,Vw,zi(eo.p2()))}function hq(n,r){var e=Ur(r,"$ref"),t;if(e==null)t=null;else{var i=n.w1i_1.o2(Aa(e,47));t=i instanceof nr?i:null}for(var a=t,s=a??r,o=ar(s,"properties"),u=o??Ar(),f=fr.t4(),c=u.r2().x();c.y();){var v=c.z(),h=v.l2(),d=h instanceof nr?h:null;(d==null?null:Bw(d))===!0&&f.s2(v.k2(),v.l2())}return zi(f.p2())}function dq(n,r){var e=Qr.f();e.ga(96);for(var t=0,i=lw().df(r).x();i.y();){var a=i.z();e.fa(zf(n,oe(r,t,a.ff().r1_1))),e.fa("${encodeURIComponent("+Ow(a.dg().d1(1))+")}"),t=a.ff().s1_1+1|0}return e.fa(zf(n,lt(r,t))),e.ga(96),e.toString()}function pq(n,r,e){for(var t=ar(r,"responses"),i=(t??Ar()).r2(),a=O.m(),s=i.x();s.y();){var o=s.z(),u;r:{var f=o.k2(),c=o.l2(),v=Rl(f),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var p=h,g;if(p==null){u=null;break r}else g=p;var y=g,x=ar(jr(c),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,I=qf(n,S),z;if(I==null){u=null;break r}else z=I;var q=z;u=A(y,Kn(n,q,e))}var T=u;T==null||a.n(T)}return _u(og(a))}function _q(n,r,e){var t=ar(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=O.m(),u=s.x();u.y();){var f=u.z(),c=f.k2();Ce(c,"2")&&o.n(f)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var p=d.k2(),g=p;do{var y=h.z(),x=y.k2(),k=x;Be(g,k)>0&&(d=y,g=k)}while(h.y());v=d}var S=v,I=S==null?null:S.l2(),z=I==null?null:jr(I),q;if(z==null)return"unknown";q=z;var T=q,P=ar(T,"content"),$;if(P==null)return"void";$=P;var j=$,U=ar(j,"text/event-stream");if(U!=null){var J=ar(U,"schema"),M;J==null?M=null:M=Kn(n,J,e);var F=M;return F??"string"}var R=j.p2(),X;r:{for(var H=R.x();H.y();){var er=H.z();if(bs(er,"json")){X=er;break r}}X=null}var Z=X;if(Z!=null){var W=ar(j,Z),sr=W==null?null:ar(W,"schema"),ur;sr==null?ur=null:ur=Kn(n,sr,e);var rr=ur;return rr??"unknown"}return"string"}function gq(n,r){for(var e=ar(r,"responses"),t=e??Ar(),i=fr.t4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();Ce(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),f;r:{var c;if(E(u,Y)?c=u.i1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof nr?h:null,p=d==null?null:ar(d,"content");if((p==null?null:p.h18("text/event-stream"))===!0){f=!0;break r}}f=!1}return f}function qf(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(bs(a,"json")){t=a;break r}}t=null}var s=t,o=s??Lb(r.p2()),u;if(o==null)u=null;else{var f=ar(r,o);u=f==null?null:ar(f,"schema")}return u}function Tw(n,r){var e=n.z1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||Ce(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=kg(xg(r,o),ka([47])),f;r:{for(var c=u.x();c.y();){var v=c.z(),h;if(C(v)>0?h=!Ce(v,"{"):h=!1,h){f=v;break r}}f=null}var d=f,p;d==null?p=null:p=pv(d,lv());var g=p;return g??"root"}function mq(n,r,e){var t=n.z1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||Ce(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",f=kg(xg(r,u),ka([47])),c=O.m(),v=f.x();v.y();){var h=v.z();C(h)>0&&c.n(h)}for(var d=c,p=O.m(),g=d.x();g.y();){var y=g.z();Ce(y,"{")||p.n(y)}var x=Mb(p,1);if(!x.i1()){var k=e==="post"?"":e;return pu(k+V(x,"",l,l,l,l,oA))}var S=Zp(d),I=(S==null?null:Ce(S,"{"))===!0;switch(e){case"get":return I?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function jw(n,r){var e=Ur(r,"description"),t;e==null?t=null:t=b(Ig(Os(e)?e:m()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",f;Pw(r)?f=u:f=null;var c=f;return He([o,c])}function bl(n,r,e){if(r.i1())return"";var t=Sg(Qn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+Yp(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,lA(e))+(e+` */
`)}function yq(n){return"'"+n.r1h_1+"'"}function wq(n){return`
`+n.v1g()}function bq(n){var r=n.nh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function Af(n,r,e){var t;if(e instanceof nr){var i=Ur(e,"$ref"),a=i==null?null:Aa(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var f=fr.na(e.c1()),c=e.r2().x();c.y();){var v=c.z(),h=v.k2(),d=Af(n,r,v.l2());f.s2(h,d)}u=new nr(f)}else u=R7(r,o);t=u}else if(e instanceof hn){for(var p=O.g1(Zr(e,10)),g=e.x();g.y();){var y=g.z(),x=Af(n,r,y);p.n(x)}t=new hn(p)}else t=e;return t}function kq(n,r){var e=n.j1j_1,t=r.j1j_1;return Bt(e,t)}function xq(n){var r=n.k1j_1,e;r==null?e=null:e=", permission: "+pe(r);var t=e,i=t??"";return"    { page: "+pe(n.j1j_1)+i+` },
`}function Sq(n){var r=n.k2(),e=n.l2();return Ke(r)+": "+pe(e)}function Eq(n,r){var e=n.ih_1,t=r.ih_1;return Bt(e,t)}function Iq(n){return n.jh_1}function zq(n){return r=>Cn(n,xn(r))}function Cq(n){var r=n.nh(),e=n.oh();return r+": "+e}function ed(n,r,e,t,i,a){var s=Se(n,r,t);if(s!=null)return Tt(s);var o=Se(n,r,i),u;if(o==null)return null;u=o;var f=u;return e?Tt(f+a):null}function qq(n){return n+`
`}function Gt(n,r,e){return"addError(errors, "+n+", "+Cn(r,xn(e))+");"}function Aq(n,r){return e=>"matches("+Cn(n,xn(e.i1l_1))+", "+r+")"}function Tq(n){return r=>"    "+Ke(r)+": "+Cn(n,xn(r))+`,
`}function ea(n,r,e,t,i,a,s){if(t instanceof hn)for(var o=t.x();o.y();){var u=o.z();ea(n,r,e,u,i,a,!1)}else if(t instanceof nr){var f=du(n,t),c;if(f==null)c=null;else{var v;s?v=null:v=f,c=v}var h=c;if(h!=null){var d=ot(h),p=r.o2(d),g;if(p==null){var y=O.m();r.s2(d,y),g=y}else g=p;var x=g,k=new Ly(i,a);x.n(k);var S=ot(h),I=e.o2(S);if(I==null){var z=h;e.s2(S,z)}}for(var q=Ur(t,"in")!=null?Ur(t,"name"):null,T=t.r2().x();T.y();){var P=T.z(),$=P.k2(),j=P.l2(),U;if($==="properties"?U=j instanceof nr:U=!1,U)for(var J=j.r2().x();J.y();){var M=J.z(),F=M.k2(),R=M.l2();ea(n,r,e,R,i,F,!1)}else $==="schema"&&q!=null?ea(n,r,e,j,i,q,!1):$!=="enum"&&ea(n,r,e,j,i,a,!1)}}}function jq(n){return(r,e)=>{var t=V(hi(ze(n,r)),"\0"),i=V(hi(ze(n,e)),"\0");return Bt(t,i)}}function Oq(n){return n.l1k_1}function Pq(n){return n.m1k_1}function Bq(n){return n+1|0}function Nq(n){return r=>n+r}function Uq(n,r,e,t){return i=>"..."+li(n,jr(i),r,e,t)}function Dq(n,r,e,t){return i=>li(n,jr(i),r,e,t)}function Rq(n){return Ge(r=>{var e=n;return Cn(e,r)},1,0,8,"literal",[n])}function Lq(n,r,e){return t=>Kn(n,jr(t),r,e)}function Mq(n,r,e){return t=>Kn(n,jr(t),r,e)}function Fq(n,r,e,t,i,a,s,o){return u=>{var f=n,c=u.t1k_1;Ca(f,c);var v=cq(r,u.p1k_1,u.r1k_1,e),h=t+"."+v,d=r.e1j_1,p=new hu(h,u.n1k_1,u.o1k_1);d.n(p);var g=u.w1k_1;if(g!=null){var y=i,x=new Fy(h,g,u.x1k_1);y.n(x)}var k=u.v1k_1;k==null||a.s2(h,k);var S=fq(r,t+"-"+v,s);return o.fa(bl(r,u.q1k_1,"")),o.fa("export const "+S+" = "+u.s1k_1(h)+`;
`),bl(r,u.q1k_1,"    ")+("    "+Ke(v)+": "+S+",")}}function $q(n,r){var e=n.k2(),t=r.k2();return Bt(e,t)}function td(n){return Ur(n,"type")==="string"&&Ur(n,"format")==="binary"}function Jq(n){return r=>{var e=r.k2(),t=r.l2(),i=jr(t),a;if(td(i))a="File";else{var s;if(Ur(i,"type")==="array"){var o=ar(i,"items"),u;o==null?u=null:u=td(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var f=a;return Ke(e)+(n.l1(e)?"":"?")+": "+f}}function Hq(n){return r=>"    { pattern: "+Cn(n,xn(r.i1l_1))+", requirement: "+Cn(n,xn(r.j1l_1))+` },
`}function Gq(n){return pe(n)}function Kq(n){return"    "+Ke(n)+": "+pe(n)+`,
`}function Wq(n){return"    '"+n.y1k_1+"': "+n.z1k_1+`;
`}function Yq(n){return"    '"+n.y1k_1+"': ["+V(n.a1l_1)+`],
`}function Zq(n){return n+1|0}function Vq(n){return r=>r===1?n:n+r}function Xq(n){return dv(n)}function Qq(n){return n+1|0}function rA(n){return r=>n+r}function nA(n){return n.dg().d1(1)}function eA(n){return pe(n)}function tA(n,r){return e=>{var t=e.i18("required"),i=t==null?null:On(t),a=(i==null?null:Hn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=Kn(n,s,r);var u=o,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Ur(e,"name"),p=d??"";return Ke(p)+(a?"":"?")+": "+h}}function iA(n,r){return e=>{var t=e.i18("required"),i=t==null?null:On(t),a=(i==null?null:Hn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=Kn(n,s,r);var u=o,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Ur(e,"name"),p=d??"";return pe(p)+(a?"":"?")+": "+h}}function aA(n){return pe(n)}function sA(n,r,e,t,i,a){return s=>{var o=V(wi(n,"operation: '"+s+"'")),u=r?"stream":"request",f=V(e),c=i.toUpperCase();return"("+f+") => "+u+"<"+t+">('"+c+"', "+a+", { "+o+" })"}}function oA(n){return dv(n)}function lA(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Jn(n){wr();for(var r=It.ze("[^A-Za-z0-9]+").lf(n,0),e=O.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,fA),o;C(s)===0?o="Unnamed":o=s;var u=o;return e2(Qb(u))?"_"+u:u}function dv(n){wr();var r=pu(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+lt(r,1)}else e=r;return e}function pu(n){wr();for(var r=It.ze("[^A-Za-z0-9]+").lf(n,0),e=O.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=O.g1(Zr(a,10)),o=0,u=a.x();u.y();){var f=u.z(),c=o;o=c+1|0;var v;if(Bs(c)===0){var h;if(C(f)>0){var d=K(f,0),p=yr(d).toLowerCase();h=b(p)+lt(f,1)}else h=f;v=h}else{var g;if(C(f)>0){var y=K(f,0),x=yr(y).toUpperCase();g=b(x)+lt(f,1)}else g=f;v=g}var k=v;s.n(k)}return V(s,"")}function pv(n,r){r=r===l?Pt():r,wr();var e=pu(n);return ov().af(e)&&!j7().l1(e)&&!r.l1(e)?e:"_"+e}function Ow(n){return wr(),pv(n,A7())}function Ke(n){return wr(),ov().af(n)?n:pe(n)}function pe(n){wr();var r=Qr.f();r.ga(39);for(var e=0;e<C(n);){var t=Q(n,e);if(e=e+1|0,t===92)r.fa("\\\\");else if(t===39)r.fa("\\'");else if(t===10)r.fa("\\n");else if(t===13)r.fa("\\r");else if(pn(t,32)<0||t===8232||t===8233){var i=G(t);r.fa("\\u"+Eg(t2(i,16),4,48))}else r.ga(t)}return r.ga(39),r.toString()}function Pw(n){wr();var r=n.i18("deprecated"),e=r instanceof vr?r:null;return(e==null?null:Gc(e))===!0}function Bw(n){wr();var r=n.i18("readOnly"),e=r instanceof vr?r:null;return(e==null?null:Gc(e))===!0}function ar(n,r){wr();var e=n.i18(r);return e instanceof nr?e:null}function _u(n){wr();for(var r=n.r2(),e=cA,t=new Yy(e),i=Ci(r,t),a=dn(Zr(i,10),16),s=fr.na(a),o=i.x();o.y();){var u=o.z(),f=A(u.k2(),u.l2());s.s2(f.ih_1,f.jh_1)}return s}function _n(n,r){wr();var e=n.i18(r);return e instanceof hn?e:null}function Ur(n,r){wr();var e=n.i18(r),t=e instanceof vr?e:null;return t==null?null:Hn(t)}function gu(n,r){wr();for(var e=_n(n,r),t=e??hr(),i=O.g1(Zr(t,10)),a=t.x();a.y();){var s=a.z(),o=On(s).c18();i.n(o)}return i}function _v(n){wr();var r=Ur(n,"format"),e;return r==null?e=null:e=hw().o2(r),e}function Nw(n){wr();var r=Ur(n,"format"),e;return r==null?e=null:e=yo().o2(r),e}function kl(n,r){wr();var e;if(n instanceof nr){var t,i=Ur(n,"format");if((E(r,wn)?r:m()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(E(a,Y)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var f=u.z();if(kl(f,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof hn){var c;r:{var v;if(E(n,Y)?v=n.i1():v=!1,v){c=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(kl(d,r)){c=!0;break r}}c=!1}e=c}else e=!1;return e}function xl(n){wr();var r;if(n instanceof nr){var e;if(_v(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(E(t,Y)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(xl(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof hn){var u;r:{var f;if(E(n,Y)?f=n.i1():f=!1,f){u=!1;break r}for(var c=n.x();c.y();){var v=c.z();if(xl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var id;function gv(){if(id)return or;id=!0,Uw=new mo("ADD_ERROR",0,"add-error.ts"),Dw=new mo("ADD_NESTED",1,"add-nested.ts"),Rw=new mo("MATCHES",2,"matches.ts")}var Uw,Dw,Rw;function uA(n){return wr(),n.n16_1=!0,or}function fA(n){return wr(),dv(n)}function cA(n,r){wr();var e=n.k2(),t=r.k2();return Bt(e,t)}function Lw(){return gv(),Uw}function vA(){return gv(),Dw}function ad(){return gv(),Rw}var sd;function wr(){sd||(sd=!0,sw=tn(["get","post","put","patch","delete","head","options"]),ow=It.ze("[A-Za-z_$][A-Za-z0-9_$]*"),uw=It.ze("\\{([^}]+)\\}"),cw=Yz(l,uA),vw=tn(["guardPages","signedInUser","pageGuards"]),dw=uh([A("date","IsoDate"),A("time","IsoTime"),A("date-time","IsoDateTime")]),pw=uh([A("duration","IsoDuration"),A("decimal","Decimal")]),_w=Us([A("IsoDuration","'PT0S'"),A("Decimal","'0'")]),gw=si(["string","integer","number"]),mw=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,yw=si(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),ww=si(["body","query","headers","options","encodeURIComponent"]),bw=si(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),kw=si(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),xw=tn(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function od(n,r){return r===1?"1 character":""+r+" characters"}var Qi;function Tt(n){return n%1===0?Un(n).toString():n.toString()}var Tf;function Sl(){return Tf===l&&new Vy,Tf}function hA(){return Fw(),Mw}var Mw;function Re(n){return Fw(),ze(hA(),n)}var ld;function Fw(){ld||(ld=!0,Mw=Us([A("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),A("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),A("api-with.ts",`
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
`),A("client.ts",`export interface UploadProgress {
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
    omit?: readonly string[];
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

function withoutKeys(body: unknown, keys: readonly string[]): unknown {
    if (body === null || typeof body !== 'object' || Array.isArray(body) || isRawBody(body)) return body;
    const copy: Record<string, unknown> = { ...(body as Record<string, unknown>) };
    for (const key of keys) delete copy[key];
    return copy;
}

function prepare(method: string, path: string, options: InternalOptions, accept: string, streaming = false) {
    const {
        query,
        typedHeaders,
        body: sent,
        operation,
        upload,
        multipart,
        omit,
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
    const given = omit?.length ? withoutKeys(sent, omit) : sent;
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

let writesInFlight = 0;
const pendingWatchers = new Set<(count: number) => void>();

export function watchPendingWrites(watcher: (count: number) => void): () => void {
    pendingWatchers.add(watcher);
    watcher(writesInFlight);
    return () => {
        pendingWatchers.delete(watcher);
    };
}

function changePendingWrites(by: number) {
    writesInFlight += by;
    for (const watcher of pendingWatchers) {
        try {
            watcher(writesInFlight);
        } catch {
            continue;
        }
    }
}

export async function request<T>(method: string, path: string, options: InternalOptions = {}): Promise<T> {
    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') return sendRequest<T>(method, path, options);
    changePendingWrites(1);
    try {
        return await sendRequest<T>(method, path, options);
    } finally {
        changePendingWrites(-1);
    }
}

async function sendRequest<T>(method: string, path: string, options: InternalOptions): Promise<T> {
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
    total?: number | null;
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

`),A("dates.ts",`declare const iso: unique symbol;

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
`),A("form-state.svelte.ts",`import { tick, untrack } from 'svelte';
import { errorMessage, isValidationError, isVersionConflict, patchOf, type Patch, type RequestOptions } from './client.js';

export type FieldErrors = Record<string, string[]>;

export type FieldCheckRoute = (query: { value: string }, options?: RequestOptions) => Promise<{ message?: string | null }>;

export interface FieldChange {
    field: string;
    from: unknown;
    to: unknown;
}

export interface FormStateOptions<T> {
    validate?: (draft: T) => FieldErrors | null | undefined;
    resetOnSuccess?: boolean;
    checks?: Partial<Record<keyof T & string, FieldCheckRoute>>;
    checkDelay?: number;
    focusErrors?: boolean;
}

export interface FormState<T> {
    draft: T;
    readonly dirty: boolean;
    readonly changes: FieldChange[];
    changed(field: keyof T & string): boolean;
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
    submitChanges<R>(send: (changes: Patch<T>) => Promise<R>): Promise<R | undefined>;
    focusFirstError(): Promise<void>;
    setErrors(errors: FieldErrors): void;
}

export function formState<T extends object>(initial: T, options: FormStateOptions<T> = {}): FormState<T> {
    let saved = $state.raw($state.snapshot(initial) as T);
    let draft = $state($state.snapshot(initial) as T);
    let baseline = $state(JSON.stringify(initial));
    let submitting = $state(false);
    let errors = $state.raw<FieldErrors>({});
    let failure = $state.raw<unknown>(undefined);
    let checked = $state.raw<FieldErrors>({});
    let conflict = $state.raw<unknown>(undefined);
    let checking = $state(0);
    const dirty = $derived(JSON.stringify(draft) !== baseline);
    const changes = $derived.by(() => {
        const before = saved as Record<string, unknown>;
        const after = draft as Record<string, unknown>;
        const fields = [...new Set([...Object.keys(before), ...Object.keys(after)])];
        return fields
            .filter((name) => JSON.stringify(before[name] ?? null) !== JSON.stringify(after[name] ?? null))
            .map((name) => ({ field: name, from: before[name], to: $state.snapshot(after[name]) }));
    });
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

    async function focusFirstError() {
        if (typeof document === 'undefined') return;
        await tick();
        const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
        if (!first) return;
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'center' });
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
            if (options.focusErrors !== false) void focusFirstError();
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
            if (isValidationError(error)) {
                errors = error.body.fields ?? {};
                if (options.focusErrors !== false) void focusFirstError();
            } else {
                failure = error;
            }
            if (isVersionConflict(error)) conflict = error.body.current;
            return undefined;
        } finally {
            submitting = false;
        }
    }

    function submitChanges<R>(send: (changes: Patch<T>) => Promise<R>): Promise<R | undefined> {
        const before = saved;
        return submit((sending) => {
            const changes = patchOf(before, sending);
            if (Object.keys(changes).length === 0) return Promise.resolve(undefined as R);
            return send(changes);
        });
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
        get changes() {
            return changes;
        },
        changed(name: keyof T & string) {
            return changes.some((change) => change.field === name);
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
        submit,
        submitChanges,
        focusFirstError,
        setErrors(next: FieldErrors) {
            errors = next;
        }
    };
}

export interface FormWizardOptions<T> extends FormStateOptions<T> {
    steps: readonly (readonly (keyof T & string)[])[];
    keep?: string;
}

export interface FormWizard<T> extends FormState<T> {
    readonly step: number;
    readonly count: number;
    readonly first: boolean;
    readonly last: boolean;
    readonly reached: number;
    readonly fields: readonly (keyof T & string)[];
    next(): boolean;
    back(): void;
    goTo(step: number): void;
}

function topField(path: string): string {
    return path.split(/[.[]/)[0];
}

function storage(): Storage | undefined {
    try {
        return typeof sessionStorage === 'undefined' ? undefined : sessionStorage;
    } catch {
        return undefined;
    }
}

export function formWizard<T extends object>(initial: T, options: FormWizardOptions<T>): FormWizard<T> {
    if (options.steps.length === 0) throw new Error('formWizard needs at least one step.');
    const kept = options.keep ? storage()?.getItem(options.keep) : null;
    let restored: { step: number; reached: number; draft: T } | undefined;
    try {
        restored = kept ? JSON.parse(kept) : undefined;
    } catch {
        restored = undefined;
    }
    const form = formState<T>(initial, { ...options, focusErrors: options.focusErrors });
    if (restored?.draft) form.draft = restored.draft;
    const lastStep = options.steps.length - 1;
    let step = $state(Math.min(restored?.step ?? 0, lastStep));
    let reached = $state(Math.min(Math.max(restored?.reached ?? 0, restored?.step ?? 0), lastStep));

    $effect(() => {
        if (!options.keep) return;
        const snapshot = JSON.stringify({ step, reached, draft: $state.snapshot(form.draft) });
        try {
            storage()?.setItem(options.keep, snapshot);
        } catch {
            return;
        }
    });

    function stepOf(field: string): number {
        const index = options.steps.findIndex((fields) => (fields as readonly string[]).includes(topField(field)));
        return index === -1 ? lastStep : index;
    }

    function errorsOn(fields: readonly string[]): FieldErrors {
        const all = options.validate?.($state.snapshot(form.draft) as T) ?? {};
        return Object.fromEntries(Object.entries(all).filter(([path, messages]) => messages.length > 0 && fields.includes(topField(path))));
    }

    function next(): boolean {
        const found = errorsOn(options.steps[step] as readonly string[]);
        form.setErrors(found);
        if (Object.keys(found).length > 0) {
            if (options.focusErrors !== false) void form.focusFirstError();
            return false;
        }
        if (step < lastStep) {
            step += 1;
            reached = Math.max(reached, step);
        }
        return true;
    }

    function back() {
        if (step > 0) step -= 1;
    }

    function goTo(target: number) {
        if (target >= 0 && target <= reached) step = target;
    }

    async function submit<R>(send: (draft: T) => Promise<R>): Promise<R | undefined> {
        const result = await form.submit(send);
        const failed = Object.keys(form.errors);
        if (failed.length > 0) {
            step = Math.min(...failed.map(stepOf));
            if (options.focusErrors !== false) void form.focusFirstError();
        } else if (result !== undefined && options.keep) {
            storage()?.removeItem(options.keep);
        }
        return result;
    }

    function reset(next?: T) {
        form.reset(next);
        step = 0;
        reached = 0;
        if (options.keep) storage()?.removeItem(options.keep);
    }

    return {
        get draft() {
            return form.draft;
        },
        set draft(value: T) {
            form.draft = value;
        },
        get dirty() {
            return form.dirty;
        },
        get changes() {
            return form.changes;
        },
        changed: (name) => form.changed(name),
        get submitting() {
            return form.submitting;
        },
        get checking() {
            return form.checking;
        },
        get errors() {
            return form.errors;
        },
        get error() {
            return form.error;
        },
        get message() {
            return form.message;
        },
        get conflict() {
            return form.conflict;
        },
        keepMine: () => form.keepMine(),
        takeTheirs: (value) => form.takeTheirs(value),
        reset,
        submit,
        submitChanges: (send) => form.submitChanges(send),
        focusFirstError: () => form.focusFirstError(),
        setErrors: (errors) => form.setErrors(errors),
        get step() {
            return step;
        },
        get count() {
            return options.steps.length;
        },
        get first() {
            return step === 0;
        },
        get last() {
            return step === lastStep;
        },
        get reached() {
            return reached;
        },
        get fields() {
            return options.steps[step];
        },
        next,
        back,
        goTo
    };
}
`),A("form.ts",`export interface FieldBounds {
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    autocomplete?: string;
    type?: string;
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
    const own = new Set(node.getAttributeNames());

    function apply({ bounds = {}, errors = [], errorClass = 'field-error', describedBy }: FieldOptions) {
        applied.forEach((name) => node.removeAttribute(name));
        applied.clear();
        for (const [name, value] of Object.entries(bounds)) {
            if (value === undefined || value === false) continue;
            if ((name === 'autocomplete' || name === 'type') && own.has(name)) continue;
            if (name === 'type' && !(node instanceof HTMLInputElement)) continue;
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
`),A("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),A("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),A("pending-writes.svelte.ts",`import { watchPendingWrites } from './client.js';

let count = $state(0);

watchPendingWrites((pending) => {
    count = pending;
});

export const pendingWrites = {
    get active(): boolean {
        return count > 0;
    },
    get count(): number {
        return count;
    }
};

export function warnBeforeLeaving(): () => void {
    if (typeof window === 'undefined') return () => undefined;
    const listener = (event: BeforeUnloadEvent) => {
        if (count === 0) return;
        event.preventDefault();
        event.returnValue = '';
    };
    window.addEventListener('beforeunload', listener);
    return () => window.removeEventListener('beforeunload', listener);
}
`),A("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

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

`),A("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

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
`)]))}function kA(n,r){var e;try{for(var t=new Wy(Nn(r)).n1l(n),i=qe(),a=cf.z17(),s=fr.na(t.c1()),o=t.r2().x();o.y();){var u=o.z(),f=u.k2(),c=xn(u.l2());s.s2(f,c)}e=i.q15(a,new nr(Io(A("files",new nr(s)))))}catch(y){var v;if(y instanceof Error){var h=y,d=qe(),p=cf.z17(),g=h.message;v=d.q15(p,new nr(Io(A("error",xn(g??h.toString())))))}else throw y;e=v}return e}_(Dy,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(vn,"InputHint");_(Ry,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(Sf,"EnumType");_(Ly,"EnumUsage");_(My,"Endpoint");_(Fy,"ErrorEntry");_($y,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(Jy,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(Hy,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(Gy,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);_(Ky);_(Wy,"TypeScriptGenerator");_(mo,"ValidationHelper");_(hu,"GeneratedOperation");_(Yy,"sam$kotlin_Comparator$0",l,l,[gn,Sn]);N(Zy,"ConstraintMessages");_(Ye,"RuleCheck");_(Xi,"RulePreset");N(Vy,"RulePresets");Qi=new Zy;export{kA as generateTypeScript};
