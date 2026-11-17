typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,ju=ArrayBuffer.isView,ss=Math.clz32;class yc{}class Ee{}class Bh{}class Fh{constructor(r){this.w_1=r}x(){return Ap(this.w_1)}}class $h{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class Jh{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let Hh=class{constructor(){Fu=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Sn{constructor(r){Lc(),this.x1_1=r}i2(r){return mn(this.x1_1,r)}d(r){return Ab(this,r)}toString(){return yr(this.x1_1)}equals(r){return Tb(this.x1_1,r)}hashCode(){return qb(this.x1_1)}}class W{}class qe{}class En{}class Xe{}class yn{}class oa{}let Sw=class{};class ie{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Oe(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof ie?r:g())}equals(r){return this===r}hashCode(){return Hb(this)}toString(){return this.w2_1}}let Gh=class{constructor(){$u=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends Bh{constructor(r,e){Sl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return nr(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return mo(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return Lb(this)}valueOf(){return Yn(this)}}class bn{}class Kh{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw qr.r(""+this.h3_1);return r}}class Ew{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class zw{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Iw{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Cw{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Aw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Tw{}class qw{}class Wh{constructor(){r1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class dn{}class gl{toString(){return"kotlin.Unit"}}class _a{static x4(r){return bi(this,r)}l1(r){var e;r:{var t;if(E(this,W)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,$x(this))}toArray(){return i_(this)}}class ws extends _a{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class wc{constructor(r,e){Bc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw qr.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw Sr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class Yh extends wc{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),Un.j5(e,this.i5_1.c1()),this.a5_1=e}}class Zh extends ws{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new wc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Yh(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&E(r,En)?Un.n5(this,r):!1}hashCode(){return Un.o5(this)}}class Vh{static w5(){var r=bi(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return Fv(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&E(r,Xe)))return!1;var e=r.k2(),t=r.l2(),i=(E(this,yn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(E(this,yn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&E(r,yn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=Fv(this,r);return e==null?null:e.l2()}hashCode(){return Er(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=zd.pg(this)}return on(this.u5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,Hx(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=Id.sg(this)}return on(this.v5_1)}}class Xh extends Vh{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return ad.z5(this)}a6(){return od.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class bs extends ws{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&E(r,qe)?hs.f6(this,r):!1}hashCode(){return hs.g6(this)}}let Qh=class{constructor(){n1=this;var r=this,e=q.g1(0);e.l_1=!0,r.h6_1=e}};class ks{}class q extends Zh{constructor(r){return new.target.i4(r)}static i4(r){Ja();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Ja();var r=[];return this.i4(r)}static g1(r){Ja();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw j.v(b(i))}return t}static f1(r){Ja();var e=mi(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Ja().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[yu(this,r)]}v4(r,e){this.y4(),yu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(Ak(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=Ck(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Ts(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),yu(this,r),this.d5_1=this.d5_1+1|0;var e;return r===qs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return Rw(this.k_1,r)}toString(){return Fb(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw oe.p6()}}class os extends Xh{static w6(r){var e=this.t5();return Uk(e),e.u6_1=r,e}static x6(){return this.w6(Qe.i7())}static j7(r,e){return this.w6(Qe.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(Qe.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return rd.q7(this.u6_1)}a6(){return nd.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=td.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class rd extends bs{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw oe.p6()}h1(r){throw oe.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class nd extends ws{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw oe.p6()}n(r){return this.y7(r)}z7(r){throw oe.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class ed extends bs{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&E(r,Xe)?this.e8(r!=null&&E(r,Xe)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw oe.p6()}n(r){return this.f8(r!=null&&E(r,Xe)?r:g())}h1(r){throw oe.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class td extends ed{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class id{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class ad extends bs{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw oe.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new id(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class sd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class od extends ws{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw oe.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new sd(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class vi extends bs{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(Qe.i7())}static o8(r){for(var e=this.m8(Qe.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(Qe.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class ld{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class ml{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw Sr.o3(b(r))}this.g9_1.w7(),g_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw ho.m9()}}class ud extends ml{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class cd extends ml{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=on(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class fd extends ml{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new vd(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:Er(t),a=i??0,s=on(this.g9_1.z6_1)[this.i9_1],o=s==null?null:Er(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=on(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class vd{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return Ev(this),this.v8_1.y6_1[this.w8_1]}l2(){return Ev(this),on(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&E(r,Xe)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:Er(r),t=e??0,i=this.l2(),a=i==null?null:Er(i);return t^(a??0)}toString(){return le(this.k2())+"="+le(this.l2())}}class hd{}function Ow(n){var r;r:{var e;if(E(n,W)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&E(a,Xe)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class Qe{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=bi(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=f_(vs,nt(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(s_(r),null,new Int32Array(r),new Int32Array(c_(vs,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw j.v(b(i))}return t}n2(r){return Pk(this,r)>=0}o2(r){var e=ro(this,r);return e<0?null:on(this.z6_1)[e]}o7(r){return ro(this,r)>=0}s2(r,e){var t=__(this,r),i=h_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),Fk(this,r.r2())}t2(r){this.w7();var e=ro(this,r);if(e<0)return null;var t=on(this.z6_1)[e];return g_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);bo(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||bo(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,zl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&E(r,yn)?t=Rk(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=nn.fa(2+lr(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw oe.p6()}g8(r){var e=ro(this,r.k2());return e<0?!1:P(on(this.z6_1)[e],r.l2())}ga(r){return this.g8(E(r,Xe)?r:g())}v7(){return new ud(this)}a8(){return new cd(this)}d8(){return new fd(this)}}class vr extends os{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class An extends vi{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class tt{}class dd{ka(){var r="This continuation is already complete";throw Sr.o3(b(r))}la(r){var e="This continuation is already complete";throw Sr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class bc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(u1),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&on(this.ka().wa(u1)).ya(r),this.ta_1=m_}}class kc extends bc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return on(this.qa_1)}ra(r){var e=ps(),t=w0(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new ri(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===ps())return sr;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=b0(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class pd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;SS(r)&&e(r);var t=this.gb_1,i=w0(r);return i==null||t(i),sr}ma(r){return this.la(r)}}class ls extends Error{static nb(){var r=ra(this,Error,[null]);return na(r),ku(r),r}static k3(r){var e=ra(this,Error,[r]);return na(e,r),ku(e),e}static ob(r,e){var t=ra(this,Error,[r,Wp(e)]);return na(t,r,e),ku(t),t}}class se extends ls{static hb(){var r=this.nb();return bu(r),r}static a9(r){var e=this.k3(r);return bu(e),e}static mb(r,e){var t=this.ob(r,e);return bu(t),t}}class oe extends se{static p6(){var r=this.hb();return zv(r),r}static k8(r){var e=this.a9(r);return zv(e),e}}class j extends se{static kb(){var r=this.hb();return wu(r),r}static v(r){var e=this.a9(r);return wu(e),e}static lb(r,e){var t=this.mb(r,e);return wu(t),t}}class qr extends se{static j1(){var r=this.hb();return Iv(r),r}static r(r){var e=this.a9(r);return Iv(e),e}}class Kn extends se{static sb(){var r=this.hb();return Cv(r),r}static tb(r){var e=this.a9(r);return Cv(e),e}}class Sr extends se{static ub(){var r=this.hb();return Av(r),r}static o3(r){var e=this.a9(r);return Av(e),e}}class ho extends se{static m9(){var r=this.hb();return Tv(r),r}static u8(r){var e=this.a9(r);return Tv(e),e}}class Uu extends se{static yb(){var r=this.hb();return qv(r),r}static zb(r){var e=this.a9(r);return qv(e),e}}class po extends Error{static ec(){var r=ra(this,Error,[null]);return na(r),xu(r),r}static hc(r){var e=ra(this,Error,[r]);return na(e,r),xu(e),e}static gc(r,e){var t=ra(this,Error,[r,Wp(e)]);return na(t,r,e),xu(t),t}}class Va extends po{static cc(){var r=this.ec();return Ov(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return Ov(t),t}}class Nu extends j{static mc(){var r=this.kb();return jv(r),r}static nc(r){var e=this.v(r);return jv(e),e}}class Du extends se{static s3(){var r=this.hb();return Wk(r),r}}class Lu extends se{static w3(){var r=this.hb();return Yk(r),r}}class Pu extends se{static a4(){var r=this.hb();return Zk(r),r}}class Ge{}class ga{equals(r){var e;return r instanceof xc?e=!1:r instanceof ga?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:ae(r);return e??0}toString(){return"class "+this.oc()}}class en extends ga{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class xc extends ga{constructor(){ko=null,super(),ko=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw oe.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Mu extends ga{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return uk(r,this.vc_1)}}class yi{}class _d{constructor(){t1=this;var r=this,e=Object;r.anyClass=new en(e,"Any",ex);var t=this,i=Number;t.numberClass=new en(i,"Number",tx),this.nothingClass=nx();var a=this,s=Boolean;a.booleanClass=new en(s,"Boolean",ix);var o=this,u=Number;o.byteClass=new en(u,"Byte",ax);var c=this,f=Number;c.shortClass=new en(f,"Short",sx);var v=this,h=Number;v.intClass=new en(h,"Int",ox);var d=this,_=y;d.longClass=new en(_,"Long",lx);var m=this,w=Number;m.floatClass=new en(w,"Float",ux);var x=this,k=Number;x.doubleClass=new en(k,"Double",cx);var S=this,z=Array;S.arrayClass=new en(z,"Array",fx);var I=this,A=String;I.stringClass=new en(A,"String",vx);var O=this,D=Error;O.throwableClass=new en(D,"Throwable",hx);var J=this,T=Array;J.booleanArrayClass=new en(T,"BooleanArray",dx);var M=this,F=Uint16Array;M.charArrayClass=new en(F,"CharArray",px);var B=this,L=Int8Array;B.byteArrayClass=new en(L,"ByteArray",_x);var H=this,X=Int16Array;H.shortArrayClass=new en(X,"ShortArray",gx);var $=this,tr=Int32Array;$.intArrayClass=new en(tr,"IntArray",mx);var Y=this,G=typeof BigInt>"u"?l:BigInt;Y.bigIntClass=new en(G,"BigInt",yx);var ar=this,ur=Array;ar.longArrayClass=new en(ur,"LongArray",wx);var Q=this,Tr=Float32Array;Q.floatArrayClass=new en(Tr,"FloatArray",bx);var wr=this,dr=Float64Array;wr.doubleArrayClass=new en(dr,"DoubleArray",kx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=Uv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new en(i,a,xx(r));Uv()[r]=s,t=s}else t=e;return t}}class sv extends ls{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return ln(e,e.ud_1),e}static wd(){return this.vd(null)}}class nn{constructor(r){return new.target.xd(r)}static xd(r){var e=bi(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Kn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return te(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+le(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+le(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return Un.j5(r,this.a()),this.e_1=te(this.e_1,0,r)+yr(e)+at(this.e_1,r),this}de(r){if(r<0)throw j.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=te(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return Un.i6(r,this.a()),this.e_1=te(this.e_1,0,r)+at(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return Un.ge(e,t,i.length),this.e_1=this.e_1+te(i,e,t),this}}class gd{constructor(){i1=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class kt{constructor(r,e){return new.target.se(r,e)}static se(r,e){So();var t=bi(this);return t.me_1=r,t.ne_1=it(e),t.oe_1=new RegExp(r,qx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return So(),this.se(r,Tt())}ue(r){Ex(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Kn.tb("Start index out of bounds: "+e+", input length: "+C(r));return x_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Kn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=Ax(this,r,e);return t2(t,Tx)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=nn.fa(a);do{var o=on(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){tf(e);for(var t=this.xe(r),i=e===0?t:Sb(t,e-1|0),a=q.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(jn(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(jn(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class yl{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return ae(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof yl)||this.gf_1!==r.gf_1)}}class md extends _a{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=_b(Wx(this));return Ss(r,jx(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new yl(e),t}}class Sc extends _a{static wf(r){return this.x4(r)}x(){return new Ec(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new bd(this,r)}equals(r){return r===this?!0:r!=null&&E(r,En)?Un.n5(this,r):!1}hashCode(){return Un.o5(this)}}class yd extends Sc{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class wd{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=md.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=yd.vf(this.qf_1)}return on(this.of_1)}z(){return x_(this.rf_1,this.sf_1,this.pf_1.i1()?Ux(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let jw=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}};class gt extends ie{constructor(r,e,t){super(r,e),this.cg_1=t}}class Ec{constructor(r,e){Bc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw qr.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class bd extends Ec{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),Un.j5(e,this.lg_1.c1()),this.hg_1=e}}class kd{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Kn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Kn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Kn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw j.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Kn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw j.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:Er(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class xd{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class Sd{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class Uw{}class Ed extends _a{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&E(r,qe)?hs.f6(this,r):!1}hashCode(){return hs.g6(this)}}class zd extends Ed{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new xd(r)}c1(){return this.og_1.c1()}}class Id extends _a{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new Sd(r)}c1(){return this.rg_1.c1()}}class Cd{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:Er(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Ad{constructor(){a1=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&E(r,En)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Kn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return ds}m1(r){if(r!==0)throw Kn.tb("Index: "+r);return ds}}class Td{y(){return!1}z(){throw qr.j1()}}class wl{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+le(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=lr(r,31)+(this.xg_1==null?0:Er(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof wl)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class qd{constructor(r){this.yg_1=r}x(){return new Od(this.yg_1())}}class Od{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new wl(Ts(r),this.zg_1.z())}}class jd{}class Ud{constructor(){s1=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&E(r,yn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return l1()}p2(){return l1()}q2(){return j_()}}class Nd{z(){return this.jh()}}class Dd{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class Ld{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Dd(this)}}class bl{}class Pd{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw qr.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class kl{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw j.v(b(t))}}v1(r){return r>=this.rh_1?this:new kl(this.qh_1,r)}x(){return new Pd(this)}}class Md{x(){return ds}v1(r){return Tl}}class Rd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&Gv(this),this.th_1===0)throw qr.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&Gv(this),this.th_1===1}}class zc{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new Rd(this)}}class Bd{constructor(){o1=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&E(r,qe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return ds}}class Fd{zh(r,e){return Oe(r,e)}compare(r,e){var t=r!=null&&Yu(r)?r:g();return this.zh(t,e!=null&&Yu(e)?e:g())}}let $d=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}},Jd=class{};class Nw{}class Hd{constructor(){c1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class Gd extends ie{}class Kd extends Sc{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return Un.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=lv(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof ie?this.ei(r instanceof ie?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=lv(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof ie?this.fi(r instanceof ie?r:g()):-1}}class Wd{constructor(){f1=this,this.p1_1=new Ct(1,0)}}class xs{constructor(r,e,t){if(t===0)throw j.v("Step must be non-zero.");if(t===-2147483648)throw j.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=d2(r,e,t),this.t1_1=t}x(){return new Yd(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof xs?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class Xi{}class Ct extends xs{constructor(r,e){J_(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Ct?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class Yd extends Nd{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw qr.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class Zd{q1(r,e,t){return new xs(r,e,t)}}class Vd{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=bb(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&Zv(this),this.li_1===0)throw qr.j1();var r=this.oi_1,e=r instanceof Ct?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&Zv(this),this.li_1===1}}class Xd{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new Vd(this)}}class Dw{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class Qd{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=rr(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&rr(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw qr.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(jn(t,e,r))}}class rp{constructor(r){this.dj_1=r}x(){return new Qd(this.dj_1)}}class np{constructor(){v1=this,this.ej_1=new y(0,0),this.fj_1=zt(new y(-1,1073741823)),this.gj_1=zt(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new ye(r),t=e.kj_1;if(af(t)){var i=wn(t);if(!(nr(new y(387905,-1073741824),i)<=0&&nr(i,new y(-387905,1073741823))<=0))throw Va.fc(wn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=wn(t);if(nr(new y(1,-1073741824),s)<0&&nr(s,new y(-1,1073741823))<0)a=!1;else{var o=wn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw Va.fc(wn(t).toString()+" ms is out of milliseconds range");var u=wn(t);if(nr(new y(1108857478,-1074),u)<=0&&nr(u,new y(-1108857478,1073))<=0)throw Va.fc(wn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new ye(V2(r,!0)),i=t.kj_1;if(P(new ye(i),new ye(Jr().ij_1))){var a="invariant failed";throw Sr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof j){var s=o;throw j.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class ye{constructor(r){Jr(),this.kj_1=r}mj(r){return a0(this.kj_1,r)}d(r){return F2(this,r)}toString(){return K2(this.kj_1)}hashCode(){return Y2(this.kj_1)}equals(r){return Z2(this.kj_1,r)}}class ep{constructor(){h1=this,this.nj_1=new Ru(new y(-1,1073741823),!0),this.oj_1=new Ru(new y(-1,2147483647),!1)}}class Ru{constructor(r,e){f0(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Cr(i,R(10));var a=this,s=this.pj_1;a.sj_1=Et(s,R(10))}}class Lw{}class tp{constructor(){p1=this,this.tj_1=new rt(new y(342103040,-7347440),0),this.uj_1=new rt(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Cr(e,t);if(nr(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Br(a,Ze())}var s=i,o=hr(r,s);if(nr(Ae(r,o),new y(0,0))<0&&nr(Ae(r,s),new y(0,0))>=0)return nr(r,new y(0,0))>0?bt().uj_1:bt().tj_1;var u=o,c;if(nr(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(nr(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=Et(e,f),h=hr(v,fs(f,Es(fs(Ae(v,f),pi(v,tn(v))),63))),d=Vr(h);c=new rt(u,d)}return c}wj(r,e){return this.vj(r,R(e))}xj(r){return dS(r).yj()}}class rt{constructor(r,e){bt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(nr(new y(342103040,-7347440),t)<=0&&nr(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw j.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:Oe(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof rt?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof rt?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+lr(51,this.ak_1)|0}toString(){return hS(this)}}class ip{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(nr(this.kk_1,bt().tj_1.zj_1)<0||nr(this.kk_1,bt().uj_1.zj_1)>0)throw Ac.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return bt().wj(this.kk_1,this.lk_1)}}class Ic{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw Ac.qk(this.rk_1+' when parsing an Instant from "'+of(this.sk_1,64)+'"')}}class ap{ck(r){var e=r.zj_1,t=new y(86400,0),i=Cr(e,t);if(nr(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Br(a,Ze())}var s=i,o=new y(86400,0),u=Et(e,o),c=hr(u,fs(o,Es(fs(Ae(u,o),pi(u,tn(u))),63))),f=Vr(c),v,h,d,_=hr(s,R(719528)),m=_;_=Br(m,R(60));var w=new y(0,0);if(nr(_,new y(0,0))<0){var x=_,k=hr(x,R(1)),S=Cr(k,R(146097)),z=Br(S,R(1));w=Ar(z,R(400));var I=_,A=tn(z),O=Ar(A,R(146097));_=hr(I,O)}var D=Ar(On(400),_),J=hr(D,R(591)),T=Cr(J,R(146097)),M=_,F=Ar(On(365),T),B=T,L=Cr(B,R(4)),H=hr(F,L),X=T,$=Cr(X,R(100)),tr=Br(H,$),Y=T,G=Cr(Y,R(400)),ar=Br(M,hr(tr,G));if(nr(ar,new y(0,0))<0){var ur=T;T=Br(ur,Ze());var Q=_,Tr=Ar(On(365),T),wr=T,dr=Cr(wr,R(4)),Ir=hr(Tr,dr),br=T,kr=Cr(br,R(100)),Pr=Br(Ir,kr),_r=T,Gr=Cr(_r,R(400));ar=Br(Q,hr(Pr,Gr))}T=hr(T,w);var an=Vr(ar),Kr=(lr(an,5)+2|0)/153|0;h=((Kr+2|0)%12|0)+1|0,d=(an-((lr(Kr,306)+5|0)/10|0)|0)+1|0;var gr=T,Wr=Kr/10|0,Qr=hr(gr,R(Wr));v=Vr(Qr);var un=f/3600|0,Fr=f-lr(un,3600)|0,rn=Fr/60|0,pn=Fr-lr(rn,60)|0;return new Cc(v,h,d,un,rn,pn,r.ak_1)}}class Cc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class Ac extends j{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return ln(e,e.pk_1),e}}class sp{}class op{constructor(r){this.uk_1=r}}class lp extends sp{constructor(r,e){super();var t=this;t.vk_1=lk(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=E(this,tt)?this:g(),this.yk_1=zu()}ka(){return F_()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=E(t,tt)?t:g(),this.wk_1=r,ps()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new ri(r)instanceof ri?r:g();return CS(i),i}else t=e;var a=t;if(P(new ri(zu()),new ri(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=Jk(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=b0(c);a.ma(f);continue r}else throw d}var v=s;if(v!==ps()){var h=v;a.ma(h)}}else this.yk_1=zu(),a.ma(r)}}}class up extends ie{}class Tc{constructor(r){this.bl_1=r,this.cl_1=lo}l2(){return this.cl_1===lo&&(this.cl_1=on(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==lo}toString(){return this.dl()?le(this.l2()):"Lazy value not initialized yet."}}class cp{}class Pw{}class At{constructor(r){this.el_1=r}equals(r){var e;return r instanceof At?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return Er(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class ri{constructor(r){this.fl_1=r}toString(){return ES(this.fl_1)}hashCode(){return zS(this.fl_1)}equals(r){return IS(this.fl_1,r)}}class ov extends po{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return ln(e,e.ab_1),e}}class xl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+le(this.ch_1)+", "+le(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:Er(this.ch_1);return r=lr(r,31)+(this.dh_1==null?0:Er(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof xl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class fp{constructor(){_1=this,this.dg_1=new xt(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new xt(r,e),t}gl(r){var e;switch(r.length){case 36:e=Bx(r);break;case 32:e=Fx(r);break;default:throw j.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+AS(r,64)+'" of length '+r.length))}return e}}class xt{constructor(r,e){Us(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Ha(this.hl_1,r,0,0,4);var e=45,t=Z(e);r[8]=Dn(t),Ha(this.hl_1,r,9,4,6);var i=45,a=Z(i);r[13]=Dn(a),Ha(this.hl_1,r,14,6,8);var s=45,o=Z(s);r[18]=Dn(o),Ha(this.il_1,r,19,0,2);var u=45,c=Z(u);return r[23]=Dn(c),Ha(this.il_1,r,24,2,8),Nx(r)}equals(r){return this===r?!0:r instanceof xt?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=wt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=wt(i,s)}return e}d(r){return this.kl(r instanceof xt?r:g())}hashCode(){return Ae(this.hl_1,this.il_1).hashCode()}}class vp{constructor(){g1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class Pe{constructor(r){Pl(),this.pl_1=r}ql(r){return k0(this.pl_1,r)}d(r){return TS(this,r)}toString(){return m1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return qS(this.pl_1,r)}}class hp{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw qr.r(this.sl_1.toString());return r}z(){return new Pe(this.tl())}}class ei{constructor(r){this.ul_1=r}c1(){return li(this.ul_1)}x(){return US(this.ul_1)}vl(r){return x0(this.ul_1,r)}l1(r){return NS(this,r)}i1(){return DS(this.ul_1)}toString(){return LS(this.ul_1)}hashCode(){return PS(this.ul_1)}equals(r){return MS(this.ul_1,r)}}class dp{constructor(){y1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Vn{constructor(r){Ml(),this.am_1=r}bm(r){return S0(this.am_1,r)}d(r){return RS(this,r)}toString(){return w1(this.am_1)}hashCode(){return this.am_1}equals(r){return BS(this.am_1,r)}}class pp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw qr.r(this.dm_1.toString());return r}z(){return new Vn(this.em())}}class ti{constructor(r){this.fm_1=r}c1(){return ui(this.fm_1)}x(){return JS(this.fm_1)}gm(r){return E0(this.fm_1,r)}l1(r){return HS(this,r)}i1(){return GS(this.fm_1)}toString(){return KS(this.fm_1)}hashCode(){return WS(this.fm_1)}equals(r){return YS(this.fm_1,r)}}class _p{constructor(){b1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Xn{constructor(r){Ns(),this.lm_1=r}mm(r){return z0(this.lm_1,r)}d(r){return ZS(this,r)}toString(){return k1(this.lm_1)}hashCode(){return VS(this.lm_1)}equals(r){return XS(this.lm_1,r)}}class gp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw qr.r(this.om_1.toString());return r}z(){return new Xn(this.pm())}}class ii{constructor(r){this.qm_1=r}c1(){return ci(this.qm_1)}x(){return nE(this.qm_1)}rm(r){return I0(this.qm_1,r)}l1(r){return eE(this,r)}i1(){return tE(this.qm_1)}toString(){return iE(this.qm_1)}hashCode(){return aE(this.qm_1)}equals(r){return sE(this.qm_1,r)}}class mp{constructor(){x1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Me{constructor(r){Rl(),this.wm_1=r}xm(r){return C0(this.wm_1,r)}d(r){return oE(this,r)}toString(){return S1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return lE(this.wm_1,r)}}class yp{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw qr.r(this.zm_1.toString());return r}z(){return new Me(this.an())}}class ai{constructor(r){this.bn_1=r}c1(){return fi(this.bn_1)}x(){return fE(this.bn_1)}cn(r){return A0(this.bn_1,r)}l1(r){return vE(this,r)}i1(){return hE(this.bn_1)}toString(){return dE(this.bn_1)}hashCode(){return pE(this.bn_1)}equals(r){return _E(this.bn_1,r)}}function Mw(n){return new Ct(0,qc(n))}function Rw(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function Bw(n,r){return Hw(n,r)>=0}function Fw(n,r){return Gw(n,r)>=0}function $w(n,r){return Kw(n,r)>=0}function Jw(n,r){return Ww(n,r)>=0}function qc(n){return n.length-1|0}function Hw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Gw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Kw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function Ww(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Yw(n){return n.length-1|0}function wp(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Zw(n,nn.f(),r,e,t,i,a,s).toString()}function Zw(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)H_(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Vw(n){return new Ct(0,nb(n))}function Xw(n){var r;switch(n.length){case 0:r=mr();break;case 1:r=ze(n[0]);break;default:var e=n.slice();r=El(e);break}return r}function Qw(n){return new qd(sb(n))}function bp(n){switch(n.length){case 0:return Tt();case 1:return Kc(n[0]);default:return kp(n,An.i(n.length))}}function rb(n){return eb(n,q.m())}function nb(n){return n.length-1|0}function kp(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function eb(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function tb(n,r){return ab(n,r)>=0}function xp(n){var r;switch(n.length){case 0:throw qr.r("Array is empty.");case 1:r=n[0];break;default:throw j.v("Array has more than one element.")}return r}function ib(n){return n.length===0?M_():new Fh(n)}function ab(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function lv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function sb(n){return()=>Ap(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Sp(n,nn.f(),r,e,t,i,a,s).toString()}function Sp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)H_(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function ob(n){return us(n,vi.b1(Yr(n,12)))}function lb(n){for(var r=go(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function si(n){if(E(n,W)){if(n.c1()<=1)return ma(n);var r=mi(n),e=Is(r)?r:g();return vk(e),El(e)}var t=Uc(n);return zk(t),t}function la(n){return ma(jc(n))}function it(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=Tt();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=Kc(e);break;default:r=us(n,An.i(n.c1()));break}return r}return a2(us(n,An.e1()))}function be(n,r){if(E(r,W)){var e=q.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=q.f1(n);return Ea(t,r),t}}function ub(n){if(n.i1())throw qr.r("List is empty.");return n.d1(0)}function ma(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=mr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=ze(e);break;default:r=Ip(n);break}return r}return U_(Uc(n))}function Oc(n){return n.c1()===1?n.d1(0):null}function cb(n,r){var e=n.x();if(!e.y())throw qr.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function jc(n){var r;return E(n,W)?r=An.k1(n):r=us(n,An.e1()),r}function hi(n,r){var e=q.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function fb(n,r){return E(n,W)?n.l1(r):db(n,r)>=0}function du(n){return n.i1()?null:n.d1(0)}function Ep(n){var r;switch(n.c1()){case 0:throw qr.r("List is empty.");case 1:r=n.d1(0);break;default:throw j.v("List has more than one element.")}return r}function vb(n){if(E(n,En))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function hb(n,r){var e;if(E(n,W)){var t=n.c1()-r|0;if(t<=0)return mr();if(t===1)return ze(pb(n));if(e=q.g1(t),E(n,En)){if(E(n,ks)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=q.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return U_(e)}function zp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function us(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Uc(n){return E(n,W)?Ip(n):us(n,q.m())}function wi(n,r){if(E(n,W)){if(n.c1()<=1)return ma(n);var e=mi(n),t=Is(e)?e:g();return hk(t,r),El(t)}var i=Uc(n);return Ik(i,r),i}function Ip(n){return q.f1(n)}function db(n,r){if(E(n,En))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Ts(e),P(r,i))return e;e=e+1|0}return-1}function pb(n){if(E(n,En))return Bu(n);var r=n.x();if(!r.y())throw qr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Bu(n){if(n.i1())throw qr.r("List is empty.");return n.d1(qs(n))}function _b(n){return new $h(n)}function gb(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Oe(e,t)>0&&(e=t)}return e}function Nc(n,r){return r<=-2147483648?J_().p1_1:Le(n,r-1|0)}function mb(n,r){return nf.q1(n,r,-1)}function St(n,r){return n>r?r:n}function fn(n,r){return n<r?r:n}function yb(n,r){return nf.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Dc(n,r,e){if(nr(r,e)>0)throw j.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return nr(n,r)<0?r:nr(n,e)>0?e:n}function wb(n,r){return nr(n,r)<0?r:n}function bb(n,r,e){if(r>e)throw j.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function pu(n,r){return nr(n,r)>0?r:n}function to(n,r){var e=kb(r);return e!=null?n.u1(e):!1}function kb(n){return nr(new y(-2147483648,-1),n)<=0&&nr(n,new y(2147483647,0))<=0?Vr(n):null}function Ss(n,r){return new Ld(n,r)}function Cp(n){var r=n.x();if(!r.y())return mr();var e=r.z();if(!r.y())return ze(e);var t=q.m();for(t.n(e);r.y();)t.n(r.z());return t}function xb(n){return new Jh(n)}function Sb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw j.v(b(e))}var t;return r===0?t=M_():E(n,bl)?t=n.v1(r):t=new kl(n,r),t}function uv(n,r){var e=Zx(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=An.i(i??lr(n.c1(),2));return a.h1(n),Ea(a,r),a}function _o(n,r){var e=An.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function Eb(n){if(C(n)===0)throw qr.r("Char sequence is empty.");return rr(n,0)}function zb(n){var r;switch(C(n)){case 0:throw qr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw j.v("Char sequence has more than one element.")}return r}function Ib(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw j.v(b(e))}return at(n,St(r,n.length))}function Cb(n){var r=n&65535;return r}function mn(n,r){return n-r|0}function Ab(n,r){return mn(n.x1_1,r instanceof Sn?r.x1_1:g())}function ee(n,r){return n-r|0}function Z(n){return n}function yr(n){return String.fromCharCode(n)}function Tb(n,r){return r instanceof Sn?n===r.x1_1:!1}function qb(n){return n}var Fu;function Lc(){return Fu===l&&new Hh,Fu}function le(n){var r=n==null?null:b(n);return r??"null"}function Ob(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var $u;function Sl(){return $u===l&&new Gh,$u}function jb(n){var r;return n<0?r=-n:r=n,r}function Ap(n){return new Kh(n)}function go(n){var r="BooleanArray",e=Tp(Array(n),!1);return e.$type$=r,e}function Tp(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function cs(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function di(n){var r="LongArray",e=Tp(Array(n),new y(0,0));return e.$type$=r,e}function ya(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function _u(){return wa(),qp}var qp;function Op(){return wa(),jp}var jp;function Ju(){return wa(),Up}var Up;function Np(){return wa(),Dp}var Dp;function Ub(){return wa(),Lp}var Lp;function Nb(n){return wa(),(n|0)===n?yo(n):(Op()[0]=n,lr(Ju()[Ub()],31)+Ju()[Np()]|0)}var cv;function wa(){cv||(cv=!0,qp=new ArrayBuffer(8),jp=new Float64Array(_u()),new Float32Array(_u()),Up=new Int32Array(_u()),Op()[0]=-1,Dp=Ju()[0]!==0?1:0,Lp=1-Np()|0)}function Ye(){return pr(),Pp}var Pp;function Ze(){return pr(),Mp}var Mp;function fv(){return pr(),Rp}var Rp;function Db(){return pr(),Bp}var Bp;function De(){return pr(),Fp}var Fp;function vv(){return pr(),$p}var $p;function nr(n,r){if(pr(),ir(n,r))return 0;var e=me(n),t=me(r);return e&&!t?-1:!e&&t?1:me(Br(n,r))?-1:1}function Hu(n){return pr(),Dn(n.d3_1)}function Gu(n){return pr(),$c(n.d3_1)}function Vr(n){return pr(),n.d3_1}function Yn(n){return pr(),n.e3_1*4294967296+Pb(n)}function mo(n,r){if(pr(),oi(n))return"0";if(me(n))if(ir(n,De())){var e=R(r),t=Cr(n,e),i=Vr(Br(Ar(t,e),n)),a=mo(t,r);return a+i.toString(r)}else return"-"+mo(tn(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=ua(Math.pow(r,s)),u=n,c="";;){var f=Cr(u,o),v=Vr(Br(u,Ar(f,o))),h=v.toString(r);if(u=f,oi(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return pr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Lb(n){return pr(),n.d3_1^n.e3_1}function R(n){return pr(),new y(n,n<0?-1:0)}function me(n){return pr(),n.e3_1<0}function Br(n,r){return pr(),hr(n,tn(r))}function Pb(n){return pr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function oi(n){return pr(),n.e3_1===0&&n.d3_1===0}function Ar(n,r){if(pr(),oi(n))return Ye();if(oi(r))return Ye();if(ir(n,De()))return hv(r)?De():Ye();if(ir(r,De()))return hv(n)?De():Ye();if(me(n)){var e;return me(r)?e=Ar(tn(n),tn(r)):e=tn(Ar(tn(n),r)),e}else if(me(r))return tn(Ar(n,tn(r)));if(dv(n,vv())&&dv(r,vv()))return ua(Yn(n)*Yn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+lr(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+lr(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,f)+lr(i,c)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function tn(n){return pr(),hr(Pc(n),new y(1,0))}function ua(n){if(pr(),As(n))return Ye();if(n<=-9223372036854776e3)return De();if(n+1>=9223372036854776e3)return Db();if(n<0)return tn(ua(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){pr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function hv(n){return pr(),(n.d3_1&1)===1}function dv(n,r){return pr(),nr(n,r)<0}function Pc(n){return pr(),new y(~n.d3_1,~n.e3_1)}function Cr(n,r){if(pr(),oi(r))throw ls.k3("division by zero");if(oi(n))return Ye();if(ir(n,De())){if(ir(r,Ze())||ir(r,fv()))return De();if(ir(r,De()))return Ze();var e=Es(n,1),t=Zn(Cr(e,r),1);if(ir(t,Ye()))return me(r)?Ze():fv();var i=Br(n,Ar(r,t));return hr(t,Cr(i,r))}else if(ir(r,De()))return Ye();if(me(n)){var a;return me(r)?a=Cr(tn(n),tn(r)):a=tn(Cr(tn(n),r)),a}else if(me(r))return tn(Cr(n,tn(r)));for(var s=Ye(),o=n;Rb(o,r);){for(var u=Yn(o)/Yn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=ua(c),d=Ar(h,r);me(d)||Mb(d,o);)c=c-v,h=ua(c),d=Ar(h,r);oi(h)&&(h=Ze()),s=hr(s,h),o=Br(o,d)}return s}function Es(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Zn(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function Mb(n,r){return pr(),nr(n,r)>0}function Rb(n,r){return pr(),nr(n,r)>=0}function Et(n,r){return pr(),Br(n,Ar(Cr(n,r),r))}function fs(n,r){return pr(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function pi(n,r){return pr(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Ae(n,r){return pr(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Mc(n,r){pr();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function On(n){pr();var r;return n instanceof y?r=n:r=ua(n),r}function Qi(n){return pr(),_i(n)&&n.$type$==="LongArray"}function Bb(n){return pr(),n!=null?Qi(n):!1}var pv;function pr(){if(!pv){pv=!0,Pp=R(0),Mp=R(1),Rp=R(-1),Bp=new y(-1,2147483647),Fp=new y(0,-2147483648),$p=R(16777216);var n=Array;new en(n,"LongArray",Bb)}}function rr(n,r){var e;return Rc(n)?e=K(n,r):e=n.b(r),e}function Rc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Rc(n)?r=n.length:r=n.a(),r}function jn(n,r,e){var t;return Rc(n)?t=te(n,r,e):t=n.c(r,e),t}function Fb(n){return wp(n,", ","[","]",l,l,$b)}function Jp(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!Qp(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function Hp(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+Er(r[a])|0}while(t<i);return e}function $b(n){return b(n)}function Oe(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=_v(n,r):r instanceof y?t=_v(n,Yn(r)):t=gv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=gv(n,r);break;default:e=Jb(n,r);break}return e}function _v(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function gv(n,r){return n<r?-1:n>r?1:0}function Jb(n,r){return n.d(r)}function Hb(n){return Ku(n)}function Ku(n){if(!("kotlinHashCodeValue$"in n)){var r=Gp(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function Gp(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":Qp(n)?r="[...]":typeof n.toString!="function"?r=Gb(n):r=n.toString(),r}function Gb(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Wu(n)&&Wu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!_i(n.$bound)||!_i(r.$bound))return!1;var a=n.$bound,s=r.$bound;return Jp(a,s)}return n===r}function Er(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Ku(n);break;case"function":e=Wu(n)?Kb(n):Ku(n);break;case"number":e=Nb(n);break;case"boolean":e=Kp(n);break;case"string":e=ae(String(n));break;case"bigint":e=Wb(n);break;case"symbol":e=Yb(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Kb(n){var r=n.$flags;r=lr(31,r)+Er(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&_i(i)){var a=i;r=lr(31,r)+Hp(a)|0}return r}function Kp(n){return n?1231:1237}function ae(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function Wb(n){var r=BigInt(32),e=BigInt(4294967295),t=jb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function Yb(n){var r=Zb(n)?Vb():Xb(),e=r.get(n);if(e!==l)return e;var t=Gp();return r.set(n,t),t}function Zb(n){return Symbol.keyFor(n)!=l}function Vb(){return gu===l&&(gu=new Map),gu}function Xb(){return mu===l&&(mu=new WeakMap),mu}var gu,mu;function ln(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function bi(n,r){var e=Object.create(n.prototype);return Bc(e,r),e}function Bc(n,r){r!==l&&Object.assign(n,r)}function ra(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function Qb(n){return n===l}function Wp(n){return{cause:n}}function na(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(Qb(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function rk(){return Zp(),Yp}var Yp;function nk(n,r){return Zp(),n!=l&&n[rk()]?r(n):Gk(r)}var mv;function Zp(){mv||(mv=!0,Yp=tt.Symbol)}function zs(){throw Du.s3()}function ek(){throw Lu.w3()}function g(){throw Pu.a4()}function on(n){var r;return n==null?ek():r=n,r}function Vp(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Fc(u,n,r,e,t,i,a,s,o)}function Fc(n,r,e,t,i,a,s,o,u){var c=Vp(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function N(n,r,e,t,i,a,s,o){var u="object";Fc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Fc(u,n,r,e,t,i,a,s,o)}function Xr(n,r,e,t){N(n,"Companion",l,r,e,t,l,l)}function tk(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&Is(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function Dn(n){return n<<24>>24}function yo(n){var r;return n instanceof y?r=Vr(n):r=ik(n),r}function ik(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function $c(n){return n<<16>>16}function Ke(n){var r=yo(n),e=$c(r);return Cb(e)}function Le(n,r){return new Ct(n,r)}function ak(){return ka(),Xp}var Xp;function Ji(){return ka(),Vp("class",l,l,l,l,l)}function ba(n,r,e,t,i,a){return ka(),t.get=t,t.set=i,t.callableName=n,sk(t,ok(r,i),e)}function sk(n,r,e){ka(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function ok(n,r){return ka(),ak()[n][r==null?0:1]}function Re(n,r,e,t,i,a){return ka(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var yv;function ka(){if(!yv){yv=!0;var n=[Ji(),Ji()],r=[Ji(),Ji()];Xp=[n,r,[Ji(),Ji()]]}}function Qp(n){return _i(n)||ju(n)}function _i(n){return Array.isArray(n)}function Wu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function E(n,r){return n[r.Symbol]===!0}function Is(n){var r;return _i(n)?r=!n.$type$:r=!1,r}function lk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function r_(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Yu(n){var r=typeof n;return r==="string"||r==="boolean"||r_(n)||E(n,Ee)}function Cs(n){return typeof n=="string"||E(n,yc)}function Xa(n){return _i(n)&&n.$type$==="BooleanArray"}function Qa(n){return n instanceof Int8Array}function rs(n){return n instanceof Int16Array}function ns(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function es(n){return n instanceof Int32Array}function ts(n){return n instanceof Float32Array}function is(n){return n instanceof Float64Array}function uk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?ck(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?E(n,i):n instanceof i}function ck(n){return Object.getPrototypeOf(n)}var l;function gi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function n_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}return y_(n,r,null)}function Jc(n,r){return Jp(n,r)}function fk(n){return Hp(n)}function El(n){return q.i4(n)}function Zu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,cs(r));else if(r>t){var a=cs(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function Vu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Xu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function ca(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}return ki(n,di(r))}function fa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function va(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t=n.length,i;if(r<16||t<16)i=ki(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Qu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw j.v(b(e))}var t="BooleanArray",i=y_(n,r,!1);return i.$type$=t,i}function vk(n){n.length>1&&Tk(n)}function hk(n,r){n.length>1&&o_(n,r)}function e_(n){var r=Z(n),e=pk(wv().j4_1,r),t=r-wv().j4_1[e]|0;return t<10?t:-1}function dk(n){return e_(n)>=0}function pk(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var r1;function wv(){return r1===l&&new Wh,r1}function _k(n){var r=Z(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function gk(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function As(n){return n!==n}function mk(n){var r;return n===0?r=0:r=1<<(31-ss(n)|0),r}function yk(n){return n===1/0||n===-1/0}function bv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+ss(t)|0}else e=ss(r);return e}function Hc(n){return!wk(n)&&!bk(n)}function Gc(n){return!yk(n)&&!As(n)}function t_(n){var r=n.d3_1;return r===0?32+kv(n.e3_1)|0:kv(r)}function wk(n){return n===1/0||n===-1/0}function bk(n){return n!==n}function kv(n){var r=~(n|(-n|0));return 32-ss(r)|0}var sr;function ea(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function wt(n,r){return Ae(n,new y(0,-2147483648)).f3(Ae(r,new y(0,-2147483648)))}function kk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function xk(n,r){var e=n,t=r;if(nr(t,new y(0,0))<0){var i;return wt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(nr(e,new y(0,0))>=0)return Cr(e,t);var a=Zn(Cr(Mc(e,1),t),1),s=Br(e,Ar(a,t)),o,u=s,c=t;wt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,R(f));return v}function Sk(n,r){if(nr(n,new y(0,0))>=0)return Su(n,r);var e=Mc(n,1),t=Cr(e,R(r)),i=Zn(t,1),a=i,s=Ar(a,R(r)),o=Br(n,s);if(nr(o,R(r))>=0){var u=o;o=Br(u,R(r));var c=i;i=hr(c,R(1))}return Su(i,r)+Su(o,r)}function mi(n){var r;return n.toArray!==void 0?r=n.toArray():r=i_(n),r}function Ts(n){return n<0&&Gx(),n}function Ek(n,r,e,t,i){Un.u4(t,i,n.length);var a=i-t|0;if(Un.u4(e,e+a|0,r.length),ju(r)&&ju(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function i_(n){return Kx(n)}function ze(n){var r=[n];return q.i4(r)}function wo(n){return n2([n])}function Kc(n){return s2([n])}function zk(n){a_(n,R_())}function Ik(n,r){a_(n,r)}function a_(n,r){if(n.c1()<=1)return sr;var e=mi(n);o_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function s_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw j.v(b(r))}return Array(n)}function bo(n,r,e){n.fill(null,r,e)}function xv(n,r){return n_(n,r)}function Sv(n,r){n[r]=null}var n1;function Ja(){return n1===l&&new Qh,n1}function Ck(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function yu(n,r){return Un.i6(r,n.c1()),r}function Ak(n,r){return Un.j5(r,n.c1()),r}var io;function o_(n,r){if(l_()){var e=qk(r);n.sort(e)}else u_(n,0,qc(n),r)}function Tk(n){if(l_()){var r=Ok;n.sort(r)}else u_(n,0,qc(n),R_())}function l_(){var n=io;if(n!=null)return n;io=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=jk;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return io=!0,!0}function u_(n,r,e,t){var i=n.length,a=Array(i),s=e1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function e1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=e1(n,r,e,a,i),o=e1(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function qk(n){return(r,e)=>n.compare(r,e)}function Ok(n,r){return Oe(n,r)}function jk(n,r){return(n&3)-(r&3)|0}function Uk(n){n.v6_1=null}function c_(n,r){return mk(lr(fn(r,1),3))}function f_(n,r){return ss(r)+1|0}function Ev(n){if(n.v8_1.f7_1!==n.x8_1)throw ho.u8("The backing map has been modified after this entry was obtained.")}function ha(n){return n.y6_1.length}function nt(n){return n.b7_1.length}function zl(n){n.f7_1=n.f7_1+1|0}function v_(n,r){Nk(n,r)?d_(n,!0):Dk(n,n.d7_1+r|0)}function Nk(n,r){var e=ha(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(ha(n)/4|0)}function Dk(n,r){if(r<0)throw se.a9("too many elements");if(r>ha(n)){var e=Un.b9(ha(n),r);n.y6_1=xv(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:xv(i,e),n.a7_1=gi(n.a7_1,e);var a=c_(vs,e);a>nt(n)&&p_(n,a)}}function h_(n){var r=n.z6_1;if(r!=null)return r;var e=s_(ha(n));return n.z6_1=e,e}function Il(n,r){return r==null?0:lr(Er(r),-1640531527)>>>n.e7_1|0}function d_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}bo(n.y6_1,t,n.d7_1),i==null||bo(i,t,n.d7_1),n.d7_1=t}function p_(n,r){zl(n),n.d7_1>n.g7_1&&d_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=f_(vs,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!Lk(n,t))throw Sr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Lk(n,r){for(var e=Il(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function ro(n,r){for(var e=Il(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function Pk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(on(n.z6_1)[e],r))return e}return-1}function __(n,r){n.w7();r:for(;;)for(var e=Il(n,r),t=St(lr(n.c7_1,2),nt(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=ha(n)){v_(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,zl(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){p_(n,lr(nt(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=nt(n)-1|0)}}function g_(n,r){Sv(n.y6_1,r);var e=n.z6_1;e==null||Sv(e,r),Mk(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,zl(n)}function Mk(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,sr;var o=Il(n,n.y6_1[s-1|0]);((o-e|0)&(nt(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function Rk(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function Bk(n,r){var e=__(n,r.k2()),t=h_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function Fk(n,r){if(r.i1())return!1;v_(n,r.c1());for(var e=r.x(),t=!1;e.y();)Bk(n,e.z())&&(t=!0);return t}var vs,m_;function $k(n,r){var e=new kc(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function Jk(n,r,e,t){var i=new kc(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function Hk(n){var r=n instanceof bc?n:null,e=r==null?null:r.va();return e??n}function Gk(n){return new Promise(Kk(n))}function Kk(n){return(r,e)=>{var t=F_(),i=new pd(t,r,e);return c2(n,i),sr}}function zv(n){ln(n,n.o6_1)}function wu(n){ln(n,n.u_1)}function bu(n){ln(n,n.z8_1)}function ku(n){ln(n,n.j3_1)}function Iv(n){ln(n,n.q_1)}function Cv(n){ln(n,n.rb_1)}function Av(n){ln(n,n.n3_1)}function Tv(n){ln(n,n.t8_1)}function qv(n){ln(n,n.xb_1)}function Ov(n){ln(n,n.bc_1)}function xu(n){ln(n,n.dc_1)}function jv(n){ln(n,n.lc_1)}function Wk(n){ln(n,n.r3_1)}function Yk(n){ln(n,n.v3_1)}function Zk(n){ln(n,n.z3_1)}function ki(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function y_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function ao(n,r){return new Tc(r)}function w_(n){return new Tc(n)}function Vk(n){return Vr(pi(Es(n,63),Mc(tn(n),63)))}function Xk(n){return nr(n,new y(0,0))<0?tn(n):n}function Qk(n){var r;if(As(n))throw j.v("Cannot round NaN value.");return n>Yn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Yn(new y(0,-2147483648))?r=new y(0,-2147483648):r=On(Math.round(n)),r}function rx(n){return n<0?-n|0:n}var ko;function nx(){return ko===l&&new xc,ko}function Uv(){return Sx(),b_}var b_;function ex(n){return n!=null}function tx(n){return r_(n)}function ix(n){return n!=null?typeof n=="boolean":!1}function ax(n){return n!=null?typeof n=="number":!1}function sx(n){return n!=null?typeof n=="number":!1}function ox(n){return n!=null?typeof n=="number":!1}function lx(n){return n instanceof y}function ux(n){return n!=null?typeof n=="number":!1}function cx(n){return n!=null?typeof n=="number":!1}function fx(n){return n!=null?Is(n):!1}function vx(n){return n!=null?typeof n=="string":!1}function hx(n){return n instanceof Error}function dx(n){return n!=null?Xa(n):!1}function px(n){return n!=null?ns(n):!1}function _x(n){return n!=null?Qa(n):!1}function gx(n){return n!=null?rs(n):!1}function mx(n){return n!=null?es(n):!1}function yx(n){return typeof n=="bigint"}function wx(n){return n!=null?Qi(n):!1}function bx(n){return n!=null?ts(n):!1}function kx(n){return n!=null?is(n):!1}function xx(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var t1;function xr(){return t1===l&&new _d,t1}var Nv;function Sx(){Nv||(Nv=!0,b_=Array(0))}function jr(n){if(n===String)return xr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Mu(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Mu(n);return e}function Ur(n){var r;switch(typeof n){case"string":r=xr().stringClass;break;case"number":var e;(n|0)===n?e=xr().intClass:e=xr().doubleClass,r=e;break;case"bigint":r=xr().bigIntClass;break;case"boolean":r=xr().booleanClass;break;case"function":var t=xr();r=t.functionClass(n.length);break;default:var i;if(Xa(n))i=xr().booleanArrayClass;else if(ns(n))i=xr().charArrayClass;else if(Qa(n))i=xr().byteArrayClass;else if(rs(n))i=xr().shortArrayClass;else if(es(n))i=xr().intArrayClass;else if(Qi(n))i=xr().qd();else if(ts(n))i=xr().floatArrayClass;else if(is(n))i=xr().doubleArrayClass;else if(E(n,Ge))i=jr(Ge);else if(Is(n))i=xr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=xr().anyClass;else if(a===Error)s=xr().throwableClass;else{var o=a;s=jr(o)}i=s}r=i;break}return r}function Ex(n){n.lastIndex=0}function Dv(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function zx(n){return 48<=n&&n<=57?!0:mn(n,128)<0?!1:dk(n)}function Wc(n){return _k(n)}function Su(n,r){return mo(n,xa(r))}function xa(n){if(!(2<=n&&n<=36))throw j.v("radix "+n+" was not in valid range 2..36");return n}function Yc(n){var r=+n,e;return As(r)&&!k_(n)||r===0&&lt(n)?e=null:e=r,e}function Ix(n,r){return n.toString(xa(r))}function xo(n){var r=+n;return(As(r)&&!k_(n)||r===0&&lt(n))&&za(n),r}function Cl(n,r){var e=mn(n,48)>=0&&mn(n,57)<=0?ee(n,48):mn(n,65)>=0&&mn(n,90)<=0?ee(n,65)+10|0:mn(n,97)>=0&&mn(n,122)<=0?ee(n,97)+10|0:mn(n,128)<0?-1:mn(n,65313)>=0&&mn(n,65338)<=0?ee(n,65313)+10|0:mn(n,65345)>=0&&mn(n,65370)<=0?ee(n,65345)+10|0:e_(n);return e>=r?-1:e}function Cx(n){var r=Ol(n),e;return r==null?za(n):e=r,e}function k_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var i1;function So(){return i1===l&&new gd,i1}function Ax(n,r,e){return()=>n.re(r,e)}function Tx(n){return n.z()}function qx(n,r){return V(n,"",r,l,l,l,Ox)}function x_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Le(i.index,n.lastIndex-1|0);return new wd(a,i,t,r)}function Ox(n){return n.jf_1}function jx(n){return r=>n.d1(r)}function Ux(n,r){if(r<ot(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function te(n,r,e){return n.substring(r,e)}function at(n,r){return n.substring(r)}function Nx(n){return Lx(n,0,n.length)}function Wn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(So().ke(r),t?"gui":"gu"),a=So().le(e);return n.replace(i,a)}function ke(n,r,e){return e=e===l?!1:e,e?Zc(n,0,r,0,r.length,e):n.startsWith(r,0)}function Zc(n,r,e,t,i,a){return a=a===l?!1:a,jl(n,r,e,t,i,a)}function Dx(n,r,e){return e=e===l?!1:e,e?Zc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Lv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!ql(s,o,e))return!1}while(t<i);return!0}function Lx(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw j.v(b(i))}for(var a=r,s=nn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(Ke(u));else if(u>>5===-2){var c=Px(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(Ke(c)),a=a+1|0)}else if(u>>4===-2){var f=Mx(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(Ke(f)),a=a+2|0)}else if(u>>3===-2){var v=Rx(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(Ke(h)),s.da(Ke(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Px(n,r,e,t,i){if(!(r&30)||e>=t)return In(0);var a=n[e];return(a&192)!==128?In(0):r<<6^a^3968}function Mx(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return In(0)}else if((a&192)!==128)return In(0)}else if((a&224)!==160)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];return(s&192)!==128?In(1):r<<12^a<<6^s^-123008}function Rx(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return In(0)}else if((r&15)>4)return In(0)}else if((a&240)<=128)return In(0);if((a&192)!==128)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];if((s&192)!==128)return In(1);if((e+2|0)===t)return In(2);var o=n[e+2|0];return(o&192)!==128?In(2):r<<18^a<<12^s<<6^o^3678080}function In(n,r,e){return-n|0}var Pv;function Sa(){if(Pv)return sr;Pv=!0,S_=new gt("NANOSECONDS",0,1),new gt("MICROSECONDS",1,1e3),E_=new gt("MILLISECONDS",2,1e6),z_=new gt("SECONDS",3,1e9),I_=new gt("MINUTES",4,6e10),C_=new gt("HOURS",5,36e11),A_=new gt("DAYS",6,864e11)}var S_,E_,z_,I_,C_,A_;function T_(n,r,e){var t=Oe(r.cg_1,e.cg_1),i;if(t>0){var a=On(r.cg_1/e.cg_1),s=Ar(n,a);i=ir(Cr(s,a),n)?s:nr(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Cr(n,On(e.cg_1/r.cg_1)):i=n;return i}function Mv(n,r,e){var t=Oe(r.cg_1,e.cg_1);return t>0?Ar(n,On(r.cg_1/e.cg_1)):t<0?Cr(n,On(e.cg_1/r.cg_1)):n}function Eo(){return Sa(),S_}function zo(){return Sa(),E_}function Vc(){return Sa(),z_}function q_(){return Sa(),I_}function O_(){return Sa(),C_}function Xc(){return Sa(),A_}function Ha(n,r,e,t,i){var a=e;t<4&&(a=Rv(n.e3_1,r,a,t,St(i,4))),i>4&&Rv(n.d3_1,r,a,fn(t-4|0,0),i-4|0)}function Bx(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Z(o);if(!(u>>>8|0)&&gn()[u]>=0){s=gn()[u];break r}Gn(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";Gn(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Z(w);if(!(x>>>8|0)&&gn()[x]>=0){m=gn()[x];break r}Gn(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Gn(n,S,13)}var z=0,I=14;if(I<18)do{var A=I;I=I+1|0;var O=z<<4,D;r:{var J=K(n,A),T=Z(J);if(!(T>>>8|0)&&gn()[T]>=0){D=gn()[T];break r}Gn(n,r,A)}z=O|D}while(I<18);var M=z;if(K(n,18)!==45){var F="'-' (hyphen)";Gn(n,F,18)}var B=0,L=19;if(L<23)do{var H=L;L=L+1|0;var X=B<<4,$;r:{var tr=K(n,H),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){$=gn()[Y];break r}Gn(n,r,H)}B=X|$}while(L<23);var G=B;if(K(n,23)!==45){var ar="'-' (hyphen)";Gn(n,ar,23)}var ur=0,Q=24;if(Q<28)do{var Tr=Q;Q=Q+1|0;var wr=ur<<4,dr;r:{var Ir=K(n,Tr),br=Z(Ir);if(!(br>>>8|0)&&gn()[br]>=0){dr=gn()[br];break r}Gn(n,r,Tr)}ur=wr|dr}while(Q<28);var kr=ur,Pr=0,_r=28;if(_r<36)do{var Gr=_r;_r=_r+1|0;var an=Pr<<4,Kr;r:{var gr=K(n,Gr),Wr=Z(gr);if(!(Wr>>>8|0)&&gn()[Wr]>=0){Kr=gn()[Wr];break r}Gn(n,r,Gr)}Pr=an|Kr}while(_r<36);var Qr=Pr,un=k<<16|M,Fr=new y(un,c),rn=G<<16|kr,pn=new y(Qr,rn);return Us().gg(Fr,pn)}function Fx(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Z(s);if(!(o>>>8|0)&&gn()[o]>=0){a=gn()[o];break r}var u="a hexadecimal digit";Gn(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Z(m);if(!(w>>>8|0)&&gn()[w]>=0){_=gn()[w];break r}var x="a hexadecimal digit";Gn(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),z=0,I=16;if(I<24)do{var A=I;I=I+1|0;var O=z<<4,D;r:{var J=K(n,A),T=Z(J);if(!(T>>>8|0)&&gn()[T]>=0){D=gn()[T];break r}var M="a hexadecimal digit";Gn(n,M,A)}z=O|D}while(I<24);var F=z,B=0,L=24;if(L<32)do{var H=L;L=L+1|0;var X=B<<4,$;r:{var tr=K(n,H),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){$=gn()[Y];break r}var G="a hexadecimal digit";Gn(n,G,H)}B=X|$}while(L<32);var ar=B,ur=new y(ar,F);return Us().gg(S,ur)}function Rv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=p2()[f],h=a;a=h+1|0,r[h]=Dn(v>>8);var d=a;a=d+1|0,r[d]=Dn(v)}while(u!==o);return a}function $x(n){return r=>r===n?"(this Collection)":le(r)}var Un;function Jx(n,r){return Bv(n,r.k2())+"="+Bv(n,r.l2())}function Bv(n,r){return r===n?"(this Map)":le(r)}function Fv(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function Hx(n){return r=>Jx(n,r)}var hs;function qs(n){return n.c1()-1|0}function Gx(){throw Uu.zb("Index overflow has happened.")}function Kx(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function mr(){return j_()}function st(n){return rb(n)}function ta(n){return n.length>0?El(n):mr()}var a1;function j_(){return a1===l&&new Ad,a1}var ds;function U_(n){switch(n.c1()){case 0:return mr();case 1:return ze(n.d1(0));default:return n}}function Wx(n){return Le(0,n.c1()-1|0)}function Yx(n){for(var r=q.m(),e=n.x();e.y();){var t=e.z();Ea(r,t)}return r}function Yr(n,r){var e;return E(n,W)?e=n.c1():e=r,e}function Zx(n){var r;return E(n,W)?r=n.c1():r=null,r}function Vx(n,r){if(E(n,jd))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw qr.r("Key "+le(r)+" is missing in the map.");e=t;break r}return e}function Nr(){var n=Qx();return E(n,yn)?n:g()}function Al(n){return n.length>0?D_(n,vr.ha(n.length)):Nr()}function we(n,r){return Vx(n,r)}function N_(n){if(E(n,W)){var r;switch(n.c1()){case 0:r=Nr();break;case 1:var e;E(n,En)?e=n.d1(0):e=n.x().z(),r=wo(e);break;default:r=Jv(n,vr.ha(n.c1()));break}return r}return L_(Jv(n,vr.q4()))}function $v(n){return D_(n,vr.ha(n.length))}function et(n,r){var e;if(n.i1())e=wo(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function Qc(n){return vr.ia(n)}function Xx(n,r){var e=Qc(n);return e.t2(r),L_(e)}var s1;function Qx(){return s1===l&&new Ud,s1}function D_(n,r){return P_(r,n),r}function Jv(n,r){return r2(r,n),r}function L_(n){var r;switch(n.c1()){case 0:r=Nr();break;case 1:r=n;break;default:r=n;break}return r}function P_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function r2(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function n2(n){var r=os.l7(n.length);return P_(r,n),r}function Ea(n,r){if(E(r,W))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function Hv(n){var r;if(n.i1())throw qr.r("List is empty.");return r=n.e5(qs(n)),r}function rf(n,r){var e;return n==null?e=Tl:e=new zc(i2(n),r),e}function e2(n){return ib(n)}function t2(n,r){return new zc(n,r)}function M_(){return Tl}var Tl;function Gv(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(on(n.sh_1)),n.th_1=n.sh_1==null?0:1}function i2(n){return()=>n}function Qt(n){return bp(n)}function Tt(){return l1()}var o1;function l1(){return o1===l&&new Bd,o1}function a2(n){switch(n.c1()){case 0:return Tt();case 1:return Kc(n.x().z());default:return n}}function s2(n){return kp(n,vi.b1(n.length))}function o2(n){if(!(n.length>0)){var r="Failed requirement.";throw j.v(b(r))}var e=u2(n);return new $d(e)}function qt(n,r){return n==null?r==null?0:-1:r==null?1:Oe(n!=null&&Yu(n)?n:g(),r)}function R_(){var n=B_;return E(n,dn)?n:g()}function l2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=qt(s,o);if(u!==0)return u}return 0}var B_;function u2(n){return(r,e)=>l2(r,e,n)}function c2(n,r){var e=Hk($k(n,r)),t=sr;e.ma(t)}var u1,c1;function F_(){return c1===l&&new Hd,c1}function ps(){return v2()}var Kv;function f2(){if(Kv)return sr;Kv=!0,$_=new Gd("COROUTINE_SUSPENDED",0)}var $_;function v2(){return f2(),$_}function h2(n){return Kd.di(n)}function d2(n,r,e){var t;if(e>0)t=n>=r?r:r-Wv(r,n,e)|0;else if(e<0)t=n<=r?r:r+Wv(n,r,-e|0)|0;else throw j.v("Step is zero.");return t}function Wv(n,r,e){return Eu(Eu(n,e)-Eu(r,e)|0,e)}function Eu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var f1;function J_(){return f1===l&&new Wd,f1}var nf;function H_(n,r,e){e!=null?n.g(e(r)):r==null||Cs(r)?n.g(r):r instanceof Sn?n.da(r.x1_1):n.g(b(r))}function ql(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Dv(n),i=Dv(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function p2(){return W_(),G_}var G_;function _2(){return W_(),K_}var K_;function gn(){return _2()}var Yv;function W_(){if(!Yv){Yv=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Z(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Z(a),n=n+1|0}G_=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Z(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Z(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=rr(m,w);w=w+1|0;var k=_;_=k+1|0,d[Z(x)]=k}for(var S=0,z="0123456789ABCDEF",I=0;I<C(z);){var A=rr(z,I);I=I+1|0;var O=S;S=O+1|0,d[Z(A)]=O}K_=d;for(var D=0,J=di(256);D<256;)J[D]=new y(-1,-1),D=D+1|0;for(var T=0,M="0123456789abcdef",F=0;F<C(M);){var B=rr(M,F);F=F+1|0;var L=T;T=L+1|0,J[Z(B)]=R(L)}for(var H=0,X="0123456789ABCDEF",$=0;$<C(X);){var tr=rr(X,$);$=$+1|0;var Y=H;H=Y+1|0,J[Z(tr)]=R(Y)}}}function g2(n){var r;return C(n)===0?r=b2:r=k2(n),r}function m2(n){return y2(n,"")}function y2(n,r){r=r===l?"":r;for(var e=X_(n),t=q.m(),i=e.x();i.y();){var a=i.z();lt(a)||t.n(a)}for(var s=q.g1(Yr(t,10)),o=t.x();o.y();){var u=o.z(),c=w2(u);s.n(c)}for(var f=gb(s),v=f??0,h=n.length+lr(r.length,e.c1())|0,d=g2(r),_=qs(e),m=q.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var z=Ts(S),I;if((z===0||z===_)&&lt(k))I=null;else{var A=Ib(k,v),O;A==null?O=null:O=d(A);var D=O;I=D??k}var J=I;J==null||m.n(J)}return Sp(m,nn.fa(h),`
`).toString()}function w2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=rr(n,i);if(!Wc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function b2(n){return n}function k2(n){return r=>n+r}function Ol(n){return x2(n,10)}function x2(n,r){xa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=Cl(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=lr(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function za(n){throw Nu.nc("Invalid number format: '"+n+"'")}function S2(n){return E2(n,10)}function E2(n,r){xa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Cr(o,R(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Cl(K(n,h),r);if(d<0)return null;if(nr(f,c)<0)if(ir(c,u)){var _=a;if(c=Cr(_,R(r)),nr(f,c)<0)return null}else return null;var m=f;f=Ar(m,R(r));var w=f,x=a,k=hr(x,R(d));if(nr(w,k)<0)return null;var S=f;f=Br(S,R(d))}while(v<e);return i?f:tn(f)}function Y_(n,r){var e=Cs(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=rr(e,s),u=tb(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=jn(e,t,i+1|0);return b(c)}function Yi(n,r){return z2(n,r)?te(n,0,n.length-C(r)|0):n}function Os(n,r,e){e=e===l?n:e;var t=I2(n,r);return t===-1?e:te(n,t+1|0,n.length)}function _s(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=Io(n,r,l,e)>=0:t=ef(n,r,0,C(n),e)>=0,t}function Z_(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return C2(n,yr(r[0]),e,t);for(var i=xb(A2(n,r,l,e,t)),a=q.g1(Yr(i,10)),s=i.x();s.y();){var o=s.z(),u=T2(n,o);a.n(u)}return a}function V_(n,r){return q2(n,r)?at(n,C(r)):n}function X_(n){return Cp(O2(n))}function Q_(n,r,e){return e=e===l?32:e,b(j2(Cs(n)?n:g(),r,e))}function ot(n){return C(n)-1|0}function lt(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Wc(t)){r=!1;break r}}r=!0}return r}function z2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Dx(n,r):jl(n,C(n)-C(r)|0,r,0,C(r),e)}function I2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ya([r]);i=U2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function Io(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=ef(n,r,e,C(n),t):i=n.indexOf(r,e),i}function ef(n,r,e,t,i,a){a=a===l?!1:a;var s=a?mb(St(e,ot(n)),fn(t,0)):Le(fn(e,0),St(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,Zc(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,jl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function r0(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=rr(n,i),s=Wc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return jn(n,r,e+1|0)}function C2(n,r,e,t){tf(t);var i=0,a=Io(n,r,i,e);if(a===-1||t===1)return ze(b(n));var s=t>0,o=q.g1(s?St(t,10):10);r:do{var u=i,c=a,f=b(jn(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=Io(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(jn(n,v,h));return o.n(d),o}function A2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,tf(i),new Xd(n,e,i,M2(r,t))}function T2(n,r){return b(jn(n,r.df(),r.ef()+1|0))}function q2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?ke(n,r):jl(n,0,r,0,C(r),e)}function O2(n){return new rp(n)}function j2(n,r,e){if(e=e===l?32:e,r<0)throw j.v("Desired length "+r+" is less than zero.");if(r<=C(n))return jn(n,0,C(n));var t=nn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function jl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!ql(rr(n,r+o|0),rr(e,t+o|0),a))return!1}while(s<i);return!0}function U2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=xp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=St(e,ot(n));if(0<=o)do{var u=o;o=o+-1|0;var c=rr(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,ql(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function tf(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw j.v(b(r))}return sr}function Zv(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Le(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Le(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=Nc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function n0(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=xp(r),s=yr(a);return n.indexOf(s,e)}var o=fn(e,0),u=ot(n);if(o<=u)do{var c=o;o=o+1|0;var f=rr(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,ql(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function Ul(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ya([r]);i=n0(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function N2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function D2(n,r,e){e=e===l?n:e;var t=Ul(n,r);return t===-1?e:te(n,0,t)}function L2(n,r,e){e=e===l?n:e;var t=Ul(n,r);return t===-1?e:te(n,t+1|0,n.length)}function P2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=ef(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function M2(n,r){return(e,t)=>{var i=n0(e,n,t,r);return i<0?null:U(i,1)}}function wn(n){return Es(n,1)}function af(n){return(Vr(n)&1)===0}function e0(n){return(Vr(n)&1)===1}function R2(n){return af(n)?Eo():zo()}var v1;function Jr(){return v1===l&&new np,v1}function t0(n){var r=tn(wn(n)),e=Vr(n)&1;return X2(r,e)}function B2(n,r){var e,t=Vr(n)&1;if(t===(Vr(r)&1)){var i;if(af(n))i=Q2(hr(wn(n),wn(r)));else{var a=sf(wn(n),wn(r)),s;if(ir(a,new y(-16162,2147483647)))throw j.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=zt(a):s=rS(a),i=s}e=i}else e0(n)?e=Vv(n,wn(n),wn(r)):e=Vv(n,wn(r),wn(n));return e}function Vv(n,r,e){var t=c0(e),i=sf(r,t),a;if(nr(new y(1108857478,-1074),i)<=0&&nr(i,new y(-1108857478,1073))<=0){var s=Br(e,Co(t));a=Ll(hr(Co(i),s))}else a=zt(i);return a}function Nl(n){return nr(n,new y(0,0))<0}function js(n){return ir(n,Jr().fj_1)||ir(n,Jr().gj_1)}function i0(n){return Nl(n)?t0(n):n}function a0(n,r){var e=Ae(n,r);if(nr(e,new y(0,0))<0||!(Vr(e)&1))return n.f3(r);var t=Vr(n)&1,i=t-(Vr(r)&1)|0;return Nl(n)?-i|0:i}function F2(n,r){return a0(n.kj_1,r instanceof ye?r.kj_1:g())}function $2(n){var r;if(js(n))r=0;else{var e=u0(n),t=Et(e,R(24));r=Vr(t)}return r}function s0(n){var r;if(js(n))r=0;else{var e=H2(n),t=Et(e,R(60));r=Vr(t)}return r}function o0(n){var r;if(js(n))r=0;else{var e=G2(n),t=Et(e,R(60));r=Vr(t)}return r}function l0(n){var r;if(js(n))r=0;else if(e0(n)){var e=wn(n),t=Et(e,R(1e3));r=Vr(Co(t))}else{var i=wn(n),a=1e9,s=Et(i,R(a));r=Vr(s)}return r}function Dl(n,r){var e=n;return ir(e,Jr().fj_1)?new y(-1,2147483647):ir(e,Jr().gj_1)?new y(0,-2147483648):T_(wn(n),R2(n),r)}function J2(n){return Dl(n,Xc())}function u0(n){return Dl(n,O_())}function H2(n){return Dl(n,q_())}function G2(n){return Dl(n,Vc())}function K2(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Jr().fj_1))e="Infinity";else if(ir(r,Jr().gj_1))e="-Infinity";else{var t=Nl(n),i=nn.f();t&&i.da(45);var a=i0(n),s=J2(a),o=$2(a),u=s0(a),c=o0(a),f=l0(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?so(n,i,c,f,9,"s",!1):f>=1e6?so(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?so(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function so(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=Q_(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,rr(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function W2(n){var r=nn.f();Nl(n)&&r.da(45),r.ca("PT");var e=i0(n),t=u0(e),i=s0(e),a=o0(e),s=l0(e),o=t;js(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&so(n,r,a,s,9,"S",!0),r.toString()}function Y2(n){return n.hashCode()}function Z2(n,r){if(!(r instanceof ye))return!1;var e=r.kj_1;return!!ir(n,e)}function zt(n){var r=Jr(),e=Zn(n,1),t=hr(e,R(1));return r.jj(t)}function Xv(n,r){var e=Mv(new y(-387905,1073741823),Eo(),r),t;if(nr(tn(e),n)<=0&&nr(n,e)<=0)t=Ll(Mv(n,r,Eo()));else if(r.y2(zo())>=0){var i=Vk(n),a=new y(0,-2147483648),s=hr(a,R(1));t=zt(Ar(On(i),d1(Xk(wb(n,s)),r)))}else t=zt(Dc(T_(n,r,zo()),new y(1,-1073741824),new y(-1,1073741823)));return t}function V2(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw j.v(t);return Jr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw j.v(u);return Jr().ij_1}else if(K(n,i)===80)o=nS(n,i+1|0,e);else{if(e)throw j.v("");return Jr().ij_1}var c=o;return s&&!P(new ye(c),new ye(Jr().ij_1))?t0(c):c}function X2(n,r){var e=Jr(),t=Zn(n,1),i=hr(t,R(r));return e.jj(i)}function Q2(n){var r;return nr(new y(387905,-1073741824),n)<=0&&nr(n,new y(-387905,1073741823))<=0?r=Ll(n):r=zt(c0(n)),r}function sf(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;nr(new y(1,-1073741824),r)<0&&nr(r,new y(-1,1073741823))<0?i=!0:i=nr(Ae(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Dc(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function rS(n){var r;return nr(new y(1108857478,-1074),n)<=0&&nr(n,new y(-1108857478,1073))<=0?r=Ll(Co(n)):r=zt(Dc(n,new y(1,-1073741824),new y(-1,1073741823))),r}function c0(n){return Cr(n,R(1e6))}function Co(n){return Ar(n,R(1e6))}function Ll(n){return Jr().jj(Zn(n,1))}function nS(n,r,e){var t=r;if(t===n.length){if(e)throw j.v("");return Jr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw j.v("");return Jr().ij_1}s=!0;continue r}var f=t,v,h=f0().nj_1,d=t,_;n:{var m=1,w=d;if(tS(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var z=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=ee(I,48);if(nr(z,Qv(h))>0||ir(z,Qv(h))&&nr(R(A),iS(h))>0){var O=w;t:for(;;){var D;if(O<n.length){var J=K(n,O);D=48<=J?J<=57:!1}else D=!1;if(!D)break t;O=O+1|0}w=O;var T=w,M=m;if(t=T,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw j.v("");return Jr().ij_1}v=M,_=eS(h);break n}var F=z,B=hr(Zn(F,3),Zn(F,1));z=hr(B,R(A)),w=w+1|0}var L=w,H=m;if(t=L,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw j.v("");return Jr().ij_1}v=H,_=z}var X=_;if(K(n,t)===46){t=t+1|0;var $=t,tr=$,Y=tr,G=Y+6|0,ar=n.length,ur=Math.min(G,ar),Q=0;n:for(;Y<ur;){var Tr=K(n,Y);if(!(48<=Tr&&Tr<=57))break n;var wr=Q;Q=((wr<<3)+(wr<<1)|0)+ee(Tr,48)|0,Y=Y+1|0}var dr=6-(Y-tr|0)|0,Ir=0;if(Ir<dr)do{Ir=Ir+1|0;var br=Q;Q=(br<<3)+(br<<1)|0}while(Ir<dr);$=Y;var kr=Q,Pr=$,_r=Pr,Gr=_r+9|0,an=n.length,Kr=Math.min(Gr,an),gr=0;n:for(;_r<Kr;){var Wr=K(n,_r);if(!(48<=Wr&&Wr<=57))break n;var Qr=gr;gr=((Qr<<3)+(Qr<<1)|0)+ee(Wr,48)|0,_r=_r+1|0}var un=9-(_r-Pr|0)|0,Fr=0;if(Fr<un)do{Fr=Fr+1|0;var rn=gr;gr=(rn<<3)+(rn<<1)|0}while(Fr<un);$=_r;var pn=gr,vn=$;n:for(;;){var _n;if(vn<n.length){var re=K(n,vn);_n=48<=re?re<=57:!1}else _n=!1;if(!_n)break n;vn=vn+1|0}$=vn;var $n=$;if($n===t||$n===n.length||K(n,$n)!==83){if(e)throw j.v("");return Jr().ij_1}t=$n;var Jn=R(kr),de=1e9,je=Ar(Jn,R(de)),pe=hr(je,R(pn));a=Ar(On(v),aS(pe,Vc()))}var Fe=sS(n,t),$e;if(Fe==null){var Ce="Unknown duration unit short name: "+yr(K(n,t));if(e)throw j.v(Ce);return Jr().ij_1}else $e=Fe;var Hn=$e;if(o!=null&&o.y2(Hn)<=0){var Tn="Unexpected order of duration components";if(e)throw j.v(Tn);return Jr().ij_1}if(o=Hn,Hn.equals(Xc())){if(s){if(e)throw j.v("");return Jr().ij_1}i=Ar(On(v),d1(X,Hn))}else{if(!s){if(e)throw j.v("");return Jr().ij_1}var xn=sf(i,Ar(On(v),d1(X,Hn)));if(ir(xn,new y(-16162,2147483647))){if(e)throw j.v("");return Jr().ij_1}i=xn}t=t+1|0}return B2(Xv(i,zo()),Xv(a,Eo()))}var h1;function f0(){return h1===l&&new ep,h1}function eS(n){return n.pj_1}function tS(n){return n.qj_1}function Qv(n){return n.rj_1}function iS(n){return n.sj_1}function aS(n,r){var e=oS(r),t=Yn(n)*e;return Qk(t)}function sS(n,r){var e=K(n,r);return e===68?Xc():e===72?O_():e===77?q_():e===83?Vc():null}function oS(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw Sr.o3(b(e))}return r}function d1(n,r){return lS(n,uS(r))}function lS(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=pu(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=pu(n,new y(-1,1073741823));else{var t=(128-bv(n)|0)-bv(r)|0;e=t<63?Ar(n,r):t>63?new y(-1,1073741823):pu(Ar(n,r),new y(-1,1073741823))}return e}function uS(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw Sr.o3(b(e))}return r}function oo(){return Bn(),v0}var v0;function cS(){return Bn(),h0}var h0;function fS(){return Bn(),d0}var d0;function vS(){return Bn(),p0}var p0,p1;function bt(){return p1===l&&new tp,p1}function hS(n){Bn();var r=nn.f(),e=_0.ck(n),t=e.dk_1;if(rx(t)<1e3){var i=nn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Ga(r,r,e.ek_1),r.da(45),Ga(r,r,e.fk_1),r.da(84),Ga(r,r,e.gk_1),r.da(58),Ga(r,r,e.hk_1),r.da(58),Ga(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%oo()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/oo()[a]|0;r.ca(at((s+oo()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function dS(n){Bn();var r=n,e=0;if(C(r)===0)return new Ic("An empty string is not a valid Instant",n);var t=rr(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=rr(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+ee(rr(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return sn(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&mn(rr(r,s),50)>=0)return sn(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return sn(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return sn(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return sn(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return sn(n,"The input string is too short");var d=e,_=Hi(n,"'-'",d,_S);if(_!=null)return _;var m=e+3|0,w=Hi(n,"'-'",m,gS);if(w!=null)return w;var x=e+6|0,k=Hi(n,"'T' or 't'",x,mS);if(k!=null)return k;var S=e+9|0,z=Hi(n,"':'",S,yS);if(z!=null)return z;var I=e+12|0,A=Hi(n,"':'",I,wS);if(A!=null)return A;for(var O=cS(),D=0,J=O.length;D<J;){var T=O[D];D=D+1|0;var M=e+T|0,F=Hi(n,"an ASCII digit",M,bS);if(F!=null)return F}var B=pt(r,e+1|0),L=pt(r,e+4|0),H=pt(r,e+7|0),X=pt(r,e+10|0),$=pt(r,e+13|0),tr;if(rr(r,e+15|0)===46){var Y=e+16|0;e=Y;var G=0;r:for(;;){var ar;if(e<C(r)){var ur=rr(r,e);ar=48<=ur?ur<=57:!1}else ar=!1;if(!ar)break r;G=lr(G,10)+ee(rr(r,e),48)|0,e=e+1|0}var Q=e-Y|0,Tr;if(1<=Q&&Q<=9)Tr=lr(G,oo()[9-Q|0]);else return sn(n,"1..9 digits are supported for the fraction of the second, got "+Q+" digits");tr=Tr}else e=e+15|0,tr=0;var wr=tr;if(e>=C(r))return sn(n,"The UTC offset at the end of the string is missing");var dr=rr(r,e),Ir;if(dr===122||dr===90){var br;if(C(r)===(e+1|0))br=0;else return sn(n,"Extra text after the instant at position "+(e+1|0));Ir=br}else if(dr===45||dr===43){var kr=C(r)-e|0;if(kr>9){var Pr=e,_r=C(r),Gr=b(jn(r,Pr,_r));return sn(n,'The UTC offset string "'+of(Gr,16)+'" is too long')}if(kr%3|0){var an=e,Kr=C(r),gr=b(jn(r,an,Kr));return sn(n,'Invalid UTC offset string "'+gr+'"')}var Wr=fS(),Qr=0,un=Wr.length;r:for(;Qr<un;){var Fr=Wr[Qr];if(Qr=Qr+1|0,(e+Fr|0)>=C(r))break r;if(rr(r,e+Fr|0)!==58)return sn(n,"Expected ':' at index "+(e+Fr|0)+", got '"+yr(rr(r,e+Fr|0))+"'")}var rn=vS(),pn=0,vn=rn.length;r:for(;pn<vn;){var _n=rn[pn];if(pn=pn+1|0,(e+_n|0)>=C(r))break r;var re=rr(r,e+_n|0);if(!(48<=re&&re<=57))return sn(n,"Expected an ASCII digit at index "+(e+_n|0)+", got '"+yr(rr(r,e+_n|0))+"'")}var $n=pt(r,e+1|0),Jn;kr>3?Jn=pt(r,e+4|0):Jn=0;var de=Jn,je;kr>6?je=pt(r,e+7|0):je=0;var pe=je;if(de>59)return sn(n,"Expected offset-minute-of-hour in 0..59, got "+de);if(pe>59)return sn(n,"Expected offset-second-of-minute in 0..59, got "+pe);if($n>17&&!($n===18&&de===0&&pe===0)){var Fe=e,$e=C(r),Ce=b(jn(r,Fe,$e));return sn(n,"Expected an offset in -18:00..+18:00, got "+Ce)}Ir=lr((lr($n,3600)+lr(de,60)|0)+pe|0,dr===45?-1:1)}else return sn(n,"Expected the UTC offset at position "+e+", got '"+yr(dr)+"'");var Hn=Ir;if(!(1<=B&&B<=12))return sn(n,"Expected a month number in 1..12, got "+B);if(!(1<=L&&L<=pS(B,rh(h))))return sn(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+L);if(H>23)return sn(n,"Expected hour in 0..23, got "+H);if(X>59)return sn(n,"Expected minute-of-hour in 0..59, got "+X);if($>59)return sn(n,"Expected second-of-minute in 0..59, got "+$);var Tn=new Cc(h,B,L,H,X,$,wr),xn=R(Tn.dk_1),zn=Ar(On(365),xn);if(nr(xn,new y(0,0))>=0){var Ue=zn,Ti=hr(xn,R(3)),Ne=Cr(Ti,R(4)),ft=hr(xn,R(99)),qi=Cr(ft,R(100)),Oi=Br(Ne,qi),vt=hr(xn,R(399)),jt=Cr(vt,R(400));zn=hr(Ue,hr(Oi,jt))}else{var La=zn,Pa=Cr(xn,R(-4)),Ma=Cr(xn,R(-100)),Ra=Br(Pa,Ma),ji=Cr(xn,R(-400));zn=Br(La,hr(Ra,ji))}var Ut=zn,ht=(lr(367,Tn.ek_1)-362|0)/12|0;zn=hr(Ut,R(ht));var Ui=zn,Ni=Tn.fk_1-1|0;if(zn=hr(Ui,R(Ni)),Tn.ek_1>2){var Nt=zn;if(zn=Br(Nt,Ze()),!rh(Tn.dk_1)){var Dt=zn;zn=Br(Dt,Ze())}}var dt=zn,Lt=Br(dt,R(719528)),Pt=(lr(Tn.gk_1,3600)+lr(Tn.hk_1,60)|0)+Tn.ik_1|0,Di=Ar(Lt,R(86400)),_e=hr(Di,R(Pt)),Mt=Br(_e,R(Hn)),Ba=Tn.jk_1;return new ip(Mt,Ba)}var _0;function of(n,r){Bn();var e;return C(n)<=r?e=b(n):e=b(jn(n,0,r))+"...",e}function pS(n,r){switch(Bn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function rh(n){return Bn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Ga(n,r,e){e<10&&n.da(48),r.ae(e)}function sn(n,r){return new Ic(r+' when parsing an Instant from "'+of(n,64)+'"',n)}function Hi(n,r,e,t){var i=rr(n,e),a;return t(new Sn(i))?a=null:a=sn(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function _S(n){return Bn(),P(n,new Sn(45))}function gS(n){return Bn(),P(n,new Sn(45))}function mS(n){return Bn(),P(n,new Sn(84))||P(n,new Sn(116))}function yS(n){return Bn(),P(n,new Sn(58))}function wS(n){return Bn(),P(n,new Sn(58))}function bS(n){Bn();var r=n.x1_1;return 48<=r?r<=57:!1}function pt(n,r){return lr(ee(rr(n,r),48),10)+ee(rr(n,r+1|0),48)|0}var nh;function Bn(){nh||(nh=!0,v0=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),h0=new Int32Array([1,2,4,5,7,8,10,11,13,14]),d0=new Int32Array([3,6]),p0=new Int32Array([1,2,4,5,7,8]))}function zu(){return m0(),g0}var g0;function kS(n,r){return m0(),new lp(n.uk_1,r).zk()}var eh;function m0(){if(!eh){eh=!0;var n=ps();g0=n}}var th;function xS(){if(th)return sr;th=!0,y0=new up("PUBLICATION",1)}var y0,lo;function uo(){return xS(),y0}function SS(n){var r=n;return!(r instanceof At)}function w0(n){var r;return n instanceof At?r=n.el_1:r=null,r}function ES(n){var r;return n instanceof At?r=n.toString():r="Success("+le(n)+")",r}function zS(n){return n==null?0:Er(n)}function IS(n,r){if(!(r instanceof ri))return!1;var e=r.fl_1;return!!P(n,e)}function CS(n){var r=n;if(r instanceof At)throw n.el_1}function b0(n){return new At(n)}function U(n,r){return new xl(n,r)}var _1;function Us(){return _1===l&&new fp,_1}function AS(n,r){return n.length<=r?n:te(n,0,r)+"..."}function Gn(n,r,e){throw j.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var g1;function Pl(){return g1===l&&new vp,g1}function k0(n,r){var e=n&255,t=r&255;return Oe(e,t)}function TS(n,r){return k0(n.pl_1,r instanceof Pe?r.pl_1:g())}function m1(n){return(n&255).toString()}function qS(n,r){return!(!(r instanceof Pe)||n!==r.pl_1)}function ih(n){return new Int8Array(n)}function OS(n,r){var e=n[r];return e}function jS(n,r,e){var t=n;t[r]=e}function li(n){return n.length}function US(n){return new hp(n)}function x0(n,r){var e=n,t=r;return Bw(e,t)}function NS(n,r){return r instanceof Pe?x0(n.ul_1,r instanceof Pe?r.pl_1:g()):!1}function DS(n){return n.length===0}function LS(n){return"UByteArray(storage="+b(n)+")"}function PS(n){return Er(n)}function MS(n,r){if(!(r instanceof ei))return!1;var e=r.ul_1;return!!P(n,e)}var y1;function Ml(){return y1===l&&new dp,y1}function S0(n,r){return ea(n,r)}function RS(n,r){return S0(n.am_1,r instanceof Vn?r.am_1:g())}function w1(n){return(n>>>0).toString()}function BS(n,r){return!(!(r instanceof Vn)||n!==r.am_1)}function ah(n){return new Int32Array(n)}function FS(n,r){var e=n[r];return e}function $S(n,r,e){var t=n;t[r]=e}function ui(n){return n.length}function JS(n){return new pp(n)}function E0(n,r){var e=n,t=r;return Fw(e,t)}function HS(n,r){return r instanceof Vn?E0(n.fm_1,r instanceof Vn?r.am_1:g()):!1}function GS(n){return n.length===0}function KS(n){return"UIntArray(storage="+b(n)+")"}function WS(n){return Er(n)}function YS(n,r){if(!(r instanceof ti))return!1;var e=r.fm_1;return!!P(n,e)}var b1;function Ns(){return b1===l&&new _p,b1}function z0(n,r){return wt(n,r)}function ZS(n,r){return z0(n.lm_1,r instanceof Xn?r.lm_1:g())}function k1(n){var r=n;return Sk(r,10)}function VS(n){return n.hashCode()}function XS(n,r){if(!(r instanceof Xn))return!1;var e=r.lm_1;return!!ir(n,e)}function sh(n){return di(n)}function QS(n,r){var e=n[r];return e}function rE(n,r,e){var t=n;t[r]=e}function ci(n){return n.length}function nE(n){return new gp(n)}function I0(n,r){var e=n,t=r;return $w(e,t)}function eE(n,r){return r instanceof Xn?I0(n.qm_1,r instanceof Xn?r.lm_1:g()):!1}function tE(n){return n.length===0}function iE(n){return"ULongArray(storage="+b(n)+")"}function aE(n){return Er(n)}function sE(n,r){if(!(r instanceof ii))return!1;var e=r.qm_1;return!!P(n,e)}var x1;function Rl(){return x1===l&&new mp,x1}function C0(n,r){var e=n&65535,t=r&65535;return Oe(e,t)}function oE(n,r){return C0(n.wm_1,r instanceof Me?r.wm_1:g())}function S1(n){return(n&65535).toString()}function lE(n,r){return!(!(r instanceof Me)||n!==r.wm_1)}function oh(n){return new Int16Array(n)}function uE(n,r){var e=n[r];return e}function cE(n,r,e){var t=n;t[r]=e}function fi(n){return n.length}function fE(n){return new yp(n)}function A0(n,r){var e=n,t=r;return Jw(e,t)}function vE(n,r){return r instanceof Me?A0(n.bn_1,r instanceof Me?r.wm_1:g()):!1}function hE(n){return n.length===0}function dE(n){return"UShortArray(storage="+b(n)+")"}function pE(n){return Er(n)}function _E(n,r){if(!(r instanceof ai))return!1;var e=r.bn_1;return!!P(n,e)}function T0(n){return bE(n,10)}function gE(n){var r=kE(n),e,t=r;return(t==null?null:new Vn(t))==null?za(n):e=r,e}function mE(n){var r=T0(n),e,t=r;return(t==null?null:new Xn(t))==null?za(n):e=r,e}function yE(n){var r=xE(n),e,t=r;return(t==null?null:new Pe(t))==null?za(n):e=r,e}function wE(n){var r=SE(n),e,t=r;return(t==null?null:new Me(t))==null?za(n):e=r,e}function bE(n,r){xa(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=R(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=Cl(K(n,v),r);if(h<0)return null;var d=c,_=o;if(wt(d,_)>0)if(P(new Xn(o),new Xn(s))){o=xk(t,u);var m=c,w=o;if(wt(m,w)>0)return null}else return null;var x=c;c=Ar(x,u);var k=c,S=c,z=h,I=z,A=fs(R(I),new y(-1,0)),O=A;c=hr(S,O);var D=c;if(wt(D,k)<0)return null}while(f<e);return c}function kE(n){return lf(n,10)}function xE(n){return EE(n,10)}function SE(n){return zE(n,10)}function lf(n,r){xa(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=Cl(K(n,v),r);if(h<0)return null;var d=c,_=o;if(ea(d,_)>0)if(P(new Vn(o),new Vn(s))){o=kk(t,u);var m=c,w=o;if(ea(m,w)>0)return null}else return null;var x=c;c=lr(x,u);var k=c,S=c,z=h;c=S+z|0;var I=c;if(ea(I,k)<0)return null}while(f<e);return c}function EE(n,r){var e=lf(n,r),t,i=e;if((i==null?null:new Vn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(ea(a,o)>0)return null;var u=a;return Dn(u)}function zE(n,r){var e=lf(n,r),t,i=e;if((i==null?null:new Vn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(ea(a,o)>0)return null;var u=a;return $c(u)}Mr(yc,"CharSequence");Mr(Ee,"Comparable");p(Bh,"Number");p(Fh);p($h);p(Jh);Xr(Hh);p(Sn,"Char",l,l,[Ee]);Mr(W,"Collection");Mr(qe,"Set",l,l,[W]);Mr(En,"List",l,l,[W]);Mr(Xe,"Entry");Mr(yn,"Map");Mr(oa,"MutableMap",l,l,[yn]);Xr(Sw);p(ie,"Enum",l,l,[Ee]);Xr(Gh);p(y,"Long",l,l,[Ee]);Mr(bn,"FunctionAdapter");p(Kh);N(Ew,"ByteCompanionObject");N(zw,"ShortCompanionObject");N(Iw,"IntCompanionObject");N(Cw,"FloatCompanionObject");N(Aw,"DoubleCompanionObject");N(Tw,"StringCompanionObject");N(qw,"BooleanCompanionObject");N(Wh,"Digit");Mr(dn,"Comparator");N(gl,"Unit");p(_a,"AbstractCollection",l,l,[W]);p(ws,"AbstractMutableCollection",l,l,[W]);p(wc,"IteratorImpl");p(Yh,"ListIteratorImpl");p(Zh,"AbstractMutableList",l,l,[En,W]);p(Vh,"AbstractMap",l,l,[yn]);p(Xh,"AbstractMutableMap",l,l,[oa]);p(bs,"AbstractMutableSet",l,l,[qe,W]);Xr(Qh);Mr(ks,"RandomAccess");p(q,"ArrayList",q.m,l,[En,W,ks]);p(os,"HashMap",os.x6,l,[oa]);p(rd,"HashMapKeys",l,l,[qe,W]);p(nd,"HashMapValues",l,l,[W]);p(ed,"HashMapEntrySetBase",l,l,[qe,W]);p(td,"HashMapEntrySet");p(id);p(ad,"HashMapKeysDefault");p(sd);p(od,"HashMapValuesDefault");p(vi,"HashSet",vi.n8,l,[qe,W]);Xr(ld);p(ml,"Itr");p(ud,"KeysItr");p(cd,"ValuesItr");p(fd,"EntriesItr");p(vd,"EntryRef",l,l,[Xe]);Mr(hd,"InternalMap");Lr(Qe).h8=Ow;p(Qe,"InternalHashMap",Qe.i7,l,[hd]);p(vr,"LinkedHashMap",vr.q4,l,[oa]);p(An,"LinkedHashSet",An.e1,l,[qe,W]);Mr(tt,"Continuation");N(dd,"CompletedContinuation",l,l,[tt]);p(bc,"InterceptedCoroutine",l,l,[tt]);p(kc,"GeneratorCoroutineImpl",l,l,[tt]);p(pd,l,l,l,[tt]);p(ls,"Exception",ls.nb);p(se,"RuntimeException",se.hb);p(oe,"UnsupportedOperationException",oe.p6);p(j,"IllegalArgumentException",j.kb);p(qr,"NoSuchElementException",qr.j1);p(Kn,"IndexOutOfBoundsException",Kn.sb);p(Sr,"IllegalStateException",Sr.ub);p(ho,"ConcurrentModificationException",ho.m9);p(Uu,"ArithmeticException",Uu.yb);p(po,"Error",po.ec);p(Va,"AssertionError",Va.cc);p(Nu,"NumberFormatException",Nu.mc);p(Du,"NoWhenBranchMatchedException",Du.s3);p(Lu,"NullPointerException",Lu.w3);p(Pu,"ClassCastException",Pu.a4);Mr(Ge,"KClass");p(ga,"KClassImpl",l,l,[Ge]);p(en,"PrimitiveKClassImpl");N(xc,"NothingKClassImpl");p(Mu,"SimpleKClassImpl");Mr(yi,"KProperty1");N(_d,"PrimitiveClasses");p(sv,"CharacterCodingException",sv.wd);p(nn,"StringBuilder",nn.f,l,[yc]);Xr(gd);p(kt,"Regex");p(yl,"MatchGroup");p(md,l,l,l,[W]);p(Sc,"AbstractList",l,l,[En]);p(yd);p(wd);p(jw,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(gt,"DurationUnit");p(Ec,"IteratorImpl");p(bd,"ListIteratorImpl");Xr(kd);p(xd);p(Sd);Xr(Uw);p(Ed,"AbstractSet",l,l,[qe]);p(zd);p(Id);Xr(Cd);N(Ad,"EmptyList",l,l,[En,ks]);N(Td,"EmptyIterator");p(wl,"IndexedValue");p(qd,"IndexingIterable");p(Od,"IndexingIterator");Mr(jd,"MapWithDefault",l,l,[yn]);N(Ud,"EmptyMap",l,l,[yn]);p(Nd,"IntIterator");p(Dd);p(Ld,"TransformingSequence");Mr(bl,"DropTakeSequence");p(Pd);p(kl,"TakeSequence",l,l,[bl]);N(Md,"EmptySequence",l,l,[bl]);p(Rd);p(zc,"GeneratorSequence");N(Bd,"EmptySet",l,l,[qe]);N(Fd,"NaturalOrderComparator",l,l,[dn]);p($d,"sam$kotlin_Comparator$0",l,l,[dn,bn]);N(Jd,"Key");Mr(Nw,"ContinuationInterceptor");N(Hd,"EmptyCoroutineContext");p(Gd,"CoroutineSingletons");p(Kd,"EnumEntriesList",l,l,[En,ks]);Xr(Wd);p(xs,"IntProgression");Mr(Xi,"ClosedRange");p(Ct,"IntRange",l,l,[Xi]);p(Yd,"IntProgressionIterator");Xr(Zd);p(Vd);p(Xd,"DelimitedRangesSequence");N(Dw,"State");p(Qd,"LinesIterator");p(rp);Xr(np);p(ye,"Duration",l,l,[Ee]);Xr(ep);p(Ru,"LongParser");N(Lw,"FractionalParser");Xr(tp);p(rt,"Instant",l,l,[Ee]);p(ip,"Success");p(Ic,"Failure");Xr(ap);p(Cc,"UnboundLocalDateTime");p(Ac,"InstantFormatException");p(sp,"DeepRecursiveScope",l,l,l,[1,2]);p(op,"DeepRecursiveFunction");p(lp,"DeepRecursiveScopeImpl",l,l,[tt],[1,2]);p(up,"LazyThreadSafetyMode");p(Tc,"UnsafeLazyImpl");N(cp,"UNINITIALIZED_VALUE");Xr(Pw);p(At,"Failure");p(ri,"Result");p(ov,"NotImplementedError",ov.bb);p(xl,"Pair");Xr(fp);p(xt,"Uuid",l,l,[Ee]);Xr(vp);p(Pe,"UByte",l,l,[Ee]);p(hp,"Iterator");p(ei,"UByteArray",l,l,[W]);Xr(dp);p(Vn,"UInt",l,l,[Ee]);p(pp,"Iterator");p(ti,"UIntArray",l,l,[W]);Xr(_p);p(Xn,"ULong",l,l,[Ee]);p(gp,"Iterator");p(ii,"ULongArray",l,l,[W]);Xr(mp);p(Me,"UShort",l,l,[Ee]);p(yp,"Iterator");p(ai,"UShortArray",l,l,[W]);sr=new gl;io=null;vs=new ld;m_=new dd;Un=new kd;hs=new Cd;ds=new Td;Tl=new Md;B_=new Fd;u1=new Jd;nf=new Zd;_0=new ap;lo=new cp;var Zr=Math.imul;class Bl{}class ia{}class cr{}class Mn extends j{static nn(){var r=this.kb();return Iu(r),r}static on(r){var e=this.v(r);return Iu(e),e}static pn(r,e){var t=this.lb(r,e);return Iu(t),t}}class Fl extends Mn{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return ln(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Fl.xn(r,this,this.un_1,this.vn_1)}}class fe{}function xi(){return!1}function Si(){return!1}function Ds(){return mr()}class q0{}class O0{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class j0{constructor(r){this.po_1=r}x(){return new O0(this.po_1)}}class U0{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=mr(),this.to_1=q.m(),this.uo_1=vi.n8(),this.vo_1=q.m(),this.wo_1=q.m(),this.xo_1=q.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw j.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?mr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=sr):s=a.yo.call(this,r,e,t,i),s}}class Ls{}class Ia{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=ob(a.to_1);var s=this,o=a.to_1;s.fp_1=mi(o),this.gp_1=U1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=mi(c),this.ip_1=lb(a.xo_1);for(var f=this,v=Qw(this.fp_1),h=q.g1(Yr(v,10)),d=v.x();d.y();){var _=d.z(),m=U(_.xg_1,_.wg_1);h.n(m)}f.jp_1=N_(h),this.kp_1=U1(i);var w=this;w.lp_1=w_(XE(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return aa(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return aa(this.hp_1,r)}lo(r){return aa(this.gp_1,r)}mo(r){return vm(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ia)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Jc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return rm(this)}toString(){return om(this)}}class Ca{toString(){return on(Ur(this).oc())}hashCode(){return ae(this.toString())}}class $l extends Ca{constructor(){Ao=null,super(),Ao=this}}class N0 extends Ca{constructor(){To=null,super(),To=this}}class Ps extends Ca{}class D0 extends Ps{constructor(){qo=null,super(),qo=this}}class L0 extends Ps{constructor(){Oo=null,super(),Oo=this}}class P0 extends Ps{constructor(){jo=null,super(),jo=this}}class M0 extends Ps{constructor(){Uo=null,super(),Uo=this}}class Fn extends Ca{}class R0 extends Fn{constructor(){No=null,super(),No=this}}class B0 extends Fn{constructor(){Do=null,super(),Do=this}}class F0 extends Fn{constructor(){Lo=null,super(),Lo=this}}class $0 extends Fn{constructor(){Po=null,super(),Po=this}}class J0 extends Fn{constructor(){Mo=null,super(),Mo=this}}class H0 extends Fn{constructor(){Ro=null,super(),Ro=this}}class G0 extends Fn{constructor(){Bo=null,super(),Bo=this}}class K0 extends Fn{constructor(){Fo=null,super(),Fo=this}}class W0 extends Fn{constructor(){$o=null,super(),$o=this}}class Aa extends Ca{}class Y0 extends Aa{constructor(){Jo=null,super(),Jo=this}}class Jl{}function Z0(n){return n.fn(this)}class Hl{}function V0(){return!1}function X0(n){return-1}function Q0(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class Ei{np(){throw Mn.on(b(Ur(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof Sn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class uf{}function IE(n,r){return this.cq(n)}function CE(n,r){n.en(this,r)}class Ms{static tq(){return bi(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw Mn.on("Non-serializable "+b(Ur(r))+" is not supported by "+b(Ur(this))+" encoder")}wq(){throw Mn.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new Sn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):bz()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class da{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class rg{constructor(){C1=this,this.vr_1=kz()}dn(){return this.vr_1}wr(r,e){throw Mn.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw Mn.on("'kotlin.Nothing' does not have instances")}}class ng{constructor(){A1=this,this.xr_1=new kn("kotlin.time.Duration",Oa())}dn(){return this.xr_1}yr(r,e){r.fr(W2(e))}en(r,e){return this.yr(r,e instanceof ye?e.kj_1:g())}zr(r){return Jr().lj(r.yp())}fn(r){return new ye(this.zr(r))}}class eg{constructor(){T1=this,this.as_1=new kn("kotlin.time.Instant",Oa())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof rt?e:g())}fn(r){return bt().xj(r.yp())}}class tg{constructor(){q1=this,this.cs_1=new kn("kotlin.uuid.Uuid",Oa())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof xt?e:g())}fn(r){return Us().gl(r.yp())}}class Ot{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Bs()}go(){return this.hs_1}io(r){return mt(r,this.co()),r.toString()}jo(r){var e=Ol(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return mt(r,this.co()),!1}ko(r){return mt(r,this.co()),mr()}lo(r){return mt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof Ot?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Zr(Er(this.gs_1),31)+ae(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class ig extends Ot{co(){return"kotlin.collections.ArrayList"}}class zi{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Zl()}go(){return this.ls_1}io(r){return mt(r,this.co()),r.toString()}jo(r){var e=Ol(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return mt(r,this.co()),!1}ko(r){return mt(r,this.co()),mr()}lo(r){mt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw Sr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof zi)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=ae(this.co());return r=Zr(31,r)+Er(this.js_1)|0,r=Zr(31,r)+Er(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class ag extends zi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class sg extends Ot{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class cf{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw j.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+fn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=sr):s=a.gt.call(this,r,e,t,i),s}}class ff extends cf{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw j.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class og extends ff{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&E(r,W)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&E(r,W)?r:g())}}class lg extends og{constructor(r){super(r),this.qs_1=new ig(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?q.m():q.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof q?r:g())}us(r){return r}vs(r){return this.us(r instanceof q?r:g())}ws(r,e){if(r instanceof q)return r.k6(e),r;if(e===r.c1())return q.f1(r);var t=q.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&E(r,En)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof q?r:g(),e,t)}}class ug extends cf{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw j.v(b(a))}var s=yb(Nc(0,Zr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&E(e,oa)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw j.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Fn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,we(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&E(t,oa)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class cg extends ug{constructor(r,e){super(r,e),this.lt_1=new ag(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&E(r,yn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&E(r,yn)?r:g())}rs(r){return r===-1?vr.q4():lh(r)}qt(r){return Zr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=lh(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&E(r,yn)?r:g(),e)}}class ve extends ff{constructor(r){super(r),this.yt_1=new sg(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof Nn?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof Nn?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw Sr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw Sr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof Nn?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class Nn{static ku(){return bi(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=sr):t=e.lu.call(this,r),t}}let fg=class{constructor(){O1=this,this.nu_1=di(0)}};class vg{constructor(r,e){uh(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Zn(new y(-1,-1),t),i.qu_1=a,this.ru_1=uh().nu_1}else this.qu_1=new y(0,0),this.ru_1=_z(this,t)}su(r){r<64?this.qu_1=pi(this.qu_1,Zn(new y(1,0),r)):gz(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=t_(Pc(this.qu_1));if(this.qu_1=pi(this.qu_1,Zn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?mz(this):-1}}class Ta{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=go(this.jv_1),this.pv_1=Nr();var f=this,v=uo();f.qv_1=ao(v,Cz(this));var h=this,d=uo();h.rv_1=ao(d,Tz(this));var _=this,m=uo();_.sv_1=ao(m,Oz(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Yl()}ho(){var r=this.nv_1;return r??mr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=yi;return ba("typeParameterDescriptors",1,e,qz(),null),r.l2()}lo(r){return aa(im(this),r).dn()}mo(r){return vm(this.ov_1,r)}ko(r){var e=aa(this.mv_1,r);return e??mr()}io(r){return aa(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Ta)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Jc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return am(this)}toString(){return om(this)}}class Gl extends Ta{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Zr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Gl)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&Jc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class hg{}function AE(){return lm()}class vf{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw Sr.o3(b(r))}en(r,e){var t="unsupported";throw Sr.o3(b(t))}fn(r){var e="unsupported";throw Sr.o3(b(e))}}class dg extends Ms{constructor(){return new.target.yv()}static yv(){Ho=null;var r=this.tq();return Ho=r,r.xv_1=Vl(),r}pq(){return this.xv_1}vq(r){return sr}wq(){return sr}xq(r){return sr}yq(r){return sr}zq(r){return sr}ar(r){return sr}br(r){return sr}cr(r){return sr}dr(r){return sr}er(r){return sr}fr(r){return sr}}class Rs{constructor(){j1=this,this.zv_1=bf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Ka()}jo(r){Ka()}mo(r){Ka()}lo(r){Ka()}ko(r){Ka()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return ae(this.aw_1)+Zr(31,this.zv_1.hashCode())|0}}class pg{}class _g{constructor(r,e){this.bw_1=e,this.cw_1=mr();var t=this,i=uo();t.dw_1=ao(i,Sz(r,this))}dn(){var r=this.dw_1,e=yi;return ba("descriptor",1,e,Ez(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw Mn.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class gg extends ve{constructor(){Go=null,super(Yg(Lc())),Go=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&ns(r)?r:g())}iw(r,e){return e===r.length?Rt.lw(r):Rt.mw(Zu(r,e),r.length)}xs(r,e){return this.iw(r!=null&&ns(r)?r:g(),e)}gu(r){return Rt.nw(r)}fu(){return Rt.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof Rt?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof Rt?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&ns(e)?e:g(),t)}}class mg extends ve{constructor(){Ko=null,super(Zg()),Ko=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&is(r)?r:g())}vw(r,e){return e===r.length?Bt.yw(r):Bt.zw(Vu(r,e),r.length)}xs(r,e){return this.vw(r!=null&&is(r)?r:g(),e)}gu(r){return Bt.ax(r)}fu(){return Bt.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Bt?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Bt?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&is(e)?e:g(),t)}}class yg extends ve{constructor(){Wo=null,super(Vg()),Wo=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&ts(r)?r:g())}ix(r,e){return e===r.length?Ft.lx(r):Ft.mx(Xu(r,e),r.length)}xs(r,e){return this.ix(r!=null&&ts(r)?r:g(),e)}gu(r){return Ft.nx(r)}fu(){return Ft.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Ft?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Ft?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&ts(e)?e:g(),t)}}class wg extends ve{constructor(){Yo=null,super(mf(Sl())),Yo=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&Qi(r)?r:g())}vx(r,e){return e===r.length?$t.yx(r):$t.zx(ca(r,e),r.length)}xs(r,e){return this.vx(r!=null&&Qi(r)?r:g(),e)}gu(r){return $t.ay(r)}fu(){return $t.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof $t?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof $t?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&Qi(e)?e:g(),t)}}class bg extends ve{constructor(){Zo=null,super(Kl(Ns())),Zo=this}hy(r){return ci(r)}nt(r){return this.hy(r instanceof ii?r.qm_1:g())}iy(r,e){if(e===ci(r))return Jt.ly(r);var t=ca(r,e);return Jt.my(t,ci(r))}xs(r,e){return this.iy(r instanceof ii?r.qm_1:g(),e)}gu(r){return Jt.ny(r)}fu(){return Jt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Jt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Jt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=QS(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof ii?e.qm_1:g(),t)}}class kg extends ve{constructor(){Vo=null,super(gf()),Vo=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&es(r)?r:g())}vy(r,e){return e===r.length?Ht.yy(r):Ht.zy(gi(r,e),r.length)}xs(r,e){return this.vy(r!=null&&es(r)?r:g(),e)}gu(r){return Ht.az(r)}fu(){return Ht.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Ht?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&es(e)?e:g(),t)}}class xg extends ve{constructor(){Xo=null,super(df(Ml())),Xo=this}hz(r){return ui(r)}nt(r){return this.hz(r instanceof ti?r.fm_1:g())}iz(r,e){if(e===ui(r))return Gt.lz(r);var t=gi(r,e);return Gt.mz(t,ui(r))}xs(r,e){return this.iz(r instanceof ti?r.fm_1:g(),e)}gu(r){return Gt.nz(r)}fu(){return Gt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Gt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Gt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=FS(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof ti?e.fm_1:g(),t)}}class Sg extends ve{constructor(){Qo=null,super(wf()),Qo=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&rs(r)?r:g())}vz(r,e){return e===r.length?Kt.yz(r):Kt.zz(fa(r,e),r.length)}xs(r,e){return this.vz(r!=null&&rs(r)?r:g(),e)}gu(r){return Kt.a10(r)}fu(){return Kt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Kt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Kt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&rs(e)?e:g(),t)}}class Eg extends ve{constructor(){rl=null,super(_f(Rl())),rl=this}h10(r){return fi(r)}nt(r){return this.h10(r instanceof ai?r.bn_1:g())}i10(r,e){if(e===fi(r))return Wt.l10(r);var t=fa(r,e);return Wt.m10(t,fi(r))}xs(r,e){return this.i10(r instanceof ai?r.bn_1:g(),e)}gu(r){return Wt.n10(r)}fu(){return Wt.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Wt?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Wt?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=uE(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof ai?e.bn_1:g(),t)}}class zg extends ve{constructor(){nl=null,super(yf()),nl=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&Qa(r)?r:g())}v10(r,e){return e===r.length?Yt.y10(r):Yt.z10(va(r,e),r.length)}xs(r,e){return this.v10(r!=null&&Qa(r)?r:g(),e)}gu(r){return Yt.a11(r)}fu(){return Yt.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof Yt?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof Yt?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&Qa(e)?e:g(),t)}}class Ig extends ve{constructor(){el=null,super(pf(Pl())),el=this}h11(r){return li(r)}nt(r){return this.h11(r instanceof ei?r.ul_1:g())}i11(r,e){if(e===li(r))return Zt.l11(r);var t=va(r,e);return Zt.m11(t,li(r))}xs(r,e){return this.i11(r instanceof ei?r.ul_1:g(),e)}gu(r){return Zt.n11(r)}fu(){return Zt.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof Zt?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof Zt?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=OS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof ei?e.ul_1:g(),t)}}class Cg extends ve{constructor(){tl=null,super(Xg()),tl=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&Xa(r)?r:g())}v11(r,e){return e===r.length?Vt.y11(r):Vt.z11(Qu(r,e),r.length)}xs(r,e){return this.v11(r!=null&&Xa(r)?r:g(),e)}gu(r){return Vt.a12(r)}fu(){return Vt.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof Vt?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof Vt?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&Xa(e)?e:g(),t)}}class Rt extends Nn{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(cs(r),0)}static ow(){return this.mw(cs(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Zu(this.jw_1,fn(r,Zr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Zu(this.jw_1,this.kw_1)}}class Bt extends Nn{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=Vu(this.ww_1,fn(r,Zr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return Vu(this.ww_1,this.xw_1)}}class Ft extends Nn{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=Xu(this.jx_1,fn(r,Zr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return Xu(this.jx_1,this.kx_1)}}class $t extends Nn{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(di(r),0)}static by(){return this.zx(di(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=ca(this.wx_1,fn(r,Zr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return ca(this.wx_1,this.xx_1)}}class Jt extends Nn{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,ci(r))}static ny(r){return this.my(sh(r),0)}static oy(){return this.my(sh(10),0)}au(){return this.ky_1}lu(r){if(ci(this.jy_1)<r){var e=this,t=this.jy_1,i=fn(r,Zr(ci(this.jy_1),2));e.jy_1=ca(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,rE(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return ca(r,e)}cu(){return new ii(this.f12())}}class Ht extends Nn{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=gi(this.wy_1,fn(r,Zr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return gi(this.wy_1,this.xy_1)}}class Gt extends Nn{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,ui(r))}static nz(r){return this.mz(ah(r),0)}static oz(){return this.mz(ah(10),0)}au(){return this.kz_1}lu(r){if(ui(this.jz_1)<r){var e=this,t=this.jz_1,i=fn(r,Zr(ui(this.jz_1),2));e.jz_1=gi(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,$S(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return gi(r,e)}cu(){return new ti(this.g12())}}class Kt extends Nn{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=fa(this.wz_1,fn(r,Zr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return fa(this.wz_1,this.xz_1)}}class Wt extends Nn{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,fi(r))}static n10(r){return this.m10(oh(r),0)}static o10(){return this.m10(oh(10),0)}au(){return this.k10_1}lu(r){if(fi(this.j10_1)<r){var e=this,t=this.j10_1,i=fn(r,Zr(fi(this.j10_1),2));e.j10_1=fa(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,cE(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return fa(r,e)}cu(){return new ai(this.h12())}}class Yt extends Nn{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=va(this.w10_1,fn(r,Zr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return va(this.w10_1,this.x10_1)}}class Zt extends Nn{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,li(r))}static n11(r){return this.m11(ih(r),0)}static o11(){return this.m11(ih(10),0)}au(){return this.k11_1}lu(r){if(li(this.j11_1)<r){var e=this,t=this.j11_1,i=fn(r,Zr(li(this.j11_1),2));e.j11_1=va(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,jS(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return va(r,e)}cu(){return new ei(this.i12())}}class Vt extends Nn{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(go(r),0)}static b12(){return this.z11(go(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=Qu(this.w11_1,fn(r,Zr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return Qu(this.w11_1,this.x11_1)}}class Ag{constructor(){N1=this,this.j12_1=new kn("kotlin.String",Oa())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class kn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){Wa(this)}jo(r){Wa(this)}mo(r){Wa(this)}lo(r){Wa(this)}ko(r){Wa(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof kn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return ae(this.l12_1)+Zr(31,this.m12_1.hashCode())|0}}class Tg{constructor(){D1=this,this.n12_1=new kn("kotlin.Int",sz())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class qg{constructor(){L1=this,this.p12_1=new kn("kotlin.Long",oz())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class Og{constructor(){P1=this,this.r12_1=new kn("kotlin.Byte",tz())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class jg{constructor(){M1=this,this.t12_1=new kn("kotlin.Short",az())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class Ug{constructor(){R1=this,this.v12_1=new kn("kotlin.Char",iz())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof Sn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new Sn(this.x12(r))}}class Ng{constructor(){B1=this,this.y12_1=new kn("kotlin.Double",uz())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class Dg{constructor(){F1=this,this.a13_1=new kn("kotlin.Float",lz())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Lg{constructor(){$1=this,this.c13_1=new kn("kotlin.Boolean",ez())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class Pg{constructor(){J1=this,this.e13_1=new _g("kotlin.Unit",sr)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,sr)}en(r,e){return this.f13(r,e instanceof gl?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),sr}}class qa{constructor(){var r=this;r.m13_1=q.m(),this.n13_1=!1}pq(){return Vl()}r13(r){throw Mn.on(b(Ur(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof Sn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return oI(this,a,lI(this,t,i))}o13(){return zp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(qs(this.m13_1));return this.n13_1=!0,r}}class Mg extends qa{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":V(this.m13_1,".","$.")}}class Rg{constructor(){H1=this,this.f14_1=Fs("kotlin.UInt",gf())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Vn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Vn(this.h14(r))}}class Bg{constructor(){G1=this,this.i14_1=Fs("kotlin.ULong",mf(Sl()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Xn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Xn(this.k14(r))}}class Fg{constructor(){K1=this,this.l14_1=Fs("kotlin.UByte",yf())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof Pe?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new Pe(this.n14(r))}}class $g{constructor(){W1=this,this.o14_1=Fs("kotlin.UShort",wf())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Me?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Me(this.q14(r))}}class Jg{zn(r,e,t){return e=e===l?mr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class Hg extends Jg{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(Ur(e)),a=i!=null&&E(i,Bl)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(E(t,yn)?t:g()).o2(e);var a=i,s=a!=null&&E(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||E(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof Gg){var s=E(i,Ge)?i:g(),o=a.c15_1;r.d15(s,E(o,cr)?o:g())}else a instanceof Kg?r.b15(i,a.a15_1):zs()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=E(f,Ge)?f:g(),x=E(_,Ge)?_:g(),k=E(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var z=S.z(),I=z.k2(),A=z.l2(),O=E(I,Ge)?I:g();r.f15(O,typeof A=="function"?A:g())}for(var D=this.x14_1.r2().x();D.y();){var J=D.z(),T=J.k2(),M=J.l2(),F=E(T,Ge)?T:g();r.g15(F,typeof M=="function"?M:g())}}}class hf{}class Gg extends hf{}class Kg extends hf{}class Wg{}function TE(n,r){return this.b15(n,pI(r))}class qE{}function OE(n,r,e){var t=n.gn(r,e),i;return t==null?fz(Ur(e),n.hn()):i=t,i}function E1(n,r,e){var t=n.in(r,e),i;return t==null?em(e,n.hn()):i=t,i}function Iu(n){ln(n,n.mn_1)}function gs(n){return Yz()}function df(n){return uI()}function Kl(n){return cI()}function pf(n){return fI()}function _f(n){return vI()}function gf(n){return Zz()}function mf(n){return Vz()}function yf(n){return Xz()}function wf(n){return Qz()}function Yg(n){return rI()}function jE(){return Dz()}function Zg(n){return nI()}function UE(){return Lz()}function Vg(n){return eI()}function NE(){return Pz()}function DE(){return Mz()}function LE(){return Rz()}function PE(){return Bz()}function ME(){return Fz()}function RE(){return $z()}function BE(){return Jz()}function FE(){return Hz()}function $E(){return Gz()}function Xg(n){return tI()}function JE(){return Kz()}function HE(n){return iI()}function GE(){return vz()}function KE(n){return hz()}function WE(n){return dz()}function YE(n){return pz()}function z1(n){return new lg(n)}function I1(n,r){return new cg(n,r)}function ZE(n,r){var e=Qg(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function Qg(n){var r;return n instanceof q0?r=n.bo_1:n instanceof pg?r=Qg(n.ao_1):r=null,r}function VE(n){return new j0(n)}function Wl(n,r,e,t){var i;if(t===l?i=nz:i=t,t=i,lt(n)){var a="Blank serial names are prohibited";throw j.v(b(a))}if(P(r,Yl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw j.v(b(s))}var o=new U0(n);return t(o),new Ia(n,r,o.to_1.c1(),Xw(e),o)}function rm(n){var r=n.lp_1,e=yi;return ba("_hashCode",1,e,QE(),null),r.l2()}function XE(n){return()=>sm(n,n.kp_1)}function QE(){return Re(n=>rm(n),1,0,0)}function rz(n,r){if(lt(n)){var e="Blank serial names are prohibited";throw j.v(b(e))}return aI(n,r)}function nz(n){return sr}var Ao;function Ii(){return Ao===l&&new $l,Ao}var To;function nm(){return To===l&&new N0,To}var qo;function Yl(){return qo===l&&new D0,qo}var Oo;function Bs(){return Oo===l&&new L0,Oo}var jo;function Zl(){return jo===l&&new P0,jo}var Uo;function bf(){return Uo===l&&new M0,Uo}var No;function ez(){return No===l&&new R0,No}var Do;function tz(){return Do===l&&new B0,Do}var Lo;function iz(){return Lo===l&&new F0,Lo}var Po;function az(){return Po===l&&new $0,Po}var Mo;function sz(){return Mo===l&&new J0,Mo}var Ro;function oz(){return Ro===l&&new H0,Ro}var Bo;function lz(){return Bo===l&&new G0,Bo}var Fo;function uz(){return Fo===l&&new K0,Fo}var $o;function Oa(){return $o===l&&new W0,$o}var Jo;function cz(){return Jo===l&&new Y0,Jo}function fz(n,r){var e=n.oc();em(e??b(n),r)}function em(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw Mn.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var C1;function vz(){return C1===l&&new rg,C1}var A1;function hz(){return A1===l&&new ng,A1}var T1;function dz(){return T1===l&&new eg,T1}var q1;function pz(){return q1===l&&new tg,q1}function mt(n,r){if(n<0)throw Kn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function lh(n){var r=n;return vr.ha(r)}var O1;function uh(){return O1===l&&new fg,O1}function _z(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=di(e);return t!==0&&(i[Yw(i)]=Zn(new y(-1,-1),r)),i}function gz(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=pi(n.ru_1[e],Zn(new y(1,0),t))}function mz(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Zr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=t_(Pc(a));a=pi(a,Zn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function Fs(n,r){return new Gl(n,new vf(r))}function yz(n,r){return n.yn(r)}function wz(n){return Iz(n)}var Ho;function bz(){return Ho===l&&dg.yv(),Ho}function Ka(n){throw Sr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var j1;function kz(){return j1===l&&new Rs,j1}function xz(n){return r=>(r.so_1=n.cw_1,sr)}function Sz(n,r){return()=>{var e=bf();return Wl(n,e,[],xz(r))}}function Ez(){return Re(n=>n.dn(),1,0,1)}function zz(){return kf(),tm}var tm;function Iz(n){if(kf(),E(n,Ls))return n.mp();var r=vi.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function U1(n){kf();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=mi(e);var i=t;return i??zz()}var ch;function kf(){ch||(ch=!0,tm=[])}function im(n){var r=n.qv_1,e=yi;return ba("childSerializers",1,e,Az(),null),r.l2()}function am(n){var r=n.sv_1,e=yi;return ba("_hashCode",1,e,jz(),null),r.l2()}function Cz(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??lm()}}function Az(){return Re(n=>im(n),1,0,2)}function Tz(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=q.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return U1(t)}}function qz(){return Re(n=>n.tv(),1,0,3)}function Oz(n){return()=>sm(n,n.tv())}function jz(){return Re(n=>am(n),1,0,4)}function sm(n,r){var e=ae(n.co());e=Zr(31,e)+fk(r)|0;for(var t=VE(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Zr(31,o),c=s.co(),f=c==null?null:Er(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Zr(31,m),x=_.do(),k=x==null?null:Er(x);h=w+(k??0)|0}var S=h;return e=Zr(31,e)+v|0,e=Zr(31,e)+S|0,e}function om(n){var r=Nc(0,n.go()),e=n.co()+"(";return V(r,", ",e,")",l,l,Uz(n))}function Uz(n){return r=>n.io(r)+": "+n.lo(r).co()}function lm(){return Nz(),um}var um,fh;function Nz(){fh||(fh=!0,um=[])}var Go;function Dz(){return Go===l&&new gg,Go}var Ko;function Lz(){return Ko===l&&new mg,Ko}var Wo;function Pz(){return Wo===l&&new yg,Wo}var Yo;function Mz(){return Yo===l&&new wg,Yo}var Zo;function Rz(){return Zo===l&&new bg,Zo}var Vo;function Bz(){return Vo===l&&new kg,Vo}var Xo;function Fz(){return Xo===l&&new xg,Xo}var Qo;function $z(){return Qo===l&&new Sg,Qo}var rl;function Jz(){return rl===l&&new Eg,rl}var nl;function Hz(){return nl===l&&new zg,nl}var el;function Gz(){return el===l&&new Ig,el}var tl;function Kz(){return tl===l&&new Cg,tl}function Wz(){return xf(),cm}var cm,N1;function Yz(){return N1===l&&new Ag,N1}function Wa(n){throw Sr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var D1;function Zz(){return D1===l&&new Tg,D1}var L1;function Vz(){return L1===l&&new qg,L1}var P1;function Xz(){return P1===l&&new Og,P1}var M1;function Qz(){return M1===l&&new jg,M1}var R1;function rI(){return R1===l&&new Ug,R1}var B1;function nI(){return B1===l&&new Ng,B1}var F1;function eI(){return F1===l&&new Dg,F1}var $1;function tI(){return $1===l&&new Lg,$1}var J1;function iI(){return J1===l&&new Pg,J1}function aI(n,r){return xf(),sI(n),new kn(n,r)}function sI(n){xf();for(var r=Wz().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw j.v(m2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Ur(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var vh;function xf(){vh||(vh=!0,cm=_I())}function oI(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function lI(n,r,e){return()=>n.aq(r,e)}var H1;function uI(){return H1===l&&new Rg,H1}var G1;function cI(){return G1===l&&new Bg,G1}var K1;function fI(){return K1===l&&new Fg,K1}var W1;function vI(){return W1===l&&new $g,W1}function hI(){return dI(),fm}var fm,hh;function dI(){hh||(hh=!0,fm=new Hg(Nr(),Nr(),Nr(),Nr(),Nr(),!1))}function Vl(){return hI()}function pI(n){return r=>n}function aa(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Kn.tb("Index "+r+" out of bounds "+Mw(n).toString());return n[r]}function vm(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Kn.tb("Index "+r+" out of bounds "+Vw(n).toString());return n[r]}function _I(){return Al([U(xr().id(),gs()),U(jr(Sn),Yg(Lc())),U(xr().ld(),jE()),U(xr().gd(),Zg()),U(xr().sd(),UE()),U(xr().fd(),Vg()),U(xr().rd(),NE()),U(xr().ed(),mf(Sl())),U(xr().qd(),DE()),U(jr(Xn),Kl(Ns())),U(jr(ii),LE()),U(xr().dd(),gf()),U(xr().od(),PE()),U(jr(Vn),df(Ml())),U(jr(ti),ME()),U(xr().cd(),wf()),U(xr().nd(),RE()),U(jr(Me),_f(Rl())),U(jr(ai),BE()),U(xr().bd(),yf()),U(xr().md(),FE()),U(jr(Pe),pf(Pl())),U(jr(ei),$E()),U(xr().ad(),Xg()),U(xr().kd(),JE()),U(jr(gl),HE()),U(xr().zc(),GE()),U(jr(ye),KE(Jr())),U(jr(rt),WE(bt())),U(jr(xt),YE(Us()))])}Mr(Bl,"SerializationStrategy");Mr(ia,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[Bl,ia]);p(Mn,"SerializationException",Mn.nn);p(Fl,"MissingFieldException");Mr(fe,"SerialDescriptor");p(q0,"ContextDescriptor",l,l,[fe]);p(O0);p(j0);p(U0,"ClassSerialDescriptorBuilder");Mr(Ls,"CachedNames");Lr(Ia).eo=xi;Lr(Ia).fo=Si;p(Ia,"SerialDescriptorImpl",l,l,[fe,Ls]);p(Ca,"SerialKind");N($l,"ENUM");N(N0,"CONTEXTUAL");p(Ps,"StructureKind");N(D0,"CLASS");N(L0,"LIST");N(P0,"MAP");N(M0,"OBJECT");p(Fn,"PrimitiveKind");N(R0,"BOOLEAN");N(B0,"BYTE");N(F0,"CHAR");N($0,"SHORT");N(J0,"INT");N(H0,"LONG");N(G0,"FLOAT");N(K0,"DOUBLE");N(W0,"STRING");p(Aa,"PolymorphicKind");N(Y0,"SEALED");Mr(Jl,"Decoder");Mr(Hl,"CompositeDecoder");Lr(Ei).oq=Q0;Lr(Ei).bq=Z0;Lr(Ei).qq=V0;Lr(Ei).sq=X0;p(Ei,"AbstractDecoder",l,l,[Jl,Hl]);Mr(uf,"Encoder");Lr(Ms).sr=IE;Lr(Ms).rr=CE;p(Ms,"AbstractEncoder",l,l,[uf]);p(da,"AbstractPolymorphicSerializer",l,l,[cr]);N(rg,"NothingSerializer",l,l,[cr]);N(ng,"DurationSerializer",l,l,[cr]);N(eg,"InstantSerializer",l,l,[cr]);N(tg,"UuidSerializer",l,l,[cr]);Lr(Ot).eo=xi;Lr(Ot).fo=Si;Lr(Ot).ho=Ds;p(Ot,"ListLikeDescriptor",l,l,[fe]);p(ig,"ArrayListClassDesc");Lr(zi).eo=xi;Lr(zi).fo=Si;Lr(zi).ho=Ds;p(zi,"MapLikeDescriptor",l,l,[fe]);p(ag,"LinkedHashMapClassDesc");p(sg,"PrimitiveArrayDescriptor");p(cf,"AbstractCollectionSerializer",l,l,[cr]);p(ff,"CollectionLikeSerializer");p(og,"CollectionSerializer");p(lg,"ArrayListSerializer");p(ug,"MapLikeSerializer");p(cg,"LinkedHashMapSerializer");p(ve,"PrimitiveArraySerializer");p(Nn,"PrimitiveArrayBuilder");Xr(fg);p(vg,"ElementMarker");Lr(Ta).eo=xi;Lr(Ta).fo=Si;p(Ta,"PluginGeneratedSerialDescriptor",l,l,[fe,Ls]);p(Gl,"InlineClassDescriptor");Mr(hg,"GeneratedSerializer",l,l,[cr]);Lr(vf).wv=AE;p(vf,l,l,l,[hg]);N(dg,"NoOpEncoder");Lr(Rs).eo=xi;Lr(Rs).fo=Si;Lr(Rs).ho=Ds;N(Rs,"NothingSerialDescriptor",l,l,[fe]);p(pg,"SerialDescriptorForNullable",l,l,[fe,Ls]);p(_g,"ObjectSerializer",l,l,[cr]);N(gg,"CharArraySerializer",l,l,[cr]);N(mg,"DoubleArraySerializer",l,l,[cr]);N(yg,"FloatArraySerializer",l,l,[cr]);N(wg,"LongArraySerializer",l,l,[cr]);N(bg,"ULongArraySerializer",l,l,[cr]);N(kg,"IntArraySerializer",l,l,[cr]);N(xg,"UIntArraySerializer",l,l,[cr]);N(Sg,"ShortArraySerializer",l,l,[cr]);N(Eg,"UShortArraySerializer",l,l,[cr]);N(zg,"ByteArraySerializer",l,l,[cr]);N(Ig,"UByteArraySerializer",l,l,[cr]);N(Cg,"BooleanArraySerializer",l,l,[cr]);p(Rt,"CharArrayBuilder");p(Bt,"DoubleArrayBuilder");p(Ft,"FloatArrayBuilder");p($t,"LongArrayBuilder");p(Jt,"ULongArrayBuilder");p(Ht,"IntArrayBuilder");p(Gt,"UIntArrayBuilder");p(Kt,"ShortArrayBuilder");p(Wt,"UShortArrayBuilder");p(Yt,"ByteArrayBuilder");p(Zt,"UByteArrayBuilder");p(Vt,"BooleanArrayBuilder");N(Ag,"StringSerializer",l,l,[cr]);Lr(kn).eo=xi;Lr(kn).fo=Si;Lr(kn).ho=Ds;p(kn,"PrimitiveSerialDescriptor",l,l,[fe]);N(Tg,"IntSerializer",l,l,[cr]);N(qg,"LongSerializer",l,l,[cr]);N(Og,"ByteSerializer",l,l,[cr]);N(jg,"ShortSerializer",l,l,[cr]);N(Ug,"CharSerializer",l,l,[cr]);N(Ng,"DoubleSerializer",l,l,[cr]);N(Dg,"FloatSerializer",l,l,[cr]);N(Lg,"BooleanSerializer",l,l,[cr]);N(Pg,"UnitSerializer",l,l,[cr]);Lr(qa).oq=Q0;Lr(qa).bq=Z0;Lr(qa).qq=V0;Lr(qa).sq=X0;p(qa,"TaggedDecoder",l,l,[Jl,Hl]);p(Mg,"NamedValueDecoder");N(Rg,"UIntSerializer",l,l,[cr]);N(Bg,"ULongSerializer",l,l,[cr]);N(Fg,"UByteSerializer",l,l,[cr]);N($g,"UShortSerializer",l,l,[cr]);p(Jg,"SerializersModule");p(Hg,"SerialModuleImpl");p(hf,"ContextualProvider");p(Gg,"Argless");p(Kg,"WithTypeArguments");Mr(Wg,"SerializersModuleCollector");p(qE,"SerializableWith",l,l,l,l,0);var $s=Math.imul;class Sf{constructor(r,e){xe(),this.h15_1=r,this.i15_1=e,this.j15_1=new V1}pq(){return this.i15_1}k15(r,e){var t=new Q1;try{return VI(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=Hf(this,e),i=new ms(this,iu(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(ct(),r)}}class hm extends Sf{constructor(){il=null,super(new Ef,Vl()),il=this}}class dm{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw j.v(b(r))}if(!this.l16_1.equals(Hm())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw j.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=rr(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw j.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw j.v(b(t))}return new Ef(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class pm extends Sf{constructor(r,e){super(r,e),wI(this)}}class _m{}class gm{}class mm{}class Ef{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?Hm():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+le(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class co extends ie{}class Xl{}class ym{t17(){return ct()}}class We{}class gI{}class fr extends We{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class mI{}class cn extends We{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return Er(this.x17_1)}toString(){var r=$s(this.x17_1.c1()+1|0,2),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof We?this.y17(r instanceof We?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof We?this.z17(r instanceof We?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class wm{t17(){return ru()}}class er extends We{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return Er(this.a18_1)}toString(){var r=$s(this.a18_1.c1(),6),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,fl(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class ue extends fr{constructor(){al=null,super(),al=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class ut extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw j.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=nn.fa(e);fl(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?fl(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!Ur(this).equals(Ur(r))||(r instanceof ut||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=Kp(this.e18_1);return r=$s(31,r)+ae(this.g18_1)|0,r}}class yt{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new er(this.i18_1)}}class bm{constructor(){var r=this;r.k18_1=q.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new cn(this.k18_1)}}class km{constructor(){nc=this;var r=this,e=cz();r.r18_1=Wl("kotlinx.serialization.json.JsonElement",e,[],II)}dn(){return this.r18_1}s18(r,e){Ua(r),e instanceof fr?r.rr(Nf(),e):e instanceof er?r.rr(ru(),e):e instanceof cn?r.rr(Df(),e):zs()}en(r,e){return this.s18(r,e instanceof We?e:g())}fn(r){var e=nu(r);return e.s17()}}class xm{constructor(){ec=this,this.m18_1=Wl("kotlinx.serialization.json.JsonPrimitive",Oa(),[])}dn(){return this.m18_1}t18(r,e){Ua(r);var t;if(e instanceof ue)r.rr(Lf(),Ks()),t=sr;else{var i=Wm();r.rr(i,e instanceof ut?e:g()),t=sr}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=nu(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(Ur(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Sm{constructor(){tc=this,this.h19_1=z1(ct()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class Em{constructor(){ic=this,this.q18_1=jI()}dn(){return this.q18_1}j19(r,e){Ua(r),z1(ct()).en(r,e)}en(r,e){return this.j19(r,e instanceof cn?e:g())}fn(r){return Pf(r),new cn(z1(ct()).fn(r))}}class zm{constructor(){ac=this,this.k19_1=I1(gs(),ct()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class Im{constructor(){sc=this,this.p18_1=UI()}dn(){return this.p18_1}m19(r,e){Ua(r),I1(gs(),ct()).en(r,e)}en(r,e){return this.m19(r,e instanceof er?e:g())}fn(r){return Pf(r),new er(I1(gs(),ct()).fn(r))}}class Cm{constructor(){oc=this,this.n18_1=Wl("kotlinx.serialization.json.JsonNull",Ii(),[])}dn(){return this.n18_1}n19(r,e){Ua(r),r.wq()}en(r,e){return this.n19(r,e instanceof ue?e:g())}fn(r){if(Pf(r),r.op())throw Mf("Expected 'null' literal");return r.pp(),Ks()}}class Am{constructor(){lc=this,this.o18_1=rz("kotlinx.serialization.json.JsonLiteral",Oa())}dn(){return this.o18_1}o19(r,e){if(Ua(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=S2(e.g18_1);if(t!=null)return r.br(t);var i=T0(e.g18_1),a=i;if((a==null?null:new Xn(a))!=null){var s=i,o=(s==null?null:new Xn(s)).lm_1,u=r.gr(Kl(Ns()).dn()),c=o;return u.br(c),sr}var f=Yc(e.g18_1);if(f!=null)return r.dr(f);var v=N2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof ut?e:g())}fn(r){var e=nu(r),t=e.s17();if(!(t instanceof ut)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(Ur(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Js{constructor(r){this.p19_1=w_(r)}co(){return Je(this).co()}do(){return Je(this).do()}go(){return Je(this).go()}io(r){return Je(this).io(r)}jo(r){return Je(this).jo(r)}ko(r){return Je(this).ko(r)}lo(r){return Je(this).lo(r)}mo(r){return Je(this).mo(r)}}class zf{}class If extends Mn{static w19(r){var e=this.on(r);return ln(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class Or extends If{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return ln(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Hs extends If{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(BI(r,t));return ln(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Gs{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return sr}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return sr}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(R(r))}x1a(r){return this.i1a_1.w1a(R(r))}y1a(r){return this.i1a_1.w1a(R(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class Y1 extends Gs{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(w1(e))}else{var t=r;this.r1a(w1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(k1(e))}else{var t=r;this.r1a(k1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(m1(e))}else{var t=r;this.r1a(m1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(S1(e))}else{var t=r;this.r1a(S1(t))}}}class Z1 extends Gs{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class Tm extends Gs{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class Cf{constructor(r){var e=this;e.n1b_1=new vg(r,MI(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class qm{}class Om{}class jm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&ys(this.x1b_1),e===this.z1b_1.length&&bh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&bh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:cc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=uc)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=nn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&E(a,fe))if(P(a.do(),Bs()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===cc?r.ca("[<debug info disabled>]"):a!==uc&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class Af{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(Jm())}b15(r,e){}e15(r,e,t){var i=t.dn();ZI(this,i,e)}f15(r,e){}g15(r,e){}}class Um{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=ol(this,!0);else if(r===0)e=ol(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&ys(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=r5(this)):(t=XI(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&ys(this.x1c_1);var i=ry(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+vl(r));return e}}class Za extends ie{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class pa{}class V1{constructor(){this.t1b_1=Ih(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=Ih(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof pa?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof pa?e:g());var a=i;return a??null}}class Nm{constructor(r){this.n1d_1=r}}class ms extends Ei{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new Cf(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new Um(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof da?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=cl(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=E(r,ia)?r:g(),o;r:{var u;if(s instanceof da?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=cl(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof er)){var h="Expected "+jr(er).oc()+", but had "+Ur(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Rr(m))}else _=null;var w=_;throw Or.g19($r(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:Cn(k),z=S==null?null:Pn(S),I;try{I=E1(s,this,z)}catch(Q){var A;if(Q instanceof Mn){var O=Q,D=on(O.message),J;if(this.r17().h15_1.p17_1){var T=x.toString();J=b(Rr(T))}else J=null;var M=J;throw Or.g19($r(-1,D,null,null,M),D,-1,null,M,null)}else throw Q}var F=I,B=E(F,ia)?F:g();o=uy(this.r17(),c,x,B)}return o}else a=i;var L=a,H;try{H=E1(r,this,L)}catch(Q){var X;if(Q instanceof Mn){var $=Q,tr=Yi(D2(on($.message),10),"."),Y=L2(on($.message),10,"");this.r15_1.s1b(tr,l,Y)}else throw Q;H=X}var G=H,ar=E(G,ia)?G:g();return this.u15_1=new Nm(t),ar.fn(this)}catch(Q){if(Q instanceof Fl){var ur=Q;throw _s(on(ur.message),"at path")?ur:yz(ur,Ob(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw Q}}cq(r){var e=ay(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),u5(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new ms(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new ms(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&Ff(r,this.p15_1)&&l5(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&Ci(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(ul())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=v5(this,r);break;case 2:e=c5(this);break;default:e=d5(this);break}return this.q15_1.equals(ul())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,R(Hu(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),Hu(r)}sp(){var r=this.r15_1.z1d();return ir(r,R(Gu(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Gu(r)}tp(){var r=this.r15_1.z1d();return ir(r,R(Vr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Vr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=xo(t);break r}catch(s){if(s instanceof j)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Hc(i))return i;_h(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=xo(t);break r}catch(s){if(s instanceof j)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Gc(i))return i;_h(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return $f(r)?new Tf(this.r15_1,this.p15_1):super.zp(r)}}class Tf extends Ei{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw Sr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=gE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=mE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=yE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=wE(t);e=i;break r}catch(a){if(a instanceof j)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class sa extends Ms{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(LI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof da,i;if(t)i=!this.r17().h15_1.o17_1.equals(Jm());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Yl())||P(s,bf());break;default:zs();break}i=a}var o=i,u=o?cl(r.dn(),this.r17()):null,c;if(t){var f=r instanceof da?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw j.v(b(v))}else break n;var h=OE(f,this,e);c=E(h,Bl)?h:g()}else c=r;var d=c;if(u!=null){i5(this.r17(),r,d,u),a5(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=ay(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;g5(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??sa.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(JI(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if($f(r)){var t,i=this.k1c_1;if(i instanceof Y1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new Y1(a,s)}var o=t;e=sa.c1e(o,this.l1c_1,this.m1c_1,null)}else if(m5(r)){var u,c=this.k1c_1;if(c instanceof Z1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new Z1(f,v)}var h=u;e=sa.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!Hc(r))throw gh(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Gc(r))throw gh(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class Ql extends Mg{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof da?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=cl(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof er)){var o="Expected "+jr(er).oc()+", but had "+Ur(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:Cn(d),m=_==null?null:Pn(_),w;try{w=E1(r,this,m)}catch(D){if(D instanceof Mn){var x=D,k=on(x.message),S;if(this.r17().h15_1.p17_1){var z=h.toString();S=b(Rr(z))}else S=null;var I=S;throw Or.g19($r(-1,k,null,null,I),k,-1,null,I,null)}else throw D}var A=w,O=E(A,ia)?A:g();e=uy(this.r17(),i,h,O)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Bs())?a=!0:a=t instanceof Aa,a){var s=this.r17(),o=r.co();if(!(e instanceof cn)){var u="Expected "+jr(cn).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Rr(v))}else f=null;var h=f;throw Or.g19($r(-1,u,c,null,h),u,-1,c,h,null)}i=new X1(s,e)}else if(P(t,Zl())){var d=this.r17(),_=ll(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Fn?x=!0:x=P(m,Ii()),x){var k=this.r17(),S=r.co();if(!(e instanceof er)){var z="Expected "+jr(er).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var O=b(e);A=b(Rr(O))}else A=null;var D=A;throw Or.g19($r(-1,z,I,null,D),z,-1,I,D,null)}w=new Lm(k,e,r)}else if(d.h15_1.b17_1){var J=this.r17(),T=r.co();if(!(e instanceof cn)){var M="Expected "+jr(cn).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+T,F=this.q13(),B;if(this.r17().h15_1.p17_1){var L=b(e);B=b(Rr(L))}else B=null;var H=B;throw Or.g19($r(-1,M,F,null,H),M,-1,F,H,null)}w=new X1(J,e)}else throw Ym(_);i=w}else{var X=this.r17(),$=r.co();if(!(e instanceof er)){var tr="Expected "+jr(er).oc()+", but had "+Ur(e).oc()+" as the serialized body of "+$,Y=this.q13(),G;if(this.r17().h15_1.p17_1){var ar=b(e);G=b(Rr(ar))}else G=null;var ur=G;throw Or.g19($r(-1,tr,Y,null,ur),tr,-1,Y,ur,null)}i=new ja(X,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof ue)}m1e(r){return this.l1e(r)!==Ks()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Km(c),v;f==null?qn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof j)qn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Zi(c),v,h=Le(-128,127);to(E(h,Xi)?h:g(),f)?v=Hu(f):v=null;var d=v,_;d==null?qn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof j)qn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Zi(c),v,h=Le(-32768,32767);to(E(h,Xi)?h:g(),f)?v=Gu(f):v=null;var d=v,_;d==null?qn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof j)qn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Zi(c),v,h=Le(-2147483648,2147483647);to(E(h,Xi)?h:g(),f)?v=Vr(f):v=null;var d=v,_;d==null?qn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof j)qn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Zi(c),v;f==null?qn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof j)qn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=EI(c),v;f==null?qn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof j)qn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Hc(h))return h;var _=mh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=zI(c),v;f==null?qn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof j)qn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Gc(h))return h;var _=mh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+jr(fr).oc()+", but had "+Ur(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new Sn(zb(c.w17())),v;f==null?qn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof j)qn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+jr(fr).oc()+", but had "+Ur(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ut)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Rr(d))}else h=null;var _=h;throw Or.g19($r(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Rr(S))}else k=null;var z=k;throw Or.g19($r(-1,m,w,x,z),m,-1,w,z,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if($f(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+jr(fr).oc()+", but had "+Ur(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=Hf(i,a.w17());t=new Tf(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new Dm(this.r17(),this.l2(),this.h1e_1).zp(r)}}class ja extends Ql{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new Cf(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=eu(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&w5(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!Ff(r,this.r17())&&b5(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??we(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof er)){var a="Expected "+jr(er).oc()+", but had "+Ur(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}return new ja(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class X1 extends Ql{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1(Cx(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class Dm extends Ql{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw j.v(b(e))}return this.y1f_1}}class Lm extends ja{constructor(r,e,t){super(r,e,t),this.l1g_1=ma(e.p2()),this.m1g_1=$s(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?we(this.l2(),r):ce(r)}dq(r){}}class Pm{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new jm(this.x15_1),this.a16_1=null,this.b16_1=nn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(rr(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=vl(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=He(r),s=vl(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(rr(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,He(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==rr(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&He(rr(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(jn(t,r,e))}c1d(){return this.a16_1!=null?Eh(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=rr(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(k5(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=rr(r,i);var u;o?u=qu(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&x5(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return Eh(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=He(rr(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(rr(this.p1g(),r)));for(var t=!1;He(rr(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,qu(this,0,0);r=i}var a;t?a=qu(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=q.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),sr;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Bu(e)!==8&&this.s1b("found ] instead of }"),Hv(e)):i===7?(Bu(e)!==6&&this.s1b("found } instead of ]"),Hv(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return sr}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=P2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw RI(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=rr(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=He(f);if(v!==0)break r;r=r+1|0;var h=ee(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=Ar(d,R(10));a=hr(_,R(h));continue r}var m=i,w=Ar(m,R(10));i=Br(w,R(h)),nr(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),rr(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Yn(i)*z5(a,o);(k>Yn(new y(-1,2147483647))||k<Yn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=On(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=tn(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(rr(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=E5(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),rr(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class Mm{constructor(){vc=this,this.x1g_1=cs(117),this.y1g_1=new Int8Array(126),C5(this),A5(this)}}class qf extends Pm{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,He(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return sr;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=Ul(this.p1g(),34,r);if(e===-1){this.d1d();var t=vl(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,te(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Rm extends qf{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,He(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return sr;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,He(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=Ul(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=Io(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class Q1{constructor(){this.n15_1=nn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){fl(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var il;function xe(){return il===l&&new hm,il}function yI(n,r){n=n===l?xe():n;var e=new dm(n);r(e);var t=e.x16();return new pm(t,e.u16_1)}function wI(n){if(P(n.pq(),Vl()))return sr;var r=new Af(n.h15_1);n.pq().s14(r)}var dh;function Of(){if(dh)return sr;dh=!0,Bm=new co("NONE",0),Fm=new co("ALL_JSON_OBJECTS",1),$m=new co("POLYMORPHIC",2)}var Bm,Fm,$m;function Jm(){return Of(),Bm}function bI(){return Of(),Fm}function Hm(){return Of(),$m}function kI(){return he(),Gm}var Gm,jf,rc;function Dr(n){he();var r=n instanceof er?n:null,e;return r==null?Uf(n,"JsonObject"):e=r,e}function ce(n){return he(),n==null?Ks():new ut(n,!0)}function as(n){he();var r=n instanceof cn?n:null,e;return r==null?Uf(n,"JsonArray"):e=r,e}var al;function Ks(){return al===l&&new ue,al}function Pn(n){he();var r;return n instanceof ue?r=null:r=n.w17(),r}function Cn(n){he();var r=n instanceof fr?n:null,e;return r==null?Uf(n,"JsonPrimitive"):e=r,e}function xI(n){he();var r;try{r=Zi(n)}catch(t){var e;if(t instanceof Or)e=null;else throw t;r=e}return r}function SI(n){he();var r;try{r=Zi(n)}catch(o){var e;if(o instanceof Or)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Le(-2147483648,2147483647);return to(E(s,Xi)?s:g(),a)?Vr(a):null}function Km(n){return he(),y5(n.w17())}function Uf(n,r){throw he(),j.v("Element "+b(Ur(n))+" is not a "+r)}function Zi(n){return he(),Hf(xe(),n.w17()).h18()}function EI(n){he();var r=n.w17();return xo(r)}function zI(n){return he(),xo(n.w17())}var ph;function he(){ph||(ph=!0,Gm=Fs("kotlinx.serialization.json.JsonUnquotedLiteral",gs()))}function sl(n,r,e){return n.j18(r,ce(e))}function II(n){return n.zo("JsonPrimitive",Ya(CI)),n.zo("JsonNull",Ya(AI)),n.zo("JsonLiteral",Ya(TI)),n.zo("JsonObject",Ya(qI)),n.zo("JsonArray",Ya(OI)),sr}function CI(){return Nf().m18_1}function AI(){return Lf().n18_1}function TI(){return Wm().o18_1}function qI(){return ru().p18_1}function OI(){return Df().q18_1}var nc;function ct(){return nc===l&&new km,nc}var ec;function Nf(){return ec===l&&new xm,ec}var tc;function jI(){return tc===l&&new Sm,tc}var ic;function Df(){return ic===l&&new Em,ic}var ac;function UI(){return ac===l&&new zm,ac}var sc;function ru(){return sc===l&&new Im,sc}var oc;function Lf(){return oc===l&&new Cm,oc}function Ya(n){return new Js(n)}var lc;function Wm(){return lc===l&&new Am,lc}function Ua(n){NI(n)}function nu(n){var r=E(n,Xl)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(Ur(n))));return e=r,e}function Pf(n){nu(n)}function NI(n){var r=E(n,zf)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(Ur(n))));return e=r,e}function Je(n){var r=n.p19_1,e=yi;return ba("original",1,e,DI(),null),r.l2()}function DI(){return Re(n=>Je(n),1,0,5)}function LI(n,r){return r.h15_1.c17_1?new Tm(n,r):new Gs(n)}function PI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function MI(n){return Re((r,e)=>{var t=n;return PI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Rr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(jn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=fn(i,0),c=St(a,C(n));return s+b(jn(n,u,c))+o}function $r(n,r,e,t,i){return Rf(n,r,e,t,i)}function Mf(n,r){return r=r===l?null:r,Or.g19(Rf(-1,n,null,r,null),n,-1,null,null,r)}function Ci(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function _h(n,r){n.s1b(Bf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Ym(n){return Hs.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function gh(n,r){return r=r===l?null:r,Hs.h1a(Bf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function mh(n,r){return Bf(n,r)}function Rf(n,r,e,t,i){var a=nn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||lt(e)||(a.ca(" at path: "),a.ca(e)),t==null||lt(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Bf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function RI(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Rr(a,e)):s=null;var o=s;return Or.g19(Rf(e,r,t,i,o),r,e,t,o,i)}function BI(n,r){var e;return r==null||lt(r)?e="":e=`
`+r,n+e}function FI(){return Ie(),Zm}var Zm;function $I(){return Ie(),Vm}var Vm;function Ff(n,r){Ie();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof gm){i=!0;break r}}i=!1}e=i}return e}function eu(n,r,e){if(Ie(),Xm(r,n)){var t=e.toLowerCase();return Cu(n,r,t)}var i=tu(n,r);if(i!=null)return Cu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:Cu(n,r,e)}function JI(n,r,e){Ie();var t=tu(n,r);return t==null?n.io(e):Qm(n,r,t)[e]}function HI(n,r){Ie();var e=tu(n,r);return e==null?wz(n):bp(Qm(n,r,e))}function Xm(n,r){return Ie(),n.h15_1.l17_1&&P(r.do(),Ii())}function Cu(n,r,e){Ie();var t=GI(r,n).o2(e);return t??-3}function tu(n,r){return Ie(),P(n.do(),Yl())?r.h15_1.k17_1:null}function Qm(n,r,e){Ie();var t=vy(r),i=$I();return t.u1b(n,i,WI(n,e))}function GI(n,r){Ie();var e=vy(n),t=FI();return e.u1b(r,t,YI(r,n))}function KI(n,r){Ie();var e=vr.q4(),t=Xm(r,n),i=tu(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=q.m(),f=u.x();f.y();){var v=f.z();v instanceof mm&&c.n(v)}var h=Oc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,yh(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||yh(e,n,S,o)}while(a<s);var z;return e.i1()?z=Nr():z=e,z}function WI(n,r){return()=>{for(var e=An.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Hs.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function YI(n,r){return()=>KI(n,r)}function yh(n,r,e,t){var i=P(r.do(),Ii())?"enum value":"property";if((E(n,yn)?n:g()).m2(e))throw Mf("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(we(n,e))+" in "+b(r)));n.s2(e,t)}var wh;function Ie(){wh||(wh=!0,Zm=new pa,Vm=new pa)}var uc,cc;function bh(n){var r=$s(n.b1c_1,2);n.z1b_1=n_(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;Ek(o,i,0,0,s),n.a1c_1=i}function ZI(n,r,e){var t=r.do(),i;if(t instanceof Aa?i=!0:i=P(t,nm()),i)throw j.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return sr;var a,s;if(P(t,Bs())||P(t,Zl())?s=!0:s=t instanceof Fn,s?a=!0:a=t instanceof $l,a)throw j.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function VI(n,r,e,t){var i=iu(),a=t5().c1(),s=Array(a),o=sa.t1c(r,n,i,s);o.rr(e,t)}function XI(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||Ci(n.u1c_1),n.u1c_1.z1c(7)),new er(e)}function*QI(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(sr,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||Ci(n.u1c_1),n.u1c_1.z1c(7)),new er(i)}function ry(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=q.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||Ci(n.u1c_1,"array"),n.u1c_1.z1c(9)),new cn(e)}function ol(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Ks():new ut(t,r)}function r5(n){return kS(new op(n5(n)),sr)}function n5(n){return Re((r,e,t)=>nk(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=ol(n,!0);else if(a===0)s=ol(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&ys(o.x1c_1);var u=yield*QI(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&ys(c.x1c_1);var f=ry(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function ys(n){throw Mf("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var kh;function Na(){if(kh)return sr;kh=!0,ny=new Za("OBJ",0,123,125),ey=new Za("LIST",1,91,93),ty=new Za("MAP",2,123,125),iy=new Za("POLY_OBJ",3,91,93)}var ny,ey,ty,iy;function e5(){return Na(),[iu(),fc(),ul(),sy()]}function t5(){return Na(),Au==null&&(Au=h2(e5())),Au}var Au;function ay(n,r){var e=r.do(),t;if(e instanceof Aa)t=sy();else if(P(e,Bs()))t=fc();else if(P(e,Zl())){var i=ll(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Fn?o=!0:o=P(a,Ii()),o)s=ul();else if(n.h15_1.b17_1)s=fc();else throw Ym(i);t=s}else t=iu();return t}function ll(n,r){var e;if(P(n.do(),nm())){var t=ZE(r,n),i=t==null?null:ll(t,r);e=i??n}else n.fo()?e=ll(n.lo(0),r):e=n;return e}function iu(){return Na(),ny}function fc(){return Na(),ey}function ul(){return Na(),ty}function sy(){return Na(),iy}function cl(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof _m)return t.k1d_1}return r.h15_1.h17_1}function i5(n,r,e,t){return s5(n,r,e,t)}function a5(n){if(n instanceof $l){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(r))}if(n instanceof Fn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(e))}if(n instanceof Aa){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw Sr.o3(b(t))}}function s5(n,r,e,t){if(HI(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(bI())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Hs.h1a(o,a,u)}}function o5(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function l5(n,r){for(;n.rq(r)!==-1;);}function u5(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function c5(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1),t=-1;return t}function f5(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),Ii())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=eu(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function v5(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=p5(n);n.r15_1.o1d(58);var i=eu(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&f5(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=h5(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function h5(n,r,e){return Ff(r,n.p15_1)||o5(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function d5(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&Ci(n.r15_1,"array"),e=-1),e}function p5(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function _5(){return Jf(),oy}var oy;function g5(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function $f(n){return Jf(),n.fo()&&_5().l1(n)}function m5(n){return Jf(),n.fo()&&P(n,kI())}var xh;function Jf(){xh||(xh=!0,oy=Qt([df(Ml()).dn(),Kl(Ns()).dn(),pf(Pl()).dn(),_f(Rl()).dn()]))}function Tu(){return au(),ly}var ly;function no(n){au();var r=n&15,e;if(r<10){var t=48,i=Z(t);e=Ke(r+i|0)}else{var a=r-10|0,s=97,o=Z(s);e=Ke(a+o|0)}return e}function fl(n,r){au(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Z(s);o<Tu().length&&Tu()[o]!=null&&(n.yd(r,e,a),n.ca(Tu()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function y5(n){return au(),Lv(n,"true",!0)?!0:Lv(n,"false",!0)?!1:null}var Sh;function au(){if(!Sh){Sh=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=no(e>>12),i=no(e>>8),a=no(e>>4),s=no(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Z(o)]='\\"';var u=92;n[Z(u)]="\\\\";var c=9;n[Z(c)]="\\t";var f=8;n[Z(f)]="\\b";var v=10;n[Z(v)]="\\n";var h=13;n[Z(h)]="\\r",n[12]="\\f",ly=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Z(w),k=34,S=Z(k);d[x]=Dn(S);var z=92,I=Z(z),A=92,O=Z(A);d[I]=Dn(O);var D=9,J=Z(D),T=116,M=Z(T);d[J]=Dn(M);var F=8,B=Z(F),L=98,H=Z(L);d[B]=Dn(H);var X=10,$=Z(X),tr=110,Y=Z(tr);d[$]=Dn(Y);var G=13,ar=Z(G),ur=114,Q=Z(ur);d[ar]=Dn(Q);var Tr=102,wr=Z(Tr);d[12]=Dn(wr)}}function uy(n,r,e,t){var i=t.dn();return new ja(n,e,i,r,i).bq(t)}function qn(n,r,e,t){var i=ke(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}function w5(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof ue:u=!1,u){a=!0;break r}if(P(o.do(),Ii())){var c;if(o.eo()?c=t instanceof ue:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:Pn(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=eu(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function b5(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,e,t,i,o),e,-1,t,o,i)}function k5(n,r,e){return n.o1g(r,e),S5(n,e+1|0)}function qu(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function Eh(n){var r=on(n.a16_1);return n.a16_1=null,r}function x5(n){return rr(n.p1g(),n.y15_1-1|0)!==34}function S5(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i);if(a===117)return cy(n,n.p1g(),e);var s=Z(a),o=I5(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function cy(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),cy(n,r,n.y15_1)):(n.b16_1.da(Ke((((eo(n,r,e)<<12)+(eo(n,r,e+1|0)<<8)|0)+(eo(n,r,e+2|0)<<4)|0)+eo(n,r,e+3|0)|0)),e+4|0)}function eo(n,r,e){var t=rr(r,e),i;if(48<=t&&t<=57){var a=Z(t),s=48;i=a-Z(s)|0}else if(97<=t&&t<=102){var o=Z(t),u=97;i=(o-Z(u)|0)+10|0}else if(65<=t&&t<=70){var c=Z(t),f=65;i=(c-Z(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function E5(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i),s=Z(a)|32,o,u=116;if(s===Z(u))zh(n,"rue",e),o=!0;else{var c=102;s===Z(c)?(zh(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function zh(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=rr(n.p1g(),e+a|0),u=Z(s);u!==(Z(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function z5(n,r){var e;switch(r){case!1:var t=-Yn(n);e=Math.pow(10,t);break;case!0:var i=Yn(n);e=Math.pow(10,i);break;default:zs();break}return e}function He(n){var r;if(Z(n)<126){var e=fy().y1g_1;r=e[Z(n)]}else r=0;return r}function vl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function I5(n){return n<117?fy().x1g_1[n]:0}function C5(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,Xt(n,e,117)}while(r<=31);Xt(n,8,98),Xt(n,9,116),Xt(n,10,110),Xt(n,12,102),Xt(n,13,114),Ou(n,47,47),Ou(n,34,34),Ou(n,92,92)}function A5(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Ki(n,e,127)}while(r<=32);Ki(n,9,3),Ki(n,10,3),Ki(n,13,3),Ki(n,32,3),_t(n,44,4),_t(n,58,5),_t(n,123,6),_t(n,125,7),_t(n,91,8),_t(n,93,9),_t(n,34,1),_t(n,92,2)}function Xt(n,r,e){if(e!==117){var t=Z(e);n.x1g_1[t]=Ke(r)}}function Ou(n,r,e){var t=Z(r);return Xt(n,t,e)}function Ki(n,r,e){n.y1g_1[r]=e}function _t(n,r,e){var t=Z(r);return Ki(n,t,e)}var vc;function fy(){return vc===l&&new Mm,vc}function Hf(n,r){return n.h15_1.n17_1?new Rm(r,n.h15_1):new qf(r,n.h15_1)}function vy(n){return n.j15_1}function Ih(n){return os.l7(n)}p(Sf,"Json");N(hm,"Default");p(dm,"JsonBuilder");p(pm,"JsonImpl");p(_m,"JsonClassDiscriminator");p(gm,"JsonIgnoreUnknownKeys");p(mm,"JsonNames");p(Ef,"JsonConfiguration");p(co,"ClassDiscriminatorMode");Mr(Xl,"JsonDecoder",l,l,[Jl,Hl]);Xr(ym);p(We,"JsonElement",l,l,l,l,l,{0:ct});Xr(gI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Nf});Xr(mI);p(cn,"JsonArray",l,l,[En],l,l,{0:Df});Xr(wm);p(er,"JsonObject",l,l,[yn],l,l,{0:ru});N(ue,"JsonNull",l,l,l,l,l,{0:Lf});p(ut,"JsonLiteral");p(yt,"JsonObjectBuilder");p(bm,"JsonArrayBuilder");N(km,"JsonElementSerializer",l,l,[cr]);N(xm,"JsonPrimitiveSerializer",l,l,[cr]);N(Sm,"JsonArrayDescriptor",l,l,[fe]);N(Em,"JsonArraySerializer",l,l,[cr]);N(zm,"JsonObjectDescriptor",l,l,[fe]);N(Im,"JsonObjectSerializer",l,l,[cr]);N(Cm,"JsonNullSerializer",l,l,[cr]);N(Am,"JsonLiteralSerializer",l,l,[cr]);Lr(Js).eo=xi;Lr(Js).fo=Si;Lr(Js).ho=Ds;p(Js,l,l,l,[fe]);Mr(zf,"JsonEncoder",l,l,[uf]);p(If,"JsonException");p(Or,"JsonDecodingException");p(Hs,"JsonEncodingException");p(Gs,"Composer");p(Y1,"ComposerForUnsignedNumbers");p(Z1,"ComposerForUnquotedLiterals");p(Tm,"ComposerWithPrettyPrint");p(Cf,"JsonElementMarker");N(qm,"Tombstone");N(Om,"RedactedKey");p(jm,"JsonPath");Lr(Af).d15=TE;p(Af,"JsonSerializersModuleValidator",l,l,[Wg]);p(Um,"JsonTreeReader",l,l,l,[1]);p(Za,"LexerMode");p(pa,"Key",pa);p(V1,"DescriptorSchemaCache",V1);p(Nm,"DiscriminatorHolder");p(ms,"StreamingJsonDecoder",l,l,[Xl]);p(Tf,"JsonDecoderForUnsignedTypes");p(sa,"StreamingJsonEncoder",l,l,[zf]);p(Ql,"AbstractJsonTreeDecoder",l,l,[Xl]);p(ja,"JsonTreeDecoder");p(X1,"JsonTreeListDecoder");p(Dm,"JsonPrimitiveDecoder");p(Lm,"JsonTreeMapDecoder");p(Pm,"AbstractJsonLexer");N(Mm,"CharMappings");p(qf,"StringJsonLexer");p(Rm,"StringJsonLexerWithComments");p(Q1,"StringJsonWriter",Q1);jf=new ym;rc=new wm;uc=new qm;cc=new Om;var Ch=Math.imul;class hy{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class dy{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class hc{constructor(r,e,t){this.k1j_1=r,this.l1j_1=e,this.m1j_1=t}}class py{constructor(r,e){this.s1j_1=r,this.t1j_1=e}}class _y{constructor(r,e,t,i,a,s,o,u,c,f,v){this.u1j_1=r,this.v1j_1=e,this.w1j_1=t,this.x1j_1=i,this.y1j_1=a,this.z1j_1=s,this.a1k_1=o,this.b1k_1=u,this.c1k_1=c,this.d1k_1=f,this.e1k_1=v}}class gy{constructor(r,e,t){this.f1k_1=r,this.g1k_1=e,this.h1k_1=t}}class my{constructor(r){this.i1k_1=r}zf(r,e){return this.i1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.i1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class yy{constructor(r){this.j1k_1=r}zf(r,e){return this.j1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.j1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class wy{constructor(r){this.k1k_1=r}zf(r,e){return this.k1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.k1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class by{constructor(r){this.l1k_1=r}zf(r,e){return this.l1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.l1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class ky{constructor(r){this.p1k_1=r}r4(){return this.p1k_1.x()}q1k(r){return Ln(r.t1j_1)}s4(r){return this.q1k(r)}}class xy{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?mr():e,t=t===l?null:t,i=i===l?mr():i,a=a===l?mr():a,s=s===l?mr():s,o=o===l?mr():o,u=u===l?mr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?mr():v,h=h===l?mr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.d1j_1,S=this.i1i_1,z=st([this.a1i_1,k,S==null?null:S.g1j_1]),I=q.g1(Yr(z,10)),A=z.x();A.y();){var O=A.z(),D=xe().m15(O);I.n(D)}w.m1i_1=I;for(var J=this,T=q.m(),M=u.x();M.y();){var F=M.z();F.t1h_1||T.n(F)}J.n1i_1=T;var B=this,L;if(!this.n1i_1.i1())L=!0;else{var H;r:{var X;if(E(u,W)?X=u.i1():X=!1,X){H=!1;break r}for(var $=u.x();$.y();){var tr=$.z();if(tr.u1h_1!=null){H=!0;break r}}H=!1}L=H}B.o1i_1=L,this.p1i_1=it(i);for(var Y=this,G=q.g1(Yr(r,10)),ar=r.x();ar.y();){var ur=ar.z(),Q="/"+Y_(ur,ya([47]));G.n(Q)}Y.q1i_1=G,this.r1i_1=Nr(),this.s1i_1=!1,this.t1i_1=!1;var Tr=this;Tr.u1i_1=An.e1();var wr=this;wr.v1i_1=q.m(),this.w1i_1=Nr()}r1k(r,e){this.w1i_1=e;var t=Dr(xe().m15(r)),i=iC(this,tC(this,eC(this,t))),a=or(i,"components"),s=a==null?null:or(a,"schemas"),o=s??Nr();this.r1i_1=kC(this,i,o);var u=this,c;if(_l(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(E(f,W)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(_l(_)){v=!0;break r}}v=!1}c=v}u.s1i_1=c;var m=this,w;if(pl(i,vo()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(E(x,W)?S=x.i1():S=!1,S){k=!1;break r}for(var z=x.x();z.y();){var I=z.z();if(pl(I,vo())){k=!0;break r}}k=!1}w=k}m.t1i_1=w;var A=be(this.s1i_1?My().q2():mr(),this.t1i_1?vo().q2():mr());this.u1i_1.v2(),this.v1i_1.v2();for(var O=_C(this,o)+lC(this,o)+fC(this,o)+vC(this,o),D=o.p2(),J=q.g1(Yr(D,10)),T=D.x();T.y();){var M=T.z(),F=Ln(M);J.n(F)}for(var B=J,L=or(i,"paths"),H=(L??Nr()).p2(),X=q.g1(Yr(H,10)),$=H.x();$.y();){var tr=$.z(),Y=aw(this,tr);X.n(Y)}var G=be(be(B,X),Wf());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var ar="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw Sr.o3(b(ar))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var Q="permissions needs currentUser, which says who the permissions belong to.";throw Sr.o3(b(Q))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var Tr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(Tr))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var wr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(wr))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var dr="guards needs currentUser, which says who is signed in.";throw Sr.o3(b(dr))}var Ir;if(this.h1i_1.i1())Ir=!0;else{var br=qh(),kr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){kr=!0;break r}for(var _r=br.x();_r.y();){var Gr=_r.z();if(G.l1(Gr)){kr=!1;break r}}kr=!0}Ir=kr}if(!Ir){var an="guards exports "+V(qh())+", and the generated client already uses one of the names.";throw Sr.o3(b(an))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Kr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw Sr.o3(b(Kr))}if(!(Cy(this.l1i_1).i1()||!G.l1("cookieConsent"))){var gr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw Sr.o3(b(gr))}for(var Wr=this.n1i_1,Qr=vr.q4(),un=Wr.x();un.y();){var Fr=un.z(),rn=dc(Fr.l1h_1),pn=Qr.o2(rn),vn;if(pn==null){var _n=q.m();Qr.s2(rn,_n),vn=_n}else vn=pn;var re=vn;re.n(Fr)}var $n=Qr.q2(),Jn;r:{for(var de=$n.x();de.y();){var je=de.z();if(je.c1()>1){Jn=je;break r}}Jn=null}var pe=Jn;if(pe!=null){var Fe="The cookies "+V(pe," and ",l,l,l,l,LC)+" would both be called "+dc(ub(pe).l1h_1)+" in TypeScript.";throw Sr.o3(b(Fe))}var $e=this.c1i_1,Ce;r:{for(var Hn=$e.x();Hn.y();){var Tn=Hn.z();if(G.l1(Tn.x1h_1)){Ce=Tn;break r}}Ce=null}var xn=Ce;if(xn!=null){var zn="constants("+xn.x1h_1+") would be exported as '"+xn.x1h_1+"', which the generated client already uses. Rename the object.";throw Sr.o3(b(zn))}var Ue=Ve("client.ts")+uC(this),Ti=this.j1i_1,Ne;Ti==null?Ne=null:Ne=`
reportErrors('`+Ti+`');
`;var ft=Ne,qi=Ue+(ft??""),Oi=this.k1i_1,vt;Oi==null?vt=null:vt=`
`+Oi+`
`;for(var jt=vt,La=U("client.ts",qi+(jt??"")),Pa=U("form.ts",Ve("form.ts")),Ma=U("form-state.svelte.ts",Ve("form-state.svelte.ts")),Ra=this.d1i_1.i1()&&this.g1i_1.i1()?O:Yi(O,`export {};
`),ji=si(this.u1i_1),Ut=U("types.ts",Ra+V(ji,"",l,l,l,l,PC)+IC(this)+tw(this,"Permission",this.g1i_1)),ht=or(i,"paths"),Ui=ht??Nr(),Ni=_o(o.p2(),"LucideIcon"),Nt=this.r1i_1.q2(),Dt=q.g1(Yr(Nt,10)),dt=Nt.x();dt.y();){var Lt=dt.z(),Pt=Lt.k1j_1;Dt.n(Pt)}var Di=U("services.ts",SC(this,Ui,uv(uv(Ni,Dt),A))),_e=Ve("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.o1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Yi("current-user.svelte.ts",".ts")+`.js';
`:""),Mt;this.h1i_1.i1()?Mt="":Mt="export * from './"+Yi("guards.ts",".ts")+`.js';
`;var Ba=[La,Pa,Ma,Ut,Di,U("index.ts",_e+Mt+(this.i1i_1!=null?"export * from './"+Yi("preferences.svelte.ts",".ts")+`.js';
`:""))],Li;this.c1i_1.i1()?Li=[]:Li=[U("constants.ts",$5(this.c1i_1))];var Ws=Li,Fa;this.o1i_1?Fa=[U("cookies.ts",U5(this.l1i_1))]:Fa=[];var Ys=Fa,Pi=this.e1i_1,Mi;Pi==null?Mi=null:Mi=[U("current-user.svelte.ts",dC(this,Pi))];var Zs=Mi,Ri;Zs==null?Ri=[]:Ri=Zs;var Vs=Ri,Bi;this.h1i_1.i1()?Bi=[]:Bi=[U("guards.ts",cC(this))];var Xs=Bi,Qs=this.i1i_1,Fi;Qs==null?Fi=null:Fi=[U("preferences.svelte.ts",hC(this,Qs))];var $a=Fi,$i;return $a==null?$i=[]:$i=$a,nC(this,tk([Ba,Ws,Ys,Vs,Xs,$i,[U("openapi.json",Dy().k15(jf.t17(),i)+`
`)]]))}s1k(r,e,t){return e=e===l?Nr():e,t===l?this.r1k(r,e):t.r1k.call(this,r,e)}}class fo extends ie{constructor(r,e,t){super(r,e),this.o1k_1=t}p1g(){return Ve(this.o1k_1)}}class su{constructor(r,e,t){this.t1k_1=r,this.u1k_1=e,this.v1k_1=t}toString(){return"GeneratedOperation(name="+this.t1k_1+", method="+this.u1k_1+", path="+this.v1k_1+")"}hashCode(){var r=ae(this.t1k_1);return r=Ch(r,31)+ae(this.u1k_1)|0,r=Ch(r,31)+ae(this.v1k_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof su)||this.t1k_1!==r.t1k_1||this.u1k_1!==r.u1k_1||this.v1k_1!==r.v1k_1)}}class Sy{constructor(r){this.w1k_1=r}zf(r,e){return this.w1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1k_1}equals(r){var e;if(r!=null&&E(r,dn)){var t;r!=null&&E(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Er(this.g3())}}class Ey{n1j(r){return"Must be at least "+Mh(this,r)+"."}o1j(r){return"Must be at most "+Mh(this,r)+"."}q1j(r,e){return"Must be "+(e?"greater than":"at least")+" "+It(r)+"."}r1j(r,e){return"Must be "+(e?"less than":"at most")+" "+It(r)+"."}p1j(r){return"Must match "+r+"."}}function T5(){return Qn(),zy}var zy;function q5(){return Qn(),Iy}var Iy;function ne(n){return Qn(),"'"+Wn(Wn(Wn(Wn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function dc(n){Qn();var r=q5(),e=Y_(n,ya([46,95,45])),t=r.ye(e,N5);return T5().ue(t)?t:ne(n)}function O5(n){Qn();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.n1h_1," | ",l,l,l,l,D5);break;default:r="number";break}return r}function j5(n){Qn();var r=O5(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+ne(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+V(n.n1h_1,", ",l,l,l,l,L5)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?ne(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+ne(n.q1h_1),d="sameSite: "+ne(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+ne(m);var x=st([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+dc(n.l1h_1)+": typedCookie"+k+"("+ne(n.l1h_1)+", { "+V(x,", ")+" })"}function Cy(n){Qn();for(var r=q.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return si(la(r))}function U5(n){Qn();for(var r=q.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=P5,a=new hy(i),s=wi(r,a),o=Cy(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=st([f,d]),m=q.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=V(k,", ",l,l,l,l,M5),z=nn.f();return z.ca("import { "+V(_,", ")+` } from './client.js';
`),s.i1()||z.ca(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,R5())+`
};
`),o.i1()||z.ca(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,B5)+"] as const, ["+S+`]);
`),z.toString()}function N5(n){return Qn(),n.xf().d1(1).toUpperCase()}function D5(n){return Qn(),ne(n)}function L5(n){return Qn(),ne(n)}function P5(n,r){Qn();var e=n.l1h_1,t=r.l1h_1;return qt(e,t)}function M5(n){Qn();var r=ne(n.l1h_1),e=ne(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+ne(i)+" }"}function R5(){return Re(n=>j5(n),1,0,7,"cookieEntry")}function B5(n){return Qn(),ne(n)}var Ah;function Qn(){Ah||(Ah=!0,zy=kt.te("[A-Za-z_$][A-Za-z0-9_$]*"),Iy=kt.te("[._-]+([A-Za-z0-9])"))}function F5(){return Da(),Ay}var Ay;function Gf(n,r){Da();var e;if(n instanceof fr)e=n.v17()?Ty(n.w17()):n.w17();else if(n instanceof cn)e=V(n,", ","[","]",l,l,J5(r));else if(n instanceof er){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,H5(r))}e=t}else zs();return e}function Ty(n){return Da(),"'"+Wn(Wn(Wn(Wn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function $5(n){Da();var r=G5,e=new dy(r),t=wi(n,e);return V(t,`
`,l,l,l,l,K5)}function J5(n){return r=>Gf(r,n)}function H5(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(F5().ue(e)?e:Ty(e))+": "+Gf(t,n+"    ")}}function G5(n,r){Da();var e=n.x1h_1,t=r.x1h_1;return qt(e,t)}function K5(n){return Da(),"export const "+n.x1h_1+" = "+Gf(new er(n.y1h_1),"")+` as const;
`}var Th;function Da(){Th||(Th=!0,Ay=kt.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function qy(){return zr(),Oy}var Oy;function Kf(){return zr(),jy}var jy;function Uy(){return zr(),Ny}var Ny;function Dy(){return zr(),Ly}var Ly;function qh(){return zr(),Py}var Py;function My(){return zr(),Ry}var Ry;function vo(){return zr(),By}var By;function W5(){return zr(),Fy}var Fy;function Y5(){return zr(),$y}var $y;function Z5(){return zr(),Jy}var Jy;function Wf(){return zr(),Hy}var Hy;function V5(){return zr(),Gy}var Gy;function X5(){return zr(),Ky}var Ky;function Q5(){return zr(),Wy}var Wy;function rC(){return zr(),Yy}var Yy;function nC(n,r){var e=Al(r.slice());return et(e,U(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+wp(r,"",l,l,l,l,MC)))}function eC(n,r){for(var e=or(r,"paths"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();pC(n,o)&&i.s2(s.k2(),s.l2())}var u=uu(i);return new er(et(r,U("paths",new er(u))))}function tC(n,r){if(n.b1i_1.i1())return r;for(var e=or(r,"components"),t=e??new er(Nr()),i=or(t,"schemas"),a=i??Nr(),s=Qc(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.x1i_1,f=s.o2(c);if(f==null){var v=xe().m15(u.y1i_1);s.s2(c,v)}}for(var h=or(r,"paths"),d=h??Nr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=Dr(k),z=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),O=A.k2(),D=A.k2(),J=A.l2(),T,M;qy().l1(D)?M=J instanceof er:M=!1,M?T=oC(n,J):T=J;var F=T;z.s2(O,F)}var B=new er(z);_.s2(x,B)}var L=_;return new er(et(et(r,U("paths",new er(L))),U("components",new er(et(t,U("schemas",new er(s)))))))}function iC(n,r){var e=or(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=or(i,"schemas"),s=a??Nr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof er?v=aC(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new er(et(Dr(w),U("type",ce("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),z=s.r2().x();z.y();){var I=z.z(),A=I.k2();(E(k,yn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var O=S.r2(),D=fn(Yr(O,10),16),J=vr.ha(D),T=O.x();T.y();){var M=T.z(),F=M.k2(),B=M.l2(),L=B instanceof er?B:null,H=U(L==null?null:Oh(n,L),F);J.s2(H.ch_1,H.dh_1)}for(var X=J,$=vr.ha(k.c1()),tr=k.r2().x();tr.y();){var Y=tr.z(),G=Y.k2(),ar=Y.k2(),ur=Y.l2(),Q=X.o2(Oh(n,ur)),Tr=Q??ar;$.s2(G,Tr)}for(var wr=$,dr=vr.q4(),Ir=s.r2().x();Ir.y();){var br=Ir.z(),kr=br.k2();(wr.o2(kr)==null||wr.o2(kr)===kr)&&dr.s2(br.k2(),br.l2())}for(var Pr=vr.ha(dr.c1()),_r=dr.r2().x();_r.y();){var Gr=_r.z(),an=Gr.k2(),Kr=Gr.k2(),gr=Gr.l2(),Wr=k.o2(Kr),Qr=Wr??gr;Pr.s2(an,Qr)}var un=Pr,Fr=new er(et(i,U("schemas",new er(un))));return Dr(mc(wr,n,new er(et(r,U("components",Fr)))))}function aC(n,r){var e;if(P(it(Ai(n,r)),Qt(["object","null"]))){var t=or(r,"properties");e=!(t??Nr()).i1()}else e=!1;return e}function Oh(n,r){return new er(Xx(r,"title"))}function sC(n,r){var e=new yt,t=new bm,i=new yt;sl(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new yt;sl(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function oC(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=Qc(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new yt;sl(o,"description","");var u=new yt,c="application/json",f=new yt,v=new yt;sl(v,"$ref","#/components/schemas/"+s.x1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.z1i_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var z=m;i.s2(k,z)}}}return new er(et(r,U("responses",new er(i))))}function lC(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=Dr(xe().m15(i)),s=An.e1();return`
`+Yf(n,"PublicConfig",a,s,r)}function uC(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Wn(Wn(t,"\\","\\\\"),"'","\\'")+`';
`}function cC(n){var r=n.h1i_1,e;r:{var t;if(E(r,W)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.b1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=RC,c=new my(u),f=wi(o,c),v=V(f,"",l,l,l,l,BC),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+Yi("current-user.svelte.ts",".ts")+`.js';
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
`}function fC(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return Zy(n,"CurrentUser",i.c1j_1,i.d1j_1,r)}function vC(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return Zy(n,"UserPreferences",i.f1j_1,i.g1j_1,r)}function Zy(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Ln(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Ln(c)+`;
`;var f=Dr(xe().m15(t)),v=An.e1();return`
`+Yf(n,r,f,v,i)}function hC(n,r){for(var e=or(Dr(xe().m15(r.g1j_1)),"properties"),t=(e??Nr()).p2(),i=r.j1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=V(f,", ",l,l,l,l,FC),h=Dy().k15(jf.t17(),xe().m15(r.i1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=Te(r.h1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function dC(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.e1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function pC(n,r){var e,t=n.z1h_1,i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||ke(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.q1i_1.i1())u=!0;else{var c=n.q1i_1,f;r:{var v;if(E(c,W)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||ke(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function _C(n,r){if(r.i1()&&n.p1i_1.i1()&&n.r1i_1.i1()&&!n.s1i_1&&!n.t1i_1)return`export {};
`;for(var e=An.e1(),t=q.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=U(s,Yf(n,Ln(s),Dr(o),e,r));t.n(u)}for(var c=t,f=n.r1i_1.q2(),v=q.m(),h=f.x();h.y();){var d=h.z();d.m1j_1&&v.n(d)}for(var _=q.g1(Yr(v,10)),m=v.x();m.y();){var w=m.z(),x=U(w.k1j_1,rw(n,w.k1j_1,w.l1j_1));_.n(x)}var k=_,S=be(c,k),z=$C,I=new yy(z),A=wi(S,I),O=V(A,`
`,l,l,l,l,JC),D;e.l1("LucideIcon")?D=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:D="";var J=D,T=r.q2(),M;r:{var F;if(E(T,W)?F=T.i1():F=!1,F){M=!1;break r}for(var B=T.x();B.y();){var L=B.z();if(Vf(n,Dr(L))){M=!0;break r}}M=!1}var H=M,X=`declare const brand: unique symbol;
`,$;H||n.t1i_1?$=X:$=null;var tr=$,Y=Ve("dates.ts"),G;n.s1i_1?G=Y:G=null;var ar=G,ur=Ve("quantities.ts"),Q;n.t1i_1?Q=ur:Q=null;var Tr=Q,wr;C(O)===0?wr=null:wr=O;var dr=wr,Ir=V(st([tr,ar,Tr,dr]),`
`),br;return C(Ir)===0?br=`export {};
`:br=Ir,J+br}function Yf(n,r,e,t,i){var a=dl(n,sw(n,e),""),s=ou(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:as(u),f;if(c==null)f=null;else{var v;r:{var h;if(E(c,W)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof ue){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+rw(n,r,s);if(Vf(n,e)){var m=Rn(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(Xf(n,e))return a+("export interface "+r+" "+nw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+gc(n,e,i,"    ",Tt())+`),
`)+mC(n,e)+wC(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+Rn(n,e,t)+`;
`),x=gC(n,r,e,i);return w+(x??"")}function gC(n,r,e,t){var i=or(e,"discriminator"),a=i==null?null:Hr(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=hn(e,"oneOf"),c=u??hn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=or(e,"discriminator"),d=h==null?null:or(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:ma(_),w=m??mr(),x;if(w.i1()){for(var k=q.g1(Yr(v,10)),S=v.x();S.y();){var z=S.z(),I=hl(n,Dr(z)),A;if(I==null)A=null;else{var O=t.o2(I);A=O==null?null:Dr(O)}var D=A,J=D??Dr(z),T=or(J,"properties"),M=T==null?null:or(T,o),F=M==null?null:hn(M,"enum"),B=F==null?null:Oc(F),L=B instanceof fr?B:null,H=L==null?null:Pn(L),X;if(H==null)return null;X=H;var $=X;k.n($)}x=k}else x=w;var tr=x;if(tr.i1())return null;var Y=Se(n,ce(o)),G=V(tr,l,l,l,l,l,HC(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Y+"]]: (value: Extract<"+r+", { "+Be(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Y+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function mC(n,r){for(var e=cu(r,"required"),t=or(r,"properties"),i=t??Nr(),a=q.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=yC(n,Dr(c),e.l1(u)),v;if(f.i1())v=null;else{var h=Be(u);v="        "+h+": { "+V(f,l,l,l,l,l,GC)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+V(_,`
`)+`
    },
`}function yC(n,r,e){var t=Ai(n,r).l1("integer"),i=U("required","true"),a;Vy(n,r,e)?a=i:a=null;var s=a,o=ge(n,r,"minLength"),u;o==null?u=null:u=U("minlength",It(o));var c=u,f=ge(n,r,"maxLength"),v;f==null?v=null:v=U("maxlength",It(f));var h=v,d=Nh(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=U("min",d);var m=_,w=Nh(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=U("max",w);var k=x,S=Hr(r,"pattern"),z;return S==null?z=null:z=U("pattern",Se(n,ce(S))),st([s,c,h,m,k,z])}function Vy(n,r,e){if(Qf(n,r)||r.c18("enum")!=null)return!1;var t;if(Ai(n,r).l1("string")){var i=ge(n,r,"minLength");t=(i??0)>=1}else t=e&&Xy(n,r);return t}function Xy(n,r){var e=Ai(n,r),t;r:{var i;if(E(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function wC(n,r,e,t){if(!Zf(n,e,t,Tt()))return"";for(var i=cu(e,"required"),a=or(e,"properties"),s=a??Nr(),o=q.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=Dr(v),d="value"+(Kf().ue(f)?"."+f:"["+Se(n,ce(f))+"]"),_=be(bC(n,f,d,h,i.l1(f)),pc(n,h,d,_c(n,f),"        ",0,t));Ea(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+V(m,"",l,l,l,l,KC)+`        return errors;
    },
`}function Zf(n,r,e,t){var i;if(Xf(n,r)){var a=or(r,"properties"),s=(a??Nr()).q2(),o;r:{var u;if(E(s,W)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=Dr(f),h,d=rC(),_;n:{var m;if(E(d,W)?m=d.i1():m=!1,m){_=!1;break n}for(var w=d.x();w.y();){var x=w.z();if(ge(n,v,x)!=null||x==="pattern"&&Hr(v,x)!=null){_=!0;break n}}_=!1}if(_)h=!0;else{var k=hl(n,v),S;if(k==null)S=null;else{var z;if(t.l1(k))z=!1;else{var I=e.o2(k),A=I instanceof er?I:null,O;A==null?O=null:O=Zf(n,A,e,_o(t,k)),z=O===!0}S=z}h=S===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function hl(n,r){var e=Hr(r,"$ref");if(e!=null)return Os(e,47);var t=Qy(n,r);if(t!=null)return hl(n,t);if(Ai(n,r).l1("array")){var i=or(r,"items"),a;return i==null?a=null:a=hl(n,i),a}return null}function Qy(n,r){var e=hn(r,"oneOf"),t=e??hn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=q.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof er?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=q.m(),h=c.x();h.y();){var d=h.z();P(Ai(n,d),ze("null"))||v.n(d)}f=v}var _=f;return _==null?null:Oc(_)}function bC(n,r,e,t,i){var a=Se(n,ce(r)),s=ge(n,t,"minLength"),o=s==null?null:yo(s),u=ge(n,t,"maxLength"),c=u==null?null:yo(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=ge(n,t,"minimum"),x;w==null?x=null:x=U(w,!1);var k=x,S;if(k==null){var z=ge(n,t,"exclusiveMinimum"),I;z==null?I=null:I=U(z,!0),S=I}else S=k;var A=S,O=ge(n,t,"maximum"),D;O==null?D=null:D=U(O,!1);var J=D,T;if(J==null){var M=ge(n,t,"exclusiveMaximum"),F;M==null?F=null:F=U(M,!0),T=F}else T=J;var B=T,L=q.m();if(Vy(n,t,i)&&Xy(n,t)){var H="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Gi(a,n,"Required.");L.n(H)}if(o!=null||c!=null||m!=null){var X="        if (typeof "+e+" === 'string') {";if(L.n(X),o!=null||c!=null){var $="            const length = [..."+e+"].length;";L.n($)}if(o!=null){var tr="            if (length < "+o+") "+Gi(a,n,Wi.n1j(o));L.n(tr)}if(c!=null){var Y="            if (length > "+c+") "+Gi(a,n,Wi.o1j(c));L.n(Y)}if(m!=null){var G=n.u1i_1,ar=I7();G.n(ar);var ur="            if (!matches("+Se(n,ce(m))+", "+e+")) "+Gi(a,n,Wi.p1j(m));L.n(ur)}var Q="        }";L.n(Q)}if(A!=null||B!=null){var Tr="        if (typeof "+e+" === 'number') {";if(L.n(Tr),A!=null){var wr=A.hh(),dr=A.ih(),Ir=dr?"<=":"<",br="            if ("+e+" "+Ir+" "+It(wr)+") "+Gi(a,n,Wi.q1j(wr,dr));L.n(br)}if(B!=null){var kr=B.hh(),Pr=B.ih(),_r=Pr?">=":">",Gr="            if ("+e+" "+_r+" "+It(kr)+") "+Gi(a,n,Wi.r1j(kr,Pr));L.n(Gr)}var an="        }";L.n(an)}if(!L.i1()){var Kr=n.u1i_1,gr=hw();Kr.n(gr)}return L}function pc(n,r,e,t,i,a,s){var o=Hr(r,"$ref");if(o!=null){var u=Os(o,47),c=s.o2(u),f=c instanceof er?c:null,v;if(f==null)return mr();v=f;var h=v;if(!Zf(n,h,s,Tt()))return mr();var d=n.u1i_1,_=ta([hw(),z7()]);return Ea(d,_),ze(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Ln(u)+".validate("+e+"));")}var m=Qy(n,r);if(m!=null)return pc(n,m,e,t,i,a,s);if(!Ai(n,r).l1("array"))return mr();var w=or(r,"items"),x;if(w==null)return mr();x=w;var k=x,S=a===0?"":""+(a+1|0),z="item"+S,I="index"+S,A=pc(n,k,z,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?mr():be(be(ta([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+z+", "+I+") => {"]),A),ta([i+"    });",i+"}"]))}function _c(n,r){return Wn(Wn(Wn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function ge(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:Pn(o);return u==null?null:Yc(u)}function Ai(n,r){var e=r.c18("type"),t;if(e instanceof cn){for(var i=q.g1(Yr(e,10)),a=e.x();a.y();){var s=a.z(),o=Cn(s).w17();i.n(o)}t=i}else e instanceof fr?t=ze(e.w17()):t=mr();return t}function rw(n,r,e){var t=V(e,"",l,l,l,l,WC(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function kC(n,r,e){for(var t=vr.q4(),i=uu(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=ou(n,Dr(o));if(u!=null){var c=it(u),f=t.o2(c);if(f==null){var v=new hc(Ln(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();Vi(n,h,d,x,Ln(w),Ln(w),!0)}var k=or(r,"paths");k==null||Vi(n,h,d,k,"","",!1);for(var S=h.p2(),z=q.m(),I=S.x();I.y();){var A=I.z(),O;(E(t,yn)?t:g()).m2(A)?O=!1:O=!P(A,n.p1i_1),O&&z.n(A)}for(var D=YC(d),J=new wy(D),T=wi(z,J),M=vr.ha(fn(Yr(T,10),16)),F=T.x();F.y();){var B=F.z(),L=we(h,B),H=ZC,X=cb(L,o2([H,VC]));M.s2(B,X)}for(var $=M,tr=$.q2(),Y=new ky(tr),G=gk(Y),ar=e.p2(),ur=q.g1(Yr(ar,10)),Q=ar.x();Q.y();){var Tr=Q.z(),wr=Ln(Tr);ur.n(wr)}for(var dr=jc(hi(hi(ur,"LucideIcon"),"PublicConfig")),Ir=vr.ia(t),br=T.x();br.y();){var kr=br.z(),Pr=we($,kr),_r=Ln(Pr.t1j_1),Gr;if(we(G,_r)>1||dr.l1(_r)){var an=Pr.s1j_1,Kr;C(an)===0?Kr=_r:Kr=an+_r,Gr=Kr}else Gr=_r;var gr=Gr,Wr;if(!dr.l1(gr))Wr=gr;else{var Qr=rf(2,XC),un=Ss(Qr,QC(gr)),Fr;r:{for(var rn=un.x();rn.y();){var pn=rn.z();if(!dr.l1(pn)){Fr=pn;break r}}throw qr.r("Sequence contains no element matching the predicate.")}Wr=Fr}var vn=Wr;dr.n(vn);var _n=new hc(vn,we(d,kr),!0);Ir.s2(kr,_n)}return Ir}function ou(n,r){var e=hn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=q.m(),s=i.x();s.y();){var o=s.z();o instanceof ue||a.n(o)}var u=a,c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=q.g1(Yr(u,10)),m=u.x();m.y();){var w=m.z(),x=Cn(w).w17();_.n(x)}var k=la(_),S;return k.c1()>1?S=k:S=null,S}function Vf(n,r){var e,t,i=Y5(),a=r.c18("type"),s=a instanceof fr?a:null;if(fb(i,s==null?null:Pn(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(E(o,W)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function Xf(n,r){return or(r,"properties")!=null&&r.c18("allOf")==null}function gc(n,r,e,t,i){var a=or(r,"properties"),s=a??Nr();if(s.i1())return"{}";for(var o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+Be(f)+": "+ni(n,Dr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(hi(be(ze("{"),d),t+"}"),`
`)}function ni(n,r,e,t,i){if(Qf(n,r))return"null";var a=Hr(r,"$ref");if(a!=null){var s=Os(a,47),o=e.o2(s),u=o instanceof er?o:null,c;if(u==null)return"null";c=u;var f=c;return Xf(n,f)?Ln(s)+".empty()":Vf(n,f)?Ln(s)+"("+ni(n,f,e,t,_o(i,s))+")":i.l1(s)?"null":ni(n,f,e,t,_o(i,s))}var v=r.c18("enum");if(v!=null){var h=du(as(v)),d;h==null?d=null:d=Se(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return Se(n,m);var w=hn(r,"oneOf"),x=w??hn(r,"anyOf");if(x!=null){var k=du(x),S;k==null?S=null:S=ni(n,Dr(k),e,t,i);var z=S;return z??"null"}var I=hn(r,"allOf");if(I!=null)return I.c1()===1?ni(n,Dr(Ep(I)),e,t,i):V(I,", ","{ "," }",l,l,r7(n,e,t,i));var A=r.c18("type"),O;if(A instanceof cn){var D=du(A),J=D==null?null:Cn(D);O=J==null?null:J.w17()}else A instanceof fr?O=Pn(A):O=null;var T=O,M;switch(T){case"string":var F=ev(r),B;F==null?B=null:B="'' as "+F;var L=B,H;if(L==null){var X=uw(r),$;X==null?$=null:$=we(W5(),X)+" as "+X,H=$}else H=L;var tr=H;M=tr??"''";break;case"integer":case"number":M="0";break;case"boolean":M="false";break;case"array":var Y=hn(r,"prefixItems"),G;Y==null?G=null:G=V(Y,", ","[","]",l,l,n7(n,e,t,i));var ar=G;M=ar??"[]";break;case"object":M=gc(n,r,e,t,i);break;case null:M=r.c18("properties")!=null?gc(n,r,e,t,i):"null";break;default:M="null";break}return M}function Qf(n,r){var e=r.c18("type"),t=hn(r,"oneOf"),i=t??mr(),a=hn(r,"anyOf"),s=a??mr(),o=be(i,s),u,c,f,v,h;if(e instanceof cn){var d;r:{var _;if(E(e,W)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(Cn(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:Pn(S))==="true"}if(f)c=!0;else{var z=hn(r,"enum"),I=z??mr(),A;r:{var O;if(E(I,W)?O=I.i1():O=!1,O){A=!1;break r}for(var D=I.x();D.y();){var J=D.z();if(J instanceof ue){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var T;r:{var M;if(E(o,W)?M=o.i1():M=!1,M){T=!1;break r}for(var F=o.x();F.y();){var B=F.z(),L=B instanceof er?B:null,H;if(L==null?H=null:H=Qf(n,L),H===!0){T=!0;break r}}T=!1}u=T}return u}function nw(n,r,e,t){for(var i=cu(r,"required"),a=or(r,"properties"),s=a??Nr(),o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=dl(n,sw(n,Dr(v)),t+"    ")+(t+"    "+Be(f)+h+": "+Rn(n,Dr(v),e,t+"    ")+";");o.n(d)}var _=o;return V(hi(be(ze("{"),_),t+"}"),`
`)}function Rn(n,r,e,t){t=t===l?"":t;var i=Hr(r,"$ref");if(i!=null){var a=Ln(Os(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=as(s),u=q.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:Pn(v);h==null||u.n(h)}var d=it(u),_;if(n.p1i_1.i1()?_=!1:_=P(d,n.p1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=ou(n,r);if(w!=null){var x=n.r1i_1.o2(it(w));if(x!=null){var k=x.k1j_1;e.n(k);var S,z=as(s),I;r:{var A;if(E(z,W)?A=z.i1():A=!1,A){I=!1;break r}for(var O=z.x();O.y();){var D=O.z();if(D instanceof ue){I=!0;break r}}I=!1}return I?S=x.k1j_1+" | null":S=x.k1j_1,S}}var J=as(s),T=V(J," | ",l,l,l,l,e7(n)),M;return C(T)===0?M="never":M=T,M}var F=r.c18("const");if(F!=null)return Se(n,F);var B=hn(r,"oneOf");if(B!=null)return Uh(n,B,e,t);var L=hn(r,"anyOf");if(L!=null)return Uh(n,L,e,t);var H=hn(r,"allOf");if(H!=null)return V(H," & ",l,l,l,l,t7(n,e,t));var X=r.c18("type"),$;if(X==null)$=r.c18("properties")!=null?ew(n,r,e,t):"unknown";else if(X instanceof cn){for(var tr=q.g1(Yr(X,10)),Y=X.x();Y.y();){var G=Y.z(),ar=jh(n,Cn(G).w17(),r,e,t);tr.n(ar)}$=V(la(tr)," | ")}else $=jh(n,Cn(X).w17(),r,e,t);return $}function jh(n,r,e,t,i){var a;switch(r){case"string":var s=ev(e),o=s??uw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=xC(n,e,t,i);break;case"object":a=ew(n,e,t,i);break;default:a="unknown";break}return a}function xC(n,r,e,t){var i=hn(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,i7(n,e,t));var a=r.c18("items"),s=a==null?null:Dr(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=Rn(n,u,e,t);return _s(c," | ")||_s(c," & ")?"("+c+")[]":c+"[]"}function ew(n,r,e,t){var i=or(r,"properties");if(!(i??Nr()).i1())return nw(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof er?a:null;return s!=null?"Record<string, "+Rn(n,s,e,t)+">":"Record<string, unknown>"}function Uh(n,r,e,t){for(var i=q.g1(Yr(r,10)),a=r.x();a.y();){var s=a.z(),o=Rn(n,Dr(s),e,t);i.n(o)}return V(la(i)," | ")}function Se(n,r){var e;if(r instanceof ue)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=Te(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function SC(n,r,e){for(var t=An.e1(),i=vr.q4(),a=q.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=Dr(f),h=qy().x();h.y();){var d=h.z(),_=or(v,d);if(_!=null){var m=aw(n,c),w=i.o2(m),x;if(w==null){var k=q.m();i.s2(m,k),x=k}else x=w;var S=x,z=qC(n,c,d,v,_);S.n(z)}}var I=jc(Wf());I.h1(i.p2());for(var A=I,O=uu(i),D=q.g1(O.c1()),J=O.r2().x();J.y();){var T=J.z(),M=T.k2(),F=T.l2(),B=An.e1(),L=nn.f(),H=V(F,`
`,l,l,l,l,a7(t,n,B,M,a,s,A,L)),X=L.toString()+`
export const `+M+` = {
`+H+`
};
`;D.n(X)}for(var $=D,tr=si(t),Y=q.m(),G=tr.x();G.y();){for(var ar=G.z(),ur=q.g1(Yr(e,10)),Q=e.x();Q.y();){var Tr=Q.z(),wr=Ln(Tr);ur.n(wr)}ur.l1(ar)&&Y.n(ar)}var dr=Y,Ir,br=Yx(i.q2()),kr;r:{var Pr;if(E(br,W)?Pr=br.i1():Pr=!1,Pr){kr=!1;break r}for(var _r=br.x();_r.y();){var Gr=_r.z();if(Gr.b1k_1){kr=!0;break r}}kr=!1}kr?Ir="ApiError, request, stream":Ir="ApiError, request";var an=Ir,Kr=n.d1i_1.i1()?an:an+", codeMessages, errorCode",gr=nn.f();gr.ca("import { "+Kr+`, type RequestOptions } from './client.js';
`);var Wr=n.a1i_1!=null?hi(dr,"PublicConfig"):dr,Qr=n.d1i_1.i1()?Wr:si(hi(Wr,"ErrorCode"));Qr.i1()||gr.ca("import type { "+V(Qr)+` } from './types.js';
`),gr.ca(`
`);for(var un=$.x();un.y();){var Fr=un.z();gr.ca(Fr).ca(`
`)}if(gr.ca(CC(n,a)),n.d1i_1.i1()||gr.ca(Z5()),!s.i1()){gr.ca(`export const uploadRules = {
`);for(var rn=s.r2(),pn=s7,vn=new by(pn),_n=wi(rn,vn).x();_n.y();){var re=_n.z(),$n=re.k2(),Jn=re.l2();gr.ca("    '"+$n+"': "+Jn+`,
`)}gr.ca(`} as const;

`)}return n.a1i_1!=null&&gr.ca(Ve("public-config.ts")),gr.ca("export const api = { "+V(si(i.p2()))+` };
`),gr.ca(Ve("api-with.ts")),gr.toString()}function EC(n,r){var e=or(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=it(cu(r,"required")),c=o.r2(),f=V(c,"; ",l,l,l,l,o7(u));return"{ "+f+" }"}function zC(n,r){var e=r.c18("maxBytes"),t=e==null?null:Cn(e),i=t==null?null:xI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=hn(r,"types"),u;if(o==null)u=null;else{for(var c=q.g1(Yr(o,10)),f=o.x();f.y();){var v=f.z(),h=Te(Cn(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+V(w)+"]";var k=x,S=r.c18("maxFiles"),z=S==null?null:Cn(S),I=z==null?null:SI(z),A;I==null?A=null:A="maxFiles: "+I;var O=st([s,k,A]);return"{ "+V(O)+" }"}function IC(n){return tw(n,"ErrorCode",n.d1i_1)}function tw(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,l7),i=V(e,"",l,l,l,l,u7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function CC(n,r){var e=V(r,"",l,l,l,l,c7),t=V(r,"",l,l,l,l,f7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function AC(n,r,e){var t=nv(r),i=rf(1,v7),a=Ss(i,h7(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw qr.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function TC(n,r,e,t){var i=e2([r,r+V(e,"",l,l,l,l,d7)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=rf(2,p7),v=Ss(f,_7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw qr.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function qC(n,r,e,t,i){for(var a=An.e1(),s=hn(t,"parameters"),o=s??mr(),u=hn(i,"parameters"),c=u??mr(),f=be(o,c),v=q.g1(Yr(f,10)),h=f.x();h.y();){var d=h.z(),_=Dr(d);v.n(_)}for(var m=v,w=Uy().xe(r),x=Cp(Ss(w,g7)),k=q.m(),S=x.x();S.y();){var z=S.z(),I;r:{for(var A=m.x();A.y();){var O=A.z();if(Hr(O,"name")===z&&Hr(O,"in")==="path"){I=O;break r}}I=null}var D=I,J=D==null?null:or(D,"schema"),T;J==null?T=null:T=Rn(n,J,a);var M=T,F;if(M==null)F=null;else{var B;M==="unknown"||M==="string"?B=null:B=M,F=B}var L=F,H=L??"string | number",X=ow(z)+": "+H;k.n(X)}var $=or(i,"requestBody"),tr=$==null?null:or($,"content"),Y=tr==null?null:tr.r2(),G;if(Y==null)G=null;else{var ar;r:{for(var ur=Y.x();ur.y();){var Q=ur.z();if(ke(Q.k2(),"multipart/")){ar=Q;break r}}ar=null}G=ar}var Tr=G,wr=Tr==null?null:Tr.l2(),dr;wr==null?dr=null:dr=wr instanceof er?wr:null;var Ir=dr,br=Ir==null?null:or(Ir,"schema"),kr;br==null?kr=null:kr=EC(n,br);var Pr=kr,_r;if(Tr!=null)_r=Pr??"FormData";else{var Gr;tr==null?Gr=null:Gr=iw(n,tr);var an=Gr,Kr;an==null?Kr=null:Kr=Rn(n,an,a),_r=Kr}var gr=_r;if($!=null){var Wr="body: "+(gr??"unknown");k.n(Wr)}for(var Qr=q.m(),un=m.x();un.y();){var Fr=un.z();Hr(Fr,"in")==="query"&&Qr.n(Fr)}var rn=Qr;if(!rn.i1()){var pn=V(rn,"; ",l,l,l,l,m7(n,a)),vn;r:{var _n;if(E(rn,W)?_n=rn.i1():_n=!1,_n){vn=!1;break r}for(var re=rn.x();re.y();){var $n=re.z(),Jn=$n.c18("required"),de=Jn==null?null:Cn(Jn);if((de==null?null:Pn(de))==="true"){vn=!0;break r}}vn=!1}var je=vn,pe="query"+(je?"":"?")+": { "+pn+" }";k.n(pe)}for(var Fe=q.m(),$e=m.x();$e.y();){var Ce=$e.z(),Hn;if(Hr(Ce,"in")==="header"){var Tn=X5(),xn=Hr(Ce,"name"),zn=(xn??"").toLowerCase();Hn=!Tn.l1(zn)}else Hn=!1;Hn&&Fe.n(Ce)}var Ue=Fe;if(!Ue.i1()){var Ti=V(Ue,"; ",l,l,l,l,y7(n,a)),Ne;r:{var ft;if(E(Ue,W)?ft=Ue.i1():ft=!1,ft){Ne=!1;break r}for(var qi=Ue.x();qi.y();){var Oi=qi.z(),vt=Oi.c18("required"),jt=vt==null?null:Cn(vt);if((jt==null?null:Pn(jt))==="true"){Ne=!0;break r}}Ne=!1}var La=Ne,Pa="headers"+(La?"":"?")+": { "+Ti+" }";k.n(Pa)}var Ma="options?: RequestOptions";k.n(Ma);var Ra=x.i1()?Te(r):OC(n,r),ji=or(i,"x-ktor-svelte-upload"),Ut;ji==null?Ut=null:Ut=zC(n,ji);var ht=Ut,Ui=i.c18("x-ktor-svelte-timeout"),Ni=Ui==null?null:Cn(Ui),Nt=Ni==null?null:Pn(Ni),Dt=Nt==null?null:Yc(Nt),dt=Dt==null?null:On(Dt),Lt;if(dt==null)Lt=null;else{var Pt;nr(dt,new y(0,0))>0?Pt=dt:Pt=null,Lt=Pt}var Di=Lt,_e=q.m();Di!=null&&_e.n("timeout: "+Di.toString()),_e.n("...options"),rn.i1()||_e.n("query"),Ue.i1()||_e.n("typedHeaders: headers"),$!=null&&_e.n("body"),ht!=null&&_e.n("upload: "+ht),Pr!=null&&_e.n("multipart: true");var Mt=_e.j6(),Ba=UC(n,i,a),Li=NC(n,i),Ws=jC(n,i,a),Fa=e.toUpperCase(),Ys=Hr(i,"operationId"),Pi;Ys==null?Pi=null:Pi=lu(Ys);for(var Mi=Pi,Zs=Mi??DC(n,r,e),Ri=st([Hr(i,"summary"),Hr(i,"description")]),Vs=q.g1(Yr(Ri,10)),Bi=Ri.x();Bi.y();){var Xs=Bi.z(),Qs=b(r0(Cs(Xs)?Xs:g()));Vs.n(Qs)}for(var Fi=q.m(),$a=Vs.x();$a.y();){var $i=$a.z();C($i)>0&&Fi.n($i)}var _w=la(Fi),gw="@deprecated",fu;lw(i)?fu=gw:fu=null;var mw=fu,yw=n.w1i_1,ww=e.toUpperCase(),iv=yw.o2(ww+" "+r),vu;iv==null?vu=null:vu="@see "+iv;var bw=be(_w,st([mw,vu])),kw=w7(Mt,Li,k,Ba,e,Ra),av=V(la(Ws.q2())," | "),hu;C(av)===0?hu=null:hu=av;var xw=hu;return new _y(Fa,r,Zs,bw,x,kw,a,Li,ht,xw,ma(Ws.p2()))}function OC(n,r){var e=nn.f();e.da(96);for(var t=0,i=Uy().xe(r).x();i.y();){var a=i.z();e.ca(_c(n,te(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+ow(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(_c(n,at(r,t))),e.da(96),e.toString()}function jC(n,r,e){for(var t=or(r,"responses"),i=(t??Nr()).r2(),a=q.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=Ol(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=or(Dr(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,z=iw(n,S),I;if(z==null){u=null;break r}else I=z;var A=I;u=U(w,Rn(n,A,e))}var O=u;O==null||a.n(O)}return uu(N_(a))}function UC(n,r,e){var t=or(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=q.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();ke(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;Oe(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,z=S==null?null:S.l2(),I=z==null?null:Dr(z),A;if(I==null)return"unknown";A=I;var O=A,D=or(O,"content"),J;if(D==null)return"void";J=D;var T=J,M=or(T,"text/event-stream");if(M!=null){var F=or(M,"schema"),B;F==null?B=null:B=Rn(n,F,e);var L=B;return L??"string"}var H=T.p2(),X;r:{for(var $=H.x();$.y();){var tr=$.z();if(_s(tr,"json")){X=tr;break r}}X=null}var Y=X;if(Y!=null){var G=or(T,Y),ar=G==null?null:or(G,"schema"),ur;ar==null?ur=null:ur=Rn(n,ar,e);var Q=ur;return Q??"unknown"}return"string"}function NC(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();ke(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(E(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,_=d==null?null:or(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function iw(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(_s(a,"json")){t=a;break r}}t=null}var s=t,o=s??vb(r.p2()),u;if(o==null)u=null;else{var c=or(r,o);u=c==null?null:or(c,"schema")}return u}function aw(n,r){var e=n.q1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||ke(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=Z_(V_(r,o),ya([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!ke(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=nv(d,Wf());var m=_;return m??"root"}function DC(n,r,e){var t=n.q1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||ke(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=Z_(V_(r,u),ya([47])),f=q.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=q.m(),m=d.x();m.y();){var w=m.z();ke(w,"{")||_.n(w)}var x=hb(_,1);if(!x.i1()){var k=e==="post"?"":e;return lu(k+V(x,"",l,l,l,l,b7))}var S=zp(d),z=(S==null?null:ke(S,"{"))===!0;switch(e){case"get":return z?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function sw(n,r){var e=Hr(r,"description"),t;e==null?t=null:t=b(r0(Cs(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;lw(r)?c=u:c=null;var f=c;return st([o,f])}function dl(n,r,e){if(r.i1())return"";var t=X_(Wn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+Ep(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,k7(e))+(e+` */
`)}function LC(n){return"'"+n.l1h_1+"'"}function PC(n){return`
`+n.p1g()}function MC(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function mc(n,r,e){var t;if(e instanceof er){var i=Hr(e,"$ref"),a=i==null?null:Os(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=mc(n,r,v.l2());c.s2(h,d)}u=new er(c)}else u=sC(r,o);t=u}else if(e instanceof cn){for(var _=q.g1(Yr(e,10)),m=e.x();m.y();){var w=m.z(),x=mc(n,r,w);_.n(x)}t=new cn(_)}else t=e;return t}function RC(n,r){var e=n.a1j_1,t=r.a1j_1;return qt(e,t)}function BC(n){var r=n.b1j_1,e;r==null?e=null:e=", permission: "+Te(r);var t=e,i=t??"";return"    { page: "+Te(n.a1j_1)+i+` },
`}function FC(n){var r=n.k2(),e=n.l2();return Be(r)+": "+Te(e)}function $C(n,r){var e=n.ch_1,t=r.ch_1;return qt(e,t)}function JC(n){return n.dh_1}function HC(n){return r=>Se(n,ce(r))}function GC(n){var r=n.hh(),e=n.ih();return r+": "+e}function Nh(n,r,e,t,i,a){var s=ge(n,r,t);if(s!=null)return It(s);var o=ge(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?It(c+a):null}function KC(n){return n+`
`}function Gi(n,r,e){return"addError(errors, "+n+", "+Se(r,ce(e))+");"}function WC(n){return r=>"    "+Be(r)+": "+Se(n,ce(r))+`,
`}function Vi(n,r,e,t,i,a,s){if(t instanceof cn)for(var o=t.x();o.y();){var u=o.z();Vi(n,r,e,u,i,a,!1)}else if(t instanceof er){var c=ou(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=it(h),_=r.o2(d),m;if(_==null){var w=q.m();r.s2(d,w),m=w}else m=_;var x=m,k=new py(i,a);x.n(k);var S=it(h),z=e.o2(S);if(z==null){var I=h;e.s2(S,I)}}for(var A=Hr(t,"in")!=null?Hr(t,"name"):null,O=t.r2().x();O.y();){var D=O.z(),J=D.k2(),T=D.l2(),M;if(J==="properties"?M=T instanceof er:M=!1,M)for(var F=T.r2().x();F.y();){var B=F.z(),L=B.k2(),H=B.l2();Vi(n,r,e,H,i,L,!1)}else J==="schema"&&A!=null?Vi(n,r,e,T,i,A,!1):J!=="enum"&&Vi(n,r,e,T,i,a,!1)}}}function YC(n){return(r,e)=>{var t=V(si(we(n,r)),"\0"),i=V(si(we(n,e)),"\0");return qt(t,i)}}function ZC(n){return n.s1j_1}function VC(n){return n.t1j_1}function XC(n){return n+1|0}function QC(n){return r=>n+r}function r7(n,r,e,t){return i=>"..."+ni(n,Dr(i),r,e,t)}function n7(n,r,e,t){return i=>ni(n,Dr(i),r,e,t)}function e7(n){return Re(r=>{var e=n;return Se(e,r)},1,0,8,"literal",[n])}function t7(n,r,e){return t=>Rn(n,Dr(t),r,e)}function i7(n,r,e){return t=>Rn(n,Dr(t),r,e)}function a7(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.a1k_1;Ea(c,f);var v=TC(r,u.w1j_1,u.y1j_1,e),h=t+"."+v,d=r.v1i_1,_=new su(h,u.u1j_1,u.v1j_1);d.n(_);var m=u.d1k_1;if(m!=null){var w=i,x=new gy(h,m,u.e1k_1);w.n(x)}var k=u.c1k_1;k==null||a.s2(h,k);var S=AC(r,t+"-"+v,s);return o.ca(dl(r,u.x1j_1,"")),o.ca("export const "+S+" = "+u.z1j_1(h)+`;
`),dl(r,u.x1j_1,"    ")+("    "+Be(v)+": "+S+",")}}function s7(n,r){var e=n.k2(),t=r.k2();return qt(e,t)}function Dh(n){return Hr(n,"type")==="string"&&Hr(n,"format")==="binary"}function o7(n){return r=>{var e=r.k2(),t=r.l2(),i=Dr(t),a;if(Dh(i))a="File";else{var s;if(Hr(i,"type")==="array"){var o=or(i,"items"),u;o==null?u=null:u=Dh(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return Be(e)+(n.l1(e)?"":"?")+": "+c}}function l7(n){return Te(n)}function u7(n){return"    "+Be(n)+": "+Te(n)+`,
`}function c7(n){return"    '"+n.f1k_1+"': "+n.g1k_1+`;
`}function f7(n){return"    '"+n.f1k_1+"': ["+V(n.h1k_1)+`],
`}function v7(n){return n+1|0}function h7(n){return r=>r===1?n:n+r}function d7(n){return rv(n)}function p7(n){return n+1|0}function _7(n){return r=>n+r}function g7(n){return n.xf().d1(1)}function m7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Cn(t),a=(i==null?null:Pn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Rn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Hr(e,"name"),_=d??"";return Be(_)+(a?"":"?")+": "+h}}function y7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Cn(t),a=(i==null?null:Pn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Rn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Hr(e,"name"),_=d??"";return Te(_)+(a?"":"?")+": "+h}}function w7(n,r,e,t,i,a){return s=>{var o=V(hi(n,"operation: '"+s+"'")),u=r?"stream":"request",c=V(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function b7(n){return rv(n)}function k7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Ln(n){zr();for(var r=kt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,S7),o;C(s)===0?o="Unnamed":o=s;var u=o;return zx(Eb(u))?"_"+u:u}function rv(n){zr();var r=lu(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+at(r,1)}else e=r;return e}function lu(n){zr();for(var r=kt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=q.g1(Yr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(Ts(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+at(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+at(c,1)}else m=c;v=m}var k=v;s.n(k)}return V(s,"")}function nv(n,r){r=r===l?Tt():r,zr();var e=lu(n);return Kf().ue(e)&&!Q5().l1(e)&&!r.l1(e)?e:"_"+e}function ow(n){return zr(),nv(n,V5())}function Be(n){return zr(),Kf().ue(n)?n:Te(n)}function Te(n){zr();var r=nn.f();r.da(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(mn(t,32)<0||t===8232||t===8233){var i=Z(t);r.ca("\\u"+Q_(Ix(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function lw(n){zr();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Km(e))===!0}function or(n,r){zr();var e=n.c18(r);return e instanceof er?e:null}function uu(n){zr();for(var r=n.r2(),e=E7,t=new Sy(e),i=wi(r,t),a=fn(Yr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=U(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function hn(n,r){zr();var e=n.c18(r);return e instanceof cn?e:null}function Hr(n,r){zr();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:Pn(t)}function cu(n,r){zr();for(var e=hn(n,r),t=e??mr(),i=q.g1(Yr(t,10)),a=t.x();a.y();){var s=a.z(),o=Cn(s).w17();i.n(o)}return i}function ev(n){zr();var r=Hr(n,"format"),e;return r==null?e=null:e=My().o2(r),e}function uw(n){zr();var r=Hr(n,"format"),e;return r==null?e=null:e=vo().o2(r),e}function pl(n,r){zr();var e;if(n instanceof er){var t,i=Hr(n,"format");if((E(r,yn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(E(a,W)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(pl(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof cn){var f;r:{var v;if(E(n,W)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(pl(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function _l(n){zr();var r;if(n instanceof er){var e;if(ev(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(E(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(_l(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof cn){var u;r:{var c;if(E(n,W)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(_l(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Lh;function tv(){if(Lh)return sr;Lh=!0,cw=new fo("ADD_ERROR",0,"add-error.ts"),fw=new fo("ADD_NESTED",1,"add-nested.ts"),vw=new fo("MATCHES",2,"matches.ts")}var cw,fw,vw;function x7(n){return zr(),n.h16_1=!0,sr}function S7(n){return zr(),rv(n)}function E7(n,r){zr();var e=n.k2(),t=r.k2();return qt(e,t)}function hw(){return tv(),cw}function z7(){return tv(),fw}function I7(){return tv(),vw}var Ph;function zr(){Ph||(Ph=!0,Oy=ta(["get","post","put","patch","delete","head","options"]),jy=kt.te("[A-Za-z_$][A-Za-z0-9_$]*"),Ny=kt.te("\\{([^}]+)\\}"),Ly=yI(l,x7),Py=ta(["guardPages","signedInUser","pageGuards"]),Ry=$v([U("date","IsoDate"),U("time","IsoTime"),U("date-time","IsoDateTime")]),By=$v([U("duration","IsoDuration"),U("decimal","Decimal")]),Fy=Al([U("IsoDuration","'PT0S'"),U("Decimal","'0'")]),$y=Qt(["string","integer","number"]),Jy=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,Hy=Qt(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),Gy=Qt(["body","query","headers","options","encodeURIComponent"]),Ky=Qt(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),Wy=Qt(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Yy=ta(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Mh(n,r){return r===1?"1 character":""+r+" characters"}var Wi;function It(n){return n%1===0?On(n).toString():n.toString()}function C7(){return pw(),dw}var dw;function Ve(n){return pw(),we(C7(),n)}var Rh;function pw(){Rh||(Rh=!0,dw=Al([U("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
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
`)]))}function L7(n,r){var e;try{for(var t=new xy(ze(r)).s1k(n),i=xe(),a=rc.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=ce(u.l2());s.s2(c,f)}e=i.k15(a,new er(wo(U("files",new er(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=xe(),_=rc.t17(),m=h.message;v=d.k15(_,new er(wo(U("error",ce(m??h.toString())))))}else throw w;e=v}return e}p(hy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(dy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(hc,"EnumType");p(py,"EnumUsage");p(_y,"Endpoint");p(gy,"ErrorEntry");p(my,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(yy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(wy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(by,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(ky);p(xy,"TypeScriptGenerator");p(fo,"ValidationHelper");p(su,"GeneratedOperation");p(Sy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);N(Ey,"ConstraintMessages");Wi=new Ey;export{L7 as generateTypeScript};
