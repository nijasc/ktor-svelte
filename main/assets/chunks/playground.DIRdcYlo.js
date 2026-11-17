typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],a=t>>0,i=a<0?Math.max(e+a,0):Math.min(a,e),s=arguments[2],l=s===void 0?e:s>>0,u=l<0?Math.max(e+l,0):Math.min(l,e);i<u;)r[i]=n,i++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var ur=Math.imul,Yu=ArrayBuffer.isView,_s=Math.clz32;class Ff{}class qe{}class bd{}class kd{constructor(r){this.w_1=r}x(){return c_(this.w_1)}}class xd{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class Sd{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let Ed=class{constructor(){a1=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Cn{constructor(r){lc(),this.x1_1=r}i2(r){return gn(this.x1_1,r)}d(r){return kk(this,r)}toString(){return kr(this.x1_1)}equals(r){return xk(this.x1_1,r)}hashCode(){return Sk(this.x1_1)}}class Z{}class Ne{}class zn{}class it{}class xn{}class vi{}let pb=class{};class ve{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Ue(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof ve?r:m())}equals(r){return this===r}hashCode(){return Dk(this)}toString(){return this.w2_1}}let zd=class{constructor(){i1=this,this.z2_1=new b(0,-2147483648),this.a3_1=new b(-1,2147483647),this.b3_1=8,this.c3_1=64}};class b extends bd{constructor(r,e){Ul(),super(),this.d3_1=r,this.e3_1=e}f3(r){return ar(this,r)}d(r){return this.f3(r instanceof b?r:m())}toString(){return qo(this,10)}equals(r){var e;return r instanceof b?e=ir(this,r):e=!1,e}hashCode(){return Ak(this)}valueOf(){return ee(this)}}class yn{}class Id{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw Tr.r(""+this.h3_1);return r}}class _b{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class gb{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class mb{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class yb{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class wb{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class bb{}class kb{}class Cd{constructor(){_1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class qd{constructor(){g1=this;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Int32Array(128),t=0,a=q(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=W(r,i);e[Y(s)]=i}while(t<=a);var l="hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD",u=Pu(l,e,222),f=new Int32Array(u.length),c=0,v=u.length-1|0;if(c<=v)do{var h=c;c=c+1|0,h===0?f[h]=u[h]:f[h]=f[h-1|0]+u[h]|0}while(c<=v);this.k4_1=f;var d="aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL";this.l4_1=Pu(d,e,222);var p="GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB";this.m4_1=Pu(p,e,222)}}class cn{}class Al{toString(){return"kotlin.Unit"}}class bi{static a5(r){return ja(this,r)}l1(r){var e;r:{var t;if(E(this,Z)?t=this.d1():t=!1,t){e=!1;break r}for(var a=this.x();a.y();){var i=a.z();if(D(i,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!0;break r}for(var a=r.x();a.y();){var i=a.z();if(!this.l1(i)){e=!1;break r}}e=!0}return e}d1(){return this.c1()===0}toString(){return H(this,", ","[","]",o,o,U2(this))}toArray(){return M_(this)}}class As extends bi{static z4(){return this.a5()}g1(r){this.b5();for(var e=!1,t=r.x();t.y();){var a=t.z();this.n(a)&&(e=!0)}return e}v2(){this.b5();for(var r=this.x();r.y();)r.z(),r.c5()}toJSON(){return this.toArray()}b5(){}}class $f{constructor(r,e){hc(this,e),this.f5_1=r,this.d5_1=0,this.e5_1=-1}y(){return this.d5_1<this.f5_1.c1()}z(){if(!this.y())throw Tr.j1();var r=this,e=this.d5_1;return this.d5_1=e+1|0,r.e5_1=e,this.f5_1.e1(this.e5_1)}c5(){if(this.e5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw mr.o3(w(r))}this.f5_1.h5(this.e5_1),this.d5_1=this.e5_1,this.e5_1=-1}}class Ad extends $f{constructor(r,e,t){t===o&&(t={}),t.l5_1=r,super(r,t),Ln.m5(e,this.l5_1.c1()),this.d5_1=e}}class Td extends As{static n5(){var r=this.z4();return r.g5_1=0,r}n(r){return this.b5(),this.o5(this.c1(),r),!0}v2(){this.b5(),this.p5(0,this.c1())}x(){return new $f(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Ad(this,r)}p5(r,e){var t=this.m1(r),a=e-r|0,i=0;if(i<a)do i=i+1|0,t.z(),t.c5();while(i<a)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Ln.q5(this,r):!1}hashCode(){return Ln.r5(this)}}class jd{static z5(){var r=ja(this);return r.x5_1=null,r.y5_1=null,r}m2(r){return wh(this,r)!=null}n2(r){var e=this.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(D(s.l2(),r)){t=!0;break r}}t=!1}return t}g6(r){if(!(r!=null&&E(r,it)))return!1;var e=r.k2(),t=r.l2(),a=(E(this,xn)?this:m()).o2(e);if(!D(t,a))return!1;var i;return a==null?i=!(E(this,xn)?this:m()).m2(e):i=!1,!i}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,xn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!0;break r}for(var i=e.x();i.y();){var s=i.z();if(!this.g6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=wh(this,r);return e==null?null:e.l2()}hashCode(){return wr(this.r2())}d1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.x5_1==null){var r=this;r.x5_1=lp.vg(this)}return fn(this.x5_1)}toString(){var r=this.r2();return H(r,", ","{","}",o,o,R2(this))}q2(){if(this.y5_1==null){var r=this;r.y5_1=up.yg(this)}return fn(this.y5_1)}}class Od extends jd{static w5(){var r=this.z5();return r.u5_1=null,r.v5_1=null,r}a6(){return Ld.c6(this)}d6(){return Fd.f6(this)}p2(){var r=this.u5_1,e;if(r==null){var t=this.a6();this.u5_1=t,e=t}else e=r;return e}q2(){var r=this.v5_1,e;if(r==null){var t=this.d6();this.v5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.b5();for(var e=this.r2().x();e.y();){var t=e.z(),a=t.k2();if(D(r,a)){var i=t.l2();return e.c5(),i}}return null}b5(){}}class Ts extends As{static h6(){return this.z4()}equals(r){return r===this?!0:r!=null&&E(r,Ne)?xs.i6(this,r):!1}hashCode(){return xs.j6(this)}}let Pd=class{constructor(){m1=this;var r=this,e=A.f1(0);e.l_1=!0,r.k6_1=e}};class js{}class A extends Td{constructor(r){return new.target.i4(r)}static i4(r){rs();var e=this.n5();return e.k_1=r,e.l_1=!1,e}static m(){rs();var r=[];return this.i4(r)}static f1(r){rs();var e=[],t=this.i4(e);if(!(r>=0)){var a="Negative initial capacity: "+r;throw N.v(w(a))}return t}static h1(r){rs();var e=Aa(r);return this.i4(e)}m6(){return this.b5(),this.l_1=!0,this.c1()>0?this:rs().k6_1}n6(r){}c1(){return this.k_1.length}e1(r){return this.k_1[Bu(this,r)]}y4(r,e){this.b5(),Bu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.b5(),this.k_1.push(r),this.g5_1=this.g5_1+1|0,!0}o5(r,e){this.b5(),this.k_1.splice(kx(this,r),0,e),this.g5_1=this.g5_1+1|0}g1(r){if(this.b5(),r.d1())return!1;for(var e=bx(this,r.c1()),t=0,a=r.x();a.y();){var i=a.z(),s=t;t=s+1|0;var l=Ci(s);this.k_1[e+l|0]=i}return this.g5_1=this.g5_1+1|0,!0}h5(r){this.b5(),Bu(this,r),this.g5_1=this.g5_1+1|0;var e;return r===Rs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}p5(r,e){this.b5(),this.g5_1=this.g5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.b5();var r=this;r.k_1=[],this.g5_1=this.g5_1+1|0}n1(r){return Tb(this.k_1,r)}toString(){return Bk(this.k_1)}o6(){return[].slice.call(this.k_1)}toArray(){return this.o6()}b5(){if(this.l_1)throw pe.s6()}}class gs extends Od{static z6(r){var e=this.w5();return Ix(e),e.x6_1=r,e}static a7(){return this.z6(Fe.l7())}static m7(r,e){return this.z6(Fe.n7(r,e))}static o7(r){return this.m7(r,1)}static p7(r){return this.z6(Fe.q7(r))}v2(){this.x6_1.v2()}m2(r){return this.x6_1.r7(r)}n2(r){return this.x6_1.n2(r)}a6(){return Bd.t7(this.x6_1)}d6(){return Nd.v7(this.x6_1)}r2(){var r=this.y6_1,e;if(r==null){var t=Dd.x7(this.x6_1);this.y6_1=t,e=t}else e=r;return e}o2(r){return this.x6_1.o2(r)}s2(r,e){return this.x6_1.s2(r,e)}t2(r){return this.x6_1.t2(r)}c1(){return this.x6_1.c1()}u2(r){return this.x6_1.u2(r)}}class Bd extends Ts{constructor(r){return new.target.t7(r)}static t7(r){var e=this.h6();return e.s7_1=r,e}c1(){return this.s7_1.c1()}d1(){return this.s7_1.c1()===0}l1(r){return this.s7_1.r7(r)}v2(){return this.s7_1.v2()}n(r){throw pe.s6()}g1(r){throw pe.s6()}x(){return this.s7_1.y7()}b5(){return this.s7_1.z7()}}class Nd extends As{constructor(r){return new.target.v7(r)}static v7(r){var e=this.z4();return e.u7_1=r,e}c1(){return this.u7_1.c1()}d1(){return this.u7_1.c1()===0}a8(r){return this.u7_1.n2(r)}l1(r){return this.a8(r)}b8(r){throw pe.s6()}n(r){return this.b8(r)}c8(r){throw pe.s6()}g1(r){return this.c8(r)}x(){return this.u7_1.d8()}b5(){return this.u7_1.z7()}}class Ud extends Ts{static f8(r){var e=this.h6();return e.e8_1=r,e}c1(){return this.e8_1.c1()}d1(){return this.e8_1.c1()===0}h8(r){return this.e8_1.j8(r)}l1(r){return r!=null&&E(r,it)?this.h8(r!=null&&E(r,it)?r:m()):!1}v2(){return this.e8_1.v2()}i8(r){throw pe.s6()}n(r){return this.i8(r!=null&&E(r,it)?r:m())}g1(r){throw pe.s6()}j2(r){return this.e8_1.k8(r)}b5(){return this.e8_1.z7()}}class Dd extends Ud{constructor(r){return new.target.x7(r)}static x7(r){return this.f8(r)}x(){return this.e8_1.g8()}}class Rd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().k2()}c5(){return this.l8_1.c5()}}class Ld extends Ts{constructor(r){return new.target.c6(r)}static c6(r){var e=this.h6();return e.b6_1=r,e}m8(r){throw pe.n8("Add is not supported on keys")}n(r){return this.m8(r)}v2(){return this.b6_1.v2()}r7(r){return this.b6_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.b6_1.r2().x();return new Rd(r)}c1(){return this.b6_1.c1()}b5(){return this.b6_1.b5()}}class Md{constructor(r){this.o8_1=r}y(){return this.o8_1.y()}z(){return this.o8_1.z().l2()}c5(){return this.o8_1.c5()}}class Fd extends As{constructor(r){return new.target.f6(r)}static f6(r){var e=this.z4();return e.e6_1=r,e}b8(r){throw pe.n8("Add is not supported on values")}n(r){return this.b8(r)}a8(r){return this.e6_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.e6_1.r2().x();return new Md(r)}c1(){return this.e6_1.c1()}b5(){return this.e6_1.b5()}}class Ea extends Ts{static p8(r){var e=this.h6();return e.a1_1=r,e}static q8(){return this.p8(Fe.l7())}static r8(r){for(var e=this.p8(Fe.s8(r.c1())),t=r.x();t.y();){var a=t.z();e.a1_1.s2(a,!0)}return e}static t8(r,e){return this.p8(Fe.n7(r,e))}static b1(r){return this.t8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.r7(r)}d1(){return this.a1_1.c1()===0}x(){return this.a1_1.y7()}c1(){return this.a1_1.c1()}}class $d{constructor(){this.f9_1=-1640531527,this.g9_1=8,this.h9_1=2,this.i9_1=-1}}class Tl{constructor(r){this.j9_1=r,this.k9_1=0,this.l9_1=-1,this.m9_1=this.j9_1.i7_1,this.n9()}n9(){for(;this.k9_1<this.j9_1.g7_1&&this.j9_1.d7_1[this.k9_1]<0;)this.k9_1=this.k9_1+1|0}y(){return this.k9_1<this.j9_1.g7_1}c5(){if(this.o9(),this.l9_1===-1){var r="Call next() before removing element from the iterator.";throw mr.o3(w(r))}this.j9_1.z7(),rg(this.j9_1,this.l9_1),this.l9_1=-1,this.m9_1=this.j9_1.i7_1}o9(){if(this.j9_1.i7_1!==this.m9_1)throw Eo.p9()}}class Jd extends Tl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Tr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1];return this.n9(),t}}class Hd extends Tl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Tr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=fn(this.j9_1.c7_1)[this.l9_1];return this.n9(),t}}class Gd extends Tl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw Tr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=new Kd(this.j9_1,this.l9_1);return this.n9(),t}ca(){if(this.k9_1>=this.j9_1.g7_1)throw Tr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1],a=t==null?null:wr(t),i=a??0,s=fn(this.j9_1.c7_1)[this.l9_1],l=s==null?null:wr(s),u=i^(l??0);return this.n9(),u}da(r){if(this.k9_1>=this.j9_1.g7_1)throw Tr.j1();var e=this,t=this.k9_1;this.k9_1=t+1|0,e.l9_1=t;var a=this.j9_1.b7_1[this.l9_1];D(a,this.j9_1)?r.fa("(this Map)"):r.ea(a),r.ga(61);var i=fn(this.j9_1.c7_1)[this.l9_1];D(i,this.j9_1)?r.fa("(this Map)"):r.ea(i),this.n9()}}class Kd{constructor(r,e){this.y8_1=r,this.z8_1=e,this.a9_1=this.y8_1.i7_1}k2(){return ah(this),this.y8_1.b7_1[this.z8_1]}l2(){return ah(this),fn(this.y8_1.c7_1)[this.z8_1]}equals(r){var e,t;return r!=null&&E(r,it)?t=D(r.k2(),this.k2()):t=!1,t?e=D(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:wr(r),t=e??0,a=this.l2(),i=a==null?null:wr(a);return t^(i??0)}toString(){return _e(this.k2())+"="+_e(this.l2())}}class Wd{}function xb(n){var r;r:{var e;if(E(n,Z)?e=n.d1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var a=t.z(),i=a,s;if(i!=null&&E(i,it)?s=this.ka(i):s=!1,!s){r=!1;break r}}r=!0}return r}class Fe{constructor(r,e,t,a,i,s){return new.target.ha(r,e,t,a,i,s)}static ha(r,e,t,a,i,s){var l=ja(this);return l.b7_1=r,l.c7_1=e,l.d7_1=t,l.e7_1=a,l.f7_1=i,l.g7_1=s,l.h7_1=W_(ks,ot(l)),l.i7_1=0,l.j7_1=0,l.k7_1=!1,l}c1(){return this.j7_1}static l7(){return this.s8(8)}static s8(r){return this.ha($_(r),null,new Int32Array(r),new Int32Array(K_(ks,r)),2,0)}static q7(r){var e=this.s8(r.c1());return e.u2(r),e}static n7(r,e){var t=this.s8(r);if(!(e>0)){var a="Non-positive load factor: "+e;throw N.v(w(a))}return t}ia(){this.z7(),this.k7_1=!0}n2(r){return Tx(this,r)>=0}o2(r){var e=co(this,r);return e<0?null:fn(this.c7_1)[e]}r7(r){return co(this,r)>=0}s2(r,e){var t=Q_(this,r),a=Z_(this);if(t<0){var i=a[(-t|0)-1|0];return a[(-t|0)-1|0]=e,i}else return a[t]=e,null}u2(r){this.z7(),Bx(this,r.r2())}t2(r){this.z7();var e=co(this,r);if(e<0)return null;var t=fn(this.c7_1)[e];return rg(this,e),t}v2(){this.z7();var r=0,e=this.g7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var a=this.d7_1[t];a>=0&&(this.e7_1[a]=0,this.d7_1[t]=-1)}while(t!==e);jo(this.b7_1,0,this.g7_1);var i=this.c7_1;i==null||jo(i,0,this.g7_1),this.j7_1=0,this.g7_1=0,Rl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,xn)?t=Ox(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.g8();e.y();)r=r+e.ca()|0;return r}toString(){var r=rn.ja(2+ur(this.j7_1,3)|0);r.fa("{");for(var e=0,t=this.g8();t.y();)e>0&&r.fa(", "),t.da(r),e=e+1|0;return r.fa("}"),r.toString()}z7(){if(this.k7_1)throw pe.s6()}j8(r){var e=co(this,r.k2());return e<0?!1:D(fn(this.c7_1)[e],r.l2())}ka(r){return this.j8(E(r,it)?r:m())}y7(){return new Jd(this)}d8(){return new Hd(this)}g8(){return new Gd(this)}}class Yd{constructor(){w1=this;var r=this,e=Fe.s8(0);e.ia(),r.la_1=cr.ma(e)}}class cr extends gs{static t4(){var r=this.a7();return r}static na(r){var e=this.o7(r);return e}static oa(r){var e=this.p7(r);return e}static ma(r){var e=this.z6(r);return e}m6(){this.x6_1.ia();var r;return this.c1()>0?r=this:r=Nx().la_1,r}b5(){return this.x6_1.z7()}}class Pn extends Ea{static i1(){var r=this.q8();return r}static k1(r){var e=this.r8(r);return e}static pa(r,e){var t=this.t8(r,e);return t}static i(r){return this.pa(r,1)}b5(){return this.a1_1.z7()}}class ut{}class Zd{qa(){var r="This continuation is already complete";throw mr.o3(w(r))}ra(r){var e="This continuation is already complete";throw mr.o3(w(e))}sa(r){return this.ra(r)}toString(){return"This continuation is already complete"}}class Jf{constructor(){this.za_1=null}bb(){var r=this.za_1,e;if(r==null){var t=this.qa().cb(C1),a=t==null?null:t.db(this),i=a??this;this.za_1=i,e=i}else e=r;return e}ab(){var r=this.za_1;r!=null&&r!==this&&fn(this.qa().cb(C1)).eb(r),this.za_1=ng}}class Hf extends Jf{constructor(r){super(),this.ua_1=r;var e=this;e.va_1=o;var t=this,a=this.ua_1;t.wa_1=a==null?null:a.qa()}qa(){return fn(this.wa_1)}xa(r){var e=Es(),t=am(r),a=t==null?this.va_1.next(r):this.va_1.throw(t),i=a.done,s=a.value;r:for(;!i;){try{s=s()}catch(c){var l=c,u=this.va_1.throw(l);s=u.value,i=u.done;continue r}if(s===e)break r;var f=this.va_1.next(s);s=f.value,i=f.done}return s}ya(r,e){return r=r===o?null:r,e===o?this.xa(r):e.xa.call(this,new ha(r))}ra(r){var e=null,t;try{t=this.xa(r)}catch(v){var a;if(v instanceof Error){var i=v;e=i,a=null}else throw v;t=a}var s=t;if(s===Es())return lr;this.ab();var l=this.ua_1;if(l!=null)if(e!=null){var u=e,f=im(u);l.sa(f)}else{var c=s;l.sa(c)}}sa(r){return this.ra(r)}}class Vd{constructor(r,e,t){this.kb_1=r,this.lb_1=e,this.mb_1=t}qa(){return this.kb_1}ra(r){var e=this.lb_1;gE(r)&&e(r);var t=this.mb_1,a=am(r);return a==null||t(a),lr}sa(r){return this.ra(r)}}class ms extends Error{static tb(){var r=si(this,Error,[null]);return oi(r),Du(r),r}static k3(r){var e=si(this,Error,[r]);return oi(e,r),Du(e),e}static ub(r,e){var t=si(this,Error,[r,q_(e)]);return oi(t,r,e),Du(t),t}}class de extends ms{static nb(){var r=this.tb();return Uu(r),r}static d9(r){var e=this.k3(r);return Uu(e),e}static sb(r,e){var t=this.ub(r,e);return Uu(t),t}}class pe extends de{static s6(){var r=this.nb();return ih(r),r}static n8(r){var e=this.d9(r);return ih(e),e}}class N extends de{static qb(){var r=this.nb();return Nu(r),r}static v(r){var e=this.d9(r);return Nu(e),e}static rb(r,e){var t=this.sb(r,e);return Nu(t),t}}class Tr extends de{static j1(){var r=this.nb();return sh(r),r}static r(r){var e=this.d9(r);return sh(e),e}}class Qn extends de{static yb(){var r=this.nb();return oh(r),r}static zb(r){var e=this.d9(r);return oh(e),e}}class mr extends de{static ac(){var r=this.nb();return lh(r),r}static o3(r){var e=this.d9(r);return lh(e),e}}class Eo extends de{static p9(){var r=this.nb();return uh(r),r}static x8(r){var e=this.d9(r);return uh(e),e}}class Zu extends de{static ec(){var r=this.nb();return fh(r),r}static fc(r){var e=this.d9(r);return fh(e),e}}class zo extends Error{static kc(){var r=si(this,Error,[null]);return oi(r),Ru(r),r}static nc(r){var e=si(this,Error,[r]);return oi(e,r),Ru(e),e}static mc(r,e){var t=si(this,Error,[r,q_(e)]);return oi(t,r,e),Ru(t),t}}class os extends zo{static ic(){var r=this.kc();return ch(r),r}static lc(r){var e=r==null?null:w(r),t=this.mc(e,r instanceof Error?r:null);return ch(t),t}}class Vu extends N{static sc(){var r=this.qb();return vh(r),r}static tc(r){var e=this.v(r);return vh(e),e}}class Xu extends de{static s3(){var r=this.nb();return Fx(r),r}}class Qu extends de{static w3(){var r=this.nb();return $x(r),r}}class r1 extends de{static a4(){var r=this.nb();return Jx(r),r}}class rt{}class ki{equals(r){var e;return r instanceof Gf?e=!1:r instanceof ki?e=D(this.zc(),r.zc())&&this.uc()==r.uc():e=!1,e}hashCode(){var r=this.uc(),e=r==null?null:he(r);return e??0}toString(){return"class "+this.uc()}}class an extends ki{constructor(r,e,t){super(),this.wc_1=r,this.xc_1=e,this.yc_1=t}zc(){return this.wc_1}uc(){return this.xc_1}vc(r){return this.yc_1(r)}}class Gf extends ki{constructor(){Oo=null,super(),Oo=this,this.ad_1="Nothing"}uc(){return this.ad_1}vc(r){return!1}zc(){throw pe.n8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class n1 extends ki{constructor(r){super(),this.bd_1=r;var e=this,t=this.bd_1.$metadata$;e.cd_1=t==null?null:t.simpleName}zc(){return this.bd_1}uc(){return this.cd_1}vc(r){return ex(r,this.bd_1)}}class Ta{}class Xd{constructor(){b1=this;var r=this,e=Object;r.anyClass=new an(e,"Any",Zx);var t=this,a=Number;t.numberClass=new an(a,"Number",Vx),this.nothingClass=Yx();var i=this,s=Boolean;i.booleanClass=new an(s,"Boolean",Xx);var l=this,u=Number;l.byteClass=new an(u,"Byte",Qx);var f=this,c=Number;f.shortClass=new an(c,"Short",r2);var v=this,h=Number;v.intClass=new an(h,"Int",n2);var d=this,p=b;d.longClass=new an(p,"Long",e2);var g=this,y=Number;g.floatClass=new an(y,"Float",t2);var x=this,k=Number;x.doubleClass=new an(k,"Double",a2);var S=this,z=Array;S.arrayClass=new an(z,"Array",i2);var I=this,C=String;I.stringClass=new an(C,"String",s2);var T=this,O=Error;T.throwableClass=new an(O,"Throwable",o2);var F=this,P=Array;F.booleanArrayClass=new an(P,"BooleanArray",l2);var B=this,J=Uint16Array;B.charArrayClass=new an(J,"CharArray",u2);var L=this,$=Int8Array;L.byteArrayClass=new an($,"ByteArray",f2);var R=this,V=Int16Array;R.shortArrayClass=new an(V,"ShortArray",c2);var G=this,nr=Int32Array;G.intArrayClass=new an(nr,"IntArray",v2);var K=this,tr=typeof BigInt>"u"?o:BigInt;K.bigIntClass=new an(tr,"BigInt",h2);var Q=this,or=Array;Q.longArrayClass=new an(or,"LongArray",d2);var X=this,xr=Float32Array;X.floatArrayClass=new an(xr,"FloatArray",p2);var br=this,dr=Float64Array;br.doubleArrayClass=new an(dr,"DoubleArray",_2)}dd(){return this.anyClass}ed(){return this.numberClass}fd(){return this.nothingClass}gd(){return this.booleanClass}hd(){return this.byteClass}id(){return this.shortClass}jd(){return this.intClass}kd(){return this.longClass}ld(){return this.floatClass}md(){return this.doubleClass}nd(){return this.arrayClass}od(){return this.stringClass}pd(){return this.throwableClass}qd(){return this.booleanArrayClass}rd(){return this.charArrayClass}sd(){return this.byteArrayClass}td(){return this.shortArrayClass}ud(){return this.intArrayClass}vd(){return this.bigIntClass}wd(){return this.longArrayClass}xd(){return this.floatArrayClass}yd(){return this.doubleArrayClass}functionClass(r){var e=hh()[r],t;if(e==null){var a=Function,i="Function"+r,s=new an(a,i,g2(r));hh()[r]=s,t=s}else t=e;return t}}class Rv extends ms{constructor(r){return new.target.be(r)}static be(r){var e=this.k3(r);return vn(e,e.ae_1),e}static ce(){return this.be(null)}}class rn{constructor(r){return new.target.de(r)}static de(r){var e=ja(this);return e.e_1=r,e}static ja(r){return this.f()}static f(){return this.de("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(q(e)-1|0))t=rr(e,r);else throw Qn.zb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return ce(this.e_1,r,e)}ga(r){return this.e_1=this.e_1+kr(r),this}g(r){return this.e_1=this.e_1+_e(r),this}ee(r,e,t){return this.fe(r??"null",e,t)}ea(r){return this.e_1=this.e_1+_e(r),this}ge(r){return this.fa(r.toString())}he(r){return this.fa(r.toString())}fa(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ie(r,e){return Ln.m5(r,this.a()),this.e_1=ce(this.e_1,0,r)+kr(e)+Ge(this.e_1,r),this}je(r){if(r<0)throw N.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=ce(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+kr(0);while(e<r)}}toString(){return this.e_1}ke(){return this.e_1="",this}le(r){return Ln.l6(r,this.a()),this.e_1=ce(this.e_1,0,r)+Ge(this.e_1,r+1|0),this}fe(r,e,t){var a=w(r);return Ln.me(e,t,a.length),this.e_1=this.e_1+ce(a,e,t),this}}class Qd{constructor(){x1=this,this.ne_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.oe_1=new RegExp("[\\\\$]","g"),this.pe_1=new RegExp("\\$","g")}qe(r){var e=this.ne_1;return r.replace(e,"\\$&")}re(r){var e=this.pe_1;return r.replace(e,"$$$$")}}class Be{constructor(r,e){return new.target.ye(r,e)}static ye(r,e){Bo();var t=ja(this);return t.se_1=r,t.te_1=ft(e),t.ue_1=new RegExp(r,z2(e,"gu")),t.ve_1=null,t.we_1=null,t}static ze(r){return Bo(),this.ye(r,Rt())}af(r){y2(this.ue_1);var e=this.ue_1.exec(w(r));return e!=null&&e.index===0&&this.ue_1.lastIndex===q(r)}xe(r,e){if(e<0||e>q(r))throw Qn.zb("Start index out of bounds: "+e+", input length: "+q(r));return sg(this.ue_1,w(r),e,this.ue_1)}bf(r,e,t){return e=e===o?0:e,t===o?this.xe(r,e):t.xe.call(this,r,e)}cf(r,e){if(e<0||e>q(r))throw Qn.zb("Start index out of bounds: "+e+", input length: "+q(r));var t=S2(this,r,e);return V2(t,E2)}df(r,e,t){return e=e===o?0:e,t===o?this.cf(r,e):t.cf.call(this,r,e)}ef(r,e){var t=this.bf(r);if(t==null)return w(r);var a=0,i=q(r),s=rn.ja(i);do{var l=fn(t);s.ee(r,a,l.ff().jf()),s.g(e(l)),a=l.ff().kf()+1|0,t=l.z()}while(a<i&&t!=null);return a<i&&s.ee(r,a,i),s.toString()}lf(r,e){Ac(e);for(var t=this.df(r),a=e===0?t:gk(t,e-1|0),i=A.m(),s=0,l=a.x();l.y();){var u=l.z();i.n(w(Rn(r,s,u.ff().jf()))),s=u.ff().kf()+1|0}return i.n(w(Rn(r,s,q(r)))),i}toString(){return this.ue_1.toString()}}class jl{constructor(r){this.mf_1=r}toString(){return"MatchGroup(value="+this.mf_1+")"}hashCode(){return he(this.mf_1)}equals(r){return this===r?!0:!(!(r instanceof jl)||this.mf_1!==r.mf_1)}}class rp extends bi{constructor(r,e){return new.target.zf(r,e)}static zf(r,e,t){return t===o&&(t={}),t.qf_1=r,t.rf_1=e,this.a5(t)}c1(){return this.qf_1.length}x(){var r=uk(F2(this));return xi(r,C2(this)).x()}e1(r){var e=this.qf_1[r],t;return e==null?t=null:t=new jl(e),t}}class Kf extends bi{static cg(r){return this.a5(r)}x(){return new Wf(this)}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new tp(this,r)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Ln.q5(this,r):!1}hashCode(){return Ln.r5(this)}}class np extends Kf{constructor(r){return new.target.bg(r)}static bg(r,e){return e===o&&(e={}),e.ag_1=r,this.cg(e)}c1(){return this.ag_1.length}e1(r){var e=this.ag_1[r];return e??""}}class ep{constructor(r,e,t,a){this.vf_1=r,this.wf_1=e,this.xf_1=t,this.yf_1=a,this.sf_1=r;var i=this;i.tf_1=rp.zf(e,this),this.uf_1=null}ff(){return this.sf_1}dg(){if(this.uf_1==null){var r=this;r.uf_1=np.bg(this.wf_1)}return fn(this.uf_1)}z(){return sg(this.xf_1,this.yf_1,this.vf_1.d1()?q2(this,this.vf_1.jf()):this.vf_1.kf()+1|0,this.xf_1)}}let Sb=class{constructor(r){this.eg_1=r}fg(r,e){return this.eg_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.eg_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}};class Et extends ve{constructor(r,e,t){super(r,e),this.ig_1=t}}class Wf{constructor(r,e){hc(this,e),this.og_1=r,this.ng_1=0}y(){return this.ng_1<this.og_1.c1()}z(){if(!this.y())throw Tr.j1();var r=this.ng_1;return this.ng_1=r+1|0,this.og_1.e1(r)}}class tp extends Wf{constructor(r,e,t){t===o&&(t={}),t.rg_1=r,super(r,t),Ln.m5(e,this.rg_1.c1()),this.ng_1=e}}class ap{constructor(){this.w4_1=2147483639}l6(r,e){if(r<0||r>=e)throw Qn.zb("index: "+r+", size: "+e)}m5(r,e){if(r<0||r>e)throw Qn.zb("index: "+r+", size: "+e)}x4(r,e,t){if(r<0||e>t)throw Qn.zb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw N.v("fromIndex: "+r+" > toIndex: "+e)}me(r,e,t){if(r<0||e>t)throw Qn.zb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw N.v("startIndex: "+r+" > endIndex: "+e)}e9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}r5(r){for(var e=1,t=r.x();t.y();){var a=t.z(),i=ur(31,e),s=a==null?null:wr(a);e=i+(s??0)|0}return e}q5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),a=r.x();a.y();){var i=a.z(),s=t.z();if(!D(i,s))return!1}return!0}}class ip{constructor(r){this.sg_1=r}y(){return this.sg_1.y()}z(){return this.sg_1.z().k2()}}class sp{constructor(r){this.tg_1=r}y(){return this.tg_1.y()}z(){return this.tg_1.z().l2()}}class Eb{}class op extends bi{static wg(r){return this.a5(r)}equals(r){return r===this?!0:r!=null&&E(r,Ne)?xs.i6(this,r):!1}hashCode(){return xs.j6(this)}}class lp extends op{constructor(r){return new.target.vg(r)}static vg(r,e){return e===o&&(e={}),e.ug_1=r,this.wg(e)}r7(r){return this.ug_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.ug_1.r2().x();return new ip(r)}c1(){return this.ug_1.c1()}}class up extends bi{constructor(r){return new.target.yg(r)}static yg(r,e){return e===o&&(e={}),e.xg_1=r,this.a5(e)}a8(r){return this.xg_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.xg_1.r2().x();return new sp(r)}c1(){return this.xg_1.c1()}}class fp{j6(r){for(var e=0,t=r.x();t.y();){var a=t.z(),i=e,s=a==null?null:wr(a);e=i+(s??0)|0}return e}i6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class cp{constructor(){S1=this,this.zg_1=new b(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,zn)?e=r.d1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}d1(){return!0}ah(r){return!1}l1(r){return!1}e1(r){throw Qn.zb("Empty list doesn't contain element at index "+r+".")}bh(r){return-1}n1(r){return-1}x(){return Ss}m1(r){if(r!==0)throw Qn.zb("Index: "+r);return Ss}}class vp{y(){return!1}z(){throw Tr.j1()}}class Ol{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"IndexedValue(index="+this.ch_1+", value="+_e(this.dh_1)+")"}hashCode(){var r=this.ch_1;return r=ur(r,31)+(this.dh_1==null?0:wr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Ol)||this.ch_1!==r.ch_1||!D(this.dh_1,r.dh_1))}}class hp{constructor(r){this.eh_1=r}x(){return new dp(this.eh_1())}}class dp{constructor(r){this.fh_1=r,this.gh_1=0}y(){return this.fh_1.y()}z(){var r=this.gh_1;return this.gh_1=r+1|0,new Ol(Ci(r),this.fh_1.z())}}class pp{}class _p{constructor(){E1=this,this.kh_1=new b(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,xn)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}d1(){return!0}lh(r){return!1}m2(r){return this.lh(r)}mh(r){return null}o2(r){return this.mh(r)}r2(){return I1()}p2(){return I1()}q2(){return gg()}}class gp{z(){return this.ph()}}class mp{constructor(r){this.rh_1=r,this.qh_1=r.sh_1.x()}z(){return this.rh_1.th_1(this.qh_1.z())}y(){return this.qh_1.y()}}class yp{constructor(r,e){this.sh_1=r,this.th_1=e}x(){return new mp(this)}}class Pl{}class wp{constructor(r){this.uh_1=r.xh_1,this.vh_1=r.wh_1.x()}z(){if(this.uh_1===0)throw Tr.j1();return this.uh_1=this.uh_1-1|0,this.vh_1.z()}y(){return this.uh_1>0&&this.vh_1.y()}}class Bl{constructor(r,e){if(this.wh_1=r,this.xh_1=e,!(this.xh_1>=0)){var t="count must be non-negative, but was "+this.xh_1+".";throw N.v(w(t))}}v1(r){return r>=this.xh_1?this:new Bl(this.wh_1,r)}x(){return new wp(this)}}class bp{x(){return Ss}v1(r){return Fl}}class kp{constructor(r){this.ai_1=r,this.yh_1=null,this.zh_1=-2}z(){if(this.zh_1<0&&Sh(this),this.zh_1===0)throw Tr.j1();var r=this.yh_1,e=r??m();return this.zh_1=-1,e}y(){return this.zh_1<0&&Sh(this),this.zh_1===1}}class Yf{constructor(r,e){this.bi_1=r,this.ci_1=e}x(){return new kp(this)}}class xp{constructor(){z1=this,this.di_1=new b(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,Ne)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}d1(){return!0}ah(r){return!1}l1(r){return!1}ei(r){return r.d1()}j2(r){return this.ei(r)}x(){return Ss}}class Sp{fi(r,e){return Ue(r,e)}compare(r,e){var t=r!=null&&c1(r)?r:m();return this.fi(t,e!=null&&c1(e)?e:m())}}let Ep=class{constructor(r){this.gi_1=r}fg(r,e){return this.gi_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.gi_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}},zp=class{};class zb{}class Ip{constructor(){q1=this,this.hi_1=new b(0,0)}cb(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class Cp extends ve{}class qp extends Kf{constructor(r){return new.target.ji(r)}static ji(r){var e=this.cg();return e.ii_1=r,e}c1(){return this.ii_1.length}e1(r){return Ln.l6(r,this.ii_1.length),this.ii_1[r]}ki(r){if(r===null)return!1;var e=Mv(this.ii_1,r.x2_1);return e===r}l1(r){return r instanceof ve?this.ki(r instanceof ve?r:m()):!1}li(r){if(r===null)return-1;var e=r.x2_1,t=Mv(this.ii_1,e);return t===r?e:-1}n1(r){return r instanceof ve?this.li(r instanceof ve?r:m()):-1}}class Ap{constructor(){A1=this,this.p1_1=new Nt(1,0)}}class Os{constructor(r,e,t){if(t===0)throw N.v("Step must be non-zero.");if(t===-2147483648)throw N.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=lS(r,e,t),this.t1_1=t}x(){return new Tp(this.r1_1,this.s1_1,this.t1_1)}d1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Os?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.d1()?-1:ur(31,ur(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class ai{}class Nt extends Os{constructor(r,e){Ig(),super(r,e,1)}jf(){return this.r1_1}kf(){return this.s1_1}mi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.mi(typeof r=="number"?r:m())}d1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Nt?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.d1()?-1:ur(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class Tp extends gp{constructor(r,e,t){super(),this.ni_1=t,this.oi_1=e,this.pi_1=this.ni_1>0?r<=e:r>=e,this.qi_1=this.pi_1?r:this.oi_1}y(){return this.pi_1}ph(){var r=this.qi_1;if(r===this.oi_1){if(!this.pi_1)throw Tr.j1();this.pi_1=!1}else this.qi_1=this.qi_1+this.ni_1|0;return r}}class jp{q1(r,e,t){return new Os(r,e,t)}}class Op{constructor(r){this.wi_1=r,this.ri_1=-1,this.si_1=dk(r.yi_1,0,q(r.xi_1)),this.ti_1=this.si_1,this.ui_1=null,this.vi_1=0}z(){if(this.ri_1===-1&&Ch(this),this.ri_1===0)throw Tr.j1();var r=this.ui_1,e=r instanceof Nt?r:m();return this.ui_1=null,this.ri_1=-1,e}y(){return this.ri_1===-1&&Ch(this),this.ri_1===1}}class Pp{constructor(r,e,t,a){this.xi_1=r,this.yi_1=e,this.zi_1=t,this.aj_1=a}x(){return new Op(this)}}class Ib{constructor(){this.bj_1=0,this.cj_1=1,this.dj_1=2}}class Bp{constructor(r){this.ej_1=r,this.fj_1=0,this.gj_1=0,this.hj_1=0,this.ij_1=0}y(){if(this.fj_1!==0)return this.fj_1===1;if(this.ij_1<0)return this.fj_1=2,!1;var r=-1,e=q(this.ej_1),t=this.gj_1,a=q(this.ej_1);if(t<a)r:do{var i=t;t=t+1|0;var s=rr(this.ej_1,i);if(s===10||s===13){r=s===13&&(i+1|0)<q(this.ej_1)&&rr(this.ej_1,i+1|0)===10?2:1,e=i;break r}}while(t<a);return this.fj_1=1,this.ij_1=r,this.hj_1=e,!0}z(){if(!this.y())throw Tr.j1();this.fj_1=0;var r=this.hj_1,e=this.gj_1;this.gj_1=this.hj_1+this.ij_1|0;var t=this.ej_1;return w(Rn(t,e,r))}}class Np{constructor(r){this.jj_1=r}x(){return new Bp(this.jj_1)}}class Up{constructor(){T1=this,this.kj_1=new b(0,0),this.lj_1=Pt(new b(-1,1073741823)),this.mj_1=Pt(new b(1,-1073741824)),this.nj_1=new b(-16162,2147483647),this.oj_1=new b(-16162,2147483647)}pj(r){var e=new Ee(r),t=e.qj_1;if(Tc(t)){var a=Sn(t);if(!(ar(new b(387905,-1073741824),a)<=0&&ar(a,new b(-387905,1073741823))<=0))throw os.lc(Sn(t).toString()+" ns is out of nanoseconds range")}else{var i,s=Sn(t);if(ar(new b(1,-1073741824),s)<0&&ar(s,new b(-1,1073741823))<0)i=!1;else{var l=Sn(t);i=!(ir(l,new b(-1,1073741823))||ir(l,new b(1,-1073741824)))}if(i)throw os.lc(Sn(t).toString()+" ms is out of milliseconds range");var u=Sn(t);if(ar(new b(1108857478,-1074),u)<=0&&ar(u,new b(-1108857478,1073))<=0)throw os.lc(Sn(t).toString()+" ms is denormalized")}return e.qj_1}rj(r){var e;try{var t=new Ee(JS(r,!0)),a=t.qj_1;if(D(new Ee(a),new Ee(Wr().oj_1))){var i="invariant failed";throw mr.o3(w(i))}e=t.qj_1}catch(l){if(l instanceof N){var s=l;throw N.rb("Invalid ISO duration string format: '"+r+"'.",s)}else throw l}return e}}class Ee{constructor(r){Wr(),this.qj_1=r}sj(r){return $g(this.qj_1,r)}d(r){return BS(this,r)}toString(){return LS(this.qj_1)}hashCode(){return FS(this.qj_1)}equals(r){return $S(this.qj_1,r)}}class Dp{constructor(){j1=this,this.tj_1=new e1(new b(-1,1073741823),!0),this.uj_1=new e1(new b(-1,2147483647),!1)}}class e1{constructor(r,e){Yg(),this.vj_1=r,this.wj_1=e;var t=this,a=this.vj_1;t.xj_1=Cr(a,M(10));var i=this,s=this.vj_1;i.yj_1=Ot(s,M(10))}}class Cb{}class Rp{constructor(){P1=this,this.zj_1=new st(new b(342103040,-7347440),0),this.ak_1=new st(new b(-90867457,7347410),999999999)}bk(r,e){var t=new b(1e9,0),a=Cr(e,t);if(ar(Pe(e,t),new b(0,0))<0&&!ir(Ar(a,t),e)){var i=a;a=Hr(i,at())}var s=a,l=gr(r,s);if(ar(Pe(r,l),new b(0,0))<0&&ar(Pe(r,s),new b(0,0))>=0)return ar(r,new b(0,0))>0?qt().ak_1:qt().zj_1;var u=l,f;if(ar(u,new b(342103040,-7347440))<0)f=this.zj_1;else if(ar(u,new b(-90867457,7347410))>0)f=this.ak_1;else{var c=new b(1e9,0),v=Ot(e,c),h=gr(v,bs(c,Ps(bs(Pe(v,c),Ia(v,on(v))),63))),d=Qr(h);f=new st(u,d)}return f}ck(r,e){return this.bk(r,M(e))}dk(r){return oE(r).ek()}}class st{constructor(r,e){qt(),this.fk_1=r,this.gk_1=e;var t=this.fk_1;if(!(ar(new b(342103040,-7347440),t)<=0&&ar(t,new b(-90867457,7347410))<=0)){var a="Instant exceeds minimum or maximum instant";throw N.v(w(a))}}hk(r){var e=this.fk_1.f3(r.fk_1);return e!==0?e:Ue(this.gk_1,r.gk_1)}d(r){return this.hk(r instanceof st?r:m())}equals(r){var e;if(this===r)e=!0;else{var t,a;r instanceof st?a=ir(this.fk_1,r.fk_1):a=!1,a?t=this.gk_1===r.gk_1:t=!1,e=t}return e}hashCode(){return this.fk_1.hashCode()+ur(51,this.gk_1)|0}toString(){return sE(this)}}class Lp{constructor(r,e){this.qk_1=r,this.rk_1=e}ek(){if(ar(this.qk_1,qt().zj_1.fk_1)<0||ar(this.qk_1,qt().ak_1.fk_1)>0)throw Xf.wk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.qk_1.toString()+")");return qt().ck(this.qk_1,this.rk_1)}}class Zf{constructor(r,e){this.xk_1=r,this.yk_1=e}ek(){throw Xf.wk(this.xk_1+' when parsing an Instant from "'+Oc(this.yk_1,64)+'"')}}class Mp{ik(r){var e=r.fk_1,t=new b(86400,0),a=Cr(e,t);if(ar(Pe(e,t),new b(0,0))<0&&!ir(Ar(a,t),e)){var i=a;a=Hr(i,at())}var s=a,l=new b(86400,0),u=Ot(e,l),f=gr(u,bs(l,Ps(bs(Pe(u,l),Ia(u,on(u))),63))),c=Qr(f),v,h,d,p=gr(s,M(719528)),g=p;p=Hr(g,M(60));var y=new b(0,0);if(ar(p,new b(0,0))<0){var x=p,k=gr(x,M(1)),S=Cr(k,M(146097)),z=Hr(S,M(1));y=Ar(z,M(400));var I=p,C=on(z),T=Ar(C,M(146097));p=gr(I,T)}var O=Ar(Dn(400),p),F=gr(O,M(591)),P=Cr(F,M(146097)),B=p,J=Ar(Dn(365),P),L=P,$=Cr(L,M(4)),R=gr(J,$),V=P,G=Cr(V,M(100)),nr=Hr(R,G),K=P,tr=Cr(K,M(400)),Q=Hr(B,gr(nr,tr));if(ar(Q,new b(0,0))<0){var or=P;P=Hr(or,at());var X=p,xr=Ar(Dn(365),P),br=P,dr=Cr(br,M(4)),Er=gr(xr,dr),zr=P,Or=Cr(zr,M(100)),Pr=Hr(Er,Or),pr=P,Gr=Cr(pr,M(400));Q=Hr(X,gr(Pr,Gr))}P=gr(P,y);var en=Qr(Q),Yr=(ur(en,5)+2|0)/153|0;h=((Yr+2|0)%12|0)+1|0,d=(en-((ur(Yr,306)+5|0)/10|0)|0)+1|0;var _r=P,Fr=Yr/10|0,Zr=gr(_r,M(Fr));v=Qr(Zr);var Vr=c/3600|0,$r=c-ur(Vr,3600)|0,tn=$r/60|0,pn=$r-ur(tn,60)|0;return new Vf(v,h,d,Vr,tn,pn,r.gk_1)}}class Vf{constructor(r,e,t,a,i,s,l){this.jk_1=r,this.kk_1=e,this.lk_1=t,this.mk_1=a,this.nk_1=i,this.ok_1=s,this.pk_1=l}toString(){return"UnboundLocalDateTime("+this.jk_1+"-"+this.kk_1+"-"+this.lk_1+" "+this.mk_1+":"+this.nk_1+":"+this.ok_1+"."+this.pk_1+")"}}class Xf extends N{constructor(r){return new.target.wk(r)}static wk(r){var e=this.v(r);return vn(e,e.vk_1),e}}class Fp{}class $p{constructor(r){this.al_1=r}}class Jp extends Fp{constructor(r,e){super();var t=this;t.bl_1=nx(r,2)?r:m(),this.cl_1=e;var a=this;a.dl_1=E(this,ut)?this:m(),this.el_1=Fu()}qa(){return Eg()}gl(r){this.dl_1=null,this.el_1=r}sa(r){return this.gl(r)}*zk(r,e){return yield()=>{var t=e,a=this;return a.dl_1=E(t,ut)?t:m(),this.cl_1=r,Es()}}fl(){r:for(;;){var r=this.el_1,e=this.dl_1,t;if(e==null){var a=new ha(r)instanceof ha?r:m();return bE(a),a}else t=e;var i=t;if(D(new ha(Fu()),new ha(r))){var s;try{var l=this.bl_1,u=this.cl_1;s=Dx(l,this,u,i)}catch(d){if(d instanceof Error){var f=d,c=im(f);i.sa(c);continue r}else throw d}var v=s;if(v!==Es()){var h=v;i.sa(h)}}else this.el_1=Fu(),i.sa(r)}}}class Hp extends ve{}class Qf{constructor(r){this.hl_1=r,this.il_1=wo}l2(){return this.il_1===wo&&(this.il_1=fn(this.hl_1)(),this.hl_1=null),this.il_1}jl(){return this.il_1!==wo}toString(){return this.jl()?_e(this.l2()):"Lazy value not initialized yet."}}class Gp{}class qb{}class Ut{constructor(r){this.kl_1=r}equals(r){var e;return r instanceof Ut?e=D(this.kl_1,r.kl_1):e=!1,e}hashCode(){return wr(this.kl_1)}toString(){return"Failure("+this.kl_1.toString()+")"}}class ha{constructor(r){this.ll_1=r}toString(){return mE(this.ll_1)}hashCode(){return yE(this.ll_1)}equals(r){return wE(this.ll_1,r)}}class Lv extends zo{constructor(r){return new.target.hb(r)}static hb(r){r=r===o?"An operation is not implemented.":r;var e=this.nc(r);return vn(e,e.gb_1),e}}class Nl{constructor(r,e){this.ih_1=r,this.jh_1=e}toString(){return"("+_e(this.ih_1)+", "+_e(this.jh_1)+")"}nh(){return this.ih_1}oh(){return this.jh_1}hashCode(){var r=this.ih_1==null?0:wr(this.ih_1);return r=ur(r,31)+(this.jh_1==null?0:wr(this.jh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Nl)||!D(this.ih_1,r.ih_1)||!D(this.jh_1,r.jh_1))}}class Kp{constructor(){B1=this,this.jg_1=new At(new b(0,0),new b(0,0)),this.kg_1=16,this.lg_1=128}mg(r,e){var t;return ir(r,new b(0,0))&&ir(e,new b(0,0))?t=this.jg_1:t=new At(r,e),t}ml(r){var e;switch(r.length){case 36:e=B2(r);break;case 32:e=N2(r);break;default:throw N.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+kE(r,64)+'" of length '+r.length))}return e}}class At{constructor(r,e){Fs(),this.nl_1=r,this.ol_1=e}toString(){return this.pl()}pl(){var r=new Int8Array(36);ns(this.nl_1,r,0,0,4);var e=45,t=Y(e);r[8]=Fn(t),ns(this.nl_1,r,9,4,6);var a=45,i=Y(a);r[13]=Fn(i),ns(this.nl_1,r,14,6,8);var s=45,l=Y(s);r[18]=Fn(l),ns(this.ol_1,r,19,0,2);var u=45,f=Y(u);return r[23]=Fn(f),ns(this.ol_1,r,24,2,8),A2(r)}equals(r){return this===r?!0:r instanceof At?ir(this.nl_1,r.nl_1)&&ir(this.ol_1,r.ol_1):!1}ql(r){var e;if(ir(this.nl_1,r.nl_1)){var l=this.ol_1,u=l,f=r.ol_1,c=f;e=Ct(u,c)}else{var t=this.nl_1,a=t,i=r.nl_1,s=i;e=Ct(a,s)}return e}d(r){return this.ql(r instanceof At?r:m())}hashCode(){return Pe(this.nl_1,this.ol_1).hashCode()}}class Wp{constructor(){N1=this,this.rl_1=0,this.sl_1=-1,this.tl_1=1,this.ul_1=8}}class Je{constructor(r){Zl(),this.vl_1=r}wl(r){return sm(this.vl_1,r)}d(r){return xE(this,r)}toString(){return U1(this.vl_1)}hashCode(){return this.vl_1}equals(r){return SE(this.vl_1,r)}}class Yp{constructor(r){this.xl_1=r,this.yl_1=0}y(){return this.yl_1<this.xl_1.length}zl(){var r;if(this.yl_1<this.xl_1.length){var e=this.yl_1;this.yl_1=e+1|0;var t=this.xl_1[e];r=t}else throw Tr.r(this.yl_1.toString());return r}z(){return new Je(this.zl())}}class pa{constructor(r){this.am_1=r}c1(){return ba(this.am_1)}x(){return IE(this.am_1)}bm(r){return om(this.am_1,r)}l1(r){return CE(this,r)}d1(){return qE(this.am_1)}toString(){return AE(this.am_1)}hashCode(){return TE(this.am_1)}equals(r){return jE(this.am_1,r)}}class Zp{constructor(){D1=this,this.cm_1=0,this.dm_1=-1,this.em_1=4,this.fm_1=32}}class ae{constructor(r){Vl(),this.gm_1=r}hm(r){return lm(this.gm_1,r)}d(r){return OE(this,r)}toString(){return R1(this.gm_1)}hashCode(){return this.gm_1}equals(r){return PE(this.gm_1,r)}}class Vp{constructor(r){this.im_1=r,this.jm_1=0}y(){return this.jm_1<this.im_1.length}km(){var r;if(this.jm_1<this.im_1.length){var e=this.jm_1;this.jm_1=e+1|0;var t=this.im_1[e];r=t}else throw Tr.r(this.jm_1.toString());return r}z(){return new ae(this.km())}}class _a{constructor(r){this.lm_1=r}c1(){return ka(this.lm_1)}x(){return UE(this.lm_1)}mm(r){return um(this.lm_1,r)}l1(r){return DE(this,r)}d1(){return RE(this.lm_1)}toString(){return LE(this.lm_1)}hashCode(){return ME(this.lm_1)}equals(r){return FE(this.lm_1,r)}}class Xp{constructor(){L1=this,this.nm_1=new b(0,0),this.om_1=new b(-1,-1),this.pm_1=8,this.qm_1=64}}class ie{constructor(r){$s(),this.rm_1=r}sm(r){return fm(this.rm_1,r)}d(r){return $E(this,r)}toString(){return M1(this.rm_1)}hashCode(){return JE(this.rm_1)}equals(r){return HE(this.rm_1,r)}}class Qp{constructor(r){this.tm_1=r,this.um_1=0}y(){return this.um_1<this.tm_1.length}vm(){var r;if(this.um_1<this.tm_1.length){var e=this.um_1;this.um_1=e+1|0;var t=this.tm_1[e];r=t}else throw Tr.r(this.um_1.toString());return r}z(){return new ie(this.vm())}}class ga{constructor(r){this.wm_1=r}c1(){return xa(this.wm_1)}x(){return WE(this.wm_1)}xm(r){return cm(this.wm_1,r)}l1(r){return YE(this,r)}d1(){return ZE(this.wm_1)}toString(){return VE(this.wm_1)}hashCode(){return XE(this.wm_1)}equals(r){return QE(this.wm_1,r)}}class r_{constructor(){F1=this,this.ym_1=0,this.zm_1=-1,this.an_1=2,this.bn_1=16}}class He{constructor(r){Xl(),this.cn_1=r}dn(r){return vm(this.cn_1,r)}d(r){return rz(this,r)}toString(){return $1(this.cn_1)}hashCode(){return this.cn_1}equals(r){return nz(this.cn_1,r)}}class n_{constructor(r){this.en_1=r,this.fn_1=0}y(){return this.fn_1<this.en_1.length}gn(){var r;if(this.fn_1<this.en_1.length){var e=this.fn_1;this.fn_1=e+1|0;var t=this.en_1[e];r=t}else throw Tr.r(this.fn_1.toString());return r}z(){return new He(this.gn())}}class ma{constructor(r){this.hn_1=r}c1(){return Sa(this.hn_1)}x(){return az(this.hn_1)}in(r){return hm(this.hn_1,r)}l1(r){return iz(this,r)}d1(){return sz(this.hn_1)}toString(){return oz(this.hn_1)}hashCode(){return lz(this.hn_1)}equals(r){return uz(this.hn_1,r)}}function Ab(n){return new Nt(0,rc(n))}function Tb(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,n[a]==null)return a}while(e<=t)}else{var i=0,s=n.length-1|0;if(i<=s)do{var l=i;if(i=i+1|0,D(r,n[l]))return l}while(i<=s)}return-1}function jb(n,r){return Nb(n,r)>=0}function Ob(n,r){return Ub(n,r)>=0}function Pb(n,r){return Db(n,r)>=0}function Bb(n,r){return Rb(n,r)>=0}function rc(n){return n.length-1|0}function Nb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Ub(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Db(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,ir(r,n[a]))return a}while(e<=t);return-1}function Rb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Lb(n){return n.length-1|0}function e_(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,Mb(n,rn.f(),r,e,t,a,i,s).toString()}function Mb(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=0,c=n.length;r:for(;f<c;){var v=n[f];if(f=f+1|0,u=u+1|0,u>1&&r.g(e),i<0||u<=i)Cg(r,v,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function Fb(n){return new Nt(0,Gb(n))}function $b(n){var r;switch(n.length){case 0:r=fr();break;case 1:r=jn(n[0]);break;default:var e=n.slice();r=Dl(e);break}return r}function Jb(n){return new hp(Vb(n))}function t_(n){switch(n.length){case 0:return Rt();case 1:return yc(n[0]);default:return a_(n,Pn.i(n.length))}}function Hb(n){return Kb(n,A.m())}function Gb(n){return n.length-1|0}function a_(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,r.n(a)}return r}function Kb(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,a!=null&&r.n(a)}return r}function Wb(n,r){return Zb(n,r)>=0}function i_(n){var r;switch(n.length){case 0:throw Tr.r("Array is empty.");case 1:r=n[0];break;default:throw N.v("Array has more than one element.")}return r}function Yb(n){return n.length===0?kg():new kd(n)}function Zb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Mv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function Vb(n){return()=>c_(n)}function H(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,s_(n,rn.f(),r,e,t,a,i,s).toString()}function s_(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=n.x();r:for(;f.y();){var c=f.z();if(u=u+1|0,u>1&&r.g(e),i<0||u<=i)Cg(r,c,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function Xb(n){return ys(n,Ea.b1(Mr(n,12)))}function Qb(n){for(var r=Co(n.c1()),e=0,t=n.x();t.y();){var a=t.z(),i=e;e=i+1|0,r[i]=a}return r}function ya(n){if(E(n,Z)){if(n.c1()<=1)return _t(n);var r=Aa(n),e=Ns(r)?r:m();return ix(e),Dl(e)}var t=ac(n);return yx(t),t}function hi(n){return _t(tc(n))}function nc(n){if(n.d1())throw Tr.r("List is empty.");return n.e1(0)}function Tt(n,r){var e=A.f1(n.c1()+1|0);return e.g1(n),e.n(r),e}function ne(n,r){if(E(r,Z)){var e=A.f1(n.c1()+r.c1()|0);return e.g1(n),e.g1(r),e}else{var t=A.h1(n);return Ti(t,r),t}}function rk(n,r){return 0<=r&&r<n.c1()?n.e1(r):null}function ft(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=Rt();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=yc(e);break;default:r=ys(n,Pn.i(n.c1()));break}return r}return Q2(ys(n,Pn.i1()))}function _t(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=fr();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=jn(e);break;default:r=f_(n);break}return r}return Ec(ac(n))}function ec(n){return n.c1()===1?n.e1(0):null}function nk(n,r){var e=n.x();if(!e.y())throw Tr.j1();for(var t=e.z();e.y();){var a=e.z();r.compare(t,a)>0&&(t=a)}return t}function tc(n){var r;return E(n,Z)?r=Pn.k1(n):r=ys(n,Pn.i1()),r}function ek(n,r){return E(n,Z)?n.l1(r):ik(n,r)>=0}function qu(n){return n.d1()?null:n.e1(0)}function o_(n){var r;switch(n.c1()){case 0:throw Tr.r("List is empty.");case 1:r=n.e1(0);break;default:throw N.v("List has more than one element.")}return r}function tk(n,r){return sk(n,ln(n.c1()-r|0,0))}function l_(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw N.v(w(e))}if(r===0)return _t(n);var t;if(E(n,Z)){var a=n.c1()-r|0;if(a<=0)return fr();if(a===1)return jn(ok(n));if(t=A.f1(a),E(n,zn)){if(E(n,js)){var i=r,s=n.c1();if(i<s)do{var l=i;i=i+1|0,t.n(n.e1(l))}while(i<s)}else for(var u=n.m1(r);u.y();){var f=u.z();t.n(f)}return t}}else t=A.m();for(var c=0,v=n.x();v.y();){var h=v.z();c>=r?t.n(h):c=c+1|0}return Ec(t)}function ak(n){if(E(n,zn))return n.d1()?null:n.e1(0);var r=n.x();return r.y()?r.z():null}function u_(n){return n.d1()?null:n.e1(n.c1()-1|0)}function ys(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function ac(n){return E(n,Z)?f_(n):ys(n,A.m())}function Dt(n,r){if(E(n,Z)){if(n.c1()<=1)return _t(n);var e=Aa(n),t=Ns(e)?e:m();return sx(t,r),Dl(t)}var a=ac(n);return wx(a,r),a}function f_(n){return A.h1(n)}function ik(n,r){if(E(n,zn))return n.n1(r);for(var e=0,t=n.x();t.y();){var a=t.z();if(Ci(e),D(r,a))return e;e=e+1|0}return-1}function sk(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw N.v(w(e))}if(r===0)return fr();if(E(n,Z)){if(r>=n.c1())return _t(n);if(r===1)return jn(lk(n))}var t=0,a=A.f1(r),i=n.x();r:for(;i.y();){var s=i.z();if(a.n(s),t=t+1|0,t===r)break r}return Ec(a)}function ok(n){if(E(n,zn))return t1(n);var r=n.x();if(!r.y())throw Tr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function lk(n){if(E(n,zn))return nc(n);var r=n.x();if(!r.y())throw Tr.r("Collection is empty.");return r.z()}function t1(n){if(n.d1())throw Tr.r("List is empty.");return n.e1(Rs(n))}function uk(n){return new xd(n)}function fk(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Ue(e,t)>0&&(e=t)}return e}function ic(n,r){return r<=-2147483648?Ig().p1_1:$e(n,r-1|0)}function ck(n,r){return Cc.q1(n,r,-1)}function jt(n,r){return n>r?r:n}function ln(n,r){return n<r?r:n}function vk(n,r){return Cc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function sc(n,r,e){if(ar(r,e)>0)throw N.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return ar(n,r)<0?r:ar(n,e)>0?e:n}function hk(n,r){return ar(n,r)<0?r:n}function dk(n,r,e){if(r>e)throw N.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function Au(n,r){return ar(n,r)>0?r:n}function po(n,r){var e=pk(r);return e!=null?n.u1(e):!1}function pk(n){return ar(new b(-2147483648,-1),n)<=0&&ar(n,new b(2147483647,0))<=0?Qr(n):null}function oc(n){var r=n.x();if(!r.y())return fr();var e=r.z();if(!r.y())return jn(e);var t=A.m();for(t.n(e);r.y();)t.n(r.z());return t}function xi(n,r){return new yp(n,r)}function _k(n){return new Sd(n)}function gk(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw N.v(w(e))}var t;return r===0?t=kg():E(n,Pl)?t=n.v1(r):t=new Bl(n,r),t}function Fv(n,r){var e=J2(r),t;e==null?t=null:t=n.c1()+e|0;var a=t,i=Pn.i(a??ur(n.c1(),2));return i.g1(n),Ti(i,r),i}function Io(n,r){var e=Pn.i(n.c1()+1|0);return e.g1(n),e.n(r),e}function mk(n){if(q(n)===0)throw Tr.r("Char sequence is empty.");return rr(n,0)}function yk(n){var r;switch(q(n)){case 0:throw Tr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw N.v("Char sequence has more than one element.")}return r}function wk(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw N.v(w(e))}return Ge(n,jt(r,n.length))}function bk(n){var r=n&65535;return r}function gn(n,r){return n-r|0}function kk(n,r){return gn(n.x1_1,r instanceof Cn?r.x1_1:m())}function fe(n,r){return n-r|0}function Y(n){return n}function kr(n){return String.fromCharCode(n)}function xk(n,r){return r instanceof Cn?n===r.x1_1:!1}function Sk(n){return n}var a1;function lc(){return a1===o&&new Ed,a1}function _e(n){var r=n==null?null:w(n);return r??"null"}function Ek(n,r){var e=n??"null",t=w(r);return e+(t??"null")}var i1;function Ul(){return i1===o&&new zd,i1}function zk(n){var r;return n<0?r=-n:r=n,r}function c_(n){return new Id(n)}function Co(n){var r="BooleanArray",e=v_(Array(n),!1);return e.$type$=r,e}function v_(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;e=e+1|0,n[a]=r}while(a!==t);return n}function ws(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function za(n){var r="LongArray",e=v_(Array(n),new b(0,0));return e.$type$=r,e}function Si(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function Tu(){return Ei(),h_}var h_;function d_(){return Ei(),p_}var p_;function s1(){return Ei(),__}var __;function g_(){return Ei(),m_}var m_;function Ik(){return Ei(),y_}var y_;function Ck(n){return Ei(),(n|0)===n?Ao(n):(d_()[0]=n,ur(s1()[Ik()],31)+s1()[g_()]|0)}var $v;function Ei(){$v||($v=!0,h_=new ArrayBuffer(8),p_=new Float64Array(Tu()),new Float32Array(Tu()),__=new Int32Array(Tu()),d_()[0]=-1,m_=s1()[0]!==0?1:0,y_=1-g_()|0)}function tt(){return yr(),w_}var w_;function at(){return yr(),b_}var b_;function Jv(){return yr(),k_}var k_;function qk(){return yr(),x_}var x_;function Me(){return yr(),S_}var S_;function Hv(){return yr(),E_}var E_;function ar(n,r){if(yr(),ir(n,r))return 0;var e=Se(n),t=Se(r);return e&&!t?-1:!e&&t?1:Se(Hr(n,r))?-1:1}function o1(n){return yr(),Fn(n.d3_1)}function l1(n){return yr(),pc(n.d3_1)}function Qr(n){return yr(),n.d3_1}function ee(n){return yr(),n.e3_1*4294967296+Tk(n)}function qo(n,r){if(yr(),wa(n))return"0";if(Se(n))if(ir(n,Me())){var e=M(r),t=Cr(n,e),a=Qr(Hr(Ar(t,e),n)),i=qo(t,r);return i+a.toString(r)}else return"-"+qo(on(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,l=di(Math.pow(r,s)),u=n,f="";;){var c=Cr(u,l),v=Qr(Hr(u,Ar(c,l))),h=v.toString(r);if(u=c,wa(u))return h+f;for(;h.length<s;)h="0"+h;f=h+f}}function ir(n,r){return yr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Ak(n){return yr(),n.d3_1^n.e3_1}function M(n){return yr(),new b(n,n<0?-1:0)}function Se(n){return yr(),n.e3_1<0}function Hr(n,r){return yr(),gr(n,on(r))}function Tk(n){return yr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function wa(n){return yr(),n.e3_1===0&&n.d3_1===0}function Ar(n,r){if(yr(),wa(n))return tt();if(wa(r))return tt();if(ir(n,Me()))return Gv(r)?Me():tt();if(ir(r,Me()))return Gv(n)?Me():tt();if(Se(n)){var e;return Se(r)?e=Ar(on(n),on(r)):e=on(Ar(on(n),r)),e}else if(Se(r))return on(Ar(n,on(r)));if(Kv(n,Hv())&&Kv(r,Hv()))return di(ee(n)*ee(r));var t=n.e3_1>>>16|0,a=n.e3_1&65535,i=n.d3_1>>>16|0,s=n.d3_1&65535,l=r.e3_1>>>16|0,u=r.e3_1&65535,f=r.d3_1>>>16|0,c=r.d3_1&65535,v=0,h=0,d=0,p=0;return p=p+ur(s,c)|0,d=d+(p>>>16|0)|0,p=p&65535,d=d+ur(i,c)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+ur(s,f)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+ur(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+ur(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+ur(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((ur(t,c)+ur(a,f)|0)+ur(i,u)|0)+ur(s,l)|0)|0,v=v&65535,new b(d<<16|p,v<<16|h)}function on(n){return yr(),gr(uc(n),new b(1,0))}function di(n){if(yr(),Ds(n))return tt();if(n<=-9223372036854776e3)return Me();if(n+1>=9223372036854776e3)return qk();if(n<0)return on(di(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new b(e,t)}function gr(n,r){yr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,a=n.d3_1>>>16|0,i=n.d3_1&65535,s=r.e3_1>>>16|0,l=r.e3_1&65535,u=r.d3_1>>>16|0,f=r.d3_1&65535,c=0,v=0,h=0,d=0;return d=d+(i+f|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(a+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+l|0)|0,c=c+(v>>>16|0)|0,v=v&65535,c=c+(e+s|0)|0,c=c&65535,new b(h<<16|d,c<<16|v)}function Gv(n){return yr(),(n.d3_1&1)===1}function Kv(n,r){return yr(),ar(n,r)<0}function uc(n){return yr(),new b(~n.d3_1,~n.e3_1)}function Cr(n,r){if(yr(),wa(r))throw ms.k3("division by zero");if(wa(n))return tt();if(ir(n,Me())){if(ir(r,at())||ir(r,Jv()))return Me();if(ir(r,Me()))return at();var e=Ps(n,1),t=te(Cr(e,r),1);if(ir(t,tt()))return Se(r)?at():Jv();var a=Hr(n,Ar(r,t));return gr(t,Cr(a,r))}else if(ir(r,Me()))return tt();if(Se(n)){var i;return Se(r)?i=Cr(on(n),on(r)):i=on(Cr(on(n),r)),i}else if(Se(r))return on(Cr(n,on(r)));for(var s=tt(),l=n;Ok(l,r);){for(var u=ee(l)/ee(r),f=Math.max(1,Math.floor(u)),c=Math.ceil(Math.log(f)/Math.LN2),v=c<=48?1:Math.pow(2,c-48),h=di(f),d=Ar(h,r);Se(d)||jk(d,l);)f=f-v,h=di(f),d=Ar(h,r);wa(h)&&(h=at()),s=gr(s,h),l=Hr(l,d)}return s}function Ps(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new b(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function te(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new b(0,n.d3_1<<(e-32|0))}function jk(n,r){return yr(),ar(n,r)>0}function Ok(n,r){return yr(),ar(n,r)>=0}function Ot(n,r){return yr(),Hr(n,Ar(Cr(n,r),r))}function bs(n,r){return yr(),new b(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function Ia(n,r){return yr(),new b(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Pe(n,r){return yr(),new b(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function fc(n,r){yr();var e=r&63;if(e===0)return n;if(e<32)return new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new b(n.e3_1,0):t=new b(n.e3_1>>>(e-32|0)|0,0),t}function Dn(n){yr();var r;return n instanceof b?r=n:r=di(n),r}function ii(n){return yr(),Ca(n)&&n.$type$==="LongArray"}function Pk(n){return yr(),n!=null?ii(n):!1}var Wv;function yr(){if(!Wv){Wv=!0,w_=M(0),b_=M(1),k_=M(-1),x_=new b(-1,2147483647),S_=new b(0,-2147483648),E_=M(16777216);var n=Array;new an(n,"LongArray",Pk)}}function rr(n,r){var e;return cc(n)?e=W(n,r):e=n.b(r),e}function cc(n){return typeof n=="string"}function W(n,r){return n.charCodeAt(r)}function q(n){var r;return cc(n)?r=n.length:r=n.a(),r}function Rn(n,r,e){var t;return cc(n)?t=ce(n,r,e):t=n.c(r,e),t}function Bk(n){return e_(n,", ","[","]",o,o,Nk)}function z_(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!P_(t)||e.length!=t.length)return!1;var a=0,i=e.length;if(a<i)do{var s=a;if(a=a+1|0,!D(e[s],t[s]))return!1}while(a<i);return!0}function I_(n){var r=n;if(r==null)return 0;var e=1,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0,e=ur(e,31)+wr(r[i])|0}while(t<a);return e}function Nk(n){return w(n)}function Ue(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=Yv(n,r):r instanceof b?t=Yv(n,ee(r)):t=Zv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Zv(n,r);break;default:e=Uk(n,r);break}return e}function Yv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var a=1/n,i;a===1/r?i=0:a<0?i=-1:i=1,t=i}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Zv(n,r){return n<r?-1:n>r?1:0}function Uk(n,r){return n.d(r)}function Dk(n){return u1(n)}function u1(n){if(!("kotlinHashCodeValue$"in n)){var r=C_(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function C_(){return Math.random()*4294967296|0}function w(n){var r;return n==null?r="null":P_(n)?r="[...]":typeof n.toString!="function"?r=Rk(n):r=n.toString(),r}function Rk(n){return Object.prototype.toString.call(n)}function D(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var a=1/n;t=a===1/r}e=t}else e=!1;return e}if(f1(n)&&f1(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!Ca(n.$bound)||!Ca(r.$bound))return!1;var i=n.$bound,s=r.$bound;return z_(i,s)}return n===r}function wr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():u1(n);break;case"function":e=f1(n)?Lk(n):u1(n);break;case"number":e=Ck(n);break;case"boolean":e=vc(n);break;case"string":e=he(String(n));break;case"bigint":e=Mk(n);break;case"symbol":e=Fk(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Lk(n){var r=n.$flags;r=ur(31,r)+wr(n.$id)|0;var e=ur(31,r),t=n.$arity;r=e+(t??-1)|0;var a=n.$bound;if(a!=null&&Ca(a)){var i=a;r=ur(31,r)+I_(i)|0}return r}function vc(n){return n?1231:1237}function he(n){var r=0,e=n.length,t=0,a=e-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n.charCodeAt(i);r=ur(r,31)+s|0}while(i!==a);return r}function Mk(n){var r=BigInt(32),e=BigInt(4294967295),t=zk(n),a=0,i;n<0?i=-1:i=1;var s=i;r:for(;;){if(t==0)break r;var l=t&e,u=Number(l);a=ur(31,a)+u|0,t=t>>r}return ur(a,s)}function Fk(n){var r=$k(n)?Jk():Hk(),e=r.get(n);if(e!==o)return e;var t=C_();return r.set(n,t),t}function $k(n){return Symbol.keyFor(n)!=o}function Jk(){return ju===o&&(ju=new Map),ju}function Hk(){return Ou===o&&(Ou=new WeakMap),Ou}var ju,Ou;function vn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Rr(n){return n.prototype}function ja(n,r){var e=Object.create(n.prototype);return hc(e,r),e}function hc(n,r){r!==o&&Object.assign(n,r)}function si(n,r,e,t){var a;a=n;var i=a;return Reflect.construct(r,e,i)}function Gk(n){return n===o}function q_(n){return{cause:n}}function oi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(Gk(r)){var a=e==null?null:e.toString();t=a??o}else t=o;n.message=t}}function Kk(){return T_(),A_}var A_;function Wk(n,r){return T_(),n!=o&&n[Kk()]?r(n):Lx(r)}var Vv;function T_(){Vv||(Vv=!0,A_=ut.Symbol)}function Bs(){throw Xu.s3()}function Yk(){throw Qu.w3()}function m(){throw r1.a4()}function fn(n){var r;return n==null?Yk():r=n,r}function j_(n,r,e,t,a,i){var s=o;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:a,suspendArity:i,$kClass$:s,defaultConstructor:e}}function _(n,r,e,t,a,i,s,l){var u="class";dc(u,n,r,e,t,a,i,s,l)}function dc(n,r,e,t,a,i,s,l,u){var f=j_(n,e,t,l,u,s);r.$metadata$=f;var c=r.prototype;if(i!=null)for(var v=0,h=i.length;v<h;){var d=i[v];v=v+1|0,Object.assign(c,d.prototype),c[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function U(n,r,e,t,a,i,s,l){var u="object";dc(u,n,r,e,t,a,i,s,l)}function Lr(n,r,e,t,a,i,s,l){var u="interface";dc(u,n,r,e,t,a,i,s,l)}function nn(n,r,e,t){U(n,"Companion",o,r,e,t,o,o)}function Zk(n){var r=n.length,e=Array(r),t=0,a=r-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n[i];s!=null&&Ns(s)?e[i]=s:e[i]=[].slice.call(s)}while(i!==a);return[].concat.apply([],e)}function Fn(n){return n<<24>>24}function Ao(n){var r;return n instanceof b?r=Qr(n):r=Vk(n),r}function Vk(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function pc(n){return n<<16>>16}function nt(n){var r=Ao(n),e=pc(r);return bk(e)}function $e(n,r){return new Nt(n,r)}function Xk(){return Ii(),O_}var O_;function Za(){return Ii(),j_("class",o,o,o,o,o)}function zi(n,r,e,t,a,i){return Ii(),t.get=t,t.set=a,t.callableName=n,Qk(t,rx(r,a),e)}function Qk(n,r,e){Ii(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function rx(n,r){return Ii(),Xk()[n][r==null?0:1]}function We(n,r,e,t,a,i){return Ii(),n.callableName=a,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=i,n}var Xv;function Ii(){if(!Xv){Xv=!0;var n=[Za(),Za()],r=[Za(),Za()];O_=[n,r,[Za(),Za()]]}}function P_(n){return Ca(n)||Yu(n)}function Ca(n){return Array.isArray(n)}function f1(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function Ns(n){var r;return Ca(n)?r=!n.$type$:r=!1,r}function nx(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,a=t==null?null:t.$metadata$,i=a==null?null:a.suspendArity,s;if(i==null)return!1;s=i;var l=s,u=!1,f=0,c=l.length;r:for(;f<c;){var v=l[f];if(f=f+1|0,r===v){u=!0;break r}}return u}function B_(n){var r;return typeof n=="number"?r=!0:r=n instanceof b,r}function c1(n){var r=typeof n;return r==="string"||r==="boolean"||B_(n)||E(n,qe)}function Us(n){return typeof n=="string"||E(n,Ff)}function ls(n){return Ca(n)&&n.$type$==="BooleanArray"}function us(n){return n instanceof Int8Array}function fs(n){return n instanceof Int16Array}function cs(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function vs(n){return n instanceof Int32Array}function hs(n){return n instanceof Float32Array}function ds(n){return n instanceof Float64Array}function ex(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var a=t==="object"?tx(r):r,i=a.$metadata$;return(i==null?null:i.kind)==="interface"?E(n,a):n instanceof a}function tx(n){return Object.getPrototypeOf(n)}var o;function qa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,new Int32Array(r));else if(r>t){var i=new Int32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function N_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}return eg(n,r,null)}function _c(n,r){return z_(n,r)}function ax(n){return I_(n)}function Dl(n){return A.i4(n)}function v1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,ws(r));else if(r>t){var i=ws(r);i.set(n),a=i}else a=n.slice(0,r);var s=a;return s.$type$="CharArray",s}function h1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,new Float64Array(r));else if(r>t){var i=new Float64Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function d1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,new Float32Array(r));else if(r>t){var i=new Float32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function pi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}return Oa(n,za(r))}function _i(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,new Int16Array(r));else if(r>t){var i=new Int16Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function gi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Oa(n,new Int8Array(r));else if(r>t){var i=new Int8Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function p1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw N.v(w(e))}var t="BooleanArray",a=eg(n,r,!1);return a.$type$=t,a}function ix(n){n.length>1&&xx(n)}function sx(n,r){n.length>1&&J_(n,r)}function Pu(n,r,e){for(var t=new Int32Array(e),a=0,i=0,s=0,l=0,u=n.length;l<u;){var f=W(n,l);l=l+1|0;var c=r[Y(f)];if(i=i|(c&31)<<s,c<32){var v=a;a=v+1|0,t[v]=i,i=0,s=0}else s=s+5|0}return t}function U_(n){return D_(n)>=0}function D_(n){var r=Y(n),e=R_(Qv().j4_1,r),t=r-Qv().j4_1[e]|0;return t<10?t:-1}function R_(n,r){for(var e=0,t=n.length-1|0,a=-1,i=0;e<=t;)if(a=(e+t|0)/2|0,i=n[a],r>i)e=a+1|0;else{if(r===i)return a;t=a-1|0}return a-(r<i?1:0)|0}var _1;function Qv(){return _1===o&&new Cd,_1}function ox(n){return lx(n)!==0}function lx(n){var r=Y(n),e=R_(fo().k4_1,r),t=fo().k4_1[e],a=(t+fo().l4_1[e]|0)-1|0,i=fo().m4_1[e];if(r>a)return 0;var s=i&3;if(s===0){var l=2,u=t,f=0;if(f<=1)do{if(f=f+1|0,u=u+(i>>l&127)|0,u>r)return 3;if(l=l+7|0,u=u+(i>>l&127)|0,u>r)return 0;l=l+7|0}while(f<=1);return 3}if(i<=7)return s;var c=r-t|0,v=i<=31?c%2|0:c;return i>>ur(2,v)&3}var g1;function fo(){return g1===o&&new qd,g1}function ux(n){var r=Y(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function fx(n){for(var r=cr.t4(),e=n.u4();e.y();){var t=e.z(),a=n.v4(t),i=r.o2(a),s=(i==null&&!r.m2(a)?0:i)+1|0;r.s2(a,s)}return r}function Ds(n){return n!==n}function cx(n){var r;return n===0?r=0:r=1<<(31-_s(n)|0),r}function vx(n){return n===1/0||n===-1/0}function rh(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+_s(t)|0}else e=_s(r);return e}function gc(n){return!hx(n)&&!dx(n)}function mc(n){return!vx(n)&&!Ds(n)}function L_(n){var r=n.d3_1;return r===0?32+nh(n.e3_1)|0:nh(r)}function hx(n){return n===1/0||n===-1/0}function dx(n){return n!==n}function nh(n){var r=~(n|(-n|0));return 32-_s(r)|0}var lr;function li(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function Ct(n,r){return Pe(n,new b(0,-2147483648)).f3(Pe(r,new b(0,-2147483648)))}function px(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function _x(n,r){var e=n,t=r;if(ar(t,new b(0,0))<0){var a;return Ct(n,r)<0?a=new b(0,0):a=new b(1,0),a}if(ar(e,new b(0,0))>=0)return Cr(e,t);var i=te(Cr(fc(e,1),t),1),s=Hr(e,Ar(i,t)),l,u=s,f=t;Ct(u,f)>=0?l=1:l=0;var c=l,v=gr(i,M(c));return v}function gx(n,r){if(ar(n,new b(0,0))>=0)return Lu(n,r);var e=fc(n,1),t=Cr(e,M(r)),a=te(t,1),i=a,s=Ar(i,M(r)),l=Hr(n,s);if(ar(l,M(r))>=0){var u=l;l=Hr(u,M(r));var f=a;a=gr(f,M(1))}return Lu(a,r)+Lu(l,r)}function Aa(n){var r;return n.toArray!==void 0?r=n.toArray():r=M_(n),r}function Ci(n){return n<0&&L2(),n}function mx(n,r,e,t,a){Ln.x4(t,a,n.length);var i=a-t|0;if(Ln.x4(e,e+i|0,r.length),Yu(r)&&Yu(n)){var s=n.subarray(t,a);r.set(s,e)}else{var l=0;if(l<i)do{var u=l;l=l+1|0,r[e+u|0]=n[t+u|0]}while(l<i)}}function M_(n){return M2(n)}function jn(n){var r=[n];return A.i4(r)}function To(n){return Y2([n])}function yc(n){return rS([n])}function yx(n){F_(n,xg())}function wx(n,r){F_(n,r)}function F_(n,r){if(n.c1()<=1)return lr;var e=Aa(n);J_(e,r);var t=0,a=e.length;if(t<a)do{var i=t;t=t+1|0,n.y4(i,e[i])}while(t<a)}function $_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw N.v(w(r))}return Array(n)}function jo(n,r,e){n.fill(null,r,e)}function eh(n,r){return N_(n,r)}function th(n,r){n[r]=null}var m1;function rs(){return m1===o&&new Pd,m1}function bx(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function Bu(n,r){return Ln.l6(r,n.c1()),r}function kx(n,r){return Ln.m5(r,n.c1()),r}var _o;function J_(n,r){if(H_()){var e=Sx(r);n.sort(e)}else G_(n,0,rc(n),r)}function xx(n){if(H_()){var r=Ex;n.sort(r)}else G_(n,0,rc(n),xg())}function H_(){var n=_o;if(n!=null)return n;_o=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var a=zx;r.sort(a);var i=1,s=r.length;if(i<s)do{var l=i;i=i+1|0;var u=r[l-1|0],f=r[l];if((u&3)===(f&3)&&u>=f)return!1}while(i<s);return _o=!0,!0}function G_(n,r,e,t){var a=n.length,i=Array(a),s=y1(n,i,r,e,t);if(s!==n){var l=r;if(l<=e)do{var u=l;l=l+1|0,n[u]=s[u]}while(u!==e)}}function y1(n,r,e,t,a){if(e===t)return n;var i=(e+t|0)/2|0,s=y1(n,r,e,i,a),l=y1(n,r,i+1|0,t,a),u=s===r?n:r,f=e,c=i+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,f<=i&&c<=t){var d=s[f],p=l[c];a.compare(d,p)<=0?(u[h]=d,f=f+1|0):(u[h]=p,c=c+1|0)}else f<=i?(u[h]=s[f],f=f+1|0):(u[h]=l[c],c=c+1|0)}while(h!==t);return u}function Sx(n){return(r,e)=>n.compare(r,e)}function Ex(n,r){return Ue(n,r)}function zx(n,r){return(n&3)-(r&3)|0}function Ix(n){n.y6_1=null}function K_(n,r){return cx(ur(ln(r,1),3))}function W_(n,r){return _s(r)+1|0}function ah(n){if(n.y8_1.i7_1!==n.a9_1)throw Eo.x8("The backing map has been modified after this entry was obtained.")}function mi(n){return n.b7_1.length}function ot(n){return n.e7_1.length}function Rl(n){n.i7_1=n.i7_1+1|0}function Y_(n,r){Cx(n,r)?V_(n,!0):qx(n,n.g7_1+r|0)}function Cx(n,r){var e=mi(n)-n.g7_1|0,t=n.g7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(mi(n)/4|0)}function qx(n,r){if(r<0)throw de.d9("too many elements");if(r>mi(n)){var e=Ln.e9(mi(n),r);n.b7_1=eh(n.b7_1,e);var t=n,a=n.c7_1;t.c7_1=a==null?null:eh(a,e),n.d7_1=qa(n.d7_1,e);var i=K_(ks,e);i>ot(n)&&X_(n,i)}}function Z_(n){var r=n.c7_1;if(r!=null)return r;var e=$_(mi(n));return n.c7_1=e,e}function Ll(n,r){return r==null?0:ur(wr(r),-1640531527)>>>n.h7_1|0}function V_(n,r){for(var e=0,t=0,a=n.c7_1;e<n.g7_1;){var i=n.d7_1[e];i>=0&&(n.b7_1[t]=n.b7_1[e],a!=null&&(a[t]=a[e]),r&&(n.d7_1[t]=i,n.e7_1[i]=t+1|0),t=t+1|0),e=e+1|0}jo(n.b7_1,t,n.g7_1),a==null||jo(a,t,n.g7_1),n.g7_1=t}function X_(n,r){Rl(n),n.g7_1>n.j7_1&&V_(n,!1),n.e7_1=new Int32Array(r),n.h7_1=W_(ks,r);for(var e=0;e<n.g7_1;){var t=e;if(e=t+1|0,!Ax(n,t))throw mr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Ax(n,r){for(var e=Ll(n,n.b7_1[r]),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return n.e7_1[e]=r+1|0,n.d7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0)}}function co(n,r){for(var e=Ll(n,r),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return-1;if(D(n.b7_1[a-1|0],r))return a-1|0;if(t=t-1|0,t<0)return-1;var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0)}}function Tx(n,r){var e=n.g7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.d7_1[e]>=0&&D(fn(n.c7_1)[e],r))return e}return-1}function Q_(n,r){n.z7();r:for(;;)for(var e=Ll(n,r),t=jt(ur(n.f7_1,2),ot(n)/2|0),a=0;;){var i=n.e7_1[e];if(i===0){if(n.g7_1>=mi(n)){Y_(n,1);continue r}var s=n.g7_1;n.g7_1=s+1|0;var l=s;return n.b7_1[l]=r,n.d7_1[l]=e,n.e7_1[e]=l+1|0,n.j7_1=n.j7_1+1|0,Rl(n),a>n.f7_1&&(n.f7_1=a),l}if(D(n.b7_1[i-1|0],r))return-i|0;if(a=a+1|0,a>t){X_(n,ur(ot(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=ot(n)-1|0)}}function rg(n,r){th(n.b7_1,r);var e=n.c7_1;e==null||th(e,r),jx(n,n.d7_1[r]),n.d7_1[r]=-1,n.j7_1=n.j7_1-1|0,Rl(n)}function jx(n,r){for(var e=r,t=r,a=0;;){var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0);var s=n.e7_1[e];if(a=a+1|0,a>n.f7_1||s===0)return n.e7_1[t]=0,lr;var l=Ll(n,n.b7_1[s-1|0]);((l-e|0)&(ot(n)-1|0))>=a&&(n.e7_1[t]=s,n.d7_1[s-1|0]=t,t=e,a=0)}}function Ox(n,r){return n.j7_1===r.c1()&&n.k8(r.r2())}function Px(n,r){var e=Q_(n,r.k2()),t=Z_(n);if(e>=0)return t[e]=r.l2(),!0;var a=t[(-e|0)-1|0];return D(r.l2(),a)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function Bx(n,r){if(r.d1())return!1;Y_(n,r.c1());for(var e=r.x(),t=!1;e.y();)Px(n,e.z())&&(t=!0);return t}var ks,w1;function Nx(){return w1===o&&new Yd,w1}var ng;function Ux(n,r){var e=new Hf(r),t=e,a=n;return t.va_1=typeof a=="function"?a(e):n.ib(e),e}function Dx(n,r,e,t){var a=new Hf(t),i=n,s=typeof i=="function"?i(r,e,a):n.jb(r,e,a);return a.va_1=s,a.ya()}function Rx(n){var r=n instanceof Jf?n:null,e=r==null?null:r.bb();return e??n}function Lx(n){return new Promise(Mx(n))}function Mx(n){return(r,e)=>{var t=Eg(),a=new Vd(t,r,e);return aS(n,a),lr}}function ih(n){vn(n,n.r6_1)}function Nu(n){vn(n,n.u_1)}function Uu(n){vn(n,n.c9_1)}function Du(n){vn(n,n.j3_1)}function sh(n){vn(n,n.q_1)}function oh(n){vn(n,n.xb_1)}function lh(n){vn(n,n.n3_1)}function uh(n){vn(n,n.w8_1)}function fh(n){vn(n,n.dc_1)}function ch(n){vn(n,n.hc_1)}function Ru(n){vn(n,n.jc_1)}function vh(n){vn(n,n.rc_1)}function Fx(n){vn(n,n.r3_1)}function $x(n){vn(n,n.v3_1)}function Jx(n){vn(n,n.z3_1)}function Oa(n,r){for(var e=n.length,t=r.length,a=0,i=r;a<e&&a<t;){var s=a,l=a;a=l+1|0,i[s]=n[l]}return r}function eg(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var a=n.length;if(r>a)for(t.length=r;a<r;){var i=a;a=i+1|0,t[i]=e}return t}function go(n,r){return new Qf(r)}function tg(n){return new Qf(n)}function Hx(n){return Qr(Ia(Ps(n,63),fc(on(n),63)))}function Gx(n){return ar(n,new b(0,0))<0?on(n):n}function Kx(n){var r;if(Ds(n))throw N.v("Cannot round NaN value.");return n>ee(new b(-1,2147483647))?r=new b(-1,2147483647):n<ee(new b(0,-2147483648))?r=new b(0,-2147483648):r=Dn(Math.round(n)),r}function Wx(n){return n<0?-n|0:n}var Oo;function Yx(){return Oo===o&&new Gf,Oo}function hh(){return m2(),ag}var ag;function Zx(n){return n!=null}function Vx(n){return B_(n)}function Xx(n){return n!=null?typeof n=="boolean":!1}function Qx(n){return n!=null?typeof n=="number":!1}function r2(n){return n!=null?typeof n=="number":!1}function n2(n){return n!=null?typeof n=="number":!1}function e2(n){return n instanceof b}function t2(n){return n!=null?typeof n=="number":!1}function a2(n){return n!=null?typeof n=="number":!1}function i2(n){return n!=null?Ns(n):!1}function s2(n){return n!=null?typeof n=="string":!1}function o2(n){return n instanceof Error}function l2(n){return n!=null?ls(n):!1}function u2(n){return n!=null?cs(n):!1}function f2(n){return n!=null?us(n):!1}function c2(n){return n!=null?fs(n):!1}function v2(n){return n!=null?vs(n):!1}function h2(n){return typeof n=="bigint"}function d2(n){return n!=null?ii(n):!1}function p2(n){return n!=null?hs(n):!1}function _2(n){return n!=null?ds(n):!1}function g2(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var b1;function Ir(){return b1===o&&new Xd,b1}var dh;function m2(){dh||(dh=!0,ag=Array(0))}function Nr(n){if(n===String)return Ir().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var a=new n1(n);r.$kClass$=a,t=a}else t=r.$kClass$;e=t}else e=new n1(n);return e}function Ur(n){var r;switch(typeof n){case"string":r=Ir().stringClass;break;case"number":var e;(n|0)===n?e=Ir().intClass:e=Ir().doubleClass,r=e;break;case"bigint":r=Ir().bigIntClass;break;case"boolean":r=Ir().booleanClass;break;case"function":var t=Ir();r=t.functionClass(n.length);break;default:var a;if(ls(n))a=Ir().booleanArrayClass;else if(cs(n))a=Ir().charArrayClass;else if(us(n))a=Ir().byteArrayClass;else if(fs(n))a=Ir().shortArrayClass;else if(vs(n))a=Ir().intArrayClass;else if(ii(n))a=Ir().wd();else if(hs(n))a=Ir().floatArrayClass;else if(ds(n))a=Ir().doubleArrayClass;else if(E(n,rt))a=Nr(rt);else if(Ns(n))a=Ir().arrayClass;else{var i=Object.getPrototypeOf(n).constructor,s;if(i===Object)s=Ir().anyClass;else if(i===Error)s=Ir().throwableClass;else{var l=i;s=Nr(l)}a=s}r=a;break}return r}function y2(n){n.lastIndex=0}function k1(n){var r=kr(n).toUpperCase();return r.length>1?n:W(r,0)}function w2(n){return 97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57?!0:gn(n,128)<0?!1:U_(n)||ox(n)}function b2(n){return 48<=n&&n<=57?!0:gn(n,128)<0?!1:U_(n)}function wc(n){return ux(n)}function Lu(n,r){return qo(n,qi(r))}function qi(n){if(!(2<=n&&n<=36))throw N.v("radix "+n+" was not in valid range 2..36");return n}function bc(n){var r=+n,e;return Ds(r)&&!ig(n)||r===0&&vt(n)?e=null:e=r,e}function k2(n,r){return n.toString(qi(r))}function Po(n){var r=+n;return(Ds(r)&&!ig(n)||r===0&&vt(n))&&ji(n),r}function Ml(n,r){var e=gn(n,48)>=0&&gn(n,57)<=0?fe(n,48):gn(n,65)>=0&&gn(n,90)<=0?fe(n,65)+10|0:gn(n,97)>=0&&gn(n,122)<=0?fe(n,97)+10|0:gn(n,128)<0?-1:gn(n,65313)>=0&&gn(n,65338)<=0?fe(n,65313)+10|0:gn(n,65345)>=0&&gn(n,65370)<=0?fe(n,65345)+10|0:D_(n);return e>=r?-1:e}function x2(n){var r=Jl(n),e;return r==null?ji(n):e=r,e}function ig(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var x1;function Bo(){return x1===o&&new Qd,x1}function S2(n,r,e){return()=>n.xe(r,e)}function E2(n){return n.z()}function z2(n,r){return H(n,"",r,o,o,o,I2)}function sg(n,r,e,t){n.lastIndex=e;var a=n.exec(r);if(a==null)return null;var i=$e(a.index,n.lastIndex-1|0);return new ep(i,a,t,r)}function I2(n){return n.pf_1}function C2(n){return r=>n.e1(r)}function q2(n,r){if(r<ct(n.yf_1)){var e=n.yf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.yf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function ce(n,r,e){return n.substring(r,e)}function Ge(n,r){return n.substring(r)}function A2(n){return T2(n,0,n.length)}function re(n,r,e,t){t=t===o?!1:t;var a=new RegExp(Bo().qe(r),t?"gui":"gu"),i=Bo().re(e);return n.replace(a,i)}function Ie(n,r,e){return e=e===o?!1:e,e?kc(n,0,r,0,r.length,e):n.startsWith(r,0)}function og(n,r,e){return e=e===o?!1:e,e?kc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function kc(n,r,e,t,a,i){return i=i===o?!1:i,Gl(n,r,e,t,a,i)}function ph(n,r,e){if(e=e===o?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,a=n.length;if(t<a)do{var i=t;t=t+1|0;var s=W(n,i),l=W(r,i);if(!$l(s,l,e))return!1}while(t<a);return!0}function T2(n,r,e,t){if(!(e<=n.length&&r<=e)){var a="Failed requirement.";throw N.v(w(a))}for(var i=r,s=rn.f();i<e;){var l=i;i=l+1|0;var u=n[l];if(u>=0)s.ga(nt(u));else if(u>>5===-2){var f=j2(n,u,i,e);f<=0?(s.ga(65533),i=i+(-f|0)|0):(s.ga(nt(f)),i=i+1|0)}else if(u>>4===-2){var c=O2(n,u,i,e);c<=0?(s.ga(65533),i=i+(-c|0)|0):(s.ga(nt(c)),i=i+2|0)}else if(u>>3===-2){var v=P2(n,u,i,e);if(v<=0)s.ga(65533),i=i+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.ga(nt(h)),s.ga(nt(d)),i=i+3|0}}else s.ga(65533)}return s.toString()}function j2(n,r,e,t,a){if(!(r&30)||e>=t)return Tn(0);var i=n[e];return(i&192)!==128?Tn(0):r<<6^i^3968}function O2(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===13){if((i&224)!==128)return Tn(0)}else if((i&192)!==128)return Tn(0)}else if((i&224)!==160)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];return(s&192)!==128?Tn(1):r<<12^i<<6^s^-123008}function P2(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===4){if((i&240)!==128)return Tn(0)}else if((r&15)>4)return Tn(0)}else if((i&240)<=128)return Tn(0);if((i&192)!==128)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];if((s&192)!==128)return Tn(1);if((e+2|0)===t)return Tn(2);var l=n[e+2|0];return(l&192)!==128?Tn(2):r<<18^i<<12^s<<6^l^3678080}function Tn(n,r,e){return-n|0}var _h;function Ai(){if(_h)return lr;_h=!0,lg=new Et("NANOSECONDS",0,1),new Et("MICROSECONDS",1,1e3),ug=new Et("MILLISECONDS",2,1e6),fg=new Et("SECONDS",3,1e9),cg=new Et("MINUTES",4,6e10),vg=new Et("HOURS",5,36e11),hg=new Et("DAYS",6,864e11)}var lg,ug,fg,cg,vg,hg;function dg(n,r,e){var t=Ue(r.ig_1,e.ig_1),a;if(t>0){var i=Dn(r.ig_1/e.ig_1),s=Ar(n,i);a=ir(Cr(s,i),n)?s:ar(n,new b(0,0))>0?new b(-1,2147483647):new b(0,-2147483648)}else t<0?a=Cr(n,Dn(e.ig_1/r.ig_1)):a=n;return a}function gh(n,r,e){var t=Ue(r.ig_1,e.ig_1);return t>0?Ar(n,Dn(r.ig_1/e.ig_1)):t<0?Cr(n,Dn(e.ig_1/r.ig_1)):n}function No(){return Ai(),lg}function Uo(){return Ai(),ug}function xc(){return Ai(),fg}function pg(){return Ai(),cg}function _g(){return Ai(),vg}function Sc(){return Ai(),hg}function ns(n,r,e,t,a){var i=e;t<4&&(i=mh(n.e3_1,r,i,t,jt(a,4))),a>4&&mh(n.d3_1,r,i,ln(t-4|0,0),a-4|0)}function B2(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var a=t;t=t+1|0;var i=e<<4,s;r:{var l=W(n,a),u=Y(l);if(!(u>>>8|0)&&kn()[u]>=0){s=kn()[u];break r}Xn(n,r,a)}e=i|s}while(t<8);var f=e;if(W(n,8)!==45){var c="'-' (hyphen)";Xn(n,c,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var p=v<<4,g;r:{var y=W(n,d),x=Y(y);if(!(x>>>8|0)&&kn()[x]>=0){g=kn()[x];break r}Xn(n,r,d)}v=p|g}while(h<13);var k=v;if(W(n,13)!==45){var S="'-' (hyphen)";Xn(n,S,13)}var z=0,I=14;if(I<18)do{var C=I;I=I+1|0;var T=z<<4,O;r:{var F=W(n,C),P=Y(F);if(!(P>>>8|0)&&kn()[P]>=0){O=kn()[P];break r}Xn(n,r,C)}z=T|O}while(I<18);var B=z;if(W(n,18)!==45){var J="'-' (hyphen)";Xn(n,J,18)}var L=0,$=19;if($<23)do{var R=$;$=$+1|0;var V=L<<4,G;r:{var nr=W(n,R),K=Y(nr);if(!(K>>>8|0)&&kn()[K]>=0){G=kn()[K];break r}Xn(n,r,R)}L=V|G}while($<23);var tr=L;if(W(n,23)!==45){var Q="'-' (hyphen)";Xn(n,Q,23)}var or=0,X=24;if(X<28)do{var xr=X;X=X+1|0;var br=or<<4,dr;r:{var Er=W(n,xr),zr=Y(Er);if(!(zr>>>8|0)&&kn()[zr]>=0){dr=kn()[zr];break r}Xn(n,r,xr)}or=br|dr}while(X<28);var Or=or,Pr=0,pr=28;if(pr<36)do{var Gr=pr;pr=pr+1|0;var en=Pr<<4,Yr;r:{var _r=W(n,Gr),Fr=Y(_r);if(!(Fr>>>8|0)&&kn()[Fr]>=0){Yr=kn()[Fr];break r}Xn(n,r,Gr)}Pr=en|Yr}while(pr<36);var Zr=Pr,Vr=k<<16|B,$r=new b(Vr,f),tn=tr<<16|Or,pn=new b(Zr,tn);return Fs().mg($r,pn)}function N2(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var a=r<<4,i;r:{var s=W(n,t),l=Y(s);if(!(l>>>8|0)&&kn()[l]>=0){i=kn()[l];break r}var u="a hexadecimal digit";Xn(n,u,t)}r=a|i}while(e<8);var f=r,c=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=c<<4,p;r:{var g=W(n,h),y=Y(g);if(!(y>>>8|0)&&kn()[y]>=0){p=kn()[y];break r}var x="a hexadecimal digit";Xn(n,x,h)}c=d|p}while(v<16);var k=c,S=new b(k,f),z=0,I=16;if(I<24)do{var C=I;I=I+1|0;var T=z<<4,O;r:{var F=W(n,C),P=Y(F);if(!(P>>>8|0)&&kn()[P]>=0){O=kn()[P];break r}var B="a hexadecimal digit";Xn(n,B,C)}z=T|O}while(I<24);var J=z,L=0,$=24;if($<32)do{var R=$;$=$+1|0;var V=L<<4,G;r:{var nr=W(n,R),K=Y(nr);if(!(K>>>8|0)&&kn()[K]>=0){G=kn()[K];break r}var tr="a hexadecimal digit";Xn(n,tr,R)}L=V|G}while($<32);var Q=L,or=new b(Q,J);return Fs().mg(S,or)}function mh(n,r,e,t,a){var i=e,s=3-t|0,l=4-a|0;if(l<=s)do{var u=s;s=s+-1|0;var f=u<<3,c=n>>f&255,v=uS()[c],h=i;i=h+1|0,r[h]=Fn(v>>8);var d=i;i=d+1|0,r[d]=Fn(v)}while(u!==l);return i}function U2(n){return r=>r===n?"(this Collection)":_e(r)}var Ln;function D2(n,r){return yh(n,r.k2())+"="+yh(n,r.l2())}function yh(n,r){return r===n?"(this Map)":_e(r)}function wh(n,r){var e=n.r2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(D(i.k2(),r)){t=i;break r}}t=null}return t}function R2(n){return r=>D2(n,r)}var xs;function Rs(n){return n.c1()-1|0}function L2(){throw Zu.fc("Index overflow has happened.")}function M2(n){if(n.d1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),a=0;t.y();){var i=a;a=i+1|0,e[i]=t.z()}return e}function fr(){return gg()}function Ke(n){return Hb(n)}function sn(n){return n.length>0?Dl(n):fr()}var S1;function gg(){return S1===o&&new cp,S1}var Ss;function Ec(n){switch(n.c1()){case 0:return fr();case 1:return jn(n.e1(0));default:return n}}function F2(n){return $e(0,n.c1()-1|0)}function $2(n){for(var r=A.m(),e=n.x();e.y();){var t=e.z();Ti(r,t)}return r}function Mr(n,r){var e;return E(n,Z)?e=n.c1():e=r,e}function J2(n){var r;return E(n,Z)?r=n.c1():r=null,r}function H2(n,r){if(E(n,pp))return n.hh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw Tr.r("Key "+_e(r)+" is missing in the map.");e=t;break r}return e}function qr(){var n=K2();return E(n,xn)?n:m()}function Ls(n){return n.length>0?yg(n,cr.na(n.length)):qr()}function ze(n,r){return H2(n,r)}function mg(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=qr();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=To(e);break;default:r=kh(n,cr.na(n.c1()));break}return r}return wg(kh(n,cr.t4()))}function bh(n){return yg(n,cr.na(n.length))}function lt(n,r){var e;if(n.d1())e=To(r);else{var t=cr.oa(n);t.s2(r.ih_1,r.jh_1),e=t}return e}function zc(n){return cr.oa(n)}function G2(n,r){var e=zc(n);return e.t2(r),wg(e)}var E1;function K2(){return E1===o&&new _p,E1}function yg(n,r){return bg(r,n),r}function kh(n,r){return W2(r,n),r}function wg(n){var r;switch(n.c1()){case 0:r=qr();break;case 1:r=n;break;default:r=n;break}return r}function bg(n,r){for(var e=0,t=r.length;e<t;){var a=r[e];e=e+1|0;var i=a.nh(),s=a.oh();n.s2(i,s)}}function W2(n,r){for(var e=r.x();e.y();){var t=e.z(),a=t.nh(),i=t.oh();n.s2(a,i)}}function Y2(n){var r=gs.o7(n.length);return bg(r,n),r}function Ti(n,r){if(E(r,Z))return n.g1(r);for(var e=!1,t=r.x();t.y();){var a=t.z();n.n(a)&&(e=!0)}return e}function xh(n){var r;if(n.d1())throw Tr.r("List is empty.");return r=n.h5(Rs(n)),r}function Ic(n,r){var e;return n==null?e=Fl:e=new Yf(X2(n),r),e}function Z2(n){return Yb(n)}function V2(n,r){return new Yf(n,r)}function kg(){return Fl}var Fl;function Sh(n){n.yh_1=n.zh_1===-2?n.ai_1.bi_1():n.ai_1.ci_1(fn(n.yh_1)),n.zh_1=n.yh_1==null?0:1}function X2(n){return()=>n}function ca(n){return t_(n)}function Rt(){return I1()}var z1;function I1(){return z1===o&&new xp,z1}function Q2(n){switch(n.c1()){case 0:return Rt();case 1:return yc(n.x().z());default:return n}}function rS(n){return a_(n,Ea.b1(n.length))}function nS(n){if(!(n.length>0)){var r="Failed requirement.";throw N.v(w(r))}var e=tS(n);return new Ep(e)}function gt(n,r){return n==null?r==null?0:-1:r==null?1:Ue(n!=null&&c1(n)?n:m(),r)}function xg(){var n=Sg;return E(n,cn)?n:m()}function eS(n,r,e){for(var t=0,a=e.length;t<a;){var i=e[t];t=t+1|0;var s=i(n),l=i(r),u=gt(s,l);if(u!==0)return u}return 0}var Sg;function tS(n){return(r,e)=>eS(r,e,n)}function aS(n,r){var e=Rx(Ux(n,r)),t=lr;e.sa(t)}var C1,q1;function Eg(){return q1===o&&new Ip,q1}function Es(){return sS()}var Eh;function iS(){if(Eh)return lr;Eh=!0,zg=new Cp("COROUTINE_SUSPENDED",0)}var zg;function sS(){return iS(),zg}function oS(n){return qp.ji(n)}function lS(n,r,e){var t;if(e>0)t=n>=r?r:r-zh(r,n,e)|0;else if(e<0)t=n<=r?r:r+zh(n,r,-e|0)|0;else throw N.v("Step is zero.");return t}function zh(n,r,e){return Mu(Mu(n,e)-Mu(r,e)|0,e)}function Mu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var A1;function Ig(){return A1===o&&new Ap,A1}var Cc;function Cg(n,r,e){e!=null?n.g(e(r)):r==null||Us(r)?n.g(r):r instanceof Cn?n.ga(r.x1_1):n.g(w(r))}function $l(n,r,e){if(e=e===o?!1:e,n===r)return!0;if(!e)return!1;var t=k1(n),a=k1(r),i;if(t===a)i=!0;else{var s=kr(t).toLowerCase(),l=W(s,0),u=kr(a).toLowerCase();i=l===W(u,0)}return i}function uS(){return Tg(),qg}var qg;function fS(){return Tg(),Ag}var Ag;function kn(){return fS()}var Ih;function Tg(){if(!Ih){Ih=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=W("0123456789abcdef",e>>4),a=Y(t)<<8,i=W("0123456789abcdef",e&15);r[e]=a|Y(i),n=n+1|0}qg=r;for(var s=0,l=new Int32Array(256);s<256;){var u=s,f=W("0123456789ABCDEF",u>>4),c=Y(f)<<8,v=W("0123456789ABCDEF",u&15);l[u]=c|Y(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var p=0,g="0123456789abcdef",y=0;y<q(g);){var x=rr(g,y);y=y+1|0;var k=p;p=k+1|0,d[Y(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<q(z);){var C=rr(z,I);I=I+1|0;var T=S;S=T+1|0,d[Y(C)]=T}Ag=d;for(var O=0,F=za(256);O<256;)F[O]=new b(-1,-1),O=O+1|0;for(var P=0,B="0123456789abcdef",J=0;J<q(B);){var L=rr(B,J);J=J+1|0;var $=P;P=$+1|0,F[Y(L)]=M($)}for(var R=0,V="0123456789ABCDEF",G=0;G<q(V);){var nr=rr(V,G);G=G+1|0;var K=R;R=K+1|0,F[Y(nr)]=M(K)}}}function cS(n){var r;return q(n)===0?r=pS:r=_S(n),r}function vS(n){return hS(n,"")}function hS(n,r){r=r===o?"":r;for(var e=Ng(n),t=A.m(),a=e.x();a.y();){var i=a.z();vt(i)||t.n(i)}for(var s=A.f1(Mr(t,10)),l=t.x();l.y();){var u=l.z(),f=dS(u);s.n(f)}for(var c=fk(s),v=c??0,h=n.length+ur(r.length,e.c1())|0,d=cS(r),p=Rs(e),g=A.m(),y=0,x=e.x();x.y();){var k=x.z(),S=y;y=S+1|0;var z=Ci(S),I;if((z===0||z===p)&&vt(k))I=null;else{var C=wk(k,v),T;C==null?T=null:T=d(C);var O=T;I=O??k}var F=I;F==null||g.n(F)}return s_(g,rn.ja(h),`
`).toString()}function dS(n){var r;r:{var e=0,t=q(n)-1|0;if(e<=t)do{var a=e;e=e+1|0;var i=rr(n,a);if(!wc(i)){r=a;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function pS(n){return n}function _S(n){return r=>n+r}function Jl(n){return gS(n,10)}function gS(n,r){qi(r);var e=n.length;if(e===0)return null;var t,a,i,s=W(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=-2147483648;else if(s===43)a=!1,i=-2147483647;else return null}else t=0,a=!1,i=-2147483647;var l=-59652323,u=l,f=0,c=t;if(c<e)do{var v=c;c=c+1|0;var h=Ml(W(n,v),r);if(h<0)return null;if(f<u)if(u===l){if(u=i/r|0,f<u)return null}else return null;if(f=ur(f,r),f<(i+h|0))return null;f=f-h|0}while(c<e);return a?f:-f|0}function ji(n){throw Vu.tc("Invalid number format: '"+n+"'")}function mS(n){return yS(n,10)}function yS(n,r){qi(r);var e=n.length;if(e===0)return null;var t,a,i,s=W(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=new b(0,-2147483648);else if(s===43)a=!1,i=new b(1,-2147483648);else return null}else t=0,a=!1,i=new b(1,-2147483648);var l=new b(1,-2147483648),u=Cr(l,M(36)),f=u,c=new b(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Ml(W(n,h),r);if(d<0)return null;if(ar(c,f)<0)if(ir(f,u)){var p=i;if(f=Cr(p,M(r)),ar(c,f)<0)return null}else return null;var g=c;c=Ar(g,M(r));var y=c,x=i,k=gr(x,M(d));if(ar(y,k)<0)return null;var S=c;c=Hr(S,M(d))}while(v<e);return a?c:on(c)}function jg(n,r){var e=Us(n)?n:m(),t=0,a=q(e)-1|0,i=!1;r:for(;t<=a;){var s=i?a:t,l=rr(e,s),u=Wb(r,l);if(!i)u?t=t+1|0:i=!0;else if(u)a=a-1|0;else break r}var f=Rn(e,t,a+1|0);return w(f)}function va(n,r){return wS(n,r)?ce(n,0,n.length-q(r)|0):n}function Oi(n,r,e){e=e===o?n:e;var t=bS(n,r);return t===-1?e:ce(n,t+1|0,n.length)}function zs(n,r,e){e=e===o?!1:e;var t;return typeof r=="string"?t=Do(n,r,o,e)>=0:t=qc(n,r,0,q(n),e)>=0,t}function Og(n,r,e){e=e===o?n:e;var t=Hl(n,r);return t===-1?e:ce(n,0,t)}function Pg(n,r,e,t){if(e=e===o?!1:e,t=t===o?0:t,r.length===1)return kS(n,kr(r[0]),e,t);for(var a=_k(xS(n,r,o,e,t)),i=A.f1(Mr(a,10)),s=a.x();s.y();){var l=s.z(),u=SS(n,l);i.n(u)}return i}function Bg(n,r){return ES(n,r)?Ge(n,q(r)):n}function Ng(n){return oc(zS(n))}function Ug(n,r,e){return e=e===o?32:e,w(IS(Us(n)?n:m(),r,e))}function ct(n){return q(n)-1|0}function vt(n){var r;r:{for(var e=0;e<q(n);){var t=rr(n,e);if(e=e+1|0,!wc(t)){r=!1;break r}}r=!0}return r}function wS(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?og(n,r):Gl(n,q(n)-q(r)|0,r,0,q(r),e)}function bS(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Si([r]);a=CS(n,s,e,t)}else{var l=kr(r);a=n.lastIndexOf(l,e)}return a}function Do(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=qc(n,r,e,q(n),t):a=n.indexOf(r,e),a}function qc(n,r,e,t,a,i){i=i===o?!1:i;var s=i?ck(jt(e,ct(n)),ln(t,0)):$e(ln(e,0),jt(t,q(n))),l;if(typeof n=="string"?l=typeof r=="string":l=!1,l){var u=s.r1_1,f=s.s1_1,c=s.t1_1;if(c>0&&u<=f||c<0&&f<=u)do{var v=u;if(u=u+c|0,kc(r,0,n,v,r.length,a))return v}while(v!==f)}else{var h=s.r1_1,d=s.s1_1,p=s.t1_1;if(p>0&&h<=d||p<0&&d<=h)do{var g=h;if(h=h+p|0,Gl(r,0,n,g,q(r),a))return g}while(g!==d)}return-1}function Dg(n){var r=0,e=q(n)-1|0,t=!1;r:for(;r<=e;){var a=t?e:r,i=rr(n,a),s=wc(i);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Rn(n,r,e+1|0)}function Hl(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Si([r]);a=Rg(n,s,e,t)}else{var l=kr(r);a=n.indexOf(l,e)}return a}function kS(n,r,e,t){Ac(t);var a=0,i=Do(n,r,a,e);if(i===-1||t===1)return jn(w(n));var s=t>0,l=A.f1(s?jt(t,10):10);r:do{var u=a,f=i,c=w(Rn(n,u,f));if(l.n(c),a=i+r.length|0,s&&l.c1()===(t-1|0))break r;i=Do(n,r,a,e)}while(i!==-1);var v=a,h=q(n),d=w(Rn(n,v,h));return l.n(d),l}function xS(n,r,e,t,a){return e=e===o?0:e,t=t===o?!1:t,a=a===o?0:a,Ac(a),new Pp(n,e,a,jS(r,t))}function SS(n,r){return w(Rn(n,r.jf(),r.kf()+1|0))}function ES(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?Ie(n,r):Gl(n,0,r,0,q(r),e)}function zS(n){return new Np(n)}function IS(n,r,e){if(e=e===o?32:e,r<0)throw N.v("Desired length "+r+" is less than zero.");if(r<=q(n))return Rn(n,0,q(n));var t=rn.ja(r),a=1,i=r-q(n)|0;if(a<=i)do{var s=a;a=a+1|0,t.ga(e)}while(s!==i);return t.g(n),t}function Gl(n,r,e,t,a,i){if(t<0||r<0||r>(q(n)-a|0)||t>(q(e)-a|0))return!1;var s=0;if(s<a)do{var l=s;if(s=s+1|0,!$l(rr(n,r+l|0),rr(e,t+l|0),i))return!1}while(s<a);return!0}function CS(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=i_(r),s=kr(i);return n.lastIndexOf(s,e)}var l=jt(e,ct(n));if(0<=l)do{var u=l;l=l+-1|0;var f=rr(n,u),c;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,$l(d,f,t)){c=!0;break r}}c=!1}if(c)return u}while(0<=l);return-1}function Rg(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=i_(r),s=kr(i);return n.indexOf(s,e)}var l=ln(e,0),u=ct(n);if(l<=u)do{var f=l;l=l+1|0;var c=rr(n,f),v;r:{for(var h=0,d=r.length;h<d;){var p=r[h];if(h=h+1|0,$l(p,c,t)){v=!0;break r}}v=!1}if(v)return f}while(f!==u);return-1}function Ac(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw N.v(w(r))}return lr}function Ch(n){if(n.ti_1<0)n.ri_1=0,n.ui_1=null;else{var r,e;if(n.wi_1.zi_1>0?(n.vi_1=n.vi_1+1|0,e=n.vi_1>=n.wi_1.zi_1):e=!1,e?r=!0:r=n.ti_1>q(n.wi_1.xi_1),r)n.ui_1=$e(n.si_1,ct(n.wi_1.xi_1)),n.ti_1=-1;else{var t=n.wi_1.aj_1(n.wi_1.xi_1,n.ti_1);if(t==null)n.ui_1=$e(n.si_1,ct(n.wi_1.xi_1)),n.ti_1=-1;else{var a=t.nh(),i=t.oh();n.ui_1=ic(n.si_1,a),n.si_1=a+i|0,n.ti_1=n.si_1+(i===0?1:0)|0}}n.ri_1=1}}function qS(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function AS(n,r,e){e=e===o?n:e;var t=Hl(n,r);return t===-1?e:ce(n,t+1|0,n.length)}function TS(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=qc(n,r,e,0,t,!0):a=n.lastIndexOf(r,e),a}function jS(n,r){return(e,t)=>{var a=Rg(e,n,t,r);return a<0?null:j(a,1)}}function Sn(n){return Ps(n,1)}function Tc(n){return(Qr(n)&1)===0}function Lg(n){return(Qr(n)&1)===1}function OS(n){return Tc(n)?No():Uo()}var T1;function Wr(){return T1===o&&new Up,T1}function Mg(n){var r=on(Sn(n)),e=Qr(n)&1;return HS(r,e)}function PS(n,r){var e,t=Qr(n)&1;if(t===(Qr(r)&1)){var a;if(Tc(n))a=GS(gr(Sn(n),Sn(r)));else{var i=jc(Sn(n),Sn(r)),s;if(ir(i,new b(-16162,2147483647)))throw N.v("Summing infinite durations of different signs yields an undefined result.");ir(i,new b(-1,1073741823))||ir(i,new b(1,-1073741824))?s=Pt(i):s=KS(i),a=s}e=a}else Lg(n)?e=qh(n,Sn(n),Sn(r)):e=qh(n,Sn(r),Sn(n));return e}function qh(n,r,e){var t=Wg(e),a=jc(r,t),i;if(ar(new b(1108857478,-1074),a)<=0&&ar(a,new b(-1108857478,1073))<=0){var s=Hr(e,Ro(t));i=Yl(gr(Ro(a),s))}else i=Pt(a);return i}function Kl(n){return ar(n,new b(0,0))<0}function Ms(n){return ir(n,Wr().lj_1)||ir(n,Wr().mj_1)}function Fg(n){return Kl(n)?Mg(n):n}function $g(n,r){var e=Pe(n,r);if(ar(e,new b(0,0))<0||!(Qr(e)&1))return n.f3(r);var t=Qr(n)&1,a=t-(Qr(r)&1)|0;return Kl(n)?-a|0:a}function BS(n,r){return $g(n.qj_1,r instanceof Ee?r.qj_1:m())}function NS(n){var r;if(Ms(n))r=0;else{var e=Kg(n),t=Ot(e,M(24));r=Qr(t)}return r}function Jg(n){var r;if(Ms(n))r=0;else{var e=DS(n),t=Ot(e,M(60));r=Qr(t)}return r}function Hg(n){var r;if(Ms(n))r=0;else{var e=RS(n),t=Ot(e,M(60));r=Qr(t)}return r}function Gg(n){var r;if(Ms(n))r=0;else if(Lg(n)){var e=Sn(n),t=Ot(e,M(1e3));r=Qr(Ro(t))}else{var a=Sn(n),i=1e9,s=Ot(a,M(i));r=Qr(s)}return r}function Wl(n,r){var e=n;return ir(e,Wr().lj_1)?new b(-1,2147483647):ir(e,Wr().mj_1)?new b(0,-2147483648):dg(Sn(n),OS(n),r)}function US(n){return Wl(n,Sc())}function Kg(n){return Wl(n,_g())}function DS(n){return Wl(n,pg())}function RS(n){return Wl(n,xc())}function LS(n){var r=n,e;if(ir(r,new b(0,0)))e="0s";else if(ir(r,Wr().lj_1))e="Infinity";else if(ir(r,Wr().mj_1))e="-Infinity";else{var t=Kl(n),a=rn.f();t&&a.ga(45);var i=Fg(n),s=US(i),l=NS(i),u=Jg(i),f=Hg(i),c=Gg(i),v=!ir(s,new b(0,0)),h=l!==0,d=u!==0,p=f!==0||c!==0,g=0;if(v&&(a.he(s).ga(100),g=g+1|0),h||v&&(d||p)){var y=g;g=y+1|0,y>0&&a.ga(32),a.ge(l).ga(104)}if(d||p&&(h||v)){var x=g;g=x+1|0,x>0&&a.ga(32),a.ge(u).ga(109)}if(p){var k=g;g=k+1|0,k>0&&a.ga(32),f!==0||v||h||d?mo(n,a,f,c,9,"s",!1):c>=1e6?mo(n,a,c/1e6|0,c%1e6|0,6,"ms",!1):c>=1e3?mo(n,a,c/1e3|0,c%1e3|0,3,"us",!1):a.ge(c).fa("ns")}t&&g>1&&a.ie(1,40).ga(41),e=a.toString()}return e}function mo(n,r,e,t,a,i,s){if(r.ge(e),t!==0){r.ga(46);var l=Ug(t.toString(),a,48),u;r:{var f=q(l)-1|0;if(0<=f)do{var c=f;if(f=f+-1|0,rr(l,c)!==48){u=c;break r}}while(0<=f);u=-1}var v=u+1|0;if(!s&&v<3)r.fe(l,0,v);else{var h=ur((v+2|0)/3|0,3);r.fe(l,0,h)}}r.fa(i)}function MS(n){var r=rn.f();Kl(n)&&r.ga(45),r.fa("PT");var e=Fg(n),t=Kg(e),a=Jg(e),i=Hg(e),s=Gg(e),l=t;Ms(n)&&(l=new b(1316134911,2328));var u=!ir(l,new b(0,0)),f=i!==0||s!==0,c=a!==0||f&&u;return u&&r.he(l).ga(72),c&&r.ge(a).ga(77),(f||!u&&!c)&&mo(n,r,i,s,9,"S",!0),r.toString()}function FS(n){return n.hashCode()}function $S(n,r){if(!(r instanceof Ee))return!1;var e=r.qj_1;return!!ir(n,e)}function Pt(n){var r=Wr(),e=te(n,1),t=gr(e,M(1));return r.pj(t)}function Ah(n,r){var e=gh(new b(-387905,1073741823),No(),r),t;if(ar(on(e),n)<=0&&ar(n,e)<=0)t=Yl(gh(n,r,No()));else if(r.y2(Uo())>=0){var a=Hx(n),i=new b(0,-2147483648),s=gr(i,M(1));t=Pt(Ar(Dn(a),O1(Gx(hk(n,s)),r)))}else t=Pt(sc(dg(n,r,Uo()),new b(1,-1073741824),new b(-1,1073741823)));return t}function JS(n,r,e){if(e=e===o?!0:e,q(n)===0){var t="The string is empty";if(e)throw N.v(t);return Wr().oj_1}var a=0,i=W(n,a),s=!1;i===45?(s=!0,a=a+1|0):i===43&&(a=a+1|0);var l;if(n.length<=a){var u="No components";if(e)throw N.v(u);return Wr().oj_1}else if(W(n,a)===80)l=WS(n,a+1|0,e);else{if(e)throw N.v("");return Wr().oj_1}var f=l;return s&&!D(new Ee(f),new Ee(Wr().oj_1))?Mg(f):f}function HS(n,r){var e=Wr(),t=te(n,1),a=gr(t,M(r));return e.pj(a)}function GS(n){var r;return ar(new b(387905,-1073741824),n)<=0&&ar(n,new b(-387905,1073741823))<=0?r=Yl(n):r=Pt(Wg(n)),r}function jc(n,r){var e;if(ir(n,new b(-1,1073741823))||ir(n,new b(1,-1073741824))){var t,a;ar(new b(1,-1073741824),r)<0&&ar(r,new b(-1,1073741823))<0?a=!0:a=ar(Pe(n,r),new b(0,0))>=0,a?t=n:t=new b(-16162,2147483647),e=t}else ir(r,new b(-1,1073741823))||ir(r,new b(1,-1073741824))?e=r:e=sc(gr(n,r),new b(1,-1073741824),new b(-1,1073741823));return e}function KS(n){var r;return ar(new b(1108857478,-1074),n)<=0&&ar(n,new b(-1108857478,1073))<=0?r=Yl(Ro(n)):r=Pt(sc(n,new b(1,-1073741824),new b(-1,1073741823))),r}function Wg(n){return Cr(n,M(1e6))}function Ro(n){return Ar(n,M(1e6))}function Yl(n){return Wr().pj(te(n,1))}function WS(n,r,e){var t=r;if(t===n.length){if(e)throw N.v("");return Wr().oj_1}var a=new b(0,0),i=new b(0,0),s=!1,l=null;r:for(;t<n.length;){var u=W(n,t);if(u===84){var f;if(s?f=!0:(t=t+1|0,f=t===n.length),f){if(e)throw N.v("");return Wr().oj_1}s=!0;continue r}var c=t,v,h=Yg().tj_1,d=t,p;n:{var g=1,y=d;if(ZS(h)){var x=W(n,y);x===45?(g=-1,y=y+1|0):x===43&&(y=y+1|0)}var k=y;e:for(;;){var S;if(k<n.length?S=W(n,k)===48:S=!1,!S)break e;k=k+1|0}y=k;var z=new b(0,0);e:for(;y<n.length;){var I=W(n,y);if(!(48<=I&&I<=57))break e;var C=fe(I,48);if(ar(z,Th(h))>0||ir(z,Th(h))&&ar(M(C),VS(h))>0){var T=y;t:for(;;){var O;if(T<n.length){var F=W(n,T);O=48<=F?F<=57:!1}else O=!1;if(!O)break t;T=T+1|0}y=T;var P=y,B=g;if(t=P,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw N.v("");return Wr().oj_1}v=B,p=YS(h);break n}var J=z,L=gr(te(J,3),te(J,1));z=gr(L,M(C)),y=y+1|0}var $=y,R=g;if(t=$,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw N.v("");return Wr().oj_1}v=R,p=z}var V=p;if(W(n,t)===46){t=t+1|0;var G=t,nr=G,K=nr,tr=K+6|0,Q=n.length,or=Math.min(tr,Q),X=0;n:for(;K<or;){var xr=W(n,K);if(!(48<=xr&&xr<=57))break n;var br=X;X=((br<<3)+(br<<1)|0)+fe(xr,48)|0,K=K+1|0}var dr=6-(K-nr|0)|0,Er=0;if(Er<dr)do{Er=Er+1|0;var zr=X;X=(zr<<3)+(zr<<1)|0}while(Er<dr);G=K;var Or=X,Pr=G,pr=Pr,Gr=pr+9|0,en=n.length,Yr=Math.min(Gr,en),_r=0;n:for(;pr<Yr;){var Fr=W(n,pr);if(!(48<=Fr&&Fr<=57))break n;var Zr=_r;_r=((Zr<<3)+(Zr<<1)|0)+fe(Fr,48)|0,pr=pr+1|0}var Vr=9-(pr-Pr|0)|0,$r=0;if($r<Vr)do{$r=$r+1|0;var tn=_r;_r=(tn<<3)+(tn<<1)|0}while($r<Vr);G=pr;var pn=_r,wn=G;n:for(;;){var _n;if(wn<n.length){var Yn=W(n,wn);_n=48<=Yn?Yn<=57:!1}else _n=!1;if(!_n)break n;wn=wn+1|0}G=wn;var Zn=G;if(Zn===t||Zn===n.length||W(n,Zn)!==83){if(e)throw N.v("");return Wr().oj_1}t=Zn;var ke=M(Or),oe=1e9,je=Ar(ke,M(oe)),Bn=gr(je,M(pn));i=Ar(Dn(v),XS(Bn,xc()))}var De=QS(n,t),Oe;if(De==null){var Ze="Unknown duration unit short name: "+kr(W(n,t));if(e)throw N.v(Ze);return Wr().oj_1}else Oe=De;var Vn=Oe;if(l!=null&&l.y2(Vn)<=0){var Nn="Unexpected order of duration components";if(e)throw N.v(Nn);return Wr().oj_1}if(l=Vn,Vn.equals(Sc())){if(s){if(e)throw N.v("");return Wr().oj_1}a=Ar(Dn(v),O1(V,Vn))}else{if(!s){if(e)throw N.v("");return Wr().oj_1}var An=jc(a,Ar(Dn(v),O1(V,Vn)));if(ir(An,new b(-16162,2147483647))){if(e)throw N.v("");return Wr().oj_1}a=An}t=t+1|0}return PS(Ah(a,Uo()),Ah(i,No()))}var j1;function Yg(){return j1===o&&new Dp,j1}function YS(n){return n.vj_1}function ZS(n){return n.wj_1}function Th(n){return n.xj_1}function VS(n){return n.yj_1}function XS(n,r){var e=rE(r),t=ee(n)*e;return Kx(t)}function QS(n,r){var e=W(n,r);return e===68?Sc():e===72?_g():e===77?pg():e===83?xc():null}function rE(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw mr.o3(w(e))}return r}function O1(n,r){return nE(n,eE(r))}function nE(n,r){var e;if(ir(n,new b(0,0)))e=new b(0,0);else if(ir(n,new b(1,0)))e=Au(r,new b(-1,1073741823));else if(ir(r,new b(1,0)))e=Au(n,new b(-1,1073741823));else{var t=(128-rh(n)|0)-rh(r)|0;e=t<63?Ar(n,r):t>63?new b(-1,1073741823):Au(Ar(n,r),new b(-1,1073741823))}return e}function eE(n){var r;switch(n.x2_1){case 6:r=new b(864e5,0);break;case 5:r=new b(36e5,0);break;case 4:r=new b(6e4,0);break;case 3:r=new b(1e3,0);break;case 2:r=new b(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw mr.o3(w(e))}return r}function yo(){return Kn(),Zg}var Zg;function tE(){return Kn(),Vg}var Vg;function aE(){return Kn(),Xg}var Xg;function iE(){return Kn(),Qg}var Qg,P1;function qt(){return P1===o&&new Rp,P1}function sE(n){Kn();var r=rn.f(),e=rm.ik(n),t=e.jk_1;if(Wx(t)<1e3){var a=rn.f();t>=0?a.ge(t+1e4|0).le(0):a.ge(t-1e4|0).le(1),r.g(a)}else t>=1e4&&r.ga(43),r.ge(t);if(r.ga(45),es(r,r,e.kk_1),r.ga(45),es(r,r,e.lk_1),r.ga(84),es(r,r,e.mk_1),r.ga(58),es(r,r,e.nk_1),r.ga(58),es(r,r,e.ok_1),e.pk_1!==0){r.ga(46);for(var i=0;!(e.pk_1%yo()[i+1|0]|0);)i=i+1|0;i=i-(i%3|0)|0;var s=e.pk_1/yo()[i]|0;r.fa(Ge((s+yo()[9-i|0]|0).toString(),1))}return r.ga(90),r.toString()}function oE(n){Kn();var r=n,e=0;if(q(r)===0)return new Zf("An empty string is not a valid Instant",n);var t=rr(r,e),a;t===43||t===45?(e=e+1|0,a=t):a=32;var i=a,s=e,l=0;r:for(;;){var u;if(e<q(r)){var f=rr(r,e);u=48<=f?f<=57:!1}else u=!1;if(!u)break r;l=ur(l,10)+fe(rr(r,e),48)|0,e=e+1|0}var c=e-s|0,v;if(c>10)return un(n,"Expected at most 10 digits for the year number, got "+c+" digits");if(c===10&&gn(rr(r,s),50)>=0)return un(n,"Expected at most 9 digits for the year number or year 1000000000, got "+c+" digits");if(c<4)return un(n,"The year number must be padded to 4 digits, got "+c+" digits");if(i===43&&c===4)return un(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(i===32&&c!==4)return un(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=i===45?-l|0:l;var h=v;if(q(r)<(e+16|0))return un(n,"The input string is too short");var d=e,p=Va(n,"'-'",d,uE);if(p!=null)return p;var g=e+3|0,y=Va(n,"'-'",g,fE);if(y!=null)return y;var x=e+6|0,k=Va(n,"'T' or 't'",x,cE);if(k!=null)return k;var S=e+9|0,z=Va(n,"':'",S,vE);if(z!=null)return z;var I=e+12|0,C=Va(n,"':'",I,hE);if(C!=null)return C;for(var T=tE(),O=0,F=T.length;O<F;){var P=T[O];O=O+1|0;var B=e+P|0,J=Va(n,"an ASCII digit",B,dE);if(J!=null)return J}var L=xt(r,e+1|0),$=xt(r,e+4|0),R=xt(r,e+7|0),V=xt(r,e+10|0),G=xt(r,e+13|0),nr;if(rr(r,e+15|0)===46){var K=e+16|0;e=K;var tr=0;r:for(;;){var Q;if(e<q(r)){var or=rr(r,e);Q=48<=or?or<=57:!1}else Q=!1;if(!Q)break r;tr=ur(tr,10)+fe(rr(r,e),48)|0,e=e+1|0}var X=e-K|0,xr;if(1<=X&&X<=9)xr=ur(tr,yo()[9-X|0]);else return un(n,"1..9 digits are supported for the fraction of the second, got "+X+" digits");nr=xr}else e=e+15|0,nr=0;var br=nr;if(e>=q(r))return un(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),Er;if(dr===122||dr===90){var zr;if(q(r)===(e+1|0))zr=0;else return un(n,"Extra text after the instant at position "+(e+1|0));Er=zr}else if(dr===45||dr===43){var Or=q(r)-e|0;if(Or>9){var Pr=e,pr=q(r),Gr=w(Rn(r,Pr,pr));return un(n,'The UTC offset string "'+Oc(Gr,16)+'" is too long')}if(Or%3|0){var en=e,Yr=q(r),_r=w(Rn(r,en,Yr));return un(n,'Invalid UTC offset string "'+_r+'"')}var Fr=aE(),Zr=0,Vr=Fr.length;r:for(;Zr<Vr;){var $r=Fr[Zr];if(Zr=Zr+1|0,(e+$r|0)>=q(r))break r;if(rr(r,e+$r|0)!==58)return un(n,"Expected ':' at index "+(e+$r|0)+", got '"+kr(rr(r,e+$r|0))+"'")}var tn=iE(),pn=0,wn=tn.length;r:for(;pn<wn;){var _n=tn[pn];if(pn=pn+1|0,(e+_n|0)>=q(r))break r;var Yn=rr(r,e+_n|0);if(!(48<=Yn&&Yn<=57))return un(n,"Expected an ASCII digit at index "+(e+_n|0)+", got '"+kr(rr(r,e+_n|0))+"'")}var Zn=xt(r,e+1|0),ke;Or>3?ke=xt(r,e+4|0):ke=0;var oe=ke,je;Or>6?je=xt(r,e+7|0):je=0;var Bn=je;if(oe>59)return un(n,"Expected offset-minute-of-hour in 0..59, got "+oe);if(Bn>59)return un(n,"Expected offset-second-of-minute in 0..59, got "+Bn);if(Zn>17&&!(Zn===18&&oe===0&&Bn===0)){var De=e,Oe=q(r),Ze=w(Rn(r,De,Oe));return un(n,"Expected an offset in -18:00..+18:00, got "+Ze)}Er=ur((ur(Zn,3600)+ur(oe,60)|0)+Bn|0,dr===45?-1:1)}else return un(n,"Expected the UTC offset at position "+e+", got '"+kr(dr)+"'");var Vn=Er;if(!(1<=L&&L<=12))return un(n,"Expected a month number in 1..12, got "+L);if(!(1<=$&&$<=lE(L,jh(h))))return un(n,"Expected a valid day-of-month for month "+L+" of year "+h+", got "+$);if(R>23)return un(n,"Expected hour in 0..23, got "+R);if(V>59)return un(n,"Expected minute-of-hour in 0..59, got "+V);if(G>59)return un(n,"Expected second-of-minute in 0..59, got "+G);var Nn=new Vf(h,L,$,R,V,G,br),An=M(Nn.jk_1),bn=Ar(Dn(365),An);if(ar(An,new b(0,0))>=0){var Ji=bn,Hi=gr(An,M(3)),Mt=Cr(Hi,M(4)),mt=gr(An,M(99)),yt=Cr(mt,M(100)),Ft=Hr(Mt,yt),La=gr(An,M(399)),wt=Cr(La,M(400));bn=gr(Ji,gr(Ft,wt))}else{var Ma=bn,Re=Cr(An,M(-4)),Gi=Cr(An,M(-100)),bt=Hr(Re,Gi),$t=Cr(An,M(-400));bn=Hr(Ma,gr(bt,$t))}var Fa=bn,Ki=(ur(367,Nn.kk_1)-362|0)/12|0;bn=gr(Fa,M(Ki));var $a=bn,Jt=Nn.lk_1-1|0;if(bn=gr($a,M(Jt)),Nn.kk_1>2){var Wi=bn;if(bn=Hr(Wi,at()),!jh(Nn.jk_1)){var Yi=bn;bn=Hr(Yi,at())}}var Ja=bn,Ha=Hr(Ja,M(719528)),Ht=(ur(Nn.mk_1,3600)+ur(Nn.nk_1,60)|0)+Nn.ok_1|0,Gt=Ar(Ha,M(86400)),Kt=gr(Gt,M(Ht)),Ga=Hr(Kt,M(Vn)),kt=Nn.pk_1;return new Lp(Ga,kt)}var rm;function Oc(n,r){Kn();var e;return q(n)<=r?e=w(n):e=w(Rn(n,0,r))+"...",e}function lE(n,r){switch(Kn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function jh(n){return Kn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function es(n,r,e){e<10&&n.ga(48),r.ge(e)}function un(n,r){return new Zf(r+' when parsing an Instant from "'+Oc(n,64)+'"',n)}function Va(n,r,e,t){var a=rr(n,e),i;return t(new Cn(a))?i=null:i=un(n,"Expected "+r+", but got '"+kr(a)+"' at position "+e),i}function uE(n){return Kn(),D(n,new Cn(45))}function fE(n){return Kn(),D(n,new Cn(45))}function cE(n){return Kn(),D(n,new Cn(84))||D(n,new Cn(116))}function vE(n){return Kn(),D(n,new Cn(58))}function hE(n){return Kn(),D(n,new Cn(58))}function dE(n){Kn();var r=n.x1_1;return 48<=r?r<=57:!1}function xt(n,r){return ur(fe(rr(n,r),48),10)+fe(rr(n,r+1|0),48)|0}var Oh;function Kn(){Oh||(Oh=!0,Zg=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),Vg=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Xg=new Int32Array([3,6]),Qg=new Int32Array([1,2,4,5,7,8]))}function Fu(){return em(),nm}var nm;function pE(n,r){return em(),new Jp(n.al_1,r).fl()}var Ph;function em(){if(!Ph){Ph=!0;var n=Es();nm=n}}var Bh;function _E(){if(Bh)return lr;Bh=!0,tm=new Hp("PUBLICATION",1)}var tm,wo;function bo(){return _E(),tm}function gE(n){var r=n;return!(r instanceof Ut)}function am(n){var r;return n instanceof Ut?r=n.kl_1:r=null,r}function mE(n){var r;return n instanceof Ut?r=n.toString():r="Success("+_e(n)+")",r}function yE(n){return n==null?0:wr(n)}function wE(n,r){if(!(r instanceof ha))return!1;var e=r.ll_1;return!!D(n,e)}function bE(n){var r=n;if(r instanceof Ut)throw n.kl_1}function im(n){return new Ut(n)}function j(n,r){return new Nl(n,r)}var B1;function Fs(){return B1===o&&new Kp,B1}function kE(n,r){return n.length<=r?n:ce(n,0,r)+"..."}function Xn(n,r,e){throw N.v("Expected "+r+" at index "+e+", but was '"+kr(W(n,e))+"'")}var N1;function Zl(){return N1===o&&new Wp,N1}function sm(n,r){var e=n&255,t=r&255;return Ue(e,t)}function xE(n,r){return sm(n.vl_1,r instanceof Je?r.vl_1:m())}function U1(n){return(n&255).toString()}function SE(n,r){return!(!(r instanceof Je)||n!==r.vl_1)}function Nh(n){return new Int8Array(n)}function EE(n,r){var e=n[r];return e}function zE(n,r,e){var t=n;t[r]=e}function ba(n){return n.length}function IE(n){return new Yp(n)}function om(n,r){var e=n,t=r;return jb(e,t)}function CE(n,r){return r instanceof Je?om(n.am_1,r instanceof Je?r.vl_1:m()):!1}function qE(n){return n.length===0}function AE(n){return"UByteArray(storage="+w(n)+")"}function TE(n){return wr(n)}function jE(n,r){if(!(r instanceof pa))return!1;var e=r.am_1;return!!D(n,e)}var D1;function Vl(){return D1===o&&new Zp,D1}function lm(n,r){return li(n,r)}function OE(n,r){return lm(n.gm_1,r instanceof ae?r.gm_1:m())}function R1(n){return(n>>>0).toString()}function PE(n,r){return!(!(r instanceof ae)||n!==r.gm_1)}function Uh(n){return new Int32Array(n)}function BE(n,r){var e=n[r];return e}function NE(n,r,e){var t=n;t[r]=e}function ka(n){return n.length}function UE(n){return new Vp(n)}function um(n,r){var e=n,t=r;return Ob(e,t)}function DE(n,r){return r instanceof ae?um(n.lm_1,r instanceof ae?r.gm_1:m()):!1}function RE(n){return n.length===0}function LE(n){return"UIntArray(storage="+w(n)+")"}function ME(n){return wr(n)}function FE(n,r){if(!(r instanceof _a))return!1;var e=r.lm_1;return!!D(n,e)}var L1;function $s(){return L1===o&&new Xp,L1}function fm(n,r){return Ct(n,r)}function $E(n,r){return fm(n.rm_1,r instanceof ie?r.rm_1:m())}function M1(n){var r=n;return gx(r,10)}function JE(n){return n.hashCode()}function HE(n,r){if(!(r instanceof ie))return!1;var e=r.rm_1;return!!ir(n,e)}function Dh(n){return za(n)}function GE(n,r){var e=n[r];return e}function KE(n,r,e){var t=n;t[r]=e}function xa(n){return n.length}function WE(n){return new Qp(n)}function cm(n,r){var e=n,t=r;return Pb(e,t)}function YE(n,r){return r instanceof ie?cm(n.wm_1,r instanceof ie?r.rm_1:m()):!1}function ZE(n){return n.length===0}function VE(n){return"ULongArray(storage="+w(n)+")"}function XE(n){return wr(n)}function QE(n,r){if(!(r instanceof ga))return!1;var e=r.wm_1;return!!D(n,e)}var F1;function Xl(){return F1===o&&new r_,F1}function vm(n,r){var e=n&65535,t=r&65535;return Ue(e,t)}function rz(n,r){return vm(n.cn_1,r instanceof He?r.cn_1:m())}function $1(n){return(n&65535).toString()}function nz(n,r){return!(!(r instanceof He)||n!==r.cn_1)}function Rh(n){return new Int16Array(n)}function ez(n,r){var e=n[r];return e}function tz(n,r,e){var t=n;t[r]=e}function Sa(n){return n.length}function az(n){return new n_(n)}function hm(n,r){var e=n,t=r;return Bb(e,t)}function iz(n,r){return r instanceof He?hm(n.hn_1,r instanceof He?r.cn_1:m()):!1}function sz(n){return n.length===0}function oz(n){return"UShortArray(storage="+w(n)+")"}function lz(n){return wr(n)}function uz(n,r){if(!(r instanceof ma))return!1;var e=r.hn_1;return!!D(n,e)}function dm(n){return dz(n,10)}function fz(n){var r=pz(n),e,t=r;return(t==null?null:new ae(t))==null?ji(n):e=r,e}function cz(n){var r=dm(n),e,t=r;return(t==null?null:new ie(t))==null?ji(n):e=r,e}function vz(n){var r=_z(n),e,t=r;return(t==null?null:new Je(t))==null?ji(n):e=r,e}function hz(n){var r=gz(n),e,t=r;return(t==null?null:new He(t))==null?ji(n):e=r,e}function dz(n,r){qi(r);var e=n.length;if(e===0)return null;var t=new b(-1,-1),a,i=W(n,0);if(gn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=new b(477218588,119304647),l=s,u=M(r),f=new b(0,0),c=a;if(c<e)do{var v=c;c=c+1|0;var h=Ml(W(n,v),r);if(h<0)return null;var d=f,p=l;if(Ct(d,p)>0)if(D(new ie(l),new ie(s))){l=_x(t,u);var g=f,y=l;if(Ct(g,y)>0)return null}else return null;var x=f;f=Ar(x,u);var k=f,S=f,z=h,I=z,C=bs(M(I),new b(-1,0)),T=C;f=gr(S,T);var O=f;if(Ct(O,k)<0)return null}while(c<e);return f}function pz(n){return Pc(n,10)}function _z(n){return mz(n,10)}function gz(n){return yz(n,10)}function Pc(n,r){qi(r);var e=n.length;if(e===0)return null;var t=-1,a,i=W(n,0);if(gn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=119304647,l=s,u=r,f=0,c=a;if(c<e)do{var v=c;c=c+1|0;var h=Ml(W(n,v),r);if(h<0)return null;var d=f,p=l;if(li(d,p)>0)if(D(new ae(l),new ae(s))){l=px(t,u);var g=f,y=l;if(li(g,y)>0)return null}else return null;var x=f;f=ur(x,u);var k=f,S=f,z=h;f=S+z|0;var I=f;if(li(I,k)<0)return null}while(c<e);return f}function mz(n,r){var e=Pc(n,r),t,a=e;if((a==null?null:new ae(a))==null)return null;t=e;var i=t,s=-1,l=s&255;if(li(i,l)>0)return null;var u=i;return Fn(u)}function yz(n,r){var e=Pc(n,r),t,a=e;if((a==null?null:new ae(a))==null)return null;t=e;var i=t,s=-1,l=s&65535;if(li(i,l)>0)return null;var u=i;return pc(u)}Lr(Ff,"CharSequence");Lr(qe,"Comparable");_(bd,"Number");_(kd);_(xd);_(Sd);nn(Ed);_(Cn,"Char",o,o,[qe]);Lr(Z,"Collection");Lr(Ne,"Set",o,o,[Z]);Lr(zn,"List",o,o,[Z]);Lr(it,"Entry");Lr(xn,"Map");Lr(vi,"MutableMap",o,o,[xn]);nn(pb);_(ve,"Enum",o,o,[qe]);nn(zd);_(b,"Long",o,o,[qe]);Lr(yn,"FunctionAdapter");_(Id);U(_b,"ByteCompanionObject");U(gb,"ShortCompanionObject");U(mb,"IntCompanionObject");U(yb,"FloatCompanionObject");U(wb,"DoubleCompanionObject");U(bb,"StringCompanionObject");U(kb,"BooleanCompanionObject");U(Cd,"Digit");U(qd,"Letter");Lr(cn,"Comparator");U(Al,"Unit");_(bi,"AbstractCollection",o,o,[Z]);_(As,"AbstractMutableCollection",o,o,[Z]);_($f,"IteratorImpl");_(Ad,"ListIteratorImpl");_(Td,"AbstractMutableList",o,o,[zn,Z]);_(jd,"AbstractMap",o,o,[xn]);_(Od,"AbstractMutableMap",o,o,[vi]);_(Ts,"AbstractMutableSet",o,o,[Ne,Z]);nn(Pd);Lr(js,"RandomAccess");_(A,"ArrayList",A.m,o,[zn,Z,js]);_(gs,"HashMap",gs.a7,o,[vi]);_(Bd,"HashMapKeys",o,o,[Ne,Z]);_(Nd,"HashMapValues",o,o,[Z]);_(Ud,"HashMapEntrySetBase",o,o,[Ne,Z]);_(Dd,"HashMapEntrySet");_(Rd);_(Ld,"HashMapKeysDefault");_(Md);_(Fd,"HashMapValuesDefault");_(Ea,"HashSet",Ea.q8,o,[Ne,Z]);nn($d);_(Tl,"Itr");_(Jd,"KeysItr");_(Hd,"ValuesItr");_(Gd,"EntriesItr");_(Kd,"EntryRef",o,o,[it]);Lr(Wd,"InternalMap");Rr(Fe).k8=xb;_(Fe,"InternalHashMap",Fe.l7,o,[Wd]);U(Yd,"EmptyHolder");_(cr,"LinkedHashMap",cr.t4,o,[vi]);_(Pn,"LinkedHashSet",Pn.i1,o,[Ne,Z]);Lr(ut,"Continuation");U(Zd,"CompletedContinuation",o,o,[ut]);_(Jf,"InterceptedCoroutine",o,o,[ut]);_(Hf,"GeneratorCoroutineImpl",o,o,[ut]);_(Vd,o,o,o,[ut]);_(ms,"Exception",ms.tb);_(de,"RuntimeException",de.nb);_(pe,"UnsupportedOperationException",pe.s6);_(N,"IllegalArgumentException",N.qb);_(Tr,"NoSuchElementException",Tr.j1);_(Qn,"IndexOutOfBoundsException",Qn.yb);_(mr,"IllegalStateException",mr.ac);_(Eo,"ConcurrentModificationException",Eo.p9);_(Zu,"ArithmeticException",Zu.ec);_(zo,"Error",zo.kc);_(os,"AssertionError",os.ic);_(Vu,"NumberFormatException",Vu.sc);_(Xu,"NoWhenBranchMatchedException",Xu.s3);_(Qu,"NullPointerException",Qu.w3);_(r1,"ClassCastException",r1.a4);Lr(rt,"KClass");_(ki,"KClassImpl",o,o,[rt]);_(an,"PrimitiveKClassImpl");U(Gf,"NothingKClassImpl");_(n1,"SimpleKClassImpl");Lr(Ta,"KProperty1");U(Xd,"PrimitiveClasses");_(Rv,"CharacterCodingException",Rv.ce);_(rn,"StringBuilder",rn.f,o,[Ff]);nn(Qd);_(Be,"Regex");_(jl,"MatchGroup");_(rp,o,o,o,[Z]);_(Kf,"AbstractList",o,o,[zn]);_(np);_(ep);_(Sb,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Et,"DurationUnit");_(Wf,"IteratorImpl");_(tp,"ListIteratorImpl");nn(ap);_(ip);_(sp);nn(Eb);_(op,"AbstractSet",o,o,[Ne]);_(lp);_(up);nn(fp);U(cp,"EmptyList",o,o,[zn,js]);U(vp,"EmptyIterator");_(Ol,"IndexedValue");_(hp,"IndexingIterable");_(dp,"IndexingIterator");Lr(pp,"MapWithDefault",o,o,[xn]);U(_p,"EmptyMap",o,o,[xn]);_(gp,"IntIterator");_(mp);_(yp,"TransformingSequence");Lr(Pl,"DropTakeSequence");_(wp);_(Bl,"TakeSequence",o,o,[Pl]);U(bp,"EmptySequence",o,o,[Pl]);_(kp);_(Yf,"GeneratorSequence");U(xp,"EmptySet",o,o,[Ne]);U(Sp,"NaturalOrderComparator",o,o,[cn]);_(Ep,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(zp,"Key");Lr(zb,"ContinuationInterceptor");U(Ip,"EmptyCoroutineContext");_(Cp,"CoroutineSingletons");_(qp,"EnumEntriesList",o,o,[zn,js]);nn(Ap);_(Os,"IntProgression");Lr(ai,"ClosedRange");_(Nt,"IntRange",o,o,[ai]);_(Tp,"IntProgressionIterator");nn(jp);_(Op);_(Pp,"DelimitedRangesSequence");U(Ib,"State");_(Bp,"LinesIterator");_(Np);nn(Up);_(Ee,"Duration",o,o,[qe]);nn(Dp);_(e1,"LongParser");U(Cb,"FractionalParser");nn(Rp);_(st,"Instant",o,o,[qe]);_(Lp,"Success");_(Zf,"Failure");nn(Mp);_(Vf,"UnboundLocalDateTime");_(Xf,"InstantFormatException");_(Fp,"DeepRecursiveScope",o,o,o,[1,2]);_($p,"DeepRecursiveFunction");_(Jp,"DeepRecursiveScopeImpl",o,o,[ut],[1,2]);_(Hp,"LazyThreadSafetyMode");_(Qf,"UnsafeLazyImpl");U(Gp,"UNINITIALIZED_VALUE");nn(qb);_(Ut,"Failure");_(ha,"Result");_(Lv,"NotImplementedError",Lv.hb);_(Nl,"Pair");nn(Kp);_(At,"Uuid",o,o,[qe]);nn(Wp);_(Je,"UByte",o,o,[qe]);_(Yp,"Iterator");_(pa,"UByteArray",o,o,[Z]);nn(Zp);_(ae,"UInt",o,o,[qe]);_(Vp,"Iterator");_(_a,"UIntArray",o,o,[Z]);nn(Xp);_(ie,"ULong",o,o,[qe]);_(Qp,"Iterator");_(ga,"ULongArray",o,o,[Z]);nn(r_);_(He,"UShort",o,o,[qe]);_(n_,"Iterator");_(ma,"UShortArray",o,o,[Z]);lr=new Al;_o=null;ks=new $d;ng=new Zd;Ln=new ap;xs=new fp;Ss=new vp;Fl=new bp;Sg=new Sp;C1=new zp;Cc=new jp;rm=new Mp;wo=new Gp;var Xr=Math.imul;class Ql{}class ui{}class vr{}class Hn extends N{static tn(){var r=this.qb();return $u(r),r}static un(r){var e=this.v(r);return $u(e),e}static vn(r,e){var t=this.rb(r,e);return $u(t),t}}class ru extends Hn{constructor(r,e,t,a){return new.target.do(r,e,t,a)}static do(r,e,t,a){var i=this.vn(r,e);return vn(i,i.co_1),i.ao_1=t,i.bo_1=a,i}eo(r){return ru.do(r,this,this.ao_1,this.bo_1)}}class ye{}function Pa(){return!1}function Ba(){return!1}function Js(){return fr()}class pm{}class _m{constructor(r){this.uo_1=r,this.to_1=r.mo()}y(){return this.to_1>0}z(){var r=this.uo_1.mo(),e=this.to_1;return this.to_1=e-1|0,this.uo_1.ro(r-e|0)}}class gm{constructor(r){this.vo_1=r}x(){return new _m(this.vo_1)}}class mm{constructor(r){this.wo_1=r,this.xo_1=!1,this.yo_1=fr(),this.zo_1=A.m(),this.ap_1=Ea.q8(),this.bp_1=A.m(),this.cp_1=A.m(),this.dp_1=A.m()}ep(r,e,t,a){if(!this.ap_1.n(r)){var i="Element with name '"+r+"' is already registered in "+this.wo_1;throw N.v(w(i))}this.zo_1.n(r),this.bp_1.n(e),this.cp_1.n(t),this.dp_1.n(a)}fp(r,e,t,a,i){t=t===o?fr():t,a=a===o?!1:a;var s;return i===o?(this.ep(r,e,t,a),s=lr):s=i.ep.call(this,r,e,t,a),s}}class Hs{}class Pi{constructor(r,e,t,a,i){this.gp_1=r,this.hp_1=e,this.ip_1=t,this.jp_1=i.yo_1,this.kp_1=Xb(i.zo_1);var s=this,l=i.zo_1;s.lp_1=Aa(l),this.mp_1=Q1(i.bp_1);var u=this,f=i.cp_1;u.np_1=Aa(f),this.op_1=Qb(i.dp_1);for(var c=this,v=Jb(this.lp_1),h=A.f1(Mr(v,10)),d=v.x();d.y();){var p=d.z(),g=j(p.dh_1,p.ch_1);h.n(g)}c.pp_1=mg(h),this.qp_1=Q1(a);var y=this;y.rp_1=tg(Hz(this))}io(){return this.gp_1}jo(){return this.hp_1}mo(){return this.ip_1}no(){return this.jp_1}sp(){return this.kp_1}oo(r){return fi(this.lp_1,r)}po(r){var e=this.pp_1.o2(r);return e??-3}qo(r){return fi(this.np_1,r)}ro(r){return fi(this.mp_1,r)}so(r){return Z0(this.op_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Pi)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!_c(this.qp_1,r.qp_1)){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,a=this.mo();if(t<a)do{var i=t;if(t=t+1|0,this.ro(i).io()!==r.ro(i).io()){e=!1;break r}if(!D(this.ro(i).jo(),r.ro(i).jo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return D0(this)}toString(){return H0(this)}}class Bi{toString(){return fn(Ur(this).uc())}hashCode(){return he(this.toString())}}class nu extends Bi{constructor(){Lo=null,super(),Lo=this}}class ym extends Bi{constructor(){Mo=null,super(),Mo=this}}class Gs extends Bi{}class wm extends Gs{constructor(){Fo=null,super(),Fo=this}}class bm extends Gs{constructor(){$o=null,super(),$o=this}}class km extends Gs{constructor(){Jo=null,super(),Jo=this}}class xm extends Gs{constructor(){Ho=null,super(),Ho=this}}class Wn extends Bi{}class Sm extends Wn{constructor(){Go=null,super(),Go=this}}class Em extends Wn{constructor(){Ko=null,super(),Ko=this}}class zm extends Wn{constructor(){Wo=null,super(),Wo=this}}class Im extends Wn{constructor(){Yo=null,super(),Yo=this}}class Cm extends Wn{constructor(){Zo=null,super(),Zo=this}}class qm extends Wn{constructor(){Vo=null,super(),Vo=this}}class Am extends Wn{constructor(){Xo=null,super(),Xo=this}}class Tm extends Wn{constructor(){Qo=null,super(),Qo=this}}class jm extends Wn{constructor(){rl=null,super(),rl=this}}class Ni extends Bi{}class Om extends Ni{constructor(){nl=null,super(),nl=this}}class eu{}function Pm(n){return n.ln(this)}class tu{}function Bm(){return!1}function Nm(n){return-1}function Um(n,r,e,t,a){return t=t===o?null:t,a===o?this.tq(n,r,e,t):a.tq.call(this,n,r,e,t)}class Na{tp(){throw Hn.un(w(Ur(this))+" can't retrieve untyped values")}up(){return!0}vp(){return null}wp(){var r=this.tp();return typeof r=="boolean"?r:m()}xp(){var r=this.tp();return typeof r=="number"?r:m()}yp(){var r=this.tp();return typeof r=="number"?r:m()}zp(){var r=this.tp();return typeof r=="number"?r:m()}aq(){var r=this.tp();return r instanceof b?r:m()}bq(){var r=this.tp();return typeof r=="number"?r:m()}cq(){var r=this.tp();return typeof r=="number"?r:m()}dq(){var r=this.tp();return r instanceof Cn?r.x1_1:m()}eq(){var r=this.tp();return typeof r=="string"?r:m()}fq(r){return this}gq(r,e){return this.hq(r)}iq(r){return this}jq(r){}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.yp()}nq(r,e){return this.zp()}oq(r,e){return this.aq()}pq(r,e){return this.bq()}qq(r,e){return this.cq()}rq(r,e){return this.dq()}sq(r,e){return this.fq(r.ro(e))}tq(r,e,t,a){return this.gq(t,a)}}class Bc{}function wz(n,r){return this.iq(n)}function bz(n,r){n.kn(this,r)}class Ks{static zq(){return ja(this)}iq(r){return this}jq(r){}ar(r,e){return!0}br(r){throw Hn.un("Non-serializable "+w(Ur(r))+" is not supported by "+w(Ur(this))+" encoder")}cr(){throw Hn.un("'null' is not supported by default")}dr(r){return this.br(r)}er(r){return this.br(r)}fr(r){return this.br(r)}gr(r){return this.br(r)}hr(r){return this.br(r)}ir(r){return this.br(r)}jr(r){return this.br(r)}kr(r){return this.br(new Cn(r))}lr(r){return this.br(r)}mr(r){return this}nr(r,e,t){this.ar(r,e)&&this.dr(t)}or(r,e,t){this.ar(r,e)&&this.er(t)}pr(r,e,t){this.ar(r,e)&&this.fr(t)}qr(r,e,t){this.ar(r,e)&&this.gr(t)}rr(r,e,t){this.ar(r,e)&&this.hr(t)}sr(r,e,t){this.ar(r,e)&&this.ir(t)}tr(r,e,t){this.ar(r,e)&&this.jr(t)}ur(r,e,t){this.ar(r,e)&&this.kr(t)}vr(r,e){return this.ar(r,e)?this.mr(r.ro(e)):dI()}wr(r,e,t,a){this.ar(r,e)&&this.xr(t,a)}}class yi{on(r,e){return r.vq().zr(this.nn(),e)}mn(r,e){return r.vq().as(this.nn(),e)}}class Dm{constructor(){K1=this,this.bs_1=pI()}jn(){return this.bs_1}cs(r,e){throw Hn.un("'kotlin.Nothing' cannot be serialized")}kn(r,e){var t;return t=m(),this.cs(r,t)}ln(r){throw Hn.un("'kotlin.Nothing' does not have instances")}}class Rm{constructor(){W1=this,this.ds_1=new In("kotlin.time.Duration",Ri())}jn(){return this.ds_1}es(r,e){r.lr(MS(e))}kn(r,e){return this.es(r,e instanceof Ee?e.qj_1:m())}fs(r){return Wr().rj(r.eq())}ln(r){return new Ee(this.fs(r))}}class Lm{constructor(){Y1=this,this.gs_1=new In("kotlin.time.Instant",Ri())}jn(){return this.gs_1}hs(r,e){r.lr(e.toString())}kn(r,e){return this.hs(r,e instanceof st?e:m())}ln(r){return qt().dk(r.eq())}}class Mm{constructor(){Z1=this,this.is_1=new In("kotlin.uuid.Uuid",Ri())}jn(){return this.is_1}js(r,e){r.lr(e.toString())}kn(r,e){return this.js(r,e instanceof At?e:m())}ln(r){return Fs().ml(r.eq())}}class Lt{constructor(r){this.ms_1=r,this.ns_1=1}jo(){return Ys()}mo(){return this.ns_1}oo(r){return zt(r,this.io()),r.toString()}po(r){var e=Jl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}so(r){return zt(r,this.io()),!1}qo(r){return zt(r,this.io()),fr()}ro(r){return zt(r,this.io()),this.ms_1}equals(r){return this===r?!0:r instanceof Lt?!!(D(this.ms_1,r.ms_1)&&this.io()===r.io()):!1}hashCode(){return Xr(wr(this.ms_1),31)+he(this.io())|0}toString(){return this.io()+"("+w(this.ms_1)+")"}}class Fm extends Lt{io(){return"kotlin.collections.ArrayList"}}class Ua{constructor(r,e,t){this.os_1=r,this.ps_1=e,this.qs_1=t,this.rs_1=2}io(){return this.os_1}jo(){return lu()}mo(){return this.rs_1}oo(r){return zt(r,this.io()),r.toString()}po(r){var e=Jl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}so(r){return zt(r,this.io()),!1}qo(r){return zt(r,this.io()),fr()}ro(r){zt(r,this.io());var e;switch(r%2|0){case 0:e=this.ps_1;break;case 1:e=this.qs_1;break;default:var t="Unreached";throw mr.o3(w(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Ua)||this.io()!==r.io()||!D(this.ps_1,r.ps_1)||!D(this.qs_1,r.qs_1))}hashCode(){var r=he(this.io());return r=Xr(31,r)+wr(this.ps_1)|0,r=Xr(31,r)+wr(this.qs_1)|0,r}toString(){return this.io()+"("+w(this.ps_1)+", "+w(this.qs_1)+")"}}class $m extends Ua{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class Jm extends Lt{constructor(r){super(r),this.us_1=r.io()+"Array"}io(){return this.us_1}}class Nc{ot(r,e){var t=r.iq(this.jn()),a=t.yq(this.jn());if(!(a>=-1)){var i="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+a;throw N.v(w(i))}var s;e!=null?s=this.dt(e,this.tt(e)+ln(a,0)|0):s=this.xs(a);var l=s,u=this.zs(l);if(t.wq())this.lt(t,l,u,a);else r:for(;;){var f=t.xq(this.jn());if(f===-1)break r;this.nt(t,u+f|0,l)}return t.jq(this.jn()),this.bt(l)}ln(r){return this.ot(r,null)}nt(r,e,t,a,i){a=a===o?!0:a;var s;return i===o?(this.mt(r,e,t,a),s=lr):s=i.mt.call(this,r,e,t,a),s}}class Uc extends Nc{constructor(r){super(),this.jt_1=r}kt(r,e){var t=this.tt(e),a=this.jn(),i=r.yr(a,t),s=this.vt(e),l=0;if(l<t)do{var u=l;l=l+1|0,i.wr(this.jn(),u,this.jt_1,s.z())}while(l<t);i.jq(a)}kn(r,e){return this.kt(r,e)}lt(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw N.v(w(i))}var s=0;if(s<a)do{var l=s;s=s+1|0,this.mt(r,t+l|0,e,!1)}while(s<a)}mt(r,e,t,a){this.ft(t,e,r.uq(this.jn(),e,this.jt_1))}}class Hm extends Uc{ht(r){return r.c1()}tt(r){return this.ht(r!=null&&E(r,Z)?r:m())}it(r){return r.x()}vt(r){return this.it(r!=null&&E(r,Z)?r:m())}}class Gm extends Hm{constructor(r){super(r),this.ws_1=new Fm(r.jn())}jn(){return this.ws_1}xs(r){return r===-1?A.m():A.f1(r)}ys(r){return r.c1()}zs(r){return this.ys(r instanceof A?r:m())}at(r){return r}bt(r){return this.at(r instanceof A?r:m())}ct(r,e){if(r instanceof A)return r.n6(e),r;if(e===r.c1())return A.h1(r);var t=A.f1(e);return t.g1(r),t}dt(r,e){return this.ct(r!=null&&E(r,zn)?r:m(),e)}et(r,e,t){r.o5(e,t)}ft(r,e,t){return this.et(r instanceof A?r:m(),e,t)}}class Km extends Nc{constructor(r,e){super(),this.zt_1=r,this.au_1=e}bu(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw N.v(w(i))}var s=vk(ic(0,Xr(a,2)),2),l=s.r1_1,u=s.s1_1,f=s.t1_1;if(f>0&&l<=u||f<0&&u<=l)do{var c=l;l=l+f|0,this.cu(r,t+c|0,e,!1)}while(c!==u)}lt(r,e,t,a){return this.bu(r,e!=null&&E(e,vi)?e:m(),t,a)}cu(r,e,t,a){var i=r.uq(this.jn(),e,this.zt_1),s;if(a){var l=r.xq(this.jn());if(l!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+l;throw N.v(w(u))}s=l}else s=e+1|0;var f=s,c,v;if(t.m2(i)){var h=this.au_1.jn().jo();v=!(h instanceof Wn)}else v=!1;v?c=r.tq(this.jn(),f,this.au_1,ze(t,i)):c=r.uq(this.jn(),f,this.au_1);var d=c;t.s2(i,d)}mt(r,e,t,a){return this.cu(r,e,t!=null&&E(t,vi)?t:m(),a)}kt(r,e){for(var t=this.tt(e),a=this.jn(),i=r.yr(a,t),s=this.vt(e),l=0,u=s;u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=this.jn(),d=l;l=d+1|0,i.wr(h,d,this.zt_1,c);var p=this.jn(),g=l;l=g+1|0,i.wr(p,g,this.au_1,v)}i.jq(a)}kn(r,e){return this.kt(r,e)}}class Wm extends Km{constructor(r,e){super(r,e),this.rt_1=new $m(r.jn(),e.jn())}jn(){return this.rt_1}st(r){return r.c1()}tt(r){return this.st(r!=null&&E(r,xn)?r:m())}ut(r){return r.r2().x()}vt(r){return this.ut(r!=null&&E(r,xn)?r:m())}xs(r){return r===-1?cr.t4():Lh(r)}wt(r){return Xr(r.c1(),2)}zs(r){return this.wt(r instanceof cr?r:m())}xt(r){return r}bt(r){return this.xt(r instanceof cr?r:m())}yt(r,e){if(r instanceof cr)return r;if(e<=r.c1())return cr.oa(r);var t=Lh(e);return t.u2(r),t}dt(r,e){return this.yt(r!=null&&E(r,xn)?r:m(),e)}}class we extends Uc{constructor(r){super(r),this.eu_1=new Jm(r.jn())}jn(){return this.eu_1}fu(r){return r.gu()}zs(r){return this.fu(r instanceof Mn?r:m())}hu(r){return r.iu()}bt(r){return this.hu(r instanceof Mn?r:m())}ju(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw mr.o3(w(e))}vt(r){return this.ju(r)}ku(r,e,t){var a="This method lead to boxing and must not be used, use Builder.append instead";throw mr.o3(w(a))}ft(r,e,t){return this.ku(r instanceof Mn?r:m(),e,t)}xs(r){return r===-1?this.lu():this.mu(r)}pu(r,e){var t=this.tt(e),a=this.eu_1,i=r.yr(a,t);this.ou(i,e,t),i.jq(a)}kn(r,e){return this.pu(r,e)}kt(r,e){return this.pu(r,e)}ln(r){return this.ot(r,null)}}class Mn{static qu(){return ja(this)}su(r,e){r=r===o?this.gu()+1|0:r;var t;return e===o?(this.ru(r),t=lr):t=e.ru.call(this,r),t}}let Ym=class{constructor(){V1=this,this.tu_1=za(0)}};class Zm{constructor(r,e){Mh(),this.uu_1=r,this.vu_1=e;var t=this.uu_1.mo();if(t<=64){var a=this,i;t===64?i=new b(0,0):i=te(new b(-1,-1),t),a.wu_1=i,this.xu_1=Mh().tu_1}else this.wu_1=new b(0,0),this.xu_1=uI(this,t)}yu(r){r<64?this.wu_1=Ia(this.wu_1,te(new b(1,0),r)):fI(this,r)}zu(){for(var r=this.uu_1.mo();!ir(this.wu_1,new b(-1,-1));){var e=L_(uc(this.wu_1));if(this.wu_1=Ia(this.wu_1,te(new b(1,0),e)),this.vu_1(this.uu_1,e))return e}return r>64?cI(this):-1}}class Ui{constructor(r,e,t){e=e===o?null:e,this.nv_1=r,this.ov_1=e,this.pv_1=t,this.qv_1=-1;for(var a=this,i=0,s=this.pv_1,l=Array(s);i<s;)l[i]="[UNINITIALIZED]",i=i+1|0;a.rv_1=l;var u=this,f=this.pv_1;u.sv_1=Array(f),this.tv_1=null,this.uv_1=Co(this.pv_1),this.vv_1=qr();var c=this,v=bo();c.wv_1=go(v,bI(this));var h=this,d=bo();h.xv_1=go(d,xI(this));var p=this,g=bo();p.yv_1=go(g,EI(this))}io(){return this.nv_1}mo(){return this.pv_1}jo(){return ou()}no(){var r=this.tv_1;return r??fr()}sp(){return this.vv_1.p2()}zv(){var r=this.xv_1,e=Ta;return zi("typeParameterDescriptors",1,e,SI(),null),r.l2()}ro(r){return fi(F0(this),r).jn()}so(r){return Z0(this.uv_1,r)}qo(r){var e=fi(this.sv_1,r);return e??fr()}oo(r){return fi(this.rv_1,r)}po(r){var e=this.vv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ui)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!_c(this.zv(),r.zv())){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,a=this.mo();if(t<a)do{var i=t;if(t=t+1|0,this.ro(i).io()!==r.ro(i).io()){e=!1;break r}if(!D(this.ro(i).jo(),r.ro(i).jo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return $0(this)}toString(){return H0(this)}}class au extends Ui{constructor(r,e){super(r,e,1),this.mv_1=!0}lo(){return this.mv_1}hashCode(){return Xr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof au)){e=!1;break r}if(this.io()!==r.io()){e=!1;break r}if(!(r.mv_1&&_c(this.zv(),r.zv()))){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}var t=0,a=this.mo();if(t<a)do{var i=t;if(t=t+1|0,this.ro(i).io()!==r.ro(i).io()){e=!1;break r}if(!D(this.ro(i).jo(),r.ro(i).jo())){e=!1;break r}}while(t<a);e=!0}return e}}class Vm{}function kz(){return G0()}class Dc{constructor(r){this.aw_1=r}bw(){return[this.aw_1]}jn(){var r="unsupported";throw mr.o3(w(r))}kn(r,e){var t="unsupported";throw mr.o3(w(t))}ln(r){var e="unsupported";throw mr.o3(w(e))}}class Xm extends Ks{constructor(){return new.target.ew()}static ew(){el=null;var r=this.zq();return el=r,r.dw_1=uu(),r}vq(){return this.dw_1}br(r){return lr}cr(){return lr}dr(r){return lr}er(r){return lr}fr(r){return lr}gr(r){return lr}hr(r){return lr}ir(r){return lr}jr(r){return lr}kr(r){return lr}lr(r){return lr}}class Ws{constructor(){X1=this,this.fw_1=Kc(),this.gw_1="kotlin.Nothing"}jo(){return this.fw_1}io(){return this.gw_1}mo(){return 0}oo(r){ts()}po(r){ts()}so(r){ts()}ro(r){ts()}qo(r){ts()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return he(this.gw_1)+Xr(31,this.fw_1.hashCode())|0}}class Qm{}class r0{constructor(r,e){this.hw_1=e,this.iw_1=fr();var t=this,a=bo();t.jw_1=go(a,gI(r,this))}jn(){var r=this.jw_1,e=Ta;return zi("descriptor",1,e,mI(),null),r.l2()}kw(r,e){r.iq(this.jn()).jq(this.jn())}kn(r,e){return this.kw(r,e??m())}ln(r){var e=this.jn(),t=r.iq(e);r:{if(t.wq())break r;var a=t.xq(this.jn());if(a===-1)break r;throw Hn.un("Unexpected index "+a)}return t.jq(e),this.hw_1}}class n0 extends we{constructor(){tl=null,super(O0(lc())),tl=this}nw(r){return r.length}tt(r){return this.nw(r!=null&&cs(r)?r:m())}ow(r,e){return e===r.length?Xt.rw(r):Xt.sw(v1(r,e),r.length)}dt(r,e){return this.ow(r!=null&&cs(r)?r:m(),e)}mu(r){return Xt.tw(r)}lu(){return Xt.uw()}vw(r,e,t,a){t.ww(r.rq(this.eu_1,e))}mt(r,e,t,a){return this.vw(r,e,t instanceof Xt?t:m(),a)}nu(r,e,t,a){return this.vw(r,e,t instanceof Xt?t:m(),a)}xw(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.ur(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.xw(r,e!=null&&cs(e)?e:m(),t)}}class e0 extends we{constructor(){al=null,super(P0()),al=this}ax(r){return r.length}tt(r){return this.ax(r!=null&&ds(r)?r:m())}bx(r,e){return e===r.length?Qt.ex(r):Qt.fx(h1(r,e),r.length)}dt(r,e){return this.bx(r!=null&&ds(r)?r:m(),e)}mu(r){return Qt.gx(r)}lu(){return Qt.hx()}ix(r,e,t,a){t.jx(r.qq(this.eu_1,e))}mt(r,e,t,a){return this.ix(r,e,t instanceof Qt?t:m(),a)}nu(r,e,t,a){return this.ix(r,e,t instanceof Qt?t:m(),a)}kx(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.tr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.kx(r,e!=null&&ds(e)?e:m(),t)}}class t0 extends we{constructor(){il=null,super(B0()),il=this}nx(r){return r.length}tt(r){return this.nx(r!=null&&hs(r)?r:m())}ox(r,e){return e===r.length?ra.rx(r):ra.sx(d1(r,e),r.length)}dt(r,e){return this.ox(r!=null&&hs(r)?r:m(),e)}mu(r){return ra.tx(r)}lu(){return ra.ux()}vx(r,e,t,a){t.wx(r.pq(this.eu_1,e))}mt(r,e,t,a){return this.vx(r,e,t instanceof ra?t:m(),a)}nu(r,e,t,a){return this.vx(r,e,t instanceof ra?t:m(),a)}xx(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.sr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.xx(r,e!=null&&hs(e)?e:m(),t)}}class a0 extends we{constructor(){sl=null,super(Jc(Ul())),sl=this}ay(r){return r.length}tt(r){return this.ay(r!=null&&ii(r)?r:m())}by(r,e){return e===r.length?na.ey(r):na.fy(pi(r,e),r.length)}dt(r,e){return this.by(r!=null&&ii(r)?r:m(),e)}mu(r){return na.gy(r)}lu(){return na.hy()}iy(r,e,t,a){t.jy(r.oq(this.eu_1,e))}mt(r,e,t,a){return this.iy(r,e,t instanceof na?t:m(),a)}nu(r,e,t,a){return this.iy(r,e,t instanceof na?t:m(),a)}ky(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.rr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.ky(r,e!=null&&ii(e)?e:m(),t)}}class i0 extends we{constructor(){ol=null,super(iu($s())),ol=this}ny(r){return xa(r)}tt(r){return this.ny(r instanceof ga?r.wm_1:m())}oy(r,e){if(e===xa(r))return ea.ry(r);var t=pi(r,e);return ea.sy(t,xa(r))}dt(r,e){return this.oy(r instanceof ga?r.wm_1:m(),e)}mu(r){return ea.ty(r)}lu(){return ea.uy()}vy(r,e,t,a){var i=r.sq(this.eu_1,e).aq(),s=i;t.wy(s)}mt(r,e,t,a){return this.vy(r,e,t instanceof ea?t:m(),a)}nu(r,e,t,a){return this.vy(r,e,t instanceof ea?t:m(),a)}xy(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.vr(this.eu_1,i),l=GE(e,i),u=l;s.hr(u)}while(a<t)}ou(r,e,t){return this.xy(r,e instanceof ga?e.wm_1:m(),t)}}class s0 extends we{constructor(){ll=null,super($c()),ll=this}az(r){return r.length}tt(r){return this.az(r!=null&&vs(r)?r:m())}bz(r,e){return e===r.length?ta.ez(r):ta.fz(qa(r,e),r.length)}dt(r,e){return this.bz(r!=null&&vs(r)?r:m(),e)}mu(r){return ta.gz(r)}lu(){return ta.hz()}iz(r,e,t,a){t.jz(r.nq(this.eu_1,e))}mt(r,e,t,a){return this.iz(r,e,t instanceof ta?t:m(),a)}nu(r,e,t,a){return this.iz(r,e,t instanceof ta?t:m(),a)}kz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.qr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.kz(r,e!=null&&vs(e)?e:m(),t)}}class o0 extends we{constructor(){ul=null,super(Lc(Vl())),ul=this}nz(r){return ka(r)}tt(r){return this.nz(r instanceof _a?r.lm_1:m())}oz(r,e){if(e===ka(r))return aa.rz(r);var t=qa(r,e);return aa.sz(t,ka(r))}dt(r,e){return this.oz(r instanceof _a?r.lm_1:m(),e)}mu(r){return aa.tz(r)}lu(){return aa.uz()}vz(r,e,t,a){var i=r.sq(this.eu_1,e).zp(),s=i;t.wz(s)}mt(r,e,t,a){return this.vz(r,e,t instanceof aa?t:m(),a)}nu(r,e,t,a){return this.vz(r,e,t instanceof aa?t:m(),a)}xz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.vr(this.eu_1,i),l=BE(e,i),u=l;s.gr(u)}while(a<t)}ou(r,e,t){return this.xz(r,e instanceof _a?e.lm_1:m(),t)}}class l0 extends we{constructor(){fl=null,super(Gc()),fl=this}a10(r){return r.length}tt(r){return this.a10(r!=null&&fs(r)?r:m())}b10(r,e){return e===r.length?ia.e10(r):ia.f10(_i(r,e),r.length)}dt(r,e){return this.b10(r!=null&&fs(r)?r:m(),e)}mu(r){return ia.g10(r)}lu(){return ia.h10()}i10(r,e,t,a){t.j10(r.mq(this.eu_1,e))}mt(r,e,t,a){return this.i10(r,e,t instanceof ia?t:m(),a)}nu(r,e,t,a){return this.i10(r,e,t instanceof ia?t:m(),a)}k10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.pr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.k10(r,e!=null&&fs(e)?e:m(),t)}}class u0 extends we{constructor(){cl=null,super(Fc(Xl())),cl=this}n10(r){return Sa(r)}tt(r){return this.n10(r instanceof ma?r.hn_1:m())}o10(r,e){if(e===Sa(r))return sa.r10(r);var t=_i(r,e);return sa.s10(t,Sa(r))}dt(r,e){return this.o10(r instanceof ma?r.hn_1:m(),e)}mu(r){return sa.t10(r)}lu(){return sa.u10()}v10(r,e,t,a){var i=r.sq(this.eu_1,e).yp(),s=i;t.w10(s)}mt(r,e,t,a){return this.v10(r,e,t instanceof sa?t:m(),a)}nu(r,e,t,a){return this.v10(r,e,t instanceof sa?t:m(),a)}x10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.vr(this.eu_1,i),l=ez(e,i),u=l;s.fr(u)}while(a<t)}ou(r,e,t){return this.x10(r,e instanceof ma?e.hn_1:m(),t)}}class f0 extends we{constructor(){vl=null,super(Hc()),vl=this}a11(r){return r.length}tt(r){return this.a11(r!=null&&us(r)?r:m())}b11(r,e){return e===r.length?oa.e11(r):oa.f11(gi(r,e),r.length)}dt(r,e){return this.b11(r!=null&&us(r)?r:m(),e)}mu(r){return oa.g11(r)}lu(){return oa.h11()}i11(r,e,t,a){t.j11(r.lq(this.eu_1,e))}mt(r,e,t,a){return this.i11(r,e,t instanceof oa?t:m(),a)}nu(r,e,t,a){return this.i11(r,e,t instanceof oa?t:m(),a)}k11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.or(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.k11(r,e!=null&&us(e)?e:m(),t)}}class c0 extends we{constructor(){hl=null,super(Mc(Zl())),hl=this}n11(r){return ba(r)}tt(r){return this.n11(r instanceof pa?r.am_1:m())}o11(r,e){if(e===ba(r))return la.r11(r);var t=gi(r,e);return la.s11(t,ba(r))}dt(r,e){return this.o11(r instanceof pa?r.am_1:m(),e)}mu(r){return la.t11(r)}lu(){return la.u11()}v11(r,e,t,a){var i=r.sq(this.eu_1,e).xp(),s=i;t.w11(s)}mt(r,e,t,a){return this.v11(r,e,t instanceof la?t:m(),a)}nu(r,e,t,a){return this.v11(r,e,t instanceof la?t:m(),a)}x11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.vr(this.eu_1,i),l=EE(e,i),u=l;s.er(u)}while(a<t)}ou(r,e,t){return this.x11(r,e instanceof pa?e.am_1:m(),t)}}class v0 extends we{constructor(){dl=null,super(N0()),dl=this}a12(r){return r.length}tt(r){return this.a12(r!=null&&ls(r)?r:m())}b12(r,e){return e===r.length?ua.e12(r):ua.f12(p1(r,e),r.length)}dt(r,e){return this.b12(r!=null&&ls(r)?r:m(),e)}mu(r){return ua.g12(r)}lu(){return ua.h12()}i12(r,e,t,a){t.j12(r.kq(this.eu_1,e))}mt(r,e,t,a){return this.i12(r,e,t instanceof ua?t:m(),a)}nu(r,e,t,a){return this.i12(r,e,t instanceof ua?t:m(),a)}k12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.nr(this.eu_1,i,e[i])}while(a<t)}ou(r,e,t){return this.k12(r,e!=null&&ls(e)?e:m(),t)}}class Xt extends Mn{constructor(r,e){return new.target.sw(r,e)}static sw(r,e){var t=this.qu();return t.pw_1=r,t.qw_1=e,t}static rw(r){return this.sw(r,r.length)}static tw(r){return this.sw(ws(r),0)}static uw(){return this.sw(ws(10),0)}gu(){return this.qw_1}ru(r){this.pw_1.length<r&&(this.pw_1=v1(this.pw_1,ln(r,Xr(this.pw_1.length,2))))}ww(r){this.su();var e=this.pw_1,t=this.qw_1;this.qw_1=t+1|0,e[t]=r}iu(){return v1(this.pw_1,this.qw_1)}}class Qt extends Mn{constructor(r,e){return new.target.fx(r,e)}static fx(r,e){var t=this.qu();return t.cx_1=r,t.dx_1=e,t}static ex(r){return this.fx(r,r.length)}static gx(r){return this.fx(new Float64Array(r),0)}static hx(){return this.fx(new Float64Array(10),0)}gu(){return this.dx_1}ru(r){this.cx_1.length<r&&(this.cx_1=h1(this.cx_1,ln(r,Xr(this.cx_1.length,2))))}jx(r){this.su();var e=this.cx_1,t=this.dx_1;this.dx_1=t+1|0,e[t]=r}iu(){return h1(this.cx_1,this.dx_1)}}class ra extends Mn{constructor(r,e){return new.target.sx(r,e)}static sx(r,e){var t=this.qu();return t.px_1=r,t.qx_1=e,t}static rx(r){return this.sx(r,r.length)}static tx(r){return this.sx(new Float32Array(r),0)}static ux(){return this.sx(new Float32Array(10),0)}gu(){return this.qx_1}ru(r){this.px_1.length<r&&(this.px_1=d1(this.px_1,ln(r,Xr(this.px_1.length,2))))}wx(r){this.su();var e=this.px_1,t=this.qx_1;this.qx_1=t+1|0,e[t]=r}iu(){return d1(this.px_1,this.qx_1)}}class na extends Mn{constructor(r,e){return new.target.fy(r,e)}static fy(r,e){var t=this.qu();return t.cy_1=r,t.dy_1=e,t}static ey(r){return this.fy(r,r.length)}static gy(r){return this.fy(za(r),0)}static hy(){return this.fy(za(10),0)}gu(){return this.dy_1}ru(r){this.cy_1.length<r&&(this.cy_1=pi(this.cy_1,ln(r,Xr(this.cy_1.length,2))))}jy(r){this.su();var e=this.cy_1,t=this.dy_1;this.dy_1=t+1|0,e[t]=r}iu(){return pi(this.cy_1,this.dy_1)}}class ea extends Mn{constructor(r,e){return new.target.sy(r,e)}static sy(r,e){var t=this.qu();return t.py_1=r,t.qy_1=e,t}static ry(r){return this.sy(r,xa(r))}static ty(r){return this.sy(Dh(r),0)}static uy(){return this.sy(Dh(10),0)}gu(){return this.qy_1}ru(r){if(xa(this.py_1)<r){var e=this,t=this.py_1,a=ln(r,Xr(xa(this.py_1),2));e.py_1=pi(t,a)}}wy(r){this.su();var e=this.py_1,t=this.qy_1;this.qy_1=t+1|0,KE(e,t,r)}l12(){var r=this.py_1,e=this.qy_1;return pi(r,e)}iu(){return new ga(this.l12())}}class ta extends Mn{constructor(r,e){return new.target.fz(r,e)}static fz(r,e){var t=this.qu();return t.cz_1=r,t.dz_1=e,t}static ez(r){return this.fz(r,r.length)}static gz(r){return this.fz(new Int32Array(r),0)}static hz(){return this.fz(new Int32Array(10),0)}gu(){return this.dz_1}ru(r){this.cz_1.length<r&&(this.cz_1=qa(this.cz_1,ln(r,Xr(this.cz_1.length,2))))}jz(r){this.su();var e=this.cz_1,t=this.dz_1;this.dz_1=t+1|0,e[t]=r}iu(){return qa(this.cz_1,this.dz_1)}}class aa extends Mn{constructor(r,e){return new.target.sz(r,e)}static sz(r,e){var t=this.qu();return t.pz_1=r,t.qz_1=e,t}static rz(r){return this.sz(r,ka(r))}static tz(r){return this.sz(Uh(r),0)}static uz(){return this.sz(Uh(10),0)}gu(){return this.qz_1}ru(r){if(ka(this.pz_1)<r){var e=this,t=this.pz_1,a=ln(r,Xr(ka(this.pz_1),2));e.pz_1=qa(t,a)}}wz(r){this.su();var e=this.pz_1,t=this.qz_1;this.qz_1=t+1|0,NE(e,t,r)}m12(){var r=this.pz_1,e=this.qz_1;return qa(r,e)}iu(){return new _a(this.m12())}}class ia extends Mn{constructor(r,e){return new.target.f10(r,e)}static f10(r,e){var t=this.qu();return t.c10_1=r,t.d10_1=e,t}static e10(r){return this.f10(r,r.length)}static g10(r){return this.f10(new Int16Array(r),0)}static h10(){return this.f10(new Int16Array(10),0)}gu(){return this.d10_1}ru(r){this.c10_1.length<r&&(this.c10_1=_i(this.c10_1,ln(r,Xr(this.c10_1.length,2))))}j10(r){this.su();var e=this.c10_1,t=this.d10_1;this.d10_1=t+1|0,e[t]=r}iu(){return _i(this.c10_1,this.d10_1)}}class sa extends Mn{constructor(r,e){return new.target.s10(r,e)}static s10(r,e){var t=this.qu();return t.p10_1=r,t.q10_1=e,t}static r10(r){return this.s10(r,Sa(r))}static t10(r){return this.s10(Rh(r),0)}static u10(){return this.s10(Rh(10),0)}gu(){return this.q10_1}ru(r){if(Sa(this.p10_1)<r){var e=this,t=this.p10_1,a=ln(r,Xr(Sa(this.p10_1),2));e.p10_1=_i(t,a)}}w10(r){this.su();var e=this.p10_1,t=this.q10_1;this.q10_1=t+1|0,tz(e,t,r)}n12(){var r=this.p10_1,e=this.q10_1;return _i(r,e)}iu(){return new ma(this.n12())}}class oa extends Mn{constructor(r,e){return new.target.f11(r,e)}static f11(r,e){var t=this.qu();return t.c11_1=r,t.d11_1=e,t}static e11(r){return this.f11(r,r.length)}static g11(r){return this.f11(new Int8Array(r),0)}static h11(){return this.f11(new Int8Array(10),0)}gu(){return this.d11_1}ru(r){this.c11_1.length<r&&(this.c11_1=gi(this.c11_1,ln(r,Xr(this.c11_1.length,2))))}j11(r){this.su();var e=this.c11_1,t=this.d11_1;this.d11_1=t+1|0,e[t]=r}iu(){return gi(this.c11_1,this.d11_1)}}class la extends Mn{constructor(r,e){return new.target.s11(r,e)}static s11(r,e){var t=this.qu();return t.p11_1=r,t.q11_1=e,t}static r11(r){return this.s11(r,ba(r))}static t11(r){return this.s11(Nh(r),0)}static u11(){return this.s11(Nh(10),0)}gu(){return this.q11_1}ru(r){if(ba(this.p11_1)<r){var e=this,t=this.p11_1,a=ln(r,Xr(ba(this.p11_1),2));e.p11_1=gi(t,a)}}w11(r){this.su();var e=this.p11_1,t=this.q11_1;this.q11_1=t+1|0,zE(e,t,r)}o12(){var r=this.p11_1,e=this.q11_1;return gi(r,e)}iu(){return new pa(this.o12())}}class ua extends Mn{constructor(r,e){return new.target.f12(r,e)}static f12(r,e){var t=this.qu();return t.c12_1=r,t.d12_1=e,t}static e12(r){return this.f12(r,r.length)}static g12(r){return this.f12(Co(r),0)}static h12(){return this.f12(Co(10),0)}gu(){return this.d12_1}ru(r){this.c12_1.length<r&&(this.c12_1=p1(this.c12_1,ln(r,Xr(this.c12_1.length,2))))}j12(r){this.su();var e=this.c12_1,t=this.d12_1;this.d12_1=t+1|0,e[t]=r}iu(){return p1(this.c12_1,this.d12_1)}}class h0{constructor(){rf=this,this.p12_1=new In("kotlin.String",Ri())}jn(){return this.p12_1}q12(r,e){return r.lr(e)}kn(r,e){return this.q12(r,e!=null&&typeof e=="string"?e:m())}ln(r){return r.eq()}}class In{constructor(r,e){this.r12_1=r,this.s12_1=e}io(){return this.r12_1}jo(){return this.s12_1}mo(){return 0}oo(r){as(this)}po(r){as(this)}so(r){as(this)}ro(r){as(this)}qo(r){as(this)}toString(){return"PrimitiveDescriptor("+this.r12_1+")"}equals(r){return this===r?!0:r instanceof In?!!(this.r12_1===r.r12_1&&D(this.s12_1,r.s12_1)):!1}hashCode(){return he(this.r12_1)+Xr(31,this.s12_1.hashCode())|0}}class d0{constructor(){nf=this,this.t12_1=new In("kotlin.Int",Qz())}jn(){return this.t12_1}u12(r,e){return r.gr(e)}kn(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.zp()}}class p0{constructor(){ef=this,this.v12_1=new In("kotlin.Long",rI())}jn(){return this.v12_1}w12(r,e){return r.hr(e)}kn(r,e){return this.w12(r,e instanceof b?e:m())}ln(r){return r.aq()}}class _0{constructor(){tf=this,this.x12_1=new In("kotlin.Byte",Zz())}jn(){return this.x12_1}y12(r,e){return r.er(e)}kn(r,e){return this.y12(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.xp()}}class g0{constructor(){af=this,this.z12_1=new In("kotlin.Short",Xz())}jn(){return this.z12_1}a13(r,e){return r.fr(e)}kn(r,e){return this.a13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.yp()}}class m0{constructor(){sf=this,this.b13_1=new In("kotlin.Char",Vz())}jn(){return this.b13_1}c13(r,e){return r.kr(e)}kn(r,e){return this.c13(r,e instanceof Cn?e.x1_1:m())}d13(r){return r.dq()}ln(r){return new Cn(this.d13(r))}}class y0{constructor(){of=this,this.e13_1=new In("kotlin.Double",eI())}jn(){return this.e13_1}f13(r,e){return r.jr(e)}kn(r,e){return this.f13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.cq()}}class w0{constructor(){lf=this,this.g13_1=new In("kotlin.Float",nI())}jn(){return this.g13_1}h13(r,e){return r.ir(e)}kn(r,e){return this.h13(r,e!=null&&typeof e=="number"?e:m())}ln(r){return r.bq()}}class b0{constructor(){uf=this,this.i13_1=new In("kotlin.Boolean",Yz())}jn(){return this.i13_1}j13(r,e){return r.dr(e)}kn(r,e){return this.j13(r,e!=null&&typeof e=="boolean"?e:m())}ln(r){return r.wp()}}class k0{constructor(){ff=this,this.k13_1=new r0("kotlin.Unit",lr)}jn(){return this.k13_1.jn()}l13(r,e){this.k13_1.kw(r,lr)}kn(r,e){return this.l13(r,e instanceof Al?e:m())}m13(r){this.k13_1.ln(r)}ln(r){return this.m13(r),lr}}class Di{constructor(){var r=this;r.s13_1=A.m(),this.t13_1=!1}vq(){return uu()}x13(r){throw Hn.un(w(Ur(this))+" can't retrieve untyped values")}y13(r){return!0}z13(r){var e=this.x13(r);return typeof e=="boolean"?e:m()}a14(r){var e=this.x13(r);return typeof e=="number"?e:m()}b14(r){var e=this.x13(r);return typeof e=="number"?e:m()}c14(r){var e=this.x13(r);return typeof e=="number"?e:m()}d14(r){var e=this.x13(r);return e instanceof b?e:m()}e14(r){var e=this.x13(r);return typeof e=="number"?e:m()}f14(r){var e=this.x13(r);return typeof e=="number"?e:m()}g14(r){var e=this.x13(r);return e instanceof Cn?e.x1_1:m()}h14(r){var e=this.x13(r);return typeof e=="string"?e:m()}i14(r,e){return this.j14(r),this}gq(r,e){return this.hq(r)}fq(r){return this.i14(this.k14(),r)}up(){var r=this.u13(),e;if(r==null)return!1;e=r;var t=e;return this.y13(t)}vp(){return null}wp(){return this.z13(this.k14())}xp(){return this.a14(this.k14())}yp(){return this.b14(this.k14())}zp(){return this.c14(this.k14())}aq(){return this.d14(this.k14())}bq(){return this.e14(this.k14())}cq(){return this.f14(this.k14())}dq(){return this.g14(this.k14())}eq(){return this.h14(this.k14())}iq(r){return this}jq(r){}kq(r,e){return this.z13(this.p13(r,e))}lq(r,e){return this.a14(this.p13(r,e))}mq(r,e){return this.b14(this.p13(r,e))}nq(r,e){return this.c14(this.p13(r,e))}oq(r,e){return this.d14(this.p13(r,e))}pq(r,e){return this.e14(this.p13(r,e))}qq(r,e){return this.f14(this.p13(r,e))}rq(r,e){return this.g14(this.p13(r,e))}sq(r,e){return this.i14(this.p13(r,e),r.ro(e))}tq(r,e,t,a){var i=this.p13(r,e);return rC(this,i,nC(this,t,a))}u13(){return u_(this.s13_1)}j14(r){this.s13_1.n(r)}k14(){var r=this.s13_1.h5(Rs(this.s13_1));return this.t13_1=!0,r}}class x0 extends Di{p13(r,e){return this.r13(this.q13(r,e))}r13(r){var e=this.u13();return this.v13(e??"",r)}q13(r,e){return r.oo(e)}v13(r,e){var t;return q(r)===0?t=e:t=r+"."+e,t}w13(){return this.s13_1.d1()?"$":H(this.s13_1,".","$.")}}class S0{constructor(){cf=this,this.l14_1=Zs("kotlin.UInt",$c())}jn(){return this.l14_1}m14(r,e){var t=r.mr(this.l14_1),a=e;t.gr(a)}kn(r,e){return this.m14(r,e instanceof ae?e.gm_1:m())}n14(r){var e=r.fq(this.l14_1).zp();return e}ln(r){return new ae(this.n14(r))}}class E0{constructor(){vf=this,this.o14_1=Zs("kotlin.ULong",Jc(Ul()))}jn(){return this.o14_1}p14(r,e){var t=r.mr(this.o14_1),a=e;t.hr(a)}kn(r,e){return this.p14(r,e instanceof ie?e.rm_1:m())}q14(r){var e=r.fq(this.o14_1).aq();return e}ln(r){return new ie(this.q14(r))}}class z0{constructor(){hf=this,this.r14_1=Zs("kotlin.UByte",Hc())}jn(){return this.r14_1}s14(r,e){var t=r.mr(this.r14_1),a=e;t.er(a)}kn(r,e){return this.s14(r,e instanceof Je?e.vl_1:m())}t14(r){var e=r.fq(this.r14_1).xp();return e}ln(r){return new Je(this.t14(r))}}class I0{constructor(){df=this,this.u14_1=Zs("kotlin.UShort",Gc())}jn(){return this.u14_1}v14(r,e){var t=r.mr(this.u14_1),a=e;t.fr(a)}kn(r,e){return this.v14(r,e instanceof He?e.cn_1:m())}w14(r){var e=r.fq(this.u14_1).yp();return e}ln(r){return new He(this.w14(r))}}class C0{fo(r,e,t){return e=e===o?fr():e,t===o?this.x14(r,e):t.x14.call(this,r,e)}}class q0 extends C0{constructor(r,e,t,a,i,s){super(),this.z14_1=r,this.a15_1=e,this.b15_1=t,this.c15_1=a,this.d15_1=i,this.e15_1=s}as(r,e){if(!r.vc(e))return null;var t=this.a15_1.o2(r),a=t==null?null:t.o2(Ur(e)),i=a!=null&&E(a,Ql)?a:null;if(i!=null)return i;var s=this.b15_1.o2(r),l=s!=null&&typeof s=="function"?s:null;return l==null?null:l(e)}zr(r,e){var t=this.c15_1.o2(r),a;t==null?a=null:a=(E(t,xn)?t:m()).o2(e);var i=a,s=i!=null&&E(i,vr)?i:null;if(s!=null)return s;var l=this.d15_1.o2(r),u=l!=null&&typeof l=="function"?l:null;return u==null?null:u(e)}x14(r,e){var t=this.z14_1.o2(r),a=t==null?null:t.f15(e);return a==null||E(a,vr)?a:null}y14(r){for(var e=this.z14_1.r2().x();e.y();){var t=e.z(),a=t.k2(),i=t.l2();if(i instanceof A0){var s=E(a,rt)?a:m(),l=i.i15_1;r.j15(s,E(l,vr)?l:m())}else i instanceof T0?r.h15(a,i.g15_1):Bs()}for(var u=this.a15_1.r2().x();u.y();)for(var f=u.z(),c=f.k2(),v=f.l2(),h=v.r2().x();h.y();){var d=h.z(),p=d.k2(),g=d.l2(),y=E(c,rt)?c:m(),x=E(p,rt)?p:m(),k=E(g,vr)?g:m();r.k15(y,x,k)}for(var S=this.b15_1.r2().x();S.y();){var z=S.z(),I=z.k2(),C=z.l2(),T=E(I,rt)?I:m();r.l15(T,typeof C=="function"?C:m())}for(var O=this.d15_1.r2().x();O.y();){var F=O.z(),P=F.k2(),B=F.l2(),J=E(P,rt)?P:m();r.m15(J,typeof B=="function"?B:m())}}}class Rc{}class A0 extends Rc{}class T0 extends Rc{}class j0{}function xz(n,r){return this.h15(n,lC(r))}class Sz{}function Ez(n,r,e){var t=n.mn(r,e),a;return t==null?aI(Ur(e),n.nn()):a=t,a}function J1(n,r,e){var t=n.on(r,e),a;return t==null?L0(e,n.nn()):a=t,a}function $u(n){vn(n,n.sn_1)}function Is(n){return FI()}function Lc(n){return eC()}function iu(n){return tC()}function Mc(n){return aC()}function Fc(n){return iC()}function $c(n){return $I()}function Jc(n){return JI()}function Hc(n){return HI()}function Gc(n){return GI()}function O0(n){return KI()}function zz(){return qI()}function P0(n){return WI()}function Iz(){return AI()}function B0(n){return YI()}function Cz(){return TI()}function qz(){return jI()}function Az(){return OI()}function Tz(){return PI()}function jz(){return BI()}function Oz(){return NI()}function Pz(){return UI()}function Bz(){return DI()}function Nz(){return RI()}function N0(n){return ZI()}function Uz(){return LI()}function Dz(n){return VI()}function Rz(){return iI()}function Lz(n){return sI()}function Mz(n){return oI()}function Fz(n){return lI()}function H1(n){return new Gm(n)}function G1(n,r){return new Wm(n,r)}function $z(n,r){var e=U0(r),t;if(e==null)t=null;else{var a=n.fo(e);t=a==null?null:a.jn()}return t}function U0(n){var r;return n instanceof pm?r=n.ho_1:n instanceof Qm?r=U0(n.go_1):r=null,r}function Jz(n){return new gm(n)}function su(n,r,e,t){var a;if(t===o?a=Wz:a=t,t=a,vt(n)){var i="Blank serial names are prohibited";throw N.v(w(i))}if(D(r,ou())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw N.v(w(s))}var l=new mm(n);return t(l),new Pi(n,r,l.zo_1.c1(),$b(e),l)}function D0(n){var r=n.rp_1,e=Ta;return zi("_hashCode",1,e,Gz(),null),r.l2()}function Hz(n){return()=>J0(n,n.qp_1)}function Gz(){return We(n=>D0(n),1,0,0)}function Kz(n,r){if(vt(n)){var e="Blank serial names are prohibited";throw N.v(w(e))}return XI(n,r)}function Wz(n){return lr}var Lo;function Da(){return Lo===o&&new nu,Lo}var Mo;function R0(){return Mo===o&&new ym,Mo}var Fo;function ou(){return Fo===o&&new wm,Fo}var $o;function Ys(){return $o===o&&new bm,$o}var Jo;function lu(){return Jo===o&&new km,Jo}var Ho;function Kc(){return Ho===o&&new xm,Ho}var Go;function Yz(){return Go===o&&new Sm,Go}var Ko;function Zz(){return Ko===o&&new Em,Ko}var Wo;function Vz(){return Wo===o&&new zm,Wo}var Yo;function Xz(){return Yo===o&&new Im,Yo}var Zo;function Qz(){return Zo===o&&new Cm,Zo}var Vo;function rI(){return Vo===o&&new qm,Vo}var Xo;function nI(){return Xo===o&&new Am,Xo}var Qo;function eI(){return Qo===o&&new Tm,Qo}var rl;function Ri(){return rl===o&&new jm,rl}var nl;function tI(){return nl===o&&new Om,nl}function aI(n,r){var e=n.uc();L0(e??w(n),r)}function L0(n,r){var e="in the polymorphic scope of '"+r.uc()+"'";throw Hn.un(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.uc()+"' has to be sealed and '@Serializable'."))}var K1;function iI(){return K1===o&&new Dm,K1}var W1;function sI(){return W1===o&&new Rm,W1}var Y1;function oI(){return Y1===o&&new Lm,Y1}var Z1;function lI(){return Z1===o&&new Mm,Z1}function zt(n,r){if(n<0)throw Qn.zb("Illegal index "+n+", "+r+" expects only non-negative indices")}function Lh(n){var r=n;return cr.na(r)}var V1;function Mh(){return V1===o&&new Ym,V1}function uI(n,r){var e=(r-1|0)>>>6|0,t=r&63,a=za(e);return t!==0&&(a[Lb(a)]=te(new b(-1,-1),r)),a}function fI(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.xu_1[e]=Ia(n.xu_1[e],te(new b(1,0),t))}function cI(n){var r=0,e=n.xu_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var a=Xr(t+1|0,64),i=n.xu_1[t];!ir(i,new b(-1,-1));){var s=L_(uc(i));i=Ia(i,te(new b(1,0),s));var l=a+s|0;if(n.vu_1(n.uu_1,l))return n.xu_1[t]=i,l}n.xu_1[t]=i}while(r<=e);return-1}function Zs(n,r){return new au(n,new Dc(r))}function vI(n,r){return n.eo(r)}function hI(n){return wI(n)}var el;function dI(){return el===o&&Xm.ew(),el}function ts(n){throw mr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var X1;function pI(){return X1===o&&new Ws,X1}function _I(n){return r=>(r.yo_1=n.iw_1,lr)}function gI(n,r){return()=>{var e=Kc();return su(n,e,[],_I(r))}}function mI(){return We(n=>n.jn(),1,0,1)}function yI(){return Wc(),M0}var M0;function wI(n){if(Wc(),E(n,Hs))return n.sp();var r=Ea.b1(n.mo()),e=0,t=n.mo();if(e<t)do{var a=e;e=e+1|0;var i=n.oo(a);r.n(i)}while(e<t);return r}function Q1(n){Wc();var r;n==null||n.d1()?r=null:r=n;var e=r,t;e==null?t=null:t=Aa(e);var a=t;return a??yI()}var Fh;function Wc(){Fh||(Fh=!0,M0=[])}function F0(n){var r=n.wv_1,e=Ta;return zi("childSerializers",1,e,kI(),null),r.l2()}function $0(n){var r=n.yv_1,e=Ta;return zi("_hashCode",1,e,zI(),null),r.l2()}function bI(n){return()=>{var r=n.ov_1,e=r==null?null:r.bw();return e??G0()}}function kI(){return We(n=>F0(n),1,0,2)}function xI(n){return()=>{var r=n.ov_1,e=r==null?null:r.cw(),t;if(e==null)t=null;else{for(var a=A.f1(e.length),i=0,s=e.length;i<s;){var l=e[i];i=i+1|0;var u=l.jn();a.n(u)}t=a}return Q1(t)}}function SI(){return We(n=>n.zv(),1,0,3)}function EI(n){return()=>J0(n,n.zv())}function zI(){return We(n=>$0(n),1,0,4)}function J0(n,r){var e=he(n.io());e=Xr(31,e)+ax(r)|0;for(var t=Jz(n),a=1,i=t.x();i.y();){var s=i.z(),l=a,u=Xr(31,l),f=s.io(),c=f==null?null:wr(f);a=u+(c??0)|0}for(var v=a,h=1,d=t.x();d.y();){var p=d.z(),g=h,y=Xr(31,g),x=p.jo(),k=x==null?null:wr(x);h=y+(k??0)|0}var S=h;return e=Xr(31,e)+v|0,e=Xr(31,e)+S|0,e}function H0(n){var r=ic(0,n.mo()),e=n.io()+"(";return H(r,", ",e,")",o,o,II(n))}function II(n){return r=>n.oo(r)+": "+n.ro(r).io()}function G0(){return CI(),K0}var K0,$h;function CI(){$h||($h=!0,K0=[])}var tl;function qI(){return tl===o&&new n0,tl}var al;function AI(){return al===o&&new e0,al}var il;function TI(){return il===o&&new t0,il}var sl;function jI(){return sl===o&&new a0,sl}var ol;function OI(){return ol===o&&new i0,ol}var ll;function PI(){return ll===o&&new s0,ll}var ul;function BI(){return ul===o&&new o0,ul}var fl;function NI(){return fl===o&&new l0,fl}var cl;function UI(){return cl===o&&new u0,cl}var vl;function DI(){return vl===o&&new f0,vl}var hl;function RI(){return hl===o&&new c0,hl}var dl;function LI(){return dl===o&&new v0,dl}function MI(){return Yc(),W0}var W0,rf;function FI(){return rf===o&&new h0,rf}function as(n){throw mr.o3("Primitive descriptor "+n.r12_1+" does not have elements")}var nf;function $I(){return nf===o&&new d0,nf}var ef;function JI(){return ef===o&&new p0,ef}var tf;function HI(){return tf===o&&new _0,tf}var af;function GI(){return af===o&&new g0,af}var sf;function KI(){return sf===o&&new m0,sf}var of;function WI(){return of===o&&new y0,of}var lf;function YI(){return lf===o&&new w0,lf}var uf;function ZI(){return uf===o&&new b0,uf}var ff;function VI(){return ff===o&&new k0,ff}function XI(n,r){return Yc(),QI(n),new In(n,r)}function QI(n){Yc();for(var r=MI().q2(),e=r.x();e.y();){var t=e.z(),a=t.jn().io();if(n===a)throw N.v(vS(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Ur(t).uc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var Jh;function Yc(){Jh||(Jh=!0,W0=uC())}function rC(n,r,e){n.j14(r);var t=e();return n.t13_1||n.k14(),n.t13_1=!1,t}function nC(n,r,e){return()=>n.gq(r,e)}var cf;function eC(){return cf===o&&new S0,cf}var vf;function tC(){return vf===o&&new E0,vf}var hf;function aC(){return hf===o&&new z0,hf}var df;function iC(){return df===o&&new I0,df}function sC(){return oC(),Y0}var Y0,Hh;function oC(){Hh||(Hh=!0,Y0=new q0(qr(),qr(),qr(),qr(),qr(),!1))}function uu(){return sC()}function lC(n){return r=>n}function fi(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Qn.zb("Index "+r+" out of bounds "+Ab(n).toString());return n[r]}function Z0(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Qn.zb("Index "+r+" out of bounds "+Fb(n).toString());return n[r]}function uC(){return Ls([j(Ir().od(),Is()),j(Nr(Cn),O0(lc())),j(Ir().rd(),zz()),j(Ir().md(),P0()),j(Ir().yd(),Iz()),j(Ir().ld(),B0()),j(Ir().xd(),Cz()),j(Ir().kd(),Jc(Ul())),j(Ir().wd(),qz()),j(Nr(ie),iu($s())),j(Nr(ga),Az()),j(Ir().jd(),$c()),j(Ir().ud(),Tz()),j(Nr(ae),Lc(Vl())),j(Nr(_a),jz()),j(Ir().id(),Gc()),j(Ir().td(),Oz()),j(Nr(He),Fc(Xl())),j(Nr(ma),Pz()),j(Ir().hd(),Hc()),j(Ir().sd(),Bz()),j(Nr(Je),Mc(Zl())),j(Nr(pa),Nz()),j(Ir().gd(),N0()),j(Ir().qd(),Uz()),j(Nr(Al),Dz()),j(Ir().fd(),Rz()),j(Nr(Ee),Lz(Wr())),j(Nr(st),Mz(qt())),j(Nr(At),Fz(Fs()))])}Lr(Ql,"SerializationStrategy");Lr(ui,"DeserializationStrategy");Lr(vr,"KSerializer",o,o,[Ql,ui]);_(Hn,"SerializationException",Hn.tn);_(ru,"MissingFieldException");Lr(ye,"SerialDescriptor");_(pm,"ContextDescriptor",o,o,[ye]);_(_m);_(gm);_(mm,"ClassSerialDescriptorBuilder");Lr(Hs,"CachedNames");Rr(Pi).ko=Pa;Rr(Pi).lo=Ba;_(Pi,"SerialDescriptorImpl",o,o,[ye,Hs]);_(Bi,"SerialKind");U(nu,"ENUM");U(ym,"CONTEXTUAL");_(Gs,"StructureKind");U(wm,"CLASS");U(bm,"LIST");U(km,"MAP");U(xm,"OBJECT");_(Wn,"PrimitiveKind");U(Sm,"BOOLEAN");U(Em,"BYTE");U(zm,"CHAR");U(Im,"SHORT");U(Cm,"INT");U(qm,"LONG");U(Am,"FLOAT");U(Tm,"DOUBLE");U(jm,"STRING");_(Ni,"PolymorphicKind");U(Om,"SEALED");Lr(eu,"Decoder");Lr(tu,"CompositeDecoder");Rr(Na).uq=Um;Rr(Na).hq=Pm;Rr(Na).wq=Bm;Rr(Na).yq=Nm;_(Na,"AbstractDecoder",o,o,[eu,tu]);Lr(Bc,"Encoder");Rr(Ks).yr=wz;Rr(Ks).xr=bz;_(Ks,"AbstractEncoder",o,o,[Bc]);_(yi,"AbstractPolymorphicSerializer",o,o,[vr]);U(Dm,"NothingSerializer",o,o,[vr]);U(Rm,"DurationSerializer",o,o,[vr]);U(Lm,"InstantSerializer",o,o,[vr]);U(Mm,"UuidSerializer",o,o,[vr]);Rr(Lt).ko=Pa;Rr(Lt).lo=Ba;Rr(Lt).no=Js;_(Lt,"ListLikeDescriptor",o,o,[ye]);_(Fm,"ArrayListClassDesc");Rr(Ua).ko=Pa;Rr(Ua).lo=Ba;Rr(Ua).no=Js;_(Ua,"MapLikeDescriptor",o,o,[ye]);_($m,"LinkedHashMapClassDesc");_(Jm,"PrimitiveArrayDescriptor");_(Nc,"AbstractCollectionSerializer",o,o,[vr]);_(Uc,"CollectionLikeSerializer");_(Hm,"CollectionSerializer");_(Gm,"ArrayListSerializer");_(Km,"MapLikeSerializer");_(Wm,"LinkedHashMapSerializer");_(we,"PrimitiveArraySerializer");_(Mn,"PrimitiveArrayBuilder");nn(Ym);_(Zm,"ElementMarker");Rr(Ui).ko=Pa;Rr(Ui).lo=Ba;_(Ui,"PluginGeneratedSerialDescriptor",o,o,[ye,Hs]);_(au,"InlineClassDescriptor");Lr(Vm,"GeneratedSerializer",o,o,[vr]);Rr(Dc).cw=kz;_(Dc,o,o,o,[Vm]);U(Xm,"NoOpEncoder");Rr(Ws).ko=Pa;Rr(Ws).lo=Ba;Rr(Ws).no=Js;U(Ws,"NothingSerialDescriptor",o,o,[ye]);_(Qm,"SerialDescriptorForNullable",o,o,[ye,Hs]);_(r0,"ObjectSerializer",o,o,[vr]);U(n0,"CharArraySerializer",o,o,[vr]);U(e0,"DoubleArraySerializer",o,o,[vr]);U(t0,"FloatArraySerializer",o,o,[vr]);U(a0,"LongArraySerializer",o,o,[vr]);U(i0,"ULongArraySerializer",o,o,[vr]);U(s0,"IntArraySerializer",o,o,[vr]);U(o0,"UIntArraySerializer",o,o,[vr]);U(l0,"ShortArraySerializer",o,o,[vr]);U(u0,"UShortArraySerializer",o,o,[vr]);U(f0,"ByteArraySerializer",o,o,[vr]);U(c0,"UByteArraySerializer",o,o,[vr]);U(v0,"BooleanArraySerializer",o,o,[vr]);_(Xt,"CharArrayBuilder");_(Qt,"DoubleArrayBuilder");_(ra,"FloatArrayBuilder");_(na,"LongArrayBuilder");_(ea,"ULongArrayBuilder");_(ta,"IntArrayBuilder");_(aa,"UIntArrayBuilder");_(ia,"ShortArrayBuilder");_(sa,"UShortArrayBuilder");_(oa,"ByteArrayBuilder");_(la,"UByteArrayBuilder");_(ua,"BooleanArrayBuilder");U(h0,"StringSerializer",o,o,[vr]);Rr(In).ko=Pa;Rr(In).lo=Ba;Rr(In).no=Js;_(In,"PrimitiveSerialDescriptor",o,o,[ye]);U(d0,"IntSerializer",o,o,[vr]);U(p0,"LongSerializer",o,o,[vr]);U(_0,"ByteSerializer",o,o,[vr]);U(g0,"ShortSerializer",o,o,[vr]);U(m0,"CharSerializer",o,o,[vr]);U(y0,"DoubleSerializer",o,o,[vr]);U(w0,"FloatSerializer",o,o,[vr]);U(b0,"BooleanSerializer",o,o,[vr]);U(k0,"UnitSerializer",o,o,[vr]);Rr(Di).uq=Um;Rr(Di).hq=Pm;Rr(Di).wq=Bm;Rr(Di).yq=Nm;_(Di,"TaggedDecoder",o,o,[eu,tu]);_(x0,"NamedValueDecoder");U(S0,"UIntSerializer",o,o,[vr]);U(E0,"ULongSerializer",o,o,[vr]);U(z0,"UByteSerializer",o,o,[vr]);U(I0,"UShortSerializer",o,o,[vr]);_(C0,"SerializersModule");_(q0,"SerialModuleImpl");_(Rc,"ContextualProvider");_(A0,"Argless");_(T0,"WithTypeArguments");Lr(j0,"SerializersModuleCollector");_(Sz,"SerializableWith",o,o,o,o,0);var Vs=Math.imul;class Zc{constructor(r,e){Ce(),this.n15_1=r,this.o15_1=e,this.p15_1=new gf}vq(){return this.o15_1}q15(r,e){var t=new yf;try{return JC(this,t,r,e),t.toString()}finally{t.u15()}}r15(r,e){var t=mv(this,e),a=new Cs(this,_u(),t,r.jn(),null),i=a.hq(r);return t.i16(),i}s15(r){return this.r15(dt(),r)}}class V0 extends Zc{constructor(){pl=null,super(new Vc,uu()),pl=this}}class X0{constructor(r){this.j16_1=r.n15_1.e17_1,this.k16_1=r.n15_1.j17_1,this.l16_1=r.n15_1.f17_1,this.m16_1=r.n15_1.g17_1,this.n16_1=r.n15_1.i17_1,this.o16_1=r.n15_1.k17_1,this.p16_1=r.n15_1.l17_1,this.q16_1=r.n15_1.n17_1,this.r16_1=r.n15_1.u17_1,this.s16_1=r.n15_1.p17_1,this.t16_1=r.n15_1.q17_1,this.u16_1=r.n15_1.r17_1,this.v16_1=r.n15_1.s17_1,this.w16_1=r.n15_1.t17_1,this.x16_1=r.n15_1.o17_1,this.y16_1=r.n15_1.h17_1,this.z16_1=r.n15_1.m17_1,this.a17_1=r.vq(),this.b17_1=r.n15_1.v17_1,this.c17_1=r.n15_1.w17_1}d17(){if(this.z16_1){if(this.q16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw N.v(w(r))}if(!this.r16_1.equals(qy())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw N.v(w(e))}}if(this.n16_1){if(this.o16_1!=="    "){var a=this.o16_1,i;r:{for(var s=0;s<q(a);){var l=rr(a,s);if(s=s+1|0,!(l===32||l===9||l===13||l===10)){i=!1;break r}}i=!0}var u=i;if(!u){var f="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.o16_1;throw N.v(w(f))}}}else if(this.o16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw N.v(w(t))}return new Vc(this.j16_1,this.l16_1,this.m16_1,this.y16_1,this.n16_1,this.k16_1,this.o16_1,this.p16_1,this.z16_1,this.q16_1,this.x16_1,this.s16_1,this.t16_1,this.u16_1,this.v16_1,this.w16_1,this.r16_1,this.b17_1,this.c17_1)}}class Q0 extends Zc{constructor(r,e){super(r,e),hC(this)}}class ry{}class ny{}class ey{}class Vc{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g,y,x,k,S){r=r===o?!1:r,e=e===o?!1:e,t=t===o?!1:t,a=a===o?!1:a,i=i===o?!1:i,s=s===o?!0:s,l=l===o?"    ":l,u=u===o?!1:u,f=f===o?!1:f,c=c===o?"type":c,v=v===o?!1:v,h=h===o?!0:h,d=d===o?null:d,p=p===o?!1:p,g=g===o?!1:g,y=y===o?!1:y,x=x===o?qy():x,k=k===o?!0:k,S=S===o?400:S,this.e17_1=r,this.f17_1=e,this.g17_1=t,this.h17_1=a,this.i17_1=i,this.j17_1=s,this.k17_1=l,this.l17_1=u,this.m17_1=f,this.n17_1=c,this.o17_1=v,this.p17_1=h,this.q17_1=d,this.r17_1=p,this.s17_1=g,this.t17_1=y,this.u17_1=x,this.v17_1=k,this.w17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.e17_1+", ignoreUnknownKeys="+this.f17_1+", isLenient="+this.g17_1+", "+("allowStructuredMapKeys="+this.h17_1+", prettyPrint="+this.i17_1+", explicitNulls="+this.j17_1+", ")+("prettyPrintIndent='"+this.k17_1+"', coerceInputValues="+this.l17_1+", useArrayPolymorphism="+this.m17_1+", ")+("classDiscriminator='"+this.n17_1+"', allowSpecialFloatingPointValues="+this.o17_1+", ")+("useAlternativeNames="+this.p17_1+", namingStrategy="+_e(this.q17_1)+", decodeEnumsCaseInsensitive="+this.r17_1+", ")+("allowTrailingComma="+this.s17_1+", allowComments="+this.t17_1+", classDiscriminatorMode="+this.u17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.v17_1+", maxNestingDepth="+this.w17_1+")")}}class ko extends ve{}class fu{}class ty{z17(){return dt()}}class et{}class fC{}class hr extends et{toString(){return this.c18()}a18(r){r.fa(this.c18())}}class cC{}class dn extends et{constructor(r){super(),this.d18_1=r}equals(r){return D(this.d18_1,r)}hashCode(){return wr(this.d18_1)}toString(){var r=Vs(this.d18_1.c1()+1|0,2),e=rn.ja(r);return this.a18(e),e.toString()}a18(r){r.ga(91);for(var e=!0,t=this.d18_1.x();t.y();){var a=t.z();e||r.ga(44),e=!1,a.a18(r)}r.ga(93)}d1(){return this.d18_1.d1()}e18(r){return this.d18_1.l1(r)}l1(r){return r instanceof et?this.e18(r instanceof et?r:m()):!1}x(){return this.d18_1.x()}e1(r){return this.d18_1.e1(r)}f18(r){return this.d18_1.n1(r)}n1(r){return r instanceof et?this.f18(r instanceof et?r:m()):-1}m1(r){return this.d18_1.m1(r)}c1(){return this.d18_1.c1()}}class ay{z17(){return vu()}}class er extends et{constructor(r){super(),this.g18_1=r}equals(r){return D(this.g18_1,r)}hashCode(){return wr(this.g18_1)}toString(){var r=Vs(this.g18_1.c1(),6),e=rn.ja(r);return this.a18(e),e.toString()}a18(r){r.ga(123);for(var e=!0,t=this.g18_1.r2().x();t.y();){var a=t.z(),i=a.k2(),s=a.l2();e||r.ga(44),e=!1,kl(r,i),r.ga(58),s.a18(r)}r.ga(125)}d1(){return this.g18_1.d1()}h18(r){return this.g18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.h18(r!=null&&typeof r=="string"?r:m()):!1}i18(r){return this.g18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.i18(r!=null&&typeof r=="string"?r:m()):null}c1(){return this.g18_1.c1()}p2(){return this.g18_1.p2()}q2(){return this.g18_1.q2()}r2(){return this.g18_1.r2()}}class ge extends hr{constructor(){_l=null,super(),_l=this,this.j18_1="null"}b18(){return!1}c18(){return this.j18_1}}class ht extends hr{constructor(r,e,t){if(t=t===o?null:t,super(),this.k18_1=e,this.l18_1=t,this.m18_1=w(r),this.l18_1!=null&&!this.l18_1.lo()){var a="Failed requirement.";throw N.v(w(a))}}b18(){return this.k18_1}c18(){return this.m18_1}toString(){var r;if(this.k18_1){var e=this.m18_1.length+2|0,t=rn.ja(e);kl(t,this.m18_1),r=t.toString()}else r=this.m18_1;return r}a18(r){this.k18_1?kl(r,this.m18_1):r.fa(this.m18_1)}equals(r){return this===r?!0:!(r==null||!Ur(this).equals(Ur(r))||(r instanceof ht||m(),this.k18_1!==r.k18_1)||this.m18_1!==r.m18_1)}hashCode(){var r=vc(this.k18_1);return r=Vs(31,r)+he(this.m18_1)|0,r}}class It{constructor(){var r=this;r.o18_1=cr.t4()}p18(r,e){return this.o18_1.s2(r,e)}d17(){return new er(this.o18_1)}}class iy{constructor(){var r=this;r.q18_1=A.m()}r18(r){return this.q18_1.n(r),!0}d17(){return new dn(this.q18_1)}}class sy{constructor(){bf=this;var r=this,e=tI();r.x18_1=su("kotlinx.serialization.json.JsonElement",e,[],wC)}jn(){return this.x18_1}y18(r,e){Mi(r),e instanceof hr?r.xr(lv(),e):e instanceof er?r.xr(vu(),e):e instanceof dn?r.xr(uv(),e):Bs()}kn(r,e){return this.y18(r,e instanceof et?e:m())}ln(r){var e=hu(r);return e.y17()}}class oy{constructor(){kf=this,this.s18_1=su("kotlinx.serialization.json.JsonPrimitive",Ri(),[])}jn(){return this.s18_1}z18(r,e){Mi(r);var t;if(e instanceof ge)r.xr(fv(),no()),t=lr;else{var a=Ty();r.xr(a,e instanceof ht?e:m()),t=lr}return t}kn(r,e){return this.z18(r,e instanceof hr?e:m())}ln(r){var e=hu(r),t=e.y17();if(!(t instanceof hr)){var a="Unexpected JSON element, expected JsonPrimitive, had "+w(Ur(t)),i;if(e.x17().n15_1.v17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Br.m19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class ly{constructor(){xf=this,this.n19_1=H1(dt()).jn(),this.o19_1="kotlinx.serialization.json.JsonArray"}io(){return this.o19_1}oo(r){return this.n19_1.oo(r)}po(r){return this.n19_1.po(r)}qo(r){return this.n19_1.qo(r)}ro(r){return this.n19_1.ro(r)}so(r){return this.n19_1.so(r)}jo(){return this.n19_1.jo()}ko(){return this.n19_1.ko()}lo(){return this.n19_1.lo()}mo(){return this.n19_1.mo()}no(){return this.n19_1.no()}}class uy{constructor(){Sf=this,this.w18_1=zC()}jn(){return this.w18_1}p19(r,e){Mi(r),H1(dt()).kn(r,e)}kn(r,e){return this.p19(r,e instanceof dn?e:m())}ln(r){return cv(r),new dn(H1(dt()).ln(r))}}class fy{constructor(){Ef=this,this.q19_1=G1(Is(),dt()).jn(),this.r19_1="kotlinx.serialization.json.JsonObject"}io(){return this.r19_1}oo(r){return this.q19_1.oo(r)}po(r){return this.q19_1.po(r)}qo(r){return this.q19_1.qo(r)}ro(r){return this.q19_1.ro(r)}so(r){return this.q19_1.so(r)}jo(){return this.q19_1.jo()}ko(){return this.q19_1.ko()}lo(){return this.q19_1.lo()}mo(){return this.q19_1.mo()}no(){return this.q19_1.no()}}class cy{constructor(){zf=this,this.v18_1=IC()}jn(){return this.v18_1}s19(r,e){Mi(r),G1(Is(),dt()).kn(r,e)}kn(r,e){return this.s19(r,e instanceof er?e:m())}ln(r){return cv(r),new er(G1(Is(),dt()).ln(r))}}class vy{constructor(){If=this,this.t18_1=su("kotlinx.serialization.json.JsonNull",Da(),[])}jn(){return this.t18_1}t19(r,e){Mi(r),r.cr()}kn(r,e){return this.t19(r,e instanceof ge?e:m())}ln(r){if(cv(r),r.up())throw vv("Expected 'null' literal");return r.vp(),no()}}class hy{constructor(){Cf=this,this.u18_1=Kz("kotlinx.serialization.json.JsonLiteral",Ri())}jn(){return this.u18_1}u19(r,e){if(Mi(r),e.k18_1)return r.lr(e.m18_1);if(e.l18_1!=null)return r.mr(e.l18_1).lr(e.m18_1);var t=mS(e.m18_1);if(t!=null)return r.hr(t);var a=dm(e.m18_1),i=a;if((i==null?null:new ie(i))!=null){var s=a,l=(s==null?null:new ie(s)).rm_1,u=r.mr(iu($s()).jn()),f=l;return u.hr(f),lr}var c=bc(e.m18_1);if(c!=null)return r.jr(c);var v=qS(e.m18_1);if(v!=null)return r.dr(v);r.lr(e.m18_1)}kn(r,e){return this.u19(r,e instanceof ht?e:m())}ln(r){var e=hu(r),t=e.y17();if(!(t instanceof ht)){var a="Unexpected JSON element, expected JsonLiteral, had "+w(Ur(t)),i;if(e.x17().n15_1.v17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Br.m19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class Xs{constructor(r){this.v19_1=tg(r)}io(){return Ve(this).io()}jo(){return Ve(this).jo()}mo(){return Ve(this).mo()}oo(r){return Ve(this).oo(r)}po(r){return Ve(this).po(r)}qo(r){return Ve(this).qo(r)}ro(r){return Ve(this).ro(r)}so(r){return Ve(this).so(r)}}class Xc{}class Qc extends Hn{static c1a(r){var e=this.un(r);return vn(e,e.b1a_1),e.a1a_1=r,delete e.message,e}ob(){return this.a1a_1}get message(){return this.ob()}}class Br extends Qc{constructor(r,e,t,a,i,s){return new.target.m19(r,e,t,a,i,s)}static m19(r,e,t,a,i,s){var l=this.c1a(r);return vn(l,l.l19_1),l.g19_1=e,l.h19_1=t,l.i19_1=a,l.j19_1=i,l.k19_1=s,l}}class Qs extends Qc{constructor(r,e,t){return new.target.n1a(r,e,t)}static n1a(r,e,t){e=e===o?null:e,t=t===o?null:t;var a=this.c1a(PC(r,t));return vn(a,a.m1a_1),a.j1a_1=r,a.k1a_1=e,a.l1a_1=t,a}}class ro{constructor(r){this.o1a_1=r,this.p1a_1=!0}q1a(){this.p1a_1=!0}r1a(){return lr}s1a(){this.p1a_1=!1}t1a(){this.p1a_1=!1}u1a(){return lr}v1a(r){return this.o1a_1.w1a(r)}x1a(r){return this.o1a_1.y1a(r)}z1a(r){return this.o1a_1.y1a(r.toString())}a1b(r){return this.o1a_1.y1a(r.toString())}b1b(r){return this.o1a_1.c1b(M(r))}d1b(r){return this.o1a_1.c1b(M(r))}e1b(r){return this.o1a_1.c1b(M(r))}f1b(r){return this.o1a_1.c1b(r)}g1b(r){return this.o1a_1.y1a(r.toString())}h1b(r){return this.o1a_1.i1b(r)}}class pf extends ro{constructor(r,e){super(r),this.l1b_1=e}e1b(r){if(this.l1b_1){var e=r;this.h1b(R1(e))}else{var t=r;this.x1a(R1(t))}}f1b(r){if(this.l1b_1){var e=r;this.h1b(M1(e))}else{var t=r;this.x1a(M1(t))}}b1b(r){if(this.l1b_1){var e=r;this.h1b(U1(e))}else{var t=r;this.x1a(U1(t))}}d1b(r){if(this.l1b_1){var e=r;this.h1b($1(e))}else{var t=r;this.x1a($1(t))}}}class _f extends ro{constructor(r,e){super(r),this.o1b_1=e}h1b(r){this.o1b_1?super.h1b(r):super.x1a(r)}}class dy extends ro{constructor(r,e){super(r),this.r1b_1=e,this.s1b_1=0}q1a(){this.p1a_1=!0,this.s1b_1=this.s1b_1+1|0}r1a(){this.s1b_1=this.s1b_1-1|0}s1a(){this.p1a_1=!1,this.x1a(`
`);var r=this.s1b_1,e=0;if(e<r)do e=e+1|0,this.x1a(this.r1b_1.n15_1.k17_1);while(e<r)}t1a(){this.p1a_1?this.p1a_1=!1:this.s1a()}u1a(){this.v1a(32)}}class rv{constructor(r){var e=this;e.t1b_1=new Zm(r,jC(this)),this.u1b_1=!1}v1b(r){this.t1b_1.yu(r)}w1b(){return this.t1b_1.zu()}}class py{}class _y{}class gy{constructor(r){this.d1c_1=r.w17_1,this.e1c_1=r.v17_1;var e=this;e.f1c_1=Array(8);for(var t=this,a=0,i=new Int32Array(8);a<8;)i[a]=-1,a=a+1|0;t.g1c_1=i,this.h1c_1=-1}i1c(r){this.h1c_1=this.h1c_1+1|0;var e=this.h1c_1;e>=this.d1c_1&&qs(this.d1c_1),e===this.f1c_1.length&&Qh(this),this.f1c_1[e]=r}j1c(r){this.g1c_1[this.h1c_1]=r}k1c(r){var e;this.g1c_1[this.h1c_1]!==-2?(this.h1c_1=this.h1c_1+1|0,e=this.h1c_1===this.f1c_1.length):e=!1,e&&Qh(this),this.f1c_1[this.h1c_1]=this.e1c_1?r:Af,this.g1c_1[this.h1c_1]=-2}l1c(){this.g1c_1[this.h1c_1]===-2&&(this.f1c_1[this.h1c_1]=qf)}m1c(){var r=this.h1c_1;this.g1c_1[r]===-2&&(this.g1c_1[r]=-1,this.h1c_1=this.h1c_1-1|0),this.h1c_1!==-1&&(this.h1c_1=this.h1c_1-1|0)}n1c(){var r=rn.f();r.fa("$");var e=this.h1c_1+1|0,t=0;if(t<e)do{var a=t;t=t+1|0;var i=this.f1c_1[a];if(i!=null&&E(i,ye))if(D(i.jo(),Ys()))this.g1c_1[a]!==-1&&(r.fa("["),r.ge(this.g1c_1[a]),r.fa("]"));else{var s=this.g1c_1[a];s>=0&&(r.fa("."),r.fa(i.oo(s)))}else i===Af?r.fa("[<debug info disabled>]"):i!==qf&&(r.fa("["),r.fa("'"),r.ea(i),r.fa("'"),r.fa("]"))}while(t<e);return r.toString()}toString(){return this.n1c()}}class nv{constructor(r){this.o1c_1=r.m17_1,this.p1c_1=!r.u17_1.equals(Cy())}h15(r,e){}k15(r,e,t){var a=t.jn();$C(this,a,e)}l15(r,e){}m15(r,e){}}class my{constructor(r,e){this.a1d_1=e,this.b1d_1=r.g17_1,this.c1d_1=r.s17_1,this.d1d_1=r.w17_1,this.e1d_1=this.a1d_1.f16_1.h1c_1}k1d(){var r=this.a1d_1.g1d(),e;if(r===1)e=ml(this,!0);else if(r===0)e=ml(this,!1);else if(r===6){this.e1d_1=this.e1d_1+1|0,this.e1d_1>=this.d1d_1&&qs(this.d1d_1);var t;this.e1d_1===200?(this.e1d_1=this.e1d_1-1|0,t=KC(this)):(t=HC(this),this.e1d_1=this.e1d_1-1|0),e=t}else if(r===8){this.e1d_1=this.e1d_1+1|0,this.e1d_1>=this.d1d_1&&qs(this.d1d_1);var a=Uy(this);this.e1d_1=this.e1d_1-1|0,e=a}else this.a1d_1.y1b("Cannot read Json element because of unexpected "+xl(r));return e}}class ss extends ve{constructor(r,e,t,a){super(r,e),this.o1d_1=t,this.p1d_1=a}}class wi{}class gf{constructor(){this.z1b_1=id(16)}r1d(r,e,t){var a=this.z1b_1,i=a.o2(r),s;if(i==null){var l=id(2);a.s2(r,l),s=l}else s=i;var u=s,f=e instanceof wi?e:m(),c=t??m();u.s2(f,c)}a1c(r,e,t){var a=this.s1d(r,e);if(a!=null)return a;var i=t();return this.r1d(r,e,i),i}s1d(r,e){var t=this.z1b_1.o2(r),a;t==null?a=null:a=t.o2(e instanceof wi?e:m());var i=a;return i??null}}class yy{constructor(r){this.t1d_1=r}}class Cs extends Na{constructor(r,e,t,a,i){super(),this.v15_1=r,this.w15_1=e,this.x15_1=t,this.y15_1=this.v15_1.vq(),this.z15_1=-1,this.a16_1=i,this.b16_1=this.v15_1.n15_1,this.c16_1=this.b16_1.j17_1?null:new rv(a)}x17(){return this.v15_1}vq(){return this.y15_1}y17(){return new my(this.v15_1.n15_1,this.x15_1).k1d()}hq(r){try{var e;if(r instanceof yi?e=this.v15_1.n15_1.m17_1:e=!0,e)return r.ln(this);var t=bl(r.jn(),this.v15_1),a=this.x15_1.c1e(t,this.b16_1.g17_1),i;if(a==null){var s=E(r,ui)?r:m(),l;r:{var u;if(s instanceof yi?u=this.x17().n15_1.m17_1:u=!0,u){l=s.ln(this);break r}var f=bl(s.jn(),this.x17()),c=this.y17(),v=s.jn().io();if(!(c instanceof er)){var h="Expected "+Nr(er).uc()+", but had "+Ur(c).uc()+" as the serialized body of "+v,d=this.x15_1.f16_1.n1c(),p;if(this.x17().n15_1.v17_1){var g=w(c);p=w(Jr(g))}else p=null;var y=p;throw Br.m19(Kr(-1,h,d,null,y),h,-1,d,y,null)}var x=c,k=x.i18(f),S=k==null?null:On(k),z=S==null?null:Jn(S),I;try{I=J1(s,this,z)}catch(X){var C;if(X instanceof Hn){var T=X,O=fn(T.message),F;if(this.x17().n15_1.v17_1){var P=x.toString();F=w(Jr(P))}else F=null;var B=F;throw Br.m19(Kr(-1,O,null,null,B),O,-1,null,B,null)}else throw X}var J=I,L=E(J,ui)?J:m();l=Gy(this.x17(),f,x,L)}return l}else i=a;var $=i,R;try{R=J1(r,this,$)}catch(X){var V;if(X instanceof Hn){var G=X,nr=va(Og(fn(G.message),10),"."),K=AS(fn(G.message),10,"");this.x15_1.y1b(nr,o,K)}else throw X;R=V}var tr=R,Q=E(tr,ui)?tr:m();return this.a16_1=new yy(t),Q.ln(this)}catch(X){if(X instanceof ru){var or=X;throw zs(fn(or.message),"at path")?or:vI(or,Ek(or.message," at path: ")+this.x15_1.f16_1.n1c())}else throw X}}iq(r){var e=Fy(this.v15_1,r);this.x15_1.f16_1.i1c(r),this.x15_1.u1d(e.o1d_1),eq(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new Cs(this.v15_1,e,this.x15_1,r,this.a16_1);break;default:var a;this.w15_1.equals(e)&&this.v15_1.n15_1.j17_1?a=this:a=new Cs(this.v15_1,e,this.x15_1,r,this.a16_1),t=a;break}return t}jq(r){r.mo()===0&&pv(r,this.v15_1)&&nq(this,r),this.x15_1.v1d()&&!this.v15_1.n15_1.s17_1&&Ra(this.x15_1,""),this.x15_1.u1d(this.w15_1.p1d_1),this.x15_1.f16_1.m1c()}up(){var r,e=this.c16_1,t=e==null?null:e.u1b_1;return t??!1?r=!1:r=!this.x15_1.d1e(),r}vp(){return null}tq(r,e,t,a){var i=this.w15_1.equals(wl())&&(e&1)===0;i&&this.x15_1.f16_1.l1c();var s=super.tq(r,e,t,a);return i&&this.x15_1.f16_1.k1c(s),s}xq(r){var e;switch(this.w15_1.x2_1){case 0:e=iq(this,r);break;case 2:e=tq(this);break;default:e=oq(this);break}return this.w15_1.equals(wl())||this.x15_1.f16_1.j1c(e),e}wp(){return this.x15_1.e1e()}xp(){var r=this.x15_1.f1e();return ir(r,M(o1(r)))||this.x15_1.y1b("Failed to parse byte for input '"+r.toString()+"'"),o1(r)}yp(){var r=this.x15_1.f1e();return ir(r,M(l1(r)))||this.x15_1.y1b("Failed to parse short for input '"+r.toString()+"'"),l1(r)}zp(){var r=this.x15_1.f1e();return ir(r,M(Qr(r)))||this.x15_1.y1b("Failed to parse int for input '"+r.toString()+"'"),Qr(r)}aq(){return this.x15_1.f1e()}bq(){var r=this.x15_1,e;r:{var t=r.j1d();try{e=Po(t);break r}catch(s){if(s instanceof N)r.y1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var a=e,i=this.v15_1.n15_1.o17_1;if(i||gc(a))return a;Wh(this.x15_1,a)}cq(){var r=this.x15_1,e;r:{var t=r.j1d();try{e=Po(t);break r}catch(s){if(s instanceof N)r.y1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var a=e,i=this.v15_1.n15_1.o17_1;if(i||mc(a))return a;Wh(this.x15_1,a)}dq(){var r=this.x15_1.j1d();return r.length!==1&&this.x15_1.y1b("Expected single char, but got '"+r+"'"),W(r,0)}eq(){var r;return this.b16_1.g17_1?r=this.x15_1.b1e():r=this.x15_1.i1d(),r}fq(r){return _v(r)?new ev(this.x15_1,this.v15_1):super.fq(r)}}class ev extends Na{constructor(r,e){super(),this.g1e_1=r,this.h1e_1=e.vq()}vq(){return this.h1e_1}xq(r){var e="unsupported";throw mr.o3(w(e))}zp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var a=fz(t);e=a;break r}catch(i){if(i instanceof N)r.y1b("Failed to parse type 'UInt' for input '"+t+"'");else throw i}}return e}aq(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var a=cz(t);e=a;break r}catch(i){if(i instanceof N)r.y1b("Failed to parse type 'ULong' for input '"+t+"'");else throw i}}return e}xp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var a=vz(t);e=a;break r}catch(i){if(i instanceof N)r.y1b("Failed to parse type 'UByte' for input '"+t+"'");else throw i}}return e}yp(){var r=this.g1e_1,e;r:{var t=r.j1d();try{var a=hz(t);e=a;break r}catch(i){if(i instanceof N)r.y1b("Failed to parse type 'UShort' for input '"+t+"'");else throw i}}return e}}class ci extends Ks{constructor(r,e,t,a){return new.target.i1e(r,e,t,a)}static i1e(r,e,t,a){var i=this.zq();i.q1c_1=r,i.r1c_1=e,i.s1c_1=t,i.t1c_1=a,i.u1c_1=i.r1c_1.vq(),i.v1c_1=i.r1c_1.n15_1,i.w1c_1=!1,i.x1c_1=null,i.y1c_1=null;var s=i.s1c_1.x2_1;return i.t1c_1!=null&&(i.t1c_1[s]!==null||i.t1c_1[s]!==i)&&(i.t1c_1[s]=i),i}x17(){return this.r1c_1}static z1c(r,e,t,a){return this.i1e(AC(r,e),e,t,a)}vq(){return this.u1c_1}xr(r,e){r:{if(this.x17().n15_1.m17_1){r.kn(this,e);break r}var t=r instanceof yi,a;if(t)a=!this.x17().n15_1.u17_1.equals(Cy());else{var i;switch(this.x17().n15_1.u17_1.x2_1){case 0:case 2:i=!1;break;case 1:var s=r.jn().jo();i=D(s,ou())||D(s,Kc());break;default:Bs();break}a=i}var l=a,u=l?bl(r.jn(),this.x17()):null,f;if(t){var c=r instanceof yi?r:m();n:if(e==null){var v="Value for serializer "+w(r.jn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw N.v(w(v))}else break n;var h=Ez(c,this,e);f=E(h,Ql)?h:m()}else f=r;var d=f;if(u!=null){VC(this.x17(),r,d,u),XC(d.jn().jo());var p=d.jn().io();this.x1c_1=u,this.y1c_1=p}d.kn(this,e)}}iq(r){var e=Fy(this.r1c_1,r);e.o1d_1!==0&&(this.q1c_1.v1a(e.o1d_1),this.q1c_1.q1a());var t=this.x1c_1;if(t!=null){var a=this.y1c_1;fq(this,t,a??r.io()),this.x1c_1=null,this.y1c_1=null}if(this.s1c_1.equals(e))return this;var i=this.t1c_1,s=i==null?null:i[e.x2_1];return s??ci.i1e(this.q1c_1,this.r1c_1,e,this.t1c_1)}jq(r){this.s1c_1.p1d_1!==0&&(this.q1c_1.r1a(),this.q1c_1.t1a(),this.q1c_1.v1a(this.s1c_1.p1d_1))}ar(r,e){switch(this.s1c_1.x2_1){case 1:this.q1c_1.p1a_1||this.q1c_1.v1a(44),this.q1c_1.s1a();break;case 2:if(this.q1c_1.p1a_1)this.w1c_1=!0,this.q1c_1.s1a();else{var t=this,a;e%2|0?(this.q1c_1.v1a(58),this.q1c_1.u1a(),a=!1):(this.q1c_1.v1a(44),this.q1c_1.s1a(),a=!0),t.w1c_1=a}break;case 3:e===0&&(this.w1c_1=!0),e===1&&(this.q1c_1.v1a(44),this.q1c_1.u1a(),this.w1c_1=!1);break;default:this.q1c_1.p1a_1||this.q1c_1.v1a(44),this.q1c_1.s1a(),this.lr(UC(r,this.r1c_1,e)),this.q1c_1.v1a(58),this.q1c_1.u1a();break}return!0}mr(r){var e;if(_v(r)){var t,a=this.q1c_1;if(a instanceof pf)t=this.q1c_1;else{var i=this.q1c_1.o1a_1,s=this.w1c_1;t=new pf(i,s)}var l=t;e=ci.i1e(l,this.r1c_1,this.s1c_1,null)}else if(cq(r)){var u,f=this.q1c_1;if(f instanceof _f)u=this.q1c_1;else{var c=this.q1c_1.o1a_1,v=this.w1c_1;u=new _f(c,v)}var h=u;e=ci.i1e(h,this.r1c_1,this.s1c_1,null)}else this.x1c_1!=null?(this.y1c_1=r.io(),e=this):e=super.mr(r);return e}cr(){this.q1c_1.x1a("null")}dr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.g1b(r)}er(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.b1b(r)}fr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.d1b(r)}gr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.e1b(r)}hr(r){this.w1c_1?this.lr(r.toString()):this.q1c_1.f1b(r)}ir(r){if(this.w1c_1?this.lr(r.toString()):this.q1c_1.z1a(r),!this.v1c_1.o17_1&&!gc(r))throw Yh(r)}jr(r){if(this.w1c_1?this.lr(r.toString()):this.q1c_1.a1b(r),!this.v1c_1.o17_1&&!mc(r))throw Yh(r)}kr(r){this.lr(kr(r))}lr(r){return this.q1c_1.h1b(r)}}class cu extends x0{constructor(r,e,t){t=t===o?null:t,super(),this.l1e_1=r,this.m1e_1=e,this.n1e_1=t,this.o1e_1=this.x17().n15_1}x17(){return this.l1e_1}l2(){return this.m1e_1}vq(){return this.x17().vq()}q1e(){var r=this.u13(),e;r==null?e=null:e=this.r1e(r);var t=e;return t??this.l2()}p1e(r){return this.w13()+("."+r)}y17(){return this.q1e()}hq(r){var e;r:{var t;if(r instanceof yi?t=this.x17().n15_1.m17_1:t=!0,t){e=r.ln(this);break r}var a=bl(r.jn(),this.x17()),i=this.y17(),s=r.jn().io();if(!(i instanceof er)){var l="Expected "+Nr(er).uc()+", but had "+Ur(i).uc()+" as the serialized body of "+s,u=this.w13(),f;if(this.x17().n15_1.v17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Br.m19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=i,d=h.i18(a),p=d==null?null:On(d),g=p==null?null:Jn(p),y;try{y=J1(r,this,g)}catch(O){if(O instanceof Hn){var x=O,k=fn(x.message),S;if(this.x17().n15_1.v17_1){var z=h.toString();S=w(Jr(z))}else S=null;var I=S;throw Br.m19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw O}var C=y,T=E(C,ui)?C:m();e=Gy(this.x17(),a,h,T)}return e}v13(r,e){return e}iq(r){var e=this.q1e(),t=r.jo(),a,i;if(D(t,Ys())?i=!0:i=t instanceof Ni,i){var s=this.x17(),l=r.io();if(!(e instanceof dn)){var u="Expected "+Nr(dn).uc()+", but had "+Ur(e).uc()+" as the serialized body of "+l,f=this.w13(),c;if(this.x17().n15_1.v17_1){var v=w(e);c=w(Jr(v))}else c=null;var h=c;throw Br.m19(Kr(-1,u,f,null,h),u,-1,f,h,null)}a=new mf(s,e)}else if(D(t,lu())){var d=this.x17(),p=yl(r.ro(0),d.vq()),g=p.jo(),y,x;if(g instanceof Wn?x=!0:x=D(g,Da()),x){var k=this.x17(),S=r.io();if(!(e instanceof er)){var z="Expected "+Nr(er).uc()+", but had "+Ur(e).uc()+" as the serialized body of "+S,I=this.w13(),C;if(this.x17().n15_1.v17_1){var T=w(e);C=w(Jr(T))}else C=null;var O=C;throw Br.m19(Kr(-1,z,I,null,O),z,-1,I,O,null)}y=new by(k,e,r)}else if(d.n15_1.h17_1){var F=this.x17(),P=r.io();if(!(e instanceof dn)){var B="Expected "+Nr(dn).uc()+", but had "+Ur(e).uc()+" as the serialized body of "+P,J=this.w13(),L;if(this.x17().n15_1.v17_1){var $=w(e);L=w(Jr($))}else L=null;var R=L;throw Br.m19(Kr(-1,B,J,null,R),B,-1,J,R,null)}y=new mf(F,e)}else throw jy(p);a=y}else{var V=this.x17(),G=r.io();if(!(e instanceof er)){var nr="Expected "+Nr(er).uc()+", but had "+Ur(e).uc()+" as the serialized body of "+G,K=this.w13(),tr;if(this.x17().n15_1.v17_1){var Q=w(e);tr=w(Jr(Q))}else tr=null;var or=tr;throw Br.m19(Kr(-1,nr,K,null,or),nr,-1,K,or,null)}a=new Li(V,e,r,this.n1e_1)}return a}jq(r){}up(){var r=this.q1e();return!(r instanceof ge)}s1e(r){return this.r1e(r)!==no()}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:m())}t1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of boolean",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=sv(f),v;c==null?Un(this,f,"boolean",r):v=c,e=v;break r}catch(h){if(h instanceof N)Un(this,f,"boolean",r);else throw h}}return e}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:m())}u1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of byte",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=ei(f),v,h=$e(-128,127);po(E(h,ai)?h:m(),c)?v=o1(c):v=null;var d=v,p;d==null?Un(this,f,"byte",r):p=d,e=p;break r}catch(g){if(g instanceof N)Un(this,f,"byte",r);else throw g}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:m())}v1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of short",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=ei(f),v,h=$e(-32768,32767);po(E(h,ai)?h:m(),c)?v=l1(c):v=null;var d=v,p;d==null?Un(this,f,"short",r):p=d,e=p;break r}catch(g){if(g instanceof N)Un(this,f,"short",r);else throw g}}return e}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:m())}w1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of int",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=ei(f),v,h=$e(-2147483648,2147483647);po(E(h,ai)?h:m(),c)?v=Qr(c):v=null;var d=v,p;d==null?Un(this,f,"int",r):p=d,e=p;break r}catch(g){if(g instanceof N)Un(this,f,"int",r);else throw g}}return e}c14(r){return this.w1e(r!=null&&typeof r=="string"?r:m())}x1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of long",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=ei(f),v;c==null?Un(this,f,"long",r):v=c,e=v;break r}catch(h){if(h instanceof N)Un(this,f,"long",r);else throw h}}return e}d14(r){return this.x1e(r!=null&&typeof r=="string"?r:m())}y1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of float",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=mC(f),v;c==null?Un(this,f,"float",r):v=c,e=v;break r}catch(S){if(S instanceof N)Un(this,f,"float",r);else throw S}}var h=e,d=this.x17().n15_1.o17_1;if(d||gc(h))return h;var p=Zh(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.x17().n15_1.v17_1){var x=w(this.q1e());y=w(Jr(x))}else y=null;var k=y;throw Br.m19(Kr(-1,p,null,g,k),p,-1,null,k,g)}e14(r){return this.y1e(r!=null&&typeof r=="string"?r:m())}z1e(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of double",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=yC(f),v;c==null?Un(this,f,"double",r):v=c,e=v;break r}catch(S){if(S instanceof N)Un(this,f,"double",r);else throw S}}var h=e,d=this.x17().n15_1.o17_1;if(d||mc(h))return h;var p=Zh(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.x17().n15_1.v17_1){var x=w(this.q1e());y=w(Jr(x))}else y=null;var k=y;throw Br.m19(Kr(-1,p,null,g,k),p,-1,null,k,g)}f14(r){return this.z1e(r!=null&&typeof r=="string"?r:m())}a1f(r){var e;r:{var t=this.r1e(r);if(!(t instanceof hr)){var a="Expected "+Nr(hr).uc()+", but had "+Ur(t).uc()+" as the serialized body of char",i=this.p1e(r),s;if(this.x17().n15_1.v17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Br.m19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=new Cn(yk(f.c18())),v;c==null?Un(this,f,"char",r):v=c,e=v.x1_1;break r}catch(h){if(h instanceof N)Un(this,f,"char",r);else throw h}}return e}g14(r){return this.a1f(r!=null&&typeof r=="string"?r:m())}b1f(r){var e=this.r1e(r);if(!(e instanceof hr)){var t="Expected "+Nr(hr).uc()+", but had "+Ur(e).uc()+" as the serialized body of string",a=this.p1e(r),i;if(this.x17().n15_1.v17_1){var s=w(e);i=w(Jr(s))}else i=null;var l=i;throw Br.m19(Kr(-1,t,a,null,l),t,-1,a,l,null)}var u=e;if(!(u instanceof ht)){var f="Expected string value for a non-null key '"+r+"', got null literal instead",c=this.p1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.x17().n15_1.v17_1){var d=w(this.q1e());h=w(Jr(d))}else h=null;var p=h;throw Br.m19(Kr(-1,f,c,v,p),f,-1,c,p,v)}if(!u.k18_1&&!this.x17().n15_1.g17_1){var g="String literal for value of key '"+r+"' should be quoted",y=this.p1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.x17().n15_1.v17_1){var S=w(this.q1e());k=w(Jr(S))}else k=null;var z=k;throw Br.m19(Kr(-1,g,y,x,z),g,-1,y,z,x)}return u.m18_1}h14(r){return this.b1f(r!=null&&typeof r=="string"?r:m())}c1f(r,e){var t;if(_v(e)){var a=this.x17(),i=this.r1e(r),s=e.io();if(!(i instanceof hr)){var l="Expected "+Nr(hr).uc()+", but had "+Ur(i).uc()+" as the serialized body of "+s,u=this.p1e(r),f;if(this.x17().n15_1.v17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Br.m19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=mv(a,i.c18());t=new ev(h,this.x17())}else t=super.i14(r,e);return t}i14(r,e){return this.c1f(r!=null&&typeof r=="string"?r:m(),e)}fq(r){return this.u13()!=null?super.fq(r):new wy(this.x17(),this.l2(),this.n1e_1).fq(r)}}class Li extends cu{constructor(r,e,t,a,i){a=a===o?null:a,i=i===o?null:i,super(r,e,a),this.j1f_1=e,this.k1f_1=i,this.l1f_1=this.l2().r2().x(),this.m1f_1=this.o1e_1.j17_1?null:new rv(t),this.n1f_1=null,this.o1f_1=null}l2(){return this.j1f_1}xq(r){var e=this.l1f_1;r:for(;e.y();){var t=e.z(),a=t.k2(),i=du(r,this.x17(),a);if(i!==-3){if(this.o1e_1.l17_1&&hq(this,r,i,t.l2()))continue r;var s=this.m1f_1;return s==null||s.v1b(i),this.n1f_1=a,this.o1f_1=t.l2(),i}a!==this.n1e_1&&!pv(r,this.x17())&&dq(this,a)}var l=this.m1f_1,u=l==null?null:l.w1b(),f=u??-1;return f!==-1&&(this.n1f_1=r.oo(f),this.o1f_1=null),f}up(){var r,e=this.m1f_1,t=e==null?null:e.u1b_1;return t??!1?r=!1:r=super.up(),r}q13(r,e){var t=this.n1f_1;return t??r.oo(e)}r1e(r){var e=this.o1f_1;return e??ze(this.l2(),r)}iq(r){if(r===this.k1f_1){var e=this.x17(),t=this.q1e(),a=this.k1f_1.io();if(!(t instanceof er)){var i="Expected "+Nr(er).uc()+", but had "+Ur(t).uc()+" as the serialized body of "+a,s=this.w13(),l;if(this.x17().n15_1.v17_1){var u=w(t);l=w(Jr(u))}else l=null;var f=l;throw Br.m19(Kr(-1,i,s,null,f),i,-1,s,f,null)}return new Li(e,t,r,this.n1e_1,this.k1f_1)}return super.iq(r)}}class mf extends cu{constructor(r,e){super(r,e),this.v1f_1=e,this.w1f_1=this.v1f_1.c1(),this.x1f_1=-1}l2(){return this.v1f_1}q13(r,e){return e.toString()}r1e(r){return this.v1f_1.e1(x2(r))}xq(r){for(;this.x1f_1<(this.w1f_1-1|0);)return this.x1f_1=this.x1f_1+1|0,this.x1f_1;return-1}}class wy extends cu{constructor(r,e,t){t=t===o?null:t,super(r,e,t),this.e1g_1=e,this.j14("primitive")}l2(){return this.e1g_1}xq(r){return 0}r1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw N.v(w(e))}return this.e1g_1}}class by extends Li{constructor(r,e,t){super(r,e,t),this.r1g_1=_t(e.p2()),this.s1g_1=Vs(this.r1g_1.c1(),2),this.t1g_1=-1}q13(r,e){var t=e/2|0;return this.r1g_1.e1(t)}xq(r){for(;this.t1g_1<(this.s1g_1-1|0);)return this.t1g_1=this.t1g_1+1|0,this.t1g_1;return-1}r1e(r){return this.t1g_1%2|0?ze(this.l2(),r):En(r)}jq(r){}}class ky{constructor(r){this.d16_1=r,this.e16_1=0,this.f16_1=new gy(this.d16_1),this.g16_1=null,this.h16_1=rn.f()}x1g(){}v1d(){var r=this.y1g(),e=this.v1g();return r>=q(e)||r===-1?!1:rr(e,r)===44?(this.e16_1=this.e16_1+1|0,!0):!1}z1g(r){return!(r===125||r===93||r===58||r===44)}i16(){var r=this.l1d();r!==10&&this.y1b("Expected EOF after parsing, but had "+kr(rr(this.v1g(),this.e16_1-1|0))+" instead")}f1d(r){var e=this.l1d();if(e!==r){var t=xl(r),a=this.e16_1>0?this.e16_1-1|0:this.e16_1,i=this.e16_1===q(this.v1g())||a<0?"EOF":kr(rr(this.v1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.y1b(s,a)}return e}a1h(r){if(this.e16_1>0&&r===34){var e;r:{var t=this.e16_1;try{this.e16_1=this.e16_1-1|0,e=this.j1d();break r}finally{this.e16_1=t}}var a=e;a==="null"&&this.x1b("Expected string literal but 'null' literal was found",this.e16_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var i=Qe(r),s=xl(i),l=this.e16_1>0?this.e16_1-1|0:this.e16_1,u=this.e16_1===q(this.v1g())||l<0?"EOF":kr(rr(this.v1g(),l)),f="Expected "+s+", but had '"+u+"' instead";this.y1b(f,l)}g1d(){var r=this.v1g(),e=this.e16_1;r:for(;;){if(e=this.w1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.e16_1=e,Qe(t)}return this.e16_1=e,10}w1d(r){var e=this.y1g();e=this.w1g(e);var t=q(this.v1g())-e|0;if(t<4||e===-1)return!1;var a=0;if(a<=3)do{var i=a;if(a=a+1|0,W("null",i)!==rr(this.v1g(),e+i|0))return!1}while(a<=3);return t>4&&Qe(rr(this.v1g(),e+4|0))===0?!1:(r&&(this.e16_1=e+4|0),!0)}d1e(r,e){return r=r===o?!0:r,e===o?this.w1d(r):e.w1d.call(this,r)}x1d(r){var e=this.g1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.j1d()}else{if(e!==1)return null;t=this.i1d()}var a=t;return this.g16_1=a,a}b1h(){this.g16_1=null}c1h(r,e){var t=this.v1g();return w(Rn(t,r,e))}i1d(){return this.g16_1!=null?td(this):this.a1e()}consumeString2(r,e,t){for(var a=t,i=e,s=rr(r,a),l=!1;s!==34;)s===92?(l=!0,a=this.w1g(pq(this,i,a)),a===-1&&this.y1b("Unexpected EOF",a),i=a):(a=a+1|0,a>=q(r)&&(l=!0,this.u1g(i,a),a=this.w1g(a),a===-1&&this.y1b("Unexpected EOF",a),i=a)),s=rr(r,a);var u;l?u=Ku(this,i,a):u=this.c1h(i,a);var f=u;return this.e16_1=a+1|0,f}b1e(){var r=this.j1d();return r==="null"&&_q(this)&&this.y1b("Unexpected 'null' value instead of string literal"),r}j1d(){if(this.g16_1!=null)return td(this);var r=this.y1g();(r>=q(this.v1g())||r===-1)&&this.y1b("EOF",r);var e=Qe(rr(this.v1g(),r));if(e===1)return this.i1d();e!==0&&this.y1b("Expected beginning of the string, but got "+kr(rr(this.v1g(),r)));for(var t=!1;Qe(rr(this.v1g(),r))===0;)if(r=r+1|0,r>=q(this.v1g())){t=!0,this.u1g(this.e16_1,r);var a=this.w1g(r);if(a===-1)return this.e16_1=r,Ku(this,0,0);r=a}var i;t?i=Ku(this,this.e16_1,r):i=this.c1h(this.e16_1,r);var s=i;return this.e16_1=r,s}u1g(r,e){this.h16_1.ee(this.v1g(),r,e)}z1d(r){var e=A.m(),t=this.g1d();if(t!==8&&t!==6)return this.j1d(),lr;r:for(;;){if(t=this.g1d(),t===1){r?this.j1d():this.a1e();continue r}var a=t;if(a===8||a===6?e.n(t):a===9?(t1(e)!==8&&this.y1b("found ] instead of }"),xh(e)):a===7?(t1(e)!==6&&this.y1b("found } instead of ]"),xh(e)):a===10&&this.y1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.l1d(),e.c1()===0)return lr}}toString(){return"JsonReader(source='"+w(this.v1g())+"', currentPosition="+this.e16_1+")"}y1d(r){var e=this.c1h(0,this.e16_1),t=TS(e,r);this.x1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}x1b(r,e,t){throw OC(this,r,e,this.f16_1.n1c(),t,this.v1g())}y1b(r,e,t,a){return e=e===o?this.e16_1:e,t=t===o?null:t,a===o?this.x1b(r,e,t):a.x1b.call(this,r,e,t)}f1e(){var r=this.y1g();r=this.w1g(r),(r>=q(this.v1g())||r===-1)&&this.y1b("EOF");var e;rr(this.v1g(),r)===34?(r=r+1|0,r===q(this.v1g())&&this.y1b("EOF"),e=!0):e=!1;var t=e,a=new b(0,0),i=new b(0,0),s=!1,l=!1,u=!1,f=r;r:for(;r!==q(this.v1g());){var c=rr(this.v1g(),r);if((c===101||c===69)&&!u){r===f&&this.y1b("Unexpected symbol '"+kr(c)+"' in numeric literal",r),l=!0,u=!0,r=r+1|0;continue r}if(c===45&&u){r===f&&this.y1b("Unexpected symbol '-' in numeric literal",r),l=!1,r=r+1|0;continue r}if(c===43&&u){r===f&&this.y1b("Unexpected symbol '+' in numeric literal",r),l=!0,r=r+1|0;continue r}if(c===45){r!==f&&this.y1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Qe(c);if(v!==0)break r;r=r+1|0;var h=fe(c,48);if(0<=h&&h<=9||this.y1b("Unexpected symbol '"+kr(c)+"' in numeric literal",r-1|0),u){var d=i,p=Ar(d,M(10));i=gr(p,M(h));continue r}var g=a,y=Ar(g,M(10));a=Hr(y,M(h)),ar(a,new b(0,0))>0&&this.y1b("Numeric value overflow")}var x=r!==f;if((f===r||s&&f===(r-1|0))&&this.y1b("Expected numeric literal",r),t&&(x||this.y1b("EOF"),rr(this.v1g(),r)!==34&&this.y1b("Expected closing quotation mark",r),r=r+1|0),this.e16_1=r,u){var k=ee(a)*yq(i,l);(k>ee(new b(-1,2147483647))||k<ee(new b(0,-2147483648)))&&this.y1b("Numeric value overflow"),Math.floor(k)!==k&&this.y1b("Can't convert "+k+" to Long"),a=Dn(k)}var S;return s?S=a:ir(a,new b(0,-2147483648))?this.y1b("Numeric value overflow"):S=on(a),S}n18(){var r=this.f1e(),e=this.l1d();if(e!==10){var t=this.e16_1>0?this.e16_1-1|0:this.e16_1,a=this.e16_1===q(this.v1g())||t<0?"EOF":kr(rr(this.v1g(),t)),i="Expected input to contain a single valid number, but got '"+a+"' after it";this.y1b(i,t)}return r}e1e(){var r=this.y1g();r===q(this.v1g())&&this.y1b("EOF");var e;rr(this.v1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,a=mq(this,r);return t&&(this.e16_1===q(this.v1g())&&this.y1b("EOF"),rr(this.v1g(),this.e16_1)!==34&&this.y1b("Expected closing quotation mark"),this.e16_1=this.e16_1+1|0),a}}class xy{constructor(){jf=this,this.d1h_1=ws(117),this.e1h_1=new Int8Array(126),bq(this),kq(this)}}class tv extends ky{constructor(r,e){super(e),this.q1h_1=r}v1g(){return this.q1h_1}w1g(r){return r<this.v1g().length?r:-1}l1d(){var r=this.v1g(),e=this.e16_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var a=W(r,t);if(a===32||a===10||a===13||a===9)continue r;return this.e16_1=e,Qe(a)}return this.e16_1=r.length,10}h1d(){var r=this.e16_1;if(r===-1)return!1;var e=this.v1g();r:for(;r<e.length;){var t=W(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.e16_1=r,this.z1g(t)}return this.e16_1=r,!1}y1g(){var r=this.e16_1;if(r===-1)return r;var e=this.v1g();r:for(;r<e.length;){var t=W(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.e16_1=r,r}u1d(r){this.e16_1===-1&&this.a1h(r);var e=this.v1g(),t=this.e16_1;r:for(;t<e.length;){var a=t;t=a+1|0;var i=W(e,a);if(i===32||i===10||i===13||i===9)continue r;if(this.e16_1=t,i===r)return lr;this.a1h(r)}this.e16_1=-1,this.a1h(r)}a1e(){this.u1d(34);var r=this.e16_1,e=Hl(this.v1g(),34,r);if(e===-1){this.j1d();var t=xl(1),a=this.e16_1,i=this.e16_1===q(this.v1g())||a<0?"EOF":kr(rr(this.v1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.y1b(s,a)}var l=r;if(l<e)do{var u=l;if(l=l+1|0,W(this.v1g(),u)===92)return this.consumeString2(this.v1g(),this.e16_1,u)}while(l<e);return this.e16_1=e+1|0,ce(this.v1g(),r,e)}c1e(r,e){var t=this.e16_1;try{if(this.l1d()!==6)return null;var a=this.x1d(e);return a!==r||(this.b1h(),this.l1d()!==5)?null:this.x1d(e)}finally{this.e16_1=t,this.b1h()}}}class Sy extends tv{l1d(){var r=this.v1g(),e=this.y1g();return e>=r.length||e===-1?10:(this.e16_1=e+1|0,Qe(W(r,e)))}h1d(){var r=this.y1g();return r>=this.v1g().length||r===-1?!1:this.z1g(W(this.v1g(),r))}u1d(r){var e=this.v1g(),t=this.y1g();(t>=e.length||t===-1)&&(this.e16_1=-1,this.a1h(r));var a=W(e,t);if(this.e16_1=t+1|0,a===r)return lr;this.a1h(r)}g1d(){var r=this.v1g(),e=this.y1g();return e>=r.length||e===-1?10:(this.e16_1=e,Qe(W(r,e)))}y1g(){var r=this.e16_1;if(r===-1)return r;var e=this.v1g();r:for(;r<e.length;){var t=W(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var a=W(e,r+1|0);if(a===47){r=Hl(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(a===42){r=Do(e,"*/",r+2|0),r===-1?(this.e16_1=e.length,this.y1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.e16_1=r,r}}class yf{constructor(){this.t15_1=rn.ja(128)}c1b(r){this.t15_1.he(r)}w1a(r){this.t15_1.ga(r)}y1a(r){this.t15_1.fa(r)}i1b(r){kl(this.t15_1,r)}u15(){this.t15_1.ke()}toString(){return this.t15_1.toString()}}var pl;function Ce(){return pl===o&&new V0,pl}function vC(n,r){n=n===o?Ce():n;var e=new X0(n);r(e);var t=e.d17();return new Q0(t,e.a17_1)}function hC(n){if(D(n.vq(),uu()))return lr;var r=new nv(n.n15_1);n.vq().y14(r)}var Gh;function av(){if(Gh)return lr;Gh=!0,Ey=new ko("NONE",0),zy=new ko("ALL_JSON_OBJECTS",1),Iy=new ko("POLYMORPHIC",2)}var Ey,zy,Iy;function Cy(){return av(),Ey}function dC(){return av(),zy}function qy(){return av(),Iy}function pC(){return be(),Ay}var Ay,iv,wf;function jr(n){be();var r=n instanceof er?n:null,e;return r==null?ov(n,"JsonObject"):e=r,e}function En(n){return be(),n==null?no():new ht(n,!0)}function ps(n){be();var r=n instanceof dn?n:null,e;return r==null?ov(n,"JsonArray"):e=r,e}var _l;function no(){return _l===o&&new ge,_l}function Jn(n){be();var r;return n instanceof ge?r=null:r=n.c18(),r}function On(n){be();var r=n instanceof hr?n:null,e;return r==null?ov(n,"JsonPrimitive"):e=r,e}function _C(n){be();var r;try{r=ei(n)}catch(t){var e;if(t instanceof Br)e=null;else throw t;r=e}return r}function gC(n){be();var r;try{r=ei(n)}catch(l){var e;if(l instanceof Br)e=null;else throw l;r=e}var t=r,a;if(t==null)return null;a=t;var i=a,s=$e(-2147483648,2147483647);return po(E(s,ai)?s:m(),i)?Qr(i):null}function sv(n){return be(),vq(n.c18())}function ov(n,r){throw be(),N.v("Element "+w(Ur(n))+" is not a "+r)}function ei(n){return be(),mv(Ce(),n.c18()).n18()}function mC(n){be();var r=n.c18();return Po(r)}function yC(n){return be(),Po(n.c18())}var Kh;function be(){Kh||(Kh=!0,Ay=Zs("kotlinx.serialization.json.JsonUnquotedLiteral",Is()))}function gl(n,r,e){return n.p18(r,En(e))}function wC(n){return n.fp("JsonPrimitive",is(bC)),n.fp("JsonNull",is(kC)),n.fp("JsonLiteral",is(xC)),n.fp("JsonObject",is(SC)),n.fp("JsonArray",is(EC)),lr}function bC(){return lv().s18_1}function kC(){return fv().t18_1}function xC(){return Ty().u18_1}function SC(){return vu().v18_1}function EC(){return uv().w18_1}var bf;function dt(){return bf===o&&new sy,bf}var kf;function lv(){return kf===o&&new oy,kf}var xf;function zC(){return xf===o&&new ly,xf}var Sf;function uv(){return Sf===o&&new uy,Sf}var Ef;function IC(){return Ef===o&&new fy,Ef}var zf;function vu(){return zf===o&&new cy,zf}var If;function fv(){return If===o&&new vy,If}function is(n){return new Xs(n)}var Cf;function Ty(){return Cf===o&&new hy,Cf}function Mi(n){CC(n)}function hu(n){var r=E(n,fu)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+w(Ur(n))));return e=r,e}function cv(n){hu(n)}function CC(n){var r=E(n,Xc)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+w(Ur(n))));return e=r,e}function Ve(n){var r=n.v19_1,e=Ta;return zi("original",1,e,qC(),null),r.l2()}function qC(){return We(n=>Ve(n),1,0,5)}function AC(n,r){return r.n15_1.i17_1?new dy(n,r):new ro(n)}function TC(n,r,e){return n.u1b_1=!r.so(e)&&r.ro(e).ko(),n.u1b_1}function jC(n){return We((r,e)=>{var t=n;return TC(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===o?-1:r,q(n)<200)return n;if(r===-1){var e=q(n)-60|0;if(e<=0)return n;var t=q(n);return"....."+w(Rn(n,e,t))}var a=r-30|0,i=r+30|0,s=a<=0?"":".....",l=i>=q(n)?"":".....",u=ln(a,0),f=jt(i,q(n));return s+w(Rn(n,u,f))+l}function Kr(n,r,e,t,a){return hv(n,r,e,t,a)}function vv(n,r){return r=r===o?null:r,Br.m19(hv(-1,n,null,r,null),n,-1,null,null,r)}function Ra(n,r){r=r===o?"object":r,n.x1b("Trailing comma before the end of JSON "+r,n.e16_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Wh(n,r){n.y1b(dv(r,null),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function jy(n){return Qs.n1a("Value of type '"+n.io()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.jo().toString()+"'"),n.io(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Yh(n,r){return r=r===o?null:r,Qs.n1a(dv(n,r),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Zh(n,r){return dv(n,r)}function hv(n,r,e,t,a){var i=rn.f();return n>=0&&i.fa("Unexpected JSON token at offset "+n+": "),i.fa(r),e==null||vt(e)||(i.fa(" at path: "),i.fa(e)),t==null||vt(t)||i.fa(`
`+t),a!=null&&(i.fa(`
JSON input: `),i.fa(a)),i.toString()}function dv(n,r){return"Unexpected special floating-point value "+w(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function OC(n,r,e,t,a,i){var s;n.d16_1.v17_1?s=w(Jr(i,e)):s=null;var l=s;return Br.m19(hv(e,r,t,a,l),r,e,t,l,a)}function PC(n,r){var e;return r==null||vt(r)?e="":e=`
`+r,n+e}function BC(){return Ae(),Oy}var Oy;function NC(){return Ae(),Py}var Py;function pv(n,r){Ae();var e;if(r.n15_1.f17_1)e=!0;else{var t=n.no(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(l instanceof ny){a=!0;break r}}a=!1}e=a}return e}function du(n,r,e){if(Ae(),By(r,n)){var t=e.toLowerCase();return Ju(n,r,t)}var a=pu(n,r);if(a!=null)return Ju(n,r,e);var i=n.po(e);return i!==-3||!r.n15_1.p17_1?i:Ju(n,r,e)}function UC(n,r,e){Ae();var t=pu(n,r);return t==null?n.oo(e):Ny(n,r,t)[e]}function DC(n,r){Ae();var e=pu(n,r);return e==null?hI(n):t_(Ny(n,r,e))}function By(n,r){return Ae(),n.n15_1.r17_1&&D(r.jo(),Da())}function Ju(n,r,e){Ae();var t=RC(r,n).o2(e);return t??-3}function pu(n,r){return Ae(),D(n.jo(),ou())?r.n15_1.q17_1:null}function Ny(n,r,e){Ae();var t=Yy(r),a=NC();return t.a1c(n,a,MC(n,e))}function RC(n,r){Ae();var e=Yy(n),t=BC();return e.a1c(r,t,FC(r,n))}function LC(n,r){Ae();var e=cr.t4(),t=By(r,n),a=pu(n,r),i=0,s=n.mo();if(i<s)do{var l=i;i=i+1|0;for(var u=n.qo(l),f=A.m(),c=u.x();c.y();){var v=c.z();v instanceof ey&&f.n(v)}var h=ec(f),d=h==null?null:h.b1c_1;if(d!=null)for(var p=0,g=d.length;p<g;){var y=d[p];p=p+1|0;var x;t?x=y.toLowerCase():x=y,Vh(e,n,x,l)}var k;t?k=n.oo(l).toLowerCase():a!=null?k=a.c1c(n,l,n.oo(l)):k=null;var S=k;S==null||Vh(e,n,S,l)}while(i<s);var z;return e.d1()?z=qr():z=e,z}function MC(n,r){return()=>{for(var e=Pn.i1(),t=0,a=n.mo(),i=Array(a);t<a;){var s=t,l=n.oo(s),u=r.c1c(n,s,l);if(!e.n(u))throw Qs.n1a("The transformed name '"+u+"' for property "+l+" already exists "+("in "+w(n)),n.io());i[s]=u,t=t+1|0}return i}}function FC(n,r){return()=>LC(n,r)}function Vh(n,r,e,t){var a=D(r.jo(),Da())?"enum value":"property";if((E(n,xn)?n:m()).m2(e))throw vv("The suggested name '"+e+"' for "+a+" "+r.oo(t)+" is already one of the names for "+a+" "+(r.oo(ze(n,e))+" in "+w(r)));n.s2(e,t)}var Xh;function Ae(){Xh||(Xh=!0,Oy=new wi,Py=new wi)}var qf,Af;function Qh(n){var r=Vs(n.h1c_1,2);n.f1c_1=N_(n.f1c_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var a=t,i=n.g1c_1,s=i.length,l=i;mx(l,a,0,0,s),n.g1c_1=a}function $C(n,r,e){var t=r.jo(),a;if(t instanceof Ni?a=!0:a=D(t,R0()),a)throw N.v("Serializer for "+e.uc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.o1c_1||!n.p1c_1)return lr;var i,s;if(D(t,Ys())||D(t,lu())?s=!0:s=t instanceof Wn,s?i=!0:i=t instanceof nu,i)throw N.v("Serializer for "+e.uc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function JC(n,r,e,t){var a=_u(),i=ZC().c1(),s=Array(i),l=ci.z1c(r,n,a,s);l.xr(e,t)}function HC(n){var r=n.a1d_1.f1d(6);n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var e=cr.t4();r:for(;n.a1d_1.h1d();){var t=n.b1d_1?n.a1d_1.j1d():n.a1d_1.i1d();n.a1d_1.f1d(5);var a=n.k1d();e.s2(t,a),r=n.a1d_1.l1d();var i=r;if(i!==4){if(i===7)break r;n.a1d_1.y1b("Expected end of the object or comma")}}return r===6?n.a1d_1.f1d(7):r===4&&(n.c1d_1||Ra(n.a1d_1),n.a1d_1.f1d(7)),new er(e)}function*GC(n,r,e){var t=n.a1d_1.f1d(6);n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var a=cr.t4();r:for(;n.a1d_1.h1d();){var i=n.b1d_1?n.a1d_1.j1d():n.a1d_1.i1d();n.a1d_1.f1d(5);var s=yield*r.zk(lr,e);a.s2(i,s),t=n.a1d_1.l1d();var l=t;if(l!==4){if(l===7)break r;n.a1d_1.y1b("Expected end of the object or comma")}}return t===6?n.a1d_1.f1d(7):t===4&&(n.c1d_1||Ra(n.a1d_1),n.a1d_1.f1d(7)),new er(a)}function Uy(n){var r=n.a1d_1.l1d();n.a1d_1.g1d()===4&&n.a1d_1.y1b("Unexpected leading comma");var e=A.m();r:for(;n.a1d_1.h1d();){var t=n.k1d();if(e.n(t),r=n.a1d_1.l1d(),r!==4){var a=n.a1d_1,i=r===9,s=a.e16_1;if(!i){var l="Expected end of the array or comma";a.y1b(l,s)}break r}}return r===8?n.a1d_1.f1d(9):r===4&&(n.c1d_1||Ra(n.a1d_1,"array"),n.a1d_1.f1d(9)),new dn(e)}function ml(n,r){var e;n.b1d_1||!r?e=n.a1d_1.j1d():e=n.a1d_1.i1d();var t=e;return!r&&t==="null"?no():new ht(t,r)}function KC(n){return pE(new $p(WC(n)),lr)}function WC(n){return We((r,e,t)=>Wk(t,function*(a){var i=n.a1d_1.g1d(),s;if(i===1)s=ml(n,!0);else if(i===0)s=ml(n,!1);else if(i===6){var l=n;l.e1d_1=l.e1d_1+1|0,l.e1d_1>=l.d1d_1&&qs(l.d1d_1);var u=yield*GC(n,r,a);l.e1d_1=l.e1d_1-1|0,s=u}else if(i===8){var f=n;f.e1d_1=f.e1d_1+1|0,f.e1d_1>=f.d1d_1&&qs(f.d1d_1);var c=Uy(n);f.e1d_1=f.e1d_1-1|0,s=c}else n.a1d_1.y1b("Can't begin reading element, unexpected token");return s}),2)}function qs(n){throw vv("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var rd;function Fi(){if(rd)return lr;rd=!0,Dy=new ss("OBJ",0,123,125),Ry=new ss("LIST",1,91,93),Ly=new ss("MAP",2,123,125),My=new ss("POLY_OBJ",3,91,93)}var Dy,Ry,Ly,My;function YC(){return Fi(),[_u(),Tf(),wl(),$y()]}function ZC(){return Fi(),Hu==null&&(Hu=oS(YC())),Hu}var Hu;function Fy(n,r){var e=r.jo(),t;if(e instanceof Ni)t=$y();else if(D(e,Ys()))t=Tf();else if(D(e,lu())){var a=yl(r.ro(0),n.vq()),i=a.jo(),s,l;if(i instanceof Wn?l=!0:l=D(i,Da()),l)s=wl();else if(n.n15_1.h17_1)s=Tf();else throw jy(a);t=s}else t=_u();return t}function yl(n,r){var e;if(D(n.jo(),R0())){var t=$z(r,n),a=t==null?null:yl(t,r);e=a??n}else n.lo()?e=yl(n.ro(0),r):e=n;return e}function _u(){return Fi(),Dy}function Tf(){return Fi(),Ry}function wl(){return Fi(),Ly}function $y(){return Fi(),My}function bl(n,r){for(var e=n.no().x();e.y();){var t=e.z();if(t instanceof ry)return t.q1d_1}return r.n15_1.n17_1}function VC(n,r,e,t){return QC(n,r,e,t)}function XC(n){if(n instanceof nu){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(r))}if(n instanceof Wn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(e))}if(n instanceof Ni){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw mr.o3(w(t))}}function QC(n,r,e,t){if(DC(e.jn(),n).l1(t)){var a=r.jn().io(),i=e.jn().io(),s=n.n15_1.u17_1.equals(dC())&&a===i?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+a+"'",l="Class '"+i+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Qs.n1a(l,i,u)}}function rq(n,r,e){return r==null?!1:r.t1d_1===e?(r.t1d_1=null,!0):!1}function nq(n,r){for(;n.xq(r)!==-1;);}function eq(n){n.x15_1.g1d()===4&&n.x15_1.y1b("Unexpected leading comma")}function tq(n){var r=!1,e=!!(n.z15_1%2|0);e?n.z15_1!==-1&&(r=n.x15_1.v1d()):n.x15_1.u1d(58);var t;if(n.x15_1.h1d()){if(e)if(n.z15_1===-1){var a=n.x15_1,i=!r,s=a.e16_1;if(!i){var l="Unexpected leading comma";a.y1b(l,s)}}else{var u=n.x15_1,f=r,c=u.e16_1;if(!f){var v="Expected comma after the key-value pair";u.y1b(v,c)}}n.z15_1=n.z15_1+1|0,t=n.z15_1}else r&&!n.v15_1.n15_1.s17_1&&Ra(n.x15_1),t=-1;return t}function aq(n,r,e){var t=n.v15_1,a;r:{var i=r.so(e),s=r.ro(e),l;if(i&&!s.ko()?l=n.x15_1.w1d(!0):l=!1,l){a=!0;break r}if(D(s.jo(),Da())){var u;if(s.ko()?u=n.x15_1.w1d(!1):u=!1,u){a=!1;break r}var f=n.x15_1.x1d(n.b16_1.g17_1),c;if(f==null){a=!1;break r}else c=f;var v=c,h=du(s,t,v),d=!t.n15_1.j17_1&&s.ko();if(h===-3&&(i||d)){n.x15_1.i1d(),a=!0;break r}}a=!1}return a}function iq(n,r){for(var e=n.x15_1.v1d();n.x15_1.h1d();){e=!1;var t=lq(n);n.x15_1.u1d(58);var a=du(r,n.v15_1,t),i;if(a!==-3){var s;if(n.b16_1.l17_1&&aq(n,r,a))e=n.x15_1.v1d(),s=!1;else{var l=n.c16_1;return l==null||l.v1b(a),a}i=s}else i=!0;var u=i;u&&(e=sq(n,r,t))}e&&!n.v15_1.n15_1.s17_1&&Ra(n.x15_1);var f=n.c16_1,c=f==null?null:f.w1b();return c??-1}function sq(n,r,e){return pv(r,n.v15_1)||rq(n,n.a16_1,e)?n.x15_1.z1d(n.b16_1.g17_1):(n.x15_1.f16_1.m1c(),n.x15_1.y1d(e)),n.x15_1.v1d()}function oq(n){var r=n.x15_1.v1d(),e;return n.x15_1.h1d()?(n.z15_1!==-1&&!r&&n.x15_1.y1b("Expected end of the array or comma"),n.z15_1=n.z15_1+1|0,e=n.z15_1):(r&&!n.v15_1.n15_1.s17_1&&Ra(n.x15_1,"array"),e=-1),e}function lq(n){var r;return n.b16_1.g17_1?r=n.x15_1.b1e():r=n.x15_1.a1e(),r}function uq(){return gv(),Jy}var Jy;function fq(n,r,e){n.q1c_1.s1a(),n.lr(r),n.q1c_1.v1a(58),n.q1c_1.u1a(),n.lr(e)}function _v(n){return gv(),n.lo()&&uq().l1(n)}function cq(n){return gv(),n.lo()&&D(n,pC())}var nd;function gv(){nd||(nd=!0,Jy=ca([Lc(Vl()).jn(),iu($s()).jn(),Mc(Zl()).jn(),Fc(Xl()).jn()]))}function Gu(){return gu(),Hy}var Hy;function vo(n){gu();var r=n&15,e;if(r<10){var t=48,a=Y(t);e=nt(r+a|0)}else{var i=r-10|0,s=97,l=Y(s);e=nt(i+l|0)}return e}function kl(n,r){gu(),n.ga(34);var e=0,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0;var s=W(r,i),l=Y(s);l<Gu().length&&Gu()[l]!=null&&(n.ee(r,e,i),n.fa(Gu()[l]),e=i+1|0)}while(t<a);e!==0?n.ee(r,e,r.length):n.fa(r),n.ga(34)}function vq(n){return gu(),ph(n,"true",!0)?!0:ph(n,"false",!0)?!1:null}var ed;function gu(){if(!ed){ed=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=vo(e>>12),a=vo(e>>8),i=vo(e>>4),s=vo(e);n[e]="\\u"+kr(t)+kr(a)+kr(i)+kr(s)}while(r<=31);var l=34;n[Y(l)]='\\"';var u=92;n[Y(u)]="\\\\";var f=9;n[Y(f)]="\\t";var c=8;n[Y(c)]="\\b";var v=10;n[Y(v)]="\\n";var h=13;n[Y(h)]="\\r",n[12]="\\f",Hy=n;var d=new Int8Array(128),p=0;if(p<=31)do{var g=p;p=p+1|0,d[g]=1}while(p<=31);var y=34,x=Y(y),k=34,S=Y(k);d[x]=Fn(S);var z=92,I=Y(z),C=92,T=Y(C);d[I]=Fn(T);var O=9,F=Y(O),P=116,B=Y(P);d[F]=Fn(B);var J=8,L=Y(J),$=98,R=Y($);d[L]=Fn(R);var V=10,G=Y(V),nr=110,K=Y(nr);d[G]=Fn(K);var tr=13,Q=Y(tr),or=114,X=Y(or);d[Q]=Fn(X);var xr=102,br=Y(xr);d[12]=Fn(br)}}function Gy(n,r,e,t){var a=t.jn();return new Li(n,e,a,r,a).hq(t)}function Un(n,r,e,t){var a=Ie(e,"i")?"an "+e:"a "+e,i="Failed to parse literal '"+r.toString()+"' as "+a+" value",s=n.p1e(t),l;if(n.x17().n15_1.v17_1){var u=w(n.q1e());l=w(Jr(u))}else l=null;var f=l;throw Br.m19(Kr(-1,i,s,null,f),i,-1,s,f,null)}function hq(n,r,e,t){var a=n.x17(),i;r:{var s=r.so(e),l=r.ro(e),u;if(s&&!l.ko()?u=t instanceof ge:u=!1,u){i=!0;break r}if(D(l.jo(),Da())){var f;if(l.ko()?f=t instanceof ge:f=!1,f){i=!1;break r}var c=t instanceof hr?t:null,v=c==null?null:Jn(c),h;if(v==null){i=!1;break r}else h=v;var d=h,p=du(l,a,d),g=!a.n15_1.j17_1&&l.ko();if(p===-3&&(s||g)){i=!0;break r}}i=!1}return i}function dq(n,r){var e="Encountered an unknown key '"+r+"'",t=n.w13(),a="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",i;if(n.x17().n15_1.v17_1){var s=n.l2().toString();i=w(Jr(s))}else i=null;var l=i;throw Br.m19(Kr(-1,e,t,a,l),e,-1,t,l,a)}function pq(n,r,e){return n.u1g(r,e),gq(n,e+1|0)}function Ku(n,r,e){n.u1g(r,e);var t=n.h16_1.toString();return n.h16_1.je(0),t}function td(n){var r=fn(n.g16_1);return n.g16_1=null,r}function _q(n){return rr(n.v1g(),n.e16_1-1|0)!==34}function gq(n,r){var e=r;e=n.w1g(e),e===-1&&n.y1b("Expected escape sequence to continue, got EOF");var t=n.v1g(),a=e;e=a+1|0;var i=rr(t,a);if(i===117)return Ky(n,n.v1g(),e);var s=Y(i),l=wq(s);return l===0&&n.y1b("Invalid escaped char '"+kr(i)+"'"),n.h16_1.ga(l),e}function Ky(n,r,e){return(e+4|0)>=q(r)?(n.e16_1=e,n.x1g(),(n.e16_1+4|0)>=q(r)&&n.y1b("Unexpected EOF during unicode escape"),Ky(n,r,n.e16_1)):(n.h16_1.ga(nt((((ho(n,r,e)<<12)+(ho(n,r,e+1|0)<<8)|0)+(ho(n,r,e+2|0)<<4)|0)+ho(n,r,e+3|0)|0)),e+4|0)}function ho(n,r,e){var t=rr(r,e),a;if(48<=t&&t<=57){var i=Y(t),s=48;a=i-Y(s)|0}else if(97<=t&&t<=102){var l=Y(t),u=97;a=(l-Y(u)|0)+10|0}else if(65<=t&&t<=70){var f=Y(t),c=65;a=(f-Y(c)|0)+10|0}else n.y1b("Invalid toHexChar char '"+kr(t)+"' in unicode escape");return a}function mq(n,r){var e=n.w1g(r);(e>=q(n.v1g())||e===-1)&&n.y1b("EOF");var t=n.v1g(),a=e;e=a+1|0;var i=rr(t,a),s=Y(i)|32,l,u=116;if(s===Y(u))ad(n,"rue",e),l=!0;else{var f=102;s===Y(f)?(ad(n,"alse",e),l=!1):n.y1b("Expected valid boolean literal prefix, but had '"+n.j1d()+"'")}return l}function ad(n,r,e){(q(n.v1g())-e|0)<r.length&&n.y1b("Unexpected end of boolean literal");var t=0,a=q(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=W(r,i),l=rr(n.v1g(),e+i|0),u=Y(s);u!==(Y(l)|32)&&n.y1b("Expected valid boolean literal prefix, but had '"+n.j1d()+"'")}while(t<=a);n.e16_1=e+r.length|0}function yq(n,r){var e;switch(r){case!1:var t=-ee(n);e=Math.pow(10,t);break;case!0:var a=ee(n);e=Math.pow(10,a);break;default:Bs();break}return e}function Qe(n){var r;if(Y(n)<126){var e=Wy().e1h_1;r=e[Y(n)]}else r=0;return r}function xl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function wq(n){return n<117?Wy().d1h_1[n]:0}function bq(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,fa(n,e,117)}while(r<=31);fa(n,8,98),fa(n,9,116),fa(n,10,110),fa(n,12,102),fa(n,13,114),Wu(n,47,47),Wu(n,34,34),Wu(n,92,92)}function kq(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Qa(n,e,127)}while(r<=32);Qa(n,9,3),Qa(n,10,3),Qa(n,13,3),Qa(n,32,3),St(n,44,4),St(n,58,5),St(n,123,6),St(n,125,7),St(n,91,8),St(n,93,9),St(n,34,1),St(n,92,2)}function fa(n,r,e){if(e!==117){var t=Y(e);n.d1h_1[t]=nt(r)}}function Wu(n,r,e){var t=Y(r);return fa(n,t,e)}function Qa(n,r,e){n.e1h_1[r]=e}function St(n,r,e){var t=Y(r);return Qa(n,t,e)}var jf;function Wy(){return jf===o&&new xy,jf}function mv(n,r){return n.n15_1.t17_1?new Sy(r,n.n15_1):new tv(r,n.n15_1)}function Yy(n){return n.p15_1}function id(n){return gs.o7(n)}_(Zc,"Json");U(V0,"Default");_(X0,"JsonBuilder");_(Q0,"JsonImpl");_(ry,"JsonClassDiscriminator");_(ny,"JsonIgnoreUnknownKeys");_(ey,"JsonNames");_(Vc,"JsonConfiguration");_(ko,"ClassDiscriminatorMode");Lr(fu,"JsonDecoder",o,o,[eu,tu]);nn(ty);_(et,"JsonElement",o,o,o,o,o,{0:dt});nn(fC);_(hr,"JsonPrimitive",o,o,o,o,o,{0:lv});nn(cC);_(dn,"JsonArray",o,o,[zn],o,o,{0:uv});nn(ay);_(er,"JsonObject",o,o,[xn],o,o,{0:vu});U(ge,"JsonNull",o,o,o,o,o,{0:fv});_(ht,"JsonLiteral");_(It,"JsonObjectBuilder");_(iy,"JsonArrayBuilder");U(sy,"JsonElementSerializer",o,o,[vr]);U(oy,"JsonPrimitiveSerializer",o,o,[vr]);U(ly,"JsonArrayDescriptor",o,o,[ye]);U(uy,"JsonArraySerializer",o,o,[vr]);U(fy,"JsonObjectDescriptor",o,o,[ye]);U(cy,"JsonObjectSerializer",o,o,[vr]);U(vy,"JsonNullSerializer",o,o,[vr]);U(hy,"JsonLiteralSerializer",o,o,[vr]);Rr(Xs).ko=Pa;Rr(Xs).lo=Ba;Rr(Xs).no=Js;_(Xs,o,o,o,[ye]);Lr(Xc,"JsonEncoder",o,o,[Bc]);_(Qc,"JsonException");_(Br,"JsonDecodingException");_(Qs,"JsonEncodingException");_(ro,"Composer");_(pf,"ComposerForUnsignedNumbers");_(_f,"ComposerForUnquotedLiterals");_(dy,"ComposerWithPrettyPrint");_(rv,"JsonElementMarker");U(py,"Tombstone");U(_y,"RedactedKey");_(gy,"JsonPath");Rr(nv).j15=xz;_(nv,"JsonSerializersModuleValidator",o,o,[j0]);_(my,"JsonTreeReader",o,o,o,[1]);_(ss,"LexerMode");_(wi,"Key",wi);_(gf,"DescriptorSchemaCache",gf);_(yy,"DiscriminatorHolder");_(Cs,"StreamingJsonDecoder",o,o,[fu]);_(ev,"JsonDecoderForUnsignedTypes");_(ci,"StreamingJsonEncoder",o,o,[Xc]);_(cu,"AbstractJsonTreeDecoder",o,o,[fu]);_(Li,"JsonTreeDecoder");_(mf,"JsonTreeListDecoder");_(wy,"JsonPrimitiveDecoder");_(by,"JsonTreeMapDecoder");_(ky,"AbstractJsonLexer");U(xy,"CharMappings");_(tv,"StringJsonLexer");_(Sy,"StringJsonLexerWithComments");_(yf,"StringJsonWriter",yf);iv=new ty;wf=new ay;qf=new py;Af=new _y;var Xa=Math.imul;class Zy{constructor(r){this.b1i_1=r}fg(r,e){return this.b1i_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.b1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class hn{constructor(r,e){e=e===o?null:e,this.c1i_1=r,this.d1i_1=e}}class Vy{constructor(r){this.n1i_1=r}fg(r,e){return this.n1i_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.n1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Xy{constructor(r){this.t1i_1=r}fg(r,e){return this.t1i_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.t1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Of{constructor(r,e,t){this.j1k_1=r,this.k1k_1=e,this.l1k_1=t}}class Qy{constructor(r,e){this.b1l_1=r,this.c1l_1=e}}class rw{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p){h=h===o?fr():h,d=d===o?0:d,p=p===o?!1:p,this.d1l_1=r,this.e1l_1=e,this.f1l_1=t,this.g1l_1=a,this.h1l_1=i,this.i1l_1=s,this.j1l_1=l,this.k1l_1=u,this.l1l_1=f,this.m1l_1=c,this.n1l_1=v,this.o1l_1=h,this.p1l_1=d,this.q1l_1=p}}class nw{constructor(r,e,t){this.r1l_1=r,this.s1l_1=e,this.t1l_1=t}}class ew{constructor(r){this.u1l_1=r}fg(r,e){return this.u1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.u1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class tw{constructor(r){this.v1l_1=r}fg(r,e){return this.v1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.v1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class aw{constructor(r){this.w1l_1=r}fg(r,e){return this.w1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.w1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class iw{constructor(r){this.x1l_1=r}fg(r,e){return this.x1l_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.x1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class sw{constructor(r){this.d1m_1=r}u4(){return this.d1m_1.x()}e1m(r){return $n(r.c1l_1)}v4(r){return this.e1m(r)}}class ow{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g){e=e===o?fr():e,t=t===o?null:t,a=a===o?fr():a,i=i===o?fr():i,s=s===o?fr():s,l=l===o?fr():l,u=u===o?fr():u,f=f===o?null:f,c=c===o?null:c,v=v===o?fr():v,h=h===o?fr():h,d=d===o?null:d,p=p===o?null:p,g=g===o?null:g,this.w1i_1=e,this.x1i_1=t,this.y1i_1=i,this.z1i_1=s,this.a1j_1=l,this.b1j_1=f,this.c1j_1=c,this.d1j_1=v,this.e1j_1=h,this.f1j_1=d,this.g1j_1=p,this.h1j_1=g,this.i1j_1=fr(),this.j1j_1=u;for(var y=this,x=this.b1j_1,k=x==null?null:x.c1k_1,S=this.f1j_1,z=Ke([this.x1i_1,k,S==null?null:S.f1k_1]),I=A.f1(Mr(z,10)),C=z.x();C.y();){var T=C.z(),O=Ce().s15(T);I.n(O)}y.k1j_1=I;for(var F=this,P=A.m(),B=u.x();B.y();){var J=B.z();J.z1h_1||P.n(J)}F.l1j_1=P,this.m1j_1=qr();var L=this,$;if(!this.l1j_1.d1())$=!0;else{var R;r:{var V;if(E(u,Z)?V=u.d1():V=!1,V){R=!1;break r}for(var G=u.x();G.y();){var nr=G.z();if(nr.a1i_1!=null){R=!0;break r}}R=!1}$=R}L.n1j_1=$,this.o1j_1=ft(a);for(var K=this,tr=A.f1(Mr(r,10)),Q=r.x();Q.y();){var or=Q.z(),X="/"+jg(or,Si([47]));tr.n(X)}K.p1j_1=tr,this.q1j_1=qr(),this.r1j_1=!1,this.s1j_1=!1;var xr=this;xr.t1j_1=Pn.i1();var br=this;br.u1j_1=A.m(),this.v1j_1=qr()}f1m(r,e,t){this.v1j_1=e,this.i1j_1=t;var a=jr(Ce().s15(r)),i=v7(this,c7(this,f7(this,a))),s=sr(i,"components"),l=s==null?null:sr(s,"schemas"),u=l??qr();this.m1j_1=u,this.q1j_1=T7(this,i,u);var f=this,c;if(Cl(i))c=!0;else{var v=this.k1j_1,h;r:{var d;if(E(v,Z)?d=v.d1():d=!1,d){h=!1;break r}for(var p=v.x();p.y();){var g=p.z();if(Cl(g)){h=!0;break r}}h=!1}c=h}f.r1j_1=c;var y=this,x;if(Il(i,So()))x=!0;else{var k=this.k1j_1,S;r:{var z;if(E(k,Z)?z=k.d1():z=!1,z){S=!1;break r}for(var I=k.x();I.y();){var C=I.z();if(Il(C,So())){S=!0;break r}}S=!1}x=S}y.s1j_1=x;var T=ne(this.r1j_1?Iw().q2():fr(),this.s1j_1?So().q2():fr());this.t1j_1.v2(),this.u1j_1.v2();for(var O=S7(this,u)+_7(this,u)+y7(this,u)+w7(this,u),F=u.p2(),P=A.f1(Mr(F,10)),B=F.x();B.y();){var J=B.z(),L=$n(J);P.n(L)}for(var $=P,R=sr(i,"paths"),V=(R??qr()).p2(),G=A.f1(Mr(V,10)),nr=V.x();nr.y();){var K=nr.z(),tr=Hw(this,K);G.n(tr)}var Q=ne(ne($,G),kv());if(!(this.a1j_1.d1()||!Q.l1("ErrorCode"))){var or="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw mr.o3(w(or))}if(!(this.b1j_1==null||!Q.l1("CurrentUser")&&!Q.l1("currentUser"))){var X="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(X))}if(!(this.d1j_1.d1()||this.b1j_1!=null)){var xr="permissions needs currentUser, which says who the permissions belong to.";throw mr.o3(w(xr))}if(!(this.d1j_1.d1()||!Q.l1("Permission")&&!Q.l1("can"))){var br="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(br))}if(!(this.f1j_1==null||!Q.l1("UserPreferences")&&!Q.l1("preferences"))){var dr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(dr))}if(!(this.e1j_1.d1()||this.b1j_1!=null)){var Er="guards needs currentUser, which says who is signed in.";throw mr.o3(w(Er))}var zr;if(this.e1j_1.d1())zr=!0;else{var Or=fd(),Pr;r:{var pr;if(E(Or,Z)?pr=Or.d1():pr=!1,pr){Pr=!0;break r}for(var Gr=Or.x();Gr.y();){var en=Gr.z();if(Q.l1(en)){Pr=!1;break r}}Pr=!0}zr=Pr}if(!zr){var Yr="guards exports "+H(fd())+", and the generated client already uses one of the names.";throw mr.o3(w(Yr))}if(!(this.l1j_1.d1()||!Q.l1("cookies"))){var _r="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw mr.o3(w(_r))}if(!(hw(this.j1j_1).d1()||!Q.l1("cookieConsent"))){var Fr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw mr.o3(w(Fr))}for(var Zr=this.l1j_1,Vr=cr.t4(),$r=Zr.x();$r.y();){var tn=$r.z(),pn=Pf(tn.r1h_1),wn=Vr.o2(pn),_n;if(wn==null){var Yn=A.m();Vr.s2(pn,Yn),_n=Yn}else _n=wn;var Zn=_n;Zn.n(tn)}var ke=Vr.q2(),oe;r:{for(var je=ke.x();je.y();){var Bn=je.z();if(Bn.c1()>1){oe=Bn;break r}}oe=null}var De=oe;if(De!=null){var Oe="The cookies "+H(De," and ",o,o,o,o,W7)+" would both be called "+Pf(nc(De).r1h_1)+" in TypeScript.";throw mr.o3(w(Oe))}var Ze=this.z1i_1,Vn;r:{for(var Nn=Ze.x();Nn.y();){var An=Nn.z();if(Q.l1(An.u1i_1)){Vn=An;break r}}Vn=null}var bn=Vn;if(bn!=null){var Ji="constants("+bn.u1i_1+") would be exported as '"+bn.u1i_1+"', which the generated client already uses. Rename the object.";throw mr.o3(w(Ji))}var Hi=Le("client.ts")+g7(this),Mt=this.g1j_1,mt;Mt==null?mt=null:mt=`
reportErrors('`+Mt+`');
`;var yt=mt,Ft=Hi+(yt??""),La=this.h1j_1,wt;La==null?wt=null:wt=`
`+La+`
`;for(var Ma=wt,Re=j("client.ts",Ft+(Ma??"")),Gi=j("form.ts",Le("form.ts")+U7(this)),bt=j("form-state.svelte.ts",Le("form-state.svelte.ts")),$t=j("pending-writes.svelte.ts",Le("pending-writes.svelte.ts")),Fa=this.a1j_1.d1()&&this.d1j_1.d1()?O:va(O,`export {};
`),Ki=ya(this.t1j_1),$a=j("types.ts",Fa+H(Ki,"",o,o,o,o,Y7)+N7(this)+Jw(this,"Permission",this.d1j_1)),Jt=sr(i,"paths"),Wi=Jt??qr(),Yi=Io(u.p2(),"LucideIcon"),Ja=this.q1j_1.q2(),Ha=A.f1(Mr(Ja,10)),Ht=Ja.x();Ht.y();){var Gt=Ht.z(),Kt=Gt.j1k_1;Ha.n(Kt)}var Ga=[Re,Gi,bt,$t,$a,j("services.ts",O7(this,Wi,Fv(Fv(Yi,Ha),T)))],kt;t.d1()?kt=[]:kt=[j("loads.ts",Lq(t,this.u1j_1))];var eo=kt,to=Le("index.ts")+(this.z1i_1.d1()?"":`export * from './constants.js';
`)+(t.d1()?"":"export * from './"+va("loads.ts",".ts")+`.js';
`)+(this.n1j_1?`export * from './cookies.js';
`:"")+(this.b1j_1!=null?"export * from './"+va("current-user.svelte.ts",".ts")+`.js';
`:""),Wt;this.e1j_1.d1()?Wt="":Wt="export * from './"+va("guards.ts",".ts")+`.js';
`;var Zi=[j("index.ts",to+Wt+(this.f1j_1!=null?"export * from './"+va("preferences.svelte.ts",".ts")+`.js';
`:""))],Yt;this.z1i_1.d1()?Yt=[]:Yt=[j("constants.ts",Vq(this.z1i_1))];var ao=Yt,le;this.n1j_1?le=[j("cookies.ts",Iq(this.j1j_1))]:le=[];var xu=le,io=this.b1j_1,Ka;io==null?Ka=null:Ka=[j("current-user.svelte.ts",k7(this,io))];var Vi=Ka,Xi;Vi==null?Xi=[]:Xi=Vi;var so=Xi,Zt;this.e1j_1.d1()?Zt=[]:Zt=[j("guards.ts",m7(this))];var oo=Zt,lo=this.f1j_1,Wa;lo==null?Wa=null:Wa=[j("preferences.svelte.ts",b7(this,lo))];var Qi=Wa,Ya;return Qi==null?Ya=[]:Ya=Qi,u7(this,Zk([Ga,eo,Zi,ao,xu,so,oo,Ya,[j("openapi.json",Sw().q15(iv.z17(),i)+`
`)]]))}g1m(r,e,t,a){return e=e===o?qr():e,t=t===o?fr():t,a===o?this.f1m(r,e,t):a.f1m.call(this,r,e,t)}}class xo extends ve{constructor(r,e,t){super(r,e),this.a1m_1=t}v1g(){return Le(this.a1m_1)}}class mu{constructor(r,e,t,a,i,s,l){a=a===o?fr():a,i=i===o?fr():i,s=s===o?0:s,l=l===o?!1:l,this.e1i_1=r,this.f1i_1=e,this.g1i_1=t,this.h1i_1=a,this.i1i_1=i,this.j1i_1=s,this.k1i_1=l}toString(){return"GeneratedOperation(name="+this.e1i_1+", method="+this.f1i_1+", path="+this.g1i_1+", pathParameters="+w(this.h1i_1)+", pathTypes="+w(this.i1i_1)+", optionalSlots="+this.j1i_1+", needsInput="+this.k1i_1+")"}hashCode(){var r=he(this.e1i_1);return r=Xa(r,31)+he(this.f1i_1)|0,r=Xa(r,31)+he(this.g1i_1)|0,r=Xa(r,31)+wr(this.h1i_1)|0,r=Xa(r,31)+wr(this.i1i_1)|0,r=Xa(r,31)+this.j1i_1|0,r=Xa(r,31)+vc(this.k1i_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof mu)||this.e1i_1!==r.e1i_1||this.f1i_1!==r.f1i_1||this.g1i_1!==r.g1i_1||!D(this.h1i_1,r.h1i_1)||!D(this.i1i_1,r.i1i_1)||this.j1i_1!==r.j1i_1||this.k1i_1!==r.k1i_1)}}class lw{constructor(r){this.h1m_1=r}fg(r,e){return this.h1m_1(r,e)}compare(r,e){return this.fg(r,e)}g3(){return this.h1m_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class uw{t1k(r){return"Must be at least "+yd(this,r)+"."}u1k(r){return"Must be at most "+yd(this,r)+"."}z1k(r,e){return"Must be "+(e?"greater than":"at least")+" "+Bt(r)+"."}a1l(r,e){return"Must be "+(e?"less than":"at most")+" "+Bt(r)+"."}v1k(r){return"Must match "+r+"."}}class Xe{constructor(r,e){this.b1m_1=r,this.c1m_1=e}}class ri{constructor(r,e,t){this.w1k_1=r,this.x1k_1=e,this.y1k_1=t}}class fw{constructor(){Mf=this,this.m1k_1=new ri("email",jn(new Xe("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.n1k_1=new ri("uri",jn(new Xe("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.o1k_1=new ri("phone",jn(new Xe("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.p1k_1=new ri("slug",jn(new Xe("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.q1k_1=new ri("strong-password",sn([new Xe("^[\\s\\S]{10,}$","at least 10 characters"),new Xe("[a-z]","a lowercase letter"),new Xe("[A-Z]","an uppercase letter"),new Xe("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.r1k_1=sn([this.m1k_1,this.n1k_1,this.o1k_1,this.p1k_1,this.q1k_1])}s1k(r){var e=this.r1k_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(i.w1k_1===r){t=i;break r}}t=null}return t}}function xq(){return se(),cw}var cw;function Sq(){return se(),vw}var vw;function ue(n){return se(),"'"+re(re(re(re(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function Pf(n){se();var r=Sq(),e=jg(n,Si([46,95,45])),t=r.ef(e,Cq);return xq().af(t)?t:ue(n)}function Eq(n){se();var r;switch(n.s1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=H(n.t1h_1," | ",o,o,o,o,qq);break;default:r="number";break}return r}function zq(n){se();var r=Eq(n),e=n.s1h_1==="string"||n.s1h_1==="enum",t="kind: "+ue(n.s1h_1),a;n.s1h_1==="enum"?a="values: ["+H(n.t1h_1,", ",o,o,o,o,Aq)+"]":a=null;var i=a,s=n.u1h_1,l;s==null?l=null:l="default: "+(e?ue(s):s);var u=l,f=n.v1h_1,c;f==null?c=null:c="maxAge: "+f.toString();var v=c,h="path: "+ue(n.w1h_1),d="sameSite: "+ue(n.x1h_1),p="secure: "+n.y1h_1,g=n.a1i_1,y;g==null?y=null:y="category: "+ue(g);var x=Ke([t,i,u,v,h,d,p,y]),k=n.u1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+Pf(n.r1h_1)+": typedCookie"+k+"("+ue(n.r1h_1)+", { "+H(x,", ")+" })"}function hw(n){se();for(var r=A.m(),e=n.x();e.y();){var t=e.z(),a=t.a1i_1;a==null||r.n(a)}return ya(hi(r))}function Iq(n){se();for(var r=A.m(),e=n.x();e.y();){var t=e.z();t.z1h_1||r.n(t)}var a=Tq,i=new Zy(a),s=Dt(r,i),l=hw(n),u="consentStore",f;l.d1()?f=null:f=u;var c=f,v="typedCookie",h;s.d1()?h=null:h=v;for(var d=h,p=Ke([c,d]),g=A.m(),y=s.x();y.y();){var x=y.z();x.a1i_1!=null&&g.n(x)}var k=g,S=H(k,", ",o,o,o,o,jq),z=rn.f();return z.fa("import { "+H(p,", ")+` } from './client.js';
`),s.d1()||z.fa(`
export const cookies = {
`+H(s,`,
`,o,o,o,o,Oq())+`
};
`),l.d1()||z.fa(`
export const cookieConsent = consentStore([`+H(l,", ",o,o,o,o,Pq)+"] as const, ["+S+`]);
`),z.toString()}function Cq(n){return se(),n.dg().e1(1).toUpperCase()}function qq(n){return se(),ue(n)}function Aq(n){return se(),ue(n)}function Tq(n,r){se();var e=n.r1h_1,t=r.r1h_1;return gt(e,t)}function jq(n){se();var r=ue(n.r1h_1),e=ue(n.w1h_1),t=n.a1i_1,a=t??"";return"{ name: "+r+", path: "+e+", category: "+ue(a)+" }"}function Oq(){return We(n=>zq(n),1,0,7,"cookieEntry")}function Pq(n){return se(),ue(n)}var sd;function se(){sd||(sd=!0,cw=Be.ze("[A-Za-z_$][A-Za-z0-9_$]*"),vw=Be.ze("[._-]+([A-Za-z0-9])"))}function Bq(){return yv(),dw}var dw;function Nq(){return yv(),pw}var pw;function Uq(n,r){yv();var e=Bq(),t=rn.f(),a=0,i=q(n);if(a<i)do{var s=a;a=a+1|0;var l=rr(n,s);w2(l)&&t.ga(l)}while(a<i);var u=t.toString().toLowerCase(),f=e.o2(u),c;r==null?c=null:c=Nq().o2(r);var v=c,h;if(v==null)h=f;else if(f==null)h=v;else{var d=v.c1i_1,p=d??f.c1i_1,g=v.d1i_1;h=new hn(p,g??f.d1i_1)}return h}var od;function yv(){if(!od){od=!0;for(var n=cr.t4(),r=sn(["email","emailaddress","mail"]).x();r.y();){var e=r.z();n.s2(e,new hn("email","email"))}for(var t=sn(["password","currentpassword"]).x();t.y();){var a=t.z();n.s2(a,new hn("current-password","password"))}for(var i=sn(["newpassword","passwordrepeat","repeatpassword","confirmpassword","passwordconfirmation"]).x();i.y();){var s=i.z();n.s2(s,new hn("new-password","password"))}for(var l=sn(["name","fullname","displayname"]).x();l.y();){var u=l.z();n.s2(u,new hn("name"))}for(var f=sn(["givenname","firstname","forename"]).x();f.y();){var c=f.z();n.s2(c,new hn("given-name"))}for(var v=sn(["familyname","lastname","surname"]).x();v.y();){var h=v.z();n.s2(h,new hn("family-name"))}for(var d=sn(["username","login","loginname"]).x();d.y();){var p=d.z();n.s2(p,new hn("username"))}for(var g=sn(["phone","phonenumber","tel","telephone","mobile","mobilephone"]).x();g.y();){var y=g.z();n.s2(y,new hn("tel","tel"))}for(var x=sn(["street","streetaddress","address","addressline"]).x();x.y();){var k=x.z();n.s2(k,new hn("street-address"))}for(var S=sn(["postalcode","postcode","zip","zipcode"]).x();S.y();){var z=S.z();n.s2(z,new hn("postal-code"))}for(var I=sn(["city","town","locality"]).x();I.y();){var C=I.z();n.s2(C,new hn("address-level2"))}for(var T=sn(["country","countryname"]).x();T.y();){var O=T.z();n.s2(O,new hn("country-name"))}for(var F=sn(["organization","organisation","company"]).x();F.y();){var P=F.z();n.s2(P,new hn("organization"))}for(var B=sn(["birthday","birthdate","dateofbirth"]).x();B.y();){var J=B.z();n.s2(J,new hn("bday"))}for(var L=sn(["url","website","homepage"]).x();L.y();){var $=L.z();n.s2($,new hn("url","url"))}for(var R=sn(["onetimecode","otp","verificationcode"]).x();R.y();){var V=R.z();n.s2(V,new hn("one-time-code"))}dw=n.m6(),pw=Ls([j("email",new hn("email","email")),j("uri",new hn("url","url")),j("phone",new hn("tel","tel")),j("strong-password",new hn("new-password","password"))])}}function Dq(){return Te(),_w}var _w;function Rq(n){Te();var r=Dq().df(n);return oc(xi(r,Mq))}function Bf(n){Te();for(var r=Be.ze("[^A-Za-z0-9]+").lf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}var i=e,s=H(i,"",o,o,o,o,Fq),l;return q(s)===0?l="Home":l=s,"load"+l}function Lq(n,r){Te();for(var e=ln(Mr(r,10),16),t=cr.na(e),a=r.x();a.y();){var i=a.z(),s=i.f1i_1+" "+i.g1i_1;t.s2(s,i)}for(var l=t,u=cr.t4(),f=n.x();f.y();){var c=f.z(),v=Bf(c.l1i_1),h=u.o2(v),d;if(h==null){var p=A.m();u.s2(v,p),d=p}else d=h;var g=d;g.n(c)}var y=u.q2(),x;r:{for(var k=y.x();k.y();){var S=k.z();if(S.c1()>1){x=S;break r}}x=null}var z=x;if(z!=null){var I="The pages "+H(z," and ",o,o,o,o,$q)+" would both get the load "+Bf(nc(z).l1i_1)+".";throw mr.o3(w(I))}var C=Jq,T=new Vy(C),O=Dt(n,T),F=H(O,`
`,o,o,o,o,Yq(l));return`import { inlinePageData } from './client.js';
import { apiWith } from './services.js';

`+F}function Mq(n){return Te(),n.dg().e1(1)}function Fq(n){Te();var r;if(q(n)>0){var e=W(n,0),t=k1(e),a=Ge(n,1);r=kr(t)+a}else r=n;return r}function $q(n){return Te(),"'"+n.l1i_1+"'"}function Jq(n,r){Te();var e=n.l1i_1,t=r.l1i_1;return gt(e,t)}function Hq(n){return Te(),"["+n+"]"}function Gq(n){return Te(),n+": string"}function Kq(n){return Te(),"    "+n}function Wq(n){return Te(),"inline."+n}function Yq(n){return r=>{for(var e=Rq(r.l1i_1),t=r.m1i_1,a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=n.o2(s.s1i()),u;if(l==null){var f="pageLoad: '"+r.l1i_1+"' loads "+s.s1i()+", which is not part of the generated client. Only routes under the API prefixes can be loaded.";throw mr.o3(w(f))}else u=l;var c=u;if(c.k1i_1){var v="pageLoad: "+s.s1i()+" needs a body, query or header that a page load cannot fill. "+("Write the load of '"+r.l1i_1+"' yourself.");throw mr.o3(w(v))}for(var h=c.h1i_1,d=A.f1(Mr(h,10)),p=0,g=h.x();g.y();){var y=g.z(),x=p;p=x+1|0;var k=Ci(x),S=s.r1i_1.o2(y),z=S??y;if(!e.l1(z)){var I="pageLoad: "+s.s1i()+" needs the path parameter '"+y+"', and the page '"+r.l1i_1+"' has ",C;e.d1()?C="none":C=H(e,o,o,o,o,o,Hq);var T=I+C+('. Map it with params = mapOf("'+y+'" to "<page parameter>").');throw mr.o3(w(T))}var O="event.params."+z,F=rk(c.i1i_1,k)==="number"?"Number("+O+")":O;d.n(F)}var P=d,B=c.j1i_1,J=A.f1(B),L=0;if(L<B)do{L=L+1|0;var $="undefined";J.n($)}while(L<B);var R=Tt(ne(P,J),"{ silent: true }"),V="        api."+c.e1i_1+"("+H(R)+")";a.n(V)}for(var G=a,nr=r.m1i_1,K=A.f1(Mr(nr,10)),tr=nr.x();tr.y();){var Q=tr.z(),or=Q.o1i_1;K.n(or)}var X=K,xr;e.d1()?xr="":xr="; params: { "+H(e,"; ",o,o,o,o,Gq)+" }";var br=xr,dr="export async function "+Bf(r.l1i_1)+"(event: { fetch: typeof fetch; url: URL"+br+` }) {
    const api = apiWith(event);
    const load = () =>
        Promise.all([
`,Er=dr+H(G,`,
`,o,o,o,o,Kq)+`
        ]);
    const inline = inlinePageData(event.url.pathname);
`+("    const ["+H(X)+`] = inline
`);return Er+("        ? ("+H(X,", ","[","]",o,o,Wq)+` as Awaited<ReturnType<typeof load>>)
`)+`        : await load();
`+("    return { "+H(X)+` };
`)+`}
`}}var ld;function Te(){ld||(ld=!0,_w=Be.ze("\\[([A-Za-z_][A-Za-z0-9_]*)]"),Be.ze("^[A-Za-z_]"))}function Zq(){return $i(),gw}var gw;function wv(n,r){$i();var e;if(n instanceof hr)e=n.b18()?mw(n.c18()):n.c18();else if(n instanceof dn)e=H(n,", ","[","]",o,o,Xq(r));else if(n instanceof er){var t;if(n.d1())t="{}";else{var a=n.r2(),i=`
`+r+"}";t=H(a,`,
`,`{
`,i,o,o,Qq(r))}e=t}else Bs();return e}function mw(n){return $i(),"'"+re(re(re(re(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function Vq(n){$i();var r=r7,e=new Xy(r),t=Dt(n,e);return H(t,`
`,o,o,o,o,n7)}function Xq(n){return r=>wv(r,n)}function Qq(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(Zq().af(e)?e:mw(e))+": "+wv(t,n+"    ")}}function r7(n,r){$i();var e=n.u1i_1,t=r.u1i_1;return gt(e,t)}function n7(n){return $i(),"export const "+n.u1i_1+" = "+wv(new er(n.v1i_1),"")+` as const;
`}var ud;function $i(){ud||(ud=!0,gw=Be.ze("[A-Za-z_$][A-Za-z0-9_$]*"))}function yw(){return Sr(),ww}var ww;function bv(){return Sr(),bw}var bw;function kw(){return Sr(),xw}var xw;function Sw(){return Sr(),Ew}var Ew;function fd(){return Sr(),zw}var zw;function Iw(){return Sr(),Cw}var Cw;function So(){return Sr(),qw}var qw;function e7(){return Sr(),Aw}var Aw;function t7(){return Sr(),Tw}var Tw;function a7(){return Sr(),jw}var jw;function kv(){return Sr(),Ow}var Ow;function i7(){return Sr(),Pw}var Pw;function s7(){return Sr(),Bw}var Bw;function o7(){return Sr(),Nw}var Nw;function l7(){return Sr(),Uw}var Uw;function u7(n,r){var e=Ls(r.slice());return lt(e,j(".gitattributes",`# Generated by ktor-svelte. Do not edit.
# See https://nijasc.github.io/ktor-svelte/features/typescript
`+e_(r,"",o,o,o,o,Z7)))}function f7(n,r){for(var e=sr(r,"paths"),t=e??qr(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();x7(n,l)&&a.s2(s.k2(),s.l2())}var u=bu(a);return new er(lt(r,j("paths",new er(u))))}function c7(n,r){if(n.y1i_1.d1())return r;for(var e=sr(r,"components"),t=e??new er(qr()),a=sr(t,"schemas"),i=a??qr(),s=zc(i),l=n.y1i_1.x();l.y();){var u=l.z(),f=u.w1j_1,c=s.o2(f);if(c==null){var v=Ce().s15(u.x1j_1);s.s2(f,v)}}for(var h=sr(r,"paths"),d=h??qr(),p=cr.na(d.c1()),g=d.r2().x();g.y();){for(var y=g.z(),x=y.k2(),k=y.l2(),S=jr(k),z=cr.na(S.c1()),I=S.r2().x();I.y();){var C=I.z(),T=C.k2(),O=C.k2(),F=C.l2(),P,B;yw().l1(O)?B=F instanceof er:B=!1,B?P=p7(n,F):P=F;var J=P;z.s2(T,J)}var L=new er(z);p.s2(x,L)}var $=p;return new er(lt(lt(r,j("paths",new er($))),j("components",new er(lt(t,j("schemas",new er(s)))))))}function v7(n,r){var e=sr(r,"components"),t;if(e==null)return r;t=e;for(var a=t,i=sr(a,"schemas"),s=i??qr(),l=cr.t4(),u=s.r2().x();u.y();){var f=u.z(),c=f.l2(),v;c instanceof er?v=h7(n,c):v=!1,v&&l.s2(f.k2(),f.l2())}for(var h=cr.na(l.c1()),d=l.r2().x();d.y();){var p=d.z(),g=p.k2(),y=p.l2(),x=new er(lt(jr(y),j("type",En("object"))));h.s2(g,x)}var k=h;if(k.d1())return r;for(var S=cr.t4(),z=s.r2().x();z.y();){var I=z.z(),C=I.k2();(E(k,xn)?k:m()).m2(C)||S.s2(I.k2(),I.l2())}for(var T=S.r2(),O=ln(Mr(T,10),16),F=cr.na(O),P=T.x();P.y();){var B=P.z(),J=B.k2(),L=B.l2(),$=L instanceof er?L:null,R=j($==null?null:cd(n,$),J);F.s2(R.ih_1,R.jh_1)}for(var V=F,G=cr.na(k.c1()),nr=k.r2().x();nr.y();){var K=nr.z(),tr=K.k2(),Q=K.k2(),or=K.l2(),X=V.o2(cd(n,or)),xr=X??Q;G.s2(tr,xr)}for(var br=G,dr=cr.t4(),Er=s.r2().x();Er.y();){var zr=Er.z(),Or=zr.k2();(br.o2(Or)==null||br.o2(Or)===Or)&&dr.s2(zr.k2(),zr.l2())}for(var Pr=cr.na(dr.c1()),pr=dr.r2().x();pr.y();){var Gr=pr.z(),en=Gr.k2(),Yr=Gr.k2(),_r=Gr.l2(),Fr=k.o2(Yr),Zr=Fr??_r;Pr.s2(en,Zr)}var Vr=Pr,$r=new er(lt(a,j("schemas",new er(Vr))));return jr(Lf(br,n,new er(lt(r,j("components",$r)))))}function h7(n,r){var e;if(D(ft(pt(n,r)),ca(["object","null"]))){var t=sr(r,"properties");e=!(t??qr()).d1()}else e=!1;return e}function cd(n,r){return new er(G2(r,"title"))}function d7(n,r){var e=new It,t=new iy,a=new It;gl(a,"$ref","#/components/schemas/"+r);var i=a.d17();t.r18(i);var s=new It;gl(s,"type","null");var l=s.d17();t.r18(l);var u=t.d17();return e.p18("oneOf",u),e.d17()}function p7(n,r){for(var e=sr(r,"responses"),t=e??qr(),a=zc(t),i=n.y1i_1.x();i.y();){var s=i.z(),l=new It;gl(l,"description","");var u=new It,f="application/json",c=new It,v=new It;gl(v,"$ref","#/components/schemas/"+s.w1j_1);var h=v.d17();c.p18("schema",h);var d=c.d17();u.p18(f,d);var p=u.d17();l.p18("content",p);for(var g=l.d17(),y=s.y1j_1.x();y.y();){var x=y.z(),k=x.toString(),S=a.o2(k);if(S==null){var z=g;a.s2(k,z)}}}return new er(lt(r,j("responses",new er(a))))}function _7(n,r){var e=n.x1i_1,t;if(e==null)return"";t=e;var a=t,i=jr(Ce().s15(a)),s=Pn.i1();return`
`+xv(n,"PublicConfig",i,s,r)}function g7(n){var r=n.c1j_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+re(re(t,"\\","\\\\"),"'","\\'")+`';
`}function m7(n){var r=n.e1j_1,e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!1;break r}for(var a=r.x();a.y();){var i=a.z();if(i.a1k_1!=null){e=!0;break r}}e=!1}var s=e,l=n.e1j_1,u=V7,f=new ew(u),c=Dt(l,f),v=H(c,"",o,o,o,o,X7),h=n.c1j_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.c1j_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.c1j_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+va("current-user.svelte.ts",".ts")+`.js';
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
`}function y7(n,r){var e=n.b1j_1,t;if(e==null)return"";t=e;var a=t;return Dw(n,"CurrentUser",a.b1k_1,a.c1k_1,r)}function w7(n,r){var e=n.f1j_1,t;if(e==null)return"";t=e;var a=t;return Dw(n,"UserPreferences",a.e1k_1,a.f1k_1,r)}function Dw(n,r,e,t,a){var i=a.p2(),s;r:{for(var l=i.x();l.y();){var u=l.z();if($n(u)===e){s=u;break r}}s=null}var f=s;if(f!=null)return`
export type `+r+" = "+$n(f)+`;
`;var c=jr(Ce().s15(t)),v=Pn.i1();return`
`+xv(n,r,c,v,a)}function b7(n,r){for(var e=sr(jr(Ce().s15(r.f1k_1)),"properties"),t=(e??qr()).p2(),a=r.i1k_1,i=cr.t4(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2();t.l1(u)&&i.s2(l.k2(),l.l2())}var f=i,c=f.r2(),v=H(c,", ",o,o,o,o,Q7),h=Sw().q15(iv.z17(),Ce().s15(r.h1k_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,p=me(r.g1k_1),g;return q(v)===0?g="":g=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(p+", state, defaults, {"+g+`});
`)}function k7(n,r){var e=!n.d1j_1.d1(),t=e?"CurrentUser, Permission":"CurrentUser",a=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.d1k_1+`', state);
`),i;return e?i=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:i="",a+i}function x7(n,r){var e,t=n.w1i_1,a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!0;break r}for(var s=t.x();s.y();){var l=s.z();if(r===l||Ie(r,l+"/")){a=!1;break r}}a=!0}if(a){var u;if(n.p1j_1.d1())u=!0;else{var f=n.p1j_1,c;r:{var v;if(E(f,Z)?v=f.d1():v=!1,v){c=!1;break r}for(var h=f.x();h.y();){var d=h.z();if(d==="/"||r===d||Ie(r,d+"/")){c=!0;break r}}c=!1}u=c}e=u}else e=!1;return e}function S7(n,r){if(r.d1()&&n.o1j_1.d1()&&n.q1j_1.d1()&&!n.r1j_1&&!n.s1j_1)return`export {};
`;for(var e=Pn.i1(),t=A.f1(r.c1()),a=r.r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=j(s,xv(n,$n(s),jr(l),e,r));t.n(u)}for(var f=t,c=n.q1j_1.q2(),v=A.m(),h=c.x();h.y();){var d=h.z();d.l1k_1&&v.n(d)}for(var p=A.f1(Mr(v,10)),g=v.x();g.y();){var y=g.z(),x=j(y.j1k_1,Mw(n,y.j1k_1,y.k1k_1));p.n(x)}var k=p,S=ne(f,k),z=rA,I=new tw(z),C=Dt(S,I),T=H(C,`
`,o,o,o,o,nA),O;e.l1("LucideIcon")?O=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:O="";var F=O,P=r.q2(),B;r:{var J;if(E(P,Z)?J=P.d1():J=!1,J){B=!1;break r}for(var L=P.x();L.y();){var $=L.z();if(Ev(n,jr($))){B=!0;break r}}B=!1}var R=B,V=`declare const brand: unique symbol;
`,G;R||n.s1j_1?G=V:G=null;var nr=G,K=Le("dates.ts"),tr;n.r1j_1?tr=K:tr=null;var Q=tr,or=Le("quantities.ts"),X;n.s1j_1?X=or:X=null;var xr=X,br;q(T)===0?br=null:br=T;var dr=br,Er=H(Ke([nr,Q,xr,dr]),`
`),zr;return q(Er)===0?zr=`export {};
`:zr=Er,F+zr}function xv(n,r,e,t,a){var i=zl(n,Gw(n,e),""),s=yu(n,e),l;if(s!=null){var u=e.i18("enum"),f=u==null?null:ps(u),c;if(f==null)c=null;else{var v;r:{var h;if(E(f,Z)?h=f.d1():h=!1,h){v=!0;break r}for(var d=f.x();d.y();){var p=d.z();if(p instanceof ge){v=!1;break r}}v=!0}c=v}l=c===!0}else l=!1;if(l)return i+Mw(n,r,s);if(Ev(n,e)){var g=Gn(n,e,t);return i+("export type "+r+" = "+g+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+g+"): "+r+" => value as "+r+`;
`)}if(zv(n,e))return i+("export interface "+r+" "+Fw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+Df(n,e,a,"    ",Rt())+`),
`)+z7(n,e)+q7(n,r,e,a)+`};
`;var y=i+("export type "+r+" = "+Gn(n,e,t)+`;
`),x=E7(n,r,e,a);return y+(x??"")}function E7(n,r,e,t){var a=sr(e,"discriminator"),i=a==null?null:Dr(a,"propertyName"),s;if(i==null)return null;s=i;var l=s,u=mn(e,"oneOf"),f=u??mn(e,"anyOf"),c;if(f==null)return null;c=f;var v=c,h=sr(e,"discriminator"),d=h==null?null:sr(h,"mapping"),p=d==null?null:d.p2(),g=p==null?null:_t(p),y=g??fr(),x;if(y.d1()){for(var k=A.f1(Mr(v,10)),S=v.x();S.y();){var z=S.z(),I=Sl(n,jr(z)),C;if(I==null)C=null;else{var T=t.o2(I);C=T==null?null:jr(T)}var O=C,F=O??jr(z),P=sr(F,"properties"),B=P==null?null:sr(P,l),J=B==null?null:mn(B,"enum"),L=J==null?null:ec(J),$=L instanceof hr?L:null,R=$==null?null:Jn($),V;if(R==null)return null;V=R;var G=V;k.n(G)}x=k}else x=y;var nr=x;if(nr.d1())return null;var K=qn(n,En(l)),tr=H(nr,o,o,o,o,o,eA(n));return`
export const `+r+` = {
`+("    types: ["+tr+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+K+"]]: (value: Extract<"+r+", { "+Ye(l)+`: K }>) => R }): R =>
`)+("        (cases[value["+K+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function z7(n,r){for(var e=ku(r,"required"),t=sr(r,"properties"),a=t??qr(),i=A.m(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2(),f=l.l2(),c=ne(C7(n,jr(f),e.l1(u)),I7(n,u,jr(f))),v;if(c.d1())v=null;else{var h=Ye(u);v="        "+h+": { "+H(c,o,o,o,o,o,tA)+" },"}var d=v;d==null||i.n(d)}var p=i;return p.d1()?"":`    bounds: {
`+H(p,`
`)+`
    },
`}function I7(n,r,e){var t;if(pt(n,e).l1("string"))t=!1;else{var a=El(n,e),i=a==null?null:pt(n,a);t=(i==null?null:i.l1("string"))!==!0}if(t)return fr();var s=Dr(e,"format"),l;if(s==null){var u=El(n,e);l=u==null?null:Dr(u,"format")}else l=s;var f=Uq(r,l),c;if(f==null)return fr();c=f;var v=c,h=v.c1i_1,d;h==null?d=null:d=j("autocomplete",qn(n,En(h)));var p=d,g=v.d1i_1,y;return g==null?y=null:y=j("type",qn(n,En(g))),Ke([p,y])}function C7(n,r,e){var t=pt(n,r).l1("integer"),a=j("required","true"),i;Rw(n,r,e)?i=a:i=null;var s=i,l=xe(n,r,"minLength"),u;l==null?u=null:u=j("minlength",Bt(l));var f=u,c=xe(n,r,"maxLength"),v;c==null?v=null:v=j("maxlength",Bt(c));var h=v,d=dd(n,r,t,"minimum","exclusiveMinimum",1),p;d==null?p=null:p=j("min",d);var g=p,y=dd(n,r,t,"maximum","exclusiveMaximum",-1),x;y==null?x=null:x=j("max",y);var k=x,S=Dr(r,"pattern"),z;return S==null?z=null:z=j("pattern",qn(n,En(S))),Ke([s,f,h,g,k,z])}function Rw(n,r,e){if(Iv(n,r)||r.i18("enum")!=null)return!1;var t;if(pt(n,r).l1("string")){var a=xe(n,r,"minLength");t=(a??0)>=1}else t=e&&Lw(n,r);return t}function Lw(n,r){var e=pt(n,r),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function q7(n,r,e,t){if(!Sv(n,e,t,Rt()))return"";for(var a=ku(e,"required"),i=sr(e,"properties"),s=i??qr(),l=A.m(),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=jr(v),d="value"+(bv().af(c)?"."+c:"["+qn(n,En(c))+"]"),p=ne(A7(n,c,d,h,a.l1(c)),Nf(n,h,d,Uf(n,c),"        ",0,t));Ti(l,p)}var g=l,y="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return y+H(g,"",o,o,o,o,aA)+`        return errors;
    },
`}function Sv(n,r,e,t){var a;if(zv(n,r)){var i=sr(r,"properties"),s=(i??qr()).q2(),l;r:{var u;if(E(s,Z)?u=s.d1():u=!1,u){l=!1;break r}for(var f=s.x();f.y();){var c=f.z(),v=jr(c),h,d,p=l7(),g;n:{var y;if(E(p,Z)?y=p.d1():y=!1,y){g=!1;break n}for(var x=p.x();x.y();){var k=x.z();if(xe(n,v,k)!=null||k==="pattern"&&Dr(v,k)!=null){g=!0;break n}}g=!1}if(g?d=!0:d=ql().s1k(Dr(v,"format"))!=null,d)h=!0;else{var S=Sl(n,v),z;if(S==null)z=null;else{var I;if(t.l1(S))I=!1;else{var C=e.o2(S),T=C instanceof er?C:null,O;T==null?O=null:O=Sv(n,T,e,Io(t,S)),I=O===!0}z=I}h=z===!0}if(h){l=!0;break r}}l=!1}a=l}else a=!1;return a}function Sl(n,r){var e=Dr(r,"$ref");if(e!=null)return Oi(e,47);var t=El(n,r);if(t!=null)return Sl(n,t);if(pt(n,r).l1("array")){var a=sr(r,"items"),i;return a==null?i=null:i=Sl(n,a),i}return null}function El(n,r){var e=mn(r,"oneOf"),t=e??mn(r,"anyOf"),a;if(t==null)a=null;else{for(var i=A.m(),s=t.x();s.y();){var l=s.z(),u=l instanceof er?l:null;u==null||i.n(u)}a=i}var f=a,c;if(f==null)c=null;else{for(var v=A.m(),h=f.x();h.y();){var d=h.z();D(pt(n,d),jn("null"))||v.n(d)}c=v}var p=c;return p==null?null:ec(p)}function A7(n,r,e,t,a){var i=qn(n,En(r)),s=xe(n,t,"minLength"),l=s==null?null:Ao(s),u=xe(n,t,"maxLength"),f=u==null?null:Ao(u),c=t.i18("pattern"),v=c instanceof hr?c:null,h;if(v==null)h=null;else{var d;v.b18()?d=v:d=null,h=d}var p=h,g=p==null?null:p.c18(),y=ql().s1k(Dr(t,"format")),x=xe(n,t,"minimum"),k;x==null?k=null:k=j(x,!1);var S=k,z;if(S==null){var I=xe(n,t,"exclusiveMinimum"),C;I==null?C=null:C=j(I,!0),z=C}else z=S;var T=z,O=xe(n,t,"maximum"),F;O==null?F=null:F=j(O,!1);var P=F,B;if(P==null){var J=xe(n,t,"exclusiveMaximum"),L;J==null?L=null:L=j(J,!0),B=L}else B=P;var $=B,R=A.m();if(Rw(n,t,a)&&Lw(n,t)){var V="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Vt(i,n,"Required.");R.n(V)}if(l!=null||f!=null||g!=null||y!=null){var G="        if (typeof "+e+" === 'string') {";if(R.n(G),l!=null||f!=null){var nr="            const length = [..."+e+"].length;";R.n(nr)}if(l!=null){var K="            if (length < "+l+") "+Vt(i,n,ni.t1k(l));R.n(K)}if(f!=null){var tr="            if (length > "+f+") "+Vt(i,n,ni.u1k(f));R.n(tr)}if(g!=null){var Q=n.t1j_1,or=gd();Q.n(or);var X="            if (!matches("+qn(n,En(g))+", "+e+")) "+Vt(i,n,ni.v1k(g));R.n(X)}if(y!=null){var xr=n.t1j_1,br=gd();xr.n(br);var dr=H(y.x1k_1," && ",o,o,o,o,iA(n,e)),Er="            if (!("+dr+")) "+Vt(i,n,y.y1k_1);R.n(Er)}var zr="        }";R.n(zr)}if(T!=null||$!=null){var Or="        if (typeof "+e+" === 'number') {";if(R.n(Or),T!=null){var Pr=T.nh(),pr=T.oh(),Gr=pr?"<=":"<",en="            if ("+e+" "+Gr+" "+Bt(Pr)+") "+Vt(i,n,ni.z1k(Pr,pr));R.n(en)}if($!=null){var Yr=$.nh(),_r=$.oh(),Fr=_r?">=":">",Zr="            if ("+e+" "+Fr+" "+Bt(Yr)+") "+Vt(i,n,ni.a1l(Yr,_r));R.n(Zr)}var Vr="        }";R.n(Vr)}if(!R.d1()){var $r=n.t1j_1,tn=rb();$r.n(tn)}return R}function Nf(n,r,e,t,a,i,s){var l=Dr(r,"$ref");if(l!=null){var u=Oi(l,47),f=s.o2(u),c=f instanceof er?f:null,v;if(c==null)return fr();v=c;var h=v;if(!Sv(n,h,s,Rt()))return fr();var d=n.t1j_1,p=sn([rb(),MA()]);return Ti(d,p),jn(a+"if ("+e+" != null) addNested(errors, `"+t+".`, "+$n(u)+".validate("+e+"));")}var g=El(n,r);if(g!=null)return Nf(n,g,e,t,a,i,s);if(!pt(n,r).l1("array"))return fr();var y=sr(r,"items"),x;if(y==null)return fr();x=y;var k=x,S=i===0?"":""+(i+1|0),z="item"+S,I="index"+S,C=Nf(n,k,z,t+"[${"+I+"}]",a+"        ",i+1|0,s);return C.d1()?fr():ne(ne(sn([a+"if (Array.isArray("+e+")) {",a+"    "+e+".forEach(("+z+", "+I+") => {"]),C),sn([a+"    });",a+"}"]))}function Uf(n,r){return re(re(re(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function xe(n,r,e){var t=r.i18(e),a=t instanceof hr?t:null,i;if(a==null)i=null;else{var s;a.b18()?s=null:s=a,i=s}var l=i,u=l==null?null:Jn(l);return u==null?null:bc(u)}function pt(n,r){var e=r.i18("type"),t;if(e instanceof dn){for(var a=A.f1(Mr(e,10)),i=e.x();i.y();){var s=i.z(),l=On(s).c18();a.n(l)}t=a}else e instanceof hr?t=jn(e.c18()):t=fr();return t}function Mw(n,r,e){var t=H(e,"",o,o,o,o,sA(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function T7(n,r,e){for(var t=cr.t4(),a=bu(e).r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=yu(n,jr(l));if(u!=null){var f=ft(u),c=t.o2(f);if(c==null){var v=new Of($n(s),u,!1);t.s2(f,v)}}}for(var h=cr.t4(),d=cr.t4(),p=e.r2().x();p.y();){var g=p.z(),y=g.k2(),x=g.l2();ti(n,h,d,x,$n(y),$n(y),!0)}var k=sr(r,"paths");k==null||ti(n,h,d,k,"","",!1);for(var S=h.p2(),z=A.m(),I=S.x();I.y();){var C=I.z(),T;(E(t,xn)?t:m()).m2(C)?T=!1:T=!D(C,n.o1j_1),T&&z.n(C)}for(var O=oA(d),F=new aw(O),P=Dt(z,F),B=cr.na(ln(Mr(P,10),16)),J=P.x();J.y();){var L=J.z(),$=ze(h,L),R=lA,V=nk($,nS([R,uA]));B.s2(L,V)}for(var G=B,nr=G.q2(),K=new sw(nr),tr=fx(K),Q=e.p2(),or=A.f1(Mr(Q,10)),X=Q.x();X.y();){var xr=X.z(),br=$n(xr);or.n(br)}for(var dr=tc(Tt(Tt(or,"LucideIcon"),"PublicConfig")),Er=cr.oa(t),zr=P.x();zr.y();){var Or=zr.z(),Pr=ze(G,Or),pr=$n(Pr.c1l_1),Gr;if(ze(tr,pr)>1||dr.l1(pr)){var en=Pr.b1l_1,Yr;q(en)===0?Yr=pr:Yr=en+pr,Gr=Yr}else Gr=pr;var _r=Gr,Fr;if(!dr.l1(_r))Fr=_r;else{var Zr=Ic(2,fA),Vr=xi(Zr,cA(_r)),$r;r:{for(var tn=Vr.x();tn.y();){var pn=tn.z();if(!dr.l1(pn)){$r=pn;break r}}throw Tr.r("Sequence contains no element matching the predicate.")}Fr=$r}var wn=Fr;dr.n(wn);var _n=new Of(wn,ze(d,Or),!0);Er.s2(Or,_n)}return Er}function yu(n,r){var e=mn(r,"enum"),t;if(e==null)return null;t=e;for(var a=t,i=A.m(),s=a.x();s.y();){var l=s.z();l instanceof ge||i.n(l)}var u=i,f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof hr?d=!h.b18():d=!0,d){f=!0;break r}}f=!1}if(f)return null;for(var p=A.f1(Mr(u,10)),g=u.x();g.y();){var y=g.z(),x=On(y).c18();p.n(x)}var k=hi(p),S;return k.c1()>1?S=k:S=null,S}function Ev(n,r){var e,t,a=t7(),i=r.i18("type"),s=i instanceof hr?i:null;if(ek(a,s==null?null:Jn(s))?t=r.i18("title")!=null:t=!1,t){var l=r.p2(),u;r:{var f;if(E(l,Z)?f=l.d1():f=!1,f){u=!0;break r}for(var c=l.x();c.y();){var v=c.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function zv(n,r){return sr(r,"properties")!=null&&r.i18("allOf")==null}function Df(n,r,e,t,a){var i=sr(r,"properties"),s=i??qr();if(s.d1())return"{}";for(var l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=t+"    "+Ye(c)+": "+da(n,jr(v),e,t+"    ",a)+",";l.n(h)}var d=l;return H(Tt(ne(jn("{"),d),t+"}"),`
`)}function da(n,r,e,t,a){if(Iv(n,r))return"null";var i=Dr(r,"$ref");if(i!=null){var s=Oi(i,47),l=e.o2(s),u=l instanceof er?l:null,f;if(u==null)return"null";f=u;var c=f;return zv(n,c)?$n(s)+".empty()":Ev(n,c)?$n(s)+"("+da(n,c,e,t,Io(a,s))+")":a.l1(s)?"null":da(n,c,e,t,Io(a,s))}var v=r.i18("enum");if(v!=null){var h=qu(ps(v)),d;h==null?d=null:d=qn(n,h);var p=d;return p??"null"}var g=r.i18("const");if(g!=null)return qn(n,g);var y=mn(r,"oneOf"),x=y??mn(r,"anyOf");if(x!=null){var k=qu(x),S;k==null?S=null:S=da(n,jr(k),e,t,a);var z=S;return z??"null"}var I=mn(r,"allOf");if(I!=null)return I.c1()===1?da(n,jr(o_(I)),e,t,a):H(I,", ","{ "," }",o,o,vA(n,e,t,a));var C=r.i18("type"),T;if(C instanceof dn){var O=qu(C),F=O==null?null:On(O);T=F==null?null:F.c18()}else C instanceof hr?T=Jn(C):T=null;var P=T,B;switch(P){case"string":var J=Av(r),L;J==null?L=null:L="'' as "+J;var $=L,R;if($==null){var V=Zw(r),G;V==null?G=null:G=ze(e7(),V)+" as "+V,R=G}else R=$;var nr=R;B=nr??"''";break;case"integer":case"number":B="0";break;case"boolean":B="false";break;case"array":var K=mn(r,"prefixItems"),tr;K==null?tr=null:tr=H(K,", ","[","]",o,o,hA(n,e,t,a));var Q=tr;B=Q??"[]";break;case"object":B=Df(n,r,e,t,a);break;case null:B=r.i18("properties")!=null?Df(n,r,e,t,a):"null";break;default:B="null";break}return B}function Iv(n,r){var e=r.i18("type"),t=mn(r,"oneOf"),a=t??fr(),i=mn(r,"anyOf"),s=i??fr(),l=ne(a,s),u,f,c,v,h;if(e instanceof dn){var d;r:{var p;if(E(e,Z)?p=e.d1():p=!1,p){d=!1;break r}for(var g=e.x();g.y();){var y=g.z();if(On(y).c18()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof hr?x=e.c18()==="null":x=!1,v=x}if(v)c=!0;else{var k=r.i18("nullable"),S=k instanceof hr?k:null;c=(S==null?null:Jn(S))==="true"}if(c)f=!0;else{var z=mn(r,"enum"),I=z??fr(),C;r:{var T;if(E(I,Z)?T=I.d1():T=!1,T){C=!1;break r}for(var O=I.x();O.y();){var F=O.z();if(F instanceof ge){C=!0;break r}}C=!1}f=C}if(f)u=!0;else{var P;r:{var B;if(E(l,Z)?B=l.d1():B=!1,B){P=!1;break r}for(var J=l.x();J.y();){var L=J.z(),$=L instanceof er?L:null,R;if($==null?R=null:R=Iv(n,$),R===!0){P=!0;break r}}P=!1}u=P}return u}function Fw(n,r,e,t){for(var a=ku(r,"required"),i=sr(r,"properties"),s=i??qr(),l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=a.l1(c)?"":"?",d=Yw(jr(v))?"readonly ":"",p=zl(n,Gw(n,jr(v)),t+"    ")+(t+"    "+d+Ye(c)+h+": "+Gn(n,jr(v),e,t+"    ")+";");l.n(p)}var g=l;return H(Tt(ne(jn("{"),g),t+"}"),`
`)}function Gn(n,r,e,t){t=t===o?"":t;var a=Dr(r,"$ref");if(a!=null){var i=$n(Oi(a,47));return e.n(i),i}var s=r.i18("enum");if(s!=null){for(var l=ps(s),u=A.m(),f=l.x();f.y();){var c=f.z(),v=c instanceof hr?c:null,h=v==null?null:Jn(v);h==null||u.n(h)}var d=ft(u),p;if(n.o1j_1.d1()?p=!1:p=D(d,n.o1j_1),p){var g="LucideIcon";return e.n(g),"LucideIcon"}var y=yu(n,r);if(y!=null){var x=n.q1j_1.o2(ft(y));if(x!=null){var k=x.j1k_1;e.n(k);var S,z=ps(s),I;r:{var C;if(E(z,Z)?C=z.d1():C=!1,C){I=!1;break r}for(var T=z.x();T.y();){var O=T.z();if(O instanceof ge){I=!0;break r}}I=!1}return I?S=x.j1k_1+" | null":S=x.j1k_1,S}}var F=ps(s),P=H(F," | ",o,o,o,o,dA(n)),B;return q(P)===0?B="never":B=P,B}var J=r.i18("const");if(J!=null)return qn(n,J);var L=mn(r,"oneOf");if(L!=null)return hd(n,L,e,t);var $=mn(r,"anyOf");if($!=null)return hd(n,$,e,t);var R=mn(r,"allOf");if(R!=null)return H(R," & ",o,o,o,o,pA(n,e,t));var V=r.i18("type"),G;if(V==null)G=r.i18("properties")!=null?$w(n,r,e,t):"unknown";else if(V instanceof dn){for(var nr=A.f1(Mr(V,10)),K=V.x();K.y();){var tr=K.z(),Q=vd(n,On(tr).c18(),r,e,t);nr.n(Q)}G=H(hi(nr)," | ")}else G=vd(n,On(V).c18(),r,e,t);return G}function vd(n,r,e,t,a){var i;switch(r){case"string":var s=Av(e),l=s??Zw(e),u;l==null?u=null:(t.n(l),u=l);var f=u;i=f??"string";break;case"integer":case"number":i="number";break;case"boolean":i="boolean";break;case"null":i="null";break;case"array":i=j7(n,e,t,a);break;case"object":i=$w(n,e,t,a);break;default:i="unknown";break}return i}function j7(n,r,e,t){var a=mn(r,"prefixItems");if(a!=null)return H(a,", ","[","]",o,o,_A(n,e,t));var i=r.i18("items"),s=i==null?null:jr(i),l;if(s==null)return"unknown[]";l=s;var u=l,f=Gn(n,u,e,t);return zs(f," | ")||zs(f," & ")?"("+f+")[]":f+"[]"}function $w(n,r,e,t){var a=sr(r,"properties");if(!(a??qr()).d1())return Fw(n,r,e,t);var i=r.i18("additionalProperties"),s=i instanceof er?i:null;return s!=null?"Record<string, "+Gn(n,s,e,t)+">":"Record<string, unknown>"}function hd(n,r,e,t){for(var a=A.f1(Mr(r,10)),i=r.x();i.y();){var s=i.z(),l=Gn(n,jr(s),e,t);a.n(l)}return H(hi(a)," | ")}function qn(n,r){var e;if(r instanceof ge)e="null";else{var t;r instanceof hr?t=r.b18():t=!1,t?e=me(r.c18()):r instanceof hr?e=r.c18():e="unknown"}return e}function O7(n,r,e){for(var t=Pn.i1(),a=cr.t4(),i=A.m(),s=cr.t4(),l=r.r2().x();l.y();)for(var u=l.z(),f=u.k2(),c=u.l2(),v=jr(c),h=yw().x();h.y();){var d=h.z(),p=sr(v,d);if(p!=null){var g=Hw(n,f),y=a.o2(g),x;if(y==null){var k=A.m();a.s2(g,k),x=k}else x=y;var S=x,z=M7(n,f,d,v,p);S.n(z)}}var I=tc(kv());I.g1(a.p2());for(var C=I,T=bu(a),O=A.f1(T.c1()),F=T.r2().x();F.y();){var P=F.z(),B=P.k2(),J=P.l2(),L=Pn.i1(),$=rn.f(),R=H(J,`
`,o,o,o,o,gA(t,n,L,B,i,s,C,$)),V=$.toString()+`
export const `+B+` = {
`+R+`
};
`;O.n(V)}for(var G=O,nr=ya(t),K=A.m(),tr=nr.x();tr.y();){for(var Q=tr.z(),or=A.f1(Mr(e,10)),X=e.x();X.y();){var xr=X.z(),br=$n(xr);or.n(br)}or.l1(Q)&&K.n(Q)}var dr=K,Er,zr=$2(a.q2()),Or;r:{var Pr;if(E(zr,Z)?Pr=zr.d1():Pr=!1,Pr){Or=!1;break r}for(var pr=zr.x();pr.y();){var Gr=pr.z();if(Gr.k1l_1){Or=!0;break r}}Or=!1}Or?Er="ApiError, request, stream":Er="ApiError, request";var en=Er,Yr=n.a1j_1.d1()?en:en+", codeMessages, errorCode",_r=rn.f();_r.fa("import { "+Yr+`, type RequestOptions } from './client.js';
`);var Fr=n.x1i_1!=null?Tt(dr,"PublicConfig"):dr,Zr=n.a1j_1.d1()?Fr:ya(Tt(Fr,"ErrorCode"));Zr.d1()||_r.fa("import type { "+H(Zr)+` } from './types.js';
`),_r.fa(`
`);for(var Vr=G.x();Vr.y();){var $r=Vr.z();_r.fa($r).fa(`
`)}if(_r.fa(D7(n,i)),n.a1j_1.d1()||_r.fa(a7()),!s.d1()){_r.fa(`export const uploadRules = {
`);for(var tn=s.r2(),pn=mA,wn=new iw(pn),_n=Dt(tn,wn).x();_n.y();){var Yn=_n.z(),Zn=Yn.k2(),ke=Yn.l2();_r.fa("    '"+Zn+"': "+ke+`,
`)}_r.fa(`} as const;

`)}return n.x1i_1!=null&&_r.fa(Le("public-config.ts")),_r.fa("export const api = { "+H(ya(a.p2()))+` };
`),_r.fa(Le("api-with.ts")),_r.toString()}function P7(n,r){var e=sr(r,"properties"),t;if(e==null)t=null;else{var a;e.d1()?a=null:a=e,t=a}var i=t,s;if(i==null)return null;s=i;var l=s,u=ft(ku(r,"required")),f=l.r2(),c=H(f,"; ",o,o,o,o,yA(u));return"{ "+c+" }"}function B7(n,r){var e=r.i18("maxBytes"),t=e==null?null:On(e),a=t==null?null:_C(t),i;a==null?i=null:i="maxBytes: "+a.toString();var s=i,l=mn(r,"types"),u;if(l==null)u=null;else{for(var f=A.f1(Mr(l,10)),c=l.x();c.y();){var v=c.z(),h=me(On(v).c18());f.n(h)}u=f}var d=u,p;if(d==null)p=null;else{var g;d.d1()?g=null:g=d,p=g}var y=p,x;y==null?x=null:x="types: ["+H(y)+"]";var k=x,S=r.i18("maxFiles"),z=S==null?null:On(S),I=z==null?null:gC(z),C;I==null?C=null:C="maxFiles: "+I;var T=Ke([s,k,C]);return"{ "+H(T)+" }"}function N7(n){return Jw(n,"ErrorCode",n.a1j_1)}function U7(n){var r=ql().q1k_1.x1k_1,e=H(r,"",o,o,o,o,wA(n));return`
export interface PasswordRule {
    readonly pattern: string;
    readonly requirement: string;
}

`+(`export const passwordRules: readonly PasswordRule[] = [
`+e+`];

`)+("export const passwordMessage = "+qn(n,En(ql().q1k_1.y1k_1))+`;

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
`}function Jw(n,r,e){if(e.d1())return"";var t=H(e," | ",o,o,o,o,bA),a=H(e,"",o,o,o,o,kA);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+a+`} as const;
`}function D7(n,r){var e=H(r,"",o,o,o,o,xA),t=H(r,"",o,o,o,o,SA);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function R7(n,r,e){var t=qv(r),a=Ic(1,EA),i=xi(a,zA(t)),s;r:{for(var l=i.x();l.y();){var u=l.z();if(!e.l1(u)){s=u;break r}}throw Tr.r("Sequence contains no element matching the predicate.")}var f=s;return e.n(f),f}function L7(n,r,e,t){var a=Z2([r,r+H(e,"",o,o,o,o,IA)]),i;r:{for(var s=a.x();s.y();){var l=s.z();if(!t.l1(l)){i=l;break r}}i=null}var u=i,f;if(u==null){var c=Ic(2,CA),v=xi(c,qA(r)),h;r:{for(var d=v.x();d.y();){var p=d.z();if(!t.l1(p)){h=p;break r}}throw Tr.r("Sequence contains no element matching the predicate.")}f=h}else f=u;var g=f;return t.n(g),g}function M7(n,r,e,t,a){for(var i=Pn.i1(),s=mn(t,"parameters"),l=s??fr(),u=mn(a,"parameters"),f=u??fr(),c=ne(l,f),v=A.f1(Mr(c,10)),h=c.x();h.y();){var d=h.z(),p=jr(d);v.n(p)}for(var g=v,y=kw().df(r),x=oc(xi(y,AA)),k=A.m(),S=A.m(),z=x.x();z.y();){var I=z.z(),C;r:{for(var T=g.x();T.y();){var O=T.z();if(Dr(O,"name")===I&&Dr(O,"in")==="path"){C=O;break r}}C=null}var F=C,P=F==null?null:sr(F,"schema"),B;P==null?B=null:B=Gn(n,P,i);var J=B,L;if(J==null)L=null;else{var $;J==="unknown"||J==="string"?$=null:$=J,L=$}var R=L,V=R??"string | number",G=Kw(I)+": "+V;k.n(G),S.n(V)}var nr=sr(a,"requestBody"),K=nr==null?null:sr(nr,"content"),tr=K==null?null:K.r2(),Q;if(tr==null)Q=null;else{var or;r:{for(var X=tr.x();X.y();){var xr=X.z();if(Ie(xr.k2(),"multipart/")){or=xr;break r}}or=null}Q=or}var br=Q,dr=br==null?null:br.l2(),Er;dr==null?Er=null:Er=dr instanceof er?dr:null;var zr=Er,Or=zr==null?null:sr(zr,"schema"),Pr;Or==null?Pr=null:Pr=P7(n,Or);var pr=Pr,Gr;if(br!=null)Gr=pr??"FormData";else{var en;K==null?en=null:en=Rf(n,K);var Yr=en,_r;Yr==null?_r=null:_r=Gn(n,Yr,i),Gr=_r}var Fr=Gr,Zr;if(br==null){var Vr;K==null?Vr=null:Vr=Rf(n,K);var $r=Vr,tn;$r==null?tn=null:tn=F7(n,$r);var pn=tn;Zr=pn??fr()}else Zr=fr();var wn=Zr,_n;wn.d1()?_n=Fr:_n="Omit<"+Fr+", "+H(wn," | ",o,o,o,o,TA)+">";var Yn=_n;if(nr!=null){var Zn="body: "+(Yn??"unknown");k.n(Zn)}for(var ke=A.m(),oe=g.x();oe.y();){var je=oe.z();Dr(je,"in")==="query"&&ke.n(je)}var Bn=ke;if(!Bn.d1()){var De=H(Bn,"; ",o,o,o,o,jA(n,i)),Oe;r:{var Ze;if(E(Bn,Z)?Ze=Bn.d1():Ze=!1,Ze){Oe=!1;break r}for(var Vn=Bn.x();Vn.y();){var Nn=Vn.z(),An=Nn.i18("required"),bn=An==null?null:On(An);if((bn==null?null:Jn(bn))==="true"){Oe=!0;break r}}Oe=!1}var Ji=Oe,Hi="query"+(Ji?"":"?")+": { "+De+" }";k.n(Hi)}for(var Mt=A.m(),mt=g.x();mt.y();){var yt=mt.z(),Ft;if(Dr(yt,"in")==="header"){var La=s7(),wt=Dr(yt,"name"),Ma=(wt??"").toLowerCase();Ft=!La.l1(Ma)}else Ft=!1;Ft&&Mt.n(yt)}var Re=Mt;if(!Re.d1()){var Gi=H(Re,"; ",o,o,o,o,OA(n,i)),bt;r:{var $t;if(E(Re,Z)?$t=Re.d1():$t=!1,$t){bt=!1;break r}for(var Fa=Re.x();Fa.y();){var Ki=Fa.z(),$a=Ki.i18("required"),Jt=$a==null?null:On($a);if((Jt==null?null:Jn(Jt))==="true"){bt=!0;break r}}bt=!1}var Wi=bt,Yi="headers"+(Wi?"":"?")+": { "+Gi+" }";k.n(Yi)}var Ja="options?: RequestOptions";k.n(Ja);var Ha=x.d1()?me(r):$7(n,r),Ht=sr(a,"x-ktor-svelte-upload"),Gt;Ht==null?Gt=null:Gt=B7(n,Ht);var Kt=Gt,Ga=a.i18("x-ktor-svelte-timeout"),kt=Ga==null?null:On(Ga),eo=kt==null?null:Jn(kt),to=eo==null?null:bc(eo),Wt=to==null?null:Dn(to),Zi;if(Wt==null)Zi=null;else{var Yt;ar(Wt,new b(0,0))>0?Yt=Wt:Yt=null,Zi=Yt}var ao=Zi,le=A.m();ao!=null&&le.n("timeout: "+ao.toString()),le.n("...options"),Bn.d1()||le.n("query"),Re.d1()||le.n("typedHeaders: headers"),nr!=null&&le.n("body"),wn.d1()||le.n("omit: ["+H(wn,o,o,o,o,o,PA)+"]"),Kt!=null&&le.n("upload: "+Kt),pr!=null&&le.n("multipart: true");var xu=le.m6(),io=H7(n,a,i),Ka=G7(n,a),Vi=J7(n,a,i),Xi=e.toUpperCase(),so=Dr(a,"operationId"),Zt;so==null?Zt=null:Zt=wu(so);for(var oo=Zt,lo=oo??K7(n,r,e),Wa=Ke([Dr(a,"summary"),Dr(a,"description")]),Qi=A.f1(Mr(Wa,10)),Ya=Wa.x();Ya.y();){var jv=Ya.z(),tb=w(Dg(Us(jv)?jv:m()));Qi.n(tb)}for(var Ov=A.m(),Pv=Qi.x();Pv.y();){var Bv=Pv.z();q(Bv)>0&&Ov.n(Bv)}var ab=hi(Ov),ib="@deprecated",Su;Ww(a)?Su=ib:Su=null;var sb=Su,ob=n.v1j_1,lb=e.toUpperCase(),Nv=ob.o2(lb+" "+r),Eu;Nv==null?Eu=null:Eu="@see "+Nv;var ub=ne(ab,Ke([sb,Eu])),fb=(k.c1()-x.c1()|0)-1|0,zu=tk(l_(k,x.c1()),1),uo;r:{var Iu;if(E(zu,Z)?Iu=zu.d1():Iu=!1,Iu){uo=!1;break r}for(var Uv=zu.x();Uv.y();){var cb=Uv.z();if(!og(Og(cb,58),"?")){uo=!0;break r}}uo=!1}var vb=uo,Dv=H(hi(Vi.q2())," | "),Cu;q(Dv)===0?Cu=null:Cu=Dv;var hb=Cu,db=_t(Vi.p2());return new rw(Xi,r,lo,ub,x,BA(xu,Ka,k,io,e,Ha),i,Ka,Kt,hb,db,S,fb,vb)}function F7(n,r){var e=Dr(r,"$ref"),t;if(e==null)t=null;else{var a=n.m1j_1.o2(Oi(e,47));t=a instanceof er?a:null}for(var i=t,s=i??r,l=sr(s,"properties"),u=l??qr(),f=cr.t4(),c=u.r2().x();c.y();){var v=c.z(),h=v.l2(),d=h instanceof er?h:null;(d==null?null:Yw(d))===!0&&f.s2(v.k2(),v.l2())}return _t(f.p2())}function $7(n,r){var e=rn.f();e.ga(96);for(var t=0,a=kw().df(r).x();a.y();){var i=a.z();e.fa(Uf(n,ce(r,t,i.ff().r1_1))),e.fa("${encodeURIComponent("+Kw(i.dg().e1(1))+")}"),t=i.ff().s1_1+1|0}return e.fa(Uf(n,Ge(r,t))),e.ga(96),e.toString()}function J7(n,r,e){for(var t=sr(r,"responses"),a=(t??qr()).r2(),i=A.m(),s=a.x();s.y();){var l=s.z(),u;r:{var f=l.k2(),c=l.l2(),v=Jl(f),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var p=h,g;if(p==null){u=null;break r}else g=p;var y=g,x=sr(jr(c),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=Rf(n,S),I;if(z==null){u=null;break r}else I=z;var C=I;u=j(y,Gn(n,C,e))}var T=u;T==null||i.n(T)}return bu(mg(i))}function H7(n,r,e){var t=sr(r,"responses"),a;if(t==null)return"unknown";a=t;for(var i=a,s=i.r2(),l=A.m(),u=s.x();u.y();){var f=u.z(),c=f.k2();Ie(c,"2")&&l.n(f)}var v;r:{var h=l.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var p=d.k2(),g=p;do{var y=h.z(),x=y.k2(),k=x;Ue(g,k)>0&&(d=y,g=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:jr(z),C;if(I==null)return"unknown";C=I;var T=C,O=sr(T,"content"),F;if(O==null)return"void";F=O;var P=F,B=sr(P,"text/event-stream");if(B!=null){var J=sr(B,"schema"),L;J==null?L=null:L=Gn(n,J,e);var $=L;return $??"string"}var R=P.p2(),V;r:{for(var G=R.x();G.y();){var nr=G.z();if(zs(nr,"json")){V=nr;break r}}V=null}var K=V;if(K!=null){var tr=sr(P,K),Q=tr==null?null:sr(tr,"schema"),or;Q==null?or=null:or=Gn(n,Q,e);var X=or;return X??"unknown"}return"string"}function G7(n,r){for(var e=sr(r,"responses"),t=e??qr(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();Ie(l,"2")&&a.s2(s.k2(),s.l2())}var u=a.q2(),f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,p=d==null?null:sr(d,"content");if((p==null?null:p.h18("text/event-stream"))===!0){f=!0;break r}}f=!1}return f}function Rf(n,r){var e=r.p2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(zs(i,"json")){t=i;break r}}t=null}var s=t,l=s??ak(r.p2()),u;if(l==null)u=null;else{var f=sr(r,l);u=f==null?null:sr(f,"schema")}return u}function Hw(n,r){var e=n.p1j_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(r===i||Ie(r,i+"/")){t=i;break r}}t=null}var s=t,l=s??"",u=Pg(Bg(r,l),Si([47])),f;r:{for(var c=u.x();c.y();){var v=c.z(),h;if(q(v)>0?h=!Ie(v,"{"):h=!1,h){f=v;break r}}f=null}var d=f,p;d==null?p=null:p=qv(d,kv());var g=p;return g??"root"}function K7(n,r,e){var t=n.p1j_1,a;r:{for(var i=t.x();i.y();){var s=i.z();if(r===s||Ie(r,s+"/")){a=s;break r}}a=null}for(var l=a,u=l??"",f=Pg(Bg(r,u),Si([47])),c=A.m(),v=f.x();v.y();){var h=v.z();q(h)>0&&c.n(h)}for(var d=c,p=A.m(),g=d.x();g.y();){var y=g.z();Ie(y,"{")||p.n(y)}var x=l_(p,1);if(!x.d1()){var k=e==="post"?"":e;return wu(k+H(x,"",o,o,o,o,NA))}var S=u_(d),z=(S==null?null:Ie(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function Gw(n,r){var e=Dr(r,"description"),t;e==null?t=null:t=w(Dg(Us(e)?e:m()));var a=t,i;if(a==null)i=null;else{var s;q(a)===0?s=null:s=a,i=s}var l=i,u="@deprecated",f;Ww(r)?f=u:f=null;var c=f;return Ke([l,c])}function zl(n,r,e){if(r.d1())return"";var t=Ng(re(H(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+o_(t)+` */
`;var a=e+`/**
`;return a+H(t,"",o,o,o,o,UA(e))+(e+` */
`)}function W7(n){return"'"+n.r1h_1+"'"}function Y7(n){return`
`+n.v1g()}function Z7(n){var r=n.nh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function Lf(n,r,e){var t;if(e instanceof er){var a=Dr(e,"$ref"),i=a==null?null:Oi(a,47),s;i==null?s=null:s=n.o2(i);var l=s,u;if(l==null){for(var f=cr.na(e.c1()),c=e.r2().x();c.y();){var v=c.z(),h=v.k2(),d=Lf(n,r,v.l2());f.s2(h,d)}u=new er(f)}else u=d7(r,l);t=u}else if(e instanceof dn){for(var p=A.f1(Mr(e,10)),g=e.x();g.y();){var y=g.z(),x=Lf(n,r,y);p.n(x)}t=new dn(p)}else t=e;return t}function V7(n,r){var e=n.z1j_1,t=r.z1j_1;return gt(e,t)}function X7(n){var r=n.a1k_1,e;r==null?e=null:e=", permission: "+me(r);var t=e,a=t??"";return"    { page: "+me(n.z1j_1)+a+` },
`}function Q7(n){var r=n.k2(),e=n.l2();return Ye(r)+": "+me(e)}function rA(n,r){var e=n.ih_1,t=r.ih_1;return gt(e,t)}function nA(n){return n.jh_1}function eA(n){return r=>qn(n,En(r))}function tA(n){var r=n.nh(),e=n.oh();return r+": "+e}function dd(n,r,e,t,a,i){var s=xe(n,r,t);if(s!=null)return Bt(s);var l=xe(n,r,a),u;if(l==null)return null;u=l;var f=u;return e?Bt(f+i):null}function aA(n){return n+`
`}function Vt(n,r,e){return"addError(errors, "+n+", "+qn(r,En(e))+");"}function iA(n,r){return e=>"matches("+qn(n,En(e.b1m_1))+", "+r+")"}function sA(n){return r=>"    "+Ye(r)+": "+qn(n,En(r))+`,
`}function ti(n,r,e,t,a,i,s){if(t instanceof dn)for(var l=t.x();l.y();){var u=l.z();ti(n,r,e,u,a,i,!1)}else if(t instanceof er){var f=yu(n,t),c;if(f==null)c=null;else{var v;s?v=null:v=f,c=v}var h=c;if(h!=null){var d=ft(h),p=r.o2(d),g;if(p==null){var y=A.m();r.s2(d,y),g=y}else g=p;var x=g,k=new Qy(a,i);x.n(k);var S=ft(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var C=Dr(t,"in")!=null?Dr(t,"name"):null,T=t.r2().x();T.y();){var O=T.z(),F=O.k2(),P=O.l2(),B;if(F==="properties"?B=P instanceof er:B=!1,B)for(var J=P.r2().x();J.y();){var L=J.z(),$=L.k2(),R=L.l2();ti(n,r,e,R,a,$,!1)}else F==="schema"&&C!=null?ti(n,r,e,P,a,C,!1):F!=="enum"&&ti(n,r,e,P,a,i,!1)}}}function oA(n){return(r,e)=>{var t=H(ya(ze(n,r)),"\0"),a=H(ya(ze(n,e)),"\0");return gt(t,a)}}function lA(n){return n.b1l_1}function uA(n){return n.c1l_1}function fA(n){return n+1|0}function cA(n){return r=>n+r}function vA(n,r,e,t){return a=>"..."+da(n,jr(a),r,e,t)}function hA(n,r,e,t){return a=>da(n,jr(a),r,e,t)}function dA(n){return We(r=>{var e=n;return qn(e,r)},1,0,8,"literal",[n])}function pA(n,r,e){return t=>Gn(n,jr(t),r,e)}function _A(n,r,e){return t=>Gn(n,jr(t),r,e)}function gA(n,r,e,t,a,i,s,l){return u=>{var f=n,c=u.j1l_1;Ti(f,c);var v=L7(r,u.f1l_1,u.h1l_1,e),h=t+"."+v,d=r.u1j_1,p=new mu(h,u.d1l_1,u.e1l_1,u.h1l_1,u.o1l_1,u.p1l_1,u.q1l_1);d.n(p);var g=u.m1l_1;if(g!=null){var y=a,x=new nw(h,g,u.n1l_1);y.n(x)}var k=u.l1l_1;k==null||i.s2(h,k);var S=R7(r,t+"-"+v,s);return l.fa(zl(r,u.g1l_1,"")),l.fa("export const "+S+" = "+u.i1l_1(h)+`;
`),zl(r,u.g1l_1,"    ")+("    "+Ye(v)+": "+S+",")}}function mA(n,r){var e=n.k2(),t=r.k2();return gt(e,t)}function pd(n){return Dr(n,"type")==="string"&&Dr(n,"format")==="binary"}function yA(n){return r=>{var e=r.k2(),t=r.l2(),a=jr(t),i;if(pd(a))i="File";else{var s;if(Dr(a,"type")==="array"){var l=sr(a,"items"),u;l==null?u=null:u=pd(l),s=u===!0}else s=!1;s?i="File[]":i="string"}var f=i;return Ye(e)+(n.l1(e)?"":"?")+": "+f}}function wA(n){return r=>"    { pattern: "+qn(n,En(r.b1m_1))+", requirement: "+qn(n,En(r.c1m_1))+` },
`}function bA(n){return me(n)}function kA(n){return"    "+Ye(n)+": "+me(n)+`,
`}function xA(n){return"    '"+n.r1l_1+"': "+n.s1l_1+`;
`}function SA(n){return"    '"+n.r1l_1+"': ["+H(n.t1l_1)+`],
`}function EA(n){return n+1|0}function zA(n){return r=>r===1?n:n+r}function IA(n){return Cv(n)}function CA(n){return n+1|0}function qA(n){return r=>n+r}function AA(n){return n.dg().e1(1)}function TA(n){return me(n)}function jA(n,r){return e=>{var t=e.i18("required"),a=t==null?null:On(t),i=(a==null?null:Jn(a))==="true",s=sr(e,"schema"),l;s==null?l=null:l=Gn(n,s,r);var u=l,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Dr(e,"name"),p=d??"";return Ye(p)+(i?"":"?")+": "+h}}function OA(n,r){return e=>{var t=e.i18("required"),a=t==null?null:On(t),i=(a==null?null:Jn(a))==="true",s=sr(e,"schema"),l;s==null?l=null:l=Gn(n,s,r);var u=l,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Dr(e,"name"),p=d??"";return me(p)+(i?"":"?")+": "+h}}function PA(n){return me(n)}function BA(n,r,e,t,a,i){return s=>{var l=H(Tt(n,"operation: '"+s+"'")),u=r?"stream":"request",f=H(e),c=a.toUpperCase();return"("+f+") => "+u+"<"+t+">('"+c+"', "+i+", { "+l+" })"}}function NA(n){return Cv(n)}function UA(n){return r=>{var e;return q(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function $n(n){Sr();for(var r=Be.ze("[^A-Za-z0-9]+").lf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}var i=e,s=H(i,"",o,o,o,o,RA),l;q(s)===0?l="Unnamed":l=s;var u=l;return b2(mk(u))?"_"+u:u}function Cv(n){Sr();var r=wu(n),e;if(q(r)>0){var t=W(r,0),a=kr(t).toUpperCase();e=w(a)+Ge(r,1)}else e=r;return e}function wu(n){Sr();for(var r=Be.ze("[^A-Za-z0-9]+").lf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}for(var i=e,s=A.f1(Mr(i,10)),l=0,u=i.x();u.y();){var f=u.z(),c=l;l=c+1|0;var v;if(Ci(c)===0){var h;if(q(f)>0){var d=W(f,0),p=kr(d).toLowerCase();h=w(p)+Ge(f,1)}else h=f;v=h}else{var g;if(q(f)>0){var y=W(f,0),x=kr(y).toUpperCase();g=w(x)+Ge(f,1)}else g=f;v=g}var k=v;s.n(k)}return H(s,"")}function qv(n,r){r=r===o?Rt():r,Sr();var e=wu(n);return bv().af(e)&&!o7().l1(e)&&!r.l1(e)?e:"_"+e}function Kw(n){return Sr(),qv(n,i7())}function Ye(n){return Sr(),bv().af(n)?n:me(n)}function me(n){Sr();var r=rn.f();r.ga(39);for(var e=0;e<q(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.fa("\\\\");else if(t===39)r.fa("\\'");else if(t===10)r.fa("\\n");else if(t===13)r.fa("\\r");else if(gn(t,32)<0||t===8232||t===8233){var a=Y(t);r.fa("\\u"+Ug(k2(a,16),4,48))}else r.ga(t)}return r.ga(39),r.toString()}function Ww(n){Sr();var r=n.i18("deprecated"),e=r instanceof hr?r:null;return(e==null?null:sv(e))===!0}function Yw(n){Sr();var r=n.i18("readOnly"),e=r instanceof hr?r:null;return(e==null?null:sv(e))===!0}function sr(n,r){Sr();var e=n.i18(r);return e instanceof er?e:null}function bu(n){Sr();for(var r=n.r2(),e=LA,t=new lw(e),a=Dt(r,t),i=ln(Mr(a,10),16),s=cr.na(i),l=a.x();l.y();){var u=l.z(),f=j(u.k2(),u.l2());s.s2(f.ih_1,f.jh_1)}return s}function mn(n,r){Sr();var e=n.i18(r);return e instanceof dn?e:null}function Dr(n,r){Sr();var e=n.i18(r),t=e instanceof hr?e:null;return t==null?null:Jn(t)}function ku(n,r){Sr();for(var e=mn(n,r),t=e??fr(),a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=On(s).c18();a.n(l)}return a}function Av(n){Sr();var r=Dr(n,"format"),e;return r==null?e=null:e=Iw().o2(r),e}function Zw(n){Sr();var r=Dr(n,"format"),e;return r==null?e=null:e=So().o2(r),e}function Il(n,r){Sr();var e;if(n instanceof er){var t,a=Dr(n,"format");if((E(r,xn)?r:m()).m2(a))t=!0;else{var i=n.q2(),s;r:{var l;if(E(i,Z)?l=i.d1():l=!1,l){s=!1;break r}for(var u=i.x();u.y();){var f=u.z();if(Il(f,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof dn){var c;r:{var v;if(E(n,Z)?v=n.d1():v=!1,v){c=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(Il(d,r)){c=!0;break r}}c=!1}e=c}else e=!1;return e}function Cl(n){Sr();var r;if(n instanceof er){var e;if(Av(n)!=null)e=!0;else{var t=n.q2(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(Cl(l)){a=!0;break r}}a=!1}e=a}r=e}else if(n instanceof dn){var u;r:{var f;if(E(n,Z)?f=n.d1():f=!1,f){u=!1;break r}for(var c=n.x();c.y();){var v=c.z();if(Cl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var _d;function Tv(){if(_d)return lr;_d=!0,Vw=new xo("ADD_ERROR",0,"add-error.ts"),Xw=new xo("ADD_NESTED",1,"add-nested.ts"),Qw=new xo("MATCHES",2,"matches.ts")}var Vw,Xw,Qw;function DA(n){return Sr(),n.n16_1=!0,lr}function RA(n){return Sr(),Cv(n)}function LA(n,r){Sr();var e=n.k2(),t=r.k2();return gt(e,t)}function rb(){return Tv(),Vw}function MA(){return Tv(),Xw}function gd(){return Tv(),Qw}var md;function Sr(){md||(md=!0,ww=sn(["get","post","put","patch","delete","head","options"]),bw=Be.ze("[A-Za-z_$][A-Za-z0-9_$]*"),xw=Be.ze("\\{([^}]+)\\}"),Ew=vC(o,DA),zw=sn(["guardPages","signedInUser","pageGuards"]),Cw=bh([j("date","IsoDate"),j("time","IsoTime"),j("date-time","IsoDateTime")]),qw=bh([j("duration","IsoDuration"),j("decimal","Decimal")]),Aw=Ls([j("IsoDuration","'PT0S'"),j("Decimal","'0'")]),Tw=ca(["string","integer","number"]),jw=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,Ow=ca(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),Pw=ca(["body","query","headers","options","encodeURIComponent"]),Bw=ca(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),Nw=ca(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Uw=sn(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function yd(n,r){return r===1?"1 character":""+r+" characters"}var ni;function Bt(n){return n%1===0?Dn(n).toString():n.toString()}var Mf;function ql(){return Mf===o&&new fw,Mf}function FA(){return eb(),nb}var nb;function Le(n){return eb(),ze(FA(),n)}var wd;function eb(){wd||(wd=!0,nb=Ls([j("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),j("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),j("api-with.ts",`
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
`),j("client.ts",`export interface UploadProgress {
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

export function inlinePageData(pathname: string): Record<string, unknown> | undefined {
    if (typeof document === 'undefined') return undefined;
    const element = document.getElementById('ktor-svelte-data');
    if (!element) return undefined;
    element.remove();
    try {
        const inline = JSON.parse(element.textContent ?? '') as { path?: string; data?: Record<string, unknown> };
        return inline.path === pathname ? inline.data : undefined;
    } catch {
        return undefined;
    }
}
`),j("dates.ts",`declare const iso: unique symbol;

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
`),j("form-state.svelte.ts",`import { tick, untrack } from 'svelte';
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
`),j("form.ts",`export interface FieldBounds {
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
`),j("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),j("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),j("pending-writes.svelte.ts",`import { watchPendingWrites } from './client.js';

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
`),j("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

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

`),j("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

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
`)]))}function VA(n,r){var e;try{for(var t=new ow(jn(r)).g1m(n),a=Ce(),i=wf.z17(),s=cr.na(t.c1()),l=t.r2().x();l.y();){var u=l.z(),f=u.k2(),c=En(u.l2());s.s2(f,c)}e=a.q15(i,new er(To(j("files",new er(s)))))}catch(y){var v;if(y instanceof Error){var h=y,d=Ce(),p=wf.z17(),g=h.message;v=d.q15(p,new er(To(j("error",En(g??h.toString())))))}else throw y;e=v}return e}_(Zy,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(hn,"InputHint");_(Vy,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Xy,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Of,"EnumType");_(Qy,"EnumUsage");_(rw,"Endpoint");_(nw,"ErrorEntry");_(ew,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(tw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(aw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(iw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(sw);_(ow,"TypeScriptGenerator");_(xo,"ValidationHelper");_(mu,"GeneratedOperation");_(lw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(uw,"ConstraintMessages");_(Xe,"RuleCheck");_(ri,"RulePreset");U(fw,"RulePresets");ni=new uw;export{VA as generateTypeScript};
