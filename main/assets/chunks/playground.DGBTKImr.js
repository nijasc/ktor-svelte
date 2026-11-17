typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,Nu=ArrayBuffer.isView,ls=Math.clz32;class kc{}class Ee{}class Hh{}class Gh{constructor(r){this.w_1=r}x(){return Up(this.w_1)}}class Kh{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class Wh{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let Yh=class{constructor(){Ju=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Sn{constructor(r){Rc(),this.x1_1=r}i2(r){return mn(this.x1_1,r)}d(r){return Nb(this,r)}toString(){return yr(this.x1_1)}equals(r){return Db(this.x1_1,r)}hashCode(){return Lb(this.x1_1)}}class W{}class qe{}class zn{}class Qe{}class yn{}class ua{}let Tw=class{};class se{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Oe(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof se?r:g())}equals(r){return this===r}hashCode(){return Vb(this)}toString(){return this.w2_1}}let Zh=class{constructor(){Hu=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends Hh{constructor(r,e){El(),super(),this.d3_1=r,this.e3_1=e}f3(r){return nr(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return wo(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return Fb(this)}valueOf(){return Zn(this)}}class bn{}class Vh{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw qr.r(""+this.h3_1);return r}}class qw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Ow{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Uw{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class jw{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Nw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Dw{}class Lw{}class Xh{constructor(){e1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class dn{}class yl{toString(){return"kotlin.Unit"}}class ma{static x4(r){return Si(this,r)}l1(r){var e;r:{var t;if(z(this,W)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(z(r,W)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,Yx(this))}toArray(){return l_(this)}}class ks extends ma{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class xc{constructor(r,e){Jc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw qr.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw kr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class Qh extends xc{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),Nn.j5(e,this.i5_1.c1()),this.a5_1=e}}class rd extends ks{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new xc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Qh(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&z(r,zn)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class nd{static w5(){var r=Si(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return Hv(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&z(r,Qe)))return!1;var e=r.k2(),t=r.l2(),i=(z(this,yn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(z(this,yn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&z(r,yn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=Hv(this,r);return e==null?null:e.l2()}hashCode(){return xr(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=Td.pg(this)}return ln(this.u5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,Vx(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=qd.sg(this)}return ln(this.v5_1)}}class ed extends nd{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return ud.z5(this)}a6(){return fd.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class xs extends ks{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&z(r,qe)?ps.f6(this,r):!1}hashCode(){return ps.g6(this)}}let td=class{constructor(){t1=this;var r=this,e=T.g1(0);e.l_1=!0,r.h6_1=e}};class Ss{}class T extends rd{constructor(r){return new.target.i4(r)}static i4(r){Ga();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Ga();var r=[];return this.i4(r)}static g1(r){Ga();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw U.v(b(i))}return t}static f1(r){Ga();var e=bi(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Ga().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[bu(this,r)]}v4(r,e){this.y4(),bu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(Nk(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=jk(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Os(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),bu(this,r),this.d5_1=this.d5_1+1|0;var e;return r===Us(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return Gw(this.k_1,r)}toString(){return Wb(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw ue.p6()}}class us extends ed{static w6(r){var e=this.t5();return Rk(e),e.u6_1=r,e}static x6(){return this.w6(rt.i7())}static j7(r,e){return this.w6(rt.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(rt.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return id.q7(this.u6_1)}a6(){return ad.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=od.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class id extends xs{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw ue.p6()}h1(r){throw ue.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class ad extends ks{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw ue.p6()}n(r){return this.y7(r)}z7(r){throw ue.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class sd extends xs{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&z(r,Qe)?this.e8(r!=null&&z(r,Qe)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw ue.p6()}n(r){return this.f8(r!=null&&z(r,Qe)?r:g())}h1(r){throw ue.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class od extends sd{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class ld{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class ud extends xs{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw ue.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new ld(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class cd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class fd extends ks{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw ue.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new cd(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class pi extends xs{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(rt.i7())}static o8(r){for(var e=this.m8(rt.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(rt.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class vd{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class wl{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw kr.o3(b(r))}this.g9_1.w7(),b_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw _o.m9()}}class hd extends wl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class dd extends wl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=ln(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class pd extends wl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new _d(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:xr(t),a=i??0,s=ln(this.g9_1.z6_1)[this.i9_1],o=s==null?null:xr(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=ln(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class _d{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return Cv(this),this.v8_1.y6_1[this.w8_1]}l2(){return Cv(this),ln(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&z(r,Qe)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:xr(r),t=e??0,i=this.l2(),a=i==null?null:xr(i);return t^(a??0)}toString(){return ce(this.k2())+"="+ce(this.l2())}}class gd{}function Pw(n){var r;r:{var e;if(z(n,W)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&z(a,Qe)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class rt{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=Si(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=p_(ds,et(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(c_(r),null,new Int32Array(r),new Int32Array(d_(ds,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw U.v(b(i))}return t}n2(r){return Jk(this,r)>=0}o2(r){var e=eo(this,r);return e<0?null:ln(this.z6_1)[e]}o7(r){return eo(this,r)>=0}s2(r,e){var t=w_(this,r),i=g_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),Wk(this,r.r2())}t2(r){this.w7();var e=eo(this,r);if(e<0)return null;var t=ln(this.z6_1)[e];return b_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);xo(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||xo(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,Cl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&z(r,yn)?t=Gk(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=nn.fa(2+lr(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw ue.p6()}g8(r){var e=eo(this,r.k2());return e<0?!1:P(ln(this.z6_1)[e],r.l2())}ga(r){return this.g8(z(r,Qe)?r:g())}v7(){return new hd(this)}a8(){return new dd(this)}d8(){return new pd(this)}}class vr extends us{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class An extends pi{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class it{}class md{ka(){var r="This continuation is already complete";throw kr.o3(b(r))}la(r){var e="This continuation is already complete";throw kr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class Sc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(f1),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&ln(this.ka().wa(f1)).ya(r),this.ta_1=k_}}class zc extends Sc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return ln(this.qa_1)}ra(r){var e=gs(),t=S0(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new ti(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===gs())return sr;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=z0(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class yd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;TS(r)&&e(r);var t=this.gb_1,i=S0(r);return i==null||t(i),sr}ma(r){return this.la(r)}}class cs extends Error{static nb(){var r=ta(this,Error,[null]);return ia(r),Su(r),r}static k3(r){var e=ta(this,Error,[r]);return ia(e,r),Su(e),e}static ob(r,e){var t=ta(this,Error,[r,Xp(e)]);return ia(t,r,e),Su(t),t}}class le extends cs{static hb(){var r=this.nb();return xu(r),r}static a9(r){var e=this.k3(r);return xu(e),e}static mb(r,e){var t=this.ob(r,e);return xu(t),t}}class ue extends le{static p6(){var r=this.hb();return Av(r),r}static k8(r){var e=this.a9(r);return Av(e),e}}class U extends le{static kb(){var r=this.hb();return ku(r),r}static v(r){var e=this.a9(r);return ku(e),e}static lb(r,e){var t=this.mb(r,e);return ku(t),t}}class qr extends le{static j1(){var r=this.hb();return Tv(r),r}static r(r){var e=this.a9(r);return Tv(e),e}}class Wn extends le{static sb(){var r=this.hb();return qv(r),r}static tb(r){var e=this.a9(r);return qv(e),e}}class kr extends le{static ub(){var r=this.hb();return Ov(r),r}static o3(r){var e=this.a9(r);return Ov(e),e}}class _o extends le{static m9(){var r=this.hb();return Uv(r),r}static u8(r){var e=this.a9(r);return Uv(e),e}}class Du extends le{static yb(){var r=this.hb();return jv(r),r}static zb(r){var e=this.a9(r);return jv(e),e}}class go extends Error{static ec(){var r=ta(this,Error,[null]);return ia(r),zu(r),r}static hc(r){var e=ta(this,Error,[r]);return ia(e,r),zu(e),e}static gc(r,e){var t=ta(this,Error,[r,Xp(e)]);return ia(t,r,e),zu(t),t}}class Qa extends go{static cc(){var r=this.ec();return Nv(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return Nv(t),t}}class Lu extends U{static mc(){var r=this.kb();return Dv(r),r}static nc(r){var e=this.v(r);return Dv(e),e}}class Pu extends le{static s3(){var r=this.hb();return rx(r),r}}class Mu extends le{static w3(){var r=this.hb();return nx(r),r}}class Ru extends le{static a4(){var r=this.hb();return ex(r),r}}class Ke{}class ya{equals(r){var e;return r instanceof Ec?e=!1:r instanceof ya?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:oe(r);return e??0}toString(){return"class "+this.oc()}}class tn extends ya{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class Ec extends ya{constructor(){So=null,super(),So=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw ue.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Bu extends ya{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return pk(r,this.vc_1)}}class ki{}class wd{constructor(){a1=this;var r=this,e=Object;r.anyClass=new tn(e,"Any",lx);var t=this,i=Number;t.numberClass=new tn(i,"Number",ux),this.nothingClass=ox();var a=this,s=Boolean;a.booleanClass=new tn(s,"Boolean",cx);var o=this,u=Number;o.byteClass=new tn(u,"Byte",fx);var c=this,f=Number;c.shortClass=new tn(f,"Short",vx);var v=this,h=Number;v.intClass=new tn(h,"Int",hx);var d=this,_=y;d.longClass=new tn(_,"Long",dx);var m=this,w=Number;m.floatClass=new tn(w,"Float",px);var x=this,k=Number;x.doubleClass=new tn(k,"Double",_x);var S=this,E=Array;S.arrayClass=new tn(E,"Array",gx);var I=this,A=String;I.stringClass=new tn(A,"String",mx);var q=this,j=Error;q.throwableClass=new tn(j,"Throwable",yx);var F=this,O=Array;F.booleanArrayClass=new tn(O,"BooleanArray",wx);var L=this,H=Uint16Array;L.charArrayClass=new tn(H,"CharArray",bx);var B=this,$=Int8Array;B.byteArrayClass=new tn($,"ByteArray",kx);var R=this,X=Int16Array;R.shortArrayClass=new tn(X,"ShortArray",xx);var J=this,tr=Int32Array;J.intArrayClass=new tn(tr,"IntArray",Sx);var Y=this,G=typeof BigInt>"u"?l:BigInt;Y.bigIntClass=new tn(G,"BigInt",zx);var ar=this,ur=Array;ar.longArrayClass=new tn(ur,"LongArray",Ex);var Q=this,Tr=Float32Array;Q.floatArrayClass=new tn(Tr,"FloatArray",Ix);var zr=this,gr=Float64Array;zr.doubleArrayClass=new tn(gr,"DoubleArray",Cx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=Lv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new tn(i,a,Ax(r));Lv()[r]=s,t=s}else t=e;return t}}class uv extends cs{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return un(e,e.ud_1),e}static wd(){return this.vd(null)}}class nn{constructor(r){return new.target.xd(r)}static xd(r){var e=Si(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Wn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return ae(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+ce(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+ce(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return Nn.j5(r,this.a()),this.e_1=ae(this.e_1,0,r)+yr(e)+st(this.e_1,r),this}de(r){if(r<0)throw U.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=ae(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return Nn.i6(r,this.a()),this.e_1=ae(this.e_1,0,r)+st(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return Nn.ge(e,t,i.length),this.e_1=this.e_1+ae(i,e,t),this}}class bd{constructor(){s1=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class St{constructor(r,e){return new.target.se(r,e)}static se(r,e){Eo();var t=Si(this);return t.me_1=r,t.ne_1=at(e),t.oe_1=new RegExp(r,Lx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return Eo(),this.se(r,Ot())}ue(r){qx(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));return I_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=Nx(this,r,e);return u2(t,Dx)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=nn.fa(a);do{var o=ln(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){of(e);for(var t=this.xe(r),i=e===0?t:Tb(t,e-1|0),a=T.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(jn(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(jn(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class bl{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return oe(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof bl)||this.gf_1!==r.gf_1)}}class kd extends ma{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=kb(r2(this));return Es(r,Mx(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new bl(e),t}}class Ic extends ma{static wf(r){return this.x4(r)}x(){return new Cc(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new zd(this,r)}equals(r){return r===this?!0:r!=null&&z(r,zn)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class xd extends Ic{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class Sd{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=kd.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=xd.vf(this.qf_1)}return ln(this.of_1)}z(){return I_(this.rf_1,this.sf_1,this.pf_1.i1()?Rx(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let Mw=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}};class mt extends se{constructor(r,e,t){super(r,e),this.cg_1=t}}class Cc{constructor(r,e){Jc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw qr.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class zd extends Cc{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),Nn.j5(e,this.lg_1.c1()),this.hg_1=e}}class Ed{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Wn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Wn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Wn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw U.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Wn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw U.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:xr(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class Id{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class Cd{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class Rw{}class Ad extends ma{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&z(r,qe)?ps.f6(this,r):!1}hashCode(){return ps.g6(this)}}class Td extends Ad{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new Id(r)}c1(){return this.og_1.c1()}}class qd extends ma{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new Cd(r)}c1(){return this.rg_1.c1()}}class Od{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:xr(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class Ud{constructor(){o1=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&z(r,zn)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Wn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return _s}m1(r){if(r!==0)throw Wn.tb("Index: "+r);return _s}}class jd{y(){return!1}z(){throw qr.j1()}}class kl{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+ce(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=lr(r,31)+(this.xg_1==null?0:xr(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof kl)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class Nd{constructor(r){this.yg_1=r}x(){return new Dd(this.yg_1())}}class Dd{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new kl(Os(r),this.zg_1.z())}}class Ld{}class Pd{constructor(){l1=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&z(r,yn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return c1()}p2(){return c1()}q2(){return L_()}}class Md{z(){return this.jh()}}class Rd{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class Bd{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Rd(this)}}class xl{}class $d{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw qr.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class Sl{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw U.v(b(t))}}v1(r){return r>=this.rh_1?this:new Sl(this.qh_1,r)}x(){return new $d(this)}}class Fd{x(){return _s}v1(r){return Ol}}class Jd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&Yv(this),this.th_1===0)throw qr.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&Yv(this),this.th_1===1}}class Ac{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new Jd(this)}}class Hd{constructor(){u1=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&z(r,qe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return _s}}class Gd{zh(r,e){return Oe(r,e)}compare(r,e){var t=r!=null&&Vu(r)?r:g();return this.zh(t,e!=null&&Vu(e)?e:g())}}let Kd=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}},Wd=class{};class Bw{}class Yd{constructor(){v1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class Zd extends se{}class Vd extends Ic{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return Nn.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=fv(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof se?this.ei(r instanceof se?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=fv(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof se?this.fi(r instanceof se?r:g()):-1}}class Xd{constructor(){h1=this,this.p1_1=new Tt(1,0)}}class zs{constructor(r,e,t){if(t===0)throw U.v("Step must be non-zero.");if(t===-2147483648)throw U.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=w2(r,e,t),this.t1_1=t}x(){return new Qd(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof zs?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class na{}class Tt extends zs{constructor(r,e){W_(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Tt?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class Qd extends Md{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw qr.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class rp{q1(r,e,t){return new zs(r,e,t)}}class np{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=Ib(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&Qv(this),this.li_1===0)throw qr.j1();var r=this.oi_1,e=r instanceof Tt?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&Qv(this),this.li_1===1}}class ep{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new np(this)}}class $w{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class tp{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=rr(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&rr(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw qr.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(jn(t,e,r))}}class ip{constructor(r){this.dj_1=r}x(){return new tp(this.dj_1)}}class ap{constructor(){d1=this,this.ej_1=new y(0,0),this.fj_1=Ct(new y(-1,1073741823)),this.gj_1=Ct(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new be(r),t=e.kj_1;if(lf(t)){var i=wn(t);if(!(nr(new y(387905,-1073741824),i)<=0&&nr(i,new y(-387905,1073741823))<=0))throw Qa.fc(wn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=wn(t);if(nr(new y(1,-1073741824),s)<0&&nr(s,new y(-1,1073741823))<0)a=!1;else{var o=wn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw Qa.fc(wn(t).toString()+" ms is out of milliseconds range");var u=wn(t);if(nr(new y(1108857478,-1074),u)<=0&&nr(u,new y(-1108857478,1073))<=0)throw Qa.fc(wn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new be(tS(r,!0)),i=t.kj_1;if(P(new be(i),new be(Yr().ij_1))){var a="invariant failed";throw kr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof U){var s=o;throw U.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class be{constructor(r){Yr(),this.kj_1=r}mj(r){return u0(this.kj_1,r)}d(r){return W2(this,r)}toString(){return Q2(this.kj_1)}hashCode(){return nS(this.kj_1)}equals(r){return eS(this.kj_1,r)}}class sp{constructor(){p1=this,this.nj_1=new $u(new y(-1,1073741823),!0),this.oj_1=new $u(new y(-1,2147483647),!1)}}class $u{constructor(r,e){p0(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Cr(i,M(10));var a=this,s=this.pj_1;a.sj_1=It(s,M(10))}}class Fw{}class op{constructor(){g1=this,this.tj_1=new nt(new y(342103040,-7347440),0),this.uj_1=new nt(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Cr(e,t);if(nr(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Jr(a,Ve())}var s=i,o=hr(r,s);if(nr(Ae(r,o),new y(0,0))<0&&nr(Ae(r,s),new y(0,0))>=0)return nr(r,new y(0,0))>0?xt().uj_1:xt().tj_1;var u=o,c;if(nr(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(nr(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=It(e,f),h=hr(v,hs(f,Is(hs(Ae(v,f),mi(v,an(v))),63))),d=Qr(h);c=new nt(u,d)}return c}wj(r,e){return this.vj(r,M(e))}xj(r){return wS(r).yj()}}class nt{constructor(r,e){xt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(nr(new y(342103040,-7347440),t)<=0&&nr(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw U.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:Oe(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof nt?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof nt?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+lr(51,this.ak_1)|0}toString(){return yS(this)}}class lp{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(nr(this.kk_1,xt().tj_1.zj_1)<0||nr(this.kk_1,xt().uj_1.zj_1)>0)throw Oc.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return xt().wj(this.kk_1,this.lk_1)}}class Tc{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw Oc.qk(this.rk_1+' when parsing an Instant from "'+cf(this.sk_1,64)+'"')}}class up{ck(r){var e=r.zj_1,t=new y(86400,0),i=Cr(e,t);if(nr(Ae(e,t),new y(0,0))<0&&!ir(Ar(i,t),e)){var a=i;i=Jr(a,Ve())}var s=i,o=new y(86400,0),u=It(e,o),c=hr(u,hs(o,Is(hs(Ae(u,o),mi(u,an(u))),63))),f=Qr(c),v,h,d,_=hr(s,M(719528)),m=_;_=Jr(m,M(60));var w=new y(0,0);if(nr(_,new y(0,0))<0){var x=_,k=hr(x,M(1)),S=Cr(k,M(146097)),E=Jr(S,M(1));w=Ar(E,M(400));var I=_,A=an(E),q=Ar(A,M(146097));_=hr(I,q)}var j=Ar(Un(400),_),F=hr(j,M(591)),O=Cr(F,M(146097)),L=_,H=Ar(Un(365),O),B=O,$=Cr(B,M(4)),R=hr(H,$),X=O,J=Cr(X,M(100)),tr=Jr(R,J),Y=O,G=Cr(Y,M(400)),ar=Jr(L,hr(tr,G));if(nr(ar,new y(0,0))<0){var ur=O;O=Jr(ur,Ve());var Q=_,Tr=Ar(Un(365),O),zr=O,gr=Cr(zr,M(4)),Er=hr(Tr,gr),wr=O,Ir=Cr(wr,M(100)),Pr=Jr(Er,Ir),dr=O,Zr=Cr(dr,M(400));ar=Jr(Q,hr(Pr,Zr))}O=hr(O,w);var sn=Qr(ar),Hr=(lr(sn,5)+2|0)/153|0;h=((Hr+2|0)%12|0)+1|0,d=(sn-((lr(Hr,306)+5|0)/10|0)|0)+1|0;var pr=O,$r=Hr/10|0,Gr=hr(pr,M($r));v=Qr(Gr);var en=f/3600|0,Rr=f-lr(en,3600)|0,Kr=Rr/60|0,pn=Rr-lr(Kr,60)|0;return new qc(v,h,d,en,Kr,pn,r.ak_1)}}class qc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class Oc extends U{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return un(e,e.pk_1),e}}class cp{}class fp{constructor(r){this.uk_1=r}}class vp extends cp{constructor(r,e){super();var t=this;t.vk_1=dk(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=z(this,it)?this:g(),this.yk_1=Cu()}ka(){return G_()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=z(t,it)?t:g(),this.wk_1=r,gs()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new ti(r)instanceof ti?r:g();return jS(i),i}else t=e;var a=t;if(P(new ti(Cu()),new ti(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=Zk(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=z0(c);a.ma(f);continue r}else throw d}var v=s;if(v!==gs()){var h=v;a.ma(h)}}else this.yk_1=Cu(),a.ma(r)}}}class hp extends se{}class Uc{constructor(r){this.bl_1=r,this.cl_1=co}l2(){return this.cl_1===co&&(this.cl_1=ln(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==co}toString(){return this.dl()?ce(this.l2()):"Lazy value not initialized yet."}}class dp{}class Jw{}class qt{constructor(r){this.el_1=r}equals(r){var e;return r instanceof qt?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return xr(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class ti{constructor(r){this.fl_1=r}toString(){return qS(this.fl_1)}hashCode(){return OS(this.fl_1)}equals(r){return US(this.fl_1,r)}}class cv extends go{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return un(e,e.ab_1),e}}class zl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+ce(this.ch_1)+", "+ce(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:xr(this.ch_1);return r=lr(r,31)+(this.dh_1==null?0:xr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof zl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class pp{constructor(){m1=this,this.dg_1=new zt(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new zt(r,e),t}gl(r){var e;switch(r.length){case 36:e=Kx(r);break;case 32:e=Wx(r);break;default:throw U.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+NS(r,64)+'" of length '+r.length))}return e}}class zt{constructor(r,e){Ds(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Ka(this.hl_1,r,0,0,4);var e=45,t=Z(e);r[8]=Ln(t),Ka(this.hl_1,r,9,4,6);var i=45,a=Z(i);r[13]=Ln(a),Ka(this.hl_1,r,14,6,8);var s=45,o=Z(s);r[18]=Ln(o),Ka(this.il_1,r,19,0,2);var u=45,c=Z(u);return r[23]=Ln(c),Ka(this.il_1,r,24,2,8),Bx(r)}equals(r){return this===r?!0:r instanceof zt?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=bt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=bt(i,s)}return e}d(r){return this.kl(r instanceof zt?r:g())}hashCode(){return Ae(this.hl_1,this.il_1).hashCode()}}class _p{constructor(){y1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class Pe{constructor(r){Rl(),this.pl_1=r}ql(r){return E0(this.pl_1,r)}d(r){return DS(this,r)}toString(){return w1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return LS(this.pl_1,r)}}class gp{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw qr.r(this.sl_1.toString());return r}z(){return new Pe(this.tl())}}class ai{constructor(r){this.ul_1=r}c1(){return fi(this.ul_1)}x(){return RS(this.ul_1)}vl(r){return I0(this.ul_1,r)}l1(r){return BS(this,r)}i1(){return $S(this.ul_1)}toString(){return FS(this.ul_1)}hashCode(){return JS(this.ul_1)}equals(r){return HS(this.ul_1,r)}}class mp{constructor(){b1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Xn{constructor(r){Bl(),this.am_1=r}bm(r){return C0(this.am_1,r)}d(r){return GS(this,r)}toString(){return k1(this.am_1)}hashCode(){return this.am_1}equals(r){return KS(this.am_1,r)}}class yp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw qr.r(this.dm_1.toString());return r}z(){return new Xn(this.em())}}class si{constructor(r){this.fm_1=r}c1(){return vi(this.fm_1)}x(){return ZS(this.fm_1)}gm(r){return A0(this.fm_1,r)}l1(r){return VS(this,r)}i1(){return XS(this.fm_1)}toString(){return QS(this.fm_1)}hashCode(){return rz(this.fm_1)}equals(r){return nz(this.fm_1,r)}}class wp{constructor(){x1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Qn{constructor(r){Ls(),this.lm_1=r}mm(r){return T0(this.lm_1,r)}d(r){return ez(this,r)}toString(){return S1(this.lm_1)}hashCode(){return tz(this.lm_1)}equals(r){return iz(this.lm_1,r)}}class bp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw qr.r(this.om_1.toString());return r}z(){return new Qn(this.pm())}}class oi{constructor(r){this.qm_1=r}c1(){return hi(this.qm_1)}x(){return oz(this.qm_1)}rm(r){return q0(this.qm_1,r)}l1(r){return lz(this,r)}i1(){return uz(this.qm_1)}toString(){return cz(this.qm_1)}hashCode(){return fz(this.qm_1)}equals(r){return vz(this.qm_1,r)}}class kp{constructor(){z1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Me{constructor(r){$l(),this.wm_1=r}xm(r){return O0(this.wm_1,r)}d(r){return hz(this,r)}toString(){return E1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return dz(this.wm_1,r)}}class xp{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw qr.r(this.zm_1.toString());return r}z(){return new Me(this.an())}}class li{constructor(r){this.bn_1=r}c1(){return di(this.bn_1)}x(){return gz(this.bn_1)}cn(r){return U0(this.bn_1,r)}l1(r){return mz(this,r)}i1(){return yz(this.bn_1)}toString(){return wz(this.bn_1)}hashCode(){return bz(this.bn_1)}equals(r){return kz(this.bn_1,r)}}function Hw(n){return new Tt(0,jc(n))}function Gw(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function Kw(n,r){return Vw(n,r)>=0}function Ww(n,r){return Xw(n,r)>=0}function Yw(n,r){return Qw(n,r)>=0}function Zw(n,r){return rb(n,r)>=0}function jc(n){return n.length-1|0}function Vw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Xw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Qw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function rb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function nb(n){return n.length-1|0}function Sp(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,eb(n,nn.f(),r,e,t,i,a,s).toString()}function eb(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)Y_(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function tb(n){return new Tt(0,ob(n))}function ib(n){var r;switch(n.length){case 0:r=mr();break;case 1:r=On(n[0]);break;default:var e=n.slice();r=Il(e);break}return r}function ab(n){return new Nd(vb(n))}function zp(n){switch(n.length){case 0:return Ot();case 1:return Zc(n[0]);default:return Ep(n,An.i(n.length))}}function sb(n){return lb(n,T.m())}function ob(n){return n.length-1|0}function Ep(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function lb(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function ub(n,r){return fb(n,r)>=0}function Ip(n){var r;switch(n.length){case 0:throw qr.r("Array is empty.");case 1:r=n[0];break;default:throw U.v("Array has more than one element.")}return r}function cb(n){return n.length===0?F_():new Gh(n)}function fb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function fv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function vb(n){return()=>Up(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Cp(n,nn.f(),r,e,t,i,a,s).toString()}function Cp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)Y_(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function hb(n){return fs(n,pi.b1(Vr(n,12)))}function db(n){for(var r=yo(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function ui(n){if(z(n,W)){if(n.c1()<=1)return wa(n);var r=bi(n),e=As(r)?r:g();return mk(e),Il(e)}var t=Lc(n);return Ok(t),t}function ca(n){return wa(Dc(n))}function at(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=Ot();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=Zc(e);break;default:r=fs(n,An.i(n.c1()));break}return r}return f2(fs(n,An.e1()))}function xe(n,r){if(z(r,W)){var e=T.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=T.f1(n);return Ia(t,r),t}}function pb(n){if(n.i1())throw qr.r("List is empty.");return n.d1(0)}function wa(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=mr();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=On(e);break;default:r=qp(n);break}return r}return P_(Lc(n))}function Nc(n){return n.c1()===1?n.d1(0):null}function _b(n,r){var e=n.x();if(!e.y())throw qr.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function Dc(n){var r;return z(n,W)?r=An.k1(n):r=fs(n,An.e1()),r}function _i(n,r){var e=T.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function gb(n,r){return z(n,W)?n.l1(r):wb(n,r)>=0}function _u(n){return n.i1()?null:n.d1(0)}function Ap(n){var r;switch(n.c1()){case 0:throw qr.r("List is empty.");case 1:r=n.d1(0);break;default:throw U.v("List has more than one element.")}return r}function mb(n){if(z(n,zn))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function yb(n,r){var e;if(z(n,W)){var t=n.c1()-r|0;if(t<=0)return mr();if(t===1)return On(bb(n));if(e=T.g1(t),z(n,zn)){if(z(n,Ss)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=T.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return P_(e)}function Tp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function fs(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Lc(n){return z(n,W)?qp(n):fs(n,T.m())}function xi(n,r){if(z(n,W)){if(n.c1()<=1)return wa(n);var e=bi(n),t=As(e)?e:g();return yk(t,r),Il(t)}var i=Lc(n);return Uk(i,r),i}function qp(n){return T.f1(n)}function wb(n,r){if(z(n,zn))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Os(e),P(r,i))return e;e=e+1|0}return-1}function bb(n){if(z(n,zn))return Fu(n);var r=n.x();if(!r.y())throw qr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Fu(n){if(n.i1())throw qr.r("List is empty.");return n.d1(Us(n))}function kb(n){return new Kh(n)}function xb(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Oe(e,t)>0&&(e=t)}return e}function Pc(n,r){return r<=-2147483648?W_().p1_1:Le(n,r-1|0)}function Sb(n,r){return af.q1(n,r,-1)}function Et(n,r){return n>r?r:n}function fn(n,r){return n<r?r:n}function zb(n,r){return af.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Mc(n,r,e){if(nr(r,e)>0)throw U.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return nr(n,r)<0?r:nr(n,e)>0?e:n}function Eb(n,r){return nr(n,r)<0?r:n}function Ib(n,r,e){if(r>e)throw U.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function gu(n,r){return nr(n,r)>0?r:n}function ao(n,r){var e=Cb(r);return e!=null?n.u1(e):!1}function Cb(n){return nr(new y(-2147483648,-1),n)<=0&&nr(n,new y(2147483647,0))<=0?Qr(n):null}function Es(n,r){return new Bd(n,r)}function Op(n){var r=n.x();if(!r.y())return mr();var e=r.z();if(!r.y())return On(e);var t=T.m();for(t.n(e);r.y();)t.n(r.z());return t}function Ab(n){return new Wh(n)}function Tb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw U.v(b(e))}var t;return r===0?t=F_():z(n,xl)?t=n.v1(r):t=new Sl(n,r),t}function vv(n,r){var e=e2(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=An.i(i??lr(n.c1(),2));return a.h1(n),Ia(a,r),a}function mo(n,r){var e=An.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function qb(n){if(C(n)===0)throw qr.r("Char sequence is empty.");return rr(n,0)}function Ob(n){var r;switch(C(n)){case 0:throw qr.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw U.v("Char sequence has more than one element.")}return r}function Ub(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw U.v(b(e))}return st(n,Et(r,n.length))}function jb(n){var r=n&65535;return r}function mn(n,r){return n-r|0}function Nb(n,r){return mn(n.x1_1,r instanceof Sn?r.x1_1:g())}function ie(n,r){return n-r|0}function Z(n){return n}function yr(n){return String.fromCharCode(n)}function Db(n,r){return r instanceof Sn?n===r.x1_1:!1}function Lb(n){return n}var Ju;function Rc(){return Ju===l&&new Yh,Ju}function ce(n){var r=n==null?null:b(n);return r??"null"}function Pb(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Hu;function El(){return Hu===l&&new Zh,Hu}function Mb(n){var r;return n<0?r=-n:r=n,r}function Up(n){return new Vh(n)}function yo(n){var r="BooleanArray",e=jp(Array(n),!1);return e.$type$=r,e}function jp(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function vs(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function gi(n){var r="LongArray",e=jp(Array(n),new y(0,0));return e.$type$=r,e}function ba(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function mu(){return ka(),Np}var Np;function Dp(){return ka(),Lp}var Lp;function Gu(){return ka(),Pp}var Pp;function Mp(){return ka(),Rp}var Rp;function Rb(){return ka(),Bp}var Bp;function Bb(n){return ka(),(n|0)===n?bo(n):(Dp()[0]=n,lr(Gu()[Rb()],31)+Gu()[Mp()]|0)}var hv;function ka(){hv||(hv=!0,Np=new ArrayBuffer(8),Lp=new Float64Array(mu()),new Float32Array(mu()),Pp=new Int32Array(mu()),Dp()[0]=-1,Rp=Gu()[0]!==0?1:0,Bp=1-Mp()|0)}function Ze(){return _r(),$p}var $p;function Ve(){return _r(),Fp}var Fp;function dv(){return _r(),Jp}var Jp;function $b(){return _r(),Hp}var Hp;function De(){return _r(),Gp}var Gp;function pv(){return _r(),Kp}var Kp;function nr(n,r){if(_r(),ir(n,r))return 0;var e=we(n),t=we(r);return e&&!t?-1:!e&&t?1:we(Jr(n,r))?-1:1}function Ku(n){return _r(),Ln(n.d3_1)}function Wu(n){return _r(),Gc(n.d3_1)}function Qr(n){return _r(),n.d3_1}function Zn(n){return _r(),n.e3_1*4294967296+Jb(n)}function wo(n,r){if(_r(),ci(n))return"0";if(we(n))if(ir(n,De())){var e=M(r),t=Cr(n,e),i=Qr(Jr(Ar(t,e),n)),a=wo(t,r);return a+i.toString(r)}else return"-"+wo(an(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=fa(Math.pow(r,s)),u=n,c="";;){var f=Cr(u,o),v=Qr(Jr(u,Ar(f,o))),h=v.toString(r);if(u=f,ci(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return _r(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Fb(n){return _r(),n.d3_1^n.e3_1}function M(n){return _r(),new y(n,n<0?-1:0)}function we(n){return _r(),n.e3_1<0}function Jr(n,r){return _r(),hr(n,an(r))}function Jb(n){return _r(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function ci(n){return _r(),n.e3_1===0&&n.d3_1===0}function Ar(n,r){if(_r(),ci(n))return Ze();if(ci(r))return Ze();if(ir(n,De()))return _v(r)?De():Ze();if(ir(r,De()))return _v(n)?De():Ze();if(we(n)){var e;return we(r)?e=Ar(an(n),an(r)):e=an(Ar(an(n),r)),e}else if(we(r))return an(Ar(n,an(r)));if(gv(n,pv())&&gv(r,pv()))return fa(Zn(n)*Zn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+lr(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+lr(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,f)+lr(i,c)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function an(n){return _r(),hr(Bc(n),new y(1,0))}function fa(n){if(_r(),qs(n))return Ze();if(n<=-9223372036854776e3)return De();if(n+1>=9223372036854776e3)return $b();if(n<0)return an(fa(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){_r();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function _v(n){return _r(),(n.d3_1&1)===1}function gv(n,r){return _r(),nr(n,r)<0}function Bc(n){return _r(),new y(~n.d3_1,~n.e3_1)}function Cr(n,r){if(_r(),ci(r))throw cs.k3("division by zero");if(ci(n))return Ze();if(ir(n,De())){if(ir(r,Ve())||ir(r,dv()))return De();if(ir(r,De()))return Ve();var e=Is(n,1),t=Vn(Cr(e,r),1);if(ir(t,Ze()))return we(r)?Ve():dv();var i=Jr(n,Ar(r,t));return hr(t,Cr(i,r))}else if(ir(r,De()))return Ze();if(we(n)){var a;return we(r)?a=Cr(an(n),an(r)):a=an(Cr(an(n),r)),a}else if(we(r))return an(Cr(n,an(r)));for(var s=Ze(),o=n;Gb(o,r);){for(var u=Zn(o)/Zn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=fa(c),d=Ar(h,r);we(d)||Hb(d,o);)c=c-v,h=fa(c),d=Ar(h,r);ci(h)&&(h=Ve()),s=hr(s,h),o=Jr(o,d)}return s}function Is(n,r){_r();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Vn(n,r){_r();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function Hb(n,r){return _r(),nr(n,r)>0}function Gb(n,r){return _r(),nr(n,r)>=0}function It(n,r){return _r(),Jr(n,Ar(Cr(n,r),r))}function hs(n,r){return _r(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function mi(n,r){return _r(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Ae(n,r){return _r(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function $c(n,r){_r();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function Un(n){_r();var r;return n instanceof y?r=n:r=fa(n),r}function ea(n){return _r(),yi(n)&&n.$type$==="LongArray"}function Kb(n){return _r(),n!=null?ea(n):!1}var mv;function _r(){if(!mv){mv=!0,$p=M(0),Fp=M(1),Jp=M(-1),Hp=new y(-1,2147483647),Gp=new y(0,-2147483648),Kp=M(16777216);var n=Array;new tn(n,"LongArray",Kb)}}function rr(n,r){var e;return Fc(n)?e=K(n,r):e=n.b(r),e}function Fc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Fc(n)?r=n.length:r=n.a(),r}function jn(n,r,e){var t;return Fc(n)?t=ae(n,r,e):t=n.c(r,e),t}function Wb(n){return Sp(n,", ","[","]",l,l,Yb)}function Wp(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!t_(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function Yp(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+xr(r[a])|0}while(t<i);return e}function Yb(n){return b(n)}function Oe(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=yv(n,r):r instanceof y?t=yv(n,Zn(r)):t=wv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=wv(n,r);break;default:e=Zb(n,r);break}return e}function yv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function wv(n,r){return n<r?-1:n>r?1:0}function Zb(n,r){return n.d(r)}function Vb(n){return Yu(n)}function Yu(n){if(!("kotlinHashCodeValue$"in n)){var r=Zp(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function Zp(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":t_(n)?r="[...]":typeof n.toString!="function"?r=Xb(n):r=n.toString(),r}function Xb(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Zu(n)&&Zu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!yi(n.$bound)||!yi(r.$bound))return!1;var a=n.$bound,s=r.$bound;return Wp(a,s)}return n===r}function xr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Yu(n);break;case"function":e=Zu(n)?Qb(n):Yu(n);break;case"number":e=Bb(n);break;case"boolean":e=Vp(n);break;case"string":e=oe(String(n));break;case"bigint":e=rk(n);break;case"symbol":e=nk(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Qb(n){var r=n.$flags;r=lr(31,r)+xr(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&yi(i)){var a=i;r=lr(31,r)+Yp(a)|0}return r}function Vp(n){return n?1231:1237}function oe(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function rk(n){var r=BigInt(32),e=BigInt(4294967295),t=Mb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function nk(n){var r=ek(n)?tk():ik(),e=r.get(n);if(e!==l)return e;var t=Zp();return r.set(n,t),t}function ek(n){return Symbol.keyFor(n)!=l}function tk(){return yu===l&&(yu=new Map),yu}function ik(){return wu===l&&(wu=new WeakMap),wu}var yu,wu;function un(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function Si(n,r){var e=Object.create(n.prototype);return Jc(e,r),e}function Jc(n,r){r!==l&&Object.assign(n,r)}function ta(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function ak(n){return n===l}function Xp(n){return{cause:n}}function ia(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(ak(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function sk(){return r_(),Qp}var Qp;function ok(n,r){return r_(),n!=l&&n[sk()]?r(n):Xk(r)}var bv;function r_(){bv||(bv=!0,Qp=it.Symbol)}function Cs(){throw Pu.s3()}function lk(){throw Mu.w3()}function g(){throw Ru.a4()}function ln(n){var r;return n==null?lk():r=n,r}function n_(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Hc(u,n,r,e,t,i,a,s,o)}function Hc(n,r,e,t,i,a,s,o,u){var c=n_(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function D(n,r,e,t,i,a,s,o){var u="object";Hc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Hc(u,n,r,e,t,i,a,s,o)}function rn(n,r,e,t){D(n,"Companion",l,r,e,t,l,l)}function uk(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&As(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function Ln(n){return n<<24>>24}function bo(n){var r;return n instanceof y?r=Qr(n):r=ck(n),r}function ck(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Gc(n){return n<<16>>16}function We(n){var r=bo(n),e=Gc(r);return jb(e)}function Le(n,r){return new Tt(n,r)}function fk(){return Sa(),e_}var e_;function Ki(){return Sa(),n_("class",l,l,l,l,l)}function xa(n,r,e,t,i,a){return Sa(),t.get=t,t.set=i,t.callableName=n,vk(t,hk(r,i),e)}function vk(n,r,e){Sa(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function hk(n,r){return Sa(),fk()[n][r==null?0:1]}function Re(n,r,e,t,i,a){return Sa(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var kv;function Sa(){if(!kv){kv=!0;var n=[Ki(),Ki()],r=[Ki(),Ki()];e_=[n,r,[Ki(),Ki()]]}}function t_(n){return yi(n)||Nu(n)}function yi(n){return Array.isArray(n)}function Zu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function z(n,r){return n[r.Symbol]===!0}function As(n){var r;return yi(n)?r=!n.$type$:r=!1,r}function dk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function i_(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Vu(n){var r=typeof n;return r==="string"||r==="boolean"||i_(n)||z(n,Ee)}function Ts(n){return typeof n=="string"||z(n,kc)}function rs(n){return yi(n)&&n.$type$==="BooleanArray"}function ns(n){return n instanceof Int8Array}function es(n){return n instanceof Int16Array}function ts(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function is(n){return n instanceof Int32Array}function as(n){return n instanceof Float32Array}function ss(n){return n instanceof Float64Array}function pk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?_k(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?z(n,i):n instanceof i}function _k(n){return Object.getPrototypeOf(n)}var l;function wi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function a_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return x_(n,r,null)}function Kc(n,r){return Wp(n,r)}function gk(n){return Yp(n)}function Il(n){return T.i4(n)}function Xu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,vs(r));else if(r>t){var a=vs(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function Qu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function r1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function va(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return zi(n,gi(r))}function ha(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function da(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=zi(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function n1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t="BooleanArray",i=x_(n,r,!1);return i.$type$=t,i}function mk(n){n.length>1&&Dk(n)}function yk(n,r){n.length>1&&f_(n,r)}function s_(n){var r=Z(n),e=bk(xv().j4_1,r),t=r-xv().j4_1[e]|0;return t<10?t:-1}function wk(n){return s_(n)>=0}function bk(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var e1;function xv(){return e1===l&&new Xh,e1}function kk(n){var r=Z(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function xk(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function qs(n){return n!==n}function Sk(n){var r;return n===0?r=0:r=1<<(31-ls(n)|0),r}function zk(n){return n===1/0||n===-1/0}function Sv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+ls(t)|0}else e=ls(r);return e}function Wc(n){return!Ek(n)&&!Ik(n)}function Yc(n){return!zk(n)&&!qs(n)}function o_(n){var r=n.d3_1;return r===0?32+zv(n.e3_1)|0:zv(r)}function Ek(n){return n===1/0||n===-1/0}function Ik(n){return n!==n}function zv(n){var r=~(n|(-n|0));return 32-ls(r)|0}var sr;function aa(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function bt(n,r){return Ae(n,new y(0,-2147483648)).f3(Ae(r,new y(0,-2147483648)))}function Ck(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function Ak(n,r){var e=n,t=r;if(nr(t,new y(0,0))<0){var i;return bt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(nr(e,new y(0,0))>=0)return Cr(e,t);var a=Vn(Cr($c(e,1),t),1),s=Jr(e,Ar(a,t)),o,u=s,c=t;bt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,M(f));return v}function Tk(n,r){if(nr(n,new y(0,0))>=0)return Eu(n,r);var e=$c(n,1),t=Cr(e,M(r)),i=Vn(t,1),a=i,s=Ar(a,M(r)),o=Jr(n,s);if(nr(o,M(r))>=0){var u=o;o=Jr(u,M(r));var c=i;i=hr(c,M(1))}return Eu(i,r)+Eu(o,r)}function bi(n){var r;return n.toArray!==void 0?r=n.toArray():r=l_(n),r}function Os(n){return n<0&&Xx(),n}function qk(n,r,e,t,i){Nn.u4(t,i,n.length);var a=i-t|0;if(Nn.u4(e,e+a|0,r.length),Nu(r)&&Nu(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function l_(n){return Qx(n)}function On(n){var r=[n];return T.i4(r)}function ko(n){return o2([n])}function Zc(n){return v2([n])}function Ok(n){u_(n,J_())}function Uk(n,r){u_(n,r)}function u_(n,r){if(n.c1()<=1)return sr;var e=bi(n);f_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function c_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw U.v(b(r))}return Array(n)}function xo(n,r,e){n.fill(null,r,e)}function Ev(n,r){return a_(n,r)}function Iv(n,r){n[r]=null}var t1;function Ga(){return t1===l&&new td,t1}function jk(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function bu(n,r){return Nn.i6(r,n.c1()),r}function Nk(n,r){return Nn.j5(r,n.c1()),r}var so;function f_(n,r){if(v_()){var e=Lk(r);n.sort(e)}else h_(n,0,jc(n),r)}function Dk(n){if(v_()){var r=Pk;n.sort(r)}else h_(n,0,jc(n),J_())}function v_(){var n=so;if(n!=null)return n;so=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=Mk;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return so=!0,!0}function h_(n,r,e,t){var i=n.length,a=Array(i),s=i1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function i1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=i1(n,r,e,a,i),o=i1(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function Lk(n){return(r,e)=>n.compare(r,e)}function Pk(n,r){return Oe(n,r)}function Mk(n,r){return(n&3)-(r&3)|0}function Rk(n){n.v6_1=null}function d_(n,r){return Sk(lr(fn(r,1),3))}function p_(n,r){return ls(r)+1|0}function Cv(n){if(n.v8_1.f7_1!==n.x8_1)throw _o.u8("The backing map has been modified after this entry was obtained.")}function pa(n){return n.y6_1.length}function et(n){return n.b7_1.length}function Cl(n){n.f7_1=n.f7_1+1|0}function __(n,r){Bk(n,r)?m_(n,!0):$k(n,n.d7_1+r|0)}function Bk(n,r){var e=pa(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(pa(n)/4|0)}function $k(n,r){if(r<0)throw le.a9("too many elements");if(r>pa(n)){var e=Nn.b9(pa(n),r);n.y6_1=Ev(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:Ev(i,e),n.a7_1=wi(n.a7_1,e);var a=d_(ds,e);a>et(n)&&y_(n,a)}}function g_(n){var r=n.z6_1;if(r!=null)return r;var e=c_(pa(n));return n.z6_1=e,e}function Al(n,r){return r==null?0:lr(xr(r),-1640531527)>>>n.e7_1|0}function m_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}xo(n.y6_1,t,n.d7_1),i==null||xo(i,t,n.d7_1),n.d7_1=t}function y_(n,r){Cl(n),n.d7_1>n.g7_1&&m_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=p_(ds,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!Fk(n,t))throw kr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Fk(n,r){for(var e=Al(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=et(n)-1|0)}}function eo(n,r){for(var e=Al(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=et(n)-1|0)}}function Jk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(ln(n.z6_1)[e],r))return e}return-1}function w_(n,r){n.w7();r:for(;;)for(var e=Al(n,r),t=Et(lr(n.c7_1,2),et(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=pa(n)){__(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,Cl(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){y_(n,lr(et(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=et(n)-1|0)}}function b_(n,r){Iv(n.y6_1,r);var e=n.z6_1;e==null||Iv(e,r),Hk(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,Cl(n)}function Hk(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=et(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,sr;var o=Al(n,n.y6_1[s-1|0]);((o-e|0)&(et(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function Gk(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function Kk(n,r){var e=w_(n,r.k2()),t=g_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function Wk(n,r){if(r.i1())return!1;__(n,r.c1());for(var e=r.x(),t=!1;e.y();)Kk(n,e.z())&&(t=!0);return t}var ds,k_;function Yk(n,r){var e=new zc(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function Zk(n,r,e,t){var i=new zc(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function Vk(n){var r=n instanceof Sc?n:null,e=r==null?null:r.va();return e??n}function Xk(n){return new Promise(Qk(n))}function Qk(n){return(r,e)=>{var t=G_(),i=new yd(t,r,e);return _2(n,i),sr}}function Av(n){un(n,n.o6_1)}function ku(n){un(n,n.u_1)}function xu(n){un(n,n.z8_1)}function Su(n){un(n,n.j3_1)}function Tv(n){un(n,n.q_1)}function qv(n){un(n,n.rb_1)}function Ov(n){un(n,n.n3_1)}function Uv(n){un(n,n.t8_1)}function jv(n){un(n,n.xb_1)}function Nv(n){un(n,n.bc_1)}function zu(n){un(n,n.dc_1)}function Dv(n){un(n,n.lc_1)}function rx(n){un(n,n.r3_1)}function nx(n){un(n,n.v3_1)}function ex(n){un(n,n.z3_1)}function zi(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function x_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function oo(n,r){return new Uc(r)}function S_(n){return new Uc(n)}function tx(n){return Qr(mi(Is(n,63),$c(an(n),63)))}function ix(n){return nr(n,new y(0,0))<0?an(n):n}function ax(n){var r;if(qs(n))throw U.v("Cannot round NaN value.");return n>Zn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Zn(new y(0,-2147483648))?r=new y(0,-2147483648):r=Un(Math.round(n)),r}function sx(n){return n<0?-n|0:n}var So;function ox(){return So===l&&new Ec,So}function Lv(){return Tx(),z_}var z_;function lx(n){return n!=null}function ux(n){return i_(n)}function cx(n){return n!=null?typeof n=="boolean":!1}function fx(n){return n!=null?typeof n=="number":!1}function vx(n){return n!=null?typeof n=="number":!1}function hx(n){return n!=null?typeof n=="number":!1}function dx(n){return n instanceof y}function px(n){return n!=null?typeof n=="number":!1}function _x(n){return n!=null?typeof n=="number":!1}function gx(n){return n!=null?As(n):!1}function mx(n){return n!=null?typeof n=="string":!1}function yx(n){return n instanceof Error}function wx(n){return n!=null?rs(n):!1}function bx(n){return n!=null?ts(n):!1}function kx(n){return n!=null?ns(n):!1}function xx(n){return n!=null?es(n):!1}function Sx(n){return n!=null?is(n):!1}function zx(n){return typeof n=="bigint"}function Ex(n){return n!=null?ea(n):!1}function Ix(n){return n!=null?as(n):!1}function Cx(n){return n!=null?ss(n):!1}function Ax(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var a1;function br(){return a1===l&&new wd,a1}var Pv;function Tx(){Pv||(Pv=!0,z_=Array(0))}function Ur(n){if(n===String)return br().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Bu(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Bu(n);return e}function jr(n){var r;switch(typeof n){case"string":r=br().stringClass;break;case"number":var e;(n|0)===n?e=br().intClass:e=br().doubleClass,r=e;break;case"bigint":r=br().bigIntClass;break;case"boolean":r=br().booleanClass;break;case"function":var t=br();r=t.functionClass(n.length);break;default:var i;if(rs(n))i=br().booleanArrayClass;else if(ts(n))i=br().charArrayClass;else if(ns(n))i=br().byteArrayClass;else if(es(n))i=br().shortArrayClass;else if(is(n))i=br().intArrayClass;else if(ea(n))i=br().qd();else if(as(n))i=br().floatArrayClass;else if(ss(n))i=br().doubleArrayClass;else if(z(n,Ke))i=Ur(Ke);else if(As(n))i=br().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=br().anyClass;else if(a===Error)s=br().throwableClass;else{var o=a;s=Ur(o)}i=s}r=i;break}return r}function qx(n){n.lastIndex=0}function Mv(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function Ox(n){return 48<=n&&n<=57?!0:mn(n,128)<0?!1:wk(n)}function Vc(n){return kk(n)}function Eu(n,r){return wo(n,za(r))}function za(n){if(!(2<=n&&n<=36))throw U.v("radix "+n+" was not in valid range 2..36");return n}function Xc(n){var r=+n,e;return qs(r)&&!E_(n)||r===0&&ut(n)?e=null:e=r,e}function Ux(n,r){return n.toString(za(r))}function zo(n){var r=+n;return(qs(r)&&!E_(n)||r===0&&ut(n))&&Ca(n),r}function Tl(n,r){var e=mn(n,48)>=0&&mn(n,57)<=0?ie(n,48):mn(n,65)>=0&&mn(n,90)<=0?ie(n,65)+10|0:mn(n,97)>=0&&mn(n,122)<=0?ie(n,97)+10|0:mn(n,128)<0?-1:mn(n,65313)>=0&&mn(n,65338)<=0?ie(n,65313)+10|0:mn(n,65345)>=0&&mn(n,65370)<=0?ie(n,65345)+10|0:s_(n);return e>=r?-1:e}function jx(n){var r=jl(n),e;return r==null?Ca(n):e=r,e}function E_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var s1;function Eo(){return s1===l&&new bd,s1}function Nx(n,r,e){return()=>n.re(r,e)}function Dx(n){return n.z()}function Lx(n,r){return V(n,"",r,l,l,l,Px)}function I_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Le(i.index,n.lastIndex-1|0);return new Sd(a,i,t,r)}function Px(n){return n.jf_1}function Mx(n){return r=>n.d1(r)}function Rx(n,r){if(r<lt(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function ae(n,r,e){return n.substring(r,e)}function st(n,r){return n.substring(r)}function Bx(n){return Fx(n,0,n.length)}function Yn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(Eo().ke(r),t?"gui":"gu"),a=Eo().le(e);return n.replace(i,a)}function Se(n,r,e){return e=e===l?!1:e,e?Qc(n,0,r,0,r.length,e):n.startsWith(r,0)}function Qc(n,r,e,t,i,a){return a=a===l?!1:a,Nl(n,r,e,t,i,a)}function $x(n,r,e){return e=e===l?!1:e,e?Qc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Rv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!Ul(s,o,e))return!1}while(t<i);return!0}function Fx(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw U.v(b(i))}for(var a=r,s=nn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(We(u));else if(u>>5===-2){var c=Jx(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(We(c)),a=a+1|0)}else if(u>>4===-2){var f=Hx(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(We(f)),a=a+2|0)}else if(u>>3===-2){var v=Gx(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(We(h)),s.da(We(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Jx(n,r,e,t,i){if(!(r&30)||e>=t)return In(0);var a=n[e];return(a&192)!==128?In(0):r<<6^a^3968}function Hx(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return In(0)}else if((a&192)!==128)return In(0)}else if((a&224)!==160)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];return(s&192)!==128?In(1):r<<12^a<<6^s^-123008}function Gx(n,r,e,t,i){if(e>=t)return In(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return In(0)}else if((r&15)>4)return In(0)}else if((a&240)<=128)return In(0);if((a&192)!==128)return In(0);if((e+1|0)===t)return In(1);var s=n[e+1|0];if((s&192)!==128)return In(1);if((e+2|0)===t)return In(2);var o=n[e+2|0];return(o&192)!==128?In(2):r<<18^a<<12^s<<6^o^3678080}function In(n,r,e){return-n|0}var Bv;function Ea(){if(Bv)return sr;Bv=!0,C_=new mt("NANOSECONDS",0,1),new mt("MICROSECONDS",1,1e3),A_=new mt("MILLISECONDS",2,1e6),T_=new mt("SECONDS",3,1e9),q_=new mt("MINUTES",4,6e10),O_=new mt("HOURS",5,36e11),U_=new mt("DAYS",6,864e11)}var C_,A_,T_,q_,O_,U_;function j_(n,r,e){var t=Oe(r.cg_1,e.cg_1),i;if(t>0){var a=Un(r.cg_1/e.cg_1),s=Ar(n,a);i=ir(Cr(s,a),n)?s:nr(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Cr(n,Un(e.cg_1/r.cg_1)):i=n;return i}function $v(n,r,e){var t=Oe(r.cg_1,e.cg_1);return t>0?Ar(n,Un(r.cg_1/e.cg_1)):t<0?Cr(n,Un(e.cg_1/r.cg_1)):n}function Io(){return Ea(),C_}function Co(){return Ea(),A_}function rf(){return Ea(),T_}function N_(){return Ea(),q_}function D_(){return Ea(),O_}function nf(){return Ea(),U_}function Ka(n,r,e,t,i){var a=e;t<4&&(a=Fv(n.e3_1,r,a,t,Et(i,4))),i>4&&Fv(n.d3_1,r,a,fn(t-4|0,0),i-4|0)}function Kx(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Z(o);if(!(u>>>8|0)&&gn()[u]>=0){s=gn()[u];break r}Kn(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";Kn(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Z(w);if(!(x>>>8|0)&&gn()[x]>=0){m=gn()[x];break r}Kn(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Kn(n,S,13)}var E=0,I=14;if(I<18)do{var A=I;I=I+1|0;var q=E<<4,j;r:{var F=K(n,A),O=Z(F);if(!(O>>>8|0)&&gn()[O]>=0){j=gn()[O];break r}Kn(n,r,A)}E=q|j}while(I<18);var L=E;if(K(n,18)!==45){var H="'-' (hyphen)";Kn(n,H,18)}var B=0,$=19;if($<23)do{var R=$;$=$+1|0;var X=B<<4,J;r:{var tr=K(n,R),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){J=gn()[Y];break r}Kn(n,r,R)}B=X|J}while($<23);var G=B;if(K(n,23)!==45){var ar="'-' (hyphen)";Kn(n,ar,23)}var ur=0,Q=24;if(Q<28)do{var Tr=Q;Q=Q+1|0;var zr=ur<<4,gr;r:{var Er=K(n,Tr),wr=Z(Er);if(!(wr>>>8|0)&&gn()[wr]>=0){gr=gn()[wr];break r}Kn(n,r,Tr)}ur=zr|gr}while(Q<28);var Ir=ur,Pr=0,dr=28;if(dr<36)do{var Zr=dr;dr=dr+1|0;var sn=Pr<<4,Hr;r:{var pr=K(n,Zr),$r=Z(pr);if(!($r>>>8|0)&&gn()[$r]>=0){Hr=gn()[$r];break r}Kn(n,r,Zr)}Pr=sn|Hr}while(dr<36);var Gr=Pr,en=k<<16|L,Rr=new y(en,c),Kr=G<<16|Ir,pn=new y(Gr,Kr);return Ds().gg(Rr,pn)}function Wx(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Z(s);if(!(o>>>8|0)&&gn()[o]>=0){a=gn()[o];break r}var u="a hexadecimal digit";Kn(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Z(m);if(!(w>>>8|0)&&gn()[w]>=0){_=gn()[w];break r}var x="a hexadecimal digit";Kn(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),E=0,I=16;if(I<24)do{var A=I;I=I+1|0;var q=E<<4,j;r:{var F=K(n,A),O=Z(F);if(!(O>>>8|0)&&gn()[O]>=0){j=gn()[O];break r}var L="a hexadecimal digit";Kn(n,L,A)}E=q|j}while(I<24);var H=E,B=0,$=24;if($<32)do{var R=$;$=$+1|0;var X=B<<4,J;r:{var tr=K(n,R),Y=Z(tr);if(!(Y>>>8|0)&&gn()[Y]>=0){J=gn()[Y];break r}var G="a hexadecimal digit";Kn(n,G,R)}B=X|J}while($<32);var ar=B,ur=new y(ar,H);return Ds().gg(S,ur)}function Fv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=b2()[f],h=a;a=h+1|0,r[h]=Ln(v>>8);var d=a;a=d+1|0,r[d]=Ln(v)}while(u!==o);return a}function Yx(n){return r=>r===n?"(this Collection)":ce(r)}var Nn;function Zx(n,r){return Jv(n,r.k2())+"="+Jv(n,r.l2())}function Jv(n,r){return r===n?"(this Map)":ce(r)}function Hv(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function Vx(n){return r=>Zx(n,r)}var ps;function Us(n){return n.c1()-1|0}function Xx(){throw Du.zb("Index overflow has happened.")}function Qx(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function mr(){return L_()}function ot(n){return sb(n)}function kt(n){return n.length>0?Il(n):mr()}var o1;function L_(){return o1===l&&new Ud,o1}var _s;function P_(n){switch(n.c1()){case 0:return mr();case 1:return On(n.d1(0));default:return n}}function r2(n){return Le(0,n.c1()-1|0)}function n2(n){for(var r=T.m(),e=n.x();e.y();){var t=e.z();Ia(r,t)}return r}function Vr(n,r){var e;return z(n,W)?e=n.c1():e=r,e}function e2(n){var r;return z(n,W)?r=n.c1():r=null,r}function t2(n,r){if(z(n,Ld))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw qr.r("Key "+ce(r)+" is missing in the map.");e=t;break r}return e}function Nr(){var n=a2();return z(n,yn)?n:g()}function ql(n){return n.length>0?R_(n,vr.ha(n.length)):Nr()}function ke(n,r){return t2(n,r)}function M_(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=Nr();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=ko(e);break;default:r=Kv(n,vr.ha(n.c1()));break}return r}return B_(Kv(n,vr.q4()))}function Gv(n){return R_(n,vr.ha(n.length))}function tt(n,r){var e;if(n.i1())e=ko(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function ef(n){return vr.ia(n)}function i2(n,r){var e=ef(n);return e.t2(r),B_(e)}var l1;function a2(){return l1===l&&new Pd,l1}function R_(n,r){return $_(r,n),r}function Kv(n,r){return s2(r,n),r}function B_(n){var r;switch(n.c1()){case 0:r=Nr();break;case 1:r=n;break;default:r=n;break}return r}function $_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function s2(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function o2(n){var r=us.l7(n.length);return $_(r,n),r}function Ia(n,r){if(z(r,W))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function Wv(n){var r;if(n.i1())throw qr.r("List is empty.");return r=n.e5(Us(n)),r}function tf(n,r){var e;return n==null?e=Ol:e=new Ac(c2(n),r),e}function l2(n){return cb(n)}function u2(n,r){return new Ac(n,r)}function F_(){return Ol}var Ol;function Yv(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(ln(n.sh_1)),n.th_1=n.sh_1==null?0:1}function c2(n){return()=>n}function ei(n){return zp(n)}function Ot(){return c1()}var u1;function c1(){return u1===l&&new Hd,u1}function f2(n){switch(n.c1()){case 0:return Ot();case 1:return Zc(n.x().z());default:return n}}function v2(n){return Ep(n,pi.b1(n.length))}function h2(n){if(!(n.length>0)){var r="Failed requirement.";throw U.v(b(r))}var e=p2(n);return new Kd(e)}function Ut(n,r){return n==null?r==null?0:-1:r==null?1:Oe(n!=null&&Vu(n)?n:g(),r)}function J_(){var n=H_;return z(n,dn)?n:g()}function d2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=Ut(s,o);if(u!==0)return u}return 0}var H_;function p2(n){return(r,e)=>d2(r,e,n)}function _2(n,r){var e=Vk(Yk(n,r)),t=sr;e.ma(t)}var f1,v1;function G_(){return v1===l&&new Yd,v1}function gs(){return m2()}var Zv;function g2(){if(Zv)return sr;Zv=!0,K_=new Zd("COROUTINE_SUSPENDED",0)}var K_;function m2(){return g2(),K_}function y2(n){return Vd.di(n)}function w2(n,r,e){var t;if(e>0)t=n>=r?r:r-Vv(r,n,e)|0;else if(e<0)t=n<=r?r:r+Vv(n,r,-e|0)|0;else throw U.v("Step is zero.");return t}function Vv(n,r,e){return Iu(Iu(n,e)-Iu(r,e)|0,e)}function Iu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var h1;function W_(){return h1===l&&new Xd,h1}var af;function Y_(n,r,e){e!=null?n.g(e(r)):r==null||Ts(r)?n.g(r):r instanceof Sn?n.da(r.x1_1):n.g(b(r))}function Ul(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Mv(n),i=Mv(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function b2(){return X_(),Z_}var Z_;function k2(){return X_(),V_}var V_;function gn(){return k2()}var Xv;function X_(){if(!Xv){Xv=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Z(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Z(a),n=n+1|0}Z_=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Z(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Z(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=rr(m,w);w=w+1|0;var k=_;_=k+1|0,d[Z(x)]=k}for(var S=0,E="0123456789ABCDEF",I=0;I<C(E);){var A=rr(E,I);I=I+1|0;var q=S;S=q+1|0,d[Z(A)]=q}V_=d;for(var j=0,F=gi(256);j<256;)F[j]=new y(-1,-1),j=j+1|0;for(var O=0,L="0123456789abcdef",H=0;H<C(L);){var B=rr(L,H);H=H+1|0;var $=O;O=$+1|0,F[Z(B)]=M($)}for(var R=0,X="0123456789ABCDEF",J=0;J<C(X);){var tr=rr(X,J);J=J+1|0;var Y=R;R=Y+1|0,F[Z(tr)]=M(Y)}}}function x2(n){var r;return C(n)===0?r=I2:r=C2(n),r}function S2(n){return z2(n,"")}function z2(n,r){r=r===l?"":r;for(var e=e0(n),t=T.m(),i=e.x();i.y();){var a=i.z();ut(a)||t.n(a)}for(var s=T.g1(Vr(t,10)),o=t.x();o.y();){var u=o.z(),c=E2(u);s.n(c)}for(var f=xb(s),v=f??0,h=n.length+lr(r.length,e.c1())|0,d=x2(r),_=Us(e),m=T.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var E=Os(S),I;if((E===0||E===_)&&ut(k))I=null;else{var A=Ub(k,v),q;A==null?q=null:q=d(A);var j=q;I=j??k}var F=I;F==null||m.n(F)}return Cp(m,nn.fa(h),`
`).toString()}function E2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=rr(n,i);if(!Vc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function I2(n){return n}function C2(n){return r=>n+r}function jl(n){return A2(n,10)}function A2(n,r){za(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=Tl(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=lr(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function Ca(n){throw Lu.nc("Invalid number format: '"+n+"'")}function T2(n){return q2(n,10)}function q2(n,r){za(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(mn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Cr(o,M(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Tl(K(n,h),r);if(d<0)return null;if(nr(f,c)<0)if(ir(c,u)){var _=a;if(c=Cr(_,M(r)),nr(f,c)<0)return null}else return null;var m=f;f=Ar(m,M(r));var w=f,x=a,k=hr(x,M(d));if(nr(w,k)<0)return null;var S=f;f=Jr(S,M(d))}while(v<e);return i?f:an(f)}function Q_(n,r){var e=Ts(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=rr(e,s),u=ub(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=jn(e,t,i+1|0);return b(c)}function Xi(n,r){return O2(n,r)?ae(n,0,n.length-C(r)|0):n}function js(n,r,e){e=e===l?n:e;var t=U2(n,r);return t===-1?e:ae(n,t+1|0,n.length)}function ms(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=Ao(n,r,l,e)>=0:t=sf(n,r,0,C(n),e)>=0,t}function r0(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return j2(n,yr(r[0]),e,t);for(var i=Ab(N2(n,r,l,e,t)),a=T.g1(Vr(i,10)),s=i.x();s.y();){var o=s.z(),u=D2(n,o);a.n(u)}return a}function n0(n,r){return L2(n,r)?st(n,C(r)):n}function e0(n){return Op(P2(n))}function t0(n,r,e){return e=e===l?32:e,b(M2(Ts(n)?n:g(),r,e))}function lt(n){return C(n)-1|0}function ut(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Vc(t)){r=!1;break r}}r=!0}return r}function O2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?$x(n,r):Nl(n,C(n)-C(r)|0,r,0,C(r),e)}function U2(n,r,e,t){e=e===l?lt(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ba([r]);i=R2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function Ao(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=sf(n,r,e,C(n),t):i=n.indexOf(r,e),i}function sf(n,r,e,t,i,a){a=a===l?!1:a;var s=a?Sb(Et(e,lt(n)),fn(t,0)):Le(fn(e,0),Et(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,Qc(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,Nl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function i0(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=rr(n,i),s=Vc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return jn(n,r,e+1|0)}function j2(n,r,e,t){of(t);var i=0,a=Ao(n,r,i,e);if(a===-1||t===1)return On(b(n));var s=t>0,o=T.g1(s?Et(t,10):10);r:do{var u=i,c=a,f=b(jn(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=Ao(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(jn(n,v,h));return o.n(d),o}function N2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,of(i),new ep(n,e,i,H2(r,t))}function D2(n,r){return b(jn(n,r.df(),r.ef()+1|0))}function L2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Se(n,r):Nl(n,0,r,0,C(r),e)}function P2(n){return new ip(n)}function M2(n,r,e){if(e=e===l?32:e,r<0)throw U.v("Desired length "+r+" is less than zero.");if(r<=C(n))return jn(n,0,C(n));var t=nn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function Nl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!Ul(rr(n,r+o|0),rr(e,t+o|0),a))return!1}while(s<i);return!0}function R2(n,r,e,t){e=e===l?lt(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Ip(r),s=yr(a);return n.lastIndexOf(s,e)}var o=Et(e,lt(n));if(0<=o)do{var u=o;o=o+-1|0;var c=rr(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Ul(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function of(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw U.v(b(r))}return sr}function Qv(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Le(n.mi_1,lt(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Le(n.mi_1,lt(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=Pc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function a0(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Ip(r),s=yr(a);return n.indexOf(s,e)}var o=fn(e,0),u=lt(n);if(o<=u)do{var c=o;o=o+1|0;var f=rr(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,Ul(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function Dl(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=ba([r]);i=a0(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function B2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function $2(n,r,e){e=e===l?n:e;var t=Dl(n,r);return t===-1?e:ae(n,0,t)}function F2(n,r,e){e=e===l?n:e;var t=Dl(n,r);return t===-1?e:ae(n,t+1|0,n.length)}function J2(n,r,e,t){e=e===l?lt(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=sf(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function H2(n,r){return(e,t)=>{var i=a0(e,n,t,r);return i<0?null:N(i,1)}}function wn(n){return Is(n,1)}function lf(n){return(Qr(n)&1)===0}function s0(n){return(Qr(n)&1)===1}function G2(n){return lf(n)?Io():Co()}var d1;function Yr(){return d1===l&&new ap,d1}function o0(n){var r=an(wn(n)),e=Qr(n)&1;return iS(r,e)}function K2(n,r){var e,t=Qr(n)&1;if(t===(Qr(r)&1)){var i;if(lf(n))i=aS(hr(wn(n),wn(r)));else{var a=uf(wn(n),wn(r)),s;if(ir(a,new y(-16162,2147483647)))throw U.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=Ct(a):s=sS(a),i=s}e=i}else s0(n)?e=rh(n,wn(n),wn(r)):e=rh(n,wn(r),wn(n));return e}function rh(n,r,e){var t=d0(e),i=uf(r,t),a;if(nr(new y(1108857478,-1074),i)<=0&&nr(i,new y(-1108857478,1073))<=0){var s=Jr(e,To(t));a=Ml(hr(To(i),s))}else a=Ct(i);return a}function Ll(n){return nr(n,new y(0,0))<0}function Ns(n){return ir(n,Yr().fj_1)||ir(n,Yr().gj_1)}function l0(n){return Ll(n)?o0(n):n}function u0(n,r){var e=Ae(n,r);if(nr(e,new y(0,0))<0||!(Qr(e)&1))return n.f3(r);var t=Qr(n)&1,i=t-(Qr(r)&1)|0;return Ll(n)?-i|0:i}function W2(n,r){return u0(n.kj_1,r instanceof be?r.kj_1:g())}function Y2(n){var r;if(Ns(n))r=0;else{var e=h0(n),t=It(e,M(24));r=Qr(t)}return r}function c0(n){var r;if(Ns(n))r=0;else{var e=V2(n),t=It(e,M(60));r=Qr(t)}return r}function f0(n){var r;if(Ns(n))r=0;else{var e=X2(n),t=It(e,M(60));r=Qr(t)}return r}function v0(n){var r;if(Ns(n))r=0;else if(s0(n)){var e=wn(n),t=It(e,M(1e3));r=Qr(To(t))}else{var i=wn(n),a=1e9,s=It(i,M(a));r=Qr(s)}return r}function Pl(n,r){var e=n;return ir(e,Yr().fj_1)?new y(-1,2147483647):ir(e,Yr().gj_1)?new y(0,-2147483648):j_(wn(n),G2(n),r)}function Z2(n){return Pl(n,nf())}function h0(n){return Pl(n,D_())}function V2(n){return Pl(n,N_())}function X2(n){return Pl(n,rf())}function Q2(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Yr().fj_1))e="Infinity";else if(ir(r,Yr().gj_1))e="-Infinity";else{var t=Ll(n),i=nn.f();t&&i.da(45);var a=l0(n),s=Z2(a),o=Y2(a),u=c0(a),c=f0(a),f=v0(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?lo(n,i,c,f,9,"s",!1):f>=1e6?lo(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?lo(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function lo(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=t0(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,rr(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function rS(n){var r=nn.f();Ll(n)&&r.da(45),r.ca("PT");var e=l0(n),t=h0(e),i=c0(e),a=f0(e),s=v0(e),o=t;Ns(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&lo(n,r,a,s,9,"S",!0),r.toString()}function nS(n){return n.hashCode()}function eS(n,r){if(!(r instanceof be))return!1;var e=r.kj_1;return!!ir(n,e)}function Ct(n){var r=Yr(),e=Vn(n,1),t=hr(e,M(1));return r.jj(t)}function nh(n,r){var e=$v(new y(-387905,1073741823),Io(),r),t;if(nr(an(e),n)<=0&&nr(n,e)<=0)t=Ml($v(n,r,Io()));else if(r.y2(Co())>=0){var i=tx(n),a=new y(0,-2147483648),s=hr(a,M(1));t=Ct(Ar(Un(i),_1(ix(Eb(n,s)),r)))}else t=Ct(Mc(j_(n,r,Co()),new y(1,-1073741824),new y(-1,1073741823)));return t}function tS(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw U.v(t);return Yr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw U.v(u);return Yr().ij_1}else if(K(n,i)===80)o=oS(n,i+1|0,e);else{if(e)throw U.v("");return Yr().ij_1}var c=o;return s&&!P(new be(c),new be(Yr().ij_1))?o0(c):c}function iS(n,r){var e=Yr(),t=Vn(n,1),i=hr(t,M(r));return e.jj(i)}function aS(n){var r;return nr(new y(387905,-1073741824),n)<=0&&nr(n,new y(-387905,1073741823))<=0?r=Ml(n):r=Ct(d0(n)),r}function uf(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;nr(new y(1,-1073741824),r)<0&&nr(r,new y(-1,1073741823))<0?i=!0:i=nr(Ae(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Mc(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function sS(n){var r;return nr(new y(1108857478,-1074),n)<=0&&nr(n,new y(-1108857478,1073))<=0?r=Ml(To(n)):r=Ct(Mc(n,new y(1,-1073741824),new y(-1,1073741823))),r}function d0(n){return Cr(n,M(1e6))}function To(n){return Ar(n,M(1e6))}function Ml(n){return Yr().jj(Vn(n,1))}function oS(n,r,e){var t=r;if(t===n.length){if(e)throw U.v("");return Yr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw U.v("");return Yr().ij_1}s=!0;continue r}var f=t,v,h=p0().nj_1,d=t,_;n:{var m=1,w=d;if(uS(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var E=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=ie(I,48);if(nr(E,eh(h))>0||ir(E,eh(h))&&nr(M(A),cS(h))>0){var q=w;t:for(;;){var j;if(q<n.length){var F=K(n,q);j=48<=F?F<=57:!1}else j=!1;if(!j)break t;q=q+1|0}w=q;var O=w,L=m;if(t=O,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Yr().ij_1}v=L,_=lS(h);break n}var H=E,B=hr(Vn(H,3),Vn(H,1));E=hr(B,M(A)),w=w+1|0}var $=w,R=m;if(t=$,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Yr().ij_1}v=R,_=E}var X=_;if(K(n,t)===46){t=t+1|0;var J=t,tr=J,Y=tr,G=Y+6|0,ar=n.length,ur=Math.min(G,ar),Q=0;n:for(;Y<ur;){var Tr=K(n,Y);if(!(48<=Tr&&Tr<=57))break n;var zr=Q;Q=((zr<<3)+(zr<<1)|0)+ie(Tr,48)|0,Y=Y+1|0}var gr=6-(Y-tr|0)|0,Er=0;if(Er<gr)do{Er=Er+1|0;var wr=Q;Q=(wr<<3)+(wr<<1)|0}while(Er<gr);J=Y;var Ir=Q,Pr=J,dr=Pr,Zr=dr+9|0,sn=n.length,Hr=Math.min(Zr,sn),pr=0;n:for(;dr<Hr;){var $r=K(n,dr);if(!(48<=$r&&$r<=57))break n;var Gr=pr;pr=((Gr<<3)+(Gr<<1)|0)+ie($r,48)|0,dr=dr+1|0}var en=9-(dr-Pr|0)|0,Rr=0;if(Rr<en)do{Rr=Rr+1|0;var Kr=pr;pr=(Kr<<3)+(Kr<<1)|0}while(Rr<en);J=dr;var pn=pr,vn=J;n:for(;;){var _n;if(vn<n.length){var ee=K(n,vn);_n=48<=ee?ee<=57:!1}else _n=!1;if(!_n)break n;vn=vn+1|0}J=vn;var Jn=J;if(Jn===t||Jn===n.length||K(n,Jn)!==83){if(e)throw U.v("");return Yr().ij_1}t=Jn;var Hn=M(Ir),_e=1e9,Ue=Ar(Hn,M(_e)),ge=hr(Ue,M(pn));a=Ar(Un(v),fS(ge,rf()))}var $e=vS(n,t),Fe;if($e==null){var Ce="Unknown duration unit short name: "+yr(K(n,t));if(e)throw U.v(Ce);return Yr().ij_1}else Fe=$e;var Gn=Fe;if(o!=null&&o.y2(Gn)<=0){var Tn="Unexpected order of duration components";if(e)throw U.v(Tn);return Yr().ij_1}if(o=Gn,Gn.equals(nf())){if(s){if(e)throw U.v("");return Yr().ij_1}i=Ar(Un(v),_1(X,Gn))}else{if(!s){if(e)throw U.v("");return Yr().ij_1}var xn=uf(i,Ar(Un(v),_1(X,Gn)));if(ir(xn,new y(-16162,2147483647))){if(e)throw U.v("");return Yr().ij_1}i=xn}t=t+1|0}return K2(nh(i,Co()),nh(a,Io()))}var p1;function p0(){return p1===l&&new sp,p1}function lS(n){return n.pj_1}function uS(n){return n.qj_1}function eh(n){return n.rj_1}function cS(n){return n.sj_1}function fS(n,r){var e=hS(r),t=Zn(n)*e;return ax(t)}function vS(n,r){var e=K(n,r);return e===68?nf():e===72?D_():e===77?N_():e===83?rf():null}function hS(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw kr.o3(b(e))}return r}function _1(n,r){return dS(n,pS(r))}function dS(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=gu(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=gu(n,new y(-1,1073741823));else{var t=(128-Sv(n)|0)-Sv(r)|0;e=t<63?Ar(n,r):t>63?new y(-1,1073741823):gu(Ar(n,r),new y(-1,1073741823))}return e}function pS(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw kr.o3(b(e))}return r}function uo(){return $n(),_0}var _0;function _S(){return $n(),g0}var g0;function gS(){return $n(),m0}var m0;function mS(){return $n(),y0}var y0,g1;function xt(){return g1===l&&new op,g1}function yS(n){$n();var r=nn.f(),e=w0.ck(n),t=e.dk_1;if(sx(t)<1e3){var i=nn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Wa(r,r,e.ek_1),r.da(45),Wa(r,r,e.fk_1),r.da(84),Wa(r,r,e.gk_1),r.da(58),Wa(r,r,e.hk_1),r.da(58),Wa(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%uo()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/uo()[a]|0;r.ca(st((s+uo()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function wS(n){$n();var r=n,e=0;if(C(r)===0)return new Tc("An empty string is not a valid Instant",n);var t=rr(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=rr(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+ie(rr(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return on(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&mn(rr(r,s),50)>=0)return on(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return on(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return on(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return on(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return on(n,"The input string is too short");var d=e,_=Wi(n,"'-'",d,kS);if(_!=null)return _;var m=e+3|0,w=Wi(n,"'-'",m,xS);if(w!=null)return w;var x=e+6|0,k=Wi(n,"'T' or 't'",x,SS);if(k!=null)return k;var S=e+9|0,E=Wi(n,"':'",S,zS);if(E!=null)return E;var I=e+12|0,A=Wi(n,"':'",I,ES);if(A!=null)return A;for(var q=_S(),j=0,F=q.length;j<F;){var O=q[j];j=j+1|0;var L=e+O|0,H=Wi(n,"an ASCII digit",L,IS);if(H!=null)return H}var B=_t(r,e+1|0),$=_t(r,e+4|0),R=_t(r,e+7|0),X=_t(r,e+10|0),J=_t(r,e+13|0),tr;if(rr(r,e+15|0)===46){var Y=e+16|0;e=Y;var G=0;r:for(;;){var ar;if(e<C(r)){var ur=rr(r,e);ar=48<=ur?ur<=57:!1}else ar=!1;if(!ar)break r;G=lr(G,10)+ie(rr(r,e),48)|0,e=e+1|0}var Q=e-Y|0,Tr;if(1<=Q&&Q<=9)Tr=lr(G,uo()[9-Q|0]);else return on(n,"1..9 digits are supported for the fraction of the second, got "+Q+" digits");tr=Tr}else e=e+15|0,tr=0;var zr=tr;if(e>=C(r))return on(n,"The UTC offset at the end of the string is missing");var gr=rr(r,e),Er;if(gr===122||gr===90){var wr;if(C(r)===(e+1|0))wr=0;else return on(n,"Extra text after the instant at position "+(e+1|0));Er=wr}else if(gr===45||gr===43){var Ir=C(r)-e|0;if(Ir>9){var Pr=e,dr=C(r),Zr=b(jn(r,Pr,dr));return on(n,'The UTC offset string "'+cf(Zr,16)+'" is too long')}if(Ir%3|0){var sn=e,Hr=C(r),pr=b(jn(r,sn,Hr));return on(n,'Invalid UTC offset string "'+pr+'"')}var $r=gS(),Gr=0,en=$r.length;r:for(;Gr<en;){var Rr=$r[Gr];if(Gr=Gr+1|0,(e+Rr|0)>=C(r))break r;if(rr(r,e+Rr|0)!==58)return on(n,"Expected ':' at index "+(e+Rr|0)+", got '"+yr(rr(r,e+Rr|0))+"'")}var Kr=mS(),pn=0,vn=Kr.length;r:for(;pn<vn;){var _n=Kr[pn];if(pn=pn+1|0,(e+_n|0)>=C(r))break r;var ee=rr(r,e+_n|0);if(!(48<=ee&&ee<=57))return on(n,"Expected an ASCII digit at index "+(e+_n|0)+", got '"+yr(rr(r,e+_n|0))+"'")}var Jn=_t(r,e+1|0),Hn;Ir>3?Hn=_t(r,e+4|0):Hn=0;var _e=Hn,Ue;Ir>6?Ue=_t(r,e+7|0):Ue=0;var ge=Ue;if(_e>59)return on(n,"Expected offset-minute-of-hour in 0..59, got "+_e);if(ge>59)return on(n,"Expected offset-second-of-minute in 0..59, got "+ge);if(Jn>17&&!(Jn===18&&_e===0&&ge===0)){var $e=e,Fe=C(r),Ce=b(jn(r,$e,Fe));return on(n,"Expected an offset in -18:00..+18:00, got "+Ce)}Er=lr((lr(Jn,3600)+lr(_e,60)|0)+ge|0,gr===45?-1:1)}else return on(n,"Expected the UTC offset at position "+e+", got '"+yr(gr)+"'");var Gn=Er;if(!(1<=B&&B<=12))return on(n,"Expected a month number in 1..12, got "+B);if(!(1<=$&&$<=bS(B,th(h))))return on(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+$);if(R>23)return on(n,"Expected hour in 0..23, got "+R);if(X>59)return on(n,"Expected minute-of-hour in 0..59, got "+X);if(J>59)return on(n,"Expected second-of-minute in 0..59, got "+J);var Tn=new qc(h,B,$,R,X,J,zr),xn=M(Tn.dk_1),En=Ar(Un(365),xn);if(nr(xn,new y(0,0))>=0){var je=En,Ui=hr(xn,M(3)),Ne=Cr(Ui,M(4)),vt=hr(xn,M(99)),ji=Cr(vt,M(100)),Ni=Jr(Ne,ji),ht=hr(xn,M(399)),Nt=Cr(ht,M(400));En=hr(je,hr(Ni,Nt))}else{var Ma=En,Ra=Cr(xn,M(-4)),Ba=Cr(xn,M(-100)),$a=Jr(Ra,Ba),Di=Cr(xn,M(-400));En=Jr(Ma,hr($a,Di))}var Dt=En,dt=(lr(367,Tn.ek_1)-362|0)/12|0;En=hr(Dt,M(dt));var Li=En,Pi=Tn.fk_1-1|0;if(En=hr(Li,M(Pi)),Tn.ek_1>2){var Lt=En;if(En=Jr(Lt,Ve()),!th(Tn.dk_1)){var Pt=En;En=Jr(Pt,Ve())}}var pt=En,Mt=Jr(pt,M(719528)),Rt=(lr(Tn.gk_1,3600)+lr(Tn.hk_1,60)|0)+Tn.ik_1|0,Mi=Ar(Mt,M(86400)),me=hr(Mi,M(Rt)),Bt=Jr(me,M(Gn)),Fa=Tn.jk_1;return new lp(Bt,Fa)}var w0;function cf(n,r){$n();var e;return C(n)<=r?e=b(n):e=b(jn(n,0,r))+"...",e}function bS(n,r){switch($n(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function th(n){return $n(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Wa(n,r,e){e<10&&n.da(48),r.ae(e)}function on(n,r){return new Tc(r+' when parsing an Instant from "'+cf(n,64)+'"',n)}function Wi(n,r,e,t){var i=rr(n,e),a;return t(new Sn(i))?a=null:a=on(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function kS(n){return $n(),P(n,new Sn(45))}function xS(n){return $n(),P(n,new Sn(45))}function SS(n){return $n(),P(n,new Sn(84))||P(n,new Sn(116))}function zS(n){return $n(),P(n,new Sn(58))}function ES(n){return $n(),P(n,new Sn(58))}function IS(n){$n();var r=n.x1_1;return 48<=r?r<=57:!1}function _t(n,r){return lr(ie(rr(n,r),48),10)+ie(rr(n,r+1|0),48)|0}var ih;function $n(){ih||(ih=!0,_0=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),g0=new Int32Array([1,2,4,5,7,8,10,11,13,14]),m0=new Int32Array([3,6]),y0=new Int32Array([1,2,4,5,7,8]))}function Cu(){return k0(),b0}var b0;function CS(n,r){return k0(),new vp(n.uk_1,r).zk()}var ah;function k0(){if(!ah){ah=!0;var n=gs();b0=n}}var sh;function AS(){if(sh)return sr;sh=!0,x0=new hp("PUBLICATION",1)}var x0,co;function fo(){return AS(),x0}function TS(n){var r=n;return!(r instanceof qt)}function S0(n){var r;return n instanceof qt?r=n.el_1:r=null,r}function qS(n){var r;return n instanceof qt?r=n.toString():r="Success("+ce(n)+")",r}function OS(n){return n==null?0:xr(n)}function US(n,r){if(!(r instanceof ti))return!1;var e=r.fl_1;return!!P(n,e)}function jS(n){var r=n;if(r instanceof qt)throw n.el_1}function z0(n){return new qt(n)}function N(n,r){return new zl(n,r)}var m1;function Ds(){return m1===l&&new pp,m1}function NS(n,r){return n.length<=r?n:ae(n,0,r)+"..."}function Kn(n,r,e){throw U.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var y1;function Rl(){return y1===l&&new _p,y1}function E0(n,r){var e=n&255,t=r&255;return Oe(e,t)}function DS(n,r){return E0(n.pl_1,r instanceof Pe?r.pl_1:g())}function w1(n){return(n&255).toString()}function LS(n,r){return!(!(r instanceof Pe)||n!==r.pl_1)}function oh(n){return new Int8Array(n)}function PS(n,r){var e=n[r];return e}function MS(n,r,e){var t=n;t[r]=e}function fi(n){return n.length}function RS(n){return new gp(n)}function I0(n,r){var e=n,t=r;return Kw(e,t)}function BS(n,r){return r instanceof Pe?I0(n.ul_1,r instanceof Pe?r.pl_1:g()):!1}function $S(n){return n.length===0}function FS(n){return"UByteArray(storage="+b(n)+")"}function JS(n){return xr(n)}function HS(n,r){if(!(r instanceof ai))return!1;var e=r.ul_1;return!!P(n,e)}var b1;function Bl(){return b1===l&&new mp,b1}function C0(n,r){return aa(n,r)}function GS(n,r){return C0(n.am_1,r instanceof Xn?r.am_1:g())}function k1(n){return(n>>>0).toString()}function KS(n,r){return!(!(r instanceof Xn)||n!==r.am_1)}function lh(n){return new Int32Array(n)}function WS(n,r){var e=n[r];return e}function YS(n,r,e){var t=n;t[r]=e}function vi(n){return n.length}function ZS(n){return new yp(n)}function A0(n,r){var e=n,t=r;return Ww(e,t)}function VS(n,r){return r instanceof Xn?A0(n.fm_1,r instanceof Xn?r.am_1:g()):!1}function XS(n){return n.length===0}function QS(n){return"UIntArray(storage="+b(n)+")"}function rz(n){return xr(n)}function nz(n,r){if(!(r instanceof si))return!1;var e=r.fm_1;return!!P(n,e)}var x1;function Ls(){return x1===l&&new wp,x1}function T0(n,r){return bt(n,r)}function ez(n,r){return T0(n.lm_1,r instanceof Qn?r.lm_1:g())}function S1(n){var r=n;return Tk(r,10)}function tz(n){return n.hashCode()}function iz(n,r){if(!(r instanceof Qn))return!1;var e=r.lm_1;return!!ir(n,e)}function uh(n){return gi(n)}function az(n,r){var e=n[r];return e}function sz(n,r,e){var t=n;t[r]=e}function hi(n){return n.length}function oz(n){return new bp(n)}function q0(n,r){var e=n,t=r;return Yw(e,t)}function lz(n,r){return r instanceof Qn?q0(n.qm_1,r instanceof Qn?r.lm_1:g()):!1}function uz(n){return n.length===0}function cz(n){return"ULongArray(storage="+b(n)+")"}function fz(n){return xr(n)}function vz(n,r){if(!(r instanceof oi))return!1;var e=r.qm_1;return!!P(n,e)}var z1;function $l(){return z1===l&&new kp,z1}function O0(n,r){var e=n&65535,t=r&65535;return Oe(e,t)}function hz(n,r){return O0(n.wm_1,r instanceof Me?r.wm_1:g())}function E1(n){return(n&65535).toString()}function dz(n,r){return!(!(r instanceof Me)||n!==r.wm_1)}function ch(n){return new Int16Array(n)}function pz(n,r){var e=n[r];return e}function _z(n,r,e){var t=n;t[r]=e}function di(n){return n.length}function gz(n){return new xp(n)}function U0(n,r){var e=n,t=r;return Zw(e,t)}function mz(n,r){return r instanceof Me?U0(n.bn_1,r instanceof Me?r.wm_1:g()):!1}function yz(n){return n.length===0}function wz(n){return"UShortArray(storage="+b(n)+")"}function bz(n){return xr(n)}function kz(n,r){if(!(r instanceof li))return!1;var e=r.bn_1;return!!P(n,e)}function j0(n){return Iz(n,10)}function xz(n){var r=Cz(n),e,t=r;return(t==null?null:new Xn(t))==null?Ca(n):e=r,e}function Sz(n){var r=j0(n),e,t=r;return(t==null?null:new Qn(t))==null?Ca(n):e=r,e}function zz(n){var r=Az(n),e,t=r;return(t==null?null:new Pe(t))==null?Ca(n):e=r,e}function Ez(n){var r=Tz(n),e,t=r;return(t==null?null:new Me(t))==null?Ca(n):e=r,e}function Iz(n,r){za(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=M(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=Tl(K(n,v),r);if(h<0)return null;var d=c,_=o;if(bt(d,_)>0)if(P(new Qn(o),new Qn(s))){o=Ak(t,u);var m=c,w=o;if(bt(m,w)>0)return null}else return null;var x=c;c=Ar(x,u);var k=c,S=c,E=h,I=E,A=hs(M(I),new y(-1,0)),q=A;c=hr(S,q);var j=c;if(bt(j,k)<0)return null}while(f<e);return c}function Cz(n){return ff(n,10)}function Az(n){return qz(n,10)}function Tz(n){return Oz(n,10)}function ff(n,r){za(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(mn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=Tl(K(n,v),r);if(h<0)return null;var d=c,_=o;if(aa(d,_)>0)if(P(new Xn(o),new Xn(s))){o=Ck(t,u);var m=c,w=o;if(aa(m,w)>0)return null}else return null;var x=c;c=lr(x,u);var k=c,S=c,E=h;c=S+E|0;var I=c;if(aa(I,k)<0)return null}while(f<e);return c}function qz(n,r){var e=ff(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(aa(a,o)>0)return null;var u=a;return Ln(u)}function Oz(n,r){var e=ff(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(aa(a,o)>0)return null;var u=a;return Gc(u)}Mr(kc,"CharSequence");Mr(Ee,"Comparable");p(Hh,"Number");p(Gh);p(Kh);p(Wh);rn(Yh);p(Sn,"Char",l,l,[Ee]);Mr(W,"Collection");Mr(qe,"Set",l,l,[W]);Mr(zn,"List",l,l,[W]);Mr(Qe,"Entry");Mr(yn,"Map");Mr(ua,"MutableMap",l,l,[yn]);rn(Tw);p(se,"Enum",l,l,[Ee]);rn(Zh);p(y,"Long",l,l,[Ee]);Mr(bn,"FunctionAdapter");p(Vh);D(qw,"ByteCompanionObject");D(Ow,"ShortCompanionObject");D(Uw,"IntCompanionObject");D(jw,"FloatCompanionObject");D(Nw,"DoubleCompanionObject");D(Dw,"StringCompanionObject");D(Lw,"BooleanCompanionObject");D(Xh,"Digit");Mr(dn,"Comparator");D(yl,"Unit");p(ma,"AbstractCollection",l,l,[W]);p(ks,"AbstractMutableCollection",l,l,[W]);p(xc,"IteratorImpl");p(Qh,"ListIteratorImpl");p(rd,"AbstractMutableList",l,l,[zn,W]);p(nd,"AbstractMap",l,l,[yn]);p(ed,"AbstractMutableMap",l,l,[ua]);p(xs,"AbstractMutableSet",l,l,[qe,W]);rn(td);Mr(Ss,"RandomAccess");p(T,"ArrayList",T.m,l,[zn,W,Ss]);p(us,"HashMap",us.x6,l,[ua]);p(id,"HashMapKeys",l,l,[qe,W]);p(ad,"HashMapValues",l,l,[W]);p(sd,"HashMapEntrySetBase",l,l,[qe,W]);p(od,"HashMapEntrySet");p(ld);p(ud,"HashMapKeysDefault");p(cd);p(fd,"HashMapValuesDefault");p(pi,"HashSet",pi.n8,l,[qe,W]);rn(vd);p(wl,"Itr");p(hd,"KeysItr");p(dd,"ValuesItr");p(pd,"EntriesItr");p(_d,"EntryRef",l,l,[Qe]);Mr(gd,"InternalMap");Lr(rt).h8=Pw;p(rt,"InternalHashMap",rt.i7,l,[gd]);p(vr,"LinkedHashMap",vr.q4,l,[ua]);p(An,"LinkedHashSet",An.e1,l,[qe,W]);Mr(it,"Continuation");D(md,"CompletedContinuation",l,l,[it]);p(Sc,"InterceptedCoroutine",l,l,[it]);p(zc,"GeneratorCoroutineImpl",l,l,[it]);p(yd,l,l,l,[it]);p(cs,"Exception",cs.nb);p(le,"RuntimeException",le.hb);p(ue,"UnsupportedOperationException",ue.p6);p(U,"IllegalArgumentException",U.kb);p(qr,"NoSuchElementException",qr.j1);p(Wn,"IndexOutOfBoundsException",Wn.sb);p(kr,"IllegalStateException",kr.ub);p(_o,"ConcurrentModificationException",_o.m9);p(Du,"ArithmeticException",Du.yb);p(go,"Error",go.ec);p(Qa,"AssertionError",Qa.cc);p(Lu,"NumberFormatException",Lu.mc);p(Pu,"NoWhenBranchMatchedException",Pu.s3);p(Mu,"NullPointerException",Mu.w3);p(Ru,"ClassCastException",Ru.a4);Mr(Ke,"KClass");p(ya,"KClassImpl",l,l,[Ke]);p(tn,"PrimitiveKClassImpl");D(Ec,"NothingKClassImpl");p(Bu,"SimpleKClassImpl");Mr(ki,"KProperty1");D(wd,"PrimitiveClasses");p(uv,"CharacterCodingException",uv.wd);p(nn,"StringBuilder",nn.f,l,[kc]);rn(bd);p(St,"Regex");p(bl,"MatchGroup");p(kd,l,l,l,[W]);p(Ic,"AbstractList",l,l,[zn]);p(xd);p(Sd);p(Mw,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(mt,"DurationUnit");p(Cc,"IteratorImpl");p(zd,"ListIteratorImpl");rn(Ed);p(Id);p(Cd);rn(Rw);p(Ad,"AbstractSet",l,l,[qe]);p(Td);p(qd);rn(Od);D(Ud,"EmptyList",l,l,[zn,Ss]);D(jd,"EmptyIterator");p(kl,"IndexedValue");p(Nd,"IndexingIterable");p(Dd,"IndexingIterator");Mr(Ld,"MapWithDefault",l,l,[yn]);D(Pd,"EmptyMap",l,l,[yn]);p(Md,"IntIterator");p(Rd);p(Bd,"TransformingSequence");Mr(xl,"DropTakeSequence");p($d);p(Sl,"TakeSequence",l,l,[xl]);D(Fd,"EmptySequence",l,l,[xl]);p(Jd);p(Ac,"GeneratorSequence");D(Hd,"EmptySet",l,l,[qe]);D(Gd,"NaturalOrderComparator",l,l,[dn]);p(Kd,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(Wd,"Key");Mr(Bw,"ContinuationInterceptor");D(Yd,"EmptyCoroutineContext");p(Zd,"CoroutineSingletons");p(Vd,"EnumEntriesList",l,l,[zn,Ss]);rn(Xd);p(zs,"IntProgression");Mr(na,"ClosedRange");p(Tt,"IntRange",l,l,[na]);p(Qd,"IntProgressionIterator");rn(rp);p(np);p(ep,"DelimitedRangesSequence");D($w,"State");p(tp,"LinesIterator");p(ip);rn(ap);p(be,"Duration",l,l,[Ee]);rn(sp);p($u,"LongParser");D(Fw,"FractionalParser");rn(op);p(nt,"Instant",l,l,[Ee]);p(lp,"Success");p(Tc,"Failure");rn(up);p(qc,"UnboundLocalDateTime");p(Oc,"InstantFormatException");p(cp,"DeepRecursiveScope",l,l,l,[1,2]);p(fp,"DeepRecursiveFunction");p(vp,"DeepRecursiveScopeImpl",l,l,[it],[1,2]);p(hp,"LazyThreadSafetyMode");p(Uc,"UnsafeLazyImpl");D(dp,"UNINITIALIZED_VALUE");rn(Jw);p(qt,"Failure");p(ti,"Result");p(cv,"NotImplementedError",cv.bb);p(zl,"Pair");rn(pp);p(zt,"Uuid",l,l,[Ee]);rn(_p);p(Pe,"UByte",l,l,[Ee]);p(gp,"Iterator");p(ai,"UByteArray",l,l,[W]);rn(mp);p(Xn,"UInt",l,l,[Ee]);p(yp,"Iterator");p(si,"UIntArray",l,l,[W]);rn(wp);p(Qn,"ULong",l,l,[Ee]);p(bp,"Iterator");p(oi,"ULongArray",l,l,[W]);rn(kp);p(Me,"UShort",l,l,[Ee]);p(xp,"Iterator");p(li,"UShortArray",l,l,[W]);sr=new yl;so=null;ds=new vd;k_=new md;Nn=new Ed;ps=new Od;_s=new jd;Ol=new Fd;H_=new Gd;f1=new Wd;af=new rp;w0=new up;co=new dp;var Xr=Math.imul;class Fl{}class sa{}class cr{}class Rn extends U{static nn(){var r=this.kb();return Au(r),r}static on(r){var e=this.v(r);return Au(e),e}static pn(r,e){var t=this.lb(r,e);return Au(t),t}}class Jl extends Rn{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return un(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Jl.xn(r,this,this.un_1,this.vn_1)}}class he{}function Ei(){return!1}function Ii(){return!1}function Ps(){return mr()}class N0{}class D0{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class L0{constructor(r){this.po_1=r}x(){return new D0(this.po_1)}}class P0{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=mr(),this.to_1=T.m(),this.uo_1=pi.n8(),this.vo_1=T.m(),this.wo_1=T.m(),this.xo_1=T.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw U.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?mr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=sr):s=a.yo.call(this,r,e,t,i),s}}class Ms{}class Aa{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=hb(a.to_1);var s=this,o=a.to_1;s.fp_1=bi(o),this.gp_1=D1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=bi(c),this.ip_1=db(a.xo_1);for(var f=this,v=ab(this.fp_1),h=T.g1(Vr(v,10)),d=v.x();d.y();){var _=d.z(),m=N(_.xg_1,_.wg_1);h.n(m)}f.jp_1=M_(h),this.kp_1=D1(i);var w=this;w.lp_1=S_(iE(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return oa(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return oa(this.hp_1,r)}lo(r){return oa(this.gp_1,r)}mo(r){return _m(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Aa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Kc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return im(this)}toString(){return fm(this)}}class Ta{toString(){return ln(jr(this).oc())}hashCode(){return oe(this.toString())}}class Hl extends Ta{constructor(){qo=null,super(),qo=this}}class M0 extends Ta{constructor(){Oo=null,super(),Oo=this}}class Rs extends Ta{}class R0 extends Rs{constructor(){Uo=null,super(),Uo=this}}class B0 extends Rs{constructor(){jo=null,super(),jo=this}}class $0 extends Rs{constructor(){No=null,super(),No=this}}class F0 extends Rs{constructor(){Do=null,super(),Do=this}}class Fn extends Ta{}class J0 extends Fn{constructor(){Lo=null,super(),Lo=this}}class H0 extends Fn{constructor(){Po=null,super(),Po=this}}class G0 extends Fn{constructor(){Mo=null,super(),Mo=this}}class K0 extends Fn{constructor(){Ro=null,super(),Ro=this}}class W0 extends Fn{constructor(){Bo=null,super(),Bo=this}}class Y0 extends Fn{constructor(){$o=null,super(),$o=this}}class Z0 extends Fn{constructor(){Fo=null,super(),Fo=this}}class V0 extends Fn{constructor(){Jo=null,super(),Jo=this}}class X0 extends Fn{constructor(){Ho=null,super(),Ho=this}}class qa extends Ta{}class Q0 extends qa{constructor(){Go=null,super(),Go=this}}class Gl{}function rg(n){return n.fn(this)}class Kl{}function ng(){return!1}function eg(n){return-1}function tg(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class Ci{np(){throw Rn.on(b(jr(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof Sn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class vf{}function Uz(n,r){return this.cq(n)}function jz(n,r){n.en(this,r)}class Bs{static tq(){return Si(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw Rn.on("Non-serializable "+b(jr(r))+" is not supported by "+b(jr(this))+" encoder")}wq(){throw Rn.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new Sn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):IE()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class _a{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class ig{constructor(){T1=this,this.vr_1=CE()}dn(){return this.vr_1}wr(r,e){throw Rn.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw Rn.on("'kotlin.Nothing' does not have instances")}}class ag{constructor(){q1=this,this.xr_1=new kn("kotlin.time.Duration",ja())}dn(){return this.xr_1}yr(r,e){r.fr(rS(e))}en(r,e){return this.yr(r,e instanceof be?e.kj_1:g())}zr(r){return Yr().lj(r.yp())}fn(r){return new be(this.zr(r))}}class sg{constructor(){O1=this,this.as_1=new kn("kotlin.time.Instant",ja())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof nt?e:g())}fn(r){return xt().xj(r.yp())}}class og{constructor(){U1=this,this.cs_1=new kn("kotlin.uuid.Uuid",ja())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof zt?e:g())}fn(r){return Ds().gl(r.yp())}}class jt{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Fs()}go(){return this.hs_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=jl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),mr()}lo(r){return yt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof jt?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Xr(xr(this.gs_1),31)+oe(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class lg extends jt{co(){return"kotlin.collections.ArrayList"}}class Ai{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Xl()}go(){return this.ls_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=jl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),mr()}lo(r){yt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw kr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof Ai)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=oe(this.co());return r=Xr(31,r)+xr(this.js_1)|0,r=Xr(31,r)+xr(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class ug extends Ai{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class cg extends jt{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class hf{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw U.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+fn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=sr):s=a.gt.call(this,r,e,t,i),s}}class df extends hf{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class fg extends df{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&z(r,W)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&z(r,W)?r:g())}}class vg extends fg{constructor(r){super(r),this.qs_1=new lg(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?T.m():T.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof T?r:g())}us(r){return r}vs(r){return this.us(r instanceof T?r:g())}ws(r,e){if(r instanceof T)return r.k6(e),r;if(e===r.c1())return T.f1(r);var t=T.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&z(r,zn)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof T?r:g(),e,t)}}class hg extends hf{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=zb(Pc(0,Xr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&z(e,ua)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw U.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Fn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,ke(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&z(t,ua)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class dg extends hg{constructor(r,e){super(r,e),this.lt_1=new ug(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&z(r,yn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&z(r,yn)?r:g())}rs(r){return r===-1?vr.q4():fh(r)}qt(r){return Xr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=fh(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&z(r,yn)?r:g(),e)}}class de extends df{constructor(r){super(r),this.yt_1=new cg(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof Dn?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof Dn?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw kr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw kr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof Dn?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class Dn{static ku(){return Si(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=sr):t=e.lu.call(this,r),t}}let pg=class{constructor(){j1=this,this.nu_1=gi(0)}};class _g{constructor(r,e){vh(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Vn(new y(-1,-1),t),i.qu_1=a,this.ru_1=vh().nu_1}else this.qu_1=new y(0,0),this.ru_1=kE(this,t)}su(r){r<64?this.qu_1=mi(this.qu_1,Vn(new y(1,0),r)):xE(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=o_(Bc(this.qu_1));if(this.qu_1=mi(this.qu_1,Vn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?SE(this):-1}}class Oa{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=yo(this.jv_1),this.pv_1=Nr();var f=this,v=fo();f.qv_1=oo(v,jE(this));var h=this,d=fo();h.rv_1=oo(d,DE(this));var _=this,m=fo();_.sv_1=oo(m,PE(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Vl()}ho(){var r=this.nv_1;return r??mr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=ki;return xa("typeParameterDescriptors",1,e,LE(),null),r.l2()}lo(r){return oa(lm(this),r).dn()}mo(r){return _m(this.ov_1,r)}ko(r){var e=oa(this.mv_1,r);return e??mr()}io(r){return oa(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Oa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Kc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return um(this)}toString(){return fm(this)}}class Wl extends Oa{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Xr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Wl)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&Kc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class gg{}function Nz(){return vm()}class pf{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw kr.o3(b(r))}en(r,e){var t="unsupported";throw kr.o3(b(t))}fn(r){var e="unsupported";throw kr.o3(b(e))}}class mg extends Bs{constructor(){return new.target.yv()}static yv(){Ko=null;var r=this.tq();return Ko=r,r.xv_1=Ql(),r}pq(){return this.xv_1}vq(r){return sr}wq(){return sr}xq(r){return sr}yq(r){return sr}zq(r){return sr}ar(r){return sr}br(r){return sr}cr(r){return sr}dr(r){return sr}er(r){return sr}fr(r){return sr}}class $s{constructor(){N1=this,this.zv_1=Sf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Ya()}jo(r){Ya()}mo(r){Ya()}lo(r){Ya()}ko(r){Ya()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return oe(this.aw_1)+Xr(31,this.zv_1.hashCode())|0}}class yg{}class wg{constructor(r,e){this.bw_1=e,this.cw_1=mr();var t=this,i=fo();t.dw_1=oo(i,TE(r,this))}dn(){var r=this.dw_1,e=ki;return xa("descriptor",1,e,qE(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw Rn.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class bg extends de{constructor(){Wo=null,super(Qg(Rc())),Wo=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&ts(r)?r:g())}iw(r,e){return e===r.length?Ft.lw(r):Ft.mw(Xu(r,e),r.length)}xs(r,e){return this.iw(r!=null&&ts(r)?r:g(),e)}gu(r){return Ft.nw(r)}fu(){return Ft.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof Ft?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof Ft?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&ts(e)?e:g(),t)}}class kg extends de{constructor(){Yo=null,super(rm()),Yo=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&ss(r)?r:g())}vw(r,e){return e===r.length?Jt.yw(r):Jt.zw(Qu(r,e),r.length)}xs(r,e){return this.vw(r!=null&&ss(r)?r:g(),e)}gu(r){return Jt.ax(r)}fu(){return Jt.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Jt?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Jt?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&ss(e)?e:g(),t)}}class xg extends de{constructor(){Zo=null,super(nm()),Zo=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&as(r)?r:g())}ix(r,e){return e===r.length?Ht.lx(r):Ht.mx(r1(r,e),r.length)}xs(r,e){return this.ix(r!=null&&as(r)?r:g(),e)}gu(r){return Ht.nx(r)}fu(){return Ht.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Ht?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&as(e)?e:g(),t)}}class Sg extends de{constructor(){Vo=null,super(bf(El())),Vo=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&ea(r)?r:g())}vx(r,e){return e===r.length?Gt.yx(r):Gt.zx(va(r,e),r.length)}xs(r,e){return this.vx(r!=null&&ea(r)?r:g(),e)}gu(r){return Gt.ay(r)}fu(){return Gt.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof Gt?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof Gt?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&ea(e)?e:g(),t)}}class zg extends de{constructor(){Xo=null,super(Yl(Ls())),Xo=this}hy(r){return hi(r)}nt(r){return this.hy(r instanceof oi?r.qm_1:g())}iy(r,e){if(e===hi(r))return Kt.ly(r);var t=va(r,e);return Kt.my(t,hi(r))}xs(r,e){return this.iy(r instanceof oi?r.qm_1:g(),e)}gu(r){return Kt.ny(r)}fu(){return Kt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Kt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Kt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=az(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof oi?e.qm_1:g(),t)}}class Eg extends de{constructor(){Qo=null,super(wf()),Qo=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&is(r)?r:g())}vy(r,e){return e===r.length?Wt.yy(r):Wt.zy(wi(r,e),r.length)}xs(r,e){return this.vy(r!=null&&is(r)?r:g(),e)}gu(r){return Wt.az(r)}fu(){return Wt.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Wt?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Wt?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&is(e)?e:g(),t)}}class Ig extends de{constructor(){rl=null,super(gf(Bl())),rl=this}hz(r){return vi(r)}nt(r){return this.hz(r instanceof si?r.fm_1:g())}iz(r,e){if(e===vi(r))return Yt.lz(r);var t=wi(r,e);return Yt.mz(t,vi(r))}xs(r,e){return this.iz(r instanceof si?r.fm_1:g(),e)}gu(r){return Yt.nz(r)}fu(){return Yt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Yt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Yt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=WS(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof si?e.fm_1:g(),t)}}class Cg extends de{constructor(){nl=null,super(xf()),nl=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&es(r)?r:g())}vz(r,e){return e===r.length?Zt.yz(r):Zt.zz(ha(r,e),r.length)}xs(r,e){return this.vz(r!=null&&es(r)?r:g(),e)}gu(r){return Zt.a10(r)}fu(){return Zt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Zt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Zt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&es(e)?e:g(),t)}}class Ag extends de{constructor(){el=null,super(yf($l())),el=this}h10(r){return di(r)}nt(r){return this.h10(r instanceof li?r.bn_1:g())}i10(r,e){if(e===di(r))return Vt.l10(r);var t=ha(r,e);return Vt.m10(t,di(r))}xs(r,e){return this.i10(r instanceof li?r.bn_1:g(),e)}gu(r){return Vt.n10(r)}fu(){return Vt.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Vt?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Vt?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=pz(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof li?e.bn_1:g(),t)}}class Tg extends de{constructor(){tl=null,super(kf()),tl=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&ns(r)?r:g())}v10(r,e){return e===r.length?Xt.y10(r):Xt.z10(da(r,e),r.length)}xs(r,e){return this.v10(r!=null&&ns(r)?r:g(),e)}gu(r){return Xt.a11(r)}fu(){return Xt.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof Xt?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof Xt?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&ns(e)?e:g(),t)}}class qg extends de{constructor(){il=null,super(mf(Rl())),il=this}h11(r){return fi(r)}nt(r){return this.h11(r instanceof ai?r.ul_1:g())}i11(r,e){if(e===fi(r))return Qt.l11(r);var t=da(r,e);return Qt.m11(t,fi(r))}xs(r,e){return this.i11(r instanceof ai?r.ul_1:g(),e)}gu(r){return Qt.n11(r)}fu(){return Qt.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof Qt?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof Qt?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=PS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof ai?e.ul_1:g(),t)}}class Og extends de{constructor(){al=null,super(em()),al=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&rs(r)?r:g())}v11(r,e){return e===r.length?ri.y11(r):ri.z11(n1(r,e),r.length)}xs(r,e){return this.v11(r!=null&&rs(r)?r:g(),e)}gu(r){return ri.a12(r)}fu(){return ri.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof ri?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof ri?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&rs(e)?e:g(),t)}}class Ft extends Dn{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(vs(r),0)}static ow(){return this.mw(vs(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Xu(this.jw_1,fn(r,Xr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Xu(this.jw_1,this.kw_1)}}class Jt extends Dn{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=Qu(this.ww_1,fn(r,Xr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return Qu(this.ww_1,this.xw_1)}}class Ht extends Dn{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=r1(this.jx_1,fn(r,Xr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return r1(this.jx_1,this.kx_1)}}class Gt extends Dn{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(gi(r),0)}static by(){return this.zx(gi(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=va(this.wx_1,fn(r,Xr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return va(this.wx_1,this.xx_1)}}class Kt extends Dn{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,hi(r))}static ny(r){return this.my(uh(r),0)}static oy(){return this.my(uh(10),0)}au(){return this.ky_1}lu(r){if(hi(this.jy_1)<r){var e=this,t=this.jy_1,i=fn(r,Xr(hi(this.jy_1),2));e.jy_1=va(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,sz(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return va(r,e)}cu(){return new oi(this.f12())}}class Wt extends Dn{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=wi(this.wy_1,fn(r,Xr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return wi(this.wy_1,this.xy_1)}}class Yt extends Dn{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,vi(r))}static nz(r){return this.mz(lh(r),0)}static oz(){return this.mz(lh(10),0)}au(){return this.kz_1}lu(r){if(vi(this.jz_1)<r){var e=this,t=this.jz_1,i=fn(r,Xr(vi(this.jz_1),2));e.jz_1=wi(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,YS(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return wi(r,e)}cu(){return new si(this.g12())}}class Zt extends Dn{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=ha(this.wz_1,fn(r,Xr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return ha(this.wz_1,this.xz_1)}}class Vt extends Dn{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,di(r))}static n10(r){return this.m10(ch(r),0)}static o10(){return this.m10(ch(10),0)}au(){return this.k10_1}lu(r){if(di(this.j10_1)<r){var e=this,t=this.j10_1,i=fn(r,Xr(di(this.j10_1),2));e.j10_1=ha(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,_z(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return ha(r,e)}cu(){return new li(this.h12())}}class Xt extends Dn{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=da(this.w10_1,fn(r,Xr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return da(this.w10_1,this.x10_1)}}class Qt extends Dn{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,fi(r))}static n11(r){return this.m11(oh(r),0)}static o11(){return this.m11(oh(10),0)}au(){return this.k11_1}lu(r){if(fi(this.j11_1)<r){var e=this,t=this.j11_1,i=fn(r,Xr(fi(this.j11_1),2));e.j11_1=da(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,MS(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return da(r,e)}cu(){return new ai(this.i12())}}class ri extends Dn{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(yo(r),0)}static b12(){return this.z11(yo(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=n1(this.w11_1,fn(r,Xr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return n1(this.w11_1,this.x11_1)}}class Ug{constructor(){L1=this,this.j12_1=new kn("kotlin.String",ja())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class kn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){Za(this)}jo(r){Za(this)}mo(r){Za(this)}lo(r){Za(this)}ko(r){Za(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof kn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return oe(this.l12_1)+Xr(31,this.m12_1.hashCode())|0}}class jg{constructor(){P1=this,this.n12_1=new kn("kotlin.Int",vE())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class Ng{constructor(){M1=this,this.p12_1=new kn("kotlin.Long",hE())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class Dg{constructor(){R1=this,this.r12_1=new kn("kotlin.Byte",uE())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class Lg{constructor(){B1=this,this.t12_1=new kn("kotlin.Short",fE())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class Pg{constructor(){$1=this,this.v12_1=new kn("kotlin.Char",cE())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof Sn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new Sn(this.x12(r))}}class Mg{constructor(){F1=this,this.y12_1=new kn("kotlin.Double",pE())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class Rg{constructor(){J1=this,this.a13_1=new kn("kotlin.Float",dE())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Bg{constructor(){H1=this,this.c13_1=new kn("kotlin.Boolean",lE())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class $g{constructor(){G1=this,this.e13_1=new wg("kotlin.Unit",sr)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,sr)}en(r,e){return this.f13(r,e instanceof yl?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),sr}}class Ua{constructor(){var r=this;r.m13_1=T.m(),this.n13_1=!1}pq(){return Ql()}r13(r){throw Rn.on(b(jr(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof Sn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return hI(this,a,dI(this,t,i))}o13(){return Tp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(Us(this.m13_1));return this.n13_1=!0,r}}class Fg extends Ua{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":V(this.m13_1,".","$.")}}class Jg{constructor(){K1=this,this.f14_1=Js("kotlin.UInt",wf())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Xn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Xn(this.h14(r))}}class Hg{constructor(){W1=this,this.i14_1=Js("kotlin.ULong",bf(El()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Qn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Qn(this.k14(r))}}class Gg{constructor(){Y1=this,this.l14_1=Js("kotlin.UByte",kf())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof Pe?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new Pe(this.n14(r))}}class Kg{constructor(){Z1=this,this.o14_1=Js("kotlin.UShort",xf())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Me?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Me(this.q14(r))}}class Wg{zn(r,e,t){return e=e===l?mr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class Yg extends Wg{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(jr(e)),a=i!=null&&z(i,Fl)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(z(t,yn)?t:g()).o2(e);var a=i,s=a!=null&&z(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||z(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof Zg){var s=z(i,Ke)?i:g(),o=a.c15_1;r.d15(s,z(o,cr)?o:g())}else a instanceof Vg?r.b15(i,a.a15_1):Cs()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=z(f,Ke)?f:g(),x=z(_,Ke)?_:g(),k=z(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var E=S.z(),I=E.k2(),A=E.l2(),q=z(I,Ke)?I:g();r.f15(q,typeof A=="function"?A:g())}for(var j=this.x14_1.r2().x();j.y();){var F=j.z(),O=F.k2(),L=F.l2(),H=z(O,Ke)?O:g();r.g15(H,typeof L=="function"?L:g())}}}class _f{}class Zg extends _f{}class Vg extends _f{}class Xg{}function Dz(n,r){return this.b15(n,bI(r))}class Lz{}function Pz(n,r,e){var t=n.gn(r,e),i;return t==null?gE(jr(e),n.hn()):i=t,i}function I1(n,r,e){var t=n.in(r,e),i;return t==null?sm(e,n.hn()):i=t,i}function Au(n){un(n,n.mn_1)}function ys(n){return nI()}function gf(n){return pI()}function Yl(n){return _I()}function mf(n){return gI()}function yf(n){return mI()}function wf(n){return eI()}function bf(n){return tI()}function kf(n){return iI()}function xf(n){return aI()}function Qg(n){return sI()}function Mz(){return $E()}function rm(n){return oI()}function Rz(){return FE()}function nm(n){return lI()}function Bz(){return JE()}function $z(){return HE()}function Fz(){return GE()}function Jz(){return KE()}function Hz(){return WE()}function Gz(){return YE()}function Kz(){return ZE()}function Wz(){return VE()}function Yz(){return XE()}function em(n){return uI()}function Zz(){return QE()}function Vz(n){return cI()}function Xz(){return mE()}function Qz(n){return yE()}function rE(n){return wE()}function nE(n){return bE()}function C1(n){return new vg(n)}function A1(n,r){return new dg(n,r)}function eE(n,r){var e=tm(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function tm(n){var r;return n instanceof N0?r=n.bo_1:n instanceof yg?r=tm(n.ao_1):r=null,r}function tE(n){return new L0(n)}function Zl(n,r,e,t){var i;if(t===l?i=oE:i=t,t=i,ut(n)){var a="Blank serial names are prohibited";throw U.v(b(a))}if(P(r,Vl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw U.v(b(s))}var o=new P0(n);return t(o),new Aa(n,r,o.to_1.c1(),ib(e),o)}function im(n){var r=n.lp_1,e=ki;return xa("_hashCode",1,e,aE(),null),r.l2()}function iE(n){return()=>cm(n,n.kp_1)}function aE(){return Re(n=>im(n),1,0,0)}function sE(n,r){if(ut(n)){var e="Blank serial names are prohibited";throw U.v(b(e))}return fI(n,r)}function oE(n){return sr}var qo;function Ti(){return qo===l&&new Hl,qo}var Oo;function am(){return Oo===l&&new M0,Oo}var Uo;function Vl(){return Uo===l&&new R0,Uo}var jo;function Fs(){return jo===l&&new B0,jo}var No;function Xl(){return No===l&&new $0,No}var Do;function Sf(){return Do===l&&new F0,Do}var Lo;function lE(){return Lo===l&&new J0,Lo}var Po;function uE(){return Po===l&&new H0,Po}var Mo;function cE(){return Mo===l&&new G0,Mo}var Ro;function fE(){return Ro===l&&new K0,Ro}var Bo;function vE(){return Bo===l&&new W0,Bo}var $o;function hE(){return $o===l&&new Y0,$o}var Fo;function dE(){return Fo===l&&new Z0,Fo}var Jo;function pE(){return Jo===l&&new V0,Jo}var Ho;function ja(){return Ho===l&&new X0,Ho}var Go;function _E(){return Go===l&&new Q0,Go}function gE(n,r){var e=n.oc();sm(e??b(n),r)}function sm(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw Rn.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var T1;function mE(){return T1===l&&new ig,T1}var q1;function yE(){return q1===l&&new ag,q1}var O1;function wE(){return O1===l&&new sg,O1}var U1;function bE(){return U1===l&&new og,U1}function yt(n,r){if(n<0)throw Wn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function fh(n){var r=n;return vr.ha(r)}var j1;function vh(){return j1===l&&new pg,j1}function kE(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=gi(e);return t!==0&&(i[nb(i)]=Vn(new y(-1,-1),r)),i}function xE(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=mi(n.ru_1[e],Vn(new y(1,0),t))}function SE(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Xr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=o_(Bc(a));a=mi(a,Vn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function Js(n,r){return new Wl(n,new pf(r))}function zE(n,r){return n.yn(r)}function EE(n){return UE(n)}var Ko;function IE(){return Ko===l&&mg.yv(),Ko}function Ya(n){throw kr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var N1;function CE(){return N1===l&&new $s,N1}function AE(n){return r=>(r.so_1=n.cw_1,sr)}function TE(n,r){return()=>{var e=Sf();return Zl(n,e,[],AE(r))}}function qE(){return Re(n=>n.dn(),1,0,1)}function OE(){return zf(),om}var om;function UE(n){if(zf(),z(n,Ms))return n.mp();var r=pi.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function D1(n){zf();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=bi(e);var i=t;return i??OE()}var hh;function zf(){hh||(hh=!0,om=[])}function lm(n){var r=n.qv_1,e=ki;return xa("childSerializers",1,e,NE(),null),r.l2()}function um(n){var r=n.sv_1,e=ki;return xa("_hashCode",1,e,ME(),null),r.l2()}function jE(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??vm()}}function NE(){return Re(n=>lm(n),1,0,2)}function DE(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=T.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return D1(t)}}function LE(){return Re(n=>n.tv(),1,0,3)}function PE(n){return()=>cm(n,n.tv())}function ME(){return Re(n=>um(n),1,0,4)}function cm(n,r){var e=oe(n.co());e=Xr(31,e)+gk(r)|0;for(var t=tE(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Xr(31,o),c=s.co(),f=c==null?null:xr(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Xr(31,m),x=_.do(),k=x==null?null:xr(x);h=w+(k??0)|0}var S=h;return e=Xr(31,e)+v|0,e=Xr(31,e)+S|0,e}function fm(n){var r=Pc(0,n.go()),e=n.co()+"(";return V(r,", ",e,")",l,l,RE(n))}function RE(n){return r=>n.io(r)+": "+n.lo(r).co()}function vm(){return BE(),hm}var hm,dh;function BE(){dh||(dh=!0,hm=[])}var Wo;function $E(){return Wo===l&&new bg,Wo}var Yo;function FE(){return Yo===l&&new kg,Yo}var Zo;function JE(){return Zo===l&&new xg,Zo}var Vo;function HE(){return Vo===l&&new Sg,Vo}var Xo;function GE(){return Xo===l&&new zg,Xo}var Qo;function KE(){return Qo===l&&new Eg,Qo}var rl;function WE(){return rl===l&&new Ig,rl}var nl;function YE(){return nl===l&&new Cg,nl}var el;function ZE(){return el===l&&new Ag,el}var tl;function VE(){return tl===l&&new Tg,tl}var il;function XE(){return il===l&&new qg,il}var al;function QE(){return al===l&&new Og,al}function rI(){return Ef(),dm}var dm,L1;function nI(){return L1===l&&new Ug,L1}function Za(n){throw kr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var P1;function eI(){return P1===l&&new jg,P1}var M1;function tI(){return M1===l&&new Ng,M1}var R1;function iI(){return R1===l&&new Dg,R1}var B1;function aI(){return B1===l&&new Lg,B1}var $1;function sI(){return $1===l&&new Pg,$1}var F1;function oI(){return F1===l&&new Mg,F1}var J1;function lI(){return J1===l&&new Rg,J1}var H1;function uI(){return H1===l&&new Bg,H1}var G1;function cI(){return G1===l&&new $g,G1}function fI(n,r){return Ef(),vI(n),new kn(n,r)}function vI(n){Ef();for(var r=rI().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw U.v(S2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+jr(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var ph;function Ef(){ph||(ph=!0,dm=kI())}function hI(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function dI(n,r,e){return()=>n.aq(r,e)}var K1;function pI(){return K1===l&&new Jg,K1}var W1;function _I(){return W1===l&&new Hg,W1}var Y1;function gI(){return Y1===l&&new Gg,Y1}var Z1;function mI(){return Z1===l&&new Kg,Z1}function yI(){return wI(),pm}var pm,_h;function wI(){_h||(_h=!0,pm=new Yg(Nr(),Nr(),Nr(),Nr(),Nr(),!1))}function Ql(){return yI()}function bI(n){return r=>n}function oa(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+Hw(n).toString());return n[r]}function _m(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+tb(n).toString());return n[r]}function kI(){return ql([N(br().id(),ys()),N(Ur(Sn),Qg(Rc())),N(br().ld(),Mz()),N(br().gd(),rm()),N(br().sd(),Rz()),N(br().fd(),nm()),N(br().rd(),Bz()),N(br().ed(),bf(El())),N(br().qd(),$z()),N(Ur(Qn),Yl(Ls())),N(Ur(oi),Fz()),N(br().dd(),wf()),N(br().od(),Jz()),N(Ur(Xn),gf(Bl())),N(Ur(si),Hz()),N(br().cd(),xf()),N(br().nd(),Gz()),N(Ur(Me),yf($l())),N(Ur(li),Kz()),N(br().bd(),kf()),N(br().md(),Wz()),N(Ur(Pe),mf(Rl())),N(Ur(ai),Yz()),N(br().ad(),em()),N(br().kd(),Zz()),N(Ur(yl),Vz()),N(br().zc(),Xz()),N(Ur(be),Qz(Yr())),N(Ur(nt),rE(xt())),N(Ur(zt),nE(Ds()))])}Mr(Fl,"SerializationStrategy");Mr(sa,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[Fl,sa]);p(Rn,"SerializationException",Rn.nn);p(Jl,"MissingFieldException");Mr(he,"SerialDescriptor");p(N0,"ContextDescriptor",l,l,[he]);p(D0);p(L0);p(P0,"ClassSerialDescriptorBuilder");Mr(Ms,"CachedNames");Lr(Aa).eo=Ei;Lr(Aa).fo=Ii;p(Aa,"SerialDescriptorImpl",l,l,[he,Ms]);p(Ta,"SerialKind");D(Hl,"ENUM");D(M0,"CONTEXTUAL");p(Rs,"StructureKind");D(R0,"CLASS");D(B0,"LIST");D($0,"MAP");D(F0,"OBJECT");p(Fn,"PrimitiveKind");D(J0,"BOOLEAN");D(H0,"BYTE");D(G0,"CHAR");D(K0,"SHORT");D(W0,"INT");D(Y0,"LONG");D(Z0,"FLOAT");D(V0,"DOUBLE");D(X0,"STRING");p(qa,"PolymorphicKind");D(Q0,"SEALED");Mr(Gl,"Decoder");Mr(Kl,"CompositeDecoder");Lr(Ci).oq=tg;Lr(Ci).bq=rg;Lr(Ci).qq=ng;Lr(Ci).sq=eg;p(Ci,"AbstractDecoder",l,l,[Gl,Kl]);Mr(vf,"Encoder");Lr(Bs).sr=Uz;Lr(Bs).rr=jz;p(Bs,"AbstractEncoder",l,l,[vf]);p(_a,"AbstractPolymorphicSerializer",l,l,[cr]);D(ig,"NothingSerializer",l,l,[cr]);D(ag,"DurationSerializer",l,l,[cr]);D(sg,"InstantSerializer",l,l,[cr]);D(og,"UuidSerializer",l,l,[cr]);Lr(jt).eo=Ei;Lr(jt).fo=Ii;Lr(jt).ho=Ps;p(jt,"ListLikeDescriptor",l,l,[he]);p(lg,"ArrayListClassDesc");Lr(Ai).eo=Ei;Lr(Ai).fo=Ii;Lr(Ai).ho=Ps;p(Ai,"MapLikeDescriptor",l,l,[he]);p(ug,"LinkedHashMapClassDesc");p(cg,"PrimitiveArrayDescriptor");p(hf,"AbstractCollectionSerializer",l,l,[cr]);p(df,"CollectionLikeSerializer");p(fg,"CollectionSerializer");p(vg,"ArrayListSerializer");p(hg,"MapLikeSerializer");p(dg,"LinkedHashMapSerializer");p(de,"PrimitiveArraySerializer");p(Dn,"PrimitiveArrayBuilder");rn(pg);p(_g,"ElementMarker");Lr(Oa).eo=Ei;Lr(Oa).fo=Ii;p(Oa,"PluginGeneratedSerialDescriptor",l,l,[he,Ms]);p(Wl,"InlineClassDescriptor");Mr(gg,"GeneratedSerializer",l,l,[cr]);Lr(pf).wv=Nz;p(pf,l,l,l,[gg]);D(mg,"NoOpEncoder");Lr($s).eo=Ei;Lr($s).fo=Ii;Lr($s).ho=Ps;D($s,"NothingSerialDescriptor",l,l,[he]);p(yg,"SerialDescriptorForNullable",l,l,[he,Ms]);p(wg,"ObjectSerializer",l,l,[cr]);D(bg,"CharArraySerializer",l,l,[cr]);D(kg,"DoubleArraySerializer",l,l,[cr]);D(xg,"FloatArraySerializer",l,l,[cr]);D(Sg,"LongArraySerializer",l,l,[cr]);D(zg,"ULongArraySerializer",l,l,[cr]);D(Eg,"IntArraySerializer",l,l,[cr]);D(Ig,"UIntArraySerializer",l,l,[cr]);D(Cg,"ShortArraySerializer",l,l,[cr]);D(Ag,"UShortArraySerializer",l,l,[cr]);D(Tg,"ByteArraySerializer",l,l,[cr]);D(qg,"UByteArraySerializer",l,l,[cr]);D(Og,"BooleanArraySerializer",l,l,[cr]);p(Ft,"CharArrayBuilder");p(Jt,"DoubleArrayBuilder");p(Ht,"FloatArrayBuilder");p(Gt,"LongArrayBuilder");p(Kt,"ULongArrayBuilder");p(Wt,"IntArrayBuilder");p(Yt,"UIntArrayBuilder");p(Zt,"ShortArrayBuilder");p(Vt,"UShortArrayBuilder");p(Xt,"ByteArrayBuilder");p(Qt,"UByteArrayBuilder");p(ri,"BooleanArrayBuilder");D(Ug,"StringSerializer",l,l,[cr]);Lr(kn).eo=Ei;Lr(kn).fo=Ii;Lr(kn).ho=Ps;p(kn,"PrimitiveSerialDescriptor",l,l,[he]);D(jg,"IntSerializer",l,l,[cr]);D(Ng,"LongSerializer",l,l,[cr]);D(Dg,"ByteSerializer",l,l,[cr]);D(Lg,"ShortSerializer",l,l,[cr]);D(Pg,"CharSerializer",l,l,[cr]);D(Mg,"DoubleSerializer",l,l,[cr]);D(Rg,"FloatSerializer",l,l,[cr]);D(Bg,"BooleanSerializer",l,l,[cr]);D($g,"UnitSerializer",l,l,[cr]);Lr(Ua).oq=tg;Lr(Ua).bq=rg;Lr(Ua).qq=ng;Lr(Ua).sq=eg;p(Ua,"TaggedDecoder",l,l,[Gl,Kl]);p(Fg,"NamedValueDecoder");D(Jg,"UIntSerializer",l,l,[cr]);D(Hg,"ULongSerializer",l,l,[cr]);D(Gg,"UByteSerializer",l,l,[cr]);D(Kg,"UShortSerializer",l,l,[cr]);p(Wg,"SerializersModule");p(Yg,"SerialModuleImpl");p(_f,"ContextualProvider");p(Zg,"Argless");p(Vg,"WithTypeArguments");Mr(Xg,"SerializersModuleCollector");p(Lz,"SerializableWith",l,l,l,l,0);var Hs=Math.imul;class If{constructor(r,e){ze(),this.h15_1=r,this.i15_1=e,this.j15_1=new Q1}pq(){return this.i15_1}k15(r,e){var t=new nc;try{return tC(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=Wf(this,e),i=new ws(this,su(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(ft(),r)}}class gm extends If{constructor(){sl=null,super(new Cf,Ql()),sl=this}}class mm{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw U.v(b(r))}if(!this.l16_1.equals(Ym())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw U.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=rr(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw U.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw U.v(b(t))}return new Cf(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class ym extends If{constructor(r,e){super(r,e),EI(this)}}class wm{}class bm{}class km{}class Cf{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?Ym():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+ce(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class vo extends se{}class ru{}class xm{t17(){return ft()}}class Ye{}class xI{}class fr extends Ye{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class SI{}class cn extends Ye{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return xr(this.x17_1)}toString(){var r=Hs(this.x17_1.c1()+1|0,2),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof Ye?this.y17(r instanceof Ye?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof Ye?this.z17(r instanceof Ye?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class Sm{t17(){return eu()}}class er extends Ye{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return xr(this.a18_1)}toString(){var r=Hs(this.a18_1.c1(),6),e=nn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,hl(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class fe extends fr{constructor(){ol=null,super(),ol=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class ct extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw U.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=nn.fa(e);hl(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?hl(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!jr(this).equals(jr(r))||(r instanceof ct||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=Vp(this.e18_1);return r=Hs(31,r)+oe(this.g18_1)|0,r}}class wt{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new er(this.i18_1)}}class zm{constructor(){var r=this;r.k18_1=T.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new cn(this.k18_1)}}class Em{constructor(){tc=this;var r=this,e=_E();r.r18_1=Zl("kotlinx.serialization.json.JsonElement",e,[],UI)}dn(){return this.r18_1}s18(r,e){Da(r),e instanceof fr?r.rr(Pf(),e):e instanceof er?r.rr(eu(),e):e instanceof cn?r.rr(Mf(),e):Cs()}en(r,e){return this.s18(r,e instanceof Ye?e:g())}fn(r){var e=tu(r);return e.s17()}}class Im{constructor(){ic=this,this.m18_1=Zl("kotlinx.serialization.json.JsonPrimitive",ja(),[])}dn(){return this.m18_1}t18(r,e){Da(r);var t;if(e instanceof fe)r.rr(Rf(),Ys()),t=sr;else{var i=Xm();r.rr(i,e instanceof ct?e:g()),t=sr}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=tu(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(jr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Fr(s))}else a=null;var o=a;throw Or.g19(Wr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Cm{constructor(){ac=this,this.h19_1=C1(ft()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class Am{constructor(){sc=this,this.q18_1=MI()}dn(){return this.q18_1}j19(r,e){Da(r),C1(ft()).en(r,e)}en(r,e){return this.j19(r,e instanceof cn?e:g())}fn(r){return Bf(r),new cn(C1(ft()).fn(r))}}class Tm{constructor(){oc=this,this.k19_1=A1(ys(),ft()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class qm{constructor(){lc=this,this.p18_1=RI()}dn(){return this.p18_1}m19(r,e){Da(r),A1(ys(),ft()).en(r,e)}en(r,e){return this.m19(r,e instanceof er?e:g())}fn(r){return Bf(r),new er(A1(ys(),ft()).fn(r))}}class Om{constructor(){uc=this,this.n18_1=Zl("kotlinx.serialization.json.JsonNull",Ti(),[])}dn(){return this.n18_1}n19(r,e){Da(r),r.wq()}en(r,e){return this.n19(r,e instanceof fe?e:g())}fn(r){if(Bf(r),r.op())throw $f("Expected 'null' literal");return r.pp(),Ys()}}class Um{constructor(){cc=this,this.o18_1=sE("kotlinx.serialization.json.JsonLiteral",ja())}dn(){return this.o18_1}o19(r,e){if(Da(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=T2(e.g18_1);if(t!=null)return r.br(t);var i=j0(e.g18_1),a=i;if((a==null?null:new Qn(a))!=null){var s=i,o=(s==null?null:new Qn(s)).lm_1,u=r.gr(Yl(Ls()).dn()),c=o;return u.br(c),sr}var f=Xc(e.g18_1);if(f!=null)return r.dr(f);var v=B2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof ct?e:g())}fn(r){var e=tu(r),t=e.s17();if(!(t instanceof ct)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(jr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Fr(s))}else a=null;var o=a;throw Or.g19(Wr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Gs{constructor(r){this.p19_1=S_(r)}co(){return Je(this).co()}do(){return Je(this).do()}go(){return Je(this).go()}io(r){return Je(this).io(r)}jo(r){return Je(this).jo(r)}ko(r){return Je(this).ko(r)}lo(r){return Je(this).lo(r)}mo(r){return Je(this).mo(r)}}class Af{}class Tf extends Rn{static w19(r){var e=this.on(r);return un(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class Or extends Tf{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return un(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Ks extends Tf{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(KI(r,t));return un(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Ws{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return sr}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return sr}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(M(r))}x1a(r){return this.i1a_1.w1a(M(r))}y1a(r){return this.i1a_1.w1a(M(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class V1 extends Ws{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(k1(e))}else{var t=r;this.r1a(k1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(S1(e))}else{var t=r;this.r1a(S1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(w1(e))}else{var t=r;this.r1a(w1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(E1(e))}else{var t=r;this.r1a(E1(t))}}}class X1 extends Ws{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class jm extends Ws{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class qf{constructor(r){var e=this;e.n1b_1=new _g(r,HI(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class Nm{}class Dm{}class Lm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&bs(this.x1b_1),e===this.z1b_1.length&&Sh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&Sh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:vc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=fc)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=nn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&z(a,he))if(P(a.do(),Fs()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===vc?r.ca("[<debug info disabled>]"):a!==fc&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class Of{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(Wm())}b15(r,e){}e15(r,e,t){var i=t.dn();eC(this,i,e)}f15(r,e){}g15(r,e){}}class Pm{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=ul(this,!0);else if(r===0)e=ul(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&bs(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=sC(this)):(t=iC(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&bs(this.x1c_1);var i=iy(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+dl(r));return e}}class Xa extends se{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class ga{}class Q1{constructor(){this.t1b_1=Th(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=Th(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof ga?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof ga?e:g());var a=i;return a??null}}class Mm{constructor(r){this.n1d_1=r}}class ws extends Ci{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new qf(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new Pm(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof _a?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=vl(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=z(r,sa)?r:g(),o;r:{var u;if(s instanceof _a?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=vl(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof er)){var h="Expected "+Ur(er).oc()+", but had "+jr(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Fr(m))}else _=null;var w=_;throw Or.g19(Wr(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:Cn(k),E=S==null?null:Mn(S),I;try{I=I1(s,this,E)}catch(Q){var A;if(Q instanceof Rn){var q=Q,j=ln(q.message),F;if(this.r17().h15_1.p17_1){var O=x.toString();F=b(Fr(O))}else F=null;var L=F;throw Or.g19(Wr(-1,j,null,null,L),j,-1,null,L,null)}else throw Q}var H=I,B=z(H,sa)?H:g();o=hy(this.r17(),c,x,B)}return o}else a=i;var $=a,R;try{R=I1(r,this,$)}catch(Q){var X;if(Q instanceof Rn){var J=Q,tr=Xi($2(ln(J.message),10),"."),Y=F2(ln(J.message),10,"");this.r15_1.s1b(tr,l,Y)}else throw Q;R=X}var G=R,ar=z(G,sa)?G:g();return this.u15_1=new Mm(t),ar.fn(this)}catch(Q){if(Q instanceof Jl){var ur=Q;throw ms(ln(ur.message),"at path")?ur:zE(ur,Pb(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw Q}}cq(r){var e=uy(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),pC(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new ws(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new ws(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&Hf(r,this.p15_1)&&dC(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&qi(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(fl())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=mC(this,r);break;case 2:e=_C(this);break;default:e=wC(this);break}return this.q15_1.equals(fl())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,M(Ku(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),Ku(r)}sp(){var r=this.r15_1.z1d();return ir(r,M(Wu(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Wu(r)}tp(){var r=this.r15_1.z1d();return ir(r,M(Qr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Qr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=zo(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Wc(i))return i;yh(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=zo(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Yc(i))return i;yh(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return Gf(r)?new Uf(this.r15_1,this.p15_1):super.zp(r)}}class Uf extends Ci{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw kr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=xz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=Sz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=zz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=Ez(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class la extends Bs{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(FI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof _a,i;if(t)i=!this.r17().h15_1.o17_1.equals(Wm());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Vl())||P(s,Sf());break;default:Cs();break}i=a}var o=i,u=o?vl(r.dn(),this.r17()):null,c;if(t){var f=r instanceof _a?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw U.v(b(v))}else break n;var h=Pz(f,this,e);c=z(h,Fl)?h:g()}else c=r;var d=c;if(u!=null){cC(this.r17(),r,d,u),fC(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=uy(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;xC(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??la.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(ZI(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if(Gf(r)){var t,i=this.k1c_1;if(i instanceof V1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new V1(a,s)}var o=t;e=la.c1e(o,this.l1c_1,this.m1c_1,null)}else if(SC(r)){var u,c=this.k1c_1;if(c instanceof X1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new X1(f,v)}var h=u;e=la.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!Wc(r))throw wh(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Yc(r))throw wh(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class nu extends Fg{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof _a?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=vl(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof er)){var o="Expected "+Ur(er).oc()+", but had "+jr(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Fr(f))}else c=null;var v=c;throw Or.g19(Wr(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:Cn(d),m=_==null?null:Mn(_),w;try{w=I1(r,this,m)}catch(j){if(j instanceof Rn){var x=j,k=ln(x.message),S;if(this.r17().h15_1.p17_1){var E=h.toString();S=b(Fr(E))}else S=null;var I=S;throw Or.g19(Wr(-1,k,null,null,I),k,-1,null,I,null)}else throw j}var A=w,q=z(A,sa)?A:g();e=hy(this.r17(),i,h,q)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Fs())?a=!0:a=t instanceof qa,a){var s=this.r17(),o=r.co();if(!(e instanceof cn)){var u="Expected "+Ur(cn).oc()+", but had "+jr(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Fr(v))}else f=null;var h=f;throw Or.g19(Wr(-1,u,c,null,h),u,-1,c,h,null)}i=new rc(s,e)}else if(P(t,Xl())){var d=this.r17(),_=cl(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Fn?x=!0:x=P(m,Ti()),x){var k=this.r17(),S=r.co();if(!(e instanceof er)){var E="Expected "+Ur(er).oc()+", but had "+jr(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var q=b(e);A=b(Fr(q))}else A=null;var j=A;throw Or.g19(Wr(-1,E,I,null,j),E,-1,I,j,null)}w=new Bm(k,e,r)}else if(d.h15_1.b17_1){var F=this.r17(),O=r.co();if(!(e instanceof cn)){var L="Expected "+Ur(cn).oc()+", but had "+jr(e).oc()+" as the serialized body of "+O,H=this.q13(),B;if(this.r17().h15_1.p17_1){var $=b(e);B=b(Fr($))}else B=null;var R=B;throw Or.g19(Wr(-1,L,H,null,R),L,-1,H,R,null)}w=new rc(F,e)}else throw Qm(_);i=w}else{var X=this.r17(),J=r.co();if(!(e instanceof er)){var tr="Expected "+Ur(er).oc()+", but had "+jr(e).oc()+" as the serialized body of "+J,Y=this.q13(),G;if(this.r17().h15_1.p17_1){var ar=b(e);G=b(Fr(ar))}else G=null;var ur=G;throw Or.g19(Wr(-1,tr,Y,null,ur),tr,-1,Y,ur,null)}i=new Na(X,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof fe)}m1e(r){return this.l1e(r)!==Ys()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Vm(c),v;f==null?qn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Le(-128,127);ao(z(h,na)?h:g(),f)?v=Ku(f):v=null;var d=v,_;d==null?qn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Le(-32768,32767);ao(z(h,na)?h:g(),f)?v=Wu(f):v=null;var d=v,_;d==null?qn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Le(-2147483648,2147483647);ao(z(h,na)?h:g(),f)?v=Qr(f):v=null;var d=v,_;d==null?qn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v;f==null?qn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=qI(c),v;f==null?qn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Wc(h))return h;var _=bh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Fr(x))}else w=null;var k=w;throw Or.g19(Wr(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=OI(c),v;f==null?qn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Yc(h))return h;var _=bh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Fr(x))}else w=null;var k=w;throw Or.g19(Wr(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Fr(o))}else s=null;var u=s;throw Or.g19(Wr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new Sn(Ob(c.w17())),v;f==null?qn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof U)qn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+Ur(fr).oc()+", but had "+jr(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Fr(s))}else a=null;var o=a;throw Or.g19(Wr(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ct)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Fr(d))}else h=null;var _=h;throw Or.g19(Wr(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Fr(S))}else k=null;var E=k;throw Or.g19(Wr(-1,m,w,x,E),m,-1,w,E,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if(Gf(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+Ur(fr).oc()+", but had "+jr(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Fr(f))}else c=null;var v=c;throw Or.g19(Wr(-1,o,u,null,v),o,-1,u,v,null)}var h=Wf(i,a.w17());t=new Uf(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new Rm(this.r17(),this.l2(),this.h1e_1).zp(r)}}class Na extends nu{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new qf(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=iu(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&EC(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!Hf(r,this.r17())&&IC(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??ke(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof er)){var a="Expected "+Ur(er).oc()+", but had "+jr(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Fr(u))}else o=null;var c=o;throw Or.g19(Wr(-1,a,s,null,c),a,-1,s,c,null)}return new Na(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class rc extends nu{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1(jx(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class Rm extends nu{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw U.v(b(e))}return this.y1f_1}}class Bm extends Na{constructor(r,e,t){super(r,e,t),this.l1g_1=wa(e.p2()),this.m1g_1=Hs(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?ke(this.l2(),r):re(r)}dq(r){}}class $m{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new Lm(this.x15_1),this.a16_1=null,this.b16_1=nn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(rr(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=dl(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=Ge(r),s=dl(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(rr(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,Ge(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==rr(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&Ge(rr(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(jn(t,r,e))}c1d(){return this.a16_1!=null?Ch(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=rr(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(CC(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=rr(r,i);var u;o?u=Uu(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&AC(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return Ch(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=Ge(rr(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(rr(this.p1g(),r)));for(var t=!1;Ge(rr(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,Uu(this,0,0);r=i}var a;t?a=Uu(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=T.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),sr;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Fu(e)!==8&&this.s1b("found ] instead of }"),Wv(e)):i===7?(Fu(e)!==6&&this.s1b("found } instead of ]"),Wv(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return sr}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=J2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw GI(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=rr(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Ge(f);if(v!==0)break r;r=r+1|0;var h=ie(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=Ar(d,M(10));a=hr(_,M(h));continue r}var m=i,w=Ar(m,M(10));i=Jr(w,M(h)),nr(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),rr(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Zn(i)*OC(a,o);(k>Zn(new y(-1,2147483647))||k<Zn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=Un(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=an(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(rr(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=qC(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),rr(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class Fm{constructor(){dc=this,this.x1g_1=vs(117),this.y1g_1=new Int8Array(126),jC(this),NC(this)}}class jf extends $m{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,Ge(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return sr;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=Dl(this.p1g(),34,r);if(e===-1){this.d1d();var t=dl(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,ae(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Jm extends jf{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,Ge(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return sr;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,Ge(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=Dl(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=Ao(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class nc{constructor(){this.n15_1=nn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){hl(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var sl;function ze(){return sl===l&&new gm,sl}function zI(n,r){n=n===l?ze():n;var e=new mm(n);r(e);var t=e.x16();return new ym(t,e.u16_1)}function EI(n){if(P(n.pq(),Ql()))return sr;var r=new Of(n.h15_1);n.pq().s14(r)}var gh;function Nf(){if(gh)return sr;gh=!0,Hm=new vo("NONE",0),Gm=new vo("ALL_JSON_OBJECTS",1),Km=new vo("POLYMORPHIC",2)}var Hm,Gm,Km;function Wm(){return Nf(),Hm}function II(){return Nf(),Gm}function Ym(){return Nf(),Km}function CI(){return pe(),Zm}var Zm,Df,ec;function Dr(n){pe();var r=n instanceof er?n:null,e;return r==null?Lf(n,"JsonObject"):e=r,e}function re(n){return pe(),n==null?Ys():new ct(n,!0)}function os(n){pe();var r=n instanceof cn?n:null,e;return r==null?Lf(n,"JsonArray"):e=r,e}var ol;function Ys(){return ol===l&&new fe,ol}function Mn(n){pe();var r;return n instanceof fe?r=null:r=n.w17(),r}function Cn(n){pe();var r=n instanceof fr?n:null,e;return r==null?Lf(n,"JsonPrimitive"):e=r,e}function AI(n){pe();var r;try{r=Qi(n)}catch(t){var e;if(t instanceof Or)e=null;else throw t;r=e}return r}function TI(n){pe();var r;try{r=Qi(n)}catch(o){var e;if(o instanceof Or)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Le(-2147483648,2147483647);return ao(z(s,na)?s:g(),a)?Qr(a):null}function Vm(n){return pe(),zC(n.w17())}function Lf(n,r){throw pe(),U.v("Element "+b(jr(n))+" is not a "+r)}function Qi(n){return pe(),Wf(ze(),n.w17()).h18()}function qI(n){pe();var r=n.w17();return zo(r)}function OI(n){return pe(),zo(n.w17())}var mh;function pe(){mh||(mh=!0,Zm=Js("kotlinx.serialization.json.JsonUnquotedLiteral",ys()))}function ll(n,r,e){return n.j18(r,re(e))}function UI(n){return n.zo("JsonPrimitive",Va(jI)),n.zo("JsonNull",Va(NI)),n.zo("JsonLiteral",Va(DI)),n.zo("JsonObject",Va(LI)),n.zo("JsonArray",Va(PI)),sr}function jI(){return Pf().m18_1}function NI(){return Rf().n18_1}function DI(){return Xm().o18_1}function LI(){return eu().p18_1}function PI(){return Mf().q18_1}var tc;function ft(){return tc===l&&new Em,tc}var ic;function Pf(){return ic===l&&new Im,ic}var ac;function MI(){return ac===l&&new Cm,ac}var sc;function Mf(){return sc===l&&new Am,sc}var oc;function RI(){return oc===l&&new Tm,oc}var lc;function eu(){return lc===l&&new qm,lc}var uc;function Rf(){return uc===l&&new Om,uc}function Va(n){return new Gs(n)}var cc;function Xm(){return cc===l&&new Um,cc}function Da(n){BI(n)}function tu(n){var r=z(n,ru)?n:null,e;if(r==null)throw kr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(jr(n))));return e=r,e}function Bf(n){tu(n)}function BI(n){var r=z(n,Af)?n:null,e;if(r==null)throw kr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(jr(n))));return e=r,e}function Je(n){var r=n.p19_1,e=ki;return xa("original",1,e,$I(),null),r.l2()}function $I(){return Re(n=>Je(n),1,0,5)}function FI(n,r){return r.h15_1.c17_1?new jm(n,r):new Ws(n)}function JI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function HI(n){return Re((r,e)=>{var t=n;return JI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Fr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(jn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=fn(i,0),c=Et(a,C(n));return s+b(jn(n,u,c))+o}function Wr(n,r,e,t,i){return Ff(n,r,e,t,i)}function $f(n,r){return r=r===l?null:r,Or.g19(Ff(-1,n,null,r,null),n,-1,null,null,r)}function qi(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function yh(n,r){n.s1b(Jf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Qm(n){return Ks.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function wh(n,r){return r=r===l?null:r,Ks.h1a(Jf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function bh(n,r){return Jf(n,r)}function Ff(n,r,e,t,i){var a=nn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||ut(e)||(a.ca(" at path: "),a.ca(e)),t==null||ut(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Jf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function GI(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Fr(a,e)):s=null;var o=s;return Or.g19(Ff(e,r,t,i,o),r,e,t,o,i)}function KI(n,r){var e;return r==null||ut(r)?e="":e=`
`+r,n+e}function WI(){return Ie(),ry}var ry;function YI(){return Ie(),ny}var ny;function Hf(n,r){Ie();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof bm){i=!0;break r}}i=!1}e=i}return e}function iu(n,r,e){if(Ie(),ey(r,n)){var t=e.toLowerCase();return Tu(n,r,t)}var i=au(n,r);if(i!=null)return Tu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:Tu(n,r,e)}function ZI(n,r,e){Ie();var t=au(n,r);return t==null?n.io(e):ty(n,r,t)[e]}function VI(n,r){Ie();var e=au(n,r);return e==null?EE(n):zp(ty(n,r,e))}function ey(n,r){return Ie(),n.h15_1.l17_1&&P(r.do(),Ti())}function Tu(n,r,e){Ie();var t=XI(r,n).o2(e);return t??-3}function au(n,r){return Ie(),P(n.do(),Vl())?r.h15_1.k17_1:null}function ty(n,r,e){Ie();var t=_y(r),i=YI();return t.u1b(n,i,rC(n,e))}function XI(n,r){Ie();var e=_y(n),t=WI();return e.u1b(r,t,nC(r,n))}function QI(n,r){Ie();var e=vr.q4(),t=ey(r,n),i=au(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=T.m(),f=u.x();f.y();){var v=f.z();v instanceof km&&c.n(v)}var h=Nc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,kh(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||kh(e,n,S,o)}while(a<s);var E;return e.i1()?E=Nr():E=e,E}function rC(n,r){return()=>{for(var e=An.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Ks.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function nC(n,r){return()=>QI(n,r)}function kh(n,r,e,t){var i=P(r.do(),Ti())?"enum value":"property";if((z(n,yn)?n:g()).m2(e))throw $f("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(ke(n,e))+" in "+b(r)));n.s2(e,t)}var xh;function Ie(){xh||(xh=!0,ry=new ga,ny=new ga)}var fc,vc;function Sh(n){var r=Hs(n.b1c_1,2);n.z1b_1=a_(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;qk(o,i,0,0,s),n.a1c_1=i}function eC(n,r,e){var t=r.do(),i;if(t instanceof qa?i=!0:i=P(t,am()),i)throw U.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return sr;var a,s;if(P(t,Fs())||P(t,Xl())?s=!0:s=t instanceof Fn,s?a=!0:a=t instanceof Hl,a)throw U.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function tC(n,r,e,t){var i=su(),a=uC().c1(),s=Array(a),o=la.t1c(r,n,i,s);o.rr(e,t)}function iC(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||qi(n.u1c_1),n.u1c_1.z1c(7)),new er(e)}function*aC(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(sr,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||qi(n.u1c_1),n.u1c_1.z1c(7)),new er(i)}function iy(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=T.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||qi(n.u1c_1,"array"),n.u1c_1.z1c(9)),new cn(e)}function ul(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Ys():new ct(t,r)}function sC(n){return CS(new fp(oC(n)),sr)}function oC(n){return Re((r,e,t)=>ok(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=ul(n,!0);else if(a===0)s=ul(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&bs(o.x1c_1);var u=yield*aC(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&bs(c.x1c_1);var f=iy(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function bs(n){throw $f("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var zh;function La(){if(zh)return sr;zh=!0,ay=new Xa("OBJ",0,123,125),sy=new Xa("LIST",1,91,93),oy=new Xa("MAP",2,123,125),ly=new Xa("POLY_OBJ",3,91,93)}var ay,sy,oy,ly;function lC(){return La(),[su(),hc(),fl(),cy()]}function uC(){return La(),qu==null&&(qu=y2(lC())),qu}var qu;function uy(n,r){var e=r.do(),t;if(e instanceof qa)t=cy();else if(P(e,Fs()))t=hc();else if(P(e,Xl())){var i=cl(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Fn?o=!0:o=P(a,Ti()),o)s=fl();else if(n.h15_1.b17_1)s=hc();else throw Qm(i);t=s}else t=su();return t}function cl(n,r){var e;if(P(n.do(),am())){var t=eE(r,n),i=t==null?null:cl(t,r);e=i??n}else n.fo()?e=cl(n.lo(0),r):e=n;return e}function su(){return La(),ay}function hc(){return La(),sy}function fl(){return La(),oy}function cy(){return La(),ly}function vl(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof wm)return t.k1d_1}return r.h15_1.h17_1}function cC(n,r,e,t){return vC(n,r,e,t)}function fC(n){if(n instanceof Hl){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw kr.o3(b(r))}if(n instanceof Fn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw kr.o3(b(e))}if(n instanceof qa){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw kr.o3(b(t))}}function vC(n,r,e,t){if(VI(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(II())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Ks.h1a(o,a,u)}}function hC(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function dC(n,r){for(;n.rq(r)!==-1;);}function pC(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function _C(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&qi(n.r15_1),t=-1;return t}function gC(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),Ti())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=iu(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function mC(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=bC(n);n.r15_1.o1d(58);var i=iu(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&gC(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=yC(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&qi(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function yC(n,r,e){return Hf(r,n.p15_1)||hC(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function wC(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&qi(n.r15_1,"array"),e=-1),e}function bC(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function kC(){return Kf(),fy}var fy;function xC(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function Gf(n){return Kf(),n.fo()&&kC().l1(n)}function SC(n){return Kf(),n.fo()&&P(n,CI())}var Eh;function Kf(){Eh||(Eh=!0,fy=ei([gf(Bl()).dn(),Yl(Ls()).dn(),mf(Rl()).dn(),yf($l()).dn()]))}function Ou(){return ou(),vy}var vy;function to(n){ou();var r=n&15,e;if(r<10){var t=48,i=Z(t);e=We(r+i|0)}else{var a=r-10|0,s=97,o=Z(s);e=We(a+o|0)}return e}function hl(n,r){ou(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Z(s);o<Ou().length&&Ou()[o]!=null&&(n.yd(r,e,a),n.ca(Ou()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function zC(n){return ou(),Rv(n,"true",!0)?!0:Rv(n,"false",!0)?!1:null}var Ih;function ou(){if(!Ih){Ih=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=to(e>>12),i=to(e>>8),a=to(e>>4),s=to(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Z(o)]='\\"';var u=92;n[Z(u)]="\\\\";var c=9;n[Z(c)]="\\t";var f=8;n[Z(f)]="\\b";var v=10;n[Z(v)]="\\n";var h=13;n[Z(h)]="\\r",n[12]="\\f",vy=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Z(w),k=34,S=Z(k);d[x]=Ln(S);var E=92,I=Z(E),A=92,q=Z(A);d[I]=Ln(q);var j=9,F=Z(j),O=116,L=Z(O);d[F]=Ln(L);var H=8,B=Z(H),$=98,R=Z($);d[B]=Ln(R);var X=10,J=Z(X),tr=110,Y=Z(tr);d[J]=Ln(Y);var G=13,ar=Z(G),ur=114,Q=Z(ur);d[ar]=Ln(Q);var Tr=102,zr=Z(Tr);d[12]=Ln(zr)}}function hy(n,r,e,t){var i=t.dn();return new Na(n,e,i,r,i).bq(t)}function qn(n,r,e,t){var i=Se(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Fr(u))}else o=null;var c=o;throw Or.g19(Wr(-1,a,s,null,c),a,-1,s,c,null)}function EC(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof fe:u=!1,u){a=!0;break r}if(P(o.do(),Ti())){var c;if(o.eo()?c=t instanceof fe:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:Mn(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=iu(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function IC(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Fr(s))}else a=null;var o=a;throw Or.g19(Wr(-1,e,t,i,o),e,-1,t,o,i)}function CC(n,r,e){return n.o1g(r,e),TC(n,e+1|0)}function Uu(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function Ch(n){var r=ln(n.a16_1);return n.a16_1=null,r}function AC(n){return rr(n.p1g(),n.y15_1-1|0)!==34}function TC(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i);if(a===117)return dy(n,n.p1g(),e);var s=Z(a),o=UC(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function dy(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),dy(n,r,n.y15_1)):(n.b16_1.da(We((((io(n,r,e)<<12)+(io(n,r,e+1|0)<<8)|0)+(io(n,r,e+2|0)<<4)|0)+io(n,r,e+3|0)|0)),e+4|0)}function io(n,r,e){var t=rr(r,e),i;if(48<=t&&t<=57){var a=Z(t),s=48;i=a-Z(s)|0}else if(97<=t&&t<=102){var o=Z(t),u=97;i=(o-Z(u)|0)+10|0}else if(65<=t&&t<=70){var c=Z(t),f=65;i=(c-Z(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function qC(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i),s=Z(a)|32,o,u=116;if(s===Z(u))Ah(n,"rue",e),o=!0;else{var c=102;s===Z(c)?(Ah(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function Ah(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=rr(n.p1g(),e+a|0),u=Z(s);u!==(Z(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function OC(n,r){var e;switch(r){case!1:var t=-Zn(n);e=Math.pow(10,t);break;case!0:var i=Zn(n);e=Math.pow(10,i);break;default:Cs();break}return e}function Ge(n){var r;if(Z(n)<126){var e=py().y1g_1;r=e[Z(n)]}else r=0;return r}function dl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function UC(n){return n<117?py().x1g_1[n]:0}function jC(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,ni(n,e,117)}while(r<=31);ni(n,8,98),ni(n,9,116),ni(n,10,110),ni(n,12,102),ni(n,13,114),ju(n,47,47),ju(n,34,34),ju(n,92,92)}function NC(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Yi(n,e,127)}while(r<=32);Yi(n,9,3),Yi(n,10,3),Yi(n,13,3),Yi(n,32,3),gt(n,44,4),gt(n,58,5),gt(n,123,6),gt(n,125,7),gt(n,91,8),gt(n,93,9),gt(n,34,1),gt(n,92,2)}function ni(n,r,e){if(e!==117){var t=Z(e);n.x1g_1[t]=We(r)}}function ju(n,r,e){var t=Z(r);return ni(n,t,e)}function Yi(n,r,e){n.y1g_1[r]=e}function gt(n,r,e){var t=Z(r);return Yi(n,t,e)}var dc;function py(){return dc===l&&new Fm,dc}function Wf(n,r){return n.h15_1.n17_1?new Jm(r,n.h15_1):new jf(r,n.h15_1)}function _y(n){return n.j15_1}function Th(n){return us.l7(n)}p(If,"Json");D(gm,"Default");p(mm,"JsonBuilder");p(ym,"JsonImpl");p(wm,"JsonClassDiscriminator");p(bm,"JsonIgnoreUnknownKeys");p(km,"JsonNames");p(Cf,"JsonConfiguration");p(vo,"ClassDiscriminatorMode");Mr(ru,"JsonDecoder",l,l,[Gl,Kl]);rn(xm);p(Ye,"JsonElement",l,l,l,l,l,{0:ft});rn(xI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Pf});rn(SI);p(cn,"JsonArray",l,l,[zn],l,l,{0:Mf});rn(Sm);p(er,"JsonObject",l,l,[yn],l,l,{0:eu});D(fe,"JsonNull",l,l,l,l,l,{0:Rf});p(ct,"JsonLiteral");p(wt,"JsonObjectBuilder");p(zm,"JsonArrayBuilder");D(Em,"JsonElementSerializer",l,l,[cr]);D(Im,"JsonPrimitiveSerializer",l,l,[cr]);D(Cm,"JsonArrayDescriptor",l,l,[he]);D(Am,"JsonArraySerializer",l,l,[cr]);D(Tm,"JsonObjectDescriptor",l,l,[he]);D(qm,"JsonObjectSerializer",l,l,[cr]);D(Om,"JsonNullSerializer",l,l,[cr]);D(Um,"JsonLiteralSerializer",l,l,[cr]);Lr(Gs).eo=Ei;Lr(Gs).fo=Ii;Lr(Gs).ho=Ps;p(Gs,l,l,l,[he]);Mr(Af,"JsonEncoder",l,l,[vf]);p(Tf,"JsonException");p(Or,"JsonDecodingException");p(Ks,"JsonEncodingException");p(Ws,"Composer");p(V1,"ComposerForUnsignedNumbers");p(X1,"ComposerForUnquotedLiterals");p(jm,"ComposerWithPrettyPrint");p(qf,"JsonElementMarker");D(Nm,"Tombstone");D(Dm,"RedactedKey");p(Lm,"JsonPath");Lr(Of).d15=Dz;p(Of,"JsonSerializersModuleValidator",l,l,[Xg]);p(Pm,"JsonTreeReader",l,l,l,[1]);p(Xa,"LexerMode");p(ga,"Key",ga);p(Q1,"DescriptorSchemaCache",Q1);p(Mm,"DiscriminatorHolder");p(ws,"StreamingJsonDecoder",l,l,[ru]);p(Uf,"JsonDecoderForUnsignedTypes");p(la,"StreamingJsonEncoder",l,l,[Af]);p(nu,"AbstractJsonTreeDecoder",l,l,[ru]);p(Na,"JsonTreeDecoder");p(rc,"JsonTreeListDecoder");p(Rm,"JsonPrimitiveDecoder");p(Bm,"JsonTreeMapDecoder");p($m,"AbstractJsonLexer");D(Fm,"CharMappings");p(jf,"StringJsonLexer");p(Jm,"StringJsonLexerWithComments");p(nc,"StringJsonWriter",nc);Df=new xm;ec=new Sm;fc=new Nm;vc=new Dm;var qh=Math.imul;class gy{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class my{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class pc{constructor(r,e,t){this.k1j_1=r,this.l1j_1=e,this.m1j_1=t}}class yy{constructor(r,e){this.c1k_1=r,this.d1k_1=e}}class wy{constructor(r,e,t,i,a,s,o,u,c,f,v){this.e1k_1=r,this.f1k_1=e,this.g1k_1=t,this.h1k_1=i,this.i1k_1=a,this.j1k_1=s,this.k1k_1=o,this.l1k_1=u,this.m1k_1=c,this.n1k_1=f,this.o1k_1=v}}class by{constructor(r,e,t){this.p1k_1=r,this.q1k_1=e,this.r1k_1=t}}class ky{constructor(r){this.s1k_1=r}zf(r,e){return this.s1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.s1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class xy{constructor(r){this.t1k_1=r}zf(r,e){return this.t1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.t1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class Sy{constructor(r){this.u1k_1=r}zf(r,e){return this.u1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.u1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class zy{constructor(r){this.v1k_1=r}zf(r,e){return this.v1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class Ey{constructor(r){this.b1l_1=r}r4(){return this.b1l_1.x()}c1l(r){return Pn(r.d1k_1)}s4(r){return this.c1l(r)}}class Iy{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?mr():e,t=t===l?null:t,i=i===l?mr():i,a=a===l?mr():a,s=s===l?mr():s,o=o===l?mr():o,u=u===l?mr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?mr():v,h=h===l?mr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.d1j_1,S=this.i1i_1,E=ot([this.a1i_1,k,S==null?null:S.g1j_1]),I=T.g1(Vr(E,10)),A=E.x();A.y();){var q=A.z(),j=ze().m15(q);I.n(j)}w.m1i_1=I;for(var F=this,O=T.m(),L=u.x();L.y();){var H=L.z();H.t1h_1||O.n(H)}F.n1i_1=O;var B=this,$;if(!this.n1i_1.i1())$=!0;else{var R;r:{var X;if(z(u,W)?X=u.i1():X=!1,X){R=!1;break r}for(var J=u.x();J.y();){var tr=J.z();if(tr.u1h_1!=null){R=!0;break r}}R=!1}$=R}B.o1i_1=$,this.p1i_1=at(i);for(var Y=this,G=T.g1(Vr(r,10)),ar=r.x();ar.y();){var ur=ar.z(),Q="/"+Q_(ur,ba([47]));G.n(Q)}Y.q1i_1=G,this.r1i_1=Nr(),this.s1i_1=!1,this.t1i_1=!1;var Tr=this;Tr.u1i_1=An.e1();var zr=this;zr.v1i_1=T.m(),this.w1i_1=Nr()}d1l(r,e){this.w1i_1=e;var t=Dr(ze().m15(r)),i=c5(this,u5(this,l5(this,t))),a=or(i,"components"),s=a==null?null:or(a,"schemas"),o=s??Nr();this.r1i_1=C5(this,i,o);var u=this,c;if(ml(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(z(f,W)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(ml(_)){v=!0;break r}}v=!1}c=v}u.s1i_1=c;var m=this,w;if(gl(i,po()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(z(x,W)?S=x.i1():S=!1,S){k=!1;break r}for(var E=x.x();E.y();){var I=E.z();if(gl(I,po())){k=!0;break r}}k=!1}w=k}m.t1i_1=w;var A=xe(this.s1i_1?Jy().q2():mr(),this.t1i_1?po().q2():mr());this.u1i_1.v2(),this.v1i_1.v2();for(var q=k5(this,o)+d5(this,o)+g5(this,o)+m5(this,o),j=o.p2(),F=T.g1(Vr(j,10)),O=j.x();O.y();){var L=O.z(),H=Pn(L);F.n(H)}for(var B=F,$=or(i,"paths"),R=($??Nr()).p2(),X=T.g1(Vr(R,10)),J=R.x();J.y();){var tr=J.z(),Y=cw(this,tr);X.n(Y)}var G=xe(xe(B,X),Vf());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var ar="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw kr.o3(b(ar))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw kr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var Q="permissions needs currentUser, which says who the permissions belong to.";throw kr.o3(b(Q))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var Tr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw kr.o3(b(Tr))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var zr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw kr.o3(b(zr))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var gr="guards needs currentUser, which says who is signed in.";throw kr.o3(b(gr))}var Er;if(this.h1i_1.i1())Er=!0;else{var wr=jh(),Ir;r:{var Pr;if(z(wr,W)?Pr=wr.i1():Pr=!1,Pr){Ir=!0;break r}for(var dr=wr.x();dr.y();){var Zr=dr.z();if(G.l1(Zr)){Ir=!1;break r}}Ir=!0}Er=Ir}if(!Er){var sn="guards exports "+V(jh())+", and the generated client already uses one of the names.";throw kr.o3(b(sn))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Hr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw kr.o3(b(Hr))}if(!(Uy(this.l1i_1).i1()||!G.l1("cookieConsent"))){var pr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw kr.o3(b(pr))}for(var $r=this.n1i_1,Gr=vr.q4(),en=$r.x();en.y();){var Rr=en.z(),Kr=_c(Rr.l1h_1),pn=Gr.o2(Kr),vn;if(pn==null){var _n=T.m();Gr.s2(Kr,_n),vn=_n}else vn=pn;var ee=vn;ee.n(Rr)}var Jn=Gr.q2(),Hn;r:{for(var _e=Jn.x();_e.y();){var Ue=_e.z();if(Ue.c1()>1){Hn=Ue;break r}}Hn=null}var ge=Hn;if(ge!=null){var $e="The cookies "+V(ge," and ",l,l,l,l,F5)+" would both be called "+_c(pb(ge).l1h_1)+" in TypeScript.";throw kr.o3(b($e))}var Fe=this.c1i_1,Ce;r:{for(var Gn=Fe.x();Gn.y();){var Tn=Gn.z();if(G.l1(Tn.x1h_1)){Ce=Tn;break r}}Ce=null}var xn=Ce;if(xn!=null){var En="constants("+xn.x1h_1+") would be exported as '"+xn.x1h_1+"', which the generated client already uses. Rename the object.";throw kr.o3(b(En))}var je=Xe("client.ts")+p5(this),Ui=this.j1i_1,Ne;Ui==null?Ne=null:Ne=`
reportErrors('`+Ui+`');
`;var vt=Ne,ji=je+(vt??""),Ni=this.k1i_1,ht;Ni==null?ht=null:ht=`
`+Ni+`
`;for(var Nt=ht,Ma=N("client.ts",ji+(Nt??"")),Ra=N("form.ts",Xe("form.ts")),Ba=N("form-state.svelte.ts",Xe("form-state.svelte.ts")),$a=this.d1i_1.i1()&&this.g1i_1.i1()?q:Xi(q,`export {};
`),Di=ui(this.u1i_1),Dt=N("types.ts",$a+V(Di,"",l,l,l,l,J5)+U5(this)+lw(this,"Permission",this.g1i_1)),dt=or(i,"paths"),Li=dt??Nr(),Pi=mo(o.p2(),"LucideIcon"),Lt=this.r1i_1.q2(),Pt=T.g1(Vr(Lt,10)),pt=Lt.x();pt.y();){var Mt=pt.z(),Rt=Mt.k1j_1;Pt.n(Rt)}var Mi=N("services.ts",T5(this,Li,vv(vv(Pi,Pt),A))),me=Xe("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.o1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Xi("current-user.svelte.ts",".ts")+`.js';
`:""),Bt;this.h1i_1.i1()?Bt="":Bt="export * from './"+Xi("guards.ts",".ts")+`.js';
`;var Fa=[Ma,Ra,Ba,Dt,Mi,N("index.ts",me+Bt+(this.i1i_1!=null?"export * from './"+Xi("preferences.svelte.ts",".ts")+`.js';
`:""))],Ri;this.c1i_1.i1()?Ri=[]:Ri=[N("constants.ts",YC(this.c1i_1))];var Zs=Ri,Ja;this.o1i_1?Ja=[N("cookies.ts",RC(this.l1i_1))]:Ja=[];var Vs=Ja,Bi=this.e1i_1,$i;Bi==null?$i=null:$i=[N("current-user.svelte.ts",w5(this,Bi))];var Xs=$i,Fi;Xs==null?Fi=[]:Fi=Xs;var Qs=Fi,Ji;this.h1i_1.i1()?Ji=[]:Ji=[N("guards.ts",_5(this))];var ro=Ji,no=this.i1i_1,Hi;no==null?Hi=null:Hi=[N("preferences.svelte.ts",y5(this,no))];var Ha=Hi,Gi;return Ha==null?Gi=[]:Gi=Ha,o5(this,uk([Fa,Zs,Vs,Qs,ro,Gi,[N("openapi.json",By().k15(Df.t17(),i)+`
`)]]))}e1l(r,e,t){return e=e===l?Nr():e,t===l?this.d1l(r,e):t.d1l.call(this,r,e)}}class ho extends se{constructor(r,e,t){super(r,e),this.y1k_1=t}p1g(){return Xe(this.y1k_1)}}class lu{constructor(r,e,t){this.f1l_1=r,this.g1l_1=e,this.h1l_1=t}toString(){return"GeneratedOperation(name="+this.f1l_1+", method="+this.g1l_1+", path="+this.h1l_1+")"}hashCode(){var r=oe(this.f1l_1);return r=qh(r,31)+oe(this.g1l_1)|0,r=qh(r,31)+oe(this.h1l_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof lu)||this.f1l_1!==r.f1l_1||this.g1l_1!==r.g1l_1||this.h1l_1!==r.h1l_1)}}class Cy{constructor(r){this.i1l_1=r}zf(r,e){return this.i1l_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.i1l_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return xr(this.g3())}}class Ay{u1j(r){return"Must be at least "+Fh(this,r)+"."}v1j(r){return"Must be at most "+Fh(this,r)+"."}a1k(r,e){return"Must be "+(e?"greater than":"at least")+" "+At(r)+"."}b1k(r,e){return"Must be "+(e?"less than":"at most")+" "+At(r)+"."}w1j(r){return"Must match "+r+"."}}class He{constructor(r,e){this.z1k_1=r,this.a1l_1=e}}class Zi{constructor(r,e,t){this.x1j_1=r,this.y1j_1=e,this.z1j_1=t}}class Ty{constructor(){bc=this,this.n1j_1=new Zi("email",On(new He("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.o1j_1=new Zi("uri",On(new He("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.p1j_1=new Zi("phone",On(new He("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.q1j_1=new Zi("slug",On(new He("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.r1j_1=new Zi("strong-password",kt([new He("^[\\s\\S]{10,}$","at least 10 characters"),new He("[a-z]","a lowercase letter"),new He("[A-Z]","an uppercase letter"),new He("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.s1j_1=kt([this.n1j_1,this.o1j_1,this.p1j_1,this.q1j_1,this.r1j_1])}t1j(r){var e=this.s1j_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(a.x1j_1===r){t=a;break r}}t=null}return t}}function DC(){return ne(),qy}var qy;function LC(){return ne(),Oy}var Oy;function te(n){return ne(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function _c(n){ne();var r=LC(),e=Q_(n,ba([46,95,45])),t=r.ye(e,BC);return DC().ue(t)?t:te(n)}function PC(n){ne();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.n1h_1," | ",l,l,l,l,$C);break;default:r="number";break}return r}function MC(n){ne();var r=PC(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+te(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+V(n.n1h_1,", ",l,l,l,l,FC)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?te(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+te(n.q1h_1),d="sameSite: "+te(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+te(m);var x=ot([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+_c(n.l1h_1)+": typedCookie"+k+"("+te(n.l1h_1)+", { "+V(x,", ")+" })"}function Uy(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return ui(ca(r))}function RC(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=JC,a=new gy(i),s=xi(r,a),o=Uy(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=ot([f,d]),m=T.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=V(k,", ",l,l,l,l,HC),E=nn.f();return E.ca("import { "+V(_,", ")+` } from './client.js';
`),s.i1()||E.ca(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,GC())+`
};
`),o.i1()||E.ca(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,KC)+"] as const, ["+S+`]);
`),E.toString()}function BC(n){return ne(),n.xf().d1(1).toUpperCase()}function $C(n){return ne(),te(n)}function FC(n){return ne(),te(n)}function JC(n,r){ne();var e=n.l1h_1,t=r.l1h_1;return Ut(e,t)}function HC(n){ne();var r=te(n.l1h_1),e=te(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+te(i)+" }"}function GC(){return Re(n=>MC(n),1,0,7,"cookieEntry")}function KC(n){return ne(),te(n)}var Oh;function ne(){Oh||(Oh=!0,qy=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Oy=St.te("[._-]+([A-Za-z0-9])"))}function WC(){return Pa(),jy}var jy;function Yf(n,r){Pa();var e;if(n instanceof fr)e=n.v17()?Ny(n.w17()):n.w17();else if(n instanceof cn)e=V(n,", ","[","]",l,l,ZC(r));else if(n instanceof er){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,VC(r))}e=t}else Cs();return e}function Ny(n){return Pa(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function YC(n){Pa();var r=XC,e=new my(r),t=xi(n,e);return V(t,`
`,l,l,l,l,QC)}function ZC(n){return r=>Yf(r,n)}function VC(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(WC().ue(e)?e:Ny(e))+": "+Yf(t,n+"    ")}}function XC(n,r){Pa();var e=n.x1h_1,t=r.x1h_1;return Ut(e,t)}function QC(n){return Pa(),"export const "+n.x1h_1+" = "+Yf(new er(n.y1h_1),"")+` as const;
`}var Uh;function Pa(){Uh||(Uh=!0,jy=St.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function Dy(){return Sr(),Ly}var Ly;function Zf(){return Sr(),Py}var Py;function My(){return Sr(),Ry}var Ry;function By(){return Sr(),$y}var $y;function jh(){return Sr(),Fy}var Fy;function Jy(){return Sr(),Hy}var Hy;function po(){return Sr(),Gy}var Gy;function r5(){return Sr(),Ky}var Ky;function n5(){return Sr(),Wy}var Wy;function e5(){return Sr(),Yy}var Yy;function Vf(){return Sr(),Zy}var Zy;function t5(){return Sr(),Vy}var Vy;function i5(){return Sr(),Xy}var Xy;function a5(){return Sr(),Qy}var Qy;function s5(){return Sr(),rw}var rw;function o5(n,r){var e=ql(r.slice());return tt(e,N(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+Sp(r,"",l,l,l,l,H5)))}function l5(n,r){for(var e=or(r,"paths"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();b5(n,o)&&i.s2(s.k2(),s.l2())}var u=fu(i);return new er(tt(r,N("paths",new er(u))))}function u5(n,r){if(n.b1i_1.i1())return r;for(var e=or(r,"components"),t=e??new er(Nr()),i=or(t,"schemas"),a=i??Nr(),s=ef(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.x1i_1,f=s.o2(c);if(f==null){var v=ze().m15(u.y1i_1);s.s2(c,v)}}for(var h=or(r,"paths"),d=h??Nr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=Dr(k),E=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),q=A.k2(),j=A.k2(),F=A.l2(),O,L;Dy().l1(j)?L=F instanceof er:L=!1,L?O=h5(n,F):O=F;var H=O;E.s2(q,H)}var B=new er(E);_.s2(x,B)}var $=_;return new er(tt(tt(r,N("paths",new er($))),N("components",new er(tt(t,N("schemas",new er(s)))))))}function c5(n,r){var e=or(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=or(i,"schemas"),s=a??Nr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof er?v=f5(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new er(tt(Dr(w),N("type",re("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),E=s.r2().x();E.y();){var I=E.z(),A=I.k2();(z(k,yn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var q=S.r2(),j=fn(Vr(q,10),16),F=vr.ha(j),O=q.x();O.y();){var L=O.z(),H=L.k2(),B=L.l2(),$=B instanceof er?B:null,R=N($==null?null:Nh(n,$),H);F.s2(R.ch_1,R.dh_1)}for(var X=F,J=vr.ha(k.c1()),tr=k.r2().x();tr.y();){var Y=tr.z(),G=Y.k2(),ar=Y.k2(),ur=Y.l2(),Q=X.o2(Nh(n,ur)),Tr=Q??ar;J.s2(G,Tr)}for(var zr=J,gr=vr.q4(),Er=s.r2().x();Er.y();){var wr=Er.z(),Ir=wr.k2();(zr.o2(Ir)==null||zr.o2(Ir)===Ir)&&gr.s2(wr.k2(),wr.l2())}for(var Pr=vr.ha(gr.c1()),dr=gr.r2().x();dr.y();){var Zr=dr.z(),sn=Zr.k2(),Hr=Zr.k2(),pr=Zr.l2(),$r=k.o2(Hr),Gr=$r??pr;Pr.s2(sn,Gr)}var en=Pr,Rr=new er(tt(i,N("schemas",new er(en))));return Dr(wc(zr,n,new er(tt(r,N("components",Rr)))))}function f5(n,r){var e;if(P(at(Oi(n,r)),ei(["object","null"]))){var t=or(r,"properties");e=!(t??Nr()).i1()}else e=!1;return e}function Nh(n,r){return new er(i2(r,"title"))}function v5(n,r){var e=new wt,t=new zm,i=new wt;ll(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new wt;ll(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function h5(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=ef(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new wt;ll(o,"description","");var u=new wt,c="application/json",f=new wt,v=new wt;ll(v,"$ref","#/components/schemas/"+s.x1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.z1i_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var E=m;i.s2(k,E)}}}return new er(tt(r,N("responses",new er(i))))}function d5(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=Dr(ze().m15(i)),s=An.e1();return`
`+Xf(n,"PublicConfig",a,s,r)}function p5(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Yn(Yn(t,"\\","\\\\"),"'","\\'")+`';
`}function _5(n){var r=n.h1i_1,e;r:{var t;if(z(r,W)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.b1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=G5,c=new ky(u),f=xi(o,c),v=V(f,"",l,l,l,l,K5),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+Xi("current-user.svelte.ts",".ts")+`.js';
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
`}function g5(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return nw(n,"CurrentUser",i.c1j_1,i.d1j_1,r)}function m5(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return nw(n,"UserPreferences",i.f1j_1,i.g1j_1,r)}function nw(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Pn(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Pn(c)+`;
`;var f=Dr(ze().m15(t)),v=An.e1();return`
`+Xf(n,r,f,v,i)}function y5(n,r){for(var e=or(Dr(ze().m15(r.g1j_1)),"properties"),t=(e??Nr()).p2(),i=r.j1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=V(f,", ",l,l,l,l,W5),h=By().k15(Df.t17(),ze().m15(r.i1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=Te(r.h1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function w5(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.e1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function b5(n,r){var e,t=n.z1h_1,i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||Se(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.q1i_1.i1())u=!0;else{var c=n.q1i_1,f;r:{var v;if(z(c,W)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||Se(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function k5(n,r){if(r.i1()&&n.p1i_1.i1()&&n.r1i_1.i1()&&!n.s1i_1&&!n.t1i_1)return`export {};
`;for(var e=An.e1(),t=T.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=N(s,Xf(n,Pn(s),Dr(o),e,r));t.n(u)}for(var c=t,f=n.r1i_1.q2(),v=T.m(),h=f.x();h.y();){var d=h.z();d.m1j_1&&v.n(d)}for(var _=T.g1(Vr(v,10)),m=v.x();m.y();){var w=m.z(),x=N(w.k1j_1,aw(n,w.k1j_1,w.l1j_1));_.n(x)}var k=_,S=xe(c,k),E=Y5,I=new xy(E),A=xi(S,I),q=V(A,`
`,l,l,l,l,Z5),j;e.l1("LucideIcon")?j=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:j="";var F=j,O=r.q2(),L;r:{var H;if(z(O,W)?H=O.i1():H=!1,H){L=!1;break r}for(var B=O.x();B.y();){var $=B.z();if(rv(n,Dr($))){L=!0;break r}}L=!1}var R=L,X=`declare const brand: unique symbol;
`,J;R||n.t1i_1?J=X:J=null;var tr=J,Y=Xe("dates.ts"),G;n.s1i_1?G=Y:G=null;var ar=G,ur=Xe("quantities.ts"),Q;n.t1i_1?Q=ur:Q=null;var Tr=Q,zr;C(q)===0?zr=null:zr=q;var gr=zr,Er=V(ot([tr,ar,Tr,gr]),`
`),wr;return C(Er)===0?wr=`export {};
`:wr=Er,F+wr}function Xf(n,r,e,t,i){var a=_l(n,fw(n,e),""),s=uu(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:os(u),f;if(c==null)f=null;else{var v;r:{var h;if(z(c,W)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof fe){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+aw(n,r,s);if(rv(n,e)){var m=Bn(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(nv(n,e))return a+("export interface "+r+" "+sw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+yc(n,e,i,"    ",Ot())+`),
`)+S5(n,e)+E5(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+Bn(n,e,t)+`;
`),x=x5(n,r,e,i);return w+(x??"")}function x5(n,r,e,t){var i=or(e,"discriminator"),a=i==null?null:Br(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=hn(e,"oneOf"),c=u??hn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=or(e,"discriminator"),d=h==null?null:or(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:wa(_),w=m??mr(),x;if(w.i1()){for(var k=T.g1(Vr(v,10)),S=v.x();S.y();){var E=S.z(),I=pl(n,Dr(E)),A;if(I==null)A=null;else{var q=t.o2(I);A=q==null?null:Dr(q)}var j=A,F=j??Dr(E),O=or(F,"properties"),L=O==null?null:or(O,o),H=L==null?null:hn(L,"enum"),B=H==null?null:Nc(H),$=B instanceof fr?B:null,R=$==null?null:Mn($),X;if(R==null)return null;X=R;var J=X;k.n(J)}x=k}else x=w;var tr=x;if(tr.i1())return null;var Y=ve(n,re(o)),G=V(tr,l,l,l,l,l,V5(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Y+"]]: (value: Extract<"+r+", { "+Be(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Y+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function S5(n,r){for(var e=vu(r,"required"),t=or(r,"properties"),i=t??Nr(),a=T.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=z5(n,Dr(c),e.l1(u)),v;if(f.i1())v=null;else{var h=Be(u);v="        "+h+": { "+V(f,l,l,l,l,l,X5)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+V(_,`
`)+`
    },
`}function z5(n,r,e){var t=Oi(n,r).l1("integer"),i=N("required","true"),a;ew(n,r,e)?a=i:a=null;var s=a,o=ye(n,r,"minLength"),u;o==null?u=null:u=N("minlength",At(o));var c=u,f=ye(n,r,"maxLength"),v;f==null?v=null:v=N("maxlength",At(f));var h=v,d=Ph(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=N("min",d);var m=_,w=Ph(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=N("max",w);var k=x,S=Br(r,"pattern"),E;return S==null?E=null:E=N("pattern",ve(n,re(S))),ot([s,c,h,m,k,E])}function ew(n,r,e){if(ev(n,r)||r.c18("enum")!=null)return!1;var t;if(Oi(n,r).l1("string")){var i=ye(n,r,"minLength");t=(i??0)>=1}else t=e&&tw(n,r);return t}function tw(n,r){var e=Oi(n,r),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function E5(n,r,e,t){if(!Qf(n,e,t,Ot()))return"";for(var i=vu(e,"required"),a=or(e,"properties"),s=a??Nr(),o=T.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=Dr(v),d="value"+(Zf().ue(f)?"."+f:"["+ve(n,re(f))+"]"),_=xe(I5(n,f,d,h,i.l1(f)),gc(n,h,d,mc(n,f),"        ",0,t));Ia(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+V(m,"",l,l,l,l,Q5)+`        return errors;
    },
`}function Qf(n,r,e,t){var i;if(nv(n,r)){var a=or(r,"properties"),s=(a??Nr()).q2(),o;r:{var u;if(z(s,W)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=Dr(f),h,d,_=s5(),m;n:{var w;if(z(_,W)?w=_.i1():w=!1,w){m=!1;break n}for(var x=_.x();x.y();){var k=x.z();if(ye(n,v,k)!=null||k==="pattern"&&Br(v,k)!=null){m=!0;break n}}m=!1}if(m?d=!0:d=yw().t1j(Br(v,"format"))!=null,d)h=!0;else{var S=pl(n,v),E;if(S==null)E=null;else{var I;if(t.l1(S))I=!1;else{var A=e.o2(S),q=A instanceof er?A:null,j;q==null?j=null:j=Qf(n,q,e,mo(t,S)),I=j===!0}E=I}h=E===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function pl(n,r){var e=Br(r,"$ref");if(e!=null)return js(e,47);var t=iw(n,r);if(t!=null)return pl(n,t);if(Oi(n,r).l1("array")){var i=or(r,"items"),a;return i==null?a=null:a=pl(n,i),a}return null}function iw(n,r){var e=hn(r,"oneOf"),t=e??hn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=T.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof er?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=T.m(),h=c.x();h.y();){var d=h.z();P(Oi(n,d),On("null"))||v.n(d)}f=v}var _=f;return _==null?null:Nc(_)}function I5(n,r,e,t,i){var a=ve(n,re(r)),s=ye(n,t,"minLength"),o=s==null?null:bo(s),u=ye(n,t,"maxLength"),c=u==null?null:bo(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=yw().t1j(Br(t,"format")),x=ye(n,t,"minimum"),k;x==null?k=null:k=N(x,!1);var S=k,E;if(S==null){var I=ye(n,t,"exclusiveMinimum"),A;I==null?A=null:A=N(I,!0),E=A}else E=S;var q=E,j=ye(n,t,"maximum"),F;j==null?F=null:F=N(j,!1);var O=F,L;if(O==null){var H=ye(n,t,"exclusiveMaximum"),B;H==null?B=null:B=N(H,!0),L=B}else L=O;var $=L,R=T.m();if(ew(n,t,i)&&tw(n,t)){var X="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+$t(a,n,"Required.");R.n(X)}if(o!=null||c!=null||m!=null||w!=null){var J="        if (typeof "+e+" === 'string') {";if(R.n(J),o!=null||c!=null){var tr="            const length = [..."+e+"].length;";R.n(tr)}if(o!=null){var Y="            if (length < "+o+") "+$t(a,n,Vi.u1j(o));R.n(Y)}if(c!=null){var G="            if (length > "+c+") "+$t(a,n,Vi.v1j(c));R.n(G)}if(m!=null){var ar=n.u1i_1,ur=Bh();ar.n(ur);var Q="            if (!matches("+ve(n,re(m))+", "+e+")) "+$t(a,n,Vi.w1j(m));R.n(Q)}if(w!=null){var Tr=n.u1i_1,zr=Bh();Tr.n(zr);var gr=V(w.y1j_1," && ",l,l,l,l,r7(n,e)),Er="            if (!("+gr+")) "+$t(a,n,w.z1j_1);R.n(Er)}var wr="        }";R.n(wr)}if(q!=null||$!=null){var Ir="        if (typeof "+e+" === 'number') {";if(R.n(Ir),q!=null){var Pr=q.hh(),dr=q.ih(),Zr=dr?"<=":"<",sn="            if ("+e+" "+Zr+" "+At(Pr)+") "+$t(a,n,Vi.a1k(Pr,dr));R.n(sn)}if($!=null){var Hr=$.hh(),pr=$.ih(),$r=pr?">=":">",Gr="            if ("+e+" "+$r+" "+At(Hr)+") "+$t(a,n,Vi.b1k(Hr,pr));R.n(Gr)}var en="        }";R.n(en)}if(!R.i1()){var Rr=n.u1i_1,Kr=mw();Rr.n(Kr)}return R}function gc(n,r,e,t,i,a,s){var o=Br(r,"$ref");if(o!=null){var u=js(o,47),c=s.o2(u),f=c instanceof er?c:null,v;if(f==null)return mr();v=f;var h=v;if(!Qf(n,h,s,Ot()))return mr();var d=n.u1i_1,_=kt([mw(),U7()]);return Ia(d,_),On(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Pn(u)+".validate("+e+"));")}var m=iw(n,r);if(m!=null)return gc(n,m,e,t,i,a,s);if(!Oi(n,r).l1("array"))return mr();var w=or(r,"items"),x;if(w==null)return mr();x=w;var k=x,S=a===0?"":""+(a+1|0),E="item"+S,I="index"+S,A=gc(n,k,E,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?mr():xe(xe(kt([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+E+", "+I+") => {"]),A),kt([i+"    });",i+"}"]))}function mc(n,r){return Yn(Yn(Yn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function ye(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:Mn(o);return u==null?null:Xc(u)}function Oi(n,r){var e=r.c18("type"),t;if(e instanceof cn){for(var i=T.g1(Vr(e,10)),a=e.x();a.y();){var s=a.z(),o=Cn(s).w17();i.n(o)}t=i}else e instanceof fr?t=On(e.w17()):t=mr();return t}function aw(n,r,e){var t=V(e,"",l,l,l,l,n7(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function C5(n,r,e){for(var t=vr.q4(),i=fu(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=uu(n,Dr(o));if(u!=null){var c=at(u),f=t.o2(c);if(f==null){var v=new pc(Pn(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();ra(n,h,d,x,Pn(w),Pn(w),!0)}var k=or(r,"paths");k==null||ra(n,h,d,k,"","",!1);for(var S=h.p2(),E=T.m(),I=S.x();I.y();){var A=I.z(),q;(z(t,yn)?t:g()).m2(A)?q=!1:q=!P(A,n.p1i_1),q&&E.n(A)}for(var j=e7(d),F=new Sy(j),O=xi(E,F),L=vr.ha(fn(Vr(O,10),16)),H=O.x();H.y();){var B=H.z(),$=ke(h,B),R=t7,X=_b($,h2([R,i7]));L.s2(B,X)}for(var J=L,tr=J.q2(),Y=new Ey(tr),G=xk(Y),ar=e.p2(),ur=T.g1(Vr(ar,10)),Q=ar.x();Q.y();){var Tr=Q.z(),zr=Pn(Tr);ur.n(zr)}for(var gr=Dc(_i(_i(ur,"LucideIcon"),"PublicConfig")),Er=vr.ia(t),wr=O.x();wr.y();){var Ir=wr.z(),Pr=ke(J,Ir),dr=Pn(Pr.d1k_1),Zr;if(ke(G,dr)>1||gr.l1(dr)){var sn=Pr.c1k_1,Hr;C(sn)===0?Hr=dr:Hr=sn+dr,Zr=Hr}else Zr=dr;var pr=Zr,$r;if(!gr.l1(pr))$r=pr;else{var Gr=tf(2,a7),en=Es(Gr,s7(pr)),Rr;r:{for(var Kr=en.x();Kr.y();){var pn=Kr.z();if(!gr.l1(pn)){Rr=pn;break r}}throw qr.r("Sequence contains no element matching the predicate.")}$r=Rr}var vn=$r;gr.n(vn);var _n=new pc(vn,ke(d,Ir),!0);Er.s2(Ir,_n)}return Er}function uu(n,r){var e=hn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=T.m(),s=i.x();s.y();){var o=s.z();o instanceof fe||a.n(o)}var u=a,c;r:{var f;if(z(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=T.g1(Vr(u,10)),m=u.x();m.y();){var w=m.z(),x=Cn(w).w17();_.n(x)}var k=ca(_),S;return k.c1()>1?S=k:S=null,S}function rv(n,r){var e,t,i=n5(),a=r.c18("type"),s=a instanceof fr?a:null;if(gb(i,s==null?null:Mn(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(z(o,W)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function nv(n,r){return or(r,"properties")!=null&&r.c18("allOf")==null}function yc(n,r,e,t,i){var a=or(r,"properties"),s=a??Nr();if(s.i1())return"{}";for(var o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+Be(f)+": "+ii(n,Dr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(_i(xe(On("{"),d),t+"}"),`
`)}function ii(n,r,e,t,i){if(ev(n,r))return"null";var a=Br(r,"$ref");if(a!=null){var s=js(a,47),o=e.o2(s),u=o instanceof er?o:null,c;if(u==null)return"null";c=u;var f=c;return nv(n,f)?Pn(s)+".empty()":rv(n,f)?Pn(s)+"("+ii(n,f,e,t,mo(i,s))+")":i.l1(s)?"null":ii(n,f,e,t,mo(i,s))}var v=r.c18("enum");if(v!=null){var h=_u(os(v)),d;h==null?d=null:d=ve(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return ve(n,m);var w=hn(r,"oneOf"),x=w??hn(r,"anyOf");if(x!=null){var k=_u(x),S;k==null?S=null:S=ii(n,Dr(k),e,t,i);var E=S;return E??"null"}var I=hn(r,"allOf");if(I!=null)return I.c1()===1?ii(n,Dr(Ap(I)),e,t,i):V(I,", ","{ "," }",l,l,o7(n,e,t,i));var A=r.c18("type"),q;if(A instanceof cn){var j=_u(A),F=j==null?null:Cn(j);q=F==null?null:F.w17()}else A instanceof fr?q=Mn(A):q=null;var O=q,L;switch(O){case"string":var H=av(r),B;H==null?B=null:B="'' as "+H;var $=B,R;if($==null){var X=dw(r),J;X==null?J=null:J=ke(r5(),X)+" as "+X,R=J}else R=$;var tr=R;L=tr??"''";break;case"integer":case"number":L="0";break;case"boolean":L="false";break;case"array":var Y=hn(r,"prefixItems"),G;Y==null?G=null:G=V(Y,", ","[","]",l,l,l7(n,e,t,i));var ar=G;L=ar??"[]";break;case"object":L=yc(n,r,e,t,i);break;case null:L=r.c18("properties")!=null?yc(n,r,e,t,i):"null";break;default:L="null";break}return L}function ev(n,r){var e=r.c18("type"),t=hn(r,"oneOf"),i=t??mr(),a=hn(r,"anyOf"),s=a??mr(),o=xe(i,s),u,c,f,v,h;if(e instanceof cn){var d;r:{var _;if(z(e,W)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(Cn(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:Mn(S))==="true"}if(f)c=!0;else{var E=hn(r,"enum"),I=E??mr(),A;r:{var q;if(z(I,W)?q=I.i1():q=!1,q){A=!1;break r}for(var j=I.x();j.y();){var F=j.z();if(F instanceof fe){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var O;r:{var L;if(z(o,W)?L=o.i1():L=!1,L){O=!1;break r}for(var H=o.x();H.y();){var B=H.z(),$=B instanceof er?B:null,R;if($==null?R=null:R=ev(n,$),R===!0){O=!0;break r}}O=!1}u=O}return u}function sw(n,r,e,t){for(var i=vu(r,"required"),a=or(r,"properties"),s=a??Nr(),o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=_l(n,fw(n,Dr(v)),t+"    ")+(t+"    "+Be(f)+h+": "+Bn(n,Dr(v),e,t+"    ")+";");o.n(d)}var _=o;return V(_i(xe(On("{"),_),t+"}"),`
`)}function Bn(n,r,e,t){t=t===l?"":t;var i=Br(r,"$ref");if(i!=null){var a=Pn(js(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=os(s),u=T.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:Mn(v);h==null||u.n(h)}var d=at(u),_;if(n.p1i_1.i1()?_=!1:_=P(d,n.p1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=uu(n,r);if(w!=null){var x=n.r1i_1.o2(at(w));if(x!=null){var k=x.k1j_1;e.n(k);var S,E=os(s),I;r:{var A;if(z(E,W)?A=E.i1():A=!1,A){I=!1;break r}for(var q=E.x();q.y();){var j=q.z();if(j instanceof fe){I=!0;break r}}I=!1}return I?S=x.k1j_1+" | null":S=x.k1j_1,S}}var F=os(s),O=V(F," | ",l,l,l,l,u7(n)),L;return C(O)===0?L="never":L=O,L}var H=r.c18("const");if(H!=null)return ve(n,H);var B=hn(r,"oneOf");if(B!=null)return Lh(n,B,e,t);var $=hn(r,"anyOf");if($!=null)return Lh(n,$,e,t);var R=hn(r,"allOf");if(R!=null)return V(R," & ",l,l,l,l,c7(n,e,t));var X=r.c18("type"),J;if(X==null)J=r.c18("properties")!=null?ow(n,r,e,t):"unknown";else if(X instanceof cn){for(var tr=T.g1(Vr(X,10)),Y=X.x();Y.y();){var G=Y.z(),ar=Dh(n,Cn(G).w17(),r,e,t);tr.n(ar)}J=V(ca(tr)," | ")}else J=Dh(n,Cn(X).w17(),r,e,t);return J}function Dh(n,r,e,t,i){var a;switch(r){case"string":var s=av(e),o=s??dw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=A5(n,e,t,i);break;case"object":a=ow(n,e,t,i);break;default:a="unknown";break}return a}function A5(n,r,e,t){var i=hn(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,f7(n,e,t));var a=r.c18("items"),s=a==null?null:Dr(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=Bn(n,u,e,t);return ms(c," | ")||ms(c," & ")?"("+c+")[]":c+"[]"}function ow(n,r,e,t){var i=or(r,"properties");if(!(i??Nr()).i1())return sw(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof er?a:null;return s!=null?"Record<string, "+Bn(n,s,e,t)+">":"Record<string, unknown>"}function Lh(n,r,e,t){for(var i=T.g1(Vr(r,10)),a=r.x();a.y();){var s=a.z(),o=Bn(n,Dr(s),e,t);i.n(o)}return V(ca(i)," | ")}function ve(n,r){var e;if(r instanceof fe)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=Te(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function T5(n,r,e){for(var t=An.e1(),i=vr.q4(),a=T.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=Dr(f),h=Dy().x();h.y();){var d=h.z(),_=or(v,d);if(_!=null){var m=cw(n,c),w=i.o2(m),x;if(w==null){var k=T.m();i.s2(m,k),x=k}else x=w;var S=x,E=L5(n,c,d,v,_);S.n(E)}}var I=Dc(Vf());I.h1(i.p2());for(var A=I,q=fu(i),j=T.g1(q.c1()),F=q.r2().x();F.y();){var O=F.z(),L=O.k2(),H=O.l2(),B=An.e1(),$=nn.f(),R=V(H,`
`,l,l,l,l,v7(t,n,B,L,a,s,A,$)),X=$.toString()+`
export const `+L+` = {
`+R+`
};
`;j.n(X)}for(var J=j,tr=ui(t),Y=T.m(),G=tr.x();G.y();){for(var ar=G.z(),ur=T.g1(Vr(e,10)),Q=e.x();Q.y();){var Tr=Q.z(),zr=Pn(Tr);ur.n(zr)}ur.l1(ar)&&Y.n(ar)}var gr=Y,Er,wr=n2(i.q2()),Ir;r:{var Pr;if(z(wr,W)?Pr=wr.i1():Pr=!1,Pr){Ir=!1;break r}for(var dr=wr.x();dr.y();){var Zr=dr.z();if(Zr.l1k_1){Ir=!0;break r}}Ir=!1}Ir?Er="ApiError, request, stream":Er="ApiError, request";var sn=Er,Hr=n.d1i_1.i1()?sn:sn+", codeMessages, errorCode",pr=nn.f();pr.ca("import { "+Hr+`, type RequestOptions } from './client.js';
`);var $r=n.a1i_1!=null?_i(gr,"PublicConfig"):gr,Gr=n.d1i_1.i1()?$r:ui(_i($r,"ErrorCode"));Gr.i1()||pr.ca("import type { "+V(Gr)+` } from './types.js';
`),pr.ca(`
`);for(var en=J.x();en.y();){var Rr=en.z();pr.ca(Rr).ca(`
`)}if(pr.ca(j5(n,a)),n.d1i_1.i1()||pr.ca(e5()),!s.i1()){pr.ca(`export const uploadRules = {
`);for(var Kr=s.r2(),pn=h7,vn=new zy(pn),_n=xi(Kr,vn).x();_n.y();){var ee=_n.z(),Jn=ee.k2(),Hn=ee.l2();pr.ca("    '"+Jn+"': "+Hn+`,
`)}pr.ca(`} as const;

`)}return n.a1i_1!=null&&pr.ca(Xe("public-config.ts")),pr.ca("export const api = { "+V(ui(i.p2()))+` };
`),pr.ca(Xe("api-with.ts")),pr.toString()}function q5(n,r){var e=or(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=at(vu(r,"required")),c=o.r2(),f=V(c,"; ",l,l,l,l,d7(u));return"{ "+f+" }"}function O5(n,r){var e=r.c18("maxBytes"),t=e==null?null:Cn(e),i=t==null?null:AI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=hn(r,"types"),u;if(o==null)u=null;else{for(var c=T.g1(Vr(o,10)),f=o.x();f.y();){var v=f.z(),h=Te(Cn(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+V(w)+"]";var k=x,S=r.c18("maxFiles"),E=S==null?null:Cn(S),I=E==null?null:TI(E),A;I==null?A=null:A="maxFiles: "+I;var q=ot([s,k,A]);return"{ "+V(q)+" }"}function U5(n){return lw(n,"ErrorCode",n.d1i_1)}function lw(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,p7),i=V(e,"",l,l,l,l,_7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function j5(n,r){var e=V(r,"",l,l,l,l,g7),t=V(r,"",l,l,l,l,m7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function N5(n,r,e){var t=iv(r),i=tf(1,y7),a=Es(i,w7(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw qr.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function D5(n,r,e,t){var i=l2([r,r+V(e,"",l,l,l,l,b7)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=tf(2,k7),v=Es(f,x7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw qr.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function L5(n,r,e,t,i){for(var a=An.e1(),s=hn(t,"parameters"),o=s??mr(),u=hn(i,"parameters"),c=u??mr(),f=xe(o,c),v=T.g1(Vr(f,10)),h=f.x();h.y();){var d=h.z(),_=Dr(d);v.n(_)}for(var m=v,w=My().xe(r),x=Op(Es(w,S7)),k=T.m(),S=x.x();S.y();){var E=S.z(),I;r:{for(var A=m.x();A.y();){var q=A.z();if(Br(q,"name")===E&&Br(q,"in")==="path"){I=q;break r}}I=null}var j=I,F=j==null?null:or(j,"schema"),O;F==null?O=null:O=Bn(n,F,a);var L=O,H;if(L==null)H=null;else{var B;L==="unknown"||L==="string"?B=null:B=L,H=B}var $=H,R=$??"string | number",X=vw(E)+": "+R;k.n(X)}var J=or(i,"requestBody"),tr=J==null?null:or(J,"content"),Y=tr==null?null:tr.r2(),G;if(Y==null)G=null;else{var ar;r:{for(var ur=Y.x();ur.y();){var Q=ur.z();if(Se(Q.k2(),"multipart/")){ar=Q;break r}}ar=null}G=ar}var Tr=G,zr=Tr==null?null:Tr.l2(),gr;zr==null?gr=null:gr=zr instanceof er?zr:null;var Er=gr,wr=Er==null?null:or(Er,"schema"),Ir;wr==null?Ir=null:Ir=q5(n,wr);var Pr=Ir,dr;if(Tr!=null)dr=Pr??"FormData";else{var Zr;tr==null?Zr=null:Zr=uw(n,tr);var sn=Zr,Hr;sn==null?Hr=null:Hr=Bn(n,sn,a),dr=Hr}var pr=dr;if(J!=null){var $r="body: "+(pr??"unknown");k.n($r)}for(var Gr=T.m(),en=m.x();en.y();){var Rr=en.z();Br(Rr,"in")==="query"&&Gr.n(Rr)}var Kr=Gr;if(!Kr.i1()){var pn=V(Kr,"; ",l,l,l,l,z7(n,a)),vn;r:{var _n;if(z(Kr,W)?_n=Kr.i1():_n=!1,_n){vn=!1;break r}for(var ee=Kr.x();ee.y();){var Jn=ee.z(),Hn=Jn.c18("required"),_e=Hn==null?null:Cn(Hn);if((_e==null?null:Mn(_e))==="true"){vn=!0;break r}}vn=!1}var Ue=vn,ge="query"+(Ue?"":"?")+": { "+pn+" }";k.n(ge)}for(var $e=T.m(),Fe=m.x();Fe.y();){var Ce=Fe.z(),Gn;if(Br(Ce,"in")==="header"){var Tn=i5(),xn=Br(Ce,"name"),En=(xn??"").toLowerCase();Gn=!Tn.l1(En)}else Gn=!1;Gn&&$e.n(Ce)}var je=$e;if(!je.i1()){var Ui=V(je,"; ",l,l,l,l,E7(n,a)),Ne;r:{var vt;if(z(je,W)?vt=je.i1():vt=!1,vt){Ne=!1;break r}for(var ji=je.x();ji.y();){var Ni=ji.z(),ht=Ni.c18("required"),Nt=ht==null?null:Cn(ht);if((Nt==null?null:Mn(Nt))==="true"){Ne=!0;break r}}Ne=!1}var Ma=Ne,Ra="headers"+(Ma?"":"?")+": { "+Ui+" }";k.n(Ra)}var Ba="options?: RequestOptions";k.n(Ba);var $a=x.i1()?Te(r):P5(n,r),Di=or(i,"x-ktor-svelte-upload"),Dt;Di==null?Dt=null:Dt=O5(n,Di);var dt=Dt,Li=i.c18("x-ktor-svelte-timeout"),Pi=Li==null?null:Cn(Li),Lt=Pi==null?null:Mn(Pi),Pt=Lt==null?null:Xc(Lt),pt=Pt==null?null:Un(Pt),Mt;if(pt==null)Mt=null;else{var Rt;nr(pt,new y(0,0))>0?Rt=pt:Rt=null,Mt=Rt}var Mi=Mt,me=T.m();Mi!=null&&me.n("timeout: "+Mi.toString()),me.n("...options"),Kr.i1()||me.n("query"),je.i1()||me.n("typedHeaders: headers"),J!=null&&me.n("body"),dt!=null&&me.n("upload: "+dt),Pr!=null&&me.n("multipart: true");var Bt=me.j6(),Fa=R5(n,i,a),Ri=B5(n,i),Zs=M5(n,i,a),Ja=e.toUpperCase(),Vs=Br(i,"operationId"),Bi;Vs==null?Bi=null:Bi=cu(Vs);for(var $i=Bi,Xs=$i??$5(n,r,e),Fi=ot([Br(i,"summary"),Br(i,"description")]),Qs=T.g1(Vr(Fi,10)),Ji=Fi.x();Ji.y();){var ro=Ji.z(),no=b(i0(Ts(ro)?ro:g()));Qs.n(no)}for(var Hi=T.m(),Ha=Qs.x();Ha.y();){var Gi=Ha.z();C(Gi)>0&&Hi.n(Gi)}var kw=ca(Hi),xw="@deprecated",hu;hw(i)?hu=xw:hu=null;var Sw=hu,zw=n.w1i_1,Ew=e.toUpperCase(),ov=zw.o2(Ew+" "+r),du;ov==null?du=null:du="@see "+ov;var Iw=xe(kw,ot([Sw,du])),Cw=I7(Bt,Ri,k,Fa,e,$a),lv=V(ca(Zs.q2())," | "),pu;C(lv)===0?pu=null:pu=lv;var Aw=pu;return new wy(Ja,r,Xs,Iw,x,Cw,a,Ri,dt,Aw,wa(Zs.p2()))}function P5(n,r){var e=nn.f();e.da(96);for(var t=0,i=My().xe(r).x();i.y();){var a=i.z();e.ca(mc(n,ae(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+vw(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(mc(n,st(r,t))),e.da(96),e.toString()}function M5(n,r,e){for(var t=or(r,"responses"),i=(t??Nr()).r2(),a=T.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=jl(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=or(Dr(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,E=uw(n,S),I;if(E==null){u=null;break r}else I=E;var A=I;u=N(w,Bn(n,A,e))}var q=u;q==null||a.n(q)}return fu(M_(a))}function R5(n,r,e){var t=or(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=T.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();Se(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;Oe(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,E=S==null?null:S.l2(),I=E==null?null:Dr(E),A;if(I==null)return"unknown";A=I;var q=A,j=or(q,"content"),F;if(j==null)return"void";F=j;var O=F,L=or(O,"text/event-stream");if(L!=null){var H=or(L,"schema"),B;H==null?B=null:B=Bn(n,H,e);var $=B;return $??"string"}var R=O.p2(),X;r:{for(var J=R.x();J.y();){var tr=J.z();if(ms(tr,"json")){X=tr;break r}}X=null}var Y=X;if(Y!=null){var G=or(O,Y),ar=G==null?null:or(G,"schema"),ur;ar==null?ur=null:ur=Bn(n,ar,e);var Q=ur;return Q??"unknown"}return"string"}function B5(n,r){for(var e=or(r,"responses"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();Se(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(z(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof er?h:null,_=d==null?null:or(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function uw(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(ms(a,"json")){t=a;break r}}t=null}var s=t,o=s??mb(r.p2()),u;if(o==null)u=null;else{var c=or(r,o);u=c==null?null:or(c,"schema")}return u}function cw(n,r){var e=n.q1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||Se(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=r0(n0(r,o),ba([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!Se(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=iv(d,Vf());var m=_;return m??"root"}function $5(n,r,e){var t=n.q1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||Se(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=r0(n0(r,u),ba([47])),f=T.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=T.m(),m=d.x();m.y();){var w=m.z();Se(w,"{")||_.n(w)}var x=yb(_,1);if(!x.i1()){var k=e==="post"?"":e;return cu(k+V(x,"",l,l,l,l,C7))}var S=Tp(d),E=(S==null?null:Se(S,"{"))===!0;switch(e){case"get":return E?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function fw(n,r){var e=Br(r,"description"),t;e==null?t=null:t=b(i0(Ts(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;hw(r)?c=u:c=null;var f=c;return ot([o,f])}function _l(n,r,e){if(r.i1())return"";var t=e0(Yn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+Ap(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,A7(e))+(e+` */
`)}function F5(n){return"'"+n.l1h_1+"'"}function J5(n){return`
`+n.p1g()}function H5(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function wc(n,r,e){var t;if(e instanceof er){var i=Br(e,"$ref"),a=i==null?null:js(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=wc(n,r,v.l2());c.s2(h,d)}u=new er(c)}else u=v5(r,o);t=u}else if(e instanceof cn){for(var _=T.g1(Vr(e,10)),m=e.x();m.y();){var w=m.z(),x=wc(n,r,w);_.n(x)}t=new cn(_)}else t=e;return t}function G5(n,r){var e=n.a1j_1,t=r.a1j_1;return Ut(e,t)}function K5(n){var r=n.b1j_1,e;r==null?e=null:e=", permission: "+Te(r);var t=e,i=t??"";return"    { page: "+Te(n.a1j_1)+i+` },
`}function W5(n){var r=n.k2(),e=n.l2();return Be(r)+": "+Te(e)}function Y5(n,r){var e=n.ch_1,t=r.ch_1;return Ut(e,t)}function Z5(n){return n.dh_1}function V5(n){return r=>ve(n,re(r))}function X5(n){var r=n.hh(),e=n.ih();return r+": "+e}function Ph(n,r,e,t,i,a){var s=ye(n,r,t);if(s!=null)return At(s);var o=ye(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?At(c+a):null}function Q5(n){return n+`
`}function $t(n,r,e){return"addError(errors, "+n+", "+ve(r,re(e))+");"}function r7(n,r){return e=>"matches("+ve(n,re(e.z1k_1))+", "+r+")"}function n7(n){return r=>"    "+Be(r)+": "+ve(n,re(r))+`,
`}function ra(n,r,e,t,i,a,s){if(t instanceof cn)for(var o=t.x();o.y();){var u=o.z();ra(n,r,e,u,i,a,!1)}else if(t instanceof er){var c=uu(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=at(h),_=r.o2(d),m;if(_==null){var w=T.m();r.s2(d,w),m=w}else m=_;var x=m,k=new yy(i,a);x.n(k);var S=at(h),E=e.o2(S);if(E==null){var I=h;e.s2(S,I)}}for(var A=Br(t,"in")!=null?Br(t,"name"):null,q=t.r2().x();q.y();){var j=q.z(),F=j.k2(),O=j.l2(),L;if(F==="properties"?L=O instanceof er:L=!1,L)for(var H=O.r2().x();H.y();){var B=H.z(),$=B.k2(),R=B.l2();ra(n,r,e,R,i,$,!1)}else F==="schema"&&A!=null?ra(n,r,e,O,i,A,!1):F!=="enum"&&ra(n,r,e,O,i,a,!1)}}}function e7(n){return(r,e)=>{var t=V(ui(ke(n,r)),"\0"),i=V(ui(ke(n,e)),"\0");return Ut(t,i)}}function t7(n){return n.c1k_1}function i7(n){return n.d1k_1}function a7(n){return n+1|0}function s7(n){return r=>n+r}function o7(n,r,e,t){return i=>"..."+ii(n,Dr(i),r,e,t)}function l7(n,r,e,t){return i=>ii(n,Dr(i),r,e,t)}function u7(n){return Re(r=>{var e=n;return ve(e,r)},1,0,8,"literal",[n])}function c7(n,r,e){return t=>Bn(n,Dr(t),r,e)}function f7(n,r,e){return t=>Bn(n,Dr(t),r,e)}function v7(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.k1k_1;Ia(c,f);var v=D5(r,u.g1k_1,u.i1k_1,e),h=t+"."+v,d=r.v1i_1,_=new lu(h,u.e1k_1,u.f1k_1);d.n(_);var m=u.n1k_1;if(m!=null){var w=i,x=new by(h,m,u.o1k_1);w.n(x)}var k=u.m1k_1;k==null||a.s2(h,k);var S=N5(r,t+"-"+v,s);return o.ca(_l(r,u.h1k_1,"")),o.ca("export const "+S+" = "+u.j1k_1(h)+`;
`),_l(r,u.h1k_1,"    ")+("    "+Be(v)+": "+S+",")}}function h7(n,r){var e=n.k2(),t=r.k2();return Ut(e,t)}function Mh(n){return Br(n,"type")==="string"&&Br(n,"format")==="binary"}function d7(n){return r=>{var e=r.k2(),t=r.l2(),i=Dr(t),a;if(Mh(i))a="File";else{var s;if(Br(i,"type")==="array"){var o=or(i,"items"),u;o==null?u=null:u=Mh(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return Be(e)+(n.l1(e)?"":"?")+": "+c}}function p7(n){return Te(n)}function _7(n){return"    "+Be(n)+": "+Te(n)+`,
`}function g7(n){return"    '"+n.p1k_1+"': "+n.q1k_1+`;
`}function m7(n){return"    '"+n.p1k_1+"': ["+V(n.r1k_1)+`],
`}function y7(n){return n+1|0}function w7(n){return r=>r===1?n:n+r}function b7(n){return tv(n)}function k7(n){return n+1|0}function x7(n){return r=>n+r}function S7(n){return n.xf().d1(1)}function z7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Cn(t),a=(i==null?null:Mn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Bn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Br(e,"name"),_=d??"";return Be(_)+(a?"":"?")+": "+h}}function E7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Cn(t),a=(i==null?null:Mn(i))==="true",s=or(e,"schema"),o;s==null?o=null:o=Bn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=Br(e,"name"),_=d??"";return Te(_)+(a?"":"?")+": "+h}}function I7(n,r,e,t,i,a){return s=>{var o=V(_i(n,"operation: '"+s+"'")),u=r?"stream":"request",c=V(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function C7(n){return tv(n)}function A7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Pn(n){Sr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,q7),o;C(s)===0?o="Unnamed":o=s;var u=o;return Ox(qb(u))?"_"+u:u}function tv(n){Sr();var r=cu(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+st(r,1)}else e=r;return e}function cu(n){Sr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=T.g1(Vr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(Os(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+st(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+st(c,1)}else m=c;v=m}var k=v;s.n(k)}return V(s,"")}function iv(n,r){r=r===l?Ot():r,Sr();var e=cu(n);return Zf().ue(e)&&!a5().l1(e)&&!r.l1(e)?e:"_"+e}function vw(n){return Sr(),iv(n,t5())}function Be(n){return Sr(),Zf().ue(n)?n:Te(n)}function Te(n){Sr();var r=nn.f();r.da(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(mn(t,32)<0||t===8232||t===8233){var i=Z(t);r.ca("\\u"+t0(Ux(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function hw(n){Sr();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Vm(e))===!0}function or(n,r){Sr();var e=n.c18(r);return e instanceof er?e:null}function fu(n){Sr();for(var r=n.r2(),e=O7,t=new Cy(e),i=xi(r,t),a=fn(Vr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=N(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function hn(n,r){Sr();var e=n.c18(r);return e instanceof cn?e:null}function Br(n,r){Sr();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:Mn(t)}function vu(n,r){Sr();for(var e=hn(n,r),t=e??mr(),i=T.g1(Vr(t,10)),a=t.x();a.y();){var s=a.z(),o=Cn(s).w17();i.n(o)}return i}function av(n){Sr();var r=Br(n,"format"),e;return r==null?e=null:e=Jy().o2(r),e}function dw(n){Sr();var r=Br(n,"format"),e;return r==null?e=null:e=po().o2(r),e}function gl(n,r){Sr();var e;if(n instanceof er){var t,i=Br(n,"format");if((z(r,yn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(z(a,W)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(gl(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof cn){var f;r:{var v;if(z(n,W)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(gl(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function ml(n){Sr();var r;if(n instanceof er){var e;if(av(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(ml(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof cn){var u;r:{var c;if(z(n,W)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(ml(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Rh;function sv(){if(Rh)return sr;Rh=!0,pw=new ho("ADD_ERROR",0,"add-error.ts"),_w=new ho("ADD_NESTED",1,"add-nested.ts"),gw=new ho("MATCHES",2,"matches.ts")}var pw,_w,gw;function T7(n){return Sr(),n.h16_1=!0,sr}function q7(n){return Sr(),tv(n)}function O7(n,r){Sr();var e=n.k2(),t=r.k2();return Ut(e,t)}function mw(){return sv(),pw}function U7(){return sv(),_w}function Bh(){return sv(),gw}var $h;function Sr(){$h||($h=!0,Ly=kt(["get","post","put","patch","delete","head","options"]),Py=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Ry=St.te("\\{([^}]+)\\}"),$y=zI(l,T7),Fy=kt(["guardPages","signedInUser","pageGuards"]),Hy=Gv([N("date","IsoDate"),N("time","IsoTime"),N("date-time","IsoDateTime")]),Gy=Gv([N("duration","IsoDuration"),N("decimal","Decimal")]),Ky=ql([N("IsoDuration","'PT0S'"),N("Decimal","'0'")]),Wy=ei(["string","integer","number"]),Yy=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,Zy=ei(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),Vy=ei(["body","query","headers","options","encodeURIComponent"]),Xy=ei(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),Qy=ei(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),rw=kt(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Fh(n,r){return r===1?"1 character":""+r+" characters"}var Vi;function At(n){return n%1===0?Un(n).toString():n.toString()}var bc;function yw(){return bc===l&&new Ty,bc}function j7(){return bw(),ww}var ww;function Xe(n){return bw(),ke(j7(),n)}var Jh;function bw(){Jh||(Jh=!0,ww=ql([N("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
    (errors[field] ??= []).push(message);
}
`),N("add-nested.ts",`function addNested(errors: Record<string, string[]>, prefix: string, nested: Record<string, string[]>): void {
    for (const [field, messages] of Object.entries(nested)) {
        for (const message of messages) addError(errors, prefix + field, message);
    }
}
`),N("api-with.ts",`
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
`),N("client.ts",`export interface UploadProgress {
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

`),N("dates.ts",`declare const iso: unique symbol;

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
`),N("form-state.svelte.ts",`import { untrack } from 'svelte';
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
`),N("form.ts",`export interface FieldBounds {
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
`),N("index.ts",`export * from './client.js';
export * from './form.js';
export * from './services.js';
export * from './types.js';
`),N("matches.ts",`function matches(pattern: string, text: string): boolean {
    try {
        return new RegExp(pattern, 'u').test(text);
    } catch {
        return true;
    }
}
`),N("public-config.ts",`let publicConfig: Promise<PublicConfig> | undefined;

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

`),N("quantities.ts",`export type IsoDuration = string & { readonly [brand]: 'IsoDuration' };

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
`)]))}function F7(n,r){var e;try{for(var t=new Iy(On(r)).e1l(n),i=ze(),a=ec.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=re(u.l2());s.s2(c,f)}e=i.k15(a,new er(ko(N("files",new er(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=ze(),_=ec.t17(),m=h.message;v=d.k15(_,new er(ko(N("error",re(m??h.toString())))))}else throw w;e=v}return e}p(gy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(my,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(pc,"EnumType");p(yy,"EnumUsage");p(wy,"Endpoint");p(by,"ErrorEntry");p(ky,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(xy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Sy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(zy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Ey);p(Iy,"TypeScriptGenerator");p(ho,"ValidationHelper");p(lu,"GeneratedOperation");p(Cy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(Ay,"ConstraintMessages");p(He,"RuleCheck");p(Zi,"RulePreset");D(Ty,"RulePresets");Vi=new Ay;export{F7 as generateTypeScript};
