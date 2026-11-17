typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var or=Math.imul,xu=ArrayBuffer.isView,rs=Math.clz32;class uc{}class xe{}class Oh{}class Uh{constructor(r){this.w_1=r}x(){return wp(this.w_1)}}class jh{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class Nh{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let Lh=class{constructor(){Ou=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class zn{constructor(r){Ic(),this.x1_1=r}i2(r){return yn(this.x1_1,r)}d(r){return pb(this,r)}toString(){return yr(this.x1_1)}equals(r){return _b(this.x1_1,r)}hashCode(){return gb(this.x1_1)}}class Z{}class Ce{}class En{}class Ke{}class wn{}class ra{}let cw=class{};class te{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Ae(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof te?r:g())}equals(r){return this===r}hashCode(){return qb(this)}toString(){return this.w2_1}}let Dh=class{constructor(){Uu=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends Oh{constructor(r,e){vl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return er(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return ao(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return xb(this)}valueOf(){return Gn(this)}}class kn{}class Ph{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw qr.r(""+this.h3_1);return r}}class fw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class vw{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class hw{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class dw{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class pw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class _w{}class gw{}class Mh{constructor(){Ju=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class pn{}class al{toString(){return"kotlin.Unit"}}class ua{static x4(r){return di(this,r)}l1(r){var e;r:{var t;if(z(this,Z)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(z(r,Z)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return rr(this,", ","[","]",l,l,Ax(this))}toArray(){return Yp(this)}}class ds extends ua{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class cc{constructor(r,e){qc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw qr.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw Sr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class Rh extends cc{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),On.j5(e,this.i5_1.c1()),this.a5_1=e}}class Bh extends ds{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new cc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new Rh(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&z(r,En)?On.n5(this,r):!1}hashCode(){return On.o5(this)}}class Fh{static w5(){var r=di(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return Uv(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(z(e,Z)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&z(r,Ke)))return!1;var e=r.k2(),t=r.l2(),i=(z(this,wn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(z(this,wn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&z(r,wn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(z(e,Z)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=Uv(this,r);return e==null?null:e.l2()}hashCode(){return zr(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=gd.pg(this)}return on(this.u5_1)}toString(){var r=this.r2();return rr(r,", ","{","}",l,l,qx(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=md.sg(this)}return on(this.v5_1)}}class $h extends Fh{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return Zh.z5(this)}a6(){return Xh.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class ps extends ds{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&z(r,Ce)?os.f6(this,r):!1}hashCode(){return os.g6(this)}}let Jh=class{constructor(){Hu=this;var r=this,e=q.g1(0);e.l_1=!0,r.h6_1=e}};class _s{}class q extends Bh{constructor(r){return new.target.i4(r)}static i4(r){Pa();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Pa();var r=[];return this.i4(r)}static g1(r){Pa();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw U.v(b(i))}return t}static f1(r){Pa();var e=fi(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Pa().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[uu(this,r)]}v4(r,e){this.y4(),uu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(pk(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=dk(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Ss(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),uu(this,r),this.d5_1=this.d5_1+1|0;var e;return r===zs(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return Ew(this.k_1,r)}toString(){return Cb(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw se.p6()}}class ns extends $h{static w6(r){var e=this.t5();return wk(e),e.u6_1=r,e}static x6(){return this.w6(We.i7())}static j7(r,e){return this.w6(We.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(We.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return Hh.q7(this.u6_1)}a6(){return Gh.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=Wh.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class Hh extends ps{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw se.p6()}h1(r){throw se.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class Gh extends ds{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw se.p6()}n(r){return this.y7(r)}z7(r){throw se.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class Kh extends ps{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&z(r,Ke)?this.e8(r!=null&&z(r,Ke)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw se.p6()}n(r){return this.f8(r!=null&&z(r,Ke)?r:g())}h1(r){throw se.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class Wh extends Kh{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class Yh{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class Zh extends ps{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw se.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new Yh(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class Vh{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class Xh extends ds{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw se.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new Vh(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class ai extends ps{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(We.i7())}static o8(r){for(var e=this.m8(We.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(We.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class Qh{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class sl{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw Sr.o3(b(r))}this.g9_1.w7(),l_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw no.m9()}}class rd extends sl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class nd extends sl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=on(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class ed extends sl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new td(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:zr(t),a=i??0,s=on(this.g9_1.z6_1)[this.i9_1],o=s==null?null:zr(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw qr.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=on(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class td{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return _v(this),this.v8_1.y6_1[this.w8_1]}l2(){return _v(this),on(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&z(r,Ke)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:zr(r),t=e??0,i=this.l2(),a=i==null?null:zr(i);return t^(a??0)}toString(){return oe(this.k2())+"="+oe(this.l2())}}class id{}function mw(n){var r;r:{var e;if(z(n,Z)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&z(a,Ke)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class We{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=di(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=e_(ss,Ze(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(Vp(r),null,new Int32Array(r),new Int32Array(n_(ss,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw U.v(b(i))}return t}n2(r){return Sk(this,r)>=0}o2(r){var e=Fs(this,r);return e<0?null:on(this.z6_1)[e]}o7(r){return Fs(this,r)>=0}s2(r,e){var t=o_(this,r),i=i_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),Ck(this,r.r2())}t2(r){this.w7();var e=Fs(this,r);if(e<0)return null;var t=on(this.z6_1)[e];return l_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);lo(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||lo(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,dl(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&z(r,wn)?t=Ek(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=rn.fa(2+or(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw se.p6()}g8(r){var e=Fs(this,r.k2());return e<0?!1:P(on(this.z6_1)[e],r.l2())}ga(r){return this.g8(z(r,Ke)?r:g())}v7(){return new rd(this)}a8(){return new nd(this)}d8(){return new ed(this)}}class vr extends ns{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class An extends ai{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class Xe{}class ad{ka(){var r="This continuation is already complete";throw Sr.o3(b(r))}la(r){var e="This continuation is already complete";throw Sr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class fc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(Qu),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&on(this.ka().wa(Qu)).ya(r),this.ta_1=u_}}class vc extends fc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return on(this.qa_1)}ra(r){var e=us(),t=v0(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new Kt(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===us())return sr;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=h0(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class sd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;cS(r)&&e(r);var t=this.gb_1,i=v0(r);return i==null||t(i),sr}ma(r){return this.la(r)}}class es extends Error{static nb(){var r=Ki(this,Error,[null]);return Wi(r),vu(r),r}static k3(r){var e=Ki(this,Error,[r]);return Wi(e,r),vu(e),e}static ob(r,e){var t=Ki(this,Error,[r,Mp(e)]);return Wi(t,r,e),vu(t),t}}class ae extends es{static hb(){var r=this.nb();return fu(r),r}static a9(r){var e=this.k3(r);return fu(e),e}static mb(r,e){var t=this.ob(r,e);return fu(t),t}}class se extends ae{static p6(){var r=this.hb();return gv(r),r}static k8(r){var e=this.a9(r);return gv(e),e}}class U extends ae{static kb(){var r=this.hb();return cu(r),r}static v(r){var e=this.a9(r);return cu(e),e}static lb(r,e){var t=this.mb(r,e);return cu(t),t}}class qr extends ae{static j1(){var r=this.hb();return mv(r),r}static r(r){var e=this.a9(r);return mv(e),e}}class Jn extends ae{static sb(){var r=this.hb();return yv(r),r}static tb(r){var e=this.a9(r);return yv(e),e}}class Sr extends ae{static ub(){var r=this.hb();return wv(r),r}static o3(r){var e=this.a9(r);return wv(e),e}}class no extends ae{static m9(){var r=this.hb();return bv(r),r}static u8(r){var e=this.a9(r);return bv(e),e}}class Su extends ae{static yb(){var r=this.hb();return kv(r),r}static zb(r){var e=this.a9(r);return kv(e),e}}class eo extends Error{static ec(){var r=Ki(this,Error,[null]);return Wi(r),hu(r),r}static hc(r){var e=Ki(this,Error,[r]);return Wi(e,r),hu(e),e}static gc(r,e){var t=Ki(this,Error,[r,Mp(e)]);return Wi(t,r,e),hu(t),t}}class Ha extends eo{static cc(){var r=this.ec();return xv(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return xv(t),t}}class zu extends U{static mc(){var r=this.kb();return Sv(r),r}static nc(r){var e=this.v(r);return Sv(e),e}}class Eu extends ae{static s3(){var r=this.hb();return jk(r),r}}class Iu extends ae{static w3(){var r=this.hb();return Nk(r),r}}class Cu extends ae{static a4(){var r=this.hb();return Lk(r),r}}class Be{}class ca{equals(r){var e;return r instanceof hc?e=!1:r instanceof ca?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:ie(r);return e??0}toString(){return"class "+this.oc()}}class nn extends ca{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class hc extends ca{constructor(){uo=null,super(),uo=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw se.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Au extends ca{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return Yb(r,this.vc_1)}}class vi{}class od{constructor(){Ku=this;var r=this,e=Object;r.anyClass=new nn(e,"Any",Fk);var t=this,i=Number;t.numberClass=new nn(i,"Number",$k),this.nothingClass=Bk();var a=this,s=Boolean;a.booleanClass=new nn(s,"Boolean",Jk);var o=this,u=Number;o.byteClass=new nn(u,"Byte",Hk);var c=this,f=Number;c.shortClass=new nn(f,"Short",Gk);var v=this,h=Number;v.intClass=new nn(h,"Int",Kk);var d=this,_=y;d.longClass=new nn(_,"Long",Wk);var m=this,w=Number;m.floatClass=new nn(w,"Float",Yk);var x=this,k=Number;x.doubleClass=new nn(k,"Double",Zk);var S=this,E=Array;S.arrayClass=new nn(E,"Array",Vk);var I=this,A=String;I.stringClass=new nn(A,"String",Xk);var O=this,L=Error;O.throwableClass=new nn(L,"Throwable",Qk);var J=this,T=Array;J.booleanArrayClass=new nn(T,"BooleanArray",rx);var M=this,F=Uint16Array;M.charArrayClass=new nn(F,"CharArray",nx);var B=this,D=Int8Array;B.byteArrayClass=new nn(D,"ByteArray",ex);var H=this,V=Int16Array;H.shortArrayClass=new nn(V,"ShortArray",tx);var $=this,tr=Int32Array;$.intArrayClass=new nn(tr,"IntArray",ix);var W=this,G=typeof BigInt>"u"?l:BigInt;W.bigIntClass=new nn(G,"BigInt",ax);var ar=this,ur=Array;ar.longArrayClass=new nn(ur,"LongArray",sx);var X=this,Tr=Float32Array;X.floatArrayClass=new nn(Tr,"FloatArray",ox);var wr=this,dr=Float64Array;wr.doubleArrayClass=new nn(dr,"DoubleArray",lx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=zv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new nn(i,a,ux(r));zv()[r]=s,t=s}else t=e;return t}}class Vf extends es{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return ln(e,e.ud_1),e}static wd(){return this.vd(null)}}class rn{constructor(r){return new.target.xd(r)}static xd(r){var e=di(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=Q(e,r);else throw Jn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return ee(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+oe(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+oe(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return On.j5(r,this.a()),this.e_1=ee(this.e_1,0,r)+yr(e)+rt(this.e_1,r),this}de(r){if(r<0)throw U.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=ee(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return On.i6(r,this.a()),this.e_1=ee(this.e_1,0,r)+rt(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return On.ge(e,t,i.length),this.e_1=this.e_1+ee(i,e,t),this}}class ld{constructor(){Wu=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class yt{constructor(r,e){return new.target.se(r,e)}static se(r,e){fo();var t=di(this);return t.me_1=r,t.ne_1=Qe(e),t.oe_1=new RegExp(r,gx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return fo(),this.se(r,It())}ue(r){fx(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Jn.tb("Start index out of bounds: "+e+", input length: "+C(r));return p_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Jn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=px(this,r,e);return $x(t,_x)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=rn.fa(a);do{var o=on(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){Gc(e);for(var t=this.xe(r),i=e===0?t:cb(t,e-1|0),a=q.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(qn(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(qn(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class ol{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return ie(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof ol)||this.gf_1!==r.gf_1)}}class ud extends ua{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=eb(jx(this));return ms(r,yx(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new ol(e),t}}class dc extends ua{static wf(r){return this.x4(r)}x(){return new pc(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new vd(this,r)}equals(r){return r===this?!0:r!=null&&z(r,En)?On.n5(this,r):!1}hashCode(){return On.o5(this)}}class cd extends dc{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class fd{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=ud.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=cd.vf(this.qf_1)}return on(this.of_1)}z(){return p_(this.rf_1,this.sf_1,this.pf_1.i1()?wx(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let yw=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}};class dt extends te{constructor(r,e,t){super(r,e),this.cg_1=t}}class pc{constructor(r,e){qc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw qr.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class vd extends pc{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),On.j5(e,this.lg_1.c1()),this.hg_1=e}}class hd{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Jn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Jn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Jn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw U.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Jn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw U.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=or(31,e),s=i==null?null:zr(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class dd{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class pd{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class ww{}class _d extends ua{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&z(r,Ce)?os.f6(this,r):!1}hashCode(){return os.g6(this)}}class gd extends _d{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new dd(r)}c1(){return this.og_1.c1()}}class md extends ua{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new pd(r)}c1(){return this.rg_1.c1()}}class yd{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:zr(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class wd{constructor(){Yu=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&z(r,En)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Jn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return ls}m1(r){if(r!==0)throw Jn.tb("Index: "+r);return ls}}class bd{y(){return!1}z(){throw qr.j1()}}class ll{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+oe(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=or(r,31)+(this.xg_1==null?0:zr(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof ll)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class kd{constructor(r){this.yg_1=r}x(){return new xd(this.yg_1())}}class xd{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new ll(Ss(r),this.zg_1.z())}}class Sd{}class zd{constructor(){Zu=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&z(r,wn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return Xu()}p2(){return Xu()}q2(){return z_()}}class Ed{z(){return this.jh()}}class Id{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class Cd{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Id(this)}}class ul{}class Ad{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw qr.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class cl{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw U.v(b(t))}}v1(r){return r>=this.rh_1?this:new cl(this.qh_1,r)}x(){return new Ad(this)}}class Td{x(){return ls}v1(r){return ml}}class qd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&Dv(this),this.th_1===0)throw qr.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&Dv(this),this.th_1===1}}class _c{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new qd(this)}}class Od{constructor(){Vu=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&z(r,Ce)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return ls}}class Ud{zh(r,e){return Ae(r,e)}compare(r,e){var t=r!=null&&Mu(r)?r:g();return this.zh(t,e!=null&&Mu(e)?e:g())}}let jd=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}},Nd=class{};class bw{}class Ld{constructor(){r1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class Dd extends te{}class Pd extends dc{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return On.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=Qf(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof te?this.ei(r instanceof te?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=Qf(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof te?this.fi(r instanceof te?r:g()):-1}}class Md{constructor(){n1=this,this.p1_1=new zt(1,0)}}class gs{constructor(r,e,t){if(t===0)throw U.v("Step must be non-zero.");if(t===-2147483648)throw U.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=r2(r,e,t),this.t1_1=t}x(){return new Rd(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof gs?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:or(31,or(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class Hi{}class zt extends gs{constructor(r,e){L_(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof zt?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:or(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class Rd extends Ed{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw qr.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class Bd{q1(r,e,t){return new gs(r,e,t)}}class Fd{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=ob(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&Bv(this),this.li_1===0)throw qr.j1();var r=this.oi_1,e=r instanceof zt?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&Bv(this),this.li_1===1}}class $d{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new Fd(this)}}class kw{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class Jd{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=Q(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&Q(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw qr.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(qn(t,e,r))}}class Hd{constructor(r){this.dj_1=r}x(){return new Jd(this.dj_1)}}class Gd{constructor(){e1=this,this.ej_1=new y(0,0),this.fj_1=xt(new y(-1,1073741823)),this.gj_1=xt(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new ge(r),t=e.kj_1;if(Kc(t)){var i=bn(t);if(!(er(new y(387905,-1073741824),i)<=0&&er(i,new y(-387905,1073741823))<=0))throw Ha.fc(bn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=bn(t);if(er(new y(1,-1073741824),s)<0&&er(s,new y(-1,1073741823))<0)a=!1;else{var o=bn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw Ha.fc(bn(t).toString()+" ms is out of milliseconds range");var u=bn(t);if(er(new y(1108857478,-1074),u)<=0&&er(u,new y(-1108857478,1073))<=0)throw Ha.fc(bn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new ge(D2(r,!0)),i=t.kj_1;if(P(new ge(i),new ge(Jr().ij_1))){var a="invariant failed";throw Sr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof U){var s=o;throw U.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class ge{constructor(r){Jr(),this.kj_1=r}mj(r){return V_(this.kj_1,r)}d(r){return C2(this,r)}toString(){return U2(this.kj_1)}hashCode(){return N2(this.kj_1)}equals(r){return L2(this.kj_1,r)}}class Kd{constructor(){t1=this,this.nj_1=new Tu(new y(-1,1073741823),!0),this.oj_1=new Tu(new y(-1,2147483647),!1)}}class Tu{constructor(r,e){t0(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Ir(i,R(10));var a=this,s=this.pj_1;a.sj_1=kt(s,R(10))}}class xw{}class Wd{constructor(){a1=this,this.tj_1=new Ye(new y(342103040,-7347440),0),this.uj_1=new Ye(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Ir(e,t);if(er(Ie(e,t),new y(0,0))<0&&!ir(Cr(i,t),e)){var a=i;i=Br(a,He())}var s=i,o=hr(r,s);if(er(Ie(r,o),new y(0,0))<0&&er(Ie(r,s),new y(0,0))>=0)return er(r,new y(0,0))>0?mt().uj_1:mt().tj_1;var u=o,c;if(er(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(er(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=kt(e,f),h=hr(v,as(f,ys(as(Ie(v,f),li(v,en(v))),63))),d=Zr(h);c=new Ye(u,d)}return c}wj(r,e){return this.vj(r,R(e))}xj(r){return rS(r).yj()}}class Ye{constructor(r,e){mt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(er(new y(342103040,-7347440),t)<=0&&er(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw U.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:Ae(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof Ye?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof Ye?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+or(51,this.ak_1)|0}toString(){return Q2(this)}}class Yd{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(er(this.kk_1,mt().tj_1.zj_1)<0||er(this.kk_1,mt().uj_1.zj_1)>0)throw yc.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return mt().wj(this.kk_1,this.lk_1)}}class gc{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw yc.qk(this.rk_1+' when parsing an Instant from "'+Yc(this.sk_1,64)+'"')}}class Zd{ck(r){var e=r.zj_1,t=new y(86400,0),i=Ir(e,t);if(er(Ie(e,t),new y(0,0))<0&&!ir(Cr(i,t),e)){var a=i;i=Br(a,He())}var s=i,o=new y(86400,0),u=kt(e,o),c=hr(u,as(o,ys(as(Ie(u,o),li(u,en(u))),63))),f=Zr(c),v,h,d,_=hr(s,R(719528)),m=_;_=Br(m,R(60));var w=new y(0,0);if(er(_,new y(0,0))<0){var x=_,k=hr(x,R(1)),S=Ir(k,R(146097)),E=Br(S,R(1));w=Cr(E,R(400));var I=_,A=en(E),O=Cr(A,R(146097));_=hr(I,O)}var L=Cr(Ln(400),_),J=hr(L,R(591)),T=Ir(J,R(146097)),M=_,F=Cr(Ln(365),T),B=T,D=Ir(B,R(4)),H=hr(F,D),V=T,$=Ir(V,R(100)),tr=Br(H,$),W=T,G=Ir(W,R(400)),ar=Br(M,hr(tr,G));if(er(ar,new y(0,0))<0){var ur=T;T=Br(ur,He());var X=_,Tr=Cr(Ln(365),T),wr=T,dr=Ir(wr,R(4)),Er=hr(Tr,dr),br=T,kr=Ir(br,R(100)),Pr=Br(Er,kr),_r=T,Hr=Ir(_r,R(400));ar=Br(X,hr(Pr,Hr))}T=hr(T,w);var an=Zr(ar),Gr=(or(an,5)+2|0)/153|0;h=((Gr+2|0)%12|0)+1|0,d=(an-((or(Gr,306)+5|0)/10|0)|0)+1|0;var gr=T,Kr=Gr/10|0,Xr=hr(gr,R(Kr));v=Zr(Xr);var un=f/3600|0,Fr=f-or(un,3600)|0,Qr=Fr/60|0,_n=Fr-or(Qr,60)|0;return new mc(v,h,d,un,Qr,_n,r.ak_1)}}class mc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class yc extends U{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return ln(e,e.pk_1),e}}class Vd{}class Xd{constructor(r){this.uk_1=r}}class Qd extends Vd{constructor(r,e){super();var t=this;t.vk_1=Wb(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=z(this,Xe)?this:g(),this.yk_1=_u()}ka(){return j_()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=z(t,Xe)?t:g(),this.wk_1=r,us()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new Kt(r)instanceof Kt?r:g();return dS(i),i}else t=e;var a=t;if(P(new Kt(_u()),new Kt(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=Tk(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=h0(c);a.ma(f);continue r}else throw d}var v=s;if(v!==us()){var h=v;a.ma(h)}}else this.yk_1=_u(),a.ma(r)}}}class rp extends te{}class wc{constructor(r){this.bl_1=r,this.cl_1=Zs}l2(){return this.cl_1===Zs&&(this.cl_1=on(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==Zs}toString(){return this.dl()?oe(this.l2()):"Lazy value not initialized yet."}}class np{}class Sw{}class Et{constructor(r){this.el_1=r}equals(r){var e;return r instanceof Et?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return zr(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class Kt{constructor(r){this.fl_1=r}toString(){return fS(this.fl_1)}hashCode(){return vS(this.fl_1)}equals(r){return hS(this.fl_1,r)}}class Xf extends eo{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return ln(e,e.ab_1),e}}class fl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+oe(this.ch_1)+", "+oe(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:zr(this.ch_1);return r=or(r,31)+(this.dh_1==null?0:zr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof fl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class ep{constructor(){s1=this,this.dg_1=new wt(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new wt(r,e),t}gl(r){var e;switch(r.length){case 36:e=Ix(r);break;case 32:e=Cx(r);break;default:throw U.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+pS(r,64)+'" of length '+r.length))}return e}}class wt{constructor(r,e){Cs(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Ma(this.hl_1,r,0,0,4);var e=45,t=Y(e);r[8]=jn(t),Ma(this.hl_1,r,9,4,6);var i=45,a=Y(i);r[13]=jn(a),Ma(this.hl_1,r,14,6,8);var s=45,o=Y(s);r[18]=jn(o),Ma(this.il_1,r,19,0,2);var u=45,c=Y(u);return r[23]=jn(c),Ma(this.il_1,r,24,2,8),bx(r)}equals(r){return this===r?!0:r instanceof wt?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=gt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=gt(i,s)}return e}d(r){return this.kl(r instanceof wt?r:g())}hashCode(){return Ie(this.hl_1,this.il_1).hashCode()}}class tp{constructor(){o1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class je{constructor(r){El(),this.pl_1=r}ql(r){return d0(this.pl_1,r)}d(r){return _S(this,r)}toString(){return l1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return gS(this.pl_1,r)}}class ip{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw qr.r(this.sl_1.toString());return r}z(){return new je(this.tl())}}class Yt{constructor(r){this.ul_1=r}c1(){return ni(this.ul_1)}x(){return wS(this.ul_1)}vl(r){return p0(this.ul_1,r)}l1(r){return bS(this,r)}i1(){return kS(this.ul_1)}toString(){return xS(this.ul_1)}hashCode(){return SS(this.ul_1)}equals(r){return zS(this.ul_1,r)}}class ap{constructor(){u1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Yn{constructor(r){Il(),this.am_1=r}bm(r){return _0(this.am_1,r)}d(r){return ES(this,r)}toString(){return c1(this.am_1)}hashCode(){return this.am_1}equals(r){return IS(this.am_1,r)}}class sp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw qr.r(this.dm_1.toString());return r}z(){return new Yn(this.em())}}class Zt{constructor(r){this.fm_1=r}c1(){return ei(this.fm_1)}x(){return TS(this.fm_1)}gm(r){return g0(this.fm_1,r)}l1(r){return qS(this,r)}i1(){return OS(this.fm_1)}toString(){return US(this.fm_1)}hashCode(){return jS(this.fm_1)}equals(r){return NS(this.fm_1,r)}}class op{constructor(){f1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Zn{constructor(r){As(),this.lm_1=r}mm(r){return m0(this.lm_1,r)}d(r){return LS(this,r)}toString(){return v1(this.lm_1)}hashCode(){return DS(this.lm_1)}equals(r){return PS(this.lm_1,r)}}class lp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw qr.r(this.om_1.toString());return r}z(){return new Zn(this.pm())}}class Vt{constructor(r){this.qm_1=r}c1(){return ti(this.qm_1)}x(){return BS(this.qm_1)}rm(r){return y0(this.qm_1,r)}l1(r){return FS(this,r)}i1(){return $S(this.qm_1)}toString(){return JS(this.qm_1)}hashCode(){return HS(this.qm_1)}equals(r){return GS(this.qm_1,r)}}class up{constructor(){h1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Ne{constructor(r){Cl(),this.wm_1=r}xm(r){return w0(this.wm_1,r)}d(r){return KS(this,r)}toString(){return d1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return WS(this.wm_1,r)}}class cp{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw qr.r(this.zm_1.toString());return r}z(){return new Ne(this.an())}}class Xt{constructor(r){this.bn_1=r}c1(){return ii(this.bn_1)}x(){return VS(this.bn_1)}cn(r){return b0(this.bn_1,r)}l1(r){return XS(this,r)}i1(){return QS(this.bn_1)}toString(){return rz(this.bn_1)}hashCode(){return nz(this.bn_1)}equals(r){return ez(this.bn_1,r)}}function zw(n){return new zt(0,bc(n))}function Ew(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function Iw(n,r){return qw(n,r)>=0}function Cw(n,r){return Ow(n,r)>=0}function Aw(n,r){return Uw(n,r)>=0}function Tw(n,r){return jw(n,r)>=0}function bc(n){return n.length-1|0}function qw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Ow(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Uw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function jw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Nw(n){return n.length-1|0}function fp(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Lw(n,rn.f(),r,e,t,i,a,s).toString()}function Lw(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)D_(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Dw(n){return new zt(0,Bw(n))}function Pw(n){var r;switch(n.length){case 0:r=mr();break;case 1:r=Se(n[0]);break;default:var e=n.slice();r=hl(e);break}return r}function Mw(n){return new kd(Gw(n))}function vp(n){switch(n.length){case 0:return It();case 1:return Dc(n[0]);default:return hp(n,An.i(n.length))}}function Rw(n){return Fw(n,q.m())}function Bw(n){return n.length-1|0}function hp(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function Fw(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function $w(n,r){return Hw(n,r)>=0}function dp(n){var r;switch(n.length){case 0:throw qr.r("Array is empty.");case 1:r=n[0];break;default:throw U.v("Array has more than one element.")}return r}function Jw(n){return n.length===0?q_():new Uh(n)}function Hw(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function Qf(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function Gw(n){return()=>wp(n)}function rr(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,pp(n,rn.f(),r,e,t,i,a,s).toString()}function pp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)D_(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function Kw(n){return ts(n,ai.b1(Wr(n,12)))}function Ww(n){for(var r=io(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function Qt(n){if(z(n,Z)){if(n.c1()<=1)return fa(n);var r=fi(n),e=bs(r)?r:g();return Xb(e),hl(e)}var t=Sc(n);return vk(t),t}function na(n){return fa(xc(n))}function Qe(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=It();break;case 1:var e;z(n,En)?e=n.d1(0):e=n.x().z(),r=Dc(e);break;default:r=ts(n,An.i(n.c1()));break}return r}return Hx(ts(n,An.e1()))}function ye(n,r){if(z(r,Z)){var e=q.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=q.f1(n);return ma(t,r),t}}function Yw(n){if(n.i1())throw qr.r("List is empty.");return n.d1(0)}function fa(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=mr();break;case 1:var e;z(n,En)?e=n.d1(0):e=n.x().z(),r=Se(e);break;default:r=mp(n);break}return r}return E_(Sc(n))}function kc(n){return n.c1()===1?n.d1(0):null}function Zw(n,r){var e=n.x();if(!e.y())throw qr.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function xc(n){var r;return z(n,Z)?r=An.k1(n):r=ts(n,An.e1()),r}function si(n,r){var e=q.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function Vw(n,r){return z(n,Z)?n.l1(r):rb(n,r)>=0}function iu(n){return n.i1()?null:n.d1(0)}function _p(n){var r;switch(n.c1()){case 0:throw qr.r("List is empty.");case 1:r=n.d1(0);break;default:throw U.v("List has more than one element.")}return r}function Xw(n){if(z(n,En))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function Qw(n,r){var e;if(z(n,Z)){var t=n.c1()-r|0;if(t<=0)return mr();if(t===1)return Se(nb(n));if(e=q.g1(t),z(n,En)){if(z(n,_s)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=q.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return E_(e)}function gp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function ts(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Sc(n){return z(n,Z)?mp(n):ts(n,q.m())}function hi(n,r){if(z(n,Z)){if(n.c1()<=1)return fa(n);var e=fi(n),t=bs(e)?e:g();return Qb(t,r),hl(t)}var i=Sc(n);return hk(i,r),i}function mp(n){return q.f1(n)}function rb(n,r){if(z(n,En))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Ss(e),P(r,i))return e;e=e+1|0}return-1}function nb(n){if(z(n,En))return qu(n);var r=n.x();if(!r.y())throw qr.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function qu(n){if(n.i1())throw qr.r("List is empty.");return n.d1(zs(n))}function eb(n){return new jh(n)}function tb(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Ae(e,t)>0&&(e=t)}return e}function zc(n,r){return r<=-2147483648?L_().p1_1:Ue(n,r-1|0)}function ib(n,r){return Jc.q1(n,r,-1)}function bt(n,r){return n>r?r:n}function vn(n,r){return n<r?r:n}function ab(n,r){return Jc.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Ec(n,r,e){if(er(r,e)>0)throw U.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return er(n,r)<0?r:er(n,e)>0?e:n}function sb(n,r){return er(n,r)<0?r:n}function ob(n,r,e){if(r>e)throw U.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function au(n,r){return er(n,r)>0?r:n}function Hs(n,r){var e=lb(r);return e!=null?n.u1(e):!1}function lb(n){return er(new y(-2147483648,-1),n)<=0&&er(n,new y(2147483647,0))<=0?Zr(n):null}function ms(n,r){return new Cd(n,r)}function yp(n){var r=n.x();if(!r.y())return mr();var e=r.z();if(!r.y())return Se(e);var t=q.m();for(t.n(e);r.y();)t.n(r.z());return t}function ub(n){return new Nh(n)}function cb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw U.v(b(e))}var t;return r===0?t=q_():z(n,ul)?t=n.v1(r):t=new cl(n,r),t}function rv(n,r){var e=Lx(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=An.i(i??or(n.c1(),2));return a.h1(n),ma(a,r),a}function to(n,r){var e=An.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function fb(n){if(C(n)===0)throw qr.r("Char sequence is empty.");return Q(n,0)}function vb(n){var r;switch(C(n)){case 0:throw qr.r("Char sequence is empty.");case 1:r=Q(n,0);break;default:throw U.v("Char sequence has more than one element.")}return r}function hb(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw U.v(b(e))}return rt(n,bt(r,n.length))}function db(n){var r=n&65535;return r}function yn(n,r){return n-r|0}function pb(n,r){return yn(n.x1_1,r instanceof zn?r.x1_1:g())}function ne(n,r){return n-r|0}function Y(n){return n}function yr(n){return String.fromCharCode(n)}function _b(n,r){return r instanceof zn?n===r.x1_1:!1}function gb(n){return n}var Ou;function Ic(){return Ou===l&&new Lh,Ou}function oe(n){var r=n==null?null:b(n);return r??"null"}function mb(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Uu;function vl(){return Uu===l&&new Dh,Uu}function yb(n){var r;return n<0?r=-n:r=n,r}function wp(n){return new Ph(n)}function io(n){var r="BooleanArray",e=bp(Array(n),!1);return e.$type$=r,e}function bp(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function is(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function oi(n){var r="LongArray",e=bp(Array(n),new y(0,0));return e.$type$=r,e}function va(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function su(){return ha(),kp}var kp;function xp(){return ha(),Sp}var Sp;function ju(){return ha(),zp}var zp;function Ep(){return ha(),Ip}var Ip;function wb(){return ha(),Cp}var Cp;function bb(n){return ha(),(n|0)===n?so(n):(xp()[0]=n,or(ju()[wb()],31)+ju()[Ep()]|0)}var nv;function ha(){nv||(nv=!0,kp=new ArrayBuffer(8),Sp=new Float64Array(su()),new Float32Array(su()),zp=new Int32Array(su()),xp()[0]=-1,Ip=ju()[0]!==0?1:0,Cp=1-Ep()|0)}function Je(){return pr(),Ap}var Ap;function He(){return pr(),Tp}var Tp;function ev(){return pr(),qp}var qp;function kb(){return pr(),Op}var Op;function Oe(){return pr(),Up}var Up;function tv(){return pr(),jp}var jp;function er(n,r){if(pr(),ir(n,r))return 0;var e=_e(n),t=_e(r);return e&&!t?-1:!e&&t?1:_e(Br(n,r))?-1:1}function Nu(n){return pr(),jn(n.d3_1)}function Lu(n){return pr(),Uc(n.d3_1)}function Zr(n){return pr(),n.d3_1}function Gn(n){return pr(),n.e3_1*4294967296+Sb(n)}function ao(n,r){if(pr(),ri(n))return"0";if(_e(n))if(ir(n,Oe())){var e=R(r),t=Ir(n,e),i=Zr(Br(Cr(t,e),n)),a=ao(t,r);return a+i.toString(r)}else return"-"+ao(en(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=ea(Math.pow(r,s)),u=n,c="";;){var f=Ir(u,o),v=Zr(Br(u,Cr(f,o))),h=v.toString(r);if(u=f,ri(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return pr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function xb(n){return pr(),n.d3_1^n.e3_1}function R(n){return pr(),new y(n,n<0?-1:0)}function _e(n){return pr(),n.e3_1<0}function Br(n,r){return pr(),hr(n,en(r))}function Sb(n){return pr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function ri(n){return pr(),n.e3_1===0&&n.d3_1===0}function Cr(n,r){if(pr(),ri(n))return Je();if(ri(r))return Je();if(ir(n,Oe()))return iv(r)?Oe():Je();if(ir(r,Oe()))return iv(n)?Oe():Je();if(_e(n)){var e;return _e(r)?e=Cr(en(n),en(r)):e=en(Cr(en(n),r)),e}else if(_e(r))return en(Cr(n,en(r)));if(av(n,tv())&&av(r,tv()))return ea(Gn(n)*Gn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+or(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+or(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+or(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+or(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+or(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((or(t,f)+or(i,c)|0)+or(a,u)|0)+or(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function en(n){return pr(),hr(Cc(n),new y(1,0))}function ea(n){if(pr(),xs(n))return Je();if(n<=-9223372036854776e3)return Oe();if(n+1>=9223372036854776e3)return kb();if(n<0)return en(ea(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){pr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function iv(n){return pr(),(n.d3_1&1)===1}function av(n,r){return pr(),er(n,r)<0}function Cc(n){return pr(),new y(~n.d3_1,~n.e3_1)}function Ir(n,r){if(pr(),ri(r))throw es.k3("division by zero");if(ri(n))return Je();if(ir(n,Oe())){if(ir(r,He())||ir(r,ev()))return Oe();if(ir(r,Oe()))return He();var e=ys(n,1),t=Kn(Ir(e,r),1);if(ir(t,Je()))return _e(r)?He():ev();var i=Br(n,Cr(r,t));return hr(t,Ir(i,r))}else if(ir(r,Oe()))return Je();if(_e(n)){var a;return _e(r)?a=Ir(en(n),en(r)):a=en(Ir(en(n),r)),a}else if(_e(r))return en(Ir(n,en(r)));for(var s=Je(),o=n;Eb(o,r);){for(var u=Gn(o)/Gn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=ea(c),d=Cr(h,r);_e(d)||zb(d,o);)c=c-v,h=ea(c),d=Cr(h,r);ri(h)&&(h=He()),s=hr(s,h),o=Br(o,d)}return s}function ys(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Kn(n,r){pr();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function zb(n,r){return pr(),er(n,r)>0}function Eb(n,r){return pr(),er(n,r)>=0}function kt(n,r){return pr(),Br(n,Cr(Ir(n,r),r))}function as(n,r){return pr(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function li(n,r){return pr(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function Ie(n,r){return pr(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Ac(n,r){pr();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function Ln(n){pr();var r;return n instanceof y?r=n:r=ea(n),r}function Gi(n){return pr(),ui(n)&&n.$type$==="LongArray"}function Ib(n){return pr(),n!=null?Gi(n):!1}var sv;function pr(){if(!sv){sv=!0,Ap=R(0),Tp=R(1),qp=R(-1),Op=new y(-1,2147483647),Up=new y(0,-2147483648),jp=R(16777216);var n=Array;new nn(n,"LongArray",Ib)}}function Q(n,r){var e;return Tc(n)?e=K(n,r):e=n.b(r),e}function Tc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Tc(n)?r=n.length:r=n.a(),r}function qn(n,r,e){var t;return Tc(n)?t=ee(n,r,e):t=n.c(r,e),t}function Cb(n){return fp(n,", ","[","]",l,l,Ab)}function Np(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!Jp(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function Lp(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=or(e,31)+zr(r[a])|0}while(t<i);return e}function Ab(n){return b(n)}function Ae(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=ov(n,r):r instanceof y?t=ov(n,Gn(r)):t=lv(n,r),e=t;break;case"string":case"boolean":case"bigint":e=lv(n,r);break;default:e=Tb(n,r);break}return e}function ov(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function lv(n,r){return n<r?-1:n>r?1:0}function Tb(n,r){return n.d(r)}function qb(n){return Du(n)}function Du(n){if(!("kotlinHashCodeValue$"in n)){var r=Dp(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function Dp(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":Jp(n)?r="[...]":typeof n.toString!="function"?r=Ob(n):r=n.toString(),r}function Ob(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Pu(n)&&Pu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!ui(n.$bound)||!ui(r.$bound))return!1;var a=n.$bound,s=r.$bound;return Np(a,s)}return n===r}function zr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Du(n);break;case"function":e=Pu(n)?Ub(n):Du(n);break;case"number":e=bb(n);break;case"boolean":e=Pp(n);break;case"string":e=ie(String(n));break;case"bigint":e=jb(n);break;case"symbol":e=Nb(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function Ub(n){var r=n.$flags;r=or(31,r)+zr(n.$id)|0;var e=or(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&ui(i)){var a=i;r=or(31,r)+Lp(a)|0}return r}function Pp(n){return n?1231:1237}function ie(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=or(r,31)+s|0}while(a!==i);return r}function jb(n){var r=BigInt(32),e=BigInt(4294967295),t=yb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=or(31,i)+u|0,t=t>>r}return or(i,s)}function Nb(n){var r=Lb(n)?Db():Pb(),e=r.get(n);if(e!==l)return e;var t=Dp();return r.set(n,t),t}function Lb(n){return Symbol.keyFor(n)!=l}function Db(){return ou===l&&(ou=new Map),ou}function Pb(){return lu===l&&(lu=new WeakMap),lu}var ou,lu;function ln(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Dr(n){return n.prototype}function di(n,r){var e=Object.create(n.prototype);return qc(e,r),e}function qc(n,r){r!==l&&Object.assign(n,r)}function Ki(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function Mb(n){return n===l}function Mp(n){return{cause:n}}function Wi(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(Mb(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function Rb(){return Bp(),Rp}var Rp;function Bb(n,r){return Bp(),n!=l&&n[Rb()]?r(n):Ok(r)}var uv;function Bp(){uv||(uv=!0,Rp=Xe.Symbol)}function ws(){throw Eu.s3()}function Fb(){throw Iu.w3()}function g(){throw Cu.a4()}function on(n){var r;return n==null?Fb():r=n,r}function Fp(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Oc(u,n,r,e,t,i,a,s,o)}function Oc(n,r,e,t,i,a,s,o,u){var c=Fp(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function N(n,r,e,t,i,a,s,o){var u="object";Oc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Oc(u,n,r,e,t,i,a,s,o)}function Vr(n,r,e,t){N(n,"Companion",l,r,e,t,l,l)}function $b(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&bs(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function jn(n){return n<<24>>24}function so(n){var r;return n instanceof y?r=Zr(n):r=Jb(n),r}function Jb(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Uc(n){return n<<16>>16}function Fe(n){var r=so(n),e=Uc(r);return db(e)}function Ue(n,r){return new zt(n,r)}function Hb(){return pa(),$p}var $p;function Li(){return pa(),Fp("class",l,l,l,l,l)}function da(n,r,e,t,i,a){return pa(),t.get=t,t.set=i,t.callableName=n,Gb(t,Kb(r,i),e)}function Gb(n,r,e){pa(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function Kb(n,r){return pa(),Hb()[n][r==null?0:1]}function De(n,r,e,t,i,a){return pa(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var cv;function pa(){if(!cv){cv=!0;var n=[Li(),Li()],r=[Li(),Li()];$p=[n,r,[Li(),Li()]]}}function Jp(n){return ui(n)||xu(n)}function ui(n){return Array.isArray(n)}function Pu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function z(n,r){return n[r.Symbol]===!0}function bs(n){var r;return ui(n)?r=!n.$type$:r=!1,r}function Wb(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function Hp(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Mu(n){var r=typeof n;return r==="string"||r==="boolean"||Hp(n)||z(n,xe)}function ks(n){return typeof n=="string"||z(n,uc)}function Ga(n){return ui(n)&&n.$type$==="BooleanArray"}function Ka(n){return n instanceof Int8Array}function Wa(n){return n instanceof Int16Array}function Ya(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function Za(n){return n instanceof Int32Array}function Va(n){return n instanceof Float32Array}function Xa(n){return n instanceof Float64Array}function Yb(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?Zb(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?z(n,i):n instanceof i}function Zb(n){return Object.getPrototypeOf(n)}var l;function ci(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Gp(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return c_(n,r,null)}function jc(n,r){return Np(n,r)}function Vb(n){return Lp(n)}function hl(n){return q.i4(n)}function Ru(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,is(r));else if(r>t){var a=is(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function Bu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function Fu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function ta(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return pi(n,oi(r))}function ia(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function aa(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=pi(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function $u(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t="BooleanArray",i=c_(n,r,!1);return i.$type$=t,i}function Xb(n){n.length>1&&_k(n)}function Qb(n,r){n.length>1&&Xp(n,r)}function Kp(n){var r=Y(n),e=nk(fv().j4_1,r),t=r-fv().j4_1[e]|0;return t<10?t:-1}function rk(n){return Kp(n)>=0}function nk(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var Ju;function fv(){return Ju===l&&new Mh,Ju}function ek(n){var r=Y(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function tk(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function xs(n){return n!==n}function ik(n){var r;return n===0?r=0:r=1<<(31-rs(n)|0),r}function ak(n){return n===1/0||n===-1/0}function vv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+rs(t)|0}else e=rs(r);return e}function Nc(n){return!sk(n)&&!ok(n)}function Lc(n){return!ak(n)&&!xs(n)}function Wp(n){var r=n.d3_1;return r===0?32+hv(n.e3_1)|0:hv(r)}function sk(n){return n===1/0||n===-1/0}function ok(n){return n!==n}function hv(n){var r=~(n|(-n|0));return 32-rs(r)|0}var sr;function Yi(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function gt(n,r){return Ie(n,new y(0,-2147483648)).f3(Ie(r,new y(0,-2147483648)))}function lk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function uk(n,r){var e=n,t=r;if(er(t,new y(0,0))<0){var i;return gt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(er(e,new y(0,0))>=0)return Ir(e,t);var a=Kn(Ir(Ac(e,1),t),1),s=Br(e,Cr(a,t)),o,u=s,c=t;gt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,R(f));return v}function ck(n,r){if(er(n,new y(0,0))>=0)return du(n,r);var e=Ac(n,1),t=Ir(e,R(r)),i=Kn(t,1),a=i,s=Cr(a,R(r)),o=Br(n,s);if(er(o,R(r))>=0){var u=o;o=Br(u,R(r));var c=i;i=hr(c,R(1))}return du(i,r)+du(o,r)}function fi(n){var r;return n.toArray!==void 0?r=n.toArray():r=Yp(n),r}function Ss(n){return n<0&&Ox(),n}function fk(n,r,e,t,i){On.u4(t,i,n.length);var a=i-t|0;if(On.u4(e,e+a|0,r.length),xu(r)&&xu(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function Yp(n){return Ux(n)}function Se(n){var r=[n];return q.i4(r)}function oo(n){return Bx([n])}function Dc(n){return Gx([n])}function vk(n){Zp(n,O_())}function hk(n,r){Zp(n,r)}function Zp(n,r){if(n.c1()<=1)return sr;var e=fi(n);Xp(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function Vp(n){if(!(n>=0)){var r="capacity must be non-negative.";throw U.v(b(r))}return Array(n)}function lo(n,r,e){n.fill(null,r,e)}function dv(n,r){return Gp(n,r)}function pv(n,r){n[r]=null}var Hu;function Pa(){return Hu===l&&new Jh,Hu}function dk(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function uu(n,r){return On.i6(r,n.c1()),r}function pk(n,r){return On.j5(r,n.c1()),r}var Gs;function Xp(n,r){if(Qp()){var e=gk(r);n.sort(e)}else r_(n,0,bc(n),r)}function _k(n){if(Qp()){var r=mk;n.sort(r)}else r_(n,0,bc(n),O_())}function Qp(){var n=Gs;if(n!=null)return n;Gs=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=yk;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return Gs=!0,!0}function r_(n,r,e,t){var i=n.length,a=Array(i),s=Gu(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function Gu(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=Gu(n,r,e,a,i),o=Gu(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function gk(n){return(r,e)=>n.compare(r,e)}function mk(n,r){return Ae(n,r)}function yk(n,r){return(n&3)-(r&3)|0}function wk(n){n.v6_1=null}function n_(n,r){return ik(or(vn(r,1),3))}function e_(n,r){return rs(r)+1|0}function _v(n){if(n.v8_1.f7_1!==n.x8_1)throw no.u8("The backing map has been modified after this entry was obtained.")}function sa(n){return n.y6_1.length}function Ze(n){return n.b7_1.length}function dl(n){n.f7_1=n.f7_1+1|0}function t_(n,r){bk(n,r)?a_(n,!0):kk(n,n.d7_1+r|0)}function bk(n,r){var e=sa(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(sa(n)/4|0)}function kk(n,r){if(r<0)throw ae.a9("too many elements");if(r>sa(n)){var e=On.b9(sa(n),r);n.y6_1=dv(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:dv(i,e),n.a7_1=ci(n.a7_1,e);var a=n_(ss,e);a>Ze(n)&&s_(n,a)}}function i_(n){var r=n.z6_1;if(r!=null)return r;var e=Vp(sa(n));return n.z6_1=e,e}function pl(n,r){return r==null?0:or(zr(r),-1640531527)>>>n.e7_1|0}function a_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}lo(n.y6_1,t,n.d7_1),i==null||lo(i,t,n.d7_1),n.d7_1=t}function s_(n,r){dl(n),n.d7_1>n.g7_1&&a_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=e_(ss,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!xk(n,t))throw Sr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function xk(n,r){for(var e=pl(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=Ze(n)-1|0)}}function Fs(n,r){for(var e=pl(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=Ze(n)-1|0)}}function Sk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(on(n.z6_1)[e],r))return e}return-1}function o_(n,r){n.w7();r:for(;;)for(var e=pl(n,r),t=bt(or(n.c7_1,2),Ze(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=sa(n)){t_(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,dl(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){s_(n,or(Ze(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=Ze(n)-1|0)}}function l_(n,r){pv(n.y6_1,r);var e=n.z6_1;e==null||pv(e,r),zk(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,dl(n)}function zk(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=Ze(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,sr;var o=pl(n,n.y6_1[s-1|0]);((o-e|0)&(Ze(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function Ek(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function Ik(n,r){var e=o_(n,r.k2()),t=i_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function Ck(n,r){if(r.i1())return!1;t_(n,r.c1());for(var e=r.x(),t=!1;e.y();)Ik(n,e.z())&&(t=!0);return t}var ss,u_;function Ak(n,r){var e=new vc(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function Tk(n,r,e,t){var i=new vc(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function qk(n){var r=n instanceof fc?n:null,e=r==null?null:r.va();return e??n}function Ok(n){return new Promise(Uk(n))}function Uk(n){return(r,e)=>{var t=j_(),i=new sd(t,r,e);return Zx(n,i),sr}}function gv(n){ln(n,n.o6_1)}function cu(n){ln(n,n.u_1)}function fu(n){ln(n,n.z8_1)}function vu(n){ln(n,n.j3_1)}function mv(n){ln(n,n.q_1)}function yv(n){ln(n,n.rb_1)}function wv(n){ln(n,n.n3_1)}function bv(n){ln(n,n.t8_1)}function kv(n){ln(n,n.xb_1)}function xv(n){ln(n,n.bc_1)}function hu(n){ln(n,n.dc_1)}function Sv(n){ln(n,n.lc_1)}function jk(n){ln(n,n.r3_1)}function Nk(n){ln(n,n.v3_1)}function Lk(n){ln(n,n.z3_1)}function pi(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function c_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function Ks(n,r){return new wc(r)}function f_(n){return new wc(n)}function Dk(n){return Zr(li(ys(n,63),Ac(en(n),63)))}function Pk(n){return er(n,new y(0,0))<0?en(n):n}function Mk(n){var r;if(xs(n))throw U.v("Cannot round NaN value.");return n>Gn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Gn(new y(0,-2147483648))?r=new y(0,-2147483648):r=Ln(Math.round(n)),r}function Rk(n){return n<0?-n|0:n}var uo;function Bk(){return uo===l&&new hc,uo}function zv(){return cx(),v_}var v_;function Fk(n){return n!=null}function $k(n){return Hp(n)}function Jk(n){return n!=null?typeof n=="boolean":!1}function Hk(n){return n!=null?typeof n=="number":!1}function Gk(n){return n!=null?typeof n=="number":!1}function Kk(n){return n!=null?typeof n=="number":!1}function Wk(n){return n instanceof y}function Yk(n){return n!=null?typeof n=="number":!1}function Zk(n){return n!=null?typeof n=="number":!1}function Vk(n){return n!=null?bs(n):!1}function Xk(n){return n!=null?typeof n=="string":!1}function Qk(n){return n instanceof Error}function rx(n){return n!=null?Ga(n):!1}function nx(n){return n!=null?Ya(n):!1}function ex(n){return n!=null?Ka(n):!1}function tx(n){return n!=null?Wa(n):!1}function ix(n){return n!=null?Za(n):!1}function ax(n){return typeof n=="bigint"}function sx(n){return n!=null?Gi(n):!1}function ox(n){return n!=null?Va(n):!1}function lx(n){return n!=null?Xa(n):!1}function ux(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var Ku;function xr(){return Ku===l&&new od,Ku}var Ev;function cx(){Ev||(Ev=!0,v_=Array(0))}function Ur(n){if(n===String)return xr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Au(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Au(n);return e}function jr(n){var r;switch(typeof n){case"string":r=xr().stringClass;break;case"number":var e;(n|0)===n?e=xr().intClass:e=xr().doubleClass,r=e;break;case"bigint":r=xr().bigIntClass;break;case"boolean":r=xr().booleanClass;break;case"function":var t=xr();r=t.functionClass(n.length);break;default:var i;if(Ga(n))i=xr().booleanArrayClass;else if(Ya(n))i=xr().charArrayClass;else if(Ka(n))i=xr().byteArrayClass;else if(Wa(n))i=xr().shortArrayClass;else if(Za(n))i=xr().intArrayClass;else if(Gi(n))i=xr().qd();else if(Va(n))i=xr().floatArrayClass;else if(Xa(n))i=xr().doubleArrayClass;else if(z(n,Be))i=Ur(Be);else if(bs(n))i=xr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=xr().anyClass;else if(a===Error)s=xr().throwableClass;else{var o=a;s=Ur(o)}i=s}r=i;break}return r}function fx(n){n.lastIndex=0}function Iv(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function vx(n){return 48<=n&&n<=57?!0:yn(n,128)<0?!1:rk(n)}function Pc(n){return ek(n)}function du(n,r){return ao(n,_a(r))}function _a(n){if(!(2<=n&&n<=36))throw U.v("radix "+n+" was not in valid range 2..36");return n}function h_(n){var r=+n,e;return xs(r)&&!d_(n)||r===0&&tt(n)?e=null:e=r,e}function hx(n,r){return n.toString(_a(r))}function co(n){var r=+n;return(xs(r)&&!d_(n)||r===0&&tt(n))&&ya(n),r}function _l(n,r){var e=yn(n,48)>=0&&yn(n,57)<=0?ne(n,48):yn(n,65)>=0&&yn(n,90)<=0?ne(n,65)+10|0:yn(n,97)>=0&&yn(n,122)<=0?ne(n,97)+10|0:yn(n,128)<0?-1:yn(n,65313)>=0&&yn(n,65338)<=0?ne(n,65313)+10|0:yn(n,65345)>=0&&yn(n,65370)<=0?ne(n,65345)+10|0:Kp(n);return e>=r?-1:e}function dx(n){var r=wl(n),e;return r==null?ya(n):e=r,e}function d_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var Wu;function fo(){return Wu===l&&new ld,Wu}function px(n,r,e){return()=>n.re(r,e)}function _x(n){return n.z()}function gx(n,r){return rr(n,"",r,l,l,l,mx)}function p_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Ue(i.index,n.lastIndex-1|0);return new fd(a,i,t,r)}function mx(n){return n.jf_1}function yx(n){return r=>n.d1(r)}function wx(n,r){if(r<et(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function ee(n,r,e){return n.substring(r,e)}function rt(n,r){return n.substring(r)}function bx(n){return xx(n,0,n.length)}function Hn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(fo().ke(r),t?"gui":"gu"),a=fo().le(e);return n.replace(i,a)}function we(n,r,e){return e=e===l?!1:e,e?Mc(n,0,r,0,r.length,e):n.startsWith(r,0)}function Mc(n,r,e,t,i,a){return a=a===l?!1:a,bl(n,r,e,t,i,a)}function kx(n,r,e){return e=e===l?!1:e,e?Mc(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Cv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!yl(s,o,e))return!1}while(t<i);return!0}function xx(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw U.v(b(i))}for(var a=r,s=rn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(Fe(u));else if(u>>5===-2){var c=Sx(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(Fe(c)),a=a+1|0)}else if(u>>4===-2){var f=zx(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(Fe(f)),a=a+2|0)}else if(u>>3===-2){var v=Ex(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(Fe(h)),s.da(Fe(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Sx(n,r,e,t,i){if(!(r&30)||e>=t)return Cn(0);var a=n[e];return(a&192)!==128?Cn(0):r<<6^a^3968}function zx(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return Cn(0)}else if((a&192)!==128)return Cn(0)}else if((a&224)!==160)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];return(s&192)!==128?Cn(1):r<<12^a<<6^s^-123008}function Ex(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return Cn(0)}else if((r&15)>4)return Cn(0)}else if((a&240)<=128)return Cn(0);if((a&192)!==128)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];if((s&192)!==128)return Cn(1);if((e+2|0)===t)return Cn(2);var o=n[e+2|0];return(o&192)!==128?Cn(2):r<<18^a<<12^s<<6^o^3678080}function Cn(n,r,e){return-n|0}var Av;function ga(){if(Av)return sr;Av=!0,__=new dt("NANOSECONDS",0,1),new dt("MICROSECONDS",1,1e3),g_=new dt("MILLISECONDS",2,1e6),m_=new dt("SECONDS",3,1e9),y_=new dt("MINUTES",4,6e10),w_=new dt("HOURS",5,36e11),b_=new dt("DAYS",6,864e11)}var __,g_,m_,y_,w_,b_;function k_(n,r,e){var t=Ae(r.cg_1,e.cg_1),i;if(t>0){var a=Ln(r.cg_1/e.cg_1),s=Cr(n,a);i=ir(Ir(s,a),n)?s:er(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Ir(n,Ln(e.cg_1/r.cg_1)):i=n;return i}function Tv(n,r,e){var t=Ae(r.cg_1,e.cg_1);return t>0?Cr(n,Ln(r.cg_1/e.cg_1)):t<0?Ir(n,Ln(e.cg_1/r.cg_1)):n}function vo(){return ga(),__}function ho(){return ga(),g_}function Rc(){return ga(),m_}function x_(){return ga(),y_}function S_(){return ga(),w_}function Bc(){return ga(),b_}function Ma(n,r,e,t,i){var a=e;t<4&&(a=qv(n.e3_1,r,a,t,bt(i,4))),i>4&&qv(n.d3_1,r,a,vn(t-4|0,0),i-4|0)}function Ix(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Y(o);if(!(u>>>8|0)&&mn()[u]>=0){s=mn()[u];break r}$n(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";$n(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Y(w);if(!(x>>>8|0)&&mn()[x]>=0){m=mn()[x];break r}$n(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";$n(n,S,13)}var E=0,I=14;if(I<18)do{var A=I;I=I+1|0;var O=E<<4,L;r:{var J=K(n,A),T=Y(J);if(!(T>>>8|0)&&mn()[T]>=0){L=mn()[T];break r}$n(n,r,A)}E=O|L}while(I<18);var M=E;if(K(n,18)!==45){var F="'-' (hyphen)";$n(n,F,18)}var B=0,D=19;if(D<23)do{var H=D;D=D+1|0;var V=B<<4,$;r:{var tr=K(n,H),W=Y(tr);if(!(W>>>8|0)&&mn()[W]>=0){$=mn()[W];break r}$n(n,r,H)}B=V|$}while(D<23);var G=B;if(K(n,23)!==45){var ar="'-' (hyphen)";$n(n,ar,23)}var ur=0,X=24;if(X<28)do{var Tr=X;X=X+1|0;var wr=ur<<4,dr;r:{var Er=K(n,Tr),br=Y(Er);if(!(br>>>8|0)&&mn()[br]>=0){dr=mn()[br];break r}$n(n,r,Tr)}ur=wr|dr}while(X<28);var kr=ur,Pr=0,_r=28;if(_r<36)do{var Hr=_r;_r=_r+1|0;var an=Pr<<4,Gr;r:{var gr=K(n,Hr),Kr=Y(gr);if(!(Kr>>>8|0)&&mn()[Kr]>=0){Gr=mn()[Kr];break r}$n(n,r,Hr)}Pr=an|Gr}while(_r<36);var Xr=Pr,un=k<<16|M,Fr=new y(un,c),Qr=G<<16|kr,_n=new y(Xr,Qr);return Cs().gg(Fr,_n)}function Cx(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Y(s);if(!(o>>>8|0)&&mn()[o]>=0){a=mn()[o];break r}var u="a hexadecimal digit";$n(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Y(m);if(!(w>>>8|0)&&mn()[w]>=0){_=mn()[w];break r}var x="a hexadecimal digit";$n(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),E=0,I=16;if(I<24)do{var A=I;I=I+1|0;var O=E<<4,L;r:{var J=K(n,A),T=Y(J);if(!(T>>>8|0)&&mn()[T]>=0){L=mn()[T];break r}var M="a hexadecimal digit";$n(n,M,A)}E=O|L}while(I<24);var F=E,B=0,D=24;if(D<32)do{var H=D;D=D+1|0;var V=B<<4,$;r:{var tr=K(n,H),W=Y(tr);if(!(W>>>8|0)&&mn()[W]>=0){$=mn()[W];break r}var G="a hexadecimal digit";$n(n,G,H)}B=V|$}while(D<32);var ar=B,ur=new y(ar,F);return Cs().gg(S,ur)}function qv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=n2()[f],h=a;a=h+1|0,r[h]=jn(v>>8);var d=a;a=d+1|0,r[d]=jn(v)}while(u!==o);return a}function Ax(n){return r=>r===n?"(this Collection)":oe(r)}var On;function Tx(n,r){return Ov(n,r.k2())+"="+Ov(n,r.l2())}function Ov(n,r){return r===n?"(this Map)":oe(r)}function Uv(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function qx(n){return r=>Tx(n,r)}var os;function zs(n){return n.c1()-1|0}function Ox(){throw Su.zb("Index overflow has happened.")}function Ux(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function mr(){return z_()}function nt(n){return Rw(n)}function Zi(n){return n.length>0?hl(n):mr()}var Yu;function z_(){return Yu===l&&new wd,Yu}var ls;function E_(n){switch(n.c1()){case 0:return mr();case 1:return Se(n.d1(0));default:return n}}function jx(n){return Ue(0,n.c1()-1|0)}function Nx(n){for(var r=q.m(),e=n.x();e.y();){var t=e.z();ma(r,t)}return r}function Wr(n,r){var e;return z(n,Z)?e=n.c1():e=r,e}function Lx(n){var r;return z(n,Z)?r=n.c1():r=null,r}function Dx(n,r){if(z(n,Sd))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw qr.r("Key "+oe(r)+" is missing in the map.");e=t;break r}return e}function Nr(){var n=Mx();return z(n,wn)?n:g()}function gl(n){return n.length>0?C_(n,vr.ha(n.length)):Nr()}function me(n,r){return Dx(n,r)}function I_(n){if(z(n,Z)){var r;switch(n.c1()){case 0:r=Nr();break;case 1:var e;z(n,En)?e=n.d1(0):e=n.x().z(),r=oo(e);break;default:r=Nv(n,vr.ha(n.c1()));break}return r}return A_(Nv(n,vr.q4()))}function jv(n){return C_(n,vr.ha(n.length))}function Ve(n,r){var e;if(n.i1())e=oo(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function Fc(n){return vr.ia(n)}function Px(n,r){var e=Fc(n);return e.t2(r),A_(e)}var Zu;function Mx(){return Zu===l&&new zd,Zu}function C_(n,r){return T_(r,n),r}function Nv(n,r){return Rx(r,n),r}function A_(n){var r;switch(n.c1()){case 0:r=Nr();break;case 1:r=n;break;default:r=n;break}return r}function T_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function Rx(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function Bx(n){var r=ns.l7(n.length);return T_(r,n),r}function ma(n,r){if(z(r,Z))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function Lv(n){var r;if(n.i1())throw qr.r("List is empty.");return r=n.e5(zs(n)),r}function $c(n,r){var e;return n==null?e=ml:e=new _c(Jx(n),r),e}function Fx(n){return Jw(n)}function $x(n,r){return new _c(n,r)}function q_(){return ml}var ml;function Dv(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(on(n.sh_1)),n.th_1=n.sh_1==null?0:1}function Jx(n){return()=>n}function Bi(n){return vp(n)}function It(){return Xu()}var Vu;function Xu(){return Vu===l&&new Od,Vu}function Hx(n){switch(n.c1()){case 0:return It();case 1:return Dc(n.x().z());default:return n}}function Gx(n){return hp(n,ai.b1(n.length))}function Kx(n){if(!(n.length>0)){var r="Failed requirement.";throw U.v(b(r))}var e=Yx(n);return new jd(e)}function Ct(n,r){return n==null?r==null?0:-1:r==null?1:Ae(n!=null&&Mu(n)?n:g(),r)}function O_(){var n=U_;return z(n,pn)?n:g()}function Wx(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=Ct(s,o);if(u!==0)return u}return 0}var U_;function Yx(n){return(r,e)=>Wx(r,e,n)}function Zx(n,r){var e=qk(Ak(n,r)),t=sr;e.ma(t)}var Qu,r1;function j_(){return r1===l&&new Ld,r1}function us(){return Xx()}var Pv;function Vx(){if(Pv)return sr;Pv=!0,N_=new Dd("COROUTINE_SUSPENDED",0)}var N_;function Xx(){return Vx(),N_}function Qx(n){return Pd.di(n)}function r2(n,r,e){var t;if(e>0)t=n>=r?r:r-Mv(r,n,e)|0;else if(e<0)t=n<=r?r:r+Mv(n,r,-e|0)|0;else throw U.v("Step is zero.");return t}function Mv(n,r,e){return pu(pu(n,e)-pu(r,e)|0,e)}function pu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var n1;function L_(){return n1===l&&new Md,n1}var Jc;function D_(n,r,e){e!=null?n.g(e(r)):r==null||ks(r)?n.g(r):r instanceof zn?n.da(r.x1_1):n.g(b(r))}function yl(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Iv(n),i=Iv(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function n2(){return R_(),P_}var P_;function e2(){return R_(),M_}var M_;function mn(){return e2()}var Rv;function R_(){if(!Rv){Rv=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Y(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Y(a),n=n+1|0}P_=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Y(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Y(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=Q(m,w);w=w+1|0;var k=_;_=k+1|0,d[Y(x)]=k}for(var S=0,E="0123456789ABCDEF",I=0;I<C(E);){var A=Q(E,I);I=I+1|0;var O=S;S=O+1|0,d[Y(A)]=O}M_=d;for(var L=0,J=oi(256);L<256;)J[L]=new y(-1,-1),L=L+1|0;for(var T=0,M="0123456789abcdef",F=0;F<C(M);){var B=Q(M,F);F=F+1|0;var D=T;T=D+1|0,J[Y(B)]=R(D)}for(var H=0,V="0123456789ABCDEF",$=0;$<C(V);){var tr=Q(V,$);$=$+1|0;var W=H;H=W+1|0,J[Y(tr)]=R(W)}}}function t2(n){var r;return C(n)===0?r=o2:r=l2(n),r}function i2(n){return a2(n,"")}function a2(n,r){r=r===l?"":r;for(var e=J_(n),t=q.m(),i=e.x();i.y();){var a=i.z();tt(a)||t.n(a)}for(var s=q.g1(Wr(t,10)),o=t.x();o.y();){var u=o.z(),c=s2(u);s.n(c)}for(var f=tb(s),v=f??0,h=n.length+or(r.length,e.c1())|0,d=t2(r),_=zs(e),m=q.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var E=Ss(S),I;if((E===0||E===_)&&tt(k))I=null;else{var A=hb(k,v),O;A==null?O=null:O=d(A);var L=O;I=L??k}var J=I;J==null||m.n(J)}return pp(m,rn.fa(h),`
`).toString()}function s2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=Q(n,i);if(!Pc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function o2(n){return n}function l2(n){return r=>n+r}function wl(n){return u2(n,10)}function u2(n,r){_a(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(yn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=_l(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=or(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function ya(n){throw zu.nc("Invalid number format: '"+n+"'")}function c2(n){return f2(n,10)}function f2(n,r){_a(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(yn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Ir(o,R(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=_l(K(n,h),r);if(d<0)return null;if(er(f,c)<0)if(ir(c,u)){var _=a;if(c=Ir(_,R(r)),er(f,c)<0)return null}else return null;var m=f;f=Cr(m,R(r));var w=f,x=a,k=hr(x,R(d));if(er(w,k)<0)return null;var S=f;f=Br(S,R(d))}while(v<e);return i?f:en(f)}function B_(n,r){var e=ks(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=Q(e,s),u=$w(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=qn(e,t,i+1|0);return b(c)}function Fi(n,r){return v2(n,r)?ee(n,0,n.length-C(r)|0):n}function Es(n,r,e){e=e===l?n:e;var t=h2(n,r);return t===-1?e:ee(n,t+1|0,n.length)}function cs(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=po(n,r,l,e)>=0:t=Hc(n,r,0,C(n),e)>=0,t}function F_(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return d2(n,yr(r[0]),e,t);for(var i=ub(p2(n,r,l,e,t)),a=q.g1(Wr(i,10)),s=i.x();s.y();){var o=s.z(),u=_2(n,o);a.n(u)}return a}function $_(n,r){return g2(n,r)?rt(n,C(r)):n}function J_(n){return yp(m2(n))}function H_(n,r,e){return e=e===l?32:e,b(y2(ks(n)?n:g(),r,e))}function et(n){return C(n)-1|0}function tt(n){var r;r:{for(var e=0;e<C(n);){var t=Q(n,e);if(e=e+1|0,!Pc(t)){r=!1;break r}}r=!0}return r}function v2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?kx(n,r):bl(n,C(n)-C(r)|0,r,0,C(r),e)}function h2(n,r,e,t){e=e===l?et(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=va([r]);i=w2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function po(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=Hc(n,r,e,C(n),t):i=n.indexOf(r,e),i}function Hc(n,r,e,t,i,a){a=a===l?!1:a;var s=a?ib(bt(e,et(n)),vn(t,0)):Ue(vn(e,0),bt(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,Mc(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,bl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function G_(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=Q(n,i),s=Pc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return qn(n,r,e+1|0)}function d2(n,r,e,t){Gc(t);var i=0,a=po(n,r,i,e);if(a===-1||t===1)return Se(b(n));var s=t>0,o=q.g1(s?bt(t,10):10);r:do{var u=i,c=a,f=b(qn(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=po(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(qn(n,v,h));return o.n(d),o}function p2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,Gc(i),new $d(n,e,i,z2(r,t))}function _2(n,r){return b(qn(n,r.df(),r.ef()+1|0))}function g2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?we(n,r):bl(n,0,r,0,C(r),e)}function m2(n){return new Hd(n)}function y2(n,r,e){if(e=e===l?32:e,r<0)throw U.v("Desired length "+r+" is less than zero.");if(r<=C(n))return qn(n,0,C(n));var t=rn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function bl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!yl(Q(n,r+o|0),Q(e,t+o|0),a))return!1}while(s<i);return!0}function w2(n,r,e,t){e=e===l?et(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=dp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=bt(e,et(n));if(0<=o)do{var u=o;o=o+-1|0;var c=Q(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,yl(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function Gc(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw U.v(b(r))}return sr}function Bv(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Ue(n.mi_1,et(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Ue(n.mi_1,et(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=zc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function K_(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=dp(r),s=yr(a);return n.indexOf(s,e)}var o=vn(e,0),u=et(n);if(o<=u)do{var c=o;o=o+1|0;var f=Q(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,yl(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function kl(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=va([r]);i=K_(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function b2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function k2(n,r,e){e=e===l?n:e;var t=kl(n,r);return t===-1?e:ee(n,0,t)}function x2(n,r,e){e=e===l?n:e;var t=kl(n,r);return t===-1?e:ee(n,t+1|0,n.length)}function S2(n,r,e,t){e=e===l?et(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=Hc(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function z2(n,r){return(e,t)=>{var i=K_(e,n,t,r);return i<0?null:j(i,1)}}function bn(n){return ys(n,1)}function Kc(n){return(Zr(n)&1)===0}function W_(n){return(Zr(n)&1)===1}function E2(n){return Kc(n)?vo():ho()}var e1;function Jr(){return e1===l&&new Gd,e1}function Y_(n){var r=en(bn(n)),e=Zr(n)&1;return P2(r,e)}function I2(n,r){var e,t=Zr(n)&1;if(t===(Zr(r)&1)){var i;if(Kc(n))i=M2(hr(bn(n),bn(r)));else{var a=Wc(bn(n),bn(r)),s;if(ir(a,new y(-16162,2147483647)))throw U.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=xt(a):s=R2(a),i=s}e=i}else W_(n)?e=Fv(n,bn(n),bn(r)):e=Fv(n,bn(r),bn(n));return e}function Fv(n,r,e){var t=e0(e),i=Wc(r,t),a;if(er(new y(1108857478,-1074),i)<=0&&er(i,new y(-1108857478,1073))<=0){var s=Br(e,_o(t));a=zl(hr(_o(i),s))}else a=xt(i);return a}function xl(n){return er(n,new y(0,0))<0}function Is(n){return ir(n,Jr().fj_1)||ir(n,Jr().gj_1)}function Z_(n){return xl(n)?Y_(n):n}function V_(n,r){var e=Ie(n,r);if(er(e,new y(0,0))<0||!(Zr(e)&1))return n.f3(r);var t=Zr(n)&1,i=t-(Zr(r)&1)|0;return xl(n)?-i|0:i}function C2(n,r){return V_(n.kj_1,r instanceof ge?r.kj_1:g())}function A2(n){var r;if(Is(n))r=0;else{var e=n0(n),t=kt(e,R(24));r=Zr(t)}return r}function X_(n){var r;if(Is(n))r=0;else{var e=q2(n),t=kt(e,R(60));r=Zr(t)}return r}function Q_(n){var r;if(Is(n))r=0;else{var e=O2(n),t=kt(e,R(60));r=Zr(t)}return r}function r0(n){var r;if(Is(n))r=0;else if(W_(n)){var e=bn(n),t=kt(e,R(1e3));r=Zr(_o(t))}else{var i=bn(n),a=1e9,s=kt(i,R(a));r=Zr(s)}return r}function Sl(n,r){var e=n;return ir(e,Jr().fj_1)?new y(-1,2147483647):ir(e,Jr().gj_1)?new y(0,-2147483648):k_(bn(n),E2(n),r)}function T2(n){return Sl(n,Bc())}function n0(n){return Sl(n,S_())}function q2(n){return Sl(n,x_())}function O2(n){return Sl(n,Rc())}function U2(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Jr().fj_1))e="Infinity";else if(ir(r,Jr().gj_1))e="-Infinity";else{var t=xl(n),i=rn.f();t&&i.da(45);var a=Z_(n),s=T2(a),o=A2(a),u=X_(a),c=Q_(a),f=r0(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?Ws(n,i,c,f,9,"s",!1):f>=1e6?Ws(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?Ws(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function Ws(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=H_(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,Q(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=or((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function j2(n){var r=rn.f();xl(n)&&r.da(45),r.ca("PT");var e=Z_(n),t=n0(e),i=X_(e),a=Q_(e),s=r0(e),o=t;Is(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&Ws(n,r,a,s,9,"S",!0),r.toString()}function N2(n){return n.hashCode()}function L2(n,r){if(!(r instanceof ge))return!1;var e=r.kj_1;return!!ir(n,e)}function xt(n){var r=Jr(),e=Kn(n,1),t=hr(e,R(1));return r.jj(t)}function $v(n,r){var e=Tv(new y(-387905,1073741823),vo(),r),t;if(er(en(e),n)<=0&&er(n,e)<=0)t=zl(Tv(n,r,vo()));else if(r.y2(ho())>=0){var i=Dk(n),a=new y(0,-2147483648),s=hr(a,R(1));t=xt(Cr(Ln(i),i1(Pk(sb(n,s)),r)))}else t=xt(Ec(k_(n,r,ho()),new y(1,-1073741824),new y(-1,1073741823)));return t}function D2(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw U.v(t);return Jr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw U.v(u);return Jr().ij_1}else if(K(n,i)===80)o=B2(n,i+1|0,e);else{if(e)throw U.v("");return Jr().ij_1}var c=o;return s&&!P(new ge(c),new ge(Jr().ij_1))?Y_(c):c}function P2(n,r){var e=Jr(),t=Kn(n,1),i=hr(t,R(r));return e.jj(i)}function M2(n){var r;return er(new y(387905,-1073741824),n)<=0&&er(n,new y(-387905,1073741823))<=0?r=zl(n):r=xt(e0(n)),r}function Wc(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;er(new y(1,-1073741824),r)<0&&er(r,new y(-1,1073741823))<0?i=!0:i=er(Ie(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Ec(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function R2(n){var r;return er(new y(1108857478,-1074),n)<=0&&er(n,new y(-1108857478,1073))<=0?r=zl(_o(n)):r=xt(Ec(n,new y(1,-1073741824),new y(-1,1073741823))),r}function e0(n){return Ir(n,R(1e6))}function _o(n){return Cr(n,R(1e6))}function zl(n){return Jr().jj(Kn(n,1))}function B2(n,r,e){var t=r;if(t===n.length){if(e)throw U.v("");return Jr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw U.v("");return Jr().ij_1}s=!0;continue r}var f=t,v,h=t0().nj_1,d=t,_;n:{var m=1,w=d;if($2(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var E=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=ne(I,48);if(er(E,Jv(h))>0||ir(E,Jv(h))&&er(R(A),J2(h))>0){var O=w;t:for(;;){var L;if(O<n.length){var J=K(n,O);L=48<=J?J<=57:!1}else L=!1;if(!L)break t;O=O+1|0}w=O;var T=w,M=m;if(t=T,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Jr().ij_1}v=M,_=F2(h);break n}var F=E,B=hr(Kn(F,3),Kn(F,1));E=hr(B,R(A)),w=w+1|0}var D=w,H=m;if(t=D,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Jr().ij_1}v=H,_=E}var V=_;if(K(n,t)===46){t=t+1|0;var $=t,tr=$,W=tr,G=W+6|0,ar=n.length,ur=Math.min(G,ar),X=0;n:for(;W<ur;){var Tr=K(n,W);if(!(48<=Tr&&Tr<=57))break n;var wr=X;X=((wr<<3)+(wr<<1)|0)+ne(Tr,48)|0,W=W+1|0}var dr=6-(W-tr|0)|0,Er=0;if(Er<dr)do{Er=Er+1|0;var br=X;X=(br<<3)+(br<<1)|0}while(Er<dr);$=W;var kr=X,Pr=$,_r=Pr,Hr=_r+9|0,an=n.length,Gr=Math.min(Hr,an),gr=0;n:for(;_r<Gr;){var Kr=K(n,_r);if(!(48<=Kr&&Kr<=57))break n;var Xr=gr;gr=((Xr<<3)+(Xr<<1)|0)+ne(Kr,48)|0,_r=_r+1|0}var un=9-(_r-Pr|0)|0,Fr=0;if(Fr<un)do{Fr=Fr+1|0;var Qr=gr;gr=(Qr<<3)+(Qr<<1)|0}while(Fr<un);$=_r;var _n=gr,hn=$;n:for(;;){var gn;if(hn<n.length){var Qn=K(n,hn);gn=48<=Qn?Qn<=57:!1}else gn=!1;if(!gn)break n;hn=hn+1|0}$=hn;var Rn=$;if(Rn===t||Rn===n.length||K(n,Rn)!==83){if(e)throw U.v("");return Jr().ij_1}t=Rn;var Bn=R(kr),he=1e9,Te=Cr(Bn,R(he)),de=hr(Te,R(_n));a=Cr(Ln(v),H2(de,Rc()))}var st=G2(n,t),ot;if(st==null){var qe="Unknown duration unit short name: "+yr(K(n,t));if(e)throw U.v(qe);return Jr().ij_1}else ot=st;var Fn=ot;if(o!=null&&o.y2(Fn)<=0){var Sn="Unexpected order of duration components";if(e)throw U.v(Sn);return Jr().ij_1}if(o=Fn,Fn.equals(Bc())){if(s){if(e)throw U.v("");return Jr().ij_1}i=Cr(Ln(v),i1(V,Fn))}else{if(!s){if(e)throw U.v("");return Jr().ij_1}var cn=Wc(i,Cr(Ln(v),i1(V,Fn)));if(ir(cn,new y(-16162,2147483647))){if(e)throw U.v("");return Jr().ij_1}i=cn}t=t+1|0}return I2($v(i,ho()),$v(a,vo()))}var t1;function t0(){return t1===l&&new Kd,t1}function F2(n){return n.pj_1}function $2(n){return n.qj_1}function Jv(n){return n.rj_1}function J2(n){return n.sj_1}function H2(n,r){var e=K2(r),t=Gn(n)*e;return Mk(t)}function G2(n,r){var e=K(n,r);return e===68?Bc():e===72?S_():e===77?x_():e===83?Rc():null}function K2(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw Sr.o3(b(e))}return r}function i1(n,r){return W2(n,Y2(r))}function W2(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=au(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=au(n,new y(-1,1073741823));else{var t=(128-vv(n)|0)-vv(r)|0;e=t<63?Cr(n,r):t>63?new y(-1,1073741823):au(Cr(n,r),new y(-1,1073741823))}return e}function Y2(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw Sr.o3(b(e))}return r}function Ys(){return Pn(),i0}var i0;function Z2(){return Pn(),a0}var a0;function V2(){return Pn(),s0}var s0;function X2(){return Pn(),o0}var o0,a1;function mt(){return a1===l&&new Wd,a1}function Q2(n){Pn();var r=rn.f(),e=l0.ck(n),t=e.dk_1;if(Rk(t)<1e3){var i=rn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Ra(r,r,e.ek_1),r.da(45),Ra(r,r,e.fk_1),r.da(84),Ra(r,r,e.gk_1),r.da(58),Ra(r,r,e.hk_1),r.da(58),Ra(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%Ys()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/Ys()[a]|0;r.ca(rt((s+Ys()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function rS(n){Pn();var r=n,e=0;if(C(r)===0)return new gc("An empty string is not a valid Instant",n);var t=Q(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=Q(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=or(o,10)+ne(Q(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return sn(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&yn(Q(r,s),50)>=0)return sn(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return sn(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return sn(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return sn(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return sn(n,"The input string is too short");var d=e,_=Di(n,"'-'",d,eS);if(_!=null)return _;var m=e+3|0,w=Di(n,"'-'",m,tS);if(w!=null)return w;var x=e+6|0,k=Di(n,"'T' or 't'",x,iS);if(k!=null)return k;var S=e+9|0,E=Di(n,"':'",S,aS);if(E!=null)return E;var I=e+12|0,A=Di(n,"':'",I,sS);if(A!=null)return A;for(var O=Z2(),L=0,J=O.length;L<J;){var T=O[L];L=L+1|0;var M=e+T|0,F=Di(n,"an ASCII digit",M,oS);if(F!=null)return F}var B=vt(r,e+1|0),D=vt(r,e+4|0),H=vt(r,e+7|0),V=vt(r,e+10|0),$=vt(r,e+13|0),tr;if(Q(r,e+15|0)===46){var W=e+16|0;e=W;var G=0;r:for(;;){var ar;if(e<C(r)){var ur=Q(r,e);ar=48<=ur?ur<=57:!1}else ar=!1;if(!ar)break r;G=or(G,10)+ne(Q(r,e),48)|0,e=e+1|0}var X=e-W|0,Tr;if(1<=X&&X<=9)Tr=or(G,Ys()[9-X|0]);else return sn(n,"1..9 digits are supported for the fraction of the second, got "+X+" digits");tr=Tr}else e=e+15|0,tr=0;var wr=tr;if(e>=C(r))return sn(n,"The UTC offset at the end of the string is missing");var dr=Q(r,e),Er;if(dr===122||dr===90){var br;if(C(r)===(e+1|0))br=0;else return sn(n,"Extra text after the instant at position "+(e+1|0));Er=br}else if(dr===45||dr===43){var kr=C(r)-e|0;if(kr>9){var Pr=e,_r=C(r),Hr=b(qn(r,Pr,_r));return sn(n,'The UTC offset string "'+Yc(Hr,16)+'" is too long')}if(kr%3|0){var an=e,Gr=C(r),gr=b(qn(r,an,Gr));return sn(n,'Invalid UTC offset string "'+gr+'"')}var Kr=V2(),Xr=0,un=Kr.length;r:for(;Xr<un;){var Fr=Kr[Xr];if(Xr=Xr+1|0,(e+Fr|0)>=C(r))break r;if(Q(r,e+Fr|0)!==58)return sn(n,"Expected ':' at index "+(e+Fr|0)+", got '"+yr(Q(r,e+Fr|0))+"'")}var Qr=X2(),_n=0,hn=Qr.length;r:for(;_n<hn;){var gn=Qr[_n];if(_n=_n+1|0,(e+gn|0)>=C(r))break r;var Qn=Q(r,e+gn|0);if(!(48<=Qn&&Qn<=57))return sn(n,"Expected an ASCII digit at index "+(e+gn|0)+", got '"+yr(Q(r,e+gn|0))+"'")}var Rn=vt(r,e+1|0),Bn;kr>3?Bn=vt(r,e+4|0):Bn=0;var he=Bn,Te;kr>6?Te=vt(r,e+7|0):Te=0;var de=Te;if(he>59)return sn(n,"Expected offset-minute-of-hour in 0..59, got "+he);if(de>59)return sn(n,"Expected offset-second-of-minute in 0..59, got "+de);if(Rn>17&&!(Rn===18&&he===0&&de===0)){var st=e,ot=C(r),qe=b(qn(r,st,ot));return sn(n,"Expected an offset in -18:00..+18:00, got "+qe)}Er=or((or(Rn,3600)+or(he,60)|0)+de|0,dr===45?-1:1)}else return sn(n,"Expected the UTC offset at position "+e+", got '"+yr(dr)+"'");var Fn=Er;if(!(1<=B&&B<=12))return sn(n,"Expected a month number in 1..12, got "+B);if(!(1<=D&&D<=nS(B,Hv(h))))return sn(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+D);if(H>23)return sn(n,"Expected hour in 0..23, got "+H);if(V>59)return sn(n,"Expected minute-of-hour in 0..59, got "+V);if($>59)return sn(n,"Expected second-of-minute in 0..59, got "+$);var Sn=new mc(h,B,D,H,V,$,wr),cn=R(Sn.dk_1),In=Cr(Ln(365),cn);if(er(cn,new y(0,0))>=0){var Ta=In,Tt=hr(cn,R(3)),lt=Ir(Tt,R(4)),xi=hr(cn,R(99)),Si=Ir(xi,R(100)),ut=Br(lt,Si),ct=hr(cn,R(399)),zi=Ir(ct,R(400));In=hr(Ta,hr(ut,zi))}else{var Ei=In,Ii=Ir(cn,R(-4)),Ci=Ir(cn,R(-100)),Ai=Br(Ii,Ci),qa=Ir(cn,R(-400));In=Br(Ei,hr(Ai,qa))}var Ti=In,qt=(or(367,Sn.ek_1)-362|0)/12|0;In=hr(Ti,R(qt));var qi=In,Oa=Sn.fk_1-1|0;if(In=hr(qi,R(Oa)),Sn.ek_1>2){var Oi=In;if(In=Br(Oi,He()),!Hv(Sn.dk_1)){var ft=In;In=Br(ft,He())}}var Ui=In,Ua=Br(Ui,R(719528)),ja=(or(Sn.gk_1,3600)+or(Sn.hk_1,60)|0)+Sn.ik_1|0,ji=Cr(Ua,R(86400)),Ot=hr(ji,R(ja)),Ut=Br(Ot,R(Fn)),Na=Sn.jk_1;return new Yd(Ut,Na)}var l0;function Yc(n,r){Pn();var e;return C(n)<=r?e=b(n):e=b(qn(n,0,r))+"...",e}function nS(n,r){switch(Pn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function Hv(n){return Pn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Ra(n,r,e){e<10&&n.da(48),r.ae(e)}function sn(n,r){return new gc(r+' when parsing an Instant from "'+Yc(n,64)+'"',n)}function Di(n,r,e,t){var i=Q(n,e),a;return t(new zn(i))?a=null:a=sn(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function eS(n){return Pn(),P(n,new zn(45))}function tS(n){return Pn(),P(n,new zn(45))}function iS(n){return Pn(),P(n,new zn(84))||P(n,new zn(116))}function aS(n){return Pn(),P(n,new zn(58))}function sS(n){return Pn(),P(n,new zn(58))}function oS(n){Pn();var r=n.x1_1;return 48<=r?r<=57:!1}function vt(n,r){return or(ne(Q(n,r),48),10)+ne(Q(n,r+1|0),48)|0}var Gv;function Pn(){Gv||(Gv=!0,i0=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),a0=new Int32Array([1,2,4,5,7,8,10,11,13,14]),s0=new Int32Array([3,6]),o0=new Int32Array([1,2,4,5,7,8]))}function _u(){return c0(),u0}var u0;function lS(n,r){return c0(),new Qd(n.uk_1,r).zk()}var Kv;function c0(){if(!Kv){Kv=!0;var n=us();u0=n}}var Wv;function uS(){if(Wv)return sr;Wv=!0,f0=new rp("PUBLICATION",1)}var f0,Zs;function Vs(){return uS(),f0}function cS(n){var r=n;return!(r instanceof Et)}function v0(n){var r;return n instanceof Et?r=n.el_1:r=null,r}function fS(n){var r;return n instanceof Et?r=n.toString():r="Success("+oe(n)+")",r}function vS(n){return n==null?0:zr(n)}function hS(n,r){if(!(r instanceof Kt))return!1;var e=r.fl_1;return!!P(n,e)}function dS(n){var r=n;if(r instanceof Et)throw n.el_1}function h0(n){return new Et(n)}function j(n,r){return new fl(n,r)}var s1;function Cs(){return s1===l&&new ep,s1}function pS(n,r){return n.length<=r?n:ee(n,0,r)+"..."}function $n(n,r,e){throw U.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var o1;function El(){return o1===l&&new tp,o1}function d0(n,r){var e=n&255,t=r&255;return Ae(e,t)}function _S(n,r){return d0(n.pl_1,r instanceof je?r.pl_1:g())}function l1(n){return(n&255).toString()}function gS(n,r){return!(!(r instanceof je)||n!==r.pl_1)}function Yv(n){return new Int8Array(n)}function mS(n,r){var e=n[r];return e}function yS(n,r,e){var t=n;t[r]=e}function ni(n){return n.length}function wS(n){return new ip(n)}function p0(n,r){var e=n,t=r;return Iw(e,t)}function bS(n,r){return r instanceof je?p0(n.ul_1,r instanceof je?r.pl_1:g()):!1}function kS(n){return n.length===0}function xS(n){return"UByteArray(storage="+b(n)+")"}function SS(n){return zr(n)}function zS(n,r){if(!(r instanceof Yt))return!1;var e=r.ul_1;return!!P(n,e)}var u1;function Il(){return u1===l&&new ap,u1}function _0(n,r){return Yi(n,r)}function ES(n,r){return _0(n.am_1,r instanceof Yn?r.am_1:g())}function c1(n){return(n>>>0).toString()}function IS(n,r){return!(!(r instanceof Yn)||n!==r.am_1)}function Zv(n){return new Int32Array(n)}function CS(n,r){var e=n[r];return e}function AS(n,r,e){var t=n;t[r]=e}function ei(n){return n.length}function TS(n){return new sp(n)}function g0(n,r){var e=n,t=r;return Cw(e,t)}function qS(n,r){return r instanceof Yn?g0(n.fm_1,r instanceof Yn?r.am_1:g()):!1}function OS(n){return n.length===0}function US(n){return"UIntArray(storage="+b(n)+")"}function jS(n){return zr(n)}function NS(n,r){if(!(r instanceof Zt))return!1;var e=r.fm_1;return!!P(n,e)}var f1;function As(){return f1===l&&new op,f1}function m0(n,r){return gt(n,r)}function LS(n,r){return m0(n.lm_1,r instanceof Zn?r.lm_1:g())}function v1(n){var r=n;return ck(r,10)}function DS(n){return n.hashCode()}function PS(n,r){if(!(r instanceof Zn))return!1;var e=r.lm_1;return!!ir(n,e)}function Vv(n){return oi(n)}function MS(n,r){var e=n[r];return e}function RS(n,r,e){var t=n;t[r]=e}function ti(n){return n.length}function BS(n){return new lp(n)}function y0(n,r){var e=n,t=r;return Aw(e,t)}function FS(n,r){return r instanceof Zn?y0(n.qm_1,r instanceof Zn?r.lm_1:g()):!1}function $S(n){return n.length===0}function JS(n){return"ULongArray(storage="+b(n)+")"}function HS(n){return zr(n)}function GS(n,r){if(!(r instanceof Vt))return!1;var e=r.qm_1;return!!P(n,e)}var h1;function Cl(){return h1===l&&new up,h1}function w0(n,r){var e=n&65535,t=r&65535;return Ae(e,t)}function KS(n,r){return w0(n.wm_1,r instanceof Ne?r.wm_1:g())}function d1(n){return(n&65535).toString()}function WS(n,r){return!(!(r instanceof Ne)||n!==r.wm_1)}function Xv(n){return new Int16Array(n)}function YS(n,r){var e=n[r];return e}function ZS(n,r,e){var t=n;t[r]=e}function ii(n){return n.length}function VS(n){return new cp(n)}function b0(n,r){var e=n,t=r;return Tw(e,t)}function XS(n,r){return r instanceof Ne?b0(n.bn_1,r instanceof Ne?r.wm_1:g()):!1}function QS(n){return n.length===0}function rz(n){return"UShortArray(storage="+b(n)+")"}function nz(n){return zr(n)}function ez(n,r){if(!(r instanceof Xt))return!1;var e=r.bn_1;return!!P(n,e)}function k0(n){return oz(n,10)}function tz(n){var r=lz(n),e,t=r;return(t==null?null:new Yn(t))==null?ya(n):e=r,e}function iz(n){var r=k0(n),e,t=r;return(t==null?null:new Zn(t))==null?ya(n):e=r,e}function az(n){var r=uz(n),e,t=r;return(t==null?null:new je(t))==null?ya(n):e=r,e}function sz(n){var r=cz(n),e,t=r;return(t==null?null:new Ne(t))==null?ya(n):e=r,e}function oz(n,r){_a(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(yn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=R(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=_l(K(n,v),r);if(h<0)return null;var d=c,_=o;if(gt(d,_)>0)if(P(new Zn(o),new Zn(s))){o=uk(t,u);var m=c,w=o;if(gt(m,w)>0)return null}else return null;var x=c;c=Cr(x,u);var k=c,S=c,E=h,I=E,A=as(R(I),new y(-1,0)),O=A;c=hr(S,O);var L=c;if(gt(L,k)<0)return null}while(f<e);return c}function lz(n){return Zc(n,10)}function uz(n){return fz(n,10)}function cz(n){return vz(n,10)}function Zc(n,r){_a(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(yn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=_l(K(n,v),r);if(h<0)return null;var d=c,_=o;if(Yi(d,_)>0)if(P(new Yn(o),new Yn(s))){o=lk(t,u);var m=c,w=o;if(Yi(m,w)>0)return null}else return null;var x=c;c=or(x,u);var k=c,S=c,E=h;c=S+E|0;var I=c;if(Yi(I,k)<0)return null}while(f<e);return c}function fz(n,r){var e=Zc(n,r),t,i=e;if((i==null?null:new Yn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(Yi(a,o)>0)return null;var u=a;return jn(u)}function vz(n,r){var e=Zc(n,r),t,i=e;if((i==null?null:new Yn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(Yi(a,o)>0)return null;var u=a;return Uc(u)}Mr(uc,"CharSequence");Mr(xe,"Comparable");p(Oh,"Number");p(Uh);p(jh);p(Nh);Vr(Lh);p(zn,"Char",l,l,[xe]);Mr(Z,"Collection");Mr(Ce,"Set",l,l,[Z]);Mr(En,"List",l,l,[Z]);Mr(Ke,"Entry");Mr(wn,"Map");Mr(ra,"MutableMap",l,l,[wn]);Vr(cw);p(te,"Enum",l,l,[xe]);Vr(Dh);p(y,"Long",l,l,[xe]);Mr(kn,"FunctionAdapter");p(Ph);N(fw,"ByteCompanionObject");N(vw,"ShortCompanionObject");N(hw,"IntCompanionObject");N(dw,"FloatCompanionObject");N(pw,"DoubleCompanionObject");N(_w,"StringCompanionObject");N(gw,"BooleanCompanionObject");N(Mh,"Digit");Mr(pn,"Comparator");N(al,"Unit");p(ua,"AbstractCollection",l,l,[Z]);p(ds,"AbstractMutableCollection",l,l,[Z]);p(cc,"IteratorImpl");p(Rh,"ListIteratorImpl");p(Bh,"AbstractMutableList",l,l,[En,Z]);p(Fh,"AbstractMap",l,l,[wn]);p($h,"AbstractMutableMap",l,l,[ra]);p(ps,"AbstractMutableSet",l,l,[Ce,Z]);Vr(Jh);Mr(_s,"RandomAccess");p(q,"ArrayList",q.m,l,[En,Z,_s]);p(ns,"HashMap",ns.x6,l,[ra]);p(Hh,"HashMapKeys",l,l,[Ce,Z]);p(Gh,"HashMapValues",l,l,[Z]);p(Kh,"HashMapEntrySetBase",l,l,[Ce,Z]);p(Wh,"HashMapEntrySet");p(Yh);p(Zh,"HashMapKeysDefault");p(Vh);p(Xh,"HashMapValuesDefault");p(ai,"HashSet",ai.n8,l,[Ce,Z]);Vr(Qh);p(sl,"Itr");p(rd,"KeysItr");p(nd,"ValuesItr");p(ed,"EntriesItr");p(td,"EntryRef",l,l,[Ke]);Mr(id,"InternalMap");Dr(We).h8=mw;p(We,"InternalHashMap",We.i7,l,[id]);p(vr,"LinkedHashMap",vr.q4,l,[ra]);p(An,"LinkedHashSet",An.e1,l,[Ce,Z]);Mr(Xe,"Continuation");N(ad,"CompletedContinuation",l,l,[Xe]);p(fc,"InterceptedCoroutine",l,l,[Xe]);p(vc,"GeneratorCoroutineImpl",l,l,[Xe]);p(sd,l,l,l,[Xe]);p(es,"Exception",es.nb);p(ae,"RuntimeException",ae.hb);p(se,"UnsupportedOperationException",se.p6);p(U,"IllegalArgumentException",U.kb);p(qr,"NoSuchElementException",qr.j1);p(Jn,"IndexOutOfBoundsException",Jn.sb);p(Sr,"IllegalStateException",Sr.ub);p(no,"ConcurrentModificationException",no.m9);p(Su,"ArithmeticException",Su.yb);p(eo,"Error",eo.ec);p(Ha,"AssertionError",Ha.cc);p(zu,"NumberFormatException",zu.mc);p(Eu,"NoWhenBranchMatchedException",Eu.s3);p(Iu,"NullPointerException",Iu.w3);p(Cu,"ClassCastException",Cu.a4);Mr(Be,"KClass");p(ca,"KClassImpl",l,l,[Be]);p(nn,"PrimitiveKClassImpl");N(hc,"NothingKClassImpl");p(Au,"SimpleKClassImpl");Mr(vi,"KProperty1");N(od,"PrimitiveClasses");p(Vf,"CharacterCodingException",Vf.wd);p(rn,"StringBuilder",rn.f,l,[uc]);Vr(ld);p(yt,"Regex");p(ol,"MatchGroup");p(ud,l,l,l,[Z]);p(dc,"AbstractList",l,l,[En]);p(cd);p(fd);p(yw,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(dt,"DurationUnit");p(pc,"IteratorImpl");p(vd,"ListIteratorImpl");Vr(hd);p(dd);p(pd);Vr(ww);p(_d,"AbstractSet",l,l,[Ce]);p(gd);p(md);Vr(yd);N(wd,"EmptyList",l,l,[En,_s]);N(bd,"EmptyIterator");p(ll,"IndexedValue");p(kd,"IndexingIterable");p(xd,"IndexingIterator");Mr(Sd,"MapWithDefault",l,l,[wn]);N(zd,"EmptyMap",l,l,[wn]);p(Ed,"IntIterator");p(Id);p(Cd,"TransformingSequence");Mr(ul,"DropTakeSequence");p(Ad);p(cl,"TakeSequence",l,l,[ul]);N(Td,"EmptySequence",l,l,[ul]);p(qd);p(_c,"GeneratorSequence");N(Od,"EmptySet",l,l,[Ce]);N(Ud,"NaturalOrderComparator",l,l,[pn]);p(jd,"sam$kotlin_Comparator$0",l,l,[pn,kn]);N(Nd,"Key");Mr(bw,"ContinuationInterceptor");N(Ld,"EmptyCoroutineContext");p(Dd,"CoroutineSingletons");p(Pd,"EnumEntriesList",l,l,[En,_s]);Vr(Md);p(gs,"IntProgression");Mr(Hi,"ClosedRange");p(zt,"IntRange",l,l,[Hi]);p(Rd,"IntProgressionIterator");Vr(Bd);p(Fd);p($d,"DelimitedRangesSequence");N(kw,"State");p(Jd,"LinesIterator");p(Hd);Vr(Gd);p(ge,"Duration",l,l,[xe]);Vr(Kd);p(Tu,"LongParser");N(xw,"FractionalParser");Vr(Wd);p(Ye,"Instant",l,l,[xe]);p(Yd,"Success");p(gc,"Failure");Vr(Zd);p(mc,"UnboundLocalDateTime");p(yc,"InstantFormatException");p(Vd,"DeepRecursiveScope",l,l,l,[1,2]);p(Xd,"DeepRecursiveFunction");p(Qd,"DeepRecursiveScopeImpl",l,l,[Xe],[1,2]);p(rp,"LazyThreadSafetyMode");p(wc,"UnsafeLazyImpl");N(np,"UNINITIALIZED_VALUE");Vr(Sw);p(Et,"Failure");p(Kt,"Result");p(Xf,"NotImplementedError",Xf.bb);p(fl,"Pair");Vr(ep);p(wt,"Uuid",l,l,[xe]);Vr(tp);p(je,"UByte",l,l,[xe]);p(ip,"Iterator");p(Yt,"UByteArray",l,l,[Z]);Vr(ap);p(Yn,"UInt",l,l,[xe]);p(sp,"Iterator");p(Zt,"UIntArray",l,l,[Z]);Vr(op);p(Zn,"ULong",l,l,[xe]);p(lp,"Iterator");p(Vt,"ULongArray",l,l,[Z]);Vr(up);p(Ne,"UShort",l,l,[xe]);p(cp,"Iterator");p(Xt,"UShortArray",l,l,[Z]);sr=new al;Gs=null;ss=new Qh;u_=new ad;On=new hd;os=new yd;ls=new bd;ml=new Td;U_=new Ud;Qu=new Nd;Jc=new Bd;l0=new Zd;Zs=new np;var Yr=Math.imul;class Al{}class Vi{}class cr{}class Dn extends U{static nn(){var r=this.kb();return gu(r),r}static on(r){var e=this.v(r);return gu(e),e}static pn(r,e){var t=this.lb(r,e);return gu(t),t}}class Tl extends Dn{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return ln(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Tl.xn(r,this,this.un_1,this.vn_1)}}class ce{}function _i(){return!1}function gi(){return!1}function Ts(){return mr()}class x0{}class S0{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class z0{constructor(r){this.po_1=r}x(){return new S0(this.po_1)}}class E0{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=mr(),this.to_1=q.m(),this.uo_1=ai.n8(),this.vo_1=q.m(),this.wo_1=q.m(),this.xo_1=q.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw U.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?mr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=sr):s=a.yo.call(this,r,e,t,i),s}}class qs{}class wa{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=Kw(a.to_1);var s=this,o=a.to_1;s.fp_1=fi(o),this.gp_1=S1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=fi(c),this.ip_1=Ww(a.xo_1);for(var f=this,v=Mw(this.fp_1),h=q.g1(Wr(v,10)),d=v.x();d.y();){var _=d.z(),m=j(_.xg_1,_.wg_1);h.n(m)}f.jp_1=I_(h),this.kp_1=S1(i);var w=this;w.lp_1=f_(Pz(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return Xi(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return Xi(this.hp_1,r)}lo(r){return Xi(this.gp_1,r)}mo(r){return im(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof wa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!jc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return Gg(this)}toString(){return Qg(this)}}class ba{toString(){return on(jr(this).oc())}hashCode(){return ie(this.toString())}}class ql extends ba{constructor(){go=null,super(),go=this}}class I0 extends ba{constructor(){mo=null,super(),mo=this}}class Os extends ba{}class C0 extends Os{constructor(){yo=null,super(),yo=this}}class A0 extends Os{constructor(){wo=null,super(),wo=this}}class T0 extends Os{constructor(){bo=null,super(),bo=this}}class q0 extends Os{constructor(){ko=null,super(),ko=this}}class Mn extends ba{}class O0 extends Mn{constructor(){xo=null,super(),xo=this}}class U0 extends Mn{constructor(){So=null,super(),So=this}}class j0 extends Mn{constructor(){zo=null,super(),zo=this}}class N0 extends Mn{constructor(){Eo=null,super(),Eo=this}}class L0 extends Mn{constructor(){Io=null,super(),Io=this}}class D0 extends Mn{constructor(){Co=null,super(),Co=this}}class P0 extends Mn{constructor(){Ao=null,super(),Ao=this}}class M0 extends Mn{constructor(){To=null,super(),To=this}}class R0 extends Mn{constructor(){qo=null,super(),qo=this}}class ka extends ba{}class B0 extends ka{constructor(){Oo=null,super(),Oo=this}}class Ol{}function F0(n){return n.fn(this)}class Ul{}function $0(){return!1}function J0(n){return-1}function H0(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class mi{np(){throw Dn.on(b(jr(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof zn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class Vc{}function hz(n,r){return this.cq(n)}function dz(n,r){n.en(this,r)}class Us{static tq(){return di(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw Dn.on("Non-serializable "+b(jr(r))+" is not supported by "+b(jr(this))+" encoder")}wq(){throw Dn.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new zn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):oE()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class oa{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class G0{constructor(){m1=this,this.vr_1=lE()}dn(){return this.vr_1}wr(r,e){throw Dn.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw Dn.on("'kotlin.Nothing' does not have instances")}}class K0{constructor(){y1=this,this.xr_1=new xn("kotlin.time.Duration",za())}dn(){return this.xr_1}yr(r,e){r.fr(j2(e))}en(r,e){return this.yr(r,e instanceof ge?e.kj_1:g())}zr(r){return Jr().lj(r.yp())}fn(r){return new ge(this.zr(r))}}class W0{constructor(){w1=this,this.as_1=new xn("kotlin.time.Instant",za())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof Ye?e:g())}fn(r){return mt().xj(r.yp())}}class Y0{constructor(){b1=this,this.cs_1=new xn("kotlin.uuid.Uuid",za())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof wt?e:g())}fn(r){return Cs().gl(r.yp())}}class At{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Ns()}go(){return this.hs_1}io(r){return pt(r,this.co()),r.toString()}jo(r){var e=wl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return pt(r,this.co()),!1}ko(r){return pt(r,this.co()),mr()}lo(r){return pt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof At?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Yr(zr(this.gs_1),31)+ie(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class Z0 extends At{co(){return"kotlin.collections.ArrayList"}}class yi{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Pl()}go(){return this.ls_1}io(r){return pt(r,this.co()),r.toString()}jo(r){var e=wl(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return pt(r,this.co()),!1}ko(r){return pt(r,this.co()),mr()}lo(r){pt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw Sr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof yi)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=ie(this.co());return r=Yr(31,r)+zr(this.js_1)|0,r=Yr(31,r)+zr(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class V0 extends yi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class X0 extends At{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class Xc{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw U.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+vn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=sr):s=a.gt.call(this,r,e,t,i),s}}class Qc extends Xc{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class Q0 extends Qc{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&z(r,Z)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&z(r,Z)?r:g())}}class rg extends Q0{constructor(r){super(r),this.qs_1=new Z0(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?q.m():q.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof q?r:g())}us(r){return r}vs(r){return this.us(r instanceof q?r:g())}ws(r,e){if(r instanceof q)return r.k6(e),r;if(e===r.c1())return q.f1(r);var t=q.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&z(r,En)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof q?r:g(),e,t)}}class ng extends Xc{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=ab(zc(0,Yr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&z(e,ra)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw U.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Mn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,me(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&z(t,ra)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class eg extends ng{constructor(r,e){super(r,e),this.lt_1=new V0(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&z(r,wn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&z(r,wn)?r:g())}rs(r){return r===-1?vr.q4():Qv(r)}qt(r){return Yr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=Qv(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&z(r,wn)?r:g(),e)}}class fe extends Qc{constructor(r){super(r),this.yt_1=new X0(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof Un?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof Un?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw Sr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw Sr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof Un?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class Un{static ku(){return di(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=sr):t=e.lu.call(this,r),t}}let tg=class{constructor(){k1=this,this.nu_1=oi(0)}};class ig{constructor(r,e){rh(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Kn(new y(-1,-1),t),i.qu_1=a,this.ru_1=rh().nu_1}else this.qu_1=new y(0,0),this.ru_1=eE(this,t)}su(r){r<64?this.qu_1=li(this.qu_1,Kn(new y(1,0),r)):tE(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=Wp(Cc(this.qu_1));if(this.qu_1=li(this.qu_1,Kn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?iE(this):-1}}class xa{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=io(this.jv_1),this.pv_1=Nr();var f=this,v=Vs();f.qv_1=Ks(v,dE(this));var h=this,d=Vs();h.rv_1=Ks(d,_E(this));var _=this,m=Vs();_.sv_1=Ks(m,mE(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Dl()}ho(){var r=this.nv_1;return r??mr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=vi;return da("typeParameterDescriptors",1,e,gE(),null),r.l2()}lo(r){return Xi(Zg(this),r).dn()}mo(r){return im(this.ov_1,r)}ko(r){var e=Xi(this.mv_1,r);return e??mr()}io(r){return Xi(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof xa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!jc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return Vg(this)}toString(){return Qg(this)}}class jl extends xa{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Yr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof jl)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&jc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class ag{}function pz(){return rm()}class rf{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw Sr.o3(b(r))}en(r,e){var t="unsupported";throw Sr.o3(b(t))}fn(r){var e="unsupported";throw Sr.o3(b(e))}}class sg extends Us{constructor(){return new.target.yv()}static yv(){Uo=null;var r=this.tq();return Uo=r,r.xv_1=Ml(),r}pq(){return this.xv_1}vq(r){return sr}wq(){return sr}xq(r){return sr}yq(r){return sr}zq(r){return sr}ar(r){return sr}br(r){return sr}cr(r){return sr}dr(r){return sr}er(r){return sr}fr(r){return sr}}class js{constructor(){x1=this,this.zv_1=cf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Ba()}jo(r){Ba()}mo(r){Ba()}lo(r){Ba()}ko(r){Ba()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return ie(this.aw_1)+Yr(31,this.zv_1.hashCode())|0}}class og{}class lg{constructor(r,e){this.bw_1=e,this.cw_1=mr();var t=this,i=Vs();t.dw_1=Ks(i,cE(r,this))}dn(){var r=this.dw_1,e=vi;return da("descriptor",1,e,fE(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw Dn.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class ug extends fe{constructor(){jo=null,super(Bg(Ic())),jo=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&Ya(r)?r:g())}iw(r,e){return e===r.length?jt.lw(r):jt.mw(Ru(r,e),r.length)}xs(r,e){return this.iw(r!=null&&Ya(r)?r:g(),e)}gu(r){return jt.nw(r)}fu(){return jt.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof jt?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof jt?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&Ya(e)?e:g(),t)}}class cg extends fe{constructor(){No=null,super(Fg()),No=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&Xa(r)?r:g())}vw(r,e){return e===r.length?Nt.yw(r):Nt.zw(Bu(r,e),r.length)}xs(r,e){return this.vw(r!=null&&Xa(r)?r:g(),e)}gu(r){return Nt.ax(r)}fu(){return Nt.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Nt?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Nt?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&Xa(e)?e:g(),t)}}class fg extends fe{constructor(){Lo=null,super($g()),Lo=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&Va(r)?r:g())}ix(r,e){return e===r.length?Lt.lx(r):Lt.mx(Fu(r,e),r.length)}xs(r,e){return this.ix(r!=null&&Va(r)?r:g(),e)}gu(r){return Lt.nx(r)}fu(){return Lt.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Lt?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Lt?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&Va(e)?e:g(),t)}}class vg extends fe{constructor(){Do=null,super(of(vl())),Do=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&Gi(r)?r:g())}vx(r,e){return e===r.length?Dt.yx(r):Dt.zx(ta(r,e),r.length)}xs(r,e){return this.vx(r!=null&&Gi(r)?r:g(),e)}gu(r){return Dt.ay(r)}fu(){return Dt.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof Dt?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof Dt?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&Gi(e)?e:g(),t)}}class hg extends fe{constructor(){Po=null,super(Nl(As())),Po=this}hy(r){return ti(r)}nt(r){return this.hy(r instanceof Vt?r.qm_1:g())}iy(r,e){if(e===ti(r))return Pt.ly(r);var t=ta(r,e);return Pt.my(t,ti(r))}xs(r,e){return this.iy(r instanceof Vt?r.qm_1:g(),e)}gu(r){return Pt.ny(r)}fu(){return Pt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Pt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Pt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=MS(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof Vt?e.qm_1:g(),t)}}class dg extends fe{constructor(){Mo=null,super(sf()),Mo=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&Za(r)?r:g())}vy(r,e){return e===r.length?Mt.yy(r):Mt.zy(ci(r,e),r.length)}xs(r,e){return this.vy(r!=null&&Za(r)?r:g(),e)}gu(r){return Mt.az(r)}fu(){return Mt.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Mt?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Mt?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&Za(e)?e:g(),t)}}class pg extends fe{constructor(){Ro=null,super(ef(Il())),Ro=this}hz(r){return ei(r)}nt(r){return this.hz(r instanceof Zt?r.fm_1:g())}iz(r,e){if(e===ei(r))return Rt.lz(r);var t=ci(r,e);return Rt.mz(t,ei(r))}xs(r,e){return this.iz(r instanceof Zt?r.fm_1:g(),e)}gu(r){return Rt.nz(r)}fu(){return Rt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Rt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Rt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=CS(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof Zt?e.fm_1:g(),t)}}class _g extends fe{constructor(){Bo=null,super(uf()),Bo=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&Wa(r)?r:g())}vz(r,e){return e===r.length?Bt.yz(r):Bt.zz(ia(r,e),r.length)}xs(r,e){return this.vz(r!=null&&Wa(r)?r:g(),e)}gu(r){return Bt.a10(r)}fu(){return Bt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Bt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Bt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&Wa(e)?e:g(),t)}}class gg extends fe{constructor(){Fo=null,super(af(Cl())),Fo=this}h10(r){return ii(r)}nt(r){return this.h10(r instanceof Xt?r.bn_1:g())}i10(r,e){if(e===ii(r))return Ft.l10(r);var t=ia(r,e);return Ft.m10(t,ii(r))}xs(r,e){return this.i10(r instanceof Xt?r.bn_1:g(),e)}gu(r){return Ft.n10(r)}fu(){return Ft.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Ft?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Ft?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=YS(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof Xt?e.bn_1:g(),t)}}class mg extends fe{constructor(){$o=null,super(lf()),$o=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&Ka(r)?r:g())}v10(r,e){return e===r.length?$t.y10(r):$t.z10(aa(r,e),r.length)}xs(r,e){return this.v10(r!=null&&Ka(r)?r:g(),e)}gu(r){return $t.a11(r)}fu(){return $t.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof $t?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof $t?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&Ka(e)?e:g(),t)}}class yg extends fe{constructor(){Jo=null,super(tf(El())),Jo=this}h11(r){return ni(r)}nt(r){return this.h11(r instanceof Yt?r.ul_1:g())}i11(r,e){if(e===ni(r))return Jt.l11(r);var t=aa(r,e);return Jt.m11(t,ni(r))}xs(r,e){return this.i11(r instanceof Yt?r.ul_1:g(),e)}gu(r){return Jt.n11(r)}fu(){return Jt.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof Jt?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof Jt?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=mS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof Yt?e.ul_1:g(),t)}}class wg extends fe{constructor(){Ho=null,super(Jg()),Ho=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&Ga(r)?r:g())}v11(r,e){return e===r.length?Ht.y11(r):Ht.z11($u(r,e),r.length)}xs(r,e){return this.v11(r!=null&&Ga(r)?r:g(),e)}gu(r){return Ht.a12(r)}fu(){return Ht.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof Ht?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&Ga(e)?e:g(),t)}}class jt extends Un{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(is(r),0)}static ow(){return this.mw(is(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Ru(this.jw_1,vn(r,Yr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Ru(this.jw_1,this.kw_1)}}class Nt extends Un{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=Bu(this.ww_1,vn(r,Yr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return Bu(this.ww_1,this.xw_1)}}class Lt extends Un{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=Fu(this.jx_1,vn(r,Yr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return Fu(this.jx_1,this.kx_1)}}class Dt extends Un{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(oi(r),0)}static by(){return this.zx(oi(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=ta(this.wx_1,vn(r,Yr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return ta(this.wx_1,this.xx_1)}}class Pt extends Un{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,ti(r))}static ny(r){return this.my(Vv(r),0)}static oy(){return this.my(Vv(10),0)}au(){return this.ky_1}lu(r){if(ti(this.jy_1)<r){var e=this,t=this.jy_1,i=vn(r,Yr(ti(this.jy_1),2));e.jy_1=ta(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,RS(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return ta(r,e)}cu(){return new Vt(this.f12())}}class Mt extends Un{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=ci(this.wy_1,vn(r,Yr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return ci(this.wy_1,this.xy_1)}}class Rt extends Un{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,ei(r))}static nz(r){return this.mz(Zv(r),0)}static oz(){return this.mz(Zv(10),0)}au(){return this.kz_1}lu(r){if(ei(this.jz_1)<r){var e=this,t=this.jz_1,i=vn(r,Yr(ei(this.jz_1),2));e.jz_1=ci(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,AS(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return ci(r,e)}cu(){return new Zt(this.g12())}}class Bt extends Un{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=ia(this.wz_1,vn(r,Yr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return ia(this.wz_1,this.xz_1)}}class Ft extends Un{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,ii(r))}static n10(r){return this.m10(Xv(r),0)}static o10(){return this.m10(Xv(10),0)}au(){return this.k10_1}lu(r){if(ii(this.j10_1)<r){var e=this,t=this.j10_1,i=vn(r,Yr(ii(this.j10_1),2));e.j10_1=ia(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,ZS(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return ia(r,e)}cu(){return new Xt(this.h12())}}class $t extends Un{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=aa(this.w10_1,vn(r,Yr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return aa(this.w10_1,this.x10_1)}}class Jt extends Un{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,ni(r))}static n11(r){return this.m11(Yv(r),0)}static o11(){return this.m11(Yv(10),0)}au(){return this.k11_1}lu(r){if(ni(this.j11_1)<r){var e=this,t=this.j11_1,i=vn(r,Yr(ni(this.j11_1),2));e.j11_1=aa(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,yS(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return aa(r,e)}cu(){return new Yt(this.i12())}}class Ht extends Un{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(io(r),0)}static b12(){return this.z11(io(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=$u(this.w11_1,vn(r,Yr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return $u(this.w11_1,this.x11_1)}}class bg{constructor(){z1=this,this.j12_1=new xn("kotlin.String",za())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class xn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){Fa(this)}jo(r){Fa(this)}mo(r){Fa(this)}lo(r){Fa(this)}ko(r){Fa(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof xn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return ie(this.l12_1)+Yr(31,this.m12_1.hashCode())|0}}class kg{constructor(){E1=this,this.n12_1=new xn("kotlin.Int",Gz())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class xg{constructor(){I1=this,this.p12_1=new xn("kotlin.Long",Kz())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class Sg{constructor(){C1=this,this.r12_1=new xn("kotlin.Byte",$z())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class zg{constructor(){A1=this,this.t12_1=new xn("kotlin.Short",Hz())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class Eg{constructor(){T1=this,this.v12_1=new xn("kotlin.Char",Jz())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof zn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new zn(this.x12(r))}}class Ig{constructor(){q1=this,this.y12_1=new xn("kotlin.Double",Yz())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class Cg{constructor(){O1=this,this.a13_1=new xn("kotlin.Float",Wz())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Ag{constructor(){U1=this,this.c13_1=new xn("kotlin.Boolean",Fz())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class Tg{constructor(){j1=this,this.e13_1=new lg("kotlin.Unit",sr)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,sr)}en(r,e){return this.f13(r,e instanceof al?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),sr}}class Sa{constructor(){var r=this;r.m13_1=q.m(),this.n13_1=!1}pq(){return Ml()}r13(r){throw Dn.on(b(jr(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof zn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return KE(this,a,WE(this,t,i))}o13(){return gp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(zs(this.m13_1));return this.n13_1=!0,r}}class qg extends Sa{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":rr(this.m13_1,".","$.")}}class Og{constructor(){N1=this,this.f14_1=Ls("kotlin.UInt",sf())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Yn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Yn(this.h14(r))}}class Ug{constructor(){L1=this,this.i14_1=Ls("kotlin.ULong",of(vl()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Zn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Zn(this.k14(r))}}class jg{constructor(){D1=this,this.l14_1=Ls("kotlin.UByte",lf())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof je?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new je(this.n14(r))}}class Ng{constructor(){P1=this,this.o14_1=Ls("kotlin.UShort",uf())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Ne?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Ne(this.q14(r))}}class Lg{zn(r,e,t){return e=e===l?mr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class Dg extends Lg{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(jr(e)),a=i!=null&&z(i,Al)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(z(t,wn)?t:g()).o2(e);var a=i,s=a!=null&&z(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||z(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof Pg){var s=z(i,Be)?i:g(),o=a.c15_1;r.d15(s,z(o,cr)?o:g())}else a instanceof Mg?r.b15(i,a.a15_1):ws()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=z(f,Be)?f:g(),x=z(_,Be)?_:g(),k=z(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var E=S.z(),I=E.k2(),A=E.l2(),O=z(I,Be)?I:g();r.f15(O,typeof A=="function"?A:g())}for(var L=this.x14_1.r2().x();L.y();){var J=L.z(),T=J.k2(),M=J.l2(),F=z(T,Be)?T:g();r.g15(F,typeof M=="function"?M:g())}}}class nf{}class Pg extends nf{}class Mg extends nf{}class Rg{}function _z(n,r){return this.b15(n,nI(r))}class gz{}function mz(n,r,e){var t=n.gn(r,e),i;return t==null?Vz(jr(e),n.hn()):i=t,i}function p1(n,r,e){var t=n.in(r,e),i;return t==null?Wg(e,n.hn()):i=t,i}function gu(n){ln(n,n.mn_1)}function fs(n){return NE()}function ef(n){return YE()}function Nl(n){return ZE()}function tf(n){return VE()}function af(n){return XE()}function sf(n){return LE()}function of(n){return DE()}function lf(n){return PE()}function uf(n){return ME()}function Bg(n){return RE()}function yz(){return kE()}function Fg(n){return BE()}function wz(){return xE()}function $g(n){return FE()}function bz(){return SE()}function kz(){return zE()}function xz(){return EE()}function Sz(){return IE()}function zz(){return CE()}function Ez(){return AE()}function Iz(){return TE()}function Cz(){return qE()}function Az(){return OE()}function Jg(n){return $E()}function Tz(){return UE()}function qz(n){return JE()}function Oz(){return Xz()}function Uz(n){return Qz()}function jz(n){return rE()}function Nz(n){return nE()}function _1(n){return new rg(n)}function g1(n,r){return new eg(n,r)}function Lz(n,r){var e=Hg(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function Hg(n){var r;return n instanceof x0?r=n.bo_1:n instanceof og?r=Hg(n.ao_1):r=null,r}function Dz(n){return new z0(n)}function Ll(n,r,e,t){var i;if(t===l?i=Bz:i=t,t=i,tt(n)){var a="Blank serial names are prohibited";throw U.v(b(a))}if(P(r,Dl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw U.v(b(s))}var o=new E0(n);return t(o),new wa(n,r,o.to_1.c1(),Pw(e),o)}function Gg(n){var r=n.lp_1,e=vi;return da("_hashCode",1,e,Mz(),null),r.l2()}function Pz(n){return()=>Xg(n,n.kp_1)}function Mz(){return De(n=>Gg(n),1,0,0)}function Rz(n,r){if(tt(n)){var e="Blank serial names are prohibited";throw U.v(b(e))}return HE(n,r)}function Bz(n){return sr}var go;function wi(){return go===l&&new ql,go}var mo;function Kg(){return mo===l&&new I0,mo}var yo;function Dl(){return yo===l&&new C0,yo}var wo;function Ns(){return wo===l&&new A0,wo}var bo;function Pl(){return bo===l&&new T0,bo}var ko;function cf(){return ko===l&&new q0,ko}var xo;function Fz(){return xo===l&&new O0,xo}var So;function $z(){return So===l&&new U0,So}var zo;function Jz(){return zo===l&&new j0,zo}var Eo;function Hz(){return Eo===l&&new N0,Eo}var Io;function Gz(){return Io===l&&new L0,Io}var Co;function Kz(){return Co===l&&new D0,Co}var Ao;function Wz(){return Ao===l&&new P0,Ao}var To;function Yz(){return To===l&&new M0,To}var qo;function za(){return qo===l&&new R0,qo}var Oo;function Zz(){return Oo===l&&new B0,Oo}function Vz(n,r){var e=n.oc();Wg(e??b(n),r)}function Wg(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw Dn.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var m1;function Xz(){return m1===l&&new G0,m1}var y1;function Qz(){return y1===l&&new K0,y1}var w1;function rE(){return w1===l&&new W0,w1}var b1;function nE(){return b1===l&&new Y0,b1}function pt(n,r){if(n<0)throw Jn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function Qv(n){var r=n;return vr.ha(r)}var k1;function rh(){return k1===l&&new tg,k1}function eE(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=oi(e);return t!==0&&(i[Nw(i)]=Kn(new y(-1,-1),r)),i}function tE(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=li(n.ru_1[e],Kn(new y(1,0),t))}function iE(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Yr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=Wp(Cc(a));a=li(a,Kn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function Ls(n,r){return new jl(n,new rf(r))}function aE(n,r){return n.yn(r)}function sE(n){return hE(n)}var Uo;function oE(){return Uo===l&&sg.yv(),Uo}function Ba(n){throw Sr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var x1;function lE(){return x1===l&&new js,x1}function uE(n){return r=>(r.so_1=n.cw_1,sr)}function cE(n,r){return()=>{var e=cf();return Ll(n,e,[],uE(r))}}function fE(){return De(n=>n.dn(),1,0,1)}function vE(){return ff(),Yg}var Yg;function hE(n){if(ff(),z(n,qs))return n.mp();var r=ai.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function S1(n){ff();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=fi(e);var i=t;return i??vE()}var nh;function ff(){nh||(nh=!0,Yg=[])}function Zg(n){var r=n.qv_1,e=vi;return da("childSerializers",1,e,pE(),null),r.l2()}function Vg(n){var r=n.sv_1,e=vi;return da("_hashCode",1,e,yE(),null),r.l2()}function dE(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??rm()}}function pE(){return De(n=>Zg(n),1,0,2)}function _E(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=q.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return S1(t)}}function gE(){return De(n=>n.tv(),1,0,3)}function mE(n){return()=>Xg(n,n.tv())}function yE(){return De(n=>Vg(n),1,0,4)}function Xg(n,r){var e=ie(n.co());e=Yr(31,e)+Vb(r)|0;for(var t=Dz(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Yr(31,o),c=s.co(),f=c==null?null:zr(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Yr(31,m),x=_.do(),k=x==null?null:zr(x);h=w+(k??0)|0}var S=h;return e=Yr(31,e)+v|0,e=Yr(31,e)+S|0,e}function Qg(n){var r=zc(0,n.go()),e=n.co()+"(";return rr(r,", ",e,")",l,l,wE(n))}function wE(n){return r=>n.io(r)+": "+n.lo(r).co()}function rm(){return bE(),nm}var nm,eh;function bE(){eh||(eh=!0,nm=[])}var jo;function kE(){return jo===l&&new ug,jo}var No;function xE(){return No===l&&new cg,No}var Lo;function SE(){return Lo===l&&new fg,Lo}var Do;function zE(){return Do===l&&new vg,Do}var Po;function EE(){return Po===l&&new hg,Po}var Mo;function IE(){return Mo===l&&new dg,Mo}var Ro;function CE(){return Ro===l&&new pg,Ro}var Bo;function AE(){return Bo===l&&new _g,Bo}var Fo;function TE(){return Fo===l&&new gg,Fo}var $o;function qE(){return $o===l&&new mg,$o}var Jo;function OE(){return Jo===l&&new yg,Jo}var Ho;function UE(){return Ho===l&&new wg,Ho}function jE(){return vf(),em}var em,z1;function NE(){return z1===l&&new bg,z1}function Fa(n){throw Sr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var E1;function LE(){return E1===l&&new kg,E1}var I1;function DE(){return I1===l&&new xg,I1}var C1;function PE(){return C1===l&&new Sg,C1}var A1;function ME(){return A1===l&&new zg,A1}var T1;function RE(){return T1===l&&new Eg,T1}var q1;function BE(){return q1===l&&new Ig,q1}var O1;function FE(){return O1===l&&new Cg,O1}var U1;function $E(){return U1===l&&new Ag,U1}var j1;function JE(){return j1===l&&new Tg,j1}function HE(n,r){return vf(),GE(n),new xn(n,r)}function GE(n){vf();for(var r=jE().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw U.v(i2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+jr(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var th;function vf(){th||(th=!0,em=eI())}function KE(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function WE(n,r,e){return()=>n.aq(r,e)}var N1;function YE(){return N1===l&&new Og,N1}var L1;function ZE(){return L1===l&&new Ug,L1}var D1;function VE(){return D1===l&&new jg,D1}var P1;function XE(){return P1===l&&new Ng,P1}function QE(){return rI(),tm}var tm,ih;function rI(){ih||(ih=!0,tm=new Dg(Nr(),Nr(),Nr(),Nr(),Nr(),!1))}function Ml(){return QE()}function nI(n){return r=>n}function Xi(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Jn.tb("Index "+r+" out of bounds "+zw(n).toString());return n[r]}function im(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Jn.tb("Index "+r+" out of bounds "+Dw(n).toString());return n[r]}function eI(){return gl([j(xr().id(),fs()),j(Ur(zn),Bg(Ic())),j(xr().ld(),yz()),j(xr().gd(),Fg()),j(xr().sd(),wz()),j(xr().fd(),$g()),j(xr().rd(),bz()),j(xr().ed(),of(vl())),j(xr().qd(),kz()),j(Ur(Zn),Nl(As())),j(Ur(Vt),xz()),j(xr().dd(),sf()),j(xr().od(),Sz()),j(Ur(Yn),ef(Il())),j(Ur(Zt),zz()),j(xr().cd(),uf()),j(xr().nd(),Ez()),j(Ur(Ne),af(Cl())),j(Ur(Xt),Iz()),j(xr().bd(),lf()),j(xr().md(),Cz()),j(Ur(je),tf(El())),j(Ur(Yt),Az()),j(xr().ad(),Jg()),j(xr().kd(),Tz()),j(Ur(al),qz()),j(xr().zc(),Oz()),j(Ur(ge),Uz(Jr())),j(Ur(Ye),jz(mt())),j(Ur(wt),Nz(Cs()))])}Mr(Al,"SerializationStrategy");Mr(Vi,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[Al,Vi]);p(Dn,"SerializationException",Dn.nn);p(Tl,"MissingFieldException");Mr(ce,"SerialDescriptor");p(x0,"ContextDescriptor",l,l,[ce]);p(S0);p(z0);p(E0,"ClassSerialDescriptorBuilder");Mr(qs,"CachedNames");Dr(wa).eo=_i;Dr(wa).fo=gi;p(wa,"SerialDescriptorImpl",l,l,[ce,qs]);p(ba,"SerialKind");N(ql,"ENUM");N(I0,"CONTEXTUAL");p(Os,"StructureKind");N(C0,"CLASS");N(A0,"LIST");N(T0,"MAP");N(q0,"OBJECT");p(Mn,"PrimitiveKind");N(O0,"BOOLEAN");N(U0,"BYTE");N(j0,"CHAR");N(N0,"SHORT");N(L0,"INT");N(D0,"LONG");N(P0,"FLOAT");N(M0,"DOUBLE");N(R0,"STRING");p(ka,"PolymorphicKind");N(B0,"SEALED");Mr(Ol,"Decoder");Mr(Ul,"CompositeDecoder");Dr(mi).oq=H0;Dr(mi).bq=F0;Dr(mi).qq=$0;Dr(mi).sq=J0;p(mi,"AbstractDecoder",l,l,[Ol,Ul]);Mr(Vc,"Encoder");Dr(Us).sr=hz;Dr(Us).rr=dz;p(Us,"AbstractEncoder",l,l,[Vc]);p(oa,"AbstractPolymorphicSerializer",l,l,[cr]);N(G0,"NothingSerializer",l,l,[cr]);N(K0,"DurationSerializer",l,l,[cr]);N(W0,"InstantSerializer",l,l,[cr]);N(Y0,"UuidSerializer",l,l,[cr]);Dr(At).eo=_i;Dr(At).fo=gi;Dr(At).ho=Ts;p(At,"ListLikeDescriptor",l,l,[ce]);p(Z0,"ArrayListClassDesc");Dr(yi).eo=_i;Dr(yi).fo=gi;Dr(yi).ho=Ts;p(yi,"MapLikeDescriptor",l,l,[ce]);p(V0,"LinkedHashMapClassDesc");p(X0,"PrimitiveArrayDescriptor");p(Xc,"AbstractCollectionSerializer",l,l,[cr]);p(Qc,"CollectionLikeSerializer");p(Q0,"CollectionSerializer");p(rg,"ArrayListSerializer");p(ng,"MapLikeSerializer");p(eg,"LinkedHashMapSerializer");p(fe,"PrimitiveArraySerializer");p(Un,"PrimitiveArrayBuilder");Vr(tg);p(ig,"ElementMarker");Dr(xa).eo=_i;Dr(xa).fo=gi;p(xa,"PluginGeneratedSerialDescriptor",l,l,[ce,qs]);p(jl,"InlineClassDescriptor");Mr(ag,"GeneratedSerializer",l,l,[cr]);Dr(rf).wv=pz;p(rf,l,l,l,[ag]);N(sg,"NoOpEncoder");Dr(js).eo=_i;Dr(js).fo=gi;Dr(js).ho=Ts;N(js,"NothingSerialDescriptor",l,l,[ce]);p(og,"SerialDescriptorForNullable",l,l,[ce,qs]);p(lg,"ObjectSerializer",l,l,[cr]);N(ug,"CharArraySerializer",l,l,[cr]);N(cg,"DoubleArraySerializer",l,l,[cr]);N(fg,"FloatArraySerializer",l,l,[cr]);N(vg,"LongArraySerializer",l,l,[cr]);N(hg,"ULongArraySerializer",l,l,[cr]);N(dg,"IntArraySerializer",l,l,[cr]);N(pg,"UIntArraySerializer",l,l,[cr]);N(_g,"ShortArraySerializer",l,l,[cr]);N(gg,"UShortArraySerializer",l,l,[cr]);N(mg,"ByteArraySerializer",l,l,[cr]);N(yg,"UByteArraySerializer",l,l,[cr]);N(wg,"BooleanArraySerializer",l,l,[cr]);p(jt,"CharArrayBuilder");p(Nt,"DoubleArrayBuilder");p(Lt,"FloatArrayBuilder");p(Dt,"LongArrayBuilder");p(Pt,"ULongArrayBuilder");p(Mt,"IntArrayBuilder");p(Rt,"UIntArrayBuilder");p(Bt,"ShortArrayBuilder");p(Ft,"UShortArrayBuilder");p($t,"ByteArrayBuilder");p(Jt,"UByteArrayBuilder");p(Ht,"BooleanArrayBuilder");N(bg,"StringSerializer",l,l,[cr]);Dr(xn).eo=_i;Dr(xn).fo=gi;Dr(xn).ho=Ts;p(xn,"PrimitiveSerialDescriptor",l,l,[ce]);N(kg,"IntSerializer",l,l,[cr]);N(xg,"LongSerializer",l,l,[cr]);N(Sg,"ByteSerializer",l,l,[cr]);N(zg,"ShortSerializer",l,l,[cr]);N(Eg,"CharSerializer",l,l,[cr]);N(Ig,"DoubleSerializer",l,l,[cr]);N(Cg,"FloatSerializer",l,l,[cr]);N(Ag,"BooleanSerializer",l,l,[cr]);N(Tg,"UnitSerializer",l,l,[cr]);Dr(Sa).oq=H0;Dr(Sa).bq=F0;Dr(Sa).qq=$0;Dr(Sa).sq=J0;p(Sa,"TaggedDecoder",l,l,[Ol,Ul]);p(qg,"NamedValueDecoder");N(Og,"UIntSerializer",l,l,[cr]);N(Ug,"ULongSerializer",l,l,[cr]);N(jg,"UByteSerializer",l,l,[cr]);N(Ng,"UShortSerializer",l,l,[cr]);p(Lg,"SerializersModule");p(Dg,"SerialModuleImpl");p(nf,"ContextualProvider");p(Pg,"Argless");p(Mg,"WithTypeArguments");Mr(Rg,"SerializersModuleCollector");p(gz,"SerializableWith",l,l,l,l,0);var Ds=Math.imul;class hf{constructor(r,e){be(),this.h15_1=r,this.i15_1=e,this.j15_1=new B1}pq(){return this.i15_1}k15(r,e){var t=new $1;try{return DI(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=jf(this,e),i=new vs(this,Gl(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(at(),r)}}class am extends hf{constructor(){Go=null,super(new df,Ml()),Go=this}}class sm{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw U.v(b(r))}if(!this.l16_1.equals(Dm())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw U.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=Q(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw U.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw U.v(b(t))}return new df(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class om extends hf{constructor(r,e){super(r,e),sI(this)}}class lm{}class um{}class cm{}class df{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?Dm():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+oe(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class Xs extends te{}class Rl{}class fm{t17(){return at()}}class $e{}class tI{}class fr extends $e{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class iI{}class fn extends $e{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return zr(this.x17_1)}toString(){var r=Ds(this.x17_1.c1()+1|0,2),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof $e?this.y17(r instanceof $e?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof $e?this.z17(r instanceof $e?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class vm{t17(){return Fl()}}class nr extends $e{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return zr(this.a18_1)}toString(){var r=Ds(this.a18_1.c1(),6),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,Qo(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class le extends fr{constructor(){Ko=null,super(),Ko=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class it extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw U.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=rn.fa(e);Qo(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?Qo(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!jr(this).equals(jr(r))||(r instanceof it||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=Pp(this.e18_1);return r=Ds(31,r)+ie(this.g18_1)|0,r}}class _t{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new nr(this.i18_1)}}class hm{constructor(){var r=this;r.k18_1=q.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new fn(this.k18_1)}}class dm{constructor(){H1=this;var r=this,e=Zz();r.r18_1=Ll("kotlinx.serialization.json.JsonElement",e,[],hI)}dn(){return this.r18_1}s18(r,e){Ia(r),e instanceof fr?r.rr(Sf(),e):e instanceof nr?r.rr(Fl(),e):e instanceof fn?r.rr(zf(),e):ws()}en(r,e){return this.s18(r,e instanceof $e?e:g())}fn(r){var e=$l(r);return e.s17()}}class pm{constructor(){G1=this,this.m18_1=Ll("kotlinx.serialization.json.JsonPrimitive",za(),[])}dn(){return this.m18_1}t18(r,e){Ia(r);var t;if(e instanceof le)r.rr(Ef(),Bs()),t=sr;else{var i=Rm();r.rr(i,e instanceof it?e:g()),t=sr}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=$l(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(jr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class _m{constructor(){K1=this,this.h19_1=_1(at()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class gm{constructor(){W1=this,this.q18_1=yI()}dn(){return this.q18_1}j19(r,e){Ia(r),_1(at()).en(r,e)}en(r,e){return this.j19(r,e instanceof fn?e:g())}fn(r){return If(r),new fn(_1(at()).fn(r))}}class mm{constructor(){Y1=this,this.k19_1=g1(fs(),at()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class ym{constructor(){Z1=this,this.p18_1=wI()}dn(){return this.p18_1}m19(r,e){Ia(r),g1(fs(),at()).en(r,e)}en(r,e){return this.m19(r,e instanceof nr?e:g())}fn(r){return If(r),new nr(g1(fs(),at()).fn(r))}}class wm{constructor(){V1=this,this.n18_1=Ll("kotlinx.serialization.json.JsonNull",wi(),[])}dn(){return this.n18_1}n19(r,e){Ia(r),r.wq()}en(r,e){return this.n19(r,e instanceof le?e:g())}fn(r){if(If(r),r.op())throw Cf("Expected 'null' literal");return r.pp(),Bs()}}class bm{constructor(){X1=this,this.o18_1=Rz("kotlinx.serialization.json.JsonLiteral",za())}dn(){return this.o18_1}o19(r,e){if(Ia(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=c2(e.g18_1);if(t!=null)return r.br(t);var i=k0(e.g18_1),a=i;if((a==null?null:new Zn(a))!=null){var s=i,o=(s==null?null:new Zn(s)).lm_1,u=r.gr(Nl(As()).dn()),c=o;return u.br(c),sr}var f=h_(e.g18_1);if(f!=null)return r.dr(f);var v=b2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof it?e:g())}fn(r){var e=$l(r),t=e.s17();if(!(t instanceof it)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(jr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Ps{constructor(r){this.p19_1=f_(r)}co(){return Me(this).co()}do(){return Me(this).do()}go(){return Me(this).go()}io(r){return Me(this).io(r)}jo(r){return Me(this).jo(r)}ko(r){return Me(this).ko(r)}lo(r){return Me(this).lo(r)}mo(r){return Me(this).mo(r)}}class pf{}class _f extends Dn{static w19(r){var e=this.on(r);return ln(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class Or extends _f{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return ln(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Ms extends _f{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(II(r,t));return ln(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Rs{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return sr}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return sr}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(R(r))}x1a(r){return this.i1a_1.w1a(R(r))}y1a(r){return this.i1a_1.w1a(R(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class M1 extends Rs{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(c1(e))}else{var t=r;this.r1a(c1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(v1(e))}else{var t=r;this.r1a(v1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(l1(e))}else{var t=r;this.r1a(l1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(d1(e))}else{var t=r;this.r1a(d1(t))}}}class R1 extends Rs{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class km extends Rs{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class gf{constructor(r){var e=this;e.n1b_1=new ig(r,zI(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class xm{}class Sm{}class zm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&hs(this.x1b_1),e===this.z1b_1.length&&vh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&vh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:rc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=Q1)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=rn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&z(a,ce))if(P(a.do(),Ns()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===rc?r.ca("[<debug info disabled>]"):a!==Q1&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class mf{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(Lm())}b15(r,e){}e15(r,e,t){var i=t.dn();LI(this,i,e)}f15(r,e){}g15(r,e){}}class Em{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=Yo(this,!0);else if(r===0)e=Yo(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&hs(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=RI(this)):(t=PI(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&hs(this.x1c_1);var i=Gm(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+rl(r));return e}}class Ja extends te{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class la{}class B1{constructor(){this.t1b_1=mh(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=mh(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof la?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof la?e:g());var a=i;return a??null}}class Im{constructor(r){this.n1d_1=r}}class vs extends mi{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new gf(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new Em(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof oa?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=Xo(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=z(r,Vi)?r:g(),o;r:{var u;if(s instanceof oa?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=Xo(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof nr)){var h="Expected "+Ur(nr).oc()+", but had "+jr(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Rr(m))}else _=null;var w=_;throw Or.g19($r(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:Wn(k),E=S==null?null:ze(S),I;try{I=p1(s,this,E)}catch(X){var A;if(X instanceof Dn){var O=X,L=on(O.message),J;if(this.r17().h15_1.p17_1){var T=x.toString();J=b(Rr(T))}else J=null;var M=J;throw Or.g19($r(-1,L,null,null,M),L,-1,null,M,null)}else throw X}var F=I,B=z(F,Vi)?F:g();o=ny(this.r17(),c,x,B)}return o}else a=i;var D=a,H;try{H=p1(r,this,D)}catch(X){var V;if(X instanceof Dn){var $=X,tr=Fi(k2(on($.message),10),"."),W=x2(on($.message),10,"");this.r15_1.s1b(tr,l,W)}else throw X;H=V}var G=H,ar=z(G,Vi)?G:g();return this.u15_1=new Im(t),ar.fn(this)}catch(X){if(X instanceof Tl){var ur=X;throw cs(on(ur.message),"at path")?ur:aE(ur,mb(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw X}}cq(r){var e=Vm(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),YI(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new vs(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new vs(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&qf(r,this.p15_1)&&WI(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&bi(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(Vo())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=XI(this,r);break;case 2:e=ZI(this);break;default:e=r5(this);break}return this.q15_1.equals(Vo())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,R(Nu(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),Nu(r)}sp(){var r=this.r15_1.z1d();return ir(r,R(Lu(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Lu(r)}tp(){var r=this.r15_1.z1d();return ir(r,R(Zr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Zr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=co(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Nc(i))return i;oh(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=co(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Lc(i))return i;oh(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return Of(r)?new yf(this.r15_1,this.p15_1):super.zp(r)}}class yf extends mi{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw Sr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=tz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=iz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=az(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=sz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class Qi extends Us{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(xI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof oa,i;if(t)i=!this.r17().h15_1.o17_1.equals(Lm());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Dl())||P(s,cf());break;default:ws();break}i=a}var o=i,u=o?Xo(r.dn(),this.r17()):null,c;if(t){var f=r instanceof oa?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw U.v(b(v))}else break n;var h=mz(f,this,e);c=z(h,Al)?h:g()}else c=r;var d=c;if(u!=null){JI(this.r17(),r,d,u),HI(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=Vm(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;t5(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??Qi.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(TI(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if(Of(r)){var t,i=this.k1c_1;if(i instanceof M1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new M1(a,s)}var o=t;e=Qi.c1e(o,this.l1c_1,this.m1c_1,null)}else if(i5(r)){var u,c=this.k1c_1;if(c instanceof R1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new R1(f,v)}var h=u;e=Qi.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!Nc(r))throw lh(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Lc(r))throw lh(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class Bl extends qg{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof oa?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=Xo(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof nr)){var o="Expected "+Ur(nr).oc()+", but had "+jr(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:Wn(d),m=_==null?null:ze(_),w;try{w=p1(r,this,m)}catch(L){if(L instanceof Dn){var x=L,k=on(x.message),S;if(this.r17().h15_1.p17_1){var E=h.toString();S=b(Rr(E))}else S=null;var I=S;throw Or.g19($r(-1,k,null,null,I),k,-1,null,I,null)}else throw L}var A=w,O=z(A,Vi)?A:g();e=ny(this.r17(),i,h,O)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Ns())?a=!0:a=t instanceof ka,a){var s=this.r17(),o=r.co();if(!(e instanceof fn)){var u="Expected "+Ur(fn).oc()+", but had "+jr(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Rr(v))}else f=null;var h=f;throw Or.g19($r(-1,u,c,null,h),u,-1,c,h,null)}i=new F1(s,e)}else if(P(t,Pl())){var d=this.r17(),_=Zo(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Mn?x=!0:x=P(m,wi()),x){var k=this.r17(),S=r.co();if(!(e instanceof nr)){var E="Expected "+Ur(nr).oc()+", but had "+jr(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var O=b(e);A=b(Rr(O))}else A=null;var L=A;throw Or.g19($r(-1,E,I,null,L),E,-1,I,L,null)}w=new Am(k,e,r)}else if(d.h15_1.b17_1){var J=this.r17(),T=r.co();if(!(e instanceof fn)){var M="Expected "+Ur(fn).oc()+", but had "+jr(e).oc()+" as the serialized body of "+T,F=this.q13(),B;if(this.r17().h15_1.p17_1){var D=b(e);B=b(Rr(D))}else B=null;var H=B;throw Or.g19($r(-1,M,F,null,H),M,-1,F,H,null)}w=new F1(J,e)}else throw Bm(_);i=w}else{var V=this.r17(),$=r.co();if(!(e instanceof nr)){var tr="Expected "+Ur(nr).oc()+", but had "+jr(e).oc()+" as the serialized body of "+$,W=this.q13(),G;if(this.r17().h15_1.p17_1){var ar=b(e);G=b(Rr(ar))}else G=null;var ur=G;throw Or.g19($r(-1,tr,W,null,ur),tr,-1,W,ur,null)}i=new Ea(V,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof le)}m1e(r){return this.l1e(r)!==Bs()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Mm(c),v;f==null?Tn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof U)Tn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=$i(c),v,h=Ue(-128,127);Hs(z(h,Hi)?h:g(),f)?v=Nu(f):v=null;var d=v,_;d==null?Tn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof U)Tn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=$i(c),v,h=Ue(-32768,32767);Hs(z(h,Hi)?h:g(),f)?v=Lu(f):v=null;var d=v,_;d==null?Tn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof U)Tn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=$i(c),v,h=Ue(-2147483648,2147483647);Hs(z(h,Hi)?h:g(),f)?v=Zr(f):v=null;var d=v,_;d==null?Tn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof U)Tn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=$i(c),v;f==null?Tn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof U)Tn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=fI(c),v;f==null?Tn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof U)Tn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Nc(h))return h;var _=uh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=vI(c),v;f==null?Tn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof U)Tn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Lc(h))return h;var _=uh(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Rr(x))}else w=null;var k=w;throw Or.g19($r(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Ur(fr).oc()+", but had "+jr(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Rr(o))}else s=null;var u=s;throw Or.g19($r(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new zn(vb(c.w17())),v;f==null?Tn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof U)Tn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+Ur(fr).oc()+", but had "+jr(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof it)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Rr(d))}else h=null;var _=h;throw Or.g19($r(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Rr(S))}else k=null;var E=k;throw Or.g19($r(-1,m,w,x,E),m,-1,w,E,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if(Of(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+Ur(fr).oc()+", but had "+jr(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Rr(f))}else c=null;var v=c;throw Or.g19($r(-1,o,u,null,v),o,-1,u,v,null)}var h=jf(i,a.w17());t=new yf(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new Cm(this.r17(),this.l2(),this.h1e_1).zp(r)}}class Ea extends Bl{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new gf(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=Jl(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&s5(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!qf(r,this.r17())&&o5(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??me(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof nr)){var a="Expected "+Ur(nr).oc()+", but had "+jr(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}return new Ea(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class F1 extends Bl{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1(dx(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class Cm extends Bl{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw U.v(b(e))}return this.y1f_1}}class Am extends Ea{constructor(r,e,t){super(r,e,t),this.l1g_1=fa(e.p2()),this.m1g_1=Ds(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?me(this.l2(),r):ue(r)}dq(r){}}class Tm{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new zm(this.x15_1),this.a16_1=null,this.b16_1=rn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:Q(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(Q(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=rl(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(Q(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=Re(r),s=rl(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(Q(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=Q(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,Re(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==Q(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&Re(Q(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(qn(t,r,e))}c1d(){return this.a16_1!=null?_h(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=Q(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(l5(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=Q(r,i);var u;o?u=bu(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&u5(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return _h(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=Re(Q(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(Q(this.p1g(),r)));for(var t=!1;Re(Q(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,bu(this,0,0);r=i}var a;t?a=bu(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=q.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),sr;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(qu(e)!==8&&this.s1b("found ] instead of }"),Lv(e)):i===7?(qu(e)!==6&&this.s1b("found } instead of ]"),Lv(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return sr}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=S2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw EI(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;Q(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=Q(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=Re(f);if(v!==0)break r;r=r+1|0;var h=ne(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=Cr(d,R(10));a=hr(_,R(h));continue r}var m=i,w=Cr(m,R(10));i=Br(w,R(h)),er(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),Q(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Gn(i)*v5(a,o);(k>Gn(new y(-1,2147483647))||k<Gn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=Ln(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=en(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(Q(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;Q(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=f5(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),Q(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class qm{constructor(){ec=this,this.x1g_1=is(117),this.y1g_1=new Int8Array(126),d5(this),p5(this)}}class wf extends Tm{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,Re(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return sr;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=kl(this.p1g(),34,r);if(e===-1){this.d1d();var t=rl(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(Q(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,ee(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Om extends wf{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,Re(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return sr;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,Re(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=kl(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=po(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class $1{constructor(){this.n15_1=rn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){Qo(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var Go;function be(){return Go===l&&new am,Go}function aI(n,r){n=n===l?be():n;var e=new sm(n);r(e);var t=e.x16();return new om(t,e.u16_1)}function sI(n){if(P(n.pq(),Ml()))return sr;var r=new mf(n.h15_1);n.pq().s14(r)}var ah;function bf(){if(ah)return sr;ah=!0,Um=new Xs("NONE",0),jm=new Xs("ALL_JSON_OBJECTS",1),Nm=new Xs("POLYMORPHIC",2)}var Um,jm,Nm;function Lm(){return bf(),Um}function oI(){return bf(),jm}function Dm(){return bf(),Nm}function lI(){return ve(),Pm}var Pm,kf,J1;function Lr(n){ve();var r=n instanceof nr?n:null,e;return r==null?xf(n,"JsonObject"):e=r,e}function ue(n){return ve(),n==null?Bs():new it(n,!0)}function Qa(n){ve();var r=n instanceof fn?n:null,e;return r==null?xf(n,"JsonArray"):e=r,e}var Ko;function Bs(){return Ko===l&&new le,Ko}function ze(n){ve();var r;return n instanceof le?r=null:r=n.w17(),r}function Wn(n){ve();var r=n instanceof fr?n:null,e;return r==null?xf(n,"JsonPrimitive"):e=r,e}function uI(n){ve();var r;try{r=$i(n)}catch(t){var e;if(t instanceof Or)e=null;else throw t;r=e}return r}function cI(n){ve();var r;try{r=$i(n)}catch(o){var e;if(o instanceof Or)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Ue(-2147483648,2147483647);return Hs(z(s,Hi)?s:g(),a)?Zr(a):null}function Mm(n){return ve(),a5(n.w17())}function xf(n,r){throw ve(),U.v("Element "+b(jr(n))+" is not a "+r)}function $i(n){return ve(),jf(be(),n.w17()).h18()}function fI(n){ve();var r=n.w17();return co(r)}function vI(n){return ve(),co(n.w17())}var sh;function ve(){sh||(sh=!0,Pm=Ls("kotlinx.serialization.json.JsonUnquotedLiteral",fs()))}function Wo(n,r,e){return n.j18(r,ue(e))}function hI(n){return n.zo("JsonPrimitive",$a(dI)),n.zo("JsonNull",$a(pI)),n.zo("JsonLiteral",$a(_I)),n.zo("JsonObject",$a(gI)),n.zo("JsonArray",$a(mI)),sr}function dI(){return Sf().m18_1}function pI(){return Ef().n18_1}function _I(){return Rm().o18_1}function gI(){return Fl().p18_1}function mI(){return zf().q18_1}var H1;function at(){return H1===l&&new dm,H1}var G1;function Sf(){return G1===l&&new pm,G1}var K1;function yI(){return K1===l&&new _m,K1}var W1;function zf(){return W1===l&&new gm,W1}var Y1;function wI(){return Y1===l&&new mm,Y1}var Z1;function Fl(){return Z1===l&&new ym,Z1}var V1;function Ef(){return V1===l&&new wm,V1}function $a(n){return new Ps(n)}var X1;function Rm(){return X1===l&&new bm,X1}function Ia(n){bI(n)}function $l(n){var r=z(n,Rl)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(jr(n))));return e=r,e}function If(n){$l(n)}function bI(n){var r=z(n,pf)?n:null,e;if(r==null)throw Sr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(jr(n))));return e=r,e}function Me(n){var r=n.p19_1,e=vi;return da("original",1,e,kI(),null),r.l2()}function kI(){return De(n=>Me(n),1,0,5)}function xI(n,r){return r.h15_1.c17_1?new km(n,r):new Rs(n)}function SI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function zI(n){return De((r,e)=>{var t=n;return SI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Rr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(qn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=vn(i,0),c=bt(a,C(n));return s+b(qn(n,u,c))+o}function $r(n,r,e,t,i){return Af(n,r,e,t,i)}function Cf(n,r){return r=r===l?null:r,Or.g19(Af(-1,n,null,r,null),n,-1,null,null,r)}function bi(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function oh(n,r){n.s1b(Tf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Bm(n){return Ms.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function lh(n,r){return r=r===l?null:r,Ms.h1a(Tf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function uh(n,r){return Tf(n,r)}function Af(n,r,e,t,i){var a=rn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||tt(e)||(a.ca(" at path: "),a.ca(e)),t==null||tt(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Tf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function EI(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Rr(a,e)):s=null;var o=s;return Or.g19(Af(e,r,t,i,o),r,e,t,o,i)}function II(n,r){var e;return r==null||tt(r)?e="":e=`
`+r,n+e}function CI(){return Ee(),Fm}var Fm;function AI(){return Ee(),$m}var $m;function qf(n,r){Ee();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(z(t,Z)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof um){i=!0;break r}}i=!1}e=i}return e}function Jl(n,r,e){if(Ee(),Jm(r,n)){var t=e.toLowerCase();return mu(n,r,t)}var i=Hl(n,r);if(i!=null)return mu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:mu(n,r,e)}function TI(n,r,e){Ee();var t=Hl(n,r);return t==null?n.io(e):Hm(n,r,t)[e]}function qI(n,r){Ee();var e=Hl(n,r);return e==null?sE(n):vp(Hm(n,r,e))}function Jm(n,r){return Ee(),n.h15_1.l17_1&&P(r.do(),wi())}function mu(n,r,e){Ee();var t=OI(r,n).o2(e);return t??-3}function Hl(n,r){return Ee(),P(n.do(),Dl())?r.h15_1.k17_1:null}function Hm(n,r,e){Ee();var t=iy(r),i=AI();return t.u1b(n,i,jI(n,e))}function OI(n,r){Ee();var e=iy(n),t=CI();return e.u1b(r,t,NI(r,n))}function UI(n,r){Ee();var e=vr.q4(),t=Jm(r,n),i=Hl(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=q.m(),f=u.x();f.y();){var v=f.z();v instanceof cm&&c.n(v)}var h=kc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,ch(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||ch(e,n,S,o)}while(a<s);var E;return e.i1()?E=Nr():E=e,E}function jI(n,r){return()=>{for(var e=An.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Ms.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function NI(n,r){return()=>UI(n,r)}function ch(n,r,e,t){var i=P(r.do(),wi())?"enum value":"property";if((z(n,wn)?n:g()).m2(e))throw Cf("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(me(n,e))+" in "+b(r)));n.s2(e,t)}var fh;function Ee(){fh||(fh=!0,Fm=new la,$m=new la)}var Q1,rc;function vh(n){var r=Ds(n.b1c_1,2);n.z1b_1=Gp(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;fk(o,i,0,0,s),n.a1c_1=i}function LI(n,r,e){var t=r.do(),i;if(t instanceof ka?i=!0:i=P(t,Kg()),i)throw U.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return sr;var a,s;if(P(t,Ns())||P(t,Pl())?s=!0:s=t instanceof Mn,s?a=!0:a=t instanceof ql,a)throw U.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function DI(n,r,e,t){var i=Gl(),a=$I().c1(),s=Array(a),o=Qi.t1c(r,n,i,s);o.rr(e,t)}function PI(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||bi(n.u1c_1),n.u1c_1.z1c(7)),new nr(e)}function*MI(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(sr,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||bi(n.u1c_1),n.u1c_1.z1c(7)),new nr(i)}function Gm(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=q.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||bi(n.u1c_1,"array"),n.u1c_1.z1c(9)),new fn(e)}function Yo(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Bs():new it(t,r)}function RI(n){return lS(new Xd(BI(n)),sr)}function BI(n){return De((r,e,t)=>Bb(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=Yo(n,!0);else if(a===0)s=Yo(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&hs(o.x1c_1);var u=yield*MI(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&hs(c.x1c_1);var f=Gm(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function hs(n){throw Cf("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var hh;function Ca(){if(hh)return sr;hh=!0,Km=new Ja("OBJ",0,123,125),Wm=new Ja("LIST",1,91,93),Ym=new Ja("MAP",2,123,125),Zm=new Ja("POLY_OBJ",3,91,93)}var Km,Wm,Ym,Zm;function FI(){return Ca(),[Gl(),nc(),Vo(),Xm()]}function $I(){return Ca(),yu==null&&(yu=Qx(FI())),yu}var yu;function Vm(n,r){var e=r.do(),t;if(e instanceof ka)t=Xm();else if(P(e,Ns()))t=nc();else if(P(e,Pl())){var i=Zo(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Mn?o=!0:o=P(a,wi()),o)s=Vo();else if(n.h15_1.b17_1)s=nc();else throw Bm(i);t=s}else t=Gl();return t}function Zo(n,r){var e;if(P(n.do(),Kg())){var t=Lz(r,n),i=t==null?null:Zo(t,r);e=i??n}else n.fo()?e=Zo(n.lo(0),r):e=n;return e}function Gl(){return Ca(),Km}function nc(){return Ca(),Wm}function Vo(){return Ca(),Ym}function Xm(){return Ca(),Zm}function Xo(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof lm)return t.k1d_1}return r.h15_1.h17_1}function JI(n,r,e,t){return GI(n,r,e,t)}function HI(n){if(n instanceof ql){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(r))}if(n instanceof Mn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw Sr.o3(b(e))}if(n instanceof ka){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw Sr.o3(b(t))}}function GI(n,r,e,t){if(qI(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(oI())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Ms.h1a(o,a,u)}}function KI(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function WI(n,r){for(;n.rq(r)!==-1;);}function YI(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function ZI(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&bi(n.r15_1),t=-1;return t}function VI(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),wi())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=Jl(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function XI(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=n5(n);n.r15_1.o1d(58);var i=Jl(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&VI(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=QI(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&bi(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function QI(n,r,e){return qf(r,n.p15_1)||KI(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function r5(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&bi(n.r15_1,"array"),e=-1),e}function n5(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function e5(){return Uf(),Qm}var Qm;function t5(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function Of(n){return Uf(),n.fo()&&e5().l1(n)}function i5(n){return Uf(),n.fo()&&P(n,lI())}var dh;function Uf(){dh||(dh=!0,Qm=Bi([ef(Il()).dn(),Nl(As()).dn(),tf(El()).dn(),af(Cl()).dn()]))}function wu(){return Kl(),ry}var ry;function $s(n){Kl();var r=n&15,e;if(r<10){var t=48,i=Y(t);e=Fe(r+i|0)}else{var a=r-10|0,s=97,o=Y(s);e=Fe(a+o|0)}return e}function Qo(n,r){Kl(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Y(s);o<wu().length&&wu()[o]!=null&&(n.yd(r,e,a),n.ca(wu()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function a5(n){return Kl(),Cv(n,"true",!0)?!0:Cv(n,"false",!0)?!1:null}var ph;function Kl(){if(!ph){ph=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=$s(e>>12),i=$s(e>>8),a=$s(e>>4),s=$s(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Y(o)]='\\"';var u=92;n[Y(u)]="\\\\";var c=9;n[Y(c)]="\\t";var f=8;n[Y(f)]="\\b";var v=10;n[Y(v)]="\\n";var h=13;n[Y(h)]="\\r",n[12]="\\f",ry=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Y(w),k=34,S=Y(k);d[x]=jn(S);var E=92,I=Y(E),A=92,O=Y(A);d[I]=jn(O);var L=9,J=Y(L),T=116,M=Y(T);d[J]=jn(M);var F=8,B=Y(F),D=98,H=Y(D);d[B]=jn(H);var V=10,$=Y(V),tr=110,W=Y(tr);d[$]=jn(W);var G=13,ar=Y(G),ur=114,X=Y(ur);d[ar]=jn(X);var Tr=102,wr=Y(Tr);d[12]=jn(wr)}}function ny(n,r,e,t){var i=t.dn();return new Ea(n,e,i,r,i).bq(t)}function Tn(n,r,e,t){var i=we(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Rr(u))}else o=null;var c=o;throw Or.g19($r(-1,a,s,null,c),a,-1,s,c,null)}function s5(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof le:u=!1,u){a=!0;break r}if(P(o.do(),wi())){var c;if(o.eo()?c=t instanceof le:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:ze(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=Jl(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function o5(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Rr(s))}else a=null;var o=a;throw Or.g19($r(-1,e,t,i,o),e,-1,t,o,i)}function l5(n,r,e){return n.o1g(r,e),c5(n,e+1|0)}function bu(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function _h(n){var r=on(n.a16_1);return n.a16_1=null,r}function u5(n){return Q(n.p1g(),n.y15_1-1|0)!==34}function c5(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=Q(t,i);if(a===117)return ey(n,n.p1g(),e);var s=Y(a),o=h5(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function ey(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),ey(n,r,n.y15_1)):(n.b16_1.da(Fe((((Js(n,r,e)<<12)+(Js(n,r,e+1|0)<<8)|0)+(Js(n,r,e+2|0)<<4)|0)+Js(n,r,e+3|0)|0)),e+4|0)}function Js(n,r,e){var t=Q(r,e),i;if(48<=t&&t<=57){var a=Y(t),s=48;i=a-Y(s)|0}else if(97<=t&&t<=102){var o=Y(t),u=97;i=(o-Y(u)|0)+10|0}else if(65<=t&&t<=70){var c=Y(t),f=65;i=(c-Y(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function f5(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=Q(t,i),s=Y(a)|32,o,u=116;if(s===Y(u))gh(n,"rue",e),o=!0;else{var c=102;s===Y(c)?(gh(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function gh(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=Q(n.p1g(),e+a|0),u=Y(s);u!==(Y(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function v5(n,r){var e;switch(r){case!1:var t=-Gn(n);e=Math.pow(10,t);break;case!0:var i=Gn(n);e=Math.pow(10,i);break;default:ws();break}return e}function Re(n){var r;if(Y(n)<126){var e=ty().y1g_1;r=e[Y(n)]}else r=0;return r}function rl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function h5(n){return n<117?ty().x1g_1[n]:0}function d5(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,Gt(n,e,117)}while(r<=31);Gt(n,8,98),Gt(n,9,116),Gt(n,10,110),Gt(n,12,102),Gt(n,13,114),ku(n,47,47),ku(n,34,34),ku(n,92,92)}function p5(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Mi(n,e,127)}while(r<=32);Mi(n,9,3),Mi(n,10,3),Mi(n,13,3),Mi(n,32,3),ht(n,44,4),ht(n,58,5),ht(n,123,6),ht(n,125,7),ht(n,91,8),ht(n,93,9),ht(n,34,1),ht(n,92,2)}function Gt(n,r,e){if(e!==117){var t=Y(e);n.x1g_1[t]=Fe(r)}}function ku(n,r,e){var t=Y(r);return Gt(n,t,e)}function Mi(n,r,e){n.y1g_1[r]=e}function ht(n,r,e){var t=Y(r);return Mi(n,t,e)}var ec;function ty(){return ec===l&&new qm,ec}function jf(n,r){return n.h15_1.n17_1?new Om(r,n.h15_1):new wf(r,n.h15_1)}function iy(n){return n.j15_1}function mh(n){return ns.l7(n)}p(hf,"Json");N(am,"Default");p(sm,"JsonBuilder");p(om,"JsonImpl");p(lm,"JsonClassDiscriminator");p(um,"JsonIgnoreUnknownKeys");p(cm,"JsonNames");p(df,"JsonConfiguration");p(Xs,"ClassDiscriminatorMode");Mr(Rl,"JsonDecoder",l,l,[Ol,Ul]);Vr(fm);p($e,"JsonElement",l,l,l,l,l,{0:at});Vr(tI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Sf});Vr(iI);p(fn,"JsonArray",l,l,[En],l,l,{0:zf});Vr(vm);p(nr,"JsonObject",l,l,[wn],l,l,{0:Fl});N(le,"JsonNull",l,l,l,l,l,{0:Ef});p(it,"JsonLiteral");p(_t,"JsonObjectBuilder");p(hm,"JsonArrayBuilder");N(dm,"JsonElementSerializer",l,l,[cr]);N(pm,"JsonPrimitiveSerializer",l,l,[cr]);N(_m,"JsonArrayDescriptor",l,l,[ce]);N(gm,"JsonArraySerializer",l,l,[cr]);N(mm,"JsonObjectDescriptor",l,l,[ce]);N(ym,"JsonObjectSerializer",l,l,[cr]);N(wm,"JsonNullSerializer",l,l,[cr]);N(bm,"JsonLiteralSerializer",l,l,[cr]);Dr(Ps).eo=_i;Dr(Ps).fo=gi;Dr(Ps).ho=Ts;p(Ps,l,l,l,[ce]);Mr(pf,"JsonEncoder",l,l,[Vc]);p(_f,"JsonException");p(Or,"JsonDecodingException");p(Ms,"JsonEncodingException");p(Rs,"Composer");p(M1,"ComposerForUnsignedNumbers");p(R1,"ComposerForUnquotedLiterals");p(km,"ComposerWithPrettyPrint");p(gf,"JsonElementMarker");N(xm,"Tombstone");N(Sm,"RedactedKey");p(zm,"JsonPath");Dr(mf).d15=_z;p(mf,"JsonSerializersModuleValidator",l,l,[Rg]);p(Em,"JsonTreeReader",l,l,l,[1]);p(Ja,"LexerMode");p(la,"Key",la);p(B1,"DescriptorSchemaCache",B1);p(Im,"DiscriminatorHolder");p(vs,"StreamingJsonDecoder",l,l,[Rl]);p(yf,"JsonDecoderForUnsignedTypes");p(Qi,"StreamingJsonEncoder",l,l,[pf]);p(Bl,"AbstractJsonTreeDecoder",l,l,[Rl]);p(Ea,"JsonTreeDecoder");p(F1,"JsonTreeListDecoder");p(Cm,"JsonPrimitiveDecoder");p(Am,"JsonTreeMapDecoder");p(Tm,"AbstractJsonLexer");N(qm,"CharMappings");p(wf,"StringJsonLexer");p(Om,"StringJsonLexerWithComments");p($1,"StringJsonWriter",$1);kf=new fm;J1=new vm;Q1=new xm;rc=new Sm;var yh=Math.imul;class ay{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class sy{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class tc{constructor(r,e,t){this.k1j_1=r,this.l1j_1=e,this.m1j_1=t}}class oy{constructor(r,e){this.s1j_1=r,this.t1j_1=e}}class ly{constructor(r,e,t,i,a,s,o,u,c,f,v){this.u1j_1=r,this.v1j_1=e,this.w1j_1=t,this.x1j_1=i,this.y1j_1=a,this.z1j_1=s,this.a1k_1=o,this.b1k_1=u,this.c1k_1=c,this.d1k_1=f,this.e1k_1=v}}class uy{constructor(r,e,t){this.f1k_1=r,this.g1k_1=e,this.h1k_1=t}}class cy{constructor(r){this.i1k_1=r}zf(r,e){return this.i1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.i1k_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class fy{constructor(r){this.j1k_1=r}zf(r,e){return this.j1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.j1k_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class vy{constructor(r){this.k1k_1=r}zf(r,e){return this.k1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.k1k_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class hy{constructor(r){this.l1k_1=r}zf(r,e){return this.l1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.l1k_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class dy{constructor(r){this.p1k_1=r}r4(){return this.p1k_1.x()}q1k(r){return Nn(r.t1j_1)}s4(r){return this.q1k(r)}}class py{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?mr():e,t=t===l?null:t,i=i===l?mr():i,a=a===l?mr():a,s=s===l?mr():s,o=o===l?mr():o,u=u===l?mr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?mr():v,h=h===l?mr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.d1j_1,S=this.i1i_1,E=nt([this.a1i_1,k,S==null?null:S.g1j_1]),I=q.g1(Wr(E,10)),A=E.x();A.y();){var O=A.z(),L=be().m15(O);I.n(L)}w.m1i_1=I;for(var J=this,T=q.m(),M=u.x();M.y();){var F=M.z();F.t1h_1||T.n(F)}J.n1i_1=T;var B=this,D;if(!this.n1i_1.i1())D=!0;else{var H;r:{var V;if(z(u,Z)?V=u.i1():V=!1,V){H=!1;break r}for(var $=u.x();$.y();){var tr=$.z();if(tr.u1h_1!=null){H=!0;break r}}H=!1}D=H}B.o1i_1=D,this.p1i_1=Qe(i);for(var W=this,G=q.g1(Wr(r,10)),ar=r.x();ar.y();){var ur=ar.z(),X="/"+B_(ur,va([47]));G.n(X)}W.q1i_1=G,this.r1i_1=Nr(),this.s1i_1=!1,this.t1i_1=!1;var Tr=this;Tr.u1i_1=An.e1();var wr=this;wr.v1i_1=q.m(),this.w1i_1=Nr()}r1k(r,e){this.w1i_1=e;var t=Lr(be().m15(r)),i=$5(this,F5(this,B5(this,t))),a=lr(i,"components"),s=a==null?null:lr(a,"schemas"),o=s??Nr();this.r1i_1=oC(this,i,o);var u=this,c;if(il(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(z(f,Z)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(il(_)){v=!0;break r}}v=!1}c=v}u.s1i_1=c;var m=this,w;if(tl(i,ro()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(z(x,Z)?S=x.i1():S=!1,S){k=!1;break r}for(var E=x.x();E.y();){var I=E.z();if(tl(I,ro())){k=!0;break r}}k=!1}w=k}m.t1i_1=w;var A=ye(this.s1i_1?qy().q2():mr(),this.t1i_1?ro().q2():mr());this.u1i_1.v2(),this.v1i_1.v2();for(var O=nC(this,o)+K5(this,o)+Z5(this,o)+V5(this,o),L=o.p2(),J=q.g1(Wr(L,10)),T=L.x();T.y();){var M=T.z(),F=Nn(M);J.n(F)}for(var B=J,D=lr(i,"paths"),H=(D??Nr()).p2(),V=q.g1(Wr(H,10)),$=H.x();$.y();){var tr=$.z(),W=Zy(this,tr);V.n(W)}var G=ye(ye(B,V),Df());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var ar="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw Sr.o3(b(ar))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var X="permissions needs currentUser, which says who the permissions belong to.";throw Sr.o3(b(X))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var Tr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(Tr))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var wr="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw Sr.o3(b(wr))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var dr="guards needs currentUser, which says who is signed in.";throw Sr.o3(b(dr))}var Er;if(this.h1i_1.i1())Er=!0;else{var br=kh(),kr;r:{var Pr;if(z(br,Z)?Pr=br.i1():Pr=!1,Pr){kr=!0;break r}for(var _r=br.x();_r.y();){var Hr=_r.z();if(G.l1(Hr)){kr=!1;break r}}kr=!0}Er=kr}if(!Er){var an="guards exports "+rr(kh())+", and the generated client already uses one of the names.";throw Sr.o3(b(an))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Gr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw Sr.o3(b(Gr))}if(!(wy(this.l1i_1).i1()||!G.l1("cookieConsent"))){var gr="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw Sr.o3(b(gr))}for(var Kr=this.n1i_1,Xr=vr.q4(),un=Kr.x();un.y();){var Fr=un.z(),Qr=ic(Fr.l1h_1),_n=Xr.o2(Qr),hn;if(_n==null){var gn=q.m();Xr.s2(Qr,gn),hn=gn}else hn=_n;var Qn=hn;Qn.n(Fr)}var Rn=Xr.q2(),Bn;r:{for(var he=Rn.x();he.y();){var Te=he.z();if(Te.c1()>1){Bn=Te;break r}}Bn=null}var de=Bn;if(de!=null){var st="The cookies "+rr(de," and ",l,l,l,l,kC)+" would both be called "+ic(Yw(de).l1h_1)+" in TypeScript.";throw Sr.o3(b(st))}var ot=this.c1i_1,qe;r:{for(var Fn=ot.x();Fn.y();){var Sn=Fn.z();if(G.l1(Sn.x1h_1)){qe=Sn;break r}}qe=null}var cn=qe;if(cn!=null){var In="constants("+cn.x1h_1+") would be exported as '"+cn.x1h_1+"', which the generated client already uses. Rename the object.";throw Sr.o3(b(In))}var Ta=Ge("client.ts")+W5(this),Tt=this.j1i_1,lt;Tt==null?lt=null:lt=`
reportErrors('`+Tt+`');
`;var xi=lt,Si=Ta+(xi??""),ut=this.k1i_1,ct;ut==null?ct=null:ct=`
`+ut+`
`;for(var zi=ct,Ei=j("client.ts",Si+(zi??"")),Ii=j("form.ts",Ge("form.ts")),Ci=j("form-state.svelte.ts",Ge("form-state.svelte.ts")),Ai=this.d1i_1.i1()&&this.g1i_1.i1()?O:Fi(O,`export {};
`),qa=Qt(this.u1i_1),Ti=j("types.ts",Ai+rr(qa,"",l,l,l,l,xC)+vC(this)+Wy(this,"Permission",this.g1i_1)),qt=lr(i,"paths"),qi=qt??Nr(),Oa=to(o.p2(),"LucideIcon"),Oi=this.r1i_1.q2(),ft=q.g1(Wr(Oi,10)),Ui=Oi.x();Ui.y();){var Ua=Ui.z(),ja=Ua.k1j_1;ft.n(ja)}var ji=j("services.ts",uC(this,qi,rv(rv(Oa,ft),A))),Ot=Ge("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.o1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Fi("current-user.svelte.ts",".ts")+`.js';
`:""),Ut;this.h1i_1.i1()?Ut="":Ut="export * from './"+Fi("guards.ts",".ts")+`.js';
`;var Na=[Ei,Ii,Ci,Ti,ji,j("index.ts",Ot+Ut+(this.i1i_1!=null?"export * from './"+Fi("preferences.svelte.ts",".ts")+`.js';
`:""))],Ni;this.c1i_1.i1()?Ni=[]:Ni=[j("constants.ts",A5(this.c1i_1))];var La=Ni,Da;this.o1i_1?Da=[j("cookies.ts",w5(this.l1i_1))]:Da=[];var ow=Da,Kf=this.e1i_1,Ql;Kf==null?Ql=null:Ql=[j("current-user.svelte.ts",Q5(this,Kf))];var Wf=Ql,ru;Wf==null?ru=[]:ru=Wf;var lw=ru,nu;this.h1i_1.i1()?nu=[]:nu=[j("guards.ts",Y5(this))];var uw=nu,Yf=this.i1i_1,eu;Yf==null?eu=null:eu=[j("preferences.svelte.ts",X5(this,Yf))];var Zf=eu,tu;return Zf==null?tu=[]:tu=Zf,R5(this,$b([Na,La,ow,lw,uw,tu,[j("openapi.json",Cy().k15(kf.t17(),i)+`
`)]]))}s1k(r,e,t){return e=e===l?Nr():e,t===l?this.r1k(r,e):t.r1k.call(this,r,e)}}class Qs extends te{constructor(r,e,t){super(r,e),this.o1k_1=t}p1g(){return Ge(this.o1k_1)}}class Wl{constructor(r,e,t){this.t1k_1=r,this.u1k_1=e,this.v1k_1=t}toString(){return"GeneratedOperation(name="+this.t1k_1+", method="+this.u1k_1+", path="+this.v1k_1+")"}hashCode(){var r=ie(this.t1k_1);return r=yh(r,31)+ie(this.u1k_1)|0,r=yh(r,31)+ie(this.v1k_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof Wl)||this.t1k_1!==r.t1k_1||this.u1k_1!==r.u1k_1||this.v1k_1!==r.v1k_1)}}class _y{constructor(r){this.w1k_1=r}zf(r,e){return this.w1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1k_1}equals(r){var e;if(r!=null&&z(r,pn)){var t;r!=null&&z(r,kn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return zr(this.g3())}}class gy{n1j(r){return"Must be at least "+Th(this,r)+"."}o1j(r){return"Must be at most "+Th(this,r)+"."}q1j(r,e){return"Must be "+(e?"greater than":"at least")+" "+St(r)+"."}r1j(r,e){return"Must be "+(e?"less than":"at most")+" "+St(r)+"."}p1j(r){return"Must match "+r+"."}}function _5(){return Xn(),my}var my;function g5(){return Xn(),yy}var yy;function re(n){return Xn(),"'"+Hn(Hn(Hn(Hn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function ic(n){Xn();var r=g5(),e=B_(n,va([46,95,45])),t=r.ye(e,b5);return _5().ue(t)?t:re(n)}function m5(n){Xn();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=rr(n.n1h_1," | ",l,l,l,l,k5);break;default:r="number";break}return r}function y5(n){Xn();var r=m5(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+re(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+rr(n.n1h_1,", ",l,l,l,l,x5)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?re(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+re(n.q1h_1),d="sameSite: "+re(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+re(m);var x=nt([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+ic(n.l1h_1)+": typedCookie"+k+"("+re(n.l1h_1)+", { "+rr(x,", ")+" })"}function wy(n){Xn();for(var r=q.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return Qt(na(r))}function w5(n){Xn();for(var r=q.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=S5,a=new ay(i),s=hi(r,a),o=wy(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=nt([f,d]),m=q.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=rr(k,", ",l,l,l,l,z5),E=rn.f();return E.ca("import { "+rr(_,", ")+` } from './client.js';
`),s.i1()||E.ca(`
export const cookies = {
`+rr(s,`,
`,l,l,l,l,E5())+`
};
`),o.i1()||E.ca(`
export const cookieConsent = consentStore([`+rr(o,", ",l,l,l,l,I5)+"] as const, ["+S+`]);
`),E.toString()}function b5(n){return Xn(),n.xf().d1(1).toUpperCase()}function k5(n){return Xn(),re(n)}function x5(n){return Xn(),re(n)}function S5(n,r){Xn();var e=n.l1h_1,t=r.l1h_1;return Ct(e,t)}function z5(n){Xn();var r=re(n.l1h_1),e=re(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+re(i)+" }"}function E5(){return De(n=>y5(n),1,0,7,"cookieEntry")}function I5(n){return Xn(),re(n)}var wh;function Xn(){wh||(wh=!0,my=yt.te("[A-Za-z_$][A-Za-z0-9_$]*"),yy=yt.te("[._-]+([A-Za-z0-9])"))}function C5(){return Aa(),by}var by;function Nf(n,r){Aa();var e;if(n instanceof fr)e=n.v17()?ky(n.w17()):n.w17();else if(n instanceof fn)e=rr(n,", ","[","]",l,l,T5(r));else if(n instanceof nr){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=rr(i,`,
`,`{
`,a,l,l,q5(r))}e=t}else ws();return e}function ky(n){return Aa(),"'"+Hn(Hn(Hn(Hn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function A5(n){Aa();var r=O5,e=new sy(r),t=hi(n,e);return rr(t,`
`,l,l,l,l,U5)}function T5(n){return r=>Nf(r,n)}function q5(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(C5().ue(e)?e:ky(e))+": "+Nf(t,n+"    ")}}function O5(n,r){Aa();var e=n.x1h_1,t=r.x1h_1;return Ct(e,t)}function U5(n){return Aa(),"export const "+n.x1h_1+" = "+Nf(new nr(n.y1h_1),"")+` as const;
`}var bh;function Aa(){bh||(bh=!0,by=yt.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function xy(){return Ar(),Sy}var Sy;function Lf(){return Ar(),zy}var zy;function Ey(){return Ar(),Iy}var Iy;function Cy(){return Ar(),Ay}var Ay;function kh(){return Ar(),Ty}var Ty;function qy(){return Ar(),Oy}var Oy;function ro(){return Ar(),Uy}var Uy;function j5(){return Ar(),jy}var jy;function N5(){return Ar(),Ny}var Ny;function L5(){return Ar(),Ly}var Ly;function Df(){return Ar(),Dy}var Dy;function D5(){return Ar(),Py}var Py;function P5(){return Ar(),My}var My;function M5(){return Ar(),Ry}var Ry;function R5(n,r){var e=gl(r.slice());return Ve(e,j(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+fp(r,"",l,l,l,l,SC)))}function B5(n,r){for(var e=lr(r,"paths"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();rC(n,o)&&i.s2(s.k2(),s.l2())}var u=Vl(i);return new nr(Ve(r,j("paths",new nr(u))))}function F5(n,r){if(n.b1i_1.i1())return r;for(var e=lr(r,"components"),t=e??new nr(Nr()),i=lr(t,"schemas"),a=i??Nr(),s=Fc(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.x1i_1,f=s.o2(c);if(f==null){var v=be().m15(u.y1i_1);s.s2(c,v)}}for(var h=lr(r,"paths"),d=h??Nr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=Lr(k),E=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),O=A.k2(),L=A.k2(),J=A.l2(),T,M;xy().l1(L)?M=J instanceof nr:M=!1,M?T=G5(n,J):T=J;var F=T;E.s2(O,F)}var B=new nr(E);_.s2(x,B)}var D=_;return new nr(Ve(Ve(r,j("paths",new nr(D))),j("components",new nr(Ve(t,j("schemas",new nr(s)))))))}function $5(n,r){var e=lr(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=lr(i,"schemas"),s=a??Nr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof nr?v=J5(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new nr(Ve(Lr(w),j("type",ue("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),E=s.r2().x();E.y();){var I=E.z(),A=I.k2();(z(k,wn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var O=S.r2(),L=vn(Wr(O,10),16),J=vr.ha(L),T=O.x();T.y();){var M=T.z(),F=M.k2(),B=M.l2(),D=B instanceof nr?B:null,H=j(D==null?null:xh(n,D),F);J.s2(H.ch_1,H.dh_1)}for(var V=J,$=vr.ha(k.c1()),tr=k.r2().x();tr.y();){var W=tr.z(),G=W.k2(),ar=W.k2(),ur=W.l2(),X=V.o2(xh(n,ur)),Tr=X??ar;$.s2(G,Tr)}for(var wr=$,dr=vr.q4(),Er=s.r2().x();Er.y();){var br=Er.z(),kr=br.k2();(wr.o2(kr)==null||wr.o2(kr)===kr)&&dr.s2(br.k2(),br.l2())}for(var Pr=vr.ha(dr.c1()),_r=dr.r2().x();_r.y();){var Hr=_r.z(),an=Hr.k2(),Gr=Hr.k2(),gr=Hr.l2(),Kr=k.o2(Gr),Xr=Kr??gr;Pr.s2(an,Xr)}var un=Pr,Fr=new nr(Ve(i,j("schemas",new nr(un))));return Lr(lc(wr,n,new nr(Ve(r,j("components",Fr)))))}function J5(n,r){var e;if(P(Qe(ki(n,r)),Bi(["object","null"]))){var t=lr(r,"properties");e=!(t??Nr()).i1()}else e=!1;return e}function xh(n,r){return new nr(Px(r,"title"))}function H5(n,r){var e=new _t,t=new hm,i=new _t;Wo(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new _t;Wo(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function G5(n,r){for(var e=lr(r,"responses"),t=e??Nr(),i=Fc(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new _t;Wo(o,"description","");var u=new _t,c="application/json",f=new _t,v=new _t;Wo(v,"$ref","#/components/schemas/"+s.x1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.z1i_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var E=m;i.s2(k,E)}}}return new nr(Ve(r,j("responses",new nr(i))))}function K5(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=Lr(be().m15(i)),s=An.e1();return`
`+Pf(n,"PublicConfig",a,s,r)}function W5(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Hn(Hn(t,"\\","\\\\"),"'","\\'")+`';
`}function Y5(n){var r=n.h1i_1,e;r:{var t;if(z(r,Z)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.b1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=zC,c=new cy(u),f=hi(o,c),v=rr(f,"",l,l,l,l,EC),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
`+("import { "+(n.f1i_1!=null?"loginPath, ":"")+`matchGuard, type PageGuard } from './client.js';
`)+("import { currentUser } from './"+Fi("current-user.svelte.ts",".ts")+`.js';
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
`}function Z5(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return By(n,"CurrentUser",i.c1j_1,i.d1j_1,r)}function V5(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return By(n,"UserPreferences",i.f1j_1,i.g1j_1,r)}function By(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Nn(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Nn(c)+`;
`;var f=Lr(be().m15(t)),v=An.e1();return`
`+Pf(n,r,f,v,i)}function X5(n,r){for(var e=lr(Lr(be().m15(r.g1j_1)),"properties"),t=(e??Nr()).p2(),i=r.j1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=rr(f,", ",l,l,l,l,IC),h=Cy().k15(kf.t17(),be().m15(r.i1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=Le(r.h1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function Q5(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.e1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function rC(n,r){var e,t=n.z1h_1,i;r:{var a;if(z(t,Z)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||we(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.q1i_1.i1())u=!0;else{var c=n.q1i_1,f;r:{var v;if(z(c,Z)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||we(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function nC(n,r){if(r.i1()&&n.p1i_1.i1()&&n.r1i_1.i1()&&!n.s1i_1&&!n.t1i_1)return`export {};
`;for(var e=An.e1(),t=q.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=j(s,Pf(n,Nn(s),Lr(o),e,r));t.n(u)}for(var c=t,f=n.r1i_1.q2(),v=q.m(),h=f.x();h.y();){var d=h.z();d.m1j_1&&v.n(d)}for(var _=q.g1(Wr(v,10)),m=v.x();m.y();){var w=m.z(),x=j(w.k1j_1,Hy(n,w.k1j_1,w.l1j_1));_.n(x)}var k=_,S=ye(c,k),E=CC,I=new fy(E),A=hi(S,I),O=rr(A,`
`,l,l,l,l,AC),L;e.l1("LucideIcon")?L=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:L="";var J=L,T=r.q2(),M;r:{var F;if(z(T,Z)?F=T.i1():F=!1,F){M=!1;break r}for(var B=T.x();B.y();){var D=B.z();if(Rf(n,Lr(D))){M=!0;break r}}M=!1}var H=M,V=`declare const brand: unique symbol;
`,$;H||n.t1i_1?$=V:$=null;var tr=$,W=Ge("dates.ts"),G;n.s1i_1?G=W:G=null;var ar=G,ur=Ge("quantities.ts"),X;n.t1i_1?X=ur:X=null;var Tr=X,wr;C(O)===0?wr=null:wr=O;var dr=wr,Er=rr(nt([tr,ar,Tr,dr]),`
`),br;return C(Er)===0?br=`export {};
`:br=Er,J+br}function Pf(n,r,e,t,i){var a=el(n,Vy(n,e),""),s=Yl(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:Qa(u),f;if(c==null)f=null;else{var v;r:{var h;if(z(c,Z)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof le){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+Hy(n,r,s);if(Rf(n,e)){var m=Vn(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(Bf(n,e))return a+("export interface "+r+" "+Gy(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+oc(n,e,i,"    ",It())+`),
`)+tC(n,e)+aC(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+Vn(n,e,t)+`;
`),x=eC(n,r,e,i);return w+(x??"")}function eC(n,r,e,t){var i=lr(e,"discriminator"),a=i==null?null:tn(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=dn(e,"oneOf"),c=u??dn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=lr(e,"discriminator"),d=h==null?null:lr(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:fa(_),w=m??mr(),x;if(w.i1()){for(var k=q.g1(Wr(v,10)),S=v.x();S.y();){var E=S.z(),I=nl(n,Lr(E)),A;if(I==null)A=null;else{var O=t.o2(I);A=O==null?null:Lr(O)}var L=A,J=L??Lr(E),T=lr(J,"properties"),M=T==null?null:lr(T,o),F=M==null?null:dn(M,"enum"),B=F==null?null:kc(F),D=B instanceof fr?B:null,H=D==null?null:ze(D),V;if(H==null)return null;V=H;var $=V;k.n($)}x=k}else x=w;var tr=x;if(tr.i1())return null;var W=ke(n,ue(o)),G=rr(tr,l,l,l,l,l,TC(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+W+"]]: (value: Extract<"+r+", { "+Pe(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+W+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function tC(n,r){for(var e=Xl(r,"required"),t=lr(r,"properties"),i=t??Nr(),a=q.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=iC(n,Lr(c),e.l1(u)),v;if(f.i1())v=null;else{var h=Pe(u);v="        "+h+": { "+rr(f,l,l,l,l,l,qC)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+rr(_,`
`)+`
    },
`}function iC(n,r,e){var t=ki(n,r).l1("integer"),i=j("required","true"),a;Fy(n,r,e)?a=i:a=null;var s=a,o=pe(n,r,"minLength"),u;o==null?u=null:u=j("minlength",St(o));var c=u,f=pe(n,r,"maxLength"),v;f==null?v=null:v=j("maxlength",St(f));var h=v,d=Eh(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=j("min",d);var m=_,w=Eh(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=j("max",w);var k=x,S=tn(r,"pattern"),E;return S==null?E=null:E=j("pattern",ke(n,ue(S))),nt([s,c,h,m,k,E])}function Fy(n,r,e){if(Ff(n,r)||r.c18("enum")!=null)return!1;var t;if(ki(n,r).l1("string")){var i=pe(n,r,"minLength");t=(i??0)>=1}else t=e&&$y(n,r);return t}function $y(n,r){var e=ki(n,r),t;r:{var i;if(z(e,Z)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function aC(n,r,e,t){if(!Mf(n,e,t,It()))return"";for(var i=Xl(e,"required"),a=lr(e,"properties"),s=a??Nr(),o=q.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=Lr(v),d="value"+(Lf().ue(f)?"."+f:"["+ke(n,ue(f))+"]"),_=ye(sC(n,f,d,h,i.l1(f)),ac(n,h,d,sc(n,f),"        ",0,t));ma(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+rr(m,"",l,l,l,l,OC)+`        return errors;
    },
`}function Mf(n,r,e,t){var i;if(Bf(n,r)){var a=lr(r,"properties"),s=(a??Nr()).q2(),o;r:{var u;if(z(s,Z)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=Lr(f),h,d=M5(),_;n:{var m;if(z(d,Z)?m=d.i1():m=!1,m){_=!1;break n}for(var w=d.x();w.y();){var x=w.z();if(pe(n,v,x)!=null||x==="pattern"&&tn(v,x)!=null){_=!0;break n}}_=!1}if(_)h=!0;else{var k=nl(n,v),S;if(k==null)S=null;else{var E;if(t.l1(k))E=!1;else{var I=e.o2(k),A=I instanceof nr?I:null,O;A==null?O=null:O=Mf(n,A,e,to(t,k)),E=O===!0}S=E}h=S===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function nl(n,r){var e=tn(r,"$ref");if(e!=null)return Es(e,47);var t=Jy(n,r);if(t!=null)return nl(n,t);if(ki(n,r).l1("array")){var i=lr(r,"items"),a;return i==null?a=null:a=nl(n,i),a}return null}function Jy(n,r){var e=dn(r,"oneOf"),t=e??dn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=q.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof nr?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=q.m(),h=c.x();h.y();){var d=h.z();P(ki(n,d),Se("null"))||v.n(d)}f=v}var _=f;return _==null?null:kc(_)}function sC(n,r,e,t,i){var a=ke(n,ue(r)),s=pe(n,t,"minLength"),o=s==null?null:so(s),u=pe(n,t,"maxLength"),c=u==null?null:so(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=pe(n,t,"minimum"),x;w==null?x=null:x=j(w,!1);var k=x,S;if(k==null){var E=pe(n,t,"exclusiveMinimum"),I;E==null?I=null:I=j(E,!0),S=I}else S=k;var A=S,O=pe(n,t,"maximum"),L;O==null?L=null:L=j(O,!1);var J=L,T;if(J==null){var M=pe(n,t,"exclusiveMaximum"),F;M==null?F=null:F=j(M,!0),T=F}else T=J;var B=T,D=q.m();if(Fy(n,t,i)&&$y(n,t)){var H="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Pi(a,n,"Required.");D.n(H)}if(o!=null||c!=null||m!=null){var V="        if (typeof "+e+" === 'string') {";if(D.n(V),o!=null||c!=null){var $="            const length = [..."+e+"].length;";D.n($)}if(o!=null){var tr="            if (length < "+o+") "+Pi(a,n,Ri.n1j(o));D.n(tr)}if(c!=null){var W="            if (length > "+c+") "+Pi(a,n,Ri.o1j(c));D.n(W)}if(m!=null){var G=n.u1i_1,ar=f7();G.n(ar);var ur="            if (!matches("+ke(n,ue(m))+", "+e+")) "+Pi(a,n,Ri.p1j(m));D.n(ur)}var X="        }";D.n(X)}if(A!=null||B!=null){var Tr="        if (typeof "+e+" === 'number') {";if(D.n(Tr),A!=null){var wr=A.hh(),dr=A.ih(),Er=dr?"<=":"<",br="            if ("+e+" "+Er+" "+St(wr)+") "+Pi(a,n,Ri.q1j(wr,dr));D.n(br)}if(B!=null){var kr=B.hh(),Pr=B.ih(),_r=Pr?">=":">",Hr="            if ("+e+" "+_r+" "+St(kr)+") "+Pi(a,n,Ri.r1j(kr,Pr));D.n(Hr)}var an="        }";D.n(an)}if(!D.i1()){var Gr=n.u1i_1,gr=iw();Gr.n(gr)}return D}function ac(n,r,e,t,i,a,s){var o=tn(r,"$ref");if(o!=null){var u=Es(o,47),c=s.o2(u),f=c instanceof nr?c:null,v;if(f==null)return mr();v=f;var h=v;if(!Mf(n,h,s,It()))return mr();var d=n.u1i_1,_=Zi([iw(),c7()]);return ma(d,_),Se(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Nn(u)+".validate("+e+"));")}var m=Jy(n,r);if(m!=null)return ac(n,m,e,t,i,a,s);if(!ki(n,r).l1("array"))return mr();var w=lr(r,"items"),x;if(w==null)return mr();x=w;var k=x,S=a===0?"":""+(a+1|0),E="item"+S,I="index"+S,A=ac(n,k,E,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?mr():ye(ye(Zi([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+E+", "+I+") => {"]),A),Zi([i+"    });",i+"}"]))}function sc(n,r){return Hn(Hn(Hn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function pe(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:ze(o);return u==null?null:h_(u)}function ki(n,r){var e=r.c18("type"),t;if(e instanceof fn){for(var i=q.g1(Wr(e,10)),a=e.x();a.y();){var s=a.z(),o=Wn(s).w17();i.n(o)}t=i}else e instanceof fr?t=Se(e.w17()):t=mr();return t}function Hy(n,r,e){var t=rr(e,"",l,l,l,l,UC(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function oC(n,r,e){for(var t=vr.q4(),i=Vl(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=Yl(n,Lr(o));if(u!=null){var c=Qe(u),f=t.o2(c);if(f==null){var v=new tc(Nn(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();Ji(n,h,d,x,Nn(w),Nn(w),!0)}var k=lr(r,"paths");k==null||Ji(n,h,d,k,"","",!1);for(var S=h.p2(),E=q.m(),I=S.x();I.y();){var A=I.z(),O;(z(t,wn)?t:g()).m2(A)?O=!1:O=!P(A,n.p1i_1),O&&E.n(A)}for(var L=jC(d),J=new vy(L),T=hi(E,J),M=vr.ha(vn(Wr(T,10),16)),F=T.x();F.y();){var B=F.z(),D=me(h,B),H=NC,V=Zw(D,Kx([H,LC]));M.s2(B,V)}for(var $=M,tr=$.q2(),W=new dy(tr),G=tk(W),ar=e.p2(),ur=q.g1(Wr(ar,10)),X=ar.x();X.y();){var Tr=X.z(),wr=Nn(Tr);ur.n(wr)}for(var dr=xc(si(si(ur,"LucideIcon"),"PublicConfig")),Er=vr.ia(t),br=T.x();br.y();){var kr=br.z(),Pr=me($,kr),_r=Nn(Pr.t1j_1),Hr;if(me(G,_r)>1||dr.l1(_r)){var an=Pr.s1j_1,Gr;C(an)===0?Gr=_r:Gr=an+_r,Hr=Gr}else Hr=_r;var gr=Hr,Kr;if(!dr.l1(gr))Kr=gr;else{var Xr=$c(2,DC),un=ms(Xr,PC(gr)),Fr;r:{for(var Qr=un.x();Qr.y();){var _n=Qr.z();if(!dr.l1(_n)){Fr=_n;break r}}throw qr.r("Sequence contains no element matching the predicate.")}Kr=Fr}var hn=Kr;dr.n(hn);var gn=new tc(hn,me(d,kr),!0);Er.s2(kr,gn)}return Er}function Yl(n,r){var e=dn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=q.m(),s=i.x();s.y();){var o=s.z();o instanceof le||a.n(o)}var u=a,c;r:{var f;if(z(u,Z)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=q.g1(Wr(u,10)),m=u.x();m.y();){var w=m.z(),x=Wn(w).w17();_.n(x)}var k=na(_),S;return k.c1()>1?S=k:S=null,S}function Rf(n,r){var e,t,i=N5(),a=r.c18("type"),s=a instanceof fr?a:null;if(Vw(i,s==null?null:ze(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(z(o,Z)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function Bf(n,r){return lr(r,"properties")!=null&&r.c18("allOf")==null}function oc(n,r,e,t,i){var a=lr(r,"properties"),s=a??Nr();if(s.i1())return"{}";for(var o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+Pe(f)+": "+Wt(n,Lr(v),e,t+"    ",i)+",";o.n(h)}var d=o;return rr(si(ye(Se("{"),d),t+"}"),`
`)}function Wt(n,r,e,t,i){if(Ff(n,r))return"null";var a=tn(r,"$ref");if(a!=null){var s=Es(a,47),o=e.o2(s),u=o instanceof nr?o:null,c;if(u==null)return"null";c=u;var f=c;return Bf(n,f)?Nn(s)+".empty()":Rf(n,f)?Nn(s)+"("+Wt(n,f,e,t,to(i,s))+")":i.l1(s)?"null":Wt(n,f,e,t,to(i,s))}var v=r.c18("enum");if(v!=null){var h=iu(Qa(v)),d;h==null?d=null:d=ke(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return ke(n,m);var w=dn(r,"oneOf"),x=w??dn(r,"anyOf");if(x!=null){var k=iu(x),S;k==null?S=null:S=Wt(n,Lr(k),e,t,i);var E=S;return E??"null"}var I=dn(r,"allOf");if(I!=null)return I.c1()===1?Wt(n,Lr(_p(I)),e,t,i):rr(I,", ","{ "," }",l,l,MC(n,e,t,i));var A=r.c18("type"),O;if(A instanceof fn){var L=iu(A),J=L==null?null:Wn(L);O=J==null?null:J.w17()}else A instanceof fr?O=ze(A):O=null;var T=O,M;switch(T){case"string":var F=Hf(r),B;F==null?B=null:B="'' as "+F;var D=B,H;if(D==null){var V=rw(r),$;V==null?$=null:$=me(j5(),V)+" as "+V,H=$}else H=D;var tr=H;M=tr??"''";break;case"integer":case"number":M="0";break;case"boolean":M="false";break;case"array":var W=dn(r,"prefixItems"),G;W==null?G=null:G=rr(W,", ","[","]",l,l,RC(n,e,t,i));var ar=G;M=ar??"[]";break;case"object":M=oc(n,r,e,t,i);break;case null:M=r.c18("properties")!=null?oc(n,r,e,t,i):"null";break;default:M="null";break}return M}function Ff(n,r){var e=r.c18("type"),t=dn(r,"oneOf"),i=t??mr(),a=dn(r,"anyOf"),s=a??mr(),o=ye(i,s),u,c,f,v,h;if(e instanceof fn){var d;r:{var _;if(z(e,Z)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(Wn(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:ze(S))==="true"}if(f)c=!0;else{var E=dn(r,"enum"),I=E??mr(),A;r:{var O;if(z(I,Z)?O=I.i1():O=!1,O){A=!1;break r}for(var L=I.x();L.y();){var J=L.z();if(J instanceof le){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var T;r:{var M;if(z(o,Z)?M=o.i1():M=!1,M){T=!1;break r}for(var F=o.x();F.y();){var B=F.z(),D=B instanceof nr?B:null,H;if(D==null?H=null:H=Ff(n,D),H===!0){T=!0;break r}}T=!1}u=T}return u}function Gy(n,r,e,t){for(var i=Xl(r,"required"),a=lr(r,"properties"),s=a??Nr(),o=q.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=el(n,Vy(n,Lr(v)),t+"    ")+(t+"    "+Pe(f)+h+": "+Vn(n,Lr(v),e,t+"    ")+";");o.n(d)}var _=o;return rr(si(ye(Se("{"),_),t+"}"),`
`)}function Vn(n,r,e,t){t=t===l?"":t;var i=tn(r,"$ref");if(i!=null){var a=Nn(Es(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=Qa(s),u=q.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:ze(v);h==null||u.n(h)}var d=Qe(u),_;if(n.p1i_1.i1()?_=!1:_=P(d,n.p1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=Yl(n,r);if(w!=null){var x=n.r1i_1.o2(Qe(w));if(x!=null){var k=x.k1j_1;e.n(k);var S,E=Qa(s),I;r:{var A;if(z(E,Z)?A=E.i1():A=!1,A){I=!1;break r}for(var O=E.x();O.y();){var L=O.z();if(L instanceof le){I=!0;break r}}I=!1}return I?S=x.k1j_1+" | null":S=x.k1j_1,S}}var J=Qa(s),T=rr(J," | ",l,l,l,l,BC(n)),M;return C(T)===0?M="never":M=T,M}var F=r.c18("const");if(F!=null)return ke(n,F);var B=dn(r,"oneOf");if(B!=null)return zh(n,B,e,t);var D=dn(r,"anyOf");if(D!=null)return zh(n,D,e,t);var H=dn(r,"allOf");if(H!=null)return rr(H," & ",l,l,l,l,FC(n,e,t));var V=r.c18("type"),$;if(V==null)$=r.c18("properties")!=null?Ky(n,r,e,t):"unknown";else if(V instanceof fn){for(var tr=q.g1(Wr(V,10)),W=V.x();W.y();){var G=W.z(),ar=Sh(n,Wn(G).w17(),r,e,t);tr.n(ar)}$=rr(na(tr)," | ")}else $=Sh(n,Wn(V).w17(),r,e,t);return $}function Sh(n,r,e,t,i){var a;switch(r){case"string":var s=Hf(e),o=s??rw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=lC(n,e,t,i);break;case"object":a=Ky(n,e,t,i);break;default:a="unknown";break}return a}function lC(n,r,e,t){var i=dn(r,"prefixItems");if(i!=null)return rr(i,", ","[","]",l,l,$C(n,e,t));var a=r.c18("items"),s=a==null?null:Lr(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=Vn(n,u,e,t);return cs(c," | ")||cs(c," & ")?"("+c+")[]":c+"[]"}function Ky(n,r,e,t){var i=lr(r,"properties");if(!(i??Nr()).i1())return Gy(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof nr?a:null;return s!=null?"Record<string, "+Vn(n,s,e,t)+">":"Record<string, unknown>"}function zh(n,r,e,t){for(var i=q.g1(Wr(r,10)),a=r.x();a.y();){var s=a.z(),o=Vn(n,Lr(s),e,t);i.n(o)}return rr(na(i)," | ")}function ke(n,r){var e;if(r instanceof le)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=Le(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function uC(n,r,e){for(var t=An.e1(),i=vr.q4(),a=q.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=Lr(f),h=xy().x();h.y();){var d=h.z(),_=lr(v,d);if(_!=null){var m=Zy(n,c),w=i.o2(m),x;if(w==null){var k=q.m();i.s2(m,k),x=k}else x=w;var S=x,E=_C(n,c,d,v,_);S.n(E)}}var I=xc(Df());I.h1(i.p2());for(var A=I,O=Vl(i),L=q.g1(O.c1()),J=O.r2().x();J.y();){var T=J.z(),M=T.k2(),F=T.l2(),B=An.e1(),D=rn.f(),H=rr(F,`
`,l,l,l,l,JC(t,n,B,M,a,s,A,D)),V=D.toString()+`
export const `+M+` = {
`+H+`
};
`;L.n(V)}for(var $=L,tr=Qt(t),W=q.m(),G=tr.x();G.y();){for(var ar=G.z(),ur=q.g1(Wr(e,10)),X=e.x();X.y();){var Tr=X.z(),wr=Nn(Tr);ur.n(wr)}ur.l1(ar)&&W.n(ar)}var dr=W,Er,br=Nx(i.q2()),kr;r:{var Pr;if(z(br,Z)?Pr=br.i1():Pr=!1,Pr){kr=!1;break r}for(var _r=br.x();_r.y();){var Hr=_r.z();if(Hr.b1k_1){kr=!0;break r}}kr=!1}kr?Er="ApiError, request, stream":Er="ApiError, request";var an=Er,Gr=n.d1i_1.i1()?an:an+", codeMessages, errorCode",gr=rn.f();gr.ca("import { "+Gr+`, type RequestOptions } from './client.js';
`);var Kr=n.a1i_1!=null?si(dr,"PublicConfig"):dr,Xr=n.d1i_1.i1()?Kr:Qt(si(Kr,"ErrorCode"));Xr.i1()||gr.ca("import type { "+rr(Xr)+` } from './types.js';
`),gr.ca(`
`);for(var un=$.x();un.y();){var Fr=un.z();gr.ca(Fr).ca(`
`)}if(gr.ca(hC(n,a)),n.d1i_1.i1()||gr.ca(L5()),!s.i1()){gr.ca(`export const uploadRules = {
`);for(var Qr=s.r2(),_n=HC,hn=new hy(_n),gn=hi(Qr,hn).x();gn.y();){var Qn=gn.z(),Rn=Qn.k2(),Bn=Qn.l2();gr.ca("    '"+Rn+"': "+Bn+`,
`)}gr.ca(`} as const;

`)}return n.a1i_1!=null&&gr.ca(Ge("public-config.ts")),gr.ca("export const api = { "+rr(Qt(i.p2()))+` };
`),gr.ca(Ge("api-with.ts")),gr.toString()}function cC(n,r){var e=lr(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=Qe(Xl(r,"required")),c=o.r2(),f=rr(c,"; ",l,l,l,l,GC(u));return"{ "+f+" }"}function fC(n,r){var e=r.c18("maxBytes"),t=e==null?null:Wn(e),i=t==null?null:uI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=dn(r,"types"),u;if(o==null)u=null;else{for(var c=q.g1(Wr(o,10)),f=o.x();f.y();){var v=f.z(),h=Le(Wn(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+rr(w)+"]";var k=x,S=r.c18("maxFiles"),E=S==null?null:Wn(S),I=E==null?null:cI(E),A;I==null?A=null:A="maxFiles: "+I;var O=nt([s,k,A]);return"{ "+rr(O)+" }"}function vC(n){return Wy(n,"ErrorCode",n.d1i_1)}function Wy(n,r,e){if(e.i1())return"";var t=rr(e," | ",l,l,l,l,KC),i=rr(e,"",l,l,l,l,WC);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function hC(n,r){var e=rr(r,"",l,l,l,l,YC),t=rr(r,"",l,l,l,l,ZC);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function dC(n,r,e){var t=Jf(r),i=$c(1,VC),a=ms(i,XC(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw qr.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function pC(n,r,e,t){var i=Fx([r,r+rr(e,"",l,l,l,l,QC)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=$c(2,r7),v=ms(f,n7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw qr.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function _C(n,r,e,t,i){for(var a=An.e1(),s=dn(t,"parameters"),o=s??mr(),u=dn(i,"parameters"),c=u??mr(),f=ye(o,c),v=q.g1(Wr(f,10)),h=f.x();h.y();){var d=h.z(),_=Lr(d);v.n(_)}for(var m=v,w=Ey().xe(r),x=yp(ms(w,e7)),k=q.m(),S=x.x();S.y();){var E=S.z(),I;r:{for(var A=m.x();A.y();){var O=A.z();if(tn(O,"name")===E&&tn(O,"in")==="path"){I=O;break r}}I=null}var L=I,J=L==null?null:lr(L,"schema"),T;J==null?T=null:T=Vn(n,J,a);var M=T,F;if(M==null)F=null;else{var B;M==="unknown"||M==="string"?B=null:B=M,F=B}var D=F,H=D??"string | number",V=Xy(E)+": "+H;k.n(V)}var $=lr(i,"requestBody"),tr=$==null?null:lr($,"content"),W=tr==null?null:tr.r2(),G;if(W==null)G=null;else{var ar;r:{for(var ur=W.x();ur.y();){var X=ur.z();if(we(X.k2(),"multipart/")){ar=X;break r}}ar=null}G=ar}var Tr=G,wr=Tr==null?null:Tr.l2(),dr;wr==null?dr=null:dr=wr instanceof nr?wr:null;var Er=dr,br=Er==null?null:lr(Er,"schema"),kr;br==null?kr=null:kr=cC(n,br);var Pr=kr,_r;if(Tr!=null)_r=Pr??"FormData";else{var Hr;tr==null?Hr=null:Hr=Yy(n,tr);var an=Hr,Gr;an==null?Gr=null:Gr=Vn(n,an,a),_r=Gr}var gr=_r;if($!=null){var Kr="body: "+(gr??"unknown");k.n(Kr)}for(var Xr=q.m(),un=m.x();un.y();){var Fr=un.z();tn(Fr,"in")==="query"&&Xr.n(Fr)}var Qr=Xr;if(!Qr.i1()){var _n=rr(Qr,"; ",l,l,l,l,t7(n,a)),hn;r:{var gn;if(z(Qr,Z)?gn=Qr.i1():gn=!1,gn){hn=!1;break r}for(var Qn=Qr.x();Qn.y();){var Rn=Qn.z(),Bn=Rn.c18("required"),he=Bn==null?null:Wn(Bn);if((he==null?null:ze(he))==="true"){hn=!0;break r}}hn=!1}var Te=hn,de="query"+(Te?"":"?")+": { "+_n+" }";k.n(de)}var st="options?: RequestOptions";k.n(st);var ot=x.i1()?Le(r):gC(n,r),qe=lr(i,"x-ktor-svelte-upload"),Fn;qe==null?Fn=null:Fn=fC(n,qe);var Sn=Fn,cn=q.m();cn.n("...options"),Qr.i1()||cn.n("query"),$!=null&&cn.n("body"),Sn!=null&&cn.n("upload: "+Sn),Pr!=null&&cn.n("multipart: true");var In=cn.j6(),Ta=yC(n,i,a),Tt=wC(n,i),lt=mC(n,i,a),xi=e.toUpperCase(),Si=tn(i,"operationId"),ut;Si==null?ut=null:ut=Zl(Si);for(var ct=ut,zi=ct??bC(n,r,e),Ei=nt([tn(i,"summary"),tn(i,"description")]),Ii=q.g1(Wr(Ei,10)),Ci=Ei.x();Ci.y();){var Ai=Ci.z(),qa=b(G_(ks(Ai)?Ai:g()));Ii.n(qa)}for(var Ti=q.m(),qt=Ii.x();qt.y();){var qi=qt.z();C(qi)>0&&Ti.n(qi)}var Oa=na(Ti),Oi="@deprecated",ft;Qy(i)?ft=Oi:ft=null;var Ui=ft,Ua=n.w1i_1,ja=e.toUpperCase(),ji=Ua.o2(ja+" "+r),Ot;ji==null?Ot=null:Ot="@see "+ji;var Ut=ye(Oa,nt([Ui,Ot])),Na=i7(In,Tt,k,Ta,e,ot),Ni=rr(na(lt.q2())," | "),La;C(Ni)===0?La=null:La=Ni;var Da=La;return new ly(xi,r,zi,Ut,x,Na,a,Tt,Sn,Da,fa(lt.p2()))}function gC(n,r){var e=rn.f();e.da(96);for(var t=0,i=Ey().xe(r).x();i.y();){var a=i.z();e.ca(sc(n,ee(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+Xy(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(sc(n,rt(r,t))),e.da(96),e.toString()}function mC(n,r,e){for(var t=lr(r,"responses"),i=(t??Nr()).r2(),a=q.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=wl(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=lr(Lr(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,E=Yy(n,S),I;if(E==null){u=null;break r}else I=E;var A=I;u=j(w,Vn(n,A,e))}var O=u;O==null||a.n(O)}return Vl(I_(a))}function yC(n,r,e){var t=lr(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=q.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();we(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;Ae(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,E=S==null?null:S.l2(),I=E==null?null:Lr(E),A;if(I==null)return"unknown";A=I;var O=A,L=lr(O,"content"),J;if(L==null)return"void";J=L;var T=J,M=lr(T,"text/event-stream");if(M!=null){var F=lr(M,"schema"),B;F==null?B=null:B=Vn(n,F,e);var D=B;return D??"string"}var H=T.p2(),V;r:{for(var $=H.x();$.y();){var tr=$.z();if(cs(tr,"json")){V=tr;break r}}V=null}var W=V;if(W!=null){var G=lr(T,W),ar=G==null?null:lr(G,"schema"),ur;ar==null?ur=null:ur=Vn(n,ar,e);var X=ur;return X??"unknown"}return"string"}function wC(n,r){for(var e=lr(r,"responses"),t=e??Nr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();we(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(z(u,Z)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof nr?h:null,_=d==null?null:lr(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function Yy(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(cs(a,"json")){t=a;break r}}t=null}var s=t,o=s??Xw(r.p2()),u;if(o==null)u=null;else{var c=lr(r,o);u=c==null?null:lr(c,"schema")}return u}function Zy(n,r){var e=n.q1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||we(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=F_($_(r,o),va([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!we(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=Jf(d,Df());var m=_;return m??"root"}function bC(n,r,e){var t=n.q1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||we(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=F_($_(r,u),va([47])),f=q.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=q.m(),m=d.x();m.y();){var w=m.z();we(w,"{")||_.n(w)}var x=Qw(_,1);if(!x.i1()){var k=e==="post"?"":e;return Zl(k+rr(x,"",l,l,l,l,a7))}var S=gp(d),E=(S==null?null:we(S,"{"))===!0;switch(e){case"get":return E?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function Vy(n,r){var e=tn(r,"description"),t;e==null?t=null:t=b(G_(ks(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;Qy(r)?c=u:c=null;var f=c;return nt([o,f])}function el(n,r,e){if(r.i1())return"";var t=J_(Hn(rr(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+_p(t)+` */
`;var i=e+`/**
`;return i+rr(t,"",l,l,l,l,s7(e))+(e+` */
`)}function kC(n){return"'"+n.l1h_1+"'"}function xC(n){return`
`+n.p1g()}function SC(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function lc(n,r,e){var t;if(e instanceof nr){var i=tn(e,"$ref"),a=i==null?null:Es(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=lc(n,r,v.l2());c.s2(h,d)}u=new nr(c)}else u=H5(r,o);t=u}else if(e instanceof fn){for(var _=q.g1(Wr(e,10)),m=e.x();m.y();){var w=m.z(),x=lc(n,r,w);_.n(x)}t=new fn(_)}else t=e;return t}function zC(n,r){var e=n.a1j_1,t=r.a1j_1;return Ct(e,t)}function EC(n){var r=n.b1j_1,e;r==null?e=null:e=", permission: "+Le(r);var t=e,i=t??"";return"    { page: "+Le(n.a1j_1)+i+` },
`}function IC(n){var r=n.k2(),e=n.l2();return Pe(r)+": "+Le(e)}function CC(n,r){var e=n.ch_1,t=r.ch_1;return Ct(e,t)}function AC(n){return n.dh_1}function TC(n){return r=>ke(n,ue(r))}function qC(n){var r=n.hh(),e=n.ih();return r+": "+e}function Eh(n,r,e,t,i,a){var s=pe(n,r,t);if(s!=null)return St(s);var o=pe(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?St(c+a):null}function OC(n){return n+`
`}function Pi(n,r,e){return"addError(errors, "+n+", "+ke(r,ue(e))+");"}function UC(n){return r=>"    "+Pe(r)+": "+ke(n,ue(r))+`,
`}function Ji(n,r,e,t,i,a,s){if(t instanceof fn)for(var o=t.x();o.y();){var u=o.z();Ji(n,r,e,u,i,a,!1)}else if(t instanceof nr){var c=Yl(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=Qe(h),_=r.o2(d),m;if(_==null){var w=q.m();r.s2(d,w),m=w}else m=_;var x=m,k=new oy(i,a);x.n(k);var S=Qe(h),E=e.o2(S);if(E==null){var I=h;e.s2(S,I)}}for(var A=tn(t,"in")!=null?tn(t,"name"):null,O=t.r2().x();O.y();){var L=O.z(),J=L.k2(),T=L.l2(),M;if(J==="properties"?M=T instanceof nr:M=!1,M)for(var F=T.r2().x();F.y();){var B=F.z(),D=B.k2(),H=B.l2();Ji(n,r,e,H,i,D,!1)}else J==="schema"&&A!=null?Ji(n,r,e,T,i,A,!1):J!=="enum"&&Ji(n,r,e,T,i,a,!1)}}}function jC(n){return(r,e)=>{var t=rr(Qt(me(n,r)),"\0"),i=rr(Qt(me(n,e)),"\0");return Ct(t,i)}}function NC(n){return n.s1j_1}function LC(n){return n.t1j_1}function DC(n){return n+1|0}function PC(n){return r=>n+r}function MC(n,r,e,t){return i=>"..."+Wt(n,Lr(i),r,e,t)}function RC(n,r,e,t){return i=>Wt(n,Lr(i),r,e,t)}function BC(n){return De(r=>{var e=n;return ke(e,r)},1,0,8,"literal",[n])}function FC(n,r,e){return t=>Vn(n,Lr(t),r,e)}function $C(n,r,e){return t=>Vn(n,Lr(t),r,e)}function JC(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.a1k_1;ma(c,f);var v=pC(r,u.w1j_1,u.y1j_1,e),h=t+"."+v,d=r.v1i_1,_=new Wl(h,u.u1j_1,u.v1j_1);d.n(_);var m=u.d1k_1;if(m!=null){var w=i,x=new uy(h,m,u.e1k_1);w.n(x)}var k=u.c1k_1;k==null||a.s2(h,k);var S=dC(r,t+"-"+v,s);return o.ca(el(r,u.x1j_1,"")),o.ca("export const "+S+" = "+u.z1j_1(h)+`;
`),el(r,u.x1j_1,"    ")+("    "+Pe(v)+": "+S+",")}}function HC(n,r){var e=n.k2(),t=r.k2();return Ct(e,t)}function Ih(n){return tn(n,"type")==="string"&&tn(n,"format")==="binary"}function GC(n){return r=>{var e=r.k2(),t=r.l2(),i=Lr(t),a;if(Ih(i))a="File";else{var s;if(tn(i,"type")==="array"){var o=lr(i,"items"),u;o==null?u=null:u=Ih(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return Pe(e)+(n.l1(e)?"":"?")+": "+c}}function KC(n){return Le(n)}function WC(n){return"    "+Pe(n)+": "+Le(n)+`,
`}function YC(n){return"    '"+n.f1k_1+"': "+n.g1k_1+`;
`}function ZC(n){return"    '"+n.f1k_1+"': ["+rr(n.h1k_1)+`],
`}function VC(n){return n+1|0}function XC(n){return r=>r===1?n:n+r}function QC(n){return $f(n)}function r7(n){return n+1|0}function n7(n){return r=>n+r}function e7(n){return n.xf().d1(1)}function t7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:Wn(t),a=(i==null?null:ze(i))==="true",s=lr(e,"schema"),o;s==null?o=null:o=Vn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=tn(e,"name"),_=d??"";return Pe(_)+(a?"":"?")+": "+h}}function i7(n,r,e,t,i,a){return s=>{var o=rr(si(n,"operation: '"+s+"'")),u=r?"stream":"request",c=rr(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function a7(n){return $f(n)}function s7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Nn(n){Ar();for(var r=yt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=rr(a,"",l,l,l,l,l7),o;C(s)===0?o="Unnamed":o=s;var u=o;return vx(fb(u))?"_"+u:u}function $f(n){Ar();var r=Zl(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+rt(r,1)}else e=r;return e}function Zl(n){Ar();for(var r=yt.te("[^A-Za-z0-9]+").ff(n,0),e=q.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=q.g1(Wr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(Ss(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+rt(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+rt(c,1)}else m=c;v=m}var k=v;s.n(k)}return rr(s,"")}function Jf(n,r){r=r===l?It():r,Ar();var e=Zl(n);return Lf().ue(e)&&!P5().l1(e)&&!r.l1(e)?e:"_"+e}function Xy(n){return Ar(),Jf(n,D5())}function Pe(n){return Ar(),Lf().ue(n)?n:Le(n)}function Le(n){Ar();var r=rn.f();r.da(39);for(var e=0;e<C(n);){var t=Q(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(yn(t,32)<0||t===8232||t===8233){var i=Y(t);r.ca("\\u"+H_(hx(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function Qy(n){Ar();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Mm(e))===!0}function lr(n,r){Ar();var e=n.c18(r);return e instanceof nr?e:null}function Vl(n){Ar();for(var r=n.r2(),e=u7,t=new _y(e),i=hi(r,t),a=vn(Wr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=j(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function dn(n,r){Ar();var e=n.c18(r);return e instanceof fn?e:null}function tn(n,r){Ar();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:ze(t)}function Xl(n,r){Ar();for(var e=dn(n,r),t=e??mr(),i=q.g1(Wr(t,10)),a=t.x();a.y();){var s=a.z(),o=Wn(s).w17();i.n(o)}return i}function Hf(n){Ar();var r=tn(n,"format"),e;return r==null?e=null:e=qy().o2(r),e}function rw(n){Ar();var r=tn(n,"format"),e;return r==null?e=null:e=ro().o2(r),e}function tl(n,r){Ar();var e;if(n instanceof nr){var t,i=tn(n,"format");if((z(r,wn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(z(a,Z)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(tl(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof fn){var f;r:{var v;if(z(n,Z)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(tl(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function il(n){Ar();var r;if(n instanceof nr){var e;if(Hf(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(z(t,Z)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(il(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof fn){var u;r:{var c;if(z(n,Z)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(il(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Ch;function Gf(){if(Ch)return sr;Ch=!0,nw=new Qs("ADD_ERROR",0,"add-error.ts"),ew=new Qs("ADD_NESTED",1,"add-nested.ts"),tw=new Qs("MATCHES",2,"matches.ts")}var nw,ew,tw;function o7(n){return Ar(),n.h16_1=!0,sr}function l7(n){return Ar(),$f(n)}function u7(n,r){Ar();var e=n.k2(),t=r.k2();return Ct(e,t)}function iw(){return Gf(),nw}function c7(){return Gf(),ew}function f7(){return Gf(),tw}var Ah;function Ar(){Ah||(Ah=!0,Sy=Zi(["get","post","put","patch","delete","head","options"]),zy=yt.te("[A-Za-z_$][A-Za-z0-9_$]*"),Iy=yt.te("\\{([^}]+)\\}"),Ay=aI(l,o7),Ty=Zi(["guardPages","signedInUser","pageGuards"]),Oy=jv([j("date","IsoDate"),j("time","IsoTime"),j("date-time","IsoDateTime")]),Uy=jv([j("duration","IsoDuration"),j("decimal","Decimal")]),jy=gl([j("IsoDuration","'PT0S'"),j("Decimal","'0'")]),Ny=Bi(["string","integer","number"]),Ly=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,Dy=Bi(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),Py=Bi(["body","query","options","encodeURIComponent"]),My=Bi(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),Ry=Zi(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Th(n,r){return r===1?"1 character":""+r+" characters"}var Ri;function St(n){return n%1===0?Ln(n).toString():n.toString()}function v7(){return sw(),aw}var aw;function Ge(n){return sw(),me(v7(),n)}var qh;function sw(){qh||(qh=!0,aw=gl([j("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
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
`),j("form-state.svelte.ts",`import { untrack } from 'svelte';
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
`),j("form.ts",`export interface FieldBounds {
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
`)]))}function b7(n,r){var e;try{for(var t=new py(Se(r)).s1k(n),i=be(),a=J1.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=ue(u.l2());s.s2(c,f)}e=i.k15(a,new nr(oo(j("files",new nr(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=be(),_=J1.t17(),m=h.message;v=d.k15(_,new nr(oo(j("error",ue(m??h.toString())))))}else throw w;e=v}return e}p(ay,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(sy,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(tc,"EnumType");p(oy,"EnumUsage");p(ly,"Endpoint");p(uy,"ErrorEntry");p(cy,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(fy,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(vy,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(hy,"sam$kotlin_Comparator$0",l,l,[pn,kn]);p(dy);p(py,"TypeScriptGenerator");p(Qs,"ValidationHelper");p(Wl,"GeneratedOperation");p(_y,"sam$kotlin_Comparator$0",l,l,[pn,kn]);N(gy,"ConstraintMessages");Ri=new gy;export{b7 as generateTypeScript};
