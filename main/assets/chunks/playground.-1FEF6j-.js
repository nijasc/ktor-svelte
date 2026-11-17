typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],a=t>>0,i=a<0?Math.max(e+a,0):Math.min(a,e),s=arguments[2],l=s===void 0?e:s>>0,u=l<0?Math.max(e+l,0):Math.min(l,e);i<u;)r[i]=n,i++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var or=Math.imul,f1=ArrayBuffer.isView,ws=Math.clz32;class tc{}class Te{}class tp{}class ap{constructor(r){this.w_1=r}x(){return G_(this.w_1)}}class ip{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class sp{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let op=class{constructor(){y1=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class qn{constructor(r){Ec(),this.x1_1=r}i2(r){return mn(this.x1_1,r)}d(r){return yx(this,r)}toString(){return kr(this.x1_1)}equals(r){return wx(this.x1_1,r)}hashCode(){return bx(this.x1_1)}}class Z{}class Ue{}class zn{}class it{}class xn{}class mi{}let vk=class{};class de{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return De(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof de?r:m())}equals(r){return this===r}hashCode(){return Bx(this)}toString(){return this.w2_1}}let lp=class{constructor(){w1=this,this.z2_1=new b(0,-2147483648),this.a3_1=new b(-1,2147483647),this.b3_1=8,this.c3_1=64}};class b extends tp{constructor(r,e){Rl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return ar(this,r)}d(r){return this.f3(r instanceof b?r:m())}toString(){return Oo(this,10)}equals(r){var e;return r instanceof b?e=ir(this,r):e=!1,e}hashCode(){return Ix(this)}valueOf(){return ae(this)}}class yn{}class up{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw jr.r(""+this.h3_1);return r}}class hk{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class dk{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class pk{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class _k{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class gk{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class mk{}class yk{}class fp{constructor(){T1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class cp{constructor(){j1=this;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Int32Array(128),t=0,a=q(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i);e[Y(s)]=i}while(t<=a);var l="hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD",u=Yu(l,e,222),f=new Int32Array(u.length),c=0,v=u.length-1|0;if(c<=v)do{var h=c;c=c+1|0,h===0?f[h]=u[h]:f[h]=f[h-1|0]+u[h]|0}while(c<=v);this.k4_1=f;var d="aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL";this.l4_1=Yu(d,e,222);var p="GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB";this.m4_1=Yu(p,e,222)}}class cn{}class Ol{toString(){return"kotlin.Unit"}}class Ii{static a5(r){return Pa(this,r)}l1(r){var e;r:{var t;if(E(this,Z)?t=this.d1():t=!1,t){e=!1;break r}for(var a=this.x();a.y();){var i=a.z();if(D(i,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!0;break r}for(var a=r.x();a.y();){var i=a.z();if(!this.l1(i)){e=!1;break r}}e=!0}return e}d1(){return this.c1()===0}toString(){return J(this,", ","[","]",o,o,RS(this))}toArray(){return kg(this)}}class Ns extends Ii{static z4(){return this.a5()}g1(r){this.b5();for(var e=!1,t=r.x();t.y();){var a=t.z();this.n(a)&&(e=!0)}return e}v2(){this.b5();for(var r=this.x();r.y();)r.z(),r.c5()}toJSON(){return this.toArray()}b5(){}}class ac{constructor(r,e){Ac(this,e),this.f5_1=r,this.d5_1=0,this.e5_1=-1}y(){return this.d5_1<this.f5_1.c1()}z(){if(!this.y())throw jr.j1();var r=this,e=this.d5_1;return this.d5_1=e+1|0,r.e5_1=e,this.f5_1.e1(this.e5_1)}c5(){if(this.e5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw mr.o3(w(r))}this.f5_1.h5(this.e5_1),this.d5_1=this.e5_1,this.e5_1=-1}}class vp extends ac{constructor(r,e,t){t===o&&(t={}),t.l5_1=r,super(r,t),Mn.m5(e,this.l5_1.c1()),this.d5_1=e}}class hp extends Ns{static n5(){var r=this.z4();return r.g5_1=0,r}n(r){return this.b5(),this.o5(this.c1(),r),!0}v2(){this.b5(),this.p5(0,this.c1())}x(){return new ac(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new vp(this,r)}p5(r,e){var t=this.m1(r),a=e-r|0,i=0;if(i<a)do i=i+1|0,t.z(),t.c5();while(i<a)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class dp{static z5(){var r=Pa(this);return r.x5_1=null,r.y5_1=null,r}m2(r){return rd(this,r)!=null}n2(r){var e=this.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(D(s.l2(),r)){t=!0;break r}}t=!1}return t}g6(r){if(!(r!=null&&E(r,it)))return!1;var e=r.k2(),t=r.l2(),a=(E(this,xn)?this:m()).o2(e);if(!D(t,a))return!1;var i;return a==null?i=!(E(this,xn)?this:m()).m2(e):i=!1,!i}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,xn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!0;break r}for(var i=e.x();i.y();){var s=i.z();if(!this.g6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=rd(this,r);return e==null?null:e.l2()}hashCode(){return wr(this.r2())}d1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.x5_1==null){var r=this;r.x5_1=Jp.yg(this)}return fn(this.x5_1)}toString(){var r=this.r2();return J(r,", ","{","}",o,o,MS(this))}q2(){if(this.y5_1==null){var r=this;r.y5_1=Hp.bh(this)}return fn(this.y5_1)}}class pp extends dp{static w5(){var r=this.z5();return r.u5_1=null,r.v5_1=null,r}a6(){return kp.c6(this)}d6(){return Sp.f6(this)}p2(){var r=this.u5_1,e;if(r==null){var t=this.a6();this.u5_1=t,e=t}else e=r;return e}q2(){var r=this.v5_1,e;if(r==null){var t=this.d6();this.v5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.b5();for(var e=this.r2().x();e.y();){var t=e.z(),a=t.k2();if(D(r,a)){var i=t.l2();return e.c5(),i}}return null}b5(){}}class Us extends Ns{static h6(){return this.z4()}equals(r){return r===this?!0:r!=null&&E(r,Ue)?qs.i6(this,r):!1}hashCode(){return qs.j6(this)}}let _p=class{constructor(){O1=this;var r=this,e=A.f1(0);e.l_1=!0,r.k6_1=e}};class Ds{}class A extends hp{constructor(r){return new.target.i4(r)}static i4(r){as();var e=this.n5();return e.k_1=r,e.l_1=!1,e}static m(){as();var r=[];return this.i4(r)}static f1(r){as();var e=[],t=this.i4(e);if(!(r>=0)){var a="Negative initial capacity: "+r;throw T.v(w(a))}return t}static h1(r){as();var e=ja(r);return this.i4(e)}m6(){return this.b5(),this.l_1=!0,this.c1()>0?this:as().k6_1}n6(r){}c1(){return this.k_1.length}e1(r){return this.k_1[Zu(this,r)]}y4(r,e){this.b5(),Zu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.b5(),this.k_1.push(r),this.g5_1=this.g5_1+1|0,!0}o5(r,e){this.b5(),this.k_1.splice(y2(this,r),0,e),this.g5_1=this.g5_1+1|0}g1(r){if(this.b5(),r.d1())return!1;for(var e=m2(this,r.c1()),t=0,a=r.x();a.y();){var i=a.z(),s=t;t=s+1|0;var l=Pi(s);this.k_1[e+l|0]=i}return this.g5_1=this.g5_1+1|0,!0}h5(r){this.b5(),Zu(this,r),this.g5_1=this.g5_1+1|0;var e;return r===Hs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}p5(r,e){this.b5(),this.g5_1=this.g5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.b5();var r=this;r.k_1=[],this.g5_1=this.g5_1+1|0}n1(r){return Ck(this.k_1,r)}toString(){return jx(this.k_1)}o6(){return[].slice.call(this.k_1)}toArray(){return this.o6()}b5(){if(this.l_1)throw se.s6()}}class bs extends pp{static z6(r){var e=this.w5();return S2(e),e.x6_1=r,e}static a7(){return this.z6(Me.l7())}static m7(r,e){return this.z6(Me.n7(r,e))}static o7(r){return this.m7(r,1)}static p7(r){return this.z6(Me.q7(r))}v2(){this.x6_1.v2()}m2(r){return this.x6_1.r7(r)}n2(r){return this.x6_1.n2(r)}a6(){return gp.t7(this.x6_1)}d6(){return mp.v7(this.x6_1)}r2(){var r=this.y6_1,e;if(r==null){var t=wp.x7(this.x6_1);this.y6_1=t,e=t}else e=r;return e}o2(r){return this.x6_1.o2(r)}s2(r,e){return this.x6_1.s2(r,e)}t2(r){return this.x6_1.t2(r)}c1(){return this.x6_1.c1()}u2(r){return this.x6_1.u2(r)}}class gp extends Us{constructor(r){return new.target.t7(r)}static t7(r){var e=this.h6();return e.s7_1=r,e}c1(){return this.s7_1.c1()}d1(){return this.s7_1.c1()===0}l1(r){return this.s7_1.r7(r)}v2(){return this.s7_1.v2()}n(r){throw se.s6()}g1(r){throw se.s6()}x(){return this.s7_1.y7()}b5(){return this.s7_1.z7()}}class mp extends Ns{constructor(r){return new.target.v7(r)}static v7(r){var e=this.z4();return e.u7_1=r,e}c1(){return this.u7_1.c1()}d1(){return this.u7_1.c1()===0}a8(r){return this.u7_1.n2(r)}l1(r){return this.a8(r)}b8(r){throw se.s6()}n(r){return this.b8(r)}c8(r){throw se.s6()}g1(r){return this.c8(r)}x(){return this.u7_1.d8()}b5(){return this.u7_1.z7()}}class yp extends Us{static f8(r){var e=this.h6();return e.e8_1=r,e}c1(){return this.e8_1.c1()}d1(){return this.e8_1.c1()===0}h8(r){return this.e8_1.j8(r)}l1(r){return r!=null&&E(r,it)?this.h8(r!=null&&E(r,it)?r:m()):!1}v2(){return this.e8_1.v2()}i8(r){throw se.s6()}n(r){return this.i8(r!=null&&E(r,it)?r:m())}g1(r){throw se.s6()}j2(r){return this.e8_1.k8(r)}b5(){return this.e8_1.z7()}}class wp extends yp{constructor(r){return new.target.x7(r)}static x7(r){return this.f8(r)}x(){return this.e8_1.g8()}}class bp{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().k2()}c5(){return this.l8_1.c5()}}class kp extends Us{constructor(r){return new.target.c6(r)}static c6(r){var e=this.h6();return e.b6_1=r,e}m8(r){throw se.n8("Add is not supported on keys")}n(r){return this.m8(r)}v2(){return this.b6_1.v2()}r7(r){return this.b6_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.b6_1.r2().x();return new bp(r)}c1(){return this.b6_1.c1()}b5(){return this.b6_1.b5()}}class xp{constructor(r){this.o8_1=r}y(){return this.o8_1.y()}z(){return this.o8_1.z().l2()}c5(){return this.o8_1.c5()}}class Sp extends Ns{constructor(r){return new.target.f6(r)}static f6(r){var e=this.z4();return e.e6_1=r,e}b8(r){throw se.n8("Add is not supported on values")}n(r){return this.b8(r)}a8(r){return this.e6_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.e6_1.r2().x();return new xp(r)}c1(){return this.e6_1.c1()}b5(){return this.e6_1.b5()}}class Ia extends Us{static p8(r){var e=this.h6();return e.a1_1=r,e}static q8(){return this.p8(Me.l7())}static r8(r){for(var e=this.p8(Me.s8(r.c1())),t=r.x();t.y();){var a=t.z();e.a1_1.s2(a,!0)}return e}static t8(r,e){return this.p8(Me.n7(r,e))}static b1(r){return this.t8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.r7(r)}d1(){return this.a1_1.c1()===0}x(){return this.a1_1.y7()}c1(){return this.a1_1.c1()}}class Ep{constructor(){this.f9_1=-1640531527,this.g9_1=8,this.h9_1=2,this.i9_1=-1}}class Pl{constructor(r){this.j9_1=r,this.k9_1=0,this.l9_1=-1,this.m9_1=this.j9_1.i7_1,this.n9()}n9(){for(;this.k9_1<this.j9_1.g7_1&&this.j9_1.d7_1[this.k9_1]<0;)this.k9_1=this.k9_1+1|0}y(){return this.k9_1<this.j9_1.g7_1}c5(){if(this.o9(),this.l9_1===-1){var r="Call next() before removing element from the iterator.";throw mr.o3(w(r))}this.j9_1.z7(),Bg(this.j9_1,this.l9_1),this.l9_1=-1,this.m9_1=this.j9_1.i7_1}o9(){if(this.j9_1.i7_1!==this.m9_1)throw qo.p9()}}class zp extends Pl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1];return this.n9(),t}}class Ip extends Pl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=fn(this.j9_1.c7_1)[this.l9_1];return this.n9(),t}}class Cp extends Pl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=new qp(this.j9_1,this.l9_1);return this.n9(),t}ca(){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1],a=t==null?null:wr(t),i=a??0,s=fn(this.j9_1.c7_1)[this.l9_1],l=s==null?null:wr(s),u=i^(l??0);return this.n9(),u}da(r){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var e=this,t=this.k9_1;this.k9_1=t+1|0,e.l9_1=t;var a=this.j9_1.b7_1[this.l9_1];D(a,this.j9_1)?r.fa("(this Map)"):r.ea(a),r.ga(61);var i=fn(this.j9_1.c7_1)[this.l9_1];D(i,this.j9_1)?r.fa("(this Map)"):r.ea(i),this.n9()}}class qp{constructor(r,e){this.y8_1=r,this.z8_1=e,this.a9_1=this.y8_1.i7_1}k2(){return Dh(this),this.y8_1.b7_1[this.z8_1]}l2(){return Dh(this),fn(this.y8_1.c7_1)[this.z8_1]}equals(r){var e,t;return r!=null&&E(r,it)?t=D(r.k2(),this.k2()):t=!1,t?e=D(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:wr(r),t=e??0,a=this.l2(),i=a==null?null:wr(a);return t^(i??0)}toString(){return ge(this.k2())+"="+ge(this.l2())}}class Ap{}function wk(n){var r;r:{var e;if(E(n,Z)?e=n.d1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var a=t.z(),i=a,s;if(i!=null&&E(i,it)?s=this.ka(i):s=!1,!s){r=!1;break r}}r=!0}return r}class Me{constructor(r,e,t,a,i,s){return new.target.ha(r,e,t,a,i,s)}static ha(r,e,t,a,i,s){var l=Pa(this);return l.b7_1=r,l.c7_1=e,l.d7_1=t,l.e7_1=a,l.f7_1=i,l.g7_1=s,l.h7_1=qg(Is,ot(l)),l.i7_1=0,l.j7_1=0,l.k7_1=!1,l}c1(){return this.j7_1}static l7(){return this.s8(8)}static s8(r){return this.ha(Sg(r),null,new Int32Array(r),new Int32Array(Cg(Is,r)),2,0)}static q7(r){var e=this.s8(r.c1());return e.u2(r),e}static n7(r,e){var t=this.s8(r);if(!(e>0)){var a="Non-positive load factor: "+e;throw T.v(w(a))}return t}ia(){this.z7(),this.k7_1=!0}n2(r){return C2(this,r)>=0}o2(r){var e=_o(this,r);return e<0?null:fn(this.c7_1)[e]}r7(r){return _o(this,r)>=0}s2(r,e){var t=Pg(this,r),a=Tg(this);if(t<0){var i=a[(-t|0)-1|0];return a[(-t|0)-1|0]=e,i}else return a[t]=e,null}u2(r){this.z7(),j2(this,r.r2())}t2(r){this.z7();var e=_o(this,r);if(e<0)return null;var t=fn(this.c7_1)[e];return Bg(this,e),t}v2(){this.z7();var r=0,e=this.g7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var a=this.d7_1[t];a>=0&&(this.e7_1[a]=0,this.d7_1[t]=-1)}while(t!==e);No(this.b7_1,0,this.g7_1);var i=this.c7_1;i==null||No(i,0,this.g7_1),this.j7_1=0,this.g7_1=0,Ml(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,xn)?t=A2(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.g8();e.y();)r=r+e.ca()|0;return r}toString(){var r=Yr.ja(2+or(this.j7_1,3)|0);r.fa("{");for(var e=0,t=this.g8();t.y();)e>0&&r.fa(", "),t.da(r),e=e+1|0;return r.fa("}"),r.toString()}z7(){if(this.k7_1)throw se.s6()}j8(r){var e=_o(this,r.k2());return e<0?!1:D(fn(this.c7_1)[e],r.l2())}ka(r){return this.j8(E(r,it)?r:m())}y7(){return new zp(this)}d8(){return new Ip(this)}g8(){return new Cp(this)}}class Tp{constructor(){B1=this;var r=this,e=Me.s8(0);e.ia(),r.la_1=cr.ma(e)}}class cr extends bs{static t4(){var r=this.a7();return r}static na(r){var e=this.o7(r);return e}static oa(r){var e=this.p7(r);return e}static ma(r){var e=this.z6(r);return e}m6(){this.x6_1.ia();var r;return this.c1()>0?r=this:r=O2().la_1,r}b5(){return this.x6_1.z7()}}class Pn extends Ia{static i1(){var r=this.q8();return r}static k1(r){var e=this.r8(r);return e}static pa(r,e){var t=this.t8(r,e);return t}static i(r){return this.pa(r,1)}b5(){return this.a1_1.z7()}}class ut{}class jp{qa(){var r="This continuation is already complete";throw mr.o3(w(r))}ra(r){var e="This continuation is already complete";throw mr.o3(w(e))}sa(r){return this.ra(r)}toString(){return"This continuation is already complete"}}class ic{constructor(){this.za_1=null}bb(){var r=this.za_1,e;if(r==null){var t=this.qa().cb($1),a=t==null?null:t.db(this),i=a??this;this.za_1=i,e=i}else e=r;return e}ab(){var r=this.za_1;r!=null&&r!==this&&fn(this.qa().cb($1)).eb(r),this.za_1=Ng}}class sc extends ic{constructor(r){super(),this.ua_1=r;var e=this;e.va_1=o;var t=this,a=this.ua_1;t.wa_1=a==null?null:a.qa()}qa(){return fn(this.wa_1)}xa(r){var e=Ts(),t=Lm(r),a=t==null?this.va_1.next(r):this.va_1.throw(t),i=a.done,s=a.value;r:for(;!i;){try{s=s()}catch(c){var l=c,u=this.va_1.throw(l);s=u.value,i=u.done;continue r}if(s===e)break r;var f=this.va_1.next(s);s=f.value,i=f.done}return s}ya(r,e){return r=r===o?null:r,e===o?this.xa(r):e.xa.call(this,new pa(r))}ra(r){var e=null,t;try{t=this.xa(r)}catch(v){var a;if(v instanceof Error){var i=v;e=i,a=null}else throw v;t=a}var s=t;if(s===Ts())return fr;this.ab();var l=this.ua_1;if(l!=null)if(e!=null){var u=e,f=Mm(u);l.sa(f)}else{var c=s;l.sa(c)}}sa(r){return this.ra(r)}}class Op{constructor(r,e,t){this.kb_1=r,this.lb_1=e,this.mb_1=t}qa(){return this.kb_1}ra(r){var e=this.lb_1;yz(r)&&e(r);var t=this.mb_1,a=Lm(r);return a==null||t(a),fr}sa(r){return this.ra(r)}}class ks extends Error{static tb(){var r=vi(this,Error,[null]);return hi(r),Qu(r),r}static k3(r){var e=vi(this,Error,[r]);return hi(e,r),Qu(e),e}static ub(r,e){var t=vi(this,Error,[r,fg(e)]);return hi(t,r,e),Qu(t),t}}class _e extends ks{static nb(){var r=this.tb();return Xu(r),r}static d9(r){var e=this.k3(r);return Xu(e),e}static sb(r,e){var t=this.ub(r,e);return Xu(t),t}}class se extends _e{static s6(){var r=this.nb();return Rh(r),r}static n8(r){var e=this.d9(r);return Rh(e),e}}class T extends _e{static qb(){var r=this.nb();return Vu(r),r}static v(r){var e=this.d9(r);return Vu(e),e}static rb(r,e){var t=this.sb(r,e);return Vu(t),t}}class jr extends _e{static j1(){var r=this.nb();return Lh(r),r}static r(r){var e=this.d9(r);return Lh(e),e}}class Kn extends _e{static yb(){var r=this.nb();return Mh(r),r}static zb(r){var e=this.d9(r);return Mh(e),e}}class mr extends _e{static ac(){var r=this.nb();return Fh(r),r}static o3(r){var e=this.d9(r);return Fh(e),e}}class qo extends _e{static p9(){var r=this.nb();return $h(r),r}static x8(r){var e=this.d9(r);return $h(e),e}}class c1 extends _e{static ec(){var r=this.nb();return Jh(r),r}static fc(r){var e=this.d9(r);return Jh(e),e}}class Ao extends Error{static kc(){var r=vi(this,Error,[null]);return hi(r),r1(r),r}static nc(r){var e=vi(this,Error,[r]);return hi(e,r),r1(e),e}static mc(r,e){var t=vi(this,Error,[r,fg(e)]);return hi(t,r,e),r1(t),t}}class cs extends Ao{static ic(){var r=this.kc();return Hh(r),r}static lc(r){var e=r==null?null:w(r),t=this.mc(e,r instanceof Error?r:null);return Hh(t),t}}class v1 extends T{static sc(){var r=this.qb();return Gh(r),r}static tc(r){var e=this.v(r);return Gh(e),e}}class h1 extends _e{static s3(){var r=this.nb();return R2(r),r}}class d1 extends _e{static w3(){var r=this.nb();return L2(r),r}}class p1 extends _e{static a4(){var r=this.nb();return M2(r),r}}class rt{}class Ci{equals(r){var e;return r instanceof oc?e=!1:r instanceof Ci?e=D(this.zc(),r.zc())&&this.uc()==r.uc():e=!1,e}hashCode(){var r=this.uc(),e=r==null?null:pe(r);return e??0}toString(){return"class "+this.uc()}}class an extends Ci{constructor(r,e,t){super(),this.wc_1=r,this.xc_1=e,this.yc_1=t}zc(){return this.wc_1}uc(){return this.xc_1}vc(r){return this.yc_1(r)}}class oc extends Ci{constructor(){Uo=null,super(),Uo=this,this.ad_1="Nothing"}uc(){return this.ad_1}vc(r){return!1}zc(){throw se.n8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class _1 extends Ci{constructor(r){super(),this.bd_1=r;var e=this,t=this.bd_1.$metadata$;e.cd_1=t==null?null:t.simpleName}zc(){return this.bd_1}uc(){return this.cd_1}vc(r){return Qx(r,this.bd_1)}}class Oa{}class Pp{constructor(){N1=this;var r=this,e=Object;r.anyClass=new an(e,"Any",K2);var t=this,a=Number;t.numberClass=new an(a,"Number",W2),this.nothingClass=G2();var i=this,s=Boolean;i.booleanClass=new an(s,"Boolean",Y2);var l=this,u=Number;l.byteClass=new an(u,"Byte",Z2);var f=this,c=Number;f.shortClass=new an(c,"Short",V2);var v=this,h=Number;v.intClass=new an(h,"Int",X2);var d=this,p=b;d.longClass=new an(p,"Long",Q2);var g=this,y=Number;g.floatClass=new an(y,"Float",rS);var x=this,k=Number;x.doubleClass=new an(k,"Double",nS);var S=this,z=Array;S.arrayClass=new an(z,"Array",eS);var I=this,C=String;I.stringClass=new an(C,"String",tS);var j=this,P=Error;j.throwableClass=new an(P,"Throwable",aS);var F=this,B=Array;F.booleanArrayClass=new an(B,"BooleanArray",iS);var N=this,H=Uint16Array;N.charArrayClass=new an(H,"CharArray",sS);var L=this,$=Int8Array;L.byteArrayClass=new an($,"ByteArray",oS);var R=this,V=Int16Array;R.shortArrayClass=new an(V,"ShortArray",lS);var K=this,nr=Int32Array;K.intArrayClass=new an(nr,"IntArray",uS);var W=this,tr=typeof BigInt>"u"?o:BigInt;W.bigIntClass=new an(tr,"BigInt",fS);var Q=this,lr=Array;Q.longArrayClass=new an(lr,"LongArray",cS);var X=this,xr=Float32Array;X.floatArrayClass=new an(xr,"FloatArray",vS);var br=this,dr=Float64Array;br.doubleArrayClass=new an(dr,"DoubleArray",hS)}dd(){return this.anyClass}ed(){return this.numberClass}fd(){return this.nothingClass}gd(){return this.booleanClass}hd(){return this.byteClass}id(){return this.shortClass}jd(){return this.intClass}kd(){return this.longClass}ld(){return this.floatClass}md(){return this.doubleClass}nd(){return this.arrayClass}od(){return this.stringClass}pd(){return this.throwableClass}qd(){return this.booleanArrayClass}rd(){return this.charArrayClass}sd(){return this.byteArrayClass}td(){return this.shortArrayClass}ud(){return this.intArrayClass}vd(){return this.bigIntClass}wd(){return this.longArrayClass}xd(){return this.floatArrayClass}yd(){return this.doubleArrayClass}functionClass(r){var e=Kh()[r],t;if(e==null){var a=Function,i="Function"+r,s=new an(a,i,dS(r));Kh()[r]=s,t=s}else t=e;return t}}class yh extends ks{constructor(r){return new.target.be(r)}static be(r){var e=this.k3(r);return vn(e,e.ae_1),e}static ce(){return this.be(null)}}class Yr{constructor(r){return new.target.de(r)}static de(r){var e=Pa(this);return e.e_1=r,e}static ja(r){return this.f()}static f(){return this.de("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(q(e)-1|0))t=rr(e,r);else throw Kn.zb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return Hn(this.e_1,r,e)}ga(r){return this.e_1=this.e_1+kr(r),this}g(r){return this.e_1=this.e_1+ge(r),this}ee(r,e,t){return this.fe(r??"null",e,t)}ea(r){return this.e_1=this.e_1+ge(r),this}ge(r){return this.fa(r.toString())}he(r){return this.fa(r.toString())}fa(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ie(r,e){return Mn.m5(r,this.a()),this.e_1=Hn(this.e_1,0,r)+kr(e)+He(this.e_1,r),this}je(r){if(r<0)throw T.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=Hn(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+kr(0);while(e<r)}}toString(){return this.e_1}ke(){return this.e_1="",this}le(r){return Mn.l6(r,this.a()),this.e_1=Hn(this.e_1,0,r)+He(this.e_1,r+1|0),this}fe(r,e,t){var a=w(r);return Mn.me(e,t,a.length),this.e_1=this.e_1+Hn(a,e,t),this}}class Bp{constructor(){D1=this,this.ne_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.oe_1=new RegExp("[\\\\$]","g"),this.pe_1=new RegExp("\\$","g")}qe(r){var e=this.ne_1;return r.replace(e,"\\$&")}re(r){var e=this.pe_1;return r.replace(e,"$$$$")}}class qe{constructor(r,e){return new.target.ye(r,e)}static ye(r,e){Cs();var t=Pa(this);return t.se_1=r,t.te_1=ft(e),t.ue_1=new RegExp(r,xS(e,"gu")),t.ve_1=null,t.we_1=null,t}static ze(r){return Cs(),this.ye(r,$t())}af(r){_S(this.ue_1);var e=this.ue_1.exec(w(r));return e!=null&&e.index===0&&this.ue_1.lastIndex===q(r)}xe(r,e){if(e<0||e>q(r))throw Kn.zb("Start index out of bounds: "+e+", input length: "+q(r));return Fg(this.ue_1,w(r),e,this.ue_1)}bf(r,e,t){return e=e===o?0:e,t===o?this.xe(r,e):t.xe.call(this,r,e)}cf(r,e){if(e<0||e>q(r))throw Kn.zb("Start index out of bounds: "+e+", input length: "+q(r));var t=wS(this,r,e);return QS(t,bS)}df(r,e,t){return e=e===o?0:e,t===o?this.cf(r,e):t.cf.call(this,r,e)}ef(r,e){if(!fd(e,92)&&!fd(e,36)){var t=w(r),a=this.ue_1;return t.replace(a,e)}return this.ff(r,kS(e))}ff(r,e){var t=this.bf(r);if(t==null)return w(r);var a=0,i=q(r),s=Yr.ja(i);do{var l=fn(t);s.ee(r,a,l.gf().kf()),s.g(e(l)),a=l.gf().lf()+1|0,t=l.z()}while(a<i&&t!=null);return a<i&&s.ee(r,a,i),s.toString()}mf(r,e){Kc(e);for(var t=this.df(r),a=e===0?t:dx(t,e-1|0),i=A.m(),s=0,l=a.x();l.y();){var u=l.z();i.n(w(Ln(r,s,u.gf().kf()))),s=u.gf().lf()+1|0}return i.n(w(Ln(r,s,q(r)))),i}toString(){return this.ue_1.toString()}}class xs{constructor(r){this.of_1=r}toString(){return"MatchGroup(value="+this.of_1+")"}hashCode(){return pe(this.of_1)}equals(r){return this===r?!0:!(!(r instanceof xs)||this.of_1!==r.of_1)}}class lc{}class Np extends Ii{constructor(r,e){return new.target.cg(r,e)}static cg(r,e,t){return t===o&&(t={}),t.tf_1=r,t.uf_1=e,this.a5(t)}c1(){return this.tf_1.length}x(){var r=sx(JS(this));return qi(r,qS(this)).x()}e1(r){var e=this.tf_1[r],t;return e==null?t=null:t=new xs(e),t}pf(r){var e=this.tf_1.groups,t;if(e==null)throw T.v("Capturing group with name {"+r+"} does not exist. No named capturing group was defined in Regex");t=e;var a=t;if(!AS(this.uf_1,a,r))throw T.v("Capturing group with name {"+r+"} does not exist");var i=a[r],s;return i==null?s=null:s=new xs(i!=null&&typeof i=="string"?i:m()),s}}class uc extends Ii{static fg(r){return this.a5(r)}x(){return new fc(this)}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Rp(this,r)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class Up extends uc{constructor(r){return new.target.eg(r)}static eg(r,e){return e===o&&(e={}),e.dg_1=r,this.fg(e)}c1(){return this.dg_1.length}e1(r){var e=this.dg_1[r];return e??""}}class Dp{constructor(r,e,t,a){this.yf_1=r,this.zf_1=e,this.ag_1=t,this.bg_1=a,this.vf_1=r;var i=this;i.wf_1=Np.cg(e,this),this.xf_1=null}gf(){return this.vf_1}nf(){return this.wf_1}gg(){if(this.xf_1==null){var r=this;r.xf_1=Up.eg(this.zf_1)}return fn(this.xf_1)}z(){return Fg(this.ag_1,this.bg_1,this.yf_1.d1()?TS(this,this.yf_1.kf()):this.yf_1.lf()+1|0,this.ag_1)}}let bk=class{constructor(r){this.hg_1=r}ig(r,e){return this.hg_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.hg_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}};class qt extends de{constructor(r,e,t){super(r,e),this.lg_1=t}}class fc{constructor(r,e){Ac(this,e),this.rg_1=r,this.qg_1=0}y(){return this.qg_1<this.rg_1.c1()}z(){if(!this.y())throw jr.j1();var r=this.qg_1;return this.qg_1=r+1|0,this.rg_1.e1(r)}}class Rp extends fc{constructor(r,e,t){t===o&&(t={}),t.ug_1=r,super(r,t),Mn.m5(e,this.ug_1.c1()),this.qg_1=e}}class Lp{constructor(){this.w4_1=2147483639}l6(r,e){if(r<0||r>=e)throw Kn.zb("index: "+r+", size: "+e)}m5(r,e){if(r<0||r>e)throw Kn.zb("index: "+r+", size: "+e)}x4(r,e,t){if(r<0||e>t)throw Kn.zb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw T.v("fromIndex: "+r+" > toIndex: "+e)}me(r,e,t){if(r<0||e>t)throw Kn.zb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw T.v("startIndex: "+r+" > endIndex: "+e)}e9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}r5(r){for(var e=1,t=r.x();t.y();){var a=t.z(),i=or(31,e),s=a==null?null:wr(a);e=i+(s??0)|0}return e}q5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),a=r.x();a.y();){var i=a.z(),s=t.z();if(!D(i,s))return!1}return!0}}class Mp{constructor(r){this.vg_1=r}y(){return this.vg_1.y()}z(){return this.vg_1.z().k2()}}class Fp{constructor(r){this.wg_1=r}y(){return this.wg_1.y()}z(){return this.wg_1.z().l2()}}class kk{}class $p extends Ii{static zg(r){return this.a5(r)}equals(r){return r===this?!0:r!=null&&E(r,Ue)?qs.i6(this,r):!1}hashCode(){return qs.j6(this)}}class Jp extends $p{constructor(r){return new.target.yg(r)}static yg(r,e){return e===o&&(e={}),e.xg_1=r,this.zg(e)}r7(r){return this.xg_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.xg_1.r2().x();return new Mp(r)}c1(){return this.xg_1.c1()}}class Hp extends Ii{constructor(r){return new.target.bh(r)}static bh(r,e){return e===o&&(e={}),e.ah_1=r,this.a5(e)}a8(r){return this.ah_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.ah_1.r2().x();return new Fp(r)}c1(){return this.ah_1.c1()}}class Gp{j6(r){for(var e=0,t=r.x();t.y();){var a=t.z(),i=e,s=a==null?null:wr(a);e=i+(s??0)|0}return e}i6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Kp{constructor(){R1=this,this.ch_1=new b(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,zn)?e=r.d1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}d1(){return!0}dh(r){return!1}l1(r){return!1}e1(r){throw Kn.zb("Empty list doesn't contain element at index "+r+".")}eh(r){return-1}n1(r){return-1}x(){return As}m1(r){if(r!==0)throw Kn.zb("Index: "+r);return As}}class Wp{y(){return!1}z(){throw jr.j1()}}class Bl{constructor(r,e){this.fh_1=r,this.gh_1=e}toString(){return"IndexedValue(index="+this.fh_1+", value="+ge(this.gh_1)+")"}hashCode(){var r=this.fh_1;return r=or(r,31)+(this.gh_1==null?0:wr(this.gh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Bl)||this.fh_1!==r.fh_1||!D(this.gh_1,r.gh_1))}}class Yp{constructor(r){this.hh_1=r}x(){return new Zp(this.hh_1())}}class Zp{constructor(r){this.ih_1=r,this.jh_1=0}y(){return this.ih_1.y()}z(){var r=this.jh_1;return this.jh_1=r+1|0,new Bl(Pi(r),this.ih_1.z())}}class Vp{}class Xp{constructor(){L1=this,this.nh_1=new b(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,xn)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}d1(){return!0}oh(r){return!1}m2(r){return this.oh(r)}ph(r){return null}o2(r){return this.ph(r)}r2(){return F1()}p2(){return F1()}q2(){return Qg()}}class Qp{z(){return this.sh()}}class r_{constructor(r){this.uh_1=r,this.th_1=r.vh_1.x()}z(){return this.uh_1.wh_1(this.th_1.z())}y(){return this.th_1.y()}}class n_{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new r_(this)}}class Nl{}class e_{constructor(r){this.xh_1=r.ai_1,this.yh_1=r.zh_1.x()}z(){if(this.xh_1===0)throw jr.j1();return this.xh_1=this.xh_1-1|0,this.yh_1.z()}y(){return this.xh_1>0&&this.yh_1.y()}}class Ul{constructor(r,e){if(this.zh_1=r,this.ai_1=e,!(this.ai_1>=0)){var t="count must be non-negative, but was "+this.ai_1+".";throw T.v(w(t))}}v1(r){return r>=this.ai_1?this:new Ul(this.zh_1,r)}x(){return new e_(this)}}class t_{x(){return As}v1(r){return Jl}}class a_{constructor(r){this.di_1=r,this.bi_1=null,this.ci_1=-2}z(){if(this.ci_1<0&&id(this),this.ci_1===0)throw jr.j1();var r=this.bi_1,e=r??m();return this.ci_1=-1,e}y(){return this.ci_1<0&&id(this),this.ci_1===1}}class cc{constructor(r,e){this.ei_1=r,this.fi_1=e}x(){return new a_(this)}}class i_{constructor(){M1=this,this.gi_1=new b(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,Ue)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}d1(){return!0}dh(r){return!1}l1(r){return!1}hi(r){return r.d1()}j2(r){return this.hi(r)}x(){return As}}class s_{ii(r,e){return De(r,e)}compare(r,e){var t=r!=null&&z1(r)?r:m();return this.ii(t,e!=null&&z1(e)?e:m())}}let o_=class{constructor(r){this.ji_1=r}ig(r,e){return this.ji_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.ji_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}},l_=class{};class xk{}class u_{constructor(){J1=this,this.ki_1=new b(0,0)}cb(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class f_ extends de{}class c_ extends uc{constructor(r){return new.target.mi(r)}static mi(r){var e=this.fg();return e.li_1=r,e}c1(){return this.li_1.length}e1(r){return Mn.l6(r,this.li_1.length),this.li_1[r]}ni(r){if(r===null)return!1;var e=bh(this.li_1,r.x2_1);return e===r}l1(r){return r instanceof de?this.ni(r instanceof de?r:m()):!1}oi(r){if(r===null)return-1;var e=r.x2_1,t=bh(this.li_1,e);return t===r?e:-1}n1(r){return r instanceof de?this.oi(r instanceof de?r:m()):-1}}class v_{constructor(){H1=this,this.p1_1=new Lt(1,0)}}class Rs{constructor(r,e,t){if(t===0)throw T.v("Step must be non-zero.");if(t===-2147483648)throw T.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=fE(r,e,t),this.t1_1=t}x(){return new h_(this.r1_1,this.s1_1,this.t1_1)}d1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Rs?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.d1()?-1:or(31,or(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class fi{}class Lt extends Rs{constructor(r,e){um(),super(r,e,1)}kf(){return this.r1_1}lf(){return this.s1_1}pi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.pi(typeof r=="number"?r:m())}d1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Lt?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.d1()?-1:or(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class h_ extends Qp{constructor(r,e,t){super(),this.qi_1=t,this.ri_1=e,this.si_1=this.qi_1>0?r<=e:r>=e,this.ti_1=this.si_1?r:this.ri_1}y(){return this.si_1}sh(){var r=this.ti_1;if(r===this.ri_1){if(!this.si_1)throw jr.j1();this.si_1=!1}else this.ti_1=this.ti_1+this.qi_1|0;return r}}class d_{q1(r,e,t){return new Rs(r,e,t)}}class p_{constructor(r){this.zi_1=r,this.ui_1=-1,this.vi_1=cx(r.bj_1,0,q(r.aj_1)),this.wi_1=this.vi_1,this.xi_1=null,this.yi_1=0}z(){if(this.ui_1===-1&&ud(this),this.ui_1===0)throw jr.j1();var r=this.xi_1,e=r instanceof Lt?r:m();return this.xi_1=null,this.ui_1=-1,e}y(){return this.ui_1===-1&&ud(this),this.ui_1===1}}class __{constructor(r,e,t,a){this.aj_1=r,this.bj_1=e,this.cj_1=t,this.dj_1=a}x(){return new p_(this)}}class Sk{constructor(){this.ej_1=0,this.fj_1=1,this.gj_1=2}}class g_{constructor(r){this.hj_1=r,this.ij_1=0,this.jj_1=0,this.kj_1=0,this.lj_1=0}y(){if(this.ij_1!==0)return this.ij_1===1;if(this.lj_1<0)return this.ij_1=2,!1;var r=-1,e=q(this.hj_1),t=this.jj_1,a=q(this.hj_1);if(t<a)r:do{var i=t;t=t+1|0;var s=rr(this.hj_1,i);if(s===10||s===13){r=s===13&&(i+1|0)<q(this.hj_1)&&rr(this.hj_1,i+1|0)===10?2:1,e=i;break r}}while(t<a);return this.ij_1=1,this.lj_1=r,this.kj_1=e,!0}z(){if(!this.y())throw jr.j1();this.ij_1=0;var r=this.kj_1,e=this.jj_1;this.jj_1=this.kj_1+this.lj_1|0;var t=this.hj_1;return w(Ln(t,e,r))}}class m_{constructor(r){this.mj_1=r}x(){return new g_(this.mj_1)}}class y_{constructor(){G1=this,this.nj_1=new b(0,0),this.oj_1=Dt(new b(-1,1073741823)),this.pj_1=Dt(new b(1,-1073741824)),this.qj_1=new b(-16162,2147483647),this.rj_1=new b(-16162,2147483647)}sj(r){var e=new ze(r),t=e.tj_1;if(Wc(t)){var a=Sn(t);if(!(ar(new b(387905,-1073741824),a)<=0&&ar(a,new b(-387905,1073741823))<=0))throw cs.lc(Sn(t).toString()+" ns is out of nanoseconds range")}else{var i,s=Sn(t);if(ar(new b(1,-1073741824),s)<0&&ar(s,new b(-1,1073741823))<0)i=!1;else{var l=Sn(t);i=!(ir(l,new b(-1,1073741823))||ir(l,new b(1,-1073741824)))}if(i)throw cs.lc(Sn(t).toString()+" ms is out of milliseconds range");var u=Sn(t);if(ar(new b(1108857478,-1074),u)<=0&&ar(u,new b(-1108857478,1073))<=0)throw cs.lc(Sn(t).toString()+" ms is denormalized")}return e.tj_1}uj(r){var e;try{var t=new ze(GE(r,!0)),a=t.tj_1;if(D(new ze(a),new ze(Wr().rj_1))){var i="invariant failed";throw mr.o3(w(i))}e=t.tj_1}catch(l){if(l instanceof T){var s=l;throw T.rb("Invalid ISO duration string format: '"+r+"'.",s)}else throw l}return e}}class ze{constructor(r){Wr(),this.tj_1=r}vj(r){return Em(this.tj_1,r)}d(r){return UE(this,r)}toString(){return FE(this.tj_1)}hashCode(){return JE(this.tj_1)}equals(r){return HE(this.tj_1,r)}}class w_{constructor(){K1=this,this.wj_1=new g1(new b(-1,1073741823),!0),this.xj_1=new g1(new b(-1,2147483647),!1)}}class g1{constructor(r,e){Tm(),this.yj_1=r,this.zj_1=e;var t=this,a=this.yj_1;t.ak_1=qr(a,M(10));var i=this,s=this.yj_1;i.bk_1=Ut(s,M(10))}}class Ek{}class b_{constructor(){Y1=this,this.ck_1=new st(new b(342103040,-7347440),0),this.dk_1=new st(new b(-90867457,7347410),999999999)}ek(r,e){var t=new b(1e9,0),a=qr(e,t);if(ar(Ne(e,t),new b(0,0))<0&&!ir(Tr(a,t),e)){var i=a;a=Hr(i,at())}var s=a,l=gr(r,s);if(ar(Ne(r,l),new b(0,0))<0&&ar(Ne(r,s),new b(0,0))>=0)return ar(r,new b(0,0))>0?Ot().dk_1:Ot().ck_1;var u=l,f;if(ar(u,new b(342103040,-7347440))<0)f=this.ck_1;else if(ar(u,new b(-90867457,7347410))>0)f=this.dk_1;else{var c=new b(1e9,0),v=Ut(e,c),h=gr(v,zs(c,Ls(zs(Ne(v,c),qa(v,on(v))),63))),d=rn(h);f=new st(u,d)}return f}fk(r,e){return this.ek(r,M(e))}gk(r){return uz(r).hk()}}class st{constructor(r,e){Ot(),this.ik_1=r,this.jk_1=e;var t=this.ik_1;if(!(ar(new b(342103040,-7347440),t)<=0&&ar(t,new b(-90867457,7347410))<=0)){var a="Instant exceeds minimum or maximum instant";throw T.v(w(a))}}kk(r){var e=this.ik_1.f3(r.ik_1);return e!==0?e:De(this.jk_1,r.jk_1)}d(r){return this.kk(r instanceof st?r:m())}equals(r){var e;if(this===r)e=!0;else{var t,a;r instanceof st?a=ir(this.ik_1,r.ik_1):a=!1,a?t=this.jk_1===r.jk_1:t=!1,e=t}return e}hashCode(){return this.ik_1.hashCode()+or(51,this.jk_1)|0}toString(){return lz(this)}}class k_{constructor(r,e){this.tk_1=r,this.uk_1=e}hk(){if(ar(this.tk_1,Ot().ck_1.ik_1)<0||ar(this.tk_1,Ot().dk_1.ik_1)>0)throw dc.zk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.tk_1.toString()+")");return Ot().fk(this.tk_1,this.uk_1)}}class vc{constructor(r,e){this.al_1=r,this.bl_1=e}hk(){throw dc.zk(this.al_1+' when parsing an Instant from "'+Zc(this.bl_1,64)+'"')}}class x_{lk(r){var e=r.ik_1,t=new b(86400,0),a=qr(e,t);if(ar(Ne(e,t),new b(0,0))<0&&!ir(Tr(a,t),e)){var i=a;a=Hr(i,at())}var s=a,l=new b(86400,0),u=Ut(e,l),f=gr(u,zs(l,Ls(zs(Ne(u,l),qa(u,on(u))),63))),c=rn(f),v,h,d,p=gr(s,M(719528)),g=p;p=Hr(g,M(60));var y=new b(0,0);if(ar(p,new b(0,0))<0){var x=p,k=gr(x,M(1)),S=qr(k,M(146097)),z=Hr(S,M(1));y=Tr(z,M(400));var I=p,C=on(z),j=Tr(C,M(146097));p=gr(I,j)}var P=Tr(Rn(400),p),F=gr(P,M(591)),B=qr(F,M(146097)),N=p,H=Tr(Rn(365),B),L=B,$=qr(L,M(4)),R=gr(H,$),V=B,K=qr(V,M(100)),nr=Hr(R,K),W=B,tr=qr(W,M(400)),Q=Hr(N,gr(nr,tr));if(ar(Q,new b(0,0))<0){var lr=B;B=Hr(lr,at());var X=p,xr=Tr(Rn(365),B),br=B,dr=qr(br,M(4)),Er=gr(xr,dr),zr=B,Pr=qr(zr,M(100)),Br=Hr(Er,Pr),pr=B,Gr=qr(pr,M(400));Q=Hr(X,gr(Br,Gr))}B=gr(B,y);var en=rn(Q),Zr=(or(en,5)+2|0)/153|0;h=((Zr+2|0)%12|0)+1|0,d=(en-((or(Zr,306)+5|0)/10|0)|0)+1|0;var _r=B,Fr=Zr/10|0,Vr=gr(_r,M(Fr));v=rn(Vr);var Xr=c/3600|0,$r=c-or(Xr,3600)|0,tn=$r/60|0,_n=$r-or(tn,60)|0;return new hc(v,h,d,Xr,tn,_n,r.jk_1)}}class hc{constructor(r,e,t,a,i,s,l){this.mk_1=r,this.nk_1=e,this.ok_1=t,this.pk_1=a,this.qk_1=i,this.rk_1=s,this.sk_1=l}toString(){return"UnboundLocalDateTime("+this.mk_1+"-"+this.nk_1+"-"+this.ok_1+" "+this.pk_1+":"+this.qk_1+":"+this.rk_1+"."+this.sk_1+")"}}class dc extends T{constructor(r){return new.target.zk(r)}static zk(r){var e=this.v(r);return vn(e,e.yk_1),e}}class S_{}class E_{constructor(r){this.dl_1=r}}class z_ extends S_{constructor(r,e){super();var t=this;t.el_1=Xx(r,2)?r:m(),this.fl_1=e;var a=this;a.gl_1=E(this,ut)?this:m(),this.hl_1=t1()}qa(){return om()}jl(r){this.gl_1=null,this.hl_1=r}sa(r){return this.jl(r)}*cl(r,e){return yield()=>{var t=e,a=this;return a.gl_1=E(t,ut)?t:m(),this.fl_1=r,Ts()}}il(){r:for(;;){var r=this.hl_1,e=this.gl_1,t;if(e==null){var a=new pa(r)instanceof pa?r:m();return xz(a),a}else t=e;var i=t;if(D(new pa(t1()),new pa(r))){var s;try{var l=this.el_1,u=this.fl_1;s=B2(l,this,u,i)}catch(d){if(d instanceof Error){var f=d,c=Mm(f);i.sa(c);continue r}else throw d}var v=s;if(v!==Ts()){var h=v;i.sa(h)}}else this.hl_1=t1(),i.sa(r)}}}class I_ extends de{}class pc{constructor(r){this.kl_1=r,this.ll_1=So}l2(){return this.ll_1===So&&(this.ll_1=fn(this.kl_1)(),this.kl_1=null),this.ll_1}ml(){return this.ll_1!==So}toString(){return this.ml()?ge(this.l2()):"Lazy value not initialized yet."}}class C_{}class zk{}class Mt{constructor(r){this.nl_1=r}equals(r){var e;return r instanceof Mt?e=D(this.nl_1,r.nl_1):e=!1,e}hashCode(){return wr(this.nl_1)}toString(){return"Failure("+this.nl_1.toString()+")"}}class pa{constructor(r){this.ol_1=r}toString(){return wz(this.ol_1)}hashCode(){return bz(this.ol_1)}equals(r){return kz(this.ol_1,r)}}class wh extends Ao{constructor(r){return new.target.hb(r)}static hb(r){r=r===o?"An operation is not implemented.":r;var e=this.nc(r);return vn(e,e.gb_1),e}}class Dl{constructor(r,e){this.lh_1=r,this.mh_1=e}toString(){return"("+ge(this.lh_1)+", "+ge(this.mh_1)+")"}qh(){return this.lh_1}rh(){return this.mh_1}hashCode(){var r=this.lh_1==null?0:wr(this.lh_1);return r=or(r,31)+(this.mh_1==null?0:wr(this.mh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Dl)||!D(this.lh_1,r.lh_1)||!D(this.mh_1,r.mh_1))}}class q_{constructor(){Z1=this,this.mg_1=new Pt(new b(0,0),new b(0,0)),this.ng_1=16,this.og_1=128}pg(r,e){var t;return ir(r,new b(0,0))&&ir(e,new b(0,0))?t=this.mg_1:t=new Pt(r,e),t}pl(r){var e;switch(r.length){case 36:e=US(r);break;case 32:e=DS(r);break;default:throw T.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+Sz(r,64)+'" of length '+r.length))}return e}}class Pt{constructor(r,e){Ys(),this.ql_1=r,this.rl_1=e}toString(){return this.sl()}sl(){var r=new Int8Array(36);is(this.ql_1,r,0,0,4);var e=45,t=Y(e);r[8]=$n(t),is(this.ql_1,r,9,4,6);var a=45,i=Y(a);r[13]=$n(i),is(this.ql_1,r,14,6,8);var s=45,l=Y(s);r[18]=$n(l),is(this.rl_1,r,19,0,2);var u=45,f=Y(u);return r[23]=$n(f),is(this.rl_1,r,24,2,8),jS(r)}equals(r){return this===r?!0:r instanceof Pt?ir(this.ql_1,r.ql_1)&&ir(this.rl_1,r.rl_1):!1}tl(r){var e;if(ir(this.ql_1,r.ql_1)){var l=this.rl_1,u=l,f=r.rl_1,c=f;e=jt(u,c)}else{var t=this.ql_1,a=t,i=r.ql_1,s=i;e=jt(a,s)}return e}d(r){return this.tl(r instanceof Pt?r:m())}hashCode(){return Ne(this.ql_1,this.rl_1).hashCode()}}class A_{constructor(){V1=this,this.ul_1=0,this.vl_1=-1,this.wl_1=1,this.xl_1=8}}class $e{constructor(r){Vl(),this.yl_1=r}zl(r){return Fm(this.yl_1,r)}d(r){return Ez(this,r)}toString(){return X1(this.yl_1)}hashCode(){return this.yl_1}equals(r){return zz(this.yl_1,r)}}class T_{constructor(r){this.am_1=r,this.bm_1=0}y(){return this.bm_1<this.am_1.length}cm(){var r;if(this.bm_1<this.am_1.length){var e=this.bm_1;this.bm_1=e+1|0;var t=this.am_1[e];r=t}else throw jr.r(this.bm_1.toString());return r}z(){return new $e(this.cm())}}class ga{constructor(r){this.dm_1=r}c1(){return xa(this.dm_1)}x(){return qz(this.dm_1)}em(r){return $m(this.dm_1,r)}l1(r){return Az(this,r)}d1(){return Tz(this.dm_1)}toString(){return jz(this.dm_1)}hashCode(){return Oz(this.dm_1)}equals(r){return Pz(this.dm_1,r)}}class j_{constructor(){Q1=this,this.fm_1=0,this.gm_1=-1,this.hm_1=4,this.im_1=32}}class oe{constructor(r){Xl(),this.jm_1=r}km(r){return Jm(this.jm_1,r)}d(r){return Bz(this,r)}toString(){return rf(this.jm_1)}hashCode(){return this.jm_1}equals(r){return Nz(this.jm_1,r)}}class O_{constructor(r){this.lm_1=r,this.mm_1=0}y(){return this.mm_1<this.lm_1.length}nm(){var r;if(this.mm_1<this.lm_1.length){var e=this.mm_1;this.mm_1=e+1|0;var t=this.lm_1[e];r=t}else throw jr.r(this.mm_1.toString());return r}z(){return new oe(this.nm())}}class ma{constructor(r){this.om_1=r}c1(){return Sa(this.om_1)}x(){return Rz(this.om_1)}pm(r){return Hm(this.om_1,r)}l1(r){return Lz(this,r)}d1(){return Mz(this.om_1)}toString(){return Fz(this.om_1)}hashCode(){return $z(this.om_1)}equals(r){return Jz(this.om_1,r)}}class P_{constructor(){nf=this,this.qm_1=new b(0,0),this.rm_1=new b(-1,-1),this.sm_1=8,this.tm_1=64}}class le{constructor(r){Zs(),this.um_1=r}vm(r){return Gm(this.um_1,r)}d(r){return Hz(this,r)}toString(){return ef(this.um_1)}hashCode(){return Gz(this.um_1)}equals(r){return Kz(this.um_1,r)}}class B_{constructor(r){this.wm_1=r,this.xm_1=0}y(){return this.xm_1<this.wm_1.length}ym(){var r;if(this.xm_1<this.wm_1.length){var e=this.xm_1;this.xm_1=e+1|0;var t=this.wm_1[e];r=t}else throw jr.r(this.xm_1.toString());return r}z(){return new le(this.ym())}}class ya{constructor(r){this.zm_1=r}c1(){return Ea(this.zm_1)}x(){return Zz(this.zm_1)}an(r){return Km(this.zm_1,r)}l1(r){return Vz(this,r)}d1(){return Xz(this.zm_1)}toString(){return Qz(this.zm_1)}hashCode(){return rI(this.zm_1)}equals(r){return nI(this.zm_1,r)}}class N_{constructor(){tf=this,this.bn_1=0,this.cn_1=-1,this.dn_1=2,this.en_1=16}}class Je{constructor(r){Ql(),this.fn_1=r}gn(r){return Wm(this.fn_1,r)}d(r){return eI(this,r)}toString(){return af(this.fn_1)}hashCode(){return this.fn_1}equals(r){return tI(this.fn_1,r)}}class U_{constructor(r){this.hn_1=r,this.in_1=0}y(){return this.in_1<this.hn_1.length}jn(){var r;if(this.in_1<this.hn_1.length){var e=this.in_1;this.in_1=e+1|0;var t=this.hn_1[e];r=t}else throw jr.r(this.in_1.toString());return r}z(){return new Je(this.jn())}}class wa{constructor(r){this.kn_1=r}c1(){return za(this.kn_1)}x(){return sI(this.kn_1)}ln(r){return Ym(this.kn_1,r)}l1(r){return oI(this,r)}d1(){return lI(this.kn_1)}toString(){return uI(this.kn_1)}hashCode(){return fI(this.kn_1)}equals(r){return cI(this.kn_1,r)}}function Ik(n){return new Lt(0,_c(n))}function Ck(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,n[a]==null)return a}while(e<=t)}else{var i=0,s=n.length-1|0;if(i<=s)do{var l=i;if(i=i+1|0,D(r,n[l]))return l}while(i<=s)}return-1}function qk(n,r){return Ok(n,r)>=0}function Ak(n,r){return Pk(n,r)>=0}function Tk(n,r){return Bk(n,r)>=0}function jk(n,r){return Nk(n,r)>=0}function _c(n){return n.length-1|0}function Ok(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Pk(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Bk(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,ir(r,n[a]))return a}while(e<=t);return-1}function Nk(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Uk(n){return n.length-1|0}function D_(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,Dk(n,Yr.f(),r,e,t,a,i,s).toString()}function Dk(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=0,c=n.length;r:for(;f<c;){var v=n[f];if(f=f+1|0,u=u+1|0,u>1&&r.g(e),i<0||u<=i)fm(r,v,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function Rk(n){return new Lt(0,$k(n))}function Lk(n){var r;switch(n.length){case 0:r=ur();break;case 1:r=Cn(n[0]);break;default:var e=n.slice();r=Ll(e);break}return r}function Mk(n){return new Yp(Wk(n))}function R_(n){switch(n.length){case 0:return $t();case 1:return Nc(n[0]);default:return L_(n,Pn.i(n.length))}}function Fk(n){return Jk(n,A.m())}function $k(n){return n.length-1|0}function L_(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,r.n(a)}return r}function Jk(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,a!=null&&r.n(a)}return r}function Hk(n,r){return Kk(n,r)>=0}function M_(n){var r;switch(n.length){case 0:throw jr.r("Array is empty.");case 1:r=n[0];break;default:throw T.v("Array has more than one element.")}return r}function Gk(n){return n.length===0?am():new ap(n)}function Kk(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function bh(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function Wk(n){return()=>G_(n)}function J(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,F_(n,Yr.f(),r,e,t,a,i,s).toString()}function F_(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=n.x();r:for(;f.y();){var c=f.z();if(u=u+1|0,u>1&&r.g(e),i<0||u<=i)fm(r,c,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function Yk(n){return Ss(n,Ia.b1(Mr(n,12)))}function Zk(n){for(var r=jo(n.c1()),e=0,t=n.x();t.y();){var a=t.z(),i=e;e=i+1|0,r[i]=a}return r}function ba(n){if(E(n,Z)){if(n.c1()<=1)return _t(n);var r=ja(n),e=Fs(r)?r:m();return e2(e),Ll(e)}var t=bc(n);return _2(t),t}function yi(n){return _t(yc(n))}function gc(n){if(n.d1())throw jr.r("List is empty.");return n.e1(0)}function Bt(n,r){var e=A.f1(n.c1()+1|0);return e.g1(n),e.n(r),e}function Dn(n,r){if(E(r,Z)){var e=A.f1(n.c1()+r.c1()|0);return e.g1(n),e.g1(r),e}else{var t=A.h1(n);return Ui(t,r),t}}function Vk(n,r){return 0<=r&&r<n.c1()?n.e1(r):null}function ft(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=$t();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=Nc(e);break;default:r=Ss(n,Pn.i(n.c1()));break}return r}return nE(Ss(n,Pn.i1()))}function _t(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=ur();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=Cn(e);break;default:r=wc(n);break}return r}return Fc(bc(n))}function mc(n){return n.c1()===1?n.e1(0):null}function Xk(n,r){var e=n.x();if(!e.y())throw jr.j1();for(var t=e.z();e.y();){var a=e.z();r.compare(t,a)>0&&(t=a)}return t}function yc(n){var r;return E(n,Z)?r=Pn.k1(n):r=Ss(n,Pn.i1()),r}function Qk(n,r){return E(n,Z)?n.l1(r):ex(n,r)>=0}function Ju(n){return n.d1()?null:n.e1(0)}function $_(n){var r;switch(n.c1()){case 0:throw jr.r("List is empty.");case 1:r=n.e1(0);break;default:throw T.v("List has more than one element.")}return r}function wc(n){return A.h1(n)}function rx(n,r){return tx(n,ln(n.c1()-r|0,0))}function J_(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return _t(n);var t;if(E(n,Z)){var a=n.c1()-r|0;if(a<=0)return ur();if(a===1)return Cn(ax(n));if(t=A.f1(a),E(n,zn)){if(E(n,Ds)){var i=r,s=n.c1();if(i<s)do{var l=i;i=i+1|0,t.n(n.e1(l))}while(i<s)}else for(var u=n.m1(r);u.y();){var f=u.z();t.n(f)}return t}}else t=A.m();for(var c=0,v=n.x();v.y();){var h=v.z();c>=r?t.n(h):c=c+1|0}return Fc(t)}function nx(n){if(E(n,zn))return n.d1()?null:n.e1(0);var r=n.x();return r.y()?r.z():null}function H_(n){return n.d1()?null:n.e1(n.c1()-1|0)}function Ss(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function bc(n){return E(n,Z)?wc(n):Ss(n,A.m())}function Ft(n,r){if(E(n,Z)){if(n.c1()<=1)return _t(n);var e=ja(n),t=Fs(e)?e:m();return t2(t,r),Ll(t)}var a=bc(n);return g2(a,r),a}function ex(n,r){if(E(n,zn))return n.n1(r);for(var e=0,t=n.x();t.y();){var a=t.z();if(Pi(e),D(r,a))return e;e=e+1|0}return-1}function tx(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return ur();if(E(n,Z)){if(r>=n.c1())return _t(n);if(r===1)return Cn(ix(n))}var t=0,a=A.f1(r),i=n.x();r:for(;i.y();){var s=i.z();if(a.n(s),t=t+1|0,t===r)break r}return Fc(a)}function ax(n){if(E(n,zn))return m1(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function ix(n){if(E(n,zn))return gc(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");return r.z()}function m1(n){if(n.d1())throw jr.r("List is empty.");return n.e1(Hs(n))}function sx(n){return new ip(n)}function ox(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();De(e,t)>0&&(e=t)}return e}function kc(n,r){return r<=-2147483648?um().p1_1:Fe(n,r-1|0)}function lx(n,r){return Hc.q1(n,r,-1)}function Nt(n,r){return n>r?r:n}function ln(n,r){return n<r?r:n}function ux(n,r){return Hc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function xc(n,r,e){if(ar(r,e)>0)throw T.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return ar(n,r)<0?r:ar(n,e)>0?e:n}function fx(n,r){return ar(n,r)<0?r:n}function cx(n,r,e){if(r>e)throw T.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function Hu(n,r){return ar(n,r)>0?r:n}function yo(n,r){var e=vx(r);return e!=null?n.u1(e):!1}function vx(n){return ar(new b(-2147483648,-1),n)<=0&&ar(n,new b(2147483647,0))<=0?rn(n):null}function Sc(n){var r=n.x();if(!r.y())return ur();var e=r.z();if(!r.y())return Cn(e);var t=A.m();for(t.n(e);r.y();)t.n(r.z());return t}function qi(n,r){return new n_(n,r)}function hx(n){return new sp(n)}function dx(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}var t;return r===0?t=am():E(n,Nl)?t=n.v1(r):t=new Ul(n,r),t}function kh(n,r){var e=GS(r),t;e==null?t=null:t=n.c1()+e|0;var a=t,i=Pn.i(a??or(n.c1(),2));return i.g1(n),Ui(i,r),i}function To(n,r){var e=Pn.i(n.c1()+1|0);return e.g1(n),e.n(r),e}function px(n){if(q(n)===0)throw jr.r("Char sequence is empty.");return rr(n,0)}function _x(n){var r;switch(q(n)){case 0:throw jr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw T.v("Char sequence has more than one element.")}return r}function gx(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw T.v(w(e))}return He(n,Nt(r,n.length))}function mx(n){var r=n&65535;return r}function mn(n,r){return n-r|0}function yx(n,r){return mn(n.x1_1,r instanceof qn?r.x1_1:m())}function Jn(n,r){return n-r|0}function Y(n){return n}function kr(n){return String.fromCharCode(n)}function wx(n,r){return r instanceof qn?n===r.x1_1:!1}function bx(n){return n}var y1;function Ec(){return y1===o&&new op,y1}function ge(n){var r=n==null?null:w(n);return r??"null"}function kx(n,r){var e=n??"null",t=w(r);return e+(t??"null")}var w1;function Rl(){return w1===o&&new lp,w1}function xx(n){var r;return n<0?r=-n:r=n,r}function G_(n){return new up(n)}function jo(n){var r="BooleanArray",e=K_(Array(n),!1);return e.$type$=r,e}function K_(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;e=e+1|0,n[a]=r}while(a!==t);return n}function Es(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function Ca(n){var r="LongArray",e=K_(Array(n),new b(0,0));return e.$type$=r,e}function Ai(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function Gu(){return Ti(),W_}var W_;function Y_(){return Ti(),Z_}var Z_;function b1(){return Ti(),V_}var V_;function X_(){return Ti(),Q_}var Q_;function Sx(){return Ti(),rg}var rg;function Ex(n){return Ti(),(n|0)===n?Po(n):(Y_()[0]=n,or(b1()[Sx()],31)+b1()[X_()]|0)}var xh;function Ti(){xh||(xh=!0,W_=new ArrayBuffer(8),Z_=new Float64Array(Gu()),new Float32Array(Gu()),V_=new Int32Array(Gu()),Y_()[0]=-1,Q_=b1()[0]!==0?1:0,rg=1-X_()|0)}function tt(){return yr(),ng}var ng;function at(){return yr(),eg}var eg;function Sh(){return yr(),tg}var tg;function zx(){return yr(),ag}var ag;function Le(){return yr(),ig}var ig;function Eh(){return yr(),sg}var sg;function ar(n,r){if(yr(),ir(n,r))return 0;var e=Ee(n),t=Ee(r);return e&&!t?-1:!e&&t?1:Ee(Hr(n,r))?-1:1}function k1(n){return yr(),$n(n.d3_1)}function x1(n){return yr(),jc(n.d3_1)}function rn(n){return yr(),n.d3_1}function ae(n){return yr(),n.e3_1*4294967296+Cx(n)}function Oo(n,r){if(yr(),ka(n))return"0";if(Ee(n))if(ir(n,Le())){var e=M(r),t=qr(n,e),a=rn(Hr(Tr(t,e),n)),i=Oo(t,r);return i+a.toString(r)}else return"-"+Oo(on(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,l=wi(Math.pow(r,s)),u=n,f="";;){var c=qr(u,l),v=rn(Hr(u,Tr(c,l))),h=v.toString(r);if(u=c,ka(u))return h+f;for(;h.length<s;)h="0"+h;f=h+f}}function ir(n,r){return yr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Ix(n){return yr(),n.d3_1^n.e3_1}function M(n){return yr(),new b(n,n<0?-1:0)}function Ee(n){return yr(),n.e3_1<0}function Hr(n,r){return yr(),gr(n,on(r))}function Cx(n){return yr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function ka(n){return yr(),n.e3_1===0&&n.d3_1===0}function Tr(n,r){if(yr(),ka(n))return tt();if(ka(r))return tt();if(ir(n,Le()))return zh(r)?Le():tt();if(ir(r,Le()))return zh(n)?Le():tt();if(Ee(n)){var e;return Ee(r)?e=Tr(on(n),on(r)):e=on(Tr(on(n),r)),e}else if(Ee(r))return on(Tr(n,on(r)));if(Ih(n,Eh())&&Ih(r,Eh()))return wi(ae(n)*ae(r));var t=n.e3_1>>>16|0,a=n.e3_1&65535,i=n.d3_1>>>16|0,s=n.d3_1&65535,l=r.e3_1>>>16|0,u=r.e3_1&65535,f=r.d3_1>>>16|0,c=r.d3_1&65535,v=0,h=0,d=0,p=0;return p=p+or(s,c)|0,d=d+(p>>>16|0)|0,p=p&65535,d=d+or(i,c)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+or(s,f)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+or(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((or(t,c)+or(a,f)|0)+or(i,u)|0)+or(s,l)|0)|0,v=v&65535,new b(d<<16|p,v<<16|h)}function on(n){return yr(),gr(zc(n),new b(1,0))}function wi(n){if(yr(),Js(n))return tt();if(n<=-9223372036854776e3)return Le();if(n+1>=9223372036854776e3)return zx();if(n<0)return on(wi(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new b(e,t)}function gr(n,r){yr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,a=n.d3_1>>>16|0,i=n.d3_1&65535,s=r.e3_1>>>16|0,l=r.e3_1&65535,u=r.d3_1>>>16|0,f=r.d3_1&65535,c=0,v=0,h=0,d=0;return d=d+(i+f|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(a+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+l|0)|0,c=c+(v>>>16|0)|0,v=v&65535,c=c+(e+s|0)|0,c=c&65535,new b(h<<16|d,c<<16|v)}function zh(n){return yr(),(n.d3_1&1)===1}function Ih(n,r){return yr(),ar(n,r)<0}function zc(n){return yr(),new b(~n.d3_1,~n.e3_1)}function qr(n,r){if(yr(),ka(r))throw ks.k3("division by zero");if(ka(n))return tt();if(ir(n,Le())){if(ir(r,at())||ir(r,Sh()))return Le();if(ir(r,Le()))return at();var e=Ls(n,1),t=ie(qr(e,r),1);if(ir(t,tt()))return Ee(r)?at():Sh();var a=Hr(n,Tr(r,t));return gr(t,qr(a,r))}else if(ir(r,Le()))return tt();if(Ee(n)){var i;return Ee(r)?i=qr(on(n),on(r)):i=on(qr(on(n),r)),i}else if(Ee(r))return on(qr(n,on(r)));for(var s=tt(),l=n;Ax(l,r);){for(var u=ae(l)/ae(r),f=Math.max(1,Math.floor(u)),c=Math.ceil(Math.log(f)/Math.LN2),v=c<=48?1:Math.pow(2,c-48),h=wi(f),d=Tr(h,r);Ee(d)||qx(d,l);)f=f-v,h=wi(f),d=Tr(h,r);ka(h)&&(h=at()),s=gr(s,h),l=Hr(l,d)}return s}function Ls(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new b(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function ie(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new b(0,n.d3_1<<(e-32|0))}function qx(n,r){return yr(),ar(n,r)>0}function Ax(n,r){return yr(),ar(n,r)>=0}function Ut(n,r){return yr(),Hr(n,Tr(qr(n,r),r))}function zs(n,r){return yr(),new b(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function qa(n,r){return yr(),new b(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Ne(n,r){return yr(),new b(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Ic(n,r){yr();var e=r&63;if(e===0)return n;if(e<32)return new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new b(n.e3_1,0):t=new b(n.e3_1>>>(e-32|0)|0,0),t}function Rn(n){yr();var r;return n instanceof b?r=n:r=wi(n),r}function ci(n){return yr(),Aa(n)&&n.$type$==="LongArray"}function Tx(n){return yr(),n!=null?ci(n):!1}var Ch;function yr(){if(!Ch){Ch=!0,ng=M(0),eg=M(1),tg=M(-1),ag=new b(-1,2147483647),ig=new b(0,-2147483648),sg=M(16777216);var n=Array;new an(n,"LongArray",Tx)}}function rr(n,r){var e;return Cc(n)?e=G(n,r):e=n.b(r),e}function Cc(n){return typeof n=="string"}function G(n,r){return n.charCodeAt(r)}function q(n){var r;return Cc(n)?r=n.length:r=n.a(),r}function Ln(n,r,e){var t;return Cc(n)?t=Hn(n,r,e):t=n.c(r,e),t}function jx(n){return D_(n,", ","[","]",o,o,Ox)}function og(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!pg(t)||e.length!=t.length)return!1;var a=0,i=e.length;if(a<i)do{var s=a;if(a=a+1|0,!D(e[s],t[s]))return!1}while(a<i);return!0}function lg(n){var r=n;if(r==null)return 0;var e=1,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0,e=or(e,31)+wr(r[i])|0}while(t<a);return e}function Ox(n){return w(n)}function De(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=qh(n,r):r instanceof b?t=qh(n,ae(r)):t=Ah(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Ah(n,r);break;default:e=Px(n,r);break}return e}function qh(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var a=1/n,i;a===1/r?i=0:a<0?i=-1:i=1,t=i}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Ah(n,r){return n<r?-1:n>r?1:0}function Px(n,r){return n.d(r)}function Bx(n){return S1(n)}function S1(n){if(!("kotlinHashCodeValue$"in n)){var r=ug(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function ug(){return Math.random()*4294967296|0}function w(n){var r;return n==null?r="null":pg(n)?r="[...]":typeof n.toString!="function"?r=Nx(n):r=n.toString(),r}function Nx(n){return Object.prototype.toString.call(n)}function D(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var a=1/n;t=a===1/r}e=t}else e=!1;return e}if(E1(n)&&E1(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!Aa(n.$bound)||!Aa(r.$bound))return!1;var i=n.$bound,s=r.$bound;return og(i,s)}return n===r}function wr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():S1(n);break;case"function":e=E1(n)?Ux(n):S1(n);break;case"number":e=Ex(n);break;case"boolean":e=qc(n);break;case"string":e=pe(String(n));break;case"bigint":e=Dx(n);break;case"symbol":e=Rx(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Ux(n){var r=n.$flags;r=or(31,r)+wr(n.$id)|0;var e=or(31,r),t=n.$arity;r=e+(t??-1)|0;var a=n.$bound;if(a!=null&&Aa(a)){var i=a;r=or(31,r)+lg(i)|0}return r}function qc(n){return n?1231:1237}function pe(n){var r=0,e=n.length,t=0,a=e-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n.charCodeAt(i);r=or(r,31)+s|0}while(i!==a);return r}function Dx(n){var r=BigInt(32),e=BigInt(4294967295),t=xx(n),a=0,i;n<0?i=-1:i=1;var s=i;r:for(;;){if(t==0)break r;var l=t&e,u=Number(l);a=or(31,a)+u|0,t=t>>r}return or(a,s)}function Rx(n){var r=Lx(n)?Mx():Fx(),e=r.get(n);if(e!==o)return e;var t=ug();return r.set(n,t),t}function Lx(n){return Symbol.keyFor(n)!=o}function Mx(){return Ku===o&&(Ku=new Map),Ku}function Fx(){return Wu===o&&(Wu=new WeakMap),Wu}var Ku,Wu;function vn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Rr(n){return n.prototype}function Pa(n,r){var e=Object.create(n.prototype);return Ac(e,r),e}function Ac(n,r){r!==o&&Object.assign(n,r)}function vi(n,r,e,t){var a;a=n;var i=a;return Reflect.construct(r,e,i)}function $x(n){return n===o}function fg(n){return{cause:n}}function hi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if($x(r)){var a=e==null?null:e.toString();t=a??o}else t=o;n.message=t}}function Jx(){return vg(),cg}var cg;function Hx(n,r){return vg(),n!=o&&n[Jx()]?r(n):U2(r)}var Th;function vg(){Th||(Th=!0,cg=ut.Symbol)}function Ms(){throw h1.s3()}function Gx(){throw d1.w3()}function m(){throw p1.a4()}function fn(n){var r;return n==null?Gx():r=n,r}function hg(n,r,e,t,a,i){var s=o;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:a,suspendArity:i,$kClass$:s,defaultConstructor:e}}function _(n,r,e,t,a,i,s,l){var u="class";Tc(u,n,r,e,t,a,i,s,l)}function Tc(n,r,e,t,a,i,s,l,u){var f=hg(n,e,t,l,u,s);r.$metadata$=f;var c=r.prototype;if(i!=null)for(var v=0,h=i.length;v<h;){var d=i[v];v=v+1|0,Object.assign(c,d.prototype),c[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function U(n,r,e,t,a,i,s,l){var u="object";Tc(u,n,r,e,t,a,i,s,l)}function Lr(n,r,e,t,a,i,s,l){var u="interface";Tc(u,n,r,e,t,a,i,s,l)}function nn(n,r,e,t){U(n,"Companion",o,r,e,t,o,o)}function Kx(n){var r=n.length,e=Array(r),t=0,a=r-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n[i];s!=null&&Fs(s)?e[i]=s:e[i]=[].slice.call(s)}while(i!==a);return[].concat.apply([],e)}function $n(n){return n<<24>>24}function Po(n){var r;return n instanceof b?r=rn(n):r=Wx(n),r}function Wx(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function jc(n){return n<<16>>16}function nt(n){var r=Po(n),e=jc(r);return mx(e)}function Fe(n,r){return new Lt(n,r)}function Yx(){return Oi(),dg}var dg;function ei(){return Oi(),hg("class",o,o,o,o,o)}function ji(n,r,e,t,a,i){return Oi(),t.get=t,t.set=a,t.callableName=n,Zx(t,Vx(r,a),e)}function Zx(n,r,e){Oi(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function Vx(n,r){return Oi(),Yx()[n][r==null?0:1]}function Ke(n,r,e,t,a,i){return Oi(),n.callableName=a,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=i,n}var jh;function Oi(){if(!jh){jh=!0;var n=[ei(),ei()],r=[ei(),ei()];dg=[n,r,[ei(),ei()]]}}function pg(n){return Aa(n)||f1(n)}function Aa(n){return Array.isArray(n)}function E1(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function Fs(n){var r;return Aa(n)?r=!n.$type$:r=!1,r}function Xx(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,a=t==null?null:t.$metadata$,i=a==null?null:a.suspendArity,s;if(i==null)return!1;s=i;var l=s,u=!1,f=0,c=l.length;r:for(;f<c;){var v=l[f];if(f=f+1|0,r===v){u=!0;break r}}return u}function _g(n){var r;return typeof n=="number"?r=!0:r=n instanceof b,r}function z1(n){var r=typeof n;return r==="string"||r==="boolean"||_g(n)||E(n,Te)}function $s(n){return typeof n=="string"||E(n,tc)}function vs(n){return Aa(n)&&n.$type$==="BooleanArray"}function hs(n){return n instanceof Int8Array}function ds(n){return n instanceof Int16Array}function ps(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function _s(n){return n instanceof Int32Array}function gs(n){return n instanceof Float32Array}function ms(n){return n instanceof Float64Array}function Qx(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var a=t==="object"?r2(r):r,i=a.$metadata$;return(i==null?null:i.kind)==="interface"?E(n,a):n instanceof a}function r2(n){return Object.getPrototypeOf(n)}var o;function Ta(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,new Int32Array(r));else if(r>t){var i=new Int32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function gg(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Ug(n,r,null)}function Oc(n,r){return og(n,r)}function n2(n){return lg(n)}function Ll(n){return A.i4(n)}function I1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,Es(r));else if(r>t){var i=Es(r);i.set(n),a=i}else a=n.slice(0,r);var s=a;return s.$type$="CharArray",s}function C1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,new Float64Array(r));else if(r>t){var i=new Float64Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function q1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,new Float32Array(r));else if(r>t){var i=new Float32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function bi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Ba(n,Ca(r))}function ki(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,new Int16Array(r));else if(r>t){var i=new Int16Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function xi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ba(n,new Int8Array(r));else if(r>t){var i=new Int8Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function A1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t="BooleanArray",a=Ug(n,r,!1);return a.$type$=t,a}function e2(n){n.length>1&&w2(n)}function t2(n,r){n.length>1&&Eg(n,r)}function Yu(n,r,e){for(var t=new Int32Array(e),a=0,i=0,s=0,l=0,u=n.length;l<u;){var f=G(n,l);l=l+1|0;var c=r[Y(f)];if(i=i|(c&31)<<s,c<32){var v=a;a=v+1|0,t[v]=i,i=0,s=0}else s=s+5|0}return t}function mg(n){return yg(n)>=0}function yg(n){var r=Y(n),e=wg(Oh().j4_1,r),t=r-Oh().j4_1[e]|0;return t<10?t:-1}function wg(n,r){for(var e=0,t=n.length-1|0,a=-1,i=0;e<=t;)if(a=(e+t|0)/2|0,i=n[a],r>i)e=a+1|0;else{if(r===i)return a;t=a-1|0}return a-(r<i?1:0)|0}var T1;function Oh(){return T1===o&&new fp,T1}function a2(n){return i2(n)!==0}function i2(n){var r=Y(n),e=wg(po().k4_1,r),t=po().k4_1[e],a=(t+po().l4_1[e]|0)-1|0,i=po().m4_1[e];if(r>a)return 0;var s=i&3;if(s===0){var l=2,u=t,f=0;if(f<=1)do{if(f=f+1|0,u=u+(i>>l&127)|0,u>r)return 3;if(l=l+7|0,u=u+(i>>l&127)|0,u>r)return 0;l=l+7|0}while(f<=1);return 3}if(i<=7)return s;var c=r-t|0,v=i<=31?c%2|0:c;return i>>or(2,v)&3}var j1;function po(){return j1===o&&new cp,j1}function s2(n){var r=Y(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function o2(n){for(var r=cr.t4(),e=n.u4();e.y();){var t=e.z(),a=n.v4(t),i=r.o2(a),s=(i==null&&!r.m2(a)?0:i)+1|0;r.s2(a,s)}return r}function Js(n){return n!==n}function l2(n){var r;return n===0?r=0:r=1<<(31-ws(n)|0),r}function u2(n){return n===1/0||n===-1/0}function Ph(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+ws(t)|0}else e=ws(r);return e}function Pc(n){return!f2(n)&&!c2(n)}function Bc(n){return!u2(n)&&!Js(n)}function bg(n){var r=n.d3_1;return r===0?32+Bh(n.e3_1)|0:Bh(r)}function f2(n){return n===1/0||n===-1/0}function c2(n){return n!==n}function Bh(n){var r=~(n|(-n|0));return 32-ws(r)|0}var fr;function di(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function jt(n,r){return Ne(n,new b(0,-2147483648)).f3(Ne(r,new b(0,-2147483648)))}function v2(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function h2(n,r){var e=n,t=r;if(ar(t,new b(0,0))<0){var a;return jt(n,r)<0?a=new b(0,0):a=new b(1,0),a}if(ar(e,new b(0,0))>=0)return qr(e,t);var i=ie(qr(Ic(e,1),t),1),s=Hr(e,Tr(i,t)),l,u=s,f=t;jt(u,f)>=0?l=1:l=0;var c=l,v=gr(i,M(c));return v}function d2(n,r){if(ar(n,new b(0,0))>=0)return n1(n,r);var e=Ic(n,1),t=qr(e,M(r)),a=ie(t,1),i=a,s=Tr(i,M(r)),l=Hr(n,s);if(ar(l,M(r))>=0){var u=l;l=Hr(u,M(r));var f=a;a=gr(f,M(1))}return n1(a,r)+n1(l,r)}function ja(n){var r;return n.toArray!==void 0?r=n.toArray():r=kg(n),r}function Pi(n){return n<0&&FS(),n}function p2(n,r,e,t,a){Mn.x4(t,a,n.length);var i=a-t|0;if(Mn.x4(e,e+i|0,r.length),f1(r)&&f1(n)){var s=n.subarray(t,a);r.set(s,e)}else{var l=0;if(l<i)do{var u=l;l=l+1|0,r[e+u|0]=n[t+u|0]}while(l<i)}}function kg(n){return $S(n)}function Cn(n){var r=[n];return A.i4(r)}function Bo(n){return VS([n])}function Nc(n){return eE([n])}function _2(n){xg(n,im())}function g2(n,r){xg(n,r)}function xg(n,r){if(n.c1()<=1)return fr;var e=ja(n);Eg(e,r);var t=0,a=e.length;if(t<a)do{var i=t;t=t+1|0,n.y4(i,e[i])}while(t<a)}function Sg(n){if(!(n>=0)){var r="capacity must be non-negative.";throw T.v(w(r))}return Array(n)}function No(n,r,e){n.fill(null,r,e)}function Nh(n,r){return gg(n,r)}function Uh(n,r){n[r]=null}var O1;function as(){return O1===o&&new _p,O1}function m2(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function Zu(n,r){return Mn.l6(r,n.c1()),r}function y2(n,r){return Mn.m5(r,n.c1()),r}var wo;function Eg(n,r){if(zg()){var e=b2(r);n.sort(e)}else Ig(n,0,_c(n),r)}function w2(n){if(zg()){var r=k2;n.sort(r)}else Ig(n,0,_c(n),im())}function zg(){var n=wo;if(n!=null)return n;wo=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var a=x2;r.sort(a);var i=1,s=r.length;if(i<s)do{var l=i;i=i+1|0;var u=r[l-1|0],f=r[l];if((u&3)===(f&3)&&u>=f)return!1}while(i<s);return wo=!0,!0}function Ig(n,r,e,t){var a=n.length,i=Array(a),s=P1(n,i,r,e,t);if(s!==n){var l=r;if(l<=e)do{var u=l;l=l+1|0,n[u]=s[u]}while(u!==e)}}function P1(n,r,e,t,a){if(e===t)return n;var i=(e+t|0)/2|0,s=P1(n,r,e,i,a),l=P1(n,r,i+1|0,t,a),u=s===r?n:r,f=e,c=i+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,f<=i&&c<=t){var d=s[f],p=l[c];a.compare(d,p)<=0?(u[h]=d,f=f+1|0):(u[h]=p,c=c+1|0)}else f<=i?(u[h]=s[f],f=f+1|0):(u[h]=l[c],c=c+1|0)}while(h!==t);return u}function b2(n){return(r,e)=>n.compare(r,e)}function k2(n,r){return De(n,r)}function x2(n,r){return(n&3)-(r&3)|0}function S2(n){n.y6_1=null}function Cg(n,r){return l2(or(ln(r,1),3))}function qg(n,r){return ws(r)+1|0}function Dh(n){if(n.y8_1.i7_1!==n.a9_1)throw qo.x8("The backing map has been modified after this entry was obtained.")}function Si(n){return n.b7_1.length}function ot(n){return n.e7_1.length}function Ml(n){n.i7_1=n.i7_1+1|0}function Ag(n,r){E2(n,r)?jg(n,!0):z2(n,n.g7_1+r|0)}function E2(n,r){var e=Si(n)-n.g7_1|0,t=n.g7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(Si(n)/4|0)}function z2(n,r){if(r<0)throw _e.d9("too many elements");if(r>Si(n)){var e=Mn.e9(Si(n),r);n.b7_1=Nh(n.b7_1,e);var t=n,a=n.c7_1;t.c7_1=a==null?null:Nh(a,e),n.d7_1=Ta(n.d7_1,e);var i=Cg(Is,e);i>ot(n)&&Og(n,i)}}function Tg(n){var r=n.c7_1;if(r!=null)return r;var e=Sg(Si(n));return n.c7_1=e,e}function Fl(n,r){return r==null?0:or(wr(r),-1640531527)>>>n.h7_1|0}function jg(n,r){for(var e=0,t=0,a=n.c7_1;e<n.g7_1;){var i=n.d7_1[e];i>=0&&(n.b7_1[t]=n.b7_1[e],a!=null&&(a[t]=a[e]),r&&(n.d7_1[t]=i,n.e7_1[i]=t+1|0),t=t+1|0),e=e+1|0}No(n.b7_1,t,n.g7_1),a==null||No(a,t,n.g7_1),n.g7_1=t}function Og(n,r){Ml(n),n.g7_1>n.j7_1&&jg(n,!1),n.e7_1=new Int32Array(r),n.h7_1=qg(Is,r);for(var e=0;e<n.g7_1;){var t=e;if(e=t+1|0,!I2(n,t))throw mr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function I2(n,r){for(var e=Fl(n,n.b7_1[r]),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return n.e7_1[e]=r+1|0,n.d7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0)}}function _o(n,r){for(var e=Fl(n,r),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return-1;if(D(n.b7_1[a-1|0],r))return a-1|0;if(t=t-1|0,t<0)return-1;var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0)}}function C2(n,r){var e=n.g7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.d7_1[e]>=0&&D(fn(n.c7_1)[e],r))return e}return-1}function Pg(n,r){n.z7();r:for(;;)for(var e=Fl(n,r),t=Nt(or(n.f7_1,2),ot(n)/2|0),a=0;;){var i=n.e7_1[e];if(i===0){if(n.g7_1>=Si(n)){Ag(n,1);continue r}var s=n.g7_1;n.g7_1=s+1|0;var l=s;return n.b7_1[l]=r,n.d7_1[l]=e,n.e7_1[e]=l+1|0,n.j7_1=n.j7_1+1|0,Ml(n),a>n.f7_1&&(n.f7_1=a),l}if(D(n.b7_1[i-1|0],r))return-i|0;if(a=a+1|0,a>t){Og(n,or(ot(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=ot(n)-1|0)}}function Bg(n,r){Uh(n.b7_1,r);var e=n.c7_1;e==null||Uh(e,r),q2(n,n.d7_1[r]),n.d7_1[r]=-1,n.j7_1=n.j7_1-1|0,Ml(n)}function q2(n,r){for(var e=r,t=r,a=0;;){var i=e;e=i-1|0,i===0&&(e=ot(n)-1|0);var s=n.e7_1[e];if(a=a+1|0,a>n.f7_1||s===0)return n.e7_1[t]=0,fr;var l=Fl(n,n.b7_1[s-1|0]);((l-e|0)&(ot(n)-1|0))>=a&&(n.e7_1[t]=s,n.d7_1[s-1|0]=t,t=e,a=0)}}function A2(n,r){return n.j7_1===r.c1()&&n.k8(r.r2())}function T2(n,r){var e=Pg(n,r.k2()),t=Tg(n);if(e>=0)return t[e]=r.l2(),!0;var a=t[(-e|0)-1|0];return D(r.l2(),a)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function j2(n,r){if(r.d1())return!1;Ag(n,r.c1());for(var e=r.x(),t=!1;e.y();)T2(n,e.z())&&(t=!0);return t}var Is,B1;function O2(){return B1===o&&new Tp,B1}var Ng;function P2(n,r){var e=new sc(r),t=e,a=n;return t.va_1=typeof a=="function"?a(e):n.ib(e),e}function B2(n,r,e,t){var a=new sc(t),i=n,s=typeof i=="function"?i(r,e,a):n.jb(r,e,a);return a.va_1=s,a.ya()}function N2(n){var r=n instanceof ic?n:null,e=r==null?null:r.bb();return e??n}function U2(n){return new Promise(D2(n))}function D2(n){return(r,e)=>{var t=om(),a=new Op(t,r,e);return sE(n,a),fr}}function Rh(n){vn(n,n.r6_1)}function Vu(n){vn(n,n.u_1)}function Xu(n){vn(n,n.c9_1)}function Qu(n){vn(n,n.j3_1)}function Lh(n){vn(n,n.q_1)}function Mh(n){vn(n,n.xb_1)}function Fh(n){vn(n,n.n3_1)}function $h(n){vn(n,n.w8_1)}function Jh(n){vn(n,n.dc_1)}function Hh(n){vn(n,n.hc_1)}function r1(n){vn(n,n.jc_1)}function Gh(n){vn(n,n.rc_1)}function R2(n){vn(n,n.r3_1)}function L2(n){vn(n,n.v3_1)}function M2(n){vn(n,n.z3_1)}function Ba(n,r){for(var e=n.length,t=r.length,a=0,i=r;a<e&&a<t;){var s=a,l=a;a=l+1|0,i[s]=n[l]}return r}function Ug(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var a=n.length;if(r>a)for(t.length=r;a<r;){var i=a;a=i+1|0,t[i]=e}return t}function bo(n,r){return new pc(r)}function Dg(n){return new pc(n)}function F2(n){return rn(qa(Ls(n,63),Ic(on(n),63)))}function $2(n){return ar(n,new b(0,0))<0?on(n):n}function J2(n){var r;if(Js(n))throw T.v("Cannot round NaN value.");return n>ae(new b(-1,2147483647))?r=new b(-1,2147483647):n<ae(new b(0,-2147483648))?r=new b(0,-2147483648):r=Rn(Math.round(n)),r}function H2(n){return n<0?-n|0:n}var Uo;function G2(){return Uo===o&&new oc,Uo}function Kh(){return pS(),Rg}var Rg;function K2(n){return n!=null}function W2(n){return _g(n)}function Y2(n){return n!=null?typeof n=="boolean":!1}function Z2(n){return n!=null?typeof n=="number":!1}function V2(n){return n!=null?typeof n=="number":!1}function X2(n){return n!=null?typeof n=="number":!1}function Q2(n){return n instanceof b}function rS(n){return n!=null?typeof n=="number":!1}function nS(n){return n!=null?typeof n=="number":!1}function eS(n){return n!=null?Fs(n):!1}function tS(n){return n!=null?typeof n=="string":!1}function aS(n){return n instanceof Error}function iS(n){return n!=null?vs(n):!1}function sS(n){return n!=null?ps(n):!1}function oS(n){return n!=null?hs(n):!1}function lS(n){return n!=null?ds(n):!1}function uS(n){return n!=null?_s(n):!1}function fS(n){return typeof n=="bigint"}function cS(n){return n!=null?ci(n):!1}function vS(n){return n!=null?gs(n):!1}function hS(n){return n!=null?ms(n):!1}function dS(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var N1;function Ir(){return N1===o&&new Pp,N1}var Wh;function pS(){Wh||(Wh=!0,Rg=Array(0))}function Ur(n){if(n===String)return Ir().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var a=new _1(n);r.$kClass$=a,t=a}else t=r.$kClass$;e=t}else e=new _1(n);return e}function Dr(n){var r;switch(typeof n){case"string":r=Ir().stringClass;break;case"number":var e;(n|0)===n?e=Ir().intClass:e=Ir().doubleClass,r=e;break;case"bigint":r=Ir().bigIntClass;break;case"boolean":r=Ir().booleanClass;break;case"function":var t=Ir();r=t.functionClass(n.length);break;default:var a;if(vs(n))a=Ir().booleanArrayClass;else if(ps(n))a=Ir().charArrayClass;else if(hs(n))a=Ir().byteArrayClass;else if(ds(n))a=Ir().shortArrayClass;else if(_s(n))a=Ir().intArrayClass;else if(ci(n))a=Ir().wd();else if(gs(n))a=Ir().floatArrayClass;else if(ms(n))a=Ir().doubleArrayClass;else if(E(n,rt))a=Ur(rt);else if(Fs(n))a=Ir().arrayClass;else{var i=Object.getPrototypeOf(n).constructor,s;if(i===Object)s=Ir().anyClass;else if(i===Error)s=Ir().throwableClass;else{var l=i;s=Ur(l)}a=s}r=a;break}return r}function _S(n){n.lastIndex=0}function U1(n){var r=kr(n).toUpperCase();return r.length>1?n:G(r,0)}function gS(n){return 97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57?!0:mn(n,128)<0?!1:mg(n)||a2(n)}function mS(n){return 48<=n&&n<=57?!0:mn(n,128)<0?!1:mg(n)}function Uc(n){return s2(n)}function n1(n,r){return Oo(n,Bi(r))}function Bi(n){if(!(2<=n&&n<=36))throw T.v("radix "+n+" was not in valid range 2..36");return n}function Dc(n){var r=+n,e;return Js(r)&&!Mg(n)||r===0&&vt(n)?e=null:e=r,e}function yS(n,r){return n.toString(Bi(r))}function Do(n){var r=+n;return(Js(r)&&!Mg(n)||r===0&&vt(n))&&Di(n),r}function $l(n,r){var e=mn(n,48)>=0&&mn(n,57)<=0?Jn(n,48):mn(n,65)>=0&&mn(n,90)<=0?Jn(n,65)+10|0:mn(n,97)>=0&&mn(n,122)<=0?Jn(n,97)+10|0:mn(n,128)<0?-1:mn(n,65313)>=0&&mn(n,65338)<=0?Jn(n,65313)+10|0:mn(n,65345)>=0&&mn(n,65370)<=0?Jn(n,65345)+10|0:yg(n);return e>=r?-1:e}function Lg(n){var r=Gl(n),e;return r==null?Di(n):e=r,e}function Mg(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var D1;function Cs(){return D1===o&&new Bp,D1}function wS(n,r,e){return()=>n.xe(r,e)}function bS(n){return n.z()}function kS(n){return r=>SS(r,n)}function xS(n,r){return J(n,"",r,o,o,o,CS)}function Fg(n,r,e,t){n.lastIndex=e;var a=n.exec(r);if(a==null)return null;var i=Fe(a.index,n.lastIndex-1|0);return new Dp(i,a,t,r)}function SS(n,r){for(var e=0,t=Yr.f();e<r.length;){var a=e;e=a+1|0;var i=G(r,a);if(i===92){if(e===r.length)throw T.v("The Char to be escaped is missing");var s=e;e=s+1|0,t.ga(G(r,s))}else if(i===36){if(e===r.length)throw T.v("Capturing group index is missing");if(G(r,e)===123){e=e+1|0;var l=ES(r,e);if(e===l)throw T.v("Named capturing group reference should have a non-empty name");if(l===r.length||G(r,l)!==125)throw T.v("Named capturing group reference is missing trailing '}'");var u=Hn(r,e,l),f=zS(n.nf(),u),c=f==null?null:f.of_1;t.fa(c??""),e=l+1|0}else{var v=G(r,e);if(!(48<=v&&v<=57))throw T.v("Invalid capturing group reference");var h=n.nf(),d=IS(r,e,h.c1()),p=Lg(Hn(r,e,d));if(p>=h.c1())throw Kn.zb("Group with index "+p+" does not exist");var g=h.e1(p),y=g==null?null:g.of_1;t.fa(y??""),e=d}}else t.ga(i)}return t.toString()}function ES(n,r){var e=r;r:for(;e<n.length;){if(G(n,e)===125)break r;e=e+1|0}return e}function zS(n,r){var e=E(n,lc)?n:null,t;if(e==null)throw se.n8("Retrieving groups by name is not supported on this platform.");t=e;var a=t;return a.pf(r)}function IS(n,r,e){var t=r+1|0,a=Jn(G(n,r),48);r:for(;;){var i;if(t<n.length){var s=G(n,t);i=48<=s?s<=57:!1}else i=!1;if(!i)break r;var l=or(a,10)+Jn(G(n,t),48)|0;if(0<=l&&l<e)a=l,t=t+1|0;else break r}return t}function CS(n){return n.sf_1}function qS(n){return r=>n.e1(r)}function AS(n,r,e){return Object.prototype.hasOwnProperty.call(r,e)}function TS(n,r){if(r<ct(n.bg_1)){var e=n.bg_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.bg_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function Hn(n,r,e){return n.substring(r,e)}function He(n,r){return n.substring(r)}function jS(n){return OS(n,0,n.length)}function te(n,r,e,t){t=t===o?!1:t;var a=new RegExp(Cs().qe(r),t?"gui":"gu"),i=Cs().re(e);return n.replace(a,i)}function Ce(n,r,e){return e=e===o?!1:e,e?Rc(n,0,r,0,r.length,e):n.startsWith(r,0)}function $g(n,r,e){return e=e===o?!1:e,e?Rc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Rc(n,r,e,t,a,i){return i=i===o?!1:i,Kl(n,r,e,t,a,i)}function Yh(n,r,e){if(e=e===o?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,a=n.length;if(t<a)do{var i=t;t=t+1|0;var s=G(n,i),l=G(r,i);if(!Hl(s,l,e))return!1}while(t<a);return!0}function OS(n,r,e,t){if(!(e<=n.length&&r<=e)){var a="Failed requirement.";throw T.v(w(a))}for(var i=r,s=Yr.f();i<e;){var l=i;i=l+1|0;var u=n[l];if(u>=0)s.ga(nt(u));else if(u>>5===-2){var f=PS(n,u,i,e);f<=0?(s.ga(65533),i=i+(-f|0)|0):(s.ga(nt(f)),i=i+1|0)}else if(u>>4===-2){var c=BS(n,u,i,e);c<=0?(s.ga(65533),i=i+(-c|0)|0):(s.ga(nt(c)),i=i+2|0)}else if(u>>3===-2){var v=NS(n,u,i,e);if(v<=0)s.ga(65533),i=i+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.ga(nt(h)),s.ga(nt(d)),i=i+3|0}}else s.ga(65533)}return s.toString()}function PS(n,r,e,t,a){if(!(r&30)||e>=t)return jn(0);var i=n[e];return(i&192)!==128?jn(0):r<<6^i^3968}function BS(n,r,e,t,a){if(e>=t)return jn(0);var i=n[e];if(r&15){if((r&15)===13){if((i&224)!==128)return jn(0)}else if((i&192)!==128)return jn(0)}else if((i&224)!==160)return jn(0);if((e+1|0)===t)return jn(1);var s=n[e+1|0];return(s&192)!==128?jn(1):r<<12^i<<6^s^-123008}function NS(n,r,e,t,a){if(e>=t)return jn(0);var i=n[e];if(r&15){if((r&15)===4){if((i&240)!==128)return jn(0)}else if((r&15)>4)return jn(0)}else if((i&240)<=128)return jn(0);if((i&192)!==128)return jn(0);if((e+1|0)===t)return jn(1);var s=n[e+1|0];if((s&192)!==128)return jn(1);if((e+2|0)===t)return jn(2);var l=n[e+2|0];return(l&192)!==128?jn(2):r<<18^i<<12^s<<6^l^3678080}function jn(n,r,e){return-n|0}var Zh;function Ni(){if(Zh)return fr;Zh=!0,Jg=new qt("NANOSECONDS",0,1),new qt("MICROSECONDS",1,1e3),Hg=new qt("MILLISECONDS",2,1e6),Gg=new qt("SECONDS",3,1e9),Kg=new qt("MINUTES",4,6e10),Wg=new qt("HOURS",5,36e11),Yg=new qt("DAYS",6,864e11)}var Jg,Hg,Gg,Kg,Wg,Yg;function Zg(n,r,e){var t=De(r.lg_1,e.lg_1),a;if(t>0){var i=Rn(r.lg_1/e.lg_1),s=Tr(n,i);a=ir(qr(s,i),n)?s:ar(n,new b(0,0))>0?new b(-1,2147483647):new b(0,-2147483648)}else t<0?a=qr(n,Rn(e.lg_1/r.lg_1)):a=n;return a}function Vh(n,r,e){var t=De(r.lg_1,e.lg_1);return t>0?Tr(n,Rn(r.lg_1/e.lg_1)):t<0?qr(n,Rn(e.lg_1/r.lg_1)):n}function Ro(){return Ni(),Jg}function Lo(){return Ni(),Hg}function Lc(){return Ni(),Gg}function Vg(){return Ni(),Kg}function Xg(){return Ni(),Wg}function Mc(){return Ni(),Yg}function is(n,r,e,t,a){var i=e;t<4&&(i=Xh(n.e3_1,r,i,t,Nt(a,4))),a>4&&Xh(n.d3_1,r,i,ln(t-4|0,0),a-4|0)}function US(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var a=t;t=t+1|0;var i=e<<4,s;r:{var l=G(n,a),u=Y(l);if(!(u>>>8|0)&&kn()[u]>=0){s=kn()[u];break r}ee(n,r,a)}e=i|s}while(t<8);var f=e;if(G(n,8)!==45){var c="'-' (hyphen)";ee(n,c,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var p=v<<4,g;r:{var y=G(n,d),x=Y(y);if(!(x>>>8|0)&&kn()[x]>=0){g=kn()[x];break r}ee(n,r,d)}v=p|g}while(h<13);var k=v;if(G(n,13)!==45){var S="'-' (hyphen)";ee(n,S,13)}var z=0,I=14;if(I<18)do{var C=I;I=I+1|0;var j=z<<4,P;r:{var F=G(n,C),B=Y(F);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}ee(n,r,C)}z=j|P}while(I<18);var N=z;if(G(n,18)!==45){var H="'-' (hyphen)";ee(n,H,18)}var L=0,$=19;if($<23)do{var R=$;$=$+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}ee(n,r,R)}L=V|K}while($<23);var tr=L;if(G(n,23)!==45){var Q="'-' (hyphen)";ee(n,Q,23)}var lr=0,X=24;if(X<28)do{var xr=X;X=X+1|0;var br=lr<<4,dr;r:{var Er=G(n,xr),zr=Y(Er);if(!(zr>>>8|0)&&kn()[zr]>=0){dr=kn()[zr];break r}ee(n,r,xr)}lr=br|dr}while(X<28);var Pr=lr,Br=0,pr=28;if(pr<36)do{var Gr=pr;pr=pr+1|0;var en=Br<<4,Zr;r:{var _r=G(n,Gr),Fr=Y(_r);if(!(Fr>>>8|0)&&kn()[Fr]>=0){Zr=kn()[Fr];break r}ee(n,r,Gr)}Br=en|Zr}while(pr<36);var Vr=Br,Xr=k<<16|N,$r=new b(Xr,f),tn=tr<<16|Pr,_n=new b(Vr,tn);return Ys().pg($r,_n)}function DS(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var a=r<<4,i;r:{var s=G(n,t),l=Y(s);if(!(l>>>8|0)&&kn()[l]>=0){i=kn()[l];break r}var u="a hexadecimal digit";ee(n,u,t)}r=a|i}while(e<8);var f=r,c=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=c<<4,p;r:{var g=G(n,h),y=Y(g);if(!(y>>>8|0)&&kn()[y]>=0){p=kn()[y];break r}var x="a hexadecimal digit";ee(n,x,h)}c=d|p}while(v<16);var k=c,S=new b(k,f),z=0,I=16;if(I<24)do{var C=I;I=I+1|0;var j=z<<4,P;r:{var F=G(n,C),B=Y(F);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}var N="a hexadecimal digit";ee(n,N,C)}z=j|P}while(I<24);var H=z,L=0,$=24;if($<32)do{var R=$;$=$+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}var tr="a hexadecimal digit";ee(n,tr,R)}L=V|K}while($<32);var Q=L,lr=new b(Q,H);return Ys().pg(S,lr)}function Xh(n,r,e,t,a){var i=e,s=3-t|0,l=4-a|0;if(l<=s)do{var u=s;s=s+-1|0;var f=u<<3,c=n>>f&255,v=cE()[c],h=i;i=h+1|0,r[h]=$n(v>>8);var d=i;i=d+1|0,r[d]=$n(v)}while(u!==l);return i}function RS(n){return r=>r===n?"(this Collection)":ge(r)}var Mn;function LS(n,r){return Qh(n,r.k2())+"="+Qh(n,r.l2())}function Qh(n,r){return r===n?"(this Map)":ge(r)}function rd(n,r){var e=n.r2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(D(i.k2(),r)){t=i;break r}}t=null}return t}function MS(n){return r=>LS(n,r)}var qs;function Hs(n){return n.c1()-1|0}function FS(){throw c1.fc("Index overflow has happened.")}function $S(n){if(n.d1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),a=0;t.y();){var i=a;a=i+1|0,e[i]=t.z()}return e}function ur(){return Qg()}function Ge(n){return Fk(n)}function sn(n){return n.length>0?Ll(n):ur()}function nd(n){return n!=null?Cn(n):ur()}var R1;function Qg(){return R1===o&&new Kp,R1}var As;function Fc(n){switch(n.c1()){case 0:return ur();case 1:return Cn(n.e1(0));default:return n}}function JS(n){return Fe(0,n.c1()-1|0)}function HS(n){for(var r=A.m(),e=n.x();e.y();){var t=e.z();Ui(r,t)}return r}function Mr(n,r){var e;return E(n,Z)?e=n.c1():e=r,e}function GS(n){var r;return E(n,Z)?r=n.c1():r=null,r}function KS(n,r){if(E(n,Vp))return n.kh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw jr.r("Key "+ge(r)+" is missing in the map.");e=t;break r}return e}function Ar(){var n=YS();return E(n,xn)?n:m()}function Gs(n){return n.length>0?nm(n,cr.na(n.length)):Ar()}function Ie(n,r){return KS(n,r)}function rm(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=Ar();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=Bo(e);break;default:r=td(n,cr.na(n.c1()));break}return r}return em(td(n,cr.t4()))}function ed(n){return nm(n,cr.na(n.length))}function lt(n,r){var e;if(n.d1())e=Bo(r);else{var t=cr.oa(n);t.s2(r.lh_1,r.mh_1),e=t}return e}function $c(n){return cr.oa(n)}function WS(n,r){var e=$c(n);return e.t2(r),em(e)}var L1;function YS(){return L1===o&&new Xp,L1}function nm(n,r){return tm(r,n),r}function td(n,r){return ZS(r,n),r}function em(n){var r;switch(n.c1()){case 0:r=Ar();break;case 1:r=n;break;default:r=n;break}return r}function tm(n,r){for(var e=0,t=r.length;e<t;){var a=r[e];e=e+1|0;var i=a.qh(),s=a.rh();n.s2(i,s)}}function ZS(n,r){for(var e=r.x();e.y();){var t=e.z(),a=t.qh(),i=t.rh();n.s2(a,i)}}function VS(n){var r=bs.o7(n.length);return tm(r,n),r}function Ui(n,r){if(E(r,Z))return n.g1(r);for(var e=!1,t=r.x();t.y();){var a=t.z();n.n(a)&&(e=!0)}return e}function ad(n){var r;if(n.d1())throw jr.r("List is empty.");return r=n.h5(Hs(n)),r}function Jc(n,r){var e;return n==null?e=Jl:e=new cc(rE(n),r),e}function XS(n){return Gk(n)}function QS(n,r){return new cc(n,r)}function am(){return Jl}var Jl;function id(n){n.bi_1=n.ci_1===-2?n.di_1.ei_1():n.di_1.fi_1(fn(n.bi_1)),n.ci_1=n.bi_1==null?0:1}function rE(n){return()=>n}function ha(n){return R_(n)}function $t(){return F1()}var M1;function F1(){return M1===o&&new i_,M1}function nE(n){switch(n.c1()){case 0:return $t();case 1:return Nc(n.x().z());default:return n}}function eE(n){return L_(n,Ia.b1(n.length))}function tE(n){if(!(n.length>0)){var r="Failed requirement.";throw T.v(w(r))}var e=iE(n);return new o_(e)}function gt(n,r){return n==null?r==null?0:-1:r==null?1:De(n!=null&&z1(n)?n:m(),r)}function im(){var n=sm;return E(n,cn)?n:m()}function aE(n,r,e){for(var t=0,a=e.length;t<a;){var i=e[t];t=t+1|0;var s=i(n),l=i(r),u=gt(s,l);if(u!==0)return u}return 0}var sm;function iE(n){return(r,e)=>aE(r,e,n)}function sE(n,r){var e=N2(P2(n,r)),t=fr;e.sa(t)}var $1,J1;function om(){return J1===o&&new u_,J1}function Ts(){return lE()}var sd;function oE(){if(sd)return fr;sd=!0,lm=new f_("COROUTINE_SUSPENDED",0)}var lm;function lE(){return oE(),lm}function uE(n){return c_.mi(n)}function fE(n,r,e){var t;if(e>0)t=n>=r?r:r-od(r,n,e)|0;else if(e<0)t=n<=r?r:r+od(n,r,-e|0)|0;else throw T.v("Step is zero.");return t}function od(n,r,e){return e1(e1(n,e)-e1(r,e)|0,e)}function e1(n,r){var e=n%r|0;return e>=0?e:e+r|0}var H1;function um(){return H1===o&&new v_,H1}var Hc;function fm(n,r,e){e!=null?n.g(e(r)):r==null||$s(r)?n.g(r):r instanceof qn?n.ga(r.x1_1):n.g(w(r))}function Hl(n,r,e){if(e=e===o?!1:e,n===r)return!0;if(!e)return!1;var t=U1(n),a=U1(r),i;if(t===a)i=!0;else{var s=kr(t).toLowerCase(),l=G(s,0),u=kr(a).toLowerCase();i=l===G(u,0)}return i}function cE(){return hm(),cm}var cm;function vE(){return hm(),vm}var vm;function kn(){return vE()}var ld;function hm(){if(!ld){ld=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=G("0123456789abcdef",e>>4),a=Y(t)<<8,i=G("0123456789abcdef",e&15);r[e]=a|Y(i),n=n+1|0}cm=r;for(var s=0,l=new Int32Array(256);s<256;){var u=s,f=G("0123456789ABCDEF",u>>4),c=Y(f)<<8,v=G("0123456789ABCDEF",u&15);l[u]=c|Y(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var p=0,g="0123456789abcdef",y=0;y<q(g);){var x=rr(g,y);y=y+1|0;var k=p;p=k+1|0,d[Y(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<q(z);){var C=rr(z,I);I=I+1|0;var j=S;S=j+1|0,d[Y(C)]=j}vm=d;for(var P=0,F=Ca(256);P<256;)F[P]=new b(-1,-1),P=P+1|0;for(var B=0,N="0123456789abcdef",H=0;H<q(N);){var L=rr(N,H);H=H+1|0;var $=B;B=$+1|0,F[Y(L)]=M($)}for(var R=0,V="0123456789ABCDEF",K=0;K<q(V);){var nr=rr(V,K);K=K+1|0;var W=R;R=W+1|0,F[Y(nr)]=M(W)}}}function hE(n){var r;return q(n)===0?r=gE:r=mE(n),r}function dE(n){return pE(n,"")}function pE(n,r){r=r===o?"":r;for(var e=mm(n),t=A.m(),a=e.x();a.y();){var i=a.z();vt(i)||t.n(i)}for(var s=A.f1(Mr(t,10)),l=t.x();l.y();){var u=l.z(),f=_E(u);s.n(f)}for(var c=ox(s),v=c??0,h=n.length+or(r.length,e.c1())|0,d=hE(r),p=Hs(e),g=A.m(),y=0,x=e.x();x.y();){var k=x.z(),S=y;y=S+1|0;var z=Pi(S),I;if((z===0||z===p)&&vt(k))I=null;else{var C=gx(k,v),j;C==null?j=null:j=d(C);var P=j;I=P??k}var F=I;F==null||g.n(F)}return F_(g,Yr.ja(h),`
`).toString()}function _E(n){var r;r:{var e=0,t=q(n)-1|0;if(e<=t)do{var a=e;e=e+1|0;var i=rr(n,a);if(!Uc(i)){r=a;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function gE(n){return n}function mE(n){return r=>n+r}function Gl(n){return yE(n,10)}function yE(n,r){Bi(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=-2147483648;else if(s===43)a=!1,i=-2147483647;else return null}else t=0,a=!1,i=-2147483647;var l=-59652323,u=l,f=0,c=t;if(c<e)do{var v=c;c=c+1|0;var h=$l(G(n,v),r);if(h<0)return null;if(f<u)if(u===l){if(u=i/r|0,f<u)return null}else return null;if(f=or(f,r),f<(i+h|0))return null;f=f-h|0}while(c<e);return a?f:-f|0}function Di(n){throw v1.tc("Invalid number format: '"+n+"'")}function wE(n){return bE(n,10)}function bE(n,r){Bi(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=new b(0,-2147483648);else if(s===43)a=!1,i=new b(1,-2147483648);else return null}else t=0,a=!1,i=new b(1,-2147483648);var l=new b(1,-2147483648),u=qr(l,M(36)),f=u,c=new b(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=$l(G(n,h),r);if(d<0)return null;if(ar(c,f)<0)if(ir(f,u)){var p=i;if(f=qr(p,M(r)),ar(c,f)<0)return null}else return null;var g=c;c=Tr(g,M(r));var y=c,x=i,k=gr(x,M(d));if(ar(y,k)<0)return null;var S=c;c=Hr(S,M(d))}while(v<e);return a?c:on(c)}function dm(n,r){var e=$s(n)?n:m(),t=0,a=q(e)-1|0,i=!1;r:for(;t<=a;){var s=i?a:t,l=rr(e,s),u=Hk(r,l);if(!i)u?t=t+1|0:i=!0;else if(u)a=a-1|0;else break r}var f=Ln(e,t,a+1|0);return w(f)}function da(n,r){return kE(n,r)?Hn(n,0,n.length-q(r)|0):n}function Ri(n,r,e){e=e===o?n:e;var t=xE(n,r);return t===-1?e:Hn(n,t+1|0,n.length)}function js(n,r,e){e=e===o?!1:e;var t;return typeof r=="string"?t=Mo(n,r,o,e)>=0:t=Gc(n,r,0,q(n),e)>=0,t}function pm(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Hn(n,0,t)}function _m(n,r,e,t){if(e=e===o?!1:e,t=t===o?0:t,r.length===1)return SE(n,kr(r[0]),e,t);for(var a=hx(EE(n,r,o,e,t)),i=A.f1(Mr(a,10)),s=a.x();s.y();){var l=s.z(),u=zE(n,l);i.n(u)}return i}function gm(n,r){return IE(n,r)?He(n,q(r)):n}function mm(n){return Sc(CE(n))}function ym(n,r,e){return e=e===o?32:e,w(qE($s(n)?n:m(),r,e))}function ct(n){return q(n)-1|0}function vt(n){var r;r:{for(var e=0;e<q(n);){var t=rr(n,e);if(e=e+1|0,!Uc(t)){r=!1;break r}}r=!0}return r}function kE(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?$g(n,r):Kl(n,q(n)-q(r)|0,r,0,q(r),e)}function xE(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Ai([r]);a=AE(n,s,e,t)}else{var l=kr(r);a=n.lastIndexOf(l,e)}return a}function Mo(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=Gc(n,r,e,q(n),t):a=n.indexOf(r,e),a}function Gc(n,r,e,t,a,i){i=i===o?!1:i;var s=i?lx(Nt(e,ct(n)),ln(t,0)):Fe(ln(e,0),Nt(t,q(n))),l;if(typeof n=="string"?l=typeof r=="string":l=!1,l){var u=s.r1_1,f=s.s1_1,c=s.t1_1;if(c>0&&u<=f||c<0&&f<=u)do{var v=u;if(u=u+c|0,Rc(r,0,n,v,r.length,a))return v}while(v!==f)}else{var h=s.r1_1,d=s.s1_1,p=s.t1_1;if(p>0&&h<=d||p<0&&d<=h)do{var g=h;if(h=h+p|0,Kl(r,0,n,g,q(r),a))return g}while(g!==d)}return-1}function wm(n){var r=0,e=q(n)-1|0,t=!1;r:for(;r<=e;){var a=t?e:r,i=rr(n,a),s=Uc(i);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Ln(n,r,e+1|0)}function Ks(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Ai([r]);a=bm(n,s,e,t)}else{var l=kr(r);a=n.indexOf(l,e)}return a}function SE(n,r,e,t){Kc(t);var a=0,i=Mo(n,r,a,e);if(i===-1||t===1)return Cn(w(n));var s=t>0,l=A.f1(s?Nt(t,10):10);r:do{var u=a,f=i,c=w(Ln(n,u,f));if(l.n(c),a=i+r.length|0,s&&l.c1()===(t-1|0))break r;i=Mo(n,r,a,e)}while(i!==-1);var v=a,h=q(n),d=w(Ln(n,v,h));return l.n(d),l}function EE(n,r,e,t,a){return e=e===o?0:e,t=t===o?!1:t,a=a===o?0:a,Kc(a),new __(n,e,a,PE(r,t))}function zE(n,r){return w(Ln(n,r.kf(),r.lf()+1|0))}function IE(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?Ce(n,r):Kl(n,0,r,0,q(r),e)}function CE(n){return new m_(n)}function qE(n,r,e){if(e=e===o?32:e,r<0)throw T.v("Desired length "+r+" is less than zero.");if(r<=q(n))return Ln(n,0,q(n));var t=Yr.ja(r),a=1,i=r-q(n)|0;if(a<=i)do{var s=a;a=a+1|0,t.ga(e)}while(s!==i);return t.g(n),t}function Kl(n,r,e,t,a,i){if(t<0||r<0||r>(q(n)-a|0)||t>(q(e)-a|0))return!1;var s=0;if(s<a)do{var l=s;if(s=s+1|0,!Hl(rr(n,r+l|0),rr(e,t+l|0),i))return!1}while(s<a);return!0}function AE(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=M_(r),s=kr(i);return n.lastIndexOf(s,e)}var l=Nt(e,ct(n));if(0<=l)do{var u=l;l=l+-1|0;var f=rr(n,u),c;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Hl(d,f,t)){c=!0;break r}}c=!1}if(c)return u}while(0<=l);return-1}function bm(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=M_(r),s=kr(i);return n.indexOf(s,e)}var l=ln(e,0),u=ct(n);if(l<=u)do{var f=l;l=l+1|0;var c=rr(n,f),v;r:{for(var h=0,d=r.length;h<d;){var p=r[h];if(h=h+1|0,Hl(p,c,t)){v=!0;break r}}v=!1}if(v)return f}while(f!==u);return-1}function Kc(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw T.v(w(r))}return fr}function ud(n){if(n.wi_1<0)n.ui_1=0,n.xi_1=null;else{var r,e;if(n.zi_1.cj_1>0?(n.yi_1=n.yi_1+1|0,e=n.yi_1>=n.zi_1.cj_1):e=!1,e?r=!0:r=n.wi_1>q(n.zi_1.aj_1),r)n.xi_1=Fe(n.vi_1,ct(n.zi_1.aj_1)),n.wi_1=-1;else{var t=n.zi_1.dj_1(n.zi_1.aj_1,n.wi_1);if(t==null)n.xi_1=Fe(n.vi_1,ct(n.zi_1.aj_1)),n.wi_1=-1;else{var a=t.qh(),i=t.rh();n.xi_1=kc(n.vi_1,a),n.vi_1=a+i|0,n.wi_1=n.vi_1+(i===0?1:0)|0}}n.ui_1=1}}function fd(n,r,e){return e=e===o?!1:e,Ks(n,r,o,e)>=0}function TE(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function jE(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Hn(n,t+1|0,n.length)}function OE(n,r,e,t){e=e===o?ct(n):e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=Gc(n,r,e,0,t,!0):a=n.lastIndexOf(r,e),a}function PE(n,r){return(e,t)=>{var a=bm(e,n,t,r);return a<0?null:O(a,1)}}function Sn(n){return Ls(n,1)}function Wc(n){return(rn(n)&1)===0}function km(n){return(rn(n)&1)===1}function BE(n){return Wc(n)?Ro():Lo()}var G1;function Wr(){return G1===o&&new y_,G1}function xm(n){var r=on(Sn(n)),e=rn(n)&1;return KE(r,e)}function NE(n,r){var e,t=rn(n)&1;if(t===(rn(r)&1)){var a;if(Wc(n))a=WE(gr(Sn(n),Sn(r)));else{var i=Yc(Sn(n),Sn(r)),s;if(ir(i,new b(-16162,2147483647)))throw T.v("Summing infinite durations of different signs yields an undefined result.");ir(i,new b(-1,1073741823))||ir(i,new b(1,-1073741824))?s=Dt(i):s=YE(i),a=s}e=a}else km(n)?e=cd(n,Sn(n),Sn(r)):e=cd(n,Sn(r),Sn(n));return e}function cd(n,r,e){var t=Am(e),a=Yc(r,t),i;if(ar(new b(1108857478,-1074),a)<=0&&ar(a,new b(-1108857478,1073))<=0){var s=Hr(e,Fo(t));i=Zl(gr(Fo(a),s))}else i=Dt(a);return i}function Wl(n){return ar(n,new b(0,0))<0}function Ws(n){return ir(n,Wr().oj_1)||ir(n,Wr().pj_1)}function Sm(n){return Wl(n)?xm(n):n}function Em(n,r){var e=Ne(n,r);if(ar(e,new b(0,0))<0||!(rn(e)&1))return n.f3(r);var t=rn(n)&1,a=t-(rn(r)&1)|0;return Wl(n)?-a|0:a}function UE(n,r){return Em(n.tj_1,r instanceof ze?r.tj_1:m())}function DE(n){var r;if(Ws(n))r=0;else{var e=qm(n),t=Ut(e,M(24));r=rn(t)}return r}function zm(n){var r;if(Ws(n))r=0;else{var e=LE(n),t=Ut(e,M(60));r=rn(t)}return r}function Im(n){var r;if(Ws(n))r=0;else{var e=ME(n),t=Ut(e,M(60));r=rn(t)}return r}function Cm(n){var r;if(Ws(n))r=0;else if(km(n)){var e=Sn(n),t=Ut(e,M(1e3));r=rn(Fo(t))}else{var a=Sn(n),i=1e9,s=Ut(a,M(i));r=rn(s)}return r}function Yl(n,r){var e=n;return ir(e,Wr().oj_1)?new b(-1,2147483647):ir(e,Wr().pj_1)?new b(0,-2147483648):Zg(Sn(n),BE(n),r)}function RE(n){return Yl(n,Mc())}function qm(n){return Yl(n,Xg())}function LE(n){return Yl(n,Vg())}function ME(n){return Yl(n,Lc())}function FE(n){var r=n,e;if(ir(r,new b(0,0)))e="0s";else if(ir(r,Wr().oj_1))e="Infinity";else if(ir(r,Wr().pj_1))e="-Infinity";else{var t=Wl(n),a=Yr.f();t&&a.ga(45);var i=Sm(n),s=RE(i),l=DE(i),u=zm(i),f=Im(i),c=Cm(i),v=!ir(s,new b(0,0)),h=l!==0,d=u!==0,p=f!==0||c!==0,g=0;if(v&&(a.he(s).ga(100),g=g+1|0),h||v&&(d||p)){var y=g;g=y+1|0,y>0&&a.ga(32),a.ge(l).ga(104)}if(d||p&&(h||v)){var x=g;g=x+1|0,x>0&&a.ga(32),a.ge(u).ga(109)}if(p){var k=g;g=k+1|0,k>0&&a.ga(32),f!==0||v||h||d?ko(n,a,f,c,9,"s",!1):c>=1e6?ko(n,a,c/1e6|0,c%1e6|0,6,"ms",!1):c>=1e3?ko(n,a,c/1e3|0,c%1e3|0,3,"us",!1):a.ge(c).fa("ns")}t&&g>1&&a.ie(1,40).ga(41),e=a.toString()}return e}function ko(n,r,e,t,a,i,s){if(r.ge(e),t!==0){r.ga(46);var l=ym(t.toString(),a,48),u;r:{var f=q(l)-1|0;if(0<=f)do{var c=f;if(f=f+-1|0,rr(l,c)!==48){u=c;break r}}while(0<=f);u=-1}var v=u+1|0;if(!s&&v<3)r.fe(l,0,v);else{var h=or((v+2|0)/3|0,3);r.fe(l,0,h)}}r.fa(i)}function $E(n){var r=Yr.f();Wl(n)&&r.ga(45),r.fa("PT");var e=Sm(n),t=qm(e),a=zm(e),i=Im(e),s=Cm(e),l=t;Ws(n)&&(l=new b(1316134911,2328));var u=!ir(l,new b(0,0)),f=i!==0||s!==0,c=a!==0||f&&u;return u&&r.he(l).ga(72),c&&r.ge(a).ga(77),(f||!u&&!c)&&ko(n,r,i,s,9,"S",!0),r.toString()}function JE(n){return n.hashCode()}function HE(n,r){if(!(r instanceof ze))return!1;var e=r.tj_1;return!!ir(n,e)}function Dt(n){var r=Wr(),e=ie(n,1),t=gr(e,M(1));return r.sj(t)}function vd(n,r){var e=Vh(new b(-387905,1073741823),Ro(),r),t;if(ar(on(e),n)<=0&&ar(n,e)<=0)t=Zl(Vh(n,r,Ro()));else if(r.y2(Lo())>=0){var a=F2(n),i=new b(0,-2147483648),s=gr(i,M(1));t=Dt(Tr(Rn(a),W1($2(fx(n,s)),r)))}else t=Dt(xc(Zg(n,r,Lo()),new b(1,-1073741824),new b(-1,1073741823)));return t}function GE(n,r,e){if(e=e===o?!0:e,q(n)===0){var t="The string is empty";if(e)throw T.v(t);return Wr().rj_1}var a=0,i=G(n,a),s=!1;i===45?(s=!0,a=a+1|0):i===43&&(a=a+1|0);var l;if(n.length<=a){var u="No components";if(e)throw T.v(u);return Wr().rj_1}else if(G(n,a)===80)l=ZE(n,a+1|0,e);else{if(e)throw T.v("");return Wr().rj_1}var f=l;return s&&!D(new ze(f),new ze(Wr().rj_1))?xm(f):f}function KE(n,r){var e=Wr(),t=ie(n,1),a=gr(t,M(r));return e.sj(a)}function WE(n){var r;return ar(new b(387905,-1073741824),n)<=0&&ar(n,new b(-387905,1073741823))<=0?r=Zl(n):r=Dt(Am(n)),r}function Yc(n,r){var e;if(ir(n,new b(-1,1073741823))||ir(n,new b(1,-1073741824))){var t,a;ar(new b(1,-1073741824),r)<0&&ar(r,new b(-1,1073741823))<0?a=!0:a=ar(Ne(n,r),new b(0,0))>=0,a?t=n:t=new b(-16162,2147483647),e=t}else ir(r,new b(-1,1073741823))||ir(r,new b(1,-1073741824))?e=r:e=xc(gr(n,r),new b(1,-1073741824),new b(-1,1073741823));return e}function YE(n){var r;return ar(new b(1108857478,-1074),n)<=0&&ar(n,new b(-1108857478,1073))<=0?r=Zl(Fo(n)):r=Dt(xc(n,new b(1,-1073741824),new b(-1,1073741823))),r}function Am(n){return qr(n,M(1e6))}function Fo(n){return Tr(n,M(1e6))}function Zl(n){return Wr().sj(ie(n,1))}function ZE(n,r,e){var t=r;if(t===n.length){if(e)throw T.v("");return Wr().rj_1}var a=new b(0,0),i=new b(0,0),s=!1,l=null;r:for(;t<n.length;){var u=G(n,t);if(u===84){var f;if(s?f=!0:(t=t+1|0,f=t===n.length),f){if(e)throw T.v("");return Wr().rj_1}s=!0;continue r}var c=t,v,h=Tm().wj_1,d=t,p;n:{var g=1,y=d;if(XE(h)){var x=G(n,y);x===45?(g=-1,y=y+1|0):x===43&&(y=y+1|0)}var k=y;e:for(;;){var S;if(k<n.length?S=G(n,k)===48:S=!1,!S)break e;k=k+1|0}y=k;var z=new b(0,0);e:for(;y<n.length;){var I=G(n,y);if(!(48<=I&&I<=57))break e;var C=Jn(I,48);if(ar(z,hd(h))>0||ir(z,hd(h))&&ar(M(C),QE(h))>0){var j=y;t:for(;;){var P;if(j<n.length){var F=G(n,j);P=48<=F?F<=57:!1}else P=!1;if(!P)break t;j=j+1|0}y=j;var B=y,N=g;if(t=B,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().rj_1}v=N,p=VE(h);break n}var H=z,L=gr(ie(H,3),ie(H,1));z=gr(L,M(C)),y=y+1|0}var $=y,R=g;if(t=$,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().rj_1}v=R,p=z}var V=p;if(G(n,t)===46){t=t+1|0;var K=t,nr=K,W=nr,tr=W+6|0,Q=n.length,lr=Math.min(tr,Q),X=0;n:for(;W<lr;){var xr=G(n,W);if(!(48<=xr&&xr<=57))break n;var br=X;X=((br<<3)+(br<<1)|0)+Jn(xr,48)|0,W=W+1|0}var dr=6-(W-nr|0)|0,Er=0;if(Er<dr)do{Er=Er+1|0;var zr=X;X=(zr<<3)+(zr<<1)|0}while(Er<dr);K=W;var Pr=X,Br=K,pr=Br,Gr=pr+9|0,en=n.length,Zr=Math.min(Gr,en),_r=0;n:for(;pr<Zr;){var Fr=G(n,pr);if(!(48<=Fr&&Fr<=57))break n;var Vr=_r;_r=((Vr<<3)+(Vr<<1)|0)+Jn(Fr,48)|0,pr=pr+1|0}var Xr=9-(pr-Br|0)|0,$r=0;if($r<Xr)do{$r=$r+1|0;var tn=_r;_r=(tn<<3)+(tn<<1)|0}while($r<Xr);K=pr;var _n=_r,wn=K;n:for(;;){var gn;if(wn<n.length){var Xn=G(n,wn);gn=48<=Xn?Xn<=57:!1}else gn=!1;if(!gn)break n;wn=wn+1|0}K=wn;var Qn=K;if(Qn===t||Qn===n.length||G(n,Qn)!==83){if(e)throw T.v("");return Wr().rj_1}t=Qn;var re=M(Pr),ce=1e9,ke=Tr(re,M(ce)),xe=gr(ke,M(_n));i=Tr(Rn(v),rz(xe,Lc()))}var Pe=nz(n,t),Ye;if(Pe==null){var mt="Unknown duration unit short name: "+kr(G(n,t));if(e)throw T.v(mt);return Wr().rj_1}else Ye=Pe;var ne=Ye;if(l!=null&&l.y2(ne)<=0){var Tn="Unexpected order of duration components";if(e)throw T.v(Tn);return Wr().rj_1}if(l=ne,ne.equals(Mc())){if(s){if(e)throw T.v("");return Wr().rj_1}a=Tr(Rn(v),W1(V,ne))}else{if(!s){if(e)throw T.v("");return Wr().rj_1}var Bn=Yc(a,Tr(Rn(v),W1(V,ne)));if(ir(Bn,new b(-16162,2147483647))){if(e)throw T.v("");return Wr().rj_1}a=Bn}t=t+1|0}return NE(vd(a,Lo()),vd(i,Ro()))}var K1;function Tm(){return K1===o&&new w_,K1}function VE(n){return n.yj_1}function XE(n){return n.zj_1}function hd(n){return n.ak_1}function QE(n){return n.bk_1}function rz(n,r){var e=ez(r),t=ae(n)*e;return J2(t)}function nz(n,r){var e=G(n,r);return e===68?Mc():e===72?Xg():e===77?Vg():e===83?Lc():null}function ez(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw mr.o3(w(e))}return r}function W1(n,r){return tz(n,az(r))}function tz(n,r){var e;if(ir(n,new b(0,0)))e=new b(0,0);else if(ir(n,new b(1,0)))e=Hu(r,new b(-1,1073741823));else if(ir(r,new b(1,0)))e=Hu(n,new b(-1,1073741823));else{var t=(128-Ph(n)|0)-Ph(r)|0;e=t<63?Tr(n,r):t>63?new b(-1,1073741823):Hu(Tr(n,r),new b(-1,1073741823))}return e}function az(n){var r;switch(n.x2_1){case 6:r=new b(864e5,0);break;case 5:r=new b(36e5,0);break;case 4:r=new b(6e4,0);break;case 3:r=new b(1e3,0);break;case 2:r=new b(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw mr.o3(w(e))}return r}function xo(){return Zn(),jm}var jm;function iz(){return Zn(),Om}var Om;function sz(){return Zn(),Pm}var Pm;function oz(){return Zn(),Bm}var Bm,Y1;function Ot(){return Y1===o&&new b_,Y1}function lz(n){Zn();var r=Yr.f(),e=Nm.lk(n),t=e.mk_1;if(H2(t)<1e3){var a=Yr.f();t>=0?a.ge(t+1e4|0).le(0):a.ge(t-1e4|0).le(1),r.g(a)}else t>=1e4&&r.ga(43),r.ge(t);if(r.ga(45),ss(r,r,e.nk_1),r.ga(45),ss(r,r,e.ok_1),r.ga(84),ss(r,r,e.pk_1),r.ga(58),ss(r,r,e.qk_1),r.ga(58),ss(r,r,e.rk_1),e.sk_1!==0){r.ga(46);for(var i=0;!(e.sk_1%xo()[i+1|0]|0);)i=i+1|0;i=i-(i%3|0)|0;var s=e.sk_1/xo()[i]|0;r.fa(He((s+xo()[9-i|0]|0).toString(),1))}return r.ga(90),r.toString()}function uz(n){Zn();var r=n,e=0;if(q(r)===0)return new vc("An empty string is not a valid Instant",n);var t=rr(r,e),a;t===43||t===45?(e=e+1|0,a=t):a=32;var i=a,s=e,l=0;r:for(;;){var u;if(e<q(r)){var f=rr(r,e);u=48<=f?f<=57:!1}else u=!1;if(!u)break r;l=or(l,10)+Jn(rr(r,e),48)|0,e=e+1|0}var c=e-s|0,v;if(c>10)return un(n,"Expected at most 10 digits for the year number, got "+c+" digits");if(c===10&&mn(rr(r,s),50)>=0)return un(n,"Expected at most 9 digits for the year number or year 1000000000, got "+c+" digits");if(c<4)return un(n,"The year number must be padded to 4 digits, got "+c+" digits");if(i===43&&c===4)return un(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(i===32&&c!==4)return un(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=i===45?-l|0:l;var h=v;if(q(r)<(e+16|0))return un(n,"The input string is too short");var d=e,p=ti(n,"'-'",d,cz);if(p!=null)return p;var g=e+3|0,y=ti(n,"'-'",g,vz);if(y!=null)return y;var x=e+6|0,k=ti(n,"'T' or 't'",x,hz);if(k!=null)return k;var S=e+9|0,z=ti(n,"':'",S,dz);if(z!=null)return z;var I=e+12|0,C=ti(n,"':'",I,pz);if(C!=null)return C;for(var j=iz(),P=0,F=j.length;P<F;){var B=j[P];P=P+1|0;var N=e+B|0,H=ti(n,"an ASCII digit",N,_z);if(H!=null)return H}var L=It(r,e+1|0),$=It(r,e+4|0),R=It(r,e+7|0),V=It(r,e+10|0),K=It(r,e+13|0),nr;if(rr(r,e+15|0)===46){var W=e+16|0;e=W;var tr=0;r:for(;;){var Q;if(e<q(r)){var lr=rr(r,e);Q=48<=lr?lr<=57:!1}else Q=!1;if(!Q)break r;tr=or(tr,10)+Jn(rr(r,e),48)|0,e=e+1|0}var X=e-W|0,xr;if(1<=X&&X<=9)xr=or(tr,xo()[9-X|0]);else return un(n,"1..9 digits are supported for the fraction of the second, got "+X+" digits");nr=xr}else e=e+15|0,nr=0;var br=nr;if(e>=q(r))return un(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),Er;if(dr===122||dr===90){var zr;if(q(r)===(e+1|0))zr=0;else return un(n,"Extra text after the instant at position "+(e+1|0));Er=zr}else if(dr===45||dr===43){var Pr=q(r)-e|0;if(Pr>9){var Br=e,pr=q(r),Gr=w(Ln(r,Br,pr));return un(n,'The UTC offset string "'+Zc(Gr,16)+'" is too long')}if(Pr%3|0){var en=e,Zr=q(r),_r=w(Ln(r,en,Zr));return un(n,'Invalid UTC offset string "'+_r+'"')}var Fr=sz(),Vr=0,Xr=Fr.length;r:for(;Vr<Xr;){var $r=Fr[Vr];if(Vr=Vr+1|0,(e+$r|0)>=q(r))break r;if(rr(r,e+$r|0)!==58)return un(n,"Expected ':' at index "+(e+$r|0)+", got '"+kr(rr(r,e+$r|0))+"'")}var tn=oz(),_n=0,wn=tn.length;r:for(;_n<wn;){var gn=tn[_n];if(_n=_n+1|0,(e+gn|0)>=q(r))break r;var Xn=rr(r,e+gn|0);if(!(48<=Xn&&Xn<=57))return un(n,"Expected an ASCII digit at index "+(e+gn|0)+", got '"+kr(rr(r,e+gn|0))+"'")}var Qn=It(r,e+1|0),re;Pr>3?re=It(r,e+4|0):re=0;var ce=re,ke;Pr>6?ke=It(r,e+7|0):ke=0;var xe=ke;if(ce>59)return un(n,"Expected offset-minute-of-hour in 0..59, got "+ce);if(xe>59)return un(n,"Expected offset-second-of-minute in 0..59, got "+xe);if(Qn>17&&!(Qn===18&&ce===0&&xe===0)){var Pe=e,Ye=q(r),mt=w(Ln(r,Pe,Ye));return un(n,"Expected an offset in -18:00..+18:00, got "+mt)}Er=or((or(Qn,3600)+or(ce,60)|0)+xe|0,dr===45?-1:1)}else return un(n,"Expected the UTC offset at position "+e+", got '"+kr(dr)+"'");var ne=Er;if(!(1<=L&&L<=12))return un(n,"Expected a month number in 1..12, got "+L);if(!(1<=$&&$<=fz(L,dd(h))))return un(n,"Expected a valid day-of-month for month "+L+" of year "+h+", got "+$);if(R>23)return un(n,"Expected hour in 0..23, got "+R);if(V>59)return un(n,"Expected minute-of-hour in 0..59, got "+V);if(K>59)return un(n,"Expected second-of-minute in 0..59, got "+K);var Tn=new hc(h,L,$,R,V,K,br),Bn=M(Tn.mk_1),bn=Tr(Rn(365),Bn);if(ar(Bn,new b(0,0))>=0){var Ht=bn,ve=gr(Bn,M(3)),Gt=qr(ve,M(4)),yt=gr(Bn,M(99)),wt=qr(yt,M(100)),Be=Hr(Gt,wt),bt=gr(Bn,M(399)),kt=qr(bt,M(400));bn=gr(Ht,gr(Be,kt))}else{var xt=bn,Fa=qr(Bn,M(-4)),$a=qr(Bn,M(-100)),Kt=Hr(Fa,$a),Ja=qr(Bn,M(-400));bn=Hr(xt,gr(Kt,Ja))}var Ha=bn,Zi=(or(367,Tn.nk_1)-362|0)/12|0;bn=gr(Ha,M(Zi));var Ga=bn,St=Tn.ok_1-1|0;if(bn=gr(Ga,M(St)),Tn.nk_1>2){var Wt=bn;if(bn=Hr(Wt,at()),!dd(Tn.mk_1)){var Yt=bn;bn=Hr(Yt,at())}}var Et=bn,Zt=Hr(Et,M(719528)),Ka=(or(Tn.pk_1,3600)+or(Tn.qk_1,60)|0)+Tn.rk_1|0,Wa=Tr(Zt,M(86400)),Vi=gr(Wa,M(Ka)),Xi=Hr(Vi,M(ne)),zt=Tn.sk_1;return new k_(Xi,zt)}var Nm;function Zc(n,r){Zn();var e;return q(n)<=r?e=w(n):e=w(Ln(n,0,r))+"...",e}function fz(n,r){switch(Zn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function dd(n){return Zn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function ss(n,r,e){e<10&&n.ga(48),r.ge(e)}function un(n,r){return new vc(r+' when parsing an Instant from "'+Zc(n,64)+'"',n)}function ti(n,r,e,t){var a=rr(n,e),i;return t(new qn(a))?i=null:i=un(n,"Expected "+r+", but got '"+kr(a)+"' at position "+e),i}function cz(n){return Zn(),D(n,new qn(45))}function vz(n){return Zn(),D(n,new qn(45))}function hz(n){return Zn(),D(n,new qn(84))||D(n,new qn(116))}function dz(n){return Zn(),D(n,new qn(58))}function pz(n){return Zn(),D(n,new qn(58))}function _z(n){Zn();var r=n.x1_1;return 48<=r?r<=57:!1}function It(n,r){return or(Jn(rr(n,r),48),10)+Jn(rr(n,r+1|0),48)|0}var pd;function Zn(){pd||(pd=!0,jm=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),Om=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Pm=new Int32Array([3,6]),Bm=new Int32Array([1,2,4,5,7,8]))}function t1(){return Dm(),Um}var Um;function gz(n,r){return Dm(),new z_(n.dl_1,r).il()}var _d;function Dm(){if(!_d){_d=!0;var n=Ts();Um=n}}var gd;function mz(){if(gd)return fr;gd=!0,Rm=new I_("PUBLICATION",1)}var Rm,So;function Eo(){return mz(),Rm}function yz(n){var r=n;return!(r instanceof Mt)}function Lm(n){var r;return n instanceof Mt?r=n.nl_1:r=null,r}function wz(n){var r;return n instanceof Mt?r=n.toString():r="Success("+ge(n)+")",r}function bz(n){return n==null?0:wr(n)}function kz(n,r){if(!(r instanceof pa))return!1;var e=r.ol_1;return!!D(n,e)}function xz(n){var r=n;if(r instanceof Mt)throw n.nl_1}function Mm(n){return new Mt(n)}function O(n,r){return new Dl(n,r)}var Z1;function Ys(){return Z1===o&&new q_,Z1}function Sz(n,r){return n.length<=r?n:Hn(n,0,r)+"..."}function ee(n,r,e){throw T.v("Expected "+r+" at index "+e+", but was '"+kr(G(n,e))+"'")}var V1;function Vl(){return V1===o&&new A_,V1}function Fm(n,r){var e=n&255,t=r&255;return De(e,t)}function Ez(n,r){return Fm(n.yl_1,r instanceof $e?r.yl_1:m())}function X1(n){return(n&255).toString()}function zz(n,r){return!(!(r instanceof $e)||n!==r.yl_1)}function md(n){return new Int8Array(n)}function Iz(n,r){var e=n[r];return e}function Cz(n,r,e){var t=n;t[r]=e}function xa(n){return n.length}function qz(n){return new T_(n)}function $m(n,r){var e=n,t=r;return qk(e,t)}function Az(n,r){return r instanceof $e?$m(n.dm_1,r instanceof $e?r.yl_1:m()):!1}function Tz(n){return n.length===0}function jz(n){return"UByteArray(storage="+w(n)+")"}function Oz(n){return wr(n)}function Pz(n,r){if(!(r instanceof ga))return!1;var e=r.dm_1;return!!D(n,e)}var Q1;function Xl(){return Q1===o&&new j_,Q1}function Jm(n,r){return di(n,r)}function Bz(n,r){return Jm(n.jm_1,r instanceof oe?r.jm_1:m())}function rf(n){return(n>>>0).toString()}function Nz(n,r){return!(!(r instanceof oe)||n!==r.jm_1)}function yd(n){return new Int32Array(n)}function Uz(n,r){var e=n[r];return e}function Dz(n,r,e){var t=n;t[r]=e}function Sa(n){return n.length}function Rz(n){return new O_(n)}function Hm(n,r){var e=n,t=r;return Ak(e,t)}function Lz(n,r){return r instanceof oe?Hm(n.om_1,r instanceof oe?r.jm_1:m()):!1}function Mz(n){return n.length===0}function Fz(n){return"UIntArray(storage="+w(n)+")"}function $z(n){return wr(n)}function Jz(n,r){if(!(r instanceof ma))return!1;var e=r.om_1;return!!D(n,e)}var nf;function Zs(){return nf===o&&new P_,nf}function Gm(n,r){return jt(n,r)}function Hz(n,r){return Gm(n.um_1,r instanceof le?r.um_1:m())}function ef(n){var r=n;return d2(r,10)}function Gz(n){return n.hashCode()}function Kz(n,r){if(!(r instanceof le))return!1;var e=r.um_1;return!!ir(n,e)}function wd(n){return Ca(n)}function Wz(n,r){var e=n[r];return e}function Yz(n,r,e){var t=n;t[r]=e}function Ea(n){return n.length}function Zz(n){return new B_(n)}function Km(n,r){var e=n,t=r;return Tk(e,t)}function Vz(n,r){return r instanceof le?Km(n.zm_1,r instanceof le?r.um_1:m()):!1}function Xz(n){return n.length===0}function Qz(n){return"ULongArray(storage="+w(n)+")"}function rI(n){return wr(n)}function nI(n,r){if(!(r instanceof ya))return!1;var e=r.zm_1;return!!D(n,e)}var tf;function Ql(){return tf===o&&new N_,tf}function Wm(n,r){var e=n&65535,t=r&65535;return De(e,t)}function eI(n,r){return Wm(n.fn_1,r instanceof Je?r.fn_1:m())}function af(n){return(n&65535).toString()}function tI(n,r){return!(!(r instanceof Je)||n!==r.fn_1)}function bd(n){return new Int16Array(n)}function aI(n,r){var e=n[r];return e}function iI(n,r,e){var t=n;t[r]=e}function za(n){return n.length}function sI(n){return new U_(n)}function Ym(n,r){var e=n,t=r;return jk(e,t)}function oI(n,r){return r instanceof Je?Ym(n.kn_1,r instanceof Je?r.fn_1:m()):!1}function lI(n){return n.length===0}function uI(n){return"UShortArray(storage="+w(n)+")"}function fI(n){return wr(n)}function cI(n,r){if(!(r instanceof wa))return!1;var e=r.kn_1;return!!D(n,e)}function Zm(n){return _I(n,10)}function vI(n){var r=gI(n),e,t=r;return(t==null?null:new oe(t))==null?Di(n):e=r,e}function hI(n){var r=Zm(n),e,t=r;return(t==null?null:new le(t))==null?Di(n):e=r,e}function dI(n){var r=mI(n),e,t=r;return(t==null?null:new $e(t))==null?Di(n):e=r,e}function pI(n){var r=yI(n),e,t=r;return(t==null?null:new Je(t))==null?Di(n):e=r,e}function _I(n,r){Bi(r);var e=n.length;if(e===0)return null;var t=new b(-1,-1),a,i=G(n,0);if(mn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=new b(477218588,119304647),l=s,u=M(r),f=new b(0,0),c=a;if(c<e)do{var v=c;c=c+1|0;var h=$l(G(n,v),r);if(h<0)return null;var d=f,p=l;if(jt(d,p)>0)if(D(new le(l),new le(s))){l=h2(t,u);var g=f,y=l;if(jt(g,y)>0)return null}else return null;var x=f;f=Tr(x,u);var k=f,S=f,z=h,I=z,C=zs(M(I),new b(-1,0)),j=C;f=gr(S,j);var P=f;if(jt(P,k)<0)return null}while(c<e);return f}function gI(n){return Vc(n,10)}function mI(n){return wI(n,10)}function yI(n){return bI(n,10)}function Vc(n,r){Bi(r);var e=n.length;if(e===0)return null;var t=-1,a,i=G(n,0);if(mn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=119304647,l=s,u=r,f=0,c=a;if(c<e)do{var v=c;c=c+1|0;var h=$l(G(n,v),r);if(h<0)return null;var d=f,p=l;if(di(d,p)>0)if(D(new oe(l),new oe(s))){l=v2(t,u);var g=f,y=l;if(di(g,y)>0)return null}else return null;var x=f;f=or(x,u);var k=f,S=f,z=h;f=S+z|0;var I=f;if(di(I,k)<0)return null}while(c<e);return f}function wI(n,r){var e=Vc(n,r),t,a=e;if((a==null?null:new oe(a))==null)return null;t=e;var i=t,s=-1,l=s&255;if(di(i,l)>0)return null;var u=i;return $n(u)}function bI(n,r){var e=Vc(n,r),t,a=e;if((a==null?null:new oe(a))==null)return null;t=e;var i=t,s=-1,l=s&65535;if(di(i,l)>0)return null;var u=i;return jc(u)}Lr(tc,"CharSequence");Lr(Te,"Comparable");_(tp,"Number");_(ap);_(ip);_(sp);nn(op);_(qn,"Char",o,o,[Te]);Lr(Z,"Collection");Lr(Ue,"Set",o,o,[Z]);Lr(zn,"List",o,o,[Z]);Lr(it,"Entry");Lr(xn,"Map");Lr(mi,"MutableMap",o,o,[xn]);nn(vk);_(de,"Enum",o,o,[Te]);nn(lp);_(b,"Long",o,o,[Te]);Lr(yn,"FunctionAdapter");_(up);U(hk,"ByteCompanionObject");U(dk,"ShortCompanionObject");U(pk,"IntCompanionObject");U(_k,"FloatCompanionObject");U(gk,"DoubleCompanionObject");U(mk,"StringCompanionObject");U(yk,"BooleanCompanionObject");U(fp,"Digit");U(cp,"Letter");Lr(cn,"Comparator");U(Ol,"Unit");_(Ii,"AbstractCollection",o,o,[Z]);_(Ns,"AbstractMutableCollection",o,o,[Z]);_(ac,"IteratorImpl");_(vp,"ListIteratorImpl");_(hp,"AbstractMutableList",o,o,[Z,zn]);_(dp,"AbstractMap",o,o,[xn]);_(pp,"AbstractMutableMap",o,o,[mi]);_(Us,"AbstractMutableSet",o,o,[Z,Ue]);nn(_p);Lr(Ds,"RandomAccess");_(A,"ArrayList",A.m,o,[Z,zn,Ds]);_(bs,"HashMap",bs.a7,o,[mi]);_(gp,"HashMapKeys",o,o,[Z,Ue]);_(mp,"HashMapValues",o,o,[Z]);_(yp,"HashMapEntrySetBase",o,o,[Z,Ue]);_(wp,"HashMapEntrySet");_(bp);_(kp,"HashMapKeysDefault");_(xp);_(Sp,"HashMapValuesDefault");_(Ia,"HashSet",Ia.q8,o,[Z,Ue]);nn(Ep);_(Pl,"Itr");_(zp,"KeysItr");_(Ip,"ValuesItr");_(Cp,"EntriesItr");_(qp,"EntryRef",o,o,[it]);Lr(Ap,"InternalMap");Rr(Me).k8=wk;_(Me,"InternalHashMap",Me.l7,o,[Ap]);U(Tp,"EmptyHolder");_(cr,"LinkedHashMap",cr.t4,o,[mi]);_(Pn,"LinkedHashSet",Pn.i1,o,[Z,Ue]);Lr(ut,"Continuation");U(jp,"CompletedContinuation",o,o,[ut]);_(ic,"InterceptedCoroutine",o,o,[ut]);_(sc,"GeneratorCoroutineImpl",o,o,[ut]);_(Op,o,o,o,[ut]);_(ks,"Exception",ks.tb);_(_e,"RuntimeException",_e.nb);_(se,"UnsupportedOperationException",se.s6);_(T,"IllegalArgumentException",T.qb);_(jr,"NoSuchElementException",jr.j1);_(Kn,"IndexOutOfBoundsException",Kn.yb);_(mr,"IllegalStateException",mr.ac);_(qo,"ConcurrentModificationException",qo.p9);_(c1,"ArithmeticException",c1.ec);_(Ao,"Error",Ao.kc);_(cs,"AssertionError",cs.ic);_(v1,"NumberFormatException",v1.sc);_(h1,"NoWhenBranchMatchedException",h1.s3);_(d1,"NullPointerException",d1.w3);_(p1,"ClassCastException",p1.a4);Lr(rt,"KClass");_(Ci,"KClassImpl",o,o,[rt]);_(an,"PrimitiveKClassImpl");U(oc,"NothingKClassImpl");_(_1,"SimpleKClassImpl");Lr(Oa,"KProperty1");U(Pp,"PrimitiveClasses");_(yh,"CharacterCodingException",yh.ce);_(Yr,"StringBuilder",Yr.f,o,[tc]);nn(Bp);_(qe,"Regex");_(xs,"MatchGroup");Lr(lc,"MatchNamedGroupCollection",o,o,[Z]);_(Np,o,o,o,[lc]);_(uc,"AbstractList",o,o,[zn]);_(Up);_(Dp);_(bk,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(qt,"DurationUnit");_(fc,"IteratorImpl");_(Rp,"ListIteratorImpl");nn(Lp);_(Mp);_(Fp);nn(kk);_($p,"AbstractSet",o,o,[Ue]);_(Jp);_(Hp);nn(Gp);U(Kp,"EmptyList",o,o,[zn,Ds]);U(Wp,"EmptyIterator");_(Bl,"IndexedValue");_(Yp,"IndexingIterable");_(Zp,"IndexingIterator");Lr(Vp,"MapWithDefault",o,o,[xn]);U(Xp,"EmptyMap",o,o,[xn]);_(Qp,"IntIterator");_(r_);_(n_,"TransformingSequence");Lr(Nl,"DropTakeSequence");_(e_);_(Ul,"TakeSequence",o,o,[Nl]);U(t_,"EmptySequence",o,o,[Nl]);_(a_);_(cc,"GeneratorSequence");U(i_,"EmptySet",o,o,[Ue]);U(s_,"NaturalOrderComparator",o,o,[cn]);_(o_,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(l_,"Key");Lr(xk,"ContinuationInterceptor");U(u_,"EmptyCoroutineContext");_(f_,"CoroutineSingletons");_(c_,"EnumEntriesList",o,o,[zn,Ds]);nn(v_);_(Rs,"IntProgression");Lr(fi,"ClosedRange");_(Lt,"IntRange",o,o,[fi]);_(h_,"IntProgressionIterator");nn(d_);_(p_);_(__,"DelimitedRangesSequence");U(Sk,"State");_(g_,"LinesIterator");_(m_);nn(y_);_(ze,"Duration",o,o,[Te]);nn(w_);_(g1,"LongParser");U(Ek,"FractionalParser");nn(b_);_(st,"Instant",o,o,[Te]);_(k_,"Success");_(vc,"Failure");nn(x_);_(hc,"UnboundLocalDateTime");_(dc,"InstantFormatException");_(S_,"DeepRecursiveScope",o,o,o,[1,2]);_(E_,"DeepRecursiveFunction");_(z_,"DeepRecursiveScopeImpl",o,o,[ut],[1,2]);_(I_,"LazyThreadSafetyMode");_(pc,"UnsafeLazyImpl");U(C_,"UNINITIALIZED_VALUE");nn(zk);_(Mt,"Failure");_(pa,"Result");_(wh,"NotImplementedError",wh.hb);_(Dl,"Pair");nn(q_);_(Pt,"Uuid",o,o,[Te]);nn(A_);_($e,"UByte",o,o,[Te]);_(T_,"Iterator");_(ga,"UByteArray",o,o,[Z]);nn(j_);_(oe,"UInt",o,o,[Te]);_(O_,"Iterator");_(ma,"UIntArray",o,o,[Z]);nn(P_);_(le,"ULong",o,o,[Te]);_(B_,"Iterator");_(ya,"ULongArray",o,o,[Z]);nn(N_);_(Je,"UShort",o,o,[Te]);_(U_,"Iterator");_(wa,"UShortArray",o,o,[Z]);fr=new Ol;wo=null;Is=new Ep;Ng=new jp;Mn=new Lp;qs=new Gp;As=new Wp;Jl=new t_;sm=new s_;$1=new l_;Hc=new d_;Nm=new x_;So=new C_;var Qr=Math.imul;class ru{}class pi{}class hr{}class Yn extends T{static wn(){var r=this.qb();return a1(r),r}static xn(r){var e=this.v(r);return a1(e),e}static yn(r,e){var t=this.rb(r,e);return a1(t),t}}class nu extends Yn{constructor(r,e,t,a){return new.target.go(r,e,t,a)}static go(r,e,t,a){var i=this.yn(r,e);return vn(i,i.fo_1),i.do_1=t,i.eo_1=a,i}ho(r){return nu.go(r,this,this.do_1,this.eo_1)}}class ye{}function Na(){return!1}function Ua(){return!1}function Vs(){return ur()}class Vm{}class Xm{constructor(r){this.xo_1=r,this.wo_1=r.po()}y(){return this.wo_1>0}z(){var r=this.xo_1.po(),e=this.wo_1;return this.wo_1=e-1|0,this.xo_1.uo(r-e|0)}}class Qm{constructor(r){this.yo_1=r}x(){return new Xm(this.yo_1)}}class r0{constructor(r){this.zo_1=r,this.ap_1=!1,this.bp_1=ur(),this.cp_1=A.m(),this.dp_1=Ia.q8(),this.ep_1=A.m(),this.fp_1=A.m(),this.gp_1=A.m()}hp(r,e,t,a){if(!this.dp_1.n(r)){var i="Element with name '"+r+"' is already registered in "+this.zo_1;throw T.v(w(i))}this.cp_1.n(r),this.ep_1.n(e),this.fp_1.n(t),this.gp_1.n(a)}ip(r,e,t,a,i){t=t===o?ur():t,a=a===o?!1:a;var s;return i===o?(this.hp(r,e,t,a),s=fr):s=i.hp.call(this,r,e,t,a),s}}class Xs{}class Li{constructor(r,e,t,a,i){this.jp_1=r,this.kp_1=e,this.lp_1=t,this.mp_1=i.bp_1,this.np_1=Yk(i.cp_1);var s=this,l=i.cp_1;s.op_1=ja(l),this.pp_1=pf(i.ep_1);var u=this,f=i.fp_1;u.qp_1=ja(f),this.rp_1=Zk(i.gp_1);for(var c=this,v=Mk(this.op_1),h=A.f1(Mr(v,10)),d=v.x();d.y();){var p=d.z(),g=O(p.gh_1,p.fh_1);h.n(g)}c.sp_1=rm(h),this.tp_1=pf(a);var y=this;y.up_1=Dg(KI(this))}lo(){return this.jp_1}mo(){return this.kp_1}po(){return this.lp_1}qo(){return this.mp_1}vp(){return this.np_1}ro(r){return _i(this.op_1,r)}so(r){var e=this.sp_1.o2(r);return e??-3}to(r){return _i(this.qp_1,r)}uo(r){return _i(this.pp_1,r)}vo(r){return jy(this.rp_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Li)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!Oc(this.tp_1,r.tp_1)){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return wy(this)}toString(){return Iy(this)}}class Mi{toString(){return fn(Dr(this).uc())}hashCode(){return pe(this.toString())}}class eu extends Mi{constructor(){$o=null,super(),$o=this}}class n0 extends Mi{constructor(){Jo=null,super(),Jo=this}}class Qs extends Mi{}class e0 extends Qs{constructor(){Ho=null,super(),Ho=this}}class t0 extends Qs{constructor(){Go=null,super(),Go=this}}class a0 extends Qs{constructor(){Ko=null,super(),Ko=this}}class i0 extends Qs{constructor(){Wo=null,super(),Wo=this}}class Vn extends Mi{}class s0 extends Vn{constructor(){Yo=null,super(),Yo=this}}class o0 extends Vn{constructor(){Zo=null,super(),Zo=this}}class l0 extends Vn{constructor(){Vo=null,super(),Vo=this}}class u0 extends Vn{constructor(){Xo=null,super(),Xo=this}}class f0 extends Vn{constructor(){Qo=null,super(),Qo=this}}class c0 extends Vn{constructor(){rl=null,super(),rl=this}}class v0 extends Vn{constructor(){nl=null,super(),nl=this}}class h0 extends Vn{constructor(){el=null,super(),el=this}}class d0 extends Vn{constructor(){tl=null,super(),tl=this}}class Fi extends Mi{}class p0 extends Fi{constructor(){al=null,super(),al=this}}class tu{}function _0(n){return n.on(this)}class au{}function g0(){return!1}function m0(n){return-1}function y0(n,r,e,t,a){return t=t===o?null:t,a===o?this.wq(n,r,e,t):a.wq.call(this,n,r,e,t)}class Da{wp(){throw Yn.xn(w(Dr(this))+" can't retrieve untyped values")}xp(){return!0}yp(){return null}zp(){var r=this.wp();return typeof r=="boolean"?r:m()}aq(){var r=this.wp();return typeof r=="number"?r:m()}bq(){var r=this.wp();return typeof r=="number"?r:m()}cq(){var r=this.wp();return typeof r=="number"?r:m()}dq(){var r=this.wp();return r instanceof b?r:m()}eq(){var r=this.wp();return typeof r=="number"?r:m()}fq(){var r=this.wp();return typeof r=="number"?r:m()}gq(){var r=this.wp();return r instanceof qn?r.x1_1:m()}hq(){var r=this.wp();return typeof r=="string"?r:m()}iq(r){return this}jq(r,e){return this.kq(r)}lq(r){return this}mq(r){}nq(r,e){return this.zp()}oq(r,e){return this.aq()}pq(r,e){return this.bq()}qq(r,e){return this.cq()}rq(r,e){return this.dq()}sq(r,e){return this.eq()}tq(r,e){return this.fq()}uq(r,e){return this.gq()}vq(r,e){return this.iq(r.uo(e))}wq(r,e,t,a){return this.jq(t,a)}}class Xc{}function kI(n,r){return this.lq(n)}function xI(n,r){n.nn(this,r)}class ro{static cr(){return Pa(this)}lq(r){return this}mq(r){}dr(r,e){return!0}er(r){throw Yn.xn("Non-serializable "+w(Dr(r))+" is not supported by "+w(Dr(this))+" encoder")}fr(){throw Yn.xn("'null' is not supported by default")}gr(r){return this.er(r)}hr(r){return this.er(r)}ir(r){return this.er(r)}jr(r){return this.er(r)}kr(r){return this.er(r)}lr(r){return this.er(r)}mr(r){return this.er(r)}nr(r){return this.er(new qn(r))}or(r){return this.er(r)}pr(r){return this}qr(r,e,t){this.dr(r,e)&&this.gr(t)}rr(r,e,t){this.dr(r,e)&&this.hr(t)}sr(r,e,t){this.dr(r,e)&&this.ir(t)}tr(r,e,t){this.dr(r,e)&&this.jr(t)}ur(r,e,t){this.dr(r,e)&&this.kr(t)}vr(r,e,t){this.dr(r,e)&&this.lr(t)}wr(r,e,t){this.dr(r,e)&&this.mr(t)}xr(r,e,t){this.dr(r,e)&&this.nr(t)}yr(r,e){return this.dr(r,e)?this.pr(r.uo(e)):_C()}zr(r,e,t,a){this.dr(r,e)&&this.as(t,a)}}class Ei{rn(r,e){return r.yq().cs(this.qn(),e)}pn(r,e){return r.yq().ds(this.qn(),e)}}class w0{constructor(){uf=this,this.es_1=gC()}mn(){return this.es_1}fs(r,e){throw Yn.xn("'kotlin.Nothing' cannot be serialized")}nn(r,e){var t;return t=m(),this.fs(r,t)}on(r){throw Yn.xn("'kotlin.Nothing' does not have instances")}}class b0{constructor(){ff=this,this.gs_1=new In("kotlin.time.Duration",Hi())}mn(){return this.gs_1}hs(r,e){r.or($E(e))}nn(r,e){return this.hs(r,e instanceof ze?e.tj_1:m())}is(r){return Wr().uj(r.hq())}on(r){return new ze(this.is(r))}}class k0{constructor(){cf=this,this.js_1=new In("kotlin.time.Instant",Hi())}mn(){return this.js_1}ks(r,e){r.or(e.toString())}nn(r,e){return this.ks(r,e instanceof st?e:m())}on(r){return Ot().gk(r.hq())}}class x0{constructor(){vf=this,this.ls_1=new In("kotlin.uuid.Uuid",Hi())}mn(){return this.ls_1}ms(r,e){r.or(e.toString())}nn(r,e){return this.ms(r,e instanceof Pt?e:m())}on(r){return Ys().pl(r.hq())}}class Jt{constructor(r){this.ps_1=r,this.qs_1=1}mo(){return eo()}po(){return this.qs_1}ro(r){return At(r,this.lo()),r.toString()}so(r){var e=Gl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}vo(r){return At(r,this.lo()),!1}to(r){return At(r,this.lo()),ur()}uo(r){return At(r,this.lo()),this.ps_1}equals(r){return this===r?!0:r instanceof Jt?!!(D(this.ps_1,r.ps_1)&&this.lo()===r.lo()):!1}hashCode(){return Qr(wr(this.ps_1),31)+pe(this.lo())|0}toString(){return this.lo()+"("+w(this.ps_1)+")"}}class S0 extends Jt{lo(){return"kotlin.collections.ArrayList"}}class Ra{constructor(r,e,t){this.rs_1=r,this.ss_1=e,this.ts_1=t,this.us_1=2}lo(){return this.rs_1}mo(){return uu()}po(){return this.us_1}ro(r){return At(r,this.lo()),r.toString()}so(r){var e=Gl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}vo(r){return At(r,this.lo()),!1}to(r){return At(r,this.lo()),ur()}uo(r){At(r,this.lo());var e;switch(r%2|0){case 0:e=this.ss_1;break;case 1:e=this.ts_1;break;default:var t="Unreached";throw mr.o3(w(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Ra)||this.lo()!==r.lo()||!D(this.ss_1,r.ss_1)||!D(this.ts_1,r.ts_1))}hashCode(){var r=pe(this.lo());return r=Qr(31,r)+wr(this.ss_1)|0,r=Qr(31,r)+wr(this.ts_1)|0,r}toString(){return this.lo()+"("+w(this.ss_1)+", "+w(this.ts_1)+")"}}class E0 extends Ra{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class z0 extends Jt{constructor(r){super(r),this.xs_1=r.lo()+"Array"}lo(){return this.xs_1}}class Qc{rt(r,e){var t=r.lq(this.mn()),a=t.br(this.mn());if(!(a>=-1)){var i="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+a;throw T.v(w(i))}var s;e!=null?s=this.gt(e,this.wt(e)+ln(a,0)|0):s=this.at(a);var l=s,u=this.ct(l);if(t.zq())this.ot(t,l,u,a);else r:for(;;){var f=t.ar(this.mn());if(f===-1)break r;this.qt(t,u+f|0,l)}return t.mq(this.mn()),this.et(l)}on(r){return this.rt(r,null)}qt(r,e,t,a,i){a=a===o?!0:a;var s;return i===o?(this.pt(r,e,t,a),s=fr):s=i.pt.call(this,r,e,t,a),s}}class rv extends Qc{constructor(r){super(),this.mt_1=r}nt(r,e){var t=this.wt(e),a=this.mn(),i=r.bs(a,t),s=this.yt(e),l=0;if(l<t)do{var u=l;l=l+1|0,i.zr(this.mn(),u,this.mt_1,s.z())}while(l<t);i.mq(a)}nn(r,e){return this.nt(r,e)}ot(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=0;if(s<a)do{var l=s;s=s+1|0,this.pt(r,t+l|0,e,!1)}while(s<a)}pt(r,e,t,a){this.it(t,e,r.xq(this.mn(),e,this.mt_1))}}class I0 extends rv{kt(r){return r.c1()}wt(r){return this.kt(r!=null&&E(r,Z)?r:m())}lt(r){return r.x()}yt(r){return this.lt(r!=null&&E(r,Z)?r:m())}}class C0 extends I0{constructor(r){super(r),this.zs_1=new S0(r.mn())}mn(){return this.zs_1}at(r){return r===-1?A.m():A.f1(r)}bt(r){return r.c1()}ct(r){return this.bt(r instanceof A?r:m())}dt(r){return r}et(r){return this.dt(r instanceof A?r:m())}ft(r,e){if(r instanceof A)return r.n6(e),r;if(e===r.c1())return A.h1(r);var t=A.f1(e);return t.g1(r),t}gt(r,e){return this.ft(r!=null&&E(r,zn)?r:m(),e)}ht(r,e,t){r.o5(e,t)}it(r,e,t){return this.ht(r instanceof A?r:m(),e,t)}}class q0 extends Qc{constructor(r,e){super(),this.cu_1=r,this.du_1=e}eu(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=ux(kc(0,Qr(a,2)),2),l=s.r1_1,u=s.s1_1,f=s.t1_1;if(f>0&&l<=u||f<0&&u<=l)do{var c=l;l=l+f|0,this.fu(r,t+c|0,e,!1)}while(c!==u)}ot(r,e,t,a){return this.eu(r,e!=null&&E(e,mi)?e:m(),t,a)}fu(r,e,t,a){var i=r.xq(this.mn(),e,this.cu_1),s;if(a){var l=r.ar(this.mn());if(l!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+l;throw T.v(w(u))}s=l}else s=e+1|0;var f=s,c,v;if(t.m2(i)){var h=this.du_1.mn().mo();v=!(h instanceof Vn)}else v=!1;v?c=r.wq(this.mn(),f,this.du_1,Ie(t,i)):c=r.xq(this.mn(),f,this.du_1);var d=c;t.s2(i,d)}pt(r,e,t,a){return this.fu(r,e,t!=null&&E(t,mi)?t:m(),a)}nt(r,e){for(var t=this.wt(e),a=this.mn(),i=r.bs(a,t),s=this.yt(e),l=0,u=s;u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=this.mn(),d=l;l=d+1|0,i.zr(h,d,this.cu_1,c);var p=this.mn(),g=l;l=g+1|0,i.zr(p,g,this.du_1,v)}i.mq(a)}nn(r,e){return this.nt(r,e)}}class A0 extends q0{constructor(r,e){super(r,e),this.ut_1=new E0(r.mn(),e.mn())}mn(){return this.ut_1}vt(r){return r.c1()}wt(r){return this.vt(r!=null&&E(r,xn)?r:m())}xt(r){return r.r2().x()}yt(r){return this.xt(r!=null&&E(r,xn)?r:m())}at(r){return r===-1?cr.t4():kd(r)}zt(r){return Qr(r.c1(),2)}ct(r){return this.zt(r instanceof cr?r:m())}au(r){return r}et(r){return this.au(r instanceof cr?r:m())}bu(r,e){if(r instanceof cr)return r;if(e<=r.c1())return cr.oa(r);var t=kd(e);return t.u2(r),t}gt(r,e){return this.bu(r!=null&&E(r,xn)?r:m(),e)}}class we extends rv{constructor(r){super(r),this.hu_1=new z0(r.mn())}mn(){return this.hu_1}iu(r){return r.ju()}ct(r){return this.iu(r instanceof Fn?r:m())}ku(r){return r.lu()}et(r){return this.ku(r instanceof Fn?r:m())}mu(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw mr.o3(w(e))}yt(r){return this.mu(r)}nu(r,e,t){var a="This method lead to boxing and must not be used, use Builder.append instead";throw mr.o3(w(a))}it(r,e,t){return this.nu(r instanceof Fn?r:m(),e,t)}at(r){return r===-1?this.ou():this.pu(r)}su(r,e){var t=this.wt(e),a=this.hu_1,i=r.bs(a,t);this.ru(i,e,t),i.mq(a)}nn(r,e){return this.su(r,e)}nt(r,e){return this.su(r,e)}on(r){return this.rt(r,null)}}class Fn{static tu(){return Pa(this)}vu(r,e){r=r===o?this.ju()+1|0:r;var t;return e===o?(this.uu(r),t=fr):t=e.uu.call(this,r),t}}let T0=class{constructor(){hf=this,this.wu_1=Ca(0)}};class j0{constructor(r,e){xd(),this.xu_1=r,this.yu_1=e;var t=this.xu_1.po();if(t<=64){var a=this,i;t===64?i=new b(0,0):i=ie(new b(-1,-1),t),a.zu_1=i,this.av_1=xd().wu_1}else this.zu_1=new b(0,0),this.av_1=cC(this,t)}bv(r){r<64?this.zu_1=qa(this.zu_1,ie(new b(1,0),r)):vC(this,r)}cv(){for(var r=this.xu_1.po();!ir(this.zu_1,new b(-1,-1));){var e=bg(zc(this.zu_1));if(this.zu_1=qa(this.zu_1,ie(new b(1,0),e)),this.yu_1(this.xu_1,e))return e}return r>64?hC(this):-1}}class $i{constructor(r,e,t){e=e===o?null:e,this.qv_1=r,this.rv_1=e,this.sv_1=t,this.tv_1=-1;for(var a=this,i=0,s=this.sv_1,l=Array(s);i<s;)l[i]="[UNINITIALIZED]",i=i+1|0;a.uv_1=l;var u=this,f=this.sv_1;u.vv_1=Array(f),this.wv_1=null,this.xv_1=jo(this.sv_1),this.yv_1=Ar();var c=this,v=Eo();c.zv_1=bo(v,xC(this));var h=this,d=Eo();h.aw_1=bo(d,EC(this));var p=this,g=Eo();p.bw_1=bo(g,IC(this))}lo(){return this.qv_1}po(){return this.sv_1}mo(){return lu()}qo(){var r=this.wv_1;return r??ur()}vp(){return this.yv_1.p2()}cw(){var r=this.aw_1,e=Oa;return ji("typeParameterDescriptors",1,e,zC(),null),r.l2()}uo(r){return _i(Sy(this),r).mn()}vo(r){return jy(this.xv_1,r)}to(r){var e=_i(this.vv_1,r);return e??ur()}ro(r){return _i(this.uv_1,r)}so(r){var e=this.yv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof $i)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!Oc(this.cw(),r.cw())){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return Ey(this)}toString(){return Iy(this)}}class iu extends $i{constructor(r,e){super(r,e,1),this.pv_1=!0}oo(){return this.pv_1}hashCode(){return Qr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof iu)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!(r.pv_1&&Oc(this.cw(),r.cw()))){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}}class O0{}function SI(){return Cy()}class nv{constructor(r){this.dw_1=r}ew(){return[this.dw_1]}mn(){var r="unsupported";throw mr.o3(w(r))}nn(r,e){var t="unsupported";throw mr.o3(w(t))}on(r){var e="unsupported";throw mr.o3(w(e))}}class P0 extends ro{constructor(){return new.target.hw()}static hw(){il=null;var r=this.cr();return il=r,r.gw_1=fu(),r}yq(){return this.gw_1}er(r){return fr}fr(){return fr}gr(r){return fr}hr(r){return fr}ir(r){return fr}jr(r){return fr}kr(r){return fr}lr(r){return fr}mr(r){return fr}nr(r){return fr}or(r){return fr}}class no{constructor(){df=this,this.iw_1=fv(),this.jw_1="kotlin.Nothing"}mo(){return this.iw_1}lo(){return this.jw_1}po(){return 0}ro(r){os()}so(r){os()}vo(r){os()}uo(r){os()}to(r){os()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return pe(this.jw_1)+Qr(31,this.iw_1.hashCode())|0}}class B0{}class N0{constructor(r,e){this.kw_1=e,this.lw_1=ur();var t=this,a=Eo();t.mw_1=bo(a,yC(r,this))}mn(){var r=this.mw_1,e=Oa;return ji("descriptor",1,e,wC(),null),r.l2()}nw(r,e){r.lq(this.mn()).mq(this.mn())}nn(r,e){return this.nw(r,e??m())}on(r){var e=this.mn(),t=r.lq(e);r:{if(t.zq())break r;var a=t.ar(this.mn());if(a===-1)break r;throw Yn.xn("Unexpected index "+a)}return t.mq(e),this.kw_1}}class U0 extends we{constructor(){sl=null,super(py(Ec())),sl=this}qw(r){return r.length}wt(r){return this.qw(r!=null&&ps(r)?r:m())}rw(r,e){return e===r.length?ra.uw(r):ra.vw(I1(r,e),r.length)}gt(r,e){return this.rw(r!=null&&ps(r)?r:m(),e)}pu(r){return ra.ww(r)}ou(){return ra.xw()}yw(r,e,t,a){t.zw(r.uq(this.hu_1,e))}pt(r,e,t,a){return this.yw(r,e,t instanceof ra?t:m(),a)}qu(r,e,t,a){return this.yw(r,e,t instanceof ra?t:m(),a)}ax(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.xr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ax(r,e!=null&&ps(e)?e:m(),t)}}class D0 extends we{constructor(){ol=null,super(_y()),ol=this}dx(r){return r.length}wt(r){return this.dx(r!=null&&ms(r)?r:m())}ex(r,e){return e===r.length?na.hx(r):na.ix(C1(r,e),r.length)}gt(r,e){return this.ex(r!=null&&ms(r)?r:m(),e)}pu(r){return na.jx(r)}ou(){return na.kx()}lx(r,e,t,a){t.mx(r.tq(this.hu_1,e))}pt(r,e,t,a){return this.lx(r,e,t instanceof na?t:m(),a)}qu(r,e,t,a){return this.lx(r,e,t instanceof na?t:m(),a)}nx(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.wr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.nx(r,e!=null&&ms(e)?e:m(),t)}}class R0 extends we{constructor(){ll=null,super(gy()),ll=this}qx(r){return r.length}wt(r){return this.qx(r!=null&&gs(r)?r:m())}rx(r,e){return e===r.length?ea.ux(r):ea.vx(q1(r,e),r.length)}gt(r,e){return this.rx(r!=null&&gs(r)?r:m(),e)}pu(r){return ea.wx(r)}ou(){return ea.xx()}yx(r,e,t,a){t.zx(r.sq(this.hu_1,e))}pt(r,e,t,a){return this.yx(r,e,t instanceof ea?t:m(),a)}qu(r,e,t,a){return this.yx(r,e,t instanceof ea?t:m(),a)}ay(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.vr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ay(r,e!=null&&gs(e)?e:m(),t)}}class L0 extends we{constructor(){ul=null,super(ov(Rl())),ul=this}dy(r){return r.length}wt(r){return this.dy(r!=null&&ci(r)?r:m())}ey(r,e){return e===r.length?ta.hy(r):ta.iy(bi(r,e),r.length)}gt(r,e){return this.ey(r!=null&&ci(r)?r:m(),e)}pu(r){return ta.jy(r)}ou(){return ta.ky()}ly(r,e,t,a){t.my(r.rq(this.hu_1,e))}pt(r,e,t,a){return this.ly(r,e,t instanceof ta?t:m(),a)}qu(r,e,t,a){return this.ly(r,e,t instanceof ta?t:m(),a)}ny(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.ur(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ny(r,e!=null&&ci(e)?e:m(),t)}}class M0 extends we{constructor(){fl=null,super(su(Zs())),fl=this}qy(r){return Ea(r)}wt(r){return this.qy(r instanceof ya?r.zm_1:m())}ry(r,e){if(e===Ea(r))return aa.uy(r);var t=bi(r,e);return aa.vy(t,Ea(r))}gt(r,e){return this.ry(r instanceof ya?r.zm_1:m(),e)}pu(r){return aa.wy(r)}ou(){return aa.xy()}yy(r,e,t,a){var i=r.vq(this.hu_1,e).dq(),s=i;t.zy(s)}pt(r,e,t,a){return this.yy(r,e,t instanceof aa?t:m(),a)}qu(r,e,t,a){return this.yy(r,e,t instanceof aa?t:m(),a)}az(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=Wz(e,i),u=l;s.kr(u)}while(a<t)}ru(r,e,t){return this.az(r,e instanceof ya?e.zm_1:m(),t)}}class F0 extends we{constructor(){cl=null,super(sv()),cl=this}dz(r){return r.length}wt(r){return this.dz(r!=null&&_s(r)?r:m())}ez(r,e){return e===r.length?ia.hz(r):ia.iz(Ta(r,e),r.length)}gt(r,e){return this.ez(r!=null&&_s(r)?r:m(),e)}pu(r){return ia.jz(r)}ou(){return ia.kz()}lz(r,e,t,a){t.mz(r.qq(this.hu_1,e))}pt(r,e,t,a){return this.lz(r,e,t instanceof ia?t:m(),a)}qu(r,e,t,a){return this.lz(r,e,t instanceof ia?t:m(),a)}nz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.tr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.nz(r,e!=null&&_s(e)?e:m(),t)}}class $0 extends we{constructor(){vl=null,super(tv(Xl())),vl=this}qz(r){return Sa(r)}wt(r){return this.qz(r instanceof ma?r.om_1:m())}rz(r,e){if(e===Sa(r))return sa.uz(r);var t=Ta(r,e);return sa.vz(t,Sa(r))}gt(r,e){return this.rz(r instanceof ma?r.om_1:m(),e)}pu(r){return sa.wz(r)}ou(){return sa.xz()}yz(r,e,t,a){var i=r.vq(this.hu_1,e).cq(),s=i;t.zz(s)}pt(r,e,t,a){return this.yz(r,e,t instanceof sa?t:m(),a)}qu(r,e,t,a){return this.yz(r,e,t instanceof sa?t:m(),a)}a10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=Uz(e,i),u=l;s.jr(u)}while(a<t)}ru(r,e,t){return this.a10(r,e instanceof ma?e.om_1:m(),t)}}class J0 extends we{constructor(){hl=null,super(uv()),hl=this}d10(r){return r.length}wt(r){return this.d10(r!=null&&ds(r)?r:m())}e10(r,e){return e===r.length?oa.h10(r):oa.i10(ki(r,e),r.length)}gt(r,e){return this.e10(r!=null&&ds(r)?r:m(),e)}pu(r){return oa.j10(r)}ou(){return oa.k10()}l10(r,e,t,a){t.m10(r.pq(this.hu_1,e))}pt(r,e,t,a){return this.l10(r,e,t instanceof oa?t:m(),a)}qu(r,e,t,a){return this.l10(r,e,t instanceof oa?t:m(),a)}n10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.sr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n10(r,e!=null&&ds(e)?e:m(),t)}}class H0 extends we{constructor(){dl=null,super(iv(Ql())),dl=this}q10(r){return za(r)}wt(r){return this.q10(r instanceof wa?r.kn_1:m())}r10(r,e){if(e===za(r))return la.u10(r);var t=ki(r,e);return la.v10(t,za(r))}gt(r,e){return this.r10(r instanceof wa?r.kn_1:m(),e)}pu(r){return la.w10(r)}ou(){return la.x10()}y10(r,e,t,a){var i=r.vq(this.hu_1,e).bq(),s=i;t.z10(s)}pt(r,e,t,a){return this.y10(r,e,t instanceof la?t:m(),a)}qu(r,e,t,a){return this.y10(r,e,t instanceof la?t:m(),a)}a11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=aI(e,i),u=l;s.ir(u)}while(a<t)}ru(r,e,t){return this.a11(r,e instanceof wa?e.kn_1:m(),t)}}class G0 extends we{constructor(){pl=null,super(lv()),pl=this}d11(r){return r.length}wt(r){return this.d11(r!=null&&hs(r)?r:m())}e11(r,e){return e===r.length?ua.h11(r):ua.i11(xi(r,e),r.length)}gt(r,e){return this.e11(r!=null&&hs(r)?r:m(),e)}pu(r){return ua.j11(r)}ou(){return ua.k11()}l11(r,e,t,a){t.m11(r.oq(this.hu_1,e))}pt(r,e,t,a){return this.l11(r,e,t instanceof ua?t:m(),a)}qu(r,e,t,a){return this.l11(r,e,t instanceof ua?t:m(),a)}n11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.rr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n11(r,e!=null&&hs(e)?e:m(),t)}}class K0 extends we{constructor(){_l=null,super(av(Vl())),_l=this}q11(r){return xa(r)}wt(r){return this.q11(r instanceof ga?r.dm_1:m())}r11(r,e){if(e===xa(r))return fa.u11(r);var t=xi(r,e);return fa.v11(t,xa(r))}gt(r,e){return this.r11(r instanceof ga?r.dm_1:m(),e)}pu(r){return fa.w11(r)}ou(){return fa.x11()}y11(r,e,t,a){var i=r.vq(this.hu_1,e).aq(),s=i;t.z11(s)}pt(r,e,t,a){return this.y11(r,e,t instanceof fa?t:m(),a)}qu(r,e,t,a){return this.y11(r,e,t instanceof fa?t:m(),a)}a12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=Iz(e,i),u=l;s.hr(u)}while(a<t)}ru(r,e,t){return this.a12(r,e instanceof ga?e.dm_1:m(),t)}}class W0 extends we{constructor(){gl=null,super(my()),gl=this}d12(r){return r.length}wt(r){return this.d12(r!=null&&vs(r)?r:m())}e12(r,e){return e===r.length?ca.h12(r):ca.i12(A1(r,e),r.length)}gt(r,e){return this.e12(r!=null&&vs(r)?r:m(),e)}pu(r){return ca.j12(r)}ou(){return ca.k12()}l12(r,e,t,a){t.m12(r.nq(this.hu_1,e))}pt(r,e,t,a){return this.l12(r,e,t instanceof ca?t:m(),a)}qu(r,e,t,a){return this.l12(r,e,t instanceof ca?t:m(),a)}n12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.qr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n12(r,e!=null&&vs(e)?e:m(),t)}}class ra extends Fn{constructor(r,e){return new.target.vw(r,e)}static vw(r,e){var t=this.tu();return t.sw_1=r,t.tw_1=e,t}static uw(r){return this.vw(r,r.length)}static ww(r){return this.vw(Es(r),0)}static xw(){return this.vw(Es(10),0)}ju(){return this.tw_1}uu(r){this.sw_1.length<r&&(this.sw_1=I1(this.sw_1,ln(r,Qr(this.sw_1.length,2))))}zw(r){this.vu();var e=this.sw_1,t=this.tw_1;this.tw_1=t+1|0,e[t]=r}lu(){return I1(this.sw_1,this.tw_1)}}class na extends Fn{constructor(r,e){return new.target.ix(r,e)}static ix(r,e){var t=this.tu();return t.fx_1=r,t.gx_1=e,t}static hx(r){return this.ix(r,r.length)}static jx(r){return this.ix(new Float64Array(r),0)}static kx(){return this.ix(new Float64Array(10),0)}ju(){return this.gx_1}uu(r){this.fx_1.length<r&&(this.fx_1=C1(this.fx_1,ln(r,Qr(this.fx_1.length,2))))}mx(r){this.vu();var e=this.fx_1,t=this.gx_1;this.gx_1=t+1|0,e[t]=r}lu(){return C1(this.fx_1,this.gx_1)}}class ea extends Fn{constructor(r,e){return new.target.vx(r,e)}static vx(r,e){var t=this.tu();return t.sx_1=r,t.tx_1=e,t}static ux(r){return this.vx(r,r.length)}static wx(r){return this.vx(new Float32Array(r),0)}static xx(){return this.vx(new Float32Array(10),0)}ju(){return this.tx_1}uu(r){this.sx_1.length<r&&(this.sx_1=q1(this.sx_1,ln(r,Qr(this.sx_1.length,2))))}zx(r){this.vu();var e=this.sx_1,t=this.tx_1;this.tx_1=t+1|0,e[t]=r}lu(){return q1(this.sx_1,this.tx_1)}}class ta extends Fn{constructor(r,e){return new.target.iy(r,e)}static iy(r,e){var t=this.tu();return t.fy_1=r,t.gy_1=e,t}static hy(r){return this.iy(r,r.length)}static jy(r){return this.iy(Ca(r),0)}static ky(){return this.iy(Ca(10),0)}ju(){return this.gy_1}uu(r){this.fy_1.length<r&&(this.fy_1=bi(this.fy_1,ln(r,Qr(this.fy_1.length,2))))}my(r){this.vu();var e=this.fy_1,t=this.gy_1;this.gy_1=t+1|0,e[t]=r}lu(){return bi(this.fy_1,this.gy_1)}}class aa extends Fn{constructor(r,e){return new.target.vy(r,e)}static vy(r,e){var t=this.tu();return t.sy_1=r,t.ty_1=e,t}static uy(r){return this.vy(r,Ea(r))}static wy(r){return this.vy(wd(r),0)}static xy(){return this.vy(wd(10),0)}ju(){return this.ty_1}uu(r){if(Ea(this.sy_1)<r){var e=this,t=this.sy_1,a=ln(r,Qr(Ea(this.sy_1),2));e.sy_1=bi(t,a)}}zy(r){this.vu();var e=this.sy_1,t=this.ty_1;this.ty_1=t+1|0,Yz(e,t,r)}o12(){var r=this.sy_1,e=this.ty_1;return bi(r,e)}lu(){return new ya(this.o12())}}class ia extends Fn{constructor(r,e){return new.target.iz(r,e)}static iz(r,e){var t=this.tu();return t.fz_1=r,t.gz_1=e,t}static hz(r){return this.iz(r,r.length)}static jz(r){return this.iz(new Int32Array(r),0)}static kz(){return this.iz(new Int32Array(10),0)}ju(){return this.gz_1}uu(r){this.fz_1.length<r&&(this.fz_1=Ta(this.fz_1,ln(r,Qr(this.fz_1.length,2))))}mz(r){this.vu();var e=this.fz_1,t=this.gz_1;this.gz_1=t+1|0,e[t]=r}lu(){return Ta(this.fz_1,this.gz_1)}}class sa extends Fn{constructor(r,e){return new.target.vz(r,e)}static vz(r,e){var t=this.tu();return t.sz_1=r,t.tz_1=e,t}static uz(r){return this.vz(r,Sa(r))}static wz(r){return this.vz(yd(r),0)}static xz(){return this.vz(yd(10),0)}ju(){return this.tz_1}uu(r){if(Sa(this.sz_1)<r){var e=this,t=this.sz_1,a=ln(r,Qr(Sa(this.sz_1),2));e.sz_1=Ta(t,a)}}zz(r){this.vu();var e=this.sz_1,t=this.tz_1;this.tz_1=t+1|0,Dz(e,t,r)}p12(){var r=this.sz_1,e=this.tz_1;return Ta(r,e)}lu(){return new ma(this.p12())}}class oa extends Fn{constructor(r,e){return new.target.i10(r,e)}static i10(r,e){var t=this.tu();return t.f10_1=r,t.g10_1=e,t}static h10(r){return this.i10(r,r.length)}static j10(r){return this.i10(new Int16Array(r),0)}static k10(){return this.i10(new Int16Array(10),0)}ju(){return this.g10_1}uu(r){this.f10_1.length<r&&(this.f10_1=ki(this.f10_1,ln(r,Qr(this.f10_1.length,2))))}m10(r){this.vu();var e=this.f10_1,t=this.g10_1;this.g10_1=t+1|0,e[t]=r}lu(){return ki(this.f10_1,this.g10_1)}}class la extends Fn{constructor(r,e){return new.target.v10(r,e)}static v10(r,e){var t=this.tu();return t.s10_1=r,t.t10_1=e,t}static u10(r){return this.v10(r,za(r))}static w10(r){return this.v10(bd(r),0)}static x10(){return this.v10(bd(10),0)}ju(){return this.t10_1}uu(r){if(za(this.s10_1)<r){var e=this,t=this.s10_1,a=ln(r,Qr(za(this.s10_1),2));e.s10_1=ki(t,a)}}z10(r){this.vu();var e=this.s10_1,t=this.t10_1;this.t10_1=t+1|0,iI(e,t,r)}q12(){var r=this.s10_1,e=this.t10_1;return ki(r,e)}lu(){return new wa(this.q12())}}class ua extends Fn{constructor(r,e){return new.target.i11(r,e)}static i11(r,e){var t=this.tu();return t.f11_1=r,t.g11_1=e,t}static h11(r){return this.i11(r,r.length)}static j11(r){return this.i11(new Int8Array(r),0)}static k11(){return this.i11(new Int8Array(10),0)}ju(){return this.g11_1}uu(r){this.f11_1.length<r&&(this.f11_1=xi(this.f11_1,ln(r,Qr(this.f11_1.length,2))))}m11(r){this.vu();var e=this.f11_1,t=this.g11_1;this.g11_1=t+1|0,e[t]=r}lu(){return xi(this.f11_1,this.g11_1)}}class fa extends Fn{constructor(r,e){return new.target.v11(r,e)}static v11(r,e){var t=this.tu();return t.s11_1=r,t.t11_1=e,t}static u11(r){return this.v11(r,xa(r))}static w11(r){return this.v11(md(r),0)}static x11(){return this.v11(md(10),0)}ju(){return this.t11_1}uu(r){if(xa(this.s11_1)<r){var e=this,t=this.s11_1,a=ln(r,Qr(xa(this.s11_1),2));e.s11_1=xi(t,a)}}z11(r){this.vu();var e=this.s11_1,t=this.t11_1;this.t11_1=t+1|0,Cz(e,t,r)}r12(){var r=this.s11_1,e=this.t11_1;return xi(r,e)}lu(){return new ga(this.r12())}}class ca extends Fn{constructor(r,e){return new.target.i12(r,e)}static i12(r,e){var t=this.tu();return t.f12_1=r,t.g12_1=e,t}static h12(r){return this.i12(r,r.length)}static j12(r){return this.i12(jo(r),0)}static k12(){return this.i12(jo(10),0)}ju(){return this.g12_1}uu(r){this.f12_1.length<r&&(this.f12_1=A1(this.f12_1,ln(r,Qr(this.f12_1.length,2))))}m12(r){this.vu();var e=this.f12_1,t=this.g12_1;this.g12_1=t+1|0,e[t]=r}lu(){return A1(this.f12_1,this.g12_1)}}class Y0{constructor(){_f=this,this.s12_1=new In("kotlin.String",Hi())}mn(){return this.s12_1}t12(r,e){return r.or(e)}nn(r,e){return this.t12(r,e!=null&&typeof e=="string"?e:m())}on(r){return r.hq()}}class In{constructor(r,e){this.u12_1=r,this.v12_1=e}lo(){return this.u12_1}mo(){return this.v12_1}po(){return 0}ro(r){ls(this)}so(r){ls(this)}vo(r){ls(this)}uo(r){ls(this)}to(r){ls(this)}toString(){return"PrimitiveDescriptor("+this.u12_1+")"}equals(r){return this===r?!0:r instanceof In?!!(this.u12_1===r.u12_1&&D(this.v12_1,r.v12_1)):!1}hashCode(){return pe(this.u12_1)+Qr(31,this.v12_1.hashCode())|0}}class Z0{constructor(){gf=this,this.w12_1=new In("kotlin.Int",nC())}mn(){return this.w12_1}x12(r,e){return r.jr(e)}nn(r,e){return this.x12(r,e!=null&&typeof e=="number"?e:m())}on(r){return r.cq()}}class V0{constructor(){mf=this,this.y12_1=new In("kotlin.Long",eC())}mn(){return this.y12_1}z12(r,e){return r.kr(e)}nn(r,e){return this.z12(r,e instanceof b?e:m())}on(r){return r.dq()}}class X0{constructor(){yf=this,this.a13_1=new In("kotlin.Byte",XI())}mn(){return this.a13_1}b13(r,e){return r.hr(e)}nn(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:m())}on(r){return r.aq()}}class Q0{constructor(){wf=this,this.c13_1=new In("kotlin.Short",rC())}mn(){return this.c13_1}d13(r,e){return r.ir(e)}nn(r,e){return this.d13(r,e!=null&&typeof e=="number"?e:m())}on(r){return r.bq()}}class ry{constructor(){bf=this,this.e13_1=new In("kotlin.Char",QI())}mn(){return this.e13_1}f13(r,e){return r.nr(e)}nn(r,e){return this.f13(r,e instanceof qn?e.x1_1:m())}g13(r){return r.gq()}on(r){return new qn(this.g13(r))}}class ny{constructor(){kf=this,this.h13_1=new In("kotlin.Double",aC())}mn(){return this.h13_1}i13(r,e){return r.mr(e)}nn(r,e){return this.i13(r,e!=null&&typeof e=="number"?e:m())}on(r){return r.fq()}}class ey{constructor(){xf=this,this.j13_1=new In("kotlin.Float",tC())}mn(){return this.j13_1}k13(r,e){return r.lr(e)}nn(r,e){return this.k13(r,e!=null&&typeof e=="number"?e:m())}on(r){return r.eq()}}class ty{constructor(){Sf=this,this.l13_1=new In("kotlin.Boolean",VI())}mn(){return this.l13_1}m13(r,e){return r.gr(e)}nn(r,e){return this.m13(r,e!=null&&typeof e=="boolean"?e:m())}on(r){return r.zp()}}class ay{constructor(){Ef=this,this.n13_1=new N0("kotlin.Unit",fr)}mn(){return this.n13_1.mn()}o13(r,e){this.n13_1.nw(r,fr)}nn(r,e){return this.o13(r,e instanceof Ol?e:m())}p13(r){this.n13_1.on(r)}on(r){return this.p13(r),fr}}class Ji{constructor(){var r=this;r.v13_1=A.m(),this.w13_1=!1}yq(){return fu()}a14(r){throw Yn.xn(w(Dr(this))+" can't retrieve untyped values")}b14(r){return!0}c14(r){var e=this.a14(r);return typeof e=="boolean"?e:m()}d14(r){var e=this.a14(r);return typeof e=="number"?e:m()}e14(r){var e=this.a14(r);return typeof e=="number"?e:m()}f14(r){var e=this.a14(r);return typeof e=="number"?e:m()}g14(r){var e=this.a14(r);return e instanceof b?e:m()}h14(r){var e=this.a14(r);return typeof e=="number"?e:m()}i14(r){var e=this.a14(r);return typeof e=="number"?e:m()}j14(r){var e=this.a14(r);return e instanceof qn?e.x1_1:m()}k14(r){var e=this.a14(r);return typeof e=="string"?e:m()}l14(r,e){return this.m14(r),this}jq(r,e){return this.kq(r)}iq(r){return this.l14(this.n14(),r)}xp(){var r=this.x13(),e;if(r==null)return!1;e=r;var t=e;return this.b14(t)}yp(){return null}zp(){return this.c14(this.n14())}aq(){return this.d14(this.n14())}bq(){return this.e14(this.n14())}cq(){return this.f14(this.n14())}dq(){return this.g14(this.n14())}eq(){return this.h14(this.n14())}fq(){return this.i14(this.n14())}gq(){return this.j14(this.n14())}hq(){return this.k14(this.n14())}lq(r){return this}mq(r){}nq(r,e){return this.c14(this.s13(r,e))}oq(r,e){return this.d14(this.s13(r,e))}pq(r,e){return this.e14(this.s13(r,e))}qq(r,e){return this.f14(this.s13(r,e))}rq(r,e){return this.g14(this.s13(r,e))}sq(r,e){return this.h14(this.s13(r,e))}tq(r,e){return this.i14(this.s13(r,e))}uq(r,e){return this.j14(this.s13(r,e))}vq(r,e){return this.l14(this.s13(r,e),r.uo(e))}wq(r,e,t,a){var i=this.s13(r,e);return e6(this,i,t6(this,t,a))}x13(){return H_(this.v13_1)}m14(r){this.v13_1.n(r)}n14(){var r=this.v13_1.h5(Hs(this.v13_1));return this.w13_1=!0,r}}class iy extends Ji{s13(r,e){return this.u13(this.t13(r,e))}u13(r){var e=this.x13();return this.y13(e??"",r)}t13(r,e){return r.ro(e)}y13(r,e){var t;return q(r)===0?t=e:t=r+"."+e,t}z13(){return this.v13_1.d1()?"$":J(this.v13_1,".","$.")}}class sy{constructor(){zf=this,this.o14_1=to("kotlin.UInt",sv())}mn(){return this.o14_1}p14(r,e){var t=r.pr(this.o14_1),a=e;t.jr(a)}nn(r,e){return this.p14(r,e instanceof oe?e.jm_1:m())}q14(r){var e=r.iq(this.o14_1).cq();return e}on(r){return new oe(this.q14(r))}}class oy{constructor(){If=this,this.r14_1=to("kotlin.ULong",ov(Rl()))}mn(){return this.r14_1}s14(r,e){var t=r.pr(this.r14_1),a=e;t.kr(a)}nn(r,e){return this.s14(r,e instanceof le?e.um_1:m())}t14(r){var e=r.iq(this.r14_1).dq();return e}on(r){return new le(this.t14(r))}}class ly{constructor(){Cf=this,this.u14_1=to("kotlin.UByte",lv())}mn(){return this.u14_1}v14(r,e){var t=r.pr(this.u14_1),a=e;t.hr(a)}nn(r,e){return this.v14(r,e instanceof $e?e.yl_1:m())}w14(r){var e=r.iq(this.u14_1).aq();return e}on(r){return new $e(this.w14(r))}}class uy{constructor(){qf=this,this.x14_1=to("kotlin.UShort",uv())}mn(){return this.x14_1}y14(r,e){var t=r.pr(this.x14_1),a=e;t.ir(a)}nn(r,e){return this.y14(r,e instanceof Je?e.fn_1:m())}z14(r){var e=r.iq(this.x14_1).bq();return e}on(r){return new Je(this.z14(r))}}class fy{io(r,e,t){return e=e===o?ur():e,t===o?this.a15(r,e):t.a15.call(this,r,e)}}class cy extends fy{constructor(r,e,t,a,i,s){super(),this.c15_1=r,this.d15_1=e,this.e15_1=t,this.f15_1=a,this.g15_1=i,this.h15_1=s}ds(r,e){if(!r.vc(e))return null;var t=this.d15_1.o2(r),a=t==null?null:t.o2(Dr(e)),i=a!=null&&E(a,ru)?a:null;if(i!=null)return i;var s=this.e15_1.o2(r),l=s!=null&&typeof s=="function"?s:null;return l==null?null:l(e)}cs(r,e){var t=this.f15_1.o2(r),a;t==null?a=null:a=(E(t,xn)?t:m()).o2(e);var i=a,s=i!=null&&E(i,hr)?i:null;if(s!=null)return s;var l=this.g15_1.o2(r),u=l!=null&&typeof l=="function"?l:null;return u==null?null:u(e)}a15(r,e){var t=this.c15_1.o2(r),a=t==null?null:t.i15(e);return a==null||E(a,hr)?a:null}b15(r){for(var e=this.c15_1.r2().x();e.y();){var t=e.z(),a=t.k2(),i=t.l2();if(i instanceof vy){var s=E(a,rt)?a:m(),l=i.l15_1;r.m15(s,E(l,hr)?l:m())}else i instanceof hy?r.k15(a,i.j15_1):Ms()}for(var u=this.d15_1.r2().x();u.y();)for(var f=u.z(),c=f.k2(),v=f.l2(),h=v.r2().x();h.y();){var d=h.z(),p=d.k2(),g=d.l2(),y=E(c,rt)?c:m(),x=E(p,rt)?p:m(),k=E(g,hr)?g:m();r.n15(y,x,k)}for(var S=this.e15_1.r2().x();S.y();){var z=S.z(),I=z.k2(),C=z.l2(),j=E(I,rt)?I:m();r.o15(j,typeof C=="function"?C:m())}for(var P=this.g15_1.r2().x();P.y();){var F=P.z(),B=F.k2(),N=F.l2(),H=E(B,rt)?B:m();r.p15(H,typeof N=="function"?N:m())}}}class ev{}class vy extends ev{}class hy extends ev{}class dy{}function EI(n,r){return this.k15(n,f6(r))}class zI{}function II(n,r,e){var t=n.pn(r,e),a;return t==null?sC(Dr(e),n.qn()):a=t,a}function sf(n,r,e){var t=n.rn(r,e),a;return t==null?ky(e,n.qn()):a=t,a}function a1(n){vn(n,n.vn_1)}function Os(n){return JC()}function tv(n){return a6()}function su(n){return i6()}function av(n){return s6()}function iv(n){return o6()}function sv(n){return HC()}function ov(n){return GC()}function lv(n){return KC()}function uv(n){return WC()}function py(n){return YC()}function CI(){return TC()}function _y(n){return ZC()}function qI(){return jC()}function gy(n){return VC()}function AI(){return OC()}function TI(){return PC()}function jI(){return BC()}function OI(){return NC()}function PI(){return UC()}function BI(){return DC()}function NI(){return RC()}function UI(){return LC()}function DI(){return MC()}function my(n){return XC()}function RI(){return FC()}function LI(n){return QC()}function MI(){return oC()}function FI(n){return lC()}function $I(n){return uC()}function JI(n){return fC()}function of(n){return new C0(n)}function lf(n,r){return new A0(n,r)}function HI(n,r){var e=yy(r),t;if(e==null)t=null;else{var a=n.io(e);t=a==null?null:a.mn()}return t}function yy(n){var r;return n instanceof Vm?r=n.ko_1:n instanceof B0?r=yy(n.jo_1):r=null,r}function GI(n){return new Qm(n)}function ou(n,r,e,t){var a;if(t===o?a=ZI:a=t,t=a,vt(n)){var i="Blank serial names are prohibited";throw T.v(w(i))}if(D(r,lu())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw T.v(w(s))}var l=new r0(n);return t(l),new Li(n,r,l.cp_1.c1(),Lk(e),l)}function wy(n){var r=n.up_1,e=Oa;return ji("_hashCode",1,e,WI(),null),r.l2()}function KI(n){return()=>zy(n,n.tp_1)}function WI(){return Ke(n=>wy(n),1,0,0)}function YI(n,r){if(vt(n)){var e="Blank serial names are prohibited";throw T.v(w(e))}return r6(n,r)}function ZI(n){return fr}var $o;function La(){return $o===o&&new eu,$o}var Jo;function by(){return Jo===o&&new n0,Jo}var Ho;function lu(){return Ho===o&&new e0,Ho}var Go;function eo(){return Go===o&&new t0,Go}var Ko;function uu(){return Ko===o&&new a0,Ko}var Wo;function fv(){return Wo===o&&new i0,Wo}var Yo;function VI(){return Yo===o&&new s0,Yo}var Zo;function XI(){return Zo===o&&new o0,Zo}var Vo;function QI(){return Vo===o&&new l0,Vo}var Xo;function rC(){return Xo===o&&new u0,Xo}var Qo;function nC(){return Qo===o&&new f0,Qo}var rl;function eC(){return rl===o&&new c0,rl}var nl;function tC(){return nl===o&&new v0,nl}var el;function aC(){return el===o&&new h0,el}var tl;function Hi(){return tl===o&&new d0,tl}var al;function iC(){return al===o&&new p0,al}function sC(n,r){var e=n.uc();ky(e??w(n),r)}function ky(n,r){var e="in the polymorphic scope of '"+r.uc()+"'";throw Yn.xn(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.uc()+"' has to be sealed and '@Serializable'."))}var uf;function oC(){return uf===o&&new w0,uf}var ff;function lC(){return ff===o&&new b0,ff}var cf;function uC(){return cf===o&&new k0,cf}var vf;function fC(){return vf===o&&new x0,vf}function At(n,r){if(n<0)throw Kn.zb("Illegal index "+n+", "+r+" expects only non-negative indices")}function kd(n){var r=n;return cr.na(r)}var hf;function xd(){return hf===o&&new T0,hf}function cC(n,r){var e=(r-1|0)>>>6|0,t=r&63,a=Ca(e);return t!==0&&(a[Uk(a)]=ie(new b(-1,-1),r)),a}function vC(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.av_1[e]=qa(n.av_1[e],ie(new b(1,0),t))}function hC(n){var r=0,e=n.av_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var a=Qr(t+1|0,64),i=n.av_1[t];!ir(i,new b(-1,-1));){var s=bg(zc(i));i=qa(i,ie(new b(1,0),s));var l=a+s|0;if(n.yu_1(n.xu_1,l))return n.av_1[t]=i,l}n.av_1[t]=i}while(r<=e);return-1}function to(n,r){return new iu(n,new nv(r))}function dC(n,r){return n.ho(r)}function pC(n){return kC(n)}var il;function _C(){return il===o&&P0.hw(),il}function os(n){throw mr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var df;function gC(){return df===o&&new no,df}function mC(n){return r=>(r.bp_1=n.lw_1,fr)}function yC(n,r){return()=>{var e=fv();return ou(n,e,[],mC(r))}}function wC(){return Ke(n=>n.mn(),1,0,1)}function bC(){return cv(),xy}var xy;function kC(n){if(cv(),E(n,Xs))return n.vp();var r=Ia.b1(n.po()),e=0,t=n.po();if(e<t)do{var a=e;e=e+1|0;var i=n.ro(a);r.n(i)}while(e<t);return r}function pf(n){cv();var r;n==null||n.d1()?r=null:r=n;var e=r,t;e==null?t=null:t=ja(e);var a=t;return a??bC()}var Sd;function cv(){Sd||(Sd=!0,xy=[])}function Sy(n){var r=n.zv_1,e=Oa;return ji("childSerializers",1,e,SC(),null),r.l2()}function Ey(n){var r=n.bw_1,e=Oa;return ji("_hashCode",1,e,CC(),null),r.l2()}function xC(n){return()=>{var r=n.rv_1,e=r==null?null:r.ew();return e??Cy()}}function SC(){return Ke(n=>Sy(n),1,0,2)}function EC(n){return()=>{var r=n.rv_1,e=r==null?null:r.fw(),t;if(e==null)t=null;else{for(var a=A.f1(e.length),i=0,s=e.length;i<s;){var l=e[i];i=i+1|0;var u=l.mn();a.n(u)}t=a}return pf(t)}}function zC(){return Ke(n=>n.cw(),1,0,3)}function IC(n){return()=>zy(n,n.cw())}function CC(){return Ke(n=>Ey(n),1,0,4)}function zy(n,r){var e=pe(n.lo());e=Qr(31,e)+n2(r)|0;for(var t=GI(n),a=1,i=t.x();i.y();){var s=i.z(),l=a,u=Qr(31,l),f=s.lo(),c=f==null?null:wr(f);a=u+(c??0)|0}for(var v=a,h=1,d=t.x();d.y();){var p=d.z(),g=h,y=Qr(31,g),x=p.mo(),k=x==null?null:wr(x);h=y+(k??0)|0}var S=h;return e=Qr(31,e)+v|0,e=Qr(31,e)+S|0,e}function Iy(n){var r=kc(0,n.po()),e=n.lo()+"(";return J(r,", ",e,")",o,o,qC(n))}function qC(n){return r=>n.ro(r)+": "+n.uo(r).lo()}function Cy(){return AC(),qy}var qy,Ed;function AC(){Ed||(Ed=!0,qy=[])}var sl;function TC(){return sl===o&&new U0,sl}var ol;function jC(){return ol===o&&new D0,ol}var ll;function OC(){return ll===o&&new R0,ll}var ul;function PC(){return ul===o&&new L0,ul}var fl;function BC(){return fl===o&&new M0,fl}var cl;function NC(){return cl===o&&new F0,cl}var vl;function UC(){return vl===o&&new $0,vl}var hl;function DC(){return hl===o&&new J0,hl}var dl;function RC(){return dl===o&&new H0,dl}var pl;function LC(){return pl===o&&new G0,pl}var _l;function MC(){return _l===o&&new K0,_l}var gl;function FC(){return gl===o&&new W0,gl}function $C(){return vv(),Ay}var Ay,_f;function JC(){return _f===o&&new Y0,_f}function ls(n){throw mr.o3("Primitive descriptor "+n.u12_1+" does not have elements")}var gf;function HC(){return gf===o&&new Z0,gf}var mf;function GC(){return mf===o&&new V0,mf}var yf;function KC(){return yf===o&&new X0,yf}var wf;function WC(){return wf===o&&new Q0,wf}var bf;function YC(){return bf===o&&new ry,bf}var kf;function ZC(){return kf===o&&new ny,kf}var xf;function VC(){return xf===o&&new ey,xf}var Sf;function XC(){return Sf===o&&new ty,Sf}var Ef;function QC(){return Ef===o&&new ay,Ef}function r6(n,r){return vv(),n6(n),new In(n,r)}function n6(n){vv();for(var r=$C().q2(),e=r.x();e.y();){var t=e.z(),a=t.mn().lo();if(n===a)throw T.v(dE(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Dr(t).uc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var zd;function vv(){zd||(zd=!0,Ay=c6())}function e6(n,r,e){n.m14(r);var t=e();return n.w13_1||n.n14(),n.w13_1=!1,t}function t6(n,r,e){return()=>n.jq(r,e)}var zf;function a6(){return zf===o&&new sy,zf}var If;function i6(){return If===o&&new oy,If}var Cf;function s6(){return Cf===o&&new ly,Cf}var qf;function o6(){return qf===o&&new uy,qf}function l6(){return u6(),Ty}var Ty,Id;function u6(){Id||(Id=!0,Ty=new cy(Ar(),Ar(),Ar(),Ar(),Ar(),!1))}function fu(){return l6()}function f6(n){return r=>n}function _i(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Kn.zb("Index "+r+" out of bounds "+Ik(n).toString());return n[r]}function jy(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Kn.zb("Index "+r+" out of bounds "+Rk(n).toString());return n[r]}function c6(){return Gs([O(Ir().od(),Os()),O(Ur(qn),py(Ec())),O(Ir().rd(),CI()),O(Ir().md(),_y()),O(Ir().yd(),qI()),O(Ir().ld(),gy()),O(Ir().xd(),AI()),O(Ir().kd(),ov(Rl())),O(Ir().wd(),TI()),O(Ur(le),su(Zs())),O(Ur(ya),jI()),O(Ir().jd(),sv()),O(Ir().ud(),OI()),O(Ur(oe),tv(Xl())),O(Ur(ma),PI()),O(Ir().id(),uv()),O(Ir().td(),BI()),O(Ur(Je),iv(Ql())),O(Ur(wa),NI()),O(Ir().hd(),lv()),O(Ir().sd(),UI()),O(Ur($e),av(Vl())),O(Ur(ga),DI()),O(Ir().gd(),my()),O(Ir().qd(),RI()),O(Ur(Ol),LI()),O(Ir().fd(),MI()),O(Ur(ze),FI(Wr())),O(Ur(st),$I(Ot())),O(Ur(Pt),JI(Ys()))])}Lr(ru,"SerializationStrategy");Lr(pi,"DeserializationStrategy");Lr(hr,"KSerializer",o,o,[ru,pi]);_(Yn,"SerializationException",Yn.wn);_(nu,"MissingFieldException");Lr(ye,"SerialDescriptor");_(Vm,"ContextDescriptor",o,o,[ye]);_(Xm);_(Qm);_(r0,"ClassSerialDescriptorBuilder");Lr(Xs,"CachedNames");Rr(Li).no=Na;Rr(Li).oo=Ua;_(Li,"SerialDescriptorImpl",o,o,[ye,Xs]);_(Mi,"SerialKind");U(eu,"ENUM");U(n0,"CONTEXTUAL");_(Qs,"StructureKind");U(e0,"CLASS");U(t0,"LIST");U(a0,"MAP");U(i0,"OBJECT");_(Vn,"PrimitiveKind");U(s0,"BOOLEAN");U(o0,"BYTE");U(l0,"CHAR");U(u0,"SHORT");U(f0,"INT");U(c0,"LONG");U(v0,"FLOAT");U(h0,"DOUBLE");U(d0,"STRING");_(Fi,"PolymorphicKind");U(p0,"SEALED");Lr(tu,"Decoder");Lr(au,"CompositeDecoder");Rr(Da).xq=y0;Rr(Da).kq=_0;Rr(Da).zq=g0;Rr(Da).br=m0;_(Da,"AbstractDecoder",o,o,[tu,au]);Lr(Xc,"Encoder");Rr(ro).bs=kI;Rr(ro).as=xI;_(ro,"AbstractEncoder",o,o,[Xc]);_(Ei,"AbstractPolymorphicSerializer",o,o,[hr]);U(w0,"NothingSerializer",o,o,[hr]);U(b0,"DurationSerializer",o,o,[hr]);U(k0,"InstantSerializer",o,o,[hr]);U(x0,"UuidSerializer",o,o,[hr]);Rr(Jt).no=Na;Rr(Jt).oo=Ua;Rr(Jt).qo=Vs;_(Jt,"ListLikeDescriptor",o,o,[ye]);_(S0,"ArrayListClassDesc");Rr(Ra).no=Na;Rr(Ra).oo=Ua;Rr(Ra).qo=Vs;_(Ra,"MapLikeDescriptor",o,o,[ye]);_(E0,"LinkedHashMapClassDesc");_(z0,"PrimitiveArrayDescriptor");_(Qc,"AbstractCollectionSerializer",o,o,[hr]);_(rv,"CollectionLikeSerializer");_(I0,"CollectionSerializer");_(C0,"ArrayListSerializer");_(q0,"MapLikeSerializer");_(A0,"LinkedHashMapSerializer");_(we,"PrimitiveArraySerializer");_(Fn,"PrimitiveArrayBuilder");nn(T0);_(j0,"ElementMarker");Rr($i).no=Na;Rr($i).oo=Ua;_($i,"PluginGeneratedSerialDescriptor",o,o,[ye,Xs]);_(iu,"InlineClassDescriptor");Lr(O0,"GeneratedSerializer",o,o,[hr]);Rr(nv).fw=SI;_(nv,o,o,o,[O0]);U(P0,"NoOpEncoder");Rr(no).no=Na;Rr(no).oo=Ua;Rr(no).qo=Vs;U(no,"NothingSerialDescriptor",o,o,[ye]);_(B0,"SerialDescriptorForNullable",o,o,[ye,Xs]);_(N0,"ObjectSerializer",o,o,[hr]);U(U0,"CharArraySerializer",o,o,[hr]);U(D0,"DoubleArraySerializer",o,o,[hr]);U(R0,"FloatArraySerializer",o,o,[hr]);U(L0,"LongArraySerializer",o,o,[hr]);U(M0,"ULongArraySerializer",o,o,[hr]);U(F0,"IntArraySerializer",o,o,[hr]);U($0,"UIntArraySerializer",o,o,[hr]);U(J0,"ShortArraySerializer",o,o,[hr]);U(H0,"UShortArraySerializer",o,o,[hr]);U(G0,"ByteArraySerializer",o,o,[hr]);U(K0,"UByteArraySerializer",o,o,[hr]);U(W0,"BooleanArraySerializer",o,o,[hr]);_(ra,"CharArrayBuilder");_(na,"DoubleArrayBuilder");_(ea,"FloatArrayBuilder");_(ta,"LongArrayBuilder");_(aa,"ULongArrayBuilder");_(ia,"IntArrayBuilder");_(sa,"UIntArrayBuilder");_(oa,"ShortArrayBuilder");_(la,"UShortArrayBuilder");_(ua,"ByteArrayBuilder");_(fa,"UByteArrayBuilder");_(ca,"BooleanArrayBuilder");U(Y0,"StringSerializer",o,o,[hr]);Rr(In).no=Na;Rr(In).oo=Ua;Rr(In).qo=Vs;_(In,"PrimitiveSerialDescriptor",o,o,[ye]);U(Z0,"IntSerializer",o,o,[hr]);U(V0,"LongSerializer",o,o,[hr]);U(X0,"ByteSerializer",o,o,[hr]);U(Q0,"ShortSerializer",o,o,[hr]);U(ry,"CharSerializer",o,o,[hr]);U(ny,"DoubleSerializer",o,o,[hr]);U(ey,"FloatSerializer",o,o,[hr]);U(ty,"BooleanSerializer",o,o,[hr]);U(ay,"UnitSerializer",o,o,[hr]);Rr(Ji).xq=y0;Rr(Ji).kq=_0;Rr(Ji).zq=g0;Rr(Ji).br=m0;_(Ji,"TaggedDecoder",o,o,[tu,au]);_(iy,"NamedValueDecoder");U(sy,"UIntSerializer",o,o,[hr]);U(oy,"ULongSerializer",o,o,[hr]);U(ly,"UByteSerializer",o,o,[hr]);U(uy,"UShortSerializer",o,o,[hr]);_(fy,"SerializersModule");_(cy,"SerialModuleImpl");_(ev,"ContextualProvider");_(vy,"Argless");_(hy,"WithTypeArguments");Lr(dy,"SerializersModuleCollector");_(zI,"SerializableWith",o,o,o,o,0);var ao=Math.imul;class hv{constructor(r,e){Ae(),this.q15_1=r,this.r15_1=e,this.s15_1=new jf}yq(){return this.r15_1}t15(r,e){var t=new Pf;try{return G6(this,t,r,e),t.toString()}finally{t.x15()}}u15(r,e){var t=Bv(this,e),a=new Ps(this,gu(),t,r.mn(),null),i=a.kq(r);return t.l16(),i}v15(r){return this.u15(dt(),r)}}class Oy extends hv{constructor(){ml=null,super(new dv,fu()),ml=this}}class Py{constructor(r){this.m16_1=r.q15_1.h17_1,this.n16_1=r.q15_1.m17_1,this.o16_1=r.q15_1.i17_1,this.p16_1=r.q15_1.j17_1,this.q16_1=r.q15_1.l17_1,this.r16_1=r.q15_1.n17_1,this.s16_1=r.q15_1.o17_1,this.t16_1=r.q15_1.q17_1,this.u16_1=r.q15_1.x17_1,this.v16_1=r.q15_1.s17_1,this.w16_1=r.q15_1.t17_1,this.x16_1=r.q15_1.u17_1,this.y16_1=r.q15_1.v17_1,this.z16_1=r.q15_1.w17_1,this.a17_1=r.q15_1.r17_1,this.b17_1=r.q15_1.k17_1,this.c17_1=r.q15_1.p17_1,this.d17_1=r.yq(),this.e17_1=r.q15_1.y17_1,this.f17_1=r.q15_1.z17_1}g17(){if(this.c17_1){if(this.t16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw T.v(w(r))}if(!this.u16_1.equals(cw())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw T.v(w(e))}}if(this.q16_1){if(this.r16_1!=="    "){var a=this.r16_1,i;r:{for(var s=0;s<q(a);){var l=rr(a,s);if(s=s+1|0,!(l===32||l===9||l===13||l===10)){i=!1;break r}}i=!0}var u=i;if(!u){var f="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.r16_1;throw T.v(w(f))}}}else if(this.r16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw T.v(w(t))}return new dv(this.m16_1,this.o16_1,this.p16_1,this.b17_1,this.q16_1,this.n16_1,this.r16_1,this.s16_1,this.c17_1,this.t16_1,this.a17_1,this.v16_1,this.w16_1,this.x16_1,this.y16_1,this.z16_1,this.u16_1,this.e17_1,this.f17_1)}}class By extends hv{constructor(r,e){super(r,e),p6(this)}}class Ny{}class Uy{}class Dy{}class dv{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g,y,x,k,S){r=r===o?!1:r,e=e===o?!1:e,t=t===o?!1:t,a=a===o?!1:a,i=i===o?!1:i,s=s===o?!0:s,l=l===o?"    ":l,u=u===o?!1:u,f=f===o?!1:f,c=c===o?"type":c,v=v===o?!1:v,h=h===o?!0:h,d=d===o?null:d,p=p===o?!1:p,g=g===o?!1:g,y=y===o?!1:y,x=x===o?cw():x,k=k===o?!0:k,S=S===o?400:S,this.h17_1=r,this.i17_1=e,this.j17_1=t,this.k17_1=a,this.l17_1=i,this.m17_1=s,this.n17_1=l,this.o17_1=u,this.p17_1=f,this.q17_1=c,this.r17_1=v,this.s17_1=h,this.t17_1=d,this.u17_1=p,this.v17_1=g,this.w17_1=y,this.x17_1=x,this.y17_1=k,this.z17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.h17_1+", ignoreUnknownKeys="+this.i17_1+", isLenient="+this.j17_1+", "+("allowStructuredMapKeys="+this.k17_1+", prettyPrint="+this.l17_1+", explicitNulls="+this.m17_1+", ")+("prettyPrintIndent='"+this.n17_1+"', coerceInputValues="+this.o17_1+", useArrayPolymorphism="+this.p17_1+", ")+("classDiscriminator='"+this.q17_1+"', allowSpecialFloatingPointValues="+this.r17_1+", ")+("useAlternativeNames="+this.s17_1+", namingStrategy="+ge(this.t17_1)+", decodeEnumsCaseInsensitive="+this.u17_1+", ")+("allowTrailingComma="+this.v17_1+", allowComments="+this.w17_1+", classDiscriminatorMode="+this.x17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.y17_1+", maxNestingDepth="+this.z17_1+")")}}class zo extends de{}class cu{}class Ry{c18(){return dt()}}class et{}class v6{}class vr extends et{toString(){return this.f18()}d18(r){r.fa(this.f18())}}class h6{}class dn extends et{constructor(r){super(),this.g18_1=r}equals(r){return D(this.g18_1,r)}hashCode(){return wr(this.g18_1)}toString(){var r=ao(this.g18_1.c1()+1|0,2),e=Yr.ja(r);return this.d18(e),e.toString()}d18(r){r.ga(91);for(var e=!0,t=this.g18_1.x();t.y();){var a=t.z();e||r.ga(44),e=!1,a.d18(r)}r.ga(93)}d1(){return this.g18_1.d1()}h18(r){return this.g18_1.l1(r)}l1(r){return r instanceof et?this.h18(r instanceof et?r:m()):!1}x(){return this.g18_1.x()}e1(r){return this.g18_1.e1(r)}i18(r){return this.g18_1.n1(r)}n1(r){return r instanceof et?this.i18(r instanceof et?r:m()):-1}m1(r){return this.g18_1.m1(r)}c1(){return this.g18_1.c1()}}class Ly{c18(){return hu()}}class er extends et{constructor(r){super(),this.j18_1=r}equals(r){return D(this.j18_1,r)}hashCode(){return wr(this.j18_1)}toString(){var r=ao(this.j18_1.c1(),6),e=Yr.ja(r);return this.d18(e),e.toString()}d18(r){r.ga(123);for(var e=!0,t=this.j18_1.r2().x();t.y();){var a=t.z(),i=a.k2(),s=a.l2();e||r.ga(44),e=!1,El(r,i),r.ga(58),s.d18(r)}r.ga(125)}d1(){return this.j18_1.d1()}k18(r){return this.j18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.k18(r!=null&&typeof r=="string"?r:m()):!1}pf(r){return this.j18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.pf(r!=null&&typeof r=="string"?r:m()):null}c1(){return this.j18_1.c1()}p2(){return this.j18_1.p2()}q2(){return this.j18_1.q2()}r2(){return this.j18_1.r2()}}class me extends vr{constructor(){yl=null,super(),yl=this,this.l18_1="null"}e18(){return!1}f18(){return this.l18_1}}class ht extends vr{constructor(r,e,t){if(t=t===o?null:t,super(),this.m18_1=e,this.n18_1=t,this.o18_1=w(r),this.n18_1!=null&&!this.n18_1.oo()){var a="Failed requirement.";throw T.v(w(a))}}e18(){return this.m18_1}f18(){return this.o18_1}toString(){var r;if(this.m18_1){var e=this.o18_1.length+2|0,t=Yr.ja(e);El(t,this.o18_1),r=t.toString()}else r=this.o18_1;return r}d18(r){this.m18_1?El(r,this.o18_1):r.fa(this.o18_1)}equals(r){return this===r?!0:!(r==null||!Dr(this).equals(Dr(r))||(r instanceof ht||m(),this.m18_1!==r.m18_1)||this.o18_1!==r.o18_1)}hashCode(){var r=qc(this.m18_1);return r=ao(31,r)+pe(this.o18_1)|0,r}}class Tt{constructor(){var r=this;r.q18_1=cr.t4()}r18(r,e){return this.q18_1.s2(r,e)}g17(){return new er(this.q18_1)}}class My{constructor(){var r=this;r.s18_1=A.m()}t18(r){return this.s18_1.n(r),!0}g17(){return new dn(this.s18_1)}}class Fy{constructor(){Nf=this;var r=this,e=iC();r.z18_1=ou("kotlinx.serialization.json.JsonElement",e,[],k6)}mn(){return this.z18_1}a19(r,e){Ki(r),e instanceof vr?r.as(Ev(),e):e instanceof er?r.as(hu(),e):e instanceof dn?r.as(zv(),e):Ms()}nn(r,e){return this.a19(r,e instanceof et?e:m())}on(r){var e=du(r);return e.b18()}}class $y{constructor(){Uf=this,this.u18_1=ou("kotlinx.serialization.json.JsonPrimitive",Hi(),[])}mn(){return this.u18_1}b19(r,e){Ki(r);var t;if(e instanceof me)r.as(Iv(),lo()),t=fr;else{var a=hw();r.as(a,e instanceof ht?e:m()),t=fr}return t}nn(r,e){return this.b19(r,e instanceof vr?e:m())}on(r){var e=du(r),t=e.b18();if(!(t instanceof vr)){var a="Unexpected JSON element, expected JsonPrimitive, had "+w(Dr(t)),i;if(e.a18().q15_1.y17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class Jy{constructor(){Df=this,this.p19_1=of(dt()).mn(),this.q19_1="kotlinx.serialization.json.JsonArray"}lo(){return this.q19_1}ro(r){return this.p19_1.ro(r)}so(r){return this.p19_1.so(r)}to(r){return this.p19_1.to(r)}uo(r){return this.p19_1.uo(r)}vo(r){return this.p19_1.vo(r)}mo(){return this.p19_1.mo()}no(){return this.p19_1.no()}oo(){return this.p19_1.oo()}po(){return this.p19_1.po()}qo(){return this.p19_1.qo()}}class Hy{constructor(){Rf=this,this.y18_1=C6()}mn(){return this.y18_1}r19(r,e){Ki(r),of(dt()).nn(r,e)}nn(r,e){return this.r19(r,e instanceof dn?e:m())}on(r){return Cv(r),new dn(of(dt()).on(r))}}class Gy{constructor(){Lf=this,this.s19_1=lf(Os(),dt()).mn(),this.t19_1="kotlinx.serialization.json.JsonObject"}lo(){return this.t19_1}ro(r){return this.s19_1.ro(r)}so(r){return this.s19_1.so(r)}to(r){return this.s19_1.to(r)}uo(r){return this.s19_1.uo(r)}vo(r){return this.s19_1.vo(r)}mo(){return this.s19_1.mo()}no(){return this.s19_1.no()}oo(){return this.s19_1.oo()}po(){return this.s19_1.po()}qo(){return this.s19_1.qo()}}class Ky{constructor(){Mf=this,this.x18_1=q6()}mn(){return this.x18_1}u19(r,e){Ki(r),lf(Os(),dt()).nn(r,e)}nn(r,e){return this.u19(r,e instanceof er?e:m())}on(r){return Cv(r),new er(lf(Os(),dt()).on(r))}}class Wy{constructor(){Ff=this,this.v18_1=ou("kotlinx.serialization.json.JsonNull",La(),[])}mn(){return this.v18_1}v19(r,e){Ki(r),r.fr()}nn(r,e){return this.v19(r,e instanceof me?e:m())}on(r){if(Cv(r),r.xp())throw qv("Expected 'null' literal");return r.yp(),lo()}}class Yy{constructor(){$f=this,this.w18_1=YI("kotlinx.serialization.json.JsonLiteral",Hi())}mn(){return this.w18_1}w19(r,e){if(Ki(r),e.m18_1)return r.or(e.o18_1);if(e.n18_1!=null)return r.pr(e.n18_1).or(e.o18_1);var t=wE(e.o18_1);if(t!=null)return r.kr(t);var a=Zm(e.o18_1),i=a;if((i==null?null:new le(i))!=null){var s=a,l=(s==null?null:new le(s)).um_1,u=r.pr(su(Zs()).mn()),f=l;return u.kr(f),fr}var c=Dc(e.o18_1);if(c!=null)return r.mr(c);var v=TE(e.o18_1);if(v!=null)return r.gr(v);r.or(e.o18_1)}nn(r,e){return this.w19(r,e instanceof ht?e:m())}on(r){var e=du(r),t=e.b18();if(!(t instanceof ht)){var a="Unexpected JSON element, expected JsonLiteral, had "+w(Dr(t)),i;if(e.a18().q15_1.y17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class io{constructor(r){this.x19_1=Dg(r)}lo(){return Ve(this).lo()}mo(){return Ve(this).mo()}po(){return Ve(this).po()}ro(r){return Ve(this).ro(r)}so(r){return Ve(this).so(r)}to(r){return Ve(this).to(r)}uo(r){return Ve(this).uo(r)}vo(r){return Ve(this).vo(r)}}class pv{}class _v extends Yn{static e1a(r){var e=this.xn(r);return vn(e,e.d1a_1),e.c1a_1=r,delete e.message,e}ob(){return this.c1a_1}get message(){return this.ob()}}class Nr extends _v{constructor(r,e,t,a,i,s){return new.target.o19(r,e,t,a,i,s)}static o19(r,e,t,a,i,s){var l=this.e1a(r);return vn(l,l.n19_1),l.i19_1=e,l.j19_1=t,l.k19_1=a,l.l19_1=i,l.m19_1=s,l}}class so extends _v{constructor(r,e,t){return new.target.p1a(r,e,t)}static p1a(r,e,t){e=e===o?null:e,t=t===o?null:t;var a=this.e1a(N6(r,t));return vn(a,a.o1a_1),a.l1a_1=r,a.m1a_1=e,a.n1a_1=t,a}}class oo{constructor(r){this.q1a_1=r,this.r1a_1=!0}s1a(){this.r1a_1=!0}t1a(){return fr}u1a(){this.r1a_1=!1}v1a(){this.r1a_1=!1}w1a(){return fr}x1a(r){return this.q1a_1.y1a(r)}z1a(r){return this.q1a_1.a1b(r)}b1b(r){return this.q1a_1.a1b(r.toString())}c1b(r){return this.q1a_1.a1b(r.toString())}d1b(r){return this.q1a_1.e1b(M(r))}f1b(r){return this.q1a_1.e1b(M(r))}g1b(r){return this.q1a_1.e1b(M(r))}h1b(r){return this.q1a_1.e1b(r)}i1b(r){return this.q1a_1.a1b(r.toString())}j1b(r){return this.q1a_1.k1b(r)}}class Af extends oo{constructor(r,e){super(r),this.n1b_1=e}g1b(r){if(this.n1b_1){var e=r;this.j1b(rf(e))}else{var t=r;this.z1a(rf(t))}}h1b(r){if(this.n1b_1){var e=r;this.j1b(ef(e))}else{var t=r;this.z1a(ef(t))}}d1b(r){if(this.n1b_1){var e=r;this.j1b(X1(e))}else{var t=r;this.z1a(X1(t))}}f1b(r){if(this.n1b_1){var e=r;this.j1b(af(e))}else{var t=r;this.z1a(af(t))}}}class Tf extends oo{constructor(r,e){super(r),this.q1b_1=e}j1b(r){this.q1b_1?super.j1b(r):super.z1a(r)}}class Zy extends oo{constructor(r,e){super(r),this.t1b_1=e,this.u1b_1=0}s1a(){this.r1a_1=!0,this.u1b_1=this.u1b_1+1|0}t1a(){this.u1b_1=this.u1b_1-1|0}u1a(){this.r1a_1=!1,this.z1a(`
`);var r=this.u1b_1,e=0;if(e<r)do e=e+1|0,this.z1a(this.t1b_1.q15_1.n17_1);while(e<r)}v1a(){this.r1a_1?this.r1a_1=!1:this.u1a()}w1a(){this.x1a(32)}}class gv{constructor(r){var e=this;e.v1b_1=new j0(r,P6(this)),this.w1b_1=!1}x1b(r){this.v1b_1.bv(r)}y1b(){return this.v1b_1.cv()}}class Vy{}class Xy{}class Qy{constructor(r){this.f1c_1=r.z17_1,this.g1c_1=r.y17_1;var e=this;e.h1c_1=Array(8);for(var t=this,a=0,i=new Int32Array(8);a<8;)i[a]=-1,a=a+1|0;t.i1c_1=i,this.j1c_1=-1}k1c(r){this.j1c_1=this.j1c_1+1|0;var e=this.j1c_1;e>=this.f1c_1&&Bs(this.f1c_1),e===this.h1c_1.length&&Bd(this),this.h1c_1[e]=r}l1c(r){this.i1c_1[this.j1c_1]=r}m1c(r){var e;this.i1c_1[this.j1c_1]!==-2?(this.j1c_1=this.j1c_1+1|0,e=this.j1c_1===this.h1c_1.length):e=!1,e&&Bd(this),this.h1c_1[this.j1c_1]=this.g1c_1?r:Hf,this.i1c_1[this.j1c_1]=-2}n1c(){this.i1c_1[this.j1c_1]===-2&&(this.h1c_1[this.j1c_1]=Jf)}o1c(){var r=this.j1c_1;this.i1c_1[r]===-2&&(this.i1c_1[r]=-1,this.j1c_1=this.j1c_1-1|0),this.j1c_1!==-1&&(this.j1c_1=this.j1c_1-1|0)}p1c(){var r=Yr.f();r.fa("$");var e=this.j1c_1+1|0,t=0;if(t<e)do{var a=t;t=t+1|0;var i=this.h1c_1[a];if(i!=null&&E(i,ye))if(D(i.mo(),eo()))this.i1c_1[a]!==-1&&(r.fa("["),r.ge(this.i1c_1[a]),r.fa("]"));else{var s=this.i1c_1[a];s>=0&&(r.fa("."),r.fa(i.ro(s)))}else i===Hf?r.fa("[<debug info disabled>]"):i!==Jf&&(r.fa("["),r.fa("'"),r.ea(i),r.fa("'"),r.fa("]"))}while(t<e);return r.toString()}toString(){return this.p1c()}}class mv{constructor(r){this.q1c_1=r.p17_1,this.r1c_1=!r.x17_1.equals(fw())}k15(r,e){}n15(r,e,t){var a=t.mn();H6(this,a,e)}o15(r,e){}p15(r,e){}}class rw{constructor(r,e){this.c1d_1=e,this.d1d_1=r.j17_1,this.e1d_1=r.v17_1,this.f1d_1=r.z17_1,this.g1d_1=this.c1d_1.i16_1.j1c_1}m1d(){var r=this.c1d_1.i1d(),e;if(r===1)e=bl(this,!0);else if(r===0)e=bl(this,!1);else if(r===6){this.g1d_1=this.g1d_1+1|0,this.g1d_1>=this.f1d_1&&Bs(this.f1d_1);var t;this.g1d_1===200?(this.g1d_1=this.g1d_1-1|0,t=Y6(this)):(t=K6(this),this.g1d_1=this.g1d_1-1|0),e=t}else if(r===8){this.g1d_1=this.g1d_1+1|0,this.g1d_1>=this.f1d_1&&Bs(this.f1d_1);var a=yw(this);this.g1d_1=this.g1d_1-1|0,e=a}else this.c1d_1.a1c("Cannot read Json element because of unexpected "+zl(r));return e}}class fs extends de{constructor(r,e,t,a){super(r,e),this.q1d_1=t,this.r1d_1=a}}class zi{}class jf{constructor(){this.b1c_1=Md(16)}t1d(r,e,t){var a=this.b1c_1,i=a.o2(r),s;if(i==null){var l=Md(2);a.s2(r,l),s=l}else s=i;var u=s,f=e instanceof zi?e:m(),c=t??m();u.s2(f,c)}c1c(r,e,t){var a=this.u1d(r,e);if(a!=null)return a;var i=t();return this.t1d(r,e,i),i}u1d(r,e){var t=this.b1c_1.o2(r),a;t==null?a=null:a=t.o2(e instanceof zi?e:m());var i=a;return i??null}}class nw{constructor(r){this.v1d_1=r}}class Ps extends Da{constructor(r,e,t,a,i){super(),this.y15_1=r,this.z15_1=e,this.a16_1=t,this.b16_1=this.y15_1.yq(),this.c16_1=-1,this.d16_1=i,this.e16_1=this.y15_1.q15_1,this.f16_1=this.e16_1.m17_1?null:new gv(a)}a18(){return this.y15_1}yq(){return this.b16_1}b18(){return new rw(this.y15_1.q15_1,this.a16_1).m1d()}kq(r){try{var e;if(r instanceof Ei?e=this.y15_1.q15_1.p17_1:e=!0,e)return r.on(this);var t=Sl(r.mn(),this.y15_1),a=this.a16_1.e1e(t,this.e16_1.j17_1),i;if(a==null){var s=E(r,pi)?r:m(),l;r:{var u;if(s instanceof Ei?u=this.a18().q15_1.p17_1:u=!0,u){l=s.on(this);break r}var f=Sl(s.mn(),this.a18()),c=this.b18(),v=s.mn().lo();if(!(c instanceof er)){var h="Expected "+Ur(er).uc()+", but had "+Dr(c).uc()+" as the serialized body of "+v,d=this.a16_1.i16_1.p1c(),p;if(this.a18().q15_1.y17_1){var g=w(c);p=w(Jr(g))}else p=null;var y=p;throw Nr.o19(Kr(-1,h,d,null,y),h,-1,d,y,null)}var x=c,k=x.pf(f),S=k==null?null:On(k),z=S==null?null:Un(S),I;try{I=sf(s,this,z)}catch(X){var C;if(X instanceof Yn){var j=X,P=fn(j.message),F;if(this.a18().q15_1.y17_1){var B=x.toString();F=w(Jr(B))}else F=null;var N=F;throw Nr.o19(Kr(-1,P,null,null,N),P,-1,null,N,null)}else throw X}var H=I,L=E(H,pi)?H:m();l=Cw(this.a18(),f,x,L)}return l}else i=a;var $=i,R;try{R=sf(r,this,$)}catch(X){var V;if(X instanceof Yn){var K=X,nr=da(pm(fn(K.message),10),"."),W=jE(fn(K.message),10,"");this.a16_1.a1c(nr,o,W)}else throw X;R=V}var tr=R,Q=E(tr,pi)?tr:m();return this.d16_1=new nw(t),Q.on(this)}catch(X){if(X instanceof nu){var lr=X;throw js(fn(lr.message),"at path")?lr:dC(lr,kx(lr.message," at path: ")+this.a16_1.i16_1.p1c())}else throw X}}lq(r){var e=Sw(this.y15_1,r);this.a16_1.i16_1.k1c(r),this.a16_1.w1d(e.q1d_1),aq(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new Ps(this.y15_1,e,this.a16_1,r,this.d16_1);break;default:var a;this.z15_1.equals(e)&&this.y15_1.q15_1.m17_1?a=this:a=new Ps(this.y15_1,e,this.a16_1,r,this.d16_1),t=a;break}return t}mq(r){r.po()===0&&jv(r,this.y15_1)&&tq(this,r),this.a16_1.x1d()&&!this.y15_1.q15_1.v17_1&&Ma(this.a16_1,""),this.a16_1.w1d(this.z15_1.r1d_1),this.a16_1.i16_1.o1c()}xp(){var r,e=this.f16_1,t=e==null?null:e.w1b_1;return t??!1?r=!1:r=!this.a16_1.f1e(),r}yp(){return null}wq(r,e,t,a){var i=this.z15_1.equals(xl())&&(e&1)===0;i&&this.a16_1.i16_1.n1c();var s=super.wq(r,e,t,a);return i&&this.a16_1.i16_1.m1c(s),s}ar(r){var e;switch(this.z15_1.x2_1){case 0:e=oq(this,r);break;case 2:e=iq(this);break;default:e=uq(this);break}return this.z15_1.equals(xl())||this.a16_1.i16_1.l1c(e),e}zp(){return this.a16_1.g1e()}aq(){var r=this.a16_1.h1e();return ir(r,M(k1(r)))||this.a16_1.a1c("Failed to parse byte for input '"+r.toString()+"'"),k1(r)}bq(){var r=this.a16_1.h1e();return ir(r,M(x1(r)))||this.a16_1.a1c("Failed to parse short for input '"+r.toString()+"'"),x1(r)}cq(){var r=this.a16_1.h1e();return ir(r,M(rn(r)))||this.a16_1.a1c("Failed to parse int for input '"+r.toString()+"'"),rn(r)}dq(){return this.a16_1.h1e()}eq(){var r=this.a16_1,e;r:{var t=r.l1d();try{e=Do(t);break r}catch(s){if(s instanceof T)r.a1c("Failed to parse type 'float' for input '"+t+"'");else throw s}}var a=e,i=this.y15_1.q15_1.r17_1;if(i||Pc(a))return a;Ad(this.a16_1,a)}fq(){var r=this.a16_1,e;r:{var t=r.l1d();try{e=Do(t);break r}catch(s){if(s instanceof T)r.a1c("Failed to parse type 'double' for input '"+t+"'");else throw s}}var a=e,i=this.y15_1.q15_1.r17_1;if(i||Bc(a))return a;Ad(this.a16_1,a)}gq(){var r=this.a16_1.l1d();return r.length!==1&&this.a16_1.a1c("Expected single char, but got '"+r+"'"),G(r,0)}hq(){var r;return this.e16_1.j17_1?r=this.a16_1.d1e():r=this.a16_1.k1d(),r}iq(r){return Ov(r)?new yv(this.a16_1,this.y15_1):super.iq(r)}}class yv extends Da{constructor(r,e){super(),this.i1e_1=r,this.j1e_1=e.yq()}yq(){return this.j1e_1}ar(r){var e="unsupported";throw mr.o3(w(e))}cq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=vI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UInt' for input '"+t+"'");else throw i}}return e}dq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=hI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'ULong' for input '"+t+"'");else throw i}}return e}aq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=dI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UByte' for input '"+t+"'");else throw i}}return e}bq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=pI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UShort' for input '"+t+"'");else throw i}}return e}}class gi extends ro{constructor(r,e,t,a){return new.target.k1e(r,e,t,a)}static k1e(r,e,t,a){var i=this.cr();i.s1c_1=r,i.t1c_1=e,i.u1c_1=t,i.v1c_1=a,i.w1c_1=i.t1c_1.yq(),i.x1c_1=i.t1c_1.q15_1,i.y1c_1=!1,i.z1c_1=null,i.a1d_1=null;var s=i.u1c_1.x2_1;return i.v1c_1!=null&&(i.v1c_1[s]!==null||i.v1c_1[s]!==i)&&(i.v1c_1[s]=i),i}a18(){return this.t1c_1}static b1d(r,e,t,a){return this.k1e(j6(r,e),e,t,a)}yq(){return this.w1c_1}as(r,e){r:{if(this.a18().q15_1.p17_1){r.nn(this,e);break r}var t=r instanceof Ei,a;if(t)a=!this.a18().q15_1.x17_1.equals(fw());else{var i;switch(this.a18().q15_1.x17_1.x2_1){case 0:case 2:i=!1;break;case 1:var s=r.mn().mo();i=D(s,lu())||D(s,fv());break;default:Ms();break}a=i}var l=a,u=l?Sl(r.mn(),this.a18()):null,f;if(t){var c=r instanceof Ei?r:m();n:if(e==null){var v="Value for serializer "+w(r.mn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw T.v(w(v))}else break n;var h=II(c,this,e);f=E(h,ru)?h:m()}else f=r;var d=f;if(u!=null){Q6(this.a18(),r,d,u),rq(d.mn().mo());var p=d.mn().lo();this.z1c_1=u,this.a1d_1=p}d.nn(this,e)}}lq(r){var e=Sw(this.t1c_1,r);e.q1d_1!==0&&(this.s1c_1.x1a(e.q1d_1),this.s1c_1.s1a());var t=this.z1c_1;if(t!=null){var a=this.a1d_1;vq(this,t,a??r.lo()),this.z1c_1=null,this.a1d_1=null}if(this.u1c_1.equals(e))return this;var i=this.v1c_1,s=i==null?null:i[e.x2_1];return s??gi.k1e(this.s1c_1,this.t1c_1,e,this.v1c_1)}mq(r){this.u1c_1.r1d_1!==0&&(this.s1c_1.t1a(),this.s1c_1.v1a(),this.s1c_1.x1a(this.u1c_1.r1d_1))}dr(r,e){switch(this.u1c_1.x2_1){case 1:this.s1c_1.r1a_1||this.s1c_1.x1a(44),this.s1c_1.u1a();break;case 2:if(this.s1c_1.r1a_1)this.y1c_1=!0,this.s1c_1.u1a();else{var t=this,a;e%2|0?(this.s1c_1.x1a(58),this.s1c_1.w1a(),a=!1):(this.s1c_1.x1a(44),this.s1c_1.u1a(),a=!0),t.y1c_1=a}break;case 3:e===0&&(this.y1c_1=!0),e===1&&(this.s1c_1.x1a(44),this.s1c_1.w1a(),this.y1c_1=!1);break;default:this.s1c_1.r1a_1||this.s1c_1.x1a(44),this.s1c_1.u1a(),this.or(R6(r,this.t1c_1,e)),this.s1c_1.x1a(58),this.s1c_1.w1a();break}return!0}pr(r){var e;if(Ov(r)){var t,a=this.s1c_1;if(a instanceof Af)t=this.s1c_1;else{var i=this.s1c_1.q1a_1,s=this.y1c_1;t=new Af(i,s)}var l=t;e=gi.k1e(l,this.t1c_1,this.u1c_1,null)}else if(hq(r)){var u,f=this.s1c_1;if(f instanceof Tf)u=this.s1c_1;else{var c=this.s1c_1.q1a_1,v=this.y1c_1;u=new Tf(c,v)}var h=u;e=gi.k1e(h,this.t1c_1,this.u1c_1,null)}else this.z1c_1!=null?(this.a1d_1=r.lo(),e=this):e=super.pr(r);return e}fr(){this.s1c_1.z1a("null")}gr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.i1b(r)}hr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.d1b(r)}ir(r){this.y1c_1?this.or(r.toString()):this.s1c_1.f1b(r)}jr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.g1b(r)}kr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.h1b(r)}lr(r){if(this.y1c_1?this.or(r.toString()):this.s1c_1.b1b(r),!this.x1c_1.r17_1&&!Pc(r))throw Td(r)}mr(r){if(this.y1c_1?this.or(r.toString()):this.s1c_1.c1b(r),!this.x1c_1.r17_1&&!Bc(r))throw Td(r)}nr(r){this.or(kr(r))}or(r){return this.s1c_1.j1b(r)}}class vu extends iy{constructor(r,e,t){t=t===o?null:t,super(),this.n1e_1=r,this.o1e_1=e,this.p1e_1=t,this.q1e_1=this.a18().q15_1}a18(){return this.n1e_1}l2(){return this.o1e_1}yq(){return this.a18().yq()}s1e(){var r=this.x13(),e;r==null?e=null:e=this.t1e(r);var t=e;return t??this.l2()}r1e(r){return this.z13()+("."+r)}b18(){return this.s1e()}kq(r){var e;r:{var t;if(r instanceof Ei?t=this.a18().q15_1.p17_1:t=!0,t){e=r.on(this);break r}var a=Sl(r.mn(),this.a18()),i=this.b18(),s=r.mn().lo();if(!(i instanceof er)){var l="Expected "+Ur(er).uc()+", but had "+Dr(i).uc()+" as the serialized body of "+s,u=this.z13(),f;if(this.a18().q15_1.y17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Nr.o19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=i,d=h.pf(a),p=d==null?null:On(d),g=p==null?null:Un(p),y;try{y=sf(r,this,g)}catch(P){if(P instanceof Yn){var x=P,k=fn(x.message),S;if(this.a18().q15_1.y17_1){var z=h.toString();S=w(Jr(z))}else S=null;var I=S;throw Nr.o19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw P}var C=y,j=E(C,pi)?C:m();e=Cw(this.a18(),a,h,j)}return e}y13(r,e){return e}lq(r){var e=this.s1e(),t=r.mo(),a,i;if(D(t,eo())?i=!0:i=t instanceof Fi,i){var s=this.a18(),l=r.lo();if(!(e instanceof dn)){var u="Expected "+Ur(dn).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+l,f=this.z13(),c;if(this.a18().q15_1.y17_1){var v=w(e);c=w(Jr(v))}else c=null;var h=c;throw Nr.o19(Kr(-1,u,f,null,h),u,-1,f,h,null)}a=new Of(s,e)}else if(D(t,uu())){var d=this.a18(),p=kl(r.uo(0),d.yq()),g=p.mo(),y,x;if(g instanceof Vn?x=!0:x=D(g,La()),x){var k=this.a18(),S=r.lo();if(!(e instanceof er)){var z="Expected "+Ur(er).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+S,I=this.z13(),C;if(this.a18().q15_1.y17_1){var j=w(e);C=w(Jr(j))}else C=null;var P=C;throw Nr.o19(Kr(-1,z,I,null,P),z,-1,I,P,null)}y=new tw(k,e,r)}else if(d.q15_1.k17_1){var F=this.a18(),B=r.lo();if(!(e instanceof dn)){var N="Expected "+Ur(dn).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+B,H=this.z13(),L;if(this.a18().q15_1.y17_1){var $=w(e);L=w(Jr($))}else L=null;var R=L;throw Nr.o19(Kr(-1,N,H,null,R),N,-1,H,R,null)}y=new Of(F,e)}else throw dw(p);a=y}else{var V=this.a18(),K=r.lo();if(!(e instanceof er)){var nr="Expected "+Ur(er).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+K,W=this.z13(),tr;if(this.a18().q15_1.y17_1){var Q=w(e);tr=w(Jr(Q))}else tr=null;var lr=tr;throw Nr.o19(Kr(-1,nr,W,null,lr),nr,-1,W,lr,null)}a=new Gi(V,e,r,this.p1e_1)}return a}mq(r){}xp(){var r=this.s1e();return!(r instanceof me)}u1e(r){return this.t1e(r)!==lo()}b14(r){return this.u1e(r!=null&&typeof r=="string"?r:m())}v1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of boolean",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=xv(f),v;c==null?Nn(this,f,"boolean",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"boolean",r);else throw h}}return e}c14(r){return this.v1e(r!=null&&typeof r=="string"?r:m())}w1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of byte",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=Fe(-128,127);yo(E(h,fi)?h:m(),c)?v=k1(c):v=null;var d=v,p;d==null?Nn(this,f,"byte",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"byte",r);else throw g}}return e}d14(r){return this.w1e(r!=null&&typeof r=="string"?r:m())}x1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of short",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=Fe(-32768,32767);yo(E(h,fi)?h:m(),c)?v=x1(c):v=null;var d=v,p;d==null?Nn(this,f,"short",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"short",r);else throw g}}return e}e14(r){return this.x1e(r!=null&&typeof r=="string"?r:m())}y1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of int",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=Fe(-2147483648,2147483647);yo(E(h,fi)?h:m(),c)?v=rn(c):v=null;var d=v,p;d==null?Nn(this,f,"int",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"int",r);else throw g}}return e}f14(r){return this.y1e(r!=null&&typeof r=="string"?r:m())}z1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of long",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v;c==null?Nn(this,f,"long",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"long",r);else throw h}}return e}g14(r){return this.z1e(r!=null&&typeof r=="string"?r:m())}a1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of float",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=w6(f),v;c==null?Nn(this,f,"float",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"float",r);else throw S}}var h=e,d=this.a18().q15_1.r17_1;if(d||Pc(h))return h;var p=jd(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.a18().q15_1.y17_1){var x=w(this.s1e());y=w(Jr(x))}else y=null;var k=y;throw Nr.o19(Kr(-1,p,null,g,k),p,-1,null,k,g)}h14(r){return this.a1f(r!=null&&typeof r=="string"?r:m())}b1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of double",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=b6(f),v;c==null?Nn(this,f,"double",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"double",r);else throw S}}var h=e,d=this.a18().q15_1.r17_1;if(d||Bc(h))return h;var p=jd(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.a18().q15_1.y17_1){var x=w(this.s1e());y=w(Jr(x))}else y=null;var k=y;throw Nr.o19(Kr(-1,p,null,g,k),p,-1,null,k,g)}i14(r){return this.b1f(r!=null&&typeof r=="string"?r:m())}c1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of char",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=new qn(_x(f.f18())),v;c==null?Nn(this,f,"char",r):v=c,e=v.x1_1;break r}catch(h){if(h instanceof T)Nn(this,f,"char",r);else throw h}}return e}j14(r){return this.c1f(r!=null&&typeof r=="string"?r:m())}d1f(r){var e=this.t1e(r);if(!(e instanceof vr)){var t="Expected "+Ur(vr).uc()+", but had "+Dr(e).uc()+" as the serialized body of string",a=this.r1e(r),i;if(this.a18().q15_1.y17_1){var s=w(e);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,t,a,null,l),t,-1,a,l,null)}var u=e;if(!(u instanceof ht)){var f="Expected string value for a non-null key '"+r+"', got null literal instead",c=this.r1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.a18().q15_1.y17_1){var d=w(this.s1e());h=w(Jr(d))}else h=null;var p=h;throw Nr.o19(Kr(-1,f,c,v,p),f,-1,c,p,v)}if(!u.m18_1&&!this.a18().q15_1.j17_1){var g="String literal for value of key '"+r+"' should be quoted",y=this.r1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.a18().q15_1.y17_1){var S=w(this.s1e());k=w(Jr(S))}else k=null;var z=k;throw Nr.o19(Kr(-1,g,y,x,z),g,-1,y,z,x)}return u.o18_1}k14(r){return this.d1f(r!=null&&typeof r=="string"?r:m())}e1f(r,e){var t;if(Ov(e)){var a=this.a18(),i=this.t1e(r),s=e.lo();if(!(i instanceof vr)){var l="Expected "+Ur(vr).uc()+", but had "+Dr(i).uc()+" as the serialized body of "+s,u=this.r1e(r),f;if(this.a18().q15_1.y17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Nr.o19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=Bv(a,i.f18());t=new yv(h,this.a18())}else t=super.l14(r,e);return t}l14(r,e){return this.e1f(r!=null&&typeof r=="string"?r:m(),e)}iq(r){return this.x13()!=null?super.iq(r):new ew(this.a18(),this.l2(),this.p1e_1).iq(r)}}class Gi extends vu{constructor(r,e,t,a,i){a=a===o?null:a,i=i===o?null:i,super(r,e,a),this.l1f_1=e,this.m1f_1=i,this.n1f_1=this.l2().r2().x(),this.o1f_1=this.q1e_1.m17_1?null:new gv(t),this.p1f_1=null,this.q1f_1=null}l2(){return this.l1f_1}ar(r){var e=this.n1f_1;r:for(;e.y();){var t=e.z(),a=t.k2(),i=pu(r,this.a18(),a);if(i!==-3){if(this.q1e_1.o17_1&&pq(this,r,i,t.l2()))continue r;var s=this.o1f_1;return s==null||s.x1b(i),this.p1f_1=a,this.q1f_1=t.l2(),i}a!==this.p1e_1&&!jv(r,this.a18())&&_q(this,a)}var l=this.o1f_1,u=l==null?null:l.y1b(),f=u??-1;return f!==-1&&(this.p1f_1=r.ro(f),this.q1f_1=null),f}xp(){var r,e=this.o1f_1,t=e==null?null:e.w1b_1;return t??!1?r=!1:r=super.xp(),r}t13(r,e){var t=this.p1f_1;return t??r.ro(e)}t1e(r){var e=this.q1f_1;return e??Ie(this.l2(),r)}lq(r){if(r===this.m1f_1){var e=this.a18(),t=this.s1e(),a=this.m1f_1.lo();if(!(t instanceof er)){var i="Expected "+Ur(er).uc()+", but had "+Dr(t).uc()+" as the serialized body of "+a,s=this.z13(),l;if(this.a18().q15_1.y17_1){var u=w(t);l=w(Jr(u))}else l=null;var f=l;throw Nr.o19(Kr(-1,i,s,null,f),i,-1,s,f,null)}return new Gi(e,t,r,this.p1e_1,this.m1f_1)}return super.lq(r)}}class Of extends vu{constructor(r,e){super(r,e),this.x1f_1=e,this.y1f_1=this.x1f_1.c1(),this.z1f_1=-1}l2(){return this.x1f_1}t13(r,e){return e.toString()}t1e(r){return this.x1f_1.e1(Lg(r))}ar(r){for(;this.z1f_1<(this.y1f_1-1|0);)return this.z1f_1=this.z1f_1+1|0,this.z1f_1;return-1}}class ew extends vu{constructor(r,e,t){t=t===o?null:t,super(r,e,t),this.g1g_1=e,this.m14("primitive")}l2(){return this.g1g_1}ar(r){return 0}t1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw T.v(w(e))}return this.g1g_1}}class tw extends Gi{constructor(r,e,t){super(r,e,t),this.t1g_1=_t(e.p2()),this.u1g_1=ao(this.t1g_1.c1(),2),this.v1g_1=-1}t13(r,e){var t=e/2|0;return this.t1g_1.e1(t)}ar(r){for(;this.v1g_1<(this.u1g_1-1|0);)return this.v1g_1=this.v1g_1+1|0,this.v1g_1;return-1}t1e(r){return this.v1g_1%2|0?Ie(this.l2(),r):En(r)}mq(r){}}class aw{constructor(r){this.g16_1=r,this.h16_1=0,this.i16_1=new Qy(this.g16_1),this.j16_1=null,this.k16_1=Yr.f()}z1g(){}x1d(){var r=this.a1h(),e=this.x1g();return r>=q(e)||r===-1?!1:rr(e,r)===44?(this.h16_1=this.h16_1+1|0,!0):!1}b1h(r){return!(r===125||r===93||r===58||r===44)}l16(){var r=this.n1d();r!==10&&this.a1c("Expected EOF after parsing, but had "+kr(rr(this.x1g(),this.h16_1-1|0))+" instead")}h1d(r){var e=this.n1d();if(e!==r){var t=zl(r),a=this.h16_1>0?this.h16_1-1|0:this.h16_1,i=this.h16_1===q(this.x1g())||a<0?"EOF":kr(rr(this.x1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.a1c(s,a)}return e}c1h(r){if(this.h16_1>0&&r===34){var e;r:{var t=this.h16_1;try{this.h16_1=this.h16_1-1|0,e=this.l1d();break r}finally{this.h16_1=t}}var a=e;a==="null"&&this.z1b("Expected string literal but 'null' literal was found",this.h16_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var i=Qe(r),s=zl(i),l=this.h16_1>0?this.h16_1-1|0:this.h16_1,u=this.h16_1===q(this.x1g())||l<0?"EOF":kr(rr(this.x1g(),l)),f="Expected "+s+", but had '"+u+"' instead";this.a1c(f,l)}i1d(){var r=this.x1g(),e=this.h16_1;r:for(;;){if(e=this.y1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.h16_1=e,Qe(t)}return this.h16_1=e,10}y1d(r){var e=this.a1h();e=this.y1g(e);var t=q(this.x1g())-e|0;if(t<4||e===-1)return!1;var a=0;if(a<=3)do{var i=a;if(a=a+1|0,G("null",i)!==rr(this.x1g(),e+i|0))return!1}while(a<=3);return t>4&&Qe(rr(this.x1g(),e+4|0))===0?!1:(r&&(this.h16_1=e+4|0),!0)}f1e(r,e){return r=r===o?!0:r,e===o?this.y1d(r):e.y1d.call(this,r)}z1d(r){var e=this.i1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.l1d()}else{if(e!==1)return null;t=this.k1d()}var a=t;return this.j16_1=a,a}d1h(){this.j16_1=null}e1h(r,e){var t=this.x1g();return w(Ln(t,r,e))}k1d(){return this.j16_1!=null?Rd(this):this.c1e()}consumeString2(r,e,t){for(var a=t,i=e,s=rr(r,a),l=!1;s!==34;)s===92?(l=!0,a=this.y1g(gq(this,i,a)),a===-1&&this.a1c("Unexpected EOF",a),i=a):(a=a+1|0,a>=q(r)&&(l=!0,this.w1g(i,a),a=this.y1g(a),a===-1&&this.a1c("Unexpected EOF",a),i=a)),s=rr(r,a);var u;l?u=l1(this,i,a):u=this.e1h(i,a);var f=u;return this.h16_1=a+1|0,f}d1e(){var r=this.l1d();return r==="null"&&mq(this)&&this.a1c("Unexpected 'null' value instead of string literal"),r}l1d(){if(this.j16_1!=null)return Rd(this);var r=this.a1h();(r>=q(this.x1g())||r===-1)&&this.a1c("EOF",r);var e=Qe(rr(this.x1g(),r));if(e===1)return this.k1d();e!==0&&this.a1c("Expected beginning of the string, but got "+kr(rr(this.x1g(),r)));for(var t=!1;Qe(rr(this.x1g(),r))===0;)if(r=r+1|0,r>=q(this.x1g())){t=!0,this.w1g(this.h16_1,r);var a=this.y1g(r);if(a===-1)return this.h16_1=r,l1(this,0,0);r=a}var i;t?i=l1(this,this.h16_1,r):i=this.e1h(this.h16_1,r);var s=i;return this.h16_1=r,s}w1g(r,e){this.k16_1.ee(this.x1g(),r,e)}b1e(r){var e=A.m(),t=this.i1d();if(t!==8&&t!==6)return this.l1d(),fr;r:for(;;){if(t=this.i1d(),t===1){r?this.l1d():this.c1e();continue r}var a=t;if(a===8||a===6?e.n(t):a===9?(m1(e)!==8&&this.a1c("found ] instead of }"),ad(e)):a===7?(m1(e)!==6&&this.a1c("found } instead of ]"),ad(e)):a===10&&this.a1c("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.n1d(),e.c1()===0)return fr}}toString(){return"JsonReader(source='"+w(this.x1g())+"', currentPosition="+this.h16_1+")"}a1e(r){var e=this.e1h(0,this.h16_1),t=OE(e,r);this.z1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}z1b(r,e,t){throw B6(this,r,e,this.i16_1.p1c(),t,this.x1g())}a1c(r,e,t,a){return e=e===o?this.h16_1:e,t=t===o?null:t,a===o?this.z1b(r,e,t):a.z1b.call(this,r,e,t)}h1e(){var r=this.a1h();r=this.y1g(r),(r>=q(this.x1g())||r===-1)&&this.a1c("EOF");var e;rr(this.x1g(),r)===34?(r=r+1|0,r===q(this.x1g())&&this.a1c("EOF"),e=!0):e=!1;var t=e,a=new b(0,0),i=new b(0,0),s=!1,l=!1,u=!1,f=r;r:for(;r!==q(this.x1g());){var c=rr(this.x1g(),r);if((c===101||c===69)&&!u){r===f&&this.a1c("Unexpected symbol '"+kr(c)+"' in numeric literal",r),l=!0,u=!0,r=r+1|0;continue r}if(c===45&&u){r===f&&this.a1c("Unexpected symbol '-' in numeric literal",r),l=!1,r=r+1|0;continue r}if(c===43&&u){r===f&&this.a1c("Unexpected symbol '+' in numeric literal",r),l=!0,r=r+1|0;continue r}if(c===45){r!==f&&this.a1c("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Qe(c);if(v!==0)break r;r=r+1|0;var h=Jn(c,48);if(0<=h&&h<=9||this.a1c("Unexpected symbol '"+kr(c)+"' in numeric literal",r-1|0),u){var d=i,p=Tr(d,M(10));i=gr(p,M(h));continue r}var g=a,y=Tr(g,M(10));a=Hr(y,M(h)),ar(a,new b(0,0))>0&&this.a1c("Numeric value overflow")}var x=r!==f;if((f===r||s&&f===(r-1|0))&&this.a1c("Expected numeric literal",r),t&&(x||this.a1c("EOF"),rr(this.x1g(),r)!==34&&this.a1c("Expected closing quotation mark",r),r=r+1|0),this.h16_1=r,u){var k=ae(a)*bq(i,l);(k>ae(new b(-1,2147483647))||k<ae(new b(0,-2147483648)))&&this.a1c("Numeric value overflow"),Math.floor(k)!==k&&this.a1c("Can't convert "+k+" to Long"),a=Rn(k)}var S;return s?S=a:ir(a,new b(0,-2147483648))?this.a1c("Numeric value overflow"):S=on(a),S}p18(){var r=this.h1e(),e=this.n1d();if(e!==10){var t=this.h16_1>0?this.h16_1-1|0:this.h16_1,a=this.h16_1===q(this.x1g())||t<0?"EOF":kr(rr(this.x1g(),t)),i="Expected input to contain a single valid number, but got '"+a+"' after it";this.a1c(i,t)}return r}g1e(){var r=this.a1h();r===q(this.x1g())&&this.a1c("EOF");var e;rr(this.x1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,a=wq(this,r);return t&&(this.h16_1===q(this.x1g())&&this.a1c("EOF"),rr(this.x1g(),this.h16_1)!==34&&this.a1c("Expected closing quotation mark"),this.h16_1=this.h16_1+1|0),a}}class iw{constructor(){Kf=this,this.f1h_1=Es(117),this.g1h_1=new Int8Array(126),xq(this),Sq(this)}}class wv extends aw{constructor(r,e){super(e),this.s1h_1=r}x1g(){return this.s1h_1}y1g(r){return r<this.x1g().length?r:-1}n1d(){var r=this.x1g(),e=this.h16_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var a=G(r,t);if(a===32||a===10||a===13||a===9)continue r;return this.h16_1=e,Qe(a)}return this.h16_1=r.length,10}j1d(){var r=this.h16_1;if(r===-1)return!1;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.h16_1=r,this.b1h(t)}return this.h16_1=r,!1}a1h(){var r=this.h16_1;if(r===-1)return r;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.h16_1=r,r}w1d(r){this.h16_1===-1&&this.c1h(r);var e=this.x1g(),t=this.h16_1;r:for(;t<e.length;){var a=t;t=a+1|0;var i=G(e,a);if(i===32||i===10||i===13||i===9)continue r;if(this.h16_1=t,i===r)return fr;this.c1h(r)}this.h16_1=-1,this.c1h(r)}c1e(){this.w1d(34);var r=this.h16_1,e=Ks(this.x1g(),34,r);if(e===-1){this.l1d();var t=zl(1),a=this.h16_1,i=this.h16_1===q(this.x1g())||a<0?"EOF":kr(rr(this.x1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.a1c(s,a)}var l=r;if(l<e)do{var u=l;if(l=l+1|0,G(this.x1g(),u)===92)return this.consumeString2(this.x1g(),this.h16_1,u)}while(l<e);return this.h16_1=e+1|0,Hn(this.x1g(),r,e)}e1e(r,e){var t=this.h16_1;try{if(this.n1d()!==6)return null;var a=this.z1d(e);return a!==r||(this.d1h(),this.n1d()!==5)?null:this.z1d(e)}finally{this.h16_1=t,this.d1h()}}}class sw extends wv{n1d(){var r=this.x1g(),e=this.a1h();return e>=r.length||e===-1?10:(this.h16_1=e+1|0,Qe(G(r,e)))}j1d(){var r=this.a1h();return r>=this.x1g().length||r===-1?!1:this.b1h(G(this.x1g(),r))}w1d(r){var e=this.x1g(),t=this.a1h();(t>=e.length||t===-1)&&(this.h16_1=-1,this.c1h(r));var a=G(e,t);if(this.h16_1=t+1|0,a===r)return fr;this.c1h(r)}i1d(){var r=this.x1g(),e=this.a1h();return e>=r.length||e===-1?10:(this.h16_1=e,Qe(G(r,e)))}a1h(){var r=this.h16_1;if(r===-1)return r;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var a=G(e,r+1|0);if(a===47){r=Ks(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(a===42){r=Mo(e,"*/",r+2|0),r===-1?(this.h16_1=e.length,this.a1c('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.h16_1=r,r}}class Pf{constructor(){this.w15_1=Yr.ja(128)}e1b(r){this.w15_1.he(r)}y1a(r){this.w15_1.ga(r)}a1b(r){this.w15_1.fa(r)}k1b(r){El(this.w15_1,r)}x15(){this.w15_1.ke()}toString(){return this.w15_1.toString()}}var ml;function Ae(){return ml===o&&new Oy,ml}function d6(n,r){n=n===o?Ae():n;var e=new Py(n);r(e);var t=e.g17();return new By(t,e.d17_1)}function p6(n){if(D(n.yq(),fu()))return fr;var r=new mv(n.q15_1);n.yq().b15(r)}var Cd;function bv(){if(Cd)return fr;Cd=!0,ow=new zo("NONE",0),lw=new zo("ALL_JSON_OBJECTS",1),uw=new zo("POLYMORPHIC",2)}var ow,lw,uw;function fw(){return bv(),ow}function _6(){return bv(),lw}function cw(){return bv(),uw}function g6(){return be(),vw}var vw,kv,Bf;function Or(n){be();var r=n instanceof er?n:null,e;return r==null?Sv(n,"JsonObject"):e=r,e}function En(n){return be(),n==null?lo():new ht(n,!0)}function ys(n){be();var r=n instanceof dn?n:null,e;return r==null?Sv(n,"JsonArray"):e=r,e}var yl;function lo(){return yl===o&&new me,yl}function Un(n){be();var r;return n instanceof me?r=null:r=n.f18(),r}function On(n){be();var r=n instanceof vr?n:null,e;return r==null?Sv(n,"JsonPrimitive"):e=r,e}function m6(n){be();var r;try{r=li(n)}catch(t){var e;if(t instanceof Nr)e=null;else throw t;r=e}return r}function y6(n){be();var r;try{r=li(n)}catch(l){var e;if(l instanceof Nr)e=null;else throw l;r=e}var t=r,a;if(t==null)return null;a=t;var i=a,s=Fe(-2147483648,2147483647);return yo(E(s,fi)?s:m(),i)?rn(i):null}function xv(n){return be(),dq(n.f18())}function Sv(n,r){throw be(),T.v("Element "+w(Dr(n))+" is not a "+r)}function li(n){return be(),Bv(Ae(),n.f18()).p18()}function w6(n){be();var r=n.f18();return Do(r)}function b6(n){return be(),Do(n.f18())}var qd;function be(){qd||(qd=!0,vw=to("kotlinx.serialization.json.JsonUnquotedLiteral",Os()))}function wl(n,r,e){return n.r18(r,En(e))}function k6(n){return n.ip("JsonPrimitive",us(x6)),n.ip("JsonNull",us(S6)),n.ip("JsonLiteral",us(E6)),n.ip("JsonObject",us(z6)),n.ip("JsonArray",us(I6)),fr}function x6(){return Ev().u18_1}function S6(){return Iv().v18_1}function E6(){return hw().w18_1}function z6(){return hu().x18_1}function I6(){return zv().y18_1}var Nf;function dt(){return Nf===o&&new Fy,Nf}var Uf;function Ev(){return Uf===o&&new $y,Uf}var Df;function C6(){return Df===o&&new Jy,Df}var Rf;function zv(){return Rf===o&&new Hy,Rf}var Lf;function q6(){return Lf===o&&new Gy,Lf}var Mf;function hu(){return Mf===o&&new Ky,Mf}var Ff;function Iv(){return Ff===o&&new Wy,Ff}function us(n){return new io(n)}var $f;function hw(){return $f===o&&new Yy,$f}function Ki(n){A6(n)}function du(n){var r=E(n,cu)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+w(Dr(n))));return e=r,e}function Cv(n){du(n)}function A6(n){var r=E(n,pv)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+w(Dr(n))));return e=r,e}function Ve(n){var r=n.x19_1,e=Oa;return ji("original",1,e,T6(),null),r.l2()}function T6(){return Ke(n=>Ve(n),1,0,5)}function j6(n,r){return r.q15_1.l17_1?new Zy(n,r):new oo(n)}function O6(n,r,e){return n.w1b_1=!r.vo(e)&&r.uo(e).no(),n.w1b_1}function P6(n){return Ke((r,e)=>{var t=n;return O6(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===o?-1:r,q(n)<200)return n;if(r===-1){var e=q(n)-60|0;if(e<=0)return n;var t=q(n);return"....."+w(Ln(n,e,t))}var a=r-30|0,i=r+30|0,s=a<=0?"":".....",l=i>=q(n)?"":".....",u=ln(a,0),f=Nt(i,q(n));return s+w(Ln(n,u,f))+l}function Kr(n,r,e,t,a){return Av(n,r,e,t,a)}function qv(n,r){return r=r===o?null:r,Nr.o19(Av(-1,n,null,r,null),n,-1,null,null,r)}function Ma(n,r){r=r===o?"object":r,n.z1b("Trailing comma before the end of JSON "+r,n.h16_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Ad(n,r){n.a1c(Tv(r,null),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function dw(n){return so.p1a("Value of type '"+n.lo()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.mo().toString()+"'"),n.lo(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Td(n,r){return r=r===o?null:r,so.p1a(Tv(n,r),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function jd(n,r){return Tv(n,r)}function Av(n,r,e,t,a){var i=Yr.f();return n>=0&&i.fa("Unexpected JSON token at offset "+n+": "),i.fa(r),e==null||vt(e)||(i.fa(" at path: "),i.fa(e)),t==null||vt(t)||i.fa(`
`+t),a!=null&&(i.fa(`
JSON input: `),i.fa(a)),i.toString()}function Tv(n,r){return"Unexpected special floating-point value "+w(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function B6(n,r,e,t,a,i){var s;n.g16_1.y17_1?s=w(Jr(i,e)):s=null;var l=s;return Nr.o19(Av(e,r,t,a,l),r,e,t,l,a)}function N6(n,r){var e;return r==null||vt(r)?e="":e=`
`+r,n+e}function U6(){return je(),pw}var pw;function D6(){return je(),_w}var _w;function jv(n,r){je();var e;if(r.q15_1.i17_1)e=!0;else{var t=n.qo(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(l instanceof Uy){a=!0;break r}}a=!1}e=a}return e}function pu(n,r,e){if(je(),gw(r,n)){var t=e.toLowerCase();return i1(n,r,t)}var a=_u(n,r);if(a!=null)return i1(n,r,e);var i=n.so(e);return i!==-3||!r.q15_1.s17_1?i:i1(n,r,e)}function R6(n,r,e){je();var t=_u(n,r);return t==null?n.ro(e):mw(n,r,t)[e]}function L6(n,r){je();var e=_u(n,r);return e==null?pC(n):R_(mw(n,r,e))}function gw(n,r){return je(),n.q15_1.u17_1&&D(r.mo(),La())}function i1(n,r,e){je();var t=M6(r,n).o2(e);return t??-3}function _u(n,r){return je(),D(n.mo(),lu())?r.q15_1.t17_1:null}function mw(n,r,e){je();var t=Tw(r),a=D6();return t.c1c(n,a,$6(n,e))}function M6(n,r){je();var e=Tw(n),t=U6();return e.c1c(r,t,J6(r,n))}function F6(n,r){je();var e=cr.t4(),t=gw(r,n),a=_u(n,r),i=0,s=n.po();if(i<s)do{var l=i;i=i+1|0;for(var u=n.to(l),f=A.m(),c=u.x();c.y();){var v=c.z();v instanceof Dy&&f.n(v)}var h=mc(f),d=h==null?null:h.d1c_1;if(d!=null)for(var p=0,g=d.length;p<g;){var y=d[p];p=p+1|0;var x;t?x=y.toLowerCase():x=y,Od(e,n,x,l)}var k;t?k=n.ro(l).toLowerCase():a!=null?k=a.e1c(n,l,n.ro(l)):k=null;var S=k;S==null||Od(e,n,S,l)}while(i<s);var z;return e.d1()?z=Ar():z=e,z}function $6(n,r){return()=>{for(var e=Pn.i1(),t=0,a=n.po(),i=Array(a);t<a;){var s=t,l=n.ro(s),u=r.e1c(n,s,l);if(!e.n(u))throw so.p1a("The transformed name '"+u+"' for property "+l+" already exists "+("in "+w(n)),n.lo());i[s]=u,t=t+1|0}return i}}function J6(n,r){return()=>F6(n,r)}function Od(n,r,e,t){var a=D(r.mo(),La())?"enum value":"property";if((E(n,xn)?n:m()).m2(e))throw qv("The suggested name '"+e+"' for "+a+" "+r.ro(t)+" is already one of the names for "+a+" "+(r.ro(Ie(n,e))+" in "+w(r)));n.s2(e,t)}var Pd;function je(){Pd||(Pd=!0,pw=new zi,_w=new zi)}var Jf,Hf;function Bd(n){var r=ao(n.j1c_1,2);n.h1c_1=gg(n.h1c_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var a=t,i=n.i1c_1,s=i.length,l=i;p2(l,a,0,0,s),n.i1c_1=a}function H6(n,r,e){var t=r.mo(),a;if(t instanceof Fi?a=!0:a=D(t,by()),a)throw T.v("Serializer for "+e.uc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.q1c_1||!n.r1c_1)return fr;var i,s;if(D(t,eo())||D(t,uu())?s=!0:s=t instanceof Vn,s?i=!0:i=t instanceof eu,i)throw T.v("Serializer for "+e.uc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function G6(n,r,e,t){var a=gu(),i=X6().c1(),s=Array(i),l=gi.b1d(r,n,a,s);l.as(e,t)}function K6(n){var r=n.c1d_1.h1d(6);n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var e=cr.t4();r:for(;n.c1d_1.j1d();){var t=n.d1d_1?n.c1d_1.l1d():n.c1d_1.k1d();n.c1d_1.h1d(5);var a=n.m1d();e.s2(t,a),r=n.c1d_1.n1d();var i=r;if(i!==4){if(i===7)break r;n.c1d_1.a1c("Expected end of the object or comma")}}return r===6?n.c1d_1.h1d(7):r===4&&(n.e1d_1||Ma(n.c1d_1),n.c1d_1.h1d(7)),new er(e)}function*W6(n,r,e){var t=n.c1d_1.h1d(6);n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var a=cr.t4();r:for(;n.c1d_1.j1d();){var i=n.d1d_1?n.c1d_1.l1d():n.c1d_1.k1d();n.c1d_1.h1d(5);var s=yield*r.cl(fr,e);a.s2(i,s),t=n.c1d_1.n1d();var l=t;if(l!==4){if(l===7)break r;n.c1d_1.a1c("Expected end of the object or comma")}}return t===6?n.c1d_1.h1d(7):t===4&&(n.e1d_1||Ma(n.c1d_1),n.c1d_1.h1d(7)),new er(a)}function yw(n){var r=n.c1d_1.n1d();n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var e=A.m();r:for(;n.c1d_1.j1d();){var t=n.m1d();if(e.n(t),r=n.c1d_1.n1d(),r!==4){var a=n.c1d_1,i=r===9,s=a.h16_1;if(!i){var l="Expected end of the array or comma";a.a1c(l,s)}break r}}return r===8?n.c1d_1.h1d(9):r===4&&(n.e1d_1||Ma(n.c1d_1,"array"),n.c1d_1.h1d(9)),new dn(e)}function bl(n,r){var e;n.d1d_1||!r?e=n.c1d_1.l1d():e=n.c1d_1.k1d();var t=e;return!r&&t==="null"?lo():new ht(t,r)}function Y6(n){return gz(new E_(Z6(n)),fr)}function Z6(n){return Ke((r,e,t)=>Hx(t,function*(a){var i=n.c1d_1.i1d(),s;if(i===1)s=bl(n,!0);else if(i===0)s=bl(n,!1);else if(i===6){var l=n;l.g1d_1=l.g1d_1+1|0,l.g1d_1>=l.f1d_1&&Bs(l.f1d_1);var u=yield*W6(n,r,a);l.g1d_1=l.g1d_1-1|0,s=u}else if(i===8){var f=n;f.g1d_1=f.g1d_1+1|0,f.g1d_1>=f.f1d_1&&Bs(f.f1d_1);var c=yw(n);f.g1d_1=f.g1d_1-1|0,s=c}else n.c1d_1.a1c("Can't begin reading element, unexpected token");return s}),2)}function Bs(n){throw qv("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var Nd;function Wi(){if(Nd)return fr;Nd=!0,ww=new fs("OBJ",0,123,125),bw=new fs("LIST",1,91,93),kw=new fs("MAP",2,123,125),xw=new fs("POLY_OBJ",3,91,93)}var ww,bw,kw,xw;function V6(){return Wi(),[gu(),Gf(),xl(),Ew()]}function X6(){return Wi(),s1==null&&(s1=uE(V6())),s1}var s1;function Sw(n,r){var e=r.mo(),t;if(e instanceof Fi)t=Ew();else if(D(e,eo()))t=Gf();else if(D(e,uu())){var a=kl(r.uo(0),n.yq()),i=a.mo(),s,l;if(i instanceof Vn?l=!0:l=D(i,La()),l)s=xl();else if(n.q15_1.k17_1)s=Gf();else throw dw(a);t=s}else t=gu();return t}function kl(n,r){var e;if(D(n.mo(),by())){var t=HI(r,n),a=t==null?null:kl(t,r);e=a??n}else n.oo()?e=kl(n.uo(0),r):e=n;return e}function gu(){return Wi(),ww}function Gf(){return Wi(),bw}function xl(){return Wi(),kw}function Ew(){return Wi(),xw}function Sl(n,r){for(var e=n.qo().x();e.y();){var t=e.z();if(t instanceof Ny)return t.s1d_1}return r.q15_1.q17_1}function Q6(n,r,e,t){return nq(n,r,e,t)}function rq(n){if(n instanceof eu){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(r))}if(n instanceof Vn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(e))}if(n instanceof Fi){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw mr.o3(w(t))}}function nq(n,r,e,t){if(L6(e.mn(),n).l1(t)){var a=r.mn().lo(),i=e.mn().lo(),s=n.q15_1.x17_1.equals(_6())&&a===i?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+a+"'",l="Class '"+i+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw so.p1a(l,i,u)}}function eq(n,r,e){return r==null?!1:r.v1d_1===e?(r.v1d_1=null,!0):!1}function tq(n,r){for(;n.ar(r)!==-1;);}function aq(n){n.a16_1.i1d()===4&&n.a16_1.a1c("Unexpected leading comma")}function iq(n){var r=!1,e=!!(n.c16_1%2|0);e?n.c16_1!==-1&&(r=n.a16_1.x1d()):n.a16_1.w1d(58);var t;if(n.a16_1.j1d()){if(e)if(n.c16_1===-1){var a=n.a16_1,i=!r,s=a.h16_1;if(!i){var l="Unexpected leading comma";a.a1c(l,s)}}else{var u=n.a16_1,f=r,c=u.h16_1;if(!f){var v="Expected comma after the key-value pair";u.a1c(v,c)}}n.c16_1=n.c16_1+1|0,t=n.c16_1}else r&&!n.y15_1.q15_1.v17_1&&Ma(n.a16_1),t=-1;return t}function sq(n,r,e){var t=n.y15_1,a;r:{var i=r.vo(e),s=r.uo(e),l;if(i&&!s.no()?l=n.a16_1.y1d(!0):l=!1,l){a=!0;break r}if(D(s.mo(),La())){var u;if(s.no()?u=n.a16_1.y1d(!1):u=!1,u){a=!1;break r}var f=n.a16_1.z1d(n.e16_1.j17_1),c;if(f==null){a=!1;break r}else c=f;var v=c,h=pu(s,t,v),d=!t.q15_1.m17_1&&s.no();if(h===-3&&(i||d)){n.a16_1.k1d(),a=!0;break r}}a=!1}return a}function oq(n,r){for(var e=n.a16_1.x1d();n.a16_1.j1d();){e=!1;var t=fq(n);n.a16_1.w1d(58);var a=pu(r,n.y15_1,t),i;if(a!==-3){var s;if(n.e16_1.o17_1&&sq(n,r,a))e=n.a16_1.x1d(),s=!1;else{var l=n.f16_1;return l==null||l.x1b(a),a}i=s}else i=!0;var u=i;u&&(e=lq(n,r,t))}e&&!n.y15_1.q15_1.v17_1&&Ma(n.a16_1);var f=n.f16_1,c=f==null?null:f.y1b();return c??-1}function lq(n,r,e){return jv(r,n.y15_1)||eq(n,n.d16_1,e)?n.a16_1.b1e(n.e16_1.j17_1):(n.a16_1.i16_1.o1c(),n.a16_1.a1e(e)),n.a16_1.x1d()}function uq(n){var r=n.a16_1.x1d(),e;return n.a16_1.j1d()?(n.c16_1!==-1&&!r&&n.a16_1.a1c("Expected end of the array or comma"),n.c16_1=n.c16_1+1|0,e=n.c16_1):(r&&!n.y15_1.q15_1.v17_1&&Ma(n.a16_1,"array"),e=-1),e}function fq(n){var r;return n.e16_1.j17_1?r=n.a16_1.d1e():r=n.a16_1.c1e(),r}function cq(){return Pv(),zw}var zw;function vq(n,r,e){n.s1c_1.u1a(),n.or(r),n.s1c_1.x1a(58),n.s1c_1.w1a(),n.or(e)}function Ov(n){return Pv(),n.oo()&&cq().l1(n)}function hq(n){return Pv(),n.oo()&&D(n,g6())}var Ud;function Pv(){Ud||(Ud=!0,zw=ha([tv(Xl()).mn(),su(Zs()).mn(),av(Vl()).mn(),iv(Ql()).mn()]))}function o1(){return mu(),Iw}var Iw;function go(n){mu();var r=n&15,e;if(r<10){var t=48,a=Y(t);e=nt(r+a|0)}else{var i=r-10|0,s=97,l=Y(s);e=nt(i+l|0)}return e}function El(n,r){mu(),n.ga(34);var e=0,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0;var s=G(r,i),l=Y(s);l<o1().length&&o1()[l]!=null&&(n.ee(r,e,i),n.fa(o1()[l]),e=i+1|0)}while(t<a);e!==0?n.ee(r,e,r.length):n.fa(r),n.ga(34)}function dq(n){return mu(),Yh(n,"true",!0)?!0:Yh(n,"false",!0)?!1:null}var Dd;function mu(){if(!Dd){Dd=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=go(e>>12),a=go(e>>8),i=go(e>>4),s=go(e);n[e]="\\u"+kr(t)+kr(a)+kr(i)+kr(s)}while(r<=31);var l=34;n[Y(l)]='\\"';var u=92;n[Y(u)]="\\\\";var f=9;n[Y(f)]="\\t";var c=8;n[Y(c)]="\\b";var v=10;n[Y(v)]="\\n";var h=13;n[Y(h)]="\\r",n[12]="\\f",Iw=n;var d=new Int8Array(128),p=0;if(p<=31)do{var g=p;p=p+1|0,d[g]=1}while(p<=31);var y=34,x=Y(y),k=34,S=Y(k);d[x]=$n(S);var z=92,I=Y(z),C=92,j=Y(C);d[I]=$n(j);var P=9,F=Y(P),B=116,N=Y(B);d[F]=$n(N);var H=8,L=Y(H),$=98,R=Y($);d[L]=$n(R);var V=10,K=Y(V),nr=110,W=Y(nr);d[K]=$n(W);var tr=13,Q=Y(tr),lr=114,X=Y(lr);d[Q]=$n(X);var xr=102,br=Y(xr);d[12]=$n(br)}}function Cw(n,r,e,t){var a=t.mn();return new Gi(n,e,a,r,a).kq(t)}function Nn(n,r,e,t){var a=Ce(e,"i")?"an "+e:"a "+e,i="Failed to parse literal '"+r.toString()+"' as "+a+" value",s=n.r1e(t),l;if(n.a18().q15_1.y17_1){var u=w(n.s1e());l=w(Jr(u))}else l=null;var f=l;throw Nr.o19(Kr(-1,i,s,null,f),i,-1,s,f,null)}function pq(n,r,e,t){var a=n.a18(),i;r:{var s=r.vo(e),l=r.uo(e),u;if(s&&!l.no()?u=t instanceof me:u=!1,u){i=!0;break r}if(D(l.mo(),La())){var f;if(l.no()?f=t instanceof me:f=!1,f){i=!1;break r}var c=t instanceof vr?t:null,v=c==null?null:Un(c),h;if(v==null){i=!1;break r}else h=v;var d=h,p=pu(l,a,d),g=!a.q15_1.m17_1&&l.no();if(p===-3&&(s||g)){i=!0;break r}}i=!1}return i}function _q(n,r){var e="Encountered an unknown key '"+r+"'",t=n.z13(),a="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",i;if(n.a18().q15_1.y17_1){var s=n.l2().toString();i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,e,t,a,l),e,-1,t,l,a)}function gq(n,r,e){return n.w1g(r,e),yq(n,e+1|0)}function l1(n,r,e){n.w1g(r,e);var t=n.k16_1.toString();return n.k16_1.je(0),t}function Rd(n){var r=fn(n.j16_1);return n.j16_1=null,r}function mq(n){return rr(n.x1g(),n.h16_1-1|0)!==34}function yq(n,r){var e=r;e=n.y1g(e),e===-1&&n.a1c("Expected escape sequence to continue, got EOF");var t=n.x1g(),a=e;e=a+1|0;var i=rr(t,a);if(i===117)return qw(n,n.x1g(),e);var s=Y(i),l=kq(s);return l===0&&n.a1c("Invalid escaped char '"+kr(i)+"'"),n.k16_1.ga(l),e}function qw(n,r,e){return(e+4|0)>=q(r)?(n.h16_1=e,n.z1g(),(n.h16_1+4|0)>=q(r)&&n.a1c("Unexpected EOF during unicode escape"),qw(n,r,n.h16_1)):(n.k16_1.ga(nt((((mo(n,r,e)<<12)+(mo(n,r,e+1|0)<<8)|0)+(mo(n,r,e+2|0)<<4)|0)+mo(n,r,e+3|0)|0)),e+4|0)}function mo(n,r,e){var t=rr(r,e),a;if(48<=t&&t<=57){var i=Y(t),s=48;a=i-Y(s)|0}else if(97<=t&&t<=102){var l=Y(t),u=97;a=(l-Y(u)|0)+10|0}else if(65<=t&&t<=70){var f=Y(t),c=65;a=(f-Y(c)|0)+10|0}else n.a1c("Invalid toHexChar char '"+kr(t)+"' in unicode escape");return a}function wq(n,r){var e=n.y1g(r);(e>=q(n.x1g())||e===-1)&&n.a1c("EOF");var t=n.x1g(),a=e;e=a+1|0;var i=rr(t,a),s=Y(i)|32,l,u=116;if(s===Y(u))Ld(n,"rue",e),l=!0;else{var f=102;s===Y(f)?(Ld(n,"alse",e),l=!1):n.a1c("Expected valid boolean literal prefix, but had '"+n.l1d()+"'")}return l}function Ld(n,r,e){(q(n.x1g())-e|0)<r.length&&n.a1c("Unexpected end of boolean literal");var t=0,a=q(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i),l=rr(n.x1g(),e+i|0),u=Y(s);u!==(Y(l)|32)&&n.a1c("Expected valid boolean literal prefix, but had '"+n.l1d()+"'")}while(t<=a);n.h16_1=e+r.length|0}function bq(n,r){var e;switch(r){case!1:var t=-ae(n);e=Math.pow(10,t);break;case!0:var a=ae(n);e=Math.pow(10,a);break;default:Ms();break}return e}function Qe(n){var r;if(Y(n)<126){var e=Aw().g1h_1;r=e[Y(n)]}else r=0;return r}function zl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function kq(n){return n<117?Aw().f1h_1[n]:0}function xq(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,va(n,e,117)}while(r<=31);va(n,8,98),va(n,9,116),va(n,10,110),va(n,12,102),va(n,13,114),u1(n,47,47),u1(n,34,34),u1(n,92,92)}function Sq(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,ii(n,e,127)}while(r<=32);ii(n,9,3),ii(n,10,3),ii(n,13,3),ii(n,32,3),Ct(n,44,4),Ct(n,58,5),Ct(n,123,6),Ct(n,125,7),Ct(n,91,8),Ct(n,93,9),Ct(n,34,1),Ct(n,92,2)}function va(n,r,e){if(e!==117){var t=Y(e);n.f1h_1[t]=nt(r)}}function u1(n,r,e){var t=Y(r);return va(n,t,e)}function ii(n,r,e){n.g1h_1[r]=e}function Ct(n,r,e){var t=Y(r);return ii(n,t,e)}var Kf;function Aw(){return Kf===o&&new iw,Kf}function Bv(n,r){return n.q15_1.w17_1?new sw(r,n.q15_1):new wv(r,n.q15_1)}function Tw(n){return n.s15_1}function Md(n){return bs.o7(n)}_(hv,"Json");U(Oy,"Default");_(Py,"JsonBuilder");_(By,"JsonImpl");_(Ny,"JsonClassDiscriminator");_(Uy,"JsonIgnoreUnknownKeys");_(Dy,"JsonNames");_(dv,"JsonConfiguration");_(zo,"ClassDiscriminatorMode");Lr(cu,"JsonDecoder",o,o,[tu,au]);nn(Ry);_(et,"JsonElement",o,o,o,o,o,{0:dt});nn(v6);_(vr,"JsonPrimitive",o,o,o,o,o,{0:Ev});nn(h6);_(dn,"JsonArray",o,o,[zn],o,o,{0:zv});nn(Ly);_(er,"JsonObject",o,o,[xn],o,o,{0:hu});U(me,"JsonNull",o,o,o,o,o,{0:Iv});_(ht,"JsonLiteral");_(Tt,"JsonObjectBuilder");_(My,"JsonArrayBuilder");U(Fy,"JsonElementSerializer",o,o,[hr]);U($y,"JsonPrimitiveSerializer",o,o,[hr]);U(Jy,"JsonArrayDescriptor",o,o,[ye]);U(Hy,"JsonArraySerializer",o,o,[hr]);U(Gy,"JsonObjectDescriptor",o,o,[ye]);U(Ky,"JsonObjectSerializer",o,o,[hr]);U(Wy,"JsonNullSerializer",o,o,[hr]);U(Yy,"JsonLiteralSerializer",o,o,[hr]);Rr(io).no=Na;Rr(io).oo=Ua;Rr(io).qo=Vs;_(io,o,o,o,[ye]);Lr(pv,"JsonEncoder",o,o,[Xc]);_(_v,"JsonException");_(Nr,"JsonDecodingException");_(so,"JsonEncodingException");_(oo,"Composer");_(Af,"ComposerForUnsignedNumbers");_(Tf,"ComposerForUnquotedLiterals");_(Zy,"ComposerWithPrettyPrint");_(gv,"JsonElementMarker");U(Vy,"Tombstone");U(Xy,"RedactedKey");_(Qy,"JsonPath");Rr(mv).m15=EI;_(mv,"JsonSerializersModuleValidator",o,o,[dy]);_(rw,"JsonTreeReader",o,o,o,[1]);_(fs,"LexerMode");_(zi,"Key",zi);_(jf,"DescriptorSchemaCache",jf);_(nw,"DiscriminatorHolder");_(Ps,"StreamingJsonDecoder",o,o,[cu]);_(yv,"JsonDecoderForUnsignedTypes");_(gi,"StreamingJsonEncoder",o,o,[pv]);_(vu,"AbstractJsonTreeDecoder",o,o,[cu]);_(Gi,"JsonTreeDecoder");_(Of,"JsonTreeListDecoder");_(ew,"JsonPrimitiveDecoder");_(tw,"JsonTreeMapDecoder");_(aw,"AbstractJsonLexer");U(iw,"CharMappings");_(wv,"StringJsonLexer");_(sw,"StringJsonLexerWithComments");_(Pf,"StringJsonWriter",Pf);kv=new Ry;Bf=new Ly;Jf=new Vy;Hf=new Xy;var ai=Math.imul;class jw{constructor(r){this.d1i_1=r}ig(r,e){return this.d1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.d1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class hn{constructor(r,e){e=e===o?null:e,this.e1i_1=r,this.f1i_1=e}}class Ow{constructor(r){this.p1i_1=r}ig(r,e){return this.p1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.p1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Pw{constructor(r){this.v1i_1=r}ig(r,e){return this.v1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.v1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Wf{constructor(r,e,t){this.l1k_1=r,this.m1k_1=e,this.n1k_1=t}}class Bw{constructor(r,e){this.d1l_1=r,this.e1l_1=e}}class Nw{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g){h=h===o?ur():h,d=d===o?0:d,p=p===o?!1:p,g=g===o?"":g,this.f1l_1=r,this.g1l_1=e,this.h1l_1=t,this.i1l_1=a,this.j1l_1=i,this.k1l_1=s,this.l1l_1=l,this.m1l_1=u,this.n1l_1=f,this.o1l_1=c,this.p1l_1=v,this.q1l_1=h,this.r1l_1=d,this.s1l_1=p,this.t1l_1=g}}class Uw{constructor(r,e,t){this.u1l_1=r,this.v1l_1=e,this.w1l_1=t}}class Dw{constructor(r){this.x1l_1=r}ig(r,e){return this.x1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.x1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Rw{constructor(r){this.y1l_1=r}ig(r,e){return this.y1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.y1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Lw{constructor(r){this.z1l_1=r}ig(r,e){return this.z1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.z1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Mw{constructor(r){this.a1m_1=r}ig(r,e){return this.a1m_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.a1m_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Fw{constructor(r){this.g1m_1=r}u4(){return this.g1m_1.x()}h1m(r){return Gn(r.e1l_1)}v4(r){return this.h1m(r)}}class $w{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g){e=e===o?ur():e,t=t===o?null:t,a=a===o?ur():a,i=i===o?ur():i,s=s===o?ur():s,l=l===o?ur():l,u=u===o?ur():u,f=f===o?null:f,c=c===o?null:c,v=v===o?ur():v,h=h===o?ur():h,d=d===o?null:d,p=p===o?null:p,g=g===o?null:g,this.y1i_1=e,this.z1i_1=t,this.a1j_1=i,this.b1j_1=s,this.c1j_1=l,this.d1j_1=f,this.e1j_1=c,this.f1j_1=v,this.g1j_1=h,this.h1j_1=d,this.i1j_1=p,this.j1j_1=g,this.k1j_1=ur(),this.l1j_1=u;for(var y=this,x=this.d1j_1,k=x==null?null:x.e1k_1,S=this.h1j_1,z=Ge([this.z1i_1,k,S==null?null:S.h1k_1]),I=A.f1(Mr(z,10)),C=z.x();C.y();){var j=C.z(),P=Ae().v15(j);I.n(P)}y.m1j_1=I;for(var F=this,B=A.m(),N=u.x();N.y();){var H=N.z();H.b1i_1||B.n(H)}F.n1j_1=B,this.o1j_1=Ar();var L=this,$;if(!this.n1j_1.d1())$=!0;else{var R;r:{var V;if(E(u,Z)?V=u.d1():V=!1,V){R=!1;break r}for(var K=u.x();K.y();){var nr=K.z();if(nr.c1i_1!=null){R=!0;break r}}R=!1}$=R}L.p1j_1=$,this.q1j_1=ft(a);for(var W=this,tr=A.f1(Mr(r,10)),Q=r.x();Q.y();){var lr=Q.z(),X="/"+dm(lr,Ai([47]));tr.n(X)}W.r1j_1=tr,this.s1j_1=Ar(),this.t1j_1=!1,this.u1j_1=!1;var xr=this;xr.v1j_1=Pn.i1();var br=this;br.w1j_1=A.m(),this.x1j_1=Ar()}i1m(r,e,t){this.x1j_1=e,this.k1j_1=t;var a=Or(Ae().v15(r)),i=dA(this,hA(this,vA(this,a))),s=sr(i,"components"),l=s==null?null:sr(s,"schemas"),u=l??Ar();this.o1j_1=u,this.s1j_1=OA(this,i,u);var f=this,c;if(Tl(i))c=!0;else{var v=this.m1j_1,h;r:{var d;if(E(v,Z)?d=v.d1():d=!1,d){h=!1;break r}for(var p=v.x();p.y();){var g=p.z();if(Tl(g)){h=!0;break r}}h=!1}c=h}f.t1j_1=c;var y=this,x;if(Al(i,Co()))x=!0;else{var k=this.m1j_1,S;r:{var z;if(E(k,Z)?z=k.d1():z=!1,z){S=!1;break r}for(var I=k.x();I.y();){var C=I.z();if(Al(C,Co())){S=!0;break r}}S=!1}x=S}y.u1j_1=x;var j=Dn(this.t1j_1?ub().q2():ur(),this.u1j_1?Co().q2():ur());this.v1j_1.v2(),this.w1j_1.v2();for(var P=zA(this,u)+mA(this,u)+bA(this,u)+kA(this,u),F=u.p2(),B=A.f1(Mr(F,10)),N=F.x();N.y();){var H=N.z(),L=Gn(H);B.n(L)}for(var $=B,R=sr(i,"paths"),V=(R??Ar()).p2(),K=A.f1(Mr(V,10)),nr=V.x();nr.y();){var W=nr.z(),tr=Ib(this,W);K.n(tr)}var Q=Dn(Dn($,K),Rv());if(!(this.c1j_1.d1()||!Q.l1("ErrorCode"))){var lr="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw mr.o3(w(lr))}if(!(this.d1j_1==null||!Q.l1("CurrentUser")&&!Q.l1("currentUser"))){var X="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(X))}if(!(this.f1j_1.d1()||this.d1j_1!=null)){var xr="permissions needs currentUser, which says who the permissions belong to.";throw mr.o3(w(xr))}if(!(this.f1j_1.d1()||!Q.l1("Permission")&&!Q.l1("can"))){var br="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(br))}if(!(this.h1j_1==null||!Q.l1("UserPreferences")&&!Q.l1("preferences"))){var dr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(dr))}if(!(this.g1j_1.d1()||this.d1j_1!=null)){var Er="guards needs currentUser, which says who is signed in.";throw mr.o3(w(Er))}var zr;if(this.g1j_1.d1())zr=!0;else{var Pr=Gd(),Br;r:{var pr;if(E(Pr,Z)?pr=Pr.d1():pr=!1,pr){Br=!0;break r}for(var Gr=Pr.x();Gr.y();){var en=Gr.z();if(Q.l1(en)){Br=!1;break r}}Br=!0}zr=Br}if(!zr){var Zr="guards exports "+J(Gd())+", and the generated client already uses one of the names.";throw mr.o3(w(Zr))}if(!(this.n1j_1.d1()||!Q.l1("cookies"))){var _r="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw mr.o3(w(_r))}if(!(Yw(this.l1j_1).d1()||!Q.l1("cookieConsent"))){var Fr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw mr.o3(w(Fr))}for(var Vr=this.n1j_1,Xr=cr.t4(),$r=Vr.x();$r.y();){var tn=$r.z(),_n=Yf(tn.t1h_1),wn=Xr.o2(_n),gn;if(wn==null){var Xn=A.m();Xr.s2(_n,Xn),gn=Xn}else gn=wn;var Qn=gn;Qn.n(tn)}var re=Xr.q2(),ce;r:{for(var ke=re.x();ke.y();){var xe=ke.z();if(xe.c1()>1){ce=xe;break r}}ce=null}var Pe=ce;if(Pe!=null){var Ye="The cookies "+J(Pe," and ",o,o,o,o,ZA)+" would both be called "+Yf(gc(Pe).t1h_1)+" in TypeScript.";throw mr.o3(w(Ye))}var mt=this.b1j_1,ne;r:{for(var Tn=mt.x();Tn.y();){var Bn=Tn.z();if(Q.l1(Bn.w1i_1)){ne=Bn;break r}}ne=null}var bn=ne;if(bn!=null){var Ht="constants("+bn.w1i_1+") would be exported as '"+bn.w1i_1+"', which the generated client already uses. Rename the object.";throw mr.o3(w(Ht))}var ve=Re("client.ts")+yA(this),Gt=this.i1j_1,yt;Gt==null?yt=null:yt=`
reportErrors('`+Gt+`');
`;var wt=yt,Be=ve+(wt??""),bt=this.j1j_1,kt;bt==null?kt=null:kt=`
`+bt+`
`;for(var xt=kt,Fa=O("client.ts",Be+(xt??"")),$a=O("form.ts",Re("form.ts")+RA(this)),Kt=O("form-state.svelte.ts",Re("form-state.svelte.ts")),Ja=O("pending-writes.svelte.ts",Re("pending-writes.svelte.ts")),Ha=this.c1j_1.d1()&&this.f1j_1.d1()?P:da(P,`export {};
`),Zi=ba(this.v1j_1),Ga=O("types.ts",Ha+J(Zi,"",o,o,o,o,VA)+DA(this)+zb(this,"Permission",this.f1j_1)),St=sr(i,"paths"),Wt=St??Ar(),Yt=To(u.p2(),"LucideIcon"),Et=this.s1j_1.q2(),Zt=A.f1(Mr(Et,10)),Ka=Et.x();Ka.y();){var Wa=Ka.z(),Vi=Wa.l1k_1;Zt.n(Vi)}var Xi=[Fa,$a,Kt,Ja,Ga,O("services.ts",BA(this,Wt,kh(kh(Yt,Zt),j)))],zt;t.d1()?zt=[]:zt=[O("loads.ts",Fq(t,this.w1j_1))];var Ya=zt,Qi=Re("index.ts")+(this.b1j_1.d1()?"":`export * from './constants.js';
`)+(t.d1()?"":"export * from './"+da("loads.ts",".ts")+`.js';
`)+(this.p1j_1?`export * from './cookies.js';
`:"")+(this.d1j_1!=null?"export * from './"+da("current-user.svelte.ts",".ts")+`.js';
`:""),Za;this.g1j_1.d1()?Za="":Za="export * from './"+da("guards.ts",".ts")+`.js';
`;var Su=[O("index.ts",Qi+Za+(this.h1j_1!=null?"export * from './"+da("preferences.svelte.ts",".ts")+`.js';
`:""))],Va;this.b1j_1.d1()?Va=[]:Va=[O("constants.ts",Qq(this.b1j_1))];var uo=Va,rs;this.p1j_1?rs=[O("cookies.ts",qq(this.l1j_1))]:rs=[];var fo=rs,Xa=this.d1j_1,ns;Xa==null?ns=null:ns=[O("current-user.svelte.ts",SA(this,Xa))];var co=ns,Vt;co==null?Vt=[]:Vt=co;var Eu=Vt,es;this.g1j_1.d1()?es=[]:es=[O("guards.ts",wA(this))];var zu=es,ts=this.h1j_1,Qa;ts==null?Qa=null:Qa=[O("preferences.svelte.ts",xA(this,ts))];var ri=Qa,Xt;return ri==null?Xt=[]:Xt=ri,cA(this,Kx([Xi,Ya,Su,uo,fo,Eu,zu,Xt,[O("openapi.json",sb().t15(kv.c18(),i)+`
`)]]))}j1m(r,e,t,a){return e=e===o?Ar():e,t=t===o?ur():t,a===o?this.i1m(r,e,t):a.i1m.call(this,r,e,t)}}class Io extends de{constructor(r,e,t){super(r,e),this.d1m_1=t}x1g(){return Re(this.d1m_1)}}class yu{constructor(r,e,t,a,i,s,l){a=a===o?ur():a,i=i===o?ur():i,s=s===o?0:s,l=l===o?!1:l,this.g1i_1=r,this.h1i_1=e,this.i1i_1=t,this.j1i_1=a,this.k1i_1=i,this.l1i_1=s,this.m1i_1=l}toString(){return"GeneratedOperation(name="+this.g1i_1+", method="+this.h1i_1+", path="+this.i1i_1+", pathParameters="+w(this.j1i_1)+", pathTypes="+w(this.k1i_1)+", optionalSlots="+this.l1i_1+", needsInput="+this.m1i_1+")"}hashCode(){var r=pe(this.g1i_1);return r=ai(r,31)+pe(this.h1i_1)|0,r=ai(r,31)+pe(this.i1i_1)|0,r=ai(r,31)+wr(this.j1i_1)|0,r=ai(r,31)+wr(this.k1i_1)|0,r=ai(r,31)+this.l1i_1|0,r=ai(r,31)+qc(this.m1i_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof yu)||this.g1i_1!==r.g1i_1||this.h1i_1!==r.h1i_1||this.i1i_1!==r.i1i_1||!D(this.j1i_1,r.j1i_1)||!D(this.k1i_1,r.k1i_1)||this.l1i_1!==r.l1i_1||this.m1i_1!==r.m1i_1)}}class Jw{constructor(r){this.k1m_1=r}ig(r,e){return this.k1m_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.k1m_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Hw{v1k(r){return"Must be at least "+np(this,r)+"."}w1k(r){return"Must be at most "+np(this,r)+"."}b1l(r,e){return"Must be "+(e?"greater than":"at least")+" "+Rt(r)+"."}c1l(r,e){return"Must be "+(e?"less than":"at most")+" "+Rt(r)+"."}x1k(r){return"Must match "+r+"."}}class Xe{constructor(r,e){this.e1m_1=r,this.f1m_1=e}}class si{constructor(r,e,t){this.y1k_1=r,this.z1k_1=e,this.a1l_1=t}}class Gw{constructor(){ec=this,this.o1k_1=new si("email",Cn(new Xe("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.p1k_1=new si("uri",Cn(new Xe("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.q1k_1=new si("phone",Cn(new Xe("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.r1k_1=new si("slug",Cn(new Xe("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.s1k_1=new si("strong-password",sn([new Xe("^[\\s\\S]{10,}$","at least 10 characters"),new Xe("[a-z]","a lowercase letter"),new Xe("[A-Z]","an uppercase letter"),new Xe("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.t1k_1=sn([this.o1k_1,this.p1k_1,this.q1k_1,this.r1k_1,this.s1k_1])}u1k(r){var e=this.t1k_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(i.y1k_1===r){t=i;break r}}t=null}return t}}function Eq(){return fe(),Kw}var Kw;function zq(){return fe(),Ww}var Ww;function he(n){return fe(),"'"+te(te(te(te(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function Yf(n){fe();var r=zq(),e=dm(n,Ai([46,95,45])),t=r.ff(e,Aq);return Eq().af(t)?t:he(n)}function Iq(n){fe();var r;switch(n.u1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=J(n.v1h_1," | ",o,o,o,o,Tq);break;default:r="number";break}return r}function Cq(n){fe();var r=Iq(n),e=n.u1h_1==="string"||n.u1h_1==="enum",t="kind: "+he(n.u1h_1),a;n.u1h_1==="enum"?a="values: ["+J(n.v1h_1,", ",o,o,o,o,jq)+"]":a=null;var i=a,s=n.w1h_1,l;s==null?l=null:l="default: "+(e?he(s):s);var u=l,f=n.x1h_1,c;f==null?c=null:c="maxAge: "+f.toString();var v=c,h="path: "+he(n.y1h_1),d="sameSite: "+he(n.z1h_1),p="secure: "+n.a1i_1,g=n.c1i_1,y;g==null?y=null:y="category: "+he(g);var x=Ge([t,i,u,v,h,d,p,y]),k=n.w1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+Yf(n.t1h_1)+": typedCookie"+k+"("+he(n.t1h_1)+", { "+J(x,", ")+" })"}function Yw(n){fe();for(var r=A.m(),e=n.x();e.y();){var t=e.z(),a=t.c1i_1;a==null||r.n(a)}return ba(yi(r))}function qq(n){fe();for(var r=A.m(),e=n.x();e.y();){var t=e.z();t.b1i_1||r.n(t)}var a=Oq,i=new jw(a),s=Ft(r,i),l=Yw(n),u="consentStore",f;l.d1()?f=null:f=u;var c=f,v="typedCookie",h;s.d1()?h=null:h=v;for(var d=h,p=Ge([c,d]),g=A.m(),y=s.x();y.y();){var x=y.z();x.c1i_1!=null&&g.n(x)}var k=g,S=J(k,", ",o,o,o,o,Pq),z=Yr.f();return z.fa("import { "+J(p,", ")+` } from './client.js';
`),s.d1()||z.fa(`
export const cookies = {
`+J(s,`,
`,o,o,o,o,Bq())+`
};
`),l.d1()||z.fa(`
export const cookieConsent = consentStore([`+J(l,", ",o,o,o,o,Nq)+"] as const, ["+S+`]);
`),z.toString()}function Aq(n){return fe(),n.gg().e1(1).toUpperCase()}function Tq(n){return fe(),he(n)}function jq(n){return fe(),he(n)}function Oq(n,r){fe();var e=n.t1h_1,t=r.t1h_1;return gt(e,t)}function Pq(n){fe();var r=he(n.t1h_1),e=he(n.y1h_1),t=n.c1i_1,a=t??"";return"{ name: "+r+", path: "+e+", category: "+he(a)+" }"}function Bq(){return Ke(n=>Cq(n),1,0,7,"cookieEntry")}function Nq(n){return fe(),he(n)}var Fd;function fe(){Fd||(Fd=!0,Kw=qe.ze("[A-Za-z_$][A-Za-z0-9_$]*"),Ww=qe.ze("[._-]+([A-Za-z0-9])"))}function Uq(){return Nv(),Zw}var Zw;function Dq(){return Nv(),Vw}var Vw;function Rq(n,r){Nv();var e=Uq(),t=Yr.f(),a=0,i=q(n);if(a<i)do{var s=a;a=a+1|0;var l=rr(n,s);gS(l)&&t.ga(l)}while(a<i);var u=t.toString().toLowerCase(),f=e.o2(u),c;r==null?c=null:c=Dq().o2(r);var v=c,h;if(v==null)h=f;else if(f==null)h=v;else{var d=v.e1i_1,p=d??f.e1i_1,g=v.f1i_1;h=new hn(p,g??f.f1i_1)}return h}var $d;function Nv(){if(!$d){$d=!0;for(var n=cr.t4(),r=sn(["email","emailaddress","mail"]).x();r.y();){var e=r.z();n.s2(e,new hn("email","email"))}for(var t=sn(["password","currentpassword"]).x();t.y();){var a=t.z();n.s2(a,new hn("current-password","password"))}for(var i=sn(["newpassword","passwordrepeat","repeatpassword","confirmpassword","passwordconfirmation"]).x();i.y();){var s=i.z();n.s2(s,new hn("new-password","password"))}for(var l=sn(["name","fullname","displayname"]).x();l.y();){var u=l.z();n.s2(u,new hn("name"))}for(var f=sn(["givenname","firstname","forename"]).x();f.y();){var c=f.z();n.s2(c,new hn("given-name"))}for(var v=sn(["familyname","lastname","surname"]).x();v.y();){var h=v.z();n.s2(h,new hn("family-name"))}for(var d=sn(["username","login","loginname"]).x();d.y();){var p=d.z();n.s2(p,new hn("username"))}for(var g=sn(["phone","phonenumber","tel","telephone","mobile","mobilephone"]).x();g.y();){var y=g.z();n.s2(y,new hn("tel","tel"))}for(var x=sn(["street","streetaddress","address","addressline"]).x();x.y();){var k=x.z();n.s2(k,new hn("street-address"))}for(var S=sn(["postalcode","postcode","zip","zipcode"]).x();S.y();){var z=S.z();n.s2(z,new hn("postal-code"))}for(var I=sn(["city","town","locality"]).x();I.y();){var C=I.z();n.s2(C,new hn("address-level2"))}for(var j=sn(["country","countryname"]).x();j.y();){var P=j.z();n.s2(P,new hn("country-name"))}for(var F=sn(["organization","organisation","company"]).x();F.y();){var B=F.z();n.s2(B,new hn("organization"))}for(var N=sn(["birthday","birthdate","dateofbirth"]).x();N.y();){var H=N.z();n.s2(H,new hn("bday"))}for(var L=sn(["url","website","homepage"]).x();L.y();){var $=L.z();n.s2($,new hn("url","url"))}for(var R=sn(["onetimecode","otp","verificationcode"]).x();R.y();){var V=R.z();n.s2(V,new hn("one-time-code"))}Zw=n.m6(),Vw=Gs([O("email",new hn("email","email")),O("uri",new hn("url","url")),O("phone",new hn("tel","tel")),O("strong-password",new hn("new-password","password"))])}}function Lq(){return Oe(),Xw}var Xw;function Mq(n){Oe();var r=Lq().df(n);return Sc(qi(r,$q))}function Zf(n){Oe();for(var r=qe.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}var i=e,s=J(i,"",o,o,o,o,Jq),l;return q(s)===0?l="Home":l=s,"load"+l}function Fq(n,r){Oe();for(var e=ln(Mr(r,10),16),t=cr.na(e),a=r.x();a.y();){var i=a.z(),s=i.h1i_1+" "+i.i1i_1;t.s2(s,i)}for(var l=t,u=cr.t4(),f=n.x();f.y();){var c=f.z(),v=Zf(c.n1i_1),h=u.o2(v),d;if(h==null){var p=A.m();u.s2(v,p),d=p}else d=h;var g=d;g.n(c)}var y=u.q2(),x;r:{for(var k=y.x();k.y();){var S=k.z();if(S.c1()>1){x=S;break r}}x=null}var z=x;if(z!=null){var I="The pages "+J(z," and ",o,o,o,o,Hq)+" would both get the load "+Zf(gc(z).n1i_1)+".";throw mr.o3(w(I))}var C=Gq,j=new Ow(C),P=Ft(n,j),F=J(P,`
`,o,o,o,o,Vq(l));return`import { inlinePageData } from './client.js';
import { apiWith } from './services.js';

`+F}function $q(n){return Oe(),n.gg().e1(1)}function Jq(n){Oe();var r;if(q(n)>0){var e=G(n,0),t=U1(e),a=He(n,1);r=kr(t)+a}else r=n;return r}function Hq(n){return Oe(),"'"+n.n1i_1+"'"}function Gq(n,r){Oe();var e=n.n1i_1,t=r.n1i_1;return gt(e,t)}function Kq(n){return Oe(),"["+n+"]"}function Wq(n){return Oe(),n+": string"}function Yq(n){return Oe(),"    "+n}function Zq(n){return Oe(),"inline."+n}function Vq(n){return r=>{for(var e=Mq(r.n1i_1),t=r.o1i_1,a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=n.o2(s.u1i()),u;if(l==null){var f="pageLoad: '"+r.n1i_1+"' loads "+s.u1i()+", which is not part of the generated client. Only routes under the API prefixes can be loaded.";throw mr.o3(w(f))}else u=l;var c=u;if(c.m1i_1){var v="pageLoad: "+s.u1i()+" needs a body, query or header that a page load cannot fill. "+("Write the load of '"+r.n1i_1+"' yourself.");throw mr.o3(w(v))}for(var h=c.j1i_1,d=A.f1(Mr(h,10)),p=0,g=h.x();g.y();){var y=g.z(),x=p;p=x+1|0;var k=Pi(x),S=s.t1i_1.o2(y),z=S??y;if(!e.l1(z)){var I="pageLoad: "+s.u1i()+" needs the path parameter '"+y+"', and the page '"+r.n1i_1+"' has ",C;e.d1()?C="none":C=J(e,o,o,o,o,o,Kq);var j=I+C+('. Map it with params = mapOf("'+y+'" to "<page parameter>").');throw mr.o3(w(j))}var P="event.params."+z,F=Vk(c.k1i_1,k)==="number"?"Number("+P+")":P;d.n(F)}var B=d,N=c.l1i_1,H=A.f1(N),L=0;if(L<N)do{L=L+1|0;var $="undefined";H.n($)}while(L<N);var R=Bt(Dn(B,H),"{ silent: true }"),V="        api."+c.g1i_1+"("+J(R)+")";a.n(V)}for(var K=a,nr=r.o1i_1,W=A.f1(Mr(nr,10)),tr=nr.x();tr.y();){var Q=tr.z(),lr=Q.q1i_1;W.n(lr)}var X=W,xr;e.d1()?xr="":xr="; params: { "+J(e,"; ",o,o,o,o,Wq)+" }";var br=xr,dr="export async function "+Zf(r.n1i_1)+"(event: { fetch: typeof fetch; url: URL"+br+` }) {
    const api = apiWith(event);
    const load = () =>
        Promise.all([
`,Er=dr+J(K,`,
`,o,o,o,o,Yq)+`
        ]);
    const inline = inlinePageData(event.url.pathname);
`+("    const ["+J(X)+`] = inline
`);return Er+("        ? ("+J(X,", ","[","]",o,o,Zq)+` as Awaited<ReturnType<typeof load>>)
`)+`        : await load();
`+("    return { "+J(X)+` };
`)+`}
`}}var Jd;function Oe(){Jd||(Jd=!0,Xw=qe.ze("\\[([A-Za-z_][A-Za-z0-9_]*)]"),qe.ze("^[A-Za-z_]"))}function Xq(){return Yi(),Qw}var Qw;function Uv(n,r){Yi();var e;if(n instanceof vr)e=n.e18()?rb(n.f18()):n.f18();else if(n instanceof dn)e=J(n,", ","[","]",o,o,rA(r));else if(n instanceof er){var t;if(n.d1())t="{}";else{var a=n.r2(),i=`
`+r+"}";t=J(a,`,
`,`{
`,i,o,o,nA(r))}e=t}else Ms();return e}function rb(n){return Yi(),"'"+te(te(te(te(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function Qq(n){Yi();var r=eA,e=new Pw(r),t=Ft(n,e);return J(t,`
`,o,o,o,o,tA)}function rA(n){return r=>Uv(r,n)}function nA(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(Xq().af(e)?e:rb(e))+": "+Uv(t,n+"    ")}}function eA(n,r){Yi();var e=n.w1i_1,t=r.w1i_1;return gt(e,t)}function tA(n){return Yi(),"export const "+n.w1i_1+" = "+Uv(new er(n.x1i_1),"")+` as const;
`}var Hd;function Yi(){Hd||(Hd=!0,Qw=qe.ze("[A-Za-z_$][A-Za-z0-9_$]*"))}function nb(){return Sr(),eb}var eb;function Dv(){return Sr(),tb}var tb;function ab(){return Sr(),ib}var ib;function sb(){return Sr(),ob}var ob;function Gd(){return Sr(),lb}var lb;function ub(){return Sr(),fb}var fb;function Co(){return Sr(),cb}var cb;function aA(){return Sr(),vb}var vb;function iA(){return Sr(),hb}var hb;function sA(){return Sr(),db}var db;function Rv(){return Sr(),pb}var pb;function oA(){return Sr(),_b}var _b;function lA(){return Sr(),gb}var gb;function uA(){return Sr(),mb}var mb;function fA(){return Sr(),yb}var yb;function cA(n,r){var e=Gs(r.slice());return lt(e,O(".gitattributes",`# Generated by ktor-svelte. Do not edit.
# See https://nijasc.github.io/ktor-svelte/features/typescript
`+D_(r,"",o,o,o,o,XA)))}function vA(n,r){for(var e=sr(r,"paths"),t=e??Ar(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();EA(n,l)&&a.s2(s.k2(),s.l2())}var u=ku(a);return new er(lt(r,O("paths",new er(u))))}function hA(n,r){if(n.a1j_1.d1())return r;for(var e=sr(r,"components"),t=e??new er(Ar()),a=sr(t,"schemas"),i=a??Ar(),s=$c(i),l=n.a1j_1.x();l.y();){var u=l.z(),f=u.y1j_1,c=s.o2(f);if(c==null){var v=Ae().v15(u.z1j_1);s.s2(f,v)}}for(var h=sr(r,"paths"),d=h??Ar(),p=cr.na(d.c1()),g=d.r2().x();g.y();){for(var y=g.z(),x=y.k2(),k=y.l2(),S=Or(k),z=cr.na(S.c1()),I=S.r2().x();I.y();){var C=I.z(),j=C.k2(),P=C.k2(),F=C.l2(),B,N;nb().l1(P)?N=F instanceof er:N=!1,N?B=gA(n,F):B=F;var H=B;z.s2(j,H)}var L=new er(z);p.s2(x,L)}var $=p;return new er(lt(lt(r,O("paths",new er($))),O("components",new er(lt(t,O("schemas",new er(s)))))))}function dA(n,r){var e=sr(r,"components"),t;if(e==null)return r;t=e;for(var a=t,i=sr(a,"schemas"),s=i??Ar(),l=cr.t4(),u=s.r2().x();u.y();){var f=u.z(),c=f.l2(),v;c instanceof er?v=pA(n,c):v=!1,v&&l.s2(f.k2(),f.l2())}for(var h=cr.na(l.c1()),d=l.r2().x();d.y();){var p=d.z(),g=p.k2(),y=p.l2(),x=new er(lt(Or(y),O("type",En("object"))));h.s2(g,x)}var k=h;if(k.d1())return r;for(var S=cr.t4(),z=s.r2().x();z.y();){var I=z.z(),C=I.k2();(E(k,xn)?k:m()).m2(C)||S.s2(I.k2(),I.l2())}for(var j=S.r2(),P=ln(Mr(j,10),16),F=cr.na(P),B=j.x();B.y();){var N=B.z(),H=N.k2(),L=N.l2(),$=L instanceof er?L:null,R=O($==null?null:Kd(n,$),H);F.s2(R.lh_1,R.mh_1)}for(var V=F,K=cr.na(k.c1()),nr=k.r2().x();nr.y();){var W=nr.z(),tr=W.k2(),Q=W.k2(),lr=W.l2(),X=V.o2(Kd(n,lr)),xr=X??Q;K.s2(tr,xr)}for(var br=K,dr=cr.t4(),Er=s.r2().x();Er.y();){var zr=Er.z(),Pr=zr.k2();(br.o2(Pr)==null||br.o2(Pr)===Pr)&&dr.s2(zr.k2(),zr.l2())}for(var Br=cr.na(dr.c1()),pr=dr.r2().x();pr.y();){var Gr=pr.z(),en=Gr.k2(),Zr=Gr.k2(),_r=Gr.l2(),Fr=k.o2(Zr),Vr=Fr??_r;Br.s2(en,Vr)}var Xr=Br,$r=new er(lt(a,O("schemas",new er(Xr))));return Or(nc(br,n,new er(lt(r,O("components",$r)))))}function pA(n,r){var e;if(D(ft(pt(n,r)),ha(["object","null"]))){var t=sr(r,"properties");e=!(t??Ar()).d1()}else e=!1;return e}function Kd(n,r){return new er(WS(r,"title"))}function _A(n,r){var e=new Tt,t=new My,a=new Tt;wl(a,"$ref","#/components/schemas/"+r);var i=a.g17();t.t18(i);var s=new Tt;wl(s,"type","null");var l=s.g17();t.t18(l);var u=t.g17();return e.r18("oneOf",u),e.g17()}function gA(n,r){for(var e=sr(r,"responses"),t=e??Ar(),a=$c(t),i=n.a1j_1.x();i.y();){var s=i.z(),l=new Tt;wl(l,"description","");var u=new Tt,f="application/json",c=new Tt,v=new Tt;wl(v,"$ref","#/components/schemas/"+s.y1j_1);var h=v.g17();c.r18("schema",h);var d=c.g17();u.r18(f,d);var p=u.g17();l.r18("content",p);for(var g=l.g17(),y=s.a1k_1.x();y.y();){var x=y.z(),k=x.toString(),S=a.o2(k);if(S==null){var z=g;a.s2(k,z)}}}return new er(lt(r,O("responses",new er(a))))}function mA(n,r){var e=n.z1i_1,t;if(e==null)return"";t=e;var a=t,i=Or(Ae().v15(a)),s=Pn.i1();return`
`+Lv(n,"PublicConfig",i,s,r)}function yA(n){var r=n.e1j_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+te(te(t,"\\","\\\\"),"'","\\'")+`';
`}function wA(n){var r=n.g1j_1,e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!1;break r}for(var a=r.x();a.y();){var i=a.z();if(i.c1k_1!=null){e=!0;break r}}e=!1}var s=e,l=n.g1j_1,u=QA,f=new Dw(u),c=Ft(l,f),v=J(c,"",o,o,o,o,rT),h=n.e1j_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.e1j_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.e1j_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+da("current-user.svelte.ts",".ts")+`.js';
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
`}function bA(n,r){var e=n.d1j_1,t;if(e==null)return"";t=e;var a=t;return wb(n,"CurrentUser",a.d1k_1,a.e1k_1,r)}function kA(n,r){var e=n.h1j_1,t;if(e==null)return"";t=e;var a=t;return wb(n,"UserPreferences",a.g1k_1,a.h1k_1,r)}function wb(n,r,e,t,a){var i=a.p2(),s;r:{for(var l=i.x();l.y();){var u=l.z();if(Gn(u)===e){s=u;break r}}s=null}var f=s;if(f!=null)return`
export type `+r+" = "+Gn(f)+`;
`;var c=Or(Ae().v15(t)),v=Pn.i1();return`
`+Lv(n,r,c,v,a)}function xA(n,r){for(var e=sr(Or(Ae().v15(r.h1k_1)),"properties"),t=(e??Ar()).p2(),a=r.k1k_1,i=cr.t4(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2();t.l1(u)&&i.s2(l.k2(),l.l2())}var f=i,c=f.r2(),v=J(c,", ",o,o,o,o,nT),h=sb().t15(kv.c18(),Ae().v15(r.j1k_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,p=ue(r.i1k_1),g;return q(v)===0?g="":g=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(p+", state, defaults, {"+g+`});
`)}function SA(n,r){var e=!n.f1j_1.d1(),t=e?"CurrentUser, Permission":"CurrentUser",a=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.f1k_1+`', state);
`),i;return e?i=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:i="",a+i}function EA(n,r){var e,t=n.y1i_1,a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!0;break r}for(var s=t.x();s.y();){var l=s.z();if(r===l||Ce(r,l+"/")){a=!1;break r}}a=!0}if(a){var u;if(n.r1j_1.d1())u=!0;else{var f=n.r1j_1,c;r:{var v;if(E(f,Z)?v=f.d1():v=!1,v){c=!1;break r}for(var h=f.x();h.y();){var d=h.z();if(d==="/"||r===d||Ce(r,d+"/")){c=!0;break r}}c=!1}u=c}e=u}else e=!1;return e}function zA(n,r){if(r.d1()&&n.q1j_1.d1()&&n.s1j_1.d1()&&!n.t1j_1&&!n.u1j_1)return`export {};
`;for(var e=Pn.i1(),t=A.f1(r.c1()),a=r.r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=O(s,Lv(n,Gn(s),Or(l),e,r));t.n(u)}for(var f=t,c=n.s1j_1.q2(),v=A.m(),h=c.x();h.y();){var d=h.z();d.n1k_1&&v.n(d)}for(var p=A.f1(Mr(v,10)),g=v.x();g.y();){var y=g.z(),x=O(y.l1k_1,xb(n,y.l1k_1,y.m1k_1));p.n(x)}var k=p,S=Dn(f,k),z=eT,I=new Rw(z),C=Ft(S,I),j=J(C,`
`,o,o,o,o,tT),P;e.l1("LucideIcon")?P=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:P="";var F=P,B=r.q2(),N;r:{var H;if(E(B,Z)?H=B.d1():H=!1,H){N=!1;break r}for(var L=B.x();L.y();){var $=L.z();if(Fv(n,Or($))){N=!0;break r}}N=!1}var R=N,V=`declare const brand: unique symbol;
`,K;R||n.u1j_1?K=V:K=null;var nr=K,W=Re("dates.ts"),tr;n.t1j_1?tr=W:tr=null;var Q=tr,lr=Re("quantities.ts"),X;n.u1j_1?X=lr:X=null;var xr=X,br;q(j)===0?br=null:br=j;var dr=br,Er=J(Ge([nr,Q,xr,dr]),`
`),zr;return q(Er)===0?zr=`export {};
`:zr=Er,F+zr}function Lv(n,r,e,t,a){var i=ql(n,Cb(n,e),""),s=wu(n,e),l;if(s!=null){var u=e.pf("enum"),f=u==null?null:ys(u),c;if(f==null)c=null;else{var v;r:{var h;if(E(f,Z)?h=f.d1():h=!1,h){v=!0;break r}for(var d=f.x();d.y();){var p=d.z();if(p instanceof me){v=!1;break r}}v=!0}c=v}l=c===!0}else l=!1;if(l)return i+xb(n,r,s);if(Fv(n,e)){var g=Wn(n,e,t);return i+("export type "+r+" = "+g+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+g+"): "+r+" => value as "+r+`;
`)}if($v(n,e))return i+("export interface "+r+" "+Sb(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+Qf(n,e,a,"    ",$t())+`),
`)+CA(n,e)+TA(n,r,e,a)+`};
`;var y=i+("export type "+r+" = "+Wn(n,e,t)+`;
`),x=IA(n,r,e,a);return y+(x??"")}function IA(n,r,e,t){var a=sr(e,"discriminator"),i=a==null?null:Cr(a,"propertyName"),s;if(i==null)return null;s=i;var l=s,u=pn(e,"oneOf"),f=u??pn(e,"anyOf"),c;if(f==null)return null;c=f;var v=c,h=sr(e,"discriminator"),d=h==null?null:sr(h,"mapping"),p=d==null?null:d.p2(),g=p==null?null:_t(p),y=g??ur(),x;if(y.d1()){for(var k=A.f1(Mr(v,10)),S=v.x();S.y();){var z=S.z(),I=Il(n,Or(z)),C;if(I==null)C=null;else{var j=t.o2(I);C=j==null?null:Or(j)}var P=C,F=P??Or(z),B=sr(F,"properties"),N=B==null?null:sr(B,l),H=N==null?null:pn(N,"enum"),L=H==null?null:mc(H),$=L instanceof vr?L:null,R=$==null?null:Un($),V;if(R==null)return null;V=R;var K=V;k.n(K)}x=k}else x=y;var nr=x;if(nr.d1())return null;var W=An(n,En(l)),tr=J(nr,o,o,o,o,o,aT(n));return`
export const `+r+` = {
`+("    types: ["+tr+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+W+"]]: (value: Extract<"+r+", { "+We(l)+`: K }>) => R }): R =>
`)+("        (cases[value["+W+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function CA(n,r){for(var e=xu(r,"required"),t=sr(r,"properties"),a=t??Ar(),i=A.m(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2(),f=l.l2(),c=Dn(AA(n,Or(f),e.l1(u)),qA(n,u,Or(f))),v;if(c.d1())v=null;else{var h=We(u);v="        "+h+": { "+J(c,o,o,o,o,o,iT)+" },"}var d=v;d==null||i.n(d)}var p=i;return p.d1()?"":`    bounds: {
`+J(p,`
`)+`
    },
`}function qA(n,r,e){var t;if(pt(n,e).l1("string"))t=!1;else{var a=Cl(n,e),i=a==null?null:pt(n,a);t=(i==null?null:i.l1("string"))!==!0}if(t)return ur();var s=Cr(e,"format"),l;if(s==null){var u=Cl(n,e);l=u==null?null:Cr(u,"format")}else l=s;var f=Rq(r,l),c;if(f==null)return ur();c=f;var v=c,h=v.e1i_1,d;h==null?d=null:d=O("autocomplete",An(n,En(h)));var p=d,g=v.f1i_1,y;return g==null?y=null:y=O("type",An(n,En(g))),Ge([p,y])}function AA(n,r,e){var t=pt(n,r).l1("integer"),a=O("required","true"),i;bb(n,r,e)?i=a:i=null;var s=i,l=Se(n,r,"minLength"),u;l==null?u=null:u=O("minlength",Rt(l));var f=u,c=Se(n,r,"maxLength"),v;c==null?v=null:v=O("maxlength",Rt(c));var h=v,d=Zd(n,r,t,"minimum","exclusiveMinimum",1),p;d==null?p=null:p=O("min",d);var g=p,y=Zd(n,r,t,"maximum","exclusiveMaximum",-1),x;y==null?x=null:x=O("max",y);var k=x,S=Cr(r,"pattern"),z;return S==null?z=null:z=O("pattern",An(n,En(S))),Ge([s,f,h,g,k,z])}function bb(n,r,e){if(Jv(n,r)||r.pf("enum")!=null)return!1;var t;if(pt(n,r).l1("string")){var a=Se(n,r,"minLength");t=(a??0)>=1}else t=e&&kb(n,r);return t}function kb(n,r){var e=pt(n,r),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function TA(n,r,e,t){if(!Mv(n,e,t,$t()))return"";for(var a=xu(e,"required"),i=sr(e,"properties"),s=i??Ar(),l=A.m(),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=Or(v),d="value"+(Dv().af(c)?"."+c:"["+An(n,En(c))+"]"),p=Dn(jA(n,c,d,h,a.l1(c)),Vf(n,h,d,Xf(n,c),"        ",0,t));Ui(l,p)}var g=l,y="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return y+J(g,"",o,o,o,o,sT)+`        return errors;
    },
`}function Mv(n,r,e,t){var a;if($v(n,r)){var i=sr(r,"properties"),s=(i??Ar()).q2(),l;r:{var u;if(E(s,Z)?u=s.d1():u=!1,u){l=!1;break r}for(var f=s.x();f.y();){var c=f.z(),v=Or(c),h,d,p=fA(),g;n:{var y;if(E(p,Z)?y=p.d1():y=!1,y){g=!1;break n}for(var x=p.x();x.y();){var k=x.z();if(Se(n,v,k)!=null||k==="pattern"&&Cr(v,k)!=null){g=!0;break n}}g=!1}if(g?d=!0:d=jl().u1k(Cr(v,"format"))!=null,d)h=!0;else{var S=Il(n,v),z;if(S==null)z=null;else{var I;if(t.l1(S))I=!1;else{var C=e.o2(S),j=C instanceof er?C:null,P;j==null?P=null:P=Mv(n,j,e,To(t,S)),I=P===!0}z=I}h=z===!0}if(h){l=!0;break r}}l=!1}a=l}else a=!1;return a}function Il(n,r){var e=Cr(r,"$ref");if(e!=null)return Ri(e,47);var t=Cl(n,r);if(t!=null)return Il(n,t);if(pt(n,r).l1("array")){var a=sr(r,"items"),i;return a==null?i=null:i=Il(n,a),i}return null}function Cl(n,r){var e=pn(r,"oneOf"),t=e??pn(r,"anyOf"),a;if(t==null)a=null;else{for(var i=A.m(),s=t.x();s.y();){var l=s.z(),u=l instanceof er?l:null;u==null||i.n(u)}a=i}var f=a,c;if(f==null)c=null;else{for(var v=A.m(),h=f.x();h.y();){var d=h.z();D(pt(n,d),Cn("null"))||v.n(d)}c=v}var p=c;return p==null?null:mc(p)}function jA(n,r,e,t,a){var i=An(n,En(r)),s=Se(n,t,"minLength"),l=s==null?null:Po(s),u=Se(n,t,"maxLength"),f=u==null?null:Po(u),c=t.pf("pattern"),v=c instanceof vr?c:null,h;if(v==null)h=null;else{var d;v.e18()?d=v:d=null,h=d}var p=h,g=p==null?null:p.f18(),y=jl().u1k(Cr(t,"format")),x=Se(n,t,"minimum"),k;x==null?k=null:k=O(x,!1);var S=k,z;if(S==null){var I=Se(n,t,"exclusiveMinimum"),C;I==null?C=null:C=O(I,!0),z=C}else z=S;var j=z,P=Se(n,t,"maximum"),F;P==null?F=null:F=O(P,!1);var B=F,N;if(B==null){var H=Se(n,t,"exclusiveMaximum"),L;H==null?L=null:L=O(H,!0),N=L}else N=B;var $=N,R=A.m();if(bb(n,t,a)&&kb(n,t)){var V="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Qt(i,n,"Required.");R.n(V)}if(l!=null||f!=null||g!=null||y!=null){var K="        if (typeof "+e+" === 'string') {";if(R.n(K),l!=null||f!=null){var nr="            const length = [..."+e+"].length;";R.n(nr)}if(l!=null){var W="            if (length < "+l+") "+Qt(i,n,oi.v1k(l));R.n(W)}if(f!=null){var tr="            if (length > "+f+") "+Qt(i,n,oi.w1k(f));R.n(tr)}if(g!=null){var Q=n.v1j_1,lr=Qd();Q.n(lr);var X="            if (!matches("+An(n,En(g))+", "+e+")) "+Qt(i,n,oi.x1k(g));R.n(X)}if(y!=null){var xr=n.v1j_1,br=Qd();xr.n(br);var dr=J(y.z1k_1," && ",o,o,o,o,oT(n,e)),Er="            if (!("+dr+")) "+Qt(i,n,y.a1l_1);R.n(Er)}var zr="        }";R.n(zr)}if(j!=null||$!=null){var Pr="        if (typeof "+e+" === 'number') {";if(R.n(Pr),j!=null){var Br=j.qh(),pr=j.rh(),Gr=pr?"<=":"<",en="            if ("+e+" "+Gr+" "+Rt(Br)+") "+Qt(i,n,oi.b1l(Br,pr));R.n(en)}if($!=null){var Zr=$.qh(),_r=$.rh(),Fr=_r?">=":">",Vr="            if ("+e+" "+Fr+" "+Rt(Zr)+") "+Qt(i,n,oi.c1l(Zr,_r));R.n(Vr)}var Xr="        }";R.n(Xr)}if(!R.d1()){var $r=n.v1j_1,tn=Nb();$r.n(tn)}return R}function Vf(n,r,e,t,a,i,s){var l=Cr(r,"$ref");if(l!=null){var u=Ri(l,47),f=s.o2(u),c=f instanceof er?f:null,v;if(c==null)return ur();v=c;var h=v;if(!Mv(n,h,s,$t()))return ur();var d=n.v1j_1,p=sn([Nb(),$T()]);return Ui(d,p),Cn(a+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Gn(u)+".validate("+e+"));")}var g=Cl(n,r);if(g!=null)return Vf(n,g,e,t,a,i,s);if(!pt(n,r).l1("array"))return ur();var y=sr(r,"items"),x;if(y==null)return ur();x=y;var k=x,S=i===0?"":""+(i+1|0),z="item"+S,I="index"+S,C=Vf(n,k,z,t+"[${"+I+"}]",a+"        ",i+1|0,s);return C.d1()?ur():Dn(Dn(sn([a+"if (Array.isArray("+e+")) {",a+"    "+e+".forEach(("+z+", "+I+") => {"]),C),sn([a+"    });",a+"}"]))}function Xf(n,r){return te(te(te(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function Se(n,r,e){var t=r.pf(e),a=t instanceof vr?t:null,i;if(a==null)i=null;else{var s;a.e18()?s=null:s=a,i=s}var l=i,u=l==null?null:Un(l);return u==null?null:Dc(u)}function pt(n,r){var e=r.pf("type"),t;if(e instanceof dn){for(var a=A.f1(Mr(e,10)),i=e.x();i.y();){var s=i.z(),l=On(s).f18();a.n(l)}t=a}else e instanceof vr?t=Cn(e.f18()):t=ur();return t}function xb(n,r,e){var t=J(e,"",o,o,o,o,lT(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function OA(n,r,e){for(var t=cr.t4(),a=ku(e).r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=wu(n,Or(l));if(u!=null){var f=ft(u),c=t.o2(f);if(c==null){var v=new Wf(Gn(s),u,!1);t.s2(f,v)}}}for(var h=cr.t4(),d=cr.t4(),p=e.r2().x();p.y();){var g=p.z(),y=g.k2(),x=g.l2();ui(n,h,d,x,Gn(y),Gn(y),!0)}var k=sr(r,"paths");k==null||ui(n,h,d,k,"","",!1);for(var S=h.p2(),z=A.m(),I=S.x();I.y();){var C=I.z(),j;(E(t,xn)?t:m()).m2(C)?j=!1:j=!D(C,n.q1j_1),j&&z.n(C)}for(var P=uT(d),F=new Lw(P),B=Ft(z,F),N=cr.na(ln(Mr(B,10),16)),H=B.x();H.y();){var L=H.z(),$=Ie(h,L),R=fT,V=Xk($,tE([R,cT]));N.s2(L,V)}for(var K=N,nr=K.q2(),W=new Fw(nr),tr=o2(W),Q=e.p2(),lr=A.f1(Mr(Q,10)),X=Q.x();X.y();){var xr=X.z(),br=Gn(xr);lr.n(br)}for(var dr=yc(Bt(Bt(lr,"LucideIcon"),"PublicConfig")),Er=cr.oa(t),zr=B.x();zr.y();){var Pr=zr.z(),Br=Ie(K,Pr),pr=Gn(Br.e1l_1),Gr;if(Ie(tr,pr)>1||dr.l1(pr)){var en=Br.d1l_1,Zr;q(en)===0?Zr=pr:Zr=en+pr,Gr=Zr}else Gr=pr;var _r=Gr,Fr;if(!dr.l1(_r))Fr=_r;else{var Vr=Jc(2,vT),Xr=qi(Vr,hT(_r)),$r;r:{for(var tn=Xr.x();tn.y();){var _n=tn.z();if(!dr.l1(_n)){$r=_n;break r}}throw jr.r("Sequence contains no element matching the predicate.")}Fr=$r}var wn=Fr;dr.n(wn);var gn=new Wf(wn,Ie(d,Pr),!0);Er.s2(Pr,gn)}return Er}function wu(n,r){var e=pn(r,"enum"),t;if(e==null)return null;t=e;for(var a=t,i=A.m(),s=a.x();s.y();){var l=s.z();l instanceof me||i.n(l)}var u=i,f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof vr?d=!h.e18():d=!0,d){f=!0;break r}}f=!1}if(f)return null;for(var p=A.f1(Mr(u,10)),g=u.x();g.y();){var y=g.z(),x=On(y).f18();p.n(x)}var k=yi(p),S;return k.c1()>1?S=k:S=null,S}function Fv(n,r){var e,t,a=iA(),i=r.pf("type"),s=i instanceof vr?i:null;if(Qk(a,s==null?null:Un(s))?t=r.pf("title")!=null:t=!1,t){var l=r.p2(),u;r:{var f;if(E(l,Z)?f=l.d1():f=!1,f){u=!0;break r}for(var c=l.x();c.y();){var v=c.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function $v(n,r){return sr(r,"properties")!=null&&r.pf("allOf")==null}function Qf(n,r,e,t,a){var i=sr(r,"properties"),s=i??Ar();if(s.d1())return"{}";for(var l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=t+"    "+We(c)+": "+_a(n,Or(v),e,t+"    ",a)+",";l.n(h)}var d=l;return J(Bt(Dn(Cn("{"),d),t+"}"),`
`)}function _a(n,r,e,t,a){if(Jv(n,r))return"null";var i=Cr(r,"$ref");if(i!=null){var s=Ri(i,47),l=e.o2(s),u=l instanceof er?l:null,f;if(u==null)return"null";f=u;var c=f;return $v(n,c)?Gn(s)+".empty()":Fv(n,c)?Gn(s)+"("+_a(n,c,e,t,To(a,s))+")":a.l1(s)?"null":_a(n,c,e,t,To(a,s))}var v=r.pf("enum");if(v!=null){var h=Ju(ys(v)),d;h==null?d=null:d=An(n,h);var p=d;return p??"null"}var g=r.pf("const");if(g!=null)return An(n,g);var y=pn(r,"oneOf"),x=y??pn(r,"anyOf");if(x!=null){var k=Ju(x),S;k==null?S=null:S=_a(n,Or(k),e,t,a);var z=S;return z??"null"}var I=pn(r,"allOf");if(I!=null)return I.c1()===1?_a(n,Or($_(I)),e,t,a):J(I,", ","{ "," }",o,o,dT(n,e,t,a));var C=r.pf("type"),j;if(C instanceof dn){var P=Ju(C),F=P==null?null:On(P);j=F==null?null:F.f18()}else C instanceof vr?j=Un(C):j=null;var B=j,N;switch(B){case"string":var H=Kv(r),L;H==null?L=null:L="'' as "+H;var $=L,R;if($==null){var V=jb(r),K;V==null?K=null:K=Ie(aA(),V)+" as "+V,R=K}else R=$;var nr=R;N=nr??"''";break;case"integer":case"number":N="0";break;case"boolean":N="false";break;case"array":var W=pn(r,"prefixItems"),tr;W==null?tr=null:tr=J(W,", ","[","]",o,o,pT(n,e,t,a));var Q=tr;N=Q??"[]";break;case"object":N=Qf(n,r,e,t,a);break;case null:N=r.pf("properties")!=null?Qf(n,r,e,t,a):"null";break;default:N="null";break}return N}function Jv(n,r){var e=r.pf("type"),t=pn(r,"oneOf"),a=t??ur(),i=pn(r,"anyOf"),s=i??ur(),l=Dn(a,s),u,f,c,v,h;if(e instanceof dn){var d;r:{var p;if(E(e,Z)?p=e.d1():p=!1,p){d=!1;break r}for(var g=e.x();g.y();){var y=g.z();if(On(y).f18()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof vr?x=e.f18()==="null":x=!1,v=x}if(v)c=!0;else{var k=r.pf("nullable"),S=k instanceof vr?k:null;c=(S==null?null:Un(S))==="true"}if(c)f=!0;else{var z=pn(r,"enum"),I=z??ur(),C;r:{var j;if(E(I,Z)?j=I.d1():j=!1,j){C=!1;break r}for(var P=I.x();P.y();){var F=P.z();if(F instanceof me){C=!0;break r}}C=!1}f=C}if(f)u=!0;else{var B;r:{var N;if(E(l,Z)?N=l.d1():N=!1,N){B=!1;break r}for(var H=l.x();H.y();){var L=H.z(),$=L instanceof er?L:null,R;if($==null?R=null:R=Jv(n,$),R===!0){B=!0;break r}}B=!1}u=B}return u}function Sb(n,r,e,t){for(var a=xu(r,"required"),i=sr(r,"properties"),s=i??Ar(),l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=a.l1(c)?"":"?",d=Tb(Or(v))?"readonly ":"",p=ql(n,Cb(n,Or(v)),t+"    ")+(t+"    "+d+We(c)+h+": "+Wn(n,Or(v),e,t+"    ")+";");l.n(p)}var g=l;return J(Bt(Dn(Cn("{"),g),t+"}"),`
`)}function Wn(n,r,e,t){t=t===o?"":t;var a=Cr(r,"$ref");if(a!=null){var i=Gn(Ri(a,47));return e.n(i),i}var s=r.pf("enum");if(s!=null){for(var l=ys(s),u=A.m(),f=l.x();f.y();){var c=f.z(),v=c instanceof vr?c:null,h=v==null?null:Un(v);h==null||u.n(h)}var d=ft(u),p;if(n.q1j_1.d1()?p=!1:p=D(d,n.q1j_1),p){var g="LucideIcon";return e.n(g),"LucideIcon"}var y=wu(n,r);if(y!=null){var x=n.s1j_1.o2(ft(y));if(x!=null){var k=x.l1k_1;e.n(k);var S,z=ys(s),I;r:{var C;if(E(z,Z)?C=z.d1():C=!1,C){I=!1;break r}for(var j=z.x();j.y();){var P=j.z();if(P instanceof me){I=!0;break r}}I=!1}return I?S=x.l1k_1+" | null":S=x.l1k_1,S}}var F=ys(s),B=J(F," | ",o,o,o,o,_T(n)),N;return q(B)===0?N="never":N=B,N}var H=r.pf("const");if(H!=null)return An(n,H);var L=pn(r,"oneOf");if(L!=null)return Yd(n,L,e,t);var $=pn(r,"anyOf");if($!=null)return Yd(n,$,e,t);var R=pn(r,"allOf");if(R!=null)return J(R," & ",o,o,o,o,gT(n,e,t));var V=r.pf("type"),K;if(V==null)K=r.pf("properties")!=null?Eb(n,r,e,t):"unknown";else if(V instanceof dn){for(var nr=A.f1(Mr(V,10)),W=V.x();W.y();){var tr=W.z(),Q=Wd(n,On(tr).f18(),r,e,t);nr.n(Q)}K=J(yi(nr)," | ")}else K=Wd(n,On(V).f18(),r,e,t);return K}function Wd(n,r,e,t,a){var i;switch(r){case"string":var s=Kv(e),l=s??jb(e),u;l==null?u=null:(t.n(l),u=l);var f=u;i=f??"string";break;case"integer":case"number":i="number";break;case"boolean":i="boolean";break;case"null":i="null";break;case"array":i=PA(n,e,t,a);break;case"object":i=Eb(n,e,t,a);break;default:i="unknown";break}return i}function PA(n,r,e,t){var a=pn(r,"prefixItems");if(a!=null)return J(a,", ","[","]",o,o,mT(n,e,t));var i=r.pf("items"),s=i==null?null:Or(i),l;if(s==null)return"unknown[]";l=s;var u=l,f=Wn(n,u,e,t);return js(f," | ")||js(f," & ")?"("+f+")[]":f+"[]"}function Eb(n,r,e,t){var a=sr(r,"properties");if(!(a??Ar()).d1())return Sb(n,r,e,t);var i=r.pf("additionalProperties"),s=i instanceof er?i:null;return s!=null?"Record<string, "+Wn(n,s,e,t)+">":"Record<string, unknown>"}function Yd(n,r,e,t){for(var a=A.f1(Mr(r,10)),i=r.x();i.y();){var s=i.z(),l=Wn(n,Or(s),e,t);a.n(l)}return J(yi(a)," | ")}function An(n,r){var e;if(r instanceof me)e="null";else{var t;r instanceof vr?t=r.e18():t=!1,t?e=ue(r.f18()):r instanceof vr?e=r.f18():e="unknown"}return e}function BA(n,r,e){for(var t=Pn.i1(),a=cr.t4(),i=A.m(),s=cr.t4(),l=r.r2().x();l.y();)for(var u=l.z(),f=u.k2(),c=u.l2(),v=Or(c),h=nb().x();h.y();){var d=h.z(),p=sr(v,d);if(p!=null){var g=Ib(n,f),y=a.o2(g),x;if(y==null){var k=A.m();a.s2(g,k),x=k}else x=y;var S=x,z=$A(n,f,d,v,p);S.n(z)}}var I=yc(Rv());I.g1(a.p2());for(var C=I,j=ku(a),P=A.f1(j.c1()),F=j.r2().x();F.y();){var B=F.z(),N=B.k2(),H=B.l2(),L=Pn.i1(),$=Yr.f(),R=J(H,`
`,o,o,o,o,yT(t,n,L,N,i,s,C,$)),V=$.toString()+`
export const `+N+` = {
`+R+`
};
`;P.n(V)}for(var K=P,nr=ba(t),W=A.m(),tr=nr.x();tr.y();){for(var Q=tr.z(),lr=A.f1(Mr(e,10)),X=e.x();X.y();){var xr=X.z(),br=Gn(xr);lr.n(br)}lr.l1(Q)&&W.n(Q)}var dr=W,Er,zr=HS(a.q2()),Pr;r:{var Br;if(E(zr,Z)?Br=zr.d1():Br=!1,Br){Pr=!1;break r}for(var pr=zr.x();pr.y();){var Gr=pr.z();if(Gr.m1l_1){Pr=!0;break r}}Pr=!1}Pr?Er="ApiError, request, stream":Er="ApiError, request";var en=Er,Zr=n.c1j_1.d1()?en:en+", codeMessages, errorCode",_r=Yr.f();_r.fa("import { "+Zr+`, type RequestOptions } from './client.js';
`);var Fr=n.z1i_1!=null?Bt(dr,"PublicConfig"):dr,Vr=n.c1j_1.d1()?Fr:ba(Bt(Fr,"ErrorCode"));Vr.d1()||_r.fa("import type { "+J(Vr)+` } from './types.js';
`),_r.fa(`
`);for(var Xr=K.x();Xr.y();){var $r=Xr.z();_r.fa($r).fa(`
`)}if(_r.fa(LA(n,i)),n.c1j_1.d1()||_r.fa(sA()),!s.d1()){_r.fa(`export const uploadRules = {
`);for(var tn=s.r2(),_n=wT,wn=new Mw(_n),gn=Ft(tn,wn).x();gn.y();){var Xn=gn.z(),Qn=Xn.k2(),re=Xn.l2();_r.fa("    '"+Qn+"': "+re+`,
`)}_r.fa(`} as const;

`)}return n.z1i_1!=null&&_r.fa(Re("public-config.ts")),_r.fa("export const api = { "+J(ba(a.p2()))+` };
`),_r.fa(Re("api-with.ts")),_r.toString()}function NA(n,r){var e=sr(r,"properties"),t;if(e==null)t=null;else{var a;e.d1()?a=null:a=e,t=a}var i=t,s;if(i==null)return null;s=i;var l=s,u=ft(xu(r,"required")),f=l.r2(),c=J(f,"; ",o,o,o,o,bT(u));return"{ "+c+" }"}function UA(n,r){var e=r.pf("maxBytes"),t=e==null?null:On(e),a=t==null?null:m6(t),i;a==null?i=null:i="maxBytes: "+a.toString();var s=i,l=pn(r,"types"),u;if(l==null)u=null;else{for(var f=A.f1(Mr(l,10)),c=l.x();c.y();){var v=c.z(),h=ue(On(v).f18());f.n(h)}u=f}var d=u,p;if(d==null)p=null;else{var g;d.d1()?g=null:g=d,p=g}var y=p,x;y==null?x=null:x="types: ["+J(y)+"]";var k=x,S=r.pf("maxFiles"),z=S==null?null:On(S),I=z==null?null:y6(z),C;I==null?C=null:C="maxFiles: "+I;var j=Ge([s,k,C]);return"{ "+J(j)+" }"}function DA(n){return zb(n,"ErrorCode",n.c1j_1)}function RA(n){var r=jl().s1k_1.z1k_1,e=J(r,"",o,o,o,o,kT(n));return`
export interface PasswordRule {
    readonly pattern: string;
    readonly requirement: string;
}

`+(`export const passwordRules: readonly PasswordRule[] = [
`+e+`];

`)+("export const passwordMessage = "+An(n,En(jl().s1k_1.a1l_1))+`;

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
`}function zb(n,r,e){if(e.d1())return"";var t=J(e," | ",o,o,o,o,xT),a=J(e,"",o,o,o,o,ST);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+a+`} as const;
`}function LA(n,r){var e=J(r,"",o,o,o,o,ET),t=J(r,"",o,o,o,o,zT);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function MA(n,r,e){var t=Gv(r),a=Jc(1,IT),i=qi(a,CT(t)),s;r:{for(var l=i.x();l.y();){var u=l.z();if(!e.l1(u)){s=u;break r}}throw jr.r("Sequence contains no element matching the predicate.")}var f=s;return e.n(f),f}function FA(n,r,e,t){var a=XS([r,r+J(e,"",o,o,o,o,qT)]),i;r:{for(var s=a.x();s.y();){var l=s.z();if(!t.l1(l)){i=l;break r}}i=null}var u=i,f;if(u==null){var c=Jc(2,AT),v=qi(c,TT(r)),h;r:{for(var d=v.x();d.y();){var p=d.z();if(!t.l1(p)){h=p;break r}}throw jr.r("Sequence contains no element matching the predicate.")}f=h}else f=u;var g=f;return t.n(g),g}function $A(n,r,e,t,a){for(var i=Pn.i1(),s=pn(t,"parameters"),l=s??ur(),u=pn(a,"parameters"),f=u??ur(),c=Dn(l,f),v=A.f1(Mr(c,10)),h=c.x();h.y();){var d=h.z(),p=Or(d);v.n(p)}for(var g=v,y=ab().df(r),x=Sc(qi(y,jT)),k=A.m(),S=A.m(),z=x.x();z.y();){var I=z.z(),C;r:{for(var j=g.x();j.y();){var P=j.z();if(Cr(P,"name")===I&&Cr(P,"in")==="path"){C=P;break r}}C=null}var F=C,B=F==null?null:sr(F,"schema"),N;B==null?N=null:N=Wn(n,B,i);var H=N,L;if(H==null)L=null;else{var $;H==="unknown"||H==="string"?$=null:$=H,L=$}var R=L,V=R??"string | number",K=qb(I)+": "+V;k.n(K),S.n(V)}var nr=sr(a,"requestBody"),W=nr==null?null:sr(nr,"content"),tr=W==null?null:W.r2(),Q;if(tr==null)Q=null;else{var lr;r:{for(var X=tr.x();X.y();){var xr=X.z();if(Ce(xr.k2(),"multipart/")){lr=xr;break r}}lr=null}Q=lr}var br=Q,dr=br==null?null:br.l2(),Er;dr==null?Er=null:Er=dr instanceof er?dr:null;var zr=Er,Pr=zr==null?null:sr(zr,"schema"),Br;Pr==null?Br=null:Br=NA(n,Pr);var pr=Br,Gr;if(br!=null)Gr=pr??"FormData";else{var en;W==null?en=null:en=rc(n,W);var Zr=en,_r;Zr==null?_r=null:_r=Wn(n,Zr,i),Gr=_r}var Fr=Gr,Vr;if(br==null){var Xr;W==null?Xr=null:Xr=rc(n,W);var $r=Xr,tn;$r==null?tn=null:tn=JA(n,$r);var _n=tn;Vr=_n??ur()}else Vr=ur();var wn=Vr,gn;wn.d1()?gn=Fr:gn="Omit<"+Fr+", "+J(wn," | ",o,o,o,o,OT)+">";var Xn=gn;if(nr!=null){var Qn="body: "+(Xn??"unknown");k.n(Qn)}var re=sr(a,"x-ktor-svelte-fields"),ce=re==null?null:pn(re,"fields"),ke;if(ce==null)ke=null;else{for(var xe=A.m(),Pe=ce.x();Pe.y();){var Ye=Pe.z(),mt=Ye instanceof vr?Ye:null,ne=mt==null?null:Un(mt);ne==null||xe.n(ne)}ke=xe}var Tn=ke,Bn=Tn??ur(),bn=J(Bn," | ",o,o,o,o,PT),Ht;q(bn)===0?Ht=null:Ht=bn;for(var ve=Ht,Gt=A.m(),yt=g.x();yt.y();){var wt=yt.z();Cr(wt,"in")==="query"&&!(ve!=null&&Cr(wt,"name")==="fields")&&Gt.n(wt)}var Be=Gt,bt=-1,kt="",xt;if(Be.d1()?xt=ve!=null:xt=!0,xt){for(var Fa=A.f1(Mr(Be,10)),$a=Be.x();$a.y();){var Kt=$a.z(),Ja=Kt.pf("required"),Ha=Ja==null?null:On(Ja),Zi=(Ha==null?null:Un(Ha))==="true",Ga=sr(Kt,"schema"),St;Ga==null?St=null:St=Wn(n,Ga,i);var Wt=St,Yt;if(Wt==null)Yt=null;else{var Et;Wt!=="unknown"?Et=Wt:Et=null,Yt=Et}var Zt=Yt,Ka=Zt??"string",Wa=Cr(Kt,"name"),Vi=Wa??"",Xi=We(Vi)+(Zi?"":"?")+": "+Ka;Fa.n(Xi)}var zt=Fa,Ya;r:{var Qi;if(E(Be,Z)?Qi=Be.d1():Qi=!1,Qi){Ya=!1;break r}for(var Za=Be.x();Za.y();){var Su=Za.z(),Va=Su.pf("required"),uo=Va==null?null:On(Va);if((uo==null?null:Un(uo))==="true"){Ya=!0;break r}}Ya=!1}var rs=Ya,fo="query"+(rs?"":"?");bt=k.c1();var Xa;ve==null?Xa=null:Xa="fields?: readonly ("+ve+")[]";var ns=nd(Xa),co="fields?: readonly F[]",Vt;ve!=null?Vt=co:Vt=null;var Eu=Vt,es=nd(Eu),zu=fo+": { "+J(Dn(zt,ns),"; ")+" }";k.n(zu),kt=fo+": { "+J(Dn(zt,es),"; ")+" }"}for(var ts=A.m(),Qa=g.x();Qa.y();){var ri=Qa.z(),Xt;if(Cr(ri,"in")==="header"){var Rb=lA(),Yv=Cr(ri,"name"),Lb=(Yv??"").toLowerCase();Xt=!Rb.l1(Lb)}else Xt=!1;Xt&&ts.n(ri)}var ni=ts;if(!ni.d1()){var Mb=J(ni,"; ",o,o,o,o,BT(n,i)),vo;r:{var Iu;if(E(ni,Z)?Iu=ni.d1():Iu=!1,Iu){vo=!1;break r}for(var Zv=ni.x();Zv.y();){var Fb=Zv.z(),Vv=Fb.pf("required"),Xv=Vv==null?null:On(Vv);if((Xv==null?null:Un(Xv))==="true"){vo=!0;break r}}vo=!1}var $b=vo,Jb="headers"+($b?"":"?")+": { "+Mb+" }";k.n(Jb)}var Hb="options?: RequestOptions";k.n(Hb);var Gb=x.d1()?ue(r):HA(n,r),Qv=sr(a,"x-ktor-svelte-upload"),Cu;Qv==null?Cu=null:Cu=UA(n,Qv);var qu=Cu,rh=a.pf("x-ktor-svelte-timeout"),nh=rh==null?null:On(rh),eh=nh==null?null:Un(nh),th=eh==null?null:Dc(eh),Au=th==null?null:Rn(th),Tu;if(Au==null)Tu=null;else{var ju;ar(Au,new b(0,0))>0?ju=Au:ju=null,Tu=ju}var ah=Tu,Ze=A.m();ah!=null&&Ze.n("timeout: "+ah.toString()),Ze.n("...options");var Ou;Be.d1()?Ou=ve!=null:Ou=!0,Ou&&Ze.n("query"),ni.d1()||Ze.n("typedHeaders: headers"),nr!=null&&Ze.n("body"),wn.d1()||Ze.n("omit: ["+J(wn,o,o,o,o,o,NT)+"]"),qu!=null&&Ze.n("upload: "+qu),pr!=null&&Ze.n("multipart: true");var Kb=Ze.m6(),Pu=re==null?null:Cr(re,"type"),Bu=KA(n,a,i),Nu=WA(n,a),Uu;if(ve!=null&&Pu!=null&&!Nu&&bt>=0){var Wb=qe.ze("\\b"+Cs().qe(Pu)+"\\b").ef(Bu,"Pick<"+Pu+", F>"),ih=wc(k);ih.y4(bt,kt);var Yb=ih;Uu=`: {
    <F extends `+ve+" = "+ve+">("+J(Yb)+"): Promise<"+Wb+`>;
`+("    ("+J(k)+"): Promise<"+Bu+`>;
}`)}else Uu="";var Zb=Uu,Vb=Bu,sh=GA(n,a,i),Xb=e.toUpperCase(),oh=Cr(a,"operationId"),Du;oh==null?Du=null:Du=bu(oh);for(var lh=Du,Qb=lh??YA(n,r,e),uh=Ge([Cr(a,"summary"),Cr(a,"description")]),fh=A.f1(Mr(uh,10)),ch=uh.x();ch.y();){var vh=ch.z(),rk=w(wm($s(vh)?vh:m()));fh.n(rk)}for(var hh=A.m(),dh=fh.x();dh.y();){var ph=dh.z();q(ph)>0&&hh.n(ph)}var nk=yi(hh),ek="@deprecated",Ru;Ab(a)?Ru=ek:Ru=null;var tk=Ru,ak=n.x1j_1,ik=e.toUpperCase(),_h=ak.o2(ik+" "+r),Lu;_h==null?Lu=null:Lu="@see "+_h;var sk=Dn(nk,Ge([tk,Lu])),ok=(k.c1()-x.c1()|0)-1|0,Mu=rx(J_(k,x.c1()),1),ho;r:{var Fu;if(E(Mu,Z)?Fu=Mu.d1():Fu=!1,Fu){ho=!1;break r}for(var gh=Mu.x();gh.y();){var lk=gh.z();if(!$g(pm(lk,58),"?")){ho=!0;break r}}ho=!1}var uk=ho,mh=J(yi(sh.q2())," | "),$u;q(mh)===0?$u=null:$u=mh;var fk=$u,ck=_t(sh.p2());return new Nw(Xb,r,Qb,sk,x,UT(Kb,Nu,k,Vb,e,Gb),i,Nu,qu,fk,ck,S,ok,uk,Zb)}function JA(n,r){var e=Cr(r,"$ref"),t;if(e==null)t=null;else{var a=n.o1j_1.o2(Ri(e,47));t=a instanceof er?a:null}for(var i=t,s=i??r,l=sr(s,"properties"),u=l??Ar(),f=cr.t4(),c=u.r2().x();c.y();){var v=c.z(),h=v.l2(),d=h instanceof er?h:null;(d==null?null:Tb(d))===!0&&f.s2(v.k2(),v.l2())}return _t(f.p2())}function HA(n,r){var e=Yr.f();e.ga(96);for(var t=0,a=ab().df(r).x();a.y();){var i=a.z();e.fa(Xf(n,Hn(r,t,i.gf().r1_1))),e.fa("${encodeURIComponent("+qb(i.gg().e1(1))+")}"),t=i.gf().s1_1+1|0}return e.fa(Xf(n,He(r,t))),e.ga(96),e.toString()}function GA(n,r,e){for(var t=sr(r,"responses"),a=(t??Ar()).r2(),i=A.m(),s=a.x();s.y();){var l=s.z(),u;r:{var f=l.k2(),c=l.l2(),v=Gl(f),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var p=h,g;if(p==null){u=null;break r}else g=p;var y=g,x=sr(Or(c),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=rc(n,S),I;if(z==null){u=null;break r}else I=z;var C=I;u=O(y,Wn(n,C,e))}var j=u;j==null||i.n(j)}return ku(rm(i))}function KA(n,r,e){var t=sr(r,"responses"),a;if(t==null)return"unknown";a=t;for(var i=a,s=i.r2(),l=A.m(),u=s.x();u.y();){var f=u.z(),c=f.k2();Ce(c,"2")&&l.n(f)}var v;r:{var h=l.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var p=d.k2(),g=p;do{var y=h.z(),x=y.k2(),k=x;De(g,k)>0&&(d=y,g=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:Or(z),C;if(I==null)return"unknown";C=I;var j=C,P=sr(j,"content"),F;if(P==null)return"void";F=P;var B=F,N=sr(B,"text/event-stream");if(N!=null){var H=sr(N,"schema"),L;H==null?L=null:L=Wn(n,H,e);var $=L;return $??"string"}var R=B.p2(),V;r:{for(var K=R.x();K.y();){var nr=K.z();if(js(nr,"json")){V=nr;break r}}V=null}var W=V;if(W!=null){var tr=sr(B,W),Q=tr==null?null:sr(tr,"schema"),lr;Q==null?lr=null:lr=Wn(n,Q,e);var X=lr;return X??"unknown"}return"string"}function WA(n,r){for(var e=sr(r,"responses"),t=e??Ar(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();Ce(l,"2")&&a.s2(s.k2(),s.l2())}var u=a.q2(),f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,p=d==null?null:sr(d,"content");if((p==null?null:p.k18("text/event-stream"))===!0){f=!0;break r}}f=!1}return f}function rc(n,r){var e=r.p2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(js(i,"json")){t=i;break r}}t=null}var s=t,l=s??nx(r.p2()),u;if(l==null)u=null;else{var f=sr(r,l);u=f==null?null:sr(f,"schema")}return u}function Ib(n,r){var e=n.r1j_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(r===i||Ce(r,i+"/")){t=i;break r}}t=null}var s=t,l=s??"",u=_m(gm(r,l),Ai([47])),f;r:{for(var c=u.x();c.y();){var v=c.z(),h;if(q(v)>0?h=!Ce(v,"{"):h=!1,h){f=v;break r}}f=null}var d=f,p;d==null?p=null:p=Gv(d,Rv());var g=p;return g??"root"}function YA(n,r,e){var t=n.r1j_1,a;r:{for(var i=t.x();i.y();){var s=i.z();if(r===s||Ce(r,s+"/")){a=s;break r}}a=null}for(var l=a,u=l??"",f=_m(gm(r,u),Ai([47])),c=A.m(),v=f.x();v.y();){var h=v.z();q(h)>0&&c.n(h)}for(var d=c,p=A.m(),g=d.x();g.y();){var y=g.z();Ce(y,"{")||p.n(y)}var x=J_(p,1);if(!x.d1()){var k=e==="post"?"":e;return bu(k+J(x,"",o,o,o,o,DT))}var S=H_(d),z=(S==null?null:Ce(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function Cb(n,r){var e=Cr(r,"description"),t;e==null?t=null:t=w(wm($s(e)?e:m()));var a=t,i;if(a==null)i=null;else{var s;q(a)===0?s=null:s=a,i=s}var l=i,u="@deprecated",f;Ab(r)?f=u:f=null;var c=f;return Ge([l,c])}function ql(n,r,e){if(r.d1())return"";var t=mm(te(J(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+$_(t)+` */
`;var a=e+`/**
`;return a+J(t,"",o,o,o,o,RT(e))+(e+` */
`)}function ZA(n){return"'"+n.t1h_1+"'"}function VA(n){return`
`+n.x1g()}function XA(n){var r=n.qh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function nc(n,r,e){var t;if(e instanceof er){var a=Cr(e,"$ref"),i=a==null?null:Ri(a,47),s;i==null?s=null:s=n.o2(i);var l=s,u;if(l==null){for(var f=cr.na(e.c1()),c=e.r2().x();c.y();){var v=c.z(),h=v.k2(),d=nc(n,r,v.l2());f.s2(h,d)}u=new er(f)}else u=_A(r,l);t=u}else if(e instanceof dn){for(var p=A.f1(Mr(e,10)),g=e.x();g.y();){var y=g.z(),x=nc(n,r,y);p.n(x)}t=new dn(p)}else t=e;return t}function QA(n,r){var e=n.b1k_1,t=r.b1k_1;return gt(e,t)}function rT(n){var r=n.c1k_1,e;r==null?e=null:e=", permission: "+ue(r);var t=e,a=t??"";return"    { page: "+ue(n.b1k_1)+a+` },
`}function nT(n){var r=n.k2(),e=n.l2();return We(r)+": "+ue(e)}function eT(n,r){var e=n.lh_1,t=r.lh_1;return gt(e,t)}function tT(n){return n.mh_1}function aT(n){return r=>An(n,En(r))}function iT(n){var r=n.qh(),e=n.rh();return r+": "+e}function Zd(n,r,e,t,a,i){var s=Se(n,r,t);if(s!=null)return Rt(s);var l=Se(n,r,a),u;if(l==null)return null;u=l;var f=u;return e?Rt(f+i):null}function sT(n){return n+`
`}function Qt(n,r,e){return"addError(errors, "+n+", "+An(r,En(e))+");"}function oT(n,r){return e=>"matches("+An(n,En(e.e1m_1))+", "+r+")"}function lT(n){return r=>"    "+We(r)+": "+An(n,En(r))+`,
`}function ui(n,r,e,t,a,i,s){if(t instanceof dn)for(var l=t.x();l.y();){var u=l.z();ui(n,r,e,u,a,i,!1)}else if(t instanceof er){var f=wu(n,t),c;if(f==null)c=null;else{var v;s?v=null:v=f,c=v}var h=c;if(h!=null){var d=ft(h),p=r.o2(d),g;if(p==null){var y=A.m();r.s2(d,y),g=y}else g=p;var x=g,k=new Bw(a,i);x.n(k);var S=ft(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var C=Cr(t,"in")!=null?Cr(t,"name"):null,j=t.r2().x();j.y();){var P=j.z(),F=P.k2(),B=P.l2(),N;if(F==="properties"?N=B instanceof er:N=!1,N)for(var H=B.r2().x();H.y();){var L=H.z(),$=L.k2(),R=L.l2();ui(n,r,e,R,a,$,!1)}else F==="schema"&&C!=null?ui(n,r,e,B,a,C,!1):F!=="enum"&&ui(n,r,e,B,a,i,!1)}}}function uT(n){return(r,e)=>{var t=J(ba(Ie(n,r)),"\0"),a=J(ba(Ie(n,e)),"\0");return gt(t,a)}}function fT(n){return n.d1l_1}function cT(n){return n.e1l_1}function vT(n){return n+1|0}function hT(n){return r=>n+r}function dT(n,r,e,t){return a=>"..."+_a(n,Or(a),r,e,t)}function pT(n,r,e,t){return a=>_a(n,Or(a),r,e,t)}function _T(n){return Ke(r=>{var e=n;return An(e,r)},1,0,8,"literal",[n])}function gT(n,r,e){return t=>Wn(n,Or(t),r,e)}function mT(n,r,e){return t=>Wn(n,Or(t),r,e)}function yT(n,r,e,t,a,i,s,l){return u=>{var f=n,c=u.l1l_1;Ui(f,c);var v=FA(r,u.h1l_1,u.j1l_1,e),h=t+"."+v,d=r.w1j_1,p=new yu(h,u.f1l_1,u.g1l_1,u.j1l_1,u.q1l_1,u.r1l_1,u.s1l_1);d.n(p);var g=u.o1l_1;if(g!=null){var y=a,x=new Uw(h,g,u.p1l_1);y.n(x)}var k=u.n1l_1;k==null||i.s2(h,k);var S=MA(r,t+"-"+v,s);return l.fa(ql(r,u.i1l_1,"")),l.fa("export const "+S+u.t1l_1+" = "+u.k1l_1(h)+`;
`),ql(r,u.i1l_1,"    ")+("    "+We(v)+": "+S+",")}}function wT(n,r){var e=n.k2(),t=r.k2();return gt(e,t)}function Vd(n){return Cr(n,"type")==="string"&&Cr(n,"format")==="binary"}function bT(n){return r=>{var e=r.k2(),t=r.l2(),a=Or(t),i;if(Vd(a))i="File";else{var s;if(Cr(a,"type")==="array"){var l=sr(a,"items"),u;l==null?u=null:u=Vd(l),s=u===!0}else s=!1;s?i="File[]":i="string"}var f=i;return We(e)+(n.l1(e)?"":"?")+": "+f}}function kT(n){return r=>"    { pattern: "+An(n,En(r.e1m_1))+", requirement: "+An(n,En(r.f1m_1))+` },
`}function xT(n){return ue(n)}function ST(n){return"    "+We(n)+": "+ue(n)+`,
`}function ET(n){return"    '"+n.u1l_1+"': "+n.v1l_1+`;
`}function zT(n){return"    '"+n.u1l_1+"': ["+J(n.w1l_1)+`],
`}function IT(n){return n+1|0}function CT(n){return r=>r===1?n:n+r}function qT(n){return Hv(n)}function AT(n){return n+1|0}function TT(n){return r=>n+r}function jT(n){return n.gg().e1(1)}function OT(n){return ue(n)}function PT(n){return ue(n)}function BT(n,r){return e=>{var t=e.pf("required"),a=t==null?null:On(t),i=(a==null?null:Un(a))==="true",s=sr(e,"schema"),l;s==null?l=null:l=Wn(n,s,r);var u=l,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Cr(e,"name"),p=d??"";return ue(p)+(i?"":"?")+": "+h}}function NT(n){return ue(n)}function UT(n,r,e,t,a,i){return s=>{var l=J(Bt(n,"operation: '"+s+"'")),u=r?"stream":"request",f=J(e),c=a.toUpperCase();return"("+f+") => "+u+"<"+t+">('"+c+"', "+i+", { "+l+" })"}}function DT(n){return Hv(n)}function RT(n){return r=>{var e;return q(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Gn(n){Sr();for(var r=qe.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}var i=e,s=J(i,"",o,o,o,o,MT),l;q(s)===0?l="Unnamed":l=s;var u=l;return mS(px(u))?"_"+u:u}function Hv(n){Sr();var r=bu(n),e;if(q(r)>0){var t=G(r,0),a=kr(t).toUpperCase();e=w(a)+He(r,1)}else e=r;return e}function bu(n){Sr();for(var r=qe.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();q(a)>0&&e.n(a)}for(var i=e,s=A.f1(Mr(i,10)),l=0,u=i.x();u.y();){var f=u.z(),c=l;l=c+1|0;var v;if(Pi(c)===0){var h;if(q(f)>0){var d=G(f,0),p=kr(d).toLowerCase();h=w(p)+He(f,1)}else h=f;v=h}else{var g;if(q(f)>0){var y=G(f,0),x=kr(y).toUpperCase();g=w(x)+He(f,1)}else g=f;v=g}var k=v;s.n(k)}return J(s,"")}function Gv(n,r){r=r===o?$t():r,Sr();var e=bu(n);return Dv().af(e)&&!uA().l1(e)&&!r.l1(e)?e:"_"+e}function qb(n){return Sr(),Gv(n,oA())}function We(n){return Sr(),Dv().af(n)?n:ue(n)}function ue(n){Sr();var r=Yr.f();r.ga(39);for(var e=0;e<q(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.fa("\\\\");else if(t===39)r.fa("\\'");else if(t===10)r.fa("\\n");else if(t===13)r.fa("\\r");else if(mn(t,32)<0||t===8232||t===8233){var a=Y(t);r.fa("\\u"+ym(yS(a,16),4,48))}else r.ga(t)}return r.ga(39),r.toString()}function Ab(n){Sr();var r=n.pf("deprecated"),e=r instanceof vr?r:null;return(e==null?null:xv(e))===!0}function Tb(n){Sr();var r=n.pf("readOnly"),e=r instanceof vr?r:null;return(e==null?null:xv(e))===!0}function sr(n,r){Sr();var e=n.pf(r);return e instanceof er?e:null}function ku(n){Sr();for(var r=n.r2(),e=FT,t=new Jw(e),a=Ft(r,t),i=ln(Mr(a,10),16),s=cr.na(i),l=a.x();l.y();){var u=l.z(),f=O(u.k2(),u.l2());s.s2(f.lh_1,f.mh_1)}return s}function pn(n,r){Sr();var e=n.pf(r);return e instanceof dn?e:null}function Cr(n,r){Sr();var e=n.pf(r),t=e instanceof vr?e:null;return t==null?null:Un(t)}function xu(n,r){Sr();for(var e=pn(n,r),t=e??ur(),a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=On(s).f18();a.n(l)}return a}function Kv(n){Sr();var r=Cr(n,"format"),e;return r==null?e=null:e=ub().o2(r),e}function jb(n){Sr();var r=Cr(n,"format"),e;return r==null?e=null:e=Co().o2(r),e}function Al(n,r){Sr();var e;if(n instanceof er){var t,a=Cr(n,"format");if((E(r,xn)?r:m()).m2(a))t=!0;else{var i=n.q2(),s;r:{var l;if(E(i,Z)?l=i.d1():l=!1,l){s=!1;break r}for(var u=i.x();u.y();){var f=u.z();if(Al(f,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof dn){var c;r:{var v;if(E(n,Z)?v=n.d1():v=!1,v){c=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(Al(d,r)){c=!0;break r}}c=!1}e=c}else e=!1;return e}function Tl(n){Sr();var r;if(n instanceof er){var e;if(Kv(n)!=null)e=!0;else{var t=n.q2(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(Tl(l)){a=!0;break r}}a=!1}e=a}r=e}else if(n instanceof dn){var u;r:{var f;if(E(n,Z)?f=n.d1():f=!1,f){u=!1;break r}for(var c=n.x();c.y();){var v=c.z();if(Tl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Xd;function Wv(){if(Xd)return fr;Xd=!0,Ob=new Io("ADD_ERROR",0,"add-error.ts"),Pb=new Io("ADD_NESTED",1,"add-nested.ts"),Bb=new Io("MATCHES",2,"matches.ts")}var Ob,Pb,Bb;function LT(n){return Sr(),n.q16_1=!0,fr}function MT(n){return Sr(),Hv(n)}function FT(n,r){Sr();var e=n.k2(),t=r.k2();return gt(e,t)}function Nb(){return Wv(),Ob}function $T(){return Wv(),Pb}function Qd(){return Wv(),Bb}var rp;function Sr(){rp||(rp=!0,eb=sn(["get","post","put","patch","delete","head","options"]),tb=qe.ze("[A-Za-z_$][A-Za-z0-9_$]*"),ib=qe.ze("\\{([^}]+)\\}"),ob=d6(o,LT),lb=sn(["guardPages","signedInUser","pageGuards"]),fb=ed([O("date","IsoDate"),O("time","IsoTime"),O("date-time","IsoDateTime")]),cb=ed([O("duration","IsoDuration"),O("decimal","Decimal")]),vb=Gs([O("IsoDuration","'PT0S'"),O("Decimal","'0'")]),hb=ha(["string","integer","number"]),db=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,pb=ha(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),_b=ha(["body","query","headers","options","encodeURIComponent"]),gb=ha(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),mb=ha(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),yb=sn(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function np(n,r){return r===1?"1 character":""+r+" characters"}var oi;function Rt(n){return n%1===0?Rn(n).toString():n.toString()}var ec;function jl(){return ec===o&&new Gw,ec}function JT(){return Db(),Ub}var Ub;function Re(n){return Db(),Ie(JT(),n)}var ep;function Db(){ep||(ep=!0,Ub=Gs([O("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),O("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),O("api-with.ts",`
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
`),O("client.ts",`export interface UploadProgress {
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
`),O("dates.ts",`declare const iso: unique symbol;

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
`),O("form-state.svelte.ts",`import { tick, untrack } from 'svelte';
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
`),O("form.ts",`export interface FieldBounds {
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
`),O("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),O("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),O("pending-writes.svelte.ts",`import { watchPendingWrites } from './client.js';

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
`),O("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

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

`),O("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

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
`)]))}function QT(n,r){var e;try{for(var t=new $w(Cn(r)).j1m(n),a=Ae(),i=Bf.c18(),s=cr.na(t.c1()),l=t.r2().x();l.y();){var u=l.z(),f=u.k2(),c=En(u.l2());s.s2(f,c)}e=a.t15(i,new er(Bo(O("files",new er(s)))))}catch(y){var v;if(y instanceof Error){var h=y,d=Ae(),p=Bf.c18(),g=h.message;v=d.t15(p,new er(Bo(O("error",En(g??h.toString())))))}else throw y;e=v}return e}_(jw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(hn,"InputHint");_(Ow,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Pw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Wf,"EnumType");_(Bw,"EnumUsage");_(Nw,"Endpoint");_(Uw,"ErrorEntry");_(Dw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Rw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Lw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Mw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Fw);_($w,"TypeScriptGenerator");_(Io,"ValidationHelper");_(yu,"GeneratedOperation");_(Jw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(Hw,"ConstraintMessages");_(Xe,"RuleCheck");_(si,"RulePreset");U(Gw,"RulePresets");oi=new Hw;export{QT as generateTypeScript};
