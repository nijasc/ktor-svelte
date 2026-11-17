typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],a=t>>0,i=a<0?Math.max(e+a,0):Math.min(a,e),s=arguments[2],l=s===void 0?e:s>>0,u=l<0?Math.max(e+l,0):Math.min(l,e);i<u;)r[i]=n,i++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var or=Math.imul,g1=ArrayBuffer.isView,ws=Math.clz32;class cc{}class Oe{}class dp{}class pp{constructor(r){this.w_1=r}x(){return tm(this.w_1)}}class _p{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class mp{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let gp=class{constructor(){I1=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Cn{constructor(r){Oc(),this.x1_1=r}i2(r){return gn(this.x1_1,r)}d(r){return Fx(this,r)}toString(){return kr(this.x1_1)}equals(r){return $x(this.x1_1,r)}hashCode(){return Jx(this.x1_1)}}class Z{}class Re{}class zn{}class ut{}class xn{}class gi{}let Bk=class{};class _e{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Le(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof _e?r:g())}equals(r){return this===r}hashCode(){return a2(this)}toString(){return this.w2_1}}let yp=class{constructor(){C1=this,this.z2_1=new b(0,-2147483648),this.a3_1=new b(-1,2147483647),this.b3_1=8,this.c3_1=64}};class b extends dp{constructor(r,e){Ml(),super(),this.d3_1=r,this.e3_1=e}f3(r){return ar(this,r)}d(r){return this.f3(r instanceof b?r:g())}toString(){return Bo(this,10)}equals(r){var e;return r instanceof b?e=sr(this,r):e=!1,e}hashCode(){return Zx(this)}valueOf(){return ie(this)}}class yn{}class wp{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw jr.r(""+this.h3_1);return r}}class Nk{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Uk{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Dk{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Rk{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Lk{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Mk{}class Fk{}class bp{constructor(){R1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class kp{constructor(){L1=this;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Int32Array(128),t=0,a=C(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i);e[Y(s)]=i}while(t<=a);var l="hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD",u=t1(l,e,222),f=new Int32Array(u.length),c=0,v=u.length-1|0;if(c<=v)do{var h=c;c=c+1|0,h===0?f[h]=u[h]:f[h]=f[h-1|0]+u[h]|0}while(c<=v);this.k4_1=f;var d="aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL";this.l4_1=t1(d,e,222);var p="GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB";this.m4_1=t1(p,e,222)}}class cn{}class Bl{toString(){return"kotlin.Unit"}}class Ii{static a5(r){return Na(this,r)}l1(r){var e;r:{var t;if(E(this,Z)?t=this.d1():t=!1,t){e=!1;break r}for(var a=this.x();a.y();){var i=a.z();if(D(i,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!0;break r}for(var a=r.x();a.y();){var i=a.z();if(!this.l1(i)){e=!1;break r}}e=!0}return e}d1(){return this.c1()===0}toString(){return M(this,", ","[","]",o,o,lE(this))}toArray(){return Om(this)}}class Ns extends Ii{static z4(){return this.a5()}g1(r){this.b5();for(var e=!1,t=r.x();t.y();){var a=t.z();this.n(a)&&(e=!0)}return e}v2(){this.b5();for(var r=this.x();r.y();)r.z(),r.c5()}toJSON(){return this.toArray()}b5(){}}class vc{constructor(r,e){Dc(this,e),this.f5_1=r,this.d5_1=0,this.e5_1=-1}y(){return this.d5_1<this.f5_1.c1()}z(){if(!this.y())throw jr.j1();var r=this,e=this.d5_1;return this.d5_1=e+1|0,r.e5_1=e,this.f5_1.e1(this.e5_1)}c5(){if(this.e5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw gr.o3(w(r))}this.f5_1.h5(this.e5_1),this.d5_1=this.e5_1,this.e5_1=-1}}class xp extends vc{constructor(r,e,t){t===o&&(t={}),t.l5_1=r,super(r,t),Mn.m5(e,this.l5_1.c1()),this.d5_1=e}}class Sp extends Ns{static n5(){var r=this.z4();return r.g5_1=0,r}n(r){return this.b5(),this.o5(this.c1(),r),!0}v2(){this.b5(),this.p5(0,this.c1())}x(){return new vc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new xp(this,r)}p5(r,e){var t=this.m1(r),a=e-r|0,i=0;if(i<a)do i=i+1|0,t.z(),t.c5();while(i<a)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class Ep{static z5(){var r=Na(this);return r.x5_1=null,r.y5_1=null,r}m2(r){return vd(this,r)!=null}n2(r){var e=this.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(D(s.l2(),r)){t=!0;break r}}t=!1}return t}g6(r){if(!(r!=null&&E(r,ut)))return!1;var e=r.k2(),t=r.l2(),a=(E(this,xn)?this:g()).o2(e);if(!D(t,a))return!1;var i;return a==null?i=!(E(this,xn)?this:g()).m2(e):i=!1,!i}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,xn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!0;break r}for(var i=e.x();i.y();){var s=i.z();if(!this.g6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=vd(this,r);return e==null?null:e.l2()}hashCode(){return wr(this.r2())}d1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.x5_1==null){var r=this;r.x5_1=n_.yg(this)}return fn(this.x5_1)}toString(){var r=this.r2();return M(r,", ","{","}",o,o,fE(this))}q2(){if(this.y5_1==null){var r=this;r.y5_1=e_.bh(this)}return fn(this.y5_1)}}class zp extends Ep{static w5(){var r=this.z5();return r.u5_1=null,r.v5_1=null,r}a6(){return Op.c6(this)}d6(){return Bp.f6(this)}p2(){var r=this.u5_1,e;if(r==null){var t=this.a6();this.u5_1=t,e=t}else e=r;return e}q2(){var r=this.v5_1,e;if(r==null){var t=this.d6();this.v5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.b5();for(var e=this.r2().x();e.y();){var t=e.z(),a=t.k2();if(D(r,a)){var i=t.l2();return e.c5(),i}}return null}b5(){}}class Us extends Ns{static h6(){return this.z4()}equals(r){return r===this?!0:r!=null&&E(r,Re)?qs.i6(this,r):!1}hashCode(){return qs.j6(this)}}let Ip=class{constructor(){M1=this;var r=this,e=A.f1(0);e.l_1=!0,r.k6_1=e}};class Ds{}class A extends Sp{constructor(r){return new.target.i4(r)}static i4(r){as();var e=this.n5();return e.k_1=r,e.l_1=!1,e}static m(){as();var r=[];return this.i4(r)}static f1(r){as();var e=[],t=this.i4(e);if(!(r>=0)){var a="Negative initial capacity: "+r;throw T.v(w(a))}return t}static h1(r){as();var e=Pa(r);return this.i4(e)}m6(){return this.b5(),this.l_1=!0,this.c1()>0?this:as().k6_1}n6(r){}c1(){return this.k_1.length}e1(r){return this.k_1[a1(this,r)]}y4(r,e){this.b5(),a1(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.b5(),this.k_1.push(r),this.g5_1=this.g5_1+1|0,!0}o5(r,e){this.b5(),this.k_1.splice(F2(this,r),0,e),this.g5_1=this.g5_1+1|0}g1(r){if(this.b5(),r.d1())return!1;for(var e=M2(this,r.c1()),t=0,a=r.x();a.y();){var i=a.z(),s=t;t=s+1|0;var l=Pi(s);this.k_1[e+l|0]=i}return this.g5_1=this.g5_1+1|0,!0}h5(r){this.b5(),a1(this,r),this.g5_1=this.g5_1+1|0;var e;return r===Hs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}p5(r,e){this.b5(),this.g5_1=this.g5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.b5();var r=this;r.k_1=[],this.g5_1=this.g5_1+1|0}n1(r){return Vk(this.k_1,r)}toString(){return n2(this.k_1)}o6(){return[].slice.call(this.k_1)}toArray(){return this.o6()}b5(){if(this.l_1)throw oe.s6()}}class bs extends zp{static z6(r){var e=this.w5();return K2(e),e.x6_1=r,e}static a7(){return this.z6(Je.l7())}static m7(r,e){return this.z6(Je.n7(r,e))}static o7(r){return this.m7(r,1)}static p7(r){return this.z6(Je.q7(r))}v2(){this.x6_1.v2()}m2(r){return this.x6_1.r7(r)}n2(r){return this.x6_1.n2(r)}a6(){return Cp.t7(this.x6_1)}d6(){return qp.v7(this.x6_1)}r2(){var r=this.y6_1,e;if(r==null){var t=Tp.x7(this.x6_1);this.y6_1=t,e=t}else e=r;return e}o2(r){return this.x6_1.o2(r)}s2(r,e){return this.x6_1.s2(r,e)}t2(r){return this.x6_1.t2(r)}c1(){return this.x6_1.c1()}u2(r){return this.x6_1.u2(r)}}class Cp extends Us{constructor(r){return new.target.t7(r)}static t7(r){var e=this.h6();return e.s7_1=r,e}c1(){return this.s7_1.c1()}d1(){return this.s7_1.c1()===0}l1(r){return this.s7_1.r7(r)}v2(){return this.s7_1.v2()}n(r){throw oe.s6()}g1(r){throw oe.s6()}x(){return this.s7_1.y7()}b5(){return this.s7_1.z7()}}class qp extends Ns{constructor(r){return new.target.v7(r)}static v7(r){var e=this.z4();return e.u7_1=r,e}c1(){return this.u7_1.c1()}d1(){return this.u7_1.c1()===0}a8(r){return this.u7_1.n2(r)}l1(r){return this.a8(r)}b8(r){throw oe.s6()}n(r){return this.b8(r)}c8(r){throw oe.s6()}g1(r){return this.c8(r)}x(){return this.u7_1.d8()}b5(){return this.u7_1.z7()}}class Ap extends Us{static f8(r){var e=this.h6();return e.e8_1=r,e}c1(){return this.e8_1.c1()}d1(){return this.e8_1.c1()===0}h8(r){return this.e8_1.j8(r)}l1(r){return r!=null&&E(r,ut)?this.h8(r!=null&&E(r,ut)?r:g()):!1}v2(){return this.e8_1.v2()}i8(r){throw oe.s6()}n(r){return this.i8(r!=null&&E(r,ut)?r:g())}g1(r){throw oe.s6()}j2(r){return this.e8_1.k8(r)}b5(){return this.e8_1.z7()}}class Tp extends Ap{constructor(r){return new.target.x7(r)}static x7(r){return this.f8(r)}x(){return this.e8_1.g8()}}class jp{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().k2()}c5(){return this.l8_1.c5()}}class Op extends Us{constructor(r){return new.target.c6(r)}static c6(r){var e=this.h6();return e.b6_1=r,e}m8(r){throw oe.n8("Add is not supported on keys")}n(r){return this.m8(r)}v2(){return this.b6_1.v2()}r7(r){return this.b6_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.b6_1.r2().x();return new jp(r)}c1(){return this.b6_1.c1()}b5(){return this.b6_1.b5()}}class Pp{constructor(r){this.o8_1=r}y(){return this.o8_1.y()}z(){return this.o8_1.z().l2()}c5(){return this.o8_1.c5()}}class Bp extends Ns{constructor(r){return new.target.f6(r)}static f6(r){var e=this.z4();return e.e6_1=r,e}b8(r){throw oe.n8("Add is not supported on values")}n(r){return this.b8(r)}a8(r){return this.e6_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.e6_1.r2().x();return new Pp(r)}c1(){return this.e6_1.c1()}b5(){return this.e6_1.b5()}}class qa extends Us{static p8(r){var e=this.h6();return e.a1_1=r,e}static q8(){return this.p8(Je.l7())}static r8(r){for(var e=this.p8(Je.s8(r.c1())),t=r.x();t.y();){var a=t.z();e.a1_1.s2(a,!0)}return e}static t8(r,e){return this.p8(Je.n7(r,e))}static b1(r){return this.t8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.r7(r)}d1(){return this.a1_1.c1()===0}x(){return this.a1_1.y7()}c1(){return this.a1_1.c1()}}class Np{constructor(){this.f9_1=-1640531527,this.g9_1=8,this.h9_1=2,this.i9_1=-1}}class Nl{constructor(r){this.j9_1=r,this.k9_1=0,this.l9_1=-1,this.m9_1=this.j9_1.i7_1,this.n9()}n9(){for(;this.k9_1<this.j9_1.g7_1&&this.j9_1.d7_1[this.k9_1]<0;)this.k9_1=this.k9_1+1|0}y(){return this.k9_1<this.j9_1.g7_1}c5(){if(this.o9(),this.l9_1===-1){var r="Call next() before removing element from the iterator.";throw gr.o3(w(r))}this.j9_1.z7(),Gm(this.j9_1,this.l9_1),this.l9_1=-1,this.m9_1=this.j9_1.i7_1}o9(){if(this.j9_1.i7_1!==this.m9_1)throw To.p9()}}class Up extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1];return this.n9(),t}}class Dp extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=fn(this.j9_1.c7_1)[this.l9_1];return this.n9(),t}}class Rp extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=new Lp(this.j9_1,this.l9_1);return this.n9(),t}ca(){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1],a=t==null?null:wr(t),i=a??0,s=fn(this.j9_1.c7_1)[this.l9_1],l=s==null?null:wr(s),u=i^(l??0);return this.n9(),u}da(r){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var e=this,t=this.k9_1;this.k9_1=t+1|0,e.l9_1=t;var a=this.j9_1.b7_1[this.l9_1];D(a,this.j9_1)?r.fa("(this Map)"):r.ea(a),r.ga(61);var i=fn(this.j9_1.c7_1)[this.l9_1];D(i,this.j9_1)?r.fa("(this Map)"):r.ea(i),this.n9()}}class Lp{constructor(r,e){this.y8_1=r,this.z8_1=e,this.a9_1=this.y8_1.i7_1}k2(){return Zh(this),this.y8_1.b7_1[this.z8_1]}l2(){return Zh(this),fn(this.y8_1.c7_1)[this.z8_1]}equals(r){var e,t;return r!=null&&E(r,ut)?t=D(r.k2(),this.k2()):t=!1,t?e=D(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:wr(r),t=e??0,a=this.l2(),i=a==null?null:wr(a);return t^(i??0)}toString(){return ye(this.k2())+"="+ye(this.l2())}}class Mp{}function $k(n){var r;r:{var e;if(E(n,Z)?e=n.d1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var a=t.z(),i=a,s;if(i!=null&&E(i,ut)?s=this.ka(i):s=!1,!s){r=!1;break r}}r=!0}return r}class Je{constructor(r,e,t,a,i,s){return new.target.ha(r,e,t,a,i,s)}static ha(r,e,t,a,i,s){var l=Na(this);return l.b7_1=r,l.c7_1=e,l.d7_1=t,l.e7_1=a,l.f7_1=i,l.g7_1=s,l.h7_1=Lm(Is,ct(l)),l.i7_1=0,l.j7_1=0,l.k7_1=!1,l}c1(){return this.j7_1}static l7(){return this.s8(8)}static s8(r){return this.ha(Bm(r),null,new Int32Array(r),new Int32Array(Rm(Is,r)),2,0)}static q7(r){var e=this.s8(r.c1());return e.u2(r),e}static n7(r,e){var t=this.s8(r);if(!(e>0)){var a="Non-positive load factor: "+e;throw T.v(w(a))}return t}ia(){this.z7(),this.k7_1=!0}n2(r){return V2(this,r)>=0}o2(r){var e=go(this,r);return e<0?null:fn(this.c7_1)[e]}r7(r){return go(this,r)>=0}s2(r,e){var t=Hm(this,r),a=Fm(this);if(t<0){var i=a[(-t|0)-1|0];return a[(-t|0)-1|0]=e,i}else return a[t]=e,null}u2(r){this.z7(),nS(this,r.r2())}t2(r){this.z7();var e=go(this,r);if(e<0)return null;var t=fn(this.c7_1)[e];return Gm(this,e),t}v2(){this.z7();var r=0,e=this.g7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var a=this.d7_1[t];a>=0&&(this.e7_1[a]=0,this.d7_1[t]=-1)}while(t!==e);Do(this.b7_1,0,this.g7_1);var i=this.c7_1;i==null||Do(i,0,this.g7_1),this.j7_1=0,this.g7_1=0,$l(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,xn)?t=Q2(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.g8();e.y();)r=r+e.ca()|0;return r}toString(){var r=Yr.ja(2+or(this.j7_1,3)|0);r.fa("{");for(var e=0,t=this.g8();t.y();)e>0&&r.fa(", "),t.da(r),e=e+1|0;return r.fa("}"),r.toString()}z7(){if(this.k7_1)throw oe.s6()}j8(r){var e=go(this,r.k2());return e<0?!1:D(fn(this.c7_1)[e],r.l2())}ka(r){return this.j8(E(r,ut)?r:g())}y7(){return new Up(this)}d8(){return new Dp(this)}g8(){return new Rp(this)}}class Fp{constructor(){$1=this;var r=this,e=Je.s8(0);e.ia(),r.la_1=cr.ma(e)}}class cr extends bs{static t4(){var r=this.a7();return r}static na(r){var e=this.o7(r);return e}static oa(r){var e=this.p7(r);return e}static ma(r){var e=this.z6(r);return e}m6(){this.x6_1.ia();var r;return this.c1()>0?r=this:r=eS().la_1,r}b5(){return this.x6_1.z7()}}class Pn extends qa{static i1(){var r=this.q8();return r}static k1(r){var e=this.r8(r);return e}static pa(r,e){var t=this.t8(r,e);return t}static i(r){return this.pa(r,1)}b5(){return this.a1_1.z7()}}class ht{}class $p{qa(){var r="This continuation is already complete";throw gr.o3(w(r))}ra(r){var e="This continuation is already complete";throw gr.o3(w(e))}sa(r){return this.ra(r)}toString(){return"This continuation is already complete"}}class hc{constructor(){this.za_1=null}bb(){var r=this.za_1,e;if(r==null){var t=this.qa().cb(V1),a=t==null?null:t.db(this),i=a??this;this.za_1=i,e=i}else e=r;return e}ab(){var r=this.za_1;r!=null&&r!==this&&fn(this.qa().cb(V1)).eb(r),this.za_1=Km}}class dc extends hc{constructor(r){super(),this.ua_1=r;var e=this;e.va_1=o;var t=this,a=this.ua_1;t.wa_1=a==null?null:a.qa()}qa(){return fn(this.wa_1)}xa(r){var e=Ts(),t=Vg(r),a=t==null?this.va_1.next(r):this.va_1.throw(t),i=a.done,s=a.value;r:for(;!i;){try{s=s()}catch(c){var l=c,u=this.va_1.throw(l);s=u.value,i=u.done;continue r}if(s===e)break r;var f=this.va_1.next(s);s=f.value,i=f.done}return s}ya(r,e){return r=r===o?null:r,e===o?this.xa(r):e.xa.call(this,new ma(r))}ra(r){var e=null,t;try{t=this.xa(r)}catch(v){var a;if(v instanceof Error){var i=v;e=i,a=null}else throw v;t=a}var s=t;if(s===Ts())return ur;this.ab();var l=this.ua_1;if(l!=null)if(e!=null){var u=e,f=Xg(u);l.sa(f)}else{var c=s;l.sa(c)}}sa(r){return this.ra(r)}}class Jp{constructor(r,e,t){this.kb_1=r,this.lb_1=e,this.mb_1=t}qa(){return this.kb_1}ra(r){var e=this.lb_1;Fz(r)&&e(r);var t=this.mb_1,a=Vg(r);return a==null||t(a),ur}sa(r){return this.ra(r)}}class ks extends Error{static tb(){var r=vi(this,Error,[null]);return hi(r),o1(r),r}static k3(r){var e=vi(this,Error,[r]);return hi(e,r),o1(e),e}static ub(r,e){var t=vi(this,Error,[r,bm(e)]);return hi(t,r,e),o1(t),t}}class ge extends ks{static nb(){var r=this.tb();return s1(r),r}static d9(r){var e=this.k3(r);return s1(e),e}static sb(r,e){var t=this.ub(r,e);return s1(t),t}}class oe extends ge{static s6(){var r=this.nb();return Vh(r),r}static n8(r){var e=this.d9(r);return Vh(e),e}}class T extends ge{static qb(){var r=this.nb();return i1(r),r}static v(r){var e=this.d9(r);return i1(e),e}static rb(r,e){var t=this.sb(r,e);return i1(t),t}}class jr extends ge{static j1(){var r=this.nb();return Xh(r),r}static r(r){var e=this.d9(r);return Xh(e),e}}class Wn extends ge{static yb(){var r=this.nb();return Qh(r),r}static zb(r){var e=this.d9(r);return Qh(e),e}}class gr extends ge{static ac(){var r=this.nb();return rd(r),r}static o3(r){var e=this.d9(r);return rd(e),e}}class To extends ge{static p9(){var r=this.nb();return nd(r),r}static x8(r){var e=this.d9(r);return nd(e),e}}class y1 extends ge{static ec(){var r=this.nb();return ed(r),r}static fc(r){var e=this.d9(r);return ed(e),e}}class jo extends Error{static kc(){var r=vi(this,Error,[null]);return hi(r),l1(r),r}static nc(r){var e=vi(this,Error,[r]);return hi(e,r),l1(e),e}static mc(r,e){var t=vi(this,Error,[r,bm(e)]);return hi(t,r,e),l1(t),t}}class cs extends jo{static ic(){var r=this.kc();return td(r),r}static lc(r){var e=r==null?null:w(r),t=this.mc(e,r instanceof Error?r:null);return td(t),t}}class w1 extends T{static sc(){var r=this.qb();return ad(r),r}static tc(r){var e=this.v(r);return ad(e),e}}class b1 extends ge{static s3(){var r=this.nb();return lS(r),r}}class k1 extends ge{static w3(){var r=this.nb();return uS(r),r}}class x1 extends ge{static a4(){var r=this.nb();return fS(r),r}}class at{}class Ci{equals(r){var e;return r instanceof pc?e=!1:r instanceof Ci?e=D(this.zc(),r.zc())&&this.uc()==r.uc():e=!1,e}hashCode(){var r=this.uc(),e=r==null?null:me(r);return e??0}toString(){return"class "+this.uc()}}class an extends Ci{constructor(r,e,t){super(),this.wc_1=r,this.xc_1=e,this.yc_1=t}zc(){return this.wc_1}uc(){return this.xc_1}vc(r){return this.yc_1(r)}}class pc extends Ci{constructor(){Ro=null,super(),Ro=this,this.ad_1="Nothing"}uc(){return this.ad_1}vc(r){return!1}zc(){throw oe.n8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class S1 extends Ci{constructor(r){super(),this.bd_1=r;var e=this,t=this.bd_1.$metadata$;e.cd_1=t==null?null:t.simpleName}zc(){return this.bd_1}uc(){return this.cd_1}vc(r){return k2(r,this.bd_1)}}class Ba{}class Hp{constructor(){J1=this;var r=this,e=Object;r.anyClass=new an(e,"Any",_S);var t=this,a=Number;t.numberClass=new an(a,"Number",mS),this.nothingClass=pS();var i=this,s=Boolean;i.booleanClass=new an(s,"Boolean",gS);var l=this,u=Number;l.byteClass=new an(u,"Byte",yS);var f=this,c=Number;f.shortClass=new an(c,"Short",wS);var v=this,h=Number;v.intClass=new an(h,"Int",bS);var d=this,p=b;d.longClass=new an(p,"Long",kS);var m=this,y=Number;m.floatClass=new an(y,"Float",xS);var x=this,k=Number;x.doubleClass=new an(k,"Double",SS);var S=this,z=Array;S.arrayClass=new an(z,"Array",ES);var I=this,q=String;I.stringClass=new an(q,"String",zS);var j=this,P=Error;j.throwableClass=new an(P,"Throwable",IS);var $=this,B=Array;$.booleanArrayClass=new an(B,"BooleanArray",CS);var N=this,H=Uint16Array;N.charArrayClass=new an(H,"CharArray",qS);var L=this,J=Int8Array;L.byteArrayClass=new an(J,"ByteArray",AS);var R=this,V=Int16Array;R.shortArrayClass=new an(V,"ShortArray",TS);var K=this,nr=Int32Array;K.intArrayClass=new an(nr,"IntArray",jS);var W=this,tr=typeof BigInt>"u"?o:BigInt;W.bigIntClass=new an(tr,"BigInt",OS);var Q=this,lr=Array;Q.longArrayClass=new an(lr,"LongArray",PS);var X=this,xr=Float32Array;X.floatArrayClass=new an(xr,"FloatArray",BS);var br=this,dr=Float64Array;br.doubleArrayClass=new an(dr,"DoubleArray",NS)}dd(){return this.anyClass}ed(){return this.numberClass}fd(){return this.nothingClass}gd(){return this.booleanClass}hd(){return this.byteClass}id(){return this.shortClass}jd(){return this.intClass}kd(){return this.longClass}ld(){return this.floatClass}md(){return this.doubleClass}nd(){return this.arrayClass}od(){return this.stringClass}pd(){return this.throwableClass}qd(){return this.booleanArrayClass}rd(){return this.charArrayClass}sd(){return this.byteArrayClass}td(){return this.shortArrayClass}ud(){return this.intArrayClass}vd(){return this.bigIntClass}wd(){return this.longArrayClass}xd(){return this.floatArrayClass}yd(){return this.doubleArrayClass}functionClass(r){var e=id()[r],t;if(e==null){var a=Function,i="Function"+r,s=new an(a,i,US(r));id()[r]=s,t=s}else t=e;return t}}class Th extends ks{constructor(r){return new.target.be(r)}static be(r){var e=this.k3(r);return vn(e,e.ae_1),e}static ce(){return this.be(null)}}class Yr{constructor(r){return new.target.de(r)}static de(r){var e=Na(this);return e.e_1=r,e}static ja(r){return this.f()}static f(){return this.de("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Wn.zb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return Gn(this.e_1,r,e)}ga(r){return this.e_1=this.e_1+kr(r),this}g(r){return this.e_1=this.e_1+ye(r),this}ee(r,e,t){return this.fe(r??"null",e,t)}ea(r){return this.e_1=this.e_1+ye(r),this}ge(r){return this.fa(r.toString())}he(r){return this.fa(r.toString())}fa(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ie(r,e){return Mn.m5(r,this.a()),this.e_1=Gn(this.e_1,0,r)+kr(e)+We(this.e_1,r),this}je(r){if(r<0)throw T.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=Gn(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+kr(0);while(e<r)}}toString(){return this.e_1}ke(){return this.e_1="",this}le(r){return Mn.l6(r,this.a()),this.e_1=Gn(this.e_1,0,r)+We(this.e_1,r+1|0),this}fe(r,e,t){var a=w(r);return Mn.me(e,t,a.length),this.e_1=this.e_1+Gn(a,e,t),this}}class Gp{constructor(){G1=this,this.ne_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.oe_1=new RegExp("[\\\\$]","g"),this.pe_1=new RegExp("\\$","g")}qe(r){var e=this.ne_1;return r.replace(e,"\\$&")}re(r){var e=this.pe_1;return r.replace(e,"$$$$")}}class Te{constructor(r,e){return new.target.ye(r,e)}static ye(r,e){Cs();var t=Na(this);return t.se_1=r,t.te_1=dt(e),t.ue_1=new RegExp(r,GS(e,"gu")),t.ve_1=null,t.we_1=null,t}static ze(r){return Cs(),this.ye(r,Ft())}af(r){RS(this.ue_1);var e=this.ue_1.exec(w(r));return e!=null&&e.index===0&&this.ue_1.lastIndex===C(r)}xe(r,e){if(e<0||e>C(r))throw Wn.zb("Start index out of bounds: "+e+", input length: "+C(r));return Qm(this.ue_1,w(r),e,this.ue_1)}bf(r,e,t){return e=e===o?0:e,t===o?this.xe(r,e):t.xe.call(this,r,e)}cf(r,e){if(e<0||e>C(r))throw Wn.zb("Start index out of bounds: "+e+", input length: "+C(r));var t=$S(this,r,e);return kE(t,JS)}df(r,e,t){return e=e===o?0:e,t===o?this.cf(r,e):t.cf.call(this,r,e)}ef(r,e){if(!bd(e,92)&&!bd(e,36)){var t=w(r),a=this.ue_1;return t.replace(a,e)}return this.ff(r,HS(e))}ff(r,e){var t=this.bf(r);if(t==null)return w(r);var a=0,i=C(r),s=Yr.ja(i);do{var l=fn(t);s.ee(r,a,l.gf().kf()),s.g(e(l)),a=l.gf().lf()+1|0,t=l.z()}while(a<i&&t!=null);return a<i&&s.ee(r,a,i),s.toString()}mf(r,e){nv(e);for(var t=this.df(r),a=e===0?t:Ux(t,e-1|0),i=A.m(),s=0,l=a.x();l.y();){var u=l.z();i.n(w(Ln(r,s,u.gf().kf()))),s=u.gf().lf()+1|0}return i.n(w(Ln(r,s,C(r)))),i}toString(){return this.ue_1.toString()}}class xs{constructor(r){this.of_1=r}toString(){return"MatchGroup(value="+this.of_1+")"}hashCode(){return me(this.of_1)}equals(r){return this===r?!0:!(!(r instanceof xs)||this.of_1!==r.of_1)}}class _c{}class Kp extends Ii{constructor(r,e){return new.target.cg(r,e)}static cg(r,e,t){return t===o&&(t={}),t.tf_1=r,t.uf_1=e,this.a5(t)}c1(){return this.tf_1.length}x(){var r=qx(hE(this));return qi(r,XS(this)).x()}e1(r){var e=this.tf_1[r],t;return e==null?t=null:t=new xs(e),t}pf(r){var e=this.tf_1.groups,t;if(e==null)throw T.v("Capturing group with name {"+r+"} does not exist. No named capturing group was defined in Regex");t=e;var a=t;if(!QS(this.uf_1,a,r))throw T.v("Capturing group with name {"+r+"} does not exist");var i=a[r],s;return i==null?s=null:s=new xs(i!=null&&typeof i=="string"?i:g()),s}}class mc extends Ii{static fg(r){return this.a5(r)}x(){return new gc(this)}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Zp(this,r)}equals(r){return r===this?!0:r!=null&&E(r,zn)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class Wp extends mc{constructor(r){return new.target.eg(r)}static eg(r,e){return e===o&&(e={}),e.dg_1=r,this.fg(e)}c1(){return this.dg_1.length}e1(r){var e=this.dg_1[r];return e??""}}class Yp{constructor(r,e,t,a){this.yf_1=r,this.zf_1=e,this.ag_1=t,this.bg_1=a,this.vf_1=r;var i=this;i.wf_1=Kp.cg(e,this),this.xf_1=null}gf(){return this.vf_1}nf(){return this.wf_1}gg(){if(this.xf_1==null){var r=this;r.xf_1=Wp.eg(this.zf_1)}return fn(this.xf_1)}z(){return Qm(this.ag_1,this.bg_1,this.yf_1.d1()?rE(this,this.yf_1.kf()):this.yf_1.lf()+1|0,this.ag_1)}}let Jk=class{constructor(r){this.hg_1=r}ig(r,e){return this.hg_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.hg_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}};class Ct extends _e{constructor(r,e,t){super(r,e),this.lg_1=t}}class gc{constructor(r,e){Dc(this,e),this.rg_1=r,this.qg_1=0}y(){return this.qg_1<this.rg_1.c1()}z(){if(!this.y())throw jr.j1();var r=this.qg_1;return this.qg_1=r+1|0,this.rg_1.e1(r)}}class Zp extends gc{constructor(r,e,t){t===o&&(t={}),t.ug_1=r,super(r,t),Mn.m5(e,this.ug_1.c1()),this.qg_1=e}}class Vp{constructor(){this.w4_1=2147483639}l6(r,e){if(r<0||r>=e)throw Wn.zb("index: "+r+", size: "+e)}m5(r,e){if(r<0||r>e)throw Wn.zb("index: "+r+", size: "+e)}x4(r,e,t){if(r<0||e>t)throw Wn.zb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw T.v("fromIndex: "+r+" > toIndex: "+e)}me(r,e,t){if(r<0||e>t)throw Wn.zb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw T.v("startIndex: "+r+" > endIndex: "+e)}e9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}r5(r){for(var e=1,t=r.x();t.y();){var a=t.z(),i=or(31,e),s=a==null?null:wr(a);e=i+(s??0)|0}return e}q5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),a=r.x();a.y();){var i=a.z(),s=t.z();if(!D(i,s))return!1}return!0}}class Xp{constructor(r){this.vg_1=r}y(){return this.vg_1.y()}z(){return this.vg_1.z().k2()}}class Qp{constructor(r){this.wg_1=r}y(){return this.wg_1.y()}z(){return this.wg_1.z().l2()}}class Hk{}class r_ extends Ii{static zg(r){return this.a5(r)}equals(r){return r===this?!0:r!=null&&E(r,Re)?qs.i6(this,r):!1}hashCode(){return qs.j6(this)}}class n_ extends r_{constructor(r){return new.target.yg(r)}static yg(r,e){return e===o&&(e={}),e.xg_1=r,this.zg(e)}r7(r){return this.xg_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.xg_1.r2().x();return new Xp(r)}c1(){return this.xg_1.c1()}}class e_ extends Ii{constructor(r){return new.target.bh(r)}static bh(r,e){return e===o&&(e={}),e.ah_1=r,this.a5(e)}a8(r){return this.ah_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.ah_1.r2().x();return new Qp(r)}c1(){return this.ah_1.c1()}}class t_{j6(r){for(var e=0,t=r.x();t.y();){var a=t.z(),i=e,s=a==null?null:wr(a);e=i+(s??0)|0}return e}i6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class a_{constructor(){K1=this,this.ch_1=new b(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,zn)?e=r.d1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}d1(){return!0}dh(r){return!1}l1(r){return!1}e1(r){throw Wn.zb("Empty list doesn't contain element at index "+r+".")}eh(r){return-1}n1(r){return-1}x(){return As}m1(r){if(r!==0)throw Wn.zb("Index: "+r);return As}}class i_{y(){return!1}z(){throw jr.j1()}}class Ul{constructor(r,e){this.fh_1=r,this.gh_1=e}toString(){return"IndexedValue(index="+this.fh_1+", value="+ye(this.gh_1)+")"}hashCode(){var r=this.fh_1;return r=or(r,31)+(this.gh_1==null?0:wr(this.gh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Ul)||this.fh_1!==r.fh_1||!D(this.gh_1,r.gh_1))}}class s_{constructor(r){this.hh_1=r}x(){return new o_(this.hh_1())}}class o_{constructor(r){this.ih_1=r,this.jh_1=0}y(){return this.ih_1.y()}z(){var r=this.jh_1;return this.jh_1=r+1|0,new Ul(Pi(r),this.ih_1.z())}}class l_{}class u_{constructor(){W1=this,this.nh_1=new b(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,xn)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}d1(){return!0}oh(r){return!1}m2(r){return this.oh(r)}ph(r){return null}o2(r){return this.ph(r)}r2(){return Z1()}p2(){return Z1()}q2(){return fg()}}class f_{z(){return this.sh()}}class c_{constructor(r){this.uh_1=r,this.th_1=r.vh_1.x()}z(){return this.uh_1.wh_1(this.th_1.z())}y(){return this.th_1.y()}}class v_{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new c_(this)}}class Dl{}class h_{constructor(r){this.xh_1=r.ai_1,this.yh_1=r.zh_1.x()}z(){if(this.xh_1===0)throw jr.j1();return this.xh_1=this.xh_1-1|0,this.yh_1.z()}y(){return this.xh_1>0&&this.yh_1.y()}}class Rl{constructor(r,e){if(this.zh_1=r,this.ai_1=e,!(this.ai_1>=0)){var t="count must be non-negative, but was "+this.ai_1+".";throw T.v(w(t))}}v1(r){return r>=this.ai_1?this:new Rl(this.zh_1,r)}x(){return new h_(this)}}class d_{x(){return As}v1(r){return Gl}}class p_{constructor(r){this.di_1=r,this.bi_1=null,this.ci_1=-2}z(){if(this.ci_1<0&&_d(this),this.ci_1===0)throw jr.j1();var r=this.bi_1,e=r??g();return this.ci_1=-1,e}y(){return this.ci_1<0&&_d(this),this.ci_1===1}}class yc{constructor(r,e){this.ei_1=r,this.fi_1=e}x(){return new p_(this)}}class __{constructor(){Y1=this,this.gi_1=new b(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,Re)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}d1(){return!0}dh(r){return!1}l1(r){return!1}hi(r){return r.d1()}j2(r){return this.hi(r)}x(){return As}}class m_{ii(r,e){return Le(r,e)}compare(r,e){var t=r!=null&&P1(r)?r:g();return this.ii(t,e!=null&&P1(e)?e:g())}}let g_=class{constructor(r){this.ji_1=r}ig(r,e){return this.ji_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.ji_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}},y_=class{};class Gk{}class w_{constructor(){X1=this,this.ki_1=new b(0,0)}cb(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class b_ extends _e{}class k_ extends mc{constructor(r){return new.target.mi(r)}static mi(r){var e=this.fg();return e.li_1=r,e}c1(){return this.li_1.length}e1(r){return Mn.l6(r,this.li_1.length),this.li_1[r]}ni(r){if(r===null)return!1;var e=Oh(this.li_1,r.x2_1);return e===r}l1(r){return r instanceof _e?this.ni(r instanceof _e?r:g()):!1}oi(r){if(r===null)return-1;var e=r.x2_1,t=Oh(this.li_1,e);return t===r?e:-1}n1(r){return r instanceof _e?this.oi(r instanceof _e?r:g()):-1}}class x_{constructor(){Q1=this,this.p1_1=new Rt(1,0)}}class Rs{constructor(r,e,t){if(t===0)throw T.v("Step must be non-zero.");if(t===-2147483648)throw T.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=OE(r,e,t),this.t1_1=t}x(){return new S_(this.r1_1,this.s1_1,this.t1_1)}d1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Rs?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.d1()?-1:or(31,or(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class fi{}class Rt extends Rs{constructor(r,e){wg(),super(r,e,1)}kf(){return this.r1_1}lf(){return this.s1_1}pi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.pi(typeof r=="number"?r:g())}d1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Rt?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.d1()?-1:or(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class S_ extends f_{constructor(r,e,t){super(),this.qi_1=t,this.ri_1=e,this.si_1=this.qi_1>0?r<=e:r>=e,this.ti_1=this.si_1?r:this.ri_1}y(){return this.si_1}sh(){var r=this.ti_1;if(r===this.ri_1){if(!this.si_1)throw jr.j1();this.si_1=!1}else this.ti_1=this.ti_1+this.qi_1|0;return r}}class E_{q1(r,e,t){return new Rs(r,e,t)}}class z_{constructor(r){this.zi_1=r,this.ui_1=-1,this.vi_1=Px(r.bj_1,0,C(r.aj_1)),this.wi_1=this.vi_1,this.xi_1=null,this.yi_1=0}z(){if(this.ui_1===-1&&wd(this),this.ui_1===0)throw jr.j1();var r=this.xi_1,e=r instanceof Rt?r:g();return this.xi_1=null,this.ui_1=-1,e}y(){return this.ui_1===-1&&wd(this),this.ui_1===1}}class I_{constructor(r,e,t,a){this.aj_1=r,this.bj_1=e,this.cj_1=t,this.dj_1=a}x(){return new z_(this)}}class Kk{constructor(){this.ej_1=0,this.fj_1=1,this.gj_1=2}}class C_{constructor(r){this.hj_1=r,this.ij_1=0,this.jj_1=0,this.kj_1=0,this.lj_1=0}y(){if(this.ij_1!==0)return this.ij_1===1;if(this.lj_1<0)return this.ij_1=2,!1;var r=-1,e=C(this.hj_1),t=this.jj_1,a=C(this.hj_1);if(t<a)r:do{var i=t;t=t+1|0;var s=rr(this.hj_1,i);if(s===10||s===13){r=s===13&&(i+1|0)<C(this.hj_1)&&rr(this.hj_1,i+1|0)===10?2:1,e=i;break r}}while(t<a);return this.ij_1=1,this.lj_1=r,this.kj_1=e,!0}z(){if(!this.y())throw jr.j1();this.ij_1=0;var r=this.kj_1,e=this.jj_1;this.jj_1=this.kj_1+this.lj_1|0;var t=this.hj_1;return w(Ln(t,e,r))}}class q_{constructor(r){this.mj_1=r}x(){return new C_(this.mj_1)}}class A_{constructor(){rf=this,this.nj_1=new b(0,0),this.oj_1=Ut(new b(-1,1073741823)),this.pj_1=Ut(new b(1,-1073741824)),this.qj_1=new b(-16162,2147483647),this.rj_1=new b(-16162,2147483647)}sj(r){var e=new Ce(r),t=e.tj_1;if(ev(t)){var a=Sn(t);if(!(ar(new b(387905,-1073741824),a)<=0&&ar(a,new b(-387905,1073741823))<=0))throw cs.lc(Sn(t).toString()+" ns is out of nanoseconds range")}else{var i,s=Sn(t);if(ar(new b(1,-1073741824),s)<0&&ar(s,new b(-1,1073741823))<0)i=!1;else{var l=Sn(t);i=!(sr(l,new b(-1,1073741823))||sr(l,new b(1,-1073741824)))}if(i)throw cs.lc(Sn(t).toString()+" ms is out of milliseconds range");var u=Sn(t);if(ar(new b(1108857478,-1074),u)<=0&&ar(u,new b(-1108857478,1073))<=0)throw cs.lc(Sn(t).toString()+" ms is denormalized")}return e.tj_1}uj(r){var e;try{var t=new Ce(pz(r,!0)),a=t.tj_1;if(D(new Ce(a),new Ce(Wr().rj_1))){var i="invariant failed";throw gr.o3(w(i))}e=t.tj_1}catch(l){if(l instanceof T){var s=l;throw T.rb("Invalid ISO duration string format: '"+r+"'.",s)}else throw l}return e}}class Ce{constructor(r){Wr(),this.tj_1=r}vj(r){return Ng(this.tj_1,r)}d(r){return sz(this,r)}toString(){return cz(this.tj_1)}hashCode(){return hz(this.tj_1)}equals(r){return dz(this.tj_1,r)}}class T_{constructor(){nf=this,this.wj_1=new E1(new b(-1,1073741823),!0),this.xj_1=new E1(new b(-1,2147483647),!1)}}class E1{constructor(r,e){Fg(),this.yj_1=r,this.zj_1=e;var t=this,a=this.yj_1;t.ak_1=Ar(a,F(10));var i=this,s=this.yj_1;i.bk_1=Nt(s,F(10))}}class Wk{}class j_{constructor(){tf=this,this.ck_1=new ft(new b(342103040,-7347440),0),this.dk_1=new ft(new b(-90867457,7347410),999999999)}ek(r,e){var t=new b(1e9,0),a=Ar(e,t);if(ar(De(e,t),new b(0,0))<0&&!sr(Tr(a,t),e)){var i=a;a=Hr(i,lt())}var s=a,l=mr(r,s);if(ar(De(r,l),new b(0,0))<0&&ar(De(r,s),new b(0,0))>=0)return ar(r,new b(0,0))>0?jt().dk_1:jt().ck_1;var u=l,f;if(ar(u,new b(342103040,-7347440))<0)f=this.ck_1;else if(ar(u,new b(-90867457,7347410))>0)f=this.dk_1;else{var c=new b(1e9,0),v=Nt(e,c),h=mr(v,zs(c,Ls(zs(De(v,c),Ta(v,on(v))),63))),d=rn(h);f=new ft(u,d)}return f}fk(r,e){return this.ek(r,F(e))}gk(r){return jz(r).hk()}}class ft{constructor(r,e){jt(),this.ik_1=r,this.jk_1=e;var t=this.ik_1;if(!(ar(new b(342103040,-7347440),t)<=0&&ar(t,new b(-90867457,7347410))<=0)){var a="Instant exceeds minimum or maximum instant";throw T.v(w(a))}}kk(r){var e=this.ik_1.f3(r.ik_1);return e!==0?e:Le(this.jk_1,r.jk_1)}d(r){return this.kk(r instanceof ft?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,a;r instanceof ft?a=sr(this.ik_1,r.ik_1):a=!1,a?t=this.jk_1===r.jk_1:t=!1,e=t}return e}hashCode(){return this.ik_1.hashCode()+or(51,this.jk_1)|0}toString(){return Tz(this)}}class O_{constructor(r,e){this.tk_1=r,this.uk_1=e}hk(){if(ar(this.tk_1,jt().ck_1.ik_1)<0||ar(this.tk_1,jt().dk_1.ik_1)>0)throw kc.zk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.tk_1.toString()+")");return jt().fk(this.tk_1,this.uk_1)}}class wc{constructor(r,e){this.al_1=r,this.bl_1=e}hk(){throw kc.zk(this.al_1+' when parsing an Instant from "'+av(this.bl_1,64)+'"')}}class P_{lk(r){var e=r.ik_1,t=new b(86400,0),a=Ar(e,t);if(ar(De(e,t),new b(0,0))<0&&!sr(Tr(a,t),e)){var i=a;a=Hr(i,lt())}var s=a,l=new b(86400,0),u=Nt(e,l),f=mr(u,zs(l,Ls(zs(De(u,l),Ta(u,on(u))),63))),c=rn(f),v,h,d,p=mr(s,F(719528)),m=p;p=Hr(m,F(60));var y=new b(0,0);if(ar(p,new b(0,0))<0){var x=p,k=mr(x,F(1)),S=Ar(k,F(146097)),z=Hr(S,F(1));y=Tr(z,F(400));var I=p,q=on(z),j=Tr(q,F(146097));p=mr(I,j)}var P=Tr(Rn(400),p),$=mr(P,F(591)),B=Ar($,F(146097)),N=p,H=Tr(Rn(365),B),L=B,J=Ar(L,F(4)),R=mr(H,J),V=B,K=Ar(V,F(100)),nr=Hr(R,K),W=B,tr=Ar(W,F(400)),Q=Hr(N,mr(nr,tr));if(ar(Q,new b(0,0))<0){var lr=B;B=Hr(lr,lt());var X=p,xr=Tr(Rn(365),B),br=B,dr=Ar(br,F(4)),Er=mr(xr,dr),zr=B,Pr=Ar(zr,F(100)),Br=Hr(Er,Pr),pr=B,Gr=Ar(pr,F(400));Q=Hr(X,mr(Br,Gr))}B=mr(B,y);var en=rn(Q),Zr=(or(en,5)+2|0)/153|0;h=((Zr+2|0)%12|0)+1|0,d=(en-((or(Zr,306)+5|0)/10|0)|0)+1|0;var _r=B,Fr=Zr/10|0,Vr=mr(_r,F(Fr));v=rn(Vr);var Xr=c/3600|0,$r=c-or(Xr,3600)|0,tn=$r/60|0,_n=$r-or(tn,60)|0;return new bc(v,h,d,Xr,tn,_n,r.jk_1)}}class bc{constructor(r,e,t,a,i,s,l){this.mk_1=r,this.nk_1=e,this.ok_1=t,this.pk_1=a,this.qk_1=i,this.rk_1=s,this.sk_1=l}toString(){return"UnboundLocalDateTime("+this.mk_1+"-"+this.nk_1+"-"+this.ok_1+" "+this.pk_1+":"+this.qk_1+":"+this.rk_1+"."+this.sk_1+")"}}class kc extends T{constructor(r){return new.target.zk(r)}static zk(r){var e=this.v(r);return vn(e,e.yk_1),e}}class B_{}class N_{constructor(r){this.dl_1=r}}class U_ extends B_{constructor(r,e){super();var t=this;t.el_1=b2(r,2)?r:g(),this.fl_1=e;var a=this;a.gl_1=E(this,ht)?this:g(),this.hl_1=c1()}qa(){return gg()}jl(r){this.gl_1=null,this.hl_1=r}sa(r){return this.jl(r)}*cl(r,e){return yield()=>{var t=e,a=this;return a.gl_1=E(t,ht)?t:g(),this.fl_1=r,Ts()}}il(){r:for(;;){var r=this.hl_1,e=this.gl_1,t;if(e==null){var a=new ma(r)instanceof ma?r:g();return Gz(a),a}else t=e;var i=t;if(D(new ma(c1()),new ma(r))){var s;try{var l=this.el_1,u=this.fl_1;s=aS(l,this,u,i)}catch(d){if(d instanceof Error){var f=d,c=Xg(f);i.sa(c);continue r}else throw d}var v=s;if(v!==Ts()){var h=v;i.sa(h)}}else this.hl_1=c1(),i.sa(r)}}}class D_ extends _e{}class xc{constructor(r){this.kl_1=r,this.ll_1=zo}l2(){return this.ll_1===zo&&(this.ll_1=fn(this.kl_1)(),this.kl_1=null),this.ll_1}ml(){return this.ll_1!==zo}toString(){return this.ml()?ye(this.l2()):"Lazy value not initialized yet."}}class R_{}class Yk{}class Lt{constructor(r){this.nl_1=r}equals(r){var e;return r instanceof Lt?e=D(this.nl_1,r.nl_1):e=!1,e}hashCode(){return wr(this.nl_1)}toString(){return"Failure("+this.nl_1.toString()+")"}}class ma{constructor(r){this.ol_1=r}toString(){return $z(this.ol_1)}hashCode(){return Jz(this.ol_1)}equals(r){return Hz(this.ol_1,r)}}class jh extends jo{constructor(r){return new.target.hb(r)}static hb(r){r=r===o?"An operation is not implemented.":r;var e=this.nc(r);return vn(e,e.gb_1),e}}class Ll{constructor(r,e){this.lh_1=r,this.mh_1=e}toString(){return"("+ye(this.lh_1)+", "+ye(this.mh_1)+")"}qh(){return this.lh_1}rh(){return this.mh_1}hashCode(){var r=this.lh_1==null?0:wr(this.lh_1);return r=or(r,31)+(this.mh_1==null?0:wr(this.mh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Ll)||!D(this.lh_1,r.lh_1)||!D(this.mh_1,r.mh_1))}}class L_{constructor(){af=this,this.mg_1=new Ot(new b(0,0),new b(0,0)),this.ng_1=16,this.og_1=128}pg(r,e){var t;return sr(r,new b(0,0))&&sr(e,new b(0,0))?t=this.mg_1:t=new Ot(r,e),t}pl(r){var e;switch(r.length){case 36:e=sE(r);break;case 32:e=oE(r);break;default:throw T.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+Kz(r,64)+'" of length '+r.length))}return e}}class Ot{constructor(r,e){Ys(),this.ql_1=r,this.rl_1=e}toString(){return this.sl()}sl(){var r=new Int8Array(36);is(this.ql_1,r,0,0,4);var e=45,t=Y(e);r[8]=Jn(t),is(this.ql_1,r,9,4,6);var a=45,i=Y(a);r[13]=Jn(i),is(this.ql_1,r,14,6,8);var s=45,l=Y(s);r[18]=Jn(l),is(this.rl_1,r,19,0,2);var u=45,f=Y(u);return r[23]=Jn(f),is(this.rl_1,r,24,2,8),nE(r)}equals(r){return this===r?!0:r instanceof Ot?sr(this.ql_1,r.ql_1)&&sr(this.rl_1,r.rl_1):!1}tl(r){var e;if(sr(this.ql_1,r.ql_1)){var l=this.rl_1,u=l,f=r.rl_1,c=f;e=Tt(u,c)}else{var t=this.ql_1,a=t,i=r.ql_1,s=i;e=Tt(a,s)}return e}d(r){return this.tl(r instanceof Ot?r:g())}hashCode(){return De(this.ql_1,this.rl_1).hashCode()}}class M_{constructor(){sf=this,this.ul_1=0,this.vl_1=-1,this.wl_1=1,this.xl_1=8}}class Ge{constructor(r){Ql(),this.yl_1=r}zl(r){return Qg(this.yl_1,r)}d(r){return Wz(this,r)}toString(){return of(this.yl_1)}hashCode(){return this.yl_1}equals(r){return Yz(this.yl_1,r)}}class F_{constructor(r){this.am_1=r,this.bm_1=0}y(){return this.bm_1<this.am_1.length}cm(){var r;if(this.bm_1<this.am_1.length){var e=this.bm_1;this.bm_1=e+1|0;var t=this.am_1[e];r=t}else throw jr.r(this.bm_1.toString());return r}z(){return new Ge(this.cm())}}class ya{constructor(r){this.dm_1=r}c1(){return Ea(this.dm_1)}x(){return Xz(this.dm_1)}em(r){return r0(this.dm_1,r)}l1(r){return Qz(this,r)}d1(){return rI(this.dm_1)}toString(){return nI(this.dm_1)}hashCode(){return eI(this.dm_1)}equals(r){return tI(this.dm_1,r)}}class $_{constructor(){lf=this,this.fm_1=0,this.gm_1=-1,this.hm_1=4,this.im_1=32}}class le{constructor(r){ru(),this.jm_1=r}km(r){return n0(this.jm_1,r)}d(r){return aI(this,r)}toString(){return uf(this.jm_1)}hashCode(){return this.jm_1}equals(r){return iI(this.jm_1,r)}}class J_{constructor(r){this.lm_1=r,this.mm_1=0}y(){return this.mm_1<this.lm_1.length}nm(){var r;if(this.mm_1<this.lm_1.length){var e=this.mm_1;this.mm_1=e+1|0;var t=this.lm_1[e];r=t}else throw jr.r(this.mm_1.toString());return r}z(){return new le(this.nm())}}class wa{constructor(r){this.om_1=r}c1(){return za(this.om_1)}x(){return lI(this.om_1)}pm(r){return e0(this.om_1,r)}l1(r){return uI(this,r)}d1(){return fI(this.om_1)}toString(){return cI(this.om_1)}hashCode(){return vI(this.om_1)}equals(r){return hI(this.om_1,r)}}class H_{constructor(){ff=this,this.qm_1=new b(0,0),this.rm_1=new b(-1,-1),this.sm_1=8,this.tm_1=64}}class ue{constructor(r){Zs(),this.um_1=r}vm(r){return t0(this.um_1,r)}d(r){return dI(this,r)}toString(){return cf(this.um_1)}hashCode(){return pI(this.um_1)}equals(r){return _I(this.um_1,r)}}class G_{constructor(r){this.wm_1=r,this.xm_1=0}y(){return this.xm_1<this.wm_1.length}ym(){var r;if(this.xm_1<this.wm_1.length){var e=this.xm_1;this.xm_1=e+1|0;var t=this.wm_1[e];r=t}else throw jr.r(this.xm_1.toString());return r}z(){return new ue(this.ym())}}class ba{constructor(r){this.zm_1=r}c1(){return Ia(this.zm_1)}x(){return yI(this.zm_1)}an(r){return a0(this.zm_1,r)}l1(r){return wI(this,r)}d1(){return bI(this.zm_1)}toString(){return kI(this.zm_1)}hashCode(){return xI(this.zm_1)}equals(r){return SI(this.zm_1,r)}}class K_{constructor(){vf=this,this.bn_1=0,this.cn_1=-1,this.dn_1=2,this.en_1=16}}class Ke{constructor(r){nu(),this.fn_1=r}gn(r){return i0(this.fn_1,r)}d(r){return EI(this,r)}toString(){return hf(this.fn_1)}hashCode(){return this.fn_1}equals(r){return zI(this.fn_1,r)}}class W_{constructor(r){this.hn_1=r,this.in_1=0}y(){return this.in_1<this.hn_1.length}jn(){var r;if(this.in_1<this.hn_1.length){var e=this.in_1;this.in_1=e+1|0;var t=this.hn_1[e];r=t}else throw jr.r(this.in_1.toString());return r}z(){return new Ke(this.jn())}}class ka{constructor(r){this.kn_1=r}c1(){return Ca(this.kn_1)}x(){return qI(this.kn_1)}ln(r){return s0(this.kn_1,r)}l1(r){return AI(this,r)}d1(){return TI(this.kn_1)}toString(){return jI(this.kn_1)}hashCode(){return OI(this.kn_1)}equals(r){return PI(this.kn_1,r)}}function Zk(n){return new Rt(0,Sc(n))}function Vk(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,n[a]==null)return a}while(e<=t)}else{var i=0,s=n.length-1|0;if(i<=s)do{var l=i;if(i=i+1|0,D(r,n[l]))return l}while(i<=s)}return-1}function Xk(n,r){return ex(n,r)>=0}function Qk(n,r){return tx(n,r)>=0}function rx(n,r){return ax(n,r)>=0}function nx(n,r){return ix(n,r)>=0}function Sc(n){return n.length-1|0}function ex(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function tx(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function ax(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,sr(r,n[a]))return a}while(e<=t);return-1}function ix(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function sx(n){return n.length-1|0}function Y_(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,ox(n,Yr.f(),r,e,t,a,i,s).toString()}function ox(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=0,c=n.length;r:for(;f<c;){var v=n[f];if(f=f+1|0,u=u+1|0,u>1&&r.g(e),i<0||u<=i)bg(r,v,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function lx(n){return new Rt(0,vx(n))}function ux(n){var r;switch(n.length){case 0:r=fr();break;case 1:r=jn(n[0]);break;default:var e=n.slice();r=Fl(e);break}return r}function fx(n){return new s_(mx(n))}function Z_(n){switch(n.length){case 0:return Ft();case 1:return Jc(n[0]);default:return V_(n,Pn.i(n.length))}}function cx(n){return hx(n,A.m())}function vx(n){return n.length-1|0}function V_(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,r.n(a)}return r}function hx(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,a!=null&&r.n(a)}return r}function dx(n,r){return _x(n,r)>=0}function X_(n){var r;switch(n.length){case 0:throw jr.r("Array is empty.");case 1:r=n[0];break;default:throw T.v("Array has more than one element.")}return r}function px(n){return n.length===0?pg():new pp(n)}function _x(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Oh(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function mx(n){return()=>tm(n)}function M(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,Q_(n,Yr.f(),r,e,t,a,i,s).toString()}function Q_(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=n.x();r:for(;f.y();){var c=f.z();if(u=u+1|0,u>1&&r.g(e),i<0||u<=i)bg(r,c,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function gx(n){return Ss(n,qa.b1(Mr(n,12)))}function yx(n){for(var r=Po(n.c1()),e=0,t=n.x();t.y();){var a=t.z(),i=e;e=i+1|0,r[i]=a}return r}function xa(n){if(E(n,Z)){if(n.c1()<=1)return wt(n);var r=Pa(n),e=Fs(r)?r:g();return E2(e),Fl(e)}var t=qc(n);return R2(t),t}function yi(n){return wt(Ic(n))}function Ec(n){if(n.d1())throw jr.r("List is empty.");return n.e1(0)}function Pt(n,r){var e=A.f1(n.c1()+1|0);return e.g1(n),e.n(r),e}function Dn(n,r){if(E(r,Z)){var e=A.f1(n.c1()+r.c1()|0);return e.g1(n),e.g1(r),e}else{var t=A.h1(n);return Ui(t,r),t}}function wx(n,r){return 0<=r&&r<n.c1()?n.e1(r):null}function dt(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=Ft();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=Jc(e);break;default:r=Ss(n,Pn.i(n.c1()));break}return r}return SE(Ss(n,Pn.i1()))}function wt(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=fr();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=jn(e);break;default:r=Cc(n);break}return r}return Zc(qc(n))}function zc(n){return n.c1()===1?n.e1(0):null}function bx(n,r){var e=n.x();if(!e.y())throw jr.j1();for(var t=e.z();e.y();){var a=e.z();r.compare(t,a)>0&&(t=a)}return t}function Ic(n){var r;return E(n,Z)?r=Pn.k1(n):r=Ss(n,Pn.i1()),r}function kx(n,r){return E(n,Z)?n.l1(r):Ex(n,r)>=0}function Xu(n){return n.d1()?null:n.e1(0)}function rm(n){var r;switch(n.c1()){case 0:throw jr.r("List is empty.");case 1:r=n.e1(0);break;default:throw T.v("List has more than one element.")}return r}function Cc(n){return A.h1(n)}function xx(n,r){return zx(n,ln(n.c1()-r|0,0))}function nm(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return wt(n);var t;if(E(n,Z)){var a=n.c1()-r|0;if(a<=0)return fr();if(a===1)return jn(Ix(n));if(t=A.f1(a),E(n,zn)){if(E(n,Ds)){var i=r,s=n.c1();if(i<s)do{var l=i;i=i+1|0,t.n(n.e1(l))}while(i<s)}else for(var u=n.m1(r);u.y();){var f=u.z();t.n(f)}return t}}else t=A.m();for(var c=0,v=n.x();v.y();){var h=v.z();c>=r?t.n(h):c=c+1|0}return Zc(t)}function Sx(n){if(E(n,zn))return n.d1()?null:n.e1(0);var r=n.x();return r.y()?r.z():null}function em(n){return n.d1()?null:n.e1(n.c1()-1|0)}function Ss(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function qc(n){return E(n,Z)?Cc(n):Ss(n,A.m())}function Mt(n,r){if(E(n,Z)){if(n.c1()<=1)return wt(n);var e=Pa(n),t=Fs(e)?e:g();return z2(t,r),Fl(t)}var a=qc(n);return L2(a,r),a}function Ex(n,r){if(E(n,zn))return n.n1(r);for(var e=0,t=n.x();t.y();){var a=t.z();if(Pi(e),D(r,a))return e;e=e+1|0}return-1}function zx(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return fr();if(E(n,Z)){if(r>=n.c1())return wt(n);if(r===1)return jn(Cx(n))}var t=0,a=A.f1(r),i=n.x();r:for(;i.y();){var s=i.z();if(a.n(s),t=t+1|0,t===r)break r}return Zc(a)}function Ix(n){if(E(n,zn))return z1(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Cx(n){if(E(n,zn))return Ec(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");return r.z()}function z1(n){if(n.d1())throw jr.r("List is empty.");return n.e1(Hs(n))}function qx(n){return new _p(n)}function Ax(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Le(e,t)>0&&(e=t)}return e}function Ac(n,r){return r<=-2147483648?wg().p1_1:He(n,r-1|0)}function Tx(n,r){return Qc.q1(n,r,-1)}function Bt(n,r){return n>r?r:n}function ln(n,r){return n<r?r:n}function jx(n,r){return Qc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Tc(n,r,e){if(ar(r,e)>0)throw T.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return ar(n,r)<0?r:ar(n,e)>0?e:n}function Ox(n,r){return ar(n,r)<0?r:n}function Px(n,r,e){if(r>e)throw T.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function Qu(n,r){return ar(n,r)>0?r:n}function bo(n,r){var e=Bx(r);return e!=null?n.u1(e):!1}function Bx(n){return ar(new b(-2147483648,-1),n)<=0&&ar(n,new b(2147483647,0))<=0?rn(n):null}function jc(n){var r=n.x();if(!r.y())return fr();var e=r.z();if(!r.y())return jn(e);var t=A.m();for(t.n(e);r.y();)t.n(r.z());return t}function qi(n,r){return new v_(n,r)}function Nx(n){return new mp(n)}function Ux(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}var t;return r===0?t=pg():E(n,Dl)?t=n.v1(r):t=new Rl(n,r),t}function Ph(n,r){var e=pE(r),t;e==null?t=null:t=n.c1()+e|0;var a=t,i=Pn.i(a??or(n.c1(),2));return i.g1(n),Ui(i,r),i}function Oo(n,r){var e=Pn.i(n.c1()+1|0);return e.g1(n),e.n(r),e}function Dx(n){if(C(n)===0)throw jr.r("Char sequence is empty.");return rr(n,0)}function Rx(n){var r;switch(C(n)){case 0:throw jr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw T.v("Char sequence has more than one element.")}return r}function Lx(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw T.v(w(e))}return We(n,Bt(r,n.length))}function Mx(n){var r=n&65535;return r}function gn(n,r){return n-r|0}function Fx(n,r){return gn(n.x1_1,r instanceof Cn?r.x1_1:g())}function Hn(n,r){return n-r|0}function Y(n){return n}function kr(n){return String.fromCharCode(n)}function $x(n,r){return r instanceof Cn?n===r.x1_1:!1}function Jx(n){return n}var I1;function Oc(){return I1===o&&new gp,I1}function ye(n){var r=n==null?null:w(n);return r??"null"}function Hx(n,r){var e=n??"null",t=w(r);return e+(t??"null")}var C1;function Ml(){return C1===o&&new yp,C1}function Gx(n){var r;return n<0?r=-n:r=n,r}function tm(n){return new wp(n)}function Po(n){var r="BooleanArray",e=am(Array(n),!1);return e.$type$=r,e}function am(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;e=e+1|0,n[a]=r}while(a!==t);return n}function Es(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function Aa(n){var r="LongArray",e=am(Array(n),new b(0,0));return e.$type$=r,e}function Ai(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function r1(){return Ti(),im}var im;function sm(){return Ti(),om}var om;function q1(){return Ti(),lm}var lm;function um(){return Ti(),fm}var fm;function Kx(){return Ti(),cm}var cm;function Wx(n){return Ti(),(n|0)===n?No(n):(sm()[0]=n,or(q1()[Kx()],31)+q1()[um()]|0)}var Bh;function Ti(){Bh||(Bh=!0,im=new ArrayBuffer(8),om=new Float64Array(r1()),new Float32Array(r1()),lm=new Int32Array(r1()),sm()[0]=-1,fm=q1()[0]!==0?1:0,cm=1-um()|0)}function ot(){return yr(),vm}var vm;function lt(){return yr(),hm}var hm;function Nh(){return yr(),dm}var dm;function Yx(){return yr(),pm}var pm;function $e(){return yr(),_m}var _m;function Uh(){return yr(),mm}var mm;function ar(n,r){if(yr(),sr(n,r))return 0;var e=Ie(n),t=Ie(r);return e&&!t?-1:!e&&t?1:Ie(Hr(n,r))?-1:1}function A1(n){return yr(),Jn(n.d3_1)}function T1(n){return yr(),Lc(n.d3_1)}function rn(n){return yr(),n.d3_1}function ie(n){return yr(),n.e3_1*4294967296+Vx(n)}function Bo(n,r){if(yr(),Sa(n))return"0";if(Ie(n))if(sr(n,$e())){var e=F(r),t=Ar(n,e),a=rn(Hr(Tr(t,e),n)),i=Bo(t,r);return i+a.toString(r)}else return"-"+Bo(on(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,l=wi(Math.pow(r,s)),u=n,f="";;){var c=Ar(u,l),v=rn(Hr(u,Tr(c,l))),h=v.toString(r);if(u=c,Sa(u))return h+f;for(;h.length<s;)h="0"+h;f=h+f}}function sr(n,r){return yr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Zx(n){return yr(),n.d3_1^n.e3_1}function F(n){return yr(),new b(n,n<0?-1:0)}function Ie(n){return yr(),n.e3_1<0}function Hr(n,r){return yr(),mr(n,on(r))}function Vx(n){return yr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function Sa(n){return yr(),n.e3_1===0&&n.d3_1===0}function Tr(n,r){if(yr(),Sa(n))return ot();if(Sa(r))return ot();if(sr(n,$e()))return Dh(r)?$e():ot();if(sr(r,$e()))return Dh(n)?$e():ot();if(Ie(n)){var e;return Ie(r)?e=Tr(on(n),on(r)):e=on(Tr(on(n),r)),e}else if(Ie(r))return on(Tr(n,on(r)));if(Rh(n,Uh())&&Rh(r,Uh()))return wi(ie(n)*ie(r));var t=n.e3_1>>>16|0,a=n.e3_1&65535,i=n.d3_1>>>16|0,s=n.d3_1&65535,l=r.e3_1>>>16|0,u=r.e3_1&65535,f=r.d3_1>>>16|0,c=r.d3_1&65535,v=0,h=0,d=0,p=0;return p=p+or(s,c)|0,d=d+(p>>>16|0)|0,p=p&65535,d=d+or(i,c)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+or(s,f)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+or(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((or(t,c)+or(a,f)|0)+or(i,u)|0)+or(s,l)|0)|0,v=v&65535,new b(d<<16|p,v<<16|h)}function on(n){return yr(),mr(Pc(n),new b(1,0))}function wi(n){if(yr(),Js(n))return ot();if(n<=-9223372036854776e3)return $e();if(n+1>=9223372036854776e3)return Yx();if(n<0)return on(wi(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new b(e,t)}function mr(n,r){yr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,a=n.d3_1>>>16|0,i=n.d3_1&65535,s=r.e3_1>>>16|0,l=r.e3_1&65535,u=r.d3_1>>>16|0,f=r.d3_1&65535,c=0,v=0,h=0,d=0;return d=d+(i+f|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(a+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+l|0)|0,c=c+(v>>>16|0)|0,v=v&65535,c=c+(e+s|0)|0,c=c&65535,new b(h<<16|d,c<<16|v)}function Dh(n){return yr(),(n.d3_1&1)===1}function Rh(n,r){return yr(),ar(n,r)<0}function Pc(n){return yr(),new b(~n.d3_1,~n.e3_1)}function Ar(n,r){if(yr(),Sa(r))throw ks.k3("division by zero");if(Sa(n))return ot();if(sr(n,$e())){if(sr(r,lt())||sr(r,Nh()))return $e();if(sr(r,$e()))return lt();var e=Ls(n,1),t=se(Ar(e,r),1);if(sr(t,ot()))return Ie(r)?lt():Nh();var a=Hr(n,Tr(r,t));return mr(t,Ar(a,r))}else if(sr(r,$e()))return ot();if(Ie(n)){var i;return Ie(r)?i=Ar(on(n),on(r)):i=on(Ar(on(n),r)),i}else if(Ie(r))return on(Ar(n,on(r)));for(var s=ot(),l=n;Qx(l,r);){for(var u=ie(l)/ie(r),f=Math.max(1,Math.floor(u)),c=Math.ceil(Math.log(f)/Math.LN2),v=c<=48?1:Math.pow(2,c-48),h=wi(f),d=Tr(h,r);Ie(d)||Xx(d,l);)f=f-v,h=wi(f),d=Tr(h,r);Sa(h)&&(h=lt()),s=mr(s,h),l=Hr(l,d)}return s}function Ls(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new b(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function se(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new b(0,n.d3_1<<(e-32|0))}function Xx(n,r){return yr(),ar(n,r)>0}function Qx(n,r){return yr(),ar(n,r)>=0}function Nt(n,r){return yr(),Hr(n,Tr(Ar(n,r),r))}function zs(n,r){return yr(),new b(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function Ta(n,r){return yr(),new b(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function De(n,r){return yr(),new b(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Bc(n,r){yr();var e=r&63;if(e===0)return n;if(e<32)return new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new b(n.e3_1,0):t=new b(n.e3_1>>>(e-32|0)|0,0),t}function Rn(n){yr();var r;return n instanceof b?r=n:r=wi(n),r}function ci(n){return yr(),ja(n)&&n.$type$==="LongArray"}function r2(n){return yr(),n!=null?ci(n):!1}var Lh;function yr(){if(!Lh){Lh=!0,vm=F(0),hm=F(1),dm=F(-1),pm=new b(-1,2147483647),_m=new b(0,-2147483648),mm=F(16777216);var n=Array;new an(n,"LongArray",r2)}}function rr(n,r){var e;return Nc(n)?e=G(n,r):e=n.b(r),e}function Nc(n){return typeof n=="string"}function G(n,r){return n.charCodeAt(r)}function C(n){var r;return Nc(n)?r=n.length:r=n.a(),r}function Ln(n,r,e){var t;return Nc(n)?t=Gn(n,r,e):t=n.c(r,e),t}function n2(n){return Y_(n,", ","[","]",o,o,e2)}function gm(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!zm(t)||e.length!=t.length)return!1;var a=0,i=e.length;if(a<i)do{var s=a;if(a=a+1|0,!D(e[s],t[s]))return!1}while(a<i);return!0}function ym(n){var r=n;if(r==null)return 0;var e=1,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0,e=or(e,31)+wr(r[i])|0}while(t<a);return e}function e2(n){return w(n)}function Le(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=Mh(n,r):r instanceof b?t=Mh(n,ie(r)):t=Fh(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Fh(n,r);break;default:e=t2(n,r);break}return e}function Mh(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var a=1/n,i;a===1/r?i=0:a<0?i=-1:i=1,t=i}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Fh(n,r){return n<r?-1:n>r?1:0}function t2(n,r){return n.d(r)}function a2(n){return j1(n)}function j1(n){if(!("kotlinHashCodeValue$"in n)){var r=wm(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function wm(){return Math.random()*4294967296|0}function w(n){var r;return n==null?r="null":zm(n)?r="[...]":typeof n.toString!="function"?r=i2(n):r=n.toString(),r}function i2(n){return Object.prototype.toString.call(n)}function D(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var a=1/n;t=a===1/r}e=t}else e=!1;return e}if(O1(n)&&O1(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!ja(n.$bound)||!ja(r.$bound))return!1;var i=n.$bound,s=r.$bound;return gm(i,s)}return n===r}function wr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():j1(n);break;case"function":e=O1(n)?s2(n):j1(n);break;case"number":e=Wx(n);break;case"boolean":e=Uc(n);break;case"string":e=me(String(n));break;case"bigint":e=o2(n);break;case"symbol":e=l2(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function s2(n){var r=n.$flags;r=or(31,r)+wr(n.$id)|0;var e=or(31,r),t=n.$arity;r=e+(t??-1)|0;var a=n.$bound;if(a!=null&&ja(a)){var i=a;r=or(31,r)+ym(i)|0}return r}function Uc(n){return n?1231:1237}function me(n){var r=0,e=n.length,t=0,a=e-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n.charCodeAt(i);r=or(r,31)+s|0}while(i!==a);return r}function o2(n){var r=BigInt(32),e=BigInt(4294967295),t=Gx(n),a=0,i;n<0?i=-1:i=1;var s=i;r:for(;;){if(t==0)break r;var l=t&e,u=Number(l);a=or(31,a)+u|0,t=t>>r}return or(a,s)}function l2(n){var r=u2(n)?f2():c2(),e=r.get(n);if(e!==o)return e;var t=wm();return r.set(n,t),t}function u2(n){return Symbol.keyFor(n)!=o}function f2(){return n1===o&&(n1=new Map),n1}function c2(){return e1===o&&(e1=new WeakMap),e1}var n1,e1;function vn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Rr(n){return n.prototype}function Na(n,r){var e=Object.create(n.prototype);return Dc(e,r),e}function Dc(n,r){r!==o&&Object.assign(n,r)}function vi(n,r,e,t){var a;a=n;var i=a;return Reflect.construct(r,e,i)}function v2(n){return n===o}function bm(n){return{cause:n}}function hi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(v2(r)){var a=e==null?null:e.toString();t=a??o}else t=o;n.message=t}}function h2(){return xm(),km}var km;function d2(n,r){return xm(),n!=o&&n[h2()]?r(n):sS(r)}var $h;function xm(){$h||($h=!0,km=ht.Symbol)}function Ms(){throw b1.s3()}function p2(){throw k1.w3()}function g(){throw x1.a4()}function fn(n){var r;return n==null?p2():r=n,r}function Sm(n,r,e,t,a,i){var s=o;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:a,suspendArity:i,$kClass$:s,defaultConstructor:e}}function _(n,r,e,t,a,i,s,l){var u="class";Rc(u,n,r,e,t,a,i,s,l)}function Rc(n,r,e,t,a,i,s,l,u){var f=Sm(n,e,t,l,u,s);r.$metadata$=f;var c=r.prototype;if(i!=null)for(var v=0,h=i.length;v<h;){var d=i[v];v=v+1|0,Object.assign(c,d.prototype),c[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function U(n,r,e,t,a,i,s,l){var u="object";Rc(u,n,r,e,t,a,i,s,l)}function Lr(n,r,e,t,a,i,s,l){var u="interface";Rc(u,n,r,e,t,a,i,s,l)}function nn(n,r,e,t){U(n,"Companion",o,r,e,t,o,o)}function _2(n){var r=n.length,e=Array(r),t=0,a=r-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n[i];s!=null&&Fs(s)?e[i]=s:e[i]=[].slice.call(s)}while(i!==a);return[].concat.apply([],e)}function Jn(n){return n<<24>>24}function No(n){var r;return n instanceof b?r=rn(n):r=m2(n),r}function m2(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Lc(n){return n<<16>>16}function it(n){var r=No(n),e=Lc(r);return Mx(e)}function He(n,r){return new Rt(n,r)}function g2(){return Oi(),Em}var Em;function ei(){return Oi(),Sm("class",o,o,o,o,o)}function ji(n,r,e,t,a,i){return Oi(),t.get=t,t.set=a,t.callableName=n,y2(t,w2(r,a),e)}function y2(n,r,e){Oi(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function w2(n,r){return Oi(),g2()[n][r==null?0:1]}function Ye(n,r,e,t,a,i){return Oi(),n.callableName=a,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=i,n}var Jh;function Oi(){if(!Jh){Jh=!0;var n=[ei(),ei()],r=[ei(),ei()];Em=[n,r,[ei(),ei()]]}}function zm(n){return ja(n)||g1(n)}function ja(n){return Array.isArray(n)}function O1(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function Fs(n){var r;return ja(n)?r=!n.$type$:r=!1,r}function b2(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,a=t==null?null:t.$metadata$,i=a==null?null:a.suspendArity,s;if(i==null)return!1;s=i;var l=s,u=!1,f=0,c=l.length;r:for(;f<c;){var v=l[f];if(f=f+1|0,r===v){u=!0;break r}}return u}function Im(n){var r;return typeof n=="number"?r=!0:r=n instanceof b,r}function P1(n){var r=typeof n;return r==="string"||r==="boolean"||Im(n)||E(n,Oe)}function $s(n){return typeof n=="string"||E(n,cc)}function vs(n){return ja(n)&&n.$type$==="BooleanArray"}function hs(n){return n instanceof Int8Array}function ds(n){return n instanceof Int16Array}function ps(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function _s(n){return n instanceof Int32Array}function ms(n){return n instanceof Float32Array}function gs(n){return n instanceof Float64Array}function k2(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var a=t==="object"?x2(r):r,i=a.$metadata$;return(i==null?null:i.kind)==="interface"?E(n,a):n instanceof a}function x2(n){return Object.getPrototypeOf(n)}var o;function Oa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,new Int32Array(r));else if(r>t){var i=new Int32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function Cm(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Wm(n,r,null)}function Mc(n,r){return gm(n,r)}function S2(n){return ym(n)}function Fl(n){return A.i4(n)}function B1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,Es(r));else if(r>t){var i=Es(r);i.set(n),a=i}else a=n.slice(0,r);var s=a;return s.$type$="CharArray",s}function N1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,new Float64Array(r));else if(r>t){var i=new Float64Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function U1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,new Float32Array(r));else if(r>t){var i=new Float32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function bi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Ua(n,Aa(r))}function ki(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,new Int16Array(r));else if(r>t){var i=new Int16Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function xi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ua(n,new Int8Array(r));else if(r>t){var i=new Int8Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function D1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t="BooleanArray",a=Wm(n,r,!1);return a.$type$=t,a}function E2(n){n.length>1&&$2(n)}function z2(n,r){n.length>1&&Nm(n,r)}function t1(n,r,e){for(var t=new Int32Array(e),a=0,i=0,s=0,l=0,u=n.length;l<u;){var f=G(n,l);l=l+1|0;var c=r[Y(f)];if(i=i|(c&31)<<s,c<32){var v=a;a=v+1|0,t[v]=i,i=0,s=0}else s=s+5|0}return t}function qm(n){return Am(n)>=0}function Am(n){var r=Y(n),e=Tm(Hh().j4_1,r),t=r-Hh().j4_1[e]|0;return t<10?t:-1}function Tm(n,r){for(var e=0,t=n.length-1|0,a=-1,i=0;e<=t;)if(a=(e+t|0)/2|0,i=n[a],r>i)e=a+1|0;else{if(r===i)return a;t=a-1|0}return a-(r<i?1:0)|0}var R1;function Hh(){return R1===o&&new bp,R1}function I2(n){return C2(n)!==0}function C2(n){var r=Y(n),e=Tm(mo().k4_1,r),t=mo().k4_1[e],a=(t+mo().l4_1[e]|0)-1|0,i=mo().m4_1[e];if(r>a)return 0;var s=i&3;if(s===0){var l=2,u=t,f=0;if(f<=1)do{if(f=f+1|0,u=u+(i>>l&127)|0,u>r)return 3;if(l=l+7|0,u=u+(i>>l&127)|0,u>r)return 0;l=l+7|0}while(f<=1);return 3}if(i<=7)return s;var c=r-t|0,v=i<=31?c%2|0:c;return i>>or(2,v)&3}var L1;function mo(){return L1===o&&new kp,L1}function q2(n){var r=Y(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function A2(n){for(var r=cr.t4(),e=n.u4();e.y();){var t=e.z(),a=n.v4(t),i=r.o2(a),s=(i==null&&!r.m2(a)?0:i)+1|0;r.s2(a,s)}return r}function Js(n){return n!==n}function T2(n){var r;return n===0?r=0:r=1<<(31-ws(n)|0),r}function j2(n){return n===1/0||n===-1/0}function Gh(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+ws(t)|0}else e=ws(r);return e}function Fc(n){return!O2(n)&&!P2(n)}function $c(n){return!j2(n)&&!Js(n)}function jm(n){var r=n.d3_1;return r===0?32+Kh(n.e3_1)|0:Kh(r)}function O2(n){return n===1/0||n===-1/0}function P2(n){return n!==n}function Kh(n){var r=~(n|(-n|0));return 32-ws(r)|0}var ur;function di(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function Tt(n,r){return De(n,new b(0,-2147483648)).f3(De(r,new b(0,-2147483648)))}function B2(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function N2(n,r){var e=n,t=r;if(ar(t,new b(0,0))<0){var a;return Tt(n,r)<0?a=new b(0,0):a=new b(1,0),a}if(ar(e,new b(0,0))>=0)return Ar(e,t);var i=se(Ar(Bc(e,1),t),1),s=Hr(e,Tr(i,t)),l,u=s,f=t;Tt(u,f)>=0?l=1:l=0;var c=l,v=mr(i,F(c));return v}function U2(n,r){if(ar(n,new b(0,0))>=0)return u1(n,r);var e=Bc(n,1),t=Ar(e,F(r)),a=se(t,1),i=a,s=Tr(i,F(r)),l=Hr(n,s);if(ar(l,F(r))>=0){var u=l;l=Hr(u,F(r));var f=a;a=mr(f,F(1))}return u1(a,r)+u1(l,r)}function Pa(n){var r;return n.toArray!==void 0?r=n.toArray():r=Om(n),r}function Pi(n){return n<0&&cE(),n}function D2(n,r,e,t,a){Mn.x4(t,a,n.length);var i=a-t|0;if(Mn.x4(e,e+i|0,r.length),g1(r)&&g1(n)){var s=n.subarray(t,a);r.set(s,e)}else{var l=0;if(l<i)do{var u=l;l=l+1|0,r[e+u|0]=n[t+u|0]}while(l<i)}}function Om(n){return vE(n)}function jn(n){var r=[n];return A.i4(r)}function Uo(n){return wE([n])}function Jc(n){return EE([n])}function R2(n){Pm(n,_g())}function L2(n,r){Pm(n,r)}function Pm(n,r){if(n.c1()<=1)return ur;var e=Pa(n);Nm(e,r);var t=0,a=e.length;if(t<a)do{var i=t;t=t+1|0,n.y4(i,e[i])}while(t<a)}function Bm(n){if(!(n>=0)){var r="capacity must be non-negative.";throw T.v(w(r))}return Array(n)}function Do(n,r,e){n.fill(null,r,e)}function Wh(n,r){return Cm(n,r)}function Yh(n,r){n[r]=null}var M1;function as(){return M1===o&&new Ip,M1}function M2(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function a1(n,r){return Mn.l6(r,n.c1()),r}function F2(n,r){return Mn.m5(r,n.c1()),r}var ko;function Nm(n,r){if(Um()){var e=J2(r);n.sort(e)}else Dm(n,0,Sc(n),r)}function $2(n){if(Um()){var r=H2;n.sort(r)}else Dm(n,0,Sc(n),_g())}function Um(){var n=ko;if(n!=null)return n;ko=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var a=G2;r.sort(a);var i=1,s=r.length;if(i<s)do{var l=i;i=i+1|0;var u=r[l-1|0],f=r[l];if((u&3)===(f&3)&&u>=f)return!1}while(i<s);return ko=!0,!0}function Dm(n,r,e,t){var a=n.length,i=Array(a),s=F1(n,i,r,e,t);if(s!==n){var l=r;if(l<=e)do{var u=l;l=l+1|0,n[u]=s[u]}while(u!==e)}}function F1(n,r,e,t,a){if(e===t)return n;var i=(e+t|0)/2|0,s=F1(n,r,e,i,a),l=F1(n,r,i+1|0,t,a),u=s===r?n:r,f=e,c=i+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,f<=i&&c<=t){var d=s[f],p=l[c];a.compare(d,p)<=0?(u[h]=d,f=f+1|0):(u[h]=p,c=c+1|0)}else f<=i?(u[h]=s[f],f=f+1|0):(u[h]=l[c],c=c+1|0)}while(h!==t);return u}function J2(n){return(r,e)=>n.compare(r,e)}function H2(n,r){return Le(n,r)}function G2(n,r){return(n&3)-(r&3)|0}function K2(n){n.y6_1=null}function Rm(n,r){return T2(or(ln(r,1),3))}function Lm(n,r){return ws(r)+1|0}function Zh(n){if(n.y8_1.i7_1!==n.a9_1)throw To.x8("The backing map has been modified after this entry was obtained.")}function Si(n){return n.b7_1.length}function ct(n){return n.e7_1.length}function $l(n){n.i7_1=n.i7_1+1|0}function Mm(n,r){W2(n,r)?$m(n,!0):Y2(n,n.g7_1+r|0)}function W2(n,r){var e=Si(n)-n.g7_1|0,t=n.g7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(Si(n)/4|0)}function Y2(n,r){if(r<0)throw ge.d9("too many elements");if(r>Si(n)){var e=Mn.e9(Si(n),r);n.b7_1=Wh(n.b7_1,e);var t=n,a=n.c7_1;t.c7_1=a==null?null:Wh(a,e),n.d7_1=Oa(n.d7_1,e);var i=Rm(Is,e);i>ct(n)&&Jm(n,i)}}function Fm(n){var r=n.c7_1;if(r!=null)return r;var e=Bm(Si(n));return n.c7_1=e,e}function Jl(n,r){return r==null?0:or(wr(r),-1640531527)>>>n.h7_1|0}function $m(n,r){for(var e=0,t=0,a=n.c7_1;e<n.g7_1;){var i=n.d7_1[e];i>=0&&(n.b7_1[t]=n.b7_1[e],a!=null&&(a[t]=a[e]),r&&(n.d7_1[t]=i,n.e7_1[i]=t+1|0),t=t+1|0),e=e+1|0}Do(n.b7_1,t,n.g7_1),a==null||Do(a,t,n.g7_1),n.g7_1=t}function Jm(n,r){$l(n),n.g7_1>n.j7_1&&$m(n,!1),n.e7_1=new Int32Array(r),n.h7_1=Lm(Is,r);for(var e=0;e<n.g7_1;){var t=e;if(e=t+1|0,!Z2(n,t))throw gr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Z2(n,r){for(var e=Jl(n,n.b7_1[r]),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return n.e7_1[e]=r+1|0,n.d7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0)}}function go(n,r){for(var e=Jl(n,r),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return-1;if(D(n.b7_1[a-1|0],r))return a-1|0;if(t=t-1|0,t<0)return-1;var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0)}}function V2(n,r){var e=n.g7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.d7_1[e]>=0&&D(fn(n.c7_1)[e],r))return e}return-1}function Hm(n,r){n.z7();r:for(;;)for(var e=Jl(n,r),t=Bt(or(n.f7_1,2),ct(n)/2|0),a=0;;){var i=n.e7_1[e];if(i===0){if(n.g7_1>=Si(n)){Mm(n,1);continue r}var s=n.g7_1;n.g7_1=s+1|0;var l=s;return n.b7_1[l]=r,n.d7_1[l]=e,n.e7_1[e]=l+1|0,n.j7_1=n.j7_1+1|0,$l(n),a>n.f7_1&&(n.f7_1=a),l}if(D(n.b7_1[i-1|0],r))return-i|0;if(a=a+1|0,a>t){Jm(n,or(ct(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=ct(n)-1|0)}}function Gm(n,r){Yh(n.b7_1,r);var e=n.c7_1;e==null||Yh(e,r),X2(n,n.d7_1[r]),n.d7_1[r]=-1,n.j7_1=n.j7_1-1|0,$l(n)}function X2(n,r){for(var e=r,t=r,a=0;;){var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0);var s=n.e7_1[e];if(a=a+1|0,a>n.f7_1||s===0)return n.e7_1[t]=0,ur;var l=Jl(n,n.b7_1[s-1|0]);((l-e|0)&(ct(n)-1|0))>=a&&(n.e7_1[t]=s,n.d7_1[s-1|0]=t,t=e,a=0)}}function Q2(n,r){return n.j7_1===r.c1()&&n.k8(r.r2())}function rS(n,r){var e=Hm(n,r.k2()),t=Fm(n);if(e>=0)return t[e]=r.l2(),!0;var a=t[(-e|0)-1|0];return D(r.l2(),a)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function nS(n,r){if(r.d1())return!1;Mm(n,r.c1());for(var e=r.x(),t=!1;e.y();)rS(n,e.z())&&(t=!0);return t}var Is,$1;function eS(){return $1===o&&new Fp,$1}var Km;function tS(n,r){var e=new dc(r),t=e,a=n;return t.va_1=typeof a=="function"?a(e):n.ib(e),e}function aS(n,r,e,t){var a=new dc(t),i=n,s=typeof i=="function"?i(r,e,a):n.jb(r,e,a);return a.va_1=s,a.ya()}function iS(n){var r=n instanceof hc?n:null,e=r==null?null:r.bb();return e??n}function sS(n){return new Promise(oS(n))}function oS(n){return(r,e)=>{var t=gg(),a=new Jp(t,r,e);return qE(n,a),ur}}function Vh(n){vn(n,n.r6_1)}function i1(n){vn(n,n.u_1)}function s1(n){vn(n,n.c9_1)}function o1(n){vn(n,n.j3_1)}function Xh(n){vn(n,n.q_1)}function Qh(n){vn(n,n.xb_1)}function rd(n){vn(n,n.n3_1)}function nd(n){vn(n,n.w8_1)}function ed(n){vn(n,n.dc_1)}function td(n){vn(n,n.hc_1)}function l1(n){vn(n,n.jc_1)}function ad(n){vn(n,n.rc_1)}function lS(n){vn(n,n.r3_1)}function uS(n){vn(n,n.v3_1)}function fS(n){vn(n,n.z3_1)}function Ua(n,r){for(var e=n.length,t=r.length,a=0,i=r;a<e&&a<t;){var s=a,l=a;a=l+1|0,i[s]=n[l]}return r}function Wm(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var a=n.length;if(r>a)for(t.length=r;a<r;){var i=a;a=i+1|0,t[i]=e}return t}function xo(n,r){return new xc(r)}function Ym(n){return new xc(n)}function cS(n){return rn(Ta(Ls(n,63),Bc(on(n),63)))}function vS(n){return ar(n,new b(0,0))<0?on(n):n}function hS(n){var r;if(Js(n))throw T.v("Cannot round NaN value.");return n>ie(new b(-1,2147483647))?r=new b(-1,2147483647):n<ie(new b(0,-2147483648))?r=new b(0,-2147483648):r=Rn(Math.round(n)),r}function dS(n){return n<0?-n|0:n}var Ro;function pS(){return Ro===o&&new pc,Ro}function id(){return DS(),Zm}var Zm;function _S(n){return n!=null}function mS(n){return Im(n)}function gS(n){return n!=null?typeof n=="boolean":!1}function yS(n){return n!=null?typeof n=="number":!1}function wS(n){return n!=null?typeof n=="number":!1}function bS(n){return n!=null?typeof n=="number":!1}function kS(n){return n instanceof b}function xS(n){return n!=null?typeof n=="number":!1}function SS(n){return n!=null?typeof n=="number":!1}function ES(n){return n!=null?Fs(n):!1}function zS(n){return n!=null?typeof n=="string":!1}function IS(n){return n instanceof Error}function CS(n){return n!=null?vs(n):!1}function qS(n){return n!=null?ps(n):!1}function AS(n){return n!=null?hs(n):!1}function TS(n){return n!=null?ds(n):!1}function jS(n){return n!=null?_s(n):!1}function OS(n){return typeof n=="bigint"}function PS(n){return n!=null?ci(n):!1}function BS(n){return n!=null?ms(n):!1}function NS(n){return n!=null?gs(n):!1}function US(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var J1;function Ir(){return J1===o&&new Hp,J1}var sd;function DS(){sd||(sd=!0,Zm=Array(0))}function Ur(n){if(n===String)return Ir().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var a=new S1(n);r.$kClass$=a,t=a}else t=r.$kClass$;e=t}else e=new S1(n);return e}function Dr(n){var r;switch(typeof n){case"string":r=Ir().stringClass;break;case"number":var e;(n|0)===n?e=Ir().intClass:e=Ir().doubleClass,r=e;break;case"bigint":r=Ir().bigIntClass;break;case"boolean":r=Ir().booleanClass;break;case"function":var t=Ir();r=t.functionClass(n.length);break;default:var a;if(vs(n))a=Ir().booleanArrayClass;else if(ps(n))a=Ir().charArrayClass;else if(hs(n))a=Ir().byteArrayClass;else if(ds(n))a=Ir().shortArrayClass;else if(_s(n))a=Ir().intArrayClass;else if(ci(n))a=Ir().wd();else if(ms(n))a=Ir().floatArrayClass;else if(gs(n))a=Ir().doubleArrayClass;else if(E(n,at))a=Ur(at);else if(Fs(n))a=Ir().arrayClass;else{var i=Object.getPrototypeOf(n).constructor,s;if(i===Object)s=Ir().anyClass;else if(i===Error)s=Ir().throwableClass;else{var l=i;s=Ur(l)}a=s}r=a;break}return r}function RS(n){n.lastIndex=0}function H1(n){var r=kr(n).toUpperCase();return r.length>1?n:G(r,0)}function LS(n){return 97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57?!0:gn(n,128)<0?!1:qm(n)||I2(n)}function MS(n){return 48<=n&&n<=57?!0:gn(n,128)<0?!1:qm(n)}function Hc(n){return q2(n)}function u1(n,r){return Bo(n,Bi(r))}function Bi(n){if(!(2<=n&&n<=36))throw T.v("radix "+n+" was not in valid range 2..36");return n}function Gc(n){var r=+n,e;return Js(r)&&!Xm(n)||r===0&&_t(n)?e=null:e=r,e}function FS(n,r){return n.toString(Bi(r))}function Lo(n){var r=+n;return(Js(r)&&!Xm(n)||r===0&&_t(n))&&Di(n),r}function Hl(n,r){var e=gn(n,48)>=0&&gn(n,57)<=0?Hn(n,48):gn(n,65)>=0&&gn(n,90)<=0?Hn(n,65)+10|0:gn(n,97)>=0&&gn(n,122)<=0?Hn(n,97)+10|0:gn(n,128)<0?-1:gn(n,65313)>=0&&gn(n,65338)<=0?Hn(n,65313)+10|0:gn(n,65345)>=0&&gn(n,65370)<=0?Hn(n,65345)+10|0:Am(n);return e>=r?-1:e}function Vm(n){var r=Wl(n),e;return r==null?Di(n):e=r,e}function Xm(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var G1;function Cs(){return G1===o&&new Gp,G1}function $S(n,r,e){return()=>n.xe(r,e)}function JS(n){return n.z()}function HS(n){return r=>KS(r,n)}function GS(n,r){return M(n,"",r,o,o,o,VS)}function Qm(n,r,e,t){n.lastIndex=e;var a=n.exec(r);if(a==null)return null;var i=He(a.index,n.lastIndex-1|0);return new Yp(i,a,t,r)}function KS(n,r){for(var e=0,t=Yr.f();e<r.length;){var a=e;e=a+1|0;var i=G(r,a);if(i===92){if(e===r.length)throw T.v("The Char to be escaped is missing");var s=e;e=s+1|0,t.ga(G(r,s))}else if(i===36){if(e===r.length)throw T.v("Capturing group index is missing");if(G(r,e)===123){e=e+1|0;var l=WS(r,e);if(e===l)throw T.v("Named capturing group reference should have a non-empty name");if(l===r.length||G(r,l)!==125)throw T.v("Named capturing group reference is missing trailing '}'");var u=Gn(r,e,l),f=YS(n.nf(),u),c=f==null?null:f.of_1;t.fa(c??""),e=l+1|0}else{var v=G(r,e);if(!(48<=v&&v<=57))throw T.v("Invalid capturing group reference");var h=n.nf(),d=ZS(r,e,h.c1()),p=Vm(Gn(r,e,d));if(p>=h.c1())throw Wn.zb("Group with index "+p+" does not exist");var m=h.e1(p),y=m==null?null:m.of_1;t.fa(y??""),e=d}}else t.ga(i)}return t.toString()}function WS(n,r){var e=r;r:for(;e<n.length;){if(G(n,e)===125)break r;e=e+1|0}return e}function YS(n,r){var e=E(n,_c)?n:null,t;if(e==null)throw oe.n8("Retrieving groups by name is not supported on this platform.");t=e;var a=t;return a.pf(r)}function ZS(n,r,e){var t=r+1|0,a=Hn(G(n,r),48);r:for(;;){var i;if(t<n.length){var s=G(n,t);i=48<=s?s<=57:!1}else i=!1;if(!i)break r;var l=or(a,10)+Hn(G(n,t),48)|0;if(0<=l&&l<e)a=l,t=t+1|0;else break r}return t}function VS(n){return n.sf_1}function XS(n){return r=>n.e1(r)}function QS(n,r,e){return Object.prototype.hasOwnProperty.call(r,e)}function rE(n,r){if(r<pt(n.bg_1)){var e=n.bg_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.bg_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function Gn(n,r,e){return n.substring(r,e)}function We(n,r){return n.substring(r)}function nE(n){return eE(n,0,n.length)}function ae(n,r,e,t){t=t===o?!1:t;var a=new RegExp(Cs().qe(r),t?"gui":"gu"),i=Cs().re(e);return n.replace(a,i)}function Ae(n,r,e){return e=e===o?!1:e,e?Kc(n,0,r,0,r.length,e):n.startsWith(r,0)}function rg(n,r,e){return e=e===o?!1:e,e?Kc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Kc(n,r,e,t,a,i){return i=i===o?!1:i,Yl(n,r,e,t,a,i)}function od(n,r,e){if(e=e===o?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,a=n.length;if(t<a)do{var i=t;t=t+1|0;var s=G(n,i),l=G(r,i);if(!Kl(s,l,e))return!1}while(t<a);return!0}function eE(n,r,e,t){if(!(e<=n.length&&r<=e)){var a="Failed requirement.";throw T.v(w(a))}for(var i=r,s=Yr.f();i<e;){var l=i;i=l+1|0;var u=n[l];if(u>=0)s.ga(it(u));else if(u>>5===-2){var f=tE(n,u,i,e);f<=0?(s.ga(65533),i=i+(-f|0)|0):(s.ga(it(f)),i=i+1|0)}else if(u>>4===-2){var c=aE(n,u,i,e);c<=0?(s.ga(65533),i=i+(-c|0)|0):(s.ga(it(c)),i=i+2|0)}else if(u>>3===-2){var v=iE(n,u,i,e);if(v<=0)s.ga(65533),i=i+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.ga(it(h)),s.ga(it(d)),i=i+3|0}}else s.ga(65533)}return s.toString()}function tE(n,r,e,t,a){if(!(r&30)||e>=t)return Tn(0);var i=n[e];return(i&192)!==128?Tn(0):r<<6^i^3968}function aE(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===13){if((i&224)!==128)return Tn(0)}else if((i&192)!==128)return Tn(0)}else if((i&224)!==160)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];return(s&192)!==128?Tn(1):r<<12^i<<6^s^-123008}function iE(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===4){if((i&240)!==128)return Tn(0)}else if((r&15)>4)return Tn(0)}else if((i&240)<=128)return Tn(0);if((i&192)!==128)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];if((s&192)!==128)return Tn(1);if((e+2|0)===t)return Tn(2);var l=n[e+2|0];return(l&192)!==128?Tn(2):r<<18^i<<12^s<<6^l^3678080}function Tn(n,r,e){return-n|0}var ld;function Ni(){if(ld)return ur;ld=!0,ng=new Ct("NANOSECONDS",0,1),new Ct("MICROSECONDS",1,1e3),eg=new Ct("MILLISECONDS",2,1e6),tg=new Ct("SECONDS",3,1e9),ag=new Ct("MINUTES",4,6e10),ig=new Ct("HOURS",5,36e11),sg=new Ct("DAYS",6,864e11)}var ng,eg,tg,ag,ig,sg;function og(n,r,e){var t=Le(r.lg_1,e.lg_1),a;if(t>0){var i=Rn(r.lg_1/e.lg_1),s=Tr(n,i);a=sr(Ar(s,i),n)?s:ar(n,new b(0,0))>0?new b(-1,2147483647):new b(0,-2147483648)}else t<0?a=Ar(n,Rn(e.lg_1/r.lg_1)):a=n;return a}function ud(n,r,e){var t=Le(r.lg_1,e.lg_1);return t>0?Tr(n,Rn(r.lg_1/e.lg_1)):t<0?Ar(n,Rn(e.lg_1/r.lg_1)):n}function Mo(){return Ni(),ng}function Fo(){return Ni(),eg}function Wc(){return Ni(),tg}function lg(){return Ni(),ag}function ug(){return Ni(),ig}function Yc(){return Ni(),sg}function is(n,r,e,t,a){var i=e;t<4&&(i=fd(n.e3_1,r,i,t,Bt(a,4))),a>4&&fd(n.d3_1,r,i,ln(t-4|0,0),a-4|0)}function sE(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var a=t;t=t+1|0;var i=e<<4,s;r:{var l=G(n,a),u=Y(l);if(!(u>>>8|0)&&kn()[u]>=0){s=kn()[u];break r}te(n,r,a)}e=i|s}while(t<8);var f=e;if(G(n,8)!==45){var c="'-' (hyphen)";te(n,c,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var p=v<<4,m;r:{var y=G(n,d),x=Y(y);if(!(x>>>8|0)&&kn()[x]>=0){m=kn()[x];break r}te(n,r,d)}v=p|m}while(h<13);var k=v;if(G(n,13)!==45){var S="'-' (hyphen)";te(n,S,13)}var z=0,I=14;if(I<18)do{var q=I;I=I+1|0;var j=z<<4,P;r:{var $=G(n,q),B=Y($);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}te(n,r,q)}z=j|P}while(I<18);var N=z;if(G(n,18)!==45){var H="'-' (hyphen)";te(n,H,18)}var L=0,J=19;if(J<23)do{var R=J;J=J+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}te(n,r,R)}L=V|K}while(J<23);var tr=L;if(G(n,23)!==45){var Q="'-' (hyphen)";te(n,Q,23)}var lr=0,X=24;if(X<28)do{var xr=X;X=X+1|0;var br=lr<<4,dr;r:{var Er=G(n,xr),zr=Y(Er);if(!(zr>>>8|0)&&kn()[zr]>=0){dr=kn()[zr];break r}te(n,r,xr)}lr=br|dr}while(X<28);var Pr=lr,Br=0,pr=28;if(pr<36)do{var Gr=pr;pr=pr+1|0;var en=Br<<4,Zr;r:{var _r=G(n,Gr),Fr=Y(_r);if(!(Fr>>>8|0)&&kn()[Fr]>=0){Zr=kn()[Fr];break r}te(n,r,Gr)}Br=en|Zr}while(pr<36);var Vr=Br,Xr=k<<16|N,$r=new b(Xr,f),tn=tr<<16|Pr,_n=new b(Vr,tn);return Ys().pg($r,_n)}function oE(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var a=r<<4,i;r:{var s=G(n,t),l=Y(s);if(!(l>>>8|0)&&kn()[l]>=0){i=kn()[l];break r}var u="a hexadecimal digit";te(n,u,t)}r=a|i}while(e<8);var f=r,c=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=c<<4,p;r:{var m=G(n,h),y=Y(m);if(!(y>>>8|0)&&kn()[y]>=0){p=kn()[y];break r}var x="a hexadecimal digit";te(n,x,h)}c=d|p}while(v<16);var k=c,S=new b(k,f),z=0,I=16;if(I<24)do{var q=I;I=I+1|0;var j=z<<4,P;r:{var $=G(n,q),B=Y($);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}var N="a hexadecimal digit";te(n,N,q)}z=j|P}while(I<24);var H=z,L=0,J=24;if(J<32)do{var R=J;J=J+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}var tr="a hexadecimal digit";te(n,tr,R)}L=V|K}while(J<32);var Q=L,lr=new b(Q,H);return Ys().pg(S,lr)}function fd(n,r,e,t,a){var i=e,s=3-t|0,l=4-a|0;if(l<=s)do{var u=s;s=s+-1|0;var f=u<<3,c=n>>f&255,v=PE()[c],h=i;i=h+1|0,r[h]=Jn(v>>8);var d=i;i=d+1|0,r[d]=Jn(v)}while(u!==l);return i}function lE(n){return r=>r===n?"(this Collection)":ye(r)}var Mn;function uE(n,r){return cd(n,r.k2())+"="+cd(n,r.l2())}function cd(n,r){return r===n?"(this Map)":ye(r)}function vd(n,r){var e=n.r2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(D(i.k2(),r)){t=i;break r}}t=null}return t}function fE(n){return r=>uE(n,r)}var qs;function Hs(n){return n.c1()-1|0}function cE(){throw y1.fc("Index overflow has happened.")}function vE(n){if(n.d1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),a=0;t.y();){var i=a;a=i+1|0,e[i]=t.z()}return e}function fr(){return fg()}function pe(n){return cx(n)}function sn(n){return n.length>0?Fl(n):fr()}var K1;function fg(){return K1===o&&new a_,K1}var As;function Zc(n){switch(n.c1()){case 0:return fr();case 1:return jn(n.e1(0));default:return n}}function hE(n){return He(0,n.c1()-1|0)}function dE(n){for(var r=A.m(),e=n.x();e.y();){var t=e.z();Ui(r,t)}return r}function Mr(n,r){var e;return E(n,Z)?e=n.c1():e=r,e}function pE(n){var r;return E(n,Z)?r=n.c1():r=null,r}function _E(n,r){if(E(n,l_))return n.kh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw jr.r("Key "+ye(r)+" is missing in the map.");e=t;break r}return e}function qr(){var n=gE();return E(n,xn)?n:g()}function Gs(n){return n.length>0?vg(n,cr.na(n.length)):qr()}function qe(n,r){return _E(n,r)}function cg(n){if(E(n,Z)){var r;switch(n.c1()){case 0:r=qr();break;case 1:var e;E(n,zn)?e=n.e1(0):e=n.x().z(),r=Uo(e);break;default:r=dd(n,cr.na(n.c1()));break}return r}return hg(dd(n,cr.t4()))}function hd(n){return vg(n,cr.na(n.length))}function vt(n,r){var e;if(n.d1())e=Uo(r);else{var t=cr.oa(n);t.s2(r.lh_1,r.mh_1),e=t}return e}function Vc(n){return cr.oa(n)}function mE(n,r){var e=Vc(n);return e.t2(r),hg(e)}var W1;function gE(){return W1===o&&new u_,W1}function vg(n,r){return dg(r,n),r}function dd(n,r){return yE(r,n),r}function hg(n){var r;switch(n.c1()){case 0:r=qr();break;case 1:r=n;break;default:r=n;break}return r}function dg(n,r){for(var e=0,t=r.length;e<t;){var a=r[e];e=e+1|0;var i=a.qh(),s=a.rh();n.s2(i,s)}}function yE(n,r){for(var e=r.x();e.y();){var t=e.z(),a=t.qh(),i=t.rh();n.s2(a,i)}}function wE(n){var r=bs.o7(n.length);return dg(r,n),r}function Ui(n,r){if(E(r,Z))return n.g1(r);for(var e=!1,t=r.x();t.y();){var a=t.z();n.n(a)&&(e=!0)}return e}function pd(n){var r;if(n.d1())throw jr.r("List is empty.");return r=n.h5(Hs(n)),r}function Xc(n,r){var e;return n==null?e=Gl:e=new yc(xE(n),r),e}function bE(n){return px(n)}function kE(n,r){return new yc(n,r)}function pg(){return Gl}var Gl;function _d(n){n.bi_1=n.ci_1===-2?n.di_1.ei_1():n.di_1.fi_1(fn(n.bi_1)),n.ci_1=n.bi_1==null?0:1}function xE(n){return()=>n}function pa(n){return Z_(n)}function Ft(){return Z1()}var Y1;function Z1(){return Y1===o&&new __,Y1}function SE(n){switch(n.c1()){case 0:return Ft();case 1:return Jc(n.x().z());default:return n}}function EE(n){return V_(n,qa.b1(n.length))}function zE(n){if(!(n.length>0)){var r="Failed requirement.";throw T.v(w(r))}var e=CE(n);return new g_(e)}function bt(n,r){return n==null?r==null?0:-1:r==null?1:Le(n!=null&&P1(n)?n:g(),r)}function _g(){var n=mg;return E(n,cn)?n:g()}function IE(n,r,e){for(var t=0,a=e.length;t<a;){var i=e[t];t=t+1|0;var s=i(n),l=i(r),u=bt(s,l);if(u!==0)return u}return 0}var mg;function CE(n){return(r,e)=>IE(r,e,n)}function qE(n,r){var e=iS(tS(n,r)),t=ur;e.sa(t)}var V1,X1;function gg(){return X1===o&&new w_,X1}function Ts(){return TE()}var md;function AE(){if(md)return ur;md=!0,yg=new b_("COROUTINE_SUSPENDED",0)}var yg;function TE(){return AE(),yg}function jE(n){return k_.mi(n)}function OE(n,r,e){var t;if(e>0)t=n>=r?r:r-gd(r,n,e)|0;else if(e<0)t=n<=r?r:r+gd(n,r,-e|0)|0;else throw T.v("Step is zero.");return t}function gd(n,r,e){return f1(f1(n,e)-f1(r,e)|0,e)}function f1(n,r){var e=n%r|0;return e>=0?e:e+r|0}var Q1;function wg(){return Q1===o&&new x_,Q1}var Qc;function bg(n,r,e){e!=null?n.g(e(r)):r==null||$s(r)?n.g(r):r instanceof Cn?n.ga(r.x1_1):n.g(w(r))}function Kl(n,r,e){if(e=e===o?!1:e,n===r)return!0;if(!e)return!1;var t=H1(n),a=H1(r),i;if(t===a)i=!0;else{var s=kr(t).toLowerCase(),l=G(s,0),u=kr(a).toLowerCase();i=l===G(u,0)}return i}function PE(){return Sg(),kg}var kg;function BE(){return Sg(),xg}var xg;function kn(){return BE()}var yd;function Sg(){if(!yd){yd=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=G("0123456789abcdef",e>>4),a=Y(t)<<8,i=G("0123456789abcdef",e&15);r[e]=a|Y(i),n=n+1|0}kg=r;for(var s=0,l=new Int32Array(256);s<256;){var u=s,f=G("0123456789ABCDEF",u>>4),c=Y(f)<<8,v=G("0123456789ABCDEF",u&15);l[u]=c|Y(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var p=0,m="0123456789abcdef",y=0;y<C(m);){var x=rr(m,y);y=y+1|0;var k=p;p=k+1|0,d[Y(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<C(z);){var q=rr(z,I);I=I+1|0;var j=S;S=j+1|0,d[Y(q)]=j}xg=d;for(var P=0,$=Aa(256);P<256;)$[P]=new b(-1,-1),P=P+1|0;for(var B=0,N="0123456789abcdef",H=0;H<C(N);){var L=rr(N,H);H=H+1|0;var J=B;B=J+1|0,$[Y(L)]=F(J)}for(var R=0,V="0123456789ABCDEF",K=0;K<C(V);){var nr=rr(V,K);K=K+1|0;var W=R;R=W+1|0,$[Y(nr)]=F(W)}}}function NE(n){var r;return C(n)===0?r=LE:r=ME(n),r}function UE(n){return DE(n,"")}function DE(n,r){r=r===o?"":r;for(var e=qg(n),t=A.m(),a=e.x();a.y();){var i=a.z();_t(i)||t.n(i)}for(var s=A.f1(Mr(t,10)),l=t.x();l.y();){var u=l.z(),f=RE(u);s.n(f)}for(var c=Ax(s),v=c??0,h=n.length+or(r.length,e.c1())|0,d=NE(r),p=Hs(e),m=A.m(),y=0,x=e.x();x.y();){var k=x.z(),S=y;y=S+1|0;var z=Pi(S),I;if((z===0||z===p)&&_t(k))I=null;else{var q=Lx(k,v),j;q==null?j=null:j=d(q);var P=j;I=P??k}var $=I;$==null||m.n($)}return Q_(m,Yr.ja(h),`
`).toString()}function RE(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var a=e;e=e+1|0;var i=rr(n,a);if(!Hc(i)){r=a;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function LE(n){return n}function ME(n){return r=>n+r}function Wl(n){return FE(n,10)}function FE(n,r){Bi(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=-2147483648;else if(s===43)a=!1,i=-2147483647;else return null}else t=0,a=!1,i=-2147483647;var l=-59652323,u=l,f=0,c=t;if(c<e)do{var v=c;c=c+1|0;var h=Hl(G(n,v),r);if(h<0)return null;if(f<u)if(u===l){if(u=i/r|0,f<u)return null}else return null;if(f=or(f,r),f<(i+h|0))return null;f=f-h|0}while(c<e);return a?f:-f|0}function Di(n){throw w1.tc("Invalid number format: '"+n+"'")}function $E(n){return JE(n,10)}function JE(n,r){Bi(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=new b(0,-2147483648);else if(s===43)a=!1,i=new b(1,-2147483648);else return null}else t=0,a=!1,i=new b(1,-2147483648);var l=new b(1,-2147483648),u=Ar(l,F(36)),f=u,c=new b(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Hl(G(n,h),r);if(d<0)return null;if(ar(c,f)<0)if(sr(f,u)){var p=i;if(f=Ar(p,F(r)),ar(c,f)<0)return null}else return null;var m=c;c=Tr(m,F(r));var y=c,x=i,k=mr(x,F(d));if(ar(y,k)<0)return null;var S=c;c=Hr(S,F(d))}while(v<e);return a?c:on(c)}function Eg(n,r){var e=$s(n)?n:g(),t=0,a=C(e)-1|0,i=!1;r:for(;t<=a;){var s=i?a:t,l=rr(e,s),u=dx(r,l);if(!i)u?t=t+1|0:i=!0;else if(u)a=a-1|0;else break r}var f=Ln(e,t,a+1|0);return w(f)}function _a(n,r){return HE(n,r)?Gn(n,0,n.length-C(r)|0):n}function Ri(n,r,e){e=e===o?n:e;var t=GE(n,r);return t===-1?e:Gn(n,t+1|0,n.length)}function js(n,r,e){e=e===o?!1:e;var t;return typeof r=="string"?t=$o(n,r,o,e)>=0:t=rv(n,r,0,C(n),e)>=0,t}function zg(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Gn(n,0,t)}function Ig(n,r,e,t){if(e=e===o?!1:e,t=t===o?0:t,r.length===1)return KE(n,kr(r[0]),e,t);for(var a=Nx(WE(n,r,o,e,t)),i=A.f1(Mr(a,10)),s=a.x();s.y();){var l=s.z(),u=YE(n,l);i.n(u)}return i}function Cg(n,r){return ZE(n,r)?We(n,C(r)):n}function qg(n){return jc(VE(n))}function Ag(n,r,e){return e=e===o?32:e,w(XE($s(n)?n:g(),r,e))}function pt(n){return C(n)-1|0}function _t(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Hc(t)){r=!1;break r}}r=!0}return r}function HE(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?rg(n,r):Yl(n,C(n)-C(r)|0,r,0,C(r),e)}function GE(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Ai([r]);a=QE(n,s,e,t)}else{var l=kr(r);a=n.lastIndexOf(l,e)}return a}function $o(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=rv(n,r,e,C(n),t):a=n.indexOf(r,e),a}function rv(n,r,e,t,a,i){i=i===o?!1:i;var s=i?Tx(Bt(e,pt(n)),ln(t,0)):He(ln(e,0),Bt(t,C(n))),l;if(typeof n=="string"?l=typeof r=="string":l=!1,l){var u=s.r1_1,f=s.s1_1,c=s.t1_1;if(c>0&&u<=f||c<0&&f<=u)do{var v=u;if(u=u+c|0,Kc(r,0,n,v,r.length,a))return v}while(v!==f)}else{var h=s.r1_1,d=s.s1_1,p=s.t1_1;if(p>0&&h<=d||p<0&&d<=h)do{var m=h;if(h=h+p|0,Yl(r,0,n,m,C(r),a))return m}while(m!==d)}return-1}function Tg(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var a=t?e:r,i=rr(n,a),s=Hc(i);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Ln(n,r,e+1|0)}function Ks(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=Ai([r]);a=jg(n,s,e,t)}else{var l=kr(r);a=n.indexOf(l,e)}return a}function KE(n,r,e,t){nv(t);var a=0,i=$o(n,r,a,e);if(i===-1||t===1)return jn(w(n));var s=t>0,l=A.f1(s?Bt(t,10):10);r:do{var u=a,f=i,c=w(Ln(n,u,f));if(l.n(c),a=i+r.length|0,s&&l.c1()===(t-1|0))break r;i=$o(n,r,a,e)}while(i!==-1);var v=a,h=C(n),d=w(Ln(n,v,h));return l.n(d),l}function WE(n,r,e,t,a){return e=e===o?0:e,t=t===o?!1:t,a=a===o?0:a,nv(a),new I_(n,e,a,tz(r,t))}function YE(n,r){return w(Ln(n,r.kf(),r.lf()+1|0))}function ZE(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?Ae(n,r):Yl(n,0,r,0,C(r),e)}function VE(n){return new q_(n)}function XE(n,r,e){if(e=e===o?32:e,r<0)throw T.v("Desired length "+r+" is less than zero.");if(r<=C(n))return Ln(n,0,C(n));var t=Yr.ja(r),a=1,i=r-C(n)|0;if(a<=i)do{var s=a;a=a+1|0,t.ga(e)}while(s!==i);return t.g(n),t}function Yl(n,r,e,t,a,i){if(t<0||r<0||r>(C(n)-a|0)||t>(C(e)-a|0))return!1;var s=0;if(s<a)do{var l=s;if(s=s+1|0,!Kl(rr(n,r+l|0),rr(e,t+l|0),i))return!1}while(s<a);return!0}function QE(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=X_(r),s=kr(i);return n.lastIndexOf(s,e)}var l=Bt(e,pt(n));if(0<=l)do{var u=l;l=l+-1|0;var f=rr(n,u),c;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Kl(d,f,t)){c=!0;break r}}c=!1}if(c)return u}while(0<=l);return-1}function jg(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=X_(r),s=kr(i);return n.indexOf(s,e)}var l=ln(e,0),u=pt(n);if(l<=u)do{var f=l;l=l+1|0;var c=rr(n,f),v;r:{for(var h=0,d=r.length;h<d;){var p=r[h];if(h=h+1|0,Kl(p,c,t)){v=!0;break r}}v=!1}if(v)return f}while(f!==u);return-1}function nv(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw T.v(w(r))}return ur}function wd(n){if(n.wi_1<0)n.ui_1=0,n.xi_1=null;else{var r,e;if(n.zi_1.cj_1>0?(n.yi_1=n.yi_1+1|0,e=n.yi_1>=n.zi_1.cj_1):e=!1,e?r=!0:r=n.wi_1>C(n.zi_1.aj_1),r)n.xi_1=He(n.vi_1,pt(n.zi_1.aj_1)),n.wi_1=-1;else{var t=n.zi_1.dj_1(n.zi_1.aj_1,n.wi_1);if(t==null)n.xi_1=He(n.vi_1,pt(n.zi_1.aj_1)),n.wi_1=-1;else{var a=t.qh(),i=t.rh();n.xi_1=Ac(n.vi_1,a),n.vi_1=a+i|0,n.wi_1=n.vi_1+(i===0?1:0)|0}}n.ui_1=1}}function bd(n,r,e){return e=e===o?!1:e,Ks(n,r,o,e)>=0}function rz(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function nz(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Gn(n,t+1|0,n.length)}function ez(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=rv(n,r,e,0,t,!0):a=n.lastIndexOf(r,e),a}function tz(n,r){return(e,t)=>{var a=jg(e,n,t,r);return a<0?null:O(a,1)}}function Sn(n){return Ls(n,1)}function ev(n){return(rn(n)&1)===0}function Og(n){return(rn(n)&1)===1}function az(n){return ev(n)?Mo():Fo()}var rf;function Wr(){return rf===o&&new A_,rf}function Pg(n){var r=on(Sn(n)),e=rn(n)&1;return _z(r,e)}function iz(n,r){var e,t=rn(n)&1;if(t===(rn(r)&1)){var a;if(ev(n))a=mz(mr(Sn(n),Sn(r)));else{var i=tv(Sn(n),Sn(r)),s;if(sr(i,new b(-16162,2147483647)))throw T.v("Summing infinite durations of different signs yields an undefined result.");sr(i,new b(-1,1073741823))||sr(i,new b(1,-1073741824))?s=Ut(i):s=gz(i),a=s}e=a}else Og(n)?e=kd(n,Sn(n),Sn(r)):e=kd(n,Sn(r),Sn(n));return e}function kd(n,r,e){var t=Mg(e),a=tv(r,t),i;if(ar(new b(1108857478,-1074),a)<=0&&ar(a,new b(-1108857478,1073))<=0){var s=Hr(e,Jo(t));i=Xl(mr(Jo(a),s))}else i=Ut(a);return i}function Zl(n){return ar(n,new b(0,0))<0}function Ws(n){return sr(n,Wr().oj_1)||sr(n,Wr().pj_1)}function Bg(n){return Zl(n)?Pg(n):n}function Ng(n,r){var e=De(n,r);if(ar(e,new b(0,0))<0||!(rn(e)&1))return n.f3(r);var t=rn(n)&1,a=t-(rn(r)&1)|0;return Zl(n)?-a|0:a}function sz(n,r){return Ng(n.tj_1,r instanceof Ce?r.tj_1:g())}function oz(n){var r;if(Ws(n))r=0;else{var e=Lg(n),t=Nt(e,F(24));r=rn(t)}return r}function Ug(n){var r;if(Ws(n))r=0;else{var e=uz(n),t=Nt(e,F(60));r=rn(t)}return r}function Dg(n){var r;if(Ws(n))r=0;else{var e=fz(n),t=Nt(e,F(60));r=rn(t)}return r}function Rg(n){var r;if(Ws(n))r=0;else if(Og(n)){var e=Sn(n),t=Nt(e,F(1e3));r=rn(Jo(t))}else{var a=Sn(n),i=1e9,s=Nt(a,F(i));r=rn(s)}return r}function Vl(n,r){var e=n;return sr(e,Wr().oj_1)?new b(-1,2147483647):sr(e,Wr().pj_1)?new b(0,-2147483648):og(Sn(n),az(n),r)}function lz(n){return Vl(n,Yc())}function Lg(n){return Vl(n,ug())}function uz(n){return Vl(n,lg())}function fz(n){return Vl(n,Wc())}function cz(n){var r=n,e;if(sr(r,new b(0,0)))e="0s";else if(sr(r,Wr().oj_1))e="Infinity";else if(sr(r,Wr().pj_1))e="-Infinity";else{var t=Zl(n),a=Yr.f();t&&a.ga(45);var i=Bg(n),s=lz(i),l=oz(i),u=Ug(i),f=Dg(i),c=Rg(i),v=!sr(s,new b(0,0)),h=l!==0,d=u!==0,p=f!==0||c!==0,m=0;if(v&&(a.he(s).ga(100),m=m+1|0),h||v&&(d||p)){var y=m;m=y+1|0,y>0&&a.ga(32),a.ge(l).ga(104)}if(d||p&&(h||v)){var x=m;m=x+1|0,x>0&&a.ga(32),a.ge(u).ga(109)}if(p){var k=m;m=k+1|0,k>0&&a.ga(32),f!==0||v||h||d?So(n,a,f,c,9,"s",!1):c>=1e6?So(n,a,c/1e6|0,c%1e6|0,6,"ms",!1):c>=1e3?So(n,a,c/1e3|0,c%1e3|0,3,"us",!1):a.ge(c).fa("ns")}t&&m>1&&a.ie(1,40).ga(41),e=a.toString()}return e}function So(n,r,e,t,a,i,s){if(r.ge(e),t!==0){r.ga(46);var l=Ag(t.toString(),a,48),u;r:{var f=C(l)-1|0;if(0<=f)do{var c=f;if(f=f+-1|0,rr(l,c)!==48){u=c;break r}}while(0<=f);u=-1}var v=u+1|0;if(!s&&v<3)r.fe(l,0,v);else{var h=or((v+2|0)/3|0,3);r.fe(l,0,h)}}r.fa(i)}function vz(n){var r=Yr.f();Zl(n)&&r.ga(45),r.fa("PT");var e=Bg(n),t=Lg(e),a=Ug(e),i=Dg(e),s=Rg(e),l=t;Ws(n)&&(l=new b(1316134911,2328));var u=!sr(l,new b(0,0)),f=i!==0||s!==0,c=a!==0||f&&u;return u&&r.he(l).ga(72),c&&r.ge(a).ga(77),(f||!u&&!c)&&So(n,r,i,s,9,"S",!0),r.toString()}function hz(n){return n.hashCode()}function dz(n,r){if(!(r instanceof Ce))return!1;var e=r.tj_1;return!!sr(n,e)}function Ut(n){var r=Wr(),e=se(n,1),t=mr(e,F(1));return r.sj(t)}function xd(n,r){var e=ud(new b(-387905,1073741823),Mo(),r),t;if(ar(on(e),n)<=0&&ar(n,e)<=0)t=Xl(ud(n,r,Mo()));else if(r.y2(Fo())>=0){var a=cS(n),i=new b(0,-2147483648),s=mr(i,F(1));t=Ut(Tr(Rn(a),ef(vS(Ox(n,s)),r)))}else t=Ut(Tc(og(n,r,Fo()),new b(1,-1073741824),new b(-1,1073741823)));return t}function pz(n,r,e){if(e=e===o?!0:e,C(n)===0){var t="The string is empty";if(e)throw T.v(t);return Wr().rj_1}var a=0,i=G(n,a),s=!1;i===45?(s=!0,a=a+1|0):i===43&&(a=a+1|0);var l;if(n.length<=a){var u="No components";if(e)throw T.v(u);return Wr().rj_1}else if(G(n,a)===80)l=yz(n,a+1|0,e);else{if(e)throw T.v("");return Wr().rj_1}var f=l;return s&&!D(new Ce(f),new Ce(Wr().rj_1))?Pg(f):f}function _z(n,r){var e=Wr(),t=se(n,1),a=mr(t,F(r));return e.sj(a)}function mz(n){var r;return ar(new b(387905,-1073741824),n)<=0&&ar(n,new b(-387905,1073741823))<=0?r=Xl(n):r=Ut(Mg(n)),r}function tv(n,r){var e;if(sr(n,new b(-1,1073741823))||sr(n,new b(1,-1073741824))){var t,a;ar(new b(1,-1073741824),r)<0&&ar(r,new b(-1,1073741823))<0?a=!0:a=ar(De(n,r),new b(0,0))>=0,a?t=n:t=new b(-16162,2147483647),e=t}else sr(r,new b(-1,1073741823))||sr(r,new b(1,-1073741824))?e=r:e=Tc(mr(n,r),new b(1,-1073741824),new b(-1,1073741823));return e}function gz(n){var r;return ar(new b(1108857478,-1074),n)<=0&&ar(n,new b(-1108857478,1073))<=0?r=Xl(Jo(n)):r=Ut(Tc(n,new b(1,-1073741824),new b(-1,1073741823))),r}function Mg(n){return Ar(n,F(1e6))}function Jo(n){return Tr(n,F(1e6))}function Xl(n){return Wr().sj(se(n,1))}function yz(n,r,e){var t=r;if(t===n.length){if(e)throw T.v("");return Wr().rj_1}var a=new b(0,0),i=new b(0,0),s=!1,l=null;r:for(;t<n.length;){var u=G(n,t);if(u===84){var f;if(s?f=!0:(t=t+1|0,f=t===n.length),f){if(e)throw T.v("");return Wr().rj_1}s=!0;continue r}var c=t,v,h=Fg().wj_1,d=t,p;n:{var m=1,y=d;if(bz(h)){var x=G(n,y);x===45?(m=-1,y=y+1|0):x===43&&(y=y+1|0)}var k=y;e:for(;;){var S;if(k<n.length?S=G(n,k)===48:S=!1,!S)break e;k=k+1|0}y=k;var z=new b(0,0);e:for(;y<n.length;){var I=G(n,y);if(!(48<=I&&I<=57))break e;var q=Hn(I,48);if(ar(z,Sd(h))>0||sr(z,Sd(h))&&ar(F(q),kz(h))>0){var j=y;t:for(;;){var P;if(j<n.length){var $=G(n,j);P=48<=$?$<=57:!1}else P=!1;if(!P)break t;j=j+1|0}y=j;var B=y,N=m;if(t=B,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().rj_1}v=N,p=wz(h);break n}var H=z,L=mr(se(H,3),se(H,1));z=mr(L,F(q)),y=y+1|0}var J=y,R=m;if(t=J,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().rj_1}v=R,p=z}var V=p;if(G(n,t)===46){t=t+1|0;var K=t,nr=K,W=nr,tr=W+6|0,Q=n.length,lr=Math.min(tr,Q),X=0;n:for(;W<lr;){var xr=G(n,W);if(!(48<=xr&&xr<=57))break n;var br=X;X=((br<<3)+(br<<1)|0)+Hn(xr,48)|0,W=W+1|0}var dr=6-(W-nr|0)|0,Er=0;if(Er<dr)do{Er=Er+1|0;var zr=X;X=(zr<<3)+(zr<<1)|0}while(Er<dr);K=W;var Pr=X,Br=K,pr=Br,Gr=pr+9|0,en=n.length,Zr=Math.min(Gr,en),_r=0;n:for(;pr<Zr;){var Fr=G(n,pr);if(!(48<=Fr&&Fr<=57))break n;var Vr=_r;_r=((Vr<<3)+(Vr<<1)|0)+Hn(Fr,48)|0,pr=pr+1|0}var Xr=9-(pr-Br|0)|0,$r=0;if($r<Xr)do{$r=$r+1|0;var tn=_r;_r=(tn<<3)+(tn<<1)|0}while($r<Xr);K=pr;var _n=_r,wn=K;n:for(;;){var mn;if(wn<n.length){var Qn=G(n,wn);mn=48<=Qn?Qn<=57:!1}else mn=!1;if(!mn)break n;wn=wn+1|0}K=wn;var re=K;if(re===t||re===n.length||G(n,re)!==83){if(e)throw T.v("");return Wr().rj_1}t=re;var ne=F(Pr),ce=1e9,Se=Tr(ne,F(ce)),Ee=mr(Se,F(_n));i=Tr(Rn(v),xz(Ee,Wc()))}var Ne=Sz(n,t),Ze;if(Ne==null){var kt="Unknown duration unit short name: "+kr(G(n,t));if(e)throw T.v(kt);return Wr().rj_1}else Ze=Ne;var ee=Ze;if(l!=null&&l.y2(ee)<=0){var An="Unexpected order of duration components";if(e)throw T.v(An);return Wr().rj_1}if(l=ee,ee.equals(Yc())){if(s){if(e)throw T.v("");return Wr().rj_1}a=Tr(Rn(v),ef(V,ee))}else{if(!s){if(e)throw T.v("");return Wr().rj_1}var Bn=tv(a,Tr(Rn(v),ef(V,ee)));if(sr(Bn,new b(-16162,2147483647))){if(e)throw T.v("");return Wr().rj_1}a=Bn}t=t+1|0}return iz(xd(a,Fo()),xd(i,Mo()))}var nf;function Fg(){return nf===o&&new T_,nf}function wz(n){return n.yj_1}function bz(n){return n.zj_1}function Sd(n){return n.ak_1}function kz(n){return n.bk_1}function xz(n,r){var e=Ez(r),t=ie(n)*e;return hS(t)}function Sz(n,r){var e=G(n,r);return e===68?Yc():e===72?ug():e===77?lg():e===83?Wc():null}function Ez(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw gr.o3(w(e))}return r}function ef(n,r){return zz(n,Iz(r))}function zz(n,r){var e;if(sr(n,new b(0,0)))e=new b(0,0);else if(sr(n,new b(1,0)))e=Qu(r,new b(-1,1073741823));else if(sr(r,new b(1,0)))e=Qu(n,new b(-1,1073741823));else{var t=(128-Gh(n)|0)-Gh(r)|0;e=t<63?Tr(n,r):t>63?new b(-1,1073741823):Qu(Tr(n,r),new b(-1,1073741823))}return e}function Iz(n){var r;switch(n.x2_1){case 6:r=new b(864e5,0);break;case 5:r=new b(36e5,0);break;case 4:r=new b(6e4,0);break;case 3:r=new b(1e3,0);break;case 2:r=new b(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw gr.o3(w(e))}return r}function Eo(){return Vn(),$g}var $g;function Cz(){return Vn(),Jg}var Jg;function qz(){return Vn(),Hg}var Hg;function Az(){return Vn(),Gg}var Gg,tf;function jt(){return tf===o&&new j_,tf}function Tz(n){Vn();var r=Yr.f(),e=Kg.lk(n),t=e.mk_1;if(dS(t)<1e3){var a=Yr.f();t>=0?a.ge(t+1e4|0).le(0):a.ge(t-1e4|0).le(1),r.g(a)}else t>=1e4&&r.ga(43),r.ge(t);if(r.ga(45),ss(r,r,e.nk_1),r.ga(45),ss(r,r,e.ok_1),r.ga(84),ss(r,r,e.pk_1),r.ga(58),ss(r,r,e.qk_1),r.ga(58),ss(r,r,e.rk_1),e.sk_1!==0){r.ga(46);for(var i=0;!(e.sk_1%Eo()[i+1|0]|0);)i=i+1|0;i=i-(i%3|0)|0;var s=e.sk_1/Eo()[i]|0;r.fa(We((s+Eo()[9-i|0]|0).toString(),1))}return r.ga(90),r.toString()}function jz(n){Vn();var r=n,e=0;if(C(r)===0)return new wc("An empty string is not a valid Instant",n);var t=rr(r,e),a;t===43||t===45?(e=e+1|0,a=t):a=32;var i=a,s=e,l=0;r:for(;;){var u;if(e<C(r)){var f=rr(r,e);u=48<=f?f<=57:!1}else u=!1;if(!u)break r;l=or(l,10)+Hn(rr(r,e),48)|0,e=e+1|0}var c=e-s|0,v;if(c>10)return un(n,"Expected at most 10 digits for the year number, got "+c+" digits");if(c===10&&gn(rr(r,s),50)>=0)return un(n,"Expected at most 9 digits for the year number or year 1000000000, got "+c+" digits");if(c<4)return un(n,"The year number must be padded to 4 digits, got "+c+" digits");if(i===43&&c===4)return un(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(i===32&&c!==4)return un(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=i===45?-l|0:l;var h=v;if(C(r)<(e+16|0))return un(n,"The input string is too short");var d=e,p=ti(n,"'-'",d,Pz);if(p!=null)return p;var m=e+3|0,y=ti(n,"'-'",m,Bz);if(y!=null)return y;var x=e+6|0,k=ti(n,"'T' or 't'",x,Nz);if(k!=null)return k;var S=e+9|0,z=ti(n,"':'",S,Uz);if(z!=null)return z;var I=e+12|0,q=ti(n,"':'",I,Dz);if(q!=null)return q;for(var j=Cz(),P=0,$=j.length;P<$;){var B=j[P];P=P+1|0;var N=e+B|0,H=ti(n,"an ASCII digit",N,Rz);if(H!=null)return H}var L=zt(r,e+1|0),J=zt(r,e+4|0),R=zt(r,e+7|0),V=zt(r,e+10|0),K=zt(r,e+13|0),nr;if(rr(r,e+15|0)===46){var W=e+16|0;e=W;var tr=0;r:for(;;){var Q;if(e<C(r)){var lr=rr(r,e);Q=48<=lr?lr<=57:!1}else Q=!1;if(!Q)break r;tr=or(tr,10)+Hn(rr(r,e),48)|0,e=e+1|0}var X=e-W|0,xr;if(1<=X&&X<=9)xr=or(tr,Eo()[9-X|0]);else return un(n,"1..9 digits are supported for the fraction of the second, got "+X+" digits");nr=xr}else e=e+15|0,nr=0;var br=nr;if(e>=C(r))return un(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),Er;if(dr===122||dr===90){var zr;if(C(r)===(e+1|0))zr=0;else return un(n,"Extra text after the instant at position "+(e+1|0));Er=zr}else if(dr===45||dr===43){var Pr=C(r)-e|0;if(Pr>9){var Br=e,pr=C(r),Gr=w(Ln(r,Br,pr));return un(n,'The UTC offset string "'+av(Gr,16)+'" is too long')}if(Pr%3|0){var en=e,Zr=C(r),_r=w(Ln(r,en,Zr));return un(n,'Invalid UTC offset string "'+_r+'"')}var Fr=qz(),Vr=0,Xr=Fr.length;r:for(;Vr<Xr;){var $r=Fr[Vr];if(Vr=Vr+1|0,(e+$r|0)>=C(r))break r;if(rr(r,e+$r|0)!==58)return un(n,"Expected ':' at index "+(e+$r|0)+", got '"+kr(rr(r,e+$r|0))+"'")}var tn=Az(),_n=0,wn=tn.length;r:for(;_n<wn;){var mn=tn[_n];if(_n=_n+1|0,(e+mn|0)>=C(r))break r;var Qn=rr(r,e+mn|0);if(!(48<=Qn&&Qn<=57))return un(n,"Expected an ASCII digit at index "+(e+mn|0)+", got '"+kr(rr(r,e+mn|0))+"'")}var re=zt(r,e+1|0),ne;Pr>3?ne=zt(r,e+4|0):ne=0;var ce=ne,Se;Pr>6?Se=zt(r,e+7|0):Se=0;var Ee=Se;if(ce>59)return un(n,"Expected offset-minute-of-hour in 0..59, got "+ce);if(Ee>59)return un(n,"Expected offset-second-of-minute in 0..59, got "+Ee);if(re>17&&!(re===18&&ce===0&&Ee===0)){var Ne=e,Ze=C(r),kt=w(Ln(r,Ne,Ze));return un(n,"Expected an offset in -18:00..+18:00, got "+kt)}Er=or((or(re,3600)+or(ce,60)|0)+Ee|0,dr===45?-1:1)}else return un(n,"Expected the UTC offset at position "+e+", got '"+kr(dr)+"'");var ee=Er;if(!(1<=L&&L<=12))return un(n,"Expected a month number in 1..12, got "+L);if(!(1<=J&&J<=Oz(L,Ed(h))))return un(n,"Expected a valid day-of-month for month "+L+" of year "+h+", got "+J);if(R>23)return un(n,"Expected hour in 0..23, got "+R);if(V>59)return un(n,"Expected minute-of-hour in 0..59, got "+V);if(K>59)return un(n,"Expected second-of-minute in 0..59, got "+K);var An=new bc(h,L,J,R,V,K,br),Bn=F(An.mk_1),bn=Tr(Rn(365),Bn);if(ar(Bn,new b(0,0))>=0){var Jt=bn,ve=mr(Bn,F(3)),Ve=Ar(ve,F(4)),xt=mr(Bn,F(99)),Ht=Ar(xt,F(100)),Zi=Hr(Ve,Ht),Gt=mr(Bn,F(399)),Xe=Ar(Gt,F(400));bn=mr(Jt,mr(Zi,Xe))}else{var he=bn,Kt=Ar(Bn,F(-4)),Ja=Ar(Bn,F(-100)),Ha=Hr(Kt,Ja),Wt=Ar(Bn,F(-400));bn=Hr(he,mr(Ha,Wt))}var Ga=bn,Ue=(or(367,An.nk_1)-362|0)/12|0;bn=mr(Ga,F(Ue));var Yt=bn,Zt=An.ok_1-1|0;if(bn=mr(Yt,F(Zt)),An.nk_1>2){var Vt=bn;if(bn=Hr(Vt,lt()),!Ed(An.mk_1)){var Ka=bn;bn=Hr(Ka,lt())}}var Xt=bn,St=Hr(Xt,F(719528)),Qt=(or(An.pk_1,3600)+or(An.qk_1,60)|0)+An.rk_1|0,Wa=Tr(St,F(86400)),Vi=mr(Wa,F(Qt)),Ya=Hr(Vi,F(ee)),Qe=An.sk_1;return new O_(Ya,Qe)}var Kg;function av(n,r){Vn();var e;return C(n)<=r?e=w(n):e=w(Ln(n,0,r))+"...",e}function Oz(n,r){switch(Vn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function Ed(n){return Vn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function ss(n,r,e){e<10&&n.ga(48),r.ge(e)}function un(n,r){return new wc(r+' when parsing an Instant from "'+av(n,64)+'"',n)}function ti(n,r,e,t){var a=rr(n,e),i;return t(new Cn(a))?i=null:i=un(n,"Expected "+r+", but got '"+kr(a)+"' at position "+e),i}function Pz(n){return Vn(),D(n,new Cn(45))}function Bz(n){return Vn(),D(n,new Cn(45))}function Nz(n){return Vn(),D(n,new Cn(84))||D(n,new Cn(116))}function Uz(n){return Vn(),D(n,new Cn(58))}function Dz(n){return Vn(),D(n,new Cn(58))}function Rz(n){Vn();var r=n.x1_1;return 48<=r?r<=57:!1}function zt(n,r){return or(Hn(rr(n,r),48),10)+Hn(rr(n,r+1|0),48)|0}var zd;function Vn(){zd||(zd=!0,$g=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),Jg=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Hg=new Int32Array([3,6]),Gg=new Int32Array([1,2,4,5,7,8]))}function c1(){return Yg(),Wg}var Wg;function Lz(n,r){return Yg(),new U_(n.dl_1,r).il()}var Id;function Yg(){if(!Id){Id=!0;var n=Ts();Wg=n}}var Cd;function Mz(){if(Cd)return ur;Cd=!0,Zg=new D_("PUBLICATION",1)}var Zg,zo;function Io(){return Mz(),Zg}function Fz(n){var r=n;return!(r instanceof Lt)}function Vg(n){var r;return n instanceof Lt?r=n.nl_1:r=null,r}function $z(n){var r;return n instanceof Lt?r=n.toString():r="Success("+ye(n)+")",r}function Jz(n){return n==null?0:wr(n)}function Hz(n,r){if(!(r instanceof ma))return!1;var e=r.ol_1;return!!D(n,e)}function Gz(n){var r=n;if(r instanceof Lt)throw n.nl_1}function Xg(n){return new Lt(n)}function O(n,r){return new Ll(n,r)}var af;function Ys(){return af===o&&new L_,af}function Kz(n,r){return n.length<=r?n:Gn(n,0,r)+"..."}function te(n,r,e){throw T.v("Expected "+r+" at index "+e+", but was '"+kr(G(n,e))+"'")}var sf;function Ql(){return sf===o&&new M_,sf}function Qg(n,r){var e=n&255,t=r&255;return Le(e,t)}function Wz(n,r){return Qg(n.yl_1,r instanceof Ge?r.yl_1:g())}function of(n){return(n&255).toString()}function Yz(n,r){return!(!(r instanceof Ge)||n!==r.yl_1)}function qd(n){return new Int8Array(n)}function Zz(n,r){var e=n[r];return e}function Vz(n,r,e){var t=n;t[r]=e}function Ea(n){return n.length}function Xz(n){return new F_(n)}function r0(n,r){var e=n,t=r;return Xk(e,t)}function Qz(n,r){return r instanceof Ge?r0(n.dm_1,r instanceof Ge?r.yl_1:g()):!1}function rI(n){return n.length===0}function nI(n){return"UByteArray(storage="+w(n)+")"}function eI(n){return wr(n)}function tI(n,r){if(!(r instanceof ya))return!1;var e=r.dm_1;return!!D(n,e)}var lf;function ru(){return lf===o&&new $_,lf}function n0(n,r){return di(n,r)}function aI(n,r){return n0(n.jm_1,r instanceof le?r.jm_1:g())}function uf(n){return(n>>>0).toString()}function iI(n,r){return!(!(r instanceof le)||n!==r.jm_1)}function Ad(n){return new Int32Array(n)}function sI(n,r){var e=n[r];return e}function oI(n,r,e){var t=n;t[r]=e}function za(n){return n.length}function lI(n){return new J_(n)}function e0(n,r){var e=n,t=r;return Qk(e,t)}function uI(n,r){return r instanceof le?e0(n.om_1,r instanceof le?r.jm_1:g()):!1}function fI(n){return n.length===0}function cI(n){return"UIntArray(storage="+w(n)+")"}function vI(n){return wr(n)}function hI(n,r){if(!(r instanceof wa))return!1;var e=r.om_1;return!!D(n,e)}var ff;function Zs(){return ff===o&&new H_,ff}function t0(n,r){return Tt(n,r)}function dI(n,r){return t0(n.um_1,r instanceof ue?r.um_1:g())}function cf(n){var r=n;return U2(r,10)}function pI(n){return n.hashCode()}function _I(n,r){if(!(r instanceof ue))return!1;var e=r.um_1;return!!sr(n,e)}function Td(n){return Aa(n)}function mI(n,r){var e=n[r];return e}function gI(n,r,e){var t=n;t[r]=e}function Ia(n){return n.length}function yI(n){return new G_(n)}function a0(n,r){var e=n,t=r;return rx(e,t)}function wI(n,r){return r instanceof ue?a0(n.zm_1,r instanceof ue?r.um_1:g()):!1}function bI(n){return n.length===0}function kI(n){return"ULongArray(storage="+w(n)+")"}function xI(n){return wr(n)}function SI(n,r){if(!(r instanceof ba))return!1;var e=r.zm_1;return!!D(n,e)}var vf;function nu(){return vf===o&&new K_,vf}function i0(n,r){var e=n&65535,t=r&65535;return Le(e,t)}function EI(n,r){return i0(n.fn_1,r instanceof Ke?r.fn_1:g())}function hf(n){return(n&65535).toString()}function zI(n,r){return!(!(r instanceof Ke)||n!==r.fn_1)}function jd(n){return new Int16Array(n)}function II(n,r){var e=n[r];return e}function CI(n,r,e){var t=n;t[r]=e}function Ca(n){return n.length}function qI(n){return new W_(n)}function s0(n,r){var e=n,t=r;return nx(e,t)}function AI(n,r){return r instanceof Ke?s0(n.kn_1,r instanceof Ke?r.fn_1:g()):!1}function TI(n){return n.length===0}function jI(n){return"UShortArray(storage="+w(n)+")"}function OI(n){return wr(n)}function PI(n,r){if(!(r instanceof ka))return!1;var e=r.kn_1;return!!D(n,e)}function o0(n){return RI(n,10)}function BI(n){var r=LI(n),e,t=r;return(t==null?null:new le(t))==null?Di(n):e=r,e}function NI(n){var r=o0(n),e,t=r;return(t==null?null:new ue(t))==null?Di(n):e=r,e}function UI(n){var r=MI(n),e,t=r;return(t==null?null:new Ge(t))==null?Di(n):e=r,e}function DI(n){var r=FI(n),e,t=r;return(t==null?null:new Ke(t))==null?Di(n):e=r,e}function RI(n,r){Bi(r);var e=n.length;if(e===0)return null;var t=new b(-1,-1),a,i=G(n,0);if(gn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=new b(477218588,119304647),l=s,u=F(r),f=new b(0,0),c=a;if(c<e)do{var v=c;c=c+1|0;var h=Hl(G(n,v),r);if(h<0)return null;var d=f,p=l;if(Tt(d,p)>0)if(D(new ue(l),new ue(s))){l=N2(t,u);var m=f,y=l;if(Tt(m,y)>0)return null}else return null;var x=f;f=Tr(x,u);var k=f,S=f,z=h,I=z,q=zs(F(I),new b(-1,0)),j=q;f=mr(S,j);var P=f;if(Tt(P,k)<0)return null}while(c<e);return f}function LI(n){return iv(n,10)}function MI(n){return $I(n,10)}function FI(n){return JI(n,10)}function iv(n,r){Bi(r);var e=n.length;if(e===0)return null;var t=-1,a,i=G(n,0);if(gn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=119304647,l=s,u=r,f=0,c=a;if(c<e)do{var v=c;c=c+1|0;var h=Hl(G(n,v),r);if(h<0)return null;var d=f,p=l;if(di(d,p)>0)if(D(new le(l),new le(s))){l=B2(t,u);var m=f,y=l;if(di(m,y)>0)return null}else return null;var x=f;f=or(x,u);var k=f,S=f,z=h;f=S+z|0;var I=f;if(di(I,k)<0)return null}while(c<e);return f}function $I(n,r){var e=iv(n,r),t,a=e;if((a==null?null:new le(a))==null)return null;t=e;var i=t,s=-1,l=s&255;if(di(i,l)>0)return null;var u=i;return Jn(u)}function JI(n,r){var e=iv(n,r),t,a=e;if((a==null?null:new le(a))==null)return null;t=e;var i=t,s=-1,l=s&65535;if(di(i,l)>0)return null;var u=i;return Lc(u)}Lr(cc,"CharSequence");Lr(Oe,"Comparable");_(dp,"Number");_(pp);_(_p);_(mp);nn(gp);_(Cn,"Char",o,o,[Oe]);Lr(Z,"Collection");Lr(Re,"Set",o,o,[Z]);Lr(zn,"List",o,o,[Z]);Lr(ut,"Entry");Lr(xn,"Map");Lr(gi,"MutableMap",o,o,[xn]);nn(Bk);_(_e,"Enum",o,o,[Oe]);nn(yp);_(b,"Long",o,o,[Oe]);Lr(yn,"FunctionAdapter");_(wp);U(Nk,"ByteCompanionObject");U(Uk,"ShortCompanionObject");U(Dk,"IntCompanionObject");U(Rk,"FloatCompanionObject");U(Lk,"DoubleCompanionObject");U(Mk,"StringCompanionObject");U(Fk,"BooleanCompanionObject");U(bp,"Digit");U(kp,"Letter");Lr(cn,"Comparator");U(Bl,"Unit");_(Ii,"AbstractCollection",o,o,[Z]);_(Ns,"AbstractMutableCollection",o,o,[Z]);_(vc,"IteratorImpl");_(xp,"ListIteratorImpl");_(Sp,"AbstractMutableList",o,o,[Z,zn]);_(Ep,"AbstractMap",o,o,[xn]);_(zp,"AbstractMutableMap",o,o,[gi]);_(Us,"AbstractMutableSet",o,o,[Z,Re]);nn(Ip);Lr(Ds,"RandomAccess");_(A,"ArrayList",A.m,o,[Z,zn,Ds]);_(bs,"HashMap",bs.a7,o,[gi]);_(Cp,"HashMapKeys",o,o,[Z,Re]);_(qp,"HashMapValues",o,o,[Z]);_(Ap,"HashMapEntrySetBase",o,o,[Z,Re]);_(Tp,"HashMapEntrySet");_(jp);_(Op,"HashMapKeysDefault");_(Pp);_(Bp,"HashMapValuesDefault");_(qa,"HashSet",qa.q8,o,[Z,Re]);nn(Np);_(Nl,"Itr");_(Up,"KeysItr");_(Dp,"ValuesItr");_(Rp,"EntriesItr");_(Lp,"EntryRef",o,o,[ut]);Lr(Mp,"InternalMap");Rr(Je).k8=$k;_(Je,"InternalHashMap",Je.l7,o,[Mp]);U(Fp,"EmptyHolder");_(cr,"LinkedHashMap",cr.t4,o,[gi]);_(Pn,"LinkedHashSet",Pn.i1,o,[Z,Re]);Lr(ht,"Continuation");U($p,"CompletedContinuation",o,o,[ht]);_(hc,"InterceptedCoroutine",o,o,[ht]);_(dc,"GeneratorCoroutineImpl",o,o,[ht]);_(Jp,o,o,o,[ht]);_(ks,"Exception",ks.tb);_(ge,"RuntimeException",ge.nb);_(oe,"UnsupportedOperationException",oe.s6);_(T,"IllegalArgumentException",T.qb);_(jr,"NoSuchElementException",jr.j1);_(Wn,"IndexOutOfBoundsException",Wn.yb);_(gr,"IllegalStateException",gr.ac);_(To,"ConcurrentModificationException",To.p9);_(y1,"ArithmeticException",y1.ec);_(jo,"Error",jo.kc);_(cs,"AssertionError",cs.ic);_(w1,"NumberFormatException",w1.sc);_(b1,"NoWhenBranchMatchedException",b1.s3);_(k1,"NullPointerException",k1.w3);_(x1,"ClassCastException",x1.a4);Lr(at,"KClass");_(Ci,"KClassImpl",o,o,[at]);_(an,"PrimitiveKClassImpl");U(pc,"NothingKClassImpl");_(S1,"SimpleKClassImpl");Lr(Ba,"KProperty1");U(Hp,"PrimitiveClasses");_(Th,"CharacterCodingException",Th.ce);_(Yr,"StringBuilder",Yr.f,o,[cc]);nn(Gp);_(Te,"Regex");_(xs,"MatchGroup");Lr(_c,"MatchNamedGroupCollection",o,o,[Z]);_(Kp,o,o,o,[_c]);_(mc,"AbstractList",o,o,[zn]);_(Wp);_(Yp);_(Jk,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Ct,"DurationUnit");_(gc,"IteratorImpl");_(Zp,"ListIteratorImpl");nn(Vp);_(Xp);_(Qp);nn(Hk);_(r_,"AbstractSet",o,o,[Re]);_(n_);_(e_);nn(t_);U(a_,"EmptyList",o,o,[zn,Ds]);U(i_,"EmptyIterator");_(Ul,"IndexedValue");_(s_,"IndexingIterable");_(o_,"IndexingIterator");Lr(l_,"MapWithDefault",o,o,[xn]);U(u_,"EmptyMap",o,o,[xn]);_(f_,"IntIterator");_(c_);_(v_,"TransformingSequence");Lr(Dl,"DropTakeSequence");_(h_);_(Rl,"TakeSequence",o,o,[Dl]);U(d_,"EmptySequence",o,o,[Dl]);_(p_);_(yc,"GeneratorSequence");U(__,"EmptySet",o,o,[Re]);U(m_,"NaturalOrderComparator",o,o,[cn]);_(g_,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(y_,"Key");Lr(Gk,"ContinuationInterceptor");U(w_,"EmptyCoroutineContext");_(b_,"CoroutineSingletons");_(k_,"EnumEntriesList",o,o,[zn,Ds]);nn(x_);_(Rs,"IntProgression");Lr(fi,"ClosedRange");_(Rt,"IntRange",o,o,[fi]);_(S_,"IntProgressionIterator");nn(E_);_(z_);_(I_,"DelimitedRangesSequence");U(Kk,"State");_(C_,"LinesIterator");_(q_);nn(A_);_(Ce,"Duration",o,o,[Oe]);nn(T_);_(E1,"LongParser");U(Wk,"FractionalParser");nn(j_);_(ft,"Instant",o,o,[Oe]);_(O_,"Success");_(wc,"Failure");nn(P_);_(bc,"UnboundLocalDateTime");_(kc,"InstantFormatException");_(B_,"DeepRecursiveScope",o,o,o,[1,2]);_(N_,"DeepRecursiveFunction");_(U_,"DeepRecursiveScopeImpl",o,o,[ht],[1,2]);_(D_,"LazyThreadSafetyMode");_(xc,"UnsafeLazyImpl");U(R_,"UNINITIALIZED_VALUE");nn(Yk);_(Lt,"Failure");_(ma,"Result");_(jh,"NotImplementedError",jh.hb);_(Ll,"Pair");nn(L_);_(Ot,"Uuid",o,o,[Oe]);nn(M_);_(Ge,"UByte",o,o,[Oe]);_(F_,"Iterator");_(ya,"UByteArray",o,o,[Z]);nn($_);_(le,"UInt",o,o,[Oe]);_(J_,"Iterator");_(wa,"UIntArray",o,o,[Z]);nn(H_);_(ue,"ULong",o,o,[Oe]);_(G_,"Iterator");_(ba,"ULongArray",o,o,[Z]);nn(K_);_(Ke,"UShort",o,o,[Oe]);_(W_,"Iterator");_(ka,"UShortArray",o,o,[Z]);ur=new Bl;ko=null;Is=new Np;Km=new $p;Mn=new Vp;qs=new t_;As=new i_;Gl=new d_;mg=new m_;V1=new y_;Qc=new E_;Kg=new P_;zo=new R_;var Qr=Math.imul;class eu{}class pi{}class hr{}class Yn extends T{static wn(){var r=this.qb();return v1(r),r}static xn(r){var e=this.v(r);return v1(e),e}static yn(r,e){var t=this.rb(r,e);return v1(t),t}}class tu extends Yn{constructor(r,e,t,a){return new.target.go(r,e,t,a)}static go(r,e,t,a){var i=this.yn(r,e);return vn(i,i.fo_1),i.do_1=t,i.eo_1=a,i}ho(r){return tu.go(r,this,this.do_1,this.eo_1)}}class be{}function Da(){return!1}function Ra(){return!1}function Vs(){return fr()}class l0{}class u0{constructor(r){this.xo_1=r,this.wo_1=r.po()}y(){return this.wo_1>0}z(){var r=this.xo_1.po(),e=this.wo_1;return this.wo_1=e-1|0,this.xo_1.uo(r-e|0)}}class f0{constructor(r){this.yo_1=r}x(){return new u0(this.yo_1)}}class c0{constructor(r){this.zo_1=r,this.ap_1=!1,this.bp_1=fr(),this.cp_1=A.m(),this.dp_1=qa.q8(),this.ep_1=A.m(),this.fp_1=A.m(),this.gp_1=A.m()}hp(r,e,t,a){if(!this.dp_1.n(r)){var i="Element with name '"+r+"' is already registered in "+this.zo_1;throw T.v(w(i))}this.cp_1.n(r),this.ep_1.n(e),this.fp_1.n(t),this.gp_1.n(a)}ip(r,e,t,a,i){t=t===o?fr():t,a=a===o?!1:a;var s;return i===o?(this.hp(r,e,t,a),s=ur):s=i.hp.call(this,r,e,t,a),s}}class Xs{}class Li{constructor(r,e,t,a,i){this.jp_1=r,this.kp_1=e,this.lp_1=t,this.mp_1=i.bp_1,this.np_1=gx(i.cp_1);var s=this,l=i.cp_1;s.op_1=Pa(l),this.pp_1=xf(i.ep_1);var u=this,f=i.fp_1;u.qp_1=Pa(f),this.rp_1=yx(i.gp_1);for(var c=this,v=fx(this.op_1),h=A.f1(Mr(v,10)),d=v.x();d.y();){var p=d.z(),m=O(p.gh_1,p.fh_1);h.n(m)}c.sp_1=cg(h),this.tp_1=xf(a);var y=this;y.up_1=Ym(_C(this))}lo(){return this.jp_1}mo(){return this.kp_1}po(){return this.lp_1}qo(){return this.mp_1}vp(){return this.np_1}ro(r){return _i(this.op_1,r)}so(r){var e=this.sp_1.o2(r);return e??-3}to(r){return _i(this.qp_1,r)}uo(r){return _i(this.pp_1,r)}vo(r){return $y(this.rp_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Li)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!Mc(this.tp_1,r.tp_1)){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return Ty(this)}toString(){return Dy(this)}}class Mi{toString(){return fn(Dr(this).uc())}hashCode(){return me(this.toString())}}class au extends Mi{constructor(){Ho=null,super(),Ho=this}}class v0 extends Mi{constructor(){Go=null,super(),Go=this}}class Qs extends Mi{}class h0 extends Qs{constructor(){Ko=null,super(),Ko=this}}class d0 extends Qs{constructor(){Wo=null,super(),Wo=this}}class p0 extends Qs{constructor(){Yo=null,super(),Yo=this}}class _0 extends Qs{constructor(){Zo=null,super(),Zo=this}}class Xn extends Mi{}class m0 extends Xn{constructor(){Vo=null,super(),Vo=this}}class g0 extends Xn{constructor(){Xo=null,super(),Xo=this}}class y0 extends Xn{constructor(){Qo=null,super(),Qo=this}}class w0 extends Xn{constructor(){rl=null,super(),rl=this}}class b0 extends Xn{constructor(){nl=null,super(),nl=this}}class k0 extends Xn{constructor(){el=null,super(),el=this}}class x0 extends Xn{constructor(){tl=null,super(),tl=this}}class S0 extends Xn{constructor(){al=null,super(),al=this}}class E0 extends Xn{constructor(){il=null,super(),il=this}}class Fi extends Mi{}class z0 extends Fi{constructor(){sl=null,super(),sl=this}}class iu{}function I0(n){return n.on(this)}class su{}function C0(){return!1}function q0(n){return-1}function A0(n,r,e,t,a){return t=t===o?null:t,a===o?this.wq(n,r,e,t):a.wq.call(this,n,r,e,t)}class La{wp(){throw Yn.xn(w(Dr(this))+" can't retrieve untyped values")}xp(){return!0}yp(){return null}zp(){var r=this.wp();return typeof r=="boolean"?r:g()}aq(){var r=this.wp();return typeof r=="number"?r:g()}bq(){var r=this.wp();return typeof r=="number"?r:g()}cq(){var r=this.wp();return typeof r=="number"?r:g()}dq(){var r=this.wp();return r instanceof b?r:g()}eq(){var r=this.wp();return typeof r=="number"?r:g()}fq(){var r=this.wp();return typeof r=="number"?r:g()}gq(){var r=this.wp();return r instanceof Cn?r.x1_1:g()}hq(){var r=this.wp();return typeof r=="string"?r:g()}iq(r){return this}jq(r,e){return this.kq(r)}lq(r){return this}mq(r){}nq(r,e){return this.zp()}oq(r,e){return this.aq()}pq(r,e){return this.bq()}qq(r,e){return this.cq()}rq(r,e){return this.dq()}sq(r,e){return this.eq()}tq(r,e){return this.fq()}uq(r,e){return this.gq()}vq(r,e){return this.iq(r.uo(e))}wq(r,e,t,a){return this.jq(t,a)}}class sv{}function HI(n,r){return this.lq(n)}function GI(n,r){n.nn(this,r)}class ro{static cr(){return Na(this)}lq(r){return this}mq(r){}dr(r,e){return!0}er(r){throw Yn.xn("Non-serializable "+w(Dr(r))+" is not supported by "+w(Dr(this))+" encoder")}fr(){throw Yn.xn("'null' is not supported by default")}gr(r){return this.er(r)}hr(r){return this.er(r)}ir(r){return this.er(r)}jr(r){return this.er(r)}kr(r){return this.er(r)}lr(r){return this.er(r)}mr(r){return this.er(r)}nr(r){return this.er(new Cn(r))}or(r){return this.er(r)}pr(r){return this}qr(r,e,t){this.dr(r,e)&&this.gr(t)}rr(r,e,t){this.dr(r,e)&&this.hr(t)}sr(r,e,t){this.dr(r,e)&&this.ir(t)}tr(r,e,t){this.dr(r,e)&&this.jr(t)}ur(r,e,t){this.dr(r,e)&&this.kr(t)}vr(r,e,t){this.dr(r,e)&&this.lr(t)}wr(r,e,t){this.dr(r,e)&&this.mr(t)}xr(r,e,t){this.dr(r,e)&&this.nr(t)}yr(r,e){return this.dr(r,e)?this.pr(r.uo(e)):RC()}zr(r,e,t,a){this.dr(r,e)&&this.as(t,a)}}class Ei{rn(r,e){return r.yq().cs(this.qn(),e)}pn(r,e){return r.yq().ds(this.qn(),e)}}class T0{constructor(){mf=this,this.es_1=LC()}mn(){return this.es_1}fs(r,e){throw Yn.xn("'kotlin.Nothing' cannot be serialized")}nn(r,e){var t;return t=g(),this.fs(r,t)}on(r){throw Yn.xn("'kotlin.Nothing' does not have instances")}}class j0{constructor(){gf=this,this.gs_1=new In("kotlin.time.Duration",Hi())}mn(){return this.gs_1}hs(r,e){r.or(vz(e))}nn(r,e){return this.hs(r,e instanceof Ce?e.tj_1:g())}is(r){return Wr().uj(r.hq())}on(r){return new Ce(this.is(r))}}class O0{constructor(){yf=this,this.js_1=new In("kotlin.time.Instant",Hi())}mn(){return this.js_1}ks(r,e){r.or(e.toString())}nn(r,e){return this.ks(r,e instanceof ft?e:g())}on(r){return jt().gk(r.hq())}}class P0{constructor(){wf=this,this.ls_1=new In("kotlin.uuid.Uuid",Hi())}mn(){return this.ls_1}ms(r,e){r.or(e.toString())}nn(r,e){return this.ms(r,e instanceof Ot?e:g())}on(r){return Ys().pl(r.hq())}}class $t{constructor(r){this.ps_1=r,this.qs_1=1}mo(){return eo()}po(){return this.qs_1}ro(r){return qt(r,this.lo()),r.toString()}so(r){var e=Wl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}vo(r){return qt(r,this.lo()),!1}to(r){return qt(r,this.lo()),fr()}uo(r){return qt(r,this.lo()),this.ps_1}equals(r){return this===r?!0:r instanceof $t?!!(D(this.ps_1,r.ps_1)&&this.lo()===r.lo()):!1}hashCode(){return Qr(wr(this.ps_1),31)+me(this.lo())|0}toString(){return this.lo()+"("+w(this.ps_1)+")"}}class B0 extends $t{lo(){return"kotlin.collections.ArrayList"}}class Ma{constructor(r,e,t){this.rs_1=r,this.ss_1=e,this.ts_1=t,this.us_1=2}lo(){return this.rs_1}mo(){return cu()}po(){return this.us_1}ro(r){return qt(r,this.lo()),r.toString()}so(r){var e=Wl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}vo(r){return qt(r,this.lo()),!1}to(r){return qt(r,this.lo()),fr()}uo(r){qt(r,this.lo());var e;switch(r%2|0){case 0:e=this.ss_1;break;case 1:e=this.ts_1;break;default:var t="Unreached";throw gr.o3(w(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Ma)||this.lo()!==r.lo()||!D(this.ss_1,r.ss_1)||!D(this.ts_1,r.ts_1))}hashCode(){var r=me(this.lo());return r=Qr(31,r)+wr(this.ss_1)|0,r=Qr(31,r)+wr(this.ts_1)|0,r}toString(){return this.lo()+"("+w(this.ss_1)+", "+w(this.ts_1)+")"}}class N0 extends Ma{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class U0 extends $t{constructor(r){super(r),this.xs_1=r.lo()+"Array"}lo(){return this.xs_1}}class ov{rt(r,e){var t=r.lq(this.mn()),a=t.br(this.mn());if(!(a>=-1)){var i="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+a;throw T.v(w(i))}var s;e!=null?s=this.gt(e,this.wt(e)+ln(a,0)|0):s=this.at(a);var l=s,u=this.ct(l);if(t.zq())this.ot(t,l,u,a);else r:for(;;){var f=t.ar(this.mn());if(f===-1)break r;this.qt(t,u+f|0,l)}return t.mq(this.mn()),this.et(l)}on(r){return this.rt(r,null)}qt(r,e,t,a,i){a=a===o?!0:a;var s;return i===o?(this.pt(r,e,t,a),s=ur):s=i.pt.call(this,r,e,t,a),s}}class lv extends ov{constructor(r){super(),this.mt_1=r}nt(r,e){var t=this.wt(e),a=this.mn(),i=r.bs(a,t),s=this.yt(e),l=0;if(l<t)do{var u=l;l=l+1|0,i.zr(this.mn(),u,this.mt_1,s.z())}while(l<t);i.mq(a)}nn(r,e){return this.nt(r,e)}ot(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=0;if(s<a)do{var l=s;s=s+1|0,this.pt(r,t+l|0,e,!1)}while(s<a)}pt(r,e,t,a){this.it(t,e,r.xq(this.mn(),e,this.mt_1))}}class D0 extends lv{kt(r){return r.c1()}wt(r){return this.kt(r!=null&&E(r,Z)?r:g())}lt(r){return r.x()}yt(r){return this.lt(r!=null&&E(r,Z)?r:g())}}class R0 extends D0{constructor(r){super(r),this.zs_1=new B0(r.mn())}mn(){return this.zs_1}at(r){return r===-1?A.m():A.f1(r)}bt(r){return r.c1()}ct(r){return this.bt(r instanceof A?r:g())}dt(r){return r}et(r){return this.dt(r instanceof A?r:g())}ft(r,e){if(r instanceof A)return r.n6(e),r;if(e===r.c1())return A.h1(r);var t=A.f1(e);return t.g1(r),t}gt(r,e){return this.ft(r!=null&&E(r,zn)?r:g(),e)}ht(r,e,t){r.o5(e,t)}it(r,e,t){return this.ht(r instanceof A?r:g(),e,t)}}class L0 extends ov{constructor(r,e){super(),this.cu_1=r,this.du_1=e}eu(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=jx(Ac(0,Qr(a,2)),2),l=s.r1_1,u=s.s1_1,f=s.t1_1;if(f>0&&l<=u||f<0&&u<=l)do{var c=l;l=l+f|0,this.fu(r,t+c|0,e,!1)}while(c!==u)}ot(r,e,t,a){return this.eu(r,e!=null&&E(e,gi)?e:g(),t,a)}fu(r,e,t,a){var i=r.xq(this.mn(),e,this.cu_1),s;if(a){var l=r.ar(this.mn());if(l!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+l;throw T.v(w(u))}s=l}else s=e+1|0;var f=s,c,v;if(t.m2(i)){var h=this.du_1.mn().mo();v=!(h instanceof Xn)}else v=!1;v?c=r.wq(this.mn(),f,this.du_1,qe(t,i)):c=r.xq(this.mn(),f,this.du_1);var d=c;t.s2(i,d)}pt(r,e,t,a){return this.fu(r,e,t!=null&&E(t,gi)?t:g(),a)}nt(r,e){for(var t=this.wt(e),a=this.mn(),i=r.bs(a,t),s=this.yt(e),l=0,u=s;u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=this.mn(),d=l;l=d+1|0,i.zr(h,d,this.cu_1,c);var p=this.mn(),m=l;l=m+1|0,i.zr(p,m,this.du_1,v)}i.mq(a)}nn(r,e){return this.nt(r,e)}}class M0 extends L0{constructor(r,e){super(r,e),this.ut_1=new N0(r.mn(),e.mn())}mn(){return this.ut_1}vt(r){return r.c1()}wt(r){return this.vt(r!=null&&E(r,xn)?r:g())}xt(r){return r.r2().x()}yt(r){return this.xt(r!=null&&E(r,xn)?r:g())}at(r){return r===-1?cr.t4():Od(r)}zt(r){return Qr(r.c1(),2)}ct(r){return this.zt(r instanceof cr?r:g())}au(r){return r}et(r){return this.au(r instanceof cr?r:g())}bu(r,e){if(r instanceof cr)return r;if(e<=r.c1())return cr.oa(r);var t=Od(e);return t.u2(r),t}gt(r,e){return this.bu(r!=null&&E(r,xn)?r:g(),e)}}class ke extends lv{constructor(r){super(r),this.hu_1=new U0(r.mn())}mn(){return this.hu_1}iu(r){return r.ju()}ct(r){return this.iu(r instanceof Fn?r:g())}ku(r){return r.lu()}et(r){return this.ku(r instanceof Fn?r:g())}mu(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw gr.o3(w(e))}yt(r){return this.mu(r)}nu(r,e,t){var a="This method lead to boxing and must not be used, use Builder.append instead";throw gr.o3(w(a))}it(r,e,t){return this.nu(r instanceof Fn?r:g(),e,t)}at(r){return r===-1?this.ou():this.pu(r)}su(r,e){var t=this.wt(e),a=this.hu_1,i=r.bs(a,t);this.ru(i,e,t),i.mq(a)}nn(r,e){return this.su(r,e)}nt(r,e){return this.su(r,e)}on(r){return this.rt(r,null)}}class Fn{static tu(){return Na(this)}vu(r,e){r=r===o?this.ju()+1|0:r;var t;return e===o?(this.uu(r),t=ur):t=e.uu.call(this,r),t}}let F0=class{constructor(){bf=this,this.wu_1=Aa(0)}};class $0{constructor(r,e){Pd(),this.xu_1=r,this.yu_1=e;var t=this.xu_1.po();if(t<=64){var a=this,i;t===64?i=new b(0,0):i=se(new b(-1,-1),t),a.zu_1=i,this.av_1=Pd().wu_1}else this.zu_1=new b(0,0),this.av_1=PC(this,t)}bv(r){r<64?this.zu_1=Ta(this.zu_1,se(new b(1,0),r)):BC(this,r)}cv(){for(var r=this.xu_1.po();!sr(this.zu_1,new b(-1,-1));){var e=jm(Pc(this.zu_1));if(this.zu_1=Ta(this.zu_1,se(new b(1,0),e)),this.yu_1(this.xu_1,e))return e}return r>64?NC(this):-1}}class $i{constructor(r,e,t){e=e===o?null:e,this.qv_1=r,this.rv_1=e,this.sv_1=t,this.tv_1=-1;for(var a=this,i=0,s=this.sv_1,l=Array(s);i<s;)l[i]="[UNINITIALIZED]",i=i+1|0;a.uv_1=l;var u=this,f=this.sv_1;u.vv_1=Array(f),this.wv_1=null,this.xv_1=Po(this.sv_1),this.yv_1=qr();var c=this,v=Io();c.zv_1=xo(v,GC(this));var h=this,d=Io();h.aw_1=xo(d,WC(this));var p=this,m=Io();p.bw_1=xo(m,ZC(this))}lo(){return this.qv_1}po(){return this.sv_1}mo(){return fu()}qo(){var r=this.wv_1;return r??fr()}vp(){return this.yv_1.p2()}cw(){var r=this.aw_1,e=Ba;return ji("typeParameterDescriptors",1,e,YC(),null),r.l2()}uo(r){return _i(By(this),r).mn()}vo(r){return $y(this.xv_1,r)}to(r){var e=_i(this.vv_1,r);return e??fr()}ro(r){return _i(this.uv_1,r)}so(r){var e=this.yv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof $i)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!Mc(this.cw(),r.cw())){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return Ny(this)}toString(){return Dy(this)}}class ou extends $i{constructor(r,e){super(r,e,1),this.pv_1=!0}oo(){return this.pv_1}hashCode(){return Qr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof ou)){e=!1;break r}if(this.lo()!==r.lo()){e=!1;break r}if(!(r.pv_1&&Mc(this.cw(),r.cw()))){e=!1;break r}if(this.po()!==r.po()){e=!1;break r}var t=0,a=this.po();if(t<a)do{var i=t;if(t=t+1|0,this.uo(i).lo()!==r.uo(i).lo()){e=!1;break r}if(!D(this.uo(i).mo(),r.uo(i).mo())){e=!1;break r}}while(t<a);e=!0}return e}}class J0{}function KI(){return Ry()}class uv{constructor(r){this.dw_1=r}ew(){return[this.dw_1]}mn(){var r="unsupported";throw gr.o3(w(r))}nn(r,e){var t="unsupported";throw gr.o3(w(t))}on(r){var e="unsupported";throw gr.o3(w(e))}}class H0 extends ro{constructor(){return new.target.hw()}static hw(){ol=null;var r=this.cr();return ol=r,r.gw_1=vu(),r}yq(){return this.gw_1}er(r){return ur}fr(){return ur}gr(r){return ur}hr(r){return ur}ir(r){return ur}jr(r){return ur}kr(r){return ur}lr(r){return ur}mr(r){return ur}nr(r){return ur}or(r){return ur}}class no{constructor(){kf=this,this.iw_1=gv(),this.jw_1="kotlin.Nothing"}mo(){return this.iw_1}lo(){return this.jw_1}po(){return 0}ro(r){os()}so(r){os()}vo(r){os()}uo(r){os()}to(r){os()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return me(this.jw_1)+Qr(31,this.iw_1.hashCode())|0}}class G0{}class K0{constructor(r,e){this.kw_1=e,this.lw_1=fr();var t=this,a=Io();t.mw_1=xo(a,FC(r,this))}mn(){var r=this.mw_1,e=Ba;return ji("descriptor",1,e,$C(),null),r.l2()}nw(r,e){r.lq(this.mn()).mq(this.mn())}nn(r,e){return this.nw(r,e??g())}on(r){var e=this.mn(),t=r.lq(e);r:{if(t.zq())break r;var a=t.ar(this.mn());if(a===-1)break r;throw Yn.xn("Unexpected index "+a)}return t.mq(e),this.kw_1}}class W0 extends ke{constructor(){ll=null,super(zy(Oc())),ll=this}qw(r){return r.length}wt(r){return this.qw(r!=null&&ps(r)?r:g())}rw(r,e){return e===r.length?ea.uw(r):ea.vw(B1(r,e),r.length)}gt(r,e){return this.rw(r!=null&&ps(r)?r:g(),e)}pu(r){return ea.ww(r)}ou(){return ea.xw()}yw(r,e,t,a){t.zw(r.uq(this.hu_1,e))}pt(r,e,t,a){return this.yw(r,e,t instanceof ea?t:g(),a)}qu(r,e,t,a){return this.yw(r,e,t instanceof ea?t:g(),a)}ax(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.xr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ax(r,e!=null&&ps(e)?e:g(),t)}}class Y0 extends ke{constructor(){ul=null,super(Iy()),ul=this}dx(r){return r.length}wt(r){return this.dx(r!=null&&gs(r)?r:g())}ex(r,e){return e===r.length?ta.hx(r):ta.ix(N1(r,e),r.length)}gt(r,e){return this.ex(r!=null&&gs(r)?r:g(),e)}pu(r){return ta.jx(r)}ou(){return ta.kx()}lx(r,e,t,a){t.mx(r.tq(this.hu_1,e))}pt(r,e,t,a){return this.lx(r,e,t instanceof ta?t:g(),a)}qu(r,e,t,a){return this.lx(r,e,t instanceof ta?t:g(),a)}nx(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.wr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.nx(r,e!=null&&gs(e)?e:g(),t)}}class Z0 extends ke{constructor(){fl=null,super(Cy()),fl=this}qx(r){return r.length}wt(r){return this.qx(r!=null&&ms(r)?r:g())}rx(r,e){return e===r.length?aa.ux(r):aa.vx(U1(r,e),r.length)}gt(r,e){return this.rx(r!=null&&ms(r)?r:g(),e)}pu(r){return aa.wx(r)}ou(){return aa.xx()}yx(r,e,t,a){t.zx(r.sq(this.hu_1,e))}pt(r,e,t,a){return this.yx(r,e,t instanceof aa?t:g(),a)}qu(r,e,t,a){return this.yx(r,e,t instanceof aa?t:g(),a)}ay(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.vr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ay(r,e!=null&&ms(e)?e:g(),t)}}class V0 extends ke{constructor(){cl=null,super(pv(Ml())),cl=this}dy(r){return r.length}wt(r){return this.dy(r!=null&&ci(r)?r:g())}ey(r,e){return e===r.length?ia.hy(r):ia.iy(bi(r,e),r.length)}gt(r,e){return this.ey(r!=null&&ci(r)?r:g(),e)}pu(r){return ia.jy(r)}ou(){return ia.ky()}ly(r,e,t,a){t.my(r.rq(this.hu_1,e))}pt(r,e,t,a){return this.ly(r,e,t instanceof ia?t:g(),a)}qu(r,e,t,a){return this.ly(r,e,t instanceof ia?t:g(),a)}ny(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.ur(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.ny(r,e!=null&&ci(e)?e:g(),t)}}class X0 extends ke{constructor(){vl=null,super(lu(Zs())),vl=this}qy(r){return Ia(r)}wt(r){return this.qy(r instanceof ba?r.zm_1:g())}ry(r,e){if(e===Ia(r))return sa.uy(r);var t=bi(r,e);return sa.vy(t,Ia(r))}gt(r,e){return this.ry(r instanceof ba?r.zm_1:g(),e)}pu(r){return sa.wy(r)}ou(){return sa.xy()}yy(r,e,t,a){var i=r.vq(this.hu_1,e).dq(),s=i;t.zy(s)}pt(r,e,t,a){return this.yy(r,e,t instanceof sa?t:g(),a)}qu(r,e,t,a){return this.yy(r,e,t instanceof sa?t:g(),a)}az(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=mI(e,i),u=l;s.kr(u)}while(a<t)}ru(r,e,t){return this.az(r,e instanceof ba?e.zm_1:g(),t)}}class Q0 extends ke{constructor(){hl=null,super(dv()),hl=this}dz(r){return r.length}wt(r){return this.dz(r!=null&&_s(r)?r:g())}ez(r,e){return e===r.length?oa.hz(r):oa.iz(Oa(r,e),r.length)}gt(r,e){return this.ez(r!=null&&_s(r)?r:g(),e)}pu(r){return oa.jz(r)}ou(){return oa.kz()}lz(r,e,t,a){t.mz(r.qq(this.hu_1,e))}pt(r,e,t,a){return this.lz(r,e,t instanceof oa?t:g(),a)}qu(r,e,t,a){return this.lz(r,e,t instanceof oa?t:g(),a)}nz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.tr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.nz(r,e!=null&&_s(e)?e:g(),t)}}class ry extends ke{constructor(){dl=null,super(cv(ru())),dl=this}qz(r){return za(r)}wt(r){return this.qz(r instanceof wa?r.om_1:g())}rz(r,e){if(e===za(r))return la.uz(r);var t=Oa(r,e);return la.vz(t,za(r))}gt(r,e){return this.rz(r instanceof wa?r.om_1:g(),e)}pu(r){return la.wz(r)}ou(){return la.xz()}yz(r,e,t,a){var i=r.vq(this.hu_1,e).cq(),s=i;t.zz(s)}pt(r,e,t,a){return this.yz(r,e,t instanceof la?t:g(),a)}qu(r,e,t,a){return this.yz(r,e,t instanceof la?t:g(),a)}a10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=sI(e,i),u=l;s.jr(u)}while(a<t)}ru(r,e,t){return this.a10(r,e instanceof wa?e.om_1:g(),t)}}class ny extends ke{constructor(){pl=null,super(mv()),pl=this}d10(r){return r.length}wt(r){return this.d10(r!=null&&ds(r)?r:g())}e10(r,e){return e===r.length?ua.h10(r):ua.i10(ki(r,e),r.length)}gt(r,e){return this.e10(r!=null&&ds(r)?r:g(),e)}pu(r){return ua.j10(r)}ou(){return ua.k10()}l10(r,e,t,a){t.m10(r.pq(this.hu_1,e))}pt(r,e,t,a){return this.l10(r,e,t instanceof ua?t:g(),a)}qu(r,e,t,a){return this.l10(r,e,t instanceof ua?t:g(),a)}n10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.sr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n10(r,e!=null&&ds(e)?e:g(),t)}}class ey extends ke{constructor(){_l=null,super(hv(nu())),_l=this}q10(r){return Ca(r)}wt(r){return this.q10(r instanceof ka?r.kn_1:g())}r10(r,e){if(e===Ca(r))return fa.u10(r);var t=ki(r,e);return fa.v10(t,Ca(r))}gt(r,e){return this.r10(r instanceof ka?r.kn_1:g(),e)}pu(r){return fa.w10(r)}ou(){return fa.x10()}y10(r,e,t,a){var i=r.vq(this.hu_1,e).bq(),s=i;t.z10(s)}pt(r,e,t,a){return this.y10(r,e,t instanceof fa?t:g(),a)}qu(r,e,t,a){return this.y10(r,e,t instanceof fa?t:g(),a)}a11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=II(e,i),u=l;s.ir(u)}while(a<t)}ru(r,e,t){return this.a11(r,e instanceof ka?e.kn_1:g(),t)}}class ty extends ke{constructor(){ml=null,super(_v()),ml=this}d11(r){return r.length}wt(r){return this.d11(r!=null&&hs(r)?r:g())}e11(r,e){return e===r.length?ca.h11(r):ca.i11(xi(r,e),r.length)}gt(r,e){return this.e11(r!=null&&hs(r)?r:g(),e)}pu(r){return ca.j11(r)}ou(){return ca.k11()}l11(r,e,t,a){t.m11(r.oq(this.hu_1,e))}pt(r,e,t,a){return this.l11(r,e,t instanceof ca?t:g(),a)}qu(r,e,t,a){return this.l11(r,e,t instanceof ca?t:g(),a)}n11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.rr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n11(r,e!=null&&hs(e)?e:g(),t)}}class ay extends ke{constructor(){gl=null,super(vv(Ql())),gl=this}q11(r){return Ea(r)}wt(r){return this.q11(r instanceof ya?r.dm_1:g())}r11(r,e){if(e===Ea(r))return va.u11(r);var t=xi(r,e);return va.v11(t,Ea(r))}gt(r,e){return this.r11(r instanceof ya?r.dm_1:g(),e)}pu(r){return va.w11(r)}ou(){return va.x11()}y11(r,e,t,a){var i=r.vq(this.hu_1,e).aq(),s=i;t.z11(s)}pt(r,e,t,a){return this.y11(r,e,t instanceof va?t:g(),a)}qu(r,e,t,a){return this.y11(r,e,t instanceof va?t:g(),a)}a12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.yr(this.hu_1,i),l=Zz(e,i),u=l;s.hr(u)}while(a<t)}ru(r,e,t){return this.a12(r,e instanceof ya?e.dm_1:g(),t)}}class iy extends ke{constructor(){yl=null,super(qy()),yl=this}d12(r){return r.length}wt(r){return this.d12(r!=null&&vs(r)?r:g())}e12(r,e){return e===r.length?ha.h12(r):ha.i12(D1(r,e),r.length)}gt(r,e){return this.e12(r!=null&&vs(r)?r:g(),e)}pu(r){return ha.j12(r)}ou(){return ha.k12()}l12(r,e,t,a){t.m12(r.nq(this.hu_1,e))}pt(r,e,t,a){return this.l12(r,e,t instanceof ha?t:g(),a)}qu(r,e,t,a){return this.l12(r,e,t instanceof ha?t:g(),a)}n12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.qr(this.hu_1,i,e[i])}while(a<t)}ru(r,e,t){return this.n12(r,e!=null&&vs(e)?e:g(),t)}}class ea extends Fn{constructor(r,e){return new.target.vw(r,e)}static vw(r,e){var t=this.tu();return t.sw_1=r,t.tw_1=e,t}static uw(r){return this.vw(r,r.length)}static ww(r){return this.vw(Es(r),0)}static xw(){return this.vw(Es(10),0)}ju(){return this.tw_1}uu(r){this.sw_1.length<r&&(this.sw_1=B1(this.sw_1,ln(r,Qr(this.sw_1.length,2))))}zw(r){this.vu();var e=this.sw_1,t=this.tw_1;this.tw_1=t+1|0,e[t]=r}lu(){return B1(this.sw_1,this.tw_1)}}class ta extends Fn{constructor(r,e){return new.target.ix(r,e)}static ix(r,e){var t=this.tu();return t.fx_1=r,t.gx_1=e,t}static hx(r){return this.ix(r,r.length)}static jx(r){return this.ix(new Float64Array(r),0)}static kx(){return this.ix(new Float64Array(10),0)}ju(){return this.gx_1}uu(r){this.fx_1.length<r&&(this.fx_1=N1(this.fx_1,ln(r,Qr(this.fx_1.length,2))))}mx(r){this.vu();var e=this.fx_1,t=this.gx_1;this.gx_1=t+1|0,e[t]=r}lu(){return N1(this.fx_1,this.gx_1)}}class aa extends Fn{constructor(r,e){return new.target.vx(r,e)}static vx(r,e){var t=this.tu();return t.sx_1=r,t.tx_1=e,t}static ux(r){return this.vx(r,r.length)}static wx(r){return this.vx(new Float32Array(r),0)}static xx(){return this.vx(new Float32Array(10),0)}ju(){return this.tx_1}uu(r){this.sx_1.length<r&&(this.sx_1=U1(this.sx_1,ln(r,Qr(this.sx_1.length,2))))}zx(r){this.vu();var e=this.sx_1,t=this.tx_1;this.tx_1=t+1|0,e[t]=r}lu(){return U1(this.sx_1,this.tx_1)}}class ia extends Fn{constructor(r,e){return new.target.iy(r,e)}static iy(r,e){var t=this.tu();return t.fy_1=r,t.gy_1=e,t}static hy(r){return this.iy(r,r.length)}static jy(r){return this.iy(Aa(r),0)}static ky(){return this.iy(Aa(10),0)}ju(){return this.gy_1}uu(r){this.fy_1.length<r&&(this.fy_1=bi(this.fy_1,ln(r,Qr(this.fy_1.length,2))))}my(r){this.vu();var e=this.fy_1,t=this.gy_1;this.gy_1=t+1|0,e[t]=r}lu(){return bi(this.fy_1,this.gy_1)}}class sa extends Fn{constructor(r,e){return new.target.vy(r,e)}static vy(r,e){var t=this.tu();return t.sy_1=r,t.ty_1=e,t}static uy(r){return this.vy(r,Ia(r))}static wy(r){return this.vy(Td(r),0)}static xy(){return this.vy(Td(10),0)}ju(){return this.ty_1}uu(r){if(Ia(this.sy_1)<r){var e=this,t=this.sy_1,a=ln(r,Qr(Ia(this.sy_1),2));e.sy_1=bi(t,a)}}zy(r){this.vu();var e=this.sy_1,t=this.ty_1;this.ty_1=t+1|0,gI(e,t,r)}o12(){var r=this.sy_1,e=this.ty_1;return bi(r,e)}lu(){return new ba(this.o12())}}class oa extends Fn{constructor(r,e){return new.target.iz(r,e)}static iz(r,e){var t=this.tu();return t.fz_1=r,t.gz_1=e,t}static hz(r){return this.iz(r,r.length)}static jz(r){return this.iz(new Int32Array(r),0)}static kz(){return this.iz(new Int32Array(10),0)}ju(){return this.gz_1}uu(r){this.fz_1.length<r&&(this.fz_1=Oa(this.fz_1,ln(r,Qr(this.fz_1.length,2))))}mz(r){this.vu();var e=this.fz_1,t=this.gz_1;this.gz_1=t+1|0,e[t]=r}lu(){return Oa(this.fz_1,this.gz_1)}}class la extends Fn{constructor(r,e){return new.target.vz(r,e)}static vz(r,e){var t=this.tu();return t.sz_1=r,t.tz_1=e,t}static uz(r){return this.vz(r,za(r))}static wz(r){return this.vz(Ad(r),0)}static xz(){return this.vz(Ad(10),0)}ju(){return this.tz_1}uu(r){if(za(this.sz_1)<r){var e=this,t=this.sz_1,a=ln(r,Qr(za(this.sz_1),2));e.sz_1=Oa(t,a)}}zz(r){this.vu();var e=this.sz_1,t=this.tz_1;this.tz_1=t+1|0,oI(e,t,r)}p12(){var r=this.sz_1,e=this.tz_1;return Oa(r,e)}lu(){return new wa(this.p12())}}class ua extends Fn{constructor(r,e){return new.target.i10(r,e)}static i10(r,e){var t=this.tu();return t.f10_1=r,t.g10_1=e,t}static h10(r){return this.i10(r,r.length)}static j10(r){return this.i10(new Int16Array(r),0)}static k10(){return this.i10(new Int16Array(10),0)}ju(){return this.g10_1}uu(r){this.f10_1.length<r&&(this.f10_1=ki(this.f10_1,ln(r,Qr(this.f10_1.length,2))))}m10(r){this.vu();var e=this.f10_1,t=this.g10_1;this.g10_1=t+1|0,e[t]=r}lu(){return ki(this.f10_1,this.g10_1)}}class fa extends Fn{constructor(r,e){return new.target.v10(r,e)}static v10(r,e){var t=this.tu();return t.s10_1=r,t.t10_1=e,t}static u10(r){return this.v10(r,Ca(r))}static w10(r){return this.v10(jd(r),0)}static x10(){return this.v10(jd(10),0)}ju(){return this.t10_1}uu(r){if(Ca(this.s10_1)<r){var e=this,t=this.s10_1,a=ln(r,Qr(Ca(this.s10_1),2));e.s10_1=ki(t,a)}}z10(r){this.vu();var e=this.s10_1,t=this.t10_1;this.t10_1=t+1|0,CI(e,t,r)}q12(){var r=this.s10_1,e=this.t10_1;return ki(r,e)}lu(){return new ka(this.q12())}}class ca extends Fn{constructor(r,e){return new.target.i11(r,e)}static i11(r,e){var t=this.tu();return t.f11_1=r,t.g11_1=e,t}static h11(r){return this.i11(r,r.length)}static j11(r){return this.i11(new Int8Array(r),0)}static k11(){return this.i11(new Int8Array(10),0)}ju(){return this.g11_1}uu(r){this.f11_1.length<r&&(this.f11_1=xi(this.f11_1,ln(r,Qr(this.f11_1.length,2))))}m11(r){this.vu();var e=this.f11_1,t=this.g11_1;this.g11_1=t+1|0,e[t]=r}lu(){return xi(this.f11_1,this.g11_1)}}class va extends Fn{constructor(r,e){return new.target.v11(r,e)}static v11(r,e){var t=this.tu();return t.s11_1=r,t.t11_1=e,t}static u11(r){return this.v11(r,Ea(r))}static w11(r){return this.v11(qd(r),0)}static x11(){return this.v11(qd(10),0)}ju(){return this.t11_1}uu(r){if(Ea(this.s11_1)<r){var e=this,t=this.s11_1,a=ln(r,Qr(Ea(this.s11_1),2));e.s11_1=xi(t,a)}}z11(r){this.vu();var e=this.s11_1,t=this.t11_1;this.t11_1=t+1|0,Vz(e,t,r)}r12(){var r=this.s11_1,e=this.t11_1;return xi(r,e)}lu(){return new ya(this.r12())}}class ha extends Fn{constructor(r,e){return new.target.i12(r,e)}static i12(r,e){var t=this.tu();return t.f12_1=r,t.g12_1=e,t}static h12(r){return this.i12(r,r.length)}static j12(r){return this.i12(Po(r),0)}static k12(){return this.i12(Po(10),0)}ju(){return this.g12_1}uu(r){this.f12_1.length<r&&(this.f12_1=D1(this.f12_1,ln(r,Qr(this.f12_1.length,2))))}m12(r){this.vu();var e=this.f12_1,t=this.g12_1;this.g12_1=t+1|0,e[t]=r}lu(){return D1(this.f12_1,this.g12_1)}}class sy{constructor(){Sf=this,this.s12_1=new In("kotlin.String",Hi())}mn(){return this.s12_1}t12(r,e){return r.or(e)}nn(r,e){return this.t12(r,e!=null&&typeof e=="string"?e:g())}on(r){return r.hq()}}class In{constructor(r,e){this.u12_1=r,this.v12_1=e}lo(){return this.u12_1}mo(){return this.v12_1}po(){return 0}ro(r){ls(this)}so(r){ls(this)}vo(r){ls(this)}uo(r){ls(this)}to(r){ls(this)}toString(){return"PrimitiveDescriptor("+this.u12_1+")"}equals(r){return this===r?!0:r instanceof In?!!(this.u12_1===r.u12_1&&D(this.v12_1,r.v12_1)):!1}hashCode(){return me(this.u12_1)+Qr(31,this.v12_1.hashCode())|0}}class oy{constructor(){Ef=this,this.w12_1=new In("kotlin.Int",SC())}mn(){return this.w12_1}x12(r,e){return r.jr(e)}nn(r,e){return this.x12(r,e!=null&&typeof e=="number"?e:g())}on(r){return r.cq()}}class ly{constructor(){zf=this,this.y12_1=new In("kotlin.Long",EC())}mn(){return this.y12_1}z12(r,e){return r.kr(e)}nn(r,e){return this.z12(r,e instanceof b?e:g())}on(r){return r.dq()}}class uy{constructor(){If=this,this.a13_1=new In("kotlin.Byte",bC())}mn(){return this.a13_1}b13(r,e){return r.hr(e)}nn(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}on(r){return r.aq()}}class fy{constructor(){Cf=this,this.c13_1=new In("kotlin.Short",xC())}mn(){return this.c13_1}d13(r,e){return r.ir(e)}nn(r,e){return this.d13(r,e!=null&&typeof e=="number"?e:g())}on(r){return r.bq()}}class cy{constructor(){qf=this,this.e13_1=new In("kotlin.Char",kC())}mn(){return this.e13_1}f13(r,e){return r.nr(e)}nn(r,e){return this.f13(r,e instanceof Cn?e.x1_1:g())}g13(r){return r.gq()}on(r){return new Cn(this.g13(r))}}class vy{constructor(){Af=this,this.h13_1=new In("kotlin.Double",IC())}mn(){return this.h13_1}i13(r,e){return r.mr(e)}nn(r,e){return this.i13(r,e!=null&&typeof e=="number"?e:g())}on(r){return r.fq()}}class hy{constructor(){Tf=this,this.j13_1=new In("kotlin.Float",zC())}mn(){return this.j13_1}k13(r,e){return r.lr(e)}nn(r,e){return this.k13(r,e!=null&&typeof e=="number"?e:g())}on(r){return r.eq()}}class dy{constructor(){jf=this,this.l13_1=new In("kotlin.Boolean",wC())}mn(){return this.l13_1}m13(r,e){return r.gr(e)}nn(r,e){return this.m13(r,e!=null&&typeof e=="boolean"?e:g())}on(r){return r.zp()}}class py{constructor(){Of=this,this.n13_1=new K0("kotlin.Unit",ur)}mn(){return this.n13_1.mn()}o13(r,e){this.n13_1.nw(r,ur)}nn(r,e){return this.o13(r,e instanceof Bl?e:g())}p13(r){this.n13_1.on(r)}on(r){return this.p13(r),ur}}class Ji{constructor(){var r=this;r.v13_1=A.m(),this.w13_1=!1}yq(){return vu()}a14(r){throw Yn.xn(w(Dr(this))+" can't retrieve untyped values")}b14(r){return!0}c14(r){var e=this.a14(r);return typeof e=="boolean"?e:g()}d14(r){var e=this.a14(r);return typeof e=="number"?e:g()}e14(r){var e=this.a14(r);return typeof e=="number"?e:g()}f14(r){var e=this.a14(r);return typeof e=="number"?e:g()}g14(r){var e=this.a14(r);return e instanceof b?e:g()}h14(r){var e=this.a14(r);return typeof e=="number"?e:g()}i14(r){var e=this.a14(r);return typeof e=="number"?e:g()}j14(r){var e=this.a14(r);return e instanceof Cn?e.x1_1:g()}k14(r){var e=this.a14(r);return typeof e=="string"?e:g()}l14(r,e){return this.m14(r),this}jq(r,e){return this.kq(r)}iq(r){return this.l14(this.n14(),r)}xp(){var r=this.x13(),e;if(r==null)return!1;e=r;var t=e;return this.b14(t)}yp(){return null}zp(){return this.c14(this.n14())}aq(){return this.d14(this.n14())}bq(){return this.e14(this.n14())}cq(){return this.f14(this.n14())}dq(){return this.g14(this.n14())}eq(){return this.h14(this.n14())}fq(){return this.i14(this.n14())}gq(){return this.j14(this.n14())}hq(){return this.k14(this.n14())}lq(r){return this}mq(r){}nq(r,e){return this.c14(this.s13(r,e))}oq(r,e){return this.d14(this.s13(r,e))}pq(r,e){return this.e14(this.s13(r,e))}qq(r,e){return this.f14(this.s13(r,e))}rq(r,e){return this.g14(this.s13(r,e))}sq(r,e){return this.h14(this.s13(r,e))}tq(r,e){return this.i14(this.s13(r,e))}uq(r,e){return this.j14(this.s13(r,e))}vq(r,e){return this.l14(this.s13(r,e),r.uo(e))}wq(r,e,t,a){var i=this.s13(r,e);return E6(this,i,z6(this,t,a))}x13(){return em(this.v13_1)}m14(r){this.v13_1.n(r)}n14(){var r=this.v13_1.h5(Hs(this.v13_1));return this.w13_1=!0,r}}class _y extends Ji{s13(r,e){return this.u13(this.t13(r,e))}u13(r){var e=this.x13();return this.y13(e??"",r)}t13(r,e){return r.ro(e)}y13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}z13(){return this.v13_1.d1()?"$":M(this.v13_1,".","$.")}}class my{constructor(){Pf=this,this.o14_1=to("kotlin.UInt",dv())}mn(){return this.o14_1}p14(r,e){var t=r.pr(this.o14_1),a=e;t.jr(a)}nn(r,e){return this.p14(r,e instanceof le?e.jm_1:g())}q14(r){var e=r.iq(this.o14_1).cq();return e}on(r){return new le(this.q14(r))}}class gy{constructor(){Bf=this,this.r14_1=to("kotlin.ULong",pv(Ml()))}mn(){return this.r14_1}s14(r,e){var t=r.pr(this.r14_1),a=e;t.kr(a)}nn(r,e){return this.s14(r,e instanceof ue?e.um_1:g())}t14(r){var e=r.iq(this.r14_1).dq();return e}on(r){return new ue(this.t14(r))}}class yy{constructor(){Nf=this,this.u14_1=to("kotlin.UByte",_v())}mn(){return this.u14_1}v14(r,e){var t=r.pr(this.u14_1),a=e;t.hr(a)}nn(r,e){return this.v14(r,e instanceof Ge?e.yl_1:g())}w14(r){var e=r.iq(this.u14_1).aq();return e}on(r){return new Ge(this.w14(r))}}class wy{constructor(){Uf=this,this.x14_1=to("kotlin.UShort",mv())}mn(){return this.x14_1}y14(r,e){var t=r.pr(this.x14_1),a=e;t.ir(a)}nn(r,e){return this.y14(r,e instanceof Ke?e.fn_1:g())}z14(r){var e=r.iq(this.x14_1).bq();return e}on(r){return new Ke(this.z14(r))}}class by{io(r,e,t){return e=e===o?fr():e,t===o?this.a15(r,e):t.a15.call(this,r,e)}}class ky extends by{constructor(r,e,t,a,i,s){super(),this.c15_1=r,this.d15_1=e,this.e15_1=t,this.f15_1=a,this.g15_1=i,this.h15_1=s}ds(r,e){if(!r.vc(e))return null;var t=this.d15_1.o2(r),a=t==null?null:t.o2(Dr(e)),i=a!=null&&E(a,eu)?a:null;if(i!=null)return i;var s=this.e15_1.o2(r),l=s!=null&&typeof s=="function"?s:null;return l==null?null:l(e)}cs(r,e){var t=this.f15_1.o2(r),a;t==null?a=null:a=(E(t,xn)?t:g()).o2(e);var i=a,s=i!=null&&E(i,hr)?i:null;if(s!=null)return s;var l=this.g15_1.o2(r),u=l!=null&&typeof l=="function"?l:null;return u==null?null:u(e)}a15(r,e){var t=this.c15_1.o2(r),a=t==null?null:t.i15(e);return a==null||E(a,hr)?a:null}b15(r){for(var e=this.c15_1.r2().x();e.y();){var t=e.z(),a=t.k2(),i=t.l2();if(i instanceof xy){var s=E(a,at)?a:g(),l=i.l15_1;r.m15(s,E(l,hr)?l:g())}else i instanceof Sy?r.k15(a,i.j15_1):Ms()}for(var u=this.d15_1.r2().x();u.y();)for(var f=u.z(),c=f.k2(),v=f.l2(),h=v.r2().x();h.y();){var d=h.z(),p=d.k2(),m=d.l2(),y=E(c,at)?c:g(),x=E(p,at)?p:g(),k=E(m,hr)?m:g();r.n15(y,x,k)}for(var S=this.e15_1.r2().x();S.y();){var z=S.z(),I=z.k2(),q=z.l2(),j=E(I,at)?I:g();r.o15(j,typeof q=="function"?q:g())}for(var P=this.g15_1.r2().x();P.y();){var $=P.z(),B=$.k2(),N=$.l2(),H=E(B,at)?B:g();r.p15(H,typeof N=="function"?N:g())}}}class fv{}class xy extends fv{}class Sy extends fv{}class Ey{}function WI(n,r){return this.k15(n,O6(r))}class YI{}function ZI(n,r,e){var t=n.pn(r,e),a;return t==null?qC(Dr(e),n.qn()):a=t,a}function df(n,r,e){var t=n.rn(r,e),a;return t==null?Oy(e,n.qn()):a=t,a}function v1(n){vn(n,n.vn_1)}function Os(n){return h6()}function cv(n){return I6()}function lu(n){return C6()}function vv(n){return q6()}function hv(n){return A6()}function dv(n){return d6()}function pv(n){return p6()}function _v(n){return _6()}function mv(n){return m6()}function zy(n){return g6()}function VI(){return r6()}function Iy(n){return y6()}function XI(){return n6()}function Cy(n){return w6()}function QI(){return e6()}function rC(){return t6()}function nC(){return a6()}function eC(){return i6()}function tC(){return s6()}function aC(){return o6()}function iC(){return l6()}function sC(){return u6()}function oC(){return f6()}function qy(n){return b6()}function lC(){return c6()}function uC(n){return k6()}function fC(){return AC()}function cC(n){return TC()}function vC(n){return jC()}function hC(n){return OC()}function pf(n){return new R0(n)}function _f(n,r){return new M0(n,r)}function dC(n,r){var e=Ay(r),t;if(e==null)t=null;else{var a=n.io(e);t=a==null?null:a.mn()}return t}function Ay(n){var r;return n instanceof l0?r=n.ko_1:n instanceof G0?r=Ay(n.jo_1):r=null,r}function pC(n){return new f0(n)}function uu(n,r,e,t){var a;if(t===o?a=yC:a=t,t=a,_t(n)){var i="Blank serial names are prohibited";throw T.v(w(i))}if(D(r,fu())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw T.v(w(s))}var l=new c0(n);return t(l),new Li(n,r,l.cp_1.c1(),ux(e),l)}function Ty(n){var r=n.up_1,e=Ba;return ji("_hashCode",1,e,mC(),null),r.l2()}function _C(n){return()=>Uy(n,n.tp_1)}function mC(){return Ye(n=>Ty(n),1,0,0)}function gC(n,r){if(_t(n)){var e="Blank serial names are prohibited";throw T.v(w(e))}return x6(n,r)}function yC(n){return ur}var Ho;function Fa(){return Ho===o&&new au,Ho}var Go;function jy(){return Go===o&&new v0,Go}var Ko;function fu(){return Ko===o&&new h0,Ko}var Wo;function eo(){return Wo===o&&new d0,Wo}var Yo;function cu(){return Yo===o&&new p0,Yo}var Zo;function gv(){return Zo===o&&new _0,Zo}var Vo;function wC(){return Vo===o&&new m0,Vo}var Xo;function bC(){return Xo===o&&new g0,Xo}var Qo;function kC(){return Qo===o&&new y0,Qo}var rl;function xC(){return rl===o&&new w0,rl}var nl;function SC(){return nl===o&&new b0,nl}var el;function EC(){return el===o&&new k0,el}var tl;function zC(){return tl===o&&new x0,tl}var al;function IC(){return al===o&&new S0,al}var il;function Hi(){return il===o&&new E0,il}var sl;function CC(){return sl===o&&new z0,sl}function qC(n,r){var e=n.uc();Oy(e??w(n),r)}function Oy(n,r){var e="in the polymorphic scope of '"+r.uc()+"'";throw Yn.xn(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.uc()+"' has to be sealed and '@Serializable'."))}var mf;function AC(){return mf===o&&new T0,mf}var gf;function TC(){return gf===o&&new j0,gf}var yf;function jC(){return yf===o&&new O0,yf}var wf;function OC(){return wf===o&&new P0,wf}function qt(n,r){if(n<0)throw Wn.zb("Illegal index "+n+", "+r+" expects only non-negative indices")}function Od(n){var r=n;return cr.na(r)}var bf;function Pd(){return bf===o&&new F0,bf}function PC(n,r){var e=(r-1|0)>>>6|0,t=r&63,a=Aa(e);return t!==0&&(a[sx(a)]=se(new b(-1,-1),r)),a}function BC(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.av_1[e]=Ta(n.av_1[e],se(new b(1,0),t))}function NC(n){var r=0,e=n.av_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var a=Qr(t+1|0,64),i=n.av_1[t];!sr(i,new b(-1,-1));){var s=jm(Pc(i));i=Ta(i,se(new b(1,0),s));var l=a+s|0;if(n.yu_1(n.xu_1,l))return n.av_1[t]=i,l}n.av_1[t]=i}while(r<=e);return-1}function to(n,r){return new ou(n,new uv(r))}function UC(n,r){return n.ho(r)}function DC(n){return HC(n)}var ol;function RC(){return ol===o&&H0.hw(),ol}function os(n){throw gr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var kf;function LC(){return kf===o&&new no,kf}function MC(n){return r=>(r.bp_1=n.lw_1,ur)}function FC(n,r){return()=>{var e=gv();return uu(n,e,[],MC(r))}}function $C(){return Ye(n=>n.mn(),1,0,1)}function JC(){return yv(),Py}var Py;function HC(n){if(yv(),E(n,Xs))return n.vp();var r=qa.b1(n.po()),e=0,t=n.po();if(e<t)do{var a=e;e=e+1|0;var i=n.ro(a);r.n(i)}while(e<t);return r}function xf(n){yv();var r;n==null||n.d1()?r=null:r=n;var e=r,t;e==null?t=null:t=Pa(e);var a=t;return a??JC()}var Bd;function yv(){Bd||(Bd=!0,Py=[])}function By(n){var r=n.zv_1,e=Ba;return ji("childSerializers",1,e,KC(),null),r.l2()}function Ny(n){var r=n.bw_1,e=Ba;return ji("_hashCode",1,e,VC(),null),r.l2()}function GC(n){return()=>{var r=n.rv_1,e=r==null?null:r.ew();return e??Ry()}}function KC(){return Ye(n=>By(n),1,0,2)}function WC(n){return()=>{var r=n.rv_1,e=r==null?null:r.fw(),t;if(e==null)t=null;else{for(var a=A.f1(e.length),i=0,s=e.length;i<s;){var l=e[i];i=i+1|0;var u=l.mn();a.n(u)}t=a}return xf(t)}}function YC(){return Ye(n=>n.cw(),1,0,3)}function ZC(n){return()=>Uy(n,n.cw())}function VC(){return Ye(n=>Ny(n),1,0,4)}function Uy(n,r){var e=me(n.lo());e=Qr(31,e)+S2(r)|0;for(var t=pC(n),a=1,i=t.x();i.y();){var s=i.z(),l=a,u=Qr(31,l),f=s.lo(),c=f==null?null:wr(f);a=u+(c??0)|0}for(var v=a,h=1,d=t.x();d.y();){var p=d.z(),m=h,y=Qr(31,m),x=p.mo(),k=x==null?null:wr(x);h=y+(k??0)|0}var S=h;return e=Qr(31,e)+v|0,e=Qr(31,e)+S|0,e}function Dy(n){var r=Ac(0,n.po()),e=n.lo()+"(";return M(r,", ",e,")",o,o,XC(n))}function XC(n){return r=>n.ro(r)+": "+n.uo(r).lo()}function Ry(){return QC(),Ly}var Ly,Nd;function QC(){Nd||(Nd=!0,Ly=[])}var ll;function r6(){return ll===o&&new W0,ll}var ul;function n6(){return ul===o&&new Y0,ul}var fl;function e6(){return fl===o&&new Z0,fl}var cl;function t6(){return cl===o&&new V0,cl}var vl;function a6(){return vl===o&&new X0,vl}var hl;function i6(){return hl===o&&new Q0,hl}var dl;function s6(){return dl===o&&new ry,dl}var pl;function o6(){return pl===o&&new ny,pl}var _l;function l6(){return _l===o&&new ey,_l}var ml;function u6(){return ml===o&&new ty,ml}var gl;function f6(){return gl===o&&new ay,gl}var yl;function c6(){return yl===o&&new iy,yl}function v6(){return wv(),My}var My,Sf;function h6(){return Sf===o&&new sy,Sf}function ls(n){throw gr.o3("Primitive descriptor "+n.u12_1+" does not have elements")}var Ef;function d6(){return Ef===o&&new oy,Ef}var zf;function p6(){return zf===o&&new ly,zf}var If;function _6(){return If===o&&new uy,If}var Cf;function m6(){return Cf===o&&new fy,Cf}var qf;function g6(){return qf===o&&new cy,qf}var Af;function y6(){return Af===o&&new vy,Af}var Tf;function w6(){return Tf===o&&new hy,Tf}var jf;function b6(){return jf===o&&new dy,jf}var Of;function k6(){return Of===o&&new py,Of}function x6(n,r){return wv(),S6(n),new In(n,r)}function S6(n){wv();for(var r=v6().q2(),e=r.x();e.y();){var t=e.z(),a=t.mn().lo();if(n===a)throw T.v(UE(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Dr(t).uc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var Ud;function wv(){Ud||(Ud=!0,My=P6())}function E6(n,r,e){n.m14(r);var t=e();return n.w13_1||n.n14(),n.w13_1=!1,t}function z6(n,r,e){return()=>n.jq(r,e)}var Pf;function I6(){return Pf===o&&new my,Pf}var Bf;function C6(){return Bf===o&&new gy,Bf}var Nf;function q6(){return Nf===o&&new yy,Nf}var Uf;function A6(){return Uf===o&&new wy,Uf}function T6(){return j6(),Fy}var Fy,Dd;function j6(){Dd||(Dd=!0,Fy=new ky(qr(),qr(),qr(),qr(),qr(),!1))}function vu(){return T6()}function O6(n){return r=>n}function _i(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.zb("Index "+r+" out of bounds "+Zk(n).toString());return n[r]}function $y(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.zb("Index "+r+" out of bounds "+lx(n).toString());return n[r]}function P6(){return Gs([O(Ir().od(),Os()),O(Ur(Cn),zy(Oc())),O(Ir().rd(),VI()),O(Ir().md(),Iy()),O(Ir().yd(),XI()),O(Ir().ld(),Cy()),O(Ir().xd(),QI()),O(Ir().kd(),pv(Ml())),O(Ir().wd(),rC()),O(Ur(ue),lu(Zs())),O(Ur(ba),nC()),O(Ir().jd(),dv()),O(Ir().ud(),eC()),O(Ur(le),cv(ru())),O(Ur(wa),tC()),O(Ir().id(),mv()),O(Ir().td(),aC()),O(Ur(Ke),hv(nu())),O(Ur(ka),iC()),O(Ir().hd(),_v()),O(Ir().sd(),sC()),O(Ur(Ge),vv(Ql())),O(Ur(ya),oC()),O(Ir().gd(),qy()),O(Ir().qd(),lC()),O(Ur(Bl),uC()),O(Ir().fd(),fC()),O(Ur(Ce),cC(Wr())),O(Ur(ft),vC(jt())),O(Ur(Ot),hC(Ys()))])}Lr(eu,"SerializationStrategy");Lr(pi,"DeserializationStrategy");Lr(hr,"KSerializer",o,o,[eu,pi]);_(Yn,"SerializationException",Yn.wn);_(tu,"MissingFieldException");Lr(be,"SerialDescriptor");_(l0,"ContextDescriptor",o,o,[be]);_(u0);_(f0);_(c0,"ClassSerialDescriptorBuilder");Lr(Xs,"CachedNames");Rr(Li).no=Da;Rr(Li).oo=Ra;_(Li,"SerialDescriptorImpl",o,o,[be,Xs]);_(Mi,"SerialKind");U(au,"ENUM");U(v0,"CONTEXTUAL");_(Qs,"StructureKind");U(h0,"CLASS");U(d0,"LIST");U(p0,"MAP");U(_0,"OBJECT");_(Xn,"PrimitiveKind");U(m0,"BOOLEAN");U(g0,"BYTE");U(y0,"CHAR");U(w0,"SHORT");U(b0,"INT");U(k0,"LONG");U(x0,"FLOAT");U(S0,"DOUBLE");U(E0,"STRING");_(Fi,"PolymorphicKind");U(z0,"SEALED");Lr(iu,"Decoder");Lr(su,"CompositeDecoder");Rr(La).xq=A0;Rr(La).kq=I0;Rr(La).zq=C0;Rr(La).br=q0;_(La,"AbstractDecoder",o,o,[iu,su]);Lr(sv,"Encoder");Rr(ro).bs=HI;Rr(ro).as=GI;_(ro,"AbstractEncoder",o,o,[sv]);_(Ei,"AbstractPolymorphicSerializer",o,o,[hr]);U(T0,"NothingSerializer",o,o,[hr]);U(j0,"DurationSerializer",o,o,[hr]);U(O0,"InstantSerializer",o,o,[hr]);U(P0,"UuidSerializer",o,o,[hr]);Rr($t).no=Da;Rr($t).oo=Ra;Rr($t).qo=Vs;_($t,"ListLikeDescriptor",o,o,[be]);_(B0,"ArrayListClassDesc");Rr(Ma).no=Da;Rr(Ma).oo=Ra;Rr(Ma).qo=Vs;_(Ma,"MapLikeDescriptor",o,o,[be]);_(N0,"LinkedHashMapClassDesc");_(U0,"PrimitiveArrayDescriptor");_(ov,"AbstractCollectionSerializer",o,o,[hr]);_(lv,"CollectionLikeSerializer");_(D0,"CollectionSerializer");_(R0,"ArrayListSerializer");_(L0,"MapLikeSerializer");_(M0,"LinkedHashMapSerializer");_(ke,"PrimitiveArraySerializer");_(Fn,"PrimitiveArrayBuilder");nn(F0);_($0,"ElementMarker");Rr($i).no=Da;Rr($i).oo=Ra;_($i,"PluginGeneratedSerialDescriptor",o,o,[be,Xs]);_(ou,"InlineClassDescriptor");Lr(J0,"GeneratedSerializer",o,o,[hr]);Rr(uv).fw=KI;_(uv,o,o,o,[J0]);U(H0,"NoOpEncoder");Rr(no).no=Da;Rr(no).oo=Ra;Rr(no).qo=Vs;U(no,"NothingSerialDescriptor",o,o,[be]);_(G0,"SerialDescriptorForNullable",o,o,[be,Xs]);_(K0,"ObjectSerializer",o,o,[hr]);U(W0,"CharArraySerializer",o,o,[hr]);U(Y0,"DoubleArraySerializer",o,o,[hr]);U(Z0,"FloatArraySerializer",o,o,[hr]);U(V0,"LongArraySerializer",o,o,[hr]);U(X0,"ULongArraySerializer",o,o,[hr]);U(Q0,"IntArraySerializer",o,o,[hr]);U(ry,"UIntArraySerializer",o,o,[hr]);U(ny,"ShortArraySerializer",o,o,[hr]);U(ey,"UShortArraySerializer",o,o,[hr]);U(ty,"ByteArraySerializer",o,o,[hr]);U(ay,"UByteArraySerializer",o,o,[hr]);U(iy,"BooleanArraySerializer",o,o,[hr]);_(ea,"CharArrayBuilder");_(ta,"DoubleArrayBuilder");_(aa,"FloatArrayBuilder");_(ia,"LongArrayBuilder");_(sa,"ULongArrayBuilder");_(oa,"IntArrayBuilder");_(la,"UIntArrayBuilder");_(ua,"ShortArrayBuilder");_(fa,"UShortArrayBuilder");_(ca,"ByteArrayBuilder");_(va,"UByteArrayBuilder");_(ha,"BooleanArrayBuilder");U(sy,"StringSerializer",o,o,[hr]);Rr(In).no=Da;Rr(In).oo=Ra;Rr(In).qo=Vs;_(In,"PrimitiveSerialDescriptor",o,o,[be]);U(oy,"IntSerializer",o,o,[hr]);U(ly,"LongSerializer",o,o,[hr]);U(uy,"ByteSerializer",o,o,[hr]);U(fy,"ShortSerializer",o,o,[hr]);U(cy,"CharSerializer",o,o,[hr]);U(vy,"DoubleSerializer",o,o,[hr]);U(hy,"FloatSerializer",o,o,[hr]);U(dy,"BooleanSerializer",o,o,[hr]);U(py,"UnitSerializer",o,o,[hr]);Rr(Ji).xq=A0;Rr(Ji).kq=I0;Rr(Ji).zq=C0;Rr(Ji).br=q0;_(Ji,"TaggedDecoder",o,o,[iu,su]);_(_y,"NamedValueDecoder");U(my,"UIntSerializer",o,o,[hr]);U(gy,"ULongSerializer",o,o,[hr]);U(yy,"UByteSerializer",o,o,[hr]);U(wy,"UShortSerializer",o,o,[hr]);_(by,"SerializersModule");_(ky,"SerialModuleImpl");_(fv,"ContextualProvider");_(xy,"Argless");_(Sy,"WithTypeArguments");Lr(Ey,"SerializersModuleCollector");_(YI,"SerializableWith",o,o,o,o,0);var ao=Math.imul;class bv{constructor(r,e){je(),this.q15_1=r,this.r15_1=e,this.s15_1=new Lf}yq(){return this.r15_1}t15(r,e){var t=new Ff;try{return pq(this,t,r,e),t.toString()}finally{t.x15()}}u15(r,e){var t=$v(this,e),a=new Ps(this,yu(),t,r.mn(),null),i=a.kq(r);return t.l16(),i}v15(r){return this.u15(gt(),r)}}class Jy extends bv{constructor(){wl=null,super(new kv,vu()),wl=this}}class Hy{constructor(r){this.m16_1=r.q15_1.h17_1,this.n16_1=r.q15_1.m17_1,this.o16_1=r.q15_1.i17_1,this.p16_1=r.q15_1.j17_1,this.q16_1=r.q15_1.l17_1,this.r16_1=r.q15_1.n17_1,this.s16_1=r.q15_1.o17_1,this.t16_1=r.q15_1.q17_1,this.u16_1=r.q15_1.x17_1,this.v16_1=r.q15_1.s17_1,this.w16_1=r.q15_1.t17_1,this.x16_1=r.q15_1.u17_1,this.y16_1=r.q15_1.v17_1,this.z16_1=r.q15_1.w17_1,this.a17_1=r.q15_1.r17_1,this.b17_1=r.q15_1.k17_1,this.c17_1=r.q15_1.p17_1,this.d17_1=r.yq(),this.e17_1=r.q15_1.y17_1,this.f17_1=r.q15_1.z17_1}g17(){if(this.c17_1){if(this.t16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw T.v(w(r))}if(!this.u16_1.equals(kw())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw T.v(w(e))}}if(this.q16_1){if(this.r16_1!=="    "){var a=this.r16_1,i;r:{for(var s=0;s<C(a);){var l=rr(a,s);if(s=s+1|0,!(l===32||l===9||l===13||l===10)){i=!1;break r}}i=!0}var u=i;if(!u){var f="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.r16_1;throw T.v(w(f))}}}else if(this.r16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw T.v(w(t))}return new kv(this.m16_1,this.o16_1,this.p16_1,this.b17_1,this.q16_1,this.n16_1,this.r16_1,this.s16_1,this.c17_1,this.t16_1,this.a17_1,this.v16_1,this.w16_1,this.x16_1,this.y16_1,this.z16_1,this.u16_1,this.e17_1,this.f17_1)}}class Gy extends bv{constructor(r,e){super(r,e),D6(this)}}class Ky{}class Wy{}class Yy{}class kv{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,m,y,x,k,S){r=r===o?!1:r,e=e===o?!1:e,t=t===o?!1:t,a=a===o?!1:a,i=i===o?!1:i,s=s===o?!0:s,l=l===o?"    ":l,u=u===o?!1:u,f=f===o?!1:f,c=c===o?"type":c,v=v===o?!1:v,h=h===o?!0:h,d=d===o?null:d,p=p===o?!1:p,m=m===o?!1:m,y=y===o?!1:y,x=x===o?kw():x,k=k===o?!0:k,S=S===o?400:S,this.h17_1=r,this.i17_1=e,this.j17_1=t,this.k17_1=a,this.l17_1=i,this.m17_1=s,this.n17_1=l,this.o17_1=u,this.p17_1=f,this.q17_1=c,this.r17_1=v,this.s17_1=h,this.t17_1=d,this.u17_1=p,this.v17_1=m,this.w17_1=y,this.x17_1=x,this.y17_1=k,this.z17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.h17_1+", ignoreUnknownKeys="+this.i17_1+", isLenient="+this.j17_1+", "+("allowStructuredMapKeys="+this.k17_1+", prettyPrint="+this.l17_1+", explicitNulls="+this.m17_1+", ")+("prettyPrintIndent='"+this.n17_1+"', coerceInputValues="+this.o17_1+", useArrayPolymorphism="+this.p17_1+", ")+("classDiscriminator='"+this.q17_1+"', allowSpecialFloatingPointValues="+this.r17_1+", ")+("useAlternativeNames="+this.s17_1+", namingStrategy="+ye(this.t17_1)+", decodeEnumsCaseInsensitive="+this.u17_1+", ")+("allowTrailingComma="+this.v17_1+", allowComments="+this.w17_1+", classDiscriminatorMode="+this.x17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.y17_1+", maxNestingDepth="+this.z17_1+")")}}class Co extends _e{}class hu{}class Zy{c18(){return gt()}}class st{}class B6{}class vr extends st{toString(){return this.f18()}d18(r){r.fa(this.f18())}}class N6{}class dn extends st{constructor(r){super(),this.g18_1=r}equals(r){return D(this.g18_1,r)}hashCode(){return wr(this.g18_1)}toString(){var r=ao(this.g18_1.c1()+1|0,2),e=Yr.ja(r);return this.d18(e),e.toString()}d18(r){r.ga(91);for(var e=!0,t=this.g18_1.x();t.y();){var a=t.z();e||r.ga(44),e=!1,a.d18(r)}r.ga(93)}d1(){return this.g18_1.d1()}h18(r){return this.g18_1.l1(r)}l1(r){return r instanceof st?this.h18(r instanceof st?r:g()):!1}x(){return this.g18_1.x()}e1(r){return this.g18_1.e1(r)}i18(r){return this.g18_1.n1(r)}n1(r){return r instanceof st?this.i18(r instanceof st?r:g()):-1}m1(r){return this.g18_1.m1(r)}c1(){return this.g18_1.c1()}}class Vy{c18(){return pu()}}class er extends st{constructor(r){super(),this.j18_1=r}equals(r){return D(this.j18_1,r)}hashCode(){return wr(this.j18_1)}toString(){var r=ao(this.j18_1.c1(),6),e=Yr.ja(r);return this.d18(e),e.toString()}d18(r){r.ga(123);for(var e=!0,t=this.j18_1.r2().x();t.y();){var a=t.z(),i=a.k2(),s=a.l2();e||r.ga(44),e=!1,Il(r,i),r.ga(58),s.d18(r)}r.ga(125)}d1(){return this.j18_1.d1()}k18(r){return this.j18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.k18(r!=null&&typeof r=="string"?r:g()):!1}pf(r){return this.j18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.pf(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.j18_1.c1()}p2(){return this.j18_1.p2()}q2(){return this.j18_1.q2()}r2(){return this.j18_1.r2()}}class we extends vr{constructor(){bl=null,super(),bl=this,this.l18_1="null"}e18(){return!1}f18(){return this.l18_1}}class mt extends vr{constructor(r,e,t){if(t=t===o?null:t,super(),this.m18_1=e,this.n18_1=t,this.o18_1=w(r),this.n18_1!=null&&!this.n18_1.oo()){var a="Failed requirement.";throw T.v(w(a))}}e18(){return this.m18_1}f18(){return this.o18_1}toString(){var r;if(this.m18_1){var e=this.o18_1.length+2|0,t=Yr.ja(e);Il(t,this.o18_1),r=t.toString()}else r=this.o18_1;return r}d18(r){this.m18_1?Il(r,this.o18_1):r.fa(this.o18_1)}equals(r){return this===r?!0:!(r==null||!Dr(this).equals(Dr(r))||(r instanceof mt||g(),this.m18_1!==r.m18_1)||this.o18_1!==r.o18_1)}hashCode(){var r=Uc(this.m18_1);return r=ao(31,r)+me(this.o18_1)|0,r}}class At{constructor(){var r=this;r.q18_1=cr.t4()}r18(r,e){return this.q18_1.s2(r,e)}g17(){return new er(this.q18_1)}}class Xy{constructor(){var r=this;r.s18_1=A.m()}t18(r){return this.s18_1.n(r),!0}g17(){return new dn(this.s18_1)}}class Qy{constructor(){Jf=this;var r=this,e=CC();r.z18_1=uu("kotlinx.serialization.json.JsonElement",e,[],H6)}mn(){return this.z18_1}a19(r,e){Ki(r),e instanceof vr?r.as(Ov(),e):e instanceof er?r.as(pu(),e):e instanceof dn?r.as(Pv(),e):Ms()}nn(r,e){return this.a19(r,e instanceof st?e:g())}on(r){var e=_u(r);return e.b18()}}class rw{constructor(){Hf=this,this.u18_1=uu("kotlinx.serialization.json.JsonPrimitive",Hi(),[])}mn(){return this.u18_1}b19(r,e){Ki(r);var t;if(e instanceof we)r.as(Bv(),lo()),t=ur;else{var a=Sw();r.as(a,e instanceof mt?e:g()),t=ur}return t}nn(r,e){return this.b19(r,e instanceof vr?e:g())}on(r){var e=_u(r),t=e.b18();if(!(t instanceof vr)){var a="Unexpected JSON element, expected JsonPrimitive, had "+w(Dr(t)),i;if(e.a18().q15_1.y17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class nw{constructor(){Gf=this,this.p19_1=pf(gt()).mn(),this.q19_1="kotlinx.serialization.json.JsonArray"}lo(){return this.q19_1}ro(r){return this.p19_1.ro(r)}so(r){return this.p19_1.so(r)}to(r){return this.p19_1.to(r)}uo(r){return this.p19_1.uo(r)}vo(r){return this.p19_1.vo(r)}mo(){return this.p19_1.mo()}no(){return this.p19_1.no()}oo(){return this.p19_1.oo()}po(){return this.p19_1.po()}qo(){return this.p19_1.qo()}}class ew{constructor(){Kf=this,this.y18_1=V6()}mn(){return this.y18_1}r19(r,e){Ki(r),pf(gt()).nn(r,e)}nn(r,e){return this.r19(r,e instanceof dn?e:g())}on(r){return Nv(r),new dn(pf(gt()).on(r))}}class tw{constructor(){Wf=this,this.s19_1=_f(Os(),gt()).mn(),this.t19_1="kotlinx.serialization.json.JsonObject"}lo(){return this.t19_1}ro(r){return this.s19_1.ro(r)}so(r){return this.s19_1.so(r)}to(r){return this.s19_1.to(r)}uo(r){return this.s19_1.uo(r)}vo(r){return this.s19_1.vo(r)}mo(){return this.s19_1.mo()}no(){return this.s19_1.no()}oo(){return this.s19_1.oo()}po(){return this.s19_1.po()}qo(){return this.s19_1.qo()}}class aw{constructor(){Yf=this,this.x18_1=X6()}mn(){return this.x18_1}u19(r,e){Ki(r),_f(Os(),gt()).nn(r,e)}nn(r,e){return this.u19(r,e instanceof er?e:g())}on(r){return Nv(r),new er(_f(Os(),gt()).on(r))}}class iw{constructor(){Zf=this,this.v18_1=uu("kotlinx.serialization.json.JsonNull",Fa(),[])}mn(){return this.v18_1}v19(r,e){Ki(r),r.fr()}nn(r,e){return this.v19(r,e instanceof we?e:g())}on(r){if(Nv(r),r.xp())throw Uv("Expected 'null' literal");return r.yp(),lo()}}class sw{constructor(){Vf=this,this.w18_1=gC("kotlinx.serialization.json.JsonLiteral",Hi())}mn(){return this.w18_1}w19(r,e){if(Ki(r),e.m18_1)return r.or(e.o18_1);if(e.n18_1!=null)return r.pr(e.n18_1).or(e.o18_1);var t=$E(e.o18_1);if(t!=null)return r.kr(t);var a=o0(e.o18_1),i=a;if((i==null?null:new ue(i))!=null){var s=a,l=(s==null?null:new ue(s)).um_1,u=r.pr(lu(Zs()).mn()),f=l;return u.kr(f),ur}var c=Gc(e.o18_1);if(c!=null)return r.mr(c);var v=rz(e.o18_1);if(v!=null)return r.gr(v);r.or(e.o18_1)}nn(r,e){return this.w19(r,e instanceof mt?e:g())}on(r){var e=_u(r),t=e.b18();if(!(t instanceof mt)){var a="Unexpected JSON element, expected JsonLiteral, had "+w(Dr(t)),i;if(e.a18().q15_1.y17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class io{constructor(r){this.x19_1=Ym(r)}lo(){return nt(this).lo()}mo(){return nt(this).mo()}po(){return nt(this).po()}ro(r){return nt(this).ro(r)}so(r){return nt(this).so(r)}to(r){return nt(this).to(r)}uo(r){return nt(this).uo(r)}vo(r){return nt(this).vo(r)}}class xv{}class Sv extends Yn{static e1a(r){var e=this.xn(r);return vn(e,e.d1a_1),e.c1a_1=r,delete e.message,e}ob(){return this.c1a_1}get message(){return this.ob()}}class Nr extends Sv{constructor(r,e,t,a,i,s){return new.target.o19(r,e,t,a,i,s)}static o19(r,e,t,a,i,s){var l=this.e1a(r);return vn(l,l.n19_1),l.i19_1=e,l.j19_1=t,l.k19_1=a,l.l19_1=i,l.m19_1=s,l}}class so extends Sv{constructor(r,e,t){return new.target.p1a(r,e,t)}static p1a(r,e,t){e=e===o?null:e,t=t===o?null:t;var a=this.e1a(iq(r,t));return vn(a,a.o1a_1),a.l1a_1=r,a.m1a_1=e,a.n1a_1=t,a}}class oo{constructor(r){this.q1a_1=r,this.r1a_1=!0}s1a(){this.r1a_1=!0}t1a(){return ur}u1a(){this.r1a_1=!1}v1a(){this.r1a_1=!1}w1a(){return ur}x1a(r){return this.q1a_1.y1a(r)}z1a(r){return this.q1a_1.a1b(r)}b1b(r){return this.q1a_1.a1b(r.toString())}c1b(r){return this.q1a_1.a1b(r.toString())}d1b(r){return this.q1a_1.e1b(F(r))}f1b(r){return this.q1a_1.e1b(F(r))}g1b(r){return this.q1a_1.e1b(F(r))}h1b(r){return this.q1a_1.e1b(r)}i1b(r){return this.q1a_1.a1b(r.toString())}j1b(r){return this.q1a_1.k1b(r)}}class Df extends oo{constructor(r,e){super(r),this.n1b_1=e}g1b(r){if(this.n1b_1){var e=r;this.j1b(uf(e))}else{var t=r;this.z1a(uf(t))}}h1b(r){if(this.n1b_1){var e=r;this.j1b(cf(e))}else{var t=r;this.z1a(cf(t))}}d1b(r){if(this.n1b_1){var e=r;this.j1b(of(e))}else{var t=r;this.z1a(of(t))}}f1b(r){if(this.n1b_1){var e=r;this.j1b(hf(e))}else{var t=r;this.z1a(hf(t))}}}class Rf extends oo{constructor(r,e){super(r),this.q1b_1=e}j1b(r){this.q1b_1?super.j1b(r):super.z1a(r)}}class ow extends oo{constructor(r,e){super(r),this.t1b_1=e,this.u1b_1=0}s1a(){this.r1a_1=!0,this.u1b_1=this.u1b_1+1|0}t1a(){this.u1b_1=this.u1b_1-1|0}u1a(){this.r1a_1=!1,this.z1a(`
`);var r=this.u1b_1,e=0;if(e<r)do e=e+1|0,this.z1a(this.t1b_1.q15_1.n17_1);while(e<r)}v1a(){this.r1a_1?this.r1a_1=!1:this.u1a()}w1a(){this.x1a(32)}}class Ev{constructor(r){var e=this;e.v1b_1=new $0(r,tq(this)),this.w1b_1=!1}x1b(r){this.v1b_1.bv(r)}y1b(){return this.v1b_1.cv()}}class lw{}class uw{}class fw{constructor(r){this.f1c_1=r.z17_1,this.g1c_1=r.y17_1;var e=this;e.h1c_1=Array(8);for(var t=this,a=0,i=new Int32Array(8);a<8;)i[a]=-1,a=a+1|0;t.i1c_1=i,this.j1c_1=-1}k1c(r){this.j1c_1=this.j1c_1+1|0;var e=this.j1c_1;e>=this.f1c_1&&Bs(this.f1c_1),e===this.h1c_1.length&&Gd(this),this.h1c_1[e]=r}l1c(r){this.i1c_1[this.j1c_1]=r}m1c(r){var e;this.i1c_1[this.j1c_1]!==-2?(this.j1c_1=this.j1c_1+1|0,e=this.j1c_1===this.h1c_1.length):e=!1,e&&Gd(this),this.h1c_1[this.j1c_1]=this.g1c_1?r:Qf,this.i1c_1[this.j1c_1]=-2}n1c(){this.i1c_1[this.j1c_1]===-2&&(this.h1c_1[this.j1c_1]=Xf)}o1c(){var r=this.j1c_1;this.i1c_1[r]===-2&&(this.i1c_1[r]=-1,this.j1c_1=this.j1c_1-1|0),this.j1c_1!==-1&&(this.j1c_1=this.j1c_1-1|0)}p1c(){var r=Yr.f();r.fa("$");var e=this.j1c_1+1|0,t=0;if(t<e)do{var a=t;t=t+1|0;var i=this.h1c_1[a];if(i!=null&&E(i,be))if(D(i.mo(),eo()))this.i1c_1[a]!==-1&&(r.fa("["),r.ge(this.i1c_1[a]),r.fa("]"));else{var s=this.i1c_1[a];s>=0&&(r.fa("."),r.fa(i.ro(s)))}else i===Qf?r.fa("[<debug info disabled>]"):i!==Xf&&(r.fa("["),r.fa("'"),r.ea(i),r.fa("'"),r.fa("]"))}while(t<e);return r.toString()}toString(){return this.p1c()}}class zv{constructor(r){this.q1c_1=r.p17_1,this.r1c_1=!r.x17_1.equals(bw())}k15(r,e){}n15(r,e,t){var a=t.mn();dq(this,a,e)}o15(r,e){}p15(r,e){}}class cw{constructor(r,e){this.c1d_1=e,this.d1d_1=r.j17_1,this.e1d_1=r.v17_1,this.f1d_1=r.z17_1,this.g1d_1=this.c1d_1.i16_1.j1c_1}m1d(){var r=this.c1d_1.i1d(),e;if(r===1)e=xl(this,!0);else if(r===0)e=xl(this,!1);else if(r===6){this.g1d_1=this.g1d_1+1|0,this.g1d_1>=this.f1d_1&&Bs(this.f1d_1);var t;this.g1d_1===200?(this.g1d_1=this.g1d_1-1|0,t=gq(this)):(t=_q(this),this.g1d_1=this.g1d_1-1|0),e=t}else if(r===8){this.g1d_1=this.g1d_1+1|0,this.g1d_1>=this.f1d_1&&Bs(this.f1d_1);var a=Aw(this);this.g1d_1=this.g1d_1-1|0,e=a}else this.c1d_1.a1c("Cannot read Json element because of unexpected "+Cl(r));return e}}class fs extends _e{constructor(r,e,t,a){super(r,e),this.q1d_1=t,this.r1d_1=a}}class zi{}class Lf{constructor(){this.b1c_1=Xd(16)}t1d(r,e,t){var a=this.b1c_1,i=a.o2(r),s;if(i==null){var l=Xd(2);a.s2(r,l),s=l}else s=i;var u=s,f=e instanceof zi?e:g(),c=t??g();u.s2(f,c)}c1c(r,e,t){var a=this.u1d(r,e);if(a!=null)return a;var i=t();return this.t1d(r,e,i),i}u1d(r,e){var t=this.b1c_1.o2(r),a;t==null?a=null:a=t.o2(e instanceof zi?e:g());var i=a;return i??null}}class vw{constructor(r){this.v1d_1=r}}class Ps extends La{constructor(r,e,t,a,i){super(),this.y15_1=r,this.z15_1=e,this.a16_1=t,this.b16_1=this.y15_1.yq(),this.c16_1=-1,this.d16_1=i,this.e16_1=this.y15_1.q15_1,this.f16_1=this.e16_1.m17_1?null:new Ev(a)}a18(){return this.y15_1}yq(){return this.b16_1}b18(){return new cw(this.y15_1.q15_1,this.a16_1).m1d()}kq(r){try{var e;if(r instanceof Ei?e=this.y15_1.q15_1.p17_1:e=!0,e)return r.on(this);var t=zl(r.mn(),this.y15_1),a=this.a16_1.e1e(t,this.e16_1.j17_1),i;if(a==null){var s=E(r,pi)?r:g(),l;r:{var u;if(s instanceof Ei?u=this.a18().q15_1.p17_1:u=!0,u){l=s.on(this);break r}var f=zl(s.mn(),this.a18()),c=this.b18(),v=s.mn().lo();if(!(c instanceof er)){var h="Expected "+Ur(er).uc()+", but had "+Dr(c).uc()+" as the serialized body of "+v,d=this.a16_1.i16_1.p1c(),p;if(this.a18().q15_1.y17_1){var m=w(c);p=w(Jr(m))}else p=null;var y=p;throw Nr.o19(Kr(-1,h,d,null,y),h,-1,d,y,null)}var x=c,k=x.pf(f),S=k==null?null:On(k),z=S==null?null:Un(S),I;try{I=df(s,this,z)}catch(X){var q;if(X instanceof Yn){var j=X,P=fn(j.message),$;if(this.a18().q15_1.y17_1){var B=x.toString();$=w(Jr(B))}else $=null;var N=$;throw Nr.o19(Kr(-1,P,null,null,N),P,-1,null,N,null)}else throw X}var H=I,L=E(H,pi)?H:g();l=Rw(this.a18(),f,x,L)}return l}else i=a;var J=i,R;try{R=df(r,this,J)}catch(X){var V;if(X instanceof Yn){var K=X,nr=_a(zg(fn(K.message),10),"."),W=nz(fn(K.message),10,"");this.a16_1.a1c(nr,o,W)}else throw X;R=V}var tr=R,Q=E(tr,pi)?tr:g();return this.d16_1=new vw(t),Q.on(this)}catch(X){if(X instanceof tu){var lr=X;throw js(fn(lr.message),"at path")?lr:UC(lr,Hx(lr.message," at path: ")+this.a16_1.i16_1.p1c())}else throw X}}lq(r){var e=Bw(this.y15_1,r);this.a16_1.i16_1.k1c(r),this.a16_1.w1d(e.q1d_1),Iq(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new Ps(this.y15_1,e,this.a16_1,r,this.d16_1);break;default:var a;this.z15_1.equals(e)&&this.y15_1.q15_1.m17_1?a=this:a=new Ps(this.y15_1,e,this.a16_1,r,this.d16_1),t=a;break}return t}mq(r){r.po()===0&&Lv(r,this.y15_1)&&zq(this,r),this.a16_1.x1d()&&!this.y15_1.q15_1.v17_1&&$a(this.a16_1,""),this.a16_1.w1d(this.z15_1.r1d_1),this.a16_1.i16_1.o1c()}xp(){var r,e=this.f16_1,t=e==null?null:e.w1b_1;return t??!1?r=!1:r=!this.a16_1.f1e(),r}yp(){return null}wq(r,e,t,a){var i=this.z15_1.equals(El())&&(e&1)===0;i&&this.a16_1.i16_1.n1c();var s=super.wq(r,e,t,a);return i&&this.a16_1.i16_1.m1c(s),s}ar(r){var e;switch(this.z15_1.x2_1){case 0:e=Aq(this,r);break;case 2:e=Cq(this);break;default:e=jq(this);break}return this.z15_1.equals(El())||this.a16_1.i16_1.l1c(e),e}zp(){return this.a16_1.g1e()}aq(){var r=this.a16_1.h1e();return sr(r,F(A1(r)))||this.a16_1.a1c("Failed to parse byte for input '"+r.toString()+"'"),A1(r)}bq(){var r=this.a16_1.h1e();return sr(r,F(T1(r)))||this.a16_1.a1c("Failed to parse short for input '"+r.toString()+"'"),T1(r)}cq(){var r=this.a16_1.h1e();return sr(r,F(rn(r)))||this.a16_1.a1c("Failed to parse int for input '"+r.toString()+"'"),rn(r)}dq(){return this.a16_1.h1e()}eq(){var r=this.a16_1,e;r:{var t=r.l1d();try{e=Lo(t);break r}catch(s){if(s instanceof T)r.a1c("Failed to parse type 'float' for input '"+t+"'");else throw s}}var a=e,i=this.y15_1.q15_1.r17_1;if(i||Fc(a))return a;Md(this.a16_1,a)}fq(){var r=this.a16_1,e;r:{var t=r.l1d();try{e=Lo(t);break r}catch(s){if(s instanceof T)r.a1c("Failed to parse type 'double' for input '"+t+"'");else throw s}}var a=e,i=this.y15_1.q15_1.r17_1;if(i||$c(a))return a;Md(this.a16_1,a)}gq(){var r=this.a16_1.l1d();return r.length!==1&&this.a16_1.a1c("Expected single char, but got '"+r+"'"),G(r,0)}hq(){var r;return this.e16_1.j17_1?r=this.a16_1.d1e():r=this.a16_1.k1d(),r}iq(r){return Mv(r)?new Iv(this.a16_1,this.y15_1):super.iq(r)}}class Iv extends La{constructor(r,e){super(),this.i1e_1=r,this.j1e_1=e.yq()}yq(){return this.j1e_1}ar(r){var e="unsupported";throw gr.o3(w(e))}cq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=BI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UInt' for input '"+t+"'");else throw i}}return e}dq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=NI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'ULong' for input '"+t+"'");else throw i}}return e}aq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=UI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UByte' for input '"+t+"'");else throw i}}return e}bq(){var r=this.i1e_1,e;r:{var t=r.l1d();try{var a=DI(t);e=a;break r}catch(i){if(i instanceof T)r.a1c("Failed to parse type 'UShort' for input '"+t+"'");else throw i}}return e}}class mi extends ro{constructor(r,e,t,a){return new.target.k1e(r,e,t,a)}static k1e(r,e,t,a){var i=this.cr();i.s1c_1=r,i.t1c_1=e,i.u1c_1=t,i.v1c_1=a,i.w1c_1=i.t1c_1.yq(),i.x1c_1=i.t1c_1.q15_1,i.y1c_1=!1,i.z1c_1=null,i.a1d_1=null;var s=i.u1c_1.x2_1;return i.v1c_1!=null&&(i.v1c_1[s]!==null||i.v1c_1[s]!==i)&&(i.v1c_1[s]=i),i}a18(){return this.t1c_1}static b1d(r,e,t,a){return this.k1e(nq(r,e),e,t,a)}yq(){return this.w1c_1}as(r,e){r:{if(this.a18().q15_1.p17_1){r.nn(this,e);break r}var t=r instanceof Ei,a;if(t)a=!this.a18().q15_1.x17_1.equals(bw());else{var i;switch(this.a18().q15_1.x17_1.x2_1){case 0:case 2:i=!1;break;case 1:var s=r.mn().mo();i=D(s,fu())||D(s,gv());break;default:Ms();break}a=i}var l=a,u=l?zl(r.mn(),this.a18()):null,f;if(t){var c=r instanceof Ei?r:g();n:if(e==null){var v="Value for serializer "+w(r.mn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw T.v(w(v))}else break n;var h=ZI(c,this,e);f=E(h,eu)?h:g()}else f=r;var d=f;if(u!=null){kq(this.a18(),r,d,u),xq(d.mn().mo());var p=d.mn().lo();this.z1c_1=u,this.a1d_1=p}d.nn(this,e)}}lq(r){var e=Bw(this.t1c_1,r);e.q1d_1!==0&&(this.s1c_1.x1a(e.q1d_1),this.s1c_1.s1a());var t=this.z1c_1;if(t!=null){var a=this.a1d_1;Bq(this,t,a??r.lo()),this.z1c_1=null,this.a1d_1=null}if(this.u1c_1.equals(e))return this;var i=this.v1c_1,s=i==null?null:i[e.x2_1];return s??mi.k1e(this.s1c_1,this.t1c_1,e,this.v1c_1)}mq(r){this.u1c_1.r1d_1!==0&&(this.s1c_1.t1a(),this.s1c_1.v1a(),this.s1c_1.x1a(this.u1c_1.r1d_1))}dr(r,e){switch(this.u1c_1.x2_1){case 1:this.s1c_1.r1a_1||this.s1c_1.x1a(44),this.s1c_1.u1a();break;case 2:if(this.s1c_1.r1a_1)this.y1c_1=!0,this.s1c_1.u1a();else{var t=this,a;e%2|0?(this.s1c_1.x1a(58),this.s1c_1.w1a(),a=!1):(this.s1c_1.x1a(44),this.s1c_1.u1a(),a=!0),t.y1c_1=a}break;case 3:e===0&&(this.y1c_1=!0),e===1&&(this.s1c_1.x1a(44),this.s1c_1.w1a(),this.y1c_1=!1);break;default:this.s1c_1.r1a_1||this.s1c_1.x1a(44),this.s1c_1.u1a(),this.or(lq(r,this.t1c_1,e)),this.s1c_1.x1a(58),this.s1c_1.w1a();break}return!0}pr(r){var e;if(Mv(r)){var t,a=this.s1c_1;if(a instanceof Df)t=this.s1c_1;else{var i=this.s1c_1.q1a_1,s=this.y1c_1;t=new Df(i,s)}var l=t;e=mi.k1e(l,this.t1c_1,this.u1c_1,null)}else if(Nq(r)){var u,f=this.s1c_1;if(f instanceof Rf)u=this.s1c_1;else{var c=this.s1c_1.q1a_1,v=this.y1c_1;u=new Rf(c,v)}var h=u;e=mi.k1e(h,this.t1c_1,this.u1c_1,null)}else this.z1c_1!=null?(this.a1d_1=r.lo(),e=this):e=super.pr(r);return e}fr(){this.s1c_1.z1a("null")}gr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.i1b(r)}hr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.d1b(r)}ir(r){this.y1c_1?this.or(r.toString()):this.s1c_1.f1b(r)}jr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.g1b(r)}kr(r){this.y1c_1?this.or(r.toString()):this.s1c_1.h1b(r)}lr(r){if(this.y1c_1?this.or(r.toString()):this.s1c_1.b1b(r),!this.x1c_1.r17_1&&!Fc(r))throw Fd(r)}mr(r){if(this.y1c_1?this.or(r.toString()):this.s1c_1.c1b(r),!this.x1c_1.r17_1&&!$c(r))throw Fd(r)}nr(r){this.or(kr(r))}or(r){return this.s1c_1.j1b(r)}}class du extends _y{constructor(r,e,t){t=t===o?null:t,super(),this.n1e_1=r,this.o1e_1=e,this.p1e_1=t,this.q1e_1=this.a18().q15_1}a18(){return this.n1e_1}l2(){return this.o1e_1}yq(){return this.a18().yq()}s1e(){var r=this.x13(),e;r==null?e=null:e=this.t1e(r);var t=e;return t??this.l2()}r1e(r){return this.z13()+("."+r)}b18(){return this.s1e()}kq(r){var e;r:{var t;if(r instanceof Ei?t=this.a18().q15_1.p17_1:t=!0,t){e=r.on(this);break r}var a=zl(r.mn(),this.a18()),i=this.b18(),s=r.mn().lo();if(!(i instanceof er)){var l="Expected "+Ur(er).uc()+", but had "+Dr(i).uc()+" as the serialized body of "+s,u=this.z13(),f;if(this.a18().q15_1.y17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Nr.o19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=i,d=h.pf(a),p=d==null?null:On(d),m=p==null?null:Un(p),y;try{y=df(r,this,m)}catch(P){if(P instanceof Yn){var x=P,k=fn(x.message),S;if(this.a18().q15_1.y17_1){var z=h.toString();S=w(Jr(z))}else S=null;var I=S;throw Nr.o19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw P}var q=y,j=E(q,pi)?q:g();e=Rw(this.a18(),a,h,j)}return e}y13(r,e){return e}lq(r){var e=this.s1e(),t=r.mo(),a,i;if(D(t,eo())?i=!0:i=t instanceof Fi,i){var s=this.a18(),l=r.lo();if(!(e instanceof dn)){var u="Expected "+Ur(dn).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+l,f=this.z13(),c;if(this.a18().q15_1.y17_1){var v=w(e);c=w(Jr(v))}else c=null;var h=c;throw Nr.o19(Kr(-1,u,f,null,h),u,-1,f,h,null)}a=new Mf(s,e)}else if(D(t,cu())){var d=this.a18(),p=Sl(r.uo(0),d.yq()),m=p.mo(),y,x;if(m instanceof Xn?x=!0:x=D(m,Fa()),x){var k=this.a18(),S=r.lo();if(!(e instanceof er)){var z="Expected "+Ur(er).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+S,I=this.z13(),q;if(this.a18().q15_1.y17_1){var j=w(e);q=w(Jr(j))}else q=null;var P=q;throw Nr.o19(Kr(-1,z,I,null,P),z,-1,I,P,null)}y=new dw(k,e,r)}else if(d.q15_1.k17_1){var $=this.a18(),B=r.lo();if(!(e instanceof dn)){var N="Expected "+Ur(dn).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+B,H=this.z13(),L;if(this.a18().q15_1.y17_1){var J=w(e);L=w(Jr(J))}else L=null;var R=L;throw Nr.o19(Kr(-1,N,H,null,R),N,-1,H,R,null)}y=new Mf($,e)}else throw Ew(p);a=y}else{var V=this.a18(),K=r.lo();if(!(e instanceof er)){var nr="Expected "+Ur(er).uc()+", but had "+Dr(e).uc()+" as the serialized body of "+K,W=this.z13(),tr;if(this.a18().q15_1.y17_1){var Q=w(e);tr=w(Jr(Q))}else tr=null;var lr=tr;throw Nr.o19(Kr(-1,nr,W,null,lr),nr,-1,W,lr,null)}a=new Gi(V,e,r,this.p1e_1)}return a}mq(r){}xp(){var r=this.s1e();return!(r instanceof we)}u1e(r){return this.t1e(r)!==lo()}b14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of boolean",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=Tv(f),v;c==null?Nn(this,f,"boolean",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"boolean",r);else throw h}}return e}c14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of byte",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=He(-128,127);bo(E(h,fi)?h:g(),c)?v=A1(c):v=null;var d=v,p;d==null?Nn(this,f,"byte",r):p=d,e=p;break r}catch(m){if(m instanceof T)Nn(this,f,"byte",r);else throw m}}return e}d14(r){return this.w1e(r!=null&&typeof r=="string"?r:g())}x1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of short",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=He(-32768,32767);bo(E(h,fi)?h:g(),c)?v=T1(c):v=null;var d=v,p;d==null?Nn(this,f,"short",r):p=d,e=p;break r}catch(m){if(m instanceof T)Nn(this,f,"short",r);else throw m}}return e}e14(r){return this.x1e(r!=null&&typeof r=="string"?r:g())}y1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of int",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v,h=He(-2147483648,2147483647);bo(E(h,fi)?h:g(),c)?v=rn(c):v=null;var d=v,p;d==null?Nn(this,f,"int",r):p=d,e=p;break r}catch(m){if(m instanceof T)Nn(this,f,"int",r);else throw m}}return e}f14(r){return this.y1e(r!=null&&typeof r=="string"?r:g())}z1e(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of long",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=li(f),v;c==null?Nn(this,f,"long",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"long",r);else throw h}}return e}g14(r){return this.z1e(r!=null&&typeof r=="string"?r:g())}a1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of float",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=$6(f),v;c==null?Nn(this,f,"float",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"float",r);else throw S}}var h=e,d=this.a18().q15_1.r17_1;if(d||Fc(h))return h;var p=$d(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.a18().q15_1.y17_1){var x=w(this.s1e());y=w(Jr(x))}else y=null;var k=y;throw Nr.o19(Kr(-1,p,null,m,k),p,-1,null,k,m)}h14(r){return this.a1f(r!=null&&typeof r=="string"?r:g())}b1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of double",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=J6(f),v;c==null?Nn(this,f,"double",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"double",r);else throw S}}var h=e,d=this.a18().q15_1.r17_1;if(d||$c(h))return h;var p=$d(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.a18().q15_1.y17_1){var x=w(this.s1e());y=w(Jr(x))}else y=null;var k=y;throw Nr.o19(Kr(-1,p,null,m,k),p,-1,null,k,m)}i14(r){return this.b1f(r!=null&&typeof r=="string"?r:g())}c1f(r){var e;r:{var t=this.t1e(r);if(!(t instanceof vr)){var a="Expected "+Ur(vr).uc()+", but had "+Dr(t).uc()+" as the serialized body of char",i=this.r1e(r),s;if(this.a18().q15_1.y17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Nr.o19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=new Cn(Rx(f.f18())),v;c==null?Nn(this,f,"char",r):v=c,e=v.x1_1;break r}catch(h){if(h instanceof T)Nn(this,f,"char",r);else throw h}}return e}j14(r){return this.c1f(r!=null&&typeof r=="string"?r:g())}d1f(r){var e=this.t1e(r);if(!(e instanceof vr)){var t="Expected "+Ur(vr).uc()+", but had "+Dr(e).uc()+" as the serialized body of string",a=this.r1e(r),i;if(this.a18().q15_1.y17_1){var s=w(e);i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,t,a,null,l),t,-1,a,l,null)}var u=e;if(!(u instanceof mt)){var f="Expected string value for a non-null key '"+r+"', got null literal instead",c=this.r1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.a18().q15_1.y17_1){var d=w(this.s1e());h=w(Jr(d))}else h=null;var p=h;throw Nr.o19(Kr(-1,f,c,v,p),f,-1,c,p,v)}if(!u.m18_1&&!this.a18().q15_1.j17_1){var m="String literal for value of key '"+r+"' should be quoted",y=this.r1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.a18().q15_1.y17_1){var S=w(this.s1e());k=w(Jr(S))}else k=null;var z=k;throw Nr.o19(Kr(-1,m,y,x,z),m,-1,y,z,x)}return u.o18_1}k14(r){return this.d1f(r!=null&&typeof r=="string"?r:g())}e1f(r,e){var t;if(Mv(e)){var a=this.a18(),i=this.t1e(r),s=e.lo();if(!(i instanceof vr)){var l="Expected "+Ur(vr).uc()+", but had "+Dr(i).uc()+" as the serialized body of "+s,u=this.r1e(r),f;if(this.a18().q15_1.y17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Nr.o19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=$v(a,i.f18());t=new Iv(h,this.a18())}else t=super.l14(r,e);return t}l14(r,e){return this.e1f(r!=null&&typeof r=="string"?r:g(),e)}iq(r){return this.x13()!=null?super.iq(r):new hw(this.a18(),this.l2(),this.p1e_1).iq(r)}}class Gi extends du{constructor(r,e,t,a,i){a=a===o?null:a,i=i===o?null:i,super(r,e,a),this.l1f_1=e,this.m1f_1=i,this.n1f_1=this.l2().r2().x(),this.o1f_1=this.q1e_1.m17_1?null:new Ev(t),this.p1f_1=null,this.q1f_1=null}l2(){return this.l1f_1}ar(r){var e=this.n1f_1;r:for(;e.y();){var t=e.z(),a=t.k2(),i=mu(r,this.a18(),a);if(i!==-3){if(this.q1e_1.o17_1&&Dq(this,r,i,t.l2()))continue r;var s=this.o1f_1;return s==null||s.x1b(i),this.p1f_1=a,this.q1f_1=t.l2(),i}a!==this.p1e_1&&!Lv(r,this.a18())&&Rq(this,a)}var l=this.o1f_1,u=l==null?null:l.y1b(),f=u??-1;return f!==-1&&(this.p1f_1=r.ro(f),this.q1f_1=null),f}xp(){var r,e=this.o1f_1,t=e==null?null:e.w1b_1;return t??!1?r=!1:r=super.xp(),r}t13(r,e){var t=this.p1f_1;return t??r.ro(e)}t1e(r){var e=this.q1f_1;return e??qe(this.l2(),r)}lq(r){if(r===this.m1f_1){var e=this.a18(),t=this.s1e(),a=this.m1f_1.lo();if(!(t instanceof er)){var i="Expected "+Ur(er).uc()+", but had "+Dr(t).uc()+" as the serialized body of "+a,s=this.z13(),l;if(this.a18().q15_1.y17_1){var u=w(t);l=w(Jr(u))}else l=null;var f=l;throw Nr.o19(Kr(-1,i,s,null,f),i,-1,s,f,null)}return new Gi(e,t,r,this.p1e_1,this.m1f_1)}return super.lq(r)}}class Mf extends du{constructor(r,e){super(r,e),this.x1f_1=e,this.y1f_1=this.x1f_1.c1(),this.z1f_1=-1}l2(){return this.x1f_1}t13(r,e){return e.toString()}t1e(r){return this.x1f_1.e1(Vm(r))}ar(r){for(;this.z1f_1<(this.y1f_1-1|0);)return this.z1f_1=this.z1f_1+1|0,this.z1f_1;return-1}}class hw extends du{constructor(r,e,t){t=t===o?null:t,super(r,e,t),this.g1g_1=e,this.m14("primitive")}l2(){return this.g1g_1}ar(r){return 0}t1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw T.v(w(e))}return this.g1g_1}}class dw extends Gi{constructor(r,e,t){super(r,e,t),this.t1g_1=wt(e.p2()),this.u1g_1=ao(this.t1g_1.c1(),2),this.v1g_1=-1}t13(r,e){var t=e/2|0;return this.t1g_1.e1(t)}ar(r){for(;this.v1g_1<(this.u1g_1-1|0);)return this.v1g_1=this.v1g_1+1|0,this.v1g_1;return-1}t1e(r){return this.v1g_1%2|0?qe(this.l2(),r):En(r)}mq(r){}}class pw{constructor(r){this.g16_1=r,this.h16_1=0,this.i16_1=new fw(this.g16_1),this.j16_1=null,this.k16_1=Yr.f()}z1g(){}x1d(){var r=this.a1h(),e=this.x1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.h16_1=this.h16_1+1|0,!0):!1}b1h(r){return!(r===125||r===93||r===58||r===44)}l16(){var r=this.n1d();r!==10&&this.a1c("Expected EOF after parsing, but had "+kr(rr(this.x1g(),this.h16_1-1|0))+" instead")}h1d(r){var e=this.n1d();if(e!==r){var t=Cl(r),a=this.h16_1>0?this.h16_1-1|0:this.h16_1,i=this.h16_1===C(this.x1g())||a<0?"EOF":kr(rr(this.x1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.a1c(s,a)}return e}c1h(r){if(this.h16_1>0&&r===34){var e;r:{var t=this.h16_1;try{this.h16_1=this.h16_1-1|0,e=this.l1d();break r}finally{this.h16_1=t}}var a=e;a==="null"&&this.z1b("Expected string literal but 'null' literal was found",this.h16_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var i=tt(r),s=Cl(i),l=this.h16_1>0?this.h16_1-1|0:this.h16_1,u=this.h16_1===C(this.x1g())||l<0?"EOF":kr(rr(this.x1g(),l)),f="Expected "+s+", but had '"+u+"' instead";this.a1c(f,l)}i1d(){var r=this.x1g(),e=this.h16_1;r:for(;;){if(e=this.y1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.h16_1=e,tt(t)}return this.h16_1=e,10}y1d(r){var e=this.a1h();e=this.y1g(e);var t=C(this.x1g())-e|0;if(t<4||e===-1)return!1;var a=0;if(a<=3)do{var i=a;if(a=a+1|0,G("null",i)!==rr(this.x1g(),e+i|0))return!1}while(a<=3);return t>4&&tt(rr(this.x1g(),e+4|0))===0?!1:(r&&(this.h16_1=e+4|0),!0)}f1e(r,e){return r=r===o?!0:r,e===o?this.y1d(r):e.y1d.call(this,r)}z1d(r){var e=this.i1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.l1d()}else{if(e!==1)return null;t=this.k1d()}var a=t;return this.j16_1=a,a}d1h(){this.j16_1=null}e1h(r,e){var t=this.x1g();return w(Ln(t,r,e))}k1d(){return this.j16_1!=null?Zd(this):this.c1e()}consumeString2(r,e,t){for(var a=t,i=e,s=rr(r,a),l=!1;s!==34;)s===92?(l=!0,a=this.y1g(Lq(this,i,a)),a===-1&&this.a1c("Unexpected EOF",a),i=a):(a=a+1|0,a>=C(r)&&(l=!0,this.w1g(i,a),a=this.y1g(a),a===-1&&this.a1c("Unexpected EOF",a),i=a)),s=rr(r,a);var u;l?u=_1(this,i,a):u=this.e1h(i,a);var f=u;return this.h16_1=a+1|0,f}d1e(){var r=this.l1d();return r==="null"&&Mq(this)&&this.a1c("Unexpected 'null' value instead of string literal"),r}l1d(){if(this.j16_1!=null)return Zd(this);var r=this.a1h();(r>=C(this.x1g())||r===-1)&&this.a1c("EOF",r);var e=tt(rr(this.x1g(),r));if(e===1)return this.k1d();e!==0&&this.a1c("Expected beginning of the string, but got "+kr(rr(this.x1g(),r)));for(var t=!1;tt(rr(this.x1g(),r))===0;)if(r=r+1|0,r>=C(this.x1g())){t=!0,this.w1g(this.h16_1,r);var a=this.y1g(r);if(a===-1)return this.h16_1=r,_1(this,0,0);r=a}var i;t?i=_1(this,this.h16_1,r):i=this.e1h(this.h16_1,r);var s=i;return this.h16_1=r,s}w1g(r,e){this.k16_1.ee(this.x1g(),r,e)}b1e(r){var e=A.m(),t=this.i1d();if(t!==8&&t!==6)return this.l1d(),ur;r:for(;;){if(t=this.i1d(),t===1){r?this.l1d():this.c1e();continue r}var a=t;if(a===8||a===6?e.n(t):a===9?(z1(e)!==8&&this.a1c("found ] instead of }"),pd(e)):a===7?(z1(e)!==6&&this.a1c("found } instead of ]"),pd(e)):a===10&&this.a1c("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.n1d(),e.c1()===0)return ur}}toString(){return"JsonReader(source='"+w(this.x1g())+"', currentPosition="+this.h16_1+")"}a1e(r){var e=this.e1h(0,this.h16_1),t=ez(e,r);this.z1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}z1b(r,e,t){throw aq(this,r,e,this.i16_1.p1c(),t,this.x1g())}a1c(r,e,t,a){return e=e===o?this.h16_1:e,t=t===o?null:t,a===o?this.z1b(r,e,t):a.z1b.call(this,r,e,t)}h1e(){var r=this.a1h();r=this.y1g(r),(r>=C(this.x1g())||r===-1)&&this.a1c("EOF");var e;rr(this.x1g(),r)===34?(r=r+1|0,r===C(this.x1g())&&this.a1c("EOF"),e=!0):e=!1;var t=e,a=new b(0,0),i=new b(0,0),s=!1,l=!1,u=!1,f=r;r:for(;r!==C(this.x1g());){var c=rr(this.x1g(),r);if((c===101||c===69)&&!u){r===f&&this.a1c("Unexpected symbol '"+kr(c)+"' in numeric literal",r),l=!0,u=!0,r=r+1|0;continue r}if(c===45&&u){r===f&&this.a1c("Unexpected symbol '-' in numeric literal",r),l=!1,r=r+1|0;continue r}if(c===43&&u){r===f&&this.a1c("Unexpected symbol '+' in numeric literal",r),l=!0,r=r+1|0;continue r}if(c===45){r!==f&&this.a1c("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=tt(c);if(v!==0)break r;r=r+1|0;var h=Hn(c,48);if(0<=h&&h<=9||this.a1c("Unexpected symbol '"+kr(c)+"' in numeric literal",r-1|0),u){var d=i,p=Tr(d,F(10));i=mr(p,F(h));continue r}var m=a,y=Tr(m,F(10));a=Hr(y,F(h)),ar(a,new b(0,0))>0&&this.a1c("Numeric value overflow")}var x=r!==f;if((f===r||s&&f===(r-1|0))&&this.a1c("Expected numeric literal",r),t&&(x||this.a1c("EOF"),rr(this.x1g(),r)!==34&&this.a1c("Expected closing quotation mark",r),r=r+1|0),this.h16_1=r,u){var k=ie(a)*Jq(i,l);(k>ie(new b(-1,2147483647))||k<ie(new b(0,-2147483648)))&&this.a1c("Numeric value overflow"),Math.floor(k)!==k&&this.a1c("Can't convert "+k+" to Long"),a=Rn(k)}var S;return s?S=a:sr(a,new b(0,-2147483648))?this.a1c("Numeric value overflow"):S=on(a),S}p18(){var r=this.h1e(),e=this.n1d();if(e!==10){var t=this.h16_1>0?this.h16_1-1|0:this.h16_1,a=this.h16_1===C(this.x1g())||t<0?"EOF":kr(rr(this.x1g(),t)),i="Expected input to contain a single valid number, but got '"+a+"' after it";this.a1c(i,t)}return r}g1e(){var r=this.a1h();r===C(this.x1g())&&this.a1c("EOF");var e;rr(this.x1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,a=$q(this,r);return t&&(this.h16_1===C(this.x1g())&&this.a1c("EOF"),rr(this.x1g(),this.h16_1)!==34&&this.a1c("Expected closing quotation mark"),this.h16_1=this.h16_1+1|0),a}}class _w{constructor(){nc=this,this.f1h_1=Es(117),this.g1h_1=new Int8Array(126),Gq(this),Kq(this)}}class Cv extends pw{constructor(r,e){super(e),this.s1h_1=r}x1g(){return this.s1h_1}y1g(r){return r<this.x1g().length?r:-1}n1d(){var r=this.x1g(),e=this.h16_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var a=G(r,t);if(a===32||a===10||a===13||a===9)continue r;return this.h16_1=e,tt(a)}return this.h16_1=r.length,10}j1d(){var r=this.h16_1;if(r===-1)return!1;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.h16_1=r,this.b1h(t)}return this.h16_1=r,!1}a1h(){var r=this.h16_1;if(r===-1)return r;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.h16_1=r,r}w1d(r){this.h16_1===-1&&this.c1h(r);var e=this.x1g(),t=this.h16_1;r:for(;t<e.length;){var a=t;t=a+1|0;var i=G(e,a);if(i===32||i===10||i===13||i===9)continue r;if(this.h16_1=t,i===r)return ur;this.c1h(r)}this.h16_1=-1,this.c1h(r)}c1e(){this.w1d(34);var r=this.h16_1,e=Ks(this.x1g(),34,r);if(e===-1){this.l1d();var t=Cl(1),a=this.h16_1,i=this.h16_1===C(this.x1g())||a<0?"EOF":kr(rr(this.x1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.a1c(s,a)}var l=r;if(l<e)do{var u=l;if(l=l+1|0,G(this.x1g(),u)===92)return this.consumeString2(this.x1g(),this.h16_1,u)}while(l<e);return this.h16_1=e+1|0,Gn(this.x1g(),r,e)}e1e(r,e){var t=this.h16_1;try{if(this.n1d()!==6)return null;var a=this.z1d(e);return a!==r||(this.d1h(),this.n1d()!==5)?null:this.z1d(e)}finally{this.h16_1=t,this.d1h()}}}class mw extends Cv{n1d(){var r=this.x1g(),e=this.a1h();return e>=r.length||e===-1?10:(this.h16_1=e+1|0,tt(G(r,e)))}j1d(){var r=this.a1h();return r>=this.x1g().length||r===-1?!1:this.b1h(G(this.x1g(),r))}w1d(r){var e=this.x1g(),t=this.a1h();(t>=e.length||t===-1)&&(this.h16_1=-1,this.c1h(r));var a=G(e,t);if(this.h16_1=t+1|0,a===r)return ur;this.c1h(r)}i1d(){var r=this.x1g(),e=this.a1h();return e>=r.length||e===-1?10:(this.h16_1=e,tt(G(r,e)))}a1h(){var r=this.h16_1;if(r===-1)return r;var e=this.x1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var a=G(e,r+1|0);if(a===47){r=Ks(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(a===42){r=$o(e,"*/",r+2|0),r===-1?(this.h16_1=e.length,this.a1c('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.h16_1=r,r}}class Ff{constructor(){this.w15_1=Yr.ja(128)}e1b(r){this.w15_1.he(r)}y1a(r){this.w15_1.ga(r)}a1b(r){this.w15_1.fa(r)}k1b(r){Il(this.w15_1,r)}x15(){this.w15_1.ke()}toString(){return this.w15_1.toString()}}var wl;function je(){return wl===o&&new Jy,wl}function U6(n,r){n=n===o?je():n;var e=new Hy(n);r(e);var t=e.g17();return new Gy(t,e.d17_1)}function D6(n){if(D(n.yq(),vu()))return ur;var r=new zv(n.q15_1);n.yq().b15(r)}var Rd;function qv(){if(Rd)return ur;Rd=!0,gw=new Co("NONE",0),yw=new Co("ALL_JSON_OBJECTS",1),ww=new Co("POLYMORPHIC",2)}var gw,yw,ww;function bw(){return qv(),gw}function R6(){return qv(),yw}function kw(){return qv(),ww}function L6(){return xe(),xw}var xw,Av,$f;function Or(n){xe();var r=n instanceof er?n:null,e;return r==null?jv(n,"JsonObject"):e=r,e}function En(n){return xe(),n==null?lo():new mt(n,!0)}function ys(n){xe();var r=n instanceof dn?n:null,e;return r==null?jv(n,"JsonArray"):e=r,e}var bl;function lo(){return bl===o&&new we,bl}function Un(n){xe();var r;return n instanceof we?r=null:r=n.f18(),r}function On(n){xe();var r=n instanceof vr?n:null,e;return r==null?jv(n,"JsonPrimitive"):e=r,e}function M6(n){xe();var r;try{r=li(n)}catch(t){var e;if(t instanceof Nr)e=null;else throw t;r=e}return r}function F6(n){xe();var r;try{r=li(n)}catch(l){var e;if(l instanceof Nr)e=null;else throw l;r=e}var t=r,a;if(t==null)return null;a=t;var i=a,s=He(-2147483648,2147483647);return bo(E(s,fi)?s:g(),i)?rn(i):null}function Tv(n){return xe(),Uq(n.f18())}function jv(n,r){throw xe(),T.v("Element "+w(Dr(n))+" is not a "+r)}function li(n){return xe(),$v(je(),n.f18()).p18()}function $6(n){xe();var r=n.f18();return Lo(r)}function J6(n){return xe(),Lo(n.f18())}var Ld;function xe(){Ld||(Ld=!0,xw=to("kotlinx.serialization.json.JsonUnquotedLiteral",Os()))}function kl(n,r,e){return n.r18(r,En(e))}function H6(n){return n.ip("JsonPrimitive",us(G6)),n.ip("JsonNull",us(K6)),n.ip("JsonLiteral",us(W6)),n.ip("JsonObject",us(Y6)),n.ip("JsonArray",us(Z6)),ur}function G6(){return Ov().u18_1}function K6(){return Bv().v18_1}function W6(){return Sw().w18_1}function Y6(){return pu().x18_1}function Z6(){return Pv().y18_1}var Jf;function gt(){return Jf===o&&new Qy,Jf}var Hf;function Ov(){return Hf===o&&new rw,Hf}var Gf;function V6(){return Gf===o&&new nw,Gf}var Kf;function Pv(){return Kf===o&&new ew,Kf}var Wf;function X6(){return Wf===o&&new tw,Wf}var Yf;function pu(){return Yf===o&&new aw,Yf}var Zf;function Bv(){return Zf===o&&new iw,Zf}function us(n){return new io(n)}var Vf;function Sw(){return Vf===o&&new sw,Vf}function Ki(n){Q6(n)}function _u(n){var r=E(n,hu)?n:null,e;if(r==null)throw gr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+w(Dr(n))));return e=r,e}function Nv(n){_u(n)}function Q6(n){var r=E(n,xv)?n:null,e;if(r==null)throw gr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+w(Dr(n))));return e=r,e}function nt(n){var r=n.x19_1,e=Ba;return ji("original",1,e,rq(),null),r.l2()}function rq(){return Ye(n=>nt(n),1,0,5)}function nq(n,r){return r.q15_1.l17_1?new ow(n,r):new oo(n)}function eq(n,r,e){return n.w1b_1=!r.vo(e)&&r.uo(e).no(),n.w1b_1}function tq(n){return Ye((r,e)=>{var t=n;return eq(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===o?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+w(Ln(n,e,t))}var a=r-30|0,i=r+30|0,s=a<=0?"":".....",l=i>=C(n)?"":".....",u=ln(a,0),f=Bt(i,C(n));return s+w(Ln(n,u,f))+l}function Kr(n,r,e,t,a){return Dv(n,r,e,t,a)}function Uv(n,r){return r=r===o?null:r,Nr.o19(Dv(-1,n,null,r,null),n,-1,null,null,r)}function $a(n,r){r=r===o?"object":r,n.z1b("Trailing comma before the end of JSON "+r,n.h16_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Md(n,r){n.a1c(Rv(r,null),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Ew(n){return so.p1a("Value of type '"+n.lo()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.mo().toString()+"'"),n.lo(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Fd(n,r){return r=r===o?null:r,so.p1a(Rv(n,r),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function $d(n,r){return Rv(n,r)}function Dv(n,r,e,t,a){var i=Yr.f();return n>=0&&i.fa("Unexpected JSON token at offset "+n+": "),i.fa(r),e==null||_t(e)||(i.fa(" at path: "),i.fa(e)),t==null||_t(t)||i.fa(`
`+t),a!=null&&(i.fa(`
JSON input: `),i.fa(a)),i.toString()}function Rv(n,r){return"Unexpected special floating-point value "+w(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function aq(n,r,e,t,a,i){var s;n.g16_1.y17_1?s=w(Jr(i,e)):s=null;var l=s;return Nr.o19(Dv(e,r,t,a,l),r,e,t,l,a)}function iq(n,r){var e;return r==null||_t(r)?e="":e=`
`+r,n+e}function sq(){return Pe(),zw}var zw;function oq(){return Pe(),Iw}var Iw;function Lv(n,r){Pe();var e;if(r.q15_1.i17_1)e=!0;else{var t=n.qo(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(l instanceof Wy){a=!0;break r}}a=!1}e=a}return e}function mu(n,r,e){if(Pe(),Cw(r,n)){var t=e.toLowerCase();return h1(n,r,t)}var a=gu(n,r);if(a!=null)return h1(n,r,e);var i=n.so(e);return i!==-3||!r.q15_1.s17_1?i:h1(n,r,e)}function lq(n,r,e){Pe();var t=gu(n,r);return t==null?n.ro(e):qw(n,r,t)[e]}function uq(n,r){Pe();var e=gu(n,r);return e==null?DC(n):Z_(qw(n,r,e))}function Cw(n,r){return Pe(),n.q15_1.u17_1&&D(r.mo(),Fa())}function h1(n,r,e){Pe();var t=fq(r,n).o2(e);return t??-3}function gu(n,r){return Pe(),D(n.mo(),fu())?r.q15_1.t17_1:null}function qw(n,r,e){Pe();var t=Fw(r),a=oq();return t.c1c(n,a,vq(n,e))}function fq(n,r){Pe();var e=Fw(n),t=sq();return e.c1c(r,t,hq(r,n))}function cq(n,r){Pe();var e=cr.t4(),t=Cw(r,n),a=gu(n,r),i=0,s=n.po();if(i<s)do{var l=i;i=i+1|0;for(var u=n.to(l),f=A.m(),c=u.x();c.y();){var v=c.z();v instanceof Yy&&f.n(v)}var h=zc(f),d=h==null?null:h.d1c_1;if(d!=null)for(var p=0,m=d.length;p<m;){var y=d[p];p=p+1|0;var x;t?x=y.toLowerCase():x=y,Jd(e,n,x,l)}var k;t?k=n.ro(l).toLowerCase():a!=null?k=a.e1c(n,l,n.ro(l)):k=null;var S=k;S==null||Jd(e,n,S,l)}while(i<s);var z;return e.d1()?z=qr():z=e,z}function vq(n,r){return()=>{for(var e=Pn.i1(),t=0,a=n.po(),i=Array(a);t<a;){var s=t,l=n.ro(s),u=r.e1c(n,s,l);if(!e.n(u))throw so.p1a("The transformed name '"+u+"' for property "+l+" already exists "+("in "+w(n)),n.lo());i[s]=u,t=t+1|0}return i}}function hq(n,r){return()=>cq(n,r)}function Jd(n,r,e,t){var a=D(r.mo(),Fa())?"enum value":"property";if((E(n,xn)?n:g()).m2(e))throw Uv("The suggested name '"+e+"' for "+a+" "+r.ro(t)+" is already one of the names for "+a+" "+(r.ro(qe(n,e))+" in "+w(r)));n.s2(e,t)}var Hd;function Pe(){Hd||(Hd=!0,zw=new zi,Iw=new zi)}var Xf,Qf;function Gd(n){var r=ao(n.j1c_1,2);n.h1c_1=Cm(n.h1c_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var a=t,i=n.i1c_1,s=i.length,l=i;D2(l,a,0,0,s),n.i1c_1=a}function dq(n,r,e){var t=r.mo(),a;if(t instanceof Fi?a=!0:a=D(t,jy()),a)throw T.v("Serializer for "+e.uc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.q1c_1||!n.r1c_1)return ur;var i,s;if(D(t,eo())||D(t,cu())?s=!0:s=t instanceof Xn,s?i=!0:i=t instanceof au,i)throw T.v("Serializer for "+e.uc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function pq(n,r,e,t){var a=yu(),i=bq().c1(),s=Array(i),l=mi.b1d(r,n,a,s);l.as(e,t)}function _q(n){var r=n.c1d_1.h1d(6);n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var e=cr.t4();r:for(;n.c1d_1.j1d();){var t=n.d1d_1?n.c1d_1.l1d():n.c1d_1.k1d();n.c1d_1.h1d(5);var a=n.m1d();e.s2(t,a),r=n.c1d_1.n1d();var i=r;if(i!==4){if(i===7)break r;n.c1d_1.a1c("Expected end of the object or comma")}}return r===6?n.c1d_1.h1d(7):r===4&&(n.e1d_1||$a(n.c1d_1),n.c1d_1.h1d(7)),new er(e)}function*mq(n,r,e){var t=n.c1d_1.h1d(6);n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var a=cr.t4();r:for(;n.c1d_1.j1d();){var i=n.d1d_1?n.c1d_1.l1d():n.c1d_1.k1d();n.c1d_1.h1d(5);var s=yield*r.cl(ur,e);a.s2(i,s),t=n.c1d_1.n1d();var l=t;if(l!==4){if(l===7)break r;n.c1d_1.a1c("Expected end of the object or comma")}}return t===6?n.c1d_1.h1d(7):t===4&&(n.e1d_1||$a(n.c1d_1),n.c1d_1.h1d(7)),new er(a)}function Aw(n){var r=n.c1d_1.n1d();n.c1d_1.i1d()===4&&n.c1d_1.a1c("Unexpected leading comma");var e=A.m();r:for(;n.c1d_1.j1d();){var t=n.m1d();if(e.n(t),r=n.c1d_1.n1d(),r!==4){var a=n.c1d_1,i=r===9,s=a.h16_1;if(!i){var l="Expected end of the array or comma";a.a1c(l,s)}break r}}return r===8?n.c1d_1.h1d(9):r===4&&(n.e1d_1||$a(n.c1d_1,"array"),n.c1d_1.h1d(9)),new dn(e)}function xl(n,r){var e;n.d1d_1||!r?e=n.c1d_1.l1d():e=n.c1d_1.k1d();var t=e;return!r&&t==="null"?lo():new mt(t,r)}function gq(n){return Lz(new N_(yq(n)),ur)}function yq(n){return Ye((r,e,t)=>d2(t,function*(a){var i=n.c1d_1.i1d(),s;if(i===1)s=xl(n,!0);else if(i===0)s=xl(n,!1);else if(i===6){var l=n;l.g1d_1=l.g1d_1+1|0,l.g1d_1>=l.f1d_1&&Bs(l.f1d_1);var u=yield*mq(n,r,a);l.g1d_1=l.g1d_1-1|0,s=u}else if(i===8){var f=n;f.g1d_1=f.g1d_1+1|0,f.g1d_1>=f.f1d_1&&Bs(f.f1d_1);var c=Aw(n);f.g1d_1=f.g1d_1-1|0,s=c}else n.c1d_1.a1c("Can't begin reading element, unexpected token");return s}),2)}function Bs(n){throw Uv("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var Kd;function Wi(){if(Kd)return ur;Kd=!0,Tw=new fs("OBJ",0,123,125),jw=new fs("LIST",1,91,93),Ow=new fs("MAP",2,123,125),Pw=new fs("POLY_OBJ",3,91,93)}var Tw,jw,Ow,Pw;function wq(){return Wi(),[yu(),rc(),El(),Nw()]}function bq(){return Wi(),d1==null&&(d1=jE(wq())),d1}var d1;function Bw(n,r){var e=r.mo(),t;if(e instanceof Fi)t=Nw();else if(D(e,eo()))t=rc();else if(D(e,cu())){var a=Sl(r.uo(0),n.yq()),i=a.mo(),s,l;if(i instanceof Xn?l=!0:l=D(i,Fa()),l)s=El();else if(n.q15_1.k17_1)s=rc();else throw Ew(a);t=s}else t=yu();return t}function Sl(n,r){var e;if(D(n.mo(),jy())){var t=dC(r,n),a=t==null?null:Sl(t,r);e=a??n}else n.oo()?e=Sl(n.uo(0),r):e=n;return e}function yu(){return Wi(),Tw}function rc(){return Wi(),jw}function El(){return Wi(),Ow}function Nw(){return Wi(),Pw}function zl(n,r){for(var e=n.qo().x();e.y();){var t=e.z();if(t instanceof Ky)return t.s1d_1}return r.q15_1.q17_1}function kq(n,r,e,t){return Sq(n,r,e,t)}function xq(n){if(n instanceof au){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw gr.o3(w(r))}if(n instanceof Xn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw gr.o3(w(e))}if(n instanceof Fi){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw gr.o3(w(t))}}function Sq(n,r,e,t){if(uq(e.mn(),n).l1(t)){var a=r.mn().lo(),i=e.mn().lo(),s=n.q15_1.x17_1.equals(R6())&&a===i?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+a+"'",l="Class '"+i+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw so.p1a(l,i,u)}}function Eq(n,r,e){return r==null?!1:r.v1d_1===e?(r.v1d_1=null,!0):!1}function zq(n,r){for(;n.ar(r)!==-1;);}function Iq(n){n.a16_1.i1d()===4&&n.a16_1.a1c("Unexpected leading comma")}function Cq(n){var r=!1,e=!!(n.c16_1%2|0);e?n.c16_1!==-1&&(r=n.a16_1.x1d()):n.a16_1.w1d(58);var t;if(n.a16_1.j1d()){if(e)if(n.c16_1===-1){var a=n.a16_1,i=!r,s=a.h16_1;if(!i){var l="Unexpected leading comma";a.a1c(l,s)}}else{var u=n.a16_1,f=r,c=u.h16_1;if(!f){var v="Expected comma after the key-value pair";u.a1c(v,c)}}n.c16_1=n.c16_1+1|0,t=n.c16_1}else r&&!n.y15_1.q15_1.v17_1&&$a(n.a16_1),t=-1;return t}function qq(n,r,e){var t=n.y15_1,a;r:{var i=r.vo(e),s=r.uo(e),l;if(i&&!s.no()?l=n.a16_1.y1d(!0):l=!1,l){a=!0;break r}if(D(s.mo(),Fa())){var u;if(s.no()?u=n.a16_1.y1d(!1):u=!1,u){a=!1;break r}var f=n.a16_1.z1d(n.e16_1.j17_1),c;if(f==null){a=!1;break r}else c=f;var v=c,h=mu(s,t,v),d=!t.q15_1.m17_1&&s.no();if(h===-3&&(i||d)){n.a16_1.k1d(),a=!0;break r}}a=!1}return a}function Aq(n,r){for(var e=n.a16_1.x1d();n.a16_1.j1d();){e=!1;var t=Oq(n);n.a16_1.w1d(58);var a=mu(r,n.y15_1,t),i;if(a!==-3){var s;if(n.e16_1.o17_1&&qq(n,r,a))e=n.a16_1.x1d(),s=!1;else{var l=n.f16_1;return l==null||l.x1b(a),a}i=s}else i=!0;var u=i;u&&(e=Tq(n,r,t))}e&&!n.y15_1.q15_1.v17_1&&$a(n.a16_1);var f=n.f16_1,c=f==null?null:f.y1b();return c??-1}function Tq(n,r,e){return Lv(r,n.y15_1)||Eq(n,n.d16_1,e)?n.a16_1.b1e(n.e16_1.j17_1):(n.a16_1.i16_1.o1c(),n.a16_1.a1e(e)),n.a16_1.x1d()}function jq(n){var r=n.a16_1.x1d(),e;return n.a16_1.j1d()?(n.c16_1!==-1&&!r&&n.a16_1.a1c("Expected end of the array or comma"),n.c16_1=n.c16_1+1|0,e=n.c16_1):(r&&!n.y15_1.q15_1.v17_1&&$a(n.a16_1,"array"),e=-1),e}function Oq(n){var r;return n.e16_1.j17_1?r=n.a16_1.d1e():r=n.a16_1.c1e(),r}function Pq(){return Fv(),Uw}var Uw;function Bq(n,r,e){n.s1c_1.u1a(),n.or(r),n.s1c_1.x1a(58),n.s1c_1.w1a(),n.or(e)}function Mv(n){return Fv(),n.oo()&&Pq().l1(n)}function Nq(n){return Fv(),n.oo()&&D(n,L6())}var Wd;function Fv(){Wd||(Wd=!0,Uw=pa([cv(ru()).mn(),lu(Zs()).mn(),vv(Ql()).mn(),hv(nu()).mn()]))}function p1(){return wu(),Dw}var Dw;function yo(n){wu();var r=n&15,e;if(r<10){var t=48,a=Y(t);e=it(r+a|0)}else{var i=r-10|0,s=97,l=Y(s);e=it(i+l|0)}return e}function Il(n,r){wu(),n.ga(34);var e=0,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0;var s=G(r,i),l=Y(s);l<p1().length&&p1()[l]!=null&&(n.ee(r,e,i),n.fa(p1()[l]),e=i+1|0)}while(t<a);e!==0?n.ee(r,e,r.length):n.fa(r),n.ga(34)}function Uq(n){return wu(),od(n,"true",!0)?!0:od(n,"false",!0)?!1:null}var Yd;function wu(){if(!Yd){Yd=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=yo(e>>12),a=yo(e>>8),i=yo(e>>4),s=yo(e);n[e]="\\u"+kr(t)+kr(a)+kr(i)+kr(s)}while(r<=31);var l=34;n[Y(l)]='\\"';var u=92;n[Y(u)]="\\\\";var f=9;n[Y(f)]="\\t";var c=8;n[Y(c)]="\\b";var v=10;n[Y(v)]="\\n";var h=13;n[Y(h)]="\\r",n[12]="\\f",Dw=n;var d=new Int8Array(128),p=0;if(p<=31)do{var m=p;p=p+1|0,d[m]=1}while(p<=31);var y=34,x=Y(y),k=34,S=Y(k);d[x]=Jn(S);var z=92,I=Y(z),q=92,j=Y(q);d[I]=Jn(j);var P=9,$=Y(P),B=116,N=Y(B);d[$]=Jn(N);var H=8,L=Y(H),J=98,R=Y(J);d[L]=Jn(R);var V=10,K=Y(V),nr=110,W=Y(nr);d[K]=Jn(W);var tr=13,Q=Y(tr),lr=114,X=Y(lr);d[Q]=Jn(X);var xr=102,br=Y(xr);d[12]=Jn(br)}}function Rw(n,r,e,t){var a=t.mn();return new Gi(n,e,a,r,a).kq(t)}function Nn(n,r,e,t){var a=Ae(e,"i")?"an "+e:"a "+e,i="Failed to parse literal '"+r.toString()+"' as "+a+" value",s=n.r1e(t),l;if(n.a18().q15_1.y17_1){var u=w(n.s1e());l=w(Jr(u))}else l=null;var f=l;throw Nr.o19(Kr(-1,i,s,null,f),i,-1,s,f,null)}function Dq(n,r,e,t){var a=n.a18(),i;r:{var s=r.vo(e),l=r.uo(e),u;if(s&&!l.no()?u=t instanceof we:u=!1,u){i=!0;break r}if(D(l.mo(),Fa())){var f;if(l.no()?f=t instanceof we:f=!1,f){i=!1;break r}var c=t instanceof vr?t:null,v=c==null?null:Un(c),h;if(v==null){i=!1;break r}else h=v;var d=h,p=mu(l,a,d),m=!a.q15_1.m17_1&&l.no();if(p===-3&&(s||m)){i=!0;break r}}i=!1}return i}function Rq(n,r){var e="Encountered an unknown key '"+r+"'",t=n.z13(),a="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",i;if(n.a18().q15_1.y17_1){var s=n.l2().toString();i=w(Jr(s))}else i=null;var l=i;throw Nr.o19(Kr(-1,e,t,a,l),e,-1,t,l,a)}function Lq(n,r,e){return n.w1g(r,e),Fq(n,e+1|0)}function _1(n,r,e){n.w1g(r,e);var t=n.k16_1.toString();return n.k16_1.je(0),t}function Zd(n){var r=fn(n.j16_1);return n.j16_1=null,r}function Mq(n){return rr(n.x1g(),n.h16_1-1|0)!==34}function Fq(n,r){var e=r;e=n.y1g(e),e===-1&&n.a1c("Expected escape sequence to continue, got EOF");var t=n.x1g(),a=e;e=a+1|0;var i=rr(t,a);if(i===117)return Lw(n,n.x1g(),e);var s=Y(i),l=Hq(s);return l===0&&n.a1c("Invalid escaped char '"+kr(i)+"'"),n.k16_1.ga(l),e}function Lw(n,r,e){return(e+4|0)>=C(r)?(n.h16_1=e,n.z1g(),(n.h16_1+4|0)>=C(r)&&n.a1c("Unexpected EOF during unicode escape"),Lw(n,r,n.h16_1)):(n.k16_1.ga(it((((wo(n,r,e)<<12)+(wo(n,r,e+1|0)<<8)|0)+(wo(n,r,e+2|0)<<4)|0)+wo(n,r,e+3|0)|0)),e+4|0)}function wo(n,r,e){var t=rr(r,e),a;if(48<=t&&t<=57){var i=Y(t),s=48;a=i-Y(s)|0}else if(97<=t&&t<=102){var l=Y(t),u=97;a=(l-Y(u)|0)+10|0}else if(65<=t&&t<=70){var f=Y(t),c=65;a=(f-Y(c)|0)+10|0}else n.a1c("Invalid toHexChar char '"+kr(t)+"' in unicode escape");return a}function $q(n,r){var e=n.y1g(r);(e>=C(n.x1g())||e===-1)&&n.a1c("EOF");var t=n.x1g(),a=e;e=a+1|0;var i=rr(t,a),s=Y(i)|32,l,u=116;if(s===Y(u))Vd(n,"rue",e),l=!0;else{var f=102;s===Y(f)?(Vd(n,"alse",e),l=!1):n.a1c("Expected valid boolean literal prefix, but had '"+n.l1d()+"'")}return l}function Vd(n,r,e){(C(n.x1g())-e|0)<r.length&&n.a1c("Unexpected end of boolean literal");var t=0,a=C(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i),l=rr(n.x1g(),e+i|0),u=Y(s);u!==(Y(l)|32)&&n.a1c("Expected valid boolean literal prefix, but had '"+n.l1d()+"'")}while(t<=a);n.h16_1=e+r.length|0}function Jq(n,r){var e;switch(r){case!1:var t=-ie(n);e=Math.pow(10,t);break;case!0:var a=ie(n);e=Math.pow(10,a);break;default:Ms();break}return e}function tt(n){var r;if(Y(n)<126){var e=Mw().g1h_1;r=e[Y(n)]}else r=0;return r}function Cl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function Hq(n){return n<117?Mw().f1h_1[n]:0}function Gq(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,da(n,e,117)}while(r<=31);da(n,8,98),da(n,9,116),da(n,10,110),da(n,12,102),da(n,13,114),m1(n,47,47),m1(n,34,34),m1(n,92,92)}function Kq(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,ii(n,e,127)}while(r<=32);ii(n,9,3),ii(n,10,3),ii(n,13,3),ii(n,32,3),It(n,44,4),It(n,58,5),It(n,123,6),It(n,125,7),It(n,91,8),It(n,93,9),It(n,34,1),It(n,92,2)}function da(n,r,e){if(e!==117){var t=Y(e);n.f1h_1[t]=it(r)}}function m1(n,r,e){var t=Y(r);return da(n,t,e)}function ii(n,r,e){n.g1h_1[r]=e}function It(n,r,e){var t=Y(r);return ii(n,t,e)}var nc;function Mw(){return nc===o&&new _w,nc}function $v(n,r){return n.q15_1.w17_1?new mw(r,n.q15_1):new Cv(r,n.q15_1)}function Fw(n){return n.s15_1}function Xd(n){return bs.o7(n)}_(bv,"Json");U(Jy,"Default");_(Hy,"JsonBuilder");_(Gy,"JsonImpl");_(Ky,"JsonClassDiscriminator");_(Wy,"JsonIgnoreUnknownKeys");_(Yy,"JsonNames");_(kv,"JsonConfiguration");_(Co,"ClassDiscriminatorMode");Lr(hu,"JsonDecoder",o,o,[iu,su]);nn(Zy);_(st,"JsonElement",o,o,o,o,o,{0:gt});nn(B6);_(vr,"JsonPrimitive",o,o,o,o,o,{0:Ov});nn(N6);_(dn,"JsonArray",o,o,[zn],o,o,{0:Pv});nn(Vy);_(er,"JsonObject",o,o,[xn],o,o,{0:pu});U(we,"JsonNull",o,o,o,o,o,{0:Bv});_(mt,"JsonLiteral");_(At,"JsonObjectBuilder");_(Xy,"JsonArrayBuilder");U(Qy,"JsonElementSerializer",o,o,[hr]);U(rw,"JsonPrimitiveSerializer",o,o,[hr]);U(nw,"JsonArrayDescriptor",o,o,[be]);U(ew,"JsonArraySerializer",o,o,[hr]);U(tw,"JsonObjectDescriptor",o,o,[be]);U(aw,"JsonObjectSerializer",o,o,[hr]);U(iw,"JsonNullSerializer",o,o,[hr]);U(sw,"JsonLiteralSerializer",o,o,[hr]);Rr(io).no=Da;Rr(io).oo=Ra;Rr(io).qo=Vs;_(io,o,o,o,[be]);Lr(xv,"JsonEncoder",o,o,[sv]);_(Sv,"JsonException");_(Nr,"JsonDecodingException");_(so,"JsonEncodingException");_(oo,"Composer");_(Df,"ComposerForUnsignedNumbers");_(Rf,"ComposerForUnquotedLiterals");_(ow,"ComposerWithPrettyPrint");_(Ev,"JsonElementMarker");U(lw,"Tombstone");U(uw,"RedactedKey");_(fw,"JsonPath");Rr(zv).m15=WI;_(zv,"JsonSerializersModuleValidator",o,o,[Ey]);_(cw,"JsonTreeReader",o,o,o,[1]);_(fs,"LexerMode");_(zi,"Key",zi);_(Lf,"DescriptorSchemaCache",Lf);_(vw,"DiscriminatorHolder");_(Ps,"StreamingJsonDecoder",o,o,[hu]);_(Iv,"JsonDecoderForUnsignedTypes");_(mi,"StreamingJsonEncoder",o,o,[xv]);_(du,"AbstractJsonTreeDecoder",o,o,[hu]);_(Gi,"JsonTreeDecoder");_(Mf,"JsonTreeListDecoder");_(hw,"JsonPrimitiveDecoder");_(dw,"JsonTreeMapDecoder");_(pw,"AbstractJsonLexer");U(_w,"CharMappings");_(Cv,"StringJsonLexer");_(mw,"StringJsonLexerWithComments");_(Ff,"StringJsonWriter",Ff);Av=new Zy;$f=new Vy;Xf=new lw;Qf=new uw;var ai=Math.imul;class $w{constructor(r){this.d1i_1=r}ig(r,e){return this.d1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.d1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class hn{constructor(r,e){e=e===o?null:e,this.e1i_1=r,this.f1i_1=e}}class Jw{constructor(r){this.p1i_1=r}ig(r,e){return this.p1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.p1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Hw{constructor(r){this.v1i_1=r}ig(r,e){return this.v1i_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.v1i_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class ec{constructor(r,e,t){this.l1k_1=r,this.m1k_1=e,this.n1k_1=t}}class Gw{constructor(r,e){this.d1l_1=r,this.e1l_1=e}}class Kw{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,m){h=h===o?fr():h,d=d===o?0:d,p=p===o?!1:p,m=m===o?"":m,this.f1l_1=r,this.g1l_1=e,this.h1l_1=t,this.i1l_1=a,this.j1l_1=i,this.k1l_1=s,this.l1l_1=l,this.m1l_1=u,this.n1l_1=f,this.o1l_1=c,this.p1l_1=v,this.q1l_1=h,this.r1l_1=d,this.s1l_1=p,this.t1l_1=m}}class Ww{constructor(r,e,t){this.u1l_1=r,this.v1l_1=e,this.w1l_1=t}}class Yw{constructor(r){this.x1l_1=r}ig(r,e){return this.x1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.x1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Zw{constructor(r){this.y1l_1=r}ig(r,e){return this.y1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.y1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Vw{constructor(r){this.z1l_1=r}ig(r,e){return this.z1l_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.z1l_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Xw{constructor(r){this.a1m_1=r}ig(r,e){return this.a1m_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.a1m_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class Qw{constructor(r){this.g1m_1=r}u4(){return this.g1m_1.x()}h1m(r){return Kn(r.e1l_1)}v4(r){return this.h1m(r)}}class rb{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,m){e=e===o?fr():e,t=t===o?null:t,a=a===o?fr():a,i=i===o?fr():i,s=s===o?fr():s,l=l===o?fr():l,u=u===o?fr():u,f=f===o?null:f,c=c===o?null:c,v=v===o?fr():v,h=h===o?fr():h,d=d===o?null:d,p=p===o?null:p,m=m===o?null:m,this.y1i_1=e,this.z1i_1=t,this.a1j_1=i,this.b1j_1=s,this.c1j_1=l,this.d1j_1=f,this.e1j_1=c,this.f1j_1=v,this.g1j_1=h,this.h1j_1=d,this.i1j_1=p,this.j1j_1=m,this.k1j_1=fr(),this.l1j_1=u;for(var y=this,x=this.d1j_1,k=x==null?null:x.e1k_1,S=this.h1j_1,z=pe([this.z1i_1,k,S==null?null:S.h1k_1]),I=A.f1(Mr(z,10)),q=z.x();q.y();){var j=q.z(),P=je().v15(j);I.n(P)}y.m1j_1=I;for(var $=this,B=A.m(),N=u.x();N.y();){var H=N.z();H.b1i_1||B.n(H)}$.n1j_1=B,this.o1j_1=qr();var L=this,J;if(!this.n1j_1.d1())J=!0;else{var R;r:{var V;if(E(u,Z)?V=u.d1():V=!1,V){R=!1;break r}for(var K=u.x();K.y();){var nr=K.z();if(nr.c1i_1!=null){R=!0;break r}}R=!1}J=R}L.p1j_1=J,this.q1j_1=dt(a);for(var W=this,tr=A.f1(Mr(r,10)),Q=r.x();Q.y();){var lr=Q.z(),X="/"+Eg(lr,Ai([47]));tr.n(X)}W.r1j_1=tr,this.s1j_1=qr(),this.t1j_1=!1,this.u1j_1=!1;var xr=this;xr.v1j_1=Pn.i1();var br=this;br.w1j_1=A.m(),this.x1j_1=qr()}i1m(r,e,t){this.x1j_1=e,this.k1j_1=t;var a=Or(je().v15(r)),i=UA(this,NA(this,BA(this,a))),s=ir(i,"components"),l=s==null?null:ir(s,"schemas"),u=l??qr();this.o1j_1=u,this.s1j_1=eT(this,i,u);var f=this,c;if(Ol(i))c=!0;else{var v=this.m1j_1,h;r:{var d;if(E(v,Z)?d=v.d1():d=!1,d){h=!1;break r}for(var p=v.x();p.y();){var m=p.z();if(Ol(m)){h=!0;break r}}h=!1}c=h}f.t1j_1=c;var y=this,x;if(jl(i,Ao()))x=!0;else{var k=this.m1j_1,S;r:{var z;if(E(k,Z)?z=k.d1():z=!1,z){S=!1;break r}for(var I=k.x();I.y();){var q=I.z();if(jl(q,Ao())){S=!0;break r}}S=!1}x=S}y.u1j_1=x;var j=Dn(this.t1j_1?wb().q2():fr(),this.u1j_1?Ao().q2():fr());this.v1j_1.v2(),this.w1j_1.v2();for(var P=YA(this,u)+MA(this,u)+JA(this,u)+HA(this,u),$=u.p2(),B=A.f1(Mr($,10)),N=$.x();N.y();){var H=N.z(),L=Kn(H);B.n(L)}for(var J=B,R=ir(i,"paths"),V=(R??qr()).p2(),K=A.f1(Mr(V,10)),nr=V.x();nr.y();){var W=nr.z(),tr=Db(this,W);K.n(tr)}var Q=Dn(Dn(J,K),Kv());if(!(this.c1j_1.d1()||!Q.l1("ErrorCode"))){var lr="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw gr.o3(w(lr))}if(!(this.d1j_1==null||!Q.l1("CurrentUser")&&!Q.l1("currentUser"))){var X="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw gr.o3(w(X))}if(!(this.f1j_1.d1()||this.d1j_1!=null)){var xr="permissions needs currentUser, which says who the permissions belong to.";throw gr.o3(w(xr))}if(!(this.f1j_1.d1()||!Q.l1("Permission")&&!Q.l1("can"))){var br="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw gr.o3(w(br))}if(!(this.h1j_1==null||!Q.l1("UserPreferences")&&!Q.l1("preferences"))){var dr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw gr.o3(w(dr))}if(!(this.g1j_1.d1()||this.d1j_1!=null)){var Er="guards needs currentUser, which says who is signed in.";throw gr.o3(w(Er))}var zr;if(this.g1j_1.d1())zr=!0;else{var Pr=tp(),Br;r:{var pr;if(E(Pr,Z)?pr=Pr.d1():pr=!1,pr){Br=!0;break r}for(var Gr=Pr.x();Gr.y();){var en=Gr.z();if(Q.l1(en)){Br=!1;break r}}Br=!0}zr=Br}if(!zr){var Zr="guards exports "+M(tp())+", and the generated client already uses one of the names.";throw gr.o3(w(Zr))}if(!(this.n1j_1.d1()||!Q.l1("cookies"))){var _r="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw gr.o3(w(_r))}if(!(sb(this.l1j_1).d1()||!Q.l1("cookieConsent"))){var Fr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw gr.o3(w(Fr))}for(var Vr=this.n1j_1,Xr=cr.t4(),$r=Vr.x();$r.y();){var tn=$r.z(),_n=tc(tn.t1h_1),wn=Xr.o2(_n),mn;if(wn==null){var Qn=A.m();Xr.s2(_n,Qn),mn=Qn}else mn=wn;var re=mn;re.n(tn)}var ne=Xr.q2(),ce;r:{for(var Se=ne.x();Se.y();){var Ee=Se.z();if(Ee.c1()>1){ce=Ee;break r}}ce=null}var Ne=ce;if(Ne!=null){var Ze="The cookies "+M(Ne," and ",o,o,o,o,yT)+" would both be called "+tc(Ec(Ne).t1h_1)+" in TypeScript.";throw gr.o3(w(Ze))}var kt=this.b1j_1,ee;r:{for(var An=kt.x();An.y();){var Bn=An.z();if(Q.l1(Bn.w1i_1)){ee=Bn;break r}}ee=null}var bn=ee;if(bn!=null){var Jt="constants("+bn.w1i_1+") would be exported as '"+bn.w1i_1+"', which the generated client already uses. Rename the object.";throw gr.o3(w(Jt))}var ve=Fe("client.ts")+FA(this),Ve=this.i1j_1,xt;Ve==null?xt=null:xt=`
reportErrors('`+Ve+`');
`;var Ht=xt,Zi=ve+(Ht??""),Gt=this.j1j_1,Xe;Gt==null?Xe=null:Xe=`
`+Gt+`
`;for(var he=Xe,Kt=O("client.ts",Zi+(he??"")),Ja=O("form.ts",Fe("form.ts")+lT(this)),Ha=O("form-state.svelte.ts",Fe("form-state.svelte.ts")),Wt=O("pending-writes.svelte.ts",Fe("pending-writes.svelte.ts")),Ga=this.c1j_1.d1()&&this.f1j_1.d1()?P:_a(P,`export {};
`),Ue=xa(this.v1j_1),Yt=O("types.ts",Ga+M(Ue,"",o,o,o,o,wT)+oT(this)+Ub(this,"Permission",this.f1j_1)),Zt=ir(i,"paths"),Vt=Zt??qr(),Ka=Oo(u.p2(),"LucideIcon"),Xt=this.s1j_1.q2(),St=A.f1(Mr(Xt,10)),Qt=Xt.x();Qt.y();){var Wa=Qt.z(),Vi=Wa.l1k_1;St.n(Vi)}var Ya=[Kt,Ja,Ha,Wt,Yt,O("services.ts",aT(this,Vt,Ph(Ph(Ka,St),j)))],Qe;t.d1()?Qe=[]:Qe=[O("loads.ts",cA(t,this.w1j_1))];var Xi=Qe,Qi=Fe("index.ts")+(this.b1j_1.d1()?"":`export * from './constants.js';
`)+(t.d1()?"":"export * from './"+_a("loads.ts",".ts")+`.js';
`)+(this.p1j_1?`export * from './cookies.js';
`:"")+(this.d1j_1!=null?"export * from './"+_a("current-user.svelte.ts",".ts")+`.js';
`:""),ra;this.g1j_1.d1()?ra="":ra="export * from './"+_a("guards.ts",".ts")+`.js';
`;var uo=[O("index.ts",Qi+ra+(this.h1j_1!=null?"export * from './"+_a("preferences.svelte.ts",".ts")+`.js';
`:""))],rs;this.b1j_1.d1()?rs=[]:rs=[O("constants.ts",kA(this.b1j_1))];var fo=rs,ns;this.p1j_1?ns=[O("cookies.ts",Xq(this.l1j_1))]:ns=[];var zu=ns,es=this.d1j_1,Et;es==null?Et=null:Et=[O("current-user.svelte.ts",KA(this,es))];var Za=Et,Va;Za==null?Va=[]:Va=Za;var Iu=Va,Xa;this.g1j_1.d1()?Xa=[]:Xa=[O("guards.ts",$A(this))];var co=Xa,vo=this.h1j_1,Qa;vo==null?Qa=null:Qa=[O("preferences.svelte.ts",GA(this,vo))];var ri=Qa,ts;return ri==null?ts=[]:ts=ri,PA(this,_2([Ya,Xi,uo,fo,zu,Iu,co,ts,[O("openapi.json",mb().t15(Av.c18(),i)+`
`)]]))}j1m(r,e,t,a){return e=e===o?qr():e,t=t===o?fr():t,a===o?this.i1m(r,e,t):a.i1m.call(this,r,e,t)}}class qo extends _e{constructor(r,e,t){super(r,e),this.d1m_1=t}x1g(){return Fe(this.d1m_1)}}class bu{constructor(r,e,t,a,i,s,l){a=a===o?fr():a,i=i===o?fr():i,s=s===o?0:s,l=l===o?!1:l,this.g1i_1=r,this.h1i_1=e,this.i1i_1=t,this.j1i_1=a,this.k1i_1=i,this.l1i_1=s,this.m1i_1=l}toString(){return"GeneratedOperation(name="+this.g1i_1+", method="+this.h1i_1+", path="+this.i1i_1+", pathParameters="+w(this.j1i_1)+", pathTypes="+w(this.k1i_1)+", optionalSlots="+this.l1i_1+", needsInput="+this.m1i_1+")"}hashCode(){var r=me(this.g1i_1);return r=ai(r,31)+me(this.h1i_1)|0,r=ai(r,31)+me(this.i1i_1)|0,r=ai(r,31)+wr(this.j1i_1)|0,r=ai(r,31)+wr(this.k1i_1)|0,r=ai(r,31)+this.l1i_1|0,r=ai(r,31)+Uc(this.m1i_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof bu)||this.g1i_1!==r.g1i_1||this.h1i_1!==r.h1i_1||this.i1i_1!==r.i1i_1||!D(this.j1i_1,r.j1i_1)||!D(this.k1i_1,r.k1i_1)||this.l1i_1!==r.l1i_1||this.m1i_1!==r.m1i_1)}}class nb{constructor(r){this.k1m_1=r}ig(r,e){return this.k1m_1(r,e)}compare(r,e){return this.ig(r,e)}g3(){return this.k1m_1}equals(r){var e;if(r!=null&&E(r,cn)){var t;r!=null&&E(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return wr(this.g3())}}class eb{v1k(r){return"Must be at least "+vp(this,r)+"."}w1k(r){return"Must be at most "+vp(this,r)+"."}b1l(r,e){return"Must be "+(e?"greater than":"at least")+" "+Dt(r)+"."}c1l(r,e){return"Must be "+(e?"less than":"at most")+" "+Dt(r)+"."}x1k(r){return"Must match "+r+"."}}class et{constructor(r,e){this.e1m_1=r,this.f1m_1=e}}class si{constructor(r,e,t){this.y1k_1=r,this.z1k_1=e,this.a1l_1=t}}class tb{constructor(){fc=this,this.o1k_1=new si("email",jn(new et("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.p1k_1=new si("uri",jn(new et("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.q1k_1=new si("phone",jn(new et("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.r1k_1=new si("slug",jn(new et("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.s1k_1=new si("strong-password",sn([new et("^[\\s\\S]{10,}$","at least 10 characters"),new et("[a-z]","a lowercase letter"),new et("[A-Z]","an uppercase letter"),new et("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.t1k_1=sn([this.o1k_1,this.p1k_1,this.q1k_1,this.r1k_1,this.s1k_1])}u1k(r){var e=this.t1k_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(i.y1k_1===r){t=i;break r}}t=null}return t}}function Wq(){return fe(),ab}var ab;function Yq(){return fe(),ib}var ib;function de(n){return fe(),"'"+ae(ae(ae(ae(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function tc(n){fe();var r=Yq(),e=Eg(n,Ai([46,95,45])),t=r.ff(e,Qq);return Wq().af(t)?t:de(n)}function Zq(n){fe();var r;switch(n.u1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=M(n.v1h_1," | ",o,o,o,o,rA);break;default:r="number";break}return r}function Vq(n){fe();var r=Zq(n),e=n.u1h_1==="string"||n.u1h_1==="enum",t="kind: "+de(n.u1h_1),a;n.u1h_1==="enum"?a="values: ["+M(n.v1h_1,", ",o,o,o,o,nA)+"]":a=null;var i=a,s=n.w1h_1,l;s==null?l=null:l="default: "+(e?de(s):s);var u=l,f=n.x1h_1,c;f==null?c=null:c="maxAge: "+f.toString();var v=c,h="path: "+de(n.y1h_1),d="sameSite: "+de(n.z1h_1),p="secure: "+n.a1i_1,m=n.c1i_1,y;m==null?y=null:y="category: "+de(m);var x=pe([t,i,u,v,h,d,p,y]),k=n.w1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+tc(n.t1h_1)+": typedCookie"+k+"("+de(n.t1h_1)+", { "+M(x,", ")+" })"}function sb(n){fe();for(var r=A.m(),e=n.x();e.y();){var t=e.z(),a=t.c1i_1;a==null||r.n(a)}return xa(yi(r))}function Xq(n){fe();for(var r=A.m(),e=n.x();e.y();){var t=e.z();t.b1i_1||r.n(t)}var a=eA,i=new $w(a),s=Mt(r,i),l=sb(n),u="consentStore",f;l.d1()?f=null:f=u;var c=f,v="typedCookie",h;s.d1()?h=null:h=v;for(var d=h,p=pe([c,d]),m=A.m(),y=s.x();y.y();){var x=y.z();x.c1i_1!=null&&m.n(x)}var k=m,S=M(k,", ",o,o,o,o,tA),z=Yr.f();return z.fa("import { "+M(p,", ")+` } from './client.js';
`),s.d1()||z.fa(`
export const cookies = {
`+M(s,`,
`,o,o,o,o,aA())+`
};
`),l.d1()||z.fa(`
export const cookieConsent = consentStore([`+M(l,", ",o,o,o,o,iA)+"] as const, ["+S+`]);
`),z.toString()}function Qq(n){return fe(),n.gg().e1(1).toUpperCase()}function rA(n){return fe(),de(n)}function nA(n){return fe(),de(n)}function eA(n,r){fe();var e=n.t1h_1,t=r.t1h_1;return bt(e,t)}function tA(n){fe();var r=de(n.t1h_1),e=de(n.y1h_1),t=n.c1i_1,a=t??"";return"{ name: "+r+", path: "+e+", category: "+de(a)+" }"}function aA(){return Ye(n=>Vq(n),1,0,7,"cookieEntry")}function iA(n){return fe(),de(n)}var Qd;function fe(){Qd||(Qd=!0,ab=Te.ze("[A-Za-z_$][A-Za-z0-9_$]*"),ib=Te.ze("[._-]+([A-Za-z0-9])"))}function sA(){return Jv(),ob}var ob;function oA(){return Jv(),lb}var lb;function lA(n,r){Jv();var e=sA(),t=Yr.f(),a=0,i=C(n);if(a<i)do{var s=a;a=a+1|0;var l=rr(n,s);LS(l)&&t.ga(l)}while(a<i);var u=t.toString().toLowerCase(),f=e.o2(u),c;r==null?c=null:c=oA().o2(r);var v=c,h;if(v==null)h=f;else if(f==null)h=v;else{var d=v.e1i_1,p=d??f.e1i_1,m=v.f1i_1;h=new hn(p,m??f.f1i_1)}return h}var rp;function Jv(){if(!rp){rp=!0;for(var n=cr.t4(),r=sn(["email","emailaddress","mail"]).x();r.y();){var e=r.z();n.s2(e,new hn("email","email"))}for(var t=sn(["password","currentpassword"]).x();t.y();){var a=t.z();n.s2(a,new hn("current-password","password"))}for(var i=sn(["newpassword","passwordrepeat","repeatpassword","confirmpassword","passwordconfirmation"]).x();i.y();){var s=i.z();n.s2(s,new hn("new-password","password"))}for(var l=sn(["name","fullname","displayname"]).x();l.y();){var u=l.z();n.s2(u,new hn("name"))}for(var f=sn(["givenname","firstname","forename"]).x();f.y();){var c=f.z();n.s2(c,new hn("given-name"))}for(var v=sn(["familyname","lastname","surname"]).x();v.y();){var h=v.z();n.s2(h,new hn("family-name"))}for(var d=sn(["username","login","loginname"]).x();d.y();){var p=d.z();n.s2(p,new hn("username"))}for(var m=sn(["phone","phonenumber","tel","telephone","mobile","mobilephone"]).x();m.y();){var y=m.z();n.s2(y,new hn("tel","tel"))}for(var x=sn(["street","streetaddress","address","addressline"]).x();x.y();){var k=x.z();n.s2(k,new hn("street-address"))}for(var S=sn(["postalcode","postcode","zip","zipcode"]).x();S.y();){var z=S.z();n.s2(z,new hn("postal-code"))}for(var I=sn(["city","town","locality"]).x();I.y();){var q=I.z();n.s2(q,new hn("address-level2"))}for(var j=sn(["country","countryname"]).x();j.y();){var P=j.z();n.s2(P,new hn("country-name"))}for(var $=sn(["organization","organisation","company"]).x();$.y();){var B=$.z();n.s2(B,new hn("organization"))}for(var N=sn(["birthday","birthdate","dateofbirth"]).x();N.y();){var H=N.z();n.s2(H,new hn("bday"))}for(var L=sn(["url","website","homepage"]).x();L.y();){var J=L.z();n.s2(J,new hn("url","url"))}for(var R=sn(["onetimecode","otp","verificationcode"]).x();R.y();){var V=R.z();n.s2(V,new hn("one-time-code"))}ob=n.m6(),lb=Gs([O("email",new hn("email","email")),O("uri",new hn("url","url")),O("phone",new hn("tel","tel")),O("strong-password",new hn("new-password","password"))])}}function uA(){return Be(),ub}var ub;function fA(n){Be();var r=uA().df(n);return jc(qi(r,vA))}function ac(n){Be();for(var r=Te.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}var i=e,s=M(i,"",o,o,o,o,hA),l;return C(s)===0?l="Home":l=s,"load"+l}function cA(n,r){Be();for(var e=ln(Mr(r,10),16),t=cr.na(e),a=r.x();a.y();){var i=a.z(),s=i.h1i_1+" "+i.i1i_1;t.s2(s,i)}for(var l=t,u=cr.t4(),f=n.x();f.y();){var c=f.z(),v=ac(c.n1i_1),h=u.o2(v),d;if(h==null){var p=A.m();u.s2(v,p),d=p}else d=h;var m=d;m.n(c)}var y=u.q2(),x;r:{for(var k=y.x();k.y();){var S=k.z();if(S.c1()>1){x=S;break r}}x=null}var z=x;if(z!=null){var I="The pages "+M(z," and ",o,o,o,o,dA)+" would both get the load "+ac(Ec(z).n1i_1)+".";throw gr.o3(w(I))}var q=pA,j=new Jw(q),P=Mt(n,j),$=M(P,`
`,o,o,o,o,wA(l));return`import { inlinePageData } from './client.js';
import { apiWith } from './services.js';

`+$}function vA(n){return Be(),n.gg().e1(1)}function hA(n){Be();var r;if(C(n)>0){var e=G(n,0),t=H1(e),a=We(n,1);r=kr(t)+a}else r=n;return r}function dA(n){return Be(),"'"+n.n1i_1+"'"}function pA(n,r){Be();var e=n.n1i_1,t=r.n1i_1;return bt(e,t)}function _A(n){return Be(),"["+n+"]"}function mA(n){return Be(),n+": string"}function gA(n){return Be(),"    "+n}function yA(n){return Be(),"inline."+n}function wA(n){return r=>{for(var e=fA(r.n1i_1),t=r.o1i_1,a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=n.o2(s.u1i()),u;if(l==null){var f="pageLoad: '"+r.n1i_1+"' loads "+s.u1i()+", which is not part of the generated client. Only routes under the API prefixes can be loaded.";throw gr.o3(w(f))}else u=l;var c=u;if(c.m1i_1){var v="pageLoad: "+s.u1i()+" needs a body, query or header that a page load cannot fill. "+("Write the load of '"+r.n1i_1+"' yourself.");throw gr.o3(w(v))}for(var h=c.j1i_1,d=A.f1(Mr(h,10)),p=0,m=h.x();m.y();){var y=m.z(),x=p;p=x+1|0;var k=Pi(x),S=s.t1i_1.o2(y),z=S??y;if(!e.l1(z)){var I="pageLoad: "+s.u1i()+" needs the path parameter '"+y+"', and the page '"+r.n1i_1+"' has ",q;e.d1()?q="none":q=M(e,o,o,o,o,o,_A);var j=I+q+('. Map it with params = mapOf("'+y+'" to "<page parameter>").');throw gr.o3(w(j))}var P="event.params."+z,$=wx(c.k1i_1,k)==="number"?"Number("+P+")":P;d.n($)}var B=d,N=c.l1i_1,H=A.f1(N),L=0;if(L<N)do{L=L+1|0;var J="undefined";H.n(J)}while(L<N);var R=Pt(Dn(B,H),"{ silent: true }"),V="        api."+c.g1i_1+"("+M(R)+")";a.n(V)}for(var K=a,nr=r.o1i_1,W=A.f1(Mr(nr,10)),tr=nr.x();tr.y();){var Q=tr.z(),lr=Q.q1i_1;W.n(lr)}var X=W,xr;e.d1()?xr="":xr="; params: { "+M(e,"; ",o,o,o,o,mA)+" }";var br=xr,dr="export async function "+ac(r.n1i_1)+"(event: { fetch: typeof fetch; url: URL"+br+` }) {
    const api = apiWith(event);
    const load = () =>
        Promise.all([
`,Er=dr+M(K,`,
`,o,o,o,o,gA)+`
        ]);
    const inline = inlinePageData(event.url.pathname);
`+("    const ["+M(X)+`] = inline
`);return Er+("        ? ("+M(X,", ","[","]",o,o,yA)+` as Awaited<ReturnType<typeof load>>)
`)+`        : await load();
`+("    return { "+M(X)+` };
`)+`}
`}}var np;function Be(){np||(np=!0,ub=Te.ze("\\[([A-Za-z_][A-Za-z0-9_]*)]"),Te.ze("^[A-Za-z_]"))}function bA(){return Yi(),fb}var fb;function Hv(n,r){Yi();var e;if(n instanceof vr)e=n.e18()?cb(n.f18()):n.f18();else if(n instanceof dn)e=M(n,", ","[","]",o,o,xA(r));else if(n instanceof er){var t;if(n.d1())t="{}";else{var a=n.r2(),i=`
`+r+"}";t=M(a,`,
`,`{
`,i,o,o,SA(r))}e=t}else Ms();return e}function cb(n){return Yi(),"'"+ae(ae(ae(ae(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function kA(n){Yi();var r=EA,e=new Hw(r),t=Mt(n,e);return M(t,`
`,o,o,o,o,zA)}function xA(n){return r=>Hv(r,n)}function SA(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(bA().af(e)?e:cb(e))+": "+Hv(t,n+"    ")}}function EA(n,r){Yi();var e=n.w1i_1,t=r.w1i_1;return bt(e,t)}function zA(n){return Yi(),"export const "+n.w1i_1+" = "+Hv(new er(n.x1i_1),"")+` as const;
`}var ep;function Yi(){ep||(ep=!0,fb=Te.ze("[A-Za-z_$][A-Za-z0-9_$]*"))}function vb(){return Sr(),hb}var hb;function Gv(){return Sr(),db}var db;function pb(){return Sr(),_b}var _b;function mb(){return Sr(),gb}var gb;function tp(){return Sr(),yb}var yb;function wb(){return Sr(),bb}var bb;function Ao(){return Sr(),kb}var kb;function IA(){return Sr(),xb}var xb;function CA(){return Sr(),Sb}var Sb;function qA(){return Sr(),Eb}var Eb;function Kv(){return Sr(),zb}var zb;function AA(){return Sr(),Ib}var Ib;function TA(){return Sr(),Cb}var Cb;function jA(){return Sr(),qb}var qb;function OA(){return Sr(),Ab}var Ab;function PA(n,r){var e=Gs(r.slice());return vt(e,O(".gitattributes",`# Generated by ktor-svelte. Do not edit.
# See https://nijasc.github.io/ktor-svelte/features/typescript
`+Y_(r,"",o,o,o,o,bT)))}function BA(n,r){for(var e=ir(r,"paths"),t=e??qr(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();WA(n,l)&&a.s2(s.k2(),s.l2())}var u=Su(a);return new er(vt(r,O("paths",new er(u))))}function NA(n,r){if(n.a1j_1.d1())return r;for(var e=ir(r,"components"),t=e??new er(qr()),a=ir(t,"schemas"),i=a??qr(),s=Vc(i),l=n.a1j_1.x();l.y();){var u=l.z(),f=u.y1j_1,c=s.o2(f);if(c==null){var v=je().v15(u.z1j_1);s.s2(f,v)}}for(var h=ir(r,"paths"),d=h??qr(),p=cr.na(d.c1()),m=d.r2().x();m.y();){for(var y=m.z(),x=y.k2(),k=y.l2(),S=Or(k),z=cr.na(S.c1()),I=S.r2().x();I.y();){var q=I.z(),j=q.k2(),P=q.k2(),$=q.l2(),B,N;vb().l1(P)?N=$ instanceof er:N=!1,N?B=LA(n,$):B=$;var H=B;z.s2(j,H)}var L=new er(z);p.s2(x,L)}var J=p;return new er(vt(vt(r,O("paths",new er(J))),O("components",new er(vt(t,O("schemas",new er(s)))))))}function UA(n,r){var e=ir(r,"components"),t;if(e==null)return r;t=e;for(var a=t,i=ir(a,"schemas"),s=i??qr(),l=cr.t4(),u=s.r2().x();u.y();){var f=u.z(),c=f.l2(),v;c instanceof er?v=DA(n,c):v=!1,v&&l.s2(f.k2(),f.l2())}for(var h=cr.na(l.c1()),d=l.r2().x();d.y();){var p=d.z(),m=p.k2(),y=p.l2(),x=new er(vt(Or(y),O("type",En("object"))));h.s2(m,x)}var k=h;if(k.d1())return r;for(var S=cr.t4(),z=s.r2().x();z.y();){var I=z.z(),q=I.k2();(E(k,xn)?k:g()).m2(q)||S.s2(I.k2(),I.l2())}for(var j=S.r2(),P=ln(Mr(j,10),16),$=cr.na(P),B=j.x();B.y();){var N=B.z(),H=N.k2(),L=N.l2(),J=L instanceof er?L:null,R=O(J==null?null:ap(n,J),H);$.s2(R.lh_1,R.mh_1)}for(var V=$,K=cr.na(k.c1()),nr=k.r2().x();nr.y();){var W=nr.z(),tr=W.k2(),Q=W.k2(),lr=W.l2(),X=V.o2(ap(n,lr)),xr=X??Q;K.s2(tr,xr)}for(var br=K,dr=cr.t4(),Er=s.r2().x();Er.y();){var zr=Er.z(),Pr=zr.k2();(br.o2(Pr)==null||br.o2(Pr)===Pr)&&dr.s2(zr.k2(),zr.l2())}for(var Br=cr.na(dr.c1()),pr=dr.r2().x();pr.y();){var Gr=pr.z(),en=Gr.k2(),Zr=Gr.k2(),_r=Gr.l2(),Fr=k.o2(Zr),Vr=Fr??_r;Br.s2(en,Vr)}var Xr=Br,$r=new er(vt(a,O("schemas",new er(Xr))));return Or(uc(br,n,new er(vt(r,O("components",$r)))))}function DA(n,r){var e;if(D(dt(yt(n,r)),pa(["object","null"]))){var t=ir(r,"properties");e=!(t??qr()).d1()}else e=!1;return e}function ap(n,r){return new er(mE(r,"title"))}function RA(n,r){var e=new At,t=new Xy,a=new At;kl(a,"$ref","#/components/schemas/"+r);var i=a.g17();t.t18(i);var s=new At;kl(s,"type","null");var l=s.g17();t.t18(l);var u=t.g17();return e.r18("oneOf",u),e.g17()}function LA(n,r){for(var e=ir(r,"responses"),t=e??qr(),a=Vc(t),i=n.a1j_1.x();i.y();){var s=i.z(),l=new At;kl(l,"description","");var u=new At,f="application/json",c=new At,v=new At;kl(v,"$ref","#/components/schemas/"+s.y1j_1);var h=v.g17();c.r18("schema",h);var d=c.g17();u.r18(f,d);var p=u.g17();l.r18("content",p);for(var m=l.g17(),y=s.a1k_1.x();y.y();){var x=y.z(),k=x.toString(),S=a.o2(k);if(S==null){var z=m;a.s2(k,z)}}}return new er(vt(r,O("responses",new er(a))))}function MA(n,r){var e=n.z1i_1,t;if(e==null)return"";t=e;var a=t,i=Or(je().v15(a)),s=Pn.i1();return`
`+Wv(n,"PublicConfig",i,s,r)}function FA(n){var r=n.e1j_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+ae(ae(t,"\\","\\\\"),"'","\\'")+`';
`}function $A(n){var r=n.g1j_1,e;r:{var t;if(E(r,Z)?t=r.d1():t=!1,t){e=!1;break r}for(var a=r.x();a.y();){var i=a.z();if(i.c1k_1!=null){e=!0;break r}}e=!1}var s=e,l=n.g1j_1,u=kT,f=new Yw(u),c=Mt(l,f),v=M(c,"",o,o,o,o,xT),h=n.e1j_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.e1j_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.e1j_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+_a("current-user.svelte.ts",".ts")+`.js';
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
`}function JA(n,r){var e=n.d1j_1,t;if(e==null)return"";t=e;var a=t;return Tb(n,"CurrentUser",a.d1k_1,a.e1k_1,r)}function HA(n,r){var e=n.h1j_1,t;if(e==null)return"";t=e;var a=t;return Tb(n,"UserPreferences",a.g1k_1,a.h1k_1,r)}function Tb(n,r,e,t,a){var i=a.p2(),s;r:{for(var l=i.x();l.y();){var u=l.z();if(Kn(u)===e){s=u;break r}}s=null}var f=s;if(f!=null)return`
export type `+r+" = "+Kn(f)+`;
`;var c=Or(je().v15(t)),v=Pn.i1();return`
`+Wv(n,r,c,v,a)}function GA(n,r){for(var e=ir(Or(je().v15(r.h1k_1)),"properties"),t=(e??qr()).p2(),a=r.k1k_1,i=cr.t4(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2();t.l1(u)&&i.s2(l.k2(),l.l2())}var f=i,c=f.r2(),v=M(c,", ",o,o,o,o,ST),h=mb().t15(Av.c18(),je().v15(r.j1k_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,p=Zn(r.i1k_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(p+", state, defaults, {"+m+`});
`)}function KA(n,r){var e=!n.f1j_1.d1(),t=e?"CurrentUser, Permission":"CurrentUser",a=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.f1k_1+`', state);
`),i;return e?i=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:i="",a+i}function WA(n,r){var e,t=n.y1i_1,a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!0;break r}for(var s=t.x();s.y();){var l=s.z();if(r===l||Ae(r,l+"/")){a=!1;break r}}a=!0}if(a){var u;if(n.r1j_1.d1())u=!0;else{var f=n.r1j_1,c;r:{var v;if(E(f,Z)?v=f.d1():v=!1,v){c=!1;break r}for(var h=f.x();h.y();){var d=h.z();if(d==="/"||r===d||Ae(r,d+"/")){c=!0;break r}}c=!1}u=c}e=u}else e=!1;return e}function YA(n,r){if(r.d1()&&n.q1j_1.d1()&&n.s1j_1.d1()&&!n.t1j_1&&!n.u1j_1)return`export {};
`;for(var e=Pn.i1(),t=A.f1(r.c1()),a=r.r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=O(s,Wv(n,Kn(s),Or(l),e,r));t.n(u)}for(var f=t,c=n.s1j_1.q2(),v=A.m(),h=c.x();h.y();){var d=h.z();d.n1k_1&&v.n(d)}for(var p=A.f1(Mr(v,10)),m=v.x();m.y();){var y=m.z(),x=O(y.l1k_1,Pb(n,y.l1k_1,y.m1k_1));p.n(x)}var k=p,S=Dn(f,k),z=ET,I=new Zw(z),q=Mt(S,I),j=M(q,`
`,o,o,o,o,zT),P;e.l1("LucideIcon")?P=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:P="";var $=P,B=r.q2(),N;r:{var H;if(E(B,Z)?H=B.d1():H=!1,H){N=!1;break r}for(var L=B.x();L.y();){var J=L.z();if(Zv(n,Or(J))){N=!0;break r}}N=!1}var R=N,V=`declare const brand: unique symbol;
`,K;R||n.u1j_1?K=V:K=null;var nr=K,W=Fe("dates.ts"),tr;n.t1j_1?tr=W:tr=null;var Q=tr,lr=Fe("quantities.ts"),X;n.u1j_1?X=lr:X=null;var xr=X,br;C(j)===0?br=null:br=j;var dr=br,Er=M(pe([nr,Q,xr,dr]),`
`),zr;return C(Er)===0?zr=`export {};
`:zr=Er,$+zr}function Wv(n,r,e,t,a){var i=Tl(n,Rb(n,e),""),s=ku(n,e),l;if(s!=null){var u=e.pf("enum"),f=u==null?null:ys(u),c;if(f==null)c=null;else{var v;r:{var h;if(E(f,Z)?h=f.d1():h=!1,h){v=!0;break r}for(var d=f.x();d.y();){var p=d.z();if(p instanceof we){v=!1;break r}}v=!0}c=v}l=c===!0}else l=!1;if(l)return i+Pb(n,r,s);if(Zv(n,e)){var m=$n(n,e,t);return i+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(Vv(n,e))return i+("export interface "+r+" "+Bb(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+oc(n,e,a,"    ",Ft())+`),
`)+VA(n,e)+rT(n,r,e,a)+`};
`;var y=i+("export type "+r+" = "+$n(n,e,t)+`;
`),x=ZA(n,r,e,a);return y+(x??"")}function ZA(n,r,e,t){var a=ir(e,"discriminator"),i=a==null?null:Cr(a,"propertyName"),s;if(i==null)return null;s=i;var l=s,u=pn(e,"oneOf"),f=u??pn(e,"anyOf"),c;if(f==null)return null;c=f;var v=c,h=ir(e,"discriminator"),d=h==null?null:ir(h,"mapping"),p=d==null?null:d.p2(),m=p==null?null:wt(p),y=m??fr(),x;if(y.d1()){for(var k=A.f1(Mr(v,10)),S=v.x();S.y();){var z=S.z(),I=ql(n,Or(z)),q;if(I==null)q=null;else{var j=t.o2(I);q=j==null?null:Or(j)}var P=q,$=P??Or(z),B=ir($,"properties"),N=B==null?null:ir(B,l),H=N==null?null:pn(N,"enum"),L=H==null?null:zc(H),J=L instanceof vr?L:null,R=J==null?null:Un(J),V;if(R==null)return null;V=R;var K=V;k.n(K)}x=k}else x=y;var nr=x;if(nr.d1())return null;var W=qn(n,En(l)),tr=M(nr,o,o,o,o,o,IT(n));return`
export const `+r+` = {
`+("    types: ["+tr+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+W+"]]: (value: Extract<"+r+", { "+Me(l)+`: K }>) => R }): R =>
`)+("        (cases[value["+W+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function VA(n,r){for(var e=Eu(r,"required"),t=ir(r,"properties"),a=t??qr(),i=A.m(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2(),f=l.l2(),c=Dn(QA(n,Or(f),e.l1(u)),XA(n,u,Or(f))),v;if(c.d1())v=null;else{var h=Me(u);v="        "+h+": { "+M(c,o,o,o,o,o,CT)+" },"}var d=v;d==null||i.n(d)}var p=i;return p.d1()?"":`    bounds: {
`+M(p,`
`)+`
    },
`}function XA(n,r,e){var t;if(yt(n,e).l1("string"))t=!1;else{var a=Al(n,e),i=a==null?null:yt(n,a);t=(i==null?null:i.l1("string"))!==!0}if(t)return fr();var s=Cr(e,"format"),l;if(s==null){var u=Al(n,e);l=u==null?null:Cr(u,"format")}else l=s;var f=lA(r,l),c;if(f==null)return fr();c=f;var v=c,h=v.e1i_1,d;h==null?d=null:d=O("autocomplete",qn(n,En(h)));var p=d,m=v.f1i_1,y;return m==null?y=null:y=O("type",qn(n,En(m))),pe([p,y])}function QA(n,r,e){var t=yt(n,r).l1("integer"),a=O("required","true"),i;jb(n,r,e)?i=a:i=null;var s=i,l=ze(n,r,"minLength"),u;l==null?u=null:u=O("minlength",Dt(l));var f=u,c=ze(n,r,"maxLength"),v;c==null?v=null:v=O("maxlength",Dt(c));var h=v,d=op(n,r,t,"minimum","exclusiveMinimum",1),p;d==null?p=null:p=O("min",d);var m=p,y=op(n,r,t,"maximum","exclusiveMaximum",-1),x;y==null?x=null:x=O("max",y);var k=x,S=Cr(r,"pattern"),z;return S==null?z=null:z=O("pattern",qn(n,En(S))),pe([s,f,h,m,k,z])}function jb(n,r,e){if(Xv(n,r)||r.pf("enum")!=null)return!1;var t;if(yt(n,r).l1("string")){var a=ze(n,r,"minLength");t=(a??0)>=1}else t=e&&Ob(n,r);return t}function Ob(n,r){var e=yt(n,r),t;r:{var a;if(E(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function rT(n,r,e,t){if(!Yv(n,e,t,Ft()))return"";for(var a=Eu(e,"required"),i=ir(e,"properties"),s=i??qr(),l=A.m(),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=Or(v),d="value"+(Gv().af(c)?"."+c:"["+qn(n,En(c))+"]"),p=Dn(nT(n,c,d,h,a.l1(c)),ic(n,h,d,sc(n,c),"        ",0,t));Ui(l,p)}var m=l,y="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return y+M(m,"",o,o,o,o,qT)+`        return errors;
    },
`}function Yv(n,r,e,t){var a;if(Vv(n,r)){var i=ir(r,"properties"),s=(i??qr()).q2(),l;r:{var u;if(E(s,Z)?u=s.d1():u=!1,u){l=!1;break r}for(var f=s.x();f.y();){var c=f.z(),v=Or(c),h,d,p=OA(),m;n:{var y;if(E(p,Z)?y=p.d1():y=!1,y){m=!1;break n}for(var x=p.x();x.y();){var k=x.z();if(ze(n,v,k)!=null||k==="pattern"&&Cr(v,k)!=null){m=!0;break n}}m=!1}if(m?d=!0:d=Pl().u1k(Cr(v,"format"))!=null,d)h=!0;else{var S=ql(n,v),z;if(S==null)z=null;else{var I;if(t.l1(S))I=!1;else{var q=e.o2(S),j=q instanceof er?q:null,P;j==null?P=null:P=Yv(n,j,e,Oo(t,S)),I=P===!0}z=I}h=z===!0}if(h){l=!0;break r}}l=!1}a=l}else a=!1;return a}function ql(n,r){var e=Cr(r,"$ref");if(e!=null)return Ri(e,47);var t=Al(n,r);if(t!=null)return ql(n,t);if(yt(n,r).l1("array")){var a=ir(r,"items"),i;return a==null?i=null:i=ql(n,a),i}return null}function Al(n,r){var e=pn(r,"oneOf"),t=e??pn(r,"anyOf"),a;if(t==null)a=null;else{for(var i=A.m(),s=t.x();s.y();){var l=s.z(),u=l instanceof er?l:null;u==null||i.n(u)}a=i}var f=a,c;if(f==null)c=null;else{for(var v=A.m(),h=f.x();h.y();){var d=h.z();D(yt(n,d),jn("null"))||v.n(d)}c=v}var p=c;return p==null?null:zc(p)}function nT(n,r,e,t,a){var i=qn(n,En(r)),s=ze(n,t,"minLength"),l=s==null?null:No(s),u=ze(n,t,"maxLength"),f=u==null?null:No(u),c=t.pf("pattern"),v=c instanceof vr?c:null,h;if(v==null)h=null;else{var d;v.e18()?d=v:d=null,h=d}var p=h,m=p==null?null:p.f18(),y=Pl().u1k(Cr(t,"format")),x=ze(n,t,"minimum"),k;x==null?k=null:k=O(x,!1);var S=k,z;if(S==null){var I=ze(n,t,"exclusiveMinimum"),q;I==null?q=null:q=O(I,!0),z=q}else z=S;var j=z,P=ze(n,t,"maximum"),$;P==null?$=null:$=O(P,!1);var B=$,N;if(B==null){var H=ze(n,t,"exclusiveMaximum"),L;H==null?L=null:L=O(H,!0),N=L}else N=B;var J=N,R=A.m();if(jb(n,t,a)&&Ob(n,t)){var V="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+na(i,n,"Required.");R.n(V)}if(l!=null||f!=null||m!=null||y!=null){var K="        if (typeof "+e+" === 'string') {";if(R.n(K),l!=null||f!=null){var nr="            const length = [..."+e+"].length;";R.n(nr)}if(l!=null){var W="            if (length < "+l+") "+na(i,n,oi.v1k(l));R.n(W)}if(f!=null){var tr="            if (length > "+f+") "+na(i,n,oi.w1k(f));R.n(tr)}if(m!=null){var Q=n.v1j_1,lr=fp();Q.n(lr);var X="            if (!matches("+qn(n,En(m))+", "+e+")) "+na(i,n,oi.x1k(m));R.n(X)}if(y!=null){var xr=n.v1j_1,br=fp();xr.n(br);var dr=M(y.z1k_1," && ",o,o,o,o,AT(n,e)),Er="            if (!("+dr+")) "+na(i,n,y.a1l_1);R.n(Er)}var zr="        }";R.n(zr)}if(j!=null||J!=null){var Pr="        if (typeof "+e+" === 'number') {";if(R.n(Pr),j!=null){var Br=j.qh(),pr=j.rh(),Gr=pr?"<=":"<",en="            if ("+e+" "+Gr+" "+Dt(Br)+") "+na(i,n,oi.b1l(Br,pr));R.n(en)}if(J!=null){var Zr=J.qh(),_r=J.rh(),Fr=_r?">=":">",Vr="            if ("+e+" "+Fr+" "+Dt(Zr)+") "+na(i,n,oi.c1l(Zr,_r));R.n(Vr)}var Xr="        }";R.n(Xr)}if(!R.d1()){var $r=n.v1j_1,tn=Kb();$r.n(tn)}return R}function ic(n,r,e,t,a,i,s){var l=Cr(r,"$ref");if(l!=null){var u=Ri(l,47),f=s.o2(u),c=f instanceof er?f:null,v;if(c==null)return fr();v=c;var h=v;if(!Yv(n,h,s,Ft()))return fr();var d=n.v1j_1,p=sn([Kb(),d7()]);return Ui(d,p),jn(a+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Kn(u)+".validate("+e+"));")}var m=Al(n,r);if(m!=null)return ic(n,m,e,t,a,i,s);if(!yt(n,r).l1("array"))return fr();var y=ir(r,"items"),x;if(y==null)return fr();x=y;var k=x,S=i===0?"":""+(i+1|0),z="item"+S,I="index"+S,q=ic(n,k,z,t+"[${"+I+"}]",a+"        ",i+1|0,s);return q.d1()?fr():Dn(Dn(sn([a+"if (Array.isArray("+e+")) {",a+"    "+e+".forEach(("+z+", "+I+") => {"]),q),sn([a+"    });",a+"}"]))}function sc(n,r){return ae(ae(ae(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function ze(n,r,e){var t=r.pf(e),a=t instanceof vr?t:null,i;if(a==null)i=null;else{var s;a.e18()?s=null:s=a,i=s}var l=i,u=l==null?null:Un(l);return u==null?null:Gc(u)}function yt(n,r){var e=r.pf("type"),t;if(e instanceof dn){for(var a=A.f1(Mr(e,10)),i=e.x();i.y();){var s=i.z(),l=On(s).f18();a.n(l)}t=a}else e instanceof vr?t=jn(e.f18()):t=fr();return t}function Pb(n,r,e){var t=M(e,"",o,o,o,o,TT(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function eT(n,r,e){for(var t=cr.t4(),a=Su(e).r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=ku(n,Or(l));if(u!=null){var f=dt(u),c=t.o2(f);if(c==null){var v=new ec(Kn(s),u,!1);t.s2(f,v)}}}for(var h=cr.t4(),d=cr.t4(),p=e.r2().x();p.y();){var m=p.z(),y=m.k2(),x=m.l2();ui(n,h,d,x,Kn(y),Kn(y),!0)}var k=ir(r,"paths");k==null||ui(n,h,d,k,"","",!1);for(var S=h.p2(),z=A.m(),I=S.x();I.y();){var q=I.z(),j;(E(t,xn)?t:g()).m2(q)?j=!1:j=!D(q,n.q1j_1),j&&z.n(q)}for(var P=jT(d),$=new Vw(P),B=Mt(z,$),N=cr.na(ln(Mr(B,10),16)),H=B.x();H.y();){var L=H.z(),J=qe(h,L),R=OT,V=bx(J,zE([R,PT]));N.s2(L,V)}for(var K=N,nr=K.q2(),W=new Qw(nr),tr=A2(W),Q=e.p2(),lr=A.f1(Mr(Q,10)),X=Q.x();X.y();){var xr=X.z(),br=Kn(xr);lr.n(br)}for(var dr=Ic(Pt(Pt(lr,"LucideIcon"),"PublicConfig")),Er=cr.oa(t),zr=B.x();zr.y();){var Pr=zr.z(),Br=qe(K,Pr),pr=Kn(Br.e1l_1),Gr;if(qe(tr,pr)>1||dr.l1(pr)){var en=Br.d1l_1,Zr;C(en)===0?Zr=pr:Zr=en+pr,Gr=Zr}else Gr=pr;var _r=Gr,Fr;if(!dr.l1(_r))Fr=_r;else{var Vr=Xc(2,BT),Xr=qi(Vr,NT(_r)),$r;r:{for(var tn=Xr.x();tn.y();){var _n=tn.z();if(!dr.l1(_n)){$r=_n;break r}}throw jr.r("Sequence contains no element matching the predicate.")}Fr=$r}var wn=Fr;dr.n(wn);var mn=new ec(wn,qe(d,Pr),!0);Er.s2(Pr,mn)}return Er}function ku(n,r){var e=pn(r,"enum"),t;if(e==null)return null;t=e;for(var a=t,i=A.m(),s=a.x();s.y();){var l=s.z();l instanceof we||i.n(l)}var u=i,f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof vr?d=!h.e18():d=!0,d){f=!0;break r}}f=!1}if(f)return null;for(var p=A.f1(Mr(u,10)),m=u.x();m.y();){var y=m.z(),x=On(y).f18();p.n(x)}var k=yi(p),S;return k.c1()>1?S=k:S=null,S}function Zv(n,r){var e,t,a=CA(),i=r.pf("type"),s=i instanceof vr?i:null;if(kx(a,s==null?null:Un(s))?t=r.pf("title")!=null:t=!1,t){var l=r.p2(),u;r:{var f;if(E(l,Z)?f=l.d1():f=!1,f){u=!0;break r}for(var c=l.x();c.y();){var v=c.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function Vv(n,r){return ir(r,"properties")!=null&&r.pf("allOf")==null}function oc(n,r,e,t,a){var i=ir(r,"properties"),s=i??qr();if(s.d1())return"{}";for(var l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=t+"    "+Me(c)+": "+ga(n,Or(v),e,t+"    ",a)+",";l.n(h)}var d=l;return M(Pt(Dn(jn("{"),d),t+"}"),`
`)}function ga(n,r,e,t,a){if(Xv(n,r))return"null";var i=Cr(r,"$ref");if(i!=null){var s=Ri(i,47),l=e.o2(s),u=l instanceof er?l:null,f;if(u==null)return"null";f=u;var c=f;return Vv(n,c)?Kn(s)+".empty()":Zv(n,c)?Kn(s)+"("+ga(n,c,e,t,Oo(a,s))+")":a.l1(s)?"null":ga(n,c,e,t,Oo(a,s))}var v=r.pf("enum");if(v!=null){var h=Xu(ys(v)),d;h==null?d=null:d=qn(n,h);var p=d;return p??"null"}var m=r.pf("const");if(m!=null)return qn(n,m);var y=pn(r,"oneOf"),x=y??pn(r,"anyOf");if(x!=null){var k=Xu(x),S;k==null?S=null:S=ga(n,Or(k),e,t,a);var z=S;return z??"null"}var I=pn(r,"allOf");if(I!=null)return I.c1()===1?ga(n,Or(rm(I)),e,t,a):M(I,", ","{ "," }",o,o,UT(n,e,t,a));var q=r.pf("type"),j;if(q instanceof dn){var P=Xu(q),$=P==null?null:On(P);j=$==null?null:$.f18()}else q instanceof vr?j=Un(q):j=null;var B=j,N;switch(B){case"string":var H=nh(r),L;H==null?L=null:L="'' as "+H;var J=L,R;if(J==null){var V=$b(r),K;V==null?K=null:K=qe(IA(),V)+" as "+V,R=K}else R=J;var nr=R;N=nr??"''";break;case"integer":case"number":N="0";break;case"boolean":N="false";break;case"array":var W=pn(r,"prefixItems"),tr;W==null?tr=null:tr=M(W,", ","[","]",o,o,DT(n,e,t,a));var Q=tr;N=Q??"[]";break;case"object":N=oc(n,r,e,t,a);break;case null:N=r.pf("properties")!=null?oc(n,r,e,t,a):"null";break;default:N="null";break}return N}function Xv(n,r){var e=r.pf("type"),t=pn(r,"oneOf"),a=t??fr(),i=pn(r,"anyOf"),s=i??fr(),l=Dn(a,s),u,f,c,v,h;if(e instanceof dn){var d;r:{var p;if(E(e,Z)?p=e.d1():p=!1,p){d=!1;break r}for(var m=e.x();m.y();){var y=m.z();if(On(y).f18()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof vr?x=e.f18()==="null":x=!1,v=x}if(v)c=!0;else{var k=r.pf("nullable"),S=k instanceof vr?k:null;c=(S==null?null:Un(S))==="true"}if(c)f=!0;else{var z=pn(r,"enum"),I=z??fr(),q;r:{var j;if(E(I,Z)?j=I.d1():j=!1,j){q=!1;break r}for(var P=I.x();P.y();){var $=P.z();if($ instanceof we){q=!0;break r}}q=!1}f=q}if(f)u=!0;else{var B;r:{var N;if(E(l,Z)?N=l.d1():N=!1,N){B=!1;break r}for(var H=l.x();H.y();){var L=H.z(),J=L instanceof er?L:null,R;if(J==null?R=null:R=Xv(n,J),R===!0){B=!0;break r}}B=!1}u=B}return u}function Bb(n,r,e,t){for(var a=Eu(r,"required"),i=ir(r,"properties"),s=i??qr(),l=A.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=a.l1(c)?"":"?",d=Fb(Or(v))?"readonly ":"",p=Tl(n,Rb(n,Or(v)),t+"    ")+(t+"    "+d+Me(c)+h+": "+$n(n,Or(v),e,t+"    ")+";");l.n(p)}var m=l;return M(Pt(Dn(jn("{"),m),t+"}"),`
`)}function $n(n,r,e,t){t=t===o?"":t;var a=Cr(r,"$ref");if(a!=null){var i=Kn(Ri(a,47));return e.n(i),i}var s=r.pf("enum");if(s!=null){for(var l=ys(s),u=A.m(),f=l.x();f.y();){var c=f.z(),v=c instanceof vr?c:null,h=v==null?null:Un(v);h==null||u.n(h)}var d=dt(u),p;if(n.q1j_1.d1()?p=!1:p=D(d,n.q1j_1),p){var m="LucideIcon";return e.n(m),"LucideIcon"}var y=ku(n,r);if(y!=null){var x=n.s1j_1.o2(dt(y));if(x!=null){var k=x.l1k_1;e.n(k);var S,z=ys(s),I;r:{var q;if(E(z,Z)?q=z.d1():q=!1,q){I=!1;break r}for(var j=z.x();j.y();){var P=j.z();if(P instanceof we){I=!0;break r}}I=!1}return I?S=x.l1k_1+" | null":S=x.l1k_1,S}}var $=ys(s),B=M($," | ",o,o,o,o,RT(n)),N;return C(B)===0?N="never":N=B,N}var H=r.pf("const");if(H!=null)return qn(n,H);var L=pn(r,"oneOf");if(L!=null)return sp(n,L,e,t);var J=pn(r,"anyOf");if(J!=null)return sp(n,J,e,t);var R=pn(r,"allOf");if(R!=null)return M(R," & ",o,o,o,o,LT(n,e,t));var V=r.pf("type"),K;if(V==null)K=r.pf("properties")!=null?Nb(n,r,e,t):"unknown";else if(V instanceof dn){for(var nr=A.f1(Mr(V,10)),W=V.x();W.y();){var tr=W.z(),Q=ip(n,On(tr).f18(),r,e,t);nr.n(Q)}K=M(yi(nr)," | ")}else K=ip(n,On(V).f18(),r,e,t);return K}function ip(n,r,e,t,a){var i;switch(r){case"string":var s=nh(e),l=s??$b(e),u;l==null?u=null:(t.n(l),u=l);var f=u;i=f??"string";break;case"integer":case"number":i="number";break;case"boolean":i="boolean";break;case"null":i="null";break;case"array":i=tT(n,e,t,a);break;case"object":i=Nb(n,e,t,a);break;default:i="unknown";break}return i}function tT(n,r,e,t){var a=pn(r,"prefixItems");if(a!=null)return M(a,", ","[","]",o,o,MT(n,e,t));var i=r.pf("items"),s=i==null?null:Or(i),l;if(s==null)return"unknown[]";l=s;var u=l,f=$n(n,u,e,t);return js(f," | ")||js(f," & ")?"("+f+")[]":f+"[]"}function Nb(n,r,e,t){var a=ir(r,"properties");if(!(a??qr()).d1())return Bb(n,r,e,t);var i=r.pf("additionalProperties"),s=i instanceof er?i:null;return s!=null?"Record<string, "+$n(n,s,e,t)+">":"Record<string, unknown>"}function sp(n,r,e,t){for(var a=A.f1(Mr(r,10)),i=r.x();i.y();){var s=i.z(),l=$n(n,Or(s),e,t);a.n(l)}return M(yi(a)," | ")}function qn(n,r){var e;if(r instanceof we)e="null";else{var t;r instanceof vr?t=r.e18():t=!1,t?e=Zn(r.f18()):r instanceof vr?e=r.f18():e="unknown"}return e}function aT(n,r,e){for(var t=Pn.i1(),a=cr.t4(),i=A.m(),s=cr.t4(),l=r.r2().x();l.y();)for(var u=l.z(),f=u.k2(),c=u.l2(),v=Or(c),h=vb().x();h.y();){var d=h.z(),p=ir(v,d);if(p!=null){var m=Db(n,f),y=a.o2(m),x;if(y==null){var k=A.m();a.s2(m,k),x=k}else x=y;var S=x,z=vT(n,f,d,v,p);S.n(z)}}var I=Ic(Kv());I.g1(a.p2());for(var q=I,j=Su(a),P=A.f1(j.c1()),$=j.r2().x();$.y();){var B=$.z(),N=B.k2(),H=B.l2(),L=Pn.i1(),J=Yr.f(),R=M(H,`
`,o,o,o,o,FT(t,n,L,N,i,s,q,J)),V=J.toString()+`
export const `+N+` = {
`+R+`
};
`;P.n(V)}for(var K=P,nr=xa(t),W=A.m(),tr=nr.x();tr.y();){for(var Q=tr.z(),lr=A.f1(Mr(e,10)),X=e.x();X.y();){var xr=X.z(),br=Kn(xr);lr.n(br)}lr.l1(Q)&&W.n(Q)}var dr=W,Er,zr=dE(a.q2()),Pr;r:{var Br;if(E(zr,Z)?Br=zr.d1():Br=!1,Br){Pr=!1;break r}for(var pr=zr.x();pr.y();){var Gr=pr.z();if(Gr.m1l_1){Pr=!0;break r}}Pr=!1}Pr?Er="ApiError, request, stream":Er="ApiError, request";var en=Er,Zr=n.c1j_1.d1()?en:en+", codeMessages, errorCode",_r=Yr.f();_r.fa("import { "+Zr+`, type RequestOptions } from './client.js';
`);var Fr=n.z1i_1!=null?Pt(dr,"PublicConfig"):dr,Vr=n.c1j_1.d1()?Fr:xa(Pt(Fr,"ErrorCode"));Vr.d1()||_r.fa("import type { "+M(Vr)+` } from './types.js';
`),_r.fa(`
`);for(var Xr=K.x();Xr.y();){var $r=Xr.z();_r.fa($r).fa(`
`)}if(_r.fa(uT(n,i)),n.c1j_1.d1()||_r.fa(qA()),!s.d1()){_r.fa(`export const uploadRules = {
`);for(var tn=s.r2(),_n=$T,wn=new Xw(_n),mn=Mt(tn,wn).x();mn.y();){var Qn=mn.z(),re=Qn.k2(),ne=Qn.l2();_r.fa("    '"+re+"': "+ne+`,
`)}_r.fa(`} as const;

`)}return n.z1i_1!=null&&_r.fa(Fe("public-config.ts")),_r.fa("export const api = { "+M(xa(a.p2()))+` };
`),_r.fa(Fe("api-with.ts")),_r.toString()}function iT(n,r){var e=ir(r,"properties"),t;if(e==null)t=null;else{var a;e.d1()?a=null:a=e,t=a}var i=t,s;if(i==null)return null;s=i;var l=s,u=dt(Eu(r,"required")),f=l.r2(),c=M(f,"; ",o,o,o,o,JT(u));return"{ "+c+" }"}function sT(n,r){var e=r.pf("maxBytes"),t=e==null?null:On(e),a=t==null?null:M6(t),i;a==null?i=null:i="maxBytes: "+a.toString();var s=i,l=pn(r,"types"),u;if(l==null)u=null;else{for(var f=A.f1(Mr(l,10)),c=l.x();c.y();){var v=c.z(),h=Zn(On(v).f18());f.n(h)}u=f}var d=u,p;if(d==null)p=null;else{var m;d.d1()?m=null:m=d,p=m}var y=p,x;y==null?x=null:x="types: ["+M(y)+"]";var k=x,S=r.pf("maxFiles"),z=S==null?null:On(S),I=z==null?null:F6(z),q;I==null?q=null:q="maxFiles: "+I;var j=pe([s,k,q]);return"{ "+M(j)+" }"}function oT(n){return Ub(n,"ErrorCode",n.c1j_1)}function lT(n){var r=Pl().s1k_1.z1k_1,e=M(r,"",o,o,o,o,HT(n));return`
export interface PasswordRule {
    readonly pattern: string;
    readonly requirement: string;
}

`+(`export const passwordRules: readonly PasswordRule[] = [
`+e+`];

`)+("export const passwordMessage = "+qn(n,En(Pl().s1k_1.a1l_1))+`;

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
`}function Ub(n,r,e){if(e.d1())return"";var t=M(e," | ",o,o,o,o,GT),a=M(e,"",o,o,o,o,KT);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+a+`} as const;
`}function uT(n,r){var e=M(r,"",o,o,o,o,WT),t=M(r,"",o,o,o,o,YT);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function fT(n,r,e){var t=rh(r),a=Xc(1,ZT),i=qi(a,VT(t)),s;r:{for(var l=i.x();l.y();){var u=l.z();if(!e.l1(u)){s=u;break r}}throw jr.r("Sequence contains no element matching the predicate.")}var f=s;return e.n(f),f}function cT(n,r,e,t){var a=bE([r,r+M(e,"",o,o,o,o,XT)]),i;r:{for(var s=a.x();s.y();){var l=s.z();if(!t.l1(l)){i=l;break r}}i=null}var u=i,f;if(u==null){var c=Xc(2,QT),v=qi(c,r7(r)),h;r:{for(var d=v.x();d.y();){var p=d.z();if(!t.l1(p)){h=p;break r}}throw jr.r("Sequence contains no element matching the predicate.")}f=h}else f=u;var m=f;return t.n(m),m}function vT(n,r,e,t,a){for(var i=Pn.i1(),s=pn(t,"parameters"),l=s??fr(),u=pn(a,"parameters"),f=u??fr(),c=Dn(l,f),v=A.f1(Mr(c,10)),h=c.x();h.y();){var d=h.z(),p=Or(d);v.n(p)}for(var m=v,y=pb().df(r),x=jc(qi(y,n7)),k=A.m(),S=A.m(),z=x.x();z.y();){var I=z.z(),q;r:{for(var j=m.x();j.y();){var P=j.z();if(Cr(P,"name")===I&&Cr(P,"in")==="path"){q=P;break r}}q=null}var $=q,B=$==null?null:ir($,"schema"),N;B==null?N=null:N=$n(n,B,i);var H=N,L;if(H==null)L=null;else{var J;H==="unknown"||H==="string"?J=null:J=H,L=J}var R=L,V=R??"string | number",K=Lb(I)+": "+V;k.n(K),S.n(V)}var nr=ir(a,"requestBody"),W=nr==null?null:ir(nr,"content"),tr=W==null?null:W.r2(),Q;if(tr==null)Q=null;else{var lr;r:{for(var X=tr.x();X.y();){var xr=X.z();if(Ae(xr.k2(),"multipart/")){lr=xr;break r}}lr=null}Q=lr}var br=Q,dr=br==null?null:br.l2(),Er;dr==null?Er=null:Er=dr instanceof er?dr:null;var zr=Er,Pr=zr==null?null:ir(zr,"schema"),Br;Pr==null?Br=null:Br=iT(n,Pr);var pr=Br,Gr;if(br!=null)Gr=pr??"FormData";else{var en;W==null?en=null:en=lc(n,W);var Zr=en,_r;Zr==null?_r=null:_r=$n(n,Zr,i),Gr=_r}var Fr=Gr,Vr;if(br==null){var Xr;W==null?Xr=null:Xr=lc(n,W);var $r=Xr,tn;$r==null?tn=null:tn=hT(n,$r);var _n=tn;Vr=_n??fr()}else Vr=fr();var wn=Vr,mn;wn.d1()?mn=Fr:mn="Omit<"+Fr+", "+M(wn," | ",o,o,o,o,e7)+">";var Qn=mn;if(nr!=null){var re="body: "+(Qn??"unknown");k.n(re)}var ne=ir(a,"x-ktor-svelte-fields"),ce=ne==null?null:pn(ne,"fields"),Se;if(ce==null)Se=null;else{for(var Ee=A.m(),Ne=ce.x();Ne.y();){var Ze=Ne.z(),kt=Ze instanceof vr?Ze:null,ee=kt==null?null:Un(kt);ee==null||Ee.n(ee)}Se=Ee}var An=Se,Bn=An??fr(),bn=M(Bn," | ",o,o,o,o,t7),Jt;C(bn)===0?Jt=null:Jt=bn;var ve=Jt,Ve=ir(a,"x-ktor-svelte-include"),xt=Ve==null?null:ir(Ve,"relations"),Ht=xt??qr(),Zi=Ht.p2(),Gt=M(Zi," | ",o,o,o,o,a7),Xe;C(Gt)===0?Xe=null:Xe=Gt;for(var he=Xe,Kt=ve!=null||he!=null,Ja=A.m(),Ha=m.x();Ha.y();){var Wt=Ha.z(),Ga=Cr(Wt,"name");Cr(Wt,"in")==="query"&&!(ve!=null&&Ga==="fields")&&!(he!=null&&Ga==="include")&&Ja.n(Wt)}var Ue=Ja,Yt=-1,Zt="",Vt;if(Ue.d1()?Vt=Kt:Vt=!0,Vt){for(var Ka=A.f1(Mr(Ue,10)),Xt=Ue.x();Xt.y();){var St=Xt.z(),Qt=St.pf("required"),Wa=Qt==null?null:On(Qt),Vi=(Wa==null?null:Un(Wa))==="true",Ya=ir(St,"schema"),Qe;Ya==null?Qe=null:Qe=$n(n,Ya,i);var Xi=Qe,Qi;if(Xi==null)Qi=null;else{var ra;Xi!=="unknown"?ra=Xi:ra=null,Qi=ra}var uo=Qi,rs=uo??"string",fo=Cr(St,"name"),ns=fo??"",zu=Me(ns)+(Vi?"":"?")+": "+rs;Ka.n(zu)}var es=Ka,Et;r:{var Za;if(E(Ue,Z)?Za=Ue.d1():Za=!1,Za){Et=!1;break r}for(var Va=Ue.x();Va.y();){var Iu=Va.z(),Xa=Iu.pf("required"),co=Xa==null?null:On(Xa);if((co==null?null:Un(co))==="true"){Et=!0;break r}}Et=!1}var vo=Et,Qa="query"+(vo?"":"?");Yt=k.c1();var ri;ve==null?ri=null:ri="fields?: readonly ("+ve+")[]";var ts=ri,Cu;he==null?Cu=null:Cu="include?: readonly ("+he+")[]";var Zb=pe([ts,Cu]),Vb="fields?: readonly F[]",qu;ve!=null?qu=Vb:qu=null;var Xb=qu,Qb="include?: readonly I[]",Au;he!=null?Au=Qb:Au=null;var rk=Au,nk=pe([Xb,rk]),ek=Qa+": { "+M(Dn(es,Zb),"; ")+" }";k.n(ek),Zt=Qa+": { "+M(Dn(es,nk),"; ")+" }"}for(var th=A.m(),ah=m.x();ah.y();){var Tu=ah.z(),ju;if(Cr(Tu,"in")==="header"){var tk=TA(),ih=Cr(Tu,"name"),ak=(ih??"").toLowerCase();ju=!tk.l1(ak)}else ju=!1;ju&&th.n(Tu)}var ni=th;if(!ni.d1()){var ik=M(ni,"; ",o,o,o,o,i7(n,i)),ho;r:{var Ou;if(E(ni,Z)?Ou=ni.d1():Ou=!1,Ou){ho=!1;break r}for(var sh=ni.x();sh.y();){var sk=sh.z(),oh=sk.pf("required"),lh=oh==null?null:On(oh);if((lh==null?null:Un(lh))==="true"){ho=!0;break r}}ho=!1}var ok=ho,lk="headers"+(ok?"":"?")+": { "+ik+" }";k.n(lk)}var uk="options?: RequestOptions";k.n(uk);var fk=x.d1()?Zn(r):dT(n,r),uh=ir(a,"x-ktor-svelte-upload"),Pu;uh==null?Pu=null:Pu=sT(n,uh);var Bu=Pu,fh=a.pf("x-ktor-svelte-timeout"),ch=fh==null?null:On(fh),vh=ch==null?null:Un(ch),hh=vh==null?null:Gc(vh),Nu=hh==null?null:Rn(hh),Uu;if(Nu==null)Uu=null;else{var Du;ar(Nu,new b(0,0))>0?Du=Nu:Du=null,Uu=Du}var dh=Uu,rt=A.m();dh!=null&&rt.n("timeout: "+dh.toString()),rt.n("...options");var Ru;Ue.d1()?Ru=Kt:Ru=!0,Ru&&rt.n("query"),ni.d1()||rt.n("typedHeaders: headers"),nr!=null&&rt.n("body"),wn.d1()||rt.n("omit: ["+M(wn,o,o,o,o,o,s7)+"]"),Bu!=null&&rt.n("upload: "+Bu),pr!=null&&rt.n("multipart: true");var ck=rt.m6(),ph=ne==null?null:Cr(ne,"type"),Lu;ph==null?Lu=Ve==null?null:Cr(Ve,"type"):Lu=ph;var po=Lu,Mu=_T(n,a,i),Fu=mT(n,a),$u;if(Kt&&po!=null&&!Fu&&Yt>=0){var _h=ve!=null?"Pick<"+po+", F>":po,vk=Ht.r2(),hk=M(vk,"; ",o,o,o,o,o7(n,i)),dk=he!=null?"("+_h+" & Pick<{ "+hk+" }, I>)":_h,pk=Te.ze("\\b"+Cs().qe(po)+"\\b").ef(Mu,dk),mh=Cc(k);mh.y4(Yt,Zt);var _k=mh,Ju;ve==null?Ju=null:Ju="F extends "+ve+" = "+ve;var mk=Ju,Hu;he==null?Hu=null:Hu="I extends "+he+" = never";var gk=M(pe([mk,Hu]));$u=`: {
    <`+gk+">("+M(_k)+"): Promise<"+pk+`>;
`+("    ("+M(k)+"): Promise<"+Mu+`>;
}`)}else $u="";var yk=$u,wk=Mu,gh=pT(n,a,i),bk=e.toUpperCase(),yh=Cr(a,"operationId"),Gu;yh==null?Gu=null:Gu=xu(yh);for(var wh=Gu,kk=wh??gT(n,r,e),bh=pe([Cr(a,"summary"),Cr(a,"description")]),kh=A.f1(Mr(bh,10)),xh=bh.x();xh.y();){var Sh=xh.z(),xk=w(Tg($s(Sh)?Sh:g()));kh.n(xk)}for(var Eh=A.m(),zh=kh.x();zh.y();){var Ih=zh.z();C(Ih)>0&&Eh.n(Ih)}var Sk=yi(Eh),Ek="@deprecated",Ku;Mb(a)?Ku=Ek:Ku=null;var zk=Ku,Ik=n.x1j_1,Ck=e.toUpperCase(),Ch=Ik.o2(Ck+" "+r),Wu;Ch==null?Wu=null:Wu="@see "+Ch;var qk=Dn(Sk,pe([zk,Wu])),Ak=(k.c1()-x.c1()|0)-1|0,Yu=xx(nm(k,x.c1()),1),_o;r:{var Zu;if(E(Yu,Z)?Zu=Yu.d1():Zu=!1,Zu){_o=!1;break r}for(var qh=Yu.x();qh.y();){var Tk=qh.z();if(!rg(zg(Tk,58),"?")){_o=!0;break r}}_o=!1}var jk=_o,Ah=M(yi(gh.q2())," | "),Vu;C(Ah)===0?Vu=null:Vu=Ah;var Ok=Vu,Pk=wt(gh.p2());return new Kw(bk,r,kk,qk,x,l7(ck,Fu,k,wk,e,fk),i,Fu,Bu,Ok,Pk,S,Ak,jk,yk)}function hT(n,r){var e=Cr(r,"$ref"),t;if(e==null)t=null;else{var a=n.o1j_1.o2(Ri(e,47));t=a instanceof er?a:null}for(var i=t,s=i??r,l=ir(s,"properties"),u=l??qr(),f=cr.t4(),c=u.r2().x();c.y();){var v=c.z(),h=v.l2(),d=h instanceof er?h:null;(d==null?null:Fb(d))===!0&&f.s2(v.k2(),v.l2())}return wt(f.p2())}function dT(n,r){var e=Yr.f();e.ga(96);for(var t=0,a=pb().df(r).x();a.y();){var i=a.z();e.fa(sc(n,Gn(r,t,i.gf().r1_1))),e.fa("${encodeURIComponent("+Lb(i.gg().e1(1))+")}"),t=i.gf().s1_1+1|0}return e.fa(sc(n,We(r,t))),e.ga(96),e.toString()}function pT(n,r,e){for(var t=ir(r,"responses"),a=(t??qr()).r2(),i=A.m(),s=a.x();s.y();){var l=s.z(),u;r:{var f=l.k2(),c=l.l2(),v=Wl(f),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var p=h,m;if(p==null){u=null;break r}else m=p;var y=m,x=ir(Or(c),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=lc(n,S),I;if(z==null){u=null;break r}else I=z;var q=I;u=O(y,$n(n,q,e))}var j=u;j==null||i.n(j)}return Su(cg(i))}function _T(n,r,e){var t=ir(r,"responses"),a;if(t==null)return"unknown";a=t;for(var i=a,s=i.r2(),l=A.m(),u=s.x();u.y();){var f=u.z(),c=f.k2();Ae(c,"2")&&l.n(f)}var v;r:{var h=l.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var p=d.k2(),m=p;do{var y=h.z(),x=y.k2(),k=x;Le(m,k)>0&&(d=y,m=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:Or(z),q;if(I==null)return"unknown";q=I;var j=q,P=ir(j,"content"),$;if(P==null)return"void";$=P;var B=$,N=ir(B,"text/event-stream");if(N!=null){var H=ir(N,"schema"),L;H==null?L=null:L=$n(n,H,e);var J=L;return J??"string"}var R=B.p2(),V;r:{for(var K=R.x();K.y();){var nr=K.z();if(js(nr,"json")){V=nr;break r}}V=null}var W=V;if(W!=null){var tr=ir(B,W),Q=tr==null?null:ir(tr,"schema"),lr;Q==null?lr=null:lr=$n(n,Q,e);var X=lr;return X??"unknown"}return"string"}function mT(n,r){for(var e=ir(r,"responses"),t=e??qr(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();Ae(l,"2")&&a.s2(s.k2(),s.l2())}var u=a.q2(),f;r:{var c;if(E(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,p=d==null?null:ir(d,"content");if((p==null?null:p.k18("text/event-stream"))===!0){f=!0;break r}}f=!1}return f}function lc(n,r){var e=r.p2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(js(i,"json")){t=i;break r}}t=null}var s=t,l=s??Sx(r.p2()),u;if(l==null)u=null;else{var f=ir(r,l);u=f==null?null:ir(f,"schema")}return u}function Db(n,r){var e=n.r1j_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(r===i||Ae(r,i+"/")){t=i;break r}}t=null}var s=t,l=s??"",u=Ig(Cg(r,l),Ai([47])),f;r:{for(var c=u.x();c.y();){var v=c.z(),h;if(C(v)>0?h=!Ae(v,"{"):h=!1,h){f=v;break r}}f=null}var d=f,p;d==null?p=null:p=rh(d,Kv());var m=p;return m??"root"}function gT(n,r,e){var t=n.r1j_1,a;r:{for(var i=t.x();i.y();){var s=i.z();if(r===s||Ae(r,s+"/")){a=s;break r}}a=null}for(var l=a,u=l??"",f=Ig(Cg(r,u),Ai([47])),c=A.m(),v=f.x();v.y();){var h=v.z();C(h)>0&&c.n(h)}for(var d=c,p=A.m(),m=d.x();m.y();){var y=m.z();Ae(y,"{")||p.n(y)}var x=nm(p,1);if(!x.d1()){var k=e==="post"?"":e;return xu(k+M(x,"",o,o,o,o,u7))}var S=em(d),z=(S==null?null:Ae(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function Rb(n,r){var e=Cr(r,"description"),t;e==null?t=null:t=w(Tg($s(e)?e:g()));var a=t,i;if(a==null)i=null;else{var s;C(a)===0?s=null:s=a,i=s}var l=i,u="@deprecated",f;Mb(r)?f=u:f=null;var c=f;return pe([l,c])}function Tl(n,r,e){if(r.d1())return"";var t=qg(ae(M(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+rm(t)+` */
`;var a=e+`/**
`;return a+M(t,"",o,o,o,o,f7(e))+(e+` */
`)}function yT(n){return"'"+n.t1h_1+"'"}function wT(n){return`
`+n.x1g()}function bT(n){var r=n.qh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function uc(n,r,e){var t;if(e instanceof er){var a=Cr(e,"$ref"),i=a==null?null:Ri(a,47),s;i==null?s=null:s=n.o2(i);var l=s,u;if(l==null){for(var f=cr.na(e.c1()),c=e.r2().x();c.y();){var v=c.z(),h=v.k2(),d=uc(n,r,v.l2());f.s2(h,d)}u=new er(f)}else u=RA(r,l);t=u}else if(e instanceof dn){for(var p=A.f1(Mr(e,10)),m=e.x();m.y();){var y=m.z(),x=uc(n,r,y);p.n(x)}t=new dn(p)}else t=e;return t}function kT(n,r){var e=n.b1k_1,t=r.b1k_1;return bt(e,t)}function xT(n){var r=n.c1k_1,e;r==null?e=null:e=", permission: "+Zn(r);var t=e,a=t??"";return"    { page: "+Zn(n.b1k_1)+a+` },
`}function ST(n){var r=n.k2(),e=n.l2();return Me(r)+": "+Zn(e)}function ET(n,r){var e=n.lh_1,t=r.lh_1;return bt(e,t)}function zT(n){return n.mh_1}function IT(n){return r=>qn(n,En(r))}function CT(n){var r=n.qh(),e=n.rh();return r+": "+e}function op(n,r,e,t,a,i){var s=ze(n,r,t);if(s!=null)return Dt(s);var l=ze(n,r,a),u;if(l==null)return null;u=l;var f=u;return e?Dt(f+i):null}function qT(n){return n+`
`}function na(n,r,e){return"addError(errors, "+n+", "+qn(r,En(e))+");"}function AT(n,r){return e=>"matches("+qn(n,En(e.e1m_1))+", "+r+")"}function TT(n){return r=>"    "+Me(r)+": "+qn(n,En(r))+`,
`}function ui(n,r,e,t,a,i,s){if(t instanceof dn)for(var l=t.x();l.y();){var u=l.z();ui(n,r,e,u,a,i,!1)}else if(t instanceof er){var f=ku(n,t),c;if(f==null)c=null;else{var v;s?v=null:v=f,c=v}var h=c;if(h!=null){var d=dt(h),p=r.o2(d),m;if(p==null){var y=A.m();r.s2(d,y),m=y}else m=p;var x=m,k=new Gw(a,i);x.n(k);var S=dt(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var q=Cr(t,"in")!=null?Cr(t,"name"):null,j=t.r2().x();j.y();){var P=j.z(),$=P.k2(),B=P.l2(),N;if($==="properties"?N=B instanceof er:N=!1,N)for(var H=B.r2().x();H.y();){var L=H.z(),J=L.k2(),R=L.l2();ui(n,r,e,R,a,J,!1)}else $==="schema"&&q!=null?ui(n,r,e,B,a,q,!1):$!=="enum"&&ui(n,r,e,B,a,i,!1)}}}function jT(n){return(r,e)=>{var t=M(xa(qe(n,r)),"\0"),a=M(xa(qe(n,e)),"\0");return bt(t,a)}}function OT(n){return n.d1l_1}function PT(n){return n.e1l_1}function BT(n){return n+1|0}function NT(n){return r=>n+r}function UT(n,r,e,t){return a=>"..."+ga(n,Or(a),r,e,t)}function DT(n,r,e,t){return a=>ga(n,Or(a),r,e,t)}function RT(n){return Ye(r=>{var e=n;return qn(e,r)},1,0,8,"literal",[n])}function LT(n,r,e){return t=>$n(n,Or(t),r,e)}function MT(n,r,e){return t=>$n(n,Or(t),r,e)}function FT(n,r,e,t,a,i,s,l){return u=>{var f=n,c=u.l1l_1;Ui(f,c);var v=cT(r,u.h1l_1,u.j1l_1,e),h=t+"."+v,d=r.w1j_1,p=new bu(h,u.f1l_1,u.g1l_1,u.j1l_1,u.q1l_1,u.r1l_1,u.s1l_1);d.n(p);var m=u.o1l_1;if(m!=null){var y=a,x=new Ww(h,m,u.p1l_1);y.n(x)}var k=u.n1l_1;k==null||i.s2(h,k);var S=fT(r,t+"-"+v,s);return l.fa(Tl(r,u.i1l_1,"")),l.fa("export const "+S+u.t1l_1+" = "+u.k1l_1(h)+`;
`),Tl(r,u.i1l_1,"    ")+("    "+Me(v)+": "+S+",")}}function $T(n,r){var e=n.k2(),t=r.k2();return bt(e,t)}function lp(n){return Cr(n,"type")==="string"&&Cr(n,"format")==="binary"}function JT(n){return r=>{var e=r.k2(),t=r.l2(),a=Or(t),i;if(lp(a))i="File";else{var s;if(Cr(a,"type")==="array"){var l=ir(a,"items"),u;l==null?u=null:u=lp(l),s=u===!0}else s=!1;s?i="File[]":i="string"}var f=i;return Me(e)+(n.l1(e)?"":"?")+": "+f}}function HT(n){return r=>"    { pattern: "+qn(n,En(r.e1m_1))+", requirement: "+qn(n,En(r.f1m_1))+` },
`}function GT(n){return Zn(n)}function KT(n){return"    "+Me(n)+": "+Zn(n)+`,
`}function WT(n){return"    '"+n.u1l_1+"': "+n.v1l_1+`;
`}function YT(n){return"    '"+n.u1l_1+"': ["+M(n.w1l_1)+`],
`}function ZT(n){return n+1|0}function VT(n){return r=>r===1?n:n+r}function XT(n){return Qv(n)}function QT(n){return n+1|0}function r7(n){return r=>n+r}function n7(n){return n.gg().e1(1)}function e7(n){return Zn(n)}function t7(n){return Zn(n)}function a7(n){return Zn(n)}function i7(n,r){return e=>{var t=e.pf("required"),a=t==null?null:On(t),i=(a==null?null:Un(a))==="true",s=ir(e,"schema"),l;s==null?l=null:l=$n(n,s,r);var u=l,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Cr(e,"name"),p=d??"";return Zn(p)+(i?"":"?")+": "+h}}function s7(n){return Zn(n)}function o7(n,r){return e=>{var t=e.k2(),a=e.l2(),i=Me(t),s=a instanceof er?a:null,l;s==null?l=null:l=$n(n,s,r);var u=l;return i+": "+(u??"unknown")}}function l7(n,r,e,t,a,i){return s=>{var l=M(Pt(n,"operation: '"+s+"'")),u=r?"stream":"request",f=M(e),c=a.toUpperCase();return"("+f+") => "+u+"<"+t+">('"+c+"', "+i+", { "+l+" })"}}function u7(n){return Qv(n)}function f7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Kn(n){Sr();for(var r=Te.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}var i=e,s=M(i,"",o,o,o,o,v7),l;C(s)===0?l="Unnamed":l=s;var u=l;return MS(Dx(u))?"_"+u:u}function Qv(n){Sr();var r=xu(n),e;if(C(r)>0){var t=G(r,0),a=kr(t).toUpperCase();e=w(a)+We(r,1)}else e=r;return e}function xu(n){Sr();for(var r=Te.ze("[^A-Za-z0-9]+").mf(n,0),e=A.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}for(var i=e,s=A.f1(Mr(i,10)),l=0,u=i.x();u.y();){var f=u.z(),c=l;l=c+1|0;var v;if(Pi(c)===0){var h;if(C(f)>0){var d=G(f,0),p=kr(d).toLowerCase();h=w(p)+We(f,1)}else h=f;v=h}else{var m;if(C(f)>0){var y=G(f,0),x=kr(y).toUpperCase();m=w(x)+We(f,1)}else m=f;v=m}var k=v;s.n(k)}return M(s,"")}function rh(n,r){r=r===o?Ft():r,Sr();var e=xu(n);return Gv().af(e)&&!jA().l1(e)&&!r.l1(e)?e:"_"+e}function Lb(n){return Sr(),rh(n,AA())}function Me(n){return Sr(),Gv().af(n)?n:Zn(n)}function Zn(n){Sr();var r=Yr.f();r.ga(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.fa("\\\\");else if(t===39)r.fa("\\'");else if(t===10)r.fa("\\n");else if(t===13)r.fa("\\r");else if(gn(t,32)<0||t===8232||t===8233){var a=Y(t);r.fa("\\u"+Ag(FS(a,16),4,48))}else r.ga(t)}return r.ga(39),r.toString()}function Mb(n){Sr();var r=n.pf("deprecated"),e=r instanceof vr?r:null;return(e==null?null:Tv(e))===!0}function Fb(n){Sr();var r=n.pf("readOnly"),e=r instanceof vr?r:null;return(e==null?null:Tv(e))===!0}function ir(n,r){Sr();var e=n.pf(r);return e instanceof er?e:null}function Su(n){Sr();for(var r=n.r2(),e=h7,t=new nb(e),a=Mt(r,t),i=ln(Mr(a,10),16),s=cr.na(i),l=a.x();l.y();){var u=l.z(),f=O(u.k2(),u.l2());s.s2(f.lh_1,f.mh_1)}return s}function pn(n,r){Sr();var e=n.pf(r);return e instanceof dn?e:null}function Cr(n,r){Sr();var e=n.pf(r),t=e instanceof vr?e:null;return t==null?null:Un(t)}function Eu(n,r){Sr();for(var e=pn(n,r),t=e??fr(),a=A.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=On(s).f18();a.n(l)}return a}function nh(n){Sr();var r=Cr(n,"format"),e;return r==null?e=null:e=wb().o2(r),e}function $b(n){Sr();var r=Cr(n,"format"),e;return r==null?e=null:e=Ao().o2(r),e}function jl(n,r){Sr();var e;if(n instanceof er){var t,a=Cr(n,"format");if((E(r,xn)?r:g()).m2(a))t=!0;else{var i=n.q2(),s;r:{var l;if(E(i,Z)?l=i.d1():l=!1,l){s=!1;break r}for(var u=i.x();u.y();){var f=u.z();if(jl(f,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof dn){var c;r:{var v;if(E(n,Z)?v=n.d1():v=!1,v){c=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(jl(d,r)){c=!0;break r}}c=!1}e=c}else e=!1;return e}function Ol(n){Sr();var r;if(n instanceof er){var e;if(nh(n)!=null)e=!0;else{var t=n.q2(),a;r:{var i;if(E(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(Ol(l)){a=!0;break r}}a=!1}e=a}r=e}else if(n instanceof dn){var u;r:{var f;if(E(n,Z)?f=n.d1():f=!1,f){u=!1;break r}for(var c=n.x();c.y();){var v=c.z();if(Ol(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var up;function eh(){if(up)return ur;up=!0,Jb=new qo("ADD_ERROR",0,"add-error.ts"),Hb=new qo("ADD_NESTED",1,"add-nested.ts"),Gb=new qo("MATCHES",2,"matches.ts")}var Jb,Hb,Gb;function c7(n){return Sr(),n.q16_1=!0,ur}function v7(n){return Sr(),Qv(n)}function h7(n,r){Sr();var e=n.k2(),t=r.k2();return bt(e,t)}function Kb(){return eh(),Jb}function d7(){return eh(),Hb}function fp(){return eh(),Gb}var cp;function Sr(){cp||(cp=!0,hb=sn(["get","post","put","patch","delete","head","options"]),db=Te.ze("[A-Za-z_$][A-Za-z0-9_$]*"),_b=Te.ze("\\{([^}]+)\\}"),gb=U6(o,c7),yb=sn(["guardPages","signedInUser","pageGuards"]),bb=hd([O("date","IsoDate"),O("time","IsoTime"),O("date-time","IsoDateTime")]),kb=hd([O("duration","IsoDuration"),O("decimal","Decimal")]),xb=Gs([O("IsoDuration","'PT0S'"),O("Decimal","'0'")]),Sb=pa(["string","integer","number"]),Eb=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,zb=pa(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),Ib=pa(["body","query","headers","options","encodeURIComponent"]),Cb=pa(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),qb=pa(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Ab=sn(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function vp(n,r){return r===1?"1 character":""+r+" characters"}var oi;function Dt(n){return n%1===0?Rn(n).toString():n.toString()}var fc;function Pl(){return fc===o&&new tb,fc}function p7(){return Yb(),Wb}var Wb;function Fe(n){return Yb(),qe(p7(),n)}var hp;function Yb(){hp||(hp=!0,Wb=Gs([O("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
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
`)]))}function S7(n,r){var e;try{for(var t=new rb(jn(r)).j1m(n),a=je(),i=$f.c18(),s=cr.na(t.c1()),l=t.r2().x();l.y();){var u=l.z(),f=u.k2(),c=En(u.l2());s.s2(f,c)}e=a.t15(i,new er(Uo(O("files",new er(s)))))}catch(y){var v;if(y instanceof Error){var h=y,d=je(),p=$f.c18(),m=h.message;v=d.t15(p,new er(Uo(O("error",En(m??h.toString())))))}else throw y;e=v}return e}_($w,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(hn,"InputHint");_(Jw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Hw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(ec,"EnumType");_(Gw,"EnumUsage");_(Kw,"Endpoint");_(Ww,"ErrorEntry");_(Yw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Zw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Vw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Xw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Qw);_(rb,"TypeScriptGenerator");_(qo,"ValidationHelper");_(bu,"GeneratedOperation");_(nb,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(eb,"ConstraintMessages");_(et,"RuleCheck");_(si,"RulePreset");U(tb,"RulePresets");oi=new eb;export{S7 as generateTypeScript};
