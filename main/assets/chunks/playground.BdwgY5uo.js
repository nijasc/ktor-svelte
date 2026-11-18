typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],a=t>>0,i=a<0?Math.max(e+a,0):Math.min(a,e),s=arguments[2],l=s===void 0?e:s>>0,u=l<0?Math.max(e+l,0):Math.min(l,e);i<u;)r[i]=n,i++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,w1=ArrayBuffer.isView,bs=Math.clz32;class pc{}class Oe{}class gp{}class mp{constructor(r){this.w_1=r}x(){return og(this.w_1)}}class yp{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class wp{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let bp=class{constructor(){T1=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Cn{constructor(r){Uc(),this.x1_1=r}i2(r){return mn(this.x1_1,r)}d(r){return Kx(this,r)}toString(){return xr(this.x1_1)}equals(r){return Wx(this.x1_1,r)}hashCode(){return Yx(this.x1_1)}}class Z{}class Le{}class En{}class ut{}class xn{}class bi{}let Lk=class{};class ae{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Me(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof ae?r:m())}equals(r){return this===r}hashCode(){return u2(this)}toString(){return this.w2_1}}let kp=class{constructor(){j1=this,this.z2_1=new b(0,-2147483648),this.a3_1=new b(-1,2147483647),this.b3_1=8,this.c3_1=64}};class b extends gp{constructor(r,e){Ml(),super(),this.d3_1=r,this.e3_1=e}f3(r){return ar(this,r)}d(r){return this.f3(r instanceof b?r:m())}toString(){return Bo(this,10)}equals(r){var e;return r instanceof b?e=sr(this,r):e=!1,e}hashCode(){return n2(this)}valueOf(){return se(this)}}class yn{}class xp{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw jr.r(""+this.h3_1);return r}}class Mk{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Fk{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class $k{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Jk{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Hk{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Gk{}class Kk{}class Sp{constructor(){$1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class zp{constructor(){J1=this;var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Int32Array(128),t=0,a=C(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i);e[Y(s)]=i}while(t<=a);var l="hCgBpCQGYHZH5BRpBPPPPPPRMP5BPPlCPP6BkEPPPPcPXPzBvBrB3BOiDoBHwD+E3DauCnFmBmB2D6E1BlBTiBmBlBP5BhBiBrBvBjBqBnBPRtBiCmCtBlB0BmB5BiB7BmBgEmChBZgCoEoGVpBSfRhBPqKQ2BwBYoFgB4CJuTiEvBuCuDrF5DgEgFlJ1DgFmBQtBsBRGsB+BPiBlD1EIjDPRPPPQPPPPPGQSQS/DxENVNU+B9zCwBwBPPCkDPNnBPqDYY1R8B7FkFgTgwGgwUwmBgKwBuBScmEP/BPPPPPPrBP8B7F1B/ErBqC6B7BiBmBfQsBUwCw/KwqIwLwETPcPjQgJxFgBlBsD",u=i1(l,e,222),f=new Int32Array(u.length),c=0,v=u.length-1|0;if(c<=v)do{var h=c;c=c+1|0,h===0?f[h]=u[h]:f[h]=f[h-1|0]+u[h]|0}while(c<=v);this.k4_1=f;var d="aaMBXHYH5BRpBPPPPPPRMP5BPPlCPPzBDOOPPcPXPzBvBjB3BOhDmBBpB7DoDYxB+EiBP1DoExBkBQhBekBPmBgBhBctBiBMWOOXhCsBpBkBUV3Ba4BkB0DlCgBXgBtD4FSdBfPhBPpKP0BvBXjEQ2CGsT8DhBtCqDpFvD1D3E0IrD2EkBJrBDOBsB+BPiBlB1EIjDPPPPPPPPPPPGPPMNLsBNPNPKCvBvBPPCkDPBmBPhDXXgD4B6FzEgDguG9vUtkB9JcuBSckEP/BPPPPPPBPf4FrBjEhBpC3B5BKaWPrBOwCk/KsCuLqDHPbPxPsFtEaaqDL";this.l4_1=i1(d,e,222);var p="GFjgggUHGGFFZZZmzpz5qB6s6020B60ptltB6smt2sB60mz22B1+vv+8BZZ5s2850BW5q1ymtB506smzBF3q1q1qB1q1q1+Bgii4wDTm74g3KiggxqM60q1q1Bq1o1q1BF1qlrqrBZ2q5wprBGFZWWZGHFsjiooLowgmOowjkwCkgoiIk7ligGogiioBkwkiYkzj2oNoi+sbkwj04DghhkQ8wgiYkgoioDsgnkwC4gikQ//v+85BkwvoIsgoyI4yguI0whiwEowri4CoghsJowgqYowgm4DkwgsY/nwnzPowhmYkg6wI8yggZswikwHgxgmIoxgqYkwgk4DkxgmIkgoioBsgssoBgzgyI8g9gL8g9kI0wgwJoxgkoC0wgioFkw/wI0w53iF4gioYowjmgBHGq1qkgwBF1q1q8qBHwghuIwghyKk0goQkwgoQk3goQHGFHkyg0pBgxj6IoinkxDswno7Ikwhz9Bo0gioB8z48Rwli0xN0mpjoX8w78pDwltoqKHFGGwwgsIHFH3q1q16BFHWFZ1q10q1B2qlwq1B1q10q1B2q1yq1B6q1gq1Biq1qhxBir1qp1Bqt1q1qB1g1q1+B//3q16B///q1qBH/qlqq9Bholqq9B1i00a1q10qD1op1HkwmigEigiy6Cptogq1Bixo1kDq7/j00B2qgoBWGFm1lz50B6s5q1+BGWhggzhwBFFhgk4//Bo2jigE8wguI8wguI8wgugUog1qoB4qjmIwwi2KgkYHHH4lBgiFWkgIWoghssMmz5smrBZ3q1y50B5sm7gzBtz1smzB5smz50BqzqtmzB5sgzqzBF2/9//5BowgoIwmnkzPkwgk4C8ys65BkgoqI0wgy6FghquZo2giY0ghiIsgh24B4ghsQ8QF/v1q1OFs0O8iCHHF1qggz/B8wg6Iznv+//B08QgohsjK0QGFk7hsQ4gB";this.m4_1=i1(p,e,222)}}class cn{}class Bl{toString(){return"kotlin.Unit"}}class qi{static a5(r){return Ua(this,r)}l1(r){var e;r:{var t;if(z(this,Z)?t=this.d1():t=!1,t){e=!1;break r}for(var a=this.x();a.y();){var i=a.z();if(D(i,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(z(r,Z)?t=r.d1():t=!1,t){e=!0;break r}for(var a=r.x();a.y();){var i=a.z();if(!this.l1(i)){e=!1;break r}}e=!0}return e}d1(){return this.c1()===0}toString(){return M(this,", ","[","]",o,o,pz(this))}toArray(){return Ug(this)}}class Ns extends qi{static z4(){return this.a5()}g1(r){this.b5();for(var e=!1,t=r.x();t.y();){var a=t.z();this.n(a)&&(e=!0)}return e}v2(){this.b5();for(var r=this.x();r.y();)r.z(),r.c5()}toJSON(){return this.toArray()}b5(){}}class _c{constructor(r,e){Fc(this,e),this.f5_1=r,this.d5_1=0,this.e5_1=-1}y(){return this.d5_1<this.f5_1.c1()}z(){if(!this.y())throw jr.j1();var r=this,e=this.d5_1;return this.d5_1=e+1|0,r.e5_1=e,this.f5_1.e1(this.e5_1)}c5(){if(this.e5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw mr.o3(w(r))}this.f5_1.h5(this.e5_1),this.d5_1=this.e5_1,this.e5_1=-1}}class Ep extends _c{constructor(r,e,t){t===o&&(t={}),t.l5_1=r,super(r,t),Mn.m5(e,this.l5_1.c1()),this.d5_1=e}}class Ip extends Ns{static n5(){var r=this.z4();return r.g5_1=0,r}n(r){return this.b5(),this.o5(this.c1(),r),!0}v2(){this.b5(),this.p5(0,this.c1())}x(){return new _c(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Ep(this,r)}p5(r,e){var t=this.m1(r),a=e-r|0,i=0;if(i<a)do i=i+1|0,t.z(),t.c5();while(i<a)}equals(r){return r===this?!0:r!=null&&z(r,En)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class Cp{static z5(){var r=Ua(this);return r.x5_1=null,r.y5_1=null,r}m2(r){return pd(this,r)!=null}n2(r){var e=this.r2(),t;r:{var a;if(z(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(D(s.l2(),r)){t=!0;break r}}t=!1}return t}g6(r){if(!(r!=null&&z(r,ut)))return!1;var e=r.k2(),t=r.l2(),a=(z(this,xn)?this:m()).o2(e);if(!D(t,a))return!1;var i;return a==null?i=!(z(this,xn)?this:m()).m2(e):i=!1,!i}equals(r){if(r===this)return!0;if(!(r!=null&&z(r,xn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var a;if(z(e,Z)?a=e.d1():a=!1,a){t=!0;break r}for(var i=e.x();i.y();){var s=i.z();if(!this.g6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=pd(this,r);return e==null?null:e.l2()}hashCode(){return br(this.r2())}d1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.x5_1==null){var r=this;r.x5_1=i_.zg(this)}return fn(this.x5_1)}toString(){var r=this.r2();return M(r,", ","{","}",o,o,gz(this))}q2(){if(this.y5_1==null){var r=this;r.y5_1=s_.ch(this)}return fn(this.y5_1)}}class Ap extends Cp{static w5(){var r=this.z5();return r.u5_1=null,r.v5_1=null,r}a6(){return Np.c6(this)}d6(){return Dp.f6(this)}p2(){var r=this.u5_1,e;if(r==null){var t=this.a6();this.u5_1=t,e=t}else e=r;return e}q2(){var r=this.v5_1,e;if(r==null){var t=this.d6();this.v5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.b5();for(var e=this.r2().x();e.y();){var t=e.z(),a=t.k2();if(D(r,a)){var i=t.l2();return e.c5(),i}}return null}b5(){}}class Us extends Ns{static h6(){return this.z4()}equals(r){return r===this?!0:r!=null&&z(r,Le)?As.i6(this,r):!1}hashCode(){return As.j6(this)}}let qp=class{constructor(){H1=this;var r=this,e=q.f1(0);e.l_1=!0,r.k6_1=e}};class Ds{}class q extends Ip{constructor(r){return new.target.i4(r)}static i4(r){is();var e=this.n5();return e.k_1=r,e.l_1=!1,e}static m(){is();var r=[];return this.i4(r)}static f1(r){is();var e=[],t=this.i4(e);if(!(r>=0)){var a="Negative initial capacity: "+r;throw T.v(w(a))}return t}static h1(r){is();var e=Pa(r);return this.i4(e)}m6(){return this.b5(),this.l_1=!0,this.c1()>0?this:is().k6_1}n6(r){}c1(){return this.k_1.length}e1(r){return this.k_1[s1(this,r)]}y4(r,e){this.b5(),s1(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.b5(),this.k_1.push(r),this.g5_1=this.g5_1+1|0,!0}o5(r,e){this.b5(),this.k_1.splice(K2(this,r),0,e),this.g5_1=this.g5_1+1|0}g1(r){if(this.b5(),r.d1())return!1;for(var e=G2(this,r.c1()),t=0,a=r.x();a.y();){var i=a.z(),s=t;t=s+1|0;var l=Bi(s);this.k_1[e+l|0]=i}return this.g5_1=this.g5_1+1|0,!0}h5(r){this.b5(),s1(this,r),this.g5_1=this.g5_1+1|0;var e;return r===Hs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}p5(r,e){this.b5(),this.g5_1=this.g5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.b5();var r=this;r.k_1=[],this.g5_1=this.g5_1+1|0}n1(r){return ex(this.k_1,r)}toString(){return s2(this.k_1)}o6(){return[].slice.call(this.k_1)}toArray(){return this.o6()}b5(){if(this.l_1)throw le.s6()}}class ks extends Ap{static z6(r){var e=this.w5();return X2(e),e.x6_1=r,e}static a7(){return this.z6(He.l7())}static m7(r,e){return this.z6(He.n7(r,e))}static o7(r){return this.m7(r,1)}static p7(r){return this.z6(He.q7(r))}v2(){this.x6_1.v2()}m2(r){return this.x6_1.r7(r)}n2(r){return this.x6_1.n2(r)}a6(){return Tp.t7(this.x6_1)}d6(){return jp.v7(this.x6_1)}r2(){var r=this.y6_1,e;if(r==null){var t=Pp.x7(this.x6_1);this.y6_1=t,e=t}else e=r;return e}o2(r){return this.x6_1.o2(r)}s2(r,e){return this.x6_1.s2(r,e)}t2(r){return this.x6_1.t2(r)}c1(){return this.x6_1.c1()}u2(r){return this.x6_1.u2(r)}}class Tp extends Us{constructor(r){return new.target.t7(r)}static t7(r){var e=this.h6();return e.s7_1=r,e}c1(){return this.s7_1.c1()}d1(){return this.s7_1.c1()===0}l1(r){return this.s7_1.r7(r)}v2(){return this.s7_1.v2()}n(r){throw le.s6()}g1(r){throw le.s6()}x(){return this.s7_1.y7()}b5(){return this.s7_1.z7()}}class jp extends Ns{constructor(r){return new.target.v7(r)}static v7(r){var e=this.z4();return e.u7_1=r,e}c1(){return this.u7_1.c1()}d1(){return this.u7_1.c1()===0}a8(r){return this.u7_1.n2(r)}l1(r){return this.a8(r)}b8(r){throw le.s6()}n(r){return this.b8(r)}c8(r){throw le.s6()}g1(r){return this.c8(r)}x(){return this.u7_1.d8()}b5(){return this.u7_1.z7()}}class Op extends Us{static f8(r){var e=this.h6();return e.e8_1=r,e}c1(){return this.e8_1.c1()}d1(){return this.e8_1.c1()===0}h8(r){return this.e8_1.j8(r)}l1(r){return r!=null&&z(r,ut)?this.h8(r!=null&&z(r,ut)?r:m()):!1}v2(){return this.e8_1.v2()}i8(r){throw le.s6()}n(r){return this.i8(r!=null&&z(r,ut)?r:m())}g1(r){throw le.s6()}j2(r){return this.e8_1.k8(r)}b5(){return this.e8_1.z7()}}class Pp extends Op{constructor(r){return new.target.x7(r)}static x7(r){return this.f8(r)}x(){return this.e8_1.g8()}}class Bp{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().k2()}c5(){return this.l8_1.c5()}}class Np extends Us{constructor(r){return new.target.c6(r)}static c6(r){var e=this.h6();return e.b6_1=r,e}m8(r){throw le.n8("Add is not supported on keys")}n(r){return this.m8(r)}v2(){return this.b6_1.v2()}r7(r){return this.b6_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.b6_1.r2().x();return new Bp(r)}c1(){return this.b6_1.c1()}b5(){return this.b6_1.b5()}}class Up{constructor(r){this.o8_1=r}y(){return this.o8_1.y()}z(){return this.o8_1.z().l2()}c5(){return this.o8_1.c5()}}class Dp extends Ns{constructor(r){return new.target.f6(r)}static f6(r){var e=this.z4();return e.e6_1=r,e}b8(r){throw le.n8("Add is not supported on values")}n(r){return this.b8(r)}a8(r){return this.e6_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.e6_1.r2().x();return new Up(r)}c1(){return this.e6_1.c1()}b5(){return this.e6_1.b5()}}class Aa extends Us{static p8(r){var e=this.h6();return e.a1_1=r,e}static q8(){return this.p8(He.l7())}static r8(r){for(var e=this.p8(He.s8(r.c1())),t=r.x();t.y();){var a=t.z();e.a1_1.s2(a,!0)}return e}static t8(r,e){return this.p8(He.n7(r,e))}static b1(r){return this.t8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.r7(r)}d1(){return this.a1_1.c1()===0}x(){return this.a1_1.y7()}c1(){return this.a1_1.c1()}}class Rp{constructor(){this.f9_1=-1640531527,this.g9_1=8,this.h9_1=2,this.i9_1=-1}}class Nl{constructor(r){this.j9_1=r,this.k9_1=0,this.l9_1=-1,this.m9_1=this.j9_1.i7_1,this.n9()}n9(){for(;this.k9_1<this.j9_1.g7_1&&this.j9_1.d7_1[this.k9_1]<0;)this.k9_1=this.k9_1+1|0}y(){return this.k9_1<this.j9_1.g7_1}c5(){if(this.o9(),this.l9_1===-1){var r="Call next() before removing element from the iterator.";throw mr.o3(w(r))}this.j9_1.z7(),Zg(this.j9_1,this.l9_1),this.l9_1=-1,this.m9_1=this.j9_1.i7_1}o9(){if(this.j9_1.i7_1!==this.m9_1)throw To.p9()}}class Lp extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1];return this.n9(),t}}class Mp extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=fn(this.j9_1.c7_1)[this.l9_1];return this.n9(),t}}class Fp extends Nl{z(){if(this.o9(),this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=new $p(this.j9_1,this.l9_1);return this.n9(),t}ca(){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var r=this,e=this.k9_1;this.k9_1=e+1|0,r.l9_1=e;var t=this.j9_1.b7_1[this.l9_1],a=t==null?null:br(t),i=a??0,s=fn(this.j9_1.c7_1)[this.l9_1],l=s==null?null:br(s),u=i^(l??0);return this.n9(),u}da(r){if(this.k9_1>=this.j9_1.g7_1)throw jr.j1();var e=this,t=this.k9_1;this.k9_1=t+1|0,e.l9_1=t;var a=this.j9_1.b7_1[this.l9_1];D(a,this.j9_1)?r.fa("(this Map)"):r.ea(a),r.ga(61);var i=fn(this.j9_1.c7_1)[this.l9_1];D(i,this.j9_1)?r.fa("(this Map)"):r.ea(i),this.n9()}}class $p{constructor(r,e){this.y8_1=r,this.z8_1=e,this.a9_1=this.y8_1.i7_1}k2(){return Xh(this),this.y8_1.b7_1[this.z8_1]}l2(){return Xh(this),fn(this.y8_1.c7_1)[this.z8_1]}equals(r){var e,t;return r!=null&&z(r,ut)?t=D(r.k2(),this.k2()):t=!1,t?e=D(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:br(r),t=e??0,a=this.l2(),i=a==null?null:br(a);return t^(i??0)}toString(){return we(this.k2())+"="+we(this.l2())}}class Jp{}function Wk(n){var r;r:{var e;if(z(n,Z)?e=n.d1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var a=t.z(),i=a,s;if(i!=null&&z(i,ut)?s=this.ka(i):s=!1,!s){r=!1;break r}}r=!0}return r}class He{constructor(r,e,t,a,i,s){return new.target.ha(r,e,t,a,i,s)}static ha(r,e,t,a,i,s){var l=Ua(this);return l.b7_1=r,l.c7_1=e,l.d7_1=t,l.e7_1=a,l.f7_1=i,l.g7_1=s,l.h7_1=Jg(Cs,ct(l)),l.i7_1=0,l.j7_1=0,l.k7_1=!1,l}c1(){return this.j7_1}static l7(){return this.s8(8)}static s8(r){return this.ha(Rg(r),null,new Int32Array(r),new Int32Array($g(Cs,r)),2,0)}static q7(r){var e=this.s8(r.c1());return e.u2(r),e}static n7(r,e){var t=this.s8(r);if(!(e>0)){var a="Non-positive load factor: "+e;throw T.v(w(a))}return t}ia(){this.z7(),this.k7_1=!0}n2(r){return eS(this,r)>=0}o2(r){var e=mo(this,r);return e<0?null:fn(this.c7_1)[e]}r7(r){return mo(this,r)>=0}s2(r,e){var t=Yg(this,r),a=Gg(this);if(t<0){var i=a[(-t|0)-1|0];return a[(-t|0)-1|0]=e,i}else return a[t]=e,null}u2(r){this.z7(),sS(this,r.r2())}t2(r){this.z7();var e=mo(this,r);if(e<0)return null;var t=fn(this.c7_1)[e];return Zg(this,e),t}v2(){this.z7();var r=0,e=this.g7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var a=this.d7_1[t];a>=0&&(this.e7_1[a]=0,this.d7_1[t]=-1)}while(t!==e);Do(this.b7_1,0,this.g7_1);var i=this.c7_1;i==null||Do(i,0,this.g7_1),this.j7_1=0,this.g7_1=0,Jl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&z(r,xn)?t=aS(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.g8();e.y();)r=r+e.ca()|0;return r}toString(){var r=Yr.ja(2+lr(this.j7_1,3)|0);r.fa("{");for(var e=0,t=this.g8();t.y();)e>0&&r.fa(", "),t.da(r),e=e+1|0;return r.fa("}"),r.toString()}z7(){if(this.k7_1)throw le.s6()}j8(r){var e=mo(this,r.k2());return e<0?!1:D(fn(this.c7_1)[e],r.l2())}ka(r){return this.j8(z(r,ut)?r:m())}y7(){return new Lp(this)}d8(){return new Mp(this)}g8(){return new Fp(this)}}class Hp{constructor(){K1=this;var r=this,e=He.s8(0);e.ia(),r.la_1=cr.ma(e)}}class cr extends ks{static t4(){var r=this.a7();return r}static na(r){var e=this.o7(r);return e}static oa(r){var e=this.p7(r);return e}static ma(r){var e=this.z6(r);return e}m6(){this.x6_1.ia();var r;return this.c1()>0?r=this:r=oS().la_1,r}b5(){return this.x6_1.z7()}}class Pn extends Aa{static i1(){var r=this.q8();return r}static k1(r){var e=this.r8(r);return e}static pa(r,e){var t=this.t8(r,e);return t}static i(r){return this.pa(r,1)}b5(){return this.a1_1.z7()}}class ht{}class Gp{qa(){var r="This continuation is already complete";throw mr.o3(w(r))}ra(r){var e="This continuation is already complete";throw mr.o3(w(e))}sa(r){return this.ra(r)}toString(){return"This continuation is already complete"}}class gc{constructor(){this.za_1=null}bb(){var r=this.za_1,e;if(r==null){var t=this.qa().cb(nf),a=t==null?null:t.db(this),i=a??this;this.za_1=i,e=i}else e=r;return e}ab(){var r=this.za_1;r!=null&&r!==this&&fn(this.qa().cb(nf)).eb(r),this.za_1=Vg}}class mc extends gc{constructor(r){super(),this.ua_1=r;var e=this;e.va_1=o;var t=this,a=this.ua_1;t.wa_1=a==null?null:a.qa()}qa(){return fn(this.wa_1)}xa(r){var e=Ts(),t=n0(r),a=t==null?this.va_1.next(r):this.va_1.throw(t),i=a.done,s=a.value;r:for(;!i;){try{s=s()}catch(c){var l=c,u=this.va_1.throw(l);s=u.value,i=u.done;continue r}if(s===e)break r;var f=this.va_1.next(s);s=f.value,i=f.done}return s}ya(r,e){return r=r===o?null:r,e===o?this.xa(r):e.xa.call(this,new _a(r))}ra(r){var e=null,t;try{t=this.xa(r)}catch(v){var a;if(v instanceof Error){var i=v;e=i,a=null}else throw v;t=a}var s=t;if(s===Ts())return or;this.ab();var l=this.ua_1;if(l!=null)if(e!=null){var u=e,f=e0(u);l.sa(f)}else{var c=s;l.sa(c)}}sa(r){return this.ra(r)}}class Kp{constructor(r,e,t){this.kb_1=r,this.lb_1=e,this.mb_1=t}qa(){return this.kb_1}ra(r){var e=this.lb_1;ZE(r)&&e(r);var t=this.mb_1,a=n0(r);return a==null||t(a),or}sa(r){return this.ra(r)}}class xs extends Error{static tb(){var r=di(this,Error,[null]);return pi(r),u1(r),r}static k3(r){var e=di(this,Error,[r]);return pi(e,r),u1(e),e}static ub(r,e){var t=di(this,Error,[r,zg(e)]);return pi(t,r,e),u1(t),t}}class ye extends xs{static nb(){var r=this.tb();return l1(r),r}static d9(r){var e=this.k3(r);return l1(e),e}static sb(r,e){var t=this.ub(r,e);return l1(t),t}}class le extends ye{static s6(){var r=this.nb();return Qh(r),r}static n8(r){var e=this.d9(r);return Qh(e),e}}class T extends ye{static qb(){var r=this.nb();return o1(r),r}static v(r){var e=this.d9(r);return o1(e),e}static rb(r,e){var t=this.sb(r,e);return o1(t),t}}class jr extends ye{static j1(){var r=this.nb();return rd(r),r}static r(r){var e=this.d9(r);return rd(e),e}}class Wn extends ye{static yb(){var r=this.nb();return nd(r),r}static zb(r){var e=this.d9(r);return nd(e),e}}class mr extends ye{static ac(){var r=this.nb();return ed(r),r}static o3(r){var e=this.d9(r);return ed(e),e}}class To extends ye{static p9(){var r=this.nb();return td(r),r}static x8(r){var e=this.d9(r);return td(e),e}}class b1 extends ye{static ec(){var r=this.nb();return ad(r),r}static fc(r){var e=this.d9(r);return ad(e),e}}class jo extends Error{static kc(){var r=di(this,Error,[null]);return pi(r),f1(r),r}static nc(r){var e=di(this,Error,[r]);return pi(e,r),f1(e),e}static mc(r,e){var t=di(this,Error,[r,zg(e)]);return pi(t,r,e),f1(t),t}}class vs extends jo{static ic(){var r=this.kc();return id(r),r}static lc(r){var e=r==null?null:w(r),t=this.mc(e,r instanceof Error?r:null);return id(t),t}}class k1 extends T{static sc(){var r=this.qb();return sd(r),r}static tc(r){var e=this.v(r);return sd(e),e}}class x1 extends ye{static s3(){var r=this.nb();return hS(r),r}}class S1 extends ye{static w3(){var r=this.nb();return dS(r),r}}class z1 extends ye{static a4(){var r=this.nb();return pS(r),r}}class at{}class Ti{equals(r){var e;return r instanceof yc?e=!1:r instanceof Ti?e=D(this.zc(),r.zc())&&this.uc()==r.uc():e=!1,e}hashCode(){var r=this.uc(),e=r==null?null:me(r);return e??0}toString(){return"class "+this.uc()}}class sn extends Ti{constructor(r,e,t){super(),this.wc_1=r,this.xc_1=e,this.yc_1=t}zc(){return this.wc_1}uc(){return this.xc_1}vc(r){return this.yc_1(r)}}class yc extends Ti{constructor(){Ro=null,super(),Ro=this,this.ad_1="Nothing"}uc(){return this.ad_1}vc(r){return!1}zc(){throw le.n8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class E1 extends Ti{constructor(r){super(),this.bd_1=r;var e=this,t=this.bd_1.$metadata$;e.cd_1=t==null?null:t.simpleName}zc(){return this.bd_1}uc(){return this.cd_1}vc(r){return I2(r,this.bd_1)}}class Wp{}class Ba{}class Yp{constructor(){W1=this;var r=this,e=Object;r.anyClass=new sn(e,"Any",bS);var t=this,a=Number;t.numberClass=new sn(a,"Number",kS),this.nothingClass=wS();var i=this,s=Boolean;i.booleanClass=new sn(s,"Boolean",xS);var l=this,u=Number;l.byteClass=new sn(u,"Byte",SS);var f=this,c=Number;f.shortClass=new sn(c,"Short",zS);var v=this,h=Number;v.intClass=new sn(h,"Int",ES);var d=this,p=b;d.longClass=new sn(p,"Long",IS);var g=this,y=Number;g.floatClass=new sn(y,"Float",CS);var x=this,k=Number;x.doubleClass=new sn(k,"Double",AS);var S=this,E=Array;S.arrayClass=new sn(E,"Array",qS);var I=this,A=String;I.stringClass=new sn(A,"String",TS);var j=this,P=Error;j.throwableClass=new sn(P,"Throwable",jS);var $=this,B=Array;$.booleanArrayClass=new sn(B,"BooleanArray",OS);var N=this,H=Uint16Array;N.charArrayClass=new sn(H,"CharArray",PS);var L=this,J=Int8Array;L.byteArrayClass=new sn(J,"ByteArray",BS);var R=this,V=Int16Array;R.shortArrayClass=new sn(V,"ShortArray",NS);var K=this,nr=Int32Array;K.intArrayClass=new sn(nr,"IntArray",US);var W=this,tr=typeof BigInt>"u"?o:BigInt;W.bigIntClass=new sn(tr,"BigInt",DS);var Q=this,ur=Array;Q.longArrayClass=new sn(ur,"LongArray",RS);var X=this,Sr=Float32Array;X.floatArrayClass=new sn(Sr,"FloatArray",LS);var kr=this,dr=Float64Array;kr.doubleArrayClass=new sn(dr,"DoubleArray",MS)}dd(){return this.anyClass}ed(){return this.numberClass}fd(){return this.nothingClass}gd(){return this.booleanClass}hd(){return this.byteClass}id(){return this.shortClass}jd(){return this.intClass}kd(){return this.longClass}ld(){return this.floatClass}md(){return this.doubleClass}nd(){return this.arrayClass}od(){return this.stringClass}pd(){return this.throwableClass}qd(){return this.booleanArrayClass}rd(){return this.charArrayClass}sd(){return this.byteArrayClass}td(){return this.shortArrayClass}ud(){return this.intArrayClass}vd(){return this.bigIntClass}wd(){return this.longArrayClass}xd(){return this.floatArrayClass}yd(){return this.doubleArrayClass}functionClass(r){var e=od()[r],t;if(e==null){var a=Function,i="Function"+r,s=new sn(a,i,FS(r));od()[r]=s,t=s}else t=e;return t}}class Ph extends xs{constructor(r){return new.target.be(r)}static be(r){var e=this.k3(r);return vn(e,e.ae_1),e}static ce(){return this.be(null)}}class Yr{constructor(r){return new.target.de(r)}static de(r){var e=Ua(this);return e.e_1=r,e}static ja(r){return this.f()}static f(){return this.de("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Wn.zb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return Gn(this.e_1,r,e)}ga(r){return this.e_1=this.e_1+xr(r),this}g(r){return this.e_1=this.e_1+we(r),this}ee(r,e,t){return this.fe(r??"null",e,t)}ea(r){return this.e_1=this.e_1+we(r),this}ge(r){return this.fa(r.toString())}he(r){return this.fa(r.toString())}fa(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ie(r,e){return Mn.m5(r,this.a()),this.e_1=Gn(this.e_1,0,r)+xr(e)+Ye(this.e_1,r),this}je(r){if(r<0)throw T.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=Gn(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+xr(0);while(e<r)}}toString(){return this.e_1}ke(){return this.e_1="",this}le(r){return Mn.l6(r,this.a()),this.e_1=Gn(this.e_1,0,r)+Ye(this.e_1,r+1|0),this}fe(r,e,t){var a=w(r);return Mn.me(e,t,a.length),this.e_1=this.e_1+Gn(a,e,t),this}}class Zp{constructor(){Z1=this,this.ne_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.oe_1=new RegExp("[\\\\$]","g"),this.pe_1=new RegExp("\\$","g")}qe(r){var e=this.ne_1;return r.replace(e,"\\$&")}re(r){var e=this.pe_1;return r.replace(e,"$$$$")}}class ge{constructor(r,e){return new.target.ye(r,e)}static ye(r,e){gi();var t=Ua(this);return t.se_1=r,t.te_1=dt(e),t.ue_1=new RegExp(r,XS(e,"gu")),t.ve_1=null,t.we_1=null,t}static ze(r,e){return gi(),this.ye(r,$l(e))}static af(r){return gi(),this.ye(r,Ft())}bf(r){JS(this.ue_1);var e=this.ue_1.exec(w(r));return e!=null&&e.index===0&&this.ue_1.lastIndex===C(r)}xe(r,e){if(e<0||e>C(r))throw Wn.zb("Start index out of bounds: "+e+", input length: "+C(r));return tm(this.ue_1,w(r),e,this.ue_1)}cf(r,e,t){return e=e===o?0:e,t===o?this.xe(r,e):t.xe.call(this,r,e)}df(r,e){if(e<0||e>C(r))throw Wn.zb("Start index out of bounds: "+e+", input length: "+C(r));var t=WS(this,r,e);return qz(t,YS)}ef(r,e,t){return e=e===o?0:e,t===o?this.df(r,e):t.df.call(this,r,e)}ff(r,e){if(!Sd(e,92)&&!Sd(e,36)){var t=w(r),a=this.ue_1;return t.replace(a,e)}return this.gf(r,ZS(e))}gf(r,e){var t=this.cf(r);if(t==null)return w(r);var a=0,i=C(r),s=Yr.ja(i);do{var l=fn(t);s.ee(r,a,l.hf().lf()),s.g(e(l)),a=l.hf().mf()+1|0,t=l.z()}while(a<i&&t!=null);return a<i&&s.ee(r,a,i),s.toString()}nf(r,e){iv(e);for(var t=this.ef(r),a=e===0?t:Fx(t,e-1|0),i=q.m(),s=0,l=a.x();l.y();){var u=l.z();i.n(w(Ln(r,s,u.hf().lf()))),s=u.hf().mf()+1|0}return i.n(w(Ln(r,s,C(r)))),i}toString(){return this.ue_1.toString()}}class I1 extends ae{constructor(r,e,t){super(r,e),this.qf_1=t}}class Ss{constructor(r){this.sf_1=r}toString(){return"MatchGroup(value="+this.sf_1+")"}hashCode(){return me(this.sf_1)}equals(r){return this===r?!0:!(!(r instanceof Ss)||this.sf_1!==r.sf_1)}}class wc{}class Vp extends qi{constructor(r,e){return new.target.dg(r,e)}static dg(r,e,t){return t===o&&(t={}),t.uf_1=r,t.vf_1=e,this.a5(t)}c1(){return this.uf_1.length}x(){var r=Px(wz(this));return Na(r,az(this)).x()}e1(r){var e=this.uf_1[r],t;return e==null?t=null:t=new Ss(e),t}tf(r){var e=this.uf_1.groups,t;if(e==null)throw T.v("Capturing group with name {"+r+"} does not exist. No named capturing group was defined in Regex");t=e;var a=t;if(!iz(this.vf_1,a,r))throw T.v("Capturing group with name {"+r+"} does not exist");var i=a[r],s;return i==null?s=null:s=new Ss(i!=null&&typeof i=="string"?i:m()),s}}class bc extends qi{static gg(r){return this.a5(r)}x(){return new kc(this)}n1(r){var e;r:{for(var t=0,a=this.x();a.y();){var i=a.z();if(D(i,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new r_(this,r)}equals(r){return r===this?!0:r!=null&&z(r,En)?Mn.q5(this,r):!1}hashCode(){return Mn.r5(this)}}class Xp extends bc{constructor(r){return new.target.fg(r)}static fg(r,e){return e===o&&(e={}),e.eg_1=r,this.gg(e)}c1(){return this.eg_1.length}e1(r){var e=this.eg_1[r];return e??""}}class Qp{constructor(r,e,t,a){this.zf_1=r,this.ag_1=e,this.bg_1=t,this.cg_1=a,this.wf_1=r;var i=this;i.xf_1=Vp.dg(e,this),this.yf_1=null}hf(){return this.wf_1}rf(){return this.xf_1}hg(){if(this.yf_1==null){var r=this;r.yf_1=Xp.fg(this.ag_1)}return fn(this.yf_1)}z(){return tm(this.bg_1,this.cg_1,this.zf_1.d1()?sz(this,this.zf_1.lf()):this.zf_1.mf()+1|0,this.bg_1)}}let Yk=class{constructor(r){this.ig_1=r}jg(r,e){return this.ig_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.ig_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}};class Ct extends ae{constructor(r,e,t){super(r,e),this.mg_1=t}}class kc{constructor(r,e){Fc(this,e),this.sg_1=r,this.rg_1=0}y(){return this.rg_1<this.sg_1.c1()}z(){if(!this.y())throw jr.j1();var r=this.rg_1;return this.rg_1=r+1|0,this.sg_1.e1(r)}}class r_ extends kc{constructor(r,e,t){t===o&&(t={}),t.vg_1=r,super(r,t),Mn.m5(e,this.vg_1.c1()),this.rg_1=e}}class n_{constructor(){this.w4_1=2147483639}l6(r,e){if(r<0||r>=e)throw Wn.zb("index: "+r+", size: "+e)}m5(r,e){if(r<0||r>e)throw Wn.zb("index: "+r+", size: "+e)}x4(r,e,t){if(r<0||e>t)throw Wn.zb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw T.v("fromIndex: "+r+" > toIndex: "+e)}me(r,e,t){if(r<0||e>t)throw Wn.zb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw T.v("startIndex: "+r+" > endIndex: "+e)}e9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}r5(r){for(var e=1,t=r.x();t.y();){var a=t.z(),i=lr(31,e),s=a==null?null:br(a);e=i+(s??0)|0}return e}q5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),a=r.x();a.y();){var i=a.z(),s=t.z();if(!D(i,s))return!1}return!0}}class e_{constructor(r){this.wg_1=r}y(){return this.wg_1.y()}z(){return this.wg_1.z().k2()}}class t_{constructor(r){this.xg_1=r}y(){return this.xg_1.y()}z(){return this.xg_1.z().l2()}}class Zk{}class a_ extends qi{static ah(r){return this.a5(r)}equals(r){return r===this?!0:r!=null&&z(r,Le)?As.i6(this,r):!1}hashCode(){return As.j6(this)}}class i_ extends a_{constructor(r){return new.target.zg(r)}static zg(r,e){return e===o&&(e={}),e.yg_1=r,this.ah(e)}r7(r){return this.yg_1.m2(r)}l1(r){return this.r7(r)}x(){var r=this.yg_1.r2().x();return new e_(r)}c1(){return this.yg_1.c1()}}class s_ extends qi{constructor(r){return new.target.ch(r)}static ch(r,e){return e===o&&(e={}),e.bh_1=r,this.a5(e)}a8(r){return this.bh_1.n2(r)}l1(r){return this.a8(r)}x(){var r=this.bh_1.r2().x();return new t_(r)}c1(){return this.bh_1.c1()}}class o_{j6(r){for(var e=0,t=r.x();t.y();){var a=t.z(),i=e,s=a==null?null:br(a);e=i+(s??0)|0}return e}i6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class l_{constructor(){V1=this,this.dh_1=new b(-1478467534,-1720727600)}equals(r){var e;return r!=null&&z(r,En)?e=r.d1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}d1(){return!0}eh(r){return!1}l1(r){return!1}e1(r){throw Wn.zb("Empty list doesn't contain element at index "+r+".")}fh(r){return-1}n1(r){return-1}x(){return qs}m1(r){if(r!==0)throw Wn.zb("Index: "+r);return qs}}class u_{y(){return!1}z(){throw jr.j1()}}class Ul{constructor(r,e){this.gh_1=r,this.hh_1=e}toString(){return"IndexedValue(index="+this.gh_1+", value="+we(this.hh_1)+")"}hashCode(){var r=this.gh_1;return r=lr(r,31)+(this.hh_1==null?0:br(this.hh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Ul)||this.gh_1!==r.gh_1||!D(this.hh_1,r.hh_1))}}class f_{constructor(r){this.ih_1=r}x(){return new c_(this.ih_1())}}class c_{constructor(r){this.jh_1=r,this.kh_1=0}y(){return this.jh_1.y()}z(){var r=this.kh_1;return this.kh_1=r+1|0,new Ul(Bi(r),this.jh_1.z())}}class v_{}class h_{constructor(){X1=this,this.oh_1=new b(-888910638,1920087921)}equals(r){var e;return r!=null&&z(r,xn)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}d1(){return!0}ph(r){return!1}m2(r){return this.ph(r)}qh(r){return null}o2(r){return this.qh(r)}r2(){return rf()}p2(){return rf()}q2(){return dm()}}class d_{z(){return this.th()}}class p_{constructor(r){this.vh_1=r,this.uh_1=r.wh_1.x()}z(){return this.vh_1.xh_1(this.uh_1.z())}y(){return this.uh_1.y()}}class __{constructor(r,e){this.wh_1=r,this.xh_1=e}x(){return new p_(this)}}class Dl{}class g_{constructor(r){this.yh_1=r.bi_1,this.zh_1=r.ai_1.x()}z(){if(this.yh_1===0)throw jr.j1();return this.yh_1=this.yh_1-1|0,this.zh_1.z()}y(){return this.yh_1>0&&this.zh_1.y()}}class Rl{constructor(r,e){if(this.ai_1=r,this.bi_1=e,!(this.bi_1>=0)){var t="count must be non-negative, but was "+this.bi_1+".";throw T.v(w(t))}}v1(r){return r>=this.bi_1?this:new Rl(this.ai_1,r)}x(){return new g_(this)}}class m_{x(){return qs}v1(r){return Kl}}class y_{constructor(r){this.ei_1=r,this.ci_1=null,this.di_1=-2}z(){if(this.di_1<0&&yd(this),this.di_1===0)throw jr.j1();var r=this.ci_1,e=r??m();return this.di_1=-1,e}y(){return this.di_1<0&&yd(this),this.di_1===1}}class xc{constructor(r,e){this.fi_1=r,this.gi_1=e}x(){return new y_(this)}}class w_{constructor(){Q1=this,this.hi_1=new b(1993859828,793161749)}equals(r){var e;return r!=null&&z(r,Le)?e=r.d1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}d1(){return!0}eh(r){return!1}l1(r){return!1}ii(r){return r.d1()}j2(r){return this.ii(r)}x(){return qs}}class b_{ji(r,e){return Me(r,e)}compare(r,e){var t=r!=null&&D1(r)?r:m();return this.ji(t,e!=null&&D1(e)?e:m())}}let k_=class{constructor(r){this.ki_1=r}jg(r,e){return this.ki_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.ki_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}},x_=class{};class Vk{}class S_{constructor(){ef=this,this.li_1=new b(0,0)}cb(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class z_ extends ae{}class E_ extends bc{constructor(r){return new.target.ni(r)}static ni(r){var e=this.gg();return e.mi_1=r,e}c1(){return this.mi_1.length}e1(r){return Mn.l6(r,this.mi_1.length),this.mi_1[r]}oi(r){if(r===null)return!1;var e=Nh(this.mi_1,r.x2_1);return e===r}l1(r){return r instanceof ae?this.oi(r instanceof ae?r:m()):!1}pi(r){if(r===null)return-1;var e=r.x2_1,t=Nh(this.mi_1,e);return t===r?e:-1}n1(r){return r instanceof ae?this.pi(r instanceof ae?r:m()):-1}}class I_{constructor(){tf=this,this.p1_1=new Rt(1,0)}}class Rs{constructor(r,e,t){if(t===0)throw T.v("Step must be non-zero.");if(t===-2147483648)throw T.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=Mz(r,e,t),this.t1_1=t}x(){return new C_(this.r1_1,this.s1_1,this.t1_1)}d1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof Rs?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.d1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class vi{}class Rt extends Rs{constructor(r,e){Sm(),super(r,e,1)}lf(){return this.r1_1}mf(){return this.s1_1}qi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.qi(typeof r=="number"?r:m())}d1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Rt?e=this.d1()&&r.d1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.d1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class C_ extends d_{constructor(r,e,t){super(),this.ri_1=t,this.si_1=e,this.ti_1=this.ri_1>0?r<=e:r>=e,this.ui_1=this.ti_1?r:this.si_1}y(){return this.ti_1}th(){var r=this.ui_1;if(r===this.si_1){if(!this.ti_1)throw jr.j1();this.ti_1=!1}else this.ui_1=this.ui_1+this.ri_1|0;return r}}class A_{q1(r,e,t){return new Rs(r,e,t)}}class q_{constructor(r){this.aj_1=r,this.vi_1=-1,this.wi_1=Rx(r.cj_1,0,C(r.bj_1)),this.xi_1=this.wi_1,this.yi_1=null,this.zi_1=0}z(){if(this.vi_1===-1&&xd(this),this.vi_1===0)throw jr.j1();var r=this.yi_1,e=r instanceof Rt?r:m();return this.yi_1=null,this.vi_1=-1,e}y(){return this.vi_1===-1&&xd(this),this.vi_1===1}}class T_{constructor(r,e,t,a){this.bj_1=r,this.cj_1=e,this.dj_1=t,this.ej_1=a}x(){return new q_(this)}}class Xk{constructor(){this.fj_1=0,this.gj_1=1,this.hj_1=2}}class j_{constructor(r){this.ij_1=r,this.jj_1=0,this.kj_1=0,this.lj_1=0,this.mj_1=0}y(){if(this.jj_1!==0)return this.jj_1===1;if(this.mj_1<0)return this.jj_1=2,!1;var r=-1,e=C(this.ij_1),t=this.kj_1,a=C(this.ij_1);if(t<a)r:do{var i=t;t=t+1|0;var s=rr(this.ij_1,i);if(s===10||s===13){r=s===13&&(i+1|0)<C(this.ij_1)&&rr(this.ij_1,i+1|0)===10?2:1,e=i;break r}}while(t<a);return this.jj_1=1,this.mj_1=r,this.lj_1=e,!0}z(){if(!this.y())throw jr.j1();this.jj_1=0;var r=this.lj_1,e=this.kj_1;this.kj_1=this.lj_1+this.mj_1|0;var t=this.ij_1;return w(Ln(t,e,r))}}class O_{constructor(r){this.nj_1=r}x(){return new j_(this.nj_1)}}class P_{constructor(){af=this,this.oj_1=new b(0,0),this.pj_1=Ut(new b(-1,1073741823)),this.qj_1=Ut(new b(1,-1073741824)),this.rj_1=new b(-16162,2147483647),this.sj_1=new b(-16162,2147483647)}tj(r){var e=new Ae(r),t=e.uj_1;if(sv(t)){var a=Sn(t);if(!(ar(new b(387905,-1073741824),a)<=0&&ar(a,new b(-387905,1073741823))<=0))throw vs.lc(Sn(t).toString()+" ns is out of nanoseconds range")}else{var i,s=Sn(t);if(ar(new b(1,-1073741824),s)<0&&ar(s,new b(-1,1073741823))<0)i=!1;else{var l=Sn(t);i=!(sr(l,new b(-1,1073741823))||sr(l,new b(1,-1073741824)))}if(i)throw vs.lc(Sn(t).toString()+" ms is out of milliseconds range");var u=Sn(t);if(ar(new b(1108857478,-1074),u)<=0&&ar(u,new b(-1108857478,1073))<=0)throw vs.lc(Sn(t).toString()+" ms is denormalized")}return e.uj_1}vj(r){var e;try{var t=new Ae(xE(r,!0)),a=t.uj_1;if(D(new Ae(a),new Ae(Wr().sj_1))){var i="invariant failed";throw mr.o3(w(i))}e=t.uj_1}catch(l){if(l instanceof T){var s=l;throw T.rb("Invalid ISO duration string format: '"+r+"'.",s)}else throw l}return e}}class Ae{constructor(r){Wr(),this.uj_1=r}wj(r){return Lm(this.uj_1,r)}d(r){return dE(this,r)}toString(){return yE(this.uj_1)}hashCode(){return bE(this.uj_1)}equals(r){return kE(this.uj_1,r)}}class B_{constructor(){sf=this,this.xj_1=new C1(new b(-1,1073741823),!0),this.yj_1=new C1(new b(-1,2147483647),!1)}}class C1{constructor(r,e){Gm(),this.zj_1=r,this.ak_1=e;var t=this,a=this.zj_1;t.bk_1=qr(a,F(10));var i=this,s=this.zj_1;i.ck_1=Nt(s,F(10))}}class Qk{}class N_{constructor(){lf=this,this.dk_1=new ft(new b(342103040,-7347440),0),this.ek_1=new ft(new b(-90867457,7347410),999999999)}fk(r,e){var t=new b(1e9,0),a=qr(e,t);if(ar(Re(e,t),new b(0,0))<0&&!sr(Tr(a,t),e)){var i=a;a=Hr(i,lt())}var s=a,l=gr(r,s);if(ar(Re(r,l),new b(0,0))<0&&ar(Re(r,s),new b(0,0))>=0)return ar(r,new b(0,0))>0?jt().ek_1:jt().dk_1;var u=l,f;if(ar(u,new b(342103040,-7347440))<0)f=this.dk_1;else if(ar(u,new b(-90867457,7347410))>0)f=this.ek_1;else{var c=new b(1e9,0),v=Nt(e,c),h=gr(v,Is(c,Ls(Is(Re(v,c),Ta(v,on(v))),63))),d=rn(h);f=new ft(u,d)}return f}gk(r,e){return this.fk(r,F(e))}hk(r){return LE(r).ik()}}class ft{constructor(r,e){jt(),this.jk_1=r,this.kk_1=e;var t=this.jk_1;if(!(ar(new b(342103040,-7347440),t)<=0&&ar(t,new b(-90867457,7347410))<=0)){var a="Instant exceeds minimum or maximum instant";throw T.v(w(a))}}lk(r){var e=this.jk_1.f3(r.jk_1);return e!==0?e:Me(this.kk_1,r.kk_1)}d(r){return this.lk(r instanceof ft?r:m())}equals(r){var e;if(this===r)e=!0;else{var t,a;r instanceof ft?a=sr(this.jk_1,r.jk_1):a=!1,a?t=this.kk_1===r.kk_1:t=!1,e=t}return e}hashCode(){return this.jk_1.hashCode()+lr(51,this.kk_1)|0}toString(){return RE(this)}}class U_{constructor(r,e){this.uk_1=r,this.vk_1=e}ik(){if(ar(this.uk_1,jt().dk_1.jk_1)<0||ar(this.uk_1,jt().ek_1.jk_1)>0)throw Ec.al("The parsed date is outside the range representable by Instant (Unix epoch second "+this.uk_1.toString()+")");return jt().gk(this.uk_1,this.vk_1)}}class Sc{constructor(r,e){this.bl_1=r,this.cl_1=e}ik(){throw Ec.al(this.bl_1+' when parsing an Instant from "'+lv(this.cl_1,64)+'"')}}class D_{mk(r){var e=r.jk_1,t=new b(86400,0),a=qr(e,t);if(ar(Re(e,t),new b(0,0))<0&&!sr(Tr(a,t),e)){var i=a;a=Hr(i,lt())}var s=a,l=new b(86400,0),u=Nt(e,l),f=gr(u,Is(l,Ls(Is(Re(u,l),Ta(u,on(u))),63))),c=rn(f),v,h,d,p=gr(s,F(719528)),g=p;p=Hr(g,F(60));var y=new b(0,0);if(ar(p,new b(0,0))<0){var x=p,k=gr(x,F(1)),S=qr(k,F(146097)),E=Hr(S,F(1));y=Tr(E,F(400));var I=p,A=on(E),j=Tr(A,F(146097));p=gr(I,j)}var P=Tr(Rn(400),p),$=gr(P,F(591)),B=qr($,F(146097)),N=p,H=Tr(Rn(365),B),L=B,J=qr(L,F(4)),R=gr(H,J),V=B,K=qr(V,F(100)),nr=Hr(R,K),W=B,tr=qr(W,F(400)),Q=Hr(N,gr(nr,tr));if(ar(Q,new b(0,0))<0){var ur=B;B=Hr(ur,lt());var X=p,Sr=Tr(Rn(365),B),kr=B,dr=qr(kr,F(4)),zr=gr(Sr,dr),Er=B,Br=qr(Er,F(100)),Nr=Hr(zr,Br),pr=B,Gr=qr(pr,F(400));Q=Hr(X,gr(Nr,Gr))}B=gr(B,y);var tn=rn(Q),Zr=(lr(tn,5)+2|0)/153|0;h=((Zr+2|0)%12|0)+1|0,d=(tn-((lr(Zr,306)+5|0)/10|0)|0)+1|0;var _r=B,Fr=Zr/10|0,Vr=gr(_r,F(Fr));v=rn(Vr);var Xr=c/3600|0,$r=c-lr(Xr,3600)|0,an=$r/60|0,_n=$r-lr(an,60)|0;return new zc(v,h,d,Xr,an,_n,r.kk_1)}}class zc{constructor(r,e,t,a,i,s,l){this.nk_1=r,this.ok_1=e,this.pk_1=t,this.qk_1=a,this.rk_1=i,this.sk_1=s,this.tk_1=l}toString(){return"UnboundLocalDateTime("+this.nk_1+"-"+this.ok_1+"-"+this.pk_1+" "+this.qk_1+":"+this.rk_1+":"+this.sk_1+"."+this.tk_1+")"}}class Ec extends T{constructor(r){return new.target.al(r)}static al(r){var e=this.v(r);return vn(e,e.zk_1),e}}class R_{}class L_{constructor(r){this.el_1=r}}class M_ extends R_{constructor(r,e){super();var t=this;t.fl_1=E2(r,2)?r:m(),this.gl_1=e;var a=this;a.hl_1=z(this,ht)?this:m(),this.il_1=h1()}qa(){return km()}kl(r){this.hl_1=null,this.il_1=r}sa(r){return this.kl(r)}*dl(r,e){return yield()=>{var t=e,a=this;return a.hl_1=z(t,ht)?t:m(),this.gl_1=r,Ts()}}jl(){r:for(;;){var r=this.il_1,e=this.hl_1,t;if(e==null){var a=new _a(r)instanceof _a?r:m();return rI(a),a}else t=e;var i=t;if(D(new _a(h1()),new _a(r))){var s;try{var l=this.fl_1,u=this.gl_1;s=uS(l,this,u,i)}catch(d){if(d instanceof Error){var f=d,c=e0(f);i.sa(c);continue r}else throw d}var v=s;if(v!==Ts()){var h=v;i.sa(h)}}else this.il_1=h1(),i.sa(r)}}}class F_ extends ae{}class Ic{constructor(r){this.ll_1=r,this.ml_1=Eo}l2(){return this.ml_1===Eo&&(this.ml_1=fn(this.ll_1)(),this.ll_1=null),this.ml_1}nl(){return this.ml_1!==Eo}toString(){return this.nl()?we(this.l2()):"Lazy value not initialized yet."}}class $_{}class rx{}class Lt{constructor(r){this.ol_1=r}equals(r){var e;return r instanceof Lt?e=D(this.ol_1,r.ol_1):e=!1,e}hashCode(){return br(this.ol_1)}toString(){return"Failure("+this.ol_1.toString()+")"}}class _a{constructor(r){this.pl_1=r}toString(){return VE(this.pl_1)}hashCode(){return XE(this.pl_1)}equals(r){return QE(this.pl_1,r)}}class Bh extends jo{constructor(r){return new.target.hb(r)}static hb(r){r=r===o?"An operation is not implemented.":r;var e=this.nc(r);return vn(e,e.gb_1),e}}class Ll{constructor(r,e){this.mh_1=r,this.nh_1=e}toString(){return"("+we(this.mh_1)+", "+we(this.nh_1)+")"}rh(){return this.mh_1}sh(){return this.nh_1}hashCode(){var r=this.mh_1==null?0:br(this.mh_1);return r=lr(r,31)+(this.nh_1==null?0:br(this.nh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Ll)||!D(this.mh_1,r.mh_1)||!D(this.nh_1,r.nh_1))}}class J_{constructor(){uf=this,this.ng_1=new Ot(new b(0,0),new b(0,0)),this.og_1=16,this.pg_1=128}qg(r,e){var t;return sr(r,new b(0,0))&&sr(e,new b(0,0))?t=this.ng_1:t=new Ot(r,e),t}ql(r){var e;switch(r.length){case 36:e=hz(r);break;case 32:e=dz(r);break;default:throw T.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+nI(r,64)+'" of length '+r.length))}return e}}class Ot{constructor(r,e){Ys(),this.rl_1=r,this.sl_1=e}toString(){return this.tl()}tl(){var r=new Int8Array(36);ss(this.rl_1,r,0,0,4);var e=45,t=Y(e);r[8]=Jn(t),ss(this.rl_1,r,9,4,6);var a=45,i=Y(a);r[13]=Jn(i),ss(this.rl_1,r,14,6,8);var s=45,l=Y(s);r[18]=Jn(l),ss(this.sl_1,r,19,0,2);var u=45,f=Y(u);return r[23]=Jn(f),ss(this.sl_1,r,24,2,8),lz(r)}equals(r){return this===r?!0:r instanceof Ot?sr(this.rl_1,r.rl_1)&&sr(this.sl_1,r.sl_1):!1}ul(r){var e;if(sr(this.rl_1,r.rl_1)){var l=this.sl_1,u=l,f=r.sl_1,c=f;e=Tt(u,c)}else{var t=this.rl_1,a=t,i=r.rl_1,s=i;e=Tt(a,s)}return e}d(r){return this.ul(r instanceof Ot?r:m())}hashCode(){return Re(this.rl_1,this.sl_1).hashCode()}}class H_{constructor(){ff=this,this.vl_1=0,this.wl_1=-1,this.xl_1=1,this.yl_1=8}}class Ke{constructor(r){ru(),this.zl_1=r}am(r){return t0(this.zl_1,r)}d(r){return eI(this,r)}toString(){return cf(this.zl_1)}hashCode(){return this.zl_1}equals(r){return tI(this.zl_1,r)}}class G_{constructor(r){this.bm_1=r,this.cm_1=0}y(){return this.cm_1<this.bm_1.length}dm(){var r;if(this.cm_1<this.bm_1.length){var e=this.cm_1;this.cm_1=e+1|0;var t=this.bm_1[e];r=t}else throw jr.r(this.cm_1.toString());return r}z(){return new Ke(this.dm())}}class ya{constructor(r){this.em_1=r}c1(){return za(this.em_1)}x(){return sI(this.em_1)}fm(r){return a0(this.em_1,r)}l1(r){return oI(this,r)}d1(){return lI(this.em_1)}toString(){return uI(this.em_1)}hashCode(){return fI(this.em_1)}equals(r){return cI(this.em_1,r)}}class K_{constructor(){vf=this,this.gm_1=0,this.hm_1=-1,this.im_1=4,this.jm_1=32}}class ue{constructor(r){nu(),this.km_1=r}lm(r){return i0(this.km_1,r)}d(r){return vI(this,r)}toString(){return hf(this.km_1)}hashCode(){return this.km_1}equals(r){return hI(this.km_1,r)}}class W_{constructor(r){this.mm_1=r,this.nm_1=0}y(){return this.nm_1<this.mm_1.length}om(){var r;if(this.nm_1<this.mm_1.length){var e=this.nm_1;this.nm_1=e+1|0;var t=this.mm_1[e];r=t}else throw jr.r(this.nm_1.toString());return r}z(){return new ue(this.om())}}class wa{constructor(r){this.pm_1=r}c1(){return Ea(this.pm_1)}x(){return _I(this.pm_1)}qm(r){return s0(this.pm_1,r)}l1(r){return gI(this,r)}d1(){return mI(this.pm_1)}toString(){return yI(this.pm_1)}hashCode(){return wI(this.pm_1)}equals(r){return bI(this.pm_1,r)}}class Y_{constructor(){df=this,this.rm_1=new b(0,0),this.sm_1=new b(-1,-1),this.tm_1=8,this.um_1=64}}class fe{constructor(r){Zs(),this.vm_1=r}wm(r){return o0(this.vm_1,r)}d(r){return kI(this,r)}toString(){return pf(this.vm_1)}hashCode(){return xI(this.vm_1)}equals(r){return SI(this.vm_1,r)}}class Z_{constructor(r){this.xm_1=r,this.ym_1=0}y(){return this.ym_1<this.xm_1.length}zm(){var r;if(this.ym_1<this.xm_1.length){var e=this.ym_1;this.ym_1=e+1|0;var t=this.xm_1[e];r=t}else throw jr.r(this.ym_1.toString());return r}z(){return new fe(this.zm())}}class ba{constructor(r){this.an_1=r}c1(){return Ia(this.an_1)}x(){return II(this.an_1)}bn(r){return l0(this.an_1,r)}l1(r){return CI(this,r)}d1(){return AI(this.an_1)}toString(){return qI(this.an_1)}hashCode(){return TI(this.an_1)}equals(r){return jI(this.an_1,r)}}class V_{constructor(){_f=this,this.cn_1=0,this.dn_1=-1,this.en_1=2,this.fn_1=16}}class We{constructor(r){eu(),this.gn_1=r}hn(r){return u0(this.gn_1,r)}d(r){return OI(this,r)}toString(){return gf(this.gn_1)}hashCode(){return this.gn_1}equals(r){return PI(this.gn_1,r)}}class X_{constructor(r){this.in_1=r,this.jn_1=0}y(){return this.jn_1<this.in_1.length}kn(){var r;if(this.jn_1<this.in_1.length){var e=this.jn_1;this.jn_1=e+1|0;var t=this.in_1[e];r=t}else throw jr.r(this.jn_1.toString());return r}z(){return new We(this.kn())}}class ka{constructor(r){this.ln_1=r}c1(){return Ca(this.ln_1)}x(){return UI(this.ln_1)}mn(r){return f0(this.ln_1,r)}l1(r){return DI(this,r)}d1(){return RI(this.ln_1)}toString(){return LI(this.ln_1)}hashCode(){return MI(this.ln_1)}equals(r){return FI(this.ln_1,r)}}function nx(n){return new Rt(0,Cc(n))}function ex(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,n[a]==null)return a}while(e<=t)}else{var i=0,s=n.length-1|0;if(i<=s)do{var l=i;if(i=i+1|0,D(r,n[l]))return l}while(i<=s)}return-1}function tx(n,r){return ox(n,r)>=0}function ax(n,r){return lx(n,r)>=0}function ix(n,r){return ux(n,r)>=0}function sx(n,r){return fx(n,r)>=0}function Cc(n){return n.length-1|0}function ox(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function lx(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function ux(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,sr(r,n[a]))return a}while(e<=t);return-1}function fx(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function cx(n){return n.length-1|0}function Q_(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,vx(n,Yr.f(),r,e,t,a,i,s).toString()}function vx(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=0,c=n.length;r:for(;f<c;){var v=n[f];if(f=f+1|0,u=u+1|0,u>1&&r.g(e),i<0||u<=i)zm(r,v,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function hx(n){return new Rt(0,gx(n))}function dx(n){var r;switch(n.length){case 0:r=fr();break;case 1:r=jn(n[0]);break;default:var e=n.slice();r=Fl(e);break}return r}function px(n){return new f_(kx(n))}function rg(n){switch(n.length){case 0:return Ft();case 1:return $l(n[0]);default:return ng(n,Pn.i(n.length))}}function _x(n){return mx(n,q.m())}function gx(n){return n.length-1|0}function ng(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,r.n(a)}return r}function mx(n,r){for(var e=0,t=n.length;e<t;){var a=n[e];e=e+1|0,a!=null&&r.n(a)}return r}function yx(n,r){return bx(n,r)>=0}function eg(n){var r;switch(n.length){case 0:throw jr.r("Array is empty.");case 1:r=n[0];break;default:throw T.v("Array has more than one element.")}return r}function wx(n){return n.length===0?ym():new mp(n)}function bx(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;if(e=e+1|0,r===n[a])return a}while(e<=t);return-1}function Nh(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function kx(n){return()=>og(n)}function M(n,r,e,t,a,i,s){return r=r===o?", ":r,e=e===o?"":e,t=t===o?"":t,a=a===o?-1:a,i=i===o?"...":i,s=s===o?null:s,tg(n,Yr.f(),r,e,t,a,i,s).toString()}function tg(n,r,e,t,a,i,s,l){e=e===o?", ":e,t=t===o?"":t,a=a===o?"":a,i=i===o?-1:i,s=s===o?"...":s,l=l===o?null:l,r.g(t);var u=0,f=n.x();r:for(;f.y();){var c=f.z();if(u=u+1|0,u>1&&r.g(e),i<0||u<=i)zm(r,c,l);else break r}return i>=0&&u>i&&r.g(s),r.g(a),r}function xx(n){return zs(n,Aa.b1(Mr(n,12)))}function Sx(n){for(var r=Po(n.c1()),e=0,t=n.x();t.y();){var a=t.z(),i=e;e=i+1|0,r[i]=a}return r}function xa(n){if(z(n,Z)){if(n.c1()<=1)return wt(n);var r=Pa(n),e=Fs(r)?r:m();return q2(e),Fl(e)}var t=Oc(n);return J2(t),t}function ki(n){return wt(Tc(n))}function Ac(n){if(n.d1())throw jr.r("List is empty.");return n.e1(0)}function Pt(n,r){var e=q.f1(n.c1()+1|0);return e.g1(n),e.n(r),e}function Dn(n,r){if(z(r,Z)){var e=q.f1(n.c1()+r.c1()|0);return e.g1(n),e.g1(r),e}else{var t=q.h1(n);return Di(t,r),t}}function zx(n,r){return 0<=r&&r<n.c1()?n.e1(r):null}function dt(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=Ft();break;case 1:var e;z(n,En)?e=n.e1(0):e=n.x().z(),r=$l(e);break;default:r=zs(n,Pn.i(n.c1()));break}return r}return jz(zs(n,Pn.i1()))}function wt(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=fr();break;case 1:var e;z(n,En)?e=n.e1(0):e=n.x().z(),r=jn(e);break;default:r=jc(n);break}return r}return rv(Oc(n))}function qc(n){return n.c1()===1?n.e1(0):null}function Ex(n,r){var e=n.x();if(!e.y())throw jr.j1();for(var t=e.z();e.y();){var a=e.z();r.compare(t,a)>0&&(t=a)}return t}function Tc(n){var r;return z(n,Z)?r=Pn.k1(n):r=zs(n,Pn.i1()),r}function Ix(n,r){return z(n,Z)?n.l1(r):qx(n,r)>=0}function r1(n){return n.d1()?null:n.e1(0)}function ag(n){var r;switch(n.c1()){case 0:throw jr.r("List is empty.");case 1:r=n.e1(0);break;default:throw T.v("List has more than one element.")}return r}function jc(n){return q.h1(n)}function Cx(n,r){return Tx(n,ln(n.c1()-r|0,0))}function ig(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return wt(n);var t;if(z(n,Z)){var a=n.c1()-r|0;if(a<=0)return fr();if(a===1)return jn(jx(n));if(t=q.f1(a),z(n,En)){if(z(n,Ds)){var i=r,s=n.c1();if(i<s)do{var l=i;i=i+1|0,t.n(n.e1(l))}while(i<s)}else for(var u=n.m1(r);u.y();){var f=u.z();t.n(f)}return t}}else t=q.m();for(var c=0,v=n.x();v.y();){var h=v.z();c>=r?t.n(h):c=c+1|0}return rv(t)}function Ax(n){if(z(n,En))return n.d1()?null:n.e1(0);var r=n.x();return r.y()?r.z():null}function sg(n){return n.d1()?null:n.e1(n.c1()-1|0)}function zs(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Oc(n){return z(n,Z)?jc(n):zs(n,q.m())}function Mt(n,r){if(z(n,Z)){if(n.c1()<=1)return wt(n);var e=Pa(n),t=Fs(e)?e:m();return T2(t,r),Fl(t)}var a=Oc(n);return H2(a,r),a}function qx(n,r){if(z(n,En))return n.n1(r);for(var e=0,t=n.x();t.y();){var a=t.z();if(Bi(e),D(r,a))return e;e=e+1|0}return-1}function Tx(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}if(r===0)return fr();if(z(n,Z)){if(r>=n.c1())return wt(n);if(r===1)return jn(Ox(n))}var t=0,a=q.f1(r),i=n.x();r:for(;i.y();){var s=i.z();if(a.n(s),t=t+1|0,t===r)break r}return rv(a)}function jx(n){if(z(n,En))return A1(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Ox(n){if(z(n,En))return Ac(n);var r=n.x();if(!r.y())throw jr.r("Collection is empty.");return r.z()}function A1(n){if(n.d1())throw jr.r("List is empty.");return n.e1(Hs(n))}function Px(n){return new yp(n)}function Bx(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Me(e,t)>0&&(e=t)}return e}function Pc(n,r){return r<=-2147483648?Sm().p1_1:Ge(n,r-1|0)}function Nx(n,r){return tv.q1(n,r,-1)}function Bt(n,r){return n>r?r:n}function ln(n,r){return n<r?r:n}function Ux(n,r){return tv.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Bc(n,r,e){if(ar(r,e)>0)throw T.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return ar(n,r)<0?r:ar(n,e)>0?e:n}function Dx(n,r){return ar(n,r)<0?r:n}function Rx(n,r,e){if(r>e)throw T.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function n1(n,r){return ar(n,r)>0?r:n}function bo(n,r){var e=Lx(r);return e!=null?n.u1(e):!1}function Lx(n){return ar(new b(-2147483648,-1),n)<=0&&ar(n,new b(2147483647,0))<=0?rn(n):null}function Nc(n){var r=n.x();if(!r.y())return fr();var e=r.z();if(!r.y())return jn(e);var t=q.m();for(t.n(e);r.y();)t.n(r.z());return t}function Na(n,r){return new __(n,r)}function Mx(n){return new wp(n)}function Fx(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw T.v(w(e))}var t;return r===0?t=ym():z(n,Dl)?t=n.v1(r):t=new Rl(n,r),t}function q1(n,r){var e=kz(r),t;e==null?t=null:t=n.c1()+e|0;var a=t,i=Pn.i(a??lr(n.c1(),2));return i.g1(n),Di(i,r),i}function Oo(n,r){var e=Pn.i(n.c1()+1|0);return e.g1(n),e.n(r),e}function $x(n){if(C(n)===0)throw jr.r("Char sequence is empty.");return rr(n,0)}function Jx(n){var r;switch(C(n)){case 0:throw jr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw T.v("Char sequence has more than one element.")}return r}function Hx(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw T.v(w(e))}return Ye(n,Bt(r,n.length))}function Gx(n){var r=n&65535;return r}function mn(n,r){return n-r|0}function Kx(n,r){return mn(n.x1_1,r instanceof Cn?r.x1_1:m())}function Hn(n,r){return n-r|0}function Y(n){return n}function xr(n){return String.fromCharCode(n)}function Wx(n,r){return r instanceof Cn?n===r.x1_1:!1}function Yx(n){return n}var T1;function Uc(){return T1===o&&new bp,T1}function we(n){var r=n==null?null:w(n);return r??"null"}function Zx(n,r){var e=n??"null",t=w(r);return e+(t??"null")}var j1;function Ml(){return j1===o&&new kp,j1}function Vx(n){var r;return n<0?r=-n:r=n,r}function og(n){return new xp(n)}function Po(n){var r="BooleanArray",e=lg(Array(n),!1);return e.$type$=r,e}function lg(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var a=e;e=e+1|0,n[a]=r}while(a!==t);return n}function Es(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function qa(n){var r="LongArray",e=lg(Array(n),new b(0,0));return e.$type$=r,e}function ji(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function e1(){return Oi(),ug}var ug;function fg(){return Oi(),cg}var cg;function O1(){return Oi(),vg}var vg;function hg(){return Oi(),dg}var dg;function Xx(){return Oi(),pg}var pg;function Qx(n){return Oi(),(n|0)===n?No(n):(fg()[0]=n,lr(O1()[Xx()],31)+O1()[hg()]|0)}var Uh;function Oi(){Uh||(Uh=!0,ug=new ArrayBuffer(8),cg=new Float64Array(e1()),new Float32Array(e1()),vg=new Int32Array(e1()),fg()[0]=-1,dg=O1()[0]!==0?1:0,pg=1-hg()|0)}function ot(){return yr(),_g}var _g;function lt(){return yr(),gg}var gg;function Dh(){return yr(),mg}var mg;function r2(){return yr(),yg}var yg;function Je(){return yr(),wg}var wg;function Rh(){return yr(),bg}var bg;function ar(n,r){if(yr(),sr(n,r))return 0;var e=Ce(n),t=Ce(r);return e&&!t?-1:!e&&t?1:Ce(Hr(n,r))?-1:1}function P1(n){return yr(),Jn(n.d3_1)}function B1(n){return yr(),Jc(n.d3_1)}function rn(n){return yr(),n.d3_1}function se(n){return yr(),n.e3_1*4294967296+e2(n)}function Bo(n,r){if(yr(),Sa(n))return"0";if(Ce(n))if(sr(n,Je())){var e=F(r),t=qr(n,e),a=rn(Hr(Tr(t,e),n)),i=Bo(t,r);return i+a.toString(r)}else return"-"+Bo(on(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,l=xi(Math.pow(r,s)),u=n,f="";;){var c=qr(u,l),v=rn(Hr(u,Tr(c,l))),h=v.toString(r);if(u=c,Sa(u))return h+f;for(;h.length<s;)h="0"+h;f=h+f}}function sr(n,r){return yr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function n2(n){return yr(),n.d3_1^n.e3_1}function F(n){return yr(),new b(n,n<0?-1:0)}function Ce(n){return yr(),n.e3_1<0}function Hr(n,r){return yr(),gr(n,on(r))}function e2(n){return yr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function Sa(n){return yr(),n.e3_1===0&&n.d3_1===0}function Tr(n,r){if(yr(),Sa(n))return ot();if(Sa(r))return ot();if(sr(n,Je()))return Lh(r)?Je():ot();if(sr(r,Je()))return Lh(n)?Je():ot();if(Ce(n)){var e;return Ce(r)?e=Tr(on(n),on(r)):e=on(Tr(on(n),r)),e}else if(Ce(r))return on(Tr(n,on(r)));if(Mh(n,Rh())&&Mh(r,Rh()))return xi(se(n)*se(r));var t=n.e3_1>>>16|0,a=n.e3_1&65535,i=n.d3_1>>>16|0,s=n.d3_1&65535,l=r.e3_1>>>16|0,u=r.e3_1&65535,f=r.d3_1>>>16|0,c=r.d3_1&65535,v=0,h=0,d=0,p=0;return p=p+lr(s,c)|0,d=d+(p>>>16|0)|0,p=p&65535,d=d+lr(i,c)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,f)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,c)+lr(a,f)|0)+lr(i,u)|0)+lr(s,l)|0)|0,v=v&65535,new b(d<<16|p,v<<16|h)}function on(n){return yr(),gr(Dc(n),new b(1,0))}function xi(n){if(yr(),Js(n))return ot();if(n<=-9223372036854776e3)return Je();if(n+1>=9223372036854776e3)return r2();if(n<0)return on(xi(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new b(e,t)}function gr(n,r){yr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,a=n.d3_1>>>16|0,i=n.d3_1&65535,s=r.e3_1>>>16|0,l=r.e3_1&65535,u=r.d3_1>>>16|0,f=r.d3_1&65535,c=0,v=0,h=0,d=0;return d=d+(i+f|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(a+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+l|0)|0,c=c+(v>>>16|0)|0,v=v&65535,c=c+(e+s|0)|0,c=c&65535,new b(h<<16|d,c<<16|v)}function Lh(n){return yr(),(n.d3_1&1)===1}function Mh(n,r){return yr(),ar(n,r)<0}function Dc(n){return yr(),new b(~n.d3_1,~n.e3_1)}function qr(n,r){if(yr(),Sa(r))throw xs.k3("division by zero");if(Sa(n))return ot();if(sr(n,Je())){if(sr(r,lt())||sr(r,Dh()))return Je();if(sr(r,Je()))return lt();var e=Ls(n,1),t=oe(qr(e,r),1);if(sr(t,ot()))return Ce(r)?lt():Dh();var a=Hr(n,Tr(r,t));return gr(t,qr(a,r))}else if(sr(r,Je()))return ot();if(Ce(n)){var i;return Ce(r)?i=qr(on(n),on(r)):i=on(qr(on(n),r)),i}else if(Ce(r))return on(qr(n,on(r)));for(var s=ot(),l=n;a2(l,r);){for(var u=se(l)/se(r),f=Math.max(1,Math.floor(u)),c=Math.ceil(Math.log(f)/Math.LN2),v=c<=48?1:Math.pow(2,c-48),h=xi(f),d=Tr(h,r);Ce(d)||t2(d,l);)f=f-v,h=xi(f),d=Tr(h,r);Sa(h)&&(h=lt()),s=gr(s,h),l=Hr(l,d)}return s}function Ls(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new b(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function oe(n,r){yr();var e=r&63;return e===0?n:e<32?new b(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new b(0,n.d3_1<<(e-32|0))}function t2(n,r){return yr(),ar(n,r)>0}function a2(n,r){return yr(),ar(n,r)>=0}function Nt(n,r){return yr(),Hr(n,Tr(qr(n,r),r))}function Is(n,r){return yr(),new b(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function Ta(n,r){return yr(),new b(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Re(n,r){return yr(),new b(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Rc(n,r){yr();var e=r&63;if(e===0)return n;if(e<32)return new b(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new b(n.e3_1,0):t=new b(n.e3_1>>>(e-32|0)|0,0),t}function Rn(n){yr();var r;return n instanceof b?r=n:r=xi(n),r}function hi(n){return yr(),ja(n)&&n.$type$==="LongArray"}function i2(n){return yr(),n!=null?hi(n):!1}var Fh;function yr(){if(!Fh){Fh=!0,_g=F(0),gg=F(1),mg=F(-1),yg=new b(-1,2147483647),wg=new b(0,-2147483648),bg=F(16777216);var n=Array;new sn(n,"LongArray",i2)}}function rr(n,r){var e;return Lc(n)?e=G(n,r):e=n.b(r),e}function Lc(n){return typeof n=="string"}function G(n,r){return n.charCodeAt(r)}function C(n){var r;return Lc(n)?r=n.length:r=n.a(),r}function Ln(n,r,e){var t;return Lc(n)?t=Gn(n,r,e):t=n.c(r,e),t}function s2(n){return Q_(n,", ","[","]",o,o,o2)}function kg(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!qg(t)||e.length!=t.length)return!1;var a=0,i=e.length;if(a<i)do{var s=a;if(a=a+1|0,!D(e[s],t[s]))return!1}while(a<i);return!0}function xg(n){var r=n;if(r==null)return 0;var e=1,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0,e=lr(e,31)+br(r[i])|0}while(t<a);return e}function o2(n){return w(n)}function Me(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=$h(n,r):r instanceof b?t=$h(n,se(r)):t=Jh(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Jh(n,r);break;default:e=l2(n,r);break}return e}function $h(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var a=1/n,i;a===1/r?i=0:a<0?i=-1:i=1,t=i}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Jh(n,r){return n<r?-1:n>r?1:0}function l2(n,r){return n.d(r)}function u2(n){return N1(n)}function N1(n){if(!("kotlinHashCodeValue$"in n)){var r=Sg(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function Sg(){return Math.random()*4294967296|0}function w(n){var r;return n==null?r="null":qg(n)?r="[...]":typeof n.toString!="function"?r=f2(n):r=n.toString(),r}function f2(n){return Object.prototype.toString.call(n)}function D(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var a=1/n;t=a===1/r}e=t}else e=!1;return e}if(U1(n)&&U1(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!ja(n.$bound)||!ja(r.$bound))return!1;var i=n.$bound,s=r.$bound;return kg(i,s)}return n===r}function br(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():N1(n);break;case"function":e=U1(n)?c2(n):N1(n);break;case"number":e=Qx(n);break;case"boolean":e=Mc(n);break;case"string":e=me(String(n));break;case"bigint":e=v2(n);break;case"symbol":e=h2(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function c2(n){var r=n.$flags;r=lr(31,r)+br(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var a=n.$bound;if(a!=null&&ja(a)){var i=a;r=lr(31,r)+xg(i)|0}return r}function Mc(n){return n?1231:1237}function me(n){var r=0,e=n.length,t=0,a=e-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n.charCodeAt(i);r=lr(r,31)+s|0}while(i!==a);return r}function v2(n){var r=BigInt(32),e=BigInt(4294967295),t=Vx(n),a=0,i;n<0?i=-1:i=1;var s=i;r:for(;;){if(t==0)break r;var l=t&e,u=Number(l);a=lr(31,a)+u|0,t=t>>r}return lr(a,s)}function h2(n){var r=d2(n)?p2():_2(),e=r.get(n);if(e!==o)return e;var t=Sg();return r.set(n,t),t}function d2(n){return Symbol.keyFor(n)!=o}function p2(){return t1===o&&(t1=new Map),t1}function _2(){return a1===o&&(a1=new WeakMap),a1}var t1,a1;function vn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function Ua(n,r){var e=Object.create(n.prototype);return Fc(e,r),e}function Fc(n,r){r!==o&&Object.assign(n,r)}function di(n,r,e,t){var a;a=n;var i=a;return Reflect.construct(r,e,i)}function g2(n){return n===o}function zg(n){return{cause:n}}function pi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(g2(r)){var a=e==null?null:e.toString();t=a??o}else t=o;n.message=t}}function m2(){return Ig(),Eg}var Eg;function y2(n,r){return Ig(),n!=o&&n[m2()]?r(n):cS(r)}var Hh;function Ig(){Hh||(Hh=!0,Eg=ht.Symbol)}function Ms(){throw x1.s3()}function w2(){throw S1.w3()}function m(){throw z1.a4()}function fn(n){var r;return n==null?w2():r=n,r}function Cg(n,r,e,t,a,i){var s=o;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:a,suspendArity:i,$kClass$:s,defaultConstructor:e}}function _(n,r,e,t,a,i,s,l){var u="class";$c(u,n,r,e,t,a,i,s,l)}function $c(n,r,e,t,a,i,s,l,u){var f=Cg(n,e,t,l,u,s);r.$metadata$=f;var c=r.prototype;if(i!=null)for(var v=0,h=i.length;v<h;){var d=i[v];v=v+1|0,Object.assign(c,d.prototype),c[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function U(n,r,e,t,a,i,s,l){var u="object";$c(u,n,r,e,t,a,i,s,l)}function Pr(n,r,e,t,a,i,s,l){var u="interface";$c(u,n,r,e,t,a,i,s,l)}function nn(n,r,e,t){U(n,"Companion",o,r,e,t,o,o)}function b2(n){var r=n.length,e=Array(r),t=0,a=r-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=n[i];s!=null&&Fs(s)?e[i]=s:e[i]=[].slice.call(s)}while(i!==a);return[].concat.apply([],e)}function Jn(n){return n<<24>>24}function No(n){var r;return n instanceof b?r=rn(n):r=k2(n),r}function k2(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Jc(n){return n<<16>>16}function it(n){var r=No(n),e=Jc(r);return Gx(e)}function Ge(n,r){return new Rt(n,r)}function x2(){return Pi(),Ag}var Ag;function ai(){return Pi(),Cg("class",o,o,o,o,o)}function Da(n,r,e,t,a,i){return Pi(),t.get=t,t.set=a,t.callableName=n,S2(t,z2(r,a),e)}function S2(n,r,e){Pi(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function z2(n,r){return Pi(),x2()[n][r==null?0:1]}function Fe(n,r,e,t,a,i){return Pi(),n.callableName=a,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=i,n}var Gh;function Pi(){if(!Gh){Gh=!0;var n=[ai(),ai()],r=[ai(),ai()];Ag=[n,r,[ai(),ai()]]}}function qg(n){return ja(n)||w1(n)}function ja(n){return Array.isArray(n)}function U1(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function z(n,r){return n[r.Symbol]===!0}function Fs(n){var r;return ja(n)?r=!n.$type$:r=!1,r}function E2(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,a=t==null?null:t.$metadata$,i=a==null?null:a.suspendArity,s;if(i==null)return!1;s=i;var l=s,u=!1,f=0,c=l.length;r:for(;f<c;){var v=l[f];if(f=f+1|0,r===v){u=!0;break r}}return u}function Tg(n){var r;return typeof n=="number"?r=!0:r=n instanceof b,r}function D1(n){var r=typeof n;return r==="string"||r==="boolean"||Tg(n)||z(n,Oe)}function $s(n){return typeof n=="string"||z(n,pc)}function hs(n){return ja(n)&&n.$type$==="BooleanArray"}function ds(n){return n instanceof Int8Array}function ps(n){return n instanceof Int16Array}function _s(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function gs(n){return n instanceof Int32Array}function ms(n){return n instanceof Float32Array}function ys(n){return n instanceof Float64Array}function I2(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var a=t==="object"?C2(r):r,i=a.$metadata$;return(i==null?null:i.kind)==="interface"?z(n,a):n instanceof a}function C2(n){return Object.getPrototypeOf(n)}var o;function Oa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,new Int32Array(r));else if(r>t){var i=new Int32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function jg(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Xg(n,r,null)}function Hc(n,r){return kg(n,r)}function A2(n){return xg(n)}function Fl(n){return q.i4(n)}function R1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,Es(r));else if(r>t){var i=Es(r);i.set(n),a=i}else a=n.slice(0,r);var s=a;return s.$type$="CharArray",s}function L1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,new Float64Array(r));else if(r>t){var i=new Float64Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function M1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,new Float32Array(r));else if(r>t){var i=new Float32Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function Si(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}return Ra(n,qa(r))}function zi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,new Int16Array(r));else if(r>t){var i=new Int16Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function Ei(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t=n.length,a;if(r<16||t<16)a=Ra(n,new Int8Array(r));else if(r>t){var i=new Int8Array(r);i.set(n),a=i}else a=n.slice(0,r);return a}function F1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw T.v(w(e))}var t="BooleanArray",a=Xg(n,r,!1);return a.$type$=t,a}function q2(n){n.length>1&&W2(n)}function T2(n,r){n.length>1&&Lg(n,r)}function i1(n,r,e){for(var t=new Int32Array(e),a=0,i=0,s=0,l=0,u=n.length;l<u;){var f=G(n,l);l=l+1|0;var c=r[Y(f)];if(i=i|(c&31)<<s,c<32){var v=a;a=v+1|0,t[v]=i,i=0,s=0}else s=s+5|0}return t}function Og(n){return Pg(n)>=0}function Pg(n){var r=Y(n),e=Bg(Kh().j4_1,r),t=r-Kh().j4_1[e]|0;return t<10?t:-1}function Bg(n,r){for(var e=0,t=n.length-1|0,a=-1,i=0;e<=t;)if(a=(e+t|0)/2|0,i=n[a],r>i)e=a+1|0;else{if(r===i)return a;t=a-1|0}return a-(r<i?1:0)|0}var $1;function Kh(){return $1===o&&new Sp,$1}function j2(n){return O2(n)!==0}function O2(n){var r=Y(n),e=Bg(go().k4_1,r),t=go().k4_1[e],a=(t+go().l4_1[e]|0)-1|0,i=go().m4_1[e];if(r>a)return 0;var s=i&3;if(s===0){var l=2,u=t,f=0;if(f<=1)do{if(f=f+1|0,u=u+(i>>l&127)|0,u>r)return 3;if(l=l+7|0,u=u+(i>>l&127)|0,u>r)return 0;l=l+7|0}while(f<=1);return 3}if(i<=7)return s;var c=r-t|0,v=i<=31?c%2|0:c;return i>>lr(2,v)&3}var J1;function go(){return J1===o&&new zp,J1}function P2(n){var r=Y(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function B2(n){for(var r=cr.t4(),e=n.u4();e.y();){var t=e.z(),a=n.v4(t),i=r.o2(a),s=(i==null&&!r.m2(a)?0:i)+1|0;r.s2(a,s)}return r}function Js(n){return n!==n}function N2(n){var r;return n===0?r=0:r=1<<(31-bs(n)|0),r}function U2(n){return n===1/0||n===-1/0}function Wh(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+bs(t)|0}else e=bs(r);return e}function Gc(n){return!D2(n)&&!R2(n)}function Kc(n){return!U2(n)&&!Js(n)}function Ng(n){var r=n.d3_1;return r===0?32+Yh(n.e3_1)|0:Yh(r)}function D2(n){return n===1/0||n===-1/0}function R2(n){return n!==n}function Yh(n){var r=~(n|(-n|0));return 32-bs(r)|0}var or;function _i(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function Tt(n,r){return Re(n,new b(0,-2147483648)).f3(Re(r,new b(0,-2147483648)))}function L2(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function M2(n,r){var e=n,t=r;if(ar(t,new b(0,0))<0){var a;return Tt(n,r)<0?a=new b(0,0):a=new b(1,0),a}if(ar(e,new b(0,0))>=0)return qr(e,t);var i=oe(qr(Rc(e,1),t),1),s=Hr(e,Tr(i,t)),l,u=s,f=t;Tt(u,f)>=0?l=1:l=0;var c=l,v=gr(i,F(c));return v}function F2(n,r){if(ar(n,new b(0,0))>=0)return c1(n,r);var e=Rc(n,1),t=qr(e,F(r)),a=oe(t,1),i=a,s=Tr(i,F(r)),l=Hr(n,s);if(ar(l,F(r))>=0){var u=l;l=Hr(u,F(r));var f=a;a=gr(f,F(1))}return c1(a,r)+c1(l,r)}function Pa(n){var r;return n.toArray!==void 0?r=n.toArray():r=Ug(n),r}function Bi(n){return n<0&&mz(),n}function $2(n,r,e,t,a){Mn.x4(t,a,n.length);var i=a-t|0;if(Mn.x4(e,e+i|0,r.length),w1(r)&&w1(n)){var s=n.subarray(t,a);r.set(s,e)}else{var l=0;if(l<i)do{var u=l;l=l+1|0,r[e+u|0]=n[t+u|0]}while(l<i)}}function Ug(n){return yz(n)}function jn(n){var r=[n];return q.i4(r)}function Uo(n){return Iz([n])}function $l(n){return Oz([n])}function J2(n){Dg(n,wm())}function H2(n,r){Dg(n,r)}function Dg(n,r){if(n.c1()<=1)return or;var e=Pa(n);Lg(e,r);var t=0,a=e.length;if(t<a)do{var i=t;t=t+1|0,n.y4(i,e[i])}while(t<a)}function Rg(n){if(!(n>=0)){var r="capacity must be non-negative.";throw T.v(w(r))}return Array(n)}function Do(n,r,e){n.fill(null,r,e)}function Zh(n,r){return jg(n,r)}function Vh(n,r){n[r]=null}var H1;function is(){return H1===o&&new qp,H1}function G2(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function s1(n,r){return Mn.l6(r,n.c1()),r}function K2(n,r){return Mn.m5(r,n.c1()),r}var ko;function Lg(n,r){if(Mg()){var e=Y2(r);n.sort(e)}else Fg(n,0,Cc(n),r)}function W2(n){if(Mg()){var r=Z2;n.sort(r)}else Fg(n,0,Cc(n),wm())}function Mg(){var n=ko;if(n!=null)return n;ko=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var a=V2;r.sort(a);var i=1,s=r.length;if(i<s)do{var l=i;i=i+1|0;var u=r[l-1|0],f=r[l];if((u&3)===(f&3)&&u>=f)return!1}while(i<s);return ko=!0,!0}function Fg(n,r,e,t){var a=n.length,i=Array(a),s=G1(n,i,r,e,t);if(s!==n){var l=r;if(l<=e)do{var u=l;l=l+1|0,n[u]=s[u]}while(u!==e)}}function G1(n,r,e,t,a){if(e===t)return n;var i=(e+t|0)/2|0,s=G1(n,r,e,i,a),l=G1(n,r,i+1|0,t,a),u=s===r?n:r,f=e,c=i+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,f<=i&&c<=t){var d=s[f],p=l[c];a.compare(d,p)<=0?(u[h]=d,f=f+1|0):(u[h]=p,c=c+1|0)}else f<=i?(u[h]=s[f],f=f+1|0):(u[h]=l[c],c=c+1|0)}while(h!==t);return u}function Y2(n){return(r,e)=>n.compare(r,e)}function Z2(n,r){return Me(n,r)}function V2(n,r){return(n&3)-(r&3)|0}function X2(n){n.y6_1=null}function $g(n,r){return N2(lr(ln(r,1),3))}function Jg(n,r){return bs(r)+1|0}function Xh(n){if(n.y8_1.i7_1!==n.a9_1)throw To.x8("The backing map has been modified after this entry was obtained.")}function Ii(n){return n.b7_1.length}function ct(n){return n.e7_1.length}function Jl(n){n.i7_1=n.i7_1+1|0}function Hg(n,r){Q2(n,r)?Kg(n,!0):rS(n,n.g7_1+r|0)}function Q2(n,r){var e=Ii(n)-n.g7_1|0,t=n.g7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(Ii(n)/4|0)}function rS(n,r){if(r<0)throw ye.d9("too many elements");if(r>Ii(n)){var e=Mn.e9(Ii(n),r);n.b7_1=Zh(n.b7_1,e);var t=n,a=n.c7_1;t.c7_1=a==null?null:Zh(a,e),n.d7_1=Oa(n.d7_1,e);var i=$g(Cs,e);i>ct(n)&&Wg(n,i)}}function Gg(n){var r=n.c7_1;if(r!=null)return r;var e=Rg(Ii(n));return n.c7_1=e,e}function Hl(n,r){return r==null?0:lr(br(r),-1640531527)>>>n.h7_1|0}function Kg(n,r){for(var e=0,t=0,a=n.c7_1;e<n.g7_1;){var i=n.d7_1[e];i>=0&&(n.b7_1[t]=n.b7_1[e],a!=null&&(a[t]=a[e]),r&&(n.d7_1[t]=i,n.e7_1[i]=t+1|0),t=t+1|0),e=e+1|0}Do(n.b7_1,t,n.g7_1),a==null||Do(a,t,n.g7_1),n.g7_1=t}function Wg(n,r){Jl(n),n.g7_1>n.j7_1&&Kg(n,!1),n.e7_1=new Int32Array(r),n.h7_1=Jg(Cs,r);for(var e=0;e<n.g7_1;){var t=e;if(e=t+1|0,!nS(n,t))throw mr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function nS(n,r){for(var e=Hl(n,n.b7_1[r]),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return n.e7_1[e]=r+1|0,n.d7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0)}}function mo(n,r){for(var e=Hl(n,r),t=n.f7_1;;){var a=n.e7_1[e];if(a===0)return-1;if(D(n.b7_1[a-1|0],r))return a-1|0;if(t=t-1|0,t<0)return-1;var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0)}}function eS(n,r){var e=n.g7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.d7_1[e]>=0&&D(fn(n.c7_1)[e],r))return e}return-1}function Yg(n,r){n.z7();r:for(;;)for(var e=Hl(n,r),t=Bt(lr(n.f7_1,2),ct(n)/2|0),a=0;;){var i=n.e7_1[e];if(i===0){if(n.g7_1>=Ii(n)){Hg(n,1);continue r}var s=n.g7_1;n.g7_1=s+1|0;var l=s;return n.b7_1[l]=r,n.d7_1[l]=e,n.e7_1[e]=l+1|0,n.j7_1=n.j7_1+1|0,Jl(n),a>n.f7_1&&(n.f7_1=a),l}if(D(n.b7_1[i-1|0],r))return-i|0;if(a=a+1|0,a>t){Wg(n,lr(ct(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=ct(n)-1|0)}}function Zg(n,r){Vh(n.b7_1,r);var e=n.c7_1;e==null||Vh(e,r),tS(n,n.d7_1[r]),n.d7_1[r]=-1,n.j7_1=n.j7_1-1|0,Jl(n)}function tS(n,r){for(var e=r,t=r,a=0;;){var i=e;e=i-1|0,i===0&&(e=ct(n)-1|0);var s=n.e7_1[e];if(a=a+1|0,a>n.f7_1||s===0)return n.e7_1[t]=0,or;var l=Hl(n,n.b7_1[s-1|0]);((l-e|0)&(ct(n)-1|0))>=a&&(n.e7_1[t]=s,n.d7_1[s-1|0]=t,t=e,a=0)}}function aS(n,r){return n.j7_1===r.c1()&&n.k8(r.r2())}function iS(n,r){var e=Yg(n,r.k2()),t=Gg(n);if(e>=0)return t[e]=r.l2(),!0;var a=t[(-e|0)-1|0];return D(r.l2(),a)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function sS(n,r){if(r.d1())return!1;Hg(n,r.c1());for(var e=r.x(),t=!1;e.y();)iS(n,e.z())&&(t=!0);return t}var Cs,K1;function oS(){return K1===o&&new Hp,K1}var Vg;function lS(n,r){var e=new mc(r),t=e,a=n;return t.va_1=typeof a=="function"?a(e):n.ib(e),e}function uS(n,r,e,t){var a=new mc(t),i=n,s=typeof i=="function"?i(r,e,a):n.jb(r,e,a);return a.va_1=s,a.ya()}function fS(n){var r=n instanceof gc?n:null,e=r==null?null:r.bb();return e??n}function cS(n){return new Promise(vS(n))}function vS(n){return(r,e)=>{var t=km(),a=new Kp(t,r,e);return Uz(n,a),or}}function Qh(n){vn(n,n.r6_1)}function o1(n){vn(n,n.u_1)}function l1(n){vn(n,n.c9_1)}function u1(n){vn(n,n.j3_1)}function rd(n){vn(n,n.q_1)}function nd(n){vn(n,n.xb_1)}function ed(n){vn(n,n.n3_1)}function td(n){vn(n,n.w8_1)}function ad(n){vn(n,n.dc_1)}function id(n){vn(n,n.hc_1)}function f1(n){vn(n,n.jc_1)}function sd(n){vn(n,n.rc_1)}function hS(n){vn(n,n.r3_1)}function dS(n){vn(n,n.v3_1)}function pS(n){vn(n,n.z3_1)}function Ra(n,r){for(var e=n.length,t=r.length,a=0,i=r;a<e&&a<t;){var s=a,l=a;a=l+1|0,i[s]=n[l]}return r}function Xg(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var a=n.length;if(r>a)for(t.length=r;a<r;){var i=a;a=i+1|0,t[i]=e}return t}function xo(n,r){return new Ic(r)}function Wc(n){return new Ic(n)}function _S(n){return rn(Ta(Ls(n,63),Rc(on(n),63)))}function gS(n){return ar(n,new b(0,0))<0?on(n):n}function mS(n){var r;if(Js(n))throw T.v("Cannot round NaN value.");return n>se(new b(-1,2147483647))?r=new b(-1,2147483647):n<se(new b(0,-2147483648))?r=new b(0,-2147483648):r=Rn(Math.round(n)),r}function yS(n){return n<0?-n|0:n}var Ro;function wS(){return Ro===o&&new yc,Ro}function od(){return $S(),Qg}var Qg;function bS(n){return n!=null}function kS(n){return Tg(n)}function xS(n){return n!=null?typeof n=="boolean":!1}function SS(n){return n!=null?typeof n=="number":!1}function zS(n){return n!=null?typeof n=="number":!1}function ES(n){return n!=null?typeof n=="number":!1}function IS(n){return n instanceof b}function CS(n){return n!=null?typeof n=="number":!1}function AS(n){return n!=null?typeof n=="number":!1}function qS(n){return n!=null?Fs(n):!1}function TS(n){return n!=null?typeof n=="string":!1}function jS(n){return n instanceof Error}function OS(n){return n!=null?hs(n):!1}function PS(n){return n!=null?_s(n):!1}function BS(n){return n!=null?ds(n):!1}function NS(n){return n!=null?ps(n):!1}function US(n){return n!=null?gs(n):!1}function DS(n){return typeof n=="bigint"}function RS(n){return n!=null?hi(n):!1}function LS(n){return n!=null?ms(n):!1}function MS(n){return n!=null?ys(n):!1}function FS(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var W1;function Ir(){return W1===o&&new Yp,W1}var ld;function $S(){ld||(ld=!0,Qg=Array(0))}function Dr(n){if(n===String)return Ir().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var a=new E1(n);r.$kClass$=a,t=a}else t=r.$kClass$;e=t}else e=new E1(n);return e}function Rr(n){var r;switch(typeof n){case"string":r=Ir().stringClass;break;case"number":var e;(n|0)===n?e=Ir().intClass:e=Ir().doubleClass,r=e;break;case"bigint":r=Ir().bigIntClass;break;case"boolean":r=Ir().booleanClass;break;case"function":var t=Ir();r=t.functionClass(n.length);break;default:var a;if(hs(n))a=Ir().booleanArrayClass;else if(_s(n))a=Ir().charArrayClass;else if(ds(n))a=Ir().byteArrayClass;else if(ps(n))a=Ir().shortArrayClass;else if(gs(n))a=Ir().intArrayClass;else if(hi(n))a=Ir().wd();else if(ms(n))a=Ir().floatArrayClass;else if(ys(n))a=Ir().doubleArrayClass;else if(z(n,at))a=Dr(at);else if(Fs(n))a=Ir().arrayClass;else{var i=Object.getPrototypeOf(n).constructor,s;if(i===Object)s=Ir().anyClass;else if(i===Error)s=Ir().throwableClass;else{var l=i;s=Dr(l)}a=s}r=a;break}return r}function JS(n){n.lastIndex=0}function Y1(n){var r=xr(n).toUpperCase();return r.length>1?n:G(r,0)}function HS(n){return 97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57?!0:mn(n,128)<0?!1:Og(n)||j2(n)}function GS(n){return 48<=n&&n<=57?!0:mn(n,128)<0?!1:Og(n)}function Yc(n){return P2(n)}function c1(n,r){return Bo(n,Ni(r))}function Ni(n){if(!(2<=n&&n<=36))throw T.v("radix "+n+" was not in valid range 2..36");return n}function Zc(n){var r=+n,e;return Js(r)&&!nm(n)||r===0&&_t(n)?e=null:e=r,e}function KS(n,r){return n.toString(Ni(r))}function Lo(n){var r=+n;return(Js(r)&&!nm(n)||r===0&&_t(n))&&Ri(n),r}function Gl(n,r){var e=mn(n,48)>=0&&mn(n,57)<=0?Hn(n,48):mn(n,65)>=0&&mn(n,90)<=0?Hn(n,65)+10|0:mn(n,97)>=0&&mn(n,122)<=0?Hn(n,97)+10|0:mn(n,128)<0?-1:mn(n,65313)>=0&&mn(n,65338)<=0?Hn(n,65313)+10|0:mn(n,65345)>=0&&mn(n,65370)<=0?Hn(n,65345)+10|0:Pg(n);return e>=r?-1:e}function rm(n){var r=Yl(n),e;return r==null?Ri(n):e=r,e}function nm(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var Z1;function gi(){return Z1===o&&new Zp,Z1}function WS(n,r,e){return()=>n.xe(r,e)}function YS(n){return n.z()}function ZS(n){return r=>QS(r,n)}var ud;function VS(){if(ud)return or;ud=!0,new I1("IGNORE_CASE",0,"i"),em=new I1("MULTILINE",1,"m")}var em;function XS(n,r){return M(n,"",r,o,o,o,tz)}function tm(n,r,e,t){n.lastIndex=e;var a=n.exec(r);if(a==null)return null;var i=Ge(a.index,n.lastIndex-1|0);return new Qp(i,a,t,r)}function QS(n,r){for(var e=0,t=Yr.f();e<r.length;){var a=e;e=a+1|0;var i=G(r,a);if(i===92){if(e===r.length)throw T.v("The Char to be escaped is missing");var s=e;e=s+1|0,t.ga(G(r,s))}else if(i===36){if(e===r.length)throw T.v("Capturing group index is missing");if(G(r,e)===123){e=e+1|0;var l=rz(r,e);if(e===l)throw T.v("Named capturing group reference should have a non-empty name");if(l===r.length||G(r,l)!==125)throw T.v("Named capturing group reference is missing trailing '}'");var u=Gn(r,e,l),f=nz(n.rf(),u),c=f==null?null:f.sf_1;t.fa(c??""),e=l+1|0}else{var v=G(r,e);if(!(48<=v&&v<=57))throw T.v("Invalid capturing group reference");var h=n.rf(),d=ez(r,e,h.c1()),p=rm(Gn(r,e,d));if(p>=h.c1())throw Wn.zb("Group with index "+p+" does not exist");var g=h.e1(p),y=g==null?null:g.sf_1;t.fa(y??""),e=d}}else t.ga(i)}return t.toString()}function rz(n,r){var e=r;r:for(;e<n.length;){if(G(n,e)===125)break r;e=e+1|0}return e}function nz(n,r){var e=z(n,wc)?n:null,t;if(e==null)throw le.n8("Retrieving groups by name is not supported on this platform.");t=e;var a=t;return a.tf(r)}function ez(n,r,e){var t=r+1|0,a=Hn(G(n,r),48);r:for(;;){var i;if(t<n.length){var s=G(n,t);i=48<=s?s<=57:!1}else i=!1;if(!i)break r;var l=lr(a,10)+Hn(G(n,t),48)|0;if(0<=l&&l<e)a=l,t=t+1|0;else break r}return t}function tz(n){return n.qf_1}function az(n){return r=>n.e1(r)}function iz(n,r,e){return Object.prototype.hasOwnProperty.call(r,e)}function sz(n,r){if(r<pt(n.cg_1)){var e=n.cg_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.cg_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function oz(){return VS(),em}function Gn(n,r,e){return n.substring(r,e)}function Ye(n,r){return n.substring(r)}function lz(n){return uz(n,0,n.length)}function ie(n,r,e,t){t=t===o?!1:t;var a=new RegExp(gi().qe(r),t?"gui":"gu"),i=gi().re(e);return n.replace(a,i)}function Te(n,r,e){return e=e===o?!1:e,e?Vc(n,0,r,0,r.length,e):n.startsWith(r,0)}function am(n,r,e){return e=e===o?!1:e,e?Vc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Vc(n,r,e,t,a,i){return i=i===o?!1:i,Zl(n,r,e,t,a,i)}function fd(n,r,e){if(e=e===o?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,a=n.length;if(t<a)do{var i=t;t=t+1|0;var s=G(n,i),l=G(r,i);if(!Wl(s,l,e))return!1}while(t<a);return!0}function uz(n,r,e,t){if(!(e<=n.length&&r<=e)){var a="Failed requirement.";throw T.v(w(a))}for(var i=r,s=Yr.f();i<e;){var l=i;i=l+1|0;var u=n[l];if(u>=0)s.ga(it(u));else if(u>>5===-2){var f=fz(n,u,i,e);f<=0?(s.ga(65533),i=i+(-f|0)|0):(s.ga(it(f)),i=i+1|0)}else if(u>>4===-2){var c=cz(n,u,i,e);c<=0?(s.ga(65533),i=i+(-c|0)|0):(s.ga(it(c)),i=i+2|0)}else if(u>>3===-2){var v=vz(n,u,i,e);if(v<=0)s.ga(65533),i=i+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.ga(it(h)),s.ga(it(d)),i=i+3|0}}else s.ga(65533)}return s.toString()}function fz(n,r,e,t,a){if(!(r&30)||e>=t)return Tn(0);var i=n[e];return(i&192)!==128?Tn(0):r<<6^i^3968}function cz(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===13){if((i&224)!==128)return Tn(0)}else if((i&192)!==128)return Tn(0)}else if((i&224)!==160)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];return(s&192)!==128?Tn(1):r<<12^i<<6^s^-123008}function vz(n,r,e,t,a){if(e>=t)return Tn(0);var i=n[e];if(r&15){if((r&15)===4){if((i&240)!==128)return Tn(0)}else if((r&15)>4)return Tn(0)}else if((i&240)<=128)return Tn(0);if((i&192)!==128)return Tn(0);if((e+1|0)===t)return Tn(1);var s=n[e+1|0];if((s&192)!==128)return Tn(1);if((e+2|0)===t)return Tn(2);var l=n[e+2|0];return(l&192)!==128?Tn(2):r<<18^i<<12^s<<6^l^3678080}function Tn(n,r,e){return-n|0}var cd;function Ui(){if(cd)return or;cd=!0,im=new Ct("NANOSECONDS",0,1),new Ct("MICROSECONDS",1,1e3),sm=new Ct("MILLISECONDS",2,1e6),om=new Ct("SECONDS",3,1e9),lm=new Ct("MINUTES",4,6e10),um=new Ct("HOURS",5,36e11),fm=new Ct("DAYS",6,864e11)}var im,sm,om,lm,um,fm;function cm(n,r,e){var t=Me(r.mg_1,e.mg_1),a;if(t>0){var i=Rn(r.mg_1/e.mg_1),s=Tr(n,i);a=sr(qr(s,i),n)?s:ar(n,new b(0,0))>0?new b(-1,2147483647):new b(0,-2147483648)}else t<0?a=qr(n,Rn(e.mg_1/r.mg_1)):a=n;return a}function vd(n,r,e){var t=Me(r.mg_1,e.mg_1);return t>0?Tr(n,Rn(r.mg_1/e.mg_1)):t<0?qr(n,Rn(e.mg_1/r.mg_1)):n}function Mo(){return Ui(),im}function Fo(){return Ui(),sm}function Xc(){return Ui(),om}function vm(){return Ui(),lm}function hm(){return Ui(),um}function Qc(){return Ui(),fm}function ss(n,r,e,t,a){var i=e;t<4&&(i=hd(n.e3_1,r,i,t,Bt(a,4))),a>4&&hd(n.d3_1,r,i,ln(t-4|0,0),a-4|0)}function hz(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var a=t;t=t+1|0;var i=e<<4,s;r:{var l=G(n,a),u=Y(l);if(!(u>>>8|0)&&kn()[u]>=0){s=kn()[u];break r}te(n,r,a)}e=i|s}while(t<8);var f=e;if(G(n,8)!==45){var c="'-' (hyphen)";te(n,c,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var p=v<<4,g;r:{var y=G(n,d),x=Y(y);if(!(x>>>8|0)&&kn()[x]>=0){g=kn()[x];break r}te(n,r,d)}v=p|g}while(h<13);var k=v;if(G(n,13)!==45){var S="'-' (hyphen)";te(n,S,13)}var E=0,I=14;if(I<18)do{var A=I;I=I+1|0;var j=E<<4,P;r:{var $=G(n,A),B=Y($);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}te(n,r,A)}E=j|P}while(I<18);var N=E;if(G(n,18)!==45){var H="'-' (hyphen)";te(n,H,18)}var L=0,J=19;if(J<23)do{var R=J;J=J+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}te(n,r,R)}L=V|K}while(J<23);var tr=L;if(G(n,23)!==45){var Q="'-' (hyphen)";te(n,Q,23)}var ur=0,X=24;if(X<28)do{var Sr=X;X=X+1|0;var kr=ur<<4,dr;r:{var zr=G(n,Sr),Er=Y(zr);if(!(Er>>>8|0)&&kn()[Er]>=0){dr=kn()[Er];break r}te(n,r,Sr)}ur=kr|dr}while(X<28);var Br=ur,Nr=0,pr=28;if(pr<36)do{var Gr=pr;pr=pr+1|0;var tn=Nr<<4,Zr;r:{var _r=G(n,Gr),Fr=Y(_r);if(!(Fr>>>8|0)&&kn()[Fr]>=0){Zr=kn()[Fr];break r}te(n,r,Gr)}Nr=tn|Zr}while(pr<36);var Vr=Nr,Xr=k<<16|N,$r=new b(Xr,f),an=tr<<16|Br,_n=new b(Vr,an);return Ys().qg($r,_n)}function dz(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var a=r<<4,i;r:{var s=G(n,t),l=Y(s);if(!(l>>>8|0)&&kn()[l]>=0){i=kn()[l];break r}var u="a hexadecimal digit";te(n,u,t)}r=a|i}while(e<8);var f=r,c=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=c<<4,p;r:{var g=G(n,h),y=Y(g);if(!(y>>>8|0)&&kn()[y]>=0){p=kn()[y];break r}var x="a hexadecimal digit";te(n,x,h)}c=d|p}while(v<16);var k=c,S=new b(k,f),E=0,I=16;if(I<24)do{var A=I;I=I+1|0;var j=E<<4,P;r:{var $=G(n,A),B=Y($);if(!(B>>>8|0)&&kn()[B]>=0){P=kn()[B];break r}var N="a hexadecimal digit";te(n,N,A)}E=j|P}while(I<24);var H=E,L=0,J=24;if(J<32)do{var R=J;J=J+1|0;var V=L<<4,K;r:{var nr=G(n,R),W=Y(nr);if(!(W>>>8|0)&&kn()[W]>=0){K=kn()[W];break r}var tr="a hexadecimal digit";te(n,tr,R)}L=V|K}while(J<32);var Q=L,ur=new b(Q,H);return Ys().qg(S,ur)}function hd(n,r,e,t,a){var i=e,s=3-t|0,l=4-a|0;if(l<=s)do{var u=s;s=s+-1|0;var f=u<<3,c=n>>f&255,v=Fz()[c],h=i;i=h+1|0,r[h]=Jn(v>>8);var d=i;i=d+1|0,r[d]=Jn(v)}while(u!==l);return i}function pz(n){return r=>r===n?"(this Collection)":we(r)}var Mn;function _z(n,r){return dd(n,r.k2())+"="+dd(n,r.l2())}function dd(n,r){return r===n?"(this Map)":we(r)}function pd(n,r){var e=n.r2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(D(i.k2(),r)){t=i;break r}}t=null}return t}function gz(n){return r=>_z(n,r)}var As;function Hs(n){return n.c1()-1|0}function mz(){throw b1.fc("Index overflow has happened.")}function yz(n){if(n.d1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),a=0;t.y();){var i=a;a=i+1|0,e[i]=t.z()}return e}function fr(){return dm()}function _e(n){return _x(n)}function en(n){return n.length>0?Fl(n):fr()}var V1;function dm(){return V1===o&&new l_,V1}var qs;function rv(n){switch(n.c1()){case 0:return fr();case 1:return jn(n.e1(0));default:return n}}function wz(n){return Ge(0,n.c1()-1|0)}function bz(n){for(var r=q.m(),e=n.x();e.y();){var t=e.z();Di(r,t)}return r}function Mr(n,r){var e;return z(n,Z)?e=n.c1():e=r,e}function kz(n){var r;return z(n,Z)?r=n.c1():r=null,r}function xz(n,r){if(z(n,v_))return n.lh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw jr.r("Key "+we(r)+" is missing in the map.");e=t;break r}return e}function Ar(){var n=zz();return z(n,xn)?n:m()}function Gs(n){return n.length>0?_m(n,cr.na(n.length)):Ar()}function qe(n,r){return xz(n,r)}function pm(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=Ar();break;case 1:var e;z(n,En)?e=n.e1(0):e=n.x().z(),r=Uo(e);break;default:r=gd(n,cr.na(n.c1()));break}return r}return gm(gd(n,cr.t4()))}function _d(n){return _m(n,cr.na(n.length))}function vt(n,r){var e;if(n.d1())e=Uo(r);else{var t=cr.oa(n);t.s2(r.mh_1,r.nh_1),e=t}return e}function nv(n){return cr.oa(n)}function Sz(n,r){var e=nv(n);return e.t2(r),gm(e)}var X1;function zz(){return X1===o&&new h_,X1}function _m(n,r){return mm(r,n),r}function gd(n,r){return Ez(r,n),r}function gm(n){var r;switch(n.c1()){case 0:r=Ar();break;case 1:r=n;break;default:r=n;break}return r}function mm(n,r){for(var e=0,t=r.length;e<t;){var a=r[e];e=e+1|0;var i=a.rh(),s=a.sh();n.s2(i,s)}}function Ez(n,r){for(var e=r.x();e.y();){var t=e.z(),a=t.rh(),i=t.sh();n.s2(a,i)}}function Iz(n){var r=ks.o7(n.length);return mm(r,n),r}function Di(n,r){if(z(r,Z))return n.g1(r);for(var e=!1,t=r.x();t.y();){var a=t.z();n.n(a)&&(e=!0)}return e}function Cz(n,r){for(var e=!1,t=r.x();t.y();){var a=t.z();n.n(a)&&(e=!0)}return e}function md(n){var r;if(n.d1())throw jr.r("List is empty.");return r=n.h5(Hs(n)),r}function ev(n,r){var e;return n==null?e=Kl:e=new xc(Tz(n),r),e}function Az(n){return wx(n)}function qz(n,r){return new xc(n,r)}function ym(){return Kl}var Kl;function yd(n){n.ci_1=n.di_1===-2?n.ei_1.fi_1():n.ei_1.gi_1(fn(n.ci_1)),n.di_1=n.ci_1==null?0:1}function Tz(n){return()=>n}function ga(n){return rg(n)}function Ft(){return rf()}var Q1;function rf(){return Q1===o&&new w_,Q1}function jz(n){switch(n.c1()){case 0:return Ft();case 1:return $l(n.x().z());default:return n}}function Oz(n){return ng(n,Aa.b1(n.length))}function Pz(n){if(!(n.length>0)){var r="Failed requirement.";throw T.v(w(r))}var e=Nz(n);return new k_(e)}function bt(n,r){return n==null?r==null?0:-1:r==null?1:Me(n!=null&&D1(n)?n:m(),r)}function wm(){var n=bm;return z(n,cn)?n:m()}function Bz(n,r,e){for(var t=0,a=e.length;t<a;){var i=e[t];t=t+1|0;var s=i(n),l=i(r),u=bt(s,l);if(u!==0)return u}return 0}var bm;function Nz(n){return(r,e)=>Bz(r,e,n)}function Uz(n,r){var e=fS(lS(n,r)),t=or;e.sa(t)}var nf,ef;function km(){return ef===o&&new S_,ef}function Ts(){return Rz()}var wd;function Dz(){if(wd)return or;wd=!0,xm=new z_("COROUTINE_SUSPENDED",0)}var xm;function Rz(){return Dz(),xm}function Lz(n){return E_.ni(n)}function Mz(n,r,e){var t;if(e>0)t=n>=r?r:r-bd(r,n,e)|0;else if(e<0)t=n<=r?r:r+bd(n,r,-e|0)|0;else throw T.v("Step is zero.");return t}function bd(n,r,e){return v1(v1(n,e)-v1(r,e)|0,e)}function v1(n,r){var e=n%r|0;return e>=0?e:e+r|0}var tf;function Sm(){return tf===o&&new I_,tf}var tv;function zm(n,r,e){e!=null?n.g(e(r)):r==null||$s(r)?n.g(r):r instanceof Cn?n.ga(r.x1_1):n.g(w(r))}function Wl(n,r,e){if(e=e===o?!1:e,n===r)return!0;if(!e)return!1;var t=Y1(n),a=Y1(r),i;if(t===a)i=!0;else{var s=xr(t).toLowerCase(),l=G(s,0),u=xr(a).toLowerCase();i=l===G(u,0)}return i}function Fz(){return Cm(),Em}var Em;function $z(){return Cm(),Im}var Im;function kn(){return $z()}var kd;function Cm(){if(!kd){kd=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=G("0123456789abcdef",e>>4),a=Y(t)<<8,i=G("0123456789abcdef",e&15);r[e]=a|Y(i),n=n+1|0}Em=r;for(var s=0,l=new Int32Array(256);s<256;){var u=s,f=G("0123456789ABCDEF",u>>4),c=Y(f)<<8,v=G("0123456789ABCDEF",u&15);l[u]=c|Y(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var p=0,g="0123456789abcdef",y=0;y<C(g);){var x=rr(g,y);y=y+1|0;var k=p;p=k+1|0,d[Y(x)]=k}for(var S=0,E="0123456789ABCDEF",I=0;I<C(E);){var A=rr(E,I);I=I+1|0;var j=S;S=j+1|0,d[Y(A)]=j}Im=d;for(var P=0,$=qa(256);P<256;)$[P]=new b(-1,-1),P=P+1|0;for(var B=0,N="0123456789abcdef",H=0;H<C(N);){var L=rr(N,H);H=H+1|0;var J=B;B=J+1|0,$[Y(L)]=F(J)}for(var R=0,V="0123456789ABCDEF",K=0;K<C(V);){var nr=rr(V,K);K=K+1|0;var W=R;R=W+1|0,$[Y(nr)]=F(W)}}}function Jz(n){var r;return C(n)===0?r=Wz:r=Yz(n),r}function Hz(n){return Gz(n,"")}function Gz(n,r){r=r===o?"":r;for(var e=Om(n),t=q.m(),a=e.x();a.y();){var i=a.z();_t(i)||t.n(i)}for(var s=q.f1(Mr(t,10)),l=t.x();l.y();){var u=l.z(),f=Kz(u);s.n(f)}for(var c=Bx(s),v=c??0,h=n.length+lr(r.length,e.c1())|0,d=Jz(r),p=Hs(e),g=q.m(),y=0,x=e.x();x.y();){var k=x.z(),S=y;y=S+1|0;var E=Bi(S),I;if((E===0||E===p)&&_t(k))I=null;else{var A=Hx(k,v),j;A==null?j=null:j=d(A);var P=j;I=P??k}var $=I;$==null||g.n($)}return tg(g,Yr.ja(h),`
`).toString()}function Kz(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var a=e;e=e+1|0;var i=rr(n,a);if(!Yc(i)){r=a;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function Wz(n){return n}function Yz(n){return r=>n+r}function Yl(n){return Zz(n,10)}function Zz(n,r){Ni(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=-2147483648;else if(s===43)a=!1,i=-2147483647;else return null}else t=0,a=!1,i=-2147483647;var l=-59652323,u=l,f=0,c=t;if(c<e)do{var v=c;c=c+1|0;var h=Gl(G(n,v),r);if(h<0)return null;if(f<u)if(u===l){if(u=i/r|0,f<u)return null}else return null;if(f=lr(f,r),f<(i+h|0))return null;f=f-h|0}while(c<e);return a?f:-f|0}function Ri(n){throw k1.tc("Invalid number format: '"+n+"'")}function Vz(n){return Xz(n,10)}function Xz(n,r){Ni(r);var e=n.length;if(e===0)return null;var t,a,i,s=G(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)a=!0,i=new b(0,-2147483648);else if(s===43)a=!1,i=new b(1,-2147483648);else return null}else t=0,a=!1,i=new b(1,-2147483648);var l=new b(1,-2147483648),u=qr(l,F(36)),f=u,c=new b(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Gl(G(n,h),r);if(d<0)return null;if(ar(c,f)<0)if(sr(f,u)){var p=i;if(f=qr(p,F(r)),ar(c,f)<0)return null}else return null;var g=c;c=Tr(g,F(r));var y=c,x=i,k=gr(x,F(d));if(ar(y,k)<0)return null;var S=c;c=Hr(S,F(d))}while(v<e);return a?c:on(c)}function Am(n,r){var e=$s(n)?n:m(),t=0,a=C(e)-1|0,i=!1;r:for(;t<=a;){var s=i?a:t,l=rr(e,s),u=yx(r,l);if(!i)u?t=t+1|0:i=!0;else if(u)a=a-1|0;else break r}var f=Ln(e,t,a+1|0);return w(f)}function pa(n,r){return Qz(n,r)?Gn(n,0,n.length-C(r)|0):n}function Li(n,r,e){e=e===o?n:e;var t=rE(n,r);return t===-1?e:Gn(n,t+1|0,n.length)}function js(n,r,e){e=e===o?!1:e;var t;return typeof r=="string"?t=$o(n,r,o,e)>=0:t=av(n,r,0,C(n),e)>=0,t}function qm(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Gn(n,0,t)}function Tm(n,r,e,t){if(e=e===o?!1:e,t=t===o?0:t,r.length===1)return nE(n,xr(r[0]),e,t);for(var a=Mx(eE(n,r,o,e,t)),i=q.f1(Mr(a,10)),s=a.x();s.y();){var l=s.z(),u=tE(n,l);i.n(u)}return i}function jm(n,r){return aE(n,r)?Ye(n,C(r)):n}function Om(n){return Nc(iE(n))}function Pm(n,r,e){return e=e===o?32:e,w(sE($s(n)?n:m(),r,e))}function pt(n){return C(n)-1|0}function _t(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Yc(t)){r=!1;break r}}r=!0}return r}function Qz(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?am(n,r):Zl(n,C(n)-C(r)|0,r,0,C(r),e)}function rE(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=ji([r]);a=oE(n,s,e,t)}else{var l=xr(r);a=n.lastIndexOf(l,e)}return a}function $o(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=av(n,r,e,C(n),t):a=n.indexOf(r,e),a}function av(n,r,e,t,a,i){i=i===o?!1:i;var s=i?Nx(Bt(e,pt(n)),ln(t,0)):Ge(ln(e,0),Bt(t,C(n))),l;if(typeof n=="string"?l=typeof r=="string":l=!1,l){var u=s.r1_1,f=s.s1_1,c=s.t1_1;if(c>0&&u<=f||c<0&&f<=u)do{var v=u;if(u=u+c|0,Vc(r,0,n,v,r.length,a))return v}while(v!==f)}else{var h=s.r1_1,d=s.s1_1,p=s.t1_1;if(p>0&&h<=d||p<0&&d<=h)do{var g=h;if(h=h+p|0,Zl(r,0,n,g,C(r),a))return g}while(g!==d)}return-1}function Bm(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var a=t?e:r,i=rr(n,a),s=Yc(i);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return Ln(n,r,e+1|0)}function Ks(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a,i;if(t?i=!0:i=typeof n!="string",i){var s=ji([r]);a=Nm(n,s,e,t)}else{var l=xr(r);a=n.indexOf(l,e)}return a}function nE(n,r,e,t){iv(t);var a=0,i=$o(n,r,a,e);if(i===-1||t===1)return jn(w(n));var s=t>0,l=q.f1(s?Bt(t,10):10);r:do{var u=a,f=i,c=w(Ln(n,u,f));if(l.n(c),a=i+r.length|0,s&&l.c1()===(t-1|0))break r;i=$o(n,r,a,e)}while(i!==-1);var v=a,h=C(n),d=w(Ln(n,v,h));return l.n(d),l}function eE(n,r,e,t,a){return e=e===o?0:e,t=t===o?!1:t,a=a===o?0:a,iv(a),new T_(n,e,a,cE(r,t))}function tE(n,r){return w(Ln(n,r.lf(),r.mf()+1|0))}function aE(n,r,e){e=e===o?!1:e;var t,a;return e?a=!1:a=typeof n=="string",a?t=typeof r=="string":t=!1,t?Te(n,r):Zl(n,0,r,0,C(r),e)}function iE(n){return new O_(n)}function sE(n,r,e){if(e=e===o?32:e,r<0)throw T.v("Desired length "+r+" is less than zero.");if(r<=C(n))return Ln(n,0,C(n));var t=Yr.ja(r),a=1,i=r-C(n)|0;if(a<=i)do{var s=a;a=a+1|0,t.ga(e)}while(s!==i);return t.g(n),t}function Zl(n,r,e,t,a,i){if(t<0||r<0||r>(C(n)-a|0)||t>(C(e)-a|0))return!1;var s=0;if(s<a)do{var l=s;if(s=s+1|0,!Wl(rr(n,r+l|0),rr(e,t+l|0),i))return!1}while(s<a);return!0}function oE(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=eg(r),s=xr(i);return n.lastIndexOf(s,e)}var l=Bt(e,pt(n));if(0<=l)do{var u=l;l=l+-1|0;var f=rr(n,u),c;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Wl(d,f,t)){c=!0;break r}}c=!1}if(c)return u}while(0<=l);return-1}function Nm(n,r,e,t){e=e===o?0:e,t=t===o?!1:t;var a;if(!t&&r.length===1?a=typeof n=="string":a=!1,a){var i=eg(r),s=xr(i);return n.indexOf(s,e)}var l=ln(e,0),u=pt(n);if(l<=u)do{var f=l;l=l+1|0;var c=rr(n,f),v;r:{for(var h=0,d=r.length;h<d;){var p=r[h];if(h=h+1|0,Wl(p,c,t)){v=!0;break r}}v=!1}if(v)return f}while(f!==u);return-1}function iv(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw T.v(w(r))}return or}function xd(n){if(n.xi_1<0)n.vi_1=0,n.yi_1=null;else{var r,e;if(n.aj_1.dj_1>0?(n.zi_1=n.zi_1+1|0,e=n.zi_1>=n.aj_1.dj_1):e=!1,e?r=!0:r=n.xi_1>C(n.aj_1.bj_1),r)n.yi_1=Ge(n.wi_1,pt(n.aj_1.bj_1)),n.xi_1=-1;else{var t=n.aj_1.ej_1(n.aj_1.bj_1,n.xi_1);if(t==null)n.yi_1=Ge(n.wi_1,pt(n.aj_1.bj_1)),n.xi_1=-1;else{var a=t.rh(),i=t.sh();n.yi_1=Pc(n.wi_1,a),n.wi_1=a+i|0,n.xi_1=n.wi_1+(i===0?1:0)|0}}n.vi_1=1}}function Sd(n,r,e){return e=e===o?!1:e,Ks(n,r,o,e)>=0}function lE(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function uE(n,r,e){e=e===o?n:e;var t=Ks(n,r);return t===-1?e:Gn(n,t+1|0,n.length)}function fE(n,r,e,t){e=e===o?pt(n):e,t=t===o?!1:t;var a,i;return t?i=!0:i=typeof n!="string",i?a=av(n,r,e,0,t,!0):a=n.lastIndexOf(r,e),a}function cE(n,r){return(e,t)=>{var a=Nm(e,n,t,r);return a<0?null:O(a,1)}}function Sn(n){return Ls(n,1)}function sv(n){return(rn(n)&1)===0}function Um(n){return(rn(n)&1)===1}function vE(n){return sv(n)?Mo():Fo()}var af;function Wr(){return af===o&&new P_,af}function Dm(n){var r=on(Sn(n)),e=rn(n)&1;return SE(r,e)}function hE(n,r){var e,t=rn(n)&1;if(t===(rn(r)&1)){var a;if(sv(n))a=zE(gr(Sn(n),Sn(r)));else{var i=ov(Sn(n),Sn(r)),s;if(sr(i,new b(-16162,2147483647)))throw T.v("Summing infinite durations of different signs yields an undefined result.");sr(i,new b(-1,1073741823))||sr(i,new b(1,-1073741824))?s=Ut(i):s=EE(i),a=s}e=a}else Um(n)?e=zd(n,Sn(n),Sn(r)):e=zd(n,Sn(r),Sn(n));return e}function zd(n,r,e){var t=Hm(e),a=ov(r,t),i;if(ar(new b(1108857478,-1074),a)<=0&&ar(a,new b(-1108857478,1073))<=0){var s=Hr(e,Jo(t));i=Ql(gr(Jo(a),s))}else i=Ut(a);return i}function Vl(n){return ar(n,new b(0,0))<0}function Ws(n){return sr(n,Wr().pj_1)||sr(n,Wr().qj_1)}function Rm(n){return Vl(n)?Dm(n):n}function Lm(n,r){var e=Re(n,r);if(ar(e,new b(0,0))<0||!(rn(e)&1))return n.f3(r);var t=rn(n)&1,a=t-(rn(r)&1)|0;return Vl(n)?-a|0:a}function dE(n,r){return Lm(n.uj_1,r instanceof Ae?r.uj_1:m())}function pE(n){var r;if(Ws(n))r=0;else{var e=Jm(n),t=Nt(e,F(24));r=rn(t)}return r}function Mm(n){var r;if(Ws(n))r=0;else{var e=gE(n),t=Nt(e,F(60));r=rn(t)}return r}function Fm(n){var r;if(Ws(n))r=0;else{var e=mE(n),t=Nt(e,F(60));r=rn(t)}return r}function $m(n){var r;if(Ws(n))r=0;else if(Um(n)){var e=Sn(n),t=Nt(e,F(1e3));r=rn(Jo(t))}else{var a=Sn(n),i=1e9,s=Nt(a,F(i));r=rn(s)}return r}function Xl(n,r){var e=n;return sr(e,Wr().pj_1)?new b(-1,2147483647):sr(e,Wr().qj_1)?new b(0,-2147483648):cm(Sn(n),vE(n),r)}function _E(n){return Xl(n,Qc())}function Jm(n){return Xl(n,hm())}function gE(n){return Xl(n,vm())}function mE(n){return Xl(n,Xc())}function yE(n){var r=n,e;if(sr(r,new b(0,0)))e="0s";else if(sr(r,Wr().pj_1))e="Infinity";else if(sr(r,Wr().qj_1))e="-Infinity";else{var t=Vl(n),a=Yr.f();t&&a.ga(45);var i=Rm(n),s=_E(i),l=pE(i),u=Mm(i),f=Fm(i),c=$m(i),v=!sr(s,new b(0,0)),h=l!==0,d=u!==0,p=f!==0||c!==0,g=0;if(v&&(a.he(s).ga(100),g=g+1|0),h||v&&(d||p)){var y=g;g=y+1|0,y>0&&a.ga(32),a.ge(l).ga(104)}if(d||p&&(h||v)){var x=g;g=x+1|0,x>0&&a.ga(32),a.ge(u).ga(109)}if(p){var k=g;g=k+1|0,k>0&&a.ga(32),f!==0||v||h||d?So(n,a,f,c,9,"s",!1):c>=1e6?So(n,a,c/1e6|0,c%1e6|0,6,"ms",!1):c>=1e3?So(n,a,c/1e3|0,c%1e3|0,3,"us",!1):a.ge(c).fa("ns")}t&&g>1&&a.ie(1,40).ga(41),e=a.toString()}return e}function So(n,r,e,t,a,i,s){if(r.ge(e),t!==0){r.ga(46);var l=Pm(t.toString(),a,48),u;r:{var f=C(l)-1|0;if(0<=f)do{var c=f;if(f=f+-1|0,rr(l,c)!==48){u=c;break r}}while(0<=f);u=-1}var v=u+1|0;if(!s&&v<3)r.fe(l,0,v);else{var h=lr((v+2|0)/3|0,3);r.fe(l,0,h)}}r.fa(i)}function wE(n){var r=Yr.f();Vl(n)&&r.ga(45),r.fa("PT");var e=Rm(n),t=Jm(e),a=Mm(e),i=Fm(e),s=$m(e),l=t;Ws(n)&&(l=new b(1316134911,2328));var u=!sr(l,new b(0,0)),f=i!==0||s!==0,c=a!==0||f&&u;return u&&r.he(l).ga(72),c&&r.ge(a).ga(77),(f||!u&&!c)&&So(n,r,i,s,9,"S",!0),r.toString()}function bE(n){return n.hashCode()}function kE(n,r){if(!(r instanceof Ae))return!1;var e=r.uj_1;return!!sr(n,e)}function Ut(n){var r=Wr(),e=oe(n,1),t=gr(e,F(1));return r.tj(t)}function Ed(n,r){var e=vd(new b(-387905,1073741823),Mo(),r),t;if(ar(on(e),n)<=0&&ar(n,e)<=0)t=Ql(vd(n,r,Mo()));else if(r.y2(Fo())>=0){var a=_S(n),i=new b(0,-2147483648),s=gr(i,F(1));t=Ut(Tr(Rn(a),of(gS(Dx(n,s)),r)))}else t=Ut(Bc(cm(n,r,Fo()),new b(1,-1073741824),new b(-1,1073741823)));return t}function xE(n,r,e){if(e=e===o?!0:e,C(n)===0){var t="The string is empty";if(e)throw T.v(t);return Wr().sj_1}var a=0,i=G(n,a),s=!1;i===45?(s=!0,a=a+1|0):i===43&&(a=a+1|0);var l;if(n.length<=a){var u="No components";if(e)throw T.v(u);return Wr().sj_1}else if(G(n,a)===80)l=IE(n,a+1|0,e);else{if(e)throw T.v("");return Wr().sj_1}var f=l;return s&&!D(new Ae(f),new Ae(Wr().sj_1))?Dm(f):f}function SE(n,r){var e=Wr(),t=oe(n,1),a=gr(t,F(r));return e.tj(a)}function zE(n){var r;return ar(new b(387905,-1073741824),n)<=0&&ar(n,new b(-387905,1073741823))<=0?r=Ql(n):r=Ut(Hm(n)),r}function ov(n,r){var e;if(sr(n,new b(-1,1073741823))||sr(n,new b(1,-1073741824))){var t,a;ar(new b(1,-1073741824),r)<0&&ar(r,new b(-1,1073741823))<0?a=!0:a=ar(Re(n,r),new b(0,0))>=0,a?t=n:t=new b(-16162,2147483647),e=t}else sr(r,new b(-1,1073741823))||sr(r,new b(1,-1073741824))?e=r:e=Bc(gr(n,r),new b(1,-1073741824),new b(-1,1073741823));return e}function EE(n){var r;return ar(new b(1108857478,-1074),n)<=0&&ar(n,new b(-1108857478,1073))<=0?r=Ql(Jo(n)):r=Ut(Bc(n,new b(1,-1073741824),new b(-1,1073741823))),r}function Hm(n){return qr(n,F(1e6))}function Jo(n){return Tr(n,F(1e6))}function Ql(n){return Wr().tj(oe(n,1))}function IE(n,r,e){var t=r;if(t===n.length){if(e)throw T.v("");return Wr().sj_1}var a=new b(0,0),i=new b(0,0),s=!1,l=null;r:for(;t<n.length;){var u=G(n,t);if(u===84){var f;if(s?f=!0:(t=t+1|0,f=t===n.length),f){if(e)throw T.v("");return Wr().sj_1}s=!0;continue r}var c=t,v,h=Gm().xj_1,d=t,p;n:{var g=1,y=d;if(AE(h)){var x=G(n,y);x===45?(g=-1,y=y+1|0):x===43&&(y=y+1|0)}var k=y;e:for(;;){var S;if(k<n.length?S=G(n,k)===48:S=!1,!S)break e;k=k+1|0}y=k;var E=new b(0,0);e:for(;y<n.length;){var I=G(n,y);if(!(48<=I&&I<=57))break e;var A=Hn(I,48);if(ar(E,Id(h))>0||sr(E,Id(h))&&ar(F(A),qE(h))>0){var j=y;t:for(;;){var P;if(j<n.length){var $=G(n,j);P=48<=$?$<=57:!1}else P=!1;if(!P)break t;j=j+1|0}y=j;var B=y,N=g;if(t=B,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().sj_1}v=N,p=CE(h);break n}var H=E,L=gr(oe(H,3),oe(H,1));E=gr(L,F(A)),y=y+1|0}var J=y,R=g;if(t=J,t===n.length||t===(c+(u===45||u===43?1:0)|0)){if(e)throw T.v("");return Wr().sj_1}v=R,p=E}var V=p;if(G(n,t)===46){t=t+1|0;var K=t,nr=K,W=nr,tr=W+6|0,Q=n.length,ur=Math.min(tr,Q),X=0;n:for(;W<ur;){var Sr=G(n,W);if(!(48<=Sr&&Sr<=57))break n;var kr=X;X=((kr<<3)+(kr<<1)|0)+Hn(Sr,48)|0,W=W+1|0}var dr=6-(W-nr|0)|0,zr=0;if(zr<dr)do{zr=zr+1|0;var Er=X;X=(Er<<3)+(Er<<1)|0}while(zr<dr);K=W;var Br=X,Nr=K,pr=Nr,Gr=pr+9|0,tn=n.length,Zr=Math.min(Gr,tn),_r=0;n:for(;pr<Zr;){var Fr=G(n,pr);if(!(48<=Fr&&Fr<=57))break n;var Vr=_r;_r=((Vr<<3)+(Vr<<1)|0)+Hn(Fr,48)|0,pr=pr+1|0}var Xr=9-(pr-Nr|0)|0,$r=0;if($r<Xr)do{$r=$r+1|0;var an=_r;_r=(an<<3)+(an<<1)|0}while($r<Xr);K=pr;var _n=_r,wn=K;n:for(;;){var gn;if(wn<n.length){var Qn=G(n,wn);gn=48<=Qn?Qn<=57:!1}else gn=!1;if(!gn)break n;wn=wn+1|0}K=wn;var re=K;if(re===t||re===n.length||G(n,re)!==83){if(e)throw T.v("");return Wr().sj_1}t=re;var ne=F(Br),ve=1e9,ze=Tr(ne,F(ve)),Ee=gr(ze,F(_n));i=Tr(Rn(v),TE(Ee,Xc()))}var Ne=jE(n,t),Ze;if(Ne==null){var kt="Unknown duration unit short name: "+xr(G(n,t));if(e)throw T.v(kt);return Wr().sj_1}else Ze=Ne;var ee=Ze;if(l!=null&&l.y2(ee)<=0){var qn="Unexpected order of duration components";if(e)throw T.v(qn);return Wr().sj_1}if(l=ee,ee.equals(Qc())){if(s){if(e)throw T.v("");return Wr().sj_1}a=Tr(Rn(v),of(V,ee))}else{if(!s){if(e)throw T.v("");return Wr().sj_1}var Bn=ov(a,Tr(Rn(v),of(V,ee)));if(sr(Bn,new b(-16162,2147483647))){if(e)throw T.v("");return Wr().sj_1}a=Bn}t=t+1|0}return hE(Ed(a,Fo()),Ed(i,Mo()))}var sf;function Gm(){return sf===o&&new B_,sf}function CE(n){return n.zj_1}function AE(n){return n.ak_1}function Id(n){return n.bk_1}function qE(n){return n.ck_1}function TE(n,r){var e=OE(r),t=se(n)*e;return mS(t)}function jE(n,r){var e=G(n,r);return e===68?Qc():e===72?hm():e===77?vm():e===83?Xc():null}function OE(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw mr.o3(w(e))}return r}function of(n,r){return PE(n,BE(r))}function PE(n,r){var e;if(sr(n,new b(0,0)))e=new b(0,0);else if(sr(n,new b(1,0)))e=n1(r,new b(-1,1073741823));else if(sr(r,new b(1,0)))e=n1(n,new b(-1,1073741823));else{var t=(128-Wh(n)|0)-Wh(r)|0;e=t<63?Tr(n,r):t>63?new b(-1,1073741823):n1(Tr(n,r),new b(-1,1073741823))}return e}function BE(n){var r;switch(n.x2_1){case 6:r=new b(864e5,0);break;case 5:r=new b(36e5,0);break;case 4:r=new b(6e4,0);break;case 3:r=new b(1e3,0);break;case 2:r=new b(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw mr.o3(w(e))}return r}function zo(){return Vn(),Km}var Km;function NE(){return Vn(),Wm}var Wm;function UE(){return Vn(),Ym}var Ym;function DE(){return Vn(),Zm}var Zm,lf;function jt(){return lf===o&&new N_,lf}function RE(n){Vn();var r=Yr.f(),e=Vm.mk(n),t=e.nk_1;if(yS(t)<1e3){var a=Yr.f();t>=0?a.ge(t+1e4|0).le(0):a.ge(t-1e4|0).le(1),r.g(a)}else t>=1e4&&r.ga(43),r.ge(t);if(r.ga(45),os(r,r,e.ok_1),r.ga(45),os(r,r,e.pk_1),r.ga(84),os(r,r,e.qk_1),r.ga(58),os(r,r,e.rk_1),r.ga(58),os(r,r,e.sk_1),e.tk_1!==0){r.ga(46);for(var i=0;!(e.tk_1%zo()[i+1|0]|0);)i=i+1|0;i=i-(i%3|0)|0;var s=e.tk_1/zo()[i]|0;r.fa(Ye((s+zo()[9-i|0]|0).toString(),1))}return r.ga(90),r.toString()}function LE(n){Vn();var r=n,e=0;if(C(r)===0)return new Sc("An empty string is not a valid Instant",n);var t=rr(r,e),a;t===43||t===45?(e=e+1|0,a=t):a=32;var i=a,s=e,l=0;r:for(;;){var u;if(e<C(r)){var f=rr(r,e);u=48<=f?f<=57:!1}else u=!1;if(!u)break r;l=lr(l,10)+Hn(rr(r,e),48)|0,e=e+1|0}var c=e-s|0,v;if(c>10)return un(n,"Expected at most 10 digits for the year number, got "+c+" digits");if(c===10&&mn(rr(r,s),50)>=0)return un(n,"Expected at most 9 digits for the year number or year 1000000000, got "+c+" digits");if(c<4)return un(n,"The year number must be padded to 4 digits, got "+c+" digits");if(i===43&&c===4)return un(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(i===32&&c!==4)return un(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=i===45?-l|0:l;var h=v;if(C(r)<(e+16|0))return un(n,"The input string is too short");var d=e,p=ii(n,"'-'",d,FE);if(p!=null)return p;var g=e+3|0,y=ii(n,"'-'",g,$E);if(y!=null)return y;var x=e+6|0,k=ii(n,"'T' or 't'",x,JE);if(k!=null)return k;var S=e+9|0,E=ii(n,"':'",S,HE);if(E!=null)return E;var I=e+12|0,A=ii(n,"':'",I,GE);if(A!=null)return A;for(var j=NE(),P=0,$=j.length;P<$;){var B=j[P];P=P+1|0;var N=e+B|0,H=ii(n,"an ASCII digit",N,KE);if(H!=null)return H}var L=Et(r,e+1|0),J=Et(r,e+4|0),R=Et(r,e+7|0),V=Et(r,e+10|0),K=Et(r,e+13|0),nr;if(rr(r,e+15|0)===46){var W=e+16|0;e=W;var tr=0;r:for(;;){var Q;if(e<C(r)){var ur=rr(r,e);Q=48<=ur?ur<=57:!1}else Q=!1;if(!Q)break r;tr=lr(tr,10)+Hn(rr(r,e),48)|0,e=e+1|0}var X=e-W|0,Sr;if(1<=X&&X<=9)Sr=lr(tr,zo()[9-X|0]);else return un(n,"1..9 digits are supported for the fraction of the second, got "+X+" digits");nr=Sr}else e=e+15|0,nr=0;var kr=nr;if(e>=C(r))return un(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),zr;if(dr===122||dr===90){var Er;if(C(r)===(e+1|0))Er=0;else return un(n,"Extra text after the instant at position "+(e+1|0));zr=Er}else if(dr===45||dr===43){var Br=C(r)-e|0;if(Br>9){var Nr=e,pr=C(r),Gr=w(Ln(r,Nr,pr));return un(n,'The UTC offset string "'+lv(Gr,16)+'" is too long')}if(Br%3|0){var tn=e,Zr=C(r),_r=w(Ln(r,tn,Zr));return un(n,'Invalid UTC offset string "'+_r+'"')}var Fr=UE(),Vr=0,Xr=Fr.length;r:for(;Vr<Xr;){var $r=Fr[Vr];if(Vr=Vr+1|0,(e+$r|0)>=C(r))break r;if(rr(r,e+$r|0)!==58)return un(n,"Expected ':' at index "+(e+$r|0)+", got '"+xr(rr(r,e+$r|0))+"'")}var an=DE(),_n=0,wn=an.length;r:for(;_n<wn;){var gn=an[_n];if(_n=_n+1|0,(e+gn|0)>=C(r))break r;var Qn=rr(r,e+gn|0);if(!(48<=Qn&&Qn<=57))return un(n,"Expected an ASCII digit at index "+(e+gn|0)+", got '"+xr(rr(r,e+gn|0))+"'")}var re=Et(r,e+1|0),ne;Br>3?ne=Et(r,e+4|0):ne=0;var ve=ne,ze;Br>6?ze=Et(r,e+7|0):ze=0;var Ee=ze;if(ve>59)return un(n,"Expected offset-minute-of-hour in 0..59, got "+ve);if(Ee>59)return un(n,"Expected offset-second-of-minute in 0..59, got "+Ee);if(re>17&&!(re===18&&ve===0&&Ee===0)){var Ne=e,Ze=C(r),kt=w(Ln(r,Ne,Ze));return un(n,"Expected an offset in -18:00..+18:00, got "+kt)}zr=lr((lr(re,3600)+lr(ve,60)|0)+Ee|0,dr===45?-1:1)}else return un(n,"Expected the UTC offset at position "+e+", got '"+xr(dr)+"'");var ee=zr;if(!(1<=L&&L<=12))return un(n,"Expected a month number in 1..12, got "+L);if(!(1<=J&&J<=ME(L,Cd(h))))return un(n,"Expected a valid day-of-month for month "+L+" of year "+h+", got "+J);if(R>23)return un(n,"Expected hour in 0..23, got "+R);if(V>59)return un(n,"Expected minute-of-hour in 0..59, got "+V);if(K>59)return un(n,"Expected second-of-minute in 0..59, got "+K);var qn=new zc(h,L,J,R,V,K,kr),Bn=F(qn.nk_1),bn=Tr(Rn(365),Bn);if(ar(Bn,new b(0,0))>=0){var Jt=bn,he=gr(Bn,F(3)),Ve=qr(he,F(4)),xt=gr(Bn,F(99)),Ht=qr(xt,F(100)),Vi=Hr(Ve,Ht),Gt=gr(Bn,F(399)),Xe=qr(Gt,F(400));bn=gr(Jt,gr(Vi,Xe))}else{var de=bn,Kt=qr(Bn,F(-4)),Ga=qr(Bn,F(-100)),Ka=Hr(Kt,Ga),Wt=qr(Bn,F(-400));bn=Hr(de,gr(Ka,Wt))}var Wa=bn,Ue=(lr(367,qn.ok_1)-362|0)/12|0;bn=gr(Wa,F(Ue));var Yt=bn,Zt=qn.pk_1-1|0;if(bn=gr(Yt,F(Zt)),qn.ok_1>2){var Vt=bn;if(bn=Hr(Vt,lt()),!Cd(qn.nk_1)){var Ya=bn;bn=Hr(Ya,lt())}}var Xt=bn,St=Hr(Xt,F(719528)),Qt=(lr(qn.qk_1,3600)+lr(qn.rk_1,60)|0)+qn.sk_1|0,Za=Tr(St,F(86400)),Xi=gr(Za,F(Qt)),Va=Hr(Xi,F(ee)),Qe=qn.tk_1;return new U_(Va,Qe)}var Vm;function lv(n,r){Vn();var e;return C(n)<=r?e=w(n):e=w(Ln(n,0,r))+"...",e}function ME(n,r){switch(Vn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function Cd(n){return Vn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function os(n,r,e){e<10&&n.ga(48),r.ge(e)}function un(n,r){return new Sc(r+' when parsing an Instant from "'+lv(n,64)+'"',n)}function ii(n,r,e,t){var a=rr(n,e),i;return t(new Cn(a))?i=null:i=un(n,"Expected "+r+", but got '"+xr(a)+"' at position "+e),i}function FE(n){return Vn(),D(n,new Cn(45))}function $E(n){return Vn(),D(n,new Cn(45))}function JE(n){return Vn(),D(n,new Cn(84))||D(n,new Cn(116))}function HE(n){return Vn(),D(n,new Cn(58))}function GE(n){return Vn(),D(n,new Cn(58))}function KE(n){Vn();var r=n.x1_1;return 48<=r?r<=57:!1}function Et(n,r){return lr(Hn(rr(n,r),48),10)+Hn(rr(n,r+1|0),48)|0}var Ad;function Vn(){Ad||(Ad=!0,Km=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),Wm=new Int32Array([1,2,4,5,7,8,10,11,13,14]),Ym=new Int32Array([3,6]),Zm=new Int32Array([1,2,4,5,7,8]))}function h1(){return Qm(),Xm}var Xm;function WE(n,r){return Qm(),new M_(n.el_1,r).jl()}var qd;function Qm(){if(!qd){qd=!0;var n=Ts();Xm=n}}var Td;function YE(){if(Td)return or;Td=!0,r0=new F_("PUBLICATION",1)}var r0,Eo;function Io(){return YE(),r0}function ZE(n){var r=n;return!(r instanceof Lt)}function n0(n){var r;return n instanceof Lt?r=n.ol_1:r=null,r}function VE(n){var r;return n instanceof Lt?r=n.toString():r="Success("+we(n)+")",r}function XE(n){return n==null?0:br(n)}function QE(n,r){if(!(r instanceof _a))return!1;var e=r.pl_1;return!!D(n,e)}function rI(n){var r=n;if(r instanceof Lt)throw n.ol_1}function e0(n){return new Lt(n)}function O(n,r){return new Ll(n,r)}var uf;function Ys(){return uf===o&&new J_,uf}function nI(n,r){return n.length<=r?n:Gn(n,0,r)+"..."}function te(n,r,e){throw T.v("Expected "+r+" at index "+e+", but was '"+xr(G(n,e))+"'")}var ff;function ru(){return ff===o&&new H_,ff}function t0(n,r){var e=n&255,t=r&255;return Me(e,t)}function eI(n,r){return t0(n.zl_1,r instanceof Ke?r.zl_1:m())}function cf(n){return(n&255).toString()}function tI(n,r){return!(!(r instanceof Ke)||n!==r.zl_1)}function jd(n){return new Int8Array(n)}function aI(n,r){var e=n[r];return e}function iI(n,r,e){var t=n;t[r]=e}function za(n){return n.length}function sI(n){return new G_(n)}function a0(n,r){var e=n,t=r;return tx(e,t)}function oI(n,r){return r instanceof Ke?a0(n.em_1,r instanceof Ke?r.zl_1:m()):!1}function lI(n){return n.length===0}function uI(n){return"UByteArray(storage="+w(n)+")"}function fI(n){return br(n)}function cI(n,r){if(!(r instanceof ya))return!1;var e=r.em_1;return!!D(n,e)}var vf;function nu(){return vf===o&&new K_,vf}function i0(n,r){return _i(n,r)}function vI(n,r){return i0(n.km_1,r instanceof ue?r.km_1:m())}function hf(n){return(n>>>0).toString()}function hI(n,r){return!(!(r instanceof ue)||n!==r.km_1)}function Od(n){return new Int32Array(n)}function dI(n,r){var e=n[r];return e}function pI(n,r,e){var t=n;t[r]=e}function Ea(n){return n.length}function _I(n){return new W_(n)}function s0(n,r){var e=n,t=r;return ax(e,t)}function gI(n,r){return r instanceof ue?s0(n.pm_1,r instanceof ue?r.km_1:m()):!1}function mI(n){return n.length===0}function yI(n){return"UIntArray(storage="+w(n)+")"}function wI(n){return br(n)}function bI(n,r){if(!(r instanceof wa))return!1;var e=r.pm_1;return!!D(n,e)}var df;function Zs(){return df===o&&new Y_,df}function o0(n,r){return Tt(n,r)}function kI(n,r){return o0(n.vm_1,r instanceof fe?r.vm_1:m())}function pf(n){var r=n;return F2(r,10)}function xI(n){return n.hashCode()}function SI(n,r){if(!(r instanceof fe))return!1;var e=r.vm_1;return!!sr(n,e)}function Pd(n){return qa(n)}function zI(n,r){var e=n[r];return e}function EI(n,r,e){var t=n;t[r]=e}function Ia(n){return n.length}function II(n){return new Z_(n)}function l0(n,r){var e=n,t=r;return ix(e,t)}function CI(n,r){return r instanceof fe?l0(n.an_1,r instanceof fe?r.vm_1:m()):!1}function AI(n){return n.length===0}function qI(n){return"ULongArray(storage="+w(n)+")"}function TI(n){return br(n)}function jI(n,r){if(!(r instanceof ba))return!1;var e=r.an_1;return!!D(n,e)}var _f;function eu(){return _f===o&&new V_,_f}function u0(n,r){var e=n&65535,t=r&65535;return Me(e,t)}function OI(n,r){return u0(n.gn_1,r instanceof We?r.gn_1:m())}function gf(n){return(n&65535).toString()}function PI(n,r){return!(!(r instanceof We)||n!==r.gn_1)}function Bd(n){return new Int16Array(n)}function BI(n,r){var e=n[r];return e}function NI(n,r,e){var t=n;t[r]=e}function Ca(n){return n.length}function UI(n){return new X_(n)}function f0(n,r){var e=n,t=r;return sx(e,t)}function DI(n,r){return r instanceof We?f0(n.ln_1,r instanceof We?r.gn_1:m()):!1}function RI(n){return n.length===0}function LI(n){return"UShortArray(storage="+w(n)+")"}function MI(n){return br(n)}function FI(n,r){if(!(r instanceof ka))return!1;var e=r.ln_1;return!!D(n,e)}function c0(n){return KI(n,10)}function $I(n){var r=WI(n),e,t=r;return(t==null?null:new ue(t))==null?Ri(n):e=r,e}function JI(n){var r=c0(n),e,t=r;return(t==null?null:new fe(t))==null?Ri(n):e=r,e}function HI(n){var r=YI(n),e,t=r;return(t==null?null:new Ke(t))==null?Ri(n):e=r,e}function GI(n){var r=ZI(n),e,t=r;return(t==null?null:new We(t))==null?Ri(n):e=r,e}function KI(n,r){Ni(r);var e=n.length;if(e===0)return null;var t=new b(-1,-1),a,i=G(n,0);if(mn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=new b(477218588,119304647),l=s,u=F(r),f=new b(0,0),c=a;if(c<e)do{var v=c;c=c+1|0;var h=Gl(G(n,v),r);if(h<0)return null;var d=f,p=l;if(Tt(d,p)>0)if(D(new fe(l),new fe(s))){l=M2(t,u);var g=f,y=l;if(Tt(g,y)>0)return null}else return null;var x=f;f=Tr(x,u);var k=f,S=f,E=h,I=E,A=Is(F(I),new b(-1,0)),j=A;f=gr(S,j);var P=f;if(Tt(P,k)<0)return null}while(c<e);return f}function WI(n){return uv(n,10)}function YI(n){return VI(n,10)}function ZI(n){return XI(n,10)}function uv(n,r){Ni(r);var e=n.length;if(e===0)return null;var t=-1,a,i=G(n,0);if(mn(i,48)<0){if(e===1||i!==43)return null;a=1}else a=0;var s=119304647,l=s,u=r,f=0,c=a;if(c<e)do{var v=c;c=c+1|0;var h=Gl(G(n,v),r);if(h<0)return null;var d=f,p=l;if(_i(d,p)>0)if(D(new ue(l),new ue(s))){l=L2(t,u);var g=f,y=l;if(_i(g,y)>0)return null}else return null;var x=f;f=lr(x,u);var k=f,S=f,E=h;f=S+E|0;var I=f;if(_i(I,k)<0)return null}while(c<e);return f}function VI(n,r){var e=uv(n,r),t,a=e;if((a==null?null:new ue(a))==null)return null;t=e;var i=t,s=-1,l=s&255;if(_i(i,l)>0)return null;var u=i;return Jn(u)}function XI(n,r){var e=uv(n,r),t,a=e;if((a==null?null:new ue(a))==null)return null;t=e;var i=t,s=-1,l=s&65535;if(_i(i,l)>0)return null;var u=i;return Jc(u)}Pr(pc,"CharSequence");Pr(Oe,"Comparable");_(gp,"Number");_(mp);_(yp);_(wp);nn(bp);_(Cn,"Char",o,o,[Oe]);Pr(Z,"Collection");Pr(Le,"Set",o,o,[Z]);Pr(En,"List",o,o,[Z]);Pr(ut,"Entry");Pr(xn,"Map");Pr(bi,"MutableMap",o,o,[xn]);nn(Lk);_(ae,"Enum",o,o,[Oe]);nn(kp);_(b,"Long",o,o,[Oe]);Pr(yn,"FunctionAdapter");_(xp);U(Mk,"ByteCompanionObject");U(Fk,"ShortCompanionObject");U($k,"IntCompanionObject");U(Jk,"FloatCompanionObject");U(Hk,"DoubleCompanionObject");U(Gk,"StringCompanionObject");U(Kk,"BooleanCompanionObject");U(Sp,"Digit");U(zp,"Letter");Pr(cn,"Comparator");U(Bl,"Unit");_(qi,"AbstractCollection",o,o,[Z]);_(Ns,"AbstractMutableCollection",o,o,[Z]);_(_c,"IteratorImpl");_(Ep,"ListIteratorImpl");_(Ip,"AbstractMutableList",o,o,[En,Z]);_(Cp,"AbstractMap",o,o,[xn]);_(Ap,"AbstractMutableMap",o,o,[bi]);_(Us,"AbstractMutableSet",o,o,[Le,Z]);nn(qp);Pr(Ds,"RandomAccess");_(q,"ArrayList",q.m,o,[En,Z,Ds]);_(ks,"HashMap",ks.a7,o,[bi]);_(Tp,"HashMapKeys",o,o,[Le,Z]);_(jp,"HashMapValues",o,o,[Z]);_(Op,"HashMapEntrySetBase",o,o,[Le,Z]);_(Pp,"HashMapEntrySet");_(Bp);_(Np,"HashMapKeysDefault");_(Up);_(Dp,"HashMapValuesDefault");_(Aa,"HashSet",Aa.q8,o,[Le,Z]);nn(Rp);_(Nl,"Itr");_(Lp,"KeysItr");_(Mp,"ValuesItr");_(Fp,"EntriesItr");_($p,"EntryRef",o,o,[ut]);Pr(Jp,"InternalMap");Lr(He).k8=Wk;_(He,"InternalHashMap",He.l7,o,[Jp]);U(Hp,"EmptyHolder");_(cr,"LinkedHashMap",cr.t4,o,[bi]);_(Pn,"LinkedHashSet",Pn.i1,o,[Le,Z]);Pr(ht,"Continuation");U(Gp,"CompletedContinuation",o,o,[ht]);_(gc,"InterceptedCoroutine",o,o,[ht]);_(mc,"GeneratorCoroutineImpl",o,o,[ht]);_(Kp,o,o,o,[ht]);_(xs,"Exception",xs.tb);_(ye,"RuntimeException",ye.nb);_(le,"UnsupportedOperationException",le.s6);_(T,"IllegalArgumentException",T.qb);_(jr,"NoSuchElementException",jr.j1);_(Wn,"IndexOutOfBoundsException",Wn.yb);_(mr,"IllegalStateException",mr.ac);_(To,"ConcurrentModificationException",To.p9);_(b1,"ArithmeticException",b1.ec);_(jo,"Error",jo.kc);_(vs,"AssertionError",vs.ic);_(k1,"NumberFormatException",k1.sc);_(x1,"NoWhenBranchMatchedException",x1.s3);_(S1,"NullPointerException",S1.w3);_(z1,"ClassCastException",z1.a4);Pr(at,"KClass");_(Ti,"KClassImpl",o,o,[at]);_(sn,"PrimitiveKClassImpl");U(yc,"NothingKClassImpl");_(E1,"SimpleKClassImpl");Pr(Wp,"KProperty0");Pr(Ba,"KProperty1");U(Yp,"PrimitiveClasses");_(Ph,"CharacterCodingException",Ph.ce);_(Yr,"StringBuilder",Yr.f,o,[pc]);nn(Zp);_(ge,"Regex");_(I1,"RegexOption");_(Ss,"MatchGroup");Pr(wc,"MatchNamedGroupCollection",o,o,[Z]);_(Vp,o,o,o,[wc]);_(bc,"AbstractList",o,o,[En]);_(Xp);_(Qp);_(Yk,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Ct,"DurationUnit");_(kc,"IteratorImpl");_(r_,"ListIteratorImpl");nn(n_);_(e_);_(t_);nn(Zk);_(a_,"AbstractSet",o,o,[Le]);_(i_);_(s_);nn(o_);U(l_,"EmptyList",o,o,[En,Ds]);U(u_,"EmptyIterator");_(Ul,"IndexedValue");_(f_,"IndexingIterable");_(c_,"IndexingIterator");Pr(v_,"MapWithDefault",o,o,[xn]);U(h_,"EmptyMap",o,o,[xn]);_(d_,"IntIterator");_(p_);_(__,"TransformingSequence");Pr(Dl,"DropTakeSequence");_(g_);_(Rl,"TakeSequence",o,o,[Dl]);U(m_,"EmptySequence",o,o,[Dl]);_(y_);_(xc,"GeneratorSequence");U(w_,"EmptySet",o,o,[Le]);U(b_,"NaturalOrderComparator",o,o,[cn]);_(k_,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(x_,"Key");Pr(Vk,"ContinuationInterceptor");U(S_,"EmptyCoroutineContext");_(z_,"CoroutineSingletons");_(E_,"EnumEntriesList",o,o,[En,Ds]);nn(I_);_(Rs,"IntProgression");Pr(vi,"ClosedRange");_(Rt,"IntRange",o,o,[vi]);_(C_,"IntProgressionIterator");nn(A_);_(q_);_(T_,"DelimitedRangesSequence");U(Xk,"State");_(j_,"LinesIterator");_(O_);nn(P_);_(Ae,"Duration",o,o,[Oe]);nn(B_);_(C1,"LongParser");U(Qk,"FractionalParser");nn(N_);_(ft,"Instant",o,o,[Oe]);_(U_,"Success");_(Sc,"Failure");nn(D_);_(zc,"UnboundLocalDateTime");_(Ec,"InstantFormatException");_(R_,"DeepRecursiveScope",o,o,o,[1,2]);_(L_,"DeepRecursiveFunction");_(M_,"DeepRecursiveScopeImpl",o,o,[ht],[1,2]);_(F_,"LazyThreadSafetyMode");_(Ic,"UnsafeLazyImpl");U($_,"UNINITIALIZED_VALUE");nn(rx);_(Lt,"Failure");_(_a,"Result");_(Bh,"NotImplementedError",Bh.hb);_(Ll,"Pair");nn(J_);_(Ot,"Uuid",o,o,[Oe]);nn(H_);_(Ke,"UByte",o,o,[Oe]);_(G_,"Iterator");_(ya,"UByteArray",o,o,[Z]);nn(K_);_(ue,"UInt",o,o,[Oe]);_(W_,"Iterator");_(wa,"UIntArray",o,o,[Z]);nn(Y_);_(fe,"ULong",o,o,[Oe]);_(Z_,"Iterator");_(ba,"ULongArray",o,o,[Z]);nn(V_);_(We,"UShort",o,o,[Oe]);_(X_,"Iterator");_(ka,"UShortArray",o,o,[Z]);or=new Bl;ko=null;Cs=new Rp;Vg=new Gp;Mn=new n_;As=new o_;qs=new u_;Kl=new m_;bm=new b_;nf=new x_;tv=new A_;Vm=new D_;Eo=new $_;var Qr=Math.imul;class tu{}class mi{}class hr{}class Yn extends T{static xn(){var r=this.qb();return d1(r),r}static yn(r){var e=this.v(r);return d1(e),e}static zn(r,e){var t=this.rb(r,e);return d1(t),t}}class au extends Yn{constructor(r,e,t,a){return new.target.ho(r,e,t,a)}static ho(r,e,t,a){var i=this.zn(r,e);return vn(i,i.go_1),i.eo_1=t,i.fo_1=a,i}io(r){return au.ho(r,this,this.eo_1,this.fo_1)}}class ke{}function La(){return!1}function Ma(){return!1}function Vs(){return fr()}class v0{}class h0{constructor(r){this.yo_1=r,this.xo_1=r.qo()}y(){return this.xo_1>0}z(){var r=this.yo_1.qo(),e=this.xo_1;return this.xo_1=e-1|0,this.yo_1.vo(r-e|0)}}class d0{constructor(r){this.zo_1=r}x(){return new h0(this.zo_1)}}class p0{constructor(r){this.ap_1=r,this.bp_1=!1,this.cp_1=fr(),this.dp_1=q.m(),this.ep_1=Aa.q8(),this.fp_1=q.m(),this.gp_1=q.m(),this.hp_1=q.m()}ip(r,e,t,a){if(!this.ep_1.n(r)){var i="Element with name '"+r+"' is already registered in "+this.ap_1;throw T.v(w(i))}this.dp_1.n(r),this.fp_1.n(e),this.gp_1.n(t),this.hp_1.n(a)}jp(r,e,t,a,i){t=t===o?fr():t,a=a===o?!1:a;var s;return i===o?(this.ip(r,e,t,a),s=or):s=i.ip.call(this,r,e,t,a),s}}class Xs{}class Mi{constructor(r,e,t,a,i){this.kp_1=r,this.lp_1=e,this.mp_1=t,this.np_1=i.cp_1,this.op_1=xx(i.dp_1);var s=this,l=i.dp_1;s.pp_1=Pa(l),this.qp_1=If(i.fp_1);var u=this,f=i.gp_1;u.rp_1=Pa(f),this.sp_1=Sx(i.hp_1);for(var c=this,v=px(this.pp_1),h=q.f1(Mr(v,10)),d=v.x();d.y();){var p=d.z(),g=O(p.hh_1,p.gh_1);h.n(g)}c.tp_1=pm(h),this.up_1=If(a);var y=this;y.vp_1=Wc(SC(this))}mo(){return this.kp_1}no(){return this.lp_1}qo(){return this.mp_1}ro(){return this.np_1}wp(){return this.op_1}so(r){return yi(this.pp_1,r)}to(r){var e=this.tp_1.o2(r);return e??-3}uo(r){return yi(this.rp_1,r)}vo(r){return yi(this.qp_1,r)}wo(r){return Ky(this.sp_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Mi)){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}if(!Hc(this.up_1,r.up_1)){e=!1;break r}if(this.qo()!==r.qo()){e=!1;break r}var t=0,a=this.qo();if(t<a)do{var i=t;if(t=t+1|0,this.vo(i).mo()!==r.vo(i).mo()){e=!1;break r}if(!D(this.vo(i).no(),r.vo(i).no())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return By(this)}toString(){return Fy(this)}}class Fi{toString(){return fn(Rr(this).uc())}hashCode(){return me(this.toString())}}class iu extends Fi{constructor(){Ho=null,super(),Ho=this}}class _0 extends Fi{constructor(){Go=null,super(),Go=this}}class Qs extends Fi{}class g0 extends Qs{constructor(){Ko=null,super(),Ko=this}}class m0 extends Qs{constructor(){Wo=null,super(),Wo=this}}class y0 extends Qs{constructor(){Yo=null,super(),Yo=this}}class w0 extends Qs{constructor(){Zo=null,super(),Zo=this}}class Xn extends Fi{}class b0 extends Xn{constructor(){Vo=null,super(),Vo=this}}class k0 extends Xn{constructor(){Xo=null,super(),Xo=this}}class x0 extends Xn{constructor(){Qo=null,super(),Qo=this}}class S0 extends Xn{constructor(){rl=null,super(),rl=this}}class z0 extends Xn{constructor(){nl=null,super(),nl=this}}class E0 extends Xn{constructor(){el=null,super(),el=this}}class I0 extends Xn{constructor(){tl=null,super(),tl=this}}class C0 extends Xn{constructor(){al=null,super(),al=this}}class A0 extends Xn{constructor(){il=null,super(),il=this}}class $i extends Fi{}class q0 extends $i{constructor(){sl=null,super(),sl=this}}class su{}function T0(n){return n.pn(this)}class ou{}function j0(){return!1}function O0(n){return-1}function P0(n,r,e,t,a){return t=t===o?null:t,a===o?this.xq(n,r,e,t):a.xq.call(this,n,r,e,t)}class Fa{xp(){throw Yn.yn(w(Rr(this))+" can't retrieve untyped values")}yp(){return!0}zp(){return null}aq(){var r=this.xp();return typeof r=="boolean"?r:m()}bq(){var r=this.xp();return typeof r=="number"?r:m()}cq(){var r=this.xp();return typeof r=="number"?r:m()}dq(){var r=this.xp();return typeof r=="number"?r:m()}eq(){var r=this.xp();return r instanceof b?r:m()}fq(){var r=this.xp();return typeof r=="number"?r:m()}gq(){var r=this.xp();return typeof r=="number"?r:m()}hq(){var r=this.xp();return r instanceof Cn?r.x1_1:m()}iq(){var r=this.xp();return typeof r=="string"?r:m()}jq(r){return this}kq(r,e){return this.lq(r)}mq(r){return this}nq(r){}oq(r,e){return this.aq()}pq(r,e){return this.bq()}qq(r,e){return this.cq()}rq(r,e){return this.dq()}sq(r,e){return this.eq()}tq(r,e){return this.fq()}uq(r,e){return this.gq()}vq(r,e){return this.hq()}wq(r,e){return this.jq(r.vo(e))}xq(r,e,t,a){return this.kq(t,a)}}class fv{}function QI(n,r){return this.mq(n)}function rC(n,r){n.on(this,r)}class ro{static dr(){return Ua(this)}mq(r){return this}nq(r){}er(r,e){return!0}fr(r){throw Yn.yn("Non-serializable "+w(Rr(r))+" is not supported by "+w(Rr(this))+" encoder")}gr(){throw Yn.yn("'null' is not supported by default")}hr(r){return this.fr(r)}ir(r){return this.fr(r)}jr(r){return this.fr(r)}kr(r){return this.fr(r)}lr(r){return this.fr(r)}mr(r){return this.fr(r)}nr(r){return this.fr(r)}or(r){return this.fr(new Cn(r))}pr(r){return this.fr(r)}qr(r){return this}rr(r,e,t){this.er(r,e)&&this.hr(t)}sr(r,e,t){this.er(r,e)&&this.ir(t)}tr(r,e,t){this.er(r,e)&&this.jr(t)}ur(r,e,t){this.er(r,e)&&this.kr(t)}vr(r,e,t){this.er(r,e)&&this.lr(t)}wr(r,e,t){this.er(r,e)&&this.mr(t)}xr(r,e,t){this.er(r,e)&&this.nr(t)}yr(r,e,t){this.er(r,e)&&this.or(t)}zr(r,e){return this.er(r,e)?this.qr(r.vo(e)):KC()}as(r,e,t,a){this.er(r,e)&&this.bs(t,a)}}class Ci{sn(r,e){return r.zq().ds(this.rn(),e)}qn(r,e){return r.zq().es(this.rn(),e)}}class B0{constructor(){bf=this,this.fs_1=WC()}nn(){return this.fs_1}gs(r,e){throw Yn.yn("'kotlin.Nothing' cannot be serialized")}on(r,e){var t;return t=m(),this.gs(r,t)}pn(r){throw Yn.yn("'kotlin.Nothing' does not have instances")}}class N0{constructor(){kf=this,this.hs_1=new In("kotlin.time.Duration",Gi())}nn(){return this.hs_1}is(r,e){r.pr(wE(e))}on(r,e){return this.is(r,e instanceof Ae?e.uj_1:m())}js(r){return Wr().vj(r.iq())}pn(r){return new Ae(this.js(r))}}class U0{constructor(){xf=this,this.ks_1=new In("kotlin.time.Instant",Gi())}nn(){return this.ks_1}ls(r,e){r.pr(e.toString())}on(r,e){return this.ls(r,e instanceof ft?e:m())}pn(r){return jt().hk(r.iq())}}class D0{constructor(){Sf=this,this.ms_1=new In("kotlin.uuid.Uuid",Gi())}nn(){return this.ms_1}ns(r,e){r.pr(e.toString())}on(r,e){return this.ns(r,e instanceof Ot?e:m())}pn(r){return Ys().ql(r.iq())}}class $t{constructor(r){this.qs_1=r,this.rs_1=1}no(){return eo()}qo(){return this.rs_1}so(r){return At(r,this.mo()),r.toString()}to(r){var e=Yl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}wo(r){return At(r,this.mo()),!1}uo(r){return At(r,this.mo()),fr()}vo(r){return At(r,this.mo()),this.qs_1}equals(r){return this===r?!0:r instanceof $t?!!(D(this.qs_1,r.qs_1)&&this.mo()===r.mo()):!1}hashCode(){return Qr(br(this.qs_1),31)+me(this.mo())|0}toString(){return this.mo()+"("+w(this.qs_1)+")"}}class R0 extends $t{mo(){return"kotlin.collections.ArrayList"}}class $a{constructor(r,e,t){this.ss_1=r,this.ts_1=e,this.us_1=t,this.vs_1=2}mo(){return this.ss_1}no(){return vu()}qo(){return this.vs_1}so(r){return At(r,this.mo()),r.toString()}to(r){var e=Yl(r),t;if(e==null)t=null;else{var a;e>=0?a=e:a=null,t=a}var i=t;return i??-3}wo(r){return At(r,this.mo()),!1}uo(r){return At(r,this.mo()),fr()}vo(r){At(r,this.mo());var e;switch(r%2|0){case 0:e=this.ts_1;break;case 1:e=this.us_1;break;default:var t="Unreached";throw mr.o3(w(t))}return e}equals(r){return this===r?!0:!(!(r instanceof $a)||this.mo()!==r.mo()||!D(this.ts_1,r.ts_1)||!D(this.us_1,r.us_1))}hashCode(){var r=me(this.mo());return r=Qr(31,r)+br(this.ts_1)|0,r=Qr(31,r)+br(this.us_1)|0,r}toString(){return this.mo()+"("+w(this.ts_1)+", "+w(this.us_1)+")"}}class L0 extends $a{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class M0 extends $t{constructor(r){super(r),this.ys_1=r.mo()+"Array"}mo(){return this.ys_1}}class cv{st(r,e){var t=r.mq(this.nn()),a=t.cr(this.nn());if(!(a>=-1)){var i="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+a;throw T.v(w(i))}var s;e!=null?s=this.ht(e,this.xt(e)+ln(a,0)|0):s=this.bt(a);var l=s,u=this.dt(l);if(t.ar())this.pt(t,l,u,a);else r:for(;;){var f=t.br(this.nn());if(f===-1)break r;this.rt(t,u+f|0,l)}return t.nq(this.nn()),this.ft(l)}pn(r){return this.st(r,null)}rt(r,e,t,a,i){a=a===o?!0:a;var s;return i===o?(this.qt(r,e,t,a),s=or):s=i.qt.call(this,r,e,t,a),s}}class vv extends cv{constructor(r){super(),this.nt_1=r}ot(r,e){var t=this.xt(e),a=this.nn(),i=r.cs(a,t),s=this.zt(e),l=0;if(l<t)do{var u=l;l=l+1|0,i.as(this.nn(),u,this.nt_1,s.z())}while(l<t);i.nq(a)}on(r,e){return this.ot(r,e)}pt(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=0;if(s<a)do{var l=s;s=s+1|0,this.qt(r,t+l|0,e,!1)}while(s<a)}qt(r,e,t,a){this.jt(t,e,r.yq(this.nn(),e,this.nt_1))}}class F0 extends vv{lt(r){return r.c1()}xt(r){return this.lt(r!=null&&z(r,Z)?r:m())}mt(r){return r.x()}zt(r){return this.mt(r!=null&&z(r,Z)?r:m())}}class $0 extends F0{constructor(r){super(r),this.at_1=new R0(r.nn())}nn(){return this.at_1}bt(r){return r===-1?q.m():q.f1(r)}ct(r){return r.c1()}dt(r){return this.ct(r instanceof q?r:m())}et(r){return r}ft(r){return this.et(r instanceof q?r:m())}gt(r,e){if(r instanceof q)return r.n6(e),r;if(e===r.c1())return q.h1(r);var t=q.f1(e);return t.g1(r),t}ht(r,e){return this.gt(r!=null&&z(r,En)?r:m(),e)}it(r,e,t){r.o5(e,t)}jt(r,e,t){return this.it(r instanceof q?r:m(),e,t)}}class J0 extends cv{constructor(r,e){super(),this.du_1=r,this.eu_1=e}fu(r,e,t,a){if(!(a>=0)){var i="Size must be known in advance when using READ_ALL";throw T.v(w(i))}var s=Ux(Pc(0,Qr(a,2)),2),l=s.r1_1,u=s.s1_1,f=s.t1_1;if(f>0&&l<=u||f<0&&u<=l)do{var c=l;l=l+f|0,this.gu(r,t+c|0,e,!1)}while(c!==u)}pt(r,e,t,a){return this.fu(r,e!=null&&z(e,bi)?e:m(),t,a)}gu(r,e,t,a){var i=r.yq(this.nn(),e,this.du_1),s;if(a){var l=r.br(this.nn());if(l!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+l;throw T.v(w(u))}s=l}else s=e+1|0;var f=s,c,v;if(t.m2(i)){var h=this.eu_1.nn().no();v=!(h instanceof Xn)}else v=!1;v?c=r.xq(this.nn(),f,this.eu_1,qe(t,i)):c=r.yq(this.nn(),f,this.eu_1);var d=c;t.s2(i,d)}qt(r,e,t,a){return this.gu(r,e,t!=null&&z(t,bi)?t:m(),a)}ot(r,e){for(var t=this.xt(e),a=this.nn(),i=r.cs(a,t),s=this.zt(e),l=0,u=s;u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=this.nn(),d=l;l=d+1|0,i.as(h,d,this.du_1,c);var p=this.nn(),g=l;l=g+1|0,i.as(p,g,this.eu_1,v)}i.nq(a)}on(r,e){return this.ot(r,e)}}class H0 extends J0{constructor(r,e){super(r,e),this.vt_1=new L0(r.nn(),e.nn())}nn(){return this.vt_1}wt(r){return r.c1()}xt(r){return this.wt(r!=null&&z(r,xn)?r:m())}yt(r){return r.r2().x()}zt(r){return this.yt(r!=null&&z(r,xn)?r:m())}bt(r){return r===-1?cr.t4():Nd(r)}au(r){return Qr(r.c1(),2)}dt(r){return this.au(r instanceof cr?r:m())}bu(r){return r}ft(r){return this.bu(r instanceof cr?r:m())}cu(r,e){if(r instanceof cr)return r;if(e<=r.c1())return cr.oa(r);var t=Nd(e);return t.u2(r),t}ht(r,e){return this.cu(r!=null&&z(r,xn)?r:m(),e)}}class xe extends vv{constructor(r){super(r),this.iu_1=new M0(r.nn())}nn(){return this.iu_1}ju(r){return r.ku()}dt(r){return this.ju(r instanceof Fn?r:m())}lu(r){return r.mu()}ft(r){return this.lu(r instanceof Fn?r:m())}nu(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw mr.o3(w(e))}zt(r){return this.nu(r)}ou(r,e,t){var a="This method lead to boxing and must not be used, use Builder.append instead";throw mr.o3(w(a))}jt(r,e,t){return this.ou(r instanceof Fn?r:m(),e,t)}bt(r){return r===-1?this.pu():this.qu(r)}tu(r,e){var t=this.xt(e),a=this.iu_1,i=r.cs(a,t);this.su(i,e,t),i.nq(a)}on(r,e){return this.tu(r,e)}ot(r,e){return this.tu(r,e)}pn(r){return this.st(r,null)}}class Fn{static uu(){return Ua(this)}wu(r,e){r=r===o?this.ku()+1|0:r;var t;return e===o?(this.vu(r),t=or):t=e.vu.call(this,r),t}}let G0=class{constructor(){zf=this,this.xu_1=qa(0)}};class K0{constructor(r,e){Ud(),this.yu_1=r,this.zu_1=e;var t=this.yu_1.qo();if(t<=64){var a=this,i;t===64?i=new b(0,0):i=oe(new b(-1,-1),t),a.av_1=i,this.bv_1=Ud().xu_1}else this.av_1=new b(0,0),this.bv_1=FC(this,t)}cv(r){r<64?this.av_1=Ta(this.av_1,oe(new b(1,0),r)):$C(this,r)}dv(){for(var r=this.yu_1.qo();!sr(this.av_1,new b(-1,-1));){var e=Ng(Dc(this.av_1));if(this.av_1=Ta(this.av_1,oe(new b(1,0),e)),this.zu_1(this.yu_1,e))return e}return r>64?JC(this):-1}}class Ji{constructor(r,e,t){e=e===o?null:e,this.rv_1=r,this.sv_1=e,this.tv_1=t,this.uv_1=-1;for(var a=this,i=0,s=this.tv_1,l=Array(s);i<s;)l[i]="[UNINITIALIZED]",i=i+1|0;a.vv_1=l;var u=this,f=this.tv_1;u.wv_1=Array(f),this.xv_1=null,this.yv_1=Po(this.tv_1),this.zv_1=Ar();var c=this,v=Io();c.aw_1=xo(v,r6(this));var h=this,d=Io();h.bw_1=xo(d,e6(this));var p=this,g=Io();p.cw_1=xo(g,a6(this))}mo(){return this.rv_1}qo(){return this.tv_1}no(){return cu()}ro(){var r=this.xv_1;return r??fr()}wp(){return this.zv_1.p2()}dw(){var r=this.bw_1,e=Ba;return Da("typeParameterDescriptors",1,e,t6(),null),r.l2()}vo(r){return yi(Ry(this),r).nn()}wo(r){return Ky(this.yv_1,r)}uo(r){var e=yi(this.wv_1,r);return e??fr()}so(r){return yi(this.vv_1,r)}to(r){var e=this.zv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ji)){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}if(!Hc(this.dw(),r.dw())){e=!1;break r}if(this.qo()!==r.qo()){e=!1;break r}var t=0,a=this.qo();if(t<a)do{var i=t;if(t=t+1|0,this.vo(i).mo()!==r.vo(i).mo()){e=!1;break r}if(!D(this.vo(i).no(),r.vo(i).no())){e=!1;break r}}while(t<a);e=!0}return e}hashCode(){return Ly(this)}toString(){return Fy(this)}}class lu extends Ji{constructor(r,e){super(r,e,1),this.qv_1=!0}po(){return this.qv_1}hashCode(){return Qr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof lu)){e=!1;break r}if(this.mo()!==r.mo()){e=!1;break r}if(!(r.qv_1&&Hc(this.dw(),r.dw()))){e=!1;break r}if(this.qo()!==r.qo()){e=!1;break r}var t=0,a=this.qo();if(t<a)do{var i=t;if(t=t+1|0,this.vo(i).mo()!==r.vo(i).mo()){e=!1;break r}if(!D(this.vo(i).no(),r.vo(i).no())){e=!1;break r}}while(t<a);e=!0}return e}}class W0{}function nC(){return $y()}class hv{constructor(r){this.ew_1=r}fw(){return[this.ew_1]}nn(){var r="unsupported";throw mr.o3(w(r))}on(r,e){var t="unsupported";throw mr.o3(w(t))}pn(r){var e="unsupported";throw mr.o3(w(e))}}class Y0 extends ro{constructor(){return new.target.iw()}static iw(){ol=null;var r=this.dr();return ol=r,r.hw_1=hu(),r}zq(){return this.hw_1}fr(r){return or}gr(){return or}hr(r){return or}ir(r){return or}jr(r){return or}kr(r){return or}lr(r){return or}mr(r){return or}nr(r){return or}or(r){return or}pr(r){return or}}class no{constructor(){Ef=this,this.jw_1=kv(),this.kw_1="kotlin.Nothing"}no(){return this.jw_1}mo(){return this.kw_1}qo(){return 0}so(r){ls()}to(r){ls()}wo(r){ls()}vo(r){ls()}uo(r){ls()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return me(this.kw_1)+Qr(31,this.jw_1.hashCode())|0}}class Z0{}class V0{constructor(r,e){this.lw_1=e,this.mw_1=fr();var t=this,a=Io();t.nw_1=xo(a,ZC(r,this))}nn(){var r=this.nw_1,e=Ba;return Da("descriptor",1,e,VC(),null),r.l2()}ow(r,e){r.mq(this.nn()).nq(this.nn())}on(r,e){return this.ow(r,e??m())}pn(r){var e=this.nn(),t=r.mq(e);r:{if(t.ar())break r;var a=t.br(this.nn());if(a===-1)break r;throw Yn.yn("Unexpected index "+a)}return t.nq(e),this.lw_1}}class X0 extends xe{constructor(){ll=null,super(qy(Uc())),ll=this}rw(r){return r.length}xt(r){return this.rw(r!=null&&_s(r)?r:m())}sw(r,e){return e===r.length?ea.vw(r):ea.ww(R1(r,e),r.length)}ht(r,e){return this.sw(r!=null&&_s(r)?r:m(),e)}qu(r){return ea.xw(r)}pu(){return ea.yw()}zw(r,e,t,a){t.ax(r.vq(this.iu_1,e))}qt(r,e,t,a){return this.zw(r,e,t instanceof ea?t:m(),a)}ru(r,e,t,a){return this.zw(r,e,t instanceof ea?t:m(),a)}bx(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.yr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.bx(r,e!=null&&_s(e)?e:m(),t)}}class Q0 extends xe{constructor(){ul=null,super(Ty()),ul=this}ex(r){return r.length}xt(r){return this.ex(r!=null&&ys(r)?r:m())}fx(r,e){return e===r.length?ta.ix(r):ta.jx(L1(r,e),r.length)}ht(r,e){return this.fx(r!=null&&ys(r)?r:m(),e)}qu(r){return ta.kx(r)}pu(){return ta.lx()}mx(r,e,t,a){t.nx(r.uq(this.iu_1,e))}qt(r,e,t,a){return this.mx(r,e,t instanceof ta?t:m(),a)}ru(r,e,t,a){return this.mx(r,e,t instanceof ta?t:m(),a)}ox(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.xr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.ox(r,e!=null&&ys(e)?e:m(),t)}}class ry extends xe{constructor(){fl=null,super(jy()),fl=this}rx(r){return r.length}xt(r){return this.rx(r!=null&&ms(r)?r:m())}sx(r,e){return e===r.length?aa.vx(r):aa.wx(M1(r,e),r.length)}ht(r,e){return this.sx(r!=null&&ms(r)?r:m(),e)}qu(r){return aa.xx(r)}pu(){return aa.yx()}zx(r,e,t,a){t.ay(r.tq(this.iu_1,e))}qt(r,e,t,a){return this.zx(r,e,t instanceof aa?t:m(),a)}ru(r,e,t,a){return this.zx(r,e,t instanceof aa?t:m(),a)}by(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.wr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.by(r,e!=null&&ms(e)?e:m(),t)}}class ny extends xe{constructor(){cl=null,super(yv(Ml())),cl=this}ey(r){return r.length}xt(r){return this.ey(r!=null&&hi(r)?r:m())}fy(r,e){return e===r.length?ia.iy(r):ia.jy(Si(r,e),r.length)}ht(r,e){return this.fy(r!=null&&hi(r)?r:m(),e)}qu(r){return ia.ky(r)}pu(){return ia.ly()}my(r,e,t,a){t.ny(r.sq(this.iu_1,e))}qt(r,e,t,a){return this.my(r,e,t instanceof ia?t:m(),a)}ru(r,e,t,a){return this.my(r,e,t instanceof ia?t:m(),a)}oy(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.vr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.oy(r,e!=null&&hi(e)?e:m(),t)}}class ey extends xe{constructor(){vl=null,super(uu(Zs())),vl=this}ry(r){return Ia(r)}xt(r){return this.ry(r instanceof ba?r.an_1:m())}sy(r,e){if(e===Ia(r))return sa.vy(r);var t=Si(r,e);return sa.wy(t,Ia(r))}ht(r,e){return this.sy(r instanceof ba?r.an_1:m(),e)}qu(r){return sa.xy(r)}pu(){return sa.yy()}zy(r,e,t,a){var i=r.wq(this.iu_1,e).eq(),s=i;t.az(s)}qt(r,e,t,a){return this.zy(r,e,t instanceof sa?t:m(),a)}ru(r,e,t,a){return this.zy(r,e,t instanceof sa?t:m(),a)}bz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.zr(this.iu_1,i),l=zI(e,i),u=l;s.lr(u)}while(a<t)}su(r,e,t){return this.bz(r,e instanceof ba?e.an_1:m(),t)}}class ty extends xe{constructor(){hl=null,super(mv()),hl=this}ez(r){return r.length}xt(r){return this.ez(r!=null&&gs(r)?r:m())}fz(r,e){return e===r.length?oa.iz(r):oa.jz(Oa(r,e),r.length)}ht(r,e){return this.fz(r!=null&&gs(r)?r:m(),e)}qu(r){return oa.kz(r)}pu(){return oa.lz()}mz(r,e,t,a){t.nz(r.rq(this.iu_1,e))}qt(r,e,t,a){return this.mz(r,e,t instanceof oa?t:m(),a)}ru(r,e,t,a){return this.mz(r,e,t instanceof oa?t:m(),a)}oz(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.ur(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.oz(r,e!=null&&gs(e)?e:m(),t)}}class ay extends xe{constructor(){dl=null,super(pv(nu())),dl=this}rz(r){return Ea(r)}xt(r){return this.rz(r instanceof wa?r.pm_1:m())}sz(r,e){if(e===Ea(r))return la.vz(r);var t=Oa(r,e);return la.wz(t,Ea(r))}ht(r,e){return this.sz(r instanceof wa?r.pm_1:m(),e)}qu(r){return la.xz(r)}pu(){return la.yz()}zz(r,e,t,a){var i=r.wq(this.iu_1,e).dq(),s=i;t.a10(s)}qt(r,e,t,a){return this.zz(r,e,t instanceof la?t:m(),a)}ru(r,e,t,a){return this.zz(r,e,t instanceof la?t:m(),a)}b10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.zr(this.iu_1,i),l=dI(e,i),u=l;s.kr(u)}while(a<t)}su(r,e,t){return this.b10(r,e instanceof wa?e.pm_1:m(),t)}}class iy extends xe{constructor(){pl=null,super(bv()),pl=this}e10(r){return r.length}xt(r){return this.e10(r!=null&&ps(r)?r:m())}f10(r,e){return e===r.length?ua.i10(r):ua.j10(zi(r,e),r.length)}ht(r,e){return this.f10(r!=null&&ps(r)?r:m(),e)}qu(r){return ua.k10(r)}pu(){return ua.l10()}m10(r,e,t,a){t.n10(r.qq(this.iu_1,e))}qt(r,e,t,a){return this.m10(r,e,t instanceof ua?t:m(),a)}ru(r,e,t,a){return this.m10(r,e,t instanceof ua?t:m(),a)}o10(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.tr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.o10(r,e!=null&&ps(e)?e:m(),t)}}class sy extends xe{constructor(){_l=null,super(gv(eu())),_l=this}r10(r){return Ca(r)}xt(r){return this.r10(r instanceof ka?r.ln_1:m())}s10(r,e){if(e===Ca(r))return fa.v10(r);var t=zi(r,e);return fa.w10(t,Ca(r))}ht(r,e){return this.s10(r instanceof ka?r.ln_1:m(),e)}qu(r){return fa.x10(r)}pu(){return fa.y10()}z10(r,e,t,a){var i=r.wq(this.iu_1,e).cq(),s=i;t.a11(s)}qt(r,e,t,a){return this.z10(r,e,t instanceof fa?t:m(),a)}ru(r,e,t,a){return this.z10(r,e,t instanceof fa?t:m(),a)}b11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.zr(this.iu_1,i),l=BI(e,i),u=l;s.jr(u)}while(a<t)}su(r,e,t){return this.b11(r,e instanceof ka?e.ln_1:m(),t)}}class oy extends xe{constructor(){gl=null,super(wv()),gl=this}e11(r){return r.length}xt(r){return this.e11(r!=null&&ds(r)?r:m())}f11(r,e){return e===r.length?ca.i11(r):ca.j11(Ei(r,e),r.length)}ht(r,e){return this.f11(r!=null&&ds(r)?r:m(),e)}qu(r){return ca.k11(r)}pu(){return ca.l11()}m11(r,e,t,a){t.n11(r.pq(this.iu_1,e))}qt(r,e,t,a){return this.m11(r,e,t instanceof ca?t:m(),a)}ru(r,e,t,a){return this.m11(r,e,t instanceof ca?t:m(),a)}o11(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.sr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.o11(r,e!=null&&ds(e)?e:m(),t)}}class ly extends xe{constructor(){ml=null,super(_v(ru())),ml=this}r11(r){return za(r)}xt(r){return this.r11(r instanceof ya?r.em_1:m())}s11(r,e){if(e===za(r))return va.v11(r);var t=Ei(r,e);return va.w11(t,za(r))}ht(r,e){return this.s11(r instanceof ya?r.em_1:m(),e)}qu(r){return va.x11(r)}pu(){return va.y11()}z11(r,e,t,a){var i=r.wq(this.iu_1,e).bq(),s=i;t.a12(s)}qt(r,e,t,a){return this.z11(r,e,t instanceof va?t:m(),a)}ru(r,e,t,a){return this.z11(r,e,t instanceof va?t:m(),a)}b12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0;var s=r.zr(this.iu_1,i),l=aI(e,i),u=l;s.ir(u)}while(a<t)}su(r,e,t){return this.b12(r,e instanceof ya?e.em_1:m(),t)}}class uy extends xe{constructor(){yl=null,super(Oy()),yl=this}e12(r){return r.length}xt(r){return this.e12(r!=null&&hs(r)?r:m())}f12(r,e){return e===r.length?ha.i12(r):ha.j12(F1(r,e),r.length)}ht(r,e){return this.f12(r!=null&&hs(r)?r:m(),e)}qu(r){return ha.k12(r)}pu(){return ha.l12()}m12(r,e,t,a){t.n12(r.oq(this.iu_1,e))}qt(r,e,t,a){return this.m12(r,e,t instanceof ha?t:m(),a)}ru(r,e,t,a){return this.m12(r,e,t instanceof ha?t:m(),a)}o12(r,e,t){var a=0;if(a<t)do{var i=a;a=a+1|0,r.rr(this.iu_1,i,e[i])}while(a<t)}su(r,e,t){return this.o12(r,e!=null&&hs(e)?e:m(),t)}}class ea extends Fn{constructor(r,e){return new.target.ww(r,e)}static ww(r,e){var t=this.uu();return t.tw_1=r,t.uw_1=e,t}static vw(r){return this.ww(r,r.length)}static xw(r){return this.ww(Es(r),0)}static yw(){return this.ww(Es(10),0)}ku(){return this.uw_1}vu(r){this.tw_1.length<r&&(this.tw_1=R1(this.tw_1,ln(r,Qr(this.tw_1.length,2))))}ax(r){this.wu();var e=this.tw_1,t=this.uw_1;this.uw_1=t+1|0,e[t]=r}mu(){return R1(this.tw_1,this.uw_1)}}class ta extends Fn{constructor(r,e){return new.target.jx(r,e)}static jx(r,e){var t=this.uu();return t.gx_1=r,t.hx_1=e,t}static ix(r){return this.jx(r,r.length)}static kx(r){return this.jx(new Float64Array(r),0)}static lx(){return this.jx(new Float64Array(10),0)}ku(){return this.hx_1}vu(r){this.gx_1.length<r&&(this.gx_1=L1(this.gx_1,ln(r,Qr(this.gx_1.length,2))))}nx(r){this.wu();var e=this.gx_1,t=this.hx_1;this.hx_1=t+1|0,e[t]=r}mu(){return L1(this.gx_1,this.hx_1)}}class aa extends Fn{constructor(r,e){return new.target.wx(r,e)}static wx(r,e){var t=this.uu();return t.tx_1=r,t.ux_1=e,t}static vx(r){return this.wx(r,r.length)}static xx(r){return this.wx(new Float32Array(r),0)}static yx(){return this.wx(new Float32Array(10),0)}ku(){return this.ux_1}vu(r){this.tx_1.length<r&&(this.tx_1=M1(this.tx_1,ln(r,Qr(this.tx_1.length,2))))}ay(r){this.wu();var e=this.tx_1,t=this.ux_1;this.ux_1=t+1|0,e[t]=r}mu(){return M1(this.tx_1,this.ux_1)}}class ia extends Fn{constructor(r,e){return new.target.jy(r,e)}static jy(r,e){var t=this.uu();return t.gy_1=r,t.hy_1=e,t}static iy(r){return this.jy(r,r.length)}static ky(r){return this.jy(qa(r),0)}static ly(){return this.jy(qa(10),0)}ku(){return this.hy_1}vu(r){this.gy_1.length<r&&(this.gy_1=Si(this.gy_1,ln(r,Qr(this.gy_1.length,2))))}ny(r){this.wu();var e=this.gy_1,t=this.hy_1;this.hy_1=t+1|0,e[t]=r}mu(){return Si(this.gy_1,this.hy_1)}}class sa extends Fn{constructor(r,e){return new.target.wy(r,e)}static wy(r,e){var t=this.uu();return t.ty_1=r,t.uy_1=e,t}static vy(r){return this.wy(r,Ia(r))}static xy(r){return this.wy(Pd(r),0)}static yy(){return this.wy(Pd(10),0)}ku(){return this.uy_1}vu(r){if(Ia(this.ty_1)<r){var e=this,t=this.ty_1,a=ln(r,Qr(Ia(this.ty_1),2));e.ty_1=Si(t,a)}}az(r){this.wu();var e=this.ty_1,t=this.uy_1;this.uy_1=t+1|0,EI(e,t,r)}p12(){var r=this.ty_1,e=this.uy_1;return Si(r,e)}mu(){return new ba(this.p12())}}class oa extends Fn{constructor(r,e){return new.target.jz(r,e)}static jz(r,e){var t=this.uu();return t.gz_1=r,t.hz_1=e,t}static iz(r){return this.jz(r,r.length)}static kz(r){return this.jz(new Int32Array(r),0)}static lz(){return this.jz(new Int32Array(10),0)}ku(){return this.hz_1}vu(r){this.gz_1.length<r&&(this.gz_1=Oa(this.gz_1,ln(r,Qr(this.gz_1.length,2))))}nz(r){this.wu();var e=this.gz_1,t=this.hz_1;this.hz_1=t+1|0,e[t]=r}mu(){return Oa(this.gz_1,this.hz_1)}}class la extends Fn{constructor(r,e){return new.target.wz(r,e)}static wz(r,e){var t=this.uu();return t.tz_1=r,t.uz_1=e,t}static vz(r){return this.wz(r,Ea(r))}static xz(r){return this.wz(Od(r),0)}static yz(){return this.wz(Od(10),0)}ku(){return this.uz_1}vu(r){if(Ea(this.tz_1)<r){var e=this,t=this.tz_1,a=ln(r,Qr(Ea(this.tz_1),2));e.tz_1=Oa(t,a)}}a10(r){this.wu();var e=this.tz_1,t=this.uz_1;this.uz_1=t+1|0,pI(e,t,r)}q12(){var r=this.tz_1,e=this.uz_1;return Oa(r,e)}mu(){return new wa(this.q12())}}class ua extends Fn{constructor(r,e){return new.target.j10(r,e)}static j10(r,e){var t=this.uu();return t.g10_1=r,t.h10_1=e,t}static i10(r){return this.j10(r,r.length)}static k10(r){return this.j10(new Int16Array(r),0)}static l10(){return this.j10(new Int16Array(10),0)}ku(){return this.h10_1}vu(r){this.g10_1.length<r&&(this.g10_1=zi(this.g10_1,ln(r,Qr(this.g10_1.length,2))))}n10(r){this.wu();var e=this.g10_1,t=this.h10_1;this.h10_1=t+1|0,e[t]=r}mu(){return zi(this.g10_1,this.h10_1)}}class fa extends Fn{constructor(r,e){return new.target.w10(r,e)}static w10(r,e){var t=this.uu();return t.t10_1=r,t.u10_1=e,t}static v10(r){return this.w10(r,Ca(r))}static x10(r){return this.w10(Bd(r),0)}static y10(){return this.w10(Bd(10),0)}ku(){return this.u10_1}vu(r){if(Ca(this.t10_1)<r){var e=this,t=this.t10_1,a=ln(r,Qr(Ca(this.t10_1),2));e.t10_1=zi(t,a)}}a11(r){this.wu();var e=this.t10_1,t=this.u10_1;this.u10_1=t+1|0,NI(e,t,r)}r12(){var r=this.t10_1,e=this.u10_1;return zi(r,e)}mu(){return new ka(this.r12())}}class ca extends Fn{constructor(r,e){return new.target.j11(r,e)}static j11(r,e){var t=this.uu();return t.g11_1=r,t.h11_1=e,t}static i11(r){return this.j11(r,r.length)}static k11(r){return this.j11(new Int8Array(r),0)}static l11(){return this.j11(new Int8Array(10),0)}ku(){return this.h11_1}vu(r){this.g11_1.length<r&&(this.g11_1=Ei(this.g11_1,ln(r,Qr(this.g11_1.length,2))))}n11(r){this.wu();var e=this.g11_1,t=this.h11_1;this.h11_1=t+1|0,e[t]=r}mu(){return Ei(this.g11_1,this.h11_1)}}class va extends Fn{constructor(r,e){return new.target.w11(r,e)}static w11(r,e){var t=this.uu();return t.t11_1=r,t.u11_1=e,t}static v11(r){return this.w11(r,za(r))}static x11(r){return this.w11(jd(r),0)}static y11(){return this.w11(jd(10),0)}ku(){return this.u11_1}vu(r){if(za(this.t11_1)<r){var e=this,t=this.t11_1,a=ln(r,Qr(za(this.t11_1),2));e.t11_1=Ei(t,a)}}a12(r){this.wu();var e=this.t11_1,t=this.u11_1;this.u11_1=t+1|0,iI(e,t,r)}s12(){var r=this.t11_1,e=this.u11_1;return Ei(r,e)}mu(){return new ya(this.s12())}}class ha extends Fn{constructor(r,e){return new.target.j12(r,e)}static j12(r,e){var t=this.uu();return t.g12_1=r,t.h12_1=e,t}static i12(r){return this.j12(r,r.length)}static k12(r){return this.j12(Po(r),0)}static l12(){return this.j12(Po(10),0)}ku(){return this.h12_1}vu(r){this.g12_1.length<r&&(this.g12_1=F1(this.g12_1,ln(r,Qr(this.g12_1.length,2))))}n12(r){this.wu();var e=this.g12_1,t=this.h12_1;this.h12_1=t+1|0,e[t]=r}mu(){return F1(this.g12_1,this.h12_1)}}class fy{constructor(){Cf=this,this.t12_1=new In("kotlin.String",Gi())}nn(){return this.t12_1}u12(r,e){return r.pr(e)}on(r,e){return this.u12(r,e!=null&&typeof e=="string"?e:m())}pn(r){return r.iq()}}class In{constructor(r,e){this.v12_1=r,this.w12_1=e}mo(){return this.v12_1}no(){return this.w12_1}qo(){return 0}so(r){us(this)}to(r){us(this)}wo(r){us(this)}vo(r){us(this)}uo(r){us(this)}toString(){return"PrimitiveDescriptor("+this.v12_1+")"}equals(r){return this===r?!0:r instanceof In?!!(this.v12_1===r.v12_1&&D(this.w12_1,r.w12_1)):!1}hashCode(){return me(this.v12_1)+Qr(31,this.w12_1.hashCode())|0}}class cy{constructor(){Af=this,this.x12_1=new In("kotlin.Int",jC())}nn(){return this.x12_1}y12(r,e){return r.kr(e)}on(r,e){return this.y12(r,e!=null&&typeof e=="number"?e:m())}pn(r){return r.dq()}}class vy{constructor(){qf=this,this.z12_1=new In("kotlin.Long",OC())}nn(){return this.z12_1}a13(r,e){return r.lr(e)}on(r,e){return this.a13(r,e instanceof b?e:m())}pn(r){return r.eq()}}class hy{constructor(){Tf=this,this.b13_1=new In("kotlin.Byte",AC())}nn(){return this.b13_1}c13(r,e){return r.ir(e)}on(r,e){return this.c13(r,e!=null&&typeof e=="number"?e:m())}pn(r){return r.bq()}}class dy{constructor(){jf=this,this.d13_1=new In("kotlin.Short",TC())}nn(){return this.d13_1}e13(r,e){return r.jr(e)}on(r,e){return this.e13(r,e!=null&&typeof e=="number"?e:m())}pn(r){return r.cq()}}class py{constructor(){Of=this,this.f13_1=new In("kotlin.Char",qC())}nn(){return this.f13_1}g13(r,e){return r.or(e)}on(r,e){return this.g13(r,e instanceof Cn?e.x1_1:m())}h13(r){return r.hq()}pn(r){return new Cn(this.h13(r))}}class _y{constructor(){Pf=this,this.i13_1=new In("kotlin.Double",BC())}nn(){return this.i13_1}j13(r,e){return r.nr(e)}on(r,e){return this.j13(r,e!=null&&typeof e=="number"?e:m())}pn(r){return r.gq()}}class gy{constructor(){Bf=this,this.k13_1=new In("kotlin.Float",PC())}nn(){return this.k13_1}l13(r,e){return r.mr(e)}on(r,e){return this.l13(r,e!=null&&typeof e=="number"?e:m())}pn(r){return r.fq()}}class my{constructor(){Nf=this,this.m13_1=new In("kotlin.Boolean",CC())}nn(){return this.m13_1}n13(r,e){return r.hr(e)}on(r,e){return this.n13(r,e!=null&&typeof e=="boolean"?e:m())}pn(r){return r.aq()}}class yy{constructor(){Uf=this,this.o13_1=new V0("kotlin.Unit",or)}nn(){return this.o13_1.nn()}p13(r,e){this.o13_1.ow(r,or)}on(r,e){return this.p13(r,e instanceof Bl?e:m())}q13(r){this.o13_1.pn(r)}pn(r){return this.q13(r),or}}class Hi{constructor(){var r=this;r.w13_1=q.m(),this.x13_1=!1}zq(){return hu()}b14(r){throw Yn.yn(w(Rr(this))+" can't retrieve untyped values")}c14(r){return!0}d14(r){var e=this.b14(r);return typeof e=="boolean"?e:m()}e14(r){var e=this.b14(r);return typeof e=="number"?e:m()}f14(r){var e=this.b14(r);return typeof e=="number"?e:m()}g14(r){var e=this.b14(r);return typeof e=="number"?e:m()}h14(r){var e=this.b14(r);return e instanceof b?e:m()}i14(r){var e=this.b14(r);return typeof e=="number"?e:m()}j14(r){var e=this.b14(r);return typeof e=="number"?e:m()}k14(r){var e=this.b14(r);return e instanceof Cn?e.x1_1:m()}l14(r){var e=this.b14(r);return typeof e=="string"?e:m()}m14(r,e){return this.n14(r),this}kq(r,e){return this.lq(r)}jq(r){return this.m14(this.o14(),r)}yp(){var r=this.y13(),e;if(r==null)return!1;e=r;var t=e;return this.c14(t)}zp(){return null}aq(){return this.d14(this.o14())}bq(){return this.e14(this.o14())}cq(){return this.f14(this.o14())}dq(){return this.g14(this.o14())}eq(){return this.h14(this.o14())}fq(){return this.i14(this.o14())}gq(){return this.j14(this.o14())}hq(){return this.k14(this.o14())}iq(){return this.l14(this.o14())}mq(r){return this}nq(r){}oq(r,e){return this.d14(this.t13(r,e))}pq(r,e){return this.e14(this.t13(r,e))}qq(r,e){return this.f14(this.t13(r,e))}rq(r,e){return this.g14(this.t13(r,e))}sq(r,e){return this.h14(this.t13(r,e))}tq(r,e){return this.i14(this.t13(r,e))}uq(r,e){return this.j14(this.t13(r,e))}vq(r,e){return this.k14(this.t13(r,e))}wq(r,e){return this.m14(this.t13(r,e),r.vo(e))}xq(r,e,t,a){var i=this.t13(r,e);return O6(this,i,P6(this,t,a))}y13(){return sg(this.w13_1)}n14(r){this.w13_1.n(r)}o14(){var r=this.w13_1.h5(Hs(this.w13_1));return this.x13_1=!0,r}}class wy extends Hi{t13(r,e){return this.v13(this.u13(r,e))}v13(r){var e=this.y13();return this.z13(e??"",r)}u13(r,e){return r.so(e)}z13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}a14(){return this.w13_1.d1()?"$":M(this.w13_1,".","$.")}}class by{constructor(){Df=this,this.p14_1=to("kotlin.UInt",mv())}nn(){return this.p14_1}q14(r,e){var t=r.qr(this.p14_1),a=e;t.kr(a)}on(r,e){return this.q14(r,e instanceof ue?e.km_1:m())}r14(r){var e=r.jq(this.p14_1).dq();return e}pn(r){return new ue(this.r14(r))}}class ky{constructor(){Rf=this,this.s14_1=to("kotlin.ULong",yv(Ml()))}nn(){return this.s14_1}t14(r,e){var t=r.qr(this.s14_1),a=e;t.lr(a)}on(r,e){return this.t14(r,e instanceof fe?e.vm_1:m())}u14(r){var e=r.jq(this.s14_1).eq();return e}pn(r){return new fe(this.u14(r))}}class xy{constructor(){Lf=this,this.v14_1=to("kotlin.UByte",wv())}nn(){return this.v14_1}w14(r,e){var t=r.qr(this.v14_1),a=e;t.ir(a)}on(r,e){return this.w14(r,e instanceof Ke?e.zl_1:m())}x14(r){var e=r.jq(this.v14_1).bq();return e}pn(r){return new Ke(this.x14(r))}}class Sy{constructor(){Mf=this,this.y14_1=to("kotlin.UShort",bv())}nn(){return this.y14_1}z14(r,e){var t=r.qr(this.y14_1),a=e;t.jr(a)}on(r,e){return this.z14(r,e instanceof We?e.gn_1:m())}a15(r){var e=r.jq(this.y14_1).cq();return e}pn(r){return new We(this.a15(r))}}class zy{jo(r,e,t){return e=e===o?fr():e,t===o?this.b15(r,e):t.b15.call(this,r,e)}}class Ey extends zy{constructor(r,e,t,a,i,s){super(),this.d15_1=r,this.e15_1=e,this.f15_1=t,this.g15_1=a,this.h15_1=i,this.i15_1=s}es(r,e){if(!r.vc(e))return null;var t=this.e15_1.o2(r),a=t==null?null:t.o2(Rr(e)),i=a!=null&&z(a,tu)?a:null;if(i!=null)return i;var s=this.f15_1.o2(r),l=s!=null&&typeof s=="function"?s:null;return l==null?null:l(e)}ds(r,e){var t=this.g15_1.o2(r),a;t==null?a=null:a=(z(t,xn)?t:m()).o2(e);var i=a,s=i!=null&&z(i,hr)?i:null;if(s!=null)return s;var l=this.h15_1.o2(r),u=l!=null&&typeof l=="function"?l:null;return u==null?null:u(e)}b15(r,e){var t=this.d15_1.o2(r),a=t==null?null:t.j15(e);return a==null||z(a,hr)?a:null}c15(r){for(var e=this.d15_1.r2().x();e.y();){var t=e.z(),a=t.k2(),i=t.l2();if(i instanceof Iy){var s=z(a,at)?a:m(),l=i.m15_1;r.n15(s,z(l,hr)?l:m())}else i instanceof Cy?r.l15(a,i.k15_1):Ms()}for(var u=this.e15_1.r2().x();u.y();)for(var f=u.z(),c=f.k2(),v=f.l2(),h=v.r2().x();h.y();){var d=h.z(),p=d.k2(),g=d.l2(),y=z(c,at)?c:m(),x=z(p,at)?p:m(),k=z(g,hr)?g:m();r.o15(y,x,k)}for(var S=this.f15_1.r2().x();S.y();){var E=S.z(),I=E.k2(),A=E.l2(),j=z(I,at)?I:m();r.p15(j,typeof A=="function"?A:m())}for(var P=this.h15_1.r2().x();P.y();){var $=P.z(),B=$.k2(),N=$.l2(),H=z(B,at)?B:m();r.q15(H,typeof N=="function"?N:m())}}}class dv{}class Iy extends dv{}class Cy extends dv{}class Ay{}function eC(n,r){return this.l15(n,M6(r))}class tC{}function aC(n,r,e){var t=n.qn(r,e),a;return t==null?UC(Rr(e),n.rn()):a=t,a}function mf(n,r,e){var t=n.sn(r,e),a;return t==null?Uy(e,n.rn()):a=t,a}function d1(n){vn(n,n.wn_1)}function Os(n){return b6()}function pv(n){return B6()}function uu(n){return N6()}function _v(n){return U6()}function gv(n){return D6()}function mv(n){return k6()}function yv(n){return x6()}function wv(n){return S6()}function bv(n){return z6()}function qy(n){return E6()}function iC(){return l6()}function Ty(n){return I6()}function sC(){return u6()}function jy(n){return C6()}function oC(){return f6()}function lC(){return c6()}function uC(){return v6()}function fC(){return h6()}function cC(){return d6()}function vC(){return p6()}function hC(){return _6()}function dC(){return g6()}function pC(){return m6()}function Oy(n){return A6()}function _C(){return y6()}function gC(n){return q6()}function mC(){return DC()}function yC(n){return RC()}function wC(n){return LC()}function bC(n){return MC()}function yf(n){return new $0(n)}function wf(n,r){return new H0(n,r)}function kC(n,r){var e=Py(r),t;if(e==null)t=null;else{var a=n.jo(e);t=a==null?null:a.nn()}return t}function Py(n){var r;return n instanceof v0?r=n.lo_1:n instanceof Z0?r=Py(n.ko_1):r=null,r}function xC(n){return new d0(n)}function fu(n,r,e,t){var a;if(t===o?a=IC:a=t,t=a,_t(n)){var i="Blank serial names are prohibited";throw T.v(w(i))}if(D(r,cu())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw T.v(w(s))}var l=new p0(n);return t(l),new Mi(n,r,l.dp_1.c1(),dx(e),l)}function By(n){var r=n.vp_1,e=Ba;return Da("_hashCode",1,e,zC(),null),r.l2()}function SC(n){return()=>My(n,n.up_1)}function zC(){return Fe(n=>By(n),1,0,0)}function EC(n,r){if(_t(n)){var e="Blank serial names are prohibited";throw T.v(w(e))}return T6(n,r)}function IC(n){return or}var Ho;function Ja(){return Ho===o&&new iu,Ho}var Go;function Ny(){return Go===o&&new _0,Go}var Ko;function cu(){return Ko===o&&new g0,Ko}var Wo;function eo(){return Wo===o&&new m0,Wo}var Yo;function vu(){return Yo===o&&new y0,Yo}var Zo;function kv(){return Zo===o&&new w0,Zo}var Vo;function CC(){return Vo===o&&new b0,Vo}var Xo;function AC(){return Xo===o&&new k0,Xo}var Qo;function qC(){return Qo===o&&new x0,Qo}var rl;function TC(){return rl===o&&new S0,rl}var nl;function jC(){return nl===o&&new z0,nl}var el;function OC(){return el===o&&new E0,el}var tl;function PC(){return tl===o&&new I0,tl}var al;function BC(){return al===o&&new C0,al}var il;function Gi(){return il===o&&new A0,il}var sl;function NC(){return sl===o&&new q0,sl}function UC(n,r){var e=n.uc();Uy(e??w(n),r)}function Uy(n,r){var e="in the polymorphic scope of '"+r.uc()+"'";throw Yn.yn(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.uc()+"' has to be sealed and '@Serializable'."))}var bf;function DC(){return bf===o&&new B0,bf}var kf;function RC(){return kf===o&&new N0,kf}var xf;function LC(){return xf===o&&new U0,xf}var Sf;function MC(){return Sf===o&&new D0,Sf}function At(n,r){if(n<0)throw Wn.zb("Illegal index "+n+", "+r+" expects only non-negative indices")}function Nd(n){var r=n;return cr.na(r)}var zf;function Ud(){return zf===o&&new G0,zf}function FC(n,r){var e=(r-1|0)>>>6|0,t=r&63,a=qa(e);return t!==0&&(a[cx(a)]=oe(new b(-1,-1),r)),a}function $C(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.bv_1[e]=Ta(n.bv_1[e],oe(new b(1,0),t))}function JC(n){var r=0,e=n.bv_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var a=Qr(t+1|0,64),i=n.bv_1[t];!sr(i,new b(-1,-1));){var s=Ng(Dc(i));i=Ta(i,oe(new b(1,0),s));var l=a+s|0;if(n.zu_1(n.yu_1,l))return n.bv_1[t]=i,l}n.bv_1[t]=i}while(r<=e);return-1}function to(n,r){return new lu(n,new hv(r))}function HC(n,r){return n.io(r)}function GC(n){return QC(n)}var ol;function KC(){return ol===o&&Y0.iw(),ol}function ls(n){throw mr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var Ef;function WC(){return Ef===o&&new no,Ef}function YC(n){return r=>(r.cp_1=n.mw_1,or)}function ZC(n,r){return()=>{var e=kv();return fu(n,e,[],YC(r))}}function VC(){return Fe(n=>n.nn(),1,0,1)}function XC(){return xv(),Dy}var Dy;function QC(n){if(xv(),z(n,Xs))return n.wp();var r=Aa.b1(n.qo()),e=0,t=n.qo();if(e<t)do{var a=e;e=e+1|0;var i=n.so(a);r.n(i)}while(e<t);return r}function If(n){xv();var r;n==null||n.d1()?r=null:r=n;var e=r,t;e==null?t=null:t=Pa(e);var a=t;return a??XC()}var Dd;function xv(){Dd||(Dd=!0,Dy=[])}function Ry(n){var r=n.aw_1,e=Ba;return Da("childSerializers",1,e,n6(),null),r.l2()}function Ly(n){var r=n.cw_1,e=Ba;return Da("_hashCode",1,e,i6(),null),r.l2()}function r6(n){return()=>{var r=n.sv_1,e=r==null?null:r.fw();return e??$y()}}function n6(){return Fe(n=>Ry(n),1,0,2)}function e6(n){return()=>{var r=n.sv_1,e=r==null?null:r.gw(),t;if(e==null)t=null;else{for(var a=q.f1(e.length),i=0,s=e.length;i<s;){var l=e[i];i=i+1|0;var u=l.nn();a.n(u)}t=a}return If(t)}}function t6(){return Fe(n=>n.dw(),1,0,3)}function a6(n){return()=>My(n,n.dw())}function i6(){return Fe(n=>Ly(n),1,0,4)}function My(n,r){var e=me(n.mo());e=Qr(31,e)+A2(r)|0;for(var t=xC(n),a=1,i=t.x();i.y();){var s=i.z(),l=a,u=Qr(31,l),f=s.mo(),c=f==null?null:br(f);a=u+(c??0)|0}for(var v=a,h=1,d=t.x();d.y();){var p=d.z(),g=h,y=Qr(31,g),x=p.no(),k=x==null?null:br(x);h=y+(k??0)|0}var S=h;return e=Qr(31,e)+v|0,e=Qr(31,e)+S|0,e}function Fy(n){var r=Pc(0,n.qo()),e=n.mo()+"(";return M(r,", ",e,")",o,o,s6(n))}function s6(n){return r=>n.so(r)+": "+n.vo(r).mo()}function $y(){return o6(),Jy}var Jy,Rd;function o6(){Rd||(Rd=!0,Jy=[])}var ll;function l6(){return ll===o&&new X0,ll}var ul;function u6(){return ul===o&&new Q0,ul}var fl;function f6(){return fl===o&&new ry,fl}var cl;function c6(){return cl===o&&new ny,cl}var vl;function v6(){return vl===o&&new ey,vl}var hl;function h6(){return hl===o&&new ty,hl}var dl;function d6(){return dl===o&&new ay,dl}var pl;function p6(){return pl===o&&new iy,pl}var _l;function _6(){return _l===o&&new sy,_l}var gl;function g6(){return gl===o&&new oy,gl}var ml;function m6(){return ml===o&&new ly,ml}var yl;function y6(){return yl===o&&new uy,yl}function w6(){return Sv(),Hy}var Hy,Cf;function b6(){return Cf===o&&new fy,Cf}function us(n){throw mr.o3("Primitive descriptor "+n.v12_1+" does not have elements")}var Af;function k6(){return Af===o&&new cy,Af}var qf;function x6(){return qf===o&&new vy,qf}var Tf;function S6(){return Tf===o&&new hy,Tf}var jf;function z6(){return jf===o&&new dy,jf}var Of;function E6(){return Of===o&&new py,Of}var Pf;function I6(){return Pf===o&&new _y,Pf}var Bf;function C6(){return Bf===o&&new gy,Bf}var Nf;function A6(){return Nf===o&&new my,Nf}var Uf;function q6(){return Uf===o&&new yy,Uf}function T6(n,r){return Sv(),j6(n),new In(n,r)}function j6(n){Sv();for(var r=w6().q2(),e=r.x();e.y();){var t=e.z(),a=t.nn().mo();if(n===a)throw T.v(Hz(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Rr(t).uc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var Ld;function Sv(){Ld||(Ld=!0,Hy=F6())}function O6(n,r,e){n.n14(r);var t=e();return n.x13_1||n.o14(),n.x13_1=!1,t}function P6(n,r,e){return()=>n.kq(r,e)}var Df;function B6(){return Df===o&&new by,Df}var Rf;function N6(){return Rf===o&&new ky,Rf}var Lf;function U6(){return Lf===o&&new xy,Lf}var Mf;function D6(){return Mf===o&&new Sy,Mf}function R6(){return L6(),Gy}var Gy,Md;function L6(){Md||(Md=!0,Gy=new Ey(Ar(),Ar(),Ar(),Ar(),Ar(),!1))}function hu(){return R6()}function M6(n){return r=>n}function yi(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.zb("Index "+r+" out of bounds "+nx(n).toString());return n[r]}function Ky(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.zb("Index "+r+" out of bounds "+hx(n).toString());return n[r]}function F6(){return Gs([O(Ir().od(),Os()),O(Dr(Cn),qy(Uc())),O(Ir().rd(),iC()),O(Ir().md(),Ty()),O(Ir().yd(),sC()),O(Ir().ld(),jy()),O(Ir().xd(),oC()),O(Ir().kd(),yv(Ml())),O(Ir().wd(),lC()),O(Dr(fe),uu(Zs())),O(Dr(ba),uC()),O(Ir().jd(),mv()),O(Ir().ud(),fC()),O(Dr(ue),pv(nu())),O(Dr(wa),cC()),O(Ir().id(),bv()),O(Ir().td(),vC()),O(Dr(We),gv(eu())),O(Dr(ka),hC()),O(Ir().hd(),wv()),O(Ir().sd(),dC()),O(Dr(Ke),_v(ru())),O(Dr(ya),pC()),O(Ir().gd(),Oy()),O(Ir().qd(),_C()),O(Dr(Bl),gC()),O(Ir().fd(),mC()),O(Dr(Ae),yC(Wr())),O(Dr(ft),wC(jt())),O(Dr(Ot),bC(Ys()))])}Pr(tu,"SerializationStrategy");Pr(mi,"DeserializationStrategy");Pr(hr,"KSerializer",o,o,[tu,mi]);_(Yn,"SerializationException",Yn.xn);_(au,"MissingFieldException");Pr(ke,"SerialDescriptor");_(v0,"ContextDescriptor",o,o,[ke]);_(h0);_(d0);_(p0,"ClassSerialDescriptorBuilder");Pr(Xs,"CachedNames");Lr(Mi).oo=La;Lr(Mi).po=Ma;_(Mi,"SerialDescriptorImpl",o,o,[ke,Xs]);_(Fi,"SerialKind");U(iu,"ENUM");U(_0,"CONTEXTUAL");_(Qs,"StructureKind");U(g0,"CLASS");U(m0,"LIST");U(y0,"MAP");U(w0,"OBJECT");_(Xn,"PrimitiveKind");U(b0,"BOOLEAN");U(k0,"BYTE");U(x0,"CHAR");U(S0,"SHORT");U(z0,"INT");U(E0,"LONG");U(I0,"FLOAT");U(C0,"DOUBLE");U(A0,"STRING");_($i,"PolymorphicKind");U(q0,"SEALED");Pr(su,"Decoder");Pr(ou,"CompositeDecoder");Lr(Fa).yq=P0;Lr(Fa).lq=T0;Lr(Fa).ar=j0;Lr(Fa).cr=O0;_(Fa,"AbstractDecoder",o,o,[su,ou]);Pr(fv,"Encoder");Lr(ro).cs=QI;Lr(ro).bs=rC;_(ro,"AbstractEncoder",o,o,[fv]);_(Ci,"AbstractPolymorphicSerializer",o,o,[hr]);U(B0,"NothingSerializer",o,o,[hr]);U(N0,"DurationSerializer",o,o,[hr]);U(U0,"InstantSerializer",o,o,[hr]);U(D0,"UuidSerializer",o,o,[hr]);Lr($t).oo=La;Lr($t).po=Ma;Lr($t).ro=Vs;_($t,"ListLikeDescriptor",o,o,[ke]);_(R0,"ArrayListClassDesc");Lr($a).oo=La;Lr($a).po=Ma;Lr($a).ro=Vs;_($a,"MapLikeDescriptor",o,o,[ke]);_(L0,"LinkedHashMapClassDesc");_(M0,"PrimitiveArrayDescriptor");_(cv,"AbstractCollectionSerializer",o,o,[hr]);_(vv,"CollectionLikeSerializer");_(F0,"CollectionSerializer");_($0,"ArrayListSerializer");_(J0,"MapLikeSerializer");_(H0,"LinkedHashMapSerializer");_(xe,"PrimitiveArraySerializer");_(Fn,"PrimitiveArrayBuilder");nn(G0);_(K0,"ElementMarker");Lr(Ji).oo=La;Lr(Ji).po=Ma;_(Ji,"PluginGeneratedSerialDescriptor",o,o,[ke,Xs]);_(lu,"InlineClassDescriptor");Pr(W0,"GeneratedSerializer",o,o,[hr]);Lr(hv).gw=nC;_(hv,o,o,o,[W0]);U(Y0,"NoOpEncoder");Lr(no).oo=La;Lr(no).po=Ma;Lr(no).ro=Vs;U(no,"NothingSerialDescriptor",o,o,[ke]);_(Z0,"SerialDescriptorForNullable",o,o,[ke,Xs]);_(V0,"ObjectSerializer",o,o,[hr]);U(X0,"CharArraySerializer",o,o,[hr]);U(Q0,"DoubleArraySerializer",o,o,[hr]);U(ry,"FloatArraySerializer",o,o,[hr]);U(ny,"LongArraySerializer",o,o,[hr]);U(ey,"ULongArraySerializer",o,o,[hr]);U(ty,"IntArraySerializer",o,o,[hr]);U(ay,"UIntArraySerializer",o,o,[hr]);U(iy,"ShortArraySerializer",o,o,[hr]);U(sy,"UShortArraySerializer",o,o,[hr]);U(oy,"ByteArraySerializer",o,o,[hr]);U(ly,"UByteArraySerializer",o,o,[hr]);U(uy,"BooleanArraySerializer",o,o,[hr]);_(ea,"CharArrayBuilder");_(ta,"DoubleArrayBuilder");_(aa,"FloatArrayBuilder");_(ia,"LongArrayBuilder");_(sa,"ULongArrayBuilder");_(oa,"IntArrayBuilder");_(la,"UIntArrayBuilder");_(ua,"ShortArrayBuilder");_(fa,"UShortArrayBuilder");_(ca,"ByteArrayBuilder");_(va,"UByteArrayBuilder");_(ha,"BooleanArrayBuilder");U(fy,"StringSerializer",o,o,[hr]);Lr(In).oo=La;Lr(In).po=Ma;Lr(In).ro=Vs;_(In,"PrimitiveSerialDescriptor",o,o,[ke]);U(cy,"IntSerializer",o,o,[hr]);U(vy,"LongSerializer",o,o,[hr]);U(hy,"ByteSerializer",o,o,[hr]);U(dy,"ShortSerializer",o,o,[hr]);U(py,"CharSerializer",o,o,[hr]);U(_y,"DoubleSerializer",o,o,[hr]);U(gy,"FloatSerializer",o,o,[hr]);U(my,"BooleanSerializer",o,o,[hr]);U(yy,"UnitSerializer",o,o,[hr]);Lr(Hi).yq=P0;Lr(Hi).lq=T0;Lr(Hi).ar=j0;Lr(Hi).cr=O0;_(Hi,"TaggedDecoder",o,o,[su,ou]);_(wy,"NamedValueDecoder");U(by,"UIntSerializer",o,o,[hr]);U(ky,"ULongSerializer",o,o,[hr]);U(xy,"UByteSerializer",o,o,[hr]);U(Sy,"UShortSerializer",o,o,[hr]);_(zy,"SerializersModule");_(Ey,"SerialModuleImpl");_(dv,"ContextualProvider");_(Iy,"Argless");_(Cy,"WithTypeArguments");Pr(Ay,"SerializersModuleCollector");_(tC,"SerializableWith",o,o,o,o,0);var ao=Math.imul;class zv{constructor(r,e){je(),this.r15_1=r,this.s15_1=e,this.t15_1=new Jf}zq(){return this.s15_1}u15(r,e){var t=new Gf;try{return xA(this,t,r,e),t.toString()}finally{t.y15()}}v15(r,e){var t=Kv(this,e),a=new Ps(this,wu(),t,r.nn(),null),i=a.lq(r);return t.m16(),i}w15(r){return this.v15(mt(),r)}}class Wy extends zv{constructor(){wl=null,super(new Ev,hu()),wl=this}}class Yy{constructor(r){this.n16_1=r.r15_1.i17_1,this.o16_1=r.r15_1.n17_1,this.p16_1=r.r15_1.j17_1,this.q16_1=r.r15_1.k17_1,this.r16_1=r.r15_1.m17_1,this.s16_1=r.r15_1.o17_1,this.t16_1=r.r15_1.p17_1,this.u16_1=r.r15_1.r17_1,this.v16_1=r.r15_1.y17_1,this.w16_1=r.r15_1.t17_1,this.x16_1=r.r15_1.u17_1,this.y16_1=r.r15_1.v17_1,this.z16_1=r.r15_1.w17_1,this.a17_1=r.r15_1.x17_1,this.b17_1=r.r15_1.s17_1,this.c17_1=r.r15_1.l17_1,this.d17_1=r.r15_1.q17_1,this.e17_1=r.zq(),this.f17_1=r.r15_1.z17_1,this.g17_1=r.r15_1.a18_1}h17(){if(this.d17_1){if(this.u16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw T.v(w(r))}if(!this.v16_1.equals(Ew())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw T.v(w(e))}}if(this.r16_1){if(this.s16_1!=="    "){var a=this.s16_1,i;r:{for(var s=0;s<C(a);){var l=rr(a,s);if(s=s+1|0,!(l===32||l===9||l===13||l===10)){i=!1;break r}}i=!0}var u=i;if(!u){var f="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.s16_1;throw T.v(w(f))}}}else if(this.s16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw T.v(w(t))}return new Ev(this.n16_1,this.p16_1,this.q16_1,this.c17_1,this.r16_1,this.o16_1,this.s16_1,this.t16_1,this.d17_1,this.u16_1,this.b17_1,this.w16_1,this.x16_1,this.y16_1,this.z16_1,this.a17_1,this.v16_1,this.f17_1,this.g17_1)}}class Zy extends zv{constructor(r,e){super(r,e),G6(this)}}class Vy{}class Xy{}class Qy{}class Ev{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g,y,x,k,S){r=r===o?!1:r,e=e===o?!1:e,t=t===o?!1:t,a=a===o?!1:a,i=i===o?!1:i,s=s===o?!0:s,l=l===o?"    ":l,u=u===o?!1:u,f=f===o?!1:f,c=c===o?"type":c,v=v===o?!1:v,h=h===o?!0:h,d=d===o?null:d,p=p===o?!1:p,g=g===o?!1:g,y=y===o?!1:y,x=x===o?Ew():x,k=k===o?!0:k,S=S===o?400:S,this.i17_1=r,this.j17_1=e,this.k17_1=t,this.l17_1=a,this.m17_1=i,this.n17_1=s,this.o17_1=l,this.p17_1=u,this.q17_1=f,this.r17_1=c,this.s17_1=v,this.t17_1=h,this.u17_1=d,this.v17_1=p,this.w17_1=g,this.x17_1=y,this.y17_1=x,this.z17_1=k,this.a18_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.i17_1+", ignoreUnknownKeys="+this.j17_1+", isLenient="+this.k17_1+", "+("allowStructuredMapKeys="+this.l17_1+", prettyPrint="+this.m17_1+", explicitNulls="+this.n17_1+", ")+("prettyPrintIndent='"+this.o17_1+"', coerceInputValues="+this.p17_1+", useArrayPolymorphism="+this.q17_1+", ")+("classDiscriminator='"+this.r17_1+"', allowSpecialFloatingPointValues="+this.s17_1+", ")+("useAlternativeNames="+this.t17_1+", namingStrategy="+we(this.u17_1)+", decodeEnumsCaseInsensitive="+this.v17_1+", ")+("allowTrailingComma="+this.w17_1+", allowComments="+this.x17_1+", classDiscriminatorMode="+this.y17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.z17_1+", maxNestingDepth="+this.a18_1+")")}}class Co extends ae{}class du{}class rw{d18(){return mt()}}class st{}class $6{}class vr extends st{toString(){return this.g18()}e18(r){r.fa(this.g18())}}class J6{}class dn extends st{constructor(r){super(),this.h18_1=r}equals(r){return D(this.h18_1,r)}hashCode(){return br(this.h18_1)}toString(){var r=ao(this.h18_1.c1()+1|0,2),e=Yr.ja(r);return this.e18(e),e.toString()}e18(r){r.ga(91);for(var e=!0,t=this.h18_1.x();t.y();){var a=t.z();e||r.ga(44),e=!1,a.e18(r)}r.ga(93)}d1(){return this.h18_1.d1()}i18(r){return this.h18_1.l1(r)}l1(r){return r instanceof st?this.i18(r instanceof st?r:m()):!1}x(){return this.h18_1.x()}e1(r){return this.h18_1.e1(r)}j18(r){return this.h18_1.n1(r)}n1(r){return r instanceof st?this.j18(r instanceof st?r:m()):-1}m1(r){return this.h18_1.m1(r)}c1(){return this.h18_1.c1()}}class nw{d18(){return _u()}}class er extends st{constructor(r){super(),this.k18_1=r}equals(r){return D(this.k18_1,r)}hashCode(){return br(this.k18_1)}toString(){var r=ao(this.k18_1.c1(),6),e=Yr.ja(r);return this.e18(e),e.toString()}e18(r){r.ga(123);for(var e=!0,t=this.k18_1.r2().x();t.y();){var a=t.z(),i=a.k2(),s=a.l2();e||r.ga(44),e=!1,Il(r,i),r.ga(58),s.e18(r)}r.ga(125)}d1(){return this.k18_1.d1()}l18(r){return this.k18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.l18(r!=null&&typeof r=="string"?r:m()):!1}tf(r){return this.k18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.tf(r!=null&&typeof r=="string"?r:m()):null}c1(){return this.k18_1.c1()}p2(){return this.k18_1.p2()}q2(){return this.k18_1.q2()}r2(){return this.k18_1.r2()}}class be extends vr{constructor(){bl=null,super(),bl=this,this.m18_1="null"}f18(){return!1}g18(){return this.m18_1}}class gt extends vr{constructor(r,e,t){if(t=t===o?null:t,super(),this.n18_1=e,this.o18_1=t,this.p18_1=w(r),this.o18_1!=null&&!this.o18_1.po()){var a="Failed requirement.";throw T.v(w(a))}}f18(){return this.n18_1}g18(){return this.p18_1}toString(){var r;if(this.n18_1){var e=this.p18_1.length+2|0,t=Yr.ja(e);Il(t,this.p18_1),r=t.toString()}else r=this.p18_1;return r}e18(r){this.n18_1?Il(r,this.p18_1):r.fa(this.p18_1)}equals(r){return this===r?!0:!(r==null||!Rr(this).equals(Rr(r))||(r instanceof gt||m(),this.n18_1!==r.n18_1)||this.p18_1!==r.p18_1)}hashCode(){var r=Mc(this.n18_1);return r=ao(31,r)+me(this.p18_1)|0,r}}class qt{constructor(){var r=this;r.r18_1=cr.t4()}s18(r,e){return this.r18_1.s2(r,e)}h17(){return new er(this.r18_1)}}class ew{constructor(){var r=this;r.t18_1=q.m()}u18(r){return this.t18_1.n(r),!0}h17(){return new dn(this.t18_1)}}class tw{constructor(){Wf=this;var r=this,e=NC();r.a19_1=fu("kotlinx.serialization.json.JsonElement",e,[],Q6)}nn(){return this.a19_1}b19(r,e){Wi(r),e instanceof vr?r.bs(Uv(),e):e instanceof er?r.bs(_u(),e):e instanceof dn?r.bs(Dv(),e):Ms()}on(r,e){return this.b19(r,e instanceof st?e:m())}pn(r){var e=gu(r);return e.c18()}}class aw{constructor(){Yf=this,this.v18_1=fu("kotlinx.serialization.json.JsonPrimitive",Gi(),[])}nn(){return this.v18_1}c19(r,e){Wi(r);var t;if(e instanceof be)r.bs(Rv(),lo()),t=or;else{var a=Cw();r.bs(a,e instanceof gt?e:m()),t=or}return t}on(r,e){return this.c19(r,e instanceof vr?e:m())}pn(r){var e=gu(r),t=e.c18();if(!(t instanceof vr)){var a="Unexpected JSON element, expected JsonPrimitive, had "+w(Rr(t)),i;if(e.b18().r15_1.z17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Ur.p19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class iw{constructor(){Zf=this,this.q19_1=yf(mt()).nn(),this.r19_1="kotlinx.serialization.json.JsonArray"}mo(){return this.r19_1}so(r){return this.q19_1.so(r)}to(r){return this.q19_1.to(r)}uo(r){return this.q19_1.uo(r)}vo(r){return this.q19_1.vo(r)}wo(r){return this.q19_1.wo(r)}no(){return this.q19_1.no()}oo(){return this.q19_1.oo()}po(){return this.q19_1.po()}qo(){return this.q19_1.qo()}ro(){return this.q19_1.ro()}}class sw{constructor(){Vf=this,this.z18_1=iA()}nn(){return this.z18_1}s19(r,e){Wi(r),yf(mt()).on(r,e)}on(r,e){return this.s19(r,e instanceof dn?e:m())}pn(r){return Lv(r),new dn(yf(mt()).pn(r))}}class ow{constructor(){Xf=this,this.t19_1=wf(Os(),mt()).nn(),this.u19_1="kotlinx.serialization.json.JsonObject"}mo(){return this.u19_1}so(r){return this.t19_1.so(r)}to(r){return this.t19_1.to(r)}uo(r){return this.t19_1.uo(r)}vo(r){return this.t19_1.vo(r)}wo(r){return this.t19_1.wo(r)}no(){return this.t19_1.no()}oo(){return this.t19_1.oo()}po(){return this.t19_1.po()}qo(){return this.t19_1.qo()}ro(){return this.t19_1.ro()}}class lw{constructor(){Qf=this,this.y18_1=sA()}nn(){return this.y18_1}v19(r,e){Wi(r),wf(Os(),mt()).on(r,e)}on(r,e){return this.v19(r,e instanceof er?e:m())}pn(r){return Lv(r),new er(wf(Os(),mt()).pn(r))}}class uw{constructor(){rc=this,this.w18_1=fu("kotlinx.serialization.json.JsonNull",Ja(),[])}nn(){return this.w18_1}w19(r,e){Wi(r),r.gr()}on(r,e){return this.w19(r,e instanceof be?e:m())}pn(r){if(Lv(r),r.yp())throw Mv("Expected 'null' literal");return r.zp(),lo()}}class fw{constructor(){nc=this,this.x18_1=EC("kotlinx.serialization.json.JsonLiteral",Gi())}nn(){return this.x18_1}x19(r,e){if(Wi(r),e.n18_1)return r.pr(e.p18_1);if(e.o18_1!=null)return r.qr(e.o18_1).pr(e.p18_1);var t=Vz(e.p18_1);if(t!=null)return r.lr(t);var a=c0(e.p18_1),i=a;if((i==null?null:new fe(i))!=null){var s=a,l=(s==null?null:new fe(s)).vm_1,u=r.qr(uu(Zs()).nn()),f=l;return u.lr(f),or}var c=Zc(e.p18_1);if(c!=null)return r.nr(c);var v=lE(e.p18_1);if(v!=null)return r.hr(v);r.pr(e.p18_1)}on(r,e){return this.x19(r,e instanceof gt?e:m())}pn(r){var e=gu(r),t=e.c18();if(!(t instanceof gt)){var a="Unexpected JSON element, expected JsonLiteral, had "+w(Rr(t)),i;if(e.b18().r15_1.z17_1){var s=w(t);i=w(Jr(s))}else i=null;var l=i;throw Ur.p19(Kr(-1,a,null,null,l),a,-1,null,l,null)}return t}}class io{constructor(r){this.y19_1=Wc(r)}mo(){return nt(this).mo()}no(){return nt(this).no()}qo(){return nt(this).qo()}so(r){return nt(this).so(r)}to(r){return nt(this).to(r)}uo(r){return nt(this).uo(r)}vo(r){return nt(this).vo(r)}wo(r){return nt(this).wo(r)}}class Iv{}class Cv extends Yn{static f1a(r){var e=this.yn(r);return vn(e,e.e1a_1),e.d1a_1=r,delete e.message,e}ob(){return this.d1a_1}get message(){return this.ob()}}class Ur extends Cv{constructor(r,e,t,a,i,s){return new.target.p19(r,e,t,a,i,s)}static p19(r,e,t,a,i,s){var l=this.f1a(r);return vn(l,l.o19_1),l.j19_1=e,l.k19_1=t,l.l19_1=a,l.m19_1=i,l.n19_1=s,l}}class so extends Cv{constructor(r,e,t){return new.target.q1a(r,e,t)}static q1a(r,e,t){e=e===o?null:e,t=t===o?null:t;var a=this.f1a(hA(r,t));return vn(a,a.p1a_1),a.m1a_1=r,a.n1a_1=e,a.o1a_1=t,a}}class oo{constructor(r){this.r1a_1=r,this.s1a_1=!0}t1a(){this.s1a_1=!0}u1a(){return or}v1a(){this.s1a_1=!1}w1a(){this.s1a_1=!1}x1a(){return or}y1a(r){return this.r1a_1.z1a(r)}a1b(r){return this.r1a_1.b1b(r)}c1b(r){return this.r1a_1.b1b(r.toString())}d1b(r){return this.r1a_1.b1b(r.toString())}e1b(r){return this.r1a_1.f1b(F(r))}g1b(r){return this.r1a_1.f1b(F(r))}h1b(r){return this.r1a_1.f1b(F(r))}i1b(r){return this.r1a_1.f1b(r)}j1b(r){return this.r1a_1.b1b(r.toString())}k1b(r){return this.r1a_1.l1b(r)}}class Ff extends oo{constructor(r,e){super(r),this.o1b_1=e}h1b(r){if(this.o1b_1){var e=r;this.k1b(hf(e))}else{var t=r;this.a1b(hf(t))}}i1b(r){if(this.o1b_1){var e=r;this.k1b(pf(e))}else{var t=r;this.a1b(pf(t))}}e1b(r){if(this.o1b_1){var e=r;this.k1b(cf(e))}else{var t=r;this.a1b(cf(t))}}g1b(r){if(this.o1b_1){var e=r;this.k1b(gf(e))}else{var t=r;this.a1b(gf(t))}}}class $f extends oo{constructor(r,e){super(r),this.r1b_1=e}k1b(r){this.r1b_1?super.k1b(r):super.a1b(r)}}class cw extends oo{constructor(r,e){super(r),this.u1b_1=e,this.v1b_1=0}t1a(){this.s1a_1=!0,this.v1b_1=this.v1b_1+1|0}u1a(){this.v1b_1=this.v1b_1-1|0}v1a(){this.s1a_1=!1,this.a1b(`
`);var r=this.v1b_1,e=0;if(e<r)do e=e+1|0,this.a1b(this.u1b_1.r15_1.o17_1);while(e<r)}w1a(){this.s1a_1?this.s1a_1=!1:this.v1a()}x1a(){this.y1a(32)}}class Av{constructor(r){var e=this;e.w1b_1=new K0(r,cA(this)),this.x1b_1=!1}y1b(r){this.w1b_1.cv(r)}z1b(){return this.w1b_1.dv()}}class vw{}class hw{}class dw{constructor(r){this.g1c_1=r.a18_1,this.h1c_1=r.z17_1;var e=this;e.i1c_1=Array(8);for(var t=this,a=0,i=new Int32Array(8);a<8;)i[a]=-1,a=a+1|0;t.j1c_1=i,this.k1c_1=-1}l1c(r){this.k1c_1=this.k1c_1+1|0;var e=this.k1c_1;e>=this.g1c_1&&Bs(this.g1c_1),e===this.i1c_1.length&&Yd(this),this.i1c_1[e]=r}m1c(r){this.j1c_1[this.k1c_1]=r}n1c(r){var e;this.j1c_1[this.k1c_1]!==-2?(this.k1c_1=this.k1c_1+1|0,e=this.k1c_1===this.i1c_1.length):e=!1,e&&Yd(this),this.i1c_1[this.k1c_1]=this.h1c_1?r:tc,this.j1c_1[this.k1c_1]=-2}o1c(){this.j1c_1[this.k1c_1]===-2&&(this.i1c_1[this.k1c_1]=ec)}p1c(){var r=this.k1c_1;this.j1c_1[r]===-2&&(this.j1c_1[r]=-1,this.k1c_1=this.k1c_1-1|0),this.k1c_1!==-1&&(this.k1c_1=this.k1c_1-1|0)}q1c(){var r=Yr.f();r.fa("$");var e=this.k1c_1+1|0,t=0;if(t<e)do{var a=t;t=t+1|0;var i=this.i1c_1[a];if(i!=null&&z(i,ke))if(D(i.no(),eo()))this.j1c_1[a]!==-1&&(r.fa("["),r.ge(this.j1c_1[a]),r.fa("]"));else{var s=this.j1c_1[a];s>=0&&(r.fa("."),r.fa(i.so(s)))}else i===tc?r.fa("[<debug info disabled>]"):i!==ec&&(r.fa("["),r.fa("'"),r.ea(i),r.fa("'"),r.fa("]"))}while(t<e);return r.toString()}toString(){return this.q1c()}}class qv{constructor(r){this.r1c_1=r.q17_1,this.s1c_1=!r.y17_1.equals(zw())}l15(r,e){}o15(r,e,t){var a=t.nn();kA(this,a,e)}p15(r,e){}q15(r,e){}}class pw{constructor(r,e){this.d1d_1=e,this.e1d_1=r.k17_1,this.f1d_1=r.w17_1,this.g1d_1=r.a18_1,this.h1d_1=this.d1d_1.j16_1.k1c_1}n1d(){var r=this.d1d_1.j1d(),e;if(r===1)e=xl(this,!0);else if(r===0)e=xl(this,!1);else if(r===6){this.h1d_1=this.h1d_1+1|0,this.h1d_1>=this.g1d_1&&Bs(this.g1d_1);var t;this.h1d_1===200?(this.h1d_1=this.h1d_1-1|0,t=EA(this)):(t=SA(this),this.h1d_1=this.h1d_1-1|0),e=t}else if(r===8){this.h1d_1=this.h1d_1+1|0,this.h1d_1>=this.g1d_1&&Bs(this.g1d_1);var a=Pw(this);this.h1d_1=this.h1d_1-1|0,e=a}else this.d1d_1.b1c("Cannot read Json element because of unexpected "+Cl(r));return e}}class cs extends ae{constructor(r,e,t,a){super(r,e),this.r1d_1=t,this.s1d_1=a}}class Ai{}class Jf{constructor(){this.c1c_1=np(16)}u1d(r,e,t){var a=this.c1c_1,i=a.o2(r),s;if(i==null){var l=np(2);a.s2(r,l),s=l}else s=i;var u=s,f=e instanceof Ai?e:m(),c=t??m();u.s2(f,c)}d1c(r,e,t){var a=this.v1d(r,e);if(a!=null)return a;var i=t();return this.u1d(r,e,i),i}v1d(r,e){var t=this.c1c_1.o2(r),a;t==null?a=null:a=t.o2(e instanceof Ai?e:m());var i=a;return i??null}}class _w{constructor(r){this.w1d_1=r}}class Ps extends Fa{constructor(r,e,t,a,i){super(),this.z15_1=r,this.a16_1=e,this.b16_1=t,this.c16_1=this.z15_1.zq(),this.d16_1=-1,this.e16_1=i,this.f16_1=this.z15_1.r15_1,this.g16_1=this.f16_1.n17_1?null:new Av(a)}b18(){return this.z15_1}zq(){return this.c16_1}c18(){return new pw(this.z15_1.r15_1,this.b16_1).n1d()}lq(r){try{var e;if(r instanceof Ci?e=this.z15_1.r15_1.q17_1:e=!0,e)return r.pn(this);var t=El(r.nn(),this.z15_1),a=this.b16_1.f1e(t,this.f16_1.k17_1),i;if(a==null){var s=z(r,mi)?r:m(),l;r:{var u;if(s instanceof Ci?u=this.b18().r15_1.q17_1:u=!0,u){l=s.pn(this);break r}var f=El(s.nn(),this.b18()),c=this.c18(),v=s.nn().mo();if(!(c instanceof er)){var h="Expected "+Dr(er).uc()+", but had "+Rr(c).uc()+" as the serialized body of "+v,d=this.b16_1.j16_1.q1c(),p;if(this.b18().r15_1.z17_1){var g=w(c);p=w(Jr(g))}else p=null;var y=p;throw Ur.p19(Kr(-1,h,d,null,y),h,-1,d,y,null)}var x=c,k=x.tf(f),S=k==null?null:On(k),E=S==null?null:Un(S),I;try{I=mf(s,this,E)}catch(X){var A;if(X instanceof Yn){var j=X,P=fn(j.message),$;if(this.b18().r15_1.z17_1){var B=x.toString();$=w(Jr(B))}else $=null;var N=$;throw Ur.p19(Kr(-1,P,null,null,N),P,-1,null,N,null)}else throw X}var H=I,L=z(H,mi)?H:m();l=$w(this.b18(),f,x,L)}return l}else i=a;var J=i,R;try{R=mf(r,this,J)}catch(X){var V;if(X instanceof Yn){var K=X,nr=pa(qm(fn(K.message),10),"."),W=uE(fn(K.message),10,"");this.b16_1.b1c(nr,o,W)}else throw X;R=V}var tr=R,Q=z(tr,mi)?tr:m();return this.e16_1=new _w(t),Q.pn(this)}catch(X){if(X instanceof au){var ur=X;throw js(fn(ur.message),"at path")?ur:HC(ur,Zx(ur.message," at path: ")+this.b16_1.j16_1.q1c())}else throw X}}mq(r){var e=Rw(this.z15_1,r);this.b16_1.j16_1.l1c(r),this.b16_1.x1d(e.r1d_1),BA(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new Ps(this.z15_1,e,this.b16_1,r,this.e16_1);break;default:var a;this.a16_1.equals(e)&&this.z15_1.r15_1.n17_1?a=this:a=new Ps(this.z15_1,e,this.b16_1,r,this.e16_1),t=a;break}return t}nq(r){r.qo()===0&&Jv(r,this.z15_1)&&PA(this,r),this.b16_1.y1d()&&!this.z15_1.r15_1.w17_1&&Ha(this.b16_1,""),this.b16_1.x1d(this.a16_1.s1d_1),this.b16_1.j16_1.p1c()}yp(){var r,e=this.g16_1,t=e==null?null:e.x1b_1;return t??!1?r=!1:r=!this.b16_1.g1e(),r}zp(){return null}xq(r,e,t,a){var i=this.a16_1.equals(zl())&&(e&1)===0;i&&this.b16_1.j16_1.o1c();var s=super.xq(r,e,t,a);return i&&this.b16_1.j16_1.n1c(s),s}br(r){var e;switch(this.a16_1.x2_1){case 0:e=DA(this,r);break;case 2:e=NA(this);break;default:e=LA(this);break}return this.a16_1.equals(zl())||this.b16_1.j16_1.m1c(e),e}aq(){return this.b16_1.h1e()}bq(){var r=this.b16_1.i1e();return sr(r,F(P1(r)))||this.b16_1.b1c("Failed to parse byte for input '"+r.toString()+"'"),P1(r)}cq(){var r=this.b16_1.i1e();return sr(r,F(B1(r)))||this.b16_1.b1c("Failed to parse short for input '"+r.toString()+"'"),B1(r)}dq(){var r=this.b16_1.i1e();return sr(r,F(rn(r)))||this.b16_1.b1c("Failed to parse int for input '"+r.toString()+"'"),rn(r)}eq(){return this.b16_1.i1e()}fq(){var r=this.b16_1,e;r:{var t=r.m1d();try{e=Lo(t);break r}catch(s){if(s instanceof T)r.b1c("Failed to parse type 'float' for input '"+t+"'");else throw s}}var a=e,i=this.z15_1.r15_1.s17_1;if(i||Gc(a))return a;Jd(this.b16_1,a)}gq(){var r=this.b16_1,e;r:{var t=r.m1d();try{e=Lo(t);break r}catch(s){if(s instanceof T)r.b1c("Failed to parse type 'double' for input '"+t+"'");else throw s}}var a=e,i=this.z15_1.r15_1.s17_1;if(i||Kc(a))return a;Jd(this.b16_1,a)}hq(){var r=this.b16_1.m1d();return r.length!==1&&this.b16_1.b1c("Expected single char, but got '"+r+"'"),G(r,0)}iq(){var r;return this.f16_1.k17_1?r=this.b16_1.e1e():r=this.b16_1.l1d(),r}jq(r){return Hv(r)?new Tv(this.b16_1,this.z15_1):super.jq(r)}}class Tv extends Fa{constructor(r,e){super(),this.j1e_1=r,this.k1e_1=e.zq()}zq(){return this.k1e_1}br(r){var e="unsupported";throw mr.o3(w(e))}dq(){var r=this.j1e_1,e;r:{var t=r.m1d();try{var a=$I(t);e=a;break r}catch(i){if(i instanceof T)r.b1c("Failed to parse type 'UInt' for input '"+t+"'");else throw i}}return e}eq(){var r=this.j1e_1,e;r:{var t=r.m1d();try{var a=JI(t);e=a;break r}catch(i){if(i instanceof T)r.b1c("Failed to parse type 'ULong' for input '"+t+"'");else throw i}}return e}bq(){var r=this.j1e_1,e;r:{var t=r.m1d();try{var a=HI(t);e=a;break r}catch(i){if(i instanceof T)r.b1c("Failed to parse type 'UByte' for input '"+t+"'");else throw i}}return e}cq(){var r=this.j1e_1,e;r:{var t=r.m1d();try{var a=GI(t);e=a;break r}catch(i){if(i instanceof T)r.b1c("Failed to parse type 'UShort' for input '"+t+"'");else throw i}}return e}}class wi extends ro{constructor(r,e,t,a){return new.target.l1e(r,e,t,a)}static l1e(r,e,t,a){var i=this.dr();i.t1c_1=r,i.u1c_1=e,i.v1c_1=t,i.w1c_1=a,i.x1c_1=i.u1c_1.zq(),i.y1c_1=i.u1c_1.r15_1,i.z1c_1=!1,i.a1d_1=null,i.b1d_1=null;var s=i.v1c_1.x2_1;return i.w1c_1!=null&&(i.w1c_1[s]!==null||i.w1c_1[s]!==i)&&(i.w1c_1[s]=i),i}b18(){return this.u1c_1}static c1d(r,e,t,a){return this.l1e(uA(r,e),e,t,a)}zq(){return this.x1c_1}bs(r,e){r:{if(this.b18().r15_1.q17_1){r.on(this,e);break r}var t=r instanceof Ci,a;if(t)a=!this.b18().r15_1.y17_1.equals(zw());else{var i;switch(this.b18().r15_1.y17_1.x2_1){case 0:case 2:i=!1;break;case 1:var s=r.nn().no();i=D(s,cu())||D(s,kv());break;default:Ms();break}a=i}var l=a,u=l?El(r.nn(),this.b18()):null,f;if(t){var c=r instanceof Ci?r:m();n:if(e==null){var v="Value for serializer "+w(r.nn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw T.v(w(v))}else break n;var h=aC(c,this,e);f=z(h,tu)?h:m()}else f=r;var d=f;if(u!=null){qA(this.b18(),r,d,u),TA(d.nn().no());var p=d.nn().mo();this.a1d_1=u,this.b1d_1=p}d.on(this,e)}}mq(r){var e=Rw(this.u1c_1,r);e.r1d_1!==0&&(this.t1c_1.y1a(e.r1d_1),this.t1c_1.t1a());var t=this.a1d_1;if(t!=null){var a=this.b1d_1;$A(this,t,a??r.mo()),this.a1d_1=null,this.b1d_1=null}if(this.v1c_1.equals(e))return this;var i=this.w1c_1,s=i==null?null:i[e.x2_1];return s??wi.l1e(this.t1c_1,this.u1c_1,e,this.w1c_1)}nq(r){this.v1c_1.s1d_1!==0&&(this.t1c_1.u1a(),this.t1c_1.w1a(),this.t1c_1.y1a(this.v1c_1.s1d_1))}er(r,e){switch(this.v1c_1.x2_1){case 1:this.t1c_1.s1a_1||this.t1c_1.y1a(44),this.t1c_1.v1a();break;case 2:if(this.t1c_1.s1a_1)this.z1c_1=!0,this.t1c_1.v1a();else{var t=this,a;e%2|0?(this.t1c_1.y1a(58),this.t1c_1.x1a(),a=!1):(this.t1c_1.y1a(44),this.t1c_1.v1a(),a=!0),t.z1c_1=a}break;case 3:e===0&&(this.z1c_1=!0),e===1&&(this.t1c_1.y1a(44),this.t1c_1.x1a(),this.z1c_1=!1);break;default:this.t1c_1.s1a_1||this.t1c_1.y1a(44),this.t1c_1.v1a(),this.pr(_A(r,this.u1c_1,e)),this.t1c_1.y1a(58),this.t1c_1.x1a();break}return!0}qr(r){var e;if(Hv(r)){var t,a=this.t1c_1;if(a instanceof Ff)t=this.t1c_1;else{var i=this.t1c_1.r1a_1,s=this.z1c_1;t=new Ff(i,s)}var l=t;e=wi.l1e(l,this.u1c_1,this.v1c_1,null)}else if(JA(r)){var u,f=this.t1c_1;if(f instanceof $f)u=this.t1c_1;else{var c=this.t1c_1.r1a_1,v=this.z1c_1;u=new $f(c,v)}var h=u;e=wi.l1e(h,this.u1c_1,this.v1c_1,null)}else this.a1d_1!=null?(this.b1d_1=r.mo(),e=this):e=super.qr(r);return e}gr(){this.t1c_1.a1b("null")}hr(r){this.z1c_1?this.pr(r.toString()):this.t1c_1.j1b(r)}ir(r){this.z1c_1?this.pr(r.toString()):this.t1c_1.e1b(r)}jr(r){this.z1c_1?this.pr(r.toString()):this.t1c_1.g1b(r)}kr(r){this.z1c_1?this.pr(r.toString()):this.t1c_1.h1b(r)}lr(r){this.z1c_1?this.pr(r.toString()):this.t1c_1.i1b(r)}mr(r){if(this.z1c_1?this.pr(r.toString()):this.t1c_1.c1b(r),!this.y1c_1.s17_1&&!Gc(r))throw Hd(r)}nr(r){if(this.z1c_1?this.pr(r.toString()):this.t1c_1.d1b(r),!this.y1c_1.s17_1&&!Kc(r))throw Hd(r)}or(r){this.pr(xr(r))}pr(r){return this.t1c_1.k1b(r)}}class pu extends wy{constructor(r,e,t){t=t===o?null:t,super(),this.o1e_1=r,this.p1e_1=e,this.q1e_1=t,this.r1e_1=this.b18().r15_1}b18(){return this.o1e_1}l2(){return this.p1e_1}zq(){return this.b18().zq()}t1e(){var r=this.y13(),e;r==null?e=null:e=this.u1e(r);var t=e;return t??this.l2()}s1e(r){return this.a14()+("."+r)}c18(){return this.t1e()}lq(r){var e;r:{var t;if(r instanceof Ci?t=this.b18().r15_1.q17_1:t=!0,t){e=r.pn(this);break r}var a=El(r.nn(),this.b18()),i=this.c18(),s=r.nn().mo();if(!(i instanceof er)){var l="Expected "+Dr(er).uc()+", but had "+Rr(i).uc()+" as the serialized body of "+s,u=this.a14(),f;if(this.b18().r15_1.z17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Ur.p19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=i,d=h.tf(a),p=d==null?null:On(d),g=p==null?null:Un(p),y;try{y=mf(r,this,g)}catch(P){if(P instanceof Yn){var x=P,k=fn(x.message),S;if(this.b18().r15_1.z17_1){var E=h.toString();S=w(Jr(E))}else S=null;var I=S;throw Ur.p19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw P}var A=y,j=z(A,mi)?A:m();e=$w(this.b18(),a,h,j)}return e}z13(r,e){return e}mq(r){var e=this.t1e(),t=r.no(),a,i;if(D(t,eo())?i=!0:i=t instanceof $i,i){var s=this.b18(),l=r.mo();if(!(e instanceof dn)){var u="Expected "+Dr(dn).uc()+", but had "+Rr(e).uc()+" as the serialized body of "+l,f=this.a14(),c;if(this.b18().r15_1.z17_1){var v=w(e);c=w(Jr(v))}else c=null;var h=c;throw Ur.p19(Kr(-1,u,f,null,h),u,-1,f,h,null)}a=new Hf(s,e)}else if(D(t,vu())){var d=this.b18(),p=Sl(r.vo(0),d.zq()),g=p.no(),y,x;if(g instanceof Xn?x=!0:x=D(g,Ja()),x){var k=this.b18(),S=r.mo();if(!(e instanceof er)){var E="Expected "+Dr(er).uc()+", but had "+Rr(e).uc()+" as the serialized body of "+S,I=this.a14(),A;if(this.b18().r15_1.z17_1){var j=w(e);A=w(Jr(j))}else A=null;var P=A;throw Ur.p19(Kr(-1,E,I,null,P),E,-1,I,P,null)}y=new mw(k,e,r)}else if(d.r15_1.l17_1){var $=this.b18(),B=r.mo();if(!(e instanceof dn)){var N="Expected "+Dr(dn).uc()+", but had "+Rr(e).uc()+" as the serialized body of "+B,H=this.a14(),L;if(this.b18().r15_1.z17_1){var J=w(e);L=w(Jr(J))}else L=null;var R=L;throw Ur.p19(Kr(-1,N,H,null,R),N,-1,H,R,null)}y=new Hf($,e)}else throw Aw(p);a=y}else{var V=this.b18(),K=r.mo();if(!(e instanceof er)){var nr="Expected "+Dr(er).uc()+", but had "+Rr(e).uc()+" as the serialized body of "+K,W=this.a14(),tr;if(this.b18().r15_1.z17_1){var Q=w(e);tr=w(Jr(Q))}else tr=null;var ur=tr;throw Ur.p19(Kr(-1,nr,W,null,ur),nr,-1,W,ur,null)}a=new Ki(V,e,r,this.q1e_1)}return a}nq(r){}yp(){var r=this.t1e();return!(r instanceof be)}v1e(r){return this.u1e(r)!==lo()}c14(r){return this.v1e(r!=null&&typeof r=="string"?r:m())}w1e(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of boolean",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=Bv(f),v;c==null?Nn(this,f,"boolean",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"boolean",r);else throw h}}return e}d14(r){return this.w1e(r!=null&&typeof r=="string"?r:m())}x1e(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of byte",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=fi(f),v,h=Ge(-128,127);bo(z(h,vi)?h:m(),c)?v=P1(c):v=null;var d=v,p;d==null?Nn(this,f,"byte",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"byte",r);else throw g}}return e}e14(r){return this.x1e(r!=null&&typeof r=="string"?r:m())}y1e(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of short",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=fi(f),v,h=Ge(-32768,32767);bo(z(h,vi)?h:m(),c)?v=B1(c):v=null;var d=v,p;d==null?Nn(this,f,"short",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"short",r);else throw g}}return e}f14(r){return this.y1e(r!=null&&typeof r=="string"?r:m())}z1e(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of int",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=fi(f),v,h=Ge(-2147483648,2147483647);bo(z(h,vi)?h:m(),c)?v=rn(c):v=null;var d=v,p;d==null?Nn(this,f,"int",r):p=d,e=p;break r}catch(g){if(g instanceof T)Nn(this,f,"int",r);else throw g}}return e}g14(r){return this.z1e(r!=null&&typeof r=="string"?r:m())}a1f(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of long",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=fi(f),v;c==null?Nn(this,f,"long",r):v=c,e=v;break r}catch(h){if(h instanceof T)Nn(this,f,"long",r);else throw h}}return e}h14(r){return this.a1f(r!=null&&typeof r=="string"?r:m())}b1f(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of float",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=V6(f),v;c==null?Nn(this,f,"float",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"float",r);else throw S}}var h=e,d=this.b18().r15_1.s17_1;if(d||Gc(h))return h;var p=Gd(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.b18().r15_1.z17_1){var x=w(this.t1e());y=w(Jr(x))}else y=null;var k=y;throw Ur.p19(Kr(-1,p,null,g,k),p,-1,null,k,g)}i14(r){return this.b1f(r!=null&&typeof r=="string"?r:m())}c1f(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of double",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=X6(f),v;c==null?Nn(this,f,"double",r):v=c,e=v;break r}catch(S){if(S instanceof T)Nn(this,f,"double",r);else throw S}}var h=e,d=this.b18().r15_1.s17_1;if(d||Kc(h))return h;var p=Gd(h,r),g="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",y;if(this.b18().r15_1.z17_1){var x=w(this.t1e());y=w(Jr(x))}else y=null;var k=y;throw Ur.p19(Kr(-1,p,null,g,k),p,-1,null,k,g)}j14(r){return this.c1f(r!=null&&typeof r=="string"?r:m())}d1f(r){var e;r:{var t=this.u1e(r);if(!(t instanceof vr)){var a="Expected "+Dr(vr).uc()+", but had "+Rr(t).uc()+" as the serialized body of char",i=this.s1e(r),s;if(this.b18().r15_1.z17_1){var l=w(t);s=w(Jr(l))}else s=null;var u=s;throw Ur.p19(Kr(-1,a,i,null,u),a,-1,i,u,null)}var f=t;try{var c=new Cn(Jx(f.g18())),v;c==null?Nn(this,f,"char",r):v=c,e=v.x1_1;break r}catch(h){if(h instanceof T)Nn(this,f,"char",r);else throw h}}return e}k14(r){return this.d1f(r!=null&&typeof r=="string"?r:m())}e1f(r){var e=this.u1e(r);if(!(e instanceof vr)){var t="Expected "+Dr(vr).uc()+", but had "+Rr(e).uc()+" as the serialized body of string",a=this.s1e(r),i;if(this.b18().r15_1.z17_1){var s=w(e);i=w(Jr(s))}else i=null;var l=i;throw Ur.p19(Kr(-1,t,a,null,l),t,-1,a,l,null)}var u=e;if(!(u instanceof gt)){var f="Expected string value for a non-null key '"+r+"', got null literal instead",c=this.s1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.b18().r15_1.z17_1){var d=w(this.t1e());h=w(Jr(d))}else h=null;var p=h;throw Ur.p19(Kr(-1,f,c,v,p),f,-1,c,p,v)}if(!u.n18_1&&!this.b18().r15_1.k17_1){var g="String literal for value of key '"+r+"' should be quoted",y=this.s1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.b18().r15_1.z17_1){var S=w(this.t1e());k=w(Jr(S))}else k=null;var E=k;throw Ur.p19(Kr(-1,g,y,x,E),g,-1,y,E,x)}return u.p18_1}l14(r){return this.e1f(r!=null&&typeof r=="string"?r:m())}f1f(r,e){var t;if(Hv(e)){var a=this.b18(),i=this.u1e(r),s=e.mo();if(!(i instanceof vr)){var l="Expected "+Dr(vr).uc()+", but had "+Rr(i).uc()+" as the serialized body of "+s,u=this.s1e(r),f;if(this.b18().r15_1.z17_1){var c=w(i);f=w(Jr(c))}else f=null;var v=f;throw Ur.p19(Kr(-1,l,u,null,v),l,-1,u,v,null)}var h=Kv(a,i.g18());t=new Tv(h,this.b18())}else t=super.m14(r,e);return t}m14(r,e){return this.f1f(r!=null&&typeof r=="string"?r:m(),e)}jq(r){return this.y13()!=null?super.jq(r):new gw(this.b18(),this.l2(),this.q1e_1).jq(r)}}class Ki extends pu{constructor(r,e,t,a,i){a=a===o?null:a,i=i===o?null:i,super(r,e,a),this.m1f_1=e,this.n1f_1=i,this.o1f_1=this.l2().r2().x(),this.p1f_1=this.r1e_1.n17_1?null:new Av(t),this.q1f_1=null,this.r1f_1=null}l2(){return this.m1f_1}br(r){var e=this.o1f_1;r:for(;e.y();){var t=e.z(),a=t.k2(),i=mu(r,this.b18(),a);if(i!==-3){if(this.r1e_1.p17_1&&GA(this,r,i,t.l2()))continue r;var s=this.p1f_1;return s==null||s.y1b(i),this.q1f_1=a,this.r1f_1=t.l2(),i}a!==this.q1e_1&&!Jv(r,this.b18())&&KA(this,a)}var l=this.p1f_1,u=l==null?null:l.z1b(),f=u??-1;return f!==-1&&(this.q1f_1=r.so(f),this.r1f_1=null),f}yp(){var r,e=this.p1f_1,t=e==null?null:e.x1b_1;return t??!1?r=!1:r=super.yp(),r}u13(r,e){var t=this.q1f_1;return t??r.so(e)}u1e(r){var e=this.r1f_1;return e??qe(this.l2(),r)}mq(r){if(r===this.n1f_1){var e=this.b18(),t=this.t1e(),a=this.n1f_1.mo();if(!(t instanceof er)){var i="Expected "+Dr(er).uc()+", but had "+Rr(t).uc()+" as the serialized body of "+a,s=this.a14(),l;if(this.b18().r15_1.z17_1){var u=w(t);l=w(Jr(u))}else l=null;var f=l;throw Ur.p19(Kr(-1,i,s,null,f),i,-1,s,f,null)}return new Ki(e,t,r,this.q1e_1,this.n1f_1)}return super.mq(r)}}class Hf extends pu{constructor(r,e){super(r,e),this.y1f_1=e,this.z1f_1=this.y1f_1.c1(),this.a1g_1=-1}l2(){return this.y1f_1}u13(r,e){return e.toString()}u1e(r){return this.y1f_1.e1(rm(r))}br(r){for(;this.a1g_1<(this.z1f_1-1|0);)return this.a1g_1=this.a1g_1+1|0,this.a1g_1;return-1}}class gw extends pu{constructor(r,e,t){t=t===o?null:t,super(r,e,t),this.h1g_1=e,this.n14("primitive")}l2(){return this.h1g_1}br(r){return 0}u1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw T.v(w(e))}return this.h1g_1}}class mw extends Ki{constructor(r,e,t){super(r,e,t),this.u1g_1=wt(e.p2()),this.v1g_1=ao(this.u1g_1.c1(),2),this.w1g_1=-1}u13(r,e){var t=e/2|0;return this.u1g_1.e1(t)}br(r){for(;this.w1g_1<(this.v1g_1-1|0);)return this.w1g_1=this.w1g_1+1|0,this.w1g_1;return-1}u1e(r){return this.w1g_1%2|0?qe(this.l2(),r):zn(r)}nq(r){}}class yw{constructor(r){this.h16_1=r,this.i16_1=0,this.j16_1=new dw(this.h16_1),this.k16_1=null,this.l16_1=Yr.f()}a1h(){}y1d(){var r=this.b1h(),e=this.y1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.i16_1=this.i16_1+1|0,!0):!1}c1h(r){return!(r===125||r===93||r===58||r===44)}m16(){var r=this.o1d();r!==10&&this.b1c("Expected EOF after parsing, but had "+xr(rr(this.y1g(),this.i16_1-1|0))+" instead")}i1d(r){var e=this.o1d();if(e!==r){var t=Cl(r),a=this.i16_1>0?this.i16_1-1|0:this.i16_1,i=this.i16_1===C(this.y1g())||a<0?"EOF":xr(rr(this.y1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.b1c(s,a)}return e}d1h(r){if(this.i16_1>0&&r===34){var e;r:{var t=this.i16_1;try{this.i16_1=this.i16_1-1|0,e=this.m1d();break r}finally{this.i16_1=t}}var a=e;a==="null"&&this.a1c("Expected string literal but 'null' literal was found",this.i16_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var i=tt(r),s=Cl(i),l=this.i16_1>0?this.i16_1-1|0:this.i16_1,u=this.i16_1===C(this.y1g())||l<0?"EOF":xr(rr(this.y1g(),l)),f="Expected "+s+", but had '"+u+"' instead";this.b1c(f,l)}j1d(){var r=this.y1g(),e=this.i16_1;r:for(;;){if(e=this.z1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.i16_1=e,tt(t)}return this.i16_1=e,10}z1d(r){var e=this.b1h();e=this.z1g(e);var t=C(this.y1g())-e|0;if(t<4||e===-1)return!1;var a=0;if(a<=3)do{var i=a;if(a=a+1|0,G("null",i)!==rr(this.y1g(),e+i|0))return!1}while(a<=3);return t>4&&tt(rr(this.y1g(),e+4|0))===0?!1:(r&&(this.i16_1=e+4|0),!0)}g1e(r,e){return r=r===o?!0:r,e===o?this.z1d(r):e.z1d.call(this,r)}a1e(r){var e=this.j1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.m1d()}else{if(e!==1)return null;t=this.l1d()}var a=t;return this.k16_1=a,a}e1h(){this.k16_1=null}f1h(r,e){var t=this.y1g();return w(Ln(t,r,e))}l1d(){return this.k16_1!=null?Qd(this):this.d1e()}consumeString2(r,e,t){for(var a=t,i=e,s=rr(r,a),l=!1;s!==34;)s===92?(l=!0,a=this.z1g(WA(this,i,a)),a===-1&&this.b1c("Unexpected EOF",a),i=a):(a=a+1|0,a>=C(r)&&(l=!0,this.x1g(i,a),a=this.z1g(a),a===-1&&this.b1c("Unexpected EOF",a),i=a)),s=rr(r,a);var u;l?u=m1(this,i,a):u=this.f1h(i,a);var f=u;return this.i16_1=a+1|0,f}e1e(){var r=this.m1d();return r==="null"&&YA(this)&&this.b1c("Unexpected 'null' value instead of string literal"),r}m1d(){if(this.k16_1!=null)return Qd(this);var r=this.b1h();(r>=C(this.y1g())||r===-1)&&this.b1c("EOF",r);var e=tt(rr(this.y1g(),r));if(e===1)return this.l1d();e!==0&&this.b1c("Expected beginning of the string, but got "+xr(rr(this.y1g(),r)));for(var t=!1;tt(rr(this.y1g(),r))===0;)if(r=r+1|0,r>=C(this.y1g())){t=!0,this.x1g(this.i16_1,r);var a=this.z1g(r);if(a===-1)return this.i16_1=r,m1(this,0,0);r=a}var i;t?i=m1(this,this.i16_1,r):i=this.f1h(this.i16_1,r);var s=i;return this.i16_1=r,s}x1g(r,e){this.l16_1.ee(this.y1g(),r,e)}c1e(r){var e=q.m(),t=this.j1d();if(t!==8&&t!==6)return this.m1d(),or;r:for(;;){if(t=this.j1d(),t===1){r?this.m1d():this.d1e();continue r}var a=t;if(a===8||a===6?e.n(t):a===9?(A1(e)!==8&&this.b1c("found ] instead of }"),md(e)):a===7?(A1(e)!==6&&this.b1c("found } instead of ]"),md(e)):a===10&&this.b1c("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.o1d(),e.c1()===0)return or}}toString(){return"JsonReader(source='"+w(this.y1g())+"', currentPosition="+this.i16_1+")"}b1e(r){var e=this.f1h(0,this.i16_1),t=fE(e,r);this.a1c("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}a1c(r,e,t){throw vA(this,r,e,this.j16_1.q1c(),t,this.y1g())}b1c(r,e,t,a){return e=e===o?this.i16_1:e,t=t===o?null:t,a===o?this.a1c(r,e,t):a.a1c.call(this,r,e,t)}i1e(){var r=this.b1h();r=this.z1g(r),(r>=C(this.y1g())||r===-1)&&this.b1c("EOF");var e;rr(this.y1g(),r)===34?(r=r+1|0,r===C(this.y1g())&&this.b1c("EOF"),e=!0):e=!1;var t=e,a=new b(0,0),i=new b(0,0),s=!1,l=!1,u=!1,f=r;r:for(;r!==C(this.y1g());){var c=rr(this.y1g(),r);if((c===101||c===69)&&!u){r===f&&this.b1c("Unexpected symbol '"+xr(c)+"' in numeric literal",r),l=!0,u=!0,r=r+1|0;continue r}if(c===45&&u){r===f&&this.b1c("Unexpected symbol '-' in numeric literal",r),l=!1,r=r+1|0;continue r}if(c===43&&u){r===f&&this.b1c("Unexpected symbol '+' in numeric literal",r),l=!0,r=r+1|0;continue r}if(c===45){r!==f&&this.b1c("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=tt(c);if(v!==0)break r;r=r+1|0;var h=Hn(c,48);if(0<=h&&h<=9||this.b1c("Unexpected symbol '"+xr(c)+"' in numeric literal",r-1|0),u){var d=i,p=Tr(d,F(10));i=gr(p,F(h));continue r}var g=a,y=Tr(g,F(10));a=Hr(y,F(h)),ar(a,new b(0,0))>0&&this.b1c("Numeric value overflow")}var x=r!==f;if((f===r||s&&f===(r-1|0))&&this.b1c("Expected numeric literal",r),t&&(x||this.b1c("EOF"),rr(this.y1g(),r)!==34&&this.b1c("Expected closing quotation mark",r),r=r+1|0),this.i16_1=r,u){var k=se(a)*XA(i,l);(k>se(new b(-1,2147483647))||k<se(new b(0,-2147483648)))&&this.b1c("Numeric value overflow"),Math.floor(k)!==k&&this.b1c("Can't convert "+k+" to Long"),a=Rn(k)}var S;return s?S=a:sr(a,new b(0,-2147483648))?this.b1c("Numeric value overflow"):S=on(a),S}q18(){var r=this.i1e(),e=this.o1d();if(e!==10){var t=this.i16_1>0?this.i16_1-1|0:this.i16_1,a=this.i16_1===C(this.y1g())||t<0?"EOF":xr(rr(this.y1g(),t)),i="Expected input to contain a single valid number, but got '"+a+"' after it";this.b1c(i,t)}return r}h1e(){var r=this.b1h();r===C(this.y1g())&&this.b1c("EOF");var e;rr(this.y1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,a=VA(this,r);return t&&(this.i16_1===C(this.y1g())&&this.b1c("EOF"),rr(this.y1g(),this.i16_1)!==34&&this.b1c("Expected closing quotation mark"),this.i16_1=this.i16_1+1|0),a}}class ww{constructor(){ic=this,this.g1h_1=Es(117),this.h1h_1=new Int8Array(126),rq(this),nq(this)}}class jv extends yw{constructor(r,e){super(e),this.t1h_1=r}y1g(){return this.t1h_1}z1g(r){return r<this.y1g().length?r:-1}o1d(){var r=this.y1g(),e=this.i16_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var a=G(r,t);if(a===32||a===10||a===13||a===9)continue r;return this.i16_1=e,tt(a)}return this.i16_1=r.length,10}k1d(){var r=this.i16_1;if(r===-1)return!1;var e=this.y1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.i16_1=r,this.c1h(t)}return this.i16_1=r,!1}b1h(){var r=this.i16_1;if(r===-1)return r;var e=this.y1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.i16_1=r,r}x1d(r){this.i16_1===-1&&this.d1h(r);var e=this.y1g(),t=this.i16_1;r:for(;t<e.length;){var a=t;t=a+1|0;var i=G(e,a);if(i===32||i===10||i===13||i===9)continue r;if(this.i16_1=t,i===r)return or;this.d1h(r)}this.i16_1=-1,this.d1h(r)}d1e(){this.x1d(34);var r=this.i16_1,e=Ks(this.y1g(),34,r);if(e===-1){this.m1d();var t=Cl(1),a=this.i16_1,i=this.i16_1===C(this.y1g())||a<0?"EOF":xr(rr(this.y1g(),a)),s="Expected "+t+", but had '"+i+"' instead";this.b1c(s,a)}var l=r;if(l<e)do{var u=l;if(l=l+1|0,G(this.y1g(),u)===92)return this.consumeString2(this.y1g(),this.i16_1,u)}while(l<e);return this.i16_1=e+1|0,Gn(this.y1g(),r,e)}f1e(r,e){var t=this.i16_1;try{if(this.o1d()!==6)return null;var a=this.a1e(e);return a!==r||(this.e1h(),this.o1d()!==5)?null:this.a1e(e)}finally{this.i16_1=t,this.e1h()}}}class bw extends jv{o1d(){var r=this.y1g(),e=this.b1h();return e>=r.length||e===-1?10:(this.i16_1=e+1|0,tt(G(r,e)))}k1d(){var r=this.b1h();return r>=this.y1g().length||r===-1?!1:this.c1h(G(this.y1g(),r))}x1d(r){var e=this.y1g(),t=this.b1h();(t>=e.length||t===-1)&&(this.i16_1=-1,this.d1h(r));var a=G(e,t);if(this.i16_1=t+1|0,a===r)return or;this.d1h(r)}j1d(){var r=this.y1g(),e=this.b1h();return e>=r.length||e===-1?10:(this.i16_1=e,tt(G(r,e)))}b1h(){var r=this.i16_1;if(r===-1)return r;var e=this.y1g();r:for(;r<e.length;){var t=G(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var a=G(e,r+1|0);if(a===47){r=Ks(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(a===42){r=$o(e,"*/",r+2|0),r===-1?(this.i16_1=e.length,this.b1c('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.i16_1=r,r}}class Gf{constructor(){this.x15_1=Yr.ja(128)}f1b(r){this.x15_1.he(r)}z1a(r){this.x15_1.ga(r)}b1b(r){this.x15_1.fa(r)}l1b(r){Il(this.x15_1,r)}y15(){this.x15_1.ke()}toString(){return this.x15_1.toString()}}var wl;function je(){return wl===o&&new Wy,wl}function H6(n,r){n=n===o?je():n;var e=new Yy(n);r(e);var t=e.h17();return new Zy(t,e.e17_1)}function G6(n){if(D(n.zq(),hu()))return or;var r=new qv(n.r15_1);n.zq().c15(r)}var Fd;function Ov(){if(Fd)return or;Fd=!0,kw=new Co("NONE",0),xw=new Co("ALL_JSON_OBJECTS",1),Sw=new Co("POLYMORPHIC",2)}var kw,xw,Sw;function zw(){return Ov(),kw}function K6(){return Ov(),xw}function Ew(){return Ov(),Sw}function W6(){return Se(),Iw}var Iw,Pv,Kf;function Or(n){Se();var r=n instanceof er?n:null,e;return r==null?Nv(n,"JsonObject"):e=r,e}function zn(n){return Se(),n==null?lo():new gt(n,!0)}function ws(n){Se();var r=n instanceof dn?n:null,e;return r==null?Nv(n,"JsonArray"):e=r,e}var bl;function lo(){return bl===o&&new be,bl}function Un(n){Se();var r;return n instanceof be?r=null:r=n.g18(),r}function On(n){Se();var r=n instanceof vr?n:null,e;return r==null?Nv(n,"JsonPrimitive"):e=r,e}function Y6(n){Se();var r;try{r=fi(n)}catch(t){var e;if(t instanceof Ur)e=null;else throw t;r=e}return r}function Z6(n){Se();var r;try{r=fi(n)}catch(l){var e;if(l instanceof Ur)e=null;else throw l;r=e}var t=r,a;if(t==null)return null;a=t;var i=a,s=Ge(-2147483648,2147483647);return bo(z(s,vi)?s:m(),i)?rn(i):null}function Bv(n){return Se(),HA(n.g18())}function Nv(n,r){throw Se(),T.v("Element "+w(Rr(n))+" is not a "+r)}function fi(n){return Se(),Kv(je(),n.g18()).q18()}function V6(n){Se();var r=n.g18();return Lo(r)}function X6(n){return Se(),Lo(n.g18())}var $d;function Se(){$d||($d=!0,Iw=to("kotlinx.serialization.json.JsonUnquotedLiteral",Os()))}function kl(n,r,e){return n.s18(r,zn(e))}function Q6(n){return n.jp("JsonPrimitive",fs(rA)),n.jp("JsonNull",fs(nA)),n.jp("JsonLiteral",fs(eA)),n.jp("JsonObject",fs(tA)),n.jp("JsonArray",fs(aA)),or}function rA(){return Uv().v18_1}function nA(){return Rv().w18_1}function eA(){return Cw().x18_1}function tA(){return _u().y18_1}function aA(){return Dv().z18_1}var Wf;function mt(){return Wf===o&&new tw,Wf}var Yf;function Uv(){return Yf===o&&new aw,Yf}var Zf;function iA(){return Zf===o&&new iw,Zf}var Vf;function Dv(){return Vf===o&&new sw,Vf}var Xf;function sA(){return Xf===o&&new ow,Xf}var Qf;function _u(){return Qf===o&&new lw,Qf}var rc;function Rv(){return rc===o&&new uw,rc}function fs(n){return new io(n)}var nc;function Cw(){return nc===o&&new fw,nc}function Wi(n){oA(n)}function gu(n){var r=z(n,du)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+w(Rr(n))));return e=r,e}function Lv(n){gu(n)}function oA(n){var r=z(n,Iv)?n:null,e;if(r==null)throw mr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+w(Rr(n))));return e=r,e}function nt(n){var r=n.y19_1,e=Ba;return Da("original",1,e,lA(),null),r.l2()}function lA(){return Fe(n=>nt(n),1,0,5)}function uA(n,r){return r.r15_1.m17_1?new cw(n,r):new oo(n)}function fA(n,r,e){return n.x1b_1=!r.wo(e)&&r.vo(e).oo(),n.x1b_1}function cA(n){return Fe((r,e)=>{var t=n;return fA(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===o?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+w(Ln(n,e,t))}var a=r-30|0,i=r+30|0,s=a<=0?"":".....",l=i>=C(n)?"":".....",u=ln(a,0),f=Bt(i,C(n));return s+w(Ln(n,u,f))+l}function Kr(n,r,e,t,a){return Fv(n,r,e,t,a)}function Mv(n,r){return r=r===o?null:r,Ur.p19(Fv(-1,n,null,r,null),n,-1,null,null,r)}function Ha(n,r){r=r===o?"object":r,n.a1c("Trailing comma before the end of JSON "+r,n.i16_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Jd(n,r){n.b1c($v(r,null),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Aw(n){return so.q1a("Value of type '"+n.mo()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.no().toString()+"'"),n.mo(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Hd(n,r){return r=r===o?null:r,so.q1a($v(n,r),o,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Gd(n,r){return $v(n,r)}function Fv(n,r,e,t,a){var i=Yr.f();return n>=0&&i.fa("Unexpected JSON token at offset "+n+": "),i.fa(r),e==null||_t(e)||(i.fa(" at path: "),i.fa(e)),t==null||_t(t)||i.fa(`
`+t),a!=null&&(i.fa(`
JSON input: `),i.fa(a)),i.toString()}function $v(n,r){return"Unexpected special floating-point value "+w(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function vA(n,r,e,t,a,i){var s;n.h16_1.z17_1?s=w(Jr(i,e)):s=null;var l=s;return Ur.p19(Fv(e,r,t,a,l),r,e,t,l,a)}function hA(n,r){var e;return r==null||_t(r)?e="":e=`
`+r,n+e}function dA(){return Pe(),qw}var qw;function pA(){return Pe(),Tw}var Tw;function Jv(n,r){Pe();var e;if(r.r15_1.j17_1)e=!0;else{var t=n.ro(),a;r:{var i;if(z(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(l instanceof Xy){a=!0;break r}}a=!1}e=a}return e}function mu(n,r,e){if(Pe(),jw(r,n)){var t=e.toLowerCase();return p1(n,r,t)}var a=yu(n,r);if(a!=null)return p1(n,r,e);var i=n.to(e);return i!==-3||!r.r15_1.t17_1?i:p1(n,r,e)}function _A(n,r,e){Pe();var t=yu(n,r);return t==null?n.so(e):Ow(n,r,t)[e]}function gA(n,r){Pe();var e=yu(n,r);return e==null?GC(n):rg(Ow(n,r,e))}function jw(n,r){return Pe(),n.r15_1.v17_1&&D(r.no(),Ja())}function p1(n,r,e){Pe();var t=mA(r,n).o2(e);return t??-3}function yu(n,r){return Pe(),D(n.no(),cu())?r.r15_1.u17_1:null}function Ow(n,r,e){Pe();var t=Gw(r),a=pA();return t.d1c(n,a,wA(n,e))}function mA(n,r){Pe();var e=Gw(n),t=dA();return e.d1c(r,t,bA(r,n))}function yA(n,r){Pe();var e=cr.t4(),t=jw(r,n),a=yu(n,r),i=0,s=n.qo();if(i<s)do{var l=i;i=i+1|0;for(var u=n.uo(l),f=q.m(),c=u.x();c.y();){var v=c.z();v instanceof Qy&&f.n(v)}var h=qc(f),d=h==null?null:h.e1c_1;if(d!=null)for(var p=0,g=d.length;p<g;){var y=d[p];p=p+1|0;var x;t?x=y.toLowerCase():x=y,Kd(e,n,x,l)}var k;t?k=n.so(l).toLowerCase():a!=null?k=a.f1c(n,l,n.so(l)):k=null;var S=k;S==null||Kd(e,n,S,l)}while(i<s);var E;return e.d1()?E=Ar():E=e,E}function wA(n,r){return()=>{for(var e=Pn.i1(),t=0,a=n.qo(),i=Array(a);t<a;){var s=t,l=n.so(s),u=r.f1c(n,s,l);if(!e.n(u))throw so.q1a("The transformed name '"+u+"' for property "+l+" already exists "+("in "+w(n)),n.mo());i[s]=u,t=t+1|0}return i}}function bA(n,r){return()=>yA(n,r)}function Kd(n,r,e,t){var a=D(r.no(),Ja())?"enum value":"property";if((z(n,xn)?n:m()).m2(e))throw Mv("The suggested name '"+e+"' for "+a+" "+r.so(t)+" is already one of the names for "+a+" "+(r.so(qe(n,e))+" in "+w(r)));n.s2(e,t)}var Wd;function Pe(){Wd||(Wd=!0,qw=new Ai,Tw=new Ai)}var ec,tc;function Yd(n){var r=ao(n.k1c_1,2);n.i1c_1=jg(n.i1c_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var a=t,i=n.j1c_1,s=i.length,l=i;$2(l,a,0,0,s),n.j1c_1=a}function kA(n,r,e){var t=r.no(),a;if(t instanceof $i?a=!0:a=D(t,Ny()),a)throw T.v("Serializer for "+e.uc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.r1c_1||!n.s1c_1)return or;var i,s;if(D(t,eo())||D(t,vu())?s=!0:s=t instanceof Xn,s?i=!0:i=t instanceof iu,i)throw T.v("Serializer for "+e.uc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function xA(n,r,e,t){var a=wu(),i=AA().c1(),s=Array(i),l=wi.c1d(r,n,a,s);l.bs(e,t)}function SA(n){var r=n.d1d_1.i1d(6);n.d1d_1.j1d()===4&&n.d1d_1.b1c("Unexpected leading comma");var e=cr.t4();r:for(;n.d1d_1.k1d();){var t=n.e1d_1?n.d1d_1.m1d():n.d1d_1.l1d();n.d1d_1.i1d(5);var a=n.n1d();e.s2(t,a),r=n.d1d_1.o1d();var i=r;if(i!==4){if(i===7)break r;n.d1d_1.b1c("Expected end of the object or comma")}}return r===6?n.d1d_1.i1d(7):r===4&&(n.f1d_1||Ha(n.d1d_1),n.d1d_1.i1d(7)),new er(e)}function*zA(n,r,e){var t=n.d1d_1.i1d(6);n.d1d_1.j1d()===4&&n.d1d_1.b1c("Unexpected leading comma");var a=cr.t4();r:for(;n.d1d_1.k1d();){var i=n.e1d_1?n.d1d_1.m1d():n.d1d_1.l1d();n.d1d_1.i1d(5);var s=yield*r.dl(or,e);a.s2(i,s),t=n.d1d_1.o1d();var l=t;if(l!==4){if(l===7)break r;n.d1d_1.b1c("Expected end of the object or comma")}}return t===6?n.d1d_1.i1d(7):t===4&&(n.f1d_1||Ha(n.d1d_1),n.d1d_1.i1d(7)),new er(a)}function Pw(n){var r=n.d1d_1.o1d();n.d1d_1.j1d()===4&&n.d1d_1.b1c("Unexpected leading comma");var e=q.m();r:for(;n.d1d_1.k1d();){var t=n.n1d();if(e.n(t),r=n.d1d_1.o1d(),r!==4){var a=n.d1d_1,i=r===9,s=a.i16_1;if(!i){var l="Expected end of the array or comma";a.b1c(l,s)}break r}}return r===8?n.d1d_1.i1d(9):r===4&&(n.f1d_1||Ha(n.d1d_1,"array"),n.d1d_1.i1d(9)),new dn(e)}function xl(n,r){var e;n.e1d_1||!r?e=n.d1d_1.m1d():e=n.d1d_1.l1d();var t=e;return!r&&t==="null"?lo():new gt(t,r)}function EA(n){return WE(new L_(IA(n)),or)}function IA(n){return Fe((r,e,t)=>y2(t,function*(a){var i=n.d1d_1.j1d(),s;if(i===1)s=xl(n,!0);else if(i===0)s=xl(n,!1);else if(i===6){var l=n;l.h1d_1=l.h1d_1+1|0,l.h1d_1>=l.g1d_1&&Bs(l.g1d_1);var u=yield*zA(n,r,a);l.h1d_1=l.h1d_1-1|0,s=u}else if(i===8){var f=n;f.h1d_1=f.h1d_1+1|0,f.h1d_1>=f.g1d_1&&Bs(f.g1d_1);var c=Pw(n);f.h1d_1=f.h1d_1-1|0,s=c}else n.d1d_1.b1c("Can't begin reading element, unexpected token");return s}),2)}function Bs(n){throw Mv("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var Zd;function Yi(){if(Zd)return or;Zd=!0,Bw=new cs("OBJ",0,123,125),Nw=new cs("LIST",1,91,93),Uw=new cs("MAP",2,123,125),Dw=new cs("POLY_OBJ",3,91,93)}var Bw,Nw,Uw,Dw;function CA(){return Yi(),[wu(),ac(),zl(),Lw()]}function AA(){return Yi(),_1==null&&(_1=Lz(CA())),_1}var _1;function Rw(n,r){var e=r.no(),t;if(e instanceof $i)t=Lw();else if(D(e,eo()))t=ac();else if(D(e,vu())){var a=Sl(r.vo(0),n.zq()),i=a.no(),s,l;if(i instanceof Xn?l=!0:l=D(i,Ja()),l)s=zl();else if(n.r15_1.l17_1)s=ac();else throw Aw(a);t=s}else t=wu();return t}function Sl(n,r){var e;if(D(n.no(),Ny())){var t=kC(r,n),a=t==null?null:Sl(t,r);e=a??n}else n.po()?e=Sl(n.vo(0),r):e=n;return e}function wu(){return Yi(),Bw}function ac(){return Yi(),Nw}function zl(){return Yi(),Uw}function Lw(){return Yi(),Dw}function El(n,r){for(var e=n.ro().x();e.y();){var t=e.z();if(t instanceof Vy)return t.t1d_1}return r.r15_1.r17_1}function qA(n,r,e,t){return jA(n,r,e,t)}function TA(n){if(n instanceof iu){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(r))}if(n instanceof Xn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw mr.o3(w(e))}if(n instanceof $i){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw mr.o3(w(t))}}function jA(n,r,e,t){if(gA(e.nn(),n).l1(t)){var a=r.nn().mo(),i=e.nn().mo(),s=n.r15_1.y17_1.equals(K6())&&a===i?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+a+"'",l="Class '"+i+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw so.q1a(l,i,u)}}function OA(n,r,e){return r==null?!1:r.w1d_1===e?(r.w1d_1=null,!0):!1}function PA(n,r){for(;n.br(r)!==-1;);}function BA(n){n.b16_1.j1d()===4&&n.b16_1.b1c("Unexpected leading comma")}function NA(n){var r=!1,e=!!(n.d16_1%2|0);e?n.d16_1!==-1&&(r=n.b16_1.y1d()):n.b16_1.x1d(58);var t;if(n.b16_1.k1d()){if(e)if(n.d16_1===-1){var a=n.b16_1,i=!r,s=a.i16_1;if(!i){var l="Unexpected leading comma";a.b1c(l,s)}}else{var u=n.b16_1,f=r,c=u.i16_1;if(!f){var v="Expected comma after the key-value pair";u.b1c(v,c)}}n.d16_1=n.d16_1+1|0,t=n.d16_1}else r&&!n.z15_1.r15_1.w17_1&&Ha(n.b16_1),t=-1;return t}function UA(n,r,e){var t=n.z15_1,a;r:{var i=r.wo(e),s=r.vo(e),l;if(i&&!s.oo()?l=n.b16_1.z1d(!0):l=!1,l){a=!0;break r}if(D(s.no(),Ja())){var u;if(s.oo()?u=n.b16_1.z1d(!1):u=!1,u){a=!1;break r}var f=n.b16_1.a1e(n.f16_1.k17_1),c;if(f==null){a=!1;break r}else c=f;var v=c,h=mu(s,t,v),d=!t.r15_1.n17_1&&s.oo();if(h===-3&&(i||d)){n.b16_1.l1d(),a=!0;break r}}a=!1}return a}function DA(n,r){for(var e=n.b16_1.y1d();n.b16_1.k1d();){e=!1;var t=MA(n);n.b16_1.x1d(58);var a=mu(r,n.z15_1,t),i;if(a!==-3){var s;if(n.f16_1.p17_1&&UA(n,r,a))e=n.b16_1.y1d(),s=!1;else{var l=n.g16_1;return l==null||l.y1b(a),a}i=s}else i=!0;var u=i;u&&(e=RA(n,r,t))}e&&!n.z15_1.r15_1.w17_1&&Ha(n.b16_1);var f=n.g16_1,c=f==null?null:f.z1b();return c??-1}function RA(n,r,e){return Jv(r,n.z15_1)||OA(n,n.e16_1,e)?n.b16_1.c1e(n.f16_1.k17_1):(n.b16_1.j16_1.p1c(),n.b16_1.b1e(e)),n.b16_1.y1d()}function LA(n){var r=n.b16_1.y1d(),e;return n.b16_1.k1d()?(n.d16_1!==-1&&!r&&n.b16_1.b1c("Expected end of the array or comma"),n.d16_1=n.d16_1+1|0,e=n.d16_1):(r&&!n.z15_1.r15_1.w17_1&&Ha(n.b16_1,"array"),e=-1),e}function MA(n){var r;return n.f16_1.k17_1?r=n.b16_1.e1e():r=n.b16_1.d1e(),r}function FA(){return Gv(),Mw}var Mw;function $A(n,r,e){n.t1c_1.v1a(),n.pr(r),n.t1c_1.y1a(58),n.t1c_1.x1a(),n.pr(e)}function Hv(n){return Gv(),n.po()&&FA().l1(n)}function JA(n){return Gv(),n.po()&&D(n,W6())}var Vd;function Gv(){Vd||(Vd=!0,Mw=ga([pv(nu()).nn(),uu(Zs()).nn(),_v(ru()).nn(),gv(eu()).nn()]))}function g1(){return bu(),Fw}var Fw;function yo(n){bu();var r=n&15,e;if(r<10){var t=48,a=Y(t);e=it(r+a|0)}else{var i=r-10|0,s=97,l=Y(s);e=it(i+l|0)}return e}function Il(n,r){bu(),n.ga(34);var e=0,t=0,a=r.length;if(t<a)do{var i=t;t=t+1|0;var s=G(r,i),l=Y(s);l<g1().length&&g1()[l]!=null&&(n.ee(r,e,i),n.fa(g1()[l]),e=i+1|0)}while(t<a);e!==0?n.ee(r,e,r.length):n.fa(r),n.ga(34)}function HA(n){return bu(),fd(n,"true",!0)?!0:fd(n,"false",!0)?!1:null}var Xd;function bu(){if(!Xd){Xd=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=yo(e>>12),a=yo(e>>8),i=yo(e>>4),s=yo(e);n[e]="\\u"+xr(t)+xr(a)+xr(i)+xr(s)}while(r<=31);var l=34;n[Y(l)]='\\"';var u=92;n[Y(u)]="\\\\";var f=9;n[Y(f)]="\\t";var c=8;n[Y(c)]="\\b";var v=10;n[Y(v)]="\\n";var h=13;n[Y(h)]="\\r",n[12]="\\f",Fw=n;var d=new Int8Array(128),p=0;if(p<=31)do{var g=p;p=p+1|0,d[g]=1}while(p<=31);var y=34,x=Y(y),k=34,S=Y(k);d[x]=Jn(S);var E=92,I=Y(E),A=92,j=Y(A);d[I]=Jn(j);var P=9,$=Y(P),B=116,N=Y(B);d[$]=Jn(N);var H=8,L=Y(H),J=98,R=Y(J);d[L]=Jn(R);var V=10,K=Y(V),nr=110,W=Y(nr);d[K]=Jn(W);var tr=13,Q=Y(tr),ur=114,X=Y(ur);d[Q]=Jn(X);var Sr=102,kr=Y(Sr);d[12]=Jn(kr)}}function $w(n,r,e,t){var a=t.nn();return new Ki(n,e,a,r,a).lq(t)}function Nn(n,r,e,t){var a=Te(e,"i")?"an "+e:"a "+e,i="Failed to parse literal '"+r.toString()+"' as "+a+" value",s=n.s1e(t),l;if(n.b18().r15_1.z17_1){var u=w(n.t1e());l=w(Jr(u))}else l=null;var f=l;throw Ur.p19(Kr(-1,i,s,null,f),i,-1,s,f,null)}function GA(n,r,e,t){var a=n.b18(),i;r:{var s=r.wo(e),l=r.vo(e),u;if(s&&!l.oo()?u=t instanceof be:u=!1,u){i=!0;break r}if(D(l.no(),Ja())){var f;if(l.oo()?f=t instanceof be:f=!1,f){i=!1;break r}var c=t instanceof vr?t:null,v=c==null?null:Un(c),h;if(v==null){i=!1;break r}else h=v;var d=h,p=mu(l,a,d),g=!a.r15_1.n17_1&&l.oo();if(p===-3&&(s||g)){i=!0;break r}}i=!1}return i}function KA(n,r){var e="Encountered an unknown key '"+r+"'",t=n.a14(),a="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",i;if(n.b18().r15_1.z17_1){var s=n.l2().toString();i=w(Jr(s))}else i=null;var l=i;throw Ur.p19(Kr(-1,e,t,a,l),e,-1,t,l,a)}function WA(n,r,e){return n.x1g(r,e),ZA(n,e+1|0)}function m1(n,r,e){n.x1g(r,e);var t=n.l16_1.toString();return n.l16_1.je(0),t}function Qd(n){var r=fn(n.k16_1);return n.k16_1=null,r}function YA(n){return rr(n.y1g(),n.i16_1-1|0)!==34}function ZA(n,r){var e=r;e=n.z1g(e),e===-1&&n.b1c("Expected escape sequence to continue, got EOF");var t=n.y1g(),a=e;e=a+1|0;var i=rr(t,a);if(i===117)return Jw(n,n.y1g(),e);var s=Y(i),l=QA(s);return l===0&&n.b1c("Invalid escaped char '"+xr(i)+"'"),n.l16_1.ga(l),e}function Jw(n,r,e){return(e+4|0)>=C(r)?(n.i16_1=e,n.a1h(),(n.i16_1+4|0)>=C(r)&&n.b1c("Unexpected EOF during unicode escape"),Jw(n,r,n.i16_1)):(n.l16_1.ga(it((((wo(n,r,e)<<12)+(wo(n,r,e+1|0)<<8)|0)+(wo(n,r,e+2|0)<<4)|0)+wo(n,r,e+3|0)|0)),e+4|0)}function wo(n,r,e){var t=rr(r,e),a;if(48<=t&&t<=57){var i=Y(t),s=48;a=i-Y(s)|0}else if(97<=t&&t<=102){var l=Y(t),u=97;a=(l-Y(u)|0)+10|0}else if(65<=t&&t<=70){var f=Y(t),c=65;a=(f-Y(c)|0)+10|0}else n.b1c("Invalid toHexChar char '"+xr(t)+"' in unicode escape");return a}function VA(n,r){var e=n.z1g(r);(e>=C(n.y1g())||e===-1)&&n.b1c("EOF");var t=n.y1g(),a=e;e=a+1|0;var i=rr(t,a),s=Y(i)|32,l,u=116;if(s===Y(u))rp(n,"rue",e),l=!0;else{var f=102;s===Y(f)?(rp(n,"alse",e),l=!1):n.b1c("Expected valid boolean literal prefix, but had '"+n.m1d()+"'")}return l}function rp(n,r,e){(C(n.y1g())-e|0)<r.length&&n.b1c("Unexpected end of boolean literal");var t=0,a=C(r)-1|0;if(t<=a)do{var i=t;t=t+1|0;var s=G(r,i),l=rr(n.y1g(),e+i|0),u=Y(s);u!==(Y(l)|32)&&n.b1c("Expected valid boolean literal prefix, but had '"+n.m1d()+"'")}while(t<=a);n.i16_1=e+r.length|0}function XA(n,r){var e;switch(r){case!1:var t=-se(n);e=Math.pow(10,t);break;case!0:var a=se(n);e=Math.pow(10,a);break;default:Ms();break}return e}function tt(n){var r;if(Y(n)<126){var e=Hw().h1h_1;r=e[Y(n)]}else r=0;return r}function Cl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function QA(n){return n<117?Hw().g1h_1[n]:0}function rq(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,da(n,e,117)}while(r<=31);da(n,8,98),da(n,9,116),da(n,10,110),da(n,12,102),da(n,13,114),y1(n,47,47),y1(n,34,34),y1(n,92,92)}function nq(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,oi(n,e,127)}while(r<=32);oi(n,9,3),oi(n,10,3),oi(n,13,3),oi(n,32,3),It(n,44,4),It(n,58,5),It(n,123,6),It(n,125,7),It(n,91,8),It(n,93,9),It(n,34,1),It(n,92,2)}function da(n,r,e){if(e!==117){var t=Y(e);n.g1h_1[t]=it(r)}}function y1(n,r,e){var t=Y(r);return da(n,t,e)}function oi(n,r,e){n.h1h_1[r]=e}function It(n,r,e){var t=Y(r);return oi(n,t,e)}var ic;function Hw(){return ic===o&&new ww,ic}function Kv(n,r){return n.r15_1.x17_1?new bw(r,n.r15_1):new jv(r,n.r15_1)}function Gw(n){return n.t15_1}function np(n){return ks.o7(n)}_(zv,"Json");U(Wy,"Default");_(Yy,"JsonBuilder");_(Zy,"JsonImpl");_(Vy,"JsonClassDiscriminator");_(Xy,"JsonIgnoreUnknownKeys");_(Qy,"JsonNames");_(Ev,"JsonConfiguration");_(Co,"ClassDiscriminatorMode");Pr(du,"JsonDecoder",o,o,[su,ou]);nn(rw);_(st,"JsonElement",o,o,o,o,o,{0:mt});nn($6);_(vr,"JsonPrimitive",o,o,o,o,o,{0:Uv});nn(J6);_(dn,"JsonArray",o,o,[En],o,o,{0:Dv});nn(nw);_(er,"JsonObject",o,o,[xn],o,o,{0:_u});U(be,"JsonNull",o,o,o,o,o,{0:Rv});_(gt,"JsonLiteral");_(qt,"JsonObjectBuilder");_(ew,"JsonArrayBuilder");U(tw,"JsonElementSerializer",o,o,[hr]);U(aw,"JsonPrimitiveSerializer",o,o,[hr]);U(iw,"JsonArrayDescriptor",o,o,[ke]);U(sw,"JsonArraySerializer",o,o,[hr]);U(ow,"JsonObjectDescriptor",o,o,[ke]);U(lw,"JsonObjectSerializer",o,o,[hr]);U(uw,"JsonNullSerializer",o,o,[hr]);U(fw,"JsonLiteralSerializer",o,o,[hr]);Lr(io).oo=La;Lr(io).po=Ma;Lr(io).ro=Vs;_(io,o,o,o,[ke]);Pr(Iv,"JsonEncoder",o,o,[fv]);_(Cv,"JsonException");_(Ur,"JsonDecodingException");_(so,"JsonEncodingException");_(oo,"Composer");_(Ff,"ComposerForUnsignedNumbers");_($f,"ComposerForUnquotedLiterals");_(cw,"ComposerWithPrettyPrint");_(Av,"JsonElementMarker");U(vw,"Tombstone");U(hw,"RedactedKey");_(dw,"JsonPath");Lr(qv).n15=eC;_(qv,"JsonSerializersModuleValidator",o,o,[Ay]);_(pw,"JsonTreeReader",o,o,o,[1]);_(cs,"LexerMode");_(Ai,"Key",Ai);_(Jf,"DescriptorSchemaCache",Jf);_(_w,"DiscriminatorHolder");_(Ps,"StreamingJsonDecoder",o,o,[du]);_(Tv,"JsonDecoderForUnsignedTypes");_(wi,"StreamingJsonEncoder",o,o,[Iv]);_(pu,"AbstractJsonTreeDecoder",o,o,[du]);_(Ki,"JsonTreeDecoder");_(Hf,"JsonTreeListDecoder");_(gw,"JsonPrimitiveDecoder");_(mw,"JsonTreeMapDecoder");_(yw,"AbstractJsonLexer");U(ww,"CharMappings");_(jv,"StringJsonLexer");_(bw,"StringJsonLexerWithComments");_(Gf,"StringJsonWriter",Gf);Pv=new rw;Kf=new nw;ec=new vw;tc=new hw;var si=Math.imul;class Kw{constructor(r){this.e1i_1=r}jg(r,e){return this.e1i_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.e1i_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class hn{constructor(r,e){e=e===o?null:e,this.f1i_1=r,this.g1i_1=e}}class Ww{constructor(r){this.q1i_1=r}jg(r,e){return this.q1i_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.q1i_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class Yw{constructor(r){this.w1i_1=r}jg(r,e){return this.w1i_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.w1i_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class sc{constructor(r,e,t){this.m1k_1=r,this.n1k_1=e,this.o1k_1=t}}class Zw{constructor(r,e){this.e1l_1=r,this.f1l_1=e}}class Vw{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g){h=h===o?fr():h,d=d===o?0:d,p=p===o?!1:p,g=g===o?"":g,this.g1l_1=r,this.h1l_1=e,this.i1l_1=t,this.j1l_1=a,this.k1l_1=i,this.l1l_1=s,this.m1l_1=l,this.n1l_1=u,this.o1l_1=f,this.p1l_1=c,this.q1l_1=v,this.r1l_1=h,this.s1l_1=d,this.t1l_1=p,this.u1l_1=g}}class Xw{constructor(r,e,t){this.v1l_1=r,this.w1l_1=e,this.x1l_1=t}}class Qw{constructor(r){this.y1l_1=r}jg(r,e){return this.y1l_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.y1l_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class rb{constructor(r){this.z1l_1=r}jg(r,e){return this.z1l_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.z1l_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class nb{constructor(r){this.a1m_1=r}jg(r,e){return this.a1m_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.a1m_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class eb{constructor(r){this.b1m_1=r}jg(r,e){return this.b1m_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.b1m_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class tb{constructor(r){this.h1m_1=r}u4(){return this.h1m_1.x()}i1m(r){return Kn(r.f1l_1)}v4(r){return this.i1m(r)}}class ab{constructor(r,e,t,a,i,s,l,u,f,c,v,h,d,p,g){e=e===o?fr():e,t=t===o?null:t,a=a===o?fr():a,i=i===o?fr():i,s=s===o?fr():s,l=l===o?fr():l,u=u===o?fr():u,f=f===o?null:f,c=c===o?null:c,v=v===o?fr():v,h=h===o?fr():h,d=d===o?null:d,p=p===o?null:p,g=g===o?null:g,this.z1i_1=e,this.a1j_1=t,this.b1j_1=i,this.c1j_1=s,this.d1j_1=l,this.e1j_1=f,this.f1j_1=c,this.g1j_1=v,this.h1j_1=h,this.i1j_1=d,this.j1j_1=p,this.k1j_1=g,this.l1j_1=fr(),this.m1j_1=u;for(var y=this,x=this.e1j_1,k=x==null?null:x.f1k_1,S=this.i1j_1,E=_e([this.a1j_1,k,S==null?null:S.i1k_1]),I=q.f1(Mr(E,10)),A=E.x();A.y();){var j=A.z(),P=je().w15(j);I.n(P)}y.n1j_1=I;for(var $=this,B=q.m(),N=u.x();N.y();){var H=N.z();H.c1i_1||B.n(H)}$.o1j_1=B,this.p1j_1=Ar();var L=this,J;if(!this.o1j_1.d1())J=!0;else{var R;r:{var V;if(z(u,Z)?V=u.d1():V=!1,V){R=!1;break r}for(var K=u.x();K.y();){var nr=K.z();if(nr.d1i_1!=null){R=!0;break r}}R=!1}J=R}L.q1j_1=J,this.r1j_1=dt(a);for(var W=this,tr=q.f1(Mr(r,10)),Q=r.x();Q.y();){var ur=Q.z(),X="/"+Am(ur,ji([47]));tr.n(X)}W.s1j_1=tr,this.t1j_1=Ar(),this.u1j_1=!1,this.v1j_1=!1;var Sr=this;Sr.w1j_1=Pn.i1();var kr=this;kr.x1j_1=q.m(),this.y1j_1=Ar()}j1m(r,e,t){this.y1j_1=e,this.l1j_1=t;var a=Or(je().w15(r)),i=Gq(this,Hq(this,Jq(this,a))),s=ir(i,"components"),l=s==null?null:ir(s,"schemas"),u=l??Ar();this.p1j_1=u,this.t1j_1=cT(this,i,u);var f=this,c;if(Ol(i))c=!0;else{var v=this.n1j_1,h;r:{var d;if(z(v,Z)?d=v.d1():d=!1,d){h=!1;break r}for(var p=v.x();p.y();){var g=p.z();if(Ol(g)){h=!0;break r}}h=!1}c=h}f.u1j_1=c;var y=this,x;if(jl(i,qo()))x=!0;else{var k=this.n1j_1,S;r:{var E;if(z(k,Z)?E=k.d1():E=!1,E){S=!1;break r}for(var I=k.x();I.y();){var A=I.z();if(jl(A,qo())){S=!0;break r}}S=!1}x=S}y.v1j_1=x;var j=Dn(this.u1j_1?Sb().q2():fr(),this.v1j_1?qo().q2():fr());this.w1j_1.v2(),this.x1j_1.v2();for(var P=aT(this,u)+Zq(this,u)+Qq(this,u)+rT(this,u),$=u.p2(),B=q.f1(Mr($,10)),N=$.x();N.y();){var H=N.z(),L=Kn(H);B.n(L)}for(var J=B,R=ir(i,"paths"),V=(R??Ar()).p2(),K=q.f1(Mr(V,10)),nr=V.x();nr.y();){var W=nr.z(),tr=$b(this,W);K.n(tr)}var Q=Dn(Dn(J,K),xu());if(!(this.d1j_1.d1()||!Q.l1("ErrorCode"))){var ur="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw mr.o3(w(ur))}if(!(this.e1j_1==null||!Q.l1("CurrentUser")&&!Q.l1("currentUser"))){var X="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(X))}if(!(this.g1j_1.d1()||this.e1j_1!=null)){var Sr="permissions needs currentUser, which says who the permissions belong to.";throw mr.o3(w(Sr))}if(!(this.g1j_1.d1()||!Q.l1("Permission")&&!Q.l1("can"))){var kr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(kr))}if(!(this.i1j_1==null||!Q.l1("UserPreferences")&&!Q.l1("preferences"))){var dr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw mr.o3(w(dr))}if(!(this.h1j_1.d1()||this.e1j_1!=null)){var zr="guards needs currentUser, which says who is signed in.";throw mr.o3(w(zr))}var Er;if(this.h1j_1.d1())Er=!0;else{var Br=sp(),Nr;r:{var pr;if(z(Br,Z)?pr=Br.d1():pr=!1,pr){Nr=!0;break r}for(var Gr=Br.x();Gr.y();){var tn=Gr.z();if(Q.l1(tn)){Nr=!1;break r}}Nr=!0}Er=Nr}if(!Er){var Zr="guards exports "+M(sp())+", and the generated client already uses one of the names.";throw mr.o3(w(Zr))}if(!(this.o1j_1.d1()||!Q.l1("cookies"))){var _r="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw mr.o3(w(_r))}if(!(fb(this.m1j_1).d1()||!Q.l1("cookieConsent"))){var Fr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw mr.o3(w(Fr))}for(var Vr=this.o1j_1,Xr=cr.t4(),$r=Vr.x();$r.y();){var an=$r.z(),_n=oc(an.u1h_1),wn=Xr.o2(_n),gn;if(wn==null){var Qn=q.m();Xr.s2(_n,Qn),gn=Qn}else gn=wn;var re=gn;re.n(an)}var ne=Xr.q2(),ve;r:{for(var ze=ne.x();ze.y();){var Ee=ze.z();if(Ee.c1()>1){ve=Ee;break r}}ve=null}var Ne=ve;if(Ne!=null){var Ze="The cookies "+M(Ne," and ",o,o,o,o,CT)+" would both be called "+oc(Ac(Ne).u1h_1)+" in TypeScript.";throw mr.o3(w(Ze))}var kt=this.c1j_1,ee;r:{for(var qn=kt.x();qn.y();){var Bn=qn.z();if(Q.l1(Bn.x1i_1)){ee=Bn;break r}}ee=null}var bn=ee;if(bn!=null){var Jt="constants("+bn.x1i_1+") would be exported as '"+bn.x1i_1+"', which the generated client already uses. Rename the object.";throw mr.o3(w(Jt))}var he=De("client.ts")+Vq(this),Ve=this.j1j_1,xt;Ve==null?xt=null:xt=`
reportErrors('`+Ve+`');
`;var Ht=xt,Vi=he+(Ht??""),Gt=this.k1j_1,Xe;Gt==null?Xe=null:Xe=`
`+Gt+`
`;for(var de=Xe,Kt=O("client.ts",Vi+(de??"")),Ga=O("form.ts",De("form.ts")+gT(this)),Ka=O("form-state.svelte.ts",De("form-state.svelte.ts")),Wt=O("pending-writes.svelte.ts",De("pending-writes.svelte.ts")),Wa=this.d1j_1.d1()&&this.g1j_1.d1()?P:pa(P,`export {};
`),Ue=xa(this.w1j_1),Yt=O("types.ts",Wa+M(Ue,"",o,o,o,o,AT)+_T(this)+Fb(this,"Permission",this.g1j_1)),Zt=ir(i,"paths"),Vt=Zt??Ar(),Ya=Oo(u.p2(),"LucideIcon"),Xt=this.t1j_1.q2(),St=q.f1(Mr(Xt,10)),Qt=Xt.x();Qt.y();){var Za=Qt.z(),Xi=Za.m1k_1;St.n(Xi)}var Va=[Kt,Ga,Ka,Wt,Yt,O("services.ts",hT(this,Vt,q1(q1(Ya,St),j)))],Qe;t.d1()?Qe=[]:Qe=[O("loads.ts",yq(t,this.x1j_1))];var Qi=Qe,rs=De("index.ts")+(this.c1j_1.d1()?"":`export * from './constants.js';
`)+(t.d1()?"":"export * from './"+pa("loads.ts",".ts")+`.js';
`)+(this.q1j_1?`export * from './cookies.js';
`:"")+(this.e1j_1!=null?"export * from './"+pa("current-user.svelte.ts",".ts")+`.js';
`:""),ra;this.h1j_1.d1()?ra="":ra="export * from './"+pa("guards.ts",".ts")+`.js';
`;var uo=[O("index.ts",rs+ra+(this.i1j_1!=null?"export * from './"+pa("preferences.svelte.ts",".ts")+`.js';
`:""))],ns;this.c1j_1.d1()?ns=[]:ns=[O("constants.ts",qq(this.c1j_1))];var fo=ns,es;this.q1j_1?es=[O("cookies.ts",sq(this.m1j_1))]:es=[];var Cu=es,ts=this.e1j_1,zt;ts==null?zt=null:zt=[O("current-user.svelte.ts",eT(this,ts))];var Xa=zt,Qa;Xa==null?Qa=[]:Qa=Xa;var Au=Qa,ri;this.h1j_1.d1()?ri=[]:ri=[O("guards.ts",Xq(this))];var co=ri,vo=this.i1j_1,ni;vo==null?ni=null:ni=[O("preferences.svelte.ts",nT(this,vo))];var ei=ni,as;return ei==null?as=[]:as=ei,$q(this,b2([Va,Qi,uo,fo,Cu,Au,co,as,[O("openapi.json",bb().u15(Pv.d18(),i)+`
`)]]))}k1m(r,e,t,a){return e=e===o?Ar():e,t=t===o?fr():t,a===o?this.j1m(r,e,t):a.j1m.call(this,r,e,t)}}class Ao extends ae{constructor(r,e,t){super(r,e),this.e1m_1=t}y1g(){return De(this.e1m_1)}}class ku{constructor(r,e,t,a,i,s,l){a=a===o?fr():a,i=i===o?fr():i,s=s===o?0:s,l=l===o?!1:l,this.h1i_1=r,this.i1i_1=e,this.j1i_1=t,this.k1i_1=a,this.l1i_1=i,this.m1i_1=s,this.n1i_1=l}toString(){return"GeneratedOperation(name="+this.h1i_1+", method="+this.i1i_1+", path="+this.j1i_1+", pathParameters="+w(this.k1i_1)+", pathTypes="+w(this.l1i_1)+", optionalSlots="+this.m1i_1+", needsInput="+this.n1i_1+")"}hashCode(){var r=me(this.h1i_1);return r=si(r,31)+me(this.i1i_1)|0,r=si(r,31)+me(this.j1i_1)|0,r=si(r,31)+br(this.k1i_1)|0,r=si(r,31)+br(this.l1i_1)|0,r=si(r,31)+this.m1i_1|0,r=si(r,31)+Mc(this.n1i_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof ku)||this.h1i_1!==r.h1i_1||this.i1i_1!==r.i1i_1||this.j1i_1!==r.j1i_1||!D(this.k1i_1,r.k1i_1)||!D(this.l1i_1,r.l1i_1)||this.m1i_1!==r.m1i_1||this.n1i_1!==r.n1i_1)}}class ib{constructor(r){this.l1m_1=r}jg(r,e){return this.l1m_1(r,e)}compare(r,e){return this.jg(r,e)}g3(){return this.l1m_1}equals(r){var e;if(r!=null&&z(r,cn)){var t;r!=null&&z(r,yn)?t=D(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return br(this.g3())}}class sb{w1k(r){return"Must be at least "+pp(this,r)+"."}x1k(r){return"Must be at most "+pp(this,r)+"."}c1l(r,e){return"Must be "+(e?"greater than":"at least")+" "+Dt(r)+"."}d1l(r,e){return"Must be "+(e?"less than":"at most")+" "+Dt(r)+"."}y1k(r){return"Must match "+r+"."}}class et{constructor(r,e){this.f1m_1=r,this.g1m_1=e}}class li{constructor(r,e,t){this.z1k_1=r,this.a1l_1=e,this.b1l_1=t}}class ob{constructor(){dc=this,this.p1k_1=new li("email",jn(new et("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.q1k_1=new li("uri",jn(new et("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.r1k_1=new li("phone",jn(new et("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.s1k_1=new li("slug",jn(new et("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.t1k_1=new li("strong-password",en([new et("^[\\s\\S]{10,}$","at least 10 characters"),new et("[a-z]","a lowercase letter"),new et("[A-Z]","an uppercase letter"),new et("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.u1k_1=en([this.p1k_1,this.q1k_1,this.r1k_1,this.s1k_1,this.t1k_1])}v1k(r){var e=this.u1k_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(i.z1k_1===r){t=i;break r}}t=null}return t}}function eq(){return ce(),lb}var lb;function tq(){return ce(),ub}var ub;function pe(n){return ce(),"'"+ie(ie(ie(ie(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function oc(n){ce();var r=tq(),e=Am(n,ji([46,95,45])),t=r.gf(e,oq);return eq().bf(t)?t:pe(n)}function aq(n){ce();var r;switch(n.v1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=M(n.w1h_1," | ",o,o,o,o,lq);break;default:r="number";break}return r}function iq(n){ce();var r=aq(n),e=n.v1h_1==="string"||n.v1h_1==="enum",t="kind: "+pe(n.v1h_1),a;n.v1h_1==="enum"?a="values: ["+M(n.w1h_1,", ",o,o,o,o,uq)+"]":a=null;var i=a,s=n.x1h_1,l;s==null?l=null:l="default: "+(e?pe(s):s);var u=l,f=n.y1h_1,c;f==null?c=null:c="maxAge: "+f.toString();var v=c,h="path: "+pe(n.z1h_1),d="sameSite: "+pe(n.a1i_1),p="secure: "+n.b1i_1,g=n.d1i_1,y;g==null?y=null:y="category: "+pe(g);var x=_e([t,i,u,v,h,d,p,y]),k=n.x1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+oc(n.u1h_1)+": typedCookie"+k+"("+pe(n.u1h_1)+", { "+M(x,", ")+" })"}function fb(n){ce();for(var r=q.m(),e=n.x();e.y();){var t=e.z(),a=t.d1i_1;a==null||r.n(a)}return xa(ki(r))}function sq(n){ce();for(var r=q.m(),e=n.x();e.y();){var t=e.z();t.c1i_1||r.n(t)}var a=fq,i=new Kw(a),s=Mt(r,i),l=fb(n),u="consentStore",f;l.d1()?f=null:f=u;var c=f,v="typedCookie",h;s.d1()?h=null:h=v;for(var d=h,p=_e([c,d]),g=q.m(),y=s.x();y.y();){var x=y.z();x.d1i_1!=null&&g.n(x)}var k=g,S=M(k,", ",o,o,o,o,cq),E=Yr.f();return E.fa("import { "+M(p,", ")+` } from './client.js';
`),s.d1()||E.fa(`
export const cookies = {
`+M(s,`,
`,o,o,o,o,vq())+`
};
`),l.d1()||E.fa(`
export const cookieConsent = consentStore([`+M(l,", ",o,o,o,o,hq)+"] as const, ["+S+`]);
`),E.toString()}function oq(n){return ce(),n.hg().e1(1).toUpperCase()}function lq(n){return ce(),pe(n)}function uq(n){return ce(),pe(n)}function fq(n,r){ce();var e=n.u1h_1,t=r.u1h_1;return bt(e,t)}function cq(n){ce();var r=pe(n.u1h_1),e=pe(n.z1h_1),t=n.d1i_1,a=t??"";return"{ name: "+r+", path: "+e+", category: "+pe(a)+" }"}function vq(){return Fe(n=>iq(n),1,0,7,"cookieEntry")}function hq(n){return ce(),pe(n)}var ep;function ce(){ep||(ep=!0,lb=ge.af("[A-Za-z_$][A-Za-z0-9_$]*"),ub=ge.af("[._-]+([A-Za-z0-9])"))}function dq(){return Wv(),cb}var cb;function pq(){return Wv(),vb}var vb;function _q(n,r){Wv();var e=dq(),t=Yr.f(),a=0,i=C(n);if(a<i)do{var s=a;a=a+1|0;var l=rr(n,s);HS(l)&&t.ga(l)}while(a<i);var u=t.toString().toLowerCase(),f=e.o2(u),c;r==null?c=null:c=pq().o2(r);var v=c,h;if(v==null)h=f;else if(f==null)h=v;else{var d=v.f1i_1,p=d??f.f1i_1,g=v.g1i_1;h=new hn(p,g??f.g1i_1)}return h}var tp;function Wv(){if(!tp){tp=!0;for(var n=cr.t4(),r=en(["email","emailaddress","mail"]).x();r.y();){var e=r.z();n.s2(e,new hn("email","email"))}for(var t=en(["password","currentpassword"]).x();t.y();){var a=t.z();n.s2(a,new hn("current-password","password"))}for(var i=en(["newpassword","passwordrepeat","repeatpassword","confirmpassword","passwordconfirmation"]).x();i.y();){var s=i.z();n.s2(s,new hn("new-password","password"))}for(var l=en(["name","fullname","displayname"]).x();l.y();){var u=l.z();n.s2(u,new hn("name"))}for(var f=en(["givenname","firstname","forename"]).x();f.y();){var c=f.z();n.s2(c,new hn("given-name"))}for(var v=en(["familyname","lastname","surname"]).x();v.y();){var h=v.z();n.s2(h,new hn("family-name"))}for(var d=en(["username","login","loginname"]).x();d.y();){var p=d.z();n.s2(p,new hn("username"))}for(var g=en(["phone","phonenumber","tel","telephone","mobile","mobilephone"]).x();g.y();){var y=g.z();n.s2(y,new hn("tel","tel"))}for(var x=en(["street","streetaddress","address","addressline"]).x();x.y();){var k=x.z();n.s2(k,new hn("street-address"))}for(var S=en(["postalcode","postcode","zip","zipcode"]).x();S.y();){var E=S.z();n.s2(E,new hn("postal-code"))}for(var I=en(["city","town","locality"]).x();I.y();){var A=I.z();n.s2(A,new hn("address-level2"))}for(var j=en(["country","countryname"]).x();j.y();){var P=j.z();n.s2(P,new hn("country-name"))}for(var $=en(["organization","organisation","company"]).x();$.y();){var B=$.z();n.s2(B,new hn("organization"))}for(var N=en(["birthday","birthdate","dateofbirth"]).x();N.y();){var H=N.z();n.s2(H,new hn("bday"))}for(var L=en(["url","website","homepage"]).x();L.y();){var J=L.z();n.s2(J,new hn("url","url"))}for(var R=en(["onetimecode","otp","verificationcode"]).x();R.y();){var V=R.z();n.s2(V,new hn("one-time-code"))}cb=n.m6(),vb=Gs([O("email",new hn("email","email")),O("uri",new hn("url","url")),O("phone",new hn("tel","tel")),O("strong-password",new hn("new-password","password"))])}}function gq(){return Be(),hb}var hb;function mq(n){Be();var r=gq().ef(n);return Nc(Na(r,wq))}function lc(n){Be();for(var r=ge.af("[^A-Za-z0-9]+").nf(n,0),e=q.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}var i=e,s=M(i,"",o,o,o,o,bq),l;return C(s)===0?l="Home":l=s,"load"+l}function yq(n,r){Be();for(var e=ln(Mr(r,10),16),t=cr.na(e),a=r.x();a.y();){var i=a.z(),s=i.i1i_1+" "+i.j1i_1;t.s2(s,i)}for(var l=t,u=cr.t4(),f=n.x();f.y();){var c=f.z(),v=lc(c.o1i_1),h=u.o2(v),d;if(h==null){var p=q.m();u.s2(v,p),d=p}else d=h;var g=d;g.n(c)}var y=u.q2(),x;r:{for(var k=y.x();k.y();){var S=k.z();if(S.c1()>1){x=S;break r}}x=null}var E=x;if(E!=null){var I="The pages "+M(E," and ",o,o,o,o,kq)+" would both get the load "+lc(Ac(E).o1i_1)+".";throw mr.o3(w(I))}var A=xq,j=new Ww(A),P=Mt(n,j),$=M(P,`
`,o,o,o,o,Cq(l));return`import { inlinePageData } from './client.js';
import { apiWith } from './services.js';

`+$}function wq(n){return Be(),n.hg().e1(1)}function bq(n){Be();var r;if(C(n)>0){var e=G(n,0),t=Y1(e),a=Ye(n,1);r=xr(t)+a}else r=n;return r}function kq(n){return Be(),"'"+n.o1i_1+"'"}function xq(n,r){Be();var e=n.o1i_1,t=r.o1i_1;return bt(e,t)}function Sq(n){return Be(),"["+n+"]"}function zq(n){return Be(),n+": string"}function Eq(n){return Be(),"    "+n}function Iq(n){return Be(),"inline."+n}function Cq(n){return r=>{for(var e=mq(r.o1i_1),t=r.p1i_1,a=q.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=n.o2(s.v1i()),u;if(l==null){var f="pageLoad: '"+r.o1i_1+"' loads "+s.v1i()+", which is not part of the generated client. Only routes under the API prefixes can be loaded.";throw mr.o3(w(f))}else u=l;var c=u;if(c.n1i_1){var v="pageLoad: "+s.v1i()+" needs a body, query or header that a page load cannot fill. "+("Write the load of '"+r.o1i_1+"' yourself.");throw mr.o3(w(v))}for(var h=c.k1i_1,d=q.f1(Mr(h,10)),p=0,g=h.x();g.y();){var y=g.z(),x=p;p=x+1|0;var k=Bi(x),S=s.u1i_1.o2(y),E=S??y;if(!e.l1(E)){var I="pageLoad: "+s.v1i()+" needs the path parameter '"+y+"', and the page '"+r.o1i_1+"' has ",A;e.d1()?A="none":A=M(e,o,o,o,o,o,Sq);var j=I+A+('. Map it with params = mapOf("'+y+'" to "<page parameter>").');throw mr.o3(w(j))}var P="event.params."+E,$=zx(c.l1i_1,k)==="number"?"Number("+P+")":P;d.n($)}var B=d,N=c.m1i_1,H=q.f1(N),L=0;if(L<N)do{L=L+1|0;var J="undefined";H.n(J)}while(L<N);var R=Pt(Dn(B,H),"{ silent: true }"),V="        api."+c.h1i_1+"("+M(R)+")";a.n(V)}for(var K=a,nr=r.p1i_1,W=q.f1(Mr(nr,10)),tr=nr.x();tr.y();){var Q=tr.z(),ur=Q.r1i_1;W.n(ur)}var X=W,Sr;e.d1()?Sr="":Sr="; params: { "+M(e,"; ",o,o,o,o,zq)+" }";var kr=Sr,dr="export async function "+lc(r.o1i_1)+"(event: { fetch: typeof fetch; url: URL"+kr+` }) {
    const api = apiWith(event);
    const load = () =>
        Promise.all([
`,zr=dr+M(K,`,
`,o,o,o,o,Eq)+`
        ]);
    const inline = inlinePageData(event.url.pathname);
`+("    const ["+M(X)+`] = inline
`);return zr+("        ? ("+M(X,", ","[","]",o,o,Iq)+` as Awaited<ReturnType<typeof load>>)
`)+`        : await load();
`+("    return { "+M(X)+` };
`)+`}
`}}var ap;function Be(){ap||(ap=!0,hb=ge.af("\\[([A-Za-z_][A-Za-z0-9_]*)]"),ge.af("^[A-Za-z_]"))}function Aq(){return Zi(),db}var db;function Yv(n,r){Zi();var e;if(n instanceof vr)e=n.f18()?pb(n.g18()):n.g18();else if(n instanceof dn)e=M(n,", ","[","]",o,o,Tq(r));else if(n instanceof er){var t;if(n.d1())t="{}";else{var a=n.r2(),i=`
`+r+"}";t=M(a,`,
`,`{
`,i,o,o,jq(r))}e=t}else Ms();return e}function pb(n){return Zi(),"'"+ie(ie(ie(ie(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function qq(n){Zi();var r=Oq,e=new Yw(r),t=Mt(n,e);return M(t,`
`,o,o,o,o,Pq)}function Tq(n){return r=>Yv(r,n)}function jq(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(Aq().bf(e)?e:pb(e))+": "+Yv(t,n+"    ")}}function Oq(n,r){Zi();var e=n.x1i_1,t=r.x1i_1;return bt(e,t)}function Pq(n){return Zi(),"export const "+n.x1i_1+" = "+Yv(new er(n.y1i_1),"")+` as const;
`}var ip;function Zi(){ip||(ip=!0,db=ge.af("[A-Za-z_$][A-Za-z0-9_$]*"))}function _b(){return wr(),gb}var gb;function Zv(){return wr(),mb}var mb;function yb(){return wr(),wb}var wb;function bb(){return wr(),kb}var kb;function sp(){return wr(),xb}var xb;function Sb(){return wr(),zb}var zb;function qo(){return wr(),Eb}var Eb;function Bq(){return wr(),Ib}var Ib;function Nq(){return wr(),Cb}var Cb;function Uq(){return wr(),Ab}var Ab;function Dq(){return wr(),qb}var qb;function xu(){wr();var n=Tb,r=Wp;return Da("SERVICES_MODULE_NAMES",0,r,x7(),null),n.l2()}var Tb;function Rq(){return wr(),jb}var jb;function Lq(){return wr(),Ob}var Ob;function Mq(){return wr(),Pb}var Pb;function Fq(){return wr(),Bb}var Bb;function $q(n,r){var e=Gs(r.slice());return vt(e,O(".gitattributes",`# Generated by ktor-svelte. Do not edit.
# See https://nijasc.github.io/ktor-svelte/features/typescript
`+Q_(r,"",o,o,o,o,qT)))}function Jq(n,r){for(var e=ir(r,"paths"),t=e??Ar(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();tT(n,l)&&a.s2(s.k2(),s.l2())}var u=Eu(a);return new er(vt(r,O("paths",new er(u))))}function Hq(n,r){if(n.b1j_1.d1())return r;for(var e=ir(r,"components"),t=e??new er(Ar()),a=ir(t,"schemas"),i=a??Ar(),s=nv(i),l=n.b1j_1.x();l.y();){var u=l.z(),f=u.z1j_1,c=s.o2(f);if(c==null){var v=je().w15(u.a1k_1);s.s2(f,v)}}for(var h=ir(r,"paths"),d=h??Ar(),p=cr.na(d.c1()),g=d.r2().x();g.y();){for(var y=g.z(),x=y.k2(),k=y.l2(),S=Or(k),E=cr.na(S.c1()),I=S.r2().x();I.y();){var A=I.z(),j=A.k2(),P=A.k2(),$=A.l2(),B,N;_b().l1(P)?N=$ instanceof er:N=!1,N?B=Yq(n,$):B=$;var H=B;E.s2(j,H)}var L=new er(E);p.s2(x,L)}var J=p;return new er(vt(vt(r,O("paths",new er(J))),O("components",new er(vt(t,O("schemas",new er(s)))))))}function Gq(n,r){var e=ir(r,"components"),t;if(e==null)return r;t=e;for(var a=t,i=ir(a,"schemas"),s=i??Ar(),l=cr.t4(),u=s.r2().x();u.y();){var f=u.z(),c=f.l2(),v;c instanceof er?v=Kq(n,c):v=!1,v&&l.s2(f.k2(),f.l2())}for(var h=cr.na(l.c1()),d=l.r2().x();d.y();){var p=d.z(),g=p.k2(),y=p.l2(),x=new er(vt(Or(y),O("type",zn("object"))));h.s2(g,x)}var k=h;if(k.d1())return r;for(var S=cr.t4(),E=s.r2().x();E.y();){var I=E.z(),A=I.k2();(z(k,xn)?k:m()).m2(A)||S.s2(I.k2(),I.l2())}for(var j=S.r2(),P=ln(Mr(j,10),16),$=cr.na(P),B=j.x();B.y();){var N=B.z(),H=N.k2(),L=N.l2(),J=L instanceof er?L:null,R=O(J==null?null:op(n,J),H);$.s2(R.mh_1,R.nh_1)}for(var V=$,K=cr.na(k.c1()),nr=k.r2().x();nr.y();){var W=nr.z(),tr=W.k2(),Q=W.k2(),ur=W.l2(),X=V.o2(op(n,ur)),Sr=X??Q;K.s2(tr,Sr)}for(var kr=K,dr=cr.t4(),zr=s.r2().x();zr.y();){var Er=zr.z(),Br=Er.k2();(kr.o2(Br)==null||kr.o2(Br)===Br)&&dr.s2(Er.k2(),Er.l2())}for(var Nr=cr.na(dr.c1()),pr=dr.r2().x();pr.y();){var Gr=pr.z(),tn=Gr.k2(),Zr=Gr.k2(),_r=Gr.l2(),Fr=k.o2(Zr),Vr=Fr??_r;Nr.s2(tn,Vr)}var Xr=Nr,$r=new er(vt(a,O("schemas",new er(Xr))));return Or(hc(kr,n,new er(vt(r,O("components",$r)))))}function Kq(n,r){var e;if(D(dt(yt(n,r)),ga(["object","null"]))){var t=ir(r,"properties");e=!(t??Ar()).d1()}else e=!1;return e}function op(n,r){return new er(Sz(r,"title"))}function Wq(n,r){var e=new qt,t=new ew,a=new qt;kl(a,"$ref","#/components/schemas/"+r);var i=a.h17();t.u18(i);var s=new qt;kl(s,"type","null");var l=s.h17();t.u18(l);var u=t.h17();return e.s18("oneOf",u),e.h17()}function Yq(n,r){for(var e=ir(r,"responses"),t=e??Ar(),a=nv(t),i=n.b1j_1.x();i.y();){var s=i.z(),l=new qt;kl(l,"description","");var u=new qt,f="application/json",c=new qt,v=new qt;kl(v,"$ref","#/components/schemas/"+s.z1j_1);var h=v.h17();c.s18("schema",h);var d=c.h17();u.s18(f,d);var p=u.h17();l.s18("content",p);for(var g=l.h17(),y=s.b1k_1.x();y.y();){var x=y.z(),k=x.toString(),S=a.o2(k);if(S==null){var E=g;a.s2(k,E)}}}return new er(vt(r,O("responses",new er(a))))}function Zq(n,r){var e=n.a1j_1,t;if(e==null)return"";t=e;var a=t,i=Or(je().w15(a)),s=Pn.i1();return`
`+Vv(n,"PublicConfig",i,s,r)}function Vq(n){var r=n.f1j_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+ie(ie(t,"\\","\\\\"),"'","\\'")+`';
`}function Xq(n){var r=n.h1j_1,e;r:{var t;if(z(r,Z)?t=r.d1():t=!1,t){e=!1;break r}for(var a=r.x();a.y();){var i=a.z();if(i.d1k_1!=null){e=!0;break r}}e=!1}var s=e,l=n.h1j_1,u=TT,f=new Qw(u),c=Mt(l,f),v=M(c,"",o,o,o,o,jT),h=n.f1j_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1j_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1j_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+pa("current-user.svelte.ts",".ts")+`.js';
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
`}function Qq(n,r){var e=n.e1j_1,t;if(e==null)return"";t=e;var a=t;return Nb(n,"CurrentUser",a.e1k_1,a.f1k_1,r)}function rT(n,r){var e=n.i1j_1,t;if(e==null)return"";t=e;var a=t;return Nb(n,"UserPreferences",a.h1k_1,a.i1k_1,r)}function Nb(n,r,e,t,a){var i=a.p2(),s;r:{for(var l=i.x();l.y();){var u=l.z();if(Kn(u)===e){s=u;break r}}s=null}var f=s;if(f!=null)return`
export type `+r+" = "+Kn(f)+`;
`;var c=Or(je().w15(t)),v=Pn.i1();return`
`+Vv(n,r,c,v,a)}function nT(n,r){for(var e=ir(Or(je().w15(r.i1k_1)),"properties"),t=(e??Ar()).p2(),a=r.l1k_1,i=cr.t4(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2();t.l1(u)&&i.s2(l.k2(),l.l2())}var f=i,c=f.r2(),v=M(c,", ",o,o,o,o,OT),h=bb().u15(Pv.d18(),je().w15(r.k1k_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,p=Zn(r.j1k_1),g;return C(v)===0?g="":g=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(p+", state, defaults, {"+g+`});
`)}function eT(n,r){var e=!n.g1j_1.d1(),t=e?"CurrentUser, Permission":"CurrentUser",a=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.g1k_1+`', state);
`),i;return e?i=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:i="",a+i}function tT(n,r){var e,t=n.z1i_1,a;r:{var i;if(z(t,Z)?i=t.d1():i=!1,i){a=!0;break r}for(var s=t.x();s.y();){var l=s.z();if(r===l||Te(r,l+"/")){a=!1;break r}}a=!0}if(a){var u;if(n.s1j_1.d1())u=!0;else{var f=n.s1j_1,c;r:{var v;if(z(f,Z)?v=f.d1():v=!1,v){c=!1;break r}for(var h=f.x();h.y();){var d=h.z();if(d==="/"||r===d||Te(r,d+"/")){c=!0;break r}}c=!1}u=c}e=u}else e=!1;return e}function aT(n,r){if(r.d1()&&n.r1j_1.d1()&&n.t1j_1.d1()&&!n.u1j_1&&!n.v1j_1)return`export {};
`;for(var e=Pn.i1(),t=q.f1(r.c1()),a=r.r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=O(s,Vv(n,Kn(s),Or(l),e,r));t.n(u)}for(var f=t,c=n.t1j_1.q2(),v=q.m(),h=c.x();h.y();){var d=h.z();d.o1k_1&&v.n(d)}for(var p=q.f1(Mr(v,10)),g=v.x();g.y();){var y=g.z(),x=O(y.m1k_1,Rb(n,y.m1k_1,y.n1k_1));p.n(x)}var k=p,S=Dn(f,k),E=PT,I=new rb(E),A=Mt(S,I),j=M(A,`
`,o,o,o,o,BT),P;e.l1("LucideIcon")?P=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:P="";var $=P,B=r.q2(),N;r:{var H;if(z(B,Z)?H=B.d1():H=!1,H){N=!1;break r}for(var L=B.x();L.y();){var J=L.z();if(Qv(n,Or(J))){N=!0;break r}}N=!1}var R=N,V=`declare const brand: unique symbol;
`,K;R||n.v1j_1?K=V:K=null;var nr=K,W=De("dates.ts"),tr;n.u1j_1?tr=W:tr=null;var Q=tr,ur=De("quantities.ts"),X;n.v1j_1?X=ur:X=null;var Sr=X,kr;C(j)===0?kr=null:kr=j;var dr=kr,zr=M(_e([nr,Q,Sr,dr]),`
`),Er;return C(zr)===0?Er=`export {};
`:Er=zr,$+Er}function Vv(n,r,e,t,a){var i=Tl(n,Jb(n,e),""),s=Su(n,e),l;if(s!=null){var u=e.tf("enum"),f=u==null?null:ws(u),c;if(f==null)c=null;else{var v;r:{var h;if(z(f,Z)?h=f.d1():h=!1,h){v=!0;break r}for(var d=f.x();d.y();){var p=d.z();if(p instanceof be){v=!1;break r}}v=!0}c=v}l=c===!0}else l=!1;if(l)return i+Rb(n,r,s);if(Qv(n,e)){var g=$n(n,e,t);return i+("export type "+r+" = "+g+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+g+"): "+r+" => value as "+r+`;
`)}if(rh(n,e))return i+("export interface "+r+" "+Lb(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+cc(n,e,a,"    ",Ft())+`),
`)+sT(n,e)+uT(n,r,e,a)+`};
`;var y=i+("export type "+r+" = "+$n(n,e,t)+`;
`),x=iT(n,r,e,a);return y+(x??"")}function iT(n,r,e,t){var a=ir(e,"discriminator"),i=a==null?null:Cr(a,"propertyName"),s;if(i==null)return null;s=i;var l=s,u=pn(e,"oneOf"),f=u??pn(e,"anyOf"),c;if(f==null)return null;c=f;var v=c,h=ir(e,"discriminator"),d=h==null?null:ir(h,"mapping"),p=d==null?null:d.p2(),g=p==null?null:wt(p),y=g??fr(),x;if(y.d1()){for(var k=q.f1(Mr(v,10)),S=v.x();S.y();){var E=S.z(),I=Al(n,Or(E)),A;if(I==null)A=null;else{var j=t.o2(I);A=j==null?null:Or(j)}var P=A,$=P??Or(E),B=ir($,"properties"),N=B==null?null:ir(B,l),H=N==null?null:pn(N,"enum"),L=H==null?null:qc(H),J=L instanceof vr?L:null,R=J==null?null:Un(J),V;if(R==null)return null;V=R;var K=V;k.n(K)}x=k}else x=y;var nr=x;if(nr.d1())return null;var W=An(n,zn(l)),tr=M(nr,o,o,o,o,o,NT(n));return`
export const `+r+` = {
`+("    types: ["+tr+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+W+"]]: (value: Extract<"+r+", { "+$e(l)+`: K }>) => R }): R =>
`)+("        (cases[value["+W+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function sT(n,r){for(var e=Iu(r,"required"),t=ir(r,"properties"),a=t??Ar(),i=q.m(),s=a.r2().x();s.y();){var l=s.z(),u=l.k2(),f=l.l2(),c=Dn(lT(n,Or(f),e.l1(u)),oT(n,u,Or(f))),v;if(c.d1())v=null;else{var h=$e(u);v="        "+h+": { "+M(c,o,o,o,o,o,UT)+" },"}var d=v;d==null||i.n(d)}var p=i;return p.d1()?"":`    bounds: {
`+M(p,`
`)+`
    },
`}function oT(n,r,e){var t;if(yt(n,e).l1("string"))t=!1;else{var a=ql(n,e),i=a==null?null:yt(n,a);t=(i==null?null:i.l1("string"))!==!0}if(t)return fr();var s=Cr(e,"format"),l;if(s==null){var u=ql(n,e);l=u==null?null:Cr(u,"format")}else l=s;var f=_q(r,l),c;if(f==null)return fr();c=f;var v=c,h=v.f1i_1,d;h==null?d=null:d=O("autocomplete",An(n,zn(h)));var p=d,g=v.g1i_1,y;return g==null?y=null:y=O("type",An(n,zn(g))),_e([p,y])}function lT(n,r,e){var t=yt(n,r).l1("integer"),a=O("required","true"),i;Ub(n,r,e)?i=a:i=null;var s=i,l=Ie(n,r,"minLength"),u;l==null?u=null:u=O("minlength",Dt(l));var f=u,c=Ie(n,r,"maxLength"),v;c==null?v=null:v=O("maxlength",Dt(c));var h=v,d=fp(n,r,t,"minimum","exclusiveMinimum",1),p;d==null?p=null:p=O("min",d);var g=p,y=fp(n,r,t,"maximum","exclusiveMaximum",-1),x;y==null?x=null:x=O("max",y);var k=x,S=Cr(r,"pattern"),E;return S==null?E=null:E=O("pattern",An(n,zn(S))),_e([s,f,h,g,k,E])}function Ub(n,r,e){if(nh(n,r)||r.tf("enum")!=null)return!1;var t;if(yt(n,r).l1("string")){var a=Ie(n,r,"minLength");t=(a??0)>=1}else t=e&&Db(n,r);return t}function Db(n,r){var e=yt(n,r),t;r:{var a;if(z(e,Z)?a=e.d1():a=!1,a){t=!1;break r}for(var i=e.x();i.y();){var s=i.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function uT(n,r,e,t){if(!Xv(n,e,t,Ft()))return"";for(var a=Iu(e,"required"),i=ir(e,"properties"),s=i??Ar(),l=q.m(),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=Or(v),d="value"+(Zv().bf(c)?"."+c:"["+An(n,zn(c))+"]"),p=Dn(fT(n,c,d,h,a.l1(c)),uc(n,h,d,fc(n,c),"        ",0,t));Di(l,p)}var g=l,y="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return y+M(g,"",o,o,o,o,DT)+`        return errors;
    },
`}function Xv(n,r,e,t){var a;if(rh(n,r)){var i=ir(r,"properties"),s=(i??Ar()).q2(),l;r:{var u;if(z(s,Z)?u=s.d1():u=!1,u){l=!1;break r}for(var f=s.x();f.y();){var c=f.z(),v=Or(c),h,d,p=Fq(),g;n:{var y;if(z(p,Z)?y=p.d1():y=!1,y){g=!1;break n}for(var x=p.x();x.y();){var k=x.z();if(Ie(n,v,k)!=null||k==="pattern"&&Cr(v,k)!=null){g=!0;break n}}g=!1}if(g?d=!0:d=Pl().v1k(Cr(v,"format"))!=null,d)h=!0;else{var S=Al(n,v),E;if(S==null)E=null;else{var I;if(t.l1(S))I=!1;else{var A=e.o2(S),j=A instanceof er?A:null,P;j==null?P=null:P=Xv(n,j,e,Oo(t,S)),I=P===!0}E=I}h=E===!0}if(h){l=!0;break r}}l=!1}a=l}else a=!1;return a}function Al(n,r){var e=Cr(r,"$ref");if(e!=null)return Li(e,47);var t=ql(n,r);if(t!=null)return Al(n,t);if(yt(n,r).l1("array")){var a=ir(r,"items"),i;return a==null?i=null:i=Al(n,a),i}return null}function ql(n,r){var e=pn(r,"oneOf"),t=e??pn(r,"anyOf"),a;if(t==null)a=null;else{for(var i=q.m(),s=t.x();s.y();){var l=s.z(),u=l instanceof er?l:null;u==null||i.n(u)}a=i}var f=a,c;if(f==null)c=null;else{for(var v=q.m(),h=f.x();h.y();){var d=h.z();D(yt(n,d),jn("null"))||v.n(d)}c=v}var p=c;return p==null?null:qc(p)}function fT(n,r,e,t,a){var i=An(n,zn(r)),s=Ie(n,t,"minLength"),l=s==null?null:No(s),u=Ie(n,t,"maxLength"),f=u==null?null:No(u),c=t.tf("pattern"),v=c instanceof vr?c:null,h;if(v==null)h=null;else{var d;v.f18()?d=v:d=null,h=d}var p=h,g=p==null?null:p.g18(),y=Pl().v1k(Cr(t,"format")),x=Ie(n,t,"minimum"),k;x==null?k=null:k=O(x,!1);var S=k,E;if(S==null){var I=Ie(n,t,"exclusiveMinimum"),A;I==null?A=null:A=O(I,!0),E=A}else E=S;var j=E,P=Ie(n,t,"maximum"),$;P==null?$=null:$=O(P,!1);var B=$,N;if(B==null){var H=Ie(n,t,"exclusiveMaximum"),L;H==null?L=null:L=O(H,!0),N=L}else N=B;var J=N,R=q.m();if(Ub(n,t,a)&&Db(n,t)){var V="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+na(i,n,"Required.");R.n(V)}if(l!=null||f!=null||g!=null||y!=null){var K="        if (typeof "+e+" === 'string') {";if(R.n(K),l!=null||f!=null){var nr="            const length = [..."+e+"].length;";R.n(nr)}if(l!=null){var W="            if (length < "+l+") "+na(i,n,ui.w1k(l));R.n(W)}if(f!=null){var tr="            if (length > "+f+") "+na(i,n,ui.x1k(f));R.n(tr)}if(g!=null){var Q=n.w1j_1,ur=hp();Q.n(ur);var X="            if (!matches("+An(n,zn(g))+", "+e+")) "+na(i,n,ui.y1k(g));R.n(X)}if(y!=null){var Sr=n.w1j_1,kr=hp();Sr.n(kr);var dr=M(y.a1l_1," && ",o,o,o,o,RT(n,e)),zr="            if (!("+dr+")) "+na(i,n,y.b1l_1);R.n(zr)}var Er="        }";R.n(Er)}if(j!=null||J!=null){var Br="        if (typeof "+e+" === 'number') {";if(R.n(Br),j!=null){var Nr=j.rh(),pr=j.sh(),Gr=pr?"<=":"<",tn="            if ("+e+" "+Gr+" "+Dt(Nr)+") "+na(i,n,ui.c1l(Nr,pr));R.n(tn)}if(J!=null){var Zr=J.rh(),_r=J.sh(),Fr=_r?">=":">",Vr="            if ("+e+" "+Fr+" "+Dt(Zr)+") "+na(i,n,ui.d1l(Zr,_r));R.n(Vr)}var Xr="        }";R.n(Xr)}if(!R.d1()){var $r=n.w1j_1,an=Xb();$r.n(an)}return R}function uc(n,r,e,t,a,i,s){var l=Cr(r,"$ref");if(l!=null){var u=Li(l,47),f=s.o2(u),c=f instanceof er?f:null,v;if(c==null)return fr();v=c;var h=v;if(!Xv(n,h,s,Ft()))return fr();var d=n.w1j_1,p=en([Xb(),E7()]);return Di(d,p),jn(a+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Kn(u)+".validate("+e+"));")}var g=ql(n,r);if(g!=null)return uc(n,g,e,t,a,i,s);if(!yt(n,r).l1("array"))return fr();var y=ir(r,"items"),x;if(y==null)return fr();x=y;var k=x,S=i===0?"":""+(i+1|0),E="item"+S,I="index"+S,A=uc(n,k,E,t+"[${"+I+"}]",a+"        ",i+1|0,s);return A.d1()?fr():Dn(Dn(en([a+"if (Array.isArray("+e+")) {",a+"    "+e+".forEach(("+E+", "+I+") => {"]),A),en([a+"    });",a+"}"]))}function fc(n,r){return ie(ie(ie(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function Ie(n,r,e){var t=r.tf(e),a=t instanceof vr?t:null,i;if(a==null)i=null;else{var s;a.f18()?s=null:s=a,i=s}var l=i,u=l==null?null:Un(l);return u==null?null:Zc(u)}function yt(n,r){var e=r.tf("type"),t;if(e instanceof dn){for(var a=q.f1(Mr(e,10)),i=e.x();i.y();){var s=i.z(),l=On(s).g18();a.n(l)}t=a}else e instanceof vr?t=jn(e.g18()):t=fr();return t}function Rb(n,r,e){var t=M(e,"",o,o,o,o,LT(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function cT(n,r,e){for(var t=cr.t4(),a=Eu(e).r2().x();a.y();){var i=a.z(),s=i.k2(),l=i.l2(),u=Su(n,Or(l));if(u!=null){var f=dt(u),c=t.o2(f);if(c==null){var v=new sc(Kn(s),u,!1);t.s2(f,v)}}}for(var h=cr.t4(),d=cr.t4(),p=e.r2().x();p.y();){var g=p.z(),y=g.k2(),x=g.l2();ci(n,h,d,x,Kn(y),Kn(y),!0)}var k=ir(r,"paths");k==null||ci(n,h,d,k,"","",!1);for(var S=h.p2(),E=q.m(),I=S.x();I.y();){var A=I.z(),j;(z(t,xn)?t:m()).m2(A)?j=!1:j=!D(A,n.r1j_1),j&&E.n(A)}for(var P=MT(d),$=new nb(P),B=Mt(E,$),N=cr.na(ln(Mr(B,10),16)),H=B.x();H.y();){var L=H.z(),J=qe(h,L),R=FT,V=Ex(J,Pz([R,$T]));N.s2(L,V)}for(var K=N,nr=K.q2(),W=new tb(nr),tr=B2(W),Q=e.p2(),ur=q.f1(Mr(Q,10)),X=Q.x();X.y();){var Sr=X.z(),kr=Kn(Sr);ur.n(kr)}for(var dr=Tc(Pt(Pt(ur,"LucideIcon"),"PublicConfig")),zr=cr.oa(t),Er=B.x();Er.y();){var Br=Er.z(),Nr=qe(K,Br),pr=Kn(Nr.f1l_1),Gr;if(qe(tr,pr)>1||dr.l1(pr)){var tn=Nr.e1l_1,Zr;C(tn)===0?Zr=pr:Zr=tn+pr,Gr=Zr}else Gr=pr;var _r=Gr,Fr;if(!dr.l1(_r))Fr=_r;else{var Vr=ev(2,JT),Xr=Na(Vr,HT(_r)),$r;r:{for(var an=Xr.x();an.y();){var _n=an.z();if(!dr.l1(_n)){$r=_n;break r}}throw jr.r("Sequence contains no element matching the predicate.")}Fr=$r}var wn=Fr;dr.n(wn);var gn=new sc(wn,qe(d,Br),!0);zr.s2(Br,gn)}return zr}function Su(n,r){var e=pn(r,"enum"),t;if(e==null)return null;t=e;for(var a=t,i=q.m(),s=a.x();s.y();){var l=s.z();l instanceof be||i.n(l)}var u=i,f;r:{var c;if(z(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof vr?d=!h.f18():d=!0,d){f=!0;break r}}f=!1}if(f)return null;for(var p=q.f1(Mr(u,10)),g=u.x();g.y();){var y=g.z(),x=On(y).g18();p.n(x)}var k=ki(p),S;return k.c1()>1?S=k:S=null,S}function Qv(n,r){var e,t,a=Nq(),i=r.tf("type"),s=i instanceof vr?i:null;if(Ix(a,s==null?null:Un(s))?t=r.tf("title")!=null:t=!1,t){var l=r.p2(),u;r:{var f;if(z(l,Z)?f=l.d1():f=!1,f){u=!0;break r}for(var c=l.x();c.y();){var v=c.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function rh(n,r){return ir(r,"properties")!=null&&r.tf("allOf")==null}function cc(n,r,e,t,a){var i=ir(r,"properties"),s=i??Ar();if(s.d1())return"{}";for(var l=q.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=t+"    "+$e(c)+": "+ma(n,Or(v),e,t+"    ",a)+",";l.n(h)}var d=l;return M(Pt(Dn(jn("{"),d),t+"}"),`
`)}function ma(n,r,e,t,a){if(nh(n,r))return"null";var i=Cr(r,"$ref");if(i!=null){var s=Li(i,47),l=e.o2(s),u=l instanceof er?l:null,f;if(u==null)return"null";f=u;var c=f;return rh(n,c)?Kn(s)+".empty()":Qv(n,c)?Kn(s)+"("+ma(n,c,e,t,Oo(a,s))+")":a.l1(s)?"null":ma(n,c,e,t,Oo(a,s))}var v=r.tf("enum");if(v!=null){var h=r1(ws(v)),d;h==null?d=null:d=An(n,h);var p=d;return p??"null"}var g=r.tf("const");if(g!=null)return An(n,g);var y=pn(r,"oneOf"),x=y??pn(r,"anyOf");if(x!=null){var k=r1(x),S;k==null?S=null:S=ma(n,Or(k),e,t,a);var E=S;return E??"null"}var I=pn(r,"allOf");if(I!=null)return I.c1()===1?ma(n,Or(ag(I)),e,t,a):M(I,", ","{ "," }",o,o,GT(n,e,t,a));var A=r.tf("type"),j;if(A instanceof dn){var P=r1(A),$=P==null?null:On(P);j=$==null?null:$.g18()}else A instanceof vr?j=Un(A):j=null;var B=j,N;switch(B){case"string":var H=ah(r),L;H==null?L=null:L="'' as "+H;var J=L,R;if(J==null){var V=Wb(r),K;V==null?K=null:K=qe(Bq(),V)+" as "+V,R=K}else R=J;var nr=R;N=nr??"''";break;case"integer":case"number":N="0";break;case"boolean":N="false";break;case"array":var W=pn(r,"prefixItems"),tr;W==null?tr=null:tr=M(W,", ","[","]",o,o,KT(n,e,t,a));var Q=tr;N=Q??"[]";break;case"object":N=cc(n,r,e,t,a);break;case null:N=r.tf("properties")!=null?cc(n,r,e,t,a):"null";break;default:N="null";break}return N}function nh(n,r){var e=r.tf("type"),t=pn(r,"oneOf"),a=t??fr(),i=pn(r,"anyOf"),s=i??fr(),l=Dn(a,s),u,f,c,v,h;if(e instanceof dn){var d;r:{var p;if(z(e,Z)?p=e.d1():p=!1,p){d=!1;break r}for(var g=e.x();g.y();){var y=g.z();if(On(y).g18()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof vr?x=e.g18()==="null":x=!1,v=x}if(v)c=!0;else{var k=r.tf("nullable"),S=k instanceof vr?k:null;c=(S==null?null:Un(S))==="true"}if(c)f=!0;else{var E=pn(r,"enum"),I=E??fr(),A;r:{var j;if(z(I,Z)?j=I.d1():j=!1,j){A=!1;break r}for(var P=I.x();P.y();){var $=P.z();if($ instanceof be){A=!0;break r}}A=!1}f=A}if(f)u=!0;else{var B;r:{var N;if(z(l,Z)?N=l.d1():N=!1,N){B=!1;break r}for(var H=l.x();H.y();){var L=H.z(),J=L instanceof er?L:null,R;if(J==null?R=null:R=nh(n,J),R===!0){B=!0;break r}}B=!1}u=B}return u}function Lb(n,r,e,t){for(var a=Iu(r,"required"),i=ir(r,"properties"),s=i??Ar(),l=q.f1(s.c1()),u=s.r2().x();u.y();){var f=u.z(),c=f.k2(),v=f.l2(),h=a.l1(c)?"":"?",d=Kb(Or(v))?"readonly ":"",p=Tl(n,Jb(n,Or(v)),t+"    ")+(t+"    "+d+$e(c)+h+": "+$n(n,Or(v),e,t+"    ")+";");l.n(p)}var g=l;return M(Pt(Dn(jn("{"),g),t+"}"),`
`)}function $n(n,r,e,t){t=t===o?"":t;var a=Cr(r,"$ref");if(a!=null){var i=Kn(Li(a,47));return e.n(i),i}var s=r.tf("enum");if(s!=null){for(var l=ws(s),u=q.m(),f=l.x();f.y();){var c=f.z(),v=c instanceof vr?c:null,h=v==null?null:Un(v);h==null||u.n(h)}var d=dt(u),p;if(n.r1j_1.d1()?p=!1:p=D(d,n.r1j_1),p){var g="LucideIcon";return e.n(g),"LucideIcon"}var y=Su(n,r);if(y!=null){var x=n.t1j_1.o2(dt(y));if(x!=null){var k=x.m1k_1;e.n(k);var S,E=ws(s),I;r:{var A;if(z(E,Z)?A=E.d1():A=!1,A){I=!1;break r}for(var j=E.x();j.y();){var P=j.z();if(P instanceof be){I=!0;break r}}I=!1}return I?S=x.m1k_1+" | null":S=x.m1k_1,S}}var $=ws(s),B=M($," | ",o,o,o,o,WT(n)),N;return C(B)===0?N="never":N=B,N}var H=r.tf("const");if(H!=null)return An(n,H);var L=pn(r,"oneOf");if(L!=null)return up(n,L,e,t);var J=pn(r,"anyOf");if(J!=null)return up(n,J,e,t);var R=pn(r,"allOf");if(R!=null)return M(R," & ",o,o,o,o,YT(n,e,t));var V=r.tf("type"),K;if(V==null)K=r.tf("properties")!=null?Mb(n,r,e,t):"unknown";else if(V instanceof dn){for(var nr=q.f1(Mr(V,10)),W=V.x();W.y();){var tr=W.z(),Q=lp(n,On(tr).g18(),r,e,t);nr.n(Q)}K=M(ki(nr)," | ")}else K=lp(n,On(V).g18(),r,e,t);return K}function lp(n,r,e,t,a){var i;switch(r){case"string":var s=ah(e),l=s??Wb(e),u;l==null?u=null:(t.n(l),u=l);var f=u;i=f??"string";break;case"integer":case"number":i="number";break;case"boolean":i="boolean";break;case"null":i="null";break;case"array":i=vT(n,e,t,a);break;case"object":i=Mb(n,e,t,a);break;default:i="unknown";break}return i}function vT(n,r,e,t){var a=pn(r,"prefixItems");if(a!=null)return M(a,", ","[","]",o,o,ZT(n,e,t));var i=r.tf("items"),s=i==null?null:Or(i),l;if(s==null)return"unknown[]";l=s;var u=l,f=$n(n,u,e,t);return js(f," | ")||js(f," & ")?"("+f+")[]":f+"[]"}function Mb(n,r,e,t){var a=ir(r,"properties");if(!(a??Ar()).d1())return Lb(n,r,e,t);var i=r.tf("additionalProperties"),s=i instanceof er?i:null;return s!=null?"Record<string, "+$n(n,s,e,t)+">":"Record<string, unknown>"}function up(n,r,e,t){for(var a=q.f1(Mr(r,10)),i=r.x();i.y();){var s=i.z(),l=$n(n,Or(s),e,t);a.n(l)}return M(ki(a)," | ")}function An(n,r){var e;if(r instanceof be)e="null";else{var t;r instanceof vr?t=r.f18():t=!1,t?e=Zn(r.g18()):r instanceof vr?e=r.g18():e="unknown"}return e}function hT(n,r,e){for(var t=Pn.i1(),a=cr.t4(),i=q.m(),s=cr.t4(),l=r.r2().x();l.y();)for(var u=l.z(),f=u.k2(),c=u.l2(),v=Or(c),h=_b().x();h.y();){var d=h.z(),p=ir(v,d);if(p!=null){var g=$b(n,f),y=a.o2(g),x;if(y==null){var k=q.m();a.s2(g,k),x=k}else x=y;var S=x,E=bT(n,f,d,v,p);S.n(E)}}var I=Tc(xu());I.g1(a.p2());for(var A=I,j=Eu(a),P=q.f1(j.c1()),$=j.r2().x();$.y();){var B=$.z(),N=B.k2(),H=B.l2(),L=Pn.i1(),J=Yr.f(),R=M(H,`
`,o,o,o,o,VT(t,n,L,N,i,s,A,J)),V=J.toString()+`
export const `+N+` = {
`+R+`
};
`;P.n(V)}for(var K=P,nr=xa(t),W=q.m(),tr=nr.x();tr.y();){for(var Q=tr.z(),ur=q.f1(Mr(e,10)),X=e.x();X.y();){var Sr=X.z(),kr=Kn(Sr);ur.n(kr)}ur.l1(Q)&&W.n(Q)}var dr=W,zr,Er=bz(a.q2()),Br;r:{var Nr;if(z(Er,Z)?Nr=Er.d1():Nr=!1,Nr){Br=!1;break r}for(var pr=Er.x();pr.y();){var Gr=pr.z();if(Gr.n1l_1){Br=!0;break r}}Br=!1}Br?zr="ApiError, request, stream":zr="ApiError, request";var tn=zr,Zr=n.d1j_1.d1()?tn:tn+", codeMessages, errorCode",_r=Yr.f();_r.fa("import { "+Zr+`, type RequestOptions } from './client.js';
`);var Fr=n.a1j_1!=null?Pt(dr,"PublicConfig"):dr,Vr=n.d1j_1.d1()?Fr:xa(Pt(Fr,"ErrorCode"));Vr.d1()||_r.fa("import type { "+M(Vr)+` } from './types.js';
`),_r.fa(`
`);for(var Xr=K.x();Xr.y();){var $r=Xr.z();_r.fa($r).fa(`
`)}if(_r.fa(mT(n,i)),n.d1j_1.d1()||_r.fa(Uq()),!s.d1()){_r.fa(`export const uploadRules = {
`);for(var an=s.r2(),_n=XT,wn=new eb(_n),gn=Mt(an,wn).x();gn.y();){var Qn=gn.z(),re=Qn.k2(),ne=Qn.l2();_r.fa("    '"+re+"': "+ne+`,
`)}_r.fa(`} as const;

`)}return n.a1j_1!=null&&_r.fa(De("public-config.ts")),_r.fa("export const api = { "+M(xa(a.p2()))+` };
`),_r.fa(De("api-with.ts")),_r.toString()}function dT(n,r){var e=ir(r,"properties"),t;if(e==null)t=null;else{var a;e.d1()?a=null:a=e,t=a}var i=t,s;if(i==null)return null;s=i;var l=s,u=dt(Iu(r,"required")),f=l.r2(),c=M(f,"; ",o,o,o,o,QT(u));return"{ "+c+" }"}function pT(n,r){var e=r.tf("maxBytes"),t=e==null?null:On(e),a=t==null?null:Y6(t),i;a==null?i=null:i="maxBytes: "+a.toString();var s=i,l=pn(r,"types"),u;if(l==null)u=null;else{for(var f=q.f1(Mr(l,10)),c=l.x();c.y();){var v=c.z(),h=Zn(On(v).g18());f.n(h)}u=f}var d=u,p;if(d==null)p=null;else{var g;d.d1()?g=null:g=d,p=g}var y=p,x;y==null?x=null:x="types: ["+M(y)+"]";var k=x,S=r.tf("maxFiles"),E=S==null?null:On(S),I=E==null?null:Z6(E),A;I==null?A=null:A="maxFiles: "+I;var j=_e([s,k,A]);return"{ "+M(j)+" }"}function _T(n){return Fb(n,"ErrorCode",n.d1j_1)}function gT(n){var r=Pl().t1k_1.a1l_1,e=M(r,"",o,o,o,o,r7(n));return`
export interface PasswordRule {
    readonly pattern: string;
    readonly requirement: string;
}

`+(`export const passwordRules: readonly PasswordRule[] = [
`+e+`];

`)+("export const passwordMessage = "+An(n,zn(Pl().t1k_1.b1l_1))+`;

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
`}function Fb(n,r,e){if(e.d1())return"";var t=M(e," | ",o,o,o,o,n7),a=M(e,"",o,o,o,o,e7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+a+`} as const;
`}function mT(n,r){var e=M(r,"",o,o,o,o,t7),t=M(r,"",o,o,o,o,a7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function yT(n,r,e){var t=th(r),a=ev(1,i7),i=Na(a,s7(t)),s;r:{for(var l=i.x();l.y();){var u=l.z();if(!e.l1(u)){s=u;break r}}throw jr.r("Sequence contains no element matching the predicate.")}var f=s;return e.n(f),f}function wT(n,r,e,t){var a=Az([r,r+M(e,"",o,o,o,o,o7)]),i;r:{for(var s=a.x();s.y();){var l=s.z();if(!t.l1(l)){i=l;break r}}i=null}var u=i,f;if(u==null){var c=ev(2,l7),v=Na(c,u7(r)),h;r:{for(var d=v.x();d.y();){var p=d.z();if(!t.l1(p)){h=p;break r}}throw jr.r("Sequence contains no element matching the predicate.")}f=h}else f=u;var g=f;return t.n(g),g}function bT(n,r,e,t,a){for(var i=Pn.i1(),s=pn(t,"parameters"),l=s??fr(),u=pn(a,"parameters"),f=u??fr(),c=Dn(l,f),v=q.f1(Mr(c,10)),h=c.x();h.y();){var d=h.z(),p=Or(d);v.n(p)}for(var g=v,y=yb().ef(r),x=Nc(Na(y,f7)),k=q.m(),S=q.m(),E=x.x();E.y();){var I=E.z(),A;r:{for(var j=g.x();j.y();){var P=j.z();if(Cr(P,"name")===I&&Cr(P,"in")==="path"){A=P;break r}}A=null}var $=A,B=$==null?null:ir($,"schema"),N;B==null?N=null:N=$n(n,B,i);var H=N,L;if(H==null)L=null;else{var J;H==="unknown"||H==="string"?J=null:J=H,L=J}var R=L,V=R??"string | number",K=Hb(I)+": "+V;k.n(K),S.n(V)}var nr=ir(a,"requestBody"),W=nr==null?null:ir(nr,"content"),tr=W==null?null:W.r2(),Q;if(tr==null)Q=null;else{var ur;r:{for(var X=tr.x();X.y();){var Sr=X.z();if(Te(Sr.k2(),"multipart/")){ur=Sr;break r}}ur=null}Q=ur}var kr=Q,dr=kr==null?null:kr.l2(),zr;dr==null?zr=null:zr=dr instanceof er?dr:null;var Er=zr,Br=Er==null?null:ir(Er,"schema"),Nr;Br==null?Nr=null:Nr=dT(n,Br);var pr=Nr,Gr;if(kr!=null)Gr=pr??"FormData";else{var tn;W==null?tn=null:tn=vc(n,W);var Zr=tn,_r;Zr==null?_r=null:_r=$n(n,Zr,i),Gr=_r}var Fr=Gr,Vr;if(kr==null){var Xr;W==null?Xr=null:Xr=vc(n,W);var $r=Xr,an;$r==null?an=null:an=kT(n,$r);var _n=an;Vr=_n??fr()}else Vr=fr();var wn=Vr,gn;wn.d1()?gn=Fr:gn="Omit<"+Fr+", "+M(wn," | ",o,o,o,o,c7)+">";var Qn=gn;if(nr!=null){var re="body: "+(Qn??"unknown");k.n(re)}var ne=ir(a,"x-ktor-svelte-fields"),ve=ne==null?null:pn(ne,"fields"),ze;if(ve==null)ze=null;else{for(var Ee=q.m(),Ne=ve.x();Ne.y();){var Ze=Ne.z(),kt=Ze instanceof vr?Ze:null,ee=kt==null?null:Un(kt);ee==null||Ee.n(ee)}ze=Ee}var qn=ze,Bn=qn??fr(),bn=M(Bn," | ",o,o,o,o,v7),Jt;C(bn)===0?Jt=null:Jt=bn;var he=Jt,Ve=ir(a,"x-ktor-svelte-include"),xt=Ve==null?null:ir(Ve,"relations"),Ht=xt??Ar(),Vi=Ht.p2(),Gt=M(Vi," | ",o,o,o,o,h7),Xe;C(Gt)===0?Xe=null:Xe=Gt;for(var de=Xe,Kt=he!=null||de!=null,Ga=q.m(),Ka=g.x();Ka.y();){var Wt=Ka.z(),Wa=Cr(Wt,"name");Cr(Wt,"in")==="query"&&!(he!=null&&Wa==="fields")&&!(de!=null&&Wa==="include")&&Ga.n(Wt)}var Ue=Ga,Yt=-1,Zt="",Vt;if(Ue.d1()?Vt=Kt:Vt=!0,Vt){for(var Ya=q.f1(Mr(Ue,10)),Xt=Ue.x();Xt.y();){var St=Xt.z(),Qt=St.tf("required"),Za=Qt==null?null:On(Qt),Xi=(Za==null?null:Un(Za))==="true",Va=ir(St,"schema"),Qe;Va==null?Qe=null:Qe=$n(n,Va,i);var Qi=Qe,rs;if(Qi==null)rs=null;else{var ra;Qi!=="unknown"?ra=Qi:ra=null,rs=ra}var uo=rs,ns=uo??"string",fo=Cr(St,"name"),es=fo??"",Cu=$e(es)+(Xi?"":"?")+": "+ns;Ya.n(Cu)}var ts=Ya,zt;r:{var Xa;if(z(Ue,Z)?Xa=Ue.d1():Xa=!1,Xa){zt=!1;break r}for(var Qa=Ue.x();Qa.y();){var Au=Qa.z(),ri=Au.tf("required"),co=ri==null?null:On(ri);if((co==null?null:Un(co))==="true"){zt=!0;break r}}zt=!1}var vo=zt,ni="query"+(vo?"":"?");Yt=k.c1();var ei;he==null?ei=null:ei="fields?: readonly ("+he+")[]";var as=ei,qu;de==null?qu=null:qu="include?: readonly ("+de+")[]";var nk=_e([as,qu]),ek="fields?: readonly F[]",Tu;he!=null?Tu=ek:Tu=null;var tk=Tu,ak="include?: readonly I[]",ju;de!=null?ju=ak:ju=null;var ik=ju,sk=_e([tk,ik]),ok=ni+": { "+M(Dn(ts,nk),"; ")+" }";k.n(ok),Zt=ni+": { "+M(Dn(ts,sk),"; ")+" }"}for(var sh=q.m(),oh=g.x();oh.y();){var Ou=oh.z(),Pu;if(Cr(Ou,"in")==="header"){var lk=Lq(),lh=Cr(Ou,"name"),uk=(lh??"").toLowerCase();Pu=!lk.l1(uk)}else Pu=!1;Pu&&sh.n(Ou)}var ti=sh;if(!ti.d1()){var fk=M(ti,"; ",o,o,o,o,d7(n,i)),ho;r:{var Bu;if(z(ti,Z)?Bu=ti.d1():Bu=!1,Bu){ho=!1;break r}for(var uh=ti.x();uh.y();){var ck=uh.z(),fh=ck.tf("required"),ch=fh==null?null:On(fh);if((ch==null?null:Un(ch))==="true"){ho=!0;break r}}ho=!1}var vk=ho,hk="headers"+(vk?"":"?")+": { "+fk+" }";k.n(hk)}var dk="options?: RequestOptions";k.n(dk);var pk=x.d1()?Zn(r):xT(n,r),vh=ir(a,"x-ktor-svelte-upload"),Nu;vh==null?Nu=null:Nu=pT(n,vh);var Uu=Nu,hh=a.tf("x-ktor-svelte-timeout"),dh=hh==null?null:On(hh),ph=dh==null?null:Un(dh),_h=ph==null?null:Zc(ph),Du=_h==null?null:Rn(_h),Ru;if(Du==null)Ru=null;else{var Lu;ar(Du,new b(0,0))>0?Lu=Du:Lu=null,Ru=Lu}var gh=Ru,rt=q.m();gh!=null&&rt.n("timeout: "+gh.toString()),rt.n("...options");var Mu;Ue.d1()?Mu=Kt:Mu=!0,Mu&&rt.n("query"),ti.d1()||rt.n("typedHeaders: headers"),nr!=null&&rt.n("body"),wn.d1()||rt.n("omit: ["+M(wn,o,o,o,o,o,p7)+"]"),Uu!=null&&rt.n("upload: "+Uu),pr!=null&&rt.n("multipart: true");var _k=rt.m6(),mh=ne==null?null:Cr(ne,"type"),Fu;mh==null?Fu=Ve==null?null:Cr(Ve,"type"):Fu=mh;var po=Fu,$u=zT(n,a,i),Ju=ET(n,a),Hu;if(Kt&&po!=null&&!Ju&&Yt>=0){var yh=he!=null?"Pick<"+po+", F>":po,gk=Ht.r2(),mk=M(gk,"; ",o,o,o,o,_7(n,i)),yk=de!=null?"("+yh+" & Pick<{ "+mk+" }, I>)":yh,wk=ge.af("\\b"+gi().qe(po)+"\\b").ff($u,yk),wh=jc(k);wh.y4(Yt,Zt);var bk=wh,Gu;he==null?Gu=null:Gu="F extends "+he+" = "+he;var kk=Gu,Ku;de==null?Ku=null:Ku="I extends "+de+" = never";var xk=M(_e([kk,Ku]));Hu=`: {
    <`+xk+">("+M(bk)+"): Promise<"+wk+`>;
`+("    ("+M(k)+"): Promise<"+$u+`>;
}`)}else Hu="";var Sk=Hu,zk=$u,bh=ST(n,a,i),Ek=e.toUpperCase(),kh=Cr(a,"operationId"),Wu;kh==null?Wu=null:Wu=zu(kh);for(var xh=Wu,Ik=xh??IT(n,r,e),Sh=_e([Cr(a,"summary"),Cr(a,"description")]),zh=q.f1(Mr(Sh,10)),Eh=Sh.x();Eh.y();){var Ih=Eh.z(),Ck=w(Bm($s(Ih)?Ih:m()));zh.n(Ck)}for(var Ch=q.m(),Ah=zh.x();Ah.y();){var qh=Ah.z();C(qh)>0&&Ch.n(qh)}var Ak=ki(Ch),qk="@deprecated",Yu;Gb(a)?Yu=qk:Yu=null;var Tk=Yu,jk=n.y1j_1,Ok=e.toUpperCase(),Th=jk.o2(Ok+" "+r),Zu;Th==null?Zu=null:Zu="@see "+Th;var Pk=Dn(Ak,_e([Tk,Zu])),Bk=(k.c1()-x.c1()|0)-1|0,Vu=Cx(ig(k,x.c1()),1),_o;r:{var Xu;if(z(Vu,Z)?Xu=Vu.d1():Xu=!1,Xu){_o=!1;break r}for(var jh=Vu.x();jh.y();){var Nk=jh.z();if(!am(qm(Nk,58),"?")){_o=!0;break r}}_o=!1}var Uk=_o,Oh=M(ki(bh.q2())," | "),Qu;C(Oh)===0?Qu=null:Qu=Oh;var Dk=Qu,Rk=wt(bh.p2());return new Vw(Ek,r,Ik,Pk,x,g7(_k,Ju,k,zk,e,pk),i,Ju,Uu,Dk,Rk,S,Bk,Uk,Sk)}function kT(n,r){var e=Cr(r,"$ref"),t;if(e==null)t=null;else{var a=n.p1j_1.o2(Li(e,47));t=a instanceof er?a:null}for(var i=t,s=i??r,l=ir(s,"properties"),u=l??Ar(),f=cr.t4(),c=u.r2().x();c.y();){var v=c.z(),h=v.l2(),d=h instanceof er?h:null;(d==null?null:Kb(d))===!0&&f.s2(v.k2(),v.l2())}return wt(f.p2())}function xT(n,r){var e=Yr.f();e.ga(96);for(var t=0,a=yb().ef(r).x();a.y();){var i=a.z();e.fa(fc(n,Gn(r,t,i.hf().r1_1))),e.fa("${encodeURIComponent("+Hb(i.hg().e1(1))+")}"),t=i.hf().s1_1+1|0}return e.fa(fc(n,Ye(r,t))),e.ga(96),e.toString()}function ST(n,r,e){for(var t=ir(r,"responses"),a=(t??Ar()).r2(),i=q.m(),s=a.x();s.y();){var l=s.z(),u;r:{var f=l.k2(),c=l.l2(),v=Yl(f),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var p=h,g;if(p==null){u=null;break r}else g=p;var y=g,x=ir(Or(c),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,E=vc(n,S),I;if(E==null){u=null;break r}else I=E;var A=I;u=O(y,$n(n,A,e))}var j=u;j==null||i.n(j)}return Eu(pm(i))}function zT(n,r,e){var t=ir(r,"responses"),a;if(t==null)return"unknown";a=t;for(var i=a,s=i.r2(),l=q.m(),u=s.x();u.y();){var f=u.z(),c=f.k2();Te(c,"2")&&l.n(f)}var v;r:{var h=l.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var p=d.k2(),g=p;do{var y=h.z(),x=y.k2(),k=x;Me(g,k)>0&&(d=y,g=k)}while(h.y());v=d}var S=v,E=S==null?null:S.l2(),I=E==null?null:Or(E),A;if(I==null)return"unknown";A=I;var j=A,P=ir(j,"content"),$;if(P==null)return"void";$=P;var B=$,N=ir(B,"text/event-stream");if(N!=null){var H=ir(N,"schema"),L;H==null?L=null:L=$n(n,H,e);var J=L;return J??"string"}var R=B.p2(),V;r:{for(var K=R.x();K.y();){var nr=K.z();if(js(nr,"json")){V=nr;break r}}V=null}var W=V;if(W!=null){var tr=ir(B,W),Q=tr==null?null:ir(tr,"schema"),ur;Q==null?ur=null:ur=$n(n,Q,e);var X=ur;return X??"unknown"}return"string"}function ET(n,r){for(var e=ir(r,"responses"),t=e??Ar(),a=cr.t4(),i=t.r2().x();i.y();){var s=i.z(),l=s.k2();Te(l,"2")&&a.s2(s.k2(),s.l2())}var u=a.q2(),f;r:{var c;if(z(u,Z)?c=u.d1():c=!1,c){f=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,p=d==null?null:ir(d,"content");if((p==null?null:p.l18("text/event-stream"))===!0){f=!0;break r}}f=!1}return f}function vc(n,r){var e=r.p2(),t;r:{for(var a=e.x();a.y();){var i=a.z();if(js(i,"json")){t=i;break r}}t=null}var s=t,l=s??Ax(r.p2()),u;if(l==null)u=null;else{var f=ir(r,l);u=f==null?null:ir(f,"schema")}return u}function $b(n,r){var e=n.s1j_1,t;r:{for(var a=e.x();a.y();){var i=a.z();if(r===i||Te(r,i+"/")){t=i;break r}}t=null}var s=t,l=s??"",u=Tm(jm(r,l),ji([47])),f;r:{for(var c=u.x();c.y();){var v=c.z(),h;if(C(v)>0?h=!Te(v,"{"):h=!1,h){f=v;break r}}f=null}var d=f,p;d==null?p=null:p=th(d,xu());var g=p;return g??"root"}function IT(n,r,e){var t=n.s1j_1,a;r:{for(var i=t.x();i.y();){var s=i.z();if(r===s||Te(r,s+"/")){a=s;break r}}a=null}for(var l=a,u=l??"",f=Tm(jm(r,u),ji([47])),c=q.m(),v=f.x();v.y();){var h=v.z();C(h)>0&&c.n(h)}for(var d=c,p=q.m(),g=d.x();g.y();){var y=g.z();Te(y,"{")||p.n(y)}var x=ig(p,1);if(!x.d1()){var k=e==="post"?"":e;return zu(k+M(x,"",o,o,o,o,m7))}var S=sg(d),E=(S==null?null:Te(S,"{"))===!0;switch(e){case"get":return E?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function Jb(n,r){var e=Cr(r,"description"),t;e==null?t=null:t=w(Bm($s(e)?e:m()));var a=t,i;if(a==null)i=null;else{var s;C(a)===0?s=null:s=a,i=s}var l=i,u="@deprecated",f;Gb(r)?f=u:f=null;var c=f;return _e([l,c])}function Tl(n,r,e){if(r.d1())return"";var t=Om(ie(M(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+ag(t)+` */
`;var a=e+`/**
`;return a+M(t,"",o,o,o,o,y7(e))+(e+` */
`)}function CT(n){return"'"+n.u1h_1+"'"}function AT(n){return`
`+n.y1g()}function qT(n){var r=n.rh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function hc(n,r,e){var t;if(e instanceof er){var a=Cr(e,"$ref"),i=a==null?null:Li(a,47),s;i==null?s=null:s=n.o2(i);var l=s,u;if(l==null){for(var f=cr.na(e.c1()),c=e.r2().x();c.y();){var v=c.z(),h=v.k2(),d=hc(n,r,v.l2());f.s2(h,d)}u=new er(f)}else u=Wq(r,l);t=u}else if(e instanceof dn){for(var p=q.f1(Mr(e,10)),g=e.x();g.y();){var y=g.z(),x=hc(n,r,y);p.n(x)}t=new dn(p)}else t=e;return t}function TT(n,r){var e=n.c1k_1,t=r.c1k_1;return bt(e,t)}function jT(n){var r=n.d1k_1,e;r==null?e=null:e=", permission: "+Zn(r);var t=e,a=t??"";return"    { page: "+Zn(n.c1k_1)+a+` },
`}function OT(n){var r=n.k2(),e=n.l2();return $e(r)+": "+Zn(e)}function PT(n,r){var e=n.mh_1,t=r.mh_1;return bt(e,t)}function BT(n){return n.nh_1}function NT(n){return r=>An(n,zn(r))}function UT(n){var r=n.rh(),e=n.sh();return r+": "+e}function fp(n,r,e,t,a,i){var s=Ie(n,r,t);if(s!=null)return Dt(s);var l=Ie(n,r,a),u;if(l==null)return null;u=l;var f=u;return e?Dt(f+i):null}function DT(n){return n+`
`}function na(n,r,e){return"addError(errors, "+n+", "+An(r,zn(e))+");"}function RT(n,r){return e=>"matches("+An(n,zn(e.f1m_1))+", "+r+")"}function LT(n){return r=>"    "+$e(r)+": "+An(n,zn(r))+`,
`}function ci(n,r,e,t,a,i,s){if(t instanceof dn)for(var l=t.x();l.y();){var u=l.z();ci(n,r,e,u,a,i,!1)}else if(t instanceof er){var f=Su(n,t),c;if(f==null)c=null;else{var v;s?v=null:v=f,c=v}var h=c;if(h!=null){var d=dt(h),p=r.o2(d),g;if(p==null){var y=q.m();r.s2(d,y),g=y}else g=p;var x=g,k=new Zw(a,i);x.n(k);var S=dt(h),E=e.o2(S);if(E==null){var I=h;e.s2(S,I)}}for(var A=Cr(t,"in")!=null?Cr(t,"name"):null,j=t.r2().x();j.y();){var P=j.z(),$=P.k2(),B=P.l2(),N;if($==="properties"?N=B instanceof er:N=!1,N)for(var H=B.r2().x();H.y();){var L=H.z(),J=L.k2(),R=L.l2();ci(n,r,e,R,a,J,!1)}else $==="schema"&&A!=null?ci(n,r,e,B,a,A,!1):$!=="enum"&&ci(n,r,e,B,a,i,!1)}}}function MT(n){return(r,e)=>{var t=M(xa(qe(n,r)),"\0"),a=M(xa(qe(n,e)),"\0");return bt(t,a)}}function FT(n){return n.e1l_1}function $T(n){return n.f1l_1}function JT(n){return n+1|0}function HT(n){return r=>n+r}function GT(n,r,e,t){return a=>"..."+ma(n,Or(a),r,e,t)}function KT(n,r,e,t){return a=>ma(n,Or(a),r,e,t)}function WT(n){return Fe(r=>{var e=n;return An(e,r)},1,0,8,"literal",[n])}function YT(n,r,e){return t=>$n(n,Or(t),r,e)}function ZT(n,r,e){return t=>$n(n,Or(t),r,e)}function VT(n,r,e,t,a,i,s,l){return u=>{var f=n,c=u.m1l_1;Di(f,c);var v=wT(r,u.i1l_1,u.k1l_1,e),h=t+"."+v,d=r.x1j_1,p=new ku(h,u.g1l_1,u.h1l_1,u.k1l_1,u.r1l_1,u.s1l_1,u.t1l_1);d.n(p);var g=u.p1l_1;if(g!=null){var y=a,x=new Xw(h,g,u.q1l_1);y.n(x)}var k=u.o1l_1;k==null||i.s2(h,k);var S=yT(r,t+"-"+v,s);return l.fa(Tl(r,u.j1l_1,"")),l.fa("export const "+S+u.u1l_1+" = "+u.l1l_1(h)+`;
`),Tl(r,u.j1l_1,"    ")+("    "+$e(v)+": "+S+",")}}function XT(n,r){var e=n.k2(),t=r.k2();return bt(e,t)}function cp(n){return Cr(n,"type")==="string"&&Cr(n,"format")==="binary"}function QT(n){return r=>{var e=r.k2(),t=r.l2(),a=Or(t),i;if(cp(a))i="File";else{var s;if(Cr(a,"type")==="array"){var l=ir(a,"items"),u;l==null?u=null:u=cp(l),s=u===!0}else s=!1;s?i="File[]":i="string"}var f=i;return $e(e)+(n.l1(e)?"":"?")+": "+f}}function r7(n){return r=>"    { pattern: "+An(n,zn(r.f1m_1))+", requirement: "+An(n,zn(r.g1m_1))+` },
`}function n7(n){return Zn(n)}function e7(n){return"    "+$e(n)+": "+Zn(n)+`,
`}function t7(n){return"    '"+n.v1l_1+"': "+n.w1l_1+`;
`}function a7(n){return"    '"+n.v1l_1+"': ["+M(n.x1l_1)+`],
`}function i7(n){return n+1|0}function s7(n){return r=>r===1?n:n+r}function o7(n){return eh(n)}function l7(n){return n+1|0}function u7(n){return r=>n+r}function f7(n){return n.hg().e1(1)}function c7(n){return Zn(n)}function v7(n){return Zn(n)}function h7(n){return Zn(n)}function d7(n,r){return e=>{var t=e.tf("required"),a=t==null?null:On(t),i=(a==null?null:Un(a))==="true",s=ir(e,"schema"),l;s==null?l=null:l=$n(n,s,r);var u=l,f;if(u==null)f=null;else{var c;u!=="unknown"?c=u:c=null,f=c}var v=f,h=v??"string",d=Cr(e,"name"),p=d??"";return Zn(p)+(i?"":"?")+": "+h}}function p7(n){return Zn(n)}function _7(n,r){return e=>{var t=e.k2(),a=e.l2(),i=$e(t),s=a instanceof er?a:null,l;s==null?l=null:l=$n(n,s,r);var u=l;return i+": "+(u??"unknown")}}function g7(n,r,e,t,a,i){return s=>{var l=M(Pt(n,"operation: '"+s+"'")),u=r?"stream":"request",f=M(e),c=a.toUpperCase();return"("+f+") => "+u+"<"+t+">('"+c+"', "+i+", { "+l+" })"}}function m7(n){return eh(n)}function y7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Kn(n){wr();for(var r=ge.af("[^A-Za-z0-9]+").nf(n,0),e=q.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}var i=e,s=M(i,"",o,o,o,o,S7),l;C(s)===0?l="Unnamed":l=s;var u=l;return GS($x(u))?"_"+u:u}function eh(n){wr();var r=zu(n),e;if(C(r)>0){var t=G(r,0),a=xr(t).toUpperCase();e=w(a)+Ye(r,1)}else e=r;return e}function zu(n){wr();for(var r=ge.af("[^A-Za-z0-9]+").nf(n,0),e=q.m(),t=r.x();t.y();){var a=t.z();C(a)>0&&e.n(a)}for(var i=e,s=q.f1(Mr(i,10)),l=0,u=i.x();u.y();){var f=u.z(),c=l;l=c+1|0;var v;if(Bi(c)===0){var h;if(C(f)>0){var d=G(f,0),p=xr(d).toLowerCase();h=w(p)+Ye(f,1)}else h=f;v=h}else{var g;if(C(f)>0){var y=G(f,0),x=xr(y).toUpperCase();g=w(x)+Ye(f,1)}else g=f;v=g}var k=v;s.n(k)}return M(s,"")}function th(n,r){r=r===o?Ft():r,wr();var e=zu(n);return Zv().bf(e)&&!Mq().l1(e)&&!r.l1(e)?e:"_"+e}function Hb(n){return wr(),th(n,Rq())}function $e(n){return wr(),Zv().bf(n)?n:Zn(n)}function Zn(n){wr();var r=Yr.f();r.ga(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.fa("\\\\");else if(t===39)r.fa("\\'");else if(t===10)r.fa("\\n");else if(t===13)r.fa("\\r");else if(mn(t,32)<0||t===8232||t===8233){var a=Y(t);r.fa("\\u"+Pm(KS(a,16),4,48))}else r.ga(t)}return r.ga(39),r.toString()}function Gb(n){wr();var r=n.tf("deprecated"),e=r instanceof vr?r:null;return(e==null?null:Bv(e))===!0}function Kb(n){wr();var r=n.tf("readOnly"),e=r instanceof vr?r:null;return(e==null?null:Bv(e))===!0}function ir(n,r){wr();var e=n.tf(r);return e instanceof er?e:null}function Eu(n){wr();for(var r=n.r2(),e=z7,t=new ib(e),a=Mt(r,t),i=ln(Mr(a,10),16),s=cr.na(i),l=a.x();l.y();){var u=l.z(),f=O(u.k2(),u.l2());s.s2(f.mh_1,f.nh_1)}return s}function pn(n,r){wr();var e=n.tf(r);return e instanceof dn?e:null}function Cr(n,r){wr();var e=n.tf(r),t=e instanceof vr?e:null;return t==null?null:Un(t)}function Iu(n,r){wr();for(var e=pn(n,r),t=e??fr(),a=q.f1(Mr(t,10)),i=t.x();i.y();){var s=i.z(),l=On(s).g18();a.n(l)}return a}function ah(n){wr();var r=Cr(n,"format"),e;return r==null?e=null:e=Sb().o2(r),e}function Wb(n){wr();var r=Cr(n,"format"),e;return r==null?e=null:e=qo().o2(r),e}function jl(n,r){wr();var e;if(n instanceof er){var t,a=Cr(n,"format");if((z(r,xn)?r:m()).m2(a))t=!0;else{var i=n.q2(),s;r:{var l;if(z(i,Z)?l=i.d1():l=!1,l){s=!1;break r}for(var u=i.x();u.y();){var f=u.z();if(jl(f,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof dn){var c;r:{var v;if(z(n,Z)?v=n.d1():v=!1,v){c=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(jl(d,r)){c=!0;break r}}c=!1}e=c}else e=!1;return e}function Ol(n){wr();var r;if(n instanceof er){var e;if(ah(n)!=null)e=!0;else{var t=n.q2(),a;r:{var i;if(z(t,Z)?i=t.d1():i=!1,i){a=!1;break r}for(var s=t.x();s.y();){var l=s.z();if(Ol(l)){a=!0;break r}}a=!1}e=a}r=e}else if(n instanceof dn){var u;r:{var f;if(z(n,Z)?f=n.d1():f=!1,f){u=!1;break r}for(var c=n.x();c.y();){var v=c.z();if(Ol(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var vp;function ih(){if(vp)return or;vp=!0,Yb=new Ao("ADD_ERROR",0,"add-error.ts"),Zb=new Ao("ADD_NESTED",1,"add-nested.ts"),Vb=new Ao("MATCHES",2,"matches.ts")}var Yb,Zb,Vb;function w7(n){return wr(),n.r16_1=!0,or}function b7(){wr();for(var n=ga(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages","passwordRules","passwordMessage","passwordStrength"]),r=en(["client.ts","form.ts","public-config.ts","api-with.ts"]),e=q.m(),t=r.x();t.y();){var a=t.z(),i=Dq().ef(De(a)),s=Na(i,k7);Cz(e,s)}return q1(n,e)}function k7(n){return wr(),n.hg().e1(1)}function x7(){return Fe(()=>xu(),0,0,9)}function S7(n){return wr(),eh(n)}function z7(n,r){wr();var e=n.k2(),t=r.k2();return bt(e,t)}function Xb(){return ih(),Yb}function E7(){return ih(),Zb}function hp(){return ih(),Vb}var dp;function wr(){dp||(dp=!0,gb=en(["get","post","put","patch","delete","head","options"]),mb=ge.af("[A-Za-z_$][A-Za-z0-9_$]*"),wb=ge.af("\\{([^}]+)\\}"),kb=H6(o,w7),xb=en(["guardPages","signedInUser","pageGuards"]),zb=_d([O("date","IsoDate"),O("time","IsoTime"),O("date-time","IsoDateTime")]),Eb=_d([O("duration","IsoDuration"),O("decimal","Decimal")]),Ib=Gs([O("IsoDuration","'PT0S'"),O("Decimal","'0'")]),Cb=ga(["string","integer","number"]),Ab=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,qb=ge.ze("^export (?:async )?(?:function\\*?|const|let|class) +([A-Za-z_$][A-Za-z0-9_$]*)",oz()),Tb=Wc(b7),jb=ga(["body","query","headers","options","encodeURIComponent"]),Ob=ga(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),Pb=ga(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Bb=en(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function pp(n,r){return r===1?"1 character":""+r+" characters"}var ui;function Dt(n){return n%1===0?Rn(n).toString():n.toString()}var dc;function Pl(){return dc===o&&new ob,dc}function I7(){return rk(),Qb}var Qb;function De(n){return rk(),qe(I7(),n)}var _p;function rk(){_p||(_p=!0,Qb=Gs([O("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
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
`)]))}function N7(n,r){var e;try{for(var t=new ab(jn(r)).k1m(n),a=je(),i=Kf.d18(),s=cr.na(t.c1()),l=t.r2().x();l.y();){var u=l.z(),f=u.k2(),c=zn(u.l2());s.s2(f,c)}e=a.u15(i,new er(Uo(O("files",new er(s)))))}catch(y){var v;if(y instanceof Error){var h=y,d=je(),p=Kf.d18(),g=h.message;v=d.u15(p,new er(Uo(O("error",zn(g??h.toString())))))}else throw y;e=v}return e}_(Kw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(hn,"InputHint");_(Ww,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(Yw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(sc,"EnumType");_(Zw,"EnumUsage");_(Vw,"Endpoint");_(Xw,"ErrorEntry");_(Qw,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(rb,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(nb,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(eb,"sam$kotlin_Comparator$0",o,o,[cn,yn]);_(tb);_(ab,"TypeScriptGenerator");_(Ao,"ValidationHelper");_(ku,"GeneratedOperation");_(ib,"sam$kotlin_Comparator$0",o,o,[cn,yn]);U(sb,"ConstraintMessages");_(et,"RuleCheck");_(li,"RulePreset");U(ob,"RulePresets");ui=new sb;export{N7 as generateTypeScript};
