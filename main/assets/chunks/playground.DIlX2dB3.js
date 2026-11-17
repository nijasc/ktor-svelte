typeof Math.imul>"u"&&(Math.imul=function(r,e){return(r&4294901760)*(e&65535)+(r&65535)*(e|0)|0});typeof ArrayBuffer.isView>"u"&&(ArrayBuffer.isView=function(n){return n!=null&&n.__proto__!=null&&n.__proto__.__proto__===Int8Array.prototype.__proto__});typeof Array.prototype.fill>"u"&&Object.defineProperty(Array.prototype,"fill",{value:function(n){if(this==null)throw new TypeError("this is null or not defined");for(var r=Object(this),e=r.length>>>0,t=arguments[1],i=t>>0,a=i<0?Math.max(e+i,0):Math.min(i,e),s=arguments[2],o=s===void 0?e:s>>0,u=o<0?Math.max(e+o,0):Math.min(o,e);a<u;)r[a]=n,a++;return r}});[Int8Array,Int16Array,Uint16Array,Int32Array,Float32Array,Float64Array].forEach(function(n){typeof n.prototype.fill>"u"&&Object.defineProperty(n.prototype,"fill",{value:Array.prototype.fill})});typeof Math.clz32>"u"&&(Math.clz32=function(n,r){return function(e){var t=e>>>0;return t===0?32:31-(n(t)/r|0)|0}}(Math.log,Math.LN2));typeof String.prototype.endsWith>"u"&&Object.defineProperty(String.prototype,"endsWith",{value:function(n,r){var e=this.toString();(r===void 0||r>e.length)&&(r=e.length),r-=n.length;var t=e.indexOf(n,r);return t!==-1&&t===r}});typeof String.prototype.startsWith>"u"&&Object.defineProperty(String.prototype,"startsWith",{value:function(n,r){return r=r||0,this.lastIndexOf(n,r)===r}});var lr=Math.imul,Nu=ArrayBuffer.isView,vs=Math.clz32;class xc{}class Ce{}class rd{}class nd{constructor(r){this.w_1=r}x(){return $p(this.w_1)}}class ed{constructor(r){this.o1_1=r}x(){return this.o1_1.x()}}class td{constructor(r){this.w1_1=r}x(){return this.w1_1.x()}}let id=class{constructor(){Ju=this,this.y1_1=0,this.z1_1=65535,this.a2_1=55296,this.b2_1=56319,this.c2_1=56320,this.d2_1=57343,this.e2_1=55296,this.f2_1=57343,this.g2_1=2,this.h2_1=16}};class Sn{constructor(r){Bc(),this.x1_1=r}i2(r){return gn(this.x1_1,r)}d(r){return Jb(this,r)}toString(){return yr(this.x1_1)}equals(r){return Hb(this.x1_1,r)}hashCode(){return Gb(this.x1_1)}}class W{}class Oe{}class zn{}class Xe{}class mn{}class ua{}let Mw=class{};class se{constructor(r,e){this.w2_1=r,this.x2_1=e}y2(r){return Ue(this.x2_1,r.x2_1)}d(r){return this.y2(r instanceof se?r:g())}equals(r){return this===r}hashCode(){return sk(this)}toString(){return this.w2_1}}let ad=class{constructor(){Hu=this,this.z2_1=new y(0,-2147483648),this.a3_1=new y(-1,2147483647),this.b3_1=8,this.c3_1=64}};class y extends rd{constructor(r,e){zl(),super(),this.d3_1=r,this.e3_1=e}f3(r){return tr(this,r)}d(r){return this.f3(r instanceof y?r:g())}toString(){return yo(this,10)}equals(r){var e;return r instanceof y?e=ir(this,r):e=!1,e}hashCode(){return Xb(this)}valueOf(){return Zn(this)}}class bn{}class sd{constructor(r){this.i3_1=r,this.h3_1=0}y(){return this.h3_1!==this.i3_1.length}z(){var r;if(this.h3_1!==this.i3_1.length){var e=this.h3_1;this.h3_1=e+1|0,r=this.i3_1[e]}else throw Or.r(""+this.h3_1);return r}}class Rw{constructor(){this.MIN_VALUE=-128,this.MAX_VALUE=127,this.SIZE_BYTES=1,this.SIZE_BITS=8}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Bw{constructor(){this.MIN_VALUE=-32768,this.MAX_VALUE=32767,this.SIZE_BYTES=2,this.SIZE_BITS=16}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class $w{constructor(){this.MIN_VALUE=-2147483648,this.MAX_VALUE=2147483647,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Fw{constructor(){this.MIN_VALUE=14e-46,this.MAX_VALUE=34028235e31,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=4,this.SIZE_BITS=32}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Jw{constructor(){this.MIN_VALUE=5e-324,this.MAX_VALUE=17976931348623157e292,this.POSITIVE_INFINITY=1/0,this.NEGATIVE_INFINITY=-1/0,this.NaN=NaN,this.SIZE_BYTES=8,this.SIZE_BITS=64}b4(){return this.MIN_VALUE}c4(){return this.MAX_VALUE}f4(){return this.POSITIVE_INFINITY}g4(){return this.NEGATIVE_INFINITY}h4(){return this.NaN}d4(){return this.SIZE_BYTES}e4(){return this.SIZE_BITS}}class Hw{}class Gw{}class od{constructor(){e1=this;var r=this;r.j4_1=new Int32Array([48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296])}}class dn{}class ml{toString(){return"kotlin.Unit"}}class ma{static x4(r){return Ei(this,r)}l1(r){var e;r:{var t;if(z(this,W)?t=this.i1():t=!1,t){e=!1;break r}for(var i=this.x();i.y();){var a=i.z();if(P(a,r)){e=!0;break r}}e=!1}return e}j2(r){var e;r:{var t;if(z(r,W)?t=r.i1():t=!1,t){e=!0;break r}for(var i=r.x();i.y();){var a=i.z();if(!this.l1(a)){e=!1;break r}}e=!0}return e}i1(){return this.c1()===0}toString(){return V(this,", ","[","]",l,l,i2(this))}toArray(){return g_(this)}}class Es extends ma{static w4(){return this.x4()}h1(r){this.y4();for(var e=!1,t=r.x();t.y();){var i=t.z();this.n(i)&&(e=!0)}return e}v2(){this.y4();for(var r=this.x();r.y();)r.z(),r.z4()}toJSON(){return this.toArray()}y4(){}}class Sc{constructor(r,e){Hc(this,e),this.c5_1=r,this.a5_1=0,this.b5_1=-1}y(){return this.a5_1<this.c5_1.c1()}z(){if(!this.y())throw Or.j1();var r=this,e=this.a5_1;return this.a5_1=e+1|0,r.b5_1=e,this.c5_1.d1(this.b5_1)}z4(){if(this.b5_1===-1){var r="Call next() or previous() before removing element from the iterator.";throw xr.o3(b(r))}this.c5_1.e5(this.b5_1),this.a5_1=this.b5_1,this.b5_1=-1}}class ld extends Sc{constructor(r,e,t){t===l&&(t={}),t.i5_1=r,super(r,t),Nn.j5(e,this.i5_1.c1()),this.a5_1=e}}class ud extends Es{static k5(){var r=this.w4();return r.d5_1=0,r}n(r){return this.y4(),this.l5(this.c1(),r),!0}v2(){this.y4(),this.m5(0,this.c1())}x(){return new Sc(this)}l1(r){return this.n1(r)>=0}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new ld(this,r)}m5(r,e){var t=this.m1(r),i=e-r|0,a=0;if(a<i)do a=a+1|0,t.z(),t.z4();while(a<i)}equals(r){return r===this?!0:r!=null&&z(r,zn)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class cd{static w5(){var r=Ei(this);return r.u5_1=null,r.v5_1=null,r}m2(r){return rh(this,r)!=null}n2(r){var e=this.r2(),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(P(s.l2(),r)){t=!0;break r}}t=!1}return t}d6(r){if(!(r!=null&&z(r,Xe)))return!1;var e=r.k2(),t=r.l2(),i=(z(this,mn)?this:g()).o2(e);if(!P(t,i))return!1;var a;return i==null?a=!(z(this,mn)?this:g()).m2(e):a=!1,!a}equals(r){if(r===this)return!0;if(!(r!=null&&z(r,mn))||this.c1()!==r.c1())return!1;var e=r.r2(),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!0;break r}for(var a=e.x();a.y();){var s=a.z();if(!this.d6(s)){t=!1;break r}}t=!0}return t}o2(r){var e=rh(this,r);return e==null?null:e.l2()}hashCode(){return Sr(this.r2())}i1(){return this.c1()===0}c1(){return this.r2().c1()}p2(){if(this.u5_1==null){var r=this;r.u5_1=Md.pg(this)}return un(this.u5_1)}toString(){var r=this.r2();return V(r,", ","{","}",l,l,s2(this))}q2(){if(this.v5_1==null){var r=this;r.v5_1=Rd.sg(this)}return un(this.v5_1)}}class fd extends cd{static t5(){var r=this.w5();return r.r5_1=null,r.s5_1=null,r}x5(){return md.z5(this)}a6(){return wd.c6(this)}p2(){var r=this.r5_1,e;if(r==null){var t=this.x5();this.r5_1=t,e=t}else e=r;return e}q2(){var r=this.s5_1,e;if(r==null){var t=this.a6();this.s5_1=t,e=t}else e=r;return e}v2(){this.r2().v2()}t2(r){this.y4();for(var e=this.r2().x();e.y();){var t=e.z(),i=t.k2();if(P(r,i)){var a=t.l2();return e.z4(),a}}return null}y4(){}}class Is extends Es{static e6(){return this.w4()}equals(r){return r===this?!0:r!=null&&z(r,Oe)?ys.f6(this,r):!1}hashCode(){return ys.g6(this)}}let vd=class{constructor(){t1=this;var r=this,e=T.g1(0);e.l_1=!0,r.h6_1=e}};class Cs{}class T extends ud{constructor(r){return new.target.i4(r)}static i4(r){Za();var e=this.k5();return e.k_1=r,e.l_1=!1,e}static m(){Za();var r=[];return this.i4(r)}static g1(r){Za();var e=[],t=this.i4(e);if(!(r>=0)){var i="Negative initial capacity: "+r;throw U.v(b(i))}return t}static f1(r){Za();var e=ki(r);return this.i4(e)}j6(){return this.y4(),this.l_1=!0,this.c1()>0?this:Za().h6_1}k6(r){}c1(){return this.k_1.length}d1(r){return this.k_1[bu(this,r)]}v4(r,e){this.y4(),bu(this,r);var t=this.k_1[r];return this.k_1[r]=e,t}n(r){return this.y4(),this.k_1.push(r),this.d5_1=this.d5_1+1|0,!0}l5(r,e){this.y4(),this.k_1.splice(Jk(this,r),0,e),this.d5_1=this.d5_1+1|0}h1(r){if(this.y4(),r.i1())return!1;for(var e=Fk(this,r.c1()),t=0,i=r.x();i.y();){var a=i.z(),s=t;t=s+1|0;var o=Ds(s);this.k_1[e+o|0]=a}return this.d5_1=this.d5_1+1|0,!0}e5(r){this.y4(),bu(this,r),this.d5_1=this.d5_1+1|0;var e;return r===Ls(this)?e=this.k_1.pop():e=this.k_1.splice(r,1)[0],e}m5(r,e){this.y4(),this.d5_1=this.d5_1+1|0,this.k_1.splice(r,e-r|0)}v2(){this.y4();var r=this;r.k_1=[],this.d5_1=this.d5_1+1|0}n1(r){return nb(this.k_1,r)}toString(){return tk(this.k_1)}l6(){return[].slice.call(this.k_1)}toArray(){return this.l6()}y4(){if(this.l_1)throw ue.p6()}}class hs extends fd{static w6(r){var e=this.t5();return Yk(e),e.u6_1=r,e}static x6(){return this.w6(Qe.i7())}static j7(r,e){return this.w6(Qe.k7(r,e))}static l7(r){return this.j7(r,1)}static m7(r){return this.w6(Qe.n7(r))}v2(){this.u6_1.v2()}m2(r){return this.u6_1.o7(r)}n2(r){return this.u6_1.n2(r)}x5(){return hd.q7(this.u6_1)}a6(){return dd.s7(this.u6_1)}r2(){var r=this.v6_1,e;if(r==null){var t=_d.u7(this.u6_1);this.v6_1=t,e=t}else e=r;return e}o2(r){return this.u6_1.o2(r)}s2(r,e){return this.u6_1.s2(r,e)}t2(r){return this.u6_1.t2(r)}c1(){return this.u6_1.c1()}u2(r){return this.u6_1.u2(r)}}class hd extends Is{constructor(r){return new.target.q7(r)}static q7(r){var e=this.e6();return e.p7_1=r,e}c1(){return this.p7_1.c1()}i1(){return this.p7_1.c1()===0}l1(r){return this.p7_1.o7(r)}v2(){return this.p7_1.v2()}n(r){throw ue.p6()}h1(r){throw ue.p6()}x(){return this.p7_1.v7()}y4(){return this.p7_1.w7()}}class dd extends Es{constructor(r){return new.target.s7(r)}static s7(r){var e=this.w4();return e.r7_1=r,e}c1(){return this.r7_1.c1()}i1(){return this.r7_1.c1()===0}x7(r){return this.r7_1.n2(r)}l1(r){return this.x7(r)}y7(r){throw ue.p6()}n(r){return this.y7(r)}z7(r){throw ue.p6()}h1(r){return this.z7(r)}x(){return this.r7_1.a8()}y4(){return this.r7_1.w7()}}class pd extends Is{static c8(r){var e=this.e6();return e.b8_1=r,e}c1(){return this.b8_1.c1()}i1(){return this.b8_1.c1()===0}e8(r){return this.b8_1.g8(r)}l1(r){return r!=null&&z(r,Xe)?this.e8(r!=null&&z(r,Xe)?r:g()):!1}v2(){return this.b8_1.v2()}f8(r){throw ue.p6()}n(r){return this.f8(r!=null&&z(r,Xe)?r:g())}h1(r){throw ue.p6()}j2(r){return this.b8_1.h8(r)}y4(){return this.b8_1.w7()}}class _d extends pd{constructor(r){return new.target.u7(r)}static u7(r){return this.c8(r)}x(){return this.b8_1.d8()}}class gd{constructor(r){this.i8_1=r}y(){return this.i8_1.y()}z(){return this.i8_1.z().k2()}z4(){return this.i8_1.z4()}}class md extends Is{constructor(r){return new.target.z5(r)}static z5(r){var e=this.e6();return e.y5_1=r,e}j8(r){throw ue.k8("Add is not supported on keys")}n(r){return this.j8(r)}v2(){return this.y5_1.v2()}o7(r){return this.y5_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.y5_1.r2().x();return new gd(r)}c1(){return this.y5_1.c1()}y4(){return this.y5_1.y4()}}class yd{constructor(r){this.l8_1=r}y(){return this.l8_1.y()}z(){return this.l8_1.z().l2()}z4(){return this.l8_1.z4()}}class wd extends Es{constructor(r){return new.target.c6(r)}static c6(r){var e=this.w4();return e.b6_1=r,e}y7(r){throw ue.k8("Add is not supported on values")}n(r){return this.y7(r)}x7(r){return this.b6_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.b6_1.r2().x();return new yd(r)}c1(){return this.b6_1.c1()}y4(){return this.b6_1.y4()}}class _i extends Is{static m8(r){var e=this.e6();return e.a1_1=r,e}static n8(){return this.m8(Qe.i7())}static o8(r){for(var e=this.m8(Qe.p8(r.c1())),t=r.x();t.y();){var i=t.z();e.a1_1.s2(i,!0)}return e}static q8(r,e){return this.m8(Qe.k7(r,e))}static b1(r){return this.q8(r,1)}n(r){return this.a1_1.s2(r,!0)==null}v2(){this.a1_1.v2()}l1(r){return this.a1_1.o7(r)}i1(){return this.a1_1.c1()===0}x(){return this.a1_1.v7()}c1(){return this.a1_1.c1()}}class bd{constructor(){this.c9_1=-1640531527,this.d9_1=8,this.e9_1=2,this.f9_1=-1}}class yl{constructor(r){this.g9_1=r,this.h9_1=0,this.i9_1=-1,this.j9_1=this.g9_1.f7_1,this.k9()}k9(){for(;this.h9_1<this.g9_1.d7_1&&this.g9_1.a7_1[this.h9_1]<0;)this.h9_1=this.h9_1+1|0}y(){return this.h9_1<this.g9_1.d7_1}z4(){if(this.l9(),this.i9_1===-1){var r="Call next() before removing element from the iterator.";throw xr.o3(b(r))}this.g9_1.w7(),T_(this.g9_1,this.i9_1),this.i9_1=-1,this.j9_1=this.g9_1.f7_1}l9(){if(this.g9_1.f7_1!==this.j9_1)throw po.m9()}}class kd extends yl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1];return this.k9(),t}}class xd extends yl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=un(this.g9_1.z6_1)[this.i9_1];return this.k9(),t}}class Sd extends yl{z(){if(this.l9(),this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=new zd(this.g9_1,this.i9_1);return this.k9(),t}z9(){if(this.h9_1>=this.g9_1.d7_1)throw Or.j1();var r=this,e=this.h9_1;this.h9_1=e+1|0,r.i9_1=e;var t=this.g9_1.y6_1[this.i9_1],i=t==null?null:Sr(t),a=i??0,s=un(this.g9_1.z6_1)[this.i9_1],o=s==null?null:Sr(s),u=a^(o??0);return this.k9(),u}aa(r){if(this.h9_1>=this.g9_1.d7_1)throw Or.j1();var e=this,t=this.h9_1;this.h9_1=t+1|0,e.i9_1=t;var i=this.g9_1.y6_1[this.i9_1];P(i,this.g9_1)?r.ca("(this Map)"):r.ba(i),r.da(61);var a=un(this.g9_1.z6_1)[this.i9_1];P(a,this.g9_1)?r.ca("(this Map)"):r.ba(a),this.k9()}}class zd{constructor(r,e){this.v8_1=r,this.w8_1=e,this.x8_1=this.v8_1.f7_1}k2(){return Lv(this),this.v8_1.y6_1[this.w8_1]}l2(){return Lv(this),un(this.v8_1.z6_1)[this.w8_1]}equals(r){var e,t;return r!=null&&z(r,Xe)?t=P(r.k2(),this.k2()):t=!1,t?e=P(r.l2(),this.l2()):e=!1,e}hashCode(){var r=this.k2(),e=r==null?null:Sr(r),t=e??0,i=this.l2(),a=i==null?null:Sr(i);return t^(a??0)}toString(){return ce(this.k2())+"="+ce(this.l2())}}class Ed{}function Kw(n){var r;r:{var e;if(z(n,W)?e=n.i1():e=!1,e){r=!0;break r}for(var t=n.x();t.y();){var i=t.z(),a=i,s;if(a!=null&&z(a,Xe)?s=this.ga(a):s=!1,!s){r=!1;break r}}r=!0}return r}class Qe{constructor(r,e,t,i,a,s){return new.target.ea(r,e,t,i,a,s)}static ea(r,e,t,i,a,s){var o=Ei(this);return o.y6_1=r,o.z6_1=e,o.a7_1=t,o.b7_1=i,o.c7_1=a,o.d7_1=s,o.e7_1=S_(ms,nt(o)),o.f7_1=0,o.g7_1=0,o.h7_1=!1,o}c1(){return this.g7_1}static i7(){return this.p8(8)}static p8(r){return this.ea(y_(r),null,new Int32Array(r),new Int32Array(x_(ms,r)),2,0)}static n7(r){var e=this.p8(r.c1());return e.u2(r),e}static k7(r,e){var t=this.p8(r);if(!(e>0)){var i="Non-positive load factor: "+e;throw U.v(b(i))}return t}n2(r){return Qk(this,r)>=0}o2(r){var e=no(this,r);return e<0?null:un(this.z6_1)[e]}o7(r){return no(this,r)>=0}s2(r,e){var t=A_(this,r),i=E_(this);if(t<0){var a=i[(-t|0)-1|0];return i[(-t|0)-1|0]=e,a}else return i[t]=e,null}u2(r){this.w7(),tx(this,r.r2())}t2(r){this.w7();var e=no(this,r);if(e<0)return null;var t=un(this.z6_1)[e];return T_(this,e),t}v2(){this.w7();var r=0,e=this.d7_1-1|0;if(r<=e)do{var t=r;r=r+1|0;var i=this.a7_1[t];i>=0&&(this.b7_1[i]=0,this.a7_1[t]=-1)}while(t!==e);ko(this.y6_1,0,this.d7_1);var a=this.z6_1;a==null||ko(a,0,this.d7_1),this.g7_1=0,this.d7_1=0,Il(this)}equals(r){var e;if(r===this)e=!0;else{var t;r!=null&&z(r,mn)?t=nx(this,r):t=!1,e=t}return e}hashCode(){for(var r=0,e=this.d8();e.y();)r=r+e.z9()|0;return r}toString(){var r=rn.fa(2+lr(this.g7_1,3)|0);r.ca("{");for(var e=0,t=this.d8();t.y();)e>0&&r.ca(", "),t.aa(r),e=e+1|0;return r.ca("}"),r.toString()}w7(){if(this.h7_1)throw ue.p6()}g8(r){var e=no(this,r.k2());return e<0?!1:P(un(this.z6_1)[e],r.l2())}ga(r){return this.g8(z(r,Xe)?r:g())}v7(){return new kd(this)}a8(){return new xd(this)}d8(){return new Sd(this)}}class vr extends hs{static q4(){var r=this.x6();return r}static ha(r){var e=this.l7(r);return e}static ia(r){var e=this.m7(r);return e}y4(){return this.u6_1.w7()}}class Tn extends _i{static e1(){var r=this.n8();return r}static k1(r){var e=this.o8(r);return e}static ja(r,e){var t=this.q8(r,e);return t}static i(r){return this.ja(r,1)}y4(){return this.a1_1.w7()}}class tt{}class Id{ka(){var r="This continuation is already complete";throw xr.o3(b(r))}la(r){var e="This continuation is already complete";throw xr.o3(b(e))}ma(r){return this.la(r)}toString(){return"This continuation is already complete"}}class zc{constructor(){this.ta_1=null}va(){var r=this.ta_1,e;if(r==null){var t=this.ka().wa(f1),i=t==null?null:t.xa(this),a=i??this;this.ta_1=a,e=a}else e=r;return e}ua(){var r=this.ta_1;r!=null&&r!==this&&un(this.ka().wa(f1)).ya(r),this.ta_1=q_}}class Ec extends zc{constructor(r){super(),this.oa_1=r;var e=this;e.pa_1=l;var t=this,i=this.oa_1;t.qa_1=i==null?null:i.ka()}ka(){return un(this.qa_1)}ra(r){var e=bs(),t=U0(r),i=t==null?this.pa_1.next(r):this.pa_1.throw(t),a=i.done,s=i.value;r:for(;!a;){try{s=s()}catch(f){var o=f,u=this.pa_1.throw(o);s=u.value,a=u.done;continue r}if(s===e)break r;var c=this.pa_1.next(s);s=c.value,a=c.done}return s}sa(r,e){return r=r===l?null:r,e===l?this.ra(r):e.ra.call(this,new ii(r))}la(r){var e=null,t;try{t=this.ra(r)}catch(v){var i;if(v instanceof Error){var a=v;e=a,i=null}else throw v;t=i}var s=t;if(s===bs())return or;this.ua();var o=this.oa_1;if(o!=null)if(e!=null){var u=e,c=j0(u);o.ma(c)}else{var f=s;o.ma(f)}}ma(r){return this.la(r)}}class Cd{constructor(r,e,t){this.eb_1=r,this.fb_1=e,this.gb_1=t}ka(){return this.eb_1}la(r){var e=this.fb_1;MS(r)&&e(r);var t=this.gb_1,i=U0(r);return i==null||t(i),or}ma(r){return this.la(r)}}class ds extends Error{static nb(){var r=ta(this,Error,[null]);return ia(r),Su(r),r}static k3(r){var e=ta(this,Error,[r]);return ia(e,r),Su(e),e}static ob(r,e){var t=ta(this,Error,[r,o_(e)]);return ia(t,r,e),Su(t),t}}class le extends ds{static hb(){var r=this.nb();return xu(r),r}static a9(r){var e=this.k3(r);return xu(e),e}static mb(r,e){var t=this.ob(r,e);return xu(t),t}}class ue extends le{static p6(){var r=this.hb();return Pv(r),r}static k8(r){var e=this.a9(r);return Pv(e),e}}class U extends le{static kb(){var r=this.hb();return ku(r),r}static v(r){var e=this.a9(r);return ku(e),e}static lb(r,e){var t=this.mb(r,e);return ku(t),t}}class Or extends le{static j1(){var r=this.hb();return Mv(r),r}static r(r){var e=this.a9(r);return Mv(e),e}}class Wn extends le{static sb(){var r=this.hb();return Rv(r),r}static tb(r){var e=this.a9(r);return Rv(e),e}}class xr extends le{static ub(){var r=this.hb();return Bv(r),r}static o3(r){var e=this.a9(r);return Bv(e),e}}class po extends le{static m9(){var r=this.hb();return $v(r),r}static u8(r){var e=this.a9(r);return $v(e),e}}class Du extends le{static yb(){var r=this.hb();return Fv(r),r}static zb(r){var e=this.a9(r);return Fv(e),e}}class _o extends Error{static ec(){var r=ta(this,Error,[null]);return ia(r),zu(r),r}static hc(r){var e=ta(this,Error,[r]);return ia(e,r),zu(e),e}static gc(r,e){var t=ta(this,Error,[r,o_(e)]);return ia(t,r,e),zu(t),t}}class ts extends _o{static cc(){var r=this.ec();return Jv(r),r}static fc(r){var e=r==null?null:b(r),t=this.gc(e,r instanceof Error?r:null);return Jv(t),t}}class Lu extends U{static mc(){var r=this.kb();return Hv(r),r}static nc(r){var e=this.v(r);return Hv(e),e}}class Pu extends le{static s3(){var r=this.hb();return ux(r),r}}class Mu extends le{static w3(){var r=this.hb();return cx(r),r}}class Ru extends le{static a4(){var r=this.hb();return fx(r),r}}class Ge{}class ya{equals(r){var e;return r instanceof Ic?e=!1:r instanceof ya?e=P(this.tc(),r.tc())&&this.oc()==r.oc():e=!1,e}hashCode(){var r=this.oc(),e=r==null?null:oe(r);return e??0}toString(){return"class "+this.oc()}}class en extends ya{constructor(r,e,t){super(),this.qc_1=r,this.rc_1=e,this.sc_1=t}tc(){return this.qc_1}oc(){return this.rc_1}pc(r){return this.sc_1(r)}}class Ic extends ya{constructor(){xo=null,super(),xo=this,this.uc_1="Nothing"}oc(){return this.uc_1}pc(r){return!1}tc(){throw ue.k8("There's no native JS class for Nothing type")}equals(r){return r===this}hashCode(){return 0}}class Bu extends ya{constructor(r){super(),this.vc_1=r;var e=this,t=this.vc_1.$metadata$;e.wc_1=t==null?null:t.simpleName}tc(){return this.vc_1}oc(){return this.wc_1}pc(r){return Sk(r,this.vc_1)}}class xi{}class Ad{constructor(){a1=this;var r=this,e=Object;r.anyClass=new en(e,"Any",gx);var t=this,i=Number;t.numberClass=new en(i,"Number",mx),this.nothingClass=_x();var a=this,s=Boolean;a.booleanClass=new en(s,"Boolean",yx);var o=this,u=Number;o.byteClass=new en(u,"Byte",wx);var c=this,f=Number;c.shortClass=new en(f,"Short",bx);var v=this,h=Number;v.intClass=new en(h,"Int",kx);var d=this,_=y;d.longClass=new en(_,"Long",xx);var m=this,w=Number;m.floatClass=new en(w,"Float",Sx);var x=this,k=Number;x.doubleClass=new en(k,"Double",zx);var S=this,E=Array;S.arrayClass=new en(E,"Array",Ex);var I=this,A=String;I.stringClass=new en(A,"String",Ix);var q=this,j=Error;q.throwableClass=new en(j,"Throwable",Cx);var F=this,O=Array;F.booleanArrayClass=new en(O,"BooleanArray",Ax);var L=this,H=Uint16Array;L.charArrayClass=new en(H,"CharArray",Tx);var B=this,$=Int8Array;B.byteArrayClass=new en($,"ByteArray",qx);var R=this,X=Int16Array;R.shortArrayClass=new en(X,"ShortArray",Ox);var J=this,er=Int32Array;J.intArrayClass=new en(er,"IntArray",Ux);var Y=this,G=typeof BigInt>"u"?l:BigInt;Y.bigIntClass=new en(G,"BigInt",jx);var sr=this,ur=Array;sr.longArrayClass=new en(ur,"LongArray",Nx);var Q=this,zr=Float32Array;Q.floatArrayClass=new en(zr,"FloatArray",Dx);var Er=this,mr=Float64Array;Er.doubleArrayClass=new en(mr,"DoubleArray",Lx)}xc(){return this.anyClass}yc(){return this.numberClass}zc(){return this.nothingClass}ad(){return this.booleanClass}bd(){return this.byteClass}cd(){return this.shortClass}dd(){return this.intClass}ed(){return this.longClass}fd(){return this.floatClass}gd(){return this.doubleClass}hd(){return this.arrayClass}id(){return this.stringClass}jd(){return this.throwableClass}kd(){return this.booleanArrayClass}ld(){return this.charArrayClass}md(){return this.byteArrayClass}nd(){return this.shortArrayClass}od(){return this.intArrayClass}pd(){return this.bigIntClass}qd(){return this.longArrayClass}rd(){return this.floatArrayClass}sd(){return this.doubleArrayClass}functionClass(r){var e=Gv()[r],t;if(e==null){var i=Function,a="Function"+r,s=new en(i,a,Px(r));Gv()[r]=s,t=s}else t=e;return t}}class mv extends ds{constructor(r){return new.target.vd(r)}static vd(r){var e=this.k3(r);return cn(e,e.ud_1),e}static wd(){return this.vd(null)}}class rn{constructor(r){return new.target.xd(r)}static xd(r){var e=Ei(this);return e.e_1=r,e}static fa(r){return this.f()}static f(){return this.xd("")}a(){return this.e_1.length}b(r){var e=this.e_1,t;if(0<=r&&r<=(C(e)-1|0))t=rr(e,r);else throw Wn.tb("index: "+r+", length: "+this.a()+"}");return t}c(r,e){return ae(this.e_1,r,e)}da(r){return this.e_1=this.e_1+yr(r),this}g(r){return this.e_1=this.e_1+ce(r),this}yd(r,e,t){return this.zd(r??"null",e,t)}ba(r){return this.e_1=this.e_1+ce(r),this}ae(r){return this.ca(r.toString())}be(r){return this.ca(r.toString())}ca(r){var e=this,t=this.e_1;return e.e_1=t+(r??"null"),this}ce(r,e){return Nn.j5(r,this.a()),this.e_1=ae(this.e_1,0,r)+yr(e)+at(this.e_1,r),this}de(r){if(r<0)throw U.v("Negative new length: "+r+".");if(r<=this.a())this.e_1=ae(this.e_1,0,r);else{var e=this.a();if(e<r)do e=e+1|0,this.e_1=this.e_1+yr(0);while(e<r)}}toString(){return this.e_1}ee(){return this.e_1="",this}fe(r){return Nn.i6(r,this.a()),this.e_1=ae(this.e_1,0,r)+at(this.e_1,r+1|0),this}zd(r,e,t){var i=b(r);return Nn.ge(e,t,i.length),this.e_1=this.e_1+ae(i,e,t),this}}class Td{constructor(){s1=this,this.he_1=new RegExp("[\\\\^$*+?.()|[\\]{}]","g"),this.ie_1=new RegExp("[\\\\$]","g"),this.je_1=new RegExp("\\$","g")}ke(r){var e=this.he_1;return r.replace(e,"\\$&")}le(r){var e=this.je_1;return r.replace(e,"$$$$")}}class St{constructor(r,e){return new.target.se(r,e)}static se(r,e){zo();var t=Ei(this);return t.me_1=r,t.ne_1=it(e),t.oe_1=new RegExp(r,Gx(e,"gu")),t.pe_1=null,t.qe_1=null,t}static te(r){return zo(),this.se(r,Ot())}ue(r){Rx(this.oe_1);var e=this.oe_1.exec(b(r));return e!=null&&e.index===0&&this.oe_1.lastIndex===C(r)}re(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));return D_(this.oe_1,b(r),e,this.oe_1)}ve(r,e,t){return e=e===l?0:e,t===l?this.re(r,e):t.re.call(this,r,e)}we(r,e){if(e<0||e>C(r))throw Wn.tb("Start index out of bounds: "+e+", input length: "+C(r));var t=Jx(this,r,e);return m2(t,Hx)}xe(r,e,t){return e=e===l?0:e,t===l?this.we(r,e):t.we.call(this,r,e)}ye(r,e){var t=this.ve(r);if(t==null)return b(r);var i=0,a=C(r),s=rn.fa(a);do{var o=un(t);s.yd(r,i,o.ze().df()),s.g(e(o)),i=o.ze().ef()+1|0,t=o.z()}while(i<a&&t!=null);return i<a&&s.yd(r,i,a),s.toString()}ff(r,e){lf(e);for(var t=this.xe(r),i=e===0?t:Mb(t,e-1|0),a=T.m(),s=0,o=i.x();o.y();){var u=o.z();a.n(b(jn(r,s,u.ze().df()))),s=u.ze().ef()+1|0}return a.n(b(jn(r,s,C(r)))),a}toString(){return this.oe_1.toString()}}class wl{constructor(r){this.gf_1=r}toString(){return"MatchGroup(value="+this.gf_1+")"}hashCode(){return oe(this.gf_1)}equals(r){return this===r?!0:!(!(r instanceof wl)||this.gf_1!==r.gf_1)}}class qd extends ma{constructor(r,e){return new.target.tf(r,e)}static tf(r,e,t){return t===l&&(t={}),t.kf_1=r,t.lf_1=e,this.x4(t)}c1(){return this.kf_1.length}x(){var r=qb(u2(this));return Ts(r,Wx(this)).x()}d1(r){var e=this.kf_1[r],t;return e==null?t=null:t=new wl(e),t}}class Cc extends ma{static wf(r){return this.x4(r)}x(){return new Ac(this)}n1(r){var e;r:{for(var t=0,i=this.x();i.y();){var a=i.z();if(P(a,r)){e=t;break r}t=t+1|0}e=-1}return e}m1(r){return new jd(this,r)}equals(r){return r===this?!0:r!=null&&z(r,zn)?Nn.n5(this,r):!1}hashCode(){return Nn.o5(this)}}class Od extends Cc{constructor(r){return new.target.vf(r)}static vf(r,e){return e===l&&(e={}),e.uf_1=r,this.wf(e)}c1(){return this.uf_1.length}d1(r){var e=this.uf_1[r];return e??""}}class Ud{constructor(r,e,t,i){this.pf_1=r,this.qf_1=e,this.rf_1=t,this.sf_1=i,this.mf_1=r;var a=this;a.nf_1=qd.tf(e,this),this.of_1=null}ze(){return this.mf_1}xf(){if(this.of_1==null){var r=this;r.of_1=Od.vf(this.qf_1)}return un(this.of_1)}z(){return D_(this.rf_1,this.sf_1,this.pf_1.i1()?Yx(this,this.pf_1.df()):this.pf_1.ef()+1|0,this.rf_1)}}let Ww=class{constructor(r){this.yf_1=r}zf(r,e){return this.yf_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.yf_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}};class mt extends se{constructor(r,e,t){super(r,e),this.cg_1=t}}class Ac{constructor(r,e){Hc(this,e),this.ig_1=r,this.hg_1=0}y(){return this.hg_1<this.ig_1.c1()}z(){if(!this.y())throw Or.j1();var r=this.hg_1;return this.hg_1=r+1|0,this.ig_1.d1(r)}}class jd extends Ac{constructor(r,e,t){t===l&&(t={}),t.lg_1=r,super(r,t),Nn.j5(e,this.lg_1.c1()),this.hg_1=e}}class Nd{constructor(){this.t4_1=2147483639}i6(r,e){if(r<0||r>=e)throw Wn.tb("index: "+r+", size: "+e)}j5(r,e){if(r<0||r>e)throw Wn.tb("index: "+r+", size: "+e)}u4(r,e,t){if(r<0||e>t)throw Wn.tb("fromIndex: "+r+", toIndex: "+e+", size: "+t);if(r>e)throw U.v("fromIndex: "+r+" > toIndex: "+e)}ge(r,e,t){if(r<0||e>t)throw Wn.tb("startIndex: "+r+", endIndex: "+e+", size: "+t);if(r>e)throw U.v("startIndex: "+r+" > endIndex: "+e)}b9(r,e){var t=r+(r>>1)|0;return(t-e|0)<0&&(t=e),(t-2147483639|0)>0&&(t=e>2147483639?2147483647:2147483639),t}o5(r){for(var e=1,t=r.x();t.y();){var i=t.z(),a=lr(31,e),s=i==null?null:Sr(i);e=a+(s??0)|0}return e}n5(r,e){if(r.c1()!==e.c1())return!1;for(var t=e.x(),i=r.x();i.y();){var a=i.z(),s=t.z();if(!P(a,s))return!1}return!0}}class Dd{constructor(r){this.mg_1=r}y(){return this.mg_1.y()}z(){return this.mg_1.z().k2()}}class Ld{constructor(r){this.ng_1=r}y(){return this.ng_1.y()}z(){return this.ng_1.z().l2()}}class Yw{}class Pd extends ma{static qg(r){return this.x4(r)}equals(r){return r===this?!0:r!=null&&z(r,Oe)?ys.f6(this,r):!1}hashCode(){return ys.g6(this)}}class Md extends Pd{constructor(r){return new.target.pg(r)}static pg(r,e){return e===l&&(e={}),e.og_1=r,this.qg(e)}o7(r){return this.og_1.m2(r)}l1(r){return this.o7(r)}x(){var r=this.og_1.r2().x();return new Dd(r)}c1(){return this.og_1.c1()}}class Rd extends ma{constructor(r){return new.target.sg(r)}static sg(r,e){return e===l&&(e={}),e.rg_1=r,this.x4(e)}x7(r){return this.rg_1.n2(r)}l1(r){return this.x7(r)}x(){var r=this.rg_1.r2().x();return new Ld(r)}c1(){return this.rg_1.c1()}}class Bd{g6(r){for(var e=0,t=r.x();t.y();){var i=t.z(),a=e,s=i==null?null:Sr(i);e=a+(s??0)|0}return e}f6(r,e){return r.c1()!==e.c1()?!1:r.j2(e)}}class $d{constructor(){o1=this,this.tg_1=new y(-1478467534,-1720727600)}equals(r){var e;return r!=null&&z(r,zn)?e=r.i1():e=!1,e}hashCode(){return 1}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}d1(r){throw Wn.tb("Empty list doesn't contain element at index "+r+".")}vg(r){return-1}n1(r){return-1}x(){return ws}m1(r){if(r!==0)throw Wn.tb("Index: "+r);return ws}}class Fd{y(){return!1}z(){throw Or.j1()}}class bl{constructor(r,e){this.wg_1=r,this.xg_1=e}toString(){return"IndexedValue(index="+this.wg_1+", value="+ce(this.xg_1)+")"}hashCode(){var r=this.wg_1;return r=lr(r,31)+(this.xg_1==null?0:Sr(this.xg_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof bl)||this.wg_1!==r.wg_1||!P(this.xg_1,r.xg_1))}}class Jd{constructor(r){this.yg_1=r}x(){return new Hd(this.yg_1())}}class Hd{constructor(r){this.zg_1=r,this.ah_1=0}y(){return this.zg_1.y()}z(){var r=this.ah_1;return this.ah_1=r+1|0,new bl(Ds(r),this.zg_1.z())}}class Gd{}class Kd{constructor(){l1=this,this.eh_1=new y(-888910638,1920087921)}equals(r){var e;return r!=null&&z(r,mn)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"{}"}c1(){return 0}i1(){return!0}fh(r){return!1}m2(r){return this.fh(r)}gh(r){return null}o2(r){return this.gh(r)}r2(){return c1()}p2(){return c1()}q2(){return G_()}}class Wd{z(){return this.jh()}}class Yd{constructor(r){this.lh_1=r,this.kh_1=r.mh_1.x()}z(){return this.lh_1.nh_1(this.kh_1.z())}y(){return this.kh_1.y()}}class Zd{constructor(r,e){this.mh_1=r,this.nh_1=e}x(){return new Yd(this)}}class kl{}class Vd{constructor(r){this.oh_1=r.rh_1,this.ph_1=r.qh_1.x()}z(){if(this.oh_1===0)throw Or.j1();return this.oh_1=this.oh_1-1|0,this.ph_1.z()}y(){return this.oh_1>0&&this.ph_1.y()}}class xl{constructor(r,e){if(this.qh_1=r,this.rh_1=e,!(this.rh_1>=0)){var t="count must be non-negative, but was "+this.rh_1+".";throw U.v(b(t))}}v1(r){return r>=this.rh_1?this:new xl(this.qh_1,r)}x(){return new Vd(this)}}class Xd{x(){return ws}v1(r){return ql}}class Qd{constructor(r){this.uh_1=r,this.sh_1=null,this.th_1=-2}z(){if(this.th_1<0&&ih(this),this.th_1===0)throw Or.j1();var r=this.sh_1,e=r??g();return this.th_1=-1,e}y(){return this.th_1<0&&ih(this),this.th_1===1}}class Tc{constructor(r,e){this.vh_1=r,this.wh_1=e}x(){return new Qd(this)}}class rp{constructor(){u1=this,this.xh_1=new y(1993859828,793161749)}equals(r){var e;return r!=null&&z(r,Oe)?e=r.i1():e=!1,e}hashCode(){return 0}toString(){return"[]"}c1(){return 0}i1(){return!0}ug(r){return!1}l1(r){return!1}yh(r){return r.i1()}j2(r){return this.yh(r)}x(){return ws}}class np{zh(r,e){return Ue(r,e)}compare(r,e){var t=r!=null&&Vu(r)?r:g();return this.zh(t,e!=null&&Vu(e)?e:g())}}let ep=class{constructor(r){this.ai_1=r}zf(r,e){return this.ai_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.ai_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}},tp=class{};class Zw{}class ip{constructor(){v1=this,this.bi_1=new y(0,0)}wa(r){return null}hashCode(){return 0}toString(){return"EmptyCoroutineContext"}}class ap extends se{}class sp extends Cc{constructor(r){return new.target.di(r)}static di(r){var e=this.wf();return e.ci_1=r,e}c1(){return this.ci_1.length}d1(r){return Nn.i6(r,this.ci_1.length),this.ci_1[r]}ei(r){if(r===null)return!1;var e=wv(this.ci_1,r.x2_1);return e===r}l1(r){return r instanceof se?this.ei(r instanceof se?r:g()):!1}fi(r){if(r===null)return-1;var e=r.x2_1,t=wv(this.ci_1,e);return t===r?e:-1}n1(r){return r instanceof se?this.fi(r instanceof se?r:g()):-1}}class op{constructor(){h1=this,this.p1_1=new Tt(1,0)}}class As{constructor(r,e,t){if(t===0)throw U.v("Step must be non-zero.");if(t===-2147483648)throw U.v("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");this.r1_1=r,this.s1_1=A2(r,e,t),this.t1_1=t}x(){return new lp(this.r1_1,this.s1_1,this.t1_1)}i1(){return this.t1_1>0?this.r1_1>this.s1_1:this.r1_1<this.s1_1}equals(r){var e;return r instanceof As?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1&&this.t1_1===r.t1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,lr(31,this.r1_1)+this.s1_1|0)+this.t1_1|0}toString(){return this.t1_1>0?""+this.r1_1+".."+this.s1_1+" step "+this.t1_1:""+this.r1_1+" downTo "+this.s1_1+" step "+(-this.t1_1|0)}}class na{}class Tt extends As{constructor(r,e){t0(),super(r,e,1)}df(){return this.r1_1}ef(){return this.s1_1}gi(r){return this.r1_1<=r&&r<=this.s1_1}u1(r){return this.gi(typeof r=="number"?r:g())}i1(){return this.r1_1>this.s1_1}equals(r){var e;return r instanceof Tt?e=this.i1()&&r.i1()||this.r1_1===r.r1_1&&this.s1_1===r.s1_1:e=!1,e}hashCode(){return this.i1()?-1:lr(31,this.r1_1)+this.s1_1|0}toString(){return""+this.r1_1+".."+this.s1_1}}class lp extends Wd{constructor(r,e,t){super(),this.hi_1=t,this.ii_1=e,this.ji_1=this.hi_1>0?r<=e:r>=e,this.ki_1=this.ji_1?r:this.ii_1}y(){return this.ji_1}jh(){var r=this.ki_1;if(r===this.ii_1){if(!this.ji_1)throw Or.j1();this.ji_1=!1}else this.ki_1=this.ki_1+this.hi_1|0;return r}}class up{q1(r,e,t){return new As(r,e,t)}}class cp{constructor(r){this.qi_1=r,this.li_1=-1,this.mi_1=Db(r.si_1,0,C(r.ri_1)),this.ni_1=this.mi_1,this.oi_1=null,this.pi_1=0}z(){if(this.li_1===-1&&lh(this),this.li_1===0)throw Or.j1();var r=this.oi_1,e=r instanceof Tt?r:g();return this.oi_1=null,this.li_1=-1,e}y(){return this.li_1===-1&&lh(this),this.li_1===1}}class fp{constructor(r,e,t,i){this.ri_1=r,this.si_1=e,this.ti_1=t,this.ui_1=i}x(){return new cp(this)}}class Vw{constructor(){this.vi_1=0,this.wi_1=1,this.xi_1=2}}class vp{constructor(r){this.yi_1=r,this.zi_1=0,this.aj_1=0,this.bj_1=0,this.cj_1=0}y(){if(this.zi_1!==0)return this.zi_1===1;if(this.cj_1<0)return this.zi_1=2,!1;var r=-1,e=C(this.yi_1),t=this.aj_1,i=C(this.yi_1);if(t<i)r:do{var a=t;t=t+1|0;var s=rr(this.yi_1,a);if(s===10||s===13){r=s===13&&(a+1|0)<C(this.yi_1)&&rr(this.yi_1,a+1|0)===10?2:1,e=a;break r}}while(t<i);return this.zi_1=1,this.cj_1=r,this.bj_1=e,!0}z(){if(!this.y())throw Or.j1();this.zi_1=0;var r=this.bj_1,e=this.aj_1;this.aj_1=this.bj_1+this.cj_1|0;var t=this.yi_1;return b(jn(t,e,r))}}class hp{constructor(r){this.dj_1=r}x(){return new vp(this.dj_1)}}class dp{constructor(){d1=this,this.ej_1=new y(0,0),this.fj_1=Ct(new y(-1,1073741823)),this.gj_1=Ct(new y(1,-1073741824)),this.hj_1=new y(-16162,2147483647),this.ij_1=new y(-16162,2147483647)}jj(r){var e=new xe(r),t=e.kj_1;if(uf(t)){var i=wn(t);if(!(tr(new y(387905,-1073741824),i)<=0&&tr(i,new y(-387905,1073741823))<=0))throw ts.fc(wn(t).toString()+" ns is out of nanoseconds range")}else{var a,s=wn(t);if(tr(new y(1,-1073741824),s)<0&&tr(s,new y(-1,1073741823))<0)a=!1;else{var o=wn(t);a=!(ir(o,new y(-1,1073741823))||ir(o,new y(1,-1073741824)))}if(a)throw ts.fc(wn(t).toString()+" ms is out of milliseconds range");var u=wn(t);if(tr(new y(1108857478,-1074),u)<=0&&tr(u,new y(-1108857478,1073))<=0)throw ts.fc(wn(t).toString()+" ms is denormalized")}return e.kj_1}lj(r){var e;try{var t=new xe(vS(r,!0)),i=t.kj_1;if(P(new xe(i),new xe(Wr().ij_1))){var a="invariant failed";throw xr.o3(b(a))}e=t.kj_1}catch(o){if(o instanceof U){var s=o;throw U.lb("Invalid ISO duration string format: '"+r+"'.",s)}else throw o}return e}}class xe{constructor(r){Wr(),this.kj_1=r}mj(r){return m0(this.kj_1,r)}d(r){return tS(this,r)}toString(){return lS(this.kj_1)}hashCode(){return cS(this.kj_1)}equals(r){return fS(this.kj_1,r)}}class pp{constructor(){p1=this,this.nj_1=new $u(new y(-1,1073741823),!0),this.oj_1=new $u(new y(-1,2147483647),!1)}}class $u{constructor(r,e){S0(),this.pj_1=r,this.qj_1=e;var t=this,i=this.pj_1;t.rj_1=Ar(i,M(10));var a=this,s=this.pj_1;a.sj_1=It(s,M(10))}}class Xw{}class _p{constructor(){g1=this,this.tj_1=new rt(new y(342103040,-7347440),0),this.uj_1=new rt(new y(-90867457,7347410),999999999)}vj(r,e){var t=new y(1e9,0),i=Ar(e,t);if(tr(qe(e,t),new y(0,0))<0&&!ir(qr(i,t),e)){var a=i;i=Hr(a,Ze())}var s=i,o=hr(r,s);if(tr(qe(r,o),new y(0,0))<0&&tr(qe(r,s),new y(0,0))>=0)return tr(r,new y(0,0))>0?xt().uj_1:xt().tj_1;var u=o,c;if(tr(u,new y(342103040,-7347440))<0)c=this.tj_1;else if(tr(u,new y(-90867457,7347410))>0)c=this.uj_1;else{var f=new y(1e9,0),v=It(e,f),h=hr(v,gs(f,qs(gs(qe(v,f),yi(v,tn(v))),63))),d=Xr(h);c=new rt(u,d)}return c}wj(r,e){return this.vj(r,M(e))}xj(r){return AS(r).yj()}}class rt{constructor(r,e){xt(),this.zj_1=r,this.ak_1=e;var t=this.zj_1;if(!(tr(new y(342103040,-7347440),t)<=0&&tr(t,new y(-90867457,7347410))<=0)){var i="Instant exceeds minimum or maximum instant";throw U.v(b(i))}}bk(r){var e=this.zj_1.f3(r.zj_1);return e!==0?e:Ue(this.ak_1,r.ak_1)}d(r){return this.bk(r instanceof rt?r:g())}equals(r){var e;if(this===r)e=!0;else{var t,i;r instanceof rt?i=ir(this.zj_1,r.zj_1):i=!1,i?t=this.ak_1===r.ak_1:t=!1,e=t}return e}hashCode(){return this.zj_1.hashCode()+lr(51,this.ak_1)|0}toString(){return CS(this)}}class gp{constructor(r,e){this.kk_1=r,this.lk_1=e}yj(){if(tr(this.kk_1,xt().tj_1.zj_1)<0||tr(this.kk_1,xt().uj_1.zj_1)>0)throw Uc.qk("The parsed date is outside the range representable by Instant (Unix epoch second "+this.kk_1.toString()+")");return xt().wj(this.kk_1,this.lk_1)}}class qc{constructor(r,e){this.rk_1=r,this.sk_1=e}yj(){throw Uc.qk(this.rk_1+' when parsing an Instant from "'+ff(this.sk_1,64)+'"')}}class mp{ck(r){var e=r.zj_1,t=new y(86400,0),i=Ar(e,t);if(tr(qe(e,t),new y(0,0))<0&&!ir(qr(i,t),e)){var a=i;i=Hr(a,Ze())}var s=i,o=new y(86400,0),u=It(e,o),c=hr(u,gs(o,qs(gs(qe(u,o),yi(u,tn(u))),63))),f=Xr(c),v,h,d,_=hr(s,M(719528)),m=_;_=Hr(m,M(60));var w=new y(0,0);if(tr(_,new y(0,0))<0){var x=_,k=hr(x,M(1)),S=Ar(k,M(146097)),E=Hr(S,M(1));w=qr(E,M(400));var I=_,A=tn(E),q=qr(A,M(146097));_=hr(I,q)}var j=qr(Un(400),_),F=hr(j,M(591)),O=Ar(F,M(146097)),L=_,H=qr(Un(365),O),B=O,$=Ar(B,M(4)),R=hr(H,$),X=O,J=Ar(X,M(100)),er=Hr(R,J),Y=O,G=Ar(Y,M(400)),sr=Hr(L,hr(er,G));if(tr(sr,new y(0,0))<0){var ur=O;O=Hr(ur,Ze());var Q=_,zr=qr(Un(365),O),Er=O,mr=Ar(Er,M(4)),Ir=hr(zr,mr),br=O,Cr=Ar(br,M(100)),Pr=Hr(Ir,Cr),pr=O,Yr=Ar(pr,M(400));sr=Hr(Q,hr(Pr,Yr))}O=hr(O,w);var an=Xr(sr),Gr=(lr(an,5)+2|0)/153|0;h=((Gr+2|0)%12|0)+1|0,d=(an-((lr(Gr,306)+5|0)/10|0)|0)+1|0;var _r=O,Rr=Gr/10|0,Fr=hr(_r,M(Rr));v=Xr(Fr);var nn=f/3600|0,Br=f-lr(nn,3600)|0,sn=Br/60|0,on=Br-lr(sn,60)|0;return new Oc(v,h,d,nn,sn,on,r.ak_1)}}class Oc{constructor(r,e,t,i,a,s,o){this.dk_1=r,this.ek_1=e,this.fk_1=t,this.gk_1=i,this.hk_1=a,this.ik_1=s,this.jk_1=o}toString(){return"UnboundLocalDateTime("+this.dk_1+"-"+this.ek_1+"-"+this.fk_1+" "+this.gk_1+":"+this.hk_1+":"+this.ik_1+"."+this.jk_1+")"}}class Uc extends U{constructor(r){return new.target.qk(r)}static qk(r){var e=this.v(r);return cn(e,e.pk_1),e}}class yp{}class wp{constructor(r){this.uk_1=r}}class bp extends yp{constructor(r,e){super();var t=this;t.vk_1=xk(r,2)?r:g(),this.wk_1=e;var i=this;i.xk_1=z(this,tt)?this:g(),this.yk_1=Cu()}ka(){return n0()}al(r){this.xk_1=null,this.yk_1=r}ma(r){return this.al(r)}*tk(r,e){return yield()=>{var t=e,i=this;return i.xk_1=z(t,tt)?t:g(),this.wk_1=r,bs()}}zk(){r:for(;;){var r=this.yk_1,e=this.xk_1,t;if(e==null){var i=new ii(r)instanceof ii?r:g();return FS(i),i}else t=e;var a=t;if(P(new ii(Cu()),new ii(r))){var s;try{var o=this.vk_1,u=this.wk_1;s=ax(o,this,u,a)}catch(d){if(d instanceof Error){var c=d,f=j0(c);a.ma(f);continue r}else throw d}var v=s;if(v!==bs()){var h=v;a.ma(h)}}else this.yk_1=Cu(),a.ma(r)}}}class kp extends se{}class jc{constructor(r){this.bl_1=r,this.cl_1=uo}l2(){return this.cl_1===uo&&(this.cl_1=un(this.bl_1)(),this.bl_1=null),this.cl_1}dl(){return this.cl_1!==uo}toString(){return this.dl()?ce(this.l2()):"Lazy value not initialized yet."}}class xp{}class Qw{}class qt{constructor(r){this.el_1=r}equals(r){var e;return r instanceof qt?e=P(this.el_1,r.el_1):e=!1,e}hashCode(){return Sr(this.el_1)}toString(){return"Failure("+this.el_1.toString()+")"}}class ii{constructor(r){this.fl_1=r}toString(){return RS(this.fl_1)}hashCode(){return BS(this.fl_1)}equals(r){return $S(this.fl_1,r)}}class yv extends _o{constructor(r){return new.target.bb(r)}static bb(r){r=r===l?"An operation is not implemented.":r;var e=this.hc(r);return cn(e,e.ab_1),e}}class Sl{constructor(r,e){this.ch_1=r,this.dh_1=e}toString(){return"("+ce(this.ch_1)+", "+ce(this.dh_1)+")"}hh(){return this.ch_1}ih(){return this.dh_1}hashCode(){var r=this.ch_1==null?0:Sr(this.ch_1);return r=lr(r,31)+(this.dh_1==null?0:Sr(this.dh_1))|0,r}equals(r){return this===r?!0:!(!(r instanceof Sl)||!P(this.ch_1,r.ch_1)||!P(this.dh_1,r.dh_1))}}class Sp{constructor(){m1=this,this.dg_1=new zt(new y(0,0),new y(0,0)),this.eg_1=16,this.fg_1=128}gg(r,e){var t;return ir(r,new y(0,0))&&ir(e,new y(0,0))?t=this.dg_1:t=new zt(r,e),t}gl(r){var e;switch(r.length){case 36:e=e2(r);break;case 32:e=t2(r);break;default:throw U.v("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, "+('but was "'+JS(r,64)+'" of length '+r.length))}return e}}class zt{constructor(r,e){Ms(),this.hl_1=r,this.il_1=e}toString(){return this.jl()}jl(){var r=new Int8Array(36);Va(this.hl_1,r,0,0,4);var e=45,t=Z(e);r[8]=Mn(t),Va(this.hl_1,r,9,4,6);var i=45,a=Z(i);r[13]=Mn(a),Va(this.hl_1,r,14,6,8);var s=45,o=Z(s);r[18]=Mn(o),Va(this.il_1,r,19,0,2);var u=45,c=Z(u);return r[23]=Mn(c),Va(this.il_1,r,24,2,8),Zx(r)}equals(r){return this===r?!0:r instanceof zt?ir(this.hl_1,r.hl_1)&&ir(this.il_1,r.il_1):!1}kl(r){var e;if(ir(this.hl_1,r.hl_1)){var o=this.il_1,u=o,c=r.il_1,f=c;e=bt(u,f)}else{var t=this.hl_1,i=t,a=r.hl_1,s=a;e=bt(i,s)}return e}d(r){return this.kl(r instanceof zt?r:g())}hashCode(){return qe(this.hl_1,this.il_1).hashCode()}}class zp{constructor(){y1=this,this.ll_1=0,this.ml_1=-1,this.nl_1=1,this.ol_1=8}}class Me{constructor(r){Ml(),this.pl_1=r}ql(r){return N0(this.pl_1,r)}d(r){return HS(this,r)}toString(){return w1(this.pl_1)}hashCode(){return this.pl_1}equals(r){return GS(this.pl_1,r)}}class Ep{constructor(r){this.rl_1=r,this.sl_1=0}y(){return this.sl_1<this.rl_1.length}tl(){var r;if(this.sl_1<this.rl_1.length){var e=this.sl_1;this.sl_1=e+1|0;var t=this.rl_1[e];r=t}else throw Or.r(this.sl_1.toString());return r}z(){return new Me(this.tl())}}class si{constructor(r){this.ul_1=r}c1(){return vi(this.ul_1)}x(){return YS(this.ul_1)}vl(r){return D0(this.ul_1,r)}l1(r){return ZS(this,r)}i1(){return VS(this.ul_1)}toString(){return XS(this.ul_1)}hashCode(){return QS(this.ul_1)}equals(r){return rz(this.ul_1,r)}}class Ip{constructor(){b1=this,this.wl_1=0,this.xl_1=-1,this.yl_1=4,this.zl_1=32}}class Xn{constructor(r){Rl(),this.am_1=r}bm(r){return L0(this.am_1,r)}d(r){return nz(this,r)}toString(){return k1(this.am_1)}hashCode(){return this.am_1}equals(r){return ez(this.am_1,r)}}class Cp{constructor(r){this.cm_1=r,this.dm_1=0}y(){return this.dm_1<this.cm_1.length}em(){var r;if(this.dm_1<this.cm_1.length){var e=this.dm_1;this.dm_1=e+1|0;var t=this.cm_1[e];r=t}else throw Or.r(this.dm_1.toString());return r}z(){return new Xn(this.em())}}class oi{constructor(r){this.fm_1=r}c1(){return hi(this.fm_1)}x(){return az(this.fm_1)}gm(r){return P0(this.fm_1,r)}l1(r){return sz(this,r)}i1(){return oz(this.fm_1)}toString(){return lz(this.fm_1)}hashCode(){return uz(this.fm_1)}equals(r){return cz(this.fm_1,r)}}class Ap{constructor(){x1=this,this.hm_1=new y(0,0),this.im_1=new y(-1,-1),this.jm_1=8,this.km_1=64}}class Qn{constructor(r){Rs(),this.lm_1=r}mm(r){return M0(this.lm_1,r)}d(r){return fz(this,r)}toString(){return S1(this.lm_1)}hashCode(){return vz(this.lm_1)}equals(r){return hz(this.lm_1,r)}}class Tp{constructor(r){this.nm_1=r,this.om_1=0}y(){return this.om_1<this.nm_1.length}pm(){var r;if(this.om_1<this.nm_1.length){var e=this.om_1;this.om_1=e+1|0;var t=this.nm_1[e];r=t}else throw Or.r(this.om_1.toString());return r}z(){return new Qn(this.pm())}}class li{constructor(r){this.qm_1=r}c1(){return di(this.qm_1)}x(){return _z(this.qm_1)}rm(r){return R0(this.qm_1,r)}l1(r){return gz(this,r)}i1(){return mz(this.qm_1)}toString(){return yz(this.qm_1)}hashCode(){return wz(this.qm_1)}equals(r){return bz(this.qm_1,r)}}class qp{constructor(){z1=this,this.sm_1=0,this.tm_1=-1,this.um_1=2,this.vm_1=16}}class Re{constructor(r){Bl(),this.wm_1=r}xm(r){return B0(this.wm_1,r)}d(r){return kz(this,r)}toString(){return E1(this.wm_1)}hashCode(){return this.wm_1}equals(r){return xz(this.wm_1,r)}}class Op{constructor(r){this.ym_1=r,this.zm_1=0}y(){return this.zm_1<this.ym_1.length}an(){var r;if(this.zm_1<this.ym_1.length){var e=this.zm_1;this.zm_1=e+1|0;var t=this.ym_1[e];r=t}else throw Or.r(this.zm_1.toString());return r}z(){return new Re(this.an())}}class ui{constructor(r){this.bn_1=r}c1(){return pi(this.bn_1)}x(){return Ez(this.bn_1)}cn(r){return $0(this.bn_1,r)}l1(r){return Iz(this,r)}i1(){return Cz(this.bn_1)}toString(){return Az(this.bn_1)}hashCode(){return Tz(this.bn_1)}equals(r){return qz(this.bn_1,r)}}function rb(n){return new Tt(0,Nc(n))}function nb(n,r){if(r==null){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,n[i]==null)return i}while(e<=t)}else{var a=0,s=n.length-1|0;if(a<=s)do{var o=a;if(a=a+1|0,P(r,n[o]))return o}while(a<=s)}return-1}function eb(n,r){return sb(n,r)>=0}function tb(n,r){return ob(n,r)>=0}function ib(n,r){return lb(n,r)>=0}function ab(n,r){return ub(n,r)>=0}function Nc(n){return n.length-1|0}function sb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function ob(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function lb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,ir(r,n[i]))return i}while(e<=t);return-1}function ub(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function cb(n){return n.length-1|0}function Up(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,fb(n,rn.f(),r,e,t,i,a,s).toString()}function fb(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=0,f=n.length;r:for(;c<f;){var v=n[c];if(c=c+1|0,u=u+1|0,u>1&&r.g(e),a<0||u<=a)i0(r,v,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function vb(n){return new Tt(0,_b(n))}function hb(n){var r;switch(n.length){case 0:r=dr();break;case 1:r=On(n[0]);break;default:var e=n.slice();r=El(e);break}return r}function db(n){return new Jd(bb(n))}function jp(n){switch(n.length){case 0:return Ot();case 1:return Vc(n[0]);default:return Np(n,Tn.i(n.length))}}function pb(n){return gb(n,T.m())}function _b(n){return n.length-1|0}function Np(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,r.n(i)}return r}function gb(n,r){for(var e=0,t=n.length;e<t;){var i=n[e];e=e+1|0,i!=null&&r.n(i)}return r}function mb(n,r){return wb(n,r)>=0}function Dp(n){var r;switch(n.length){case 0:throw Or.r("Array is empty.");case 1:r=n[0];break;default:throw U.v("Array has more than one element.")}return r}function yb(n){return n.length===0?X_():new nd(n)}function wb(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;if(e=e+1|0,r===n[i])return i}while(e<=t);return-1}function wv(n,r){return 0<=r&&r<=(n.length-1|0)?n[r]:null}function bb(n){return()=>$p(n)}function V(n,r,e,t,i,a,s){return r=r===l?", ":r,e=e===l?"":e,t=t===l?"":t,i=i===l?-1:i,a=a===l?"...":a,s=s===l?null:s,Lp(n,rn.f(),r,e,t,i,a,s).toString()}function Lp(n,r,e,t,i,a,s,o){e=e===l?", ":e,t=t===l?"":t,i=i===l?"":i,a=a===l?-1:a,s=s===l?"...":s,o=o===l?null:o,r.g(t);var u=0,c=n.x();r:for(;c.y();){var f=c.z();if(u=u+1|0,u>1&&r.g(e),a<0||u<=a)i0(r,f,o);else break r}return a>=0&&u>a&&r.g(s),r.g(i),r}function kb(n){return ps(n,_i.b1(Zr(n,12)))}function xb(n){for(var r=mo(n.c1()),e=0,t=n.x();t.y();){var i=t.z(),a=e;e=a+1|0,r[a]=i}return r}function ci(n){if(z(n,W)){if(n.c1()<=1)return Si(n);var r=ki(n),e=Us(r)?r:g();return Ik(e),El(e)}var t=Pc(n);return Bk(t),t}function ca(n){return Si(Lc(n))}function it(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=Ot();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=Vc(e);break;default:r=ps(n,Tn.i(n.c1()));break}return r}return w2(ps(n,Tn.e1()))}function ze(n,r){if(z(r,W)){var e=T.g1(n.c1()+r.c1()|0);return e.h1(n),e.h1(r),e}else{var t=T.f1(n);return Ea(t,r),t}}function Sb(n){if(n.i1())throw Or.r("List is empty.");return n.d1(0)}function Si(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=dr();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=On(e);break;default:r=Rp(n);break}return r}return K_(Pc(n))}function Dc(n){return n.c1()===1?n.d1(0):null}function zb(n,r){var e=n.x();if(!e.y())throw Or.j1();for(var t=e.z();e.y();){var i=e.z();r.compare(t,i)>0&&(t=i)}return t}function Lc(n){var r;return z(n,W)?r=Tn.k1(n):r=ps(n,Tn.e1()),r}function gi(n,r){var e=T.g1(n.c1()+1|0);return e.h1(n),e.n(r),e}function Eb(n,r){return z(n,W)?n.l1(r):Ab(n,r)>=0}function _u(n){return n.i1()?null:n.d1(0)}function Pp(n){var r;switch(n.c1()){case 0:throw Or.r("List is empty.");case 1:r=n.d1(0);break;default:throw U.v("List has more than one element.")}return r}function Ib(n){if(z(n,zn))return n.i1()?null:n.d1(0);var r=n.x();return r.y()?r.z():null}function Cb(n,r){var e;if(z(n,W)){var t=n.c1()-r|0;if(t<=0)return dr();if(t===1)return On(Tb(n));if(e=T.g1(t),z(n,zn)){if(z(n,Cs)){var i=r,a=n.c1();if(i<a)do{var s=i;i=i+1|0,e.n(n.d1(s))}while(i<a)}else for(var o=n.m1(r);o.y();){var u=o.z();e.n(u)}return e}}else e=T.m();for(var c=0,f=n.x();f.y();){var v=f.z();c>=r?e.n(v):c=c+1|0}return K_(e)}function Mp(n){return n.i1()?null:n.d1(n.c1()-1|0)}function ps(n,r){for(var e=n.x();e.y();){var t=e.z();r.n(t)}return r}function Pc(n){return z(n,W)?Rp(n):ps(n,T.m())}function zi(n,r){if(z(n,W)){if(n.c1()<=1)return Si(n);var e=ki(n),t=Us(e)?e:g();return Ck(t,r),El(t)}var i=Pc(n);return $k(i,r),i}function Rp(n){return T.f1(n)}function Ab(n,r){if(z(n,zn))return n.n1(r);for(var e=0,t=n.x();t.y();){var i=t.z();if(Ds(e),P(r,i))return e;e=e+1|0}return-1}function Tb(n){if(z(n,zn))return Fu(n);var r=n.x();if(!r.y())throw Or.r("Collection is empty.");for(var e=r.z();r.y();)e=r.z();return e}function Fu(n){if(n.i1())throw Or.r("List is empty.");return n.d1(Ls(n))}function qb(n){return new ed(n)}function Ob(n){var r=n.x();if(!r.y())return null;for(var e=r.z();r.y();){var t=r.z();Ue(e,t)>0&&(e=t)}return e}function Mc(n,r){return r<=-2147483648?t0().p1_1:Pe(n,r-1|0)}function Ub(n,r){return sf.q1(n,r,-1)}function Et(n,r){return n>r?r:n}function vn(n,r){return n<r?r:n}function jb(n,r){return sf.q1(n.r1_1,n.s1_1,n.t1_1>0?r:-r|0)}function Rc(n,r,e){if(tr(r,e)>0)throw U.v("Cannot coerce value to an empty range: maximum "+e.toString()+" is less than minimum "+r.toString()+".");return tr(n,r)<0?r:tr(n,e)>0?e:n}function Nb(n,r){return tr(n,r)<0?r:n}function Db(n,r,e){if(r>e)throw U.v("Cannot coerce value to an empty range: maximum "+e+" is less than minimum "+r+".");return n<r?r:n>e?e:n}function gu(n,r){return tr(n,r)>0?r:n}function io(n,r){var e=Lb(r);return e!=null?n.u1(e):!1}function Lb(n){return tr(new y(-2147483648,-1),n)<=0&&tr(n,new y(2147483647,0))<=0?Xr(n):null}function Ts(n,r){return new Zd(n,r)}function Bp(n){var r=n.x();if(!r.y())return dr();var e=r.z();if(!r.y())return On(e);var t=T.m();for(t.n(e);r.y();)t.n(r.z());return t}function Pb(n){return new td(n)}function Mb(n,r){if(!(r>=0)){var e="Requested element count "+r+" is less than zero.";throw U.v(b(e))}var t;return r===0?t=X_():z(n,kl)?t=n.v1(r):t=new xl(n,r),t}function bv(n,r){var e=f2(r),t;e==null?t=null:t=n.c1()+e|0;var i=t,a=Tn.i(i??lr(n.c1(),2));return a.h1(n),Ea(a,r),a}function go(n,r){var e=Tn.i(n.c1()+1|0);return e.h1(n),e.n(r),e}function Rb(n){if(C(n)===0)throw Or.r("Char sequence is empty.");return rr(n,0)}function Bb(n){var r;switch(C(n)){case 0:throw Or.r("Char sequence is empty.");case 1:r=rr(n,0);break;default:throw U.v("Char sequence has more than one element.")}return r}function $b(n,r){if(!(r>=0)){var e="Requested character count "+r+" is less than zero.";throw U.v(b(e))}return at(n,Et(r,n.length))}function Fb(n){var r=n&65535;return r}function gn(n,r){return n-r|0}function Jb(n,r){return gn(n.x1_1,r instanceof Sn?r.x1_1:g())}function ie(n,r){return n-r|0}function Z(n){return n}function yr(n){return String.fromCharCode(n)}function Hb(n,r){return r instanceof Sn?n===r.x1_1:!1}function Gb(n){return n}var Ju;function Bc(){return Ju===l&&new id,Ju}function ce(n){var r=n==null?null:b(n);return r??"null"}function Kb(n,r){var e=n??"null",t=b(r);return e+(t??"null")}var Hu;function zl(){return Hu===l&&new ad,Hu}function Wb(n){var r;return n<0?r=-n:r=n,r}function $p(n){return new sd(n)}function mo(n){var r="BooleanArray",e=Fp(Array(n),!1);return e.$type$=r,e}function Fp(n,r){var e=0,t=n.length-1|0;if(e<=t)do{var i=e;e=e+1|0,n[i]=r}while(i!==t);return n}function _s(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function mi(n){var r="LongArray",e=Fp(Array(n),new y(0,0));return e.$type$=r,e}function wa(n){var r="CharArray",e=new Uint16Array(n);return e.$type$=r,e}function mu(){return ba(),Jp}var Jp;function Hp(){return ba(),Gp}var Gp;function Gu(){return ba(),Kp}var Kp;function Wp(){return ba(),Yp}var Yp;function Yb(){return ba(),Zp}var Zp;function Zb(n){return ba(),(n|0)===n?wo(n):(Hp()[0]=n,lr(Gu()[Yb()],31)+Gu()[Wp()]|0)}var kv;function ba(){kv||(kv=!0,Jp=new ArrayBuffer(8),Gp=new Float64Array(mu()),new Float32Array(mu()),Kp=new Int32Array(mu()),Hp()[0]=-1,Yp=Gu()[0]!==0?1:0,Zp=1-Wp()|0)}function Ye(){return gr(),Vp}var Vp;function Ze(){return gr(),Xp}var Xp;function xv(){return gr(),Qp}var Qp;function Vb(){return gr(),r_}var r_;function Le(){return gr(),n_}var n_;function Sv(){return gr(),e_}var e_;function tr(n,r){if(gr(),ir(n,r))return 0;var e=ke(n),t=ke(r);return e&&!t?-1:!e&&t?1:ke(Hr(n,r))?-1:1}function Ku(n){return gr(),Mn(n.d3_1)}function Wu(n){return gr(),Kc(n.d3_1)}function Xr(n){return gr(),n.d3_1}function Zn(n){return gr(),n.e3_1*4294967296+Qb(n)}function yo(n,r){if(gr(),fi(n))return"0";if(ke(n))if(ir(n,Le())){var e=M(r),t=Ar(n,e),i=Xr(Hr(qr(t,e),n)),a=yo(t,r);return a+i.toString(r)}else return"-"+yo(tn(n),r);for(var s=r===2?31:r<=10?9:r<=21?7:r<=35?6:5,o=fa(Math.pow(r,s)),u=n,c="";;){var f=Ar(u,o),v=Xr(Hr(u,qr(f,o))),h=v.toString(r);if(u=f,fi(u))return h+c;for(;h.length<s;)h="0"+h;c=h+c}}function ir(n,r){return gr(),n.e3_1===r.e3_1&&n.d3_1===r.d3_1}function Xb(n){return gr(),n.d3_1^n.e3_1}function M(n){return gr(),new y(n,n<0?-1:0)}function ke(n){return gr(),n.e3_1<0}function Hr(n,r){return gr(),hr(n,tn(r))}function Qb(n){return gr(),n.d3_1>=0?n.d3_1:4294967296+n.d3_1}function fi(n){return gr(),n.e3_1===0&&n.d3_1===0}function qr(n,r){if(gr(),fi(n))return Ye();if(fi(r))return Ye();if(ir(n,Le()))return zv(r)?Le():Ye();if(ir(r,Le()))return zv(n)?Le():Ye();if(ke(n)){var e;return ke(r)?e=qr(tn(n),tn(r)):e=tn(qr(tn(n),r)),e}else if(ke(r))return tn(qr(n,tn(r)));if(Ev(n,Sv())&&Ev(r,Sv()))return fa(Zn(n)*Zn(r));var t=n.e3_1>>>16|0,i=n.e3_1&65535,a=n.d3_1>>>16|0,s=n.d3_1&65535,o=r.e3_1>>>16|0,u=r.e3_1&65535,c=r.d3_1>>>16|0,f=r.d3_1&65535,v=0,h=0,d=0,_=0;return _=_+lr(s,f)|0,d=d+(_>>>16|0)|0,_=_&65535,d=d+lr(a,f)|0,h=h+(d>>>16|0)|0,d=d&65535,d=d+lr(s,c)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+lr(i,f)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(a,c)|0,v=v+(h>>>16|0)|0,h=h&65535,h=h+lr(s,u)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(((lr(t,f)+lr(i,c)|0)+lr(a,u)|0)+lr(s,o)|0)|0,v=v&65535,new y(d<<16|_,v<<16|h)}function tn(n){return gr(),hr($c(n),new y(1,0))}function fa(n){if(gr(),Ns(n))return Ye();if(n<=-9223372036854776e3)return Le();if(n+1>=9223372036854776e3)return Vb();if(n<0)return tn(fa(-n));var r=4294967296,e=n%r|0,t=n/r|0;return new y(e,t)}function hr(n,r){gr();var e=n.e3_1>>>16|0,t=n.e3_1&65535,i=n.d3_1>>>16|0,a=n.d3_1&65535,s=r.e3_1>>>16|0,o=r.e3_1&65535,u=r.d3_1>>>16|0,c=r.d3_1&65535,f=0,v=0,h=0,d=0;return d=d+(a+c|0)|0,h=h+(d>>>16|0)|0,d=d&65535,h=h+(i+u|0)|0,v=v+(h>>>16|0)|0,h=h&65535,v=v+(t+o|0)|0,f=f+(v>>>16|0)|0,v=v&65535,f=f+(e+s|0)|0,f=f&65535,new y(h<<16|d,f<<16|v)}function zv(n){return gr(),(n.d3_1&1)===1}function Ev(n,r){return gr(),tr(n,r)<0}function $c(n){return gr(),new y(~n.d3_1,~n.e3_1)}function Ar(n,r){if(gr(),fi(r))throw ds.k3("division by zero");if(fi(n))return Ye();if(ir(n,Le())){if(ir(r,Ze())||ir(r,xv()))return Le();if(ir(r,Le()))return Ze();var e=qs(n,1),t=Vn(Ar(e,r),1);if(ir(t,Ye()))return ke(r)?Ze():xv();var i=Hr(n,qr(r,t));return hr(t,Ar(i,r))}else if(ir(r,Le()))return Ye();if(ke(n)){var a;return ke(r)?a=Ar(tn(n),tn(r)):a=tn(Ar(tn(n),r)),a}else if(ke(r))return tn(Ar(n,tn(r)));for(var s=Ye(),o=n;nk(o,r);){for(var u=Zn(o)/Zn(r),c=Math.max(1,Math.floor(u)),f=Math.ceil(Math.log(c)/Math.LN2),v=f<=48?1:Math.pow(2,f-48),h=fa(c),d=qr(h,r);ke(d)||rk(d,o);)c=c-v,h=fa(c),d=qr(h,r);fi(h)&&(h=Ze()),s=hr(s,h),o=Hr(o,d)}return s}function qs(n,r){gr();var e=r&63;return e===0?n:e<32?new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>e):new y(n.e3_1>>(e-32|0),n.e3_1>=0?0:-1)}function Vn(n,r){gr();var e=r&63;return e===0?n:e<32?new y(n.d3_1<<e,n.e3_1<<e|(n.d3_1>>>(32-e|0)|0)):new y(0,n.d3_1<<(e-32|0))}function rk(n,r){return gr(),tr(n,r)>0}function nk(n,r){return gr(),tr(n,r)>=0}function It(n,r){return gr(),Hr(n,qr(Ar(n,r),r))}function gs(n,r){return gr(),new y(n.d3_1&r.d3_1,n.e3_1&r.e3_1)}function yi(n,r){return gr(),new y(n.d3_1|r.d3_1,n.e3_1|r.e3_1)}function qe(n,r){return gr(),new y(n.d3_1^r.d3_1,n.e3_1^r.e3_1)}function Fc(n,r){gr();var e=r&63;if(e===0)return n;if(e<32)return new y(n.d3_1>>>e|0|n.e3_1<<(32-e|0),n.e3_1>>>e|0);var t;return e===32?t=new y(n.e3_1,0):t=new y(n.e3_1>>>(e-32|0)|0,0),t}function Un(n){gr();var r;return n instanceof y?r=n:r=fa(n),r}function ea(n){return gr(),wi(n)&&n.$type$==="LongArray"}function ek(n){return gr(),n!=null?ea(n):!1}var Iv;function gr(){if(!Iv){Iv=!0,Vp=M(0),Xp=M(1),Qp=M(-1),r_=new y(-1,2147483647),n_=new y(0,-2147483648),e_=M(16777216);var n=Array;new en(n,"LongArray",ek)}}function rr(n,r){var e;return Jc(n)?e=K(n,r):e=n.b(r),e}function Jc(n){return typeof n=="string"}function K(n,r){return n.charCodeAt(r)}function C(n){var r;return Jc(n)?r=n.length:r=n.a(),r}function jn(n,r,e){var t;return Jc(n)?t=ae(n,r,e):t=n.c(r,e),t}function tk(n){return Up(n,", ","[","]",l,l,ik)}function t_(n,r){var e=n,t=r;if(e===t)return!0;if(e==null||t==null||!v_(t)||e.length!=t.length)return!1;var i=0,a=e.length;if(i<a)do{var s=i;if(i=i+1|0,!P(e[s],t[s]))return!1}while(i<a);return!0}function i_(n){var r=n;if(r==null)return 0;var e=1,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0,e=lr(e,31)+Sr(r[a])|0}while(t<i);return e}function ik(n){return b(n)}function Ue(n,r){var e;switch(typeof n){case"number":var t;typeof r=="number"?t=Cv(n,r):r instanceof y?t=Cv(n,Zn(r)):t=Av(n,r),e=t;break;case"string":case"boolean":case"bigint":e=Av(n,r);break;default:e=ak(n,r);break}return e}function Cv(n,r){var e;if(n<r)e=-1;else if(n>r)e=1;else if(n===r){var t;if(n!==0)t=0;else{var i=1/n,a;i===1/r?a=0:i<0?a=-1:a=1,t=a}e=t}else n!==n?e=r!==r?0:1:e=-1;return e}function Av(n,r){return n<r?-1:n>r?1:0}function ak(n,r){return n.d(r)}function sk(n){return Yu(n)}function Yu(n){if(!("kotlinHashCodeValue$"in n)){var r=a_(),e=new Object;e.value=r,e.enumerable=!1,Object.defineProperty(n,"kotlinHashCodeValue$",e)}return n.kotlinHashCodeValue$}function a_(){return Math.random()*4294967296|0}function b(n){var r;return n==null?r="null":v_(n)?r="[...]":typeof n.toString!="function"?r=ok(n):r=n.toString(),r}function ok(n){return Object.prototype.toString.call(n)}function P(n,r){if(n==null)return r==null;if(r==null)return!1;if(typeof n=="object"&&typeof n.equals=="function")return n.equals(r);if(n!==n)return r!==r;if(typeof n=="number"&&typeof r=="number"){var e;if(n===r){var t;if(n!==0)t=!0;else{var i=1/n;t=i===1/r}e=t}else e=!1;return e}if(Zu(n)&&Zu(r)){if(n===r)return!0;if(n.$id!=r.$id||n.$flags!=r.$flags||n.$arity!=r.$arity)return!1;if(n.$bound==null&&r.$bound==null||n.$bound===r.$bound)return!0;if(!wi(n.$bound)||!wi(r.$bound))return!1;var a=n.$bound,s=r.$bound;return t_(a,s)}return n===r}function Sr(n){if(n==null)return 0;var r=typeof n,e;switch(r){case"object":e=typeof n.hashCode=="function"?n.hashCode():Yu(n);break;case"function":e=Zu(n)?lk(n):Yu(n);break;case"number":e=Zb(n);break;case"boolean":e=s_(n);break;case"string":e=oe(String(n));break;case"bigint":e=uk(n);break;case"symbol":e=ck(n);break;default:e=function(){throw new Error("Unexpected typeof `"+r+"`")}();break}return e}function lk(n){var r=n.$flags;r=lr(31,r)+Sr(n.$id)|0;var e=lr(31,r),t=n.$arity;r=e+(t??-1)|0;var i=n.$bound;if(i!=null&&wi(i)){var a=i;r=lr(31,r)+i_(a)|0}return r}function s_(n){return n?1231:1237}function oe(n){var r=0,e=n.length,t=0,i=e-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n.charCodeAt(a);r=lr(r,31)+s|0}while(a!==i);return r}function uk(n){var r=BigInt(32),e=BigInt(4294967295),t=Wb(n),i=0,a;n<0?a=-1:a=1;var s=a;r:for(;;){if(t==0)break r;var o=t&e,u=Number(o);i=lr(31,i)+u|0,t=t>>r}return lr(i,s)}function ck(n){var r=fk(n)?vk():hk(),e=r.get(n);if(e!==l)return e;var t=a_();return r.set(n,t),t}function fk(n){return Symbol.keyFor(n)!=l}function vk(){return yu===l&&(yu=new Map),yu}function hk(){return wu===l&&(wu=new WeakMap),wu}var yu,wu;function cn(n,r){Error.captureStackTrace!=null?Error.captureStackTrace(n,r):n.stack=new Error().stack}function Lr(n){return n.prototype}function Ei(n,r){var e=Object.create(n.prototype);return Hc(e,r),e}function Hc(n,r){r!==l&&Object.assign(n,r)}function ta(n,r,e,t){var i;i=n;var a=i;return Reflect.construct(r,e,a)}function dk(n){return n===l}function o_(n){return{cause:n}}function ia(n,r,e){if(n.name=Object.getPrototypeOf(n).constructor.name,r==null){var t;if(dk(r)){var i=e==null?null:e.toString();t=i??l}else t=l;n.message=t}}function pk(){return u_(),l_}var l_;function _k(n,r){return u_(),n!=l&&n[pk()]?r(n):ox(r)}var Tv;function u_(){Tv||(Tv=!0,l_=tt.Symbol)}function Os(){throw Pu.s3()}function gk(){throw Mu.w3()}function g(){throw Ru.a4()}function un(n){var r;return n==null?gk():r=n,r}function c_(n,r,e,t,i,a){var s=l;return{kind:n,simpleName:r,associatedObjectKey:t,associatedObjects:i,suspendArity:a,$kClass$:s,defaultConstructor:e}}function p(n,r,e,t,i,a,s,o){var u="class";Gc(u,n,r,e,t,i,a,s,o)}function Gc(n,r,e,t,i,a,s,o,u){var c=c_(n,e,t,o,u,s);r.$metadata$=c;var f=r.prototype;if(a!=null)for(var v=0,h=a.length;v<h;){var d=a[v];v=v+1|0,Object.assign(f,d.prototype),f[d.Symbol]=!0}n==="interface"&&(r.Symbol=Symbol())}function D(n,r,e,t,i,a,s,o){var u="object";Gc(u,n,r,e,t,i,a,s,o)}function Mr(n,r,e,t,i,a,s,o){var u="interface";Gc(u,n,r,e,t,i,a,s,o)}function Qr(n,r,e,t){D(n,"Companion",l,r,e,t,l,l)}function mk(n){var r=n.length,e=Array(r),t=0,i=r-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=n[a];s!=null&&Us(s)?e[a]=s:e[a]=[].slice.call(s)}while(a!==i);return[].concat.apply([],e)}function Mn(n){return n<<24>>24}function wo(n){var r;return n instanceof y?r=Xr(n):r=yk(n),r}function yk(n){var r;return n>2147483647?r=2147483647:n<-2147483648?r=-2147483648:r=n|0,r}function Kc(n){return n<<16>>16}function Ke(n){var r=wo(n),e=Kc(r);return Fb(e)}function Pe(n,r){return new Tt(n,r)}function wk(){return xa(),f_}var f_;function Ki(){return xa(),c_("class",l,l,l,l,l)}function ka(n,r,e,t,i,a){return xa(),t.get=t,t.set=i,t.callableName=n,bk(t,kk(r,i),e)}function bk(n,r,e){xa(),n.$metadata$=r,n.constructor=n;var t=e.Symbol;return t!=null&&(n[t]=!0),Object.assign(n,e.prototype),n}function kk(n,r){return xa(),wk()[n][r==null?0:1]}function Be(n,r,e,t,i,a){return xa(),n.callableName=i,n.$flags=e,n.$arity=r,n.$id=t,n.$bound=a,n}var qv;function xa(){if(!qv){qv=!0;var n=[Ki(),Ki()],r=[Ki(),Ki()];f_=[n,r,[Ki(),Ki()]]}}function v_(n){return wi(n)||Nu(n)}function wi(n){return Array.isArray(n)}function Zu(n){return typeof n=="function"&&n.$flags!=null&&n.$arity!=null}function z(n,r){return n[r.Symbol]===!0}function Us(n){var r;return wi(n)?r=!n.$type$:r=!1,r}function xk(n,r){var e=typeof n;if(e==="function")return n.$arity===r;var t=n==null?null:n.constructor,i=t==null?null:t.$metadata$,a=i==null?null:i.suspendArity,s;if(a==null)return!1;s=a;var o=s,u=!1,c=0,f=o.length;r:for(;c<f;){var v=o[c];if(c=c+1|0,r===v){u=!0;break r}}return u}function h_(n){var r;return typeof n=="number"?r=!0:r=n instanceof y,r}function Vu(n){var r=typeof n;return r==="string"||r==="boolean"||h_(n)||z(n,Ce)}function js(n){return typeof n=="string"||z(n,xc)}function is(n){return wi(n)&&n.$type$==="BooleanArray"}function as(n){return n instanceof Int8Array}function ss(n){return n instanceof Int16Array}function os(n){var r;return n instanceof Uint16Array?r=n.$type$==="CharArray":r=!1,r}function ls(n){return n instanceof Int32Array}function us(n){return n instanceof Float32Array}function cs(n){return n instanceof Float64Array}function Sk(n,r){if(r===Object)return n!=null;var e=typeof n,t=typeof r;if(n==null||r==null||e!=="object"&&e!=="function")return!1;var i=t==="object"?zk(r):r,a=i.$metadata$;return(a==null?null:a.kind)==="interface"?z(n,i):n instanceof i}function zk(n){return Object.getPrototypeOf(n)}var l;function bi(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,new Int32Array(r));else if(r>t){var a=new Int32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function d_(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return O_(n,r,null)}function Wc(n,r){return t_(n,r)}function Ek(n){return i_(n)}function El(n){return T.i4(n)}function Xu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,_s(r));else if(r>t){var a=_s(r);a.set(n),i=a}else i=n.slice(0,r);var s=i;return s.$type$="CharArray",s}function Qu(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,new Float64Array(r));else if(r>t){var a=new Float64Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function r1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,new Float32Array(r));else if(r>t){var a=new Float32Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function va(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}return Ii(n,mi(r))}function ha(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,new Int16Array(r));else if(r>t){var a=new Int16Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function da(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t=n.length,i;if(r<16||t<16)i=Ii(n,new Int8Array(r));else if(r>t){var a=new Int8Array(r);a.set(n),i=a}else i=n.slice(0,r);return i}function n1(n,r){if(!(r>=0)){var e="Invalid new array size: "+r+".";throw U.v(b(e))}var t="BooleanArray",i=O_(n,r,!1);return i.$type$=t,i}function Ik(n){n.length>1&&Hk(n)}function Ck(n,r){n.length>1&&w_(n,r)}function p_(n){var r=Z(n),e=Tk(Ov().j4_1,r),t=r-Ov().j4_1[e]|0;return t<10?t:-1}function Ak(n){return p_(n)>=0}function Tk(n,r){for(var e=0,t=n.length-1|0,i=-1,a=0;e<=t;)if(i=(e+t|0)/2|0,a=n[i],r>a)e=i+1|0;else{if(r===a)return i;t=i-1|0}return i-(r<a?1:0)|0}var e1;function Ov(){return e1===l&&new od,e1}function qk(n){var r=Z(n);return(9<=r?r<=13:!1)||(28<=r?r<=32:!1)||r===160||r>4096&&(r===5760||(8192<=r?r<=8202:!1)||r===8232||r===8233||r===8239||r===8287||r===12288)}function Ok(n){for(var r=vr.q4(),e=n.r4();e.y();){var t=e.z(),i=n.s4(t),a=r.o2(i),s=(a==null&&!r.m2(i)?0:a)+1|0;r.s2(i,s)}return r}function Ns(n){return n!==n}function Uk(n){var r;return n===0?r=0:r=1<<(31-vs(n)|0),r}function jk(n){return n===1/0||n===-1/0}function Uv(n){var r=n.e3_1,e;if(r===0){var t=n.d3_1;e=32+vs(t)|0}else e=vs(r);return e}function Yc(n){return!Nk(n)&&!Dk(n)}function Zc(n){return!jk(n)&&!Ns(n)}function __(n){var r=n.d3_1;return r===0?32+jv(n.e3_1)|0:jv(r)}function Nk(n){return n===1/0||n===-1/0}function Dk(n){return n!==n}function jv(n){var r=~(n|(-n|0));return 32-vs(r)|0}var or;function aa(n,r){var e;if(n===r)e=0;else{var t=n>>>0;t<r>>>0?e=-1:e=1}return e}function bt(n,r){return qe(n,new y(0,-2147483648)).f3(qe(r,new y(0,-2147483648)))}function Lk(n,r){var e=n>>>0,t=e/(r>>>0)|0;return t}function Pk(n,r){var e=n,t=r;if(tr(t,new y(0,0))<0){var i;return bt(n,r)<0?i=new y(0,0):i=new y(1,0),i}if(tr(e,new y(0,0))>=0)return Ar(e,t);var a=Vn(Ar(Fc(e,1),t),1),s=Hr(e,qr(a,t)),o,u=s,c=t;bt(u,c)>=0?o=1:o=0;var f=o,v=hr(a,M(f));return v}function Mk(n,r){if(tr(n,new y(0,0))>=0)return Eu(n,r);var e=Fc(n,1),t=Ar(e,M(r)),i=Vn(t,1),a=i,s=qr(a,M(r)),o=Hr(n,s);if(tr(o,M(r))>=0){var u=o;o=Hr(u,M(r));var c=i;i=hr(c,M(1))}return Eu(i,r)+Eu(o,r)}function ki(n){var r;return n.toArray!==void 0?r=n.toArray():r=g_(n),r}function Ds(n){return n<0&&o2(),n}function Rk(n,r,e,t,i){Nn.u4(t,i,n.length);var a=i-t|0;if(Nn.u4(e,e+a|0,r.length),Nu(r)&&Nu(n)){var s=n.subarray(t,i);r.set(s,e)}else{var o=0;if(o<a)do{var u=o;o=o+1|0,r[e+u|0]=n[t+u|0]}while(o<a)}}function g_(n){return l2(n)}function On(n){var r=[n];return T.i4(r)}function bo(n){return _2([n])}function Vc(n){return b2([n])}function Bk(n){m_(n,Q_())}function $k(n,r){m_(n,r)}function m_(n,r){if(n.c1()<=1)return or;var e=ki(n);w_(e,r);var t=0,i=e.length;if(t<i)do{var a=t;t=t+1|0,n.v4(a,e[a])}while(t<i)}function y_(n){if(!(n>=0)){var r="capacity must be non-negative.";throw U.v(b(r))}return Array(n)}function ko(n,r,e){n.fill(null,r,e)}function Nv(n,r){return d_(n,r)}function Dv(n,r){n[r]=null}var t1;function Za(){return t1===l&&new vd,t1}function Fk(n,r){var e=n.c1();return n.k_1.length=n.c1()+r|0,e}function bu(n,r){return Nn.i6(r,n.c1()),r}function Jk(n,r){return Nn.j5(r,n.c1()),r}var ao;function w_(n,r){if(b_()){var e=Gk(r);n.sort(e)}else k_(n,0,Nc(n),r)}function Hk(n){if(b_()){var r=Kk;n.sort(r)}else k_(n,0,Nc(n),Q_())}function b_(){var n=ao;if(n!=null)return n;ao=!1;var r=[],e=0;if(e<600)do{var t=e;e=e+1|0,r.push(t)}while(e<600);var i=Wk;r.sort(i);var a=1,s=r.length;if(a<s)do{var o=a;a=a+1|0;var u=r[o-1|0],c=r[o];if((u&3)===(c&3)&&u>=c)return!1}while(a<s);return ao=!0,!0}function k_(n,r,e,t){var i=n.length,a=Array(i),s=i1(n,a,r,e,t);if(s!==n){var o=r;if(o<=e)do{var u=o;o=o+1|0,n[u]=s[u]}while(u!==e)}}function i1(n,r,e,t,i){if(e===t)return n;var a=(e+t|0)/2|0,s=i1(n,r,e,a,i),o=i1(n,r,a+1|0,t,i),u=s===r?n:r,c=e,f=a+1|0,v=e;if(v<=t)do{var h=v;if(v=v+1|0,c<=a&&f<=t){var d=s[c],_=o[f];i.compare(d,_)<=0?(u[h]=d,c=c+1|0):(u[h]=_,f=f+1|0)}else c<=a?(u[h]=s[c],c=c+1|0):(u[h]=o[f],f=f+1|0)}while(h!==t);return u}function Gk(n){return(r,e)=>n.compare(r,e)}function Kk(n,r){return Ue(n,r)}function Wk(n,r){return(n&3)-(r&3)|0}function Yk(n){n.v6_1=null}function x_(n,r){return Uk(lr(vn(r,1),3))}function S_(n,r){return vs(r)+1|0}function Lv(n){if(n.v8_1.f7_1!==n.x8_1)throw po.u8("The backing map has been modified after this entry was obtained.")}function pa(n){return n.y6_1.length}function nt(n){return n.b7_1.length}function Il(n){n.f7_1=n.f7_1+1|0}function z_(n,r){Zk(n,r)?I_(n,!0):Vk(n,n.d7_1+r|0)}function Zk(n,r){var e=pa(n)-n.d7_1|0,t=n.d7_1-n.c1()|0;return e<r&&(t+e|0)>=r&&t>=(pa(n)/4|0)}function Vk(n,r){if(r<0)throw le.a9("too many elements");if(r>pa(n)){var e=Nn.b9(pa(n),r);n.y6_1=Nv(n.y6_1,e);var t=n,i=n.z6_1;t.z6_1=i==null?null:Nv(i,e),n.a7_1=bi(n.a7_1,e);var a=x_(ms,e);a>nt(n)&&C_(n,a)}}function E_(n){var r=n.z6_1;if(r!=null)return r;var e=y_(pa(n));return n.z6_1=e,e}function Cl(n,r){return r==null?0:lr(Sr(r),-1640531527)>>>n.e7_1|0}function I_(n,r){for(var e=0,t=0,i=n.z6_1;e<n.d7_1;){var a=n.a7_1[e];a>=0&&(n.y6_1[t]=n.y6_1[e],i!=null&&(i[t]=i[e]),r&&(n.a7_1[t]=a,n.b7_1[a]=t+1|0),t=t+1|0),e=e+1|0}ko(n.y6_1,t,n.d7_1),i==null||ko(i,t,n.d7_1),n.d7_1=t}function C_(n,r){Il(n),n.d7_1>n.g7_1&&I_(n,!1),n.b7_1=new Int32Array(r),n.e7_1=S_(ms,r);for(var e=0;e<n.d7_1;){var t=e;if(e=t+1|0,!Xk(n,t))throw xr.o3("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")}}function Xk(n,r){for(var e=Cl(n,n.y6_1[r]),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return n.b7_1[e]=r+1|0,n.a7_1[r]=e,!0;if(t=t-1|0,t<0)return!1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function no(n,r){for(var e=Cl(n,r),t=n.c7_1;;){var i=n.b7_1[e];if(i===0)return-1;if(P(n.y6_1[i-1|0],r))return i-1|0;if(t=t-1|0,t<0)return-1;var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0)}}function Qk(n,r){var e=n.d7_1;r:for(;;){if(e=e-1|0,!(e>=0))break r;if(n.a7_1[e]>=0&&P(un(n.z6_1)[e],r))return e}return-1}function A_(n,r){n.w7();r:for(;;)for(var e=Cl(n,r),t=Et(lr(n.c7_1,2),nt(n)/2|0),i=0;;){var a=n.b7_1[e];if(a===0){if(n.d7_1>=pa(n)){z_(n,1);continue r}var s=n.d7_1;n.d7_1=s+1|0;var o=s;return n.y6_1[o]=r,n.a7_1[o]=e,n.b7_1[e]=o+1|0,n.g7_1=n.g7_1+1|0,Il(n),i>n.c7_1&&(n.c7_1=i),o}if(P(n.y6_1[a-1|0],r))return-a|0;if(i=i+1|0,i>t){C_(n,lr(nt(n),2));continue r}var u=e;e=u-1|0,u===0&&(e=nt(n)-1|0)}}function T_(n,r){Dv(n.y6_1,r);var e=n.z6_1;e==null||Dv(e,r),rx(n,n.a7_1[r]),n.a7_1[r]=-1,n.g7_1=n.g7_1-1|0,Il(n)}function rx(n,r){for(var e=r,t=r,i=0;;){var a=e;e=a-1|0,a===0&&(e=nt(n)-1|0);var s=n.b7_1[e];if(i=i+1|0,i>n.c7_1||s===0)return n.b7_1[t]=0,or;var o=Cl(n,n.y6_1[s-1|0]);((o-e|0)&(nt(n)-1|0))>=i&&(n.b7_1[t]=s,n.a7_1[s-1|0]=t,t=e,i=0)}}function nx(n,r){return n.g7_1===r.c1()&&n.h8(r.r2())}function ex(n,r){var e=A_(n,r.k2()),t=E_(n);if(e>=0)return t[e]=r.l2(),!0;var i=t[(-e|0)-1|0];return P(r.l2(),i)?!1:(t[(-e|0)-1|0]=r.l2(),!0)}function tx(n,r){if(r.i1())return!1;z_(n,r.c1());for(var e=r.x(),t=!1;e.y();)ex(n,e.z())&&(t=!0);return t}var ms,q_;function ix(n,r){var e=new Ec(r),t=e,i=n;return t.pa_1=typeof i=="function"?i(e):n.cb(e),e}function ax(n,r,e,t){var i=new Ec(t),a=n,s=typeof a=="function"?a(r,e,i):n.db(r,e,i);return i.pa_1=s,i.sa()}function sx(n){var r=n instanceof zc?n:null,e=r==null?null:r.va();return e??n}function ox(n){return new Promise(lx(n))}function lx(n){return(r,e)=>{var t=n0(),i=new Cd(t,r,e);return z2(n,i),or}}function Pv(n){cn(n,n.o6_1)}function ku(n){cn(n,n.u_1)}function xu(n){cn(n,n.z8_1)}function Su(n){cn(n,n.j3_1)}function Mv(n){cn(n,n.q_1)}function Rv(n){cn(n,n.rb_1)}function Bv(n){cn(n,n.n3_1)}function $v(n){cn(n,n.t8_1)}function Fv(n){cn(n,n.xb_1)}function Jv(n){cn(n,n.bc_1)}function zu(n){cn(n,n.dc_1)}function Hv(n){cn(n,n.lc_1)}function ux(n){cn(n,n.r3_1)}function cx(n){cn(n,n.v3_1)}function fx(n){cn(n,n.z3_1)}function Ii(n,r){for(var e=n.length,t=r.length,i=0,a=r;i<e&&i<t;){var s=i,o=i;i=o+1|0,a[s]=n[o]}return r}function O_(n,r,e){var t=n.slice(0,r);n.$type$!==void 0&&(t.$type$=n.$type$);var i=n.length;if(r>i)for(t.length=r;i<r;){var a=i;i=a+1|0,t[a]=e}return t}function so(n,r){return new jc(r)}function U_(n){return new jc(n)}function vx(n){return Xr(yi(qs(n,63),Fc(tn(n),63)))}function hx(n){return tr(n,new y(0,0))<0?tn(n):n}function dx(n){var r;if(Ns(n))throw U.v("Cannot round NaN value.");return n>Zn(new y(-1,2147483647))?r=new y(-1,2147483647):n<Zn(new y(0,-2147483648))?r=new y(0,-2147483648):r=Un(Math.round(n)),r}function px(n){return n<0?-n|0:n}var xo;function _x(){return xo===l&&new Ic,xo}function Gv(){return Mx(),j_}var j_;function gx(n){return n!=null}function mx(n){return h_(n)}function yx(n){return n!=null?typeof n=="boolean":!1}function wx(n){return n!=null?typeof n=="number":!1}function bx(n){return n!=null?typeof n=="number":!1}function kx(n){return n!=null?typeof n=="number":!1}function xx(n){return n instanceof y}function Sx(n){return n!=null?typeof n=="number":!1}function zx(n){return n!=null?typeof n=="number":!1}function Ex(n){return n!=null?Us(n):!1}function Ix(n){return n!=null?typeof n=="string":!1}function Cx(n){return n instanceof Error}function Ax(n){return n!=null?is(n):!1}function Tx(n){return n!=null?os(n):!1}function qx(n){return n!=null?as(n):!1}function Ox(n){return n!=null?ss(n):!1}function Ux(n){return n!=null?ls(n):!1}function jx(n){return typeof n=="bigint"}function Nx(n){return n!=null?ea(n):!1}function Dx(n){return n!=null?us(n):!1}function Lx(n){return n!=null?cs(n):!1}function Px(n){return r=>{var e;return typeof r=="function"?e=r.length===n:e=!1,e}}var a1;function kr(){return a1===l&&new Ad,a1}var Kv;function Mx(){Kv||(Kv=!0,j_=Array(0))}function Nr(n){if(n===String)return kr().stringClass;var r=n.$metadata$,e;if(r!=null){var t;if(r.$kClass$==null){var i=new Bu(n);r.$kClass$=i,t=i}else t=r.$kClass$;e=t}else e=new Bu(n);return e}function Dr(n){var r;switch(typeof n){case"string":r=kr().stringClass;break;case"number":var e;(n|0)===n?e=kr().intClass:e=kr().doubleClass,r=e;break;case"bigint":r=kr().bigIntClass;break;case"boolean":r=kr().booleanClass;break;case"function":var t=kr();r=t.functionClass(n.length);break;default:var i;if(is(n))i=kr().booleanArrayClass;else if(os(n))i=kr().charArrayClass;else if(as(n))i=kr().byteArrayClass;else if(ss(n))i=kr().shortArrayClass;else if(ls(n))i=kr().intArrayClass;else if(ea(n))i=kr().qd();else if(us(n))i=kr().floatArrayClass;else if(cs(n))i=kr().doubleArrayClass;else if(z(n,Ge))i=Nr(Ge);else if(Us(n))i=kr().arrayClass;else{var a=Object.getPrototypeOf(n).constructor,s;if(a===Object)s=kr().anyClass;else if(a===Error)s=kr().throwableClass;else{var o=a;s=Nr(o)}i=s}r=i;break}return r}function Rx(n){n.lastIndex=0}function Wv(n){var r=yr(n).toUpperCase();return r.length>1?n:K(r,0)}function Bx(n){return 48<=n&&n<=57?!0:gn(n,128)<0?!1:Ak(n)}function Xc(n){return qk(n)}function Eu(n,r){return yo(n,Sa(r))}function Sa(n){if(!(2<=n&&n<=36))throw U.v("radix "+n+" was not in valid range 2..36");return n}function Qc(n){var r=+n,e;return Ns(r)&&!N_(n)||r===0&&lt(n)?e=null:e=r,e}function $x(n,r){return n.toString(Sa(r))}function So(n){var r=+n;return(Ns(r)&&!N_(n)||r===0&&lt(n))&&Ia(n),r}function Al(n,r){var e=gn(n,48)>=0&&gn(n,57)<=0?ie(n,48):gn(n,65)>=0&&gn(n,90)<=0?ie(n,65)+10|0:gn(n,97)>=0&&gn(n,122)<=0?ie(n,97)+10|0:gn(n,128)<0?-1:gn(n,65313)>=0&&gn(n,65338)<=0?ie(n,65313)+10|0:gn(n,65345)>=0&&gn(n,65370)<=0?ie(n,65345)+10|0:p_(n);return e>=r?-1:e}function Fx(n){var r=Ul(n),e;return r==null?Ia(n):e=r,e}function N_(n){switch(n.toLowerCase()){case"nan":case"+nan":case"-nan":return!0;default:return!1}}var s1;function zo(){return s1===l&&new Td,s1}function Jx(n,r,e){return()=>n.re(r,e)}function Hx(n){return n.z()}function Gx(n,r){return V(n,"",r,l,l,l,Kx)}function D_(n,r,e,t){n.lastIndex=e;var i=n.exec(r);if(i==null)return null;var a=Pe(i.index,n.lastIndex-1|0);return new Ud(a,i,t,r)}function Kx(n){return n.jf_1}function Wx(n){return r=>n.d1(r)}function Yx(n,r){if(r<ot(n.sf_1)){var e=n.sf_1.charCodeAt(r);if(55296<=e&&e<=56319){var t=n.sf_1.charCodeAt(r+1|0);if(56320<=t&&t<=57343)return r+2|0}}return r+1|0}function ae(n,r,e){return n.substring(r,e)}function at(n,r){return n.substring(r)}function Zx(n){return Xx(n,0,n.length)}function Yn(n,r,e,t){t=t===l?!1:t;var i=new RegExp(zo().ke(r),t?"gui":"gu"),a=zo().le(e);return n.replace(i,a)}function Ee(n,r,e){return e=e===l?!1:e,e?rf(n,0,r,0,r.length,e):n.startsWith(r,0)}function rf(n,r,e,t,i,a){return a=a===l?!1:a,jl(n,r,e,t,i,a)}function Vx(n,r,e){return e=e===l?!1:e,e?rf(n,n.length-r.length|0,r,0,r.length,e):n.endsWith(r)}function Yv(n,r,e){if(e=e===l?!1:e,n==null)return r==null;if(r==null)return!1;if(!e)return n==r;if(n.length!==r.length)return!1;var t=0,i=n.length;if(t<i)do{var a=t;t=t+1|0;var s=K(n,a),o=K(r,a);if(!Ol(s,o,e))return!1}while(t<i);return!0}function Xx(n,r,e,t){if(!(e<=n.length&&r<=e)){var i="Failed requirement.";throw U.v(b(i))}for(var a=r,s=rn.f();a<e;){var o=a;a=o+1|0;var u=n[o];if(u>=0)s.da(Ke(u));else if(u>>5===-2){var c=Qx(n,u,a,e);c<=0?(s.da(65533),a=a+(-c|0)|0):(s.da(Ke(c)),a=a+1|0)}else if(u>>4===-2){var f=r2(n,u,a,e);f<=0?(s.da(65533),a=a+(-f|0)|0):(s.da(Ke(f)),a=a+2|0)}else if(u>>3===-2){var v=n2(n,u,a,e);if(v<=0)s.da(65533),a=a+(-v|0)|0;else{var h=(v-65536|0)>>10|55296,d=v&1023|56320;s.da(Ke(h)),s.da(Ke(d)),a=a+3|0}}else s.da(65533)}return s.toString()}function Qx(n,r,e,t,i){if(!(r&30)||e>=t)return Cn(0);var a=n[e];return(a&192)!==128?Cn(0):r<<6^a^3968}function r2(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===13){if((a&224)!==128)return Cn(0)}else if((a&192)!==128)return Cn(0)}else if((a&224)!==160)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];return(s&192)!==128?Cn(1):r<<12^a<<6^s^-123008}function n2(n,r,e,t,i){if(e>=t)return Cn(0);var a=n[e];if(r&15){if((r&15)===4){if((a&240)!==128)return Cn(0)}else if((r&15)>4)return Cn(0)}else if((a&240)<=128)return Cn(0);if((a&192)!==128)return Cn(0);if((e+1|0)===t)return Cn(1);var s=n[e+1|0];if((s&192)!==128)return Cn(1);if((e+2|0)===t)return Cn(2);var o=n[e+2|0];return(o&192)!==128?Cn(2):r<<18^a<<12^s<<6^o^3678080}function Cn(n,r,e){return-n|0}var Zv;function za(){if(Zv)return or;Zv=!0,L_=new mt("NANOSECONDS",0,1),new mt("MICROSECONDS",1,1e3),P_=new mt("MILLISECONDS",2,1e6),M_=new mt("SECONDS",3,1e9),R_=new mt("MINUTES",4,6e10),B_=new mt("HOURS",5,36e11),$_=new mt("DAYS",6,864e11)}var L_,P_,M_,R_,B_,$_;function F_(n,r,e){var t=Ue(r.cg_1,e.cg_1),i;if(t>0){var a=Un(r.cg_1/e.cg_1),s=qr(n,a);i=ir(Ar(s,a),n)?s:tr(n,new y(0,0))>0?new y(-1,2147483647):new y(0,-2147483648)}else t<0?i=Ar(n,Un(e.cg_1/r.cg_1)):i=n;return i}function Vv(n,r,e){var t=Ue(r.cg_1,e.cg_1);return t>0?qr(n,Un(r.cg_1/e.cg_1)):t<0?Ar(n,Un(e.cg_1/r.cg_1)):n}function Eo(){return za(),L_}function Io(){return za(),P_}function nf(){return za(),M_}function J_(){return za(),R_}function H_(){return za(),B_}function ef(){return za(),$_}function Va(n,r,e,t,i){var a=e;t<4&&(a=Xv(n.e3_1,r,a,t,Et(i,4))),i>4&&Xv(n.d3_1,r,a,vn(t-4|0,0),i-4|0)}function e2(n){var r="a hexadecimal digit",e=0,t=0;if(t<8)do{var i=t;t=t+1|0;var a=e<<4,s;r:{var o=K(n,i),u=Z(o);if(!(u>>>8|0)&&_n()[u]>=0){s=_n()[u];break r}Kn(n,r,i)}e=a|s}while(t<8);var c=e;if(K(n,8)!==45){var f="'-' (hyphen)";Kn(n,f,8)}var v=0,h=9;if(h<13)do{var d=h;h=h+1|0;var _=v<<4,m;r:{var w=K(n,d),x=Z(w);if(!(x>>>8|0)&&_n()[x]>=0){m=_n()[x];break r}Kn(n,r,d)}v=_|m}while(h<13);var k=v;if(K(n,13)!==45){var S="'-' (hyphen)";Kn(n,S,13)}var E=0,I=14;if(I<18)do{var A=I;I=I+1|0;var q=E<<4,j;r:{var F=K(n,A),O=Z(F);if(!(O>>>8|0)&&_n()[O]>=0){j=_n()[O];break r}Kn(n,r,A)}E=q|j}while(I<18);var L=E;if(K(n,18)!==45){var H="'-' (hyphen)";Kn(n,H,18)}var B=0,$=19;if($<23)do{var R=$;$=$+1|0;var X=B<<4,J;r:{var er=K(n,R),Y=Z(er);if(!(Y>>>8|0)&&_n()[Y]>=0){J=_n()[Y];break r}Kn(n,r,R)}B=X|J}while($<23);var G=B;if(K(n,23)!==45){var sr="'-' (hyphen)";Kn(n,sr,23)}var ur=0,Q=24;if(Q<28)do{var zr=Q;Q=Q+1|0;var Er=ur<<4,mr;r:{var Ir=K(n,zr),br=Z(Ir);if(!(br>>>8|0)&&_n()[br]>=0){mr=_n()[br];break r}Kn(n,r,zr)}ur=Er|mr}while(Q<28);var Cr=ur,Pr=0,pr=28;if(pr<36)do{var Yr=pr;pr=pr+1|0;var an=Pr<<4,Gr;r:{var _r=K(n,Yr),Rr=Z(_r);if(!(Rr>>>8|0)&&_n()[Rr]>=0){Gr=_n()[Rr];break r}Kn(n,r,Yr)}Pr=an|Gr}while(pr<36);var Fr=Pr,nn=k<<16|L,Br=new y(nn,c),sn=G<<16|Cr,on=new y(Fr,sn);return Ms().gg(Br,on)}function t2(n){var r=0,e=0;if(e<8)do{var t=e;e=e+1|0;var i=r<<4,a;r:{var s=K(n,t),o=Z(s);if(!(o>>>8|0)&&_n()[o]>=0){a=_n()[o];break r}var u="a hexadecimal digit";Kn(n,u,t)}r=i|a}while(e<8);var c=r,f=0,v=8;if(v<16)do{var h=v;v=v+1|0;var d=f<<4,_;r:{var m=K(n,h),w=Z(m);if(!(w>>>8|0)&&_n()[w]>=0){_=_n()[w];break r}var x="a hexadecimal digit";Kn(n,x,h)}f=d|_}while(v<16);var k=f,S=new y(k,c),E=0,I=16;if(I<24)do{var A=I;I=I+1|0;var q=E<<4,j;r:{var F=K(n,A),O=Z(F);if(!(O>>>8|0)&&_n()[O]>=0){j=_n()[O];break r}var L="a hexadecimal digit";Kn(n,L,A)}E=q|j}while(I<24);var H=E,B=0,$=24;if($<32)do{var R=$;$=$+1|0;var X=B<<4,J;r:{var er=K(n,R),Y=Z(er);if(!(Y>>>8|0)&&_n()[Y]>=0){J=_n()[Y];break r}var G="a hexadecimal digit";Kn(n,G,R)}B=X|J}while($<32);var sr=B,ur=new y(sr,H);return Ms().gg(S,ur)}function Xv(n,r,e,t,i){var a=e,s=3-t|0,o=4-i|0;if(o<=s)do{var u=s;s=s+-1|0;var c=u<<3,f=n>>c&255,v=T2()[f],h=a;a=h+1|0,r[h]=Mn(v>>8);var d=a;a=d+1|0,r[d]=Mn(v)}while(u!==o);return a}function i2(n){return r=>r===n?"(this Collection)":ce(r)}var Nn;function a2(n,r){return Qv(n,r.k2())+"="+Qv(n,r.l2())}function Qv(n,r){return r===n?"(this Map)":ce(r)}function rh(n,r){var e=n.r2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(P(a.k2(),r)){t=a;break r}}t=null}return t}function s2(n){return r=>a2(n,r)}var ys;function Ls(n){return n.c1()-1|0}function o2(){throw Du.zb("Index overflow has happened.")}function l2(n){if(n.i1())return[];for(var r=n.c1(),e=Array(r),t=n.x(),i=0;t.y();){var a=i;i=a+1|0,e[a]=t.z()}return e}function dr(){return G_()}function st(n){return pb(n)}function kt(n){return n.length>0?El(n):dr()}var o1;function G_(){return o1===l&&new $d,o1}var ws;function K_(n){switch(n.c1()){case 0:return dr();case 1:return On(n.d1(0));default:return n}}function u2(n){return Pe(0,n.c1()-1|0)}function c2(n){for(var r=T.m(),e=n.x();e.y();){var t=e.z();Ea(r,t)}return r}function Zr(n,r){var e;return z(n,W)?e=n.c1():e=r,e}function f2(n){var r;return z(n,W)?r=n.c1():r=null,r}function v2(n,r){if(z(n,Gd))return n.bh(r);var e;r:{var t=n.o2(r);if(t==null&&!n.m2(r))throw Or.r("Key "+ce(r)+" is missing in the map.");e=t;break r}return e}function Tr(){var n=d2();return z(n,mn)?n:g()}function Tl(n){return n.length>0?Y_(n,vr.ha(n.length)):Tr()}function Se(n,r){return v2(n,r)}function W_(n){if(z(n,W)){var r;switch(n.c1()){case 0:r=Tr();break;case 1:var e;z(n,zn)?e=n.d1(0):e=n.x().z(),r=bo(e);break;default:r=eh(n,vr.ha(n.c1()));break}return r}return Z_(eh(n,vr.q4()))}function nh(n){return Y_(n,vr.ha(n.length))}function et(n,r){var e;if(n.i1())e=bo(r);else{var t=vr.ia(n);t.s2(r.ch_1,r.dh_1),e=t}return e}function tf(n){return vr.ia(n)}function h2(n,r){var e=tf(n);return e.t2(r),Z_(e)}var l1;function d2(){return l1===l&&new Kd,l1}function Y_(n,r){return V_(r,n),r}function eh(n,r){return p2(r,n),r}function Z_(n){var r;switch(n.c1()){case 0:r=Tr();break;case 1:r=n;break;default:r=n;break}return r}function V_(n,r){for(var e=0,t=r.length;e<t;){var i=r[e];e=e+1|0;var a=i.hh(),s=i.ih();n.s2(a,s)}}function p2(n,r){for(var e=r.x();e.y();){var t=e.z(),i=t.hh(),a=t.ih();n.s2(i,a)}}function _2(n){var r=hs.l7(n.length);return V_(r,n),r}function Ea(n,r){if(z(r,W))return n.h1(r);for(var e=!1,t=r.x();t.y();){var i=t.z();n.n(i)&&(e=!0)}return e}function th(n){var r;if(n.i1())throw Or.r("List is empty.");return r=n.e5(Ls(n)),r}function af(n,r){var e;return n==null?e=ql:e=new Tc(y2(n),r),e}function g2(n){return yb(n)}function m2(n,r){return new Tc(n,r)}function X_(){return ql}var ql;function ih(n){n.sh_1=n.th_1===-2?n.uh_1.vh_1():n.uh_1.wh_1(un(n.sh_1)),n.th_1=n.sh_1==null?0:1}function y2(n){return()=>n}function ti(n){return jp(n)}function Ot(){return c1()}var u1;function c1(){return u1===l&&new rp,u1}function w2(n){switch(n.c1()){case 0:return Ot();case 1:return Vc(n.x().z());default:return n}}function b2(n){return Np(n,_i.b1(n.length))}function k2(n){if(!(n.length>0)){var r="Failed requirement.";throw U.v(b(r))}var e=S2(n);return new ep(e)}function Ut(n,r){return n==null?r==null?0:-1:r==null?1:Ue(n!=null&&Vu(n)?n:g(),r)}function Q_(){var n=r0;return z(n,dn)?n:g()}function x2(n,r,e){for(var t=0,i=e.length;t<i;){var a=e[t];t=t+1|0;var s=a(n),o=a(r),u=Ut(s,o);if(u!==0)return u}return 0}var r0;function S2(n){return(r,e)=>x2(r,e,n)}function z2(n,r){var e=sx(ix(n,r)),t=or;e.ma(t)}var f1,v1;function n0(){return v1===l&&new ip,v1}function bs(){return I2()}var ah;function E2(){if(ah)return or;ah=!0,e0=new ap("COROUTINE_SUSPENDED",0)}var e0;function I2(){return E2(),e0}function C2(n){return sp.di(n)}function A2(n,r,e){var t;if(e>0)t=n>=r?r:r-sh(r,n,e)|0;else if(e<0)t=n<=r?r:r+sh(n,r,-e|0)|0;else throw U.v("Step is zero.");return t}function sh(n,r,e){return Iu(Iu(n,e)-Iu(r,e)|0,e)}function Iu(n,r){var e=n%r|0;return e>=0?e:e+r|0}var h1;function t0(){return h1===l&&new op,h1}var sf;function i0(n,r,e){e!=null?n.g(e(r)):r==null||js(r)?n.g(r):r instanceof Sn?n.da(r.x1_1):n.g(b(r))}function Ol(n,r,e){if(e=e===l?!1:e,n===r)return!0;if(!e)return!1;var t=Wv(n),i=Wv(r),a;if(t===i)a=!0;else{var s=yr(t).toLowerCase(),o=K(s,0),u=yr(i).toLowerCase();a=o===K(u,0)}return a}function T2(){return o0(),a0}var a0;function q2(){return o0(),s0}var s0;function _n(){return q2()}var oh;function o0(){if(!oh){oh=!0;for(var n=0,r=new Int32Array(256);n<256;){var e=n,t=K("0123456789abcdef",e>>4),i=Z(t)<<8,a=K("0123456789abcdef",e&15);r[e]=i|Z(a),n=n+1|0}a0=r;for(var s=0,o=new Int32Array(256);s<256;){var u=s,c=K("0123456789ABCDEF",u>>4),f=Z(c)<<8,v=K("0123456789ABCDEF",u&15);o[u]=f|Z(v),s=s+1|0}for(var h=0,d=new Int32Array(256);h<256;)d[h]=-1,h=h+1|0;for(var _=0,m="0123456789abcdef",w=0;w<C(m);){var x=rr(m,w);w=w+1|0;var k=_;_=k+1|0,d[Z(x)]=k}for(var S=0,E="0123456789ABCDEF",I=0;I<C(E);){var A=rr(E,I);I=I+1|0;var q=S;S=q+1|0,d[Z(A)]=q}s0=d;for(var j=0,F=mi(256);j<256;)F[j]=new y(-1,-1),j=j+1|0;for(var O=0,L="0123456789abcdef",H=0;H<C(L);){var B=rr(L,H);H=H+1|0;var $=O;O=$+1|0,F[Z(B)]=M($)}for(var R=0,X="0123456789ABCDEF",J=0;J<C(X);){var er=rr(X,J);J=J+1|0;var Y=R;R=Y+1|0,F[Z(er)]=M(Y)}}}function O2(n){var r;return C(n)===0?r=D2:r=L2(n),r}function U2(n){return j2(n,"")}function j2(n,r){r=r===l?"":r;for(var e=f0(n),t=T.m(),i=e.x();i.y();){var a=i.z();lt(a)||t.n(a)}for(var s=T.g1(Zr(t,10)),o=t.x();o.y();){var u=o.z(),c=N2(u);s.n(c)}for(var f=Ob(s),v=f??0,h=n.length+lr(r.length,e.c1())|0,d=O2(r),_=Ls(e),m=T.m(),w=0,x=e.x();x.y();){var k=x.z(),S=w;w=S+1|0;var E=Ds(S),I;if((E===0||E===_)&&lt(k))I=null;else{var A=$b(k,v),q;A==null?q=null:q=d(A);var j=q;I=j??k}var F=I;F==null||m.n(F)}return Lp(m,rn.fa(h),`
`).toString()}function N2(n){var r;r:{var e=0,t=C(n)-1|0;if(e<=t)do{var i=e;e=e+1|0;var a=rr(n,i);if(!Xc(a)){r=i;break r}}while(e<=t);r=-1}var s=r;return s===-1?n.length:s}function D2(n){return n}function L2(n){return r=>n+r}function Ul(n){return P2(n,10)}function P2(n,r){Sa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=-2147483648;else if(s===43)i=!1,a=-2147483647;else return null}else t=0,i=!1,a=-2147483647;var o=-59652323,u=o,c=0,f=t;if(f<e)do{var v=f;f=f+1|0;var h=Al(K(n,v),r);if(h<0)return null;if(c<u)if(u===o){if(u=a/r|0,c<u)return null}else return null;if(c=lr(c,r),c<(a+h|0))return null;c=c-h|0}while(f<e);return i?c:-c|0}function Ia(n){throw Lu.nc("Invalid number format: '"+n+"'")}function M2(n){return R2(n,10)}function R2(n,r){Sa(r);var e=n.length;if(e===0)return null;var t,i,a,s=K(n,0);if(gn(s,48)<0){if(e===1)return null;if(t=1,s===45)i=!0,a=new y(0,-2147483648);else if(s===43)i=!1,a=new y(1,-2147483648);else return null}else t=0,i=!1,a=new y(1,-2147483648);var o=new y(1,-2147483648),u=Ar(o,M(36)),c=u,f=new y(0,0),v=t;if(v<e)do{var h=v;v=v+1|0;var d=Al(K(n,h),r);if(d<0)return null;if(tr(f,c)<0)if(ir(c,u)){var _=a;if(c=Ar(_,M(r)),tr(f,c)<0)return null}else return null;var m=f;f=qr(m,M(r));var w=f,x=a,k=hr(x,M(d));if(tr(w,k)<0)return null;var S=f;f=Hr(S,M(d))}while(v<e);return i?f:tn(f)}function l0(n,r){var e=js(n)?n:g(),t=0,i=C(e)-1|0,a=!1;r:for(;t<=i;){var s=a?i:t,o=rr(e,s),u=mb(r,o);if(!a)u?t=t+1|0:a=!0;else if(u)i=i-1|0;else break r}var c=jn(e,t,i+1|0);return b(c)}function Xi(n,r){return B2(n,r)?ae(n,0,n.length-C(r)|0):n}function Ca(n,r,e){e=e===l?n:e;var t=$2(n,r);return t===-1?e:ae(n,t+1|0,n.length)}function ks(n,r,e){e=e===l?!1:e;var t;return typeof r=="string"?t=Co(n,r,l,e)>=0:t=of(n,r,0,C(n),e)>=0,t}function u0(n,r,e,t){if(e=e===l?!1:e,t=t===l?0:t,r.length===1)return F2(n,yr(r[0]),e,t);for(var i=Pb(J2(n,r,l,e,t)),a=T.g1(Zr(i,10)),s=i.x();s.y();){var o=s.z(),u=H2(n,o);a.n(u)}return a}function c0(n,r){return G2(n,r)?at(n,C(r)):n}function f0(n){return Bp(K2(n))}function v0(n,r,e){return e=e===l?32:e,b(W2(js(n)?n:g(),r,e))}function ot(n){return C(n)-1|0}function lt(n){var r;r:{for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,!Xc(t)){r=!1;break r}}r=!0}return r}function B2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Vx(n,r):jl(n,C(n)-C(r)|0,r,0,C(r),e)}function $2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=wa([r]);i=Y2(n,s,e,t)}else{var o=yr(r);i=n.lastIndexOf(o,e)}return i}function Co(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=of(n,r,e,C(n),t):i=n.indexOf(r,e),i}function of(n,r,e,t,i,a){a=a===l?!1:a;var s=a?Ub(Et(e,ot(n)),vn(t,0)):Pe(vn(e,0),Et(t,C(n))),o;if(typeof n=="string"?o=typeof r=="string":o=!1,o){var u=s.r1_1,c=s.s1_1,f=s.t1_1;if(f>0&&u<=c||f<0&&c<=u)do{var v=u;if(u=u+f|0,rf(r,0,n,v,r.length,i))return v}while(v!==c)}else{var h=s.r1_1,d=s.s1_1,_=s.t1_1;if(_>0&&h<=d||_<0&&d<=h)do{var m=h;if(h=h+_|0,jl(r,0,n,m,C(r),i))return m}while(m!==d)}return-1}function h0(n){var r=0,e=C(n)-1|0,t=!1;r:for(;r<=e;){var i=t?e:r,a=rr(n,i),s=Xc(a);if(!t)s?r=r+1|0:t=!0;else if(s)e=e-1|0;else break r}return jn(n,r,e+1|0)}function F2(n,r,e,t){lf(t);var i=0,a=Co(n,r,i,e);if(a===-1||t===1)return On(b(n));var s=t>0,o=T.g1(s?Et(t,10):10);r:do{var u=i,c=a,f=b(jn(n,u,c));if(o.n(f),i=a+r.length|0,s&&o.c1()===(t-1|0))break r;a=Co(n,r,i,e)}while(a!==-1);var v=i,h=C(n),d=b(jn(n,v,h));return o.n(d),o}function J2(n,r,e,t,i){return e=e===l?0:e,t=t===l?!1:t,i=i===l?0:i,lf(i),new fp(n,e,i,rS(r,t))}function H2(n,r){return b(jn(n,r.df(),r.ef()+1|0))}function G2(n,r,e){e=e===l?!1:e;var t,i;return e?i=!1:i=typeof n=="string",i?t=typeof r=="string":t=!1,t?Ee(n,r):jl(n,0,r,0,C(r),e)}function K2(n){return new hp(n)}function W2(n,r,e){if(e=e===l?32:e,r<0)throw U.v("Desired length "+r+" is less than zero.");if(r<=C(n))return jn(n,0,C(n));var t=rn.fa(r),i=1,a=r-C(n)|0;if(i<=a)do{var s=i;i=i+1|0,t.da(e)}while(s!==a);return t.g(n),t}function jl(n,r,e,t,i,a){if(t<0||r<0||r>(C(n)-i|0)||t>(C(e)-i|0))return!1;var s=0;if(s<i)do{var o=s;if(s=s+1|0,!Ol(rr(n,r+o|0),rr(e,t+o|0),a))return!1}while(s<i);return!0}function Y2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Dp(r),s=yr(a);return n.lastIndexOf(s,e)}var o=Et(e,ot(n));if(0<=o)do{var u=o;o=o+-1|0;var c=rr(n,u),f;r:{for(var v=0,h=r.length;v<h;){var d=r[v];if(v=v+1|0,Ol(d,c,t)){f=!0;break r}}f=!1}if(f)return u}while(0<=o);return-1}function lf(n){if(!(n>=0)){var r="Limit must be non-negative, but was "+n;throw U.v(b(r))}return or}function lh(n){if(n.ni_1<0)n.li_1=0,n.oi_1=null;else{var r,e;if(n.qi_1.ti_1>0?(n.pi_1=n.pi_1+1|0,e=n.pi_1>=n.qi_1.ti_1):e=!1,e?r=!0:r=n.ni_1>C(n.qi_1.ri_1),r)n.oi_1=Pe(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var t=n.qi_1.ui_1(n.qi_1.ri_1,n.ni_1);if(t==null)n.oi_1=Pe(n.mi_1,ot(n.qi_1.ri_1)),n.ni_1=-1;else{var i=t.hh(),a=t.ih();n.oi_1=Mc(n.mi_1,i),n.mi_1=i+a|0,n.ni_1=n.mi_1+(a===0?1:0)|0}}n.li_1=1}}function d0(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i;if(!t&&r.length===1?i=typeof n=="string":i=!1,i){var a=Dp(r),s=yr(a);return n.indexOf(s,e)}var o=vn(e,0),u=ot(n);if(o<=u)do{var c=o;o=o+1|0;var f=rr(n,c),v;r:{for(var h=0,d=r.length;h<d;){var _=r[h];if(h=h+1|0,Ol(_,f,t)){v=!0;break r}}v=!1}if(v)return c}while(c!==u);return-1}function Nl(n,r,e,t){e=e===l?0:e,t=t===l?!1:t;var i,a;if(t?a=!0:a=typeof n!="string",a){var s=wa([r]);i=d0(n,s,e,t)}else{var o=yr(r);i=n.indexOf(o,e)}return i}function Z2(n){switch(n){case"true":return!0;case"false":return!1;default:return null}}function V2(n,r,e){e=e===l?n:e;var t=Nl(n,r);return t===-1?e:ae(n,0,t)}function X2(n,r,e){e=e===l?n:e;var t=Nl(n,r);return t===-1?e:ae(n,t+1|0,n.length)}function Q2(n,r,e,t){e=e===l?ot(n):e,t=t===l?!1:t;var i,a;return t?a=!0:a=typeof n!="string",a?i=of(n,r,e,0,t,!0):i=n.lastIndexOf(r,e),i}function rS(n,r){return(e,t)=>{var i=d0(e,n,t,r);return i<0?null:N(i,1)}}function wn(n){return qs(n,1)}function uf(n){return(Xr(n)&1)===0}function p0(n){return(Xr(n)&1)===1}function nS(n){return uf(n)?Eo():Io()}var d1;function Wr(){return d1===l&&new dp,d1}function _0(n){var r=tn(wn(n)),e=Xr(n)&1;return hS(r,e)}function eS(n,r){var e,t=Xr(n)&1;if(t===(Xr(r)&1)){var i;if(uf(n))i=dS(hr(wn(n),wn(r)));else{var a=cf(wn(n),wn(r)),s;if(ir(a,new y(-16162,2147483647)))throw U.v("Summing infinite durations of different signs yields an undefined result.");ir(a,new y(-1,1073741823))||ir(a,new y(1,-1073741824))?s=Ct(a):s=pS(a),i=s}e=i}else p0(n)?e=uh(n,wn(n),wn(r)):e=uh(n,wn(r),wn(n));return e}function uh(n,r,e){var t=x0(e),i=cf(r,t),a;if(tr(new y(1108857478,-1074),i)<=0&&tr(i,new y(-1108857478,1073))<=0){var s=Hr(e,Ao(t));a=Pl(hr(Ao(i),s))}else a=Ct(i);return a}function Dl(n){return tr(n,new y(0,0))<0}function Ps(n){return ir(n,Wr().fj_1)||ir(n,Wr().gj_1)}function g0(n){return Dl(n)?_0(n):n}function m0(n,r){var e=qe(n,r);if(tr(e,new y(0,0))<0||!(Xr(e)&1))return n.f3(r);var t=Xr(n)&1,i=t-(Xr(r)&1)|0;return Dl(n)?-i|0:i}function tS(n,r){return m0(n.kj_1,r instanceof xe?r.kj_1:g())}function iS(n){var r;if(Ps(n))r=0;else{var e=k0(n),t=It(e,M(24));r=Xr(t)}return r}function y0(n){var r;if(Ps(n))r=0;else{var e=sS(n),t=It(e,M(60));r=Xr(t)}return r}function w0(n){var r;if(Ps(n))r=0;else{var e=oS(n),t=It(e,M(60));r=Xr(t)}return r}function b0(n){var r;if(Ps(n))r=0;else if(p0(n)){var e=wn(n),t=It(e,M(1e3));r=Xr(Ao(t))}else{var i=wn(n),a=1e9,s=It(i,M(a));r=Xr(s)}return r}function Ll(n,r){var e=n;return ir(e,Wr().fj_1)?new y(-1,2147483647):ir(e,Wr().gj_1)?new y(0,-2147483648):F_(wn(n),nS(n),r)}function aS(n){return Ll(n,ef())}function k0(n){return Ll(n,H_())}function sS(n){return Ll(n,J_())}function oS(n){return Ll(n,nf())}function lS(n){var r=n,e;if(ir(r,new y(0,0)))e="0s";else if(ir(r,Wr().fj_1))e="Infinity";else if(ir(r,Wr().gj_1))e="-Infinity";else{var t=Dl(n),i=rn.f();t&&i.da(45);var a=g0(n),s=aS(a),o=iS(a),u=y0(a),c=w0(a),f=b0(a),v=!ir(s,new y(0,0)),h=o!==0,d=u!==0,_=c!==0||f!==0,m=0;if(v&&(i.be(s).da(100),m=m+1|0),h||v&&(d||_)){var w=m;m=w+1|0,w>0&&i.da(32),i.ae(o).da(104)}if(d||_&&(h||v)){var x=m;m=x+1|0,x>0&&i.da(32),i.ae(u).da(109)}if(_){var k=m;m=k+1|0,k>0&&i.da(32),c!==0||v||h||d?oo(n,i,c,f,9,"s",!1):f>=1e6?oo(n,i,f/1e6|0,f%1e6|0,6,"ms",!1):f>=1e3?oo(n,i,f/1e3|0,f%1e3|0,3,"us",!1):i.ae(f).ca("ns")}t&&m>1&&i.ce(1,40).da(41),e=i.toString()}return e}function oo(n,r,e,t,i,a,s){if(r.ae(e),t!==0){r.da(46);var o=v0(t.toString(),i,48),u;r:{var c=C(o)-1|0;if(0<=c)do{var f=c;if(c=c+-1|0,rr(o,f)!==48){u=f;break r}}while(0<=c);u=-1}var v=u+1|0;if(!s&&v<3)r.zd(o,0,v);else{var h=lr((v+2|0)/3|0,3);r.zd(o,0,h)}}r.ca(a)}function uS(n){var r=rn.f();Dl(n)&&r.da(45),r.ca("PT");var e=g0(n),t=k0(e),i=y0(e),a=w0(e),s=b0(e),o=t;Ps(n)&&(o=new y(1316134911,2328));var u=!ir(o,new y(0,0)),c=a!==0||s!==0,f=i!==0||c&&u;return u&&r.be(o).da(72),f&&r.ae(i).da(77),(c||!u&&!f)&&oo(n,r,a,s,9,"S",!0),r.toString()}function cS(n){return n.hashCode()}function fS(n,r){if(!(r instanceof xe))return!1;var e=r.kj_1;return!!ir(n,e)}function Ct(n){var r=Wr(),e=Vn(n,1),t=hr(e,M(1));return r.jj(t)}function ch(n,r){var e=Vv(new y(-387905,1073741823),Eo(),r),t;if(tr(tn(e),n)<=0&&tr(n,e)<=0)t=Pl(Vv(n,r,Eo()));else if(r.y2(Io())>=0){var i=vx(n),a=new y(0,-2147483648),s=hr(a,M(1));t=Ct(qr(Un(i),_1(hx(Nb(n,s)),r)))}else t=Ct(Rc(F_(n,r,Io()),new y(1,-1073741824),new y(-1,1073741823)));return t}function vS(n,r,e){if(e=e===l?!0:e,C(n)===0){var t="The string is empty";if(e)throw U.v(t);return Wr().ij_1}var i=0,a=K(n,i),s=!1;a===45?(s=!0,i=i+1|0):a===43&&(i=i+1|0);var o;if(n.length<=i){var u="No components";if(e)throw U.v(u);return Wr().ij_1}else if(K(n,i)===80)o=_S(n,i+1|0,e);else{if(e)throw U.v("");return Wr().ij_1}var c=o;return s&&!P(new xe(c),new xe(Wr().ij_1))?_0(c):c}function hS(n,r){var e=Wr(),t=Vn(n,1),i=hr(t,M(r));return e.jj(i)}function dS(n){var r;return tr(new y(387905,-1073741824),n)<=0&&tr(n,new y(-387905,1073741823))<=0?r=Pl(n):r=Ct(x0(n)),r}function cf(n,r){var e;if(ir(n,new y(-1,1073741823))||ir(n,new y(1,-1073741824))){var t,i;tr(new y(1,-1073741824),r)<0&&tr(r,new y(-1,1073741823))<0?i=!0:i=tr(qe(n,r),new y(0,0))>=0,i?t=n:t=new y(-16162,2147483647),e=t}else ir(r,new y(-1,1073741823))||ir(r,new y(1,-1073741824))?e=r:e=Rc(hr(n,r),new y(1,-1073741824),new y(-1,1073741823));return e}function pS(n){var r;return tr(new y(1108857478,-1074),n)<=0&&tr(n,new y(-1108857478,1073))<=0?r=Pl(Ao(n)):r=Ct(Rc(n,new y(1,-1073741824),new y(-1,1073741823))),r}function x0(n){return Ar(n,M(1e6))}function Ao(n){return qr(n,M(1e6))}function Pl(n){return Wr().jj(Vn(n,1))}function _S(n,r,e){var t=r;if(t===n.length){if(e)throw U.v("");return Wr().ij_1}var i=new y(0,0),a=new y(0,0),s=!1,o=null;r:for(;t<n.length;){var u=K(n,t);if(u===84){var c;if(s?c=!0:(t=t+1|0,c=t===n.length),c){if(e)throw U.v("");return Wr().ij_1}s=!0;continue r}var f=t,v,h=S0().nj_1,d=t,_;n:{var m=1,w=d;if(mS(h)){var x=K(n,w);x===45?(m=-1,w=w+1|0):x===43&&(w=w+1|0)}var k=w;e:for(;;){var S;if(k<n.length?S=K(n,k)===48:S=!1,!S)break e;k=k+1|0}w=k;var E=new y(0,0);e:for(;w<n.length;){var I=K(n,w);if(!(48<=I&&I<=57))break e;var A=ie(I,48);if(tr(E,fh(h))>0||ir(E,fh(h))&&tr(M(A),yS(h))>0){var q=w;t:for(;;){var j;if(q<n.length){var F=K(n,q);j=48<=F?F<=57:!1}else j=!1;if(!j)break t;q=q+1|0}w=q;var O=w,L=m;if(t=O,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Wr().ij_1}v=L,_=gS(h);break n}var H=E,B=hr(Vn(H,3),Vn(H,1));E=hr(B,M(A)),w=w+1|0}var $=w,R=m;if(t=$,t===n.length||t===(f+(u===45||u===43?1:0)|0)){if(e)throw U.v("");return Wr().ij_1}v=R,_=E}var X=_;if(K(n,t)===46){t=t+1|0;var J=t,er=J,Y=er,G=Y+6|0,sr=n.length,ur=Math.min(G,sr),Q=0;n:for(;Y<ur;){var zr=K(n,Y);if(!(48<=zr&&zr<=57))break n;var Er=Q;Q=((Er<<3)+(Er<<1)|0)+ie(zr,48)|0,Y=Y+1|0}var mr=6-(Y-er|0)|0,Ir=0;if(Ir<mr)do{Ir=Ir+1|0;var br=Q;Q=(br<<3)+(br<<1)|0}while(Ir<mr);J=Y;var Cr=Q,Pr=J,pr=Pr,Yr=pr+9|0,an=n.length,Gr=Math.min(Yr,an),_r=0;n:for(;pr<Gr;){var Rr=K(n,pr);if(!(48<=Rr&&Rr<=57))break n;var Fr=_r;_r=((Fr<<3)+(Fr<<1)|0)+ie(Rr,48)|0,pr=pr+1|0}var nn=9-(pr-Pr|0)|0,Br=0;if(Br<nn)do{Br=Br+1|0;var sn=_r;_r=(sn<<3)+(sn<<1)|0}while(Br<nn);J=pr;var on=_r,pn=J;n:for(;;){var yn;if(pn<n.length){var ge=K(n,pn);yn=48<=ge?ge<=57:!1}else yn=!1;if(!yn)break n;pn=pn+1|0}J=pn;var Ln=J;if(Ln===t||Ln===n.length||K(n,Ln)!==83){if(e)throw U.v("");return Wr().ij_1}t=Ln;var Gn=M(Cr),me=1e9,Pn=qr(Gn,M(me)),ye=hr(Pn,M(on));a=qr(Un(v),wS(ye,nf()))}var Te=bS(n,t),je;if(Te==null){var Ne="Unknown duration unit short name: "+yr(K(n,t));if(e)throw U.v(Ne);return Wr().ij_1}else je=Te;var we=je;if(o!=null&&o.y2(we)<=0){var En="Unexpected order of duration components";if(e)throw U.v(En);return Wr().ij_1}if(o=we,we.equals(ef())){if(s){if(e)throw U.v("");return Wr().ij_1}i=qr(Un(v),_1(X,we))}else{if(!s){if(e)throw U.v("");return Wr().ij_1}var xn=cf(i,qr(Un(v),_1(X,we)));if(ir(xn,new y(-16162,2147483647))){if(e)throw U.v("");return Wr().ij_1}i=xn}t=t+1|0}return eS(ch(i,Io()),ch(a,Eo()))}var p1;function S0(){return p1===l&&new pp,p1}function gS(n){return n.pj_1}function mS(n){return n.qj_1}function fh(n){return n.rj_1}function yS(n){return n.sj_1}function wS(n,r){var e=kS(r),t=Zn(n)*e;return dx(t)}function bS(n,r){var e=K(n,r);return e===68?ef():e===72?H_():e===77?J_():e===83?nf():null}function kS(n){var r;switch(n.x2_1){case 0:r=1e-15;break;case 1:r=1e-12;break;case 2:r=1e-9;break;case 3:r=1e-6;break;case 4:r=6e-5;break;case 5:r=.0036;break;case 6:r=.0864;break;default:var e="Unknown unit: "+n.toString();throw xr.o3(b(e))}return r}function _1(n,r){return xS(n,SS(r))}function xS(n,r){var e;if(ir(n,new y(0,0)))e=new y(0,0);else if(ir(n,new y(1,0)))e=gu(r,new y(-1,1073741823));else if(ir(r,new y(1,0)))e=gu(n,new y(-1,1073741823));else{var t=(128-Uv(n)|0)-Uv(r)|0;e=t<63?qr(n,r):t>63?new y(-1,1073741823):gu(qr(n,r),new y(-1,1073741823))}return e}function SS(n){var r;switch(n.x2_1){case 6:r=new y(864e5,0);break;case 5:r=new y(36e5,0);break;case 4:r=new y(6e4,0);break;case 3:r=new y(1e3,0);break;case 2:r=new y(1,0);break;default:var e="Wrong unit for millisMultiplier: "+n.toString();throw xr.o3(b(e))}return r}function lo(){return Jn(),z0}var z0;function zS(){return Jn(),E0}var E0;function ES(){return Jn(),I0}var I0;function IS(){return Jn(),C0}var C0,g1;function xt(){return g1===l&&new _p,g1}function CS(n){Jn();var r=rn.f(),e=A0.ck(n),t=e.dk_1;if(px(t)<1e3){var i=rn.f();t>=0?i.ae(t+1e4|0).fe(0):i.ae(t-1e4|0).fe(1),r.g(i)}else t>=1e4&&r.da(43),r.ae(t);if(r.da(45),Xa(r,r,e.ek_1),r.da(45),Xa(r,r,e.fk_1),r.da(84),Xa(r,r,e.gk_1),r.da(58),Xa(r,r,e.hk_1),r.da(58),Xa(r,r,e.ik_1),e.jk_1!==0){r.da(46);for(var a=0;!(e.jk_1%lo()[a+1|0]|0);)a=a+1|0;a=a-(a%3|0)|0;var s=e.jk_1/lo()[a]|0;r.ca(at((s+lo()[9-a|0]|0).toString(),1))}return r.da(90),r.toString()}function AS(n){Jn();var r=n,e=0;if(C(r)===0)return new qc("An empty string is not a valid Instant",n);var t=rr(r,e),i;t===43||t===45?(e=e+1|0,i=t):i=32;var a=i,s=e,o=0;r:for(;;){var u;if(e<C(r)){var c=rr(r,e);u=48<=c?c<=57:!1}else u=!1;if(!u)break r;o=lr(o,10)+ie(rr(r,e),48)|0,e=e+1|0}var f=e-s|0,v;if(f>10)return ln(n,"Expected at most 10 digits for the year number, got "+f+" digits");if(f===10&&gn(rr(r,s),50)>=0)return ln(n,"Expected at most 9 digits for the year number or year 1000000000, got "+f+" digits");if(f<4)return ln(n,"The year number must be padded to 4 digits, got "+f+" digits");if(a===43&&f===4)return ln(n,"The '+' sign at the start is only valid for year numbers longer than 4 digits");if(a===32&&f!==4)return ln(n,"A '+' or '-' sign is required for year numbers longer than 4 digits");v=a===45?-o|0:o;var h=v;if(C(r)<(e+16|0))return ln(n,"The input string is too short");var d=e,_=Wi(n,"'-'",d,qS);if(_!=null)return _;var m=e+3|0,w=Wi(n,"'-'",m,OS);if(w!=null)return w;var x=e+6|0,k=Wi(n,"'T' or 't'",x,US);if(k!=null)return k;var S=e+9|0,E=Wi(n,"':'",S,jS);if(E!=null)return E;var I=e+12|0,A=Wi(n,"':'",I,NS);if(A!=null)return A;for(var q=zS(),j=0,F=q.length;j<F;){var O=q[j];j=j+1|0;var L=e+O|0,H=Wi(n,"an ASCII digit",L,DS);if(H!=null)return H}var B=_t(r,e+1|0),$=_t(r,e+4|0),R=_t(r,e+7|0),X=_t(r,e+10|0),J=_t(r,e+13|0),er;if(rr(r,e+15|0)===46){var Y=e+16|0;e=Y;var G=0;r:for(;;){var sr;if(e<C(r)){var ur=rr(r,e);sr=48<=ur?ur<=57:!1}else sr=!1;if(!sr)break r;G=lr(G,10)+ie(rr(r,e),48)|0,e=e+1|0}var Q=e-Y|0,zr;if(1<=Q&&Q<=9)zr=lr(G,lo()[9-Q|0]);else return ln(n,"1..9 digits are supported for the fraction of the second, got "+Q+" digits");er=zr}else e=e+15|0,er=0;var Er=er;if(e>=C(r))return ln(n,"The UTC offset at the end of the string is missing");var mr=rr(r,e),Ir;if(mr===122||mr===90){var br;if(C(r)===(e+1|0))br=0;else return ln(n,"Extra text after the instant at position "+(e+1|0));Ir=br}else if(mr===45||mr===43){var Cr=C(r)-e|0;if(Cr>9){var Pr=e,pr=C(r),Yr=b(jn(r,Pr,pr));return ln(n,'The UTC offset string "'+ff(Yr,16)+'" is too long')}if(Cr%3|0){var an=e,Gr=C(r),_r=b(jn(r,an,Gr));return ln(n,'Invalid UTC offset string "'+_r+'"')}var Rr=ES(),Fr=0,nn=Rr.length;r:for(;Fr<nn;){var Br=Rr[Fr];if(Fr=Fr+1|0,(e+Br|0)>=C(r))break r;if(rr(r,e+Br|0)!==58)return ln(n,"Expected ':' at index "+(e+Br|0)+", got '"+yr(rr(r,e+Br|0))+"'")}var sn=IS(),on=0,pn=sn.length;r:for(;on<pn;){var yn=sn[on];if(on=on+1|0,(e+yn|0)>=C(r))break r;var ge=rr(r,e+yn|0);if(!(48<=ge&&ge<=57))return ln(n,"Expected an ASCII digit at index "+(e+yn|0)+", got '"+yr(rr(r,e+yn|0))+"'")}var Ln=_t(r,e+1|0),Gn;Cr>3?Gn=_t(r,e+4|0):Gn=0;var me=Gn,Pn;Cr>6?Pn=_t(r,e+7|0):Pn=0;var ye=Pn;if(me>59)return ln(n,"Expected offset-minute-of-hour in 0..59, got "+me);if(ye>59)return ln(n,"Expected offset-second-of-minute in 0..59, got "+ye);if(Ln>17&&!(Ln===18&&me===0&&ye===0)){var Te=e,je=C(r),Ne=b(jn(r,Te,je));return ln(n,"Expected an offset in -18:00..+18:00, got "+Ne)}Ir=lr((lr(Ln,3600)+lr(me,60)|0)+ye|0,mr===45?-1:1)}else return ln(n,"Expected the UTC offset at position "+e+", got '"+yr(mr)+"'");var we=Ir;if(!(1<=B&&B<=12))return ln(n,"Expected a month number in 1..12, got "+B);if(!(1<=$&&$<=TS(B,vh(h))))return ln(n,"Expected a valid day-of-month for month "+B+" of year "+h+", got "+$);if(R>23)return ln(n,"Expected hour in 0..23, got "+R);if(X>59)return ln(n,"Expected minute-of-hour in 0..59, got "+X);if(J>59)return ln(n,"Expected second-of-minute in 0..59, got "+J);var En=new Oc(h,B,$,R,X,J,Er),xn=M(En.dk_1),In=qr(Un(365),xn);if(tr(xn,new y(0,0))>=0){var Ma=In,Nt=hr(xn,M(3)),ft=Ar(Nt,M(4)),vt=hr(xn,M(99)),Dt=Ar(vt,M(100)),Ni=Hr(ft,Dt),ht=hr(xn,M(399)),Di=Ar(ht,M(400));In=hr(Ma,hr(Ni,Di))}else{var De=In,Ra=Ar(xn,M(-4)),dt=Ar(xn,M(-100)),Lt=Hr(Ra,dt),Li=Ar(xn,M(-400));In=Hr(De,hr(Lt,Li))}var Ba=In,Pt=(lr(367,En.ek_1)-362|0)/12|0;In=hr(Ba,M(Pt));var Pi=In,$a=En.fk_1-1|0;if(In=hr(Pi,M($a)),En.ek_1>2){var Mi=In;if(In=Hr(Mi,Ze()),!vh(En.dk_1)){var Ri=In;In=Hr(Ri,Ze())}}var Bi=In,$i=Hr(Bi,M(719528)),Mt=(lr(En.gk_1,3600)+lr(En.hk_1,60)|0)+En.ik_1|0,Rt=qr($i,M(86400)),Fi=hr(Rt,M(Mt)),pt=Hr(Fi,M(we)),Ji=En.jk_1;return new gp(pt,Ji)}var A0;function ff(n,r){Jn();var e;return C(n)<=r?e=b(n):e=b(jn(n,0,r))+"...",e}function TS(n,r){switch(Jn(),n){case 2:return r?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function vh(n){return Jn(),(n&3)===0&&(!!(n%100|0)||(n%400|0)===0)}function Xa(n,r,e){e<10&&n.da(48),r.ae(e)}function ln(n,r){return new qc(r+' when parsing an Instant from "'+ff(n,64)+'"',n)}function Wi(n,r,e,t){var i=rr(n,e),a;return t(new Sn(i))?a=null:a=ln(n,"Expected "+r+", but got '"+yr(i)+"' at position "+e),a}function qS(n){return Jn(),P(n,new Sn(45))}function OS(n){return Jn(),P(n,new Sn(45))}function US(n){return Jn(),P(n,new Sn(84))||P(n,new Sn(116))}function jS(n){return Jn(),P(n,new Sn(58))}function NS(n){return Jn(),P(n,new Sn(58))}function DS(n){Jn();var r=n.x1_1;return 48<=r?r<=57:!1}function _t(n,r){return lr(ie(rr(n,r),48),10)+ie(rr(n,r+1|0),48)|0}var hh;function Jn(){hh||(hh=!0,z0=new Int32Array([1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9]),E0=new Int32Array([1,2,4,5,7,8,10,11,13,14]),I0=new Int32Array([3,6]),C0=new Int32Array([1,2,4,5,7,8]))}function Cu(){return q0(),T0}var T0;function LS(n,r){return q0(),new bp(n.uk_1,r).zk()}var dh;function q0(){if(!dh){dh=!0;var n=bs();T0=n}}var ph;function PS(){if(ph)return or;ph=!0,O0=new kp("PUBLICATION",1)}var O0,uo;function co(){return PS(),O0}function MS(n){var r=n;return!(r instanceof qt)}function U0(n){var r;return n instanceof qt?r=n.el_1:r=null,r}function RS(n){var r;return n instanceof qt?r=n.toString():r="Success("+ce(n)+")",r}function BS(n){return n==null?0:Sr(n)}function $S(n,r){if(!(r instanceof ii))return!1;var e=r.fl_1;return!!P(n,e)}function FS(n){var r=n;if(r instanceof qt)throw n.el_1}function j0(n){return new qt(n)}function N(n,r){return new Sl(n,r)}var m1;function Ms(){return m1===l&&new Sp,m1}function JS(n,r){return n.length<=r?n:ae(n,0,r)+"..."}function Kn(n,r,e){throw U.v("Expected "+r+" at index "+e+", but was '"+yr(K(n,e))+"'")}var y1;function Ml(){return y1===l&&new zp,y1}function N0(n,r){var e=n&255,t=r&255;return Ue(e,t)}function HS(n,r){return N0(n.pl_1,r instanceof Me?r.pl_1:g())}function w1(n){return(n&255).toString()}function GS(n,r){return!(!(r instanceof Me)||n!==r.pl_1)}function _h(n){return new Int8Array(n)}function KS(n,r){var e=n[r];return e}function WS(n,r,e){var t=n;t[r]=e}function vi(n){return n.length}function YS(n){return new Ep(n)}function D0(n,r){var e=n,t=r;return eb(e,t)}function ZS(n,r){return r instanceof Me?D0(n.ul_1,r instanceof Me?r.pl_1:g()):!1}function VS(n){return n.length===0}function XS(n){return"UByteArray(storage="+b(n)+")"}function QS(n){return Sr(n)}function rz(n,r){if(!(r instanceof si))return!1;var e=r.ul_1;return!!P(n,e)}var b1;function Rl(){return b1===l&&new Ip,b1}function L0(n,r){return aa(n,r)}function nz(n,r){return L0(n.am_1,r instanceof Xn?r.am_1:g())}function k1(n){return(n>>>0).toString()}function ez(n,r){return!(!(r instanceof Xn)||n!==r.am_1)}function gh(n){return new Int32Array(n)}function tz(n,r){var e=n[r];return e}function iz(n,r,e){var t=n;t[r]=e}function hi(n){return n.length}function az(n){return new Cp(n)}function P0(n,r){var e=n,t=r;return tb(e,t)}function sz(n,r){return r instanceof Xn?P0(n.fm_1,r instanceof Xn?r.am_1:g()):!1}function oz(n){return n.length===0}function lz(n){return"UIntArray(storage="+b(n)+")"}function uz(n){return Sr(n)}function cz(n,r){if(!(r instanceof oi))return!1;var e=r.fm_1;return!!P(n,e)}var x1;function Rs(){return x1===l&&new Ap,x1}function M0(n,r){return bt(n,r)}function fz(n,r){return M0(n.lm_1,r instanceof Qn?r.lm_1:g())}function S1(n){var r=n;return Mk(r,10)}function vz(n){return n.hashCode()}function hz(n,r){if(!(r instanceof Qn))return!1;var e=r.lm_1;return!!ir(n,e)}function mh(n){return mi(n)}function dz(n,r){var e=n[r];return e}function pz(n,r,e){var t=n;t[r]=e}function di(n){return n.length}function _z(n){return new Tp(n)}function R0(n,r){var e=n,t=r;return ib(e,t)}function gz(n,r){return r instanceof Qn?R0(n.qm_1,r instanceof Qn?r.lm_1:g()):!1}function mz(n){return n.length===0}function yz(n){return"ULongArray(storage="+b(n)+")"}function wz(n){return Sr(n)}function bz(n,r){if(!(r instanceof li))return!1;var e=r.qm_1;return!!P(n,e)}var z1;function Bl(){return z1===l&&new qp,z1}function B0(n,r){var e=n&65535,t=r&65535;return Ue(e,t)}function kz(n,r){return B0(n.wm_1,r instanceof Re?r.wm_1:g())}function E1(n){return(n&65535).toString()}function xz(n,r){return!(!(r instanceof Re)||n!==r.wm_1)}function yh(n){return new Int16Array(n)}function Sz(n,r){var e=n[r];return e}function zz(n,r,e){var t=n;t[r]=e}function pi(n){return n.length}function Ez(n){return new Op(n)}function $0(n,r){var e=n,t=r;return ab(e,t)}function Iz(n,r){return r instanceof Re?$0(n.bn_1,r instanceof Re?r.wm_1:g()):!1}function Cz(n){return n.length===0}function Az(n){return"UShortArray(storage="+b(n)+")"}function Tz(n){return Sr(n)}function qz(n,r){if(!(r instanceof ui))return!1;var e=r.bn_1;return!!P(n,e)}function F0(n){return Dz(n,10)}function Oz(n){var r=Lz(n),e,t=r;return(t==null?null:new Xn(t))==null?Ia(n):e=r,e}function Uz(n){var r=F0(n),e,t=r;return(t==null?null:new Qn(t))==null?Ia(n):e=r,e}function jz(n){var r=Pz(n),e,t=r;return(t==null?null:new Me(t))==null?Ia(n):e=r,e}function Nz(n){var r=Mz(n),e,t=r;return(t==null?null:new Re(t))==null?Ia(n):e=r,e}function Dz(n,r){Sa(r);var e=n.length;if(e===0)return null;var t=new y(-1,-1),i,a=K(n,0);if(gn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=new y(477218588,119304647),o=s,u=M(r),c=new y(0,0),f=i;if(f<e)do{var v=f;f=f+1|0;var h=Al(K(n,v),r);if(h<0)return null;var d=c,_=o;if(bt(d,_)>0)if(P(new Qn(o),new Qn(s))){o=Pk(t,u);var m=c,w=o;if(bt(m,w)>0)return null}else return null;var x=c;c=qr(x,u);var k=c,S=c,E=h,I=E,A=gs(M(I),new y(-1,0)),q=A;c=hr(S,q);var j=c;if(bt(j,k)<0)return null}while(f<e);return c}function Lz(n){return vf(n,10)}function Pz(n){return Rz(n,10)}function Mz(n){return Bz(n,10)}function vf(n,r){Sa(r);var e=n.length;if(e===0)return null;var t=-1,i,a=K(n,0);if(gn(a,48)<0){if(e===1||a!==43)return null;i=1}else i=0;var s=119304647,o=s,u=r,c=0,f=i;if(f<e)do{var v=f;f=f+1|0;var h=Al(K(n,v),r);if(h<0)return null;var d=c,_=o;if(aa(d,_)>0)if(P(new Xn(o),new Xn(s))){o=Lk(t,u);var m=c,w=o;if(aa(m,w)>0)return null}else return null;var x=c;c=lr(x,u);var k=c,S=c,E=h;c=S+E|0;var I=c;if(aa(I,k)<0)return null}while(f<e);return c}function Rz(n,r){var e=vf(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&255;if(aa(a,o)>0)return null;var u=a;return Mn(u)}function Bz(n,r){var e=vf(n,r),t,i=e;if((i==null?null:new Xn(i))==null)return null;t=e;var a=t,s=-1,o=s&65535;if(aa(a,o)>0)return null;var u=a;return Kc(u)}Mr(xc,"CharSequence");Mr(Ce,"Comparable");p(rd,"Number");p(nd);p(ed);p(td);Qr(id);p(Sn,"Char",l,l,[Ce]);Mr(W,"Collection");Mr(Oe,"Set",l,l,[W]);Mr(zn,"List",l,l,[W]);Mr(Xe,"Entry");Mr(mn,"Map");Mr(ua,"MutableMap",l,l,[mn]);Qr(Mw);p(se,"Enum",l,l,[Ce]);Qr(ad);p(y,"Long",l,l,[Ce]);Mr(bn,"FunctionAdapter");p(sd);D(Rw,"ByteCompanionObject");D(Bw,"ShortCompanionObject");D($w,"IntCompanionObject");D(Fw,"FloatCompanionObject");D(Jw,"DoubleCompanionObject");D(Hw,"StringCompanionObject");D(Gw,"BooleanCompanionObject");D(od,"Digit");Mr(dn,"Comparator");D(ml,"Unit");p(ma,"AbstractCollection",l,l,[W]);p(Es,"AbstractMutableCollection",l,l,[W]);p(Sc,"IteratorImpl");p(ld,"ListIteratorImpl");p(ud,"AbstractMutableList",l,l,[zn,W]);p(cd,"AbstractMap",l,l,[mn]);p(fd,"AbstractMutableMap",l,l,[ua]);p(Is,"AbstractMutableSet",l,l,[W,Oe]);Qr(vd);Mr(Cs,"RandomAccess");p(T,"ArrayList",T.m,l,[zn,W,Cs]);p(hs,"HashMap",hs.x6,l,[ua]);p(hd,"HashMapKeys",l,l,[W,Oe]);p(dd,"HashMapValues",l,l,[W]);p(pd,"HashMapEntrySetBase",l,l,[W,Oe]);p(_d,"HashMapEntrySet");p(gd);p(md,"HashMapKeysDefault");p(yd);p(wd,"HashMapValuesDefault");p(_i,"HashSet",_i.n8,l,[W,Oe]);Qr(bd);p(yl,"Itr");p(kd,"KeysItr");p(xd,"ValuesItr");p(Sd,"EntriesItr");p(zd,"EntryRef",l,l,[Xe]);Mr(Ed,"InternalMap");Lr(Qe).h8=Kw;p(Qe,"InternalHashMap",Qe.i7,l,[Ed]);p(vr,"LinkedHashMap",vr.q4,l,[ua]);p(Tn,"LinkedHashSet",Tn.e1,l,[W,Oe]);Mr(tt,"Continuation");D(Id,"CompletedContinuation",l,l,[tt]);p(zc,"InterceptedCoroutine",l,l,[tt]);p(Ec,"GeneratorCoroutineImpl",l,l,[tt]);p(Cd,l,l,l,[tt]);p(ds,"Exception",ds.nb);p(le,"RuntimeException",le.hb);p(ue,"UnsupportedOperationException",ue.p6);p(U,"IllegalArgumentException",U.kb);p(Or,"NoSuchElementException",Or.j1);p(Wn,"IndexOutOfBoundsException",Wn.sb);p(xr,"IllegalStateException",xr.ub);p(po,"ConcurrentModificationException",po.m9);p(Du,"ArithmeticException",Du.yb);p(_o,"Error",_o.ec);p(ts,"AssertionError",ts.cc);p(Lu,"NumberFormatException",Lu.mc);p(Pu,"NoWhenBranchMatchedException",Pu.s3);p(Mu,"NullPointerException",Mu.w3);p(Ru,"ClassCastException",Ru.a4);Mr(Ge,"KClass");p(ya,"KClassImpl",l,l,[Ge]);p(en,"PrimitiveKClassImpl");D(Ic,"NothingKClassImpl");p(Bu,"SimpleKClassImpl");Mr(xi,"KProperty1");D(Ad,"PrimitiveClasses");p(mv,"CharacterCodingException",mv.wd);p(rn,"StringBuilder",rn.f,l,[xc]);Qr(Td);p(St,"Regex");p(wl,"MatchGroup");p(qd,l,l,l,[W]);p(Cc,"AbstractList",l,l,[zn]);p(Od);p(Ud);p(Ww,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(mt,"DurationUnit");p(Ac,"IteratorImpl");p(jd,"ListIteratorImpl");Qr(Nd);p(Dd);p(Ld);Qr(Yw);p(Pd,"AbstractSet",l,l,[Oe]);p(Md);p(Rd);Qr(Bd);D($d,"EmptyList",l,l,[zn,Cs]);D(Fd,"EmptyIterator");p(bl,"IndexedValue");p(Jd,"IndexingIterable");p(Hd,"IndexingIterator");Mr(Gd,"MapWithDefault",l,l,[mn]);D(Kd,"EmptyMap",l,l,[mn]);p(Wd,"IntIterator");p(Yd);p(Zd,"TransformingSequence");Mr(kl,"DropTakeSequence");p(Vd);p(xl,"TakeSequence",l,l,[kl]);D(Xd,"EmptySequence",l,l,[kl]);p(Qd);p(Tc,"GeneratorSequence");D(rp,"EmptySet",l,l,[Oe]);D(np,"NaturalOrderComparator",l,l,[dn]);p(ep,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(tp,"Key");Mr(Zw,"ContinuationInterceptor");D(ip,"EmptyCoroutineContext");p(ap,"CoroutineSingletons");p(sp,"EnumEntriesList",l,l,[zn,Cs]);Qr(op);p(As,"IntProgression");Mr(na,"ClosedRange");p(Tt,"IntRange",l,l,[na]);p(lp,"IntProgressionIterator");Qr(up);p(cp);p(fp,"DelimitedRangesSequence");D(Vw,"State");p(vp,"LinesIterator");p(hp);Qr(dp);p(xe,"Duration",l,l,[Ce]);Qr(pp);p($u,"LongParser");D(Xw,"FractionalParser");Qr(_p);p(rt,"Instant",l,l,[Ce]);p(gp,"Success");p(qc,"Failure");Qr(mp);p(Oc,"UnboundLocalDateTime");p(Uc,"InstantFormatException");p(yp,"DeepRecursiveScope",l,l,l,[1,2]);p(wp,"DeepRecursiveFunction");p(bp,"DeepRecursiveScopeImpl",l,l,[tt],[1,2]);p(kp,"LazyThreadSafetyMode");p(jc,"UnsafeLazyImpl");D(xp,"UNINITIALIZED_VALUE");Qr(Qw);p(qt,"Failure");p(ii,"Result");p(yv,"NotImplementedError",yv.bb);p(Sl,"Pair");Qr(Sp);p(zt,"Uuid",l,l,[Ce]);Qr(zp);p(Me,"UByte",l,l,[Ce]);p(Ep,"Iterator");p(si,"UByteArray",l,l,[W]);Qr(Ip);p(Xn,"UInt",l,l,[Ce]);p(Cp,"Iterator");p(oi,"UIntArray",l,l,[W]);Qr(Ap);p(Qn,"ULong",l,l,[Ce]);p(Tp,"Iterator");p(li,"ULongArray",l,l,[W]);Qr(qp);p(Re,"UShort",l,l,[Ce]);p(Op,"Iterator");p(ui,"UShortArray",l,l,[W]);or=new ml;ao=null;ms=new bd;q_=new Id;Nn=new Nd;ys=new Bd;ws=new Fd;ql=new Xd;r0=new np;f1=new tp;sf=new up;A0=new mp;uo=new xp;var Vr=Math.imul;class $l{}class sa{}class cr{}class $n extends U{static nn(){var r=this.kb();return Au(r),r}static on(r){var e=this.v(r);return Au(e),e}static pn(r,e){var t=this.lb(r,e);return Au(t),t}}class Fl extends $n{constructor(r,e,t,i){return new.target.xn(r,e,t,i)}static xn(r,e,t,i){var a=this.pn(r,e);return cn(a,a.wn_1),a.un_1=t,a.vn_1=i,a}yn(r){return Fl.xn(r,this,this.un_1,this.vn_1)}}class de{}function Ci(){return!1}function Ai(){return!1}function Bs(){return dr()}class J0{}class H0{constructor(r){this.oo_1=r,this.no_1=r.go()}y(){return this.no_1>0}z(){var r=this.oo_1.go(),e=this.no_1;return this.no_1=e-1|0,this.oo_1.lo(r-e|0)}}class G0{constructor(r){this.po_1=r}x(){return new H0(this.po_1)}}class K0{constructor(r){this.qo_1=r,this.ro_1=!1,this.so_1=dr(),this.to_1=T.m(),this.uo_1=_i.n8(),this.vo_1=T.m(),this.wo_1=T.m(),this.xo_1=T.m()}yo(r,e,t,i){if(!this.uo_1.n(r)){var a="Element with name '"+r+"' is already registered in "+this.qo_1;throw U.v(b(a))}this.to_1.n(r),this.vo_1.n(e),this.wo_1.n(t),this.xo_1.n(i)}zo(r,e,t,i,a){t=t===l?dr():t,i=i===l?!1:i;var s;return a===l?(this.yo(r,e,t,i),s=or):s=a.yo.call(this,r,e,t,i),s}}class $s{}class Aa{constructor(r,e,t,i,a){this.ap_1=r,this.bp_1=e,this.cp_1=t,this.dp_1=a.so_1,this.ep_1=kb(a.to_1);var s=this,o=a.to_1;s.fp_1=ki(o),this.gp_1=D1(a.vo_1);var u=this,c=a.wo_1;u.hp_1=ki(c),this.ip_1=xb(a.xo_1);for(var f=this,v=db(this.fp_1),h=T.g1(Zr(v,10)),d=v.x();d.y();){var _=d.z(),m=N(_.xg_1,_.wg_1);h.n(m)}f.jp_1=W_(h),this.kp_1=D1(i);var w=this;w.lp_1=U_(hE(this))}co(){return this.ap_1}do(){return this.bp_1}go(){return this.cp_1}ho(){return this.dp_1}mp(){return this.ep_1}io(r){return oa(this.fp_1,r)}jo(r){var e=this.jp_1.o2(r);return e??-3}ko(r){return oa(this.hp_1,r)}lo(r){return oa(this.gp_1,r)}mo(r){return zm(this.ip_1,r)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Aa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Wc(this.kp_1,r.kp_1)){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return hm(this)}toString(){return wm(this)}}class Ta{toString(){return un(Dr(this).oc())}hashCode(){return oe(this.toString())}}class Jl extends Ta{constructor(){To=null,super(),To=this}}class W0 extends Ta{constructor(){qo=null,super(),qo=this}}class Fs extends Ta{}class Y0 extends Fs{constructor(){Oo=null,super(),Oo=this}}class Z0 extends Fs{constructor(){Uo=null,super(),Uo=this}}class V0 extends Fs{constructor(){jo=null,super(),jo=this}}class X0 extends Fs{constructor(){No=null,super(),No=this}}class Hn extends Ta{}class Q0 extends Hn{constructor(){Do=null,super(),Do=this}}class rg extends Hn{constructor(){Lo=null,super(),Lo=this}}class ng extends Hn{constructor(){Po=null,super(),Po=this}}class eg extends Hn{constructor(){Mo=null,super(),Mo=this}}class tg extends Hn{constructor(){Ro=null,super(),Ro=this}}class ig extends Hn{constructor(){Bo=null,super(),Bo=this}}class ag extends Hn{constructor(){$o=null,super(),$o=this}}class sg extends Hn{constructor(){Fo=null,super(),Fo=this}}class og extends Hn{constructor(){Jo=null,super(),Jo=this}}class qa extends Ta{}class lg extends qa{constructor(){Ho=null,super(),Ho=this}}class Hl{}function ug(n){return n.fn(this)}class Gl{}function cg(){return!1}function fg(n){return-1}function vg(n,r,e,t,i){return t=t===l?null:t,i===l?this.nq(n,r,e,t):i.nq.call(this,n,r,e,t)}class Ti{np(){throw $n.on(b(Dr(this))+" can't retrieve untyped values")}op(){return!0}pp(){return null}qp(){var r=this.np();return typeof r=="boolean"?r:g()}rp(){var r=this.np();return typeof r=="number"?r:g()}sp(){var r=this.np();return typeof r=="number"?r:g()}tp(){var r=this.np();return typeof r=="number"?r:g()}up(){var r=this.np();return r instanceof y?r:g()}vp(){var r=this.np();return typeof r=="number"?r:g()}wp(){var r=this.np();return typeof r=="number"?r:g()}xp(){var r=this.np();return r instanceof Sn?r.x1_1:g()}yp(){var r=this.np();return typeof r=="string"?r:g()}zp(r){return this}aq(r,e){return this.bq(r)}cq(r){return this}dq(r){}eq(r,e){return this.qp()}fq(r,e){return this.rp()}gq(r,e){return this.sp()}hq(r,e){return this.tp()}iq(r,e){return this.up()}jq(r,e){return this.vp()}kq(r,e){return this.wp()}lq(r,e){return this.xp()}mq(r,e){return this.zp(r.lo(e))}nq(r,e,t,i){return this.aq(t,i)}}class hf{}function $z(n,r){return this.cq(n)}function Fz(n,r){n.en(this,r)}class Js{static tq(){return Ei(this)}cq(r){return this}dq(r){}uq(r,e){return!0}vq(r){throw $n.on("Non-serializable "+b(Dr(r))+" is not supported by "+b(Dr(this))+" encoder")}wq(){throw $n.on("'null' is not supported by default")}xq(r){return this.vq(r)}yq(r){return this.vq(r)}zq(r){return this.vq(r)}ar(r){return this.vq(r)}br(r){return this.vq(r)}cr(r){return this.vq(r)}dr(r){return this.vq(r)}er(r){return this.vq(new Sn(r))}fr(r){return this.vq(r)}gr(r){return this}hr(r,e,t){this.uq(r,e)&&this.xq(t)}ir(r,e,t){this.uq(r,e)&&this.yq(t)}jr(r,e,t){this.uq(r,e)&&this.zq(t)}kr(r,e,t){this.uq(r,e)&&this.ar(t)}lr(r,e,t){this.uq(r,e)&&this.br(t)}mr(r,e,t){this.uq(r,e)&&this.cr(t)}nr(r,e,t){this.uq(r,e)&&this.dr(t)}or(r,e,t){this.uq(r,e)&&this.er(t)}pr(r,e){return this.uq(r,e)?this.gr(r.lo(e)):DE()}qr(r,e,t,i){this.uq(r,e)&&this.rr(t,i)}}class _a{in(r,e){return r.pq().tr(this.hn(),e)}gn(r,e){return r.pq().ur(this.hn(),e)}}class hg{constructor(){T1=this,this.vr_1=LE()}dn(){return this.vr_1}wr(r,e){throw $n.on("'kotlin.Nothing' cannot be serialized")}en(r,e){var t;return t=g(),this.wr(r,t)}fn(r){throw $n.on("'kotlin.Nothing' does not have instances")}}class dg{constructor(){q1=this,this.xr_1=new kn("kotlin.time.Duration",ja())}dn(){return this.xr_1}yr(r,e){r.fr(uS(e))}en(r,e){return this.yr(r,e instanceof xe?e.kj_1:g())}zr(r){return Wr().lj(r.yp())}fn(r){return new xe(this.zr(r))}}class pg{constructor(){O1=this,this.as_1=new kn("kotlin.time.Instant",ja())}dn(){return this.as_1}bs(r,e){r.fr(e.toString())}en(r,e){return this.bs(r,e instanceof rt?e:g())}fn(r){return xt().xj(r.yp())}}class _g{constructor(){U1=this,this.cs_1=new kn("kotlin.uuid.Uuid",ja())}dn(){return this.cs_1}ds(r,e){r.fr(e.toString())}en(r,e){return this.ds(r,e instanceof zt?e:g())}fn(r){return Ms().gl(r.yp())}}class jt{constructor(r){this.gs_1=r,this.hs_1=1}do(){return Gs()}go(){return this.hs_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=Ul(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),dr()}lo(r){return yt(r,this.co()),this.gs_1}equals(r){return this===r?!0:r instanceof jt?!!(P(this.gs_1,r.gs_1)&&this.co()===r.co()):!1}hashCode(){return Vr(Sr(this.gs_1),31)+oe(this.co())|0}toString(){return this.co()+"("+b(this.gs_1)+")"}}class gg extends jt{co(){return"kotlin.collections.ArrayList"}}class qi{constructor(r,e,t){this.is_1=r,this.js_1=e,this.ks_1=t,this.ls_1=2}co(){return this.is_1}do(){return Vl()}go(){return this.ls_1}io(r){return yt(r,this.co()),r.toString()}jo(r){var e=Ul(r),t;if(e==null)t=null;else{var i;e>=0?i=e:i=null,t=i}var a=t;return a??-3}mo(r){return yt(r,this.co()),!1}ko(r){return yt(r,this.co()),dr()}lo(r){yt(r,this.co());var e;switch(r%2|0){case 0:e=this.js_1;break;case 1:e=this.ks_1;break;default:var t="Unreached";throw xr.o3(b(t))}return e}equals(r){return this===r?!0:!(!(r instanceof qi)||this.co()!==r.co()||!P(this.js_1,r.js_1)||!P(this.ks_1,r.ks_1))}hashCode(){var r=oe(this.co());return r=Vr(31,r)+Sr(this.js_1)|0,r=Vr(31,r)+Sr(this.ks_1)|0,r}toString(){return this.co()+"("+b(this.js_1)+", "+b(this.ks_1)+")"}}class mg extends qi{constructor(r,e){super("kotlin.collections.LinkedHashMap",r,e)}}class yg extends jt{constructor(r){super(r),this.os_1=r.co()+"Array"}co(){return this.os_1}}class df{it(r,e){var t=r.cq(this.dn()),i=t.sq(this.dn());if(!(i>=-1)){var a="Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: "+i;throw U.v(b(a))}var s;e!=null?s=this.xs(e,this.nt(e)+vn(i,0)|0):s=this.rs(i);var o=s,u=this.ts(o);if(t.qq())this.ft(t,o,u,i);else r:for(;;){var c=t.rq(this.dn());if(c===-1)break r;this.ht(t,u+c|0,o)}return t.dq(this.dn()),this.vs(o)}fn(r){return this.it(r,null)}ht(r,e,t,i,a){i=i===l?!0:i;var s;return a===l?(this.gt(r,e,t,i),s=or):s=a.gt.call(this,r,e,t,i),s}}class pf extends df{constructor(r){super(),this.dt_1=r}et(r,e){var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0;if(o<t)do{var u=o;o=o+1|0,a.qr(this.dn(),u,this.dt_1,s.z())}while(o<t);a.dq(i)}en(r,e){return this.et(r,e)}ft(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=0;if(s<i)do{var o=s;s=s+1|0,this.gt(r,t+o|0,e,!1)}while(s<i)}gt(r,e,t,i){this.zs(t,e,r.oq(this.dn(),e,this.dt_1))}}class wg extends pf{bt(r){return r.c1()}nt(r){return this.bt(r!=null&&z(r,W)?r:g())}ct(r){return r.x()}pt(r){return this.ct(r!=null&&z(r,W)?r:g())}}class bg extends wg{constructor(r){super(r),this.qs_1=new gg(r.dn())}dn(){return this.qs_1}rs(r){return r===-1?T.m():T.g1(r)}ss(r){return r.c1()}ts(r){return this.ss(r instanceof T?r:g())}us(r){return r}vs(r){return this.us(r instanceof T?r:g())}ws(r,e){if(r instanceof T)return r.k6(e),r;if(e===r.c1())return T.f1(r);var t=T.g1(e);return t.h1(r),t}xs(r,e){return this.ws(r!=null&&z(r,zn)?r:g(),e)}ys(r,e,t){r.l5(e,t)}zs(r,e,t){return this.ys(r instanceof T?r:g(),e,t)}}class kg extends df{constructor(r,e){super(),this.tt_1=r,this.ut_1=e}vt(r,e,t,i){if(!(i>=0)){var a="Size must be known in advance when using READ_ALL";throw U.v(b(a))}var s=jb(Mc(0,Vr(i,2)),2),o=s.r1_1,u=s.s1_1,c=s.t1_1;if(c>0&&o<=u||c<0&&u<=o)do{var f=o;o=o+c|0,this.wt(r,t+f|0,e,!1)}while(f!==u)}ft(r,e,t,i){return this.vt(r,e!=null&&z(e,ua)?e:g(),t,i)}wt(r,e,t,i){var a=r.oq(this.dn(),e,this.tt_1),s;if(i){var o=r.rq(this.dn());if(o!==(e+1|0)){var u="Value must follow key in a map, index for key: "+e+", returned index for value: "+o;throw U.v(b(u))}s=o}else s=e+1|0;var c=s,f,v;if(t.m2(a)){var h=this.ut_1.dn().do();v=!(h instanceof Hn)}else v=!1;v?f=r.nq(this.dn(),c,this.ut_1,Se(t,a)):f=r.oq(this.dn(),c,this.ut_1);var d=f;t.s2(a,d)}gt(r,e,t,i){return this.wt(r,e,t!=null&&z(t,ua)?t:g(),i)}et(r,e){for(var t=this.nt(e),i=this.dn(),a=r.sr(i,t),s=this.pt(e),o=0,u=s;u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=this.dn(),d=o;o=d+1|0,a.qr(h,d,this.tt_1,f);var _=this.dn(),m=o;o=m+1|0,a.qr(_,m,this.ut_1,v)}a.dq(i)}en(r,e){return this.et(r,e)}}class xg extends kg{constructor(r,e){super(r,e),this.lt_1=new mg(r.dn(),e.dn())}dn(){return this.lt_1}mt(r){return r.c1()}nt(r){return this.mt(r!=null&&z(r,mn)?r:g())}ot(r){return r.r2().x()}pt(r){return this.ot(r!=null&&z(r,mn)?r:g())}rs(r){return r===-1?vr.q4():wh(r)}qt(r){return Vr(r.c1(),2)}ts(r){return this.qt(r instanceof vr?r:g())}rt(r){return r}vs(r){return this.rt(r instanceof vr?r:g())}st(r,e){if(r instanceof vr)return r;if(e<=r.c1())return vr.ia(r);var t=wh(e);return t.u2(r),t}xs(r,e){return this.st(r!=null&&z(r,mn)?r:g(),e)}}class pe extends pf{constructor(r){super(r),this.yt_1=new yg(r.dn())}dn(){return this.yt_1}zt(r){return r.au()}ts(r){return this.zt(r instanceof Dn?r:g())}bu(r){return r.cu()}vs(r){return this.bu(r instanceof Dn?r:g())}du(r){var e="This method lead to boxing and must not be used, use writeContents instead";throw xr.o3(b(e))}pt(r){return this.du(r)}eu(r,e,t){var i="This method lead to boxing and must not be used, use Builder.append instead";throw xr.o3(b(i))}zs(r,e,t){return this.eu(r instanceof Dn?r:g(),e,t)}rs(r){return r===-1?this.fu():this.gu(r)}ju(r,e){var t=this.nt(e),i=this.yt_1,a=r.sr(i,t);this.iu(a,e,t),a.dq(i)}en(r,e){return this.ju(r,e)}et(r,e){return this.ju(r,e)}fn(r){return this.it(r,null)}}class Dn{static ku(){return Ei(this)}mu(r,e){r=r===l?this.au()+1|0:r;var t;return e===l?(this.lu(r),t=or):t=e.lu.call(this,r),t}}let Sg=class{constructor(){j1=this,this.nu_1=mi(0)}};class zg{constructor(r,e){bh(),this.ou_1=r,this.pu_1=e;var t=this.ou_1.go();if(t<=64){var i=this,a;t===64?a=new y(0,0):a=Vn(new y(-1,-1),t),i.qu_1=a,this.ru_1=bh().nu_1}else this.qu_1=new y(0,0),this.ru_1=qE(this,t)}su(r){r<64?this.qu_1=yi(this.qu_1,Vn(new y(1,0),r)):OE(this,r)}tu(){for(var r=this.ou_1.go();!ir(this.qu_1,new y(-1,-1));){var e=__($c(this.qu_1));if(this.qu_1=yi(this.qu_1,Vn(new y(1,0),e)),this.pu_1(this.ou_1,e))return e}return r>64?UE(this):-1}}class Oa{constructor(r,e,t){e=e===l?null:e,this.hv_1=r,this.iv_1=e,this.jv_1=t,this.kv_1=-1;for(var i=this,a=0,s=this.jv_1,o=Array(s);a<s;)o[a]="[UNINITIALIZED]",a=a+1|0;i.lv_1=o;var u=this,c=this.jv_1;u.mv_1=Array(c),this.nv_1=null,this.ov_1=mo(this.jv_1),this.pv_1=Tr();var f=this,v=co();f.qv_1=so(v,FE(this));var h=this,d=co();h.rv_1=so(d,HE(this));var _=this,m=co();_.sv_1=so(m,KE(this))}co(){return this.hv_1}go(){return this.jv_1}do(){return Zl()}ho(){var r=this.nv_1;return r??dr()}mp(){return this.pv_1.p2()}tv(){var r=this.rv_1,e=xi;return ka("typeParameterDescriptors",1,e,GE(),null),r.l2()}lo(r){return oa(gm(this),r).dn()}mo(r){return zm(this.ov_1,r)}ko(r){var e=oa(this.mv_1,r);return e??dr()}io(r){return oa(this.lv_1,r)}jo(r){var e=this.pv_1.o2(r);return e??-3}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Oa)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!Wc(this.tv(),r.tv())){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}hashCode(){return mm(this)}toString(){return wm(this)}}class Kl extends Oa{constructor(r,e){super(r,e,1),this.gv_1=!0}fo(){return this.gv_1}hashCode(){return Vr(super.hashCode(),31)}equals(r){var e;r:{if(this===r){e=!0;break r}if(!(r instanceof Kl)){e=!1;break r}if(this.co()!==r.co()){e=!1;break r}if(!(r.gv_1&&Wc(this.tv(),r.tv()))){e=!1;break r}if(this.go()!==r.go()){e=!1;break r}var t=0,i=this.go();if(t<i)do{var a=t;if(t=t+1|0,this.lo(a).co()!==r.lo(a).co()){e=!1;break r}if(!P(this.lo(a).do(),r.lo(a).do())){e=!1;break r}}while(t<i);e=!0}return e}}class Eg{}function Jz(){return bm()}class _f{constructor(r){this.uv_1=r}vv(){return[this.uv_1]}dn(){var r="unsupported";throw xr.o3(b(r))}en(r,e){var t="unsupported";throw xr.o3(b(t))}fn(r){var e="unsupported";throw xr.o3(b(e))}}class Ig extends Js{constructor(){return new.target.yv()}static yv(){Go=null;var r=this.tq();return Go=r,r.xv_1=Xl(),r}pq(){return this.xv_1}vq(r){return or}wq(){return or}xq(r){return or}yq(r){return or}zq(r){return or}ar(r){return or}br(r){return or}cr(r){return or}dr(r){return or}er(r){return or}fr(r){return or}}class Hs{constructor(){N1=this,this.zv_1=zf(),this.aw_1="kotlin.Nothing"}do(){return this.zv_1}co(){return this.aw_1}go(){return 0}io(r){Qa()}jo(r){Qa()}mo(r){Qa()}lo(r){Qa()}ko(r){Qa()}toString(){return"NothingSerialDescriptor"}equals(r){return this===r}hashCode(){return oe(this.aw_1)+Vr(31,this.zv_1.hashCode())|0}}class Cg{}class Ag{constructor(r,e){this.bw_1=e,this.cw_1=dr();var t=this,i=co();t.dw_1=so(i,ME(r,this))}dn(){var r=this.dw_1,e=xi;return ka("descriptor",1,e,RE(),null),r.l2()}ew(r,e){r.cq(this.dn()).dq(this.dn())}en(r,e){return this.ew(r,e??g())}fn(r){var e=this.dn(),t=r.cq(e);r:{if(t.qq())break r;var i=t.rq(this.dn());if(i===-1)break r;throw $n.on("Unexpected index "+i)}return t.dq(e),this.bw_1}}class Tg extends pe{constructor(){Ko=null,super(lm(Bc())),Ko=this}hw(r){return r.length}nt(r){return this.hw(r!=null&&os(r)?r:g())}iw(r,e){return e===r.length?Jt.lw(r):Jt.mw(Xu(r,e),r.length)}xs(r,e){return this.iw(r!=null&&os(r)?r:g(),e)}gu(r){return Jt.nw(r)}fu(){return Jt.ow()}pw(r,e,t,i){t.qw(r.lq(this.yt_1,e))}gt(r,e,t,i){return this.pw(r,e,t instanceof Jt?t:g(),i)}hu(r,e,t,i){return this.pw(r,e,t instanceof Jt?t:g(),i)}rw(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.or(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rw(r,e!=null&&os(e)?e:g(),t)}}class qg extends pe{constructor(){Wo=null,super(um()),Wo=this}uw(r){return r.length}nt(r){return this.uw(r!=null&&cs(r)?r:g())}vw(r,e){return e===r.length?Ht.yw(r):Ht.zw(Qu(r,e),r.length)}xs(r,e){return this.vw(r!=null&&cs(r)?r:g(),e)}gu(r){return Ht.ax(r)}fu(){return Ht.bx()}cx(r,e,t,i){t.dx(r.kq(this.yt_1,e))}gt(r,e,t,i){return this.cx(r,e,t instanceof Ht?t:g(),i)}hu(r,e,t,i){return this.cx(r,e,t instanceof Ht?t:g(),i)}ex(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.nr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ex(r,e!=null&&cs(e)?e:g(),t)}}class Og extends pe{constructor(){Yo=null,super(cm()),Yo=this}hx(r){return r.length}nt(r){return this.hx(r!=null&&us(r)?r:g())}ix(r,e){return e===r.length?Gt.lx(r):Gt.mx(r1(r,e),r.length)}xs(r,e){return this.ix(r!=null&&us(r)?r:g(),e)}gu(r){return Gt.nx(r)}fu(){return Gt.ox()}px(r,e,t,i){t.qx(r.jq(this.yt_1,e))}gt(r,e,t,i){return this.px(r,e,t instanceof Gt?t:g(),i)}hu(r,e,t,i){return this.px(r,e,t instanceof Gt?t:g(),i)}rx(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.mr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.rx(r,e!=null&&us(e)?e:g(),t)}}class Ug extends pe{constructor(){Zo=null,super(kf(zl())),Zo=this}ux(r){return r.length}nt(r){return this.ux(r!=null&&ea(r)?r:g())}vx(r,e){return e===r.length?Kt.yx(r):Kt.zx(va(r,e),r.length)}xs(r,e){return this.vx(r!=null&&ea(r)?r:g(),e)}gu(r){return Kt.ay(r)}fu(){return Kt.by()}cy(r,e,t,i){t.dy(r.iq(this.yt_1,e))}gt(r,e,t,i){return this.cy(r,e,t instanceof Kt?t:g(),i)}hu(r,e,t,i){return this.cy(r,e,t instanceof Kt?t:g(),i)}ey(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.lr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ey(r,e!=null&&ea(e)?e:g(),t)}}class jg extends pe{constructor(){Vo=null,super(Wl(Rs())),Vo=this}hy(r){return di(r)}nt(r){return this.hy(r instanceof li?r.qm_1:g())}iy(r,e){if(e===di(r))return Wt.ly(r);var t=va(r,e);return Wt.my(t,di(r))}xs(r,e){return this.iy(r instanceof li?r.qm_1:g(),e)}gu(r){return Wt.ny(r)}fu(){return Wt.oy()}py(r,e,t,i){var a=r.mq(this.yt_1,e).up(),s=a;t.qy(s)}gt(r,e,t,i){return this.py(r,e,t instanceof Wt?t:g(),i)}hu(r,e,t,i){return this.py(r,e,t instanceof Wt?t:g(),i)}ry(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=dz(e,a),u=o;s.br(u)}while(i<t)}iu(r,e,t){return this.ry(r,e instanceof li?e.qm_1:g(),t)}}class Ng extends pe{constructor(){Xo=null,super(bf()),Xo=this}uy(r){return r.length}nt(r){return this.uy(r!=null&&ls(r)?r:g())}vy(r,e){return e===r.length?Yt.yy(r):Yt.zy(bi(r,e),r.length)}xs(r,e){return this.vy(r!=null&&ls(r)?r:g(),e)}gu(r){return Yt.az(r)}fu(){return Yt.bz()}cz(r,e,t,i){t.dz(r.hq(this.yt_1,e))}gt(r,e,t,i){return this.cz(r,e,t instanceof Yt?t:g(),i)}hu(r,e,t,i){return this.cz(r,e,t instanceof Yt?t:g(),i)}ez(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.kr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.ez(r,e!=null&&ls(e)?e:g(),t)}}class Dg extends pe{constructor(){Qo=null,super(mf(Rl())),Qo=this}hz(r){return hi(r)}nt(r){return this.hz(r instanceof oi?r.fm_1:g())}iz(r,e){if(e===hi(r))return Zt.lz(r);var t=bi(r,e);return Zt.mz(t,hi(r))}xs(r,e){return this.iz(r instanceof oi?r.fm_1:g(),e)}gu(r){return Zt.nz(r)}fu(){return Zt.oz()}pz(r,e,t,i){var a=r.mq(this.yt_1,e).tp(),s=a;t.qz(s)}gt(r,e,t,i){return this.pz(r,e,t instanceof Zt?t:g(),i)}hu(r,e,t,i){return this.pz(r,e,t instanceof Zt?t:g(),i)}rz(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=tz(e,a),u=o;s.ar(u)}while(i<t)}iu(r,e,t){return this.rz(r,e instanceof oi?e.fm_1:g(),t)}}class Lg extends pe{constructor(){rl=null,super(Sf()),rl=this}uz(r){return r.length}nt(r){return this.uz(r!=null&&ss(r)?r:g())}vz(r,e){return e===r.length?Vt.yz(r):Vt.zz(ha(r,e),r.length)}xs(r,e){return this.vz(r!=null&&ss(r)?r:g(),e)}gu(r){return Vt.a10(r)}fu(){return Vt.b10()}c10(r,e,t,i){t.d10(r.gq(this.yt_1,e))}gt(r,e,t,i){return this.c10(r,e,t instanceof Vt?t:g(),i)}hu(r,e,t,i){return this.c10(r,e,t instanceof Vt?t:g(),i)}e10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.jr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e10(r,e!=null&&ss(e)?e:g(),t)}}class Pg extends pe{constructor(){nl=null,super(wf(Bl())),nl=this}h10(r){return pi(r)}nt(r){return this.h10(r instanceof ui?r.bn_1:g())}i10(r,e){if(e===pi(r))return Xt.l10(r);var t=ha(r,e);return Xt.m10(t,pi(r))}xs(r,e){return this.i10(r instanceof ui?r.bn_1:g(),e)}gu(r){return Xt.n10(r)}fu(){return Xt.o10()}p10(r,e,t,i){var a=r.mq(this.yt_1,e).sp(),s=a;t.q10(s)}gt(r,e,t,i){return this.p10(r,e,t instanceof Xt?t:g(),i)}hu(r,e,t,i){return this.p10(r,e,t instanceof Xt?t:g(),i)}r10(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=Sz(e,a),u=o;s.zq(u)}while(i<t)}iu(r,e,t){return this.r10(r,e instanceof ui?e.bn_1:g(),t)}}class Mg extends pe{constructor(){el=null,super(xf()),el=this}u10(r){return r.length}nt(r){return this.u10(r!=null&&as(r)?r:g())}v10(r,e){return e===r.length?Qt.y10(r):Qt.z10(da(r,e),r.length)}xs(r,e){return this.v10(r!=null&&as(r)?r:g(),e)}gu(r){return Qt.a11(r)}fu(){return Qt.b11()}c11(r,e,t,i){t.d11(r.fq(this.yt_1,e))}gt(r,e,t,i){return this.c11(r,e,t instanceof Qt?t:g(),i)}hu(r,e,t,i){return this.c11(r,e,t instanceof Qt?t:g(),i)}e11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.ir(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e11(r,e!=null&&as(e)?e:g(),t)}}class Rg extends pe{constructor(){tl=null,super(yf(Ml())),tl=this}h11(r){return vi(r)}nt(r){return this.h11(r instanceof si?r.ul_1:g())}i11(r,e){if(e===vi(r))return ri.l11(r);var t=da(r,e);return ri.m11(t,vi(r))}xs(r,e){return this.i11(r instanceof si?r.ul_1:g(),e)}gu(r){return ri.n11(r)}fu(){return ri.o11()}p11(r,e,t,i){var a=r.mq(this.yt_1,e).rp(),s=a;t.q11(s)}gt(r,e,t,i){return this.p11(r,e,t instanceof ri?t:g(),i)}hu(r,e,t,i){return this.p11(r,e,t instanceof ri?t:g(),i)}r11(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0;var s=r.pr(this.yt_1,a),o=KS(e,a),u=o;s.yq(u)}while(i<t)}iu(r,e,t){return this.r11(r,e instanceof si?e.ul_1:g(),t)}}class Bg extends pe{constructor(){il=null,super(fm()),il=this}u11(r){return r.length}nt(r){return this.u11(r!=null&&is(r)?r:g())}v11(r,e){return e===r.length?ni.y11(r):ni.z11(n1(r,e),r.length)}xs(r,e){return this.v11(r!=null&&is(r)?r:g(),e)}gu(r){return ni.a12(r)}fu(){return ni.b12()}c12(r,e,t,i){t.d12(r.eq(this.yt_1,e))}gt(r,e,t,i){return this.c12(r,e,t instanceof ni?t:g(),i)}hu(r,e,t,i){return this.c12(r,e,t instanceof ni?t:g(),i)}e12(r,e,t){var i=0;if(i<t)do{var a=i;i=i+1|0,r.hr(this.yt_1,a,e[a])}while(i<t)}iu(r,e,t){return this.e12(r,e!=null&&is(e)?e:g(),t)}}class Jt extends Dn{constructor(r,e){return new.target.mw(r,e)}static mw(r,e){var t=this.ku();return t.jw_1=r,t.kw_1=e,t}static lw(r){return this.mw(r,r.length)}static nw(r){return this.mw(_s(r),0)}static ow(){return this.mw(_s(10),0)}au(){return this.kw_1}lu(r){this.jw_1.length<r&&(this.jw_1=Xu(this.jw_1,vn(r,Vr(this.jw_1.length,2))))}qw(r){this.mu();var e=this.jw_1,t=this.kw_1;this.kw_1=t+1|0,e[t]=r}cu(){return Xu(this.jw_1,this.kw_1)}}class Ht extends Dn{constructor(r,e){return new.target.zw(r,e)}static zw(r,e){var t=this.ku();return t.ww_1=r,t.xw_1=e,t}static yw(r){return this.zw(r,r.length)}static ax(r){return this.zw(new Float64Array(r),0)}static bx(){return this.zw(new Float64Array(10),0)}au(){return this.xw_1}lu(r){this.ww_1.length<r&&(this.ww_1=Qu(this.ww_1,vn(r,Vr(this.ww_1.length,2))))}dx(r){this.mu();var e=this.ww_1,t=this.xw_1;this.xw_1=t+1|0,e[t]=r}cu(){return Qu(this.ww_1,this.xw_1)}}class Gt extends Dn{constructor(r,e){return new.target.mx(r,e)}static mx(r,e){var t=this.ku();return t.jx_1=r,t.kx_1=e,t}static lx(r){return this.mx(r,r.length)}static nx(r){return this.mx(new Float32Array(r),0)}static ox(){return this.mx(new Float32Array(10),0)}au(){return this.kx_1}lu(r){this.jx_1.length<r&&(this.jx_1=r1(this.jx_1,vn(r,Vr(this.jx_1.length,2))))}qx(r){this.mu();var e=this.jx_1,t=this.kx_1;this.kx_1=t+1|0,e[t]=r}cu(){return r1(this.jx_1,this.kx_1)}}class Kt extends Dn{constructor(r,e){return new.target.zx(r,e)}static zx(r,e){var t=this.ku();return t.wx_1=r,t.xx_1=e,t}static yx(r){return this.zx(r,r.length)}static ay(r){return this.zx(mi(r),0)}static by(){return this.zx(mi(10),0)}au(){return this.xx_1}lu(r){this.wx_1.length<r&&(this.wx_1=va(this.wx_1,vn(r,Vr(this.wx_1.length,2))))}dy(r){this.mu();var e=this.wx_1,t=this.xx_1;this.xx_1=t+1|0,e[t]=r}cu(){return va(this.wx_1,this.xx_1)}}class Wt extends Dn{constructor(r,e){return new.target.my(r,e)}static my(r,e){var t=this.ku();return t.jy_1=r,t.ky_1=e,t}static ly(r){return this.my(r,di(r))}static ny(r){return this.my(mh(r),0)}static oy(){return this.my(mh(10),0)}au(){return this.ky_1}lu(r){if(di(this.jy_1)<r){var e=this,t=this.jy_1,i=vn(r,Vr(di(this.jy_1),2));e.jy_1=va(t,i)}}qy(r){this.mu();var e=this.jy_1,t=this.ky_1;this.ky_1=t+1|0,pz(e,t,r)}f12(){var r=this.jy_1,e=this.ky_1;return va(r,e)}cu(){return new li(this.f12())}}class Yt extends Dn{constructor(r,e){return new.target.zy(r,e)}static zy(r,e){var t=this.ku();return t.wy_1=r,t.xy_1=e,t}static yy(r){return this.zy(r,r.length)}static az(r){return this.zy(new Int32Array(r),0)}static bz(){return this.zy(new Int32Array(10),0)}au(){return this.xy_1}lu(r){this.wy_1.length<r&&(this.wy_1=bi(this.wy_1,vn(r,Vr(this.wy_1.length,2))))}dz(r){this.mu();var e=this.wy_1,t=this.xy_1;this.xy_1=t+1|0,e[t]=r}cu(){return bi(this.wy_1,this.xy_1)}}class Zt extends Dn{constructor(r,e){return new.target.mz(r,e)}static mz(r,e){var t=this.ku();return t.jz_1=r,t.kz_1=e,t}static lz(r){return this.mz(r,hi(r))}static nz(r){return this.mz(gh(r),0)}static oz(){return this.mz(gh(10),0)}au(){return this.kz_1}lu(r){if(hi(this.jz_1)<r){var e=this,t=this.jz_1,i=vn(r,Vr(hi(this.jz_1),2));e.jz_1=bi(t,i)}}qz(r){this.mu();var e=this.jz_1,t=this.kz_1;this.kz_1=t+1|0,iz(e,t,r)}g12(){var r=this.jz_1,e=this.kz_1;return bi(r,e)}cu(){return new oi(this.g12())}}class Vt extends Dn{constructor(r,e){return new.target.zz(r,e)}static zz(r,e){var t=this.ku();return t.wz_1=r,t.xz_1=e,t}static yz(r){return this.zz(r,r.length)}static a10(r){return this.zz(new Int16Array(r),0)}static b10(){return this.zz(new Int16Array(10),0)}au(){return this.xz_1}lu(r){this.wz_1.length<r&&(this.wz_1=ha(this.wz_1,vn(r,Vr(this.wz_1.length,2))))}d10(r){this.mu();var e=this.wz_1,t=this.xz_1;this.xz_1=t+1|0,e[t]=r}cu(){return ha(this.wz_1,this.xz_1)}}class Xt extends Dn{constructor(r,e){return new.target.m10(r,e)}static m10(r,e){var t=this.ku();return t.j10_1=r,t.k10_1=e,t}static l10(r){return this.m10(r,pi(r))}static n10(r){return this.m10(yh(r),0)}static o10(){return this.m10(yh(10),0)}au(){return this.k10_1}lu(r){if(pi(this.j10_1)<r){var e=this,t=this.j10_1,i=vn(r,Vr(pi(this.j10_1),2));e.j10_1=ha(t,i)}}q10(r){this.mu();var e=this.j10_1,t=this.k10_1;this.k10_1=t+1|0,zz(e,t,r)}h12(){var r=this.j10_1,e=this.k10_1;return ha(r,e)}cu(){return new ui(this.h12())}}class Qt extends Dn{constructor(r,e){return new.target.z10(r,e)}static z10(r,e){var t=this.ku();return t.w10_1=r,t.x10_1=e,t}static y10(r){return this.z10(r,r.length)}static a11(r){return this.z10(new Int8Array(r),0)}static b11(){return this.z10(new Int8Array(10),0)}au(){return this.x10_1}lu(r){this.w10_1.length<r&&(this.w10_1=da(this.w10_1,vn(r,Vr(this.w10_1.length,2))))}d11(r){this.mu();var e=this.w10_1,t=this.x10_1;this.x10_1=t+1|0,e[t]=r}cu(){return da(this.w10_1,this.x10_1)}}class ri extends Dn{constructor(r,e){return new.target.m11(r,e)}static m11(r,e){var t=this.ku();return t.j11_1=r,t.k11_1=e,t}static l11(r){return this.m11(r,vi(r))}static n11(r){return this.m11(_h(r),0)}static o11(){return this.m11(_h(10),0)}au(){return this.k11_1}lu(r){if(vi(this.j11_1)<r){var e=this,t=this.j11_1,i=vn(r,Vr(vi(this.j11_1),2));e.j11_1=da(t,i)}}q11(r){this.mu();var e=this.j11_1,t=this.k11_1;this.k11_1=t+1|0,WS(e,t,r)}i12(){var r=this.j11_1,e=this.k11_1;return da(r,e)}cu(){return new si(this.i12())}}class ni extends Dn{constructor(r,e){return new.target.z11(r,e)}static z11(r,e){var t=this.ku();return t.w11_1=r,t.x11_1=e,t}static y11(r){return this.z11(r,r.length)}static a12(r){return this.z11(mo(r),0)}static b12(){return this.z11(mo(10),0)}au(){return this.x11_1}lu(r){this.w11_1.length<r&&(this.w11_1=n1(this.w11_1,vn(r,Vr(this.w11_1.length,2))))}d12(r){this.mu();var e=this.w11_1,t=this.x11_1;this.x11_1=t+1|0,e[t]=r}cu(){return n1(this.w11_1,this.x11_1)}}class $g{constructor(){L1=this,this.j12_1=new kn("kotlin.String",ja())}dn(){return this.j12_1}k12(r,e){return r.fr(e)}en(r,e){return this.k12(r,e!=null&&typeof e=="string"?e:g())}fn(r){return r.yp()}}class kn{constructor(r,e){this.l12_1=r,this.m12_1=e}co(){return this.l12_1}do(){return this.m12_1}go(){return 0}io(r){rs(this)}jo(r){rs(this)}mo(r){rs(this)}lo(r){rs(this)}ko(r){rs(this)}toString(){return"PrimitiveDescriptor("+this.l12_1+")"}equals(r){return this===r?!0:r instanceof kn?!!(this.l12_1===r.l12_1&&P(this.m12_1,r.m12_1)):!1}hashCode(){return oe(this.l12_1)+Vr(31,this.m12_1.hashCode())|0}}class Fg{constructor(){P1=this,this.n12_1=new kn("kotlin.Int",bE())}dn(){return this.n12_1}o12(r,e){return r.ar(e)}en(r,e){return this.o12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.tp()}}class Jg{constructor(){M1=this,this.p12_1=new kn("kotlin.Long",kE())}dn(){return this.p12_1}q12(r,e){return r.br(e)}en(r,e){return this.q12(r,e instanceof y?e:g())}fn(r){return r.up()}}class Hg{constructor(){R1=this,this.r12_1=new kn("kotlin.Byte",mE())}dn(){return this.r12_1}s12(r,e){return r.yq(e)}en(r,e){return this.s12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.rp()}}class Gg{constructor(){B1=this,this.t12_1=new kn("kotlin.Short",wE())}dn(){return this.t12_1}u12(r,e){return r.zq(e)}en(r,e){return this.u12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.sp()}}class Kg{constructor(){$1=this,this.v12_1=new kn("kotlin.Char",yE())}dn(){return this.v12_1}w12(r,e){return r.er(e)}en(r,e){return this.w12(r,e instanceof Sn?e.x1_1:g())}x12(r){return r.xp()}fn(r){return new Sn(this.x12(r))}}class Wg{constructor(){F1=this,this.y12_1=new kn("kotlin.Double",SE())}dn(){return this.y12_1}z12(r,e){return r.dr(e)}en(r,e){return this.z12(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.wp()}}class Yg{constructor(){J1=this,this.a13_1=new kn("kotlin.Float",xE())}dn(){return this.a13_1}b13(r,e){return r.cr(e)}en(r,e){return this.b13(r,e!=null&&typeof e=="number"?e:g())}fn(r){return r.vp()}}class Zg{constructor(){H1=this,this.c13_1=new kn("kotlin.Boolean",gE())}dn(){return this.c13_1}d13(r,e){return r.xq(e)}en(r,e){return this.d13(r,e!=null&&typeof e=="boolean"?e:g())}fn(r){return r.qp()}}class Vg{constructor(){G1=this,this.e13_1=new Ag("kotlin.Unit",or)}dn(){return this.e13_1.dn()}f13(r,e){this.e13_1.ew(r,or)}en(r,e){return this.f13(r,e instanceof ml?e:g())}g13(r){this.e13_1.fn(r)}fn(r){return this.g13(r),or}}class Ua{constructor(){var r=this;r.m13_1=T.m(),this.n13_1=!1}pq(){return Xl()}r13(r){throw $n.on(b(Dr(this))+" can't retrieve untyped values")}s13(r){return!0}t13(r){var e=this.r13(r);return typeof e=="boolean"?e:g()}u13(r){var e=this.r13(r);return typeof e=="number"?e:g()}v13(r){var e=this.r13(r);return typeof e=="number"?e:g()}w13(r){var e=this.r13(r);return typeof e=="number"?e:g()}x13(r){var e=this.r13(r);return e instanceof y?e:g()}y13(r){var e=this.r13(r);return typeof e=="number"?e:g()}z13(r){var e=this.r13(r);return typeof e=="number"?e:g()}a14(r){var e=this.r13(r);return e instanceof Sn?e.x1_1:g()}b14(r){var e=this.r13(r);return typeof e=="string"?e:g()}c14(r,e){return this.d14(r),this}aq(r,e){return this.bq(r)}zp(r){return this.c14(this.e14(),r)}op(){var r=this.o13(),e;if(r==null)return!1;e=r;var t=e;return this.s13(t)}pp(){return null}qp(){return this.t13(this.e14())}rp(){return this.u13(this.e14())}sp(){return this.v13(this.e14())}tp(){return this.w13(this.e14())}up(){return this.x13(this.e14())}vp(){return this.y13(this.e14())}wp(){return this.z13(this.e14())}xp(){return this.a14(this.e14())}yp(){return this.b14(this.e14())}cq(r){return this}dq(r){}eq(r,e){return this.t13(this.j13(r,e))}fq(r,e){return this.u13(this.j13(r,e))}gq(r,e){return this.v13(this.j13(r,e))}hq(r,e){return this.w13(this.j13(r,e))}iq(r,e){return this.x13(this.j13(r,e))}jq(r,e){return this.y13(this.j13(r,e))}kq(r,e){return this.z13(this.j13(r,e))}lq(r,e){return this.a14(this.j13(r,e))}mq(r,e){return this.c14(this.j13(r,e),r.lo(e))}nq(r,e,t,i){var a=this.j13(r,e);return kI(this,a,xI(this,t,i))}o13(){return Mp(this.m13_1)}d14(r){this.m13_1.n(r)}e14(){var r=this.m13_1.e5(Ls(this.m13_1));return this.n13_1=!0,r}}class Xg extends Ua{j13(r,e){return this.l13(this.k13(r,e))}l13(r){var e=this.o13();return this.p13(e??"",r)}k13(r,e){return r.io(e)}p13(r,e){var t;return C(r)===0?t=e:t=r+"."+e,t}q13(){return this.m13_1.i1()?"$":V(this.m13_1,".","$.")}}class Qg{constructor(){K1=this,this.f14_1=Ks("kotlin.UInt",bf())}dn(){return this.f14_1}g14(r,e){var t=r.gr(this.f14_1),i=e;t.ar(i)}en(r,e){return this.g14(r,e instanceof Xn?e.am_1:g())}h14(r){var e=r.zp(this.f14_1).tp();return e}fn(r){return new Xn(this.h14(r))}}class rm{constructor(){W1=this,this.i14_1=Ks("kotlin.ULong",kf(zl()))}dn(){return this.i14_1}j14(r,e){var t=r.gr(this.i14_1),i=e;t.br(i)}en(r,e){return this.j14(r,e instanceof Qn?e.lm_1:g())}k14(r){var e=r.zp(this.i14_1).up();return e}fn(r){return new Qn(this.k14(r))}}class nm{constructor(){Y1=this,this.l14_1=Ks("kotlin.UByte",xf())}dn(){return this.l14_1}m14(r,e){var t=r.gr(this.l14_1),i=e;t.yq(i)}en(r,e){return this.m14(r,e instanceof Me?e.pl_1:g())}n14(r){var e=r.zp(this.l14_1).rp();return e}fn(r){return new Me(this.n14(r))}}class em{constructor(){Z1=this,this.o14_1=Ks("kotlin.UShort",Sf())}dn(){return this.o14_1}p14(r,e){var t=r.gr(this.o14_1),i=e;t.zq(i)}en(r,e){return this.p14(r,e instanceof Re?e.wm_1:g())}q14(r){var e=r.zp(this.o14_1).sp();return e}fn(r){return new Re(this.q14(r))}}class tm{zn(r,e,t){return e=e===l?dr():e,t===l?this.r14(r,e):t.r14.call(this,r,e)}}class im extends tm{constructor(r,e,t,i,a,s){super(),this.t14_1=r,this.u14_1=e,this.v14_1=t,this.w14_1=i,this.x14_1=a,this.y14_1=s}ur(r,e){if(!r.pc(e))return null;var t=this.u14_1.o2(r),i=t==null?null:t.o2(Dr(e)),a=i!=null&&z(i,$l)?i:null;if(a!=null)return a;var s=this.v14_1.o2(r),o=s!=null&&typeof s=="function"?s:null;return o==null?null:o(e)}tr(r,e){var t=this.w14_1.o2(r),i;t==null?i=null:i=(z(t,mn)?t:g()).o2(e);var a=i,s=a!=null&&z(a,cr)?a:null;if(s!=null)return s;var o=this.x14_1.o2(r),u=o!=null&&typeof o=="function"?o:null;return u==null?null:u(e)}r14(r,e){var t=this.t14_1.o2(r),i=t==null?null:t.z14(e);return i==null||z(i,cr)?i:null}s14(r){for(var e=this.t14_1.r2().x();e.y();){var t=e.z(),i=t.k2(),a=t.l2();if(a instanceof am){var s=z(i,Ge)?i:g(),o=a.c15_1;r.d15(s,z(o,cr)?o:g())}else a instanceof sm?r.b15(i,a.a15_1):Os()}for(var u=this.u14_1.r2().x();u.y();)for(var c=u.z(),f=c.k2(),v=c.l2(),h=v.r2().x();h.y();){var d=h.z(),_=d.k2(),m=d.l2(),w=z(f,Ge)?f:g(),x=z(_,Ge)?_:g(),k=z(m,cr)?m:g();r.e15(w,x,k)}for(var S=this.v14_1.r2().x();S.y();){var E=S.z(),I=E.k2(),A=E.l2(),q=z(I,Ge)?I:g();r.f15(q,typeof A=="function"?A:g())}for(var j=this.x14_1.r2().x();j.y();){var F=j.z(),O=F.k2(),L=F.l2(),H=z(O,Ge)?O:g();r.g15(H,typeof L=="function"?L:g())}}}class gf{}class am extends gf{}class sm extends gf{}class om{}function Hz(n,r){return this.b15(n,TI(r))}class Gz{}function Kz(n,r,e){var t=n.gn(r,e),i;return t==null?EE(Dr(e),n.hn()):i=t,i}function I1(n,r,e){var t=n.in(r,e),i;return t==null?pm(e,n.hn()):i=t,i}function Au(n){cn(n,n.mn_1)}function xs(n){return cI()}function mf(n){return SI()}function Wl(n){return zI()}function yf(n){return EI()}function wf(n){return II()}function bf(n){return fI()}function kf(n){return vI()}function xf(n){return hI()}function Sf(n){return dI()}function lm(n){return pI()}function Wz(){return VE()}function um(n){return _I()}function Yz(){return XE()}function cm(n){return gI()}function Zz(){return QE()}function Vz(){return rI()}function Xz(){return nI()}function Qz(){return eI()}function rE(){return tI()}function nE(){return iI()}function eE(){return aI()}function tE(){return sI()}function iE(){return oI()}function fm(n){return mI()}function aE(){return lI()}function sE(n){return yI()}function oE(){return IE()}function lE(n){return CE()}function uE(n){return AE()}function cE(n){return TE()}function C1(n){return new bg(n)}function A1(n,r){return new xg(n,r)}function fE(n,r){var e=vm(r),t;if(e==null)t=null;else{var i=n.zn(e);t=i==null?null:i.dn()}return t}function vm(n){var r;return n instanceof J0?r=n.bo_1:n instanceof Cg?r=vm(n.ao_1):r=null,r}function vE(n){return new G0(n)}function Yl(n,r,e,t){var i;if(t===l?i=_E:i=t,t=i,lt(n)){var a="Blank serial names are prohibited";throw U.v(b(a))}if(P(r,Zl())){var s="For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";throw U.v(b(s))}var o=new K0(n);return t(o),new Aa(n,r,o.to_1.c1(),hb(e),o)}function hm(n){var r=n.lp_1,e=xi;return ka("_hashCode",1,e,dE(),null),r.l2()}function hE(n){return()=>ym(n,n.kp_1)}function dE(){return Be(n=>hm(n),1,0,0)}function pE(n,r){if(lt(n)){var e="Blank serial names are prohibited";throw U.v(b(e))}return wI(n,r)}function _E(n){return or}var To;function Oi(){return To===l&&new Jl,To}var qo;function dm(){return qo===l&&new W0,qo}var Oo;function Zl(){return Oo===l&&new Y0,Oo}var Uo;function Gs(){return Uo===l&&new Z0,Uo}var jo;function Vl(){return jo===l&&new V0,jo}var No;function zf(){return No===l&&new X0,No}var Do;function gE(){return Do===l&&new Q0,Do}var Lo;function mE(){return Lo===l&&new rg,Lo}var Po;function yE(){return Po===l&&new ng,Po}var Mo;function wE(){return Mo===l&&new eg,Mo}var Ro;function bE(){return Ro===l&&new tg,Ro}var Bo;function kE(){return Bo===l&&new ig,Bo}var $o;function xE(){return $o===l&&new ag,$o}var Fo;function SE(){return Fo===l&&new sg,Fo}var Jo;function ja(){return Jo===l&&new og,Jo}var Ho;function zE(){return Ho===l&&new lg,Ho}function EE(n,r){var e=n.oc();pm(e??b(n),r)}function pm(n,r){var e="in the polymorphic scope of '"+r.oc()+"'";throw $n.on(n==null?"Class discriminator was missing and no default serializers were registered "+e+".":"Serializer for subclass '"+n+"' is not found "+e+`.
`+("Check if class with serial name '"+n+`' exists and serializer is registered in a corresponding SerializersModule.
`)+("To be registered automatically, class '"+n+"' has to be '@Serializable', and the base class '"+r.oc()+"' has to be sealed and '@Serializable'."))}var T1;function IE(){return T1===l&&new hg,T1}var q1;function CE(){return q1===l&&new dg,q1}var O1;function AE(){return O1===l&&new pg,O1}var U1;function TE(){return U1===l&&new _g,U1}function yt(n,r){if(n<0)throw Wn.tb("Illegal index "+n+", "+r+" expects only non-negative indices")}function wh(n){var r=n;return vr.ha(r)}var j1;function bh(){return j1===l&&new Sg,j1}function qE(n,r){var e=(r-1|0)>>>6|0,t=r&63,i=mi(e);return t!==0&&(i[cb(i)]=Vn(new y(-1,-1),r)),i}function OE(n,r){var e=(r>>>6|0)-1|0,t=r&63;n.ru_1[e]=yi(n.ru_1[e],Vn(new y(1,0),t))}function UE(n){var r=0,e=n.ru_1.length-1|0;if(r<=e)do{var t=r;r=r+1|0;for(var i=Vr(t+1|0,64),a=n.ru_1[t];!ir(a,new y(-1,-1));){var s=__($c(a));a=yi(a,Vn(new y(1,0),s));var o=i+s|0;if(n.pu_1(n.ou_1,o))return n.ru_1[t]=a,o}n.ru_1[t]=a}while(r<=e);return-1}function Ks(n,r){return new Kl(n,new _f(r))}function jE(n,r){return n.yn(r)}function NE(n){return $E(n)}var Go;function DE(){return Go===l&&Ig.yv(),Go}function Qa(n){throw xr.o3("Descriptor for type `kotlin.Nothing` does not have elements")}var N1;function LE(){return N1===l&&new Hs,N1}function PE(n){return r=>(r.so_1=n.cw_1,or)}function ME(n,r){return()=>{var e=zf();return Yl(n,e,[],PE(r))}}function RE(){return Be(n=>n.dn(),1,0,1)}function BE(){return Ef(),_m}var _m;function $E(n){if(Ef(),z(n,$s))return n.mp();var r=_i.b1(n.go()),e=0,t=n.go();if(e<t)do{var i=e;e=e+1|0;var a=n.io(i);r.n(a)}while(e<t);return r}function D1(n){Ef();var r;n==null||n.i1()?r=null:r=n;var e=r,t;e==null?t=null:t=ki(e);var i=t;return i??BE()}var kh;function Ef(){kh||(kh=!0,_m=[])}function gm(n){var r=n.qv_1,e=xi;return ka("childSerializers",1,e,JE(),null),r.l2()}function mm(n){var r=n.sv_1,e=xi;return ka("_hashCode",1,e,WE(),null),r.l2()}function FE(n){return()=>{var r=n.iv_1,e=r==null?null:r.vv();return e??bm()}}function JE(){return Be(n=>gm(n),1,0,2)}function HE(n){return()=>{var r=n.iv_1,e=r==null?null:r.wv(),t;if(e==null)t=null;else{for(var i=T.g1(e.length),a=0,s=e.length;a<s;){var o=e[a];a=a+1|0;var u=o.dn();i.n(u)}t=i}return D1(t)}}function GE(){return Be(n=>n.tv(),1,0,3)}function KE(n){return()=>ym(n,n.tv())}function WE(){return Be(n=>mm(n),1,0,4)}function ym(n,r){var e=oe(n.co());e=Vr(31,e)+Ek(r)|0;for(var t=vE(n),i=1,a=t.x();a.y();){var s=a.z(),o=i,u=Vr(31,o),c=s.co(),f=c==null?null:Sr(c);i=u+(f??0)|0}for(var v=i,h=1,d=t.x();d.y();){var _=d.z(),m=h,w=Vr(31,m),x=_.do(),k=x==null?null:Sr(x);h=w+(k??0)|0}var S=h;return e=Vr(31,e)+v|0,e=Vr(31,e)+S|0,e}function wm(n){var r=Mc(0,n.go()),e=n.co()+"(";return V(r,", ",e,")",l,l,YE(n))}function YE(n){return r=>n.io(r)+": "+n.lo(r).co()}function bm(){return ZE(),km}var km,xh;function ZE(){xh||(xh=!0,km=[])}var Ko;function VE(){return Ko===l&&new Tg,Ko}var Wo;function XE(){return Wo===l&&new qg,Wo}var Yo;function QE(){return Yo===l&&new Og,Yo}var Zo;function rI(){return Zo===l&&new Ug,Zo}var Vo;function nI(){return Vo===l&&new jg,Vo}var Xo;function eI(){return Xo===l&&new Ng,Xo}var Qo;function tI(){return Qo===l&&new Dg,Qo}var rl;function iI(){return rl===l&&new Lg,rl}var nl;function aI(){return nl===l&&new Pg,nl}var el;function sI(){return el===l&&new Mg,el}var tl;function oI(){return tl===l&&new Rg,tl}var il;function lI(){return il===l&&new Bg,il}function uI(){return If(),xm}var xm,L1;function cI(){return L1===l&&new $g,L1}function rs(n){throw xr.o3("Primitive descriptor "+n.l12_1+" does not have elements")}var P1;function fI(){return P1===l&&new Fg,P1}var M1;function vI(){return M1===l&&new Jg,M1}var R1;function hI(){return R1===l&&new Hg,R1}var B1;function dI(){return B1===l&&new Gg,B1}var $1;function pI(){return $1===l&&new Kg,$1}var F1;function _I(){return F1===l&&new Wg,F1}var J1;function gI(){return J1===l&&new Yg,J1}var H1;function mI(){return H1===l&&new Zg,H1}var G1;function yI(){return G1===l&&new Vg,G1}function wI(n,r){return If(),bI(n),new kn(n,r)}function bI(n){If();for(var r=uI().q2(),e=r.x();e.y();){var t=e.z(),i=t.dn().co();if(n===i)throw U.v(U2(`
                The name of serial descriptor should uniquely identify associated serializer.
                For serial name `+n+" there already exists "+Dr(t).oc()+`.
                Please refer to SerialDescriptor documentation for additional information.
            `))}}var Sh;function If(){Sh||(Sh=!0,xm=qI())}function kI(n,r,e){n.d14(r);var t=e();return n.n13_1||n.e14(),n.n13_1=!1,t}function xI(n,r,e){return()=>n.aq(r,e)}var K1;function SI(){return K1===l&&new Qg,K1}var W1;function zI(){return W1===l&&new rm,W1}var Y1;function EI(){return Y1===l&&new nm,Y1}var Z1;function II(){return Z1===l&&new em,Z1}function CI(){return AI(),Sm}var Sm,zh;function AI(){zh||(zh=!0,Sm=new im(Tr(),Tr(),Tr(),Tr(),Tr(),!1))}function Xl(){return CI()}function TI(n){return r=>n}function oa(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+rb(n).toString());return n[r]}function zm(n,r){if(!(0<=r&&r<=(n.length-1|0)))throw Wn.tb("Index "+r+" out of bounds "+vb(n).toString());return n[r]}function qI(){return Tl([N(kr().id(),xs()),N(Nr(Sn),lm(Bc())),N(kr().ld(),Wz()),N(kr().gd(),um()),N(kr().sd(),Yz()),N(kr().fd(),cm()),N(kr().rd(),Zz()),N(kr().ed(),kf(zl())),N(kr().qd(),Vz()),N(Nr(Qn),Wl(Rs())),N(Nr(li),Xz()),N(kr().dd(),bf()),N(kr().od(),Qz()),N(Nr(Xn),mf(Rl())),N(Nr(oi),rE()),N(kr().cd(),Sf()),N(kr().nd(),nE()),N(Nr(Re),wf(Bl())),N(Nr(ui),eE()),N(kr().bd(),xf()),N(kr().md(),tE()),N(Nr(Me),yf(Ml())),N(Nr(si),iE()),N(kr().ad(),fm()),N(kr().kd(),aE()),N(Nr(ml),sE()),N(kr().zc(),oE()),N(Nr(xe),lE(Wr())),N(Nr(rt),uE(xt())),N(Nr(zt),cE(Ms()))])}Mr($l,"SerializationStrategy");Mr(sa,"DeserializationStrategy");Mr(cr,"KSerializer",l,l,[$l,sa]);p($n,"SerializationException",$n.nn);p(Fl,"MissingFieldException");Mr(de,"SerialDescriptor");p(J0,"ContextDescriptor",l,l,[de]);p(H0);p(G0);p(K0,"ClassSerialDescriptorBuilder");Mr($s,"CachedNames");Lr(Aa).eo=Ci;Lr(Aa).fo=Ai;p(Aa,"SerialDescriptorImpl",l,l,[de,$s]);p(Ta,"SerialKind");D(Jl,"ENUM");D(W0,"CONTEXTUAL");p(Fs,"StructureKind");D(Y0,"CLASS");D(Z0,"LIST");D(V0,"MAP");D(X0,"OBJECT");p(Hn,"PrimitiveKind");D(Q0,"BOOLEAN");D(rg,"BYTE");D(ng,"CHAR");D(eg,"SHORT");D(tg,"INT");D(ig,"LONG");D(ag,"FLOAT");D(sg,"DOUBLE");D(og,"STRING");p(qa,"PolymorphicKind");D(lg,"SEALED");Mr(Hl,"Decoder");Mr(Gl,"CompositeDecoder");Lr(Ti).oq=vg;Lr(Ti).bq=ug;Lr(Ti).qq=cg;Lr(Ti).sq=fg;p(Ti,"AbstractDecoder",l,l,[Hl,Gl]);Mr(hf,"Encoder");Lr(Js).sr=$z;Lr(Js).rr=Fz;p(Js,"AbstractEncoder",l,l,[hf]);p(_a,"AbstractPolymorphicSerializer",l,l,[cr]);D(hg,"NothingSerializer",l,l,[cr]);D(dg,"DurationSerializer",l,l,[cr]);D(pg,"InstantSerializer",l,l,[cr]);D(_g,"UuidSerializer",l,l,[cr]);Lr(jt).eo=Ci;Lr(jt).fo=Ai;Lr(jt).ho=Bs;p(jt,"ListLikeDescriptor",l,l,[de]);p(gg,"ArrayListClassDesc");Lr(qi).eo=Ci;Lr(qi).fo=Ai;Lr(qi).ho=Bs;p(qi,"MapLikeDescriptor",l,l,[de]);p(mg,"LinkedHashMapClassDesc");p(yg,"PrimitiveArrayDescriptor");p(df,"AbstractCollectionSerializer",l,l,[cr]);p(pf,"CollectionLikeSerializer");p(wg,"CollectionSerializer");p(bg,"ArrayListSerializer");p(kg,"MapLikeSerializer");p(xg,"LinkedHashMapSerializer");p(pe,"PrimitiveArraySerializer");p(Dn,"PrimitiveArrayBuilder");Qr(Sg);p(zg,"ElementMarker");Lr(Oa).eo=Ci;Lr(Oa).fo=Ai;p(Oa,"PluginGeneratedSerialDescriptor",l,l,[de,$s]);p(Kl,"InlineClassDescriptor");Mr(Eg,"GeneratedSerializer",l,l,[cr]);Lr(_f).wv=Jz;p(_f,l,l,l,[Eg]);D(Ig,"NoOpEncoder");Lr(Hs).eo=Ci;Lr(Hs).fo=Ai;Lr(Hs).ho=Bs;D(Hs,"NothingSerialDescriptor",l,l,[de]);p(Cg,"SerialDescriptorForNullable",l,l,[de,$s]);p(Ag,"ObjectSerializer",l,l,[cr]);D(Tg,"CharArraySerializer",l,l,[cr]);D(qg,"DoubleArraySerializer",l,l,[cr]);D(Og,"FloatArraySerializer",l,l,[cr]);D(Ug,"LongArraySerializer",l,l,[cr]);D(jg,"ULongArraySerializer",l,l,[cr]);D(Ng,"IntArraySerializer",l,l,[cr]);D(Dg,"UIntArraySerializer",l,l,[cr]);D(Lg,"ShortArraySerializer",l,l,[cr]);D(Pg,"UShortArraySerializer",l,l,[cr]);D(Mg,"ByteArraySerializer",l,l,[cr]);D(Rg,"UByteArraySerializer",l,l,[cr]);D(Bg,"BooleanArraySerializer",l,l,[cr]);p(Jt,"CharArrayBuilder");p(Ht,"DoubleArrayBuilder");p(Gt,"FloatArrayBuilder");p(Kt,"LongArrayBuilder");p(Wt,"ULongArrayBuilder");p(Yt,"IntArrayBuilder");p(Zt,"UIntArrayBuilder");p(Vt,"ShortArrayBuilder");p(Xt,"UShortArrayBuilder");p(Qt,"ByteArrayBuilder");p(ri,"UByteArrayBuilder");p(ni,"BooleanArrayBuilder");D($g,"StringSerializer",l,l,[cr]);Lr(kn).eo=Ci;Lr(kn).fo=Ai;Lr(kn).ho=Bs;p(kn,"PrimitiveSerialDescriptor",l,l,[de]);D(Fg,"IntSerializer",l,l,[cr]);D(Jg,"LongSerializer",l,l,[cr]);D(Hg,"ByteSerializer",l,l,[cr]);D(Gg,"ShortSerializer",l,l,[cr]);D(Kg,"CharSerializer",l,l,[cr]);D(Wg,"DoubleSerializer",l,l,[cr]);D(Yg,"FloatSerializer",l,l,[cr]);D(Zg,"BooleanSerializer",l,l,[cr]);D(Vg,"UnitSerializer",l,l,[cr]);Lr(Ua).oq=vg;Lr(Ua).bq=ug;Lr(Ua).qq=cg;Lr(Ua).sq=fg;p(Ua,"TaggedDecoder",l,l,[Hl,Gl]);p(Xg,"NamedValueDecoder");D(Qg,"UIntSerializer",l,l,[cr]);D(rm,"ULongSerializer",l,l,[cr]);D(nm,"UByteSerializer",l,l,[cr]);D(em,"UShortSerializer",l,l,[cr]);p(tm,"SerializersModule");p(im,"SerialModuleImpl");p(gf,"ContextualProvider");p(am,"Argless");p(sm,"WithTypeArguments");Mr(om,"SerializersModuleCollector");p(Gz,"SerializableWith",l,l,l,l,0);var Ws=Math.imul;class Cf{constructor(r,e){Ie(),this.h15_1=r,this.i15_1=e,this.j15_1=new Q1}pq(){return this.i15_1}k15(r,e){var t=new nc;try{return vC(this,t,r,e),t.toString()}finally{t.o15()}}l15(r,e){var t=Zf(this,e),i=new Ss(this,au(),t,r.dn(),null),a=i.bq(r);return t.c16(),a}m15(r){return this.l15(ct(),r)}}class Em extends Cf{constructor(){al=null,super(new Af,Xl()),al=this}}class Im{constructor(r){this.d16_1=r.h15_1.y16_1,this.e16_1=r.h15_1.d17_1,this.f16_1=r.h15_1.z16_1,this.g16_1=r.h15_1.a17_1,this.h16_1=r.h15_1.c17_1,this.i16_1=r.h15_1.e17_1,this.j16_1=r.h15_1.f17_1,this.k16_1=r.h15_1.h17_1,this.l16_1=r.h15_1.o17_1,this.m16_1=r.h15_1.j17_1,this.n16_1=r.h15_1.k17_1,this.o16_1=r.h15_1.l17_1,this.p16_1=r.h15_1.m17_1,this.q16_1=r.h15_1.n17_1,this.r16_1=r.h15_1.i17_1,this.s16_1=r.h15_1.b17_1,this.t16_1=r.h15_1.g17_1,this.u16_1=r.pq(),this.v16_1=r.h15_1.p17_1,this.w16_1=r.h15_1.q17_1}x16(){if(this.t16_1){if(this.k16_1!=="type"){var r="Class discriminator should not be specified when array polymorphism is specified";throw U.v(b(r))}if(!this.l16_1.equals(iy())){var e="useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.";throw U.v(b(e))}}if(this.h16_1){if(this.i16_1!=="    "){var i=this.i16_1,a;r:{for(var s=0;s<C(i);){var o=rr(i,s);if(s=s+1|0,!(o===32||o===9||o===13||o===10)){a=!1;break r}}a=!0}var u=a;if(!u){var c="Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had "+this.i16_1;throw U.v(b(c))}}}else if(this.i16_1!=="    "){var t="Indent should not be specified when default printing mode is used";throw U.v(b(t))}return new Af(this.d16_1,this.f16_1,this.g16_1,this.s16_1,this.h16_1,this.e16_1,this.i16_1,this.j16_1,this.t16_1,this.k16_1,this.r16_1,this.m16_1,this.n16_1,this.o16_1,this.p16_1,this.q16_1,this.l16_1,this.v16_1,this.w16_1)}}class Cm extends Cf{constructor(r,e){super(r,e),NI(this)}}class Am{}class Tm{}class qm{}class Af{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m,w,x,k,S){r=r===l?!1:r,e=e===l?!1:e,t=t===l?!1:t,i=i===l?!1:i,a=a===l?!1:a,s=s===l?!0:s,o=o===l?"    ":o,u=u===l?!1:u,c=c===l?!1:c,f=f===l?"type":f,v=v===l?!1:v,h=h===l?!0:h,d=d===l?null:d,_=_===l?!1:_,m=m===l?!1:m,w=w===l?!1:w,x=x===l?iy():x,k=k===l?!0:k,S=S===l?400:S,this.y16_1=r,this.z16_1=e,this.a17_1=t,this.b17_1=i,this.c17_1=a,this.d17_1=s,this.e17_1=o,this.f17_1=u,this.g17_1=c,this.h17_1=f,this.i17_1=v,this.j17_1=h,this.k17_1=d,this.l17_1=_,this.m17_1=m,this.n17_1=w,this.o17_1=x,this.p17_1=k,this.q17_1=S}toString(){return"JsonConfiguration(encodeDefaults="+this.y16_1+", ignoreUnknownKeys="+this.z16_1+", isLenient="+this.a17_1+", "+("allowStructuredMapKeys="+this.b17_1+", prettyPrint="+this.c17_1+", explicitNulls="+this.d17_1+", ")+("prettyPrintIndent='"+this.e17_1+"', coerceInputValues="+this.f17_1+", useArrayPolymorphism="+this.g17_1+", ")+("classDiscriminator='"+this.h17_1+"', allowSpecialFloatingPointValues="+this.i17_1+", ")+("useAlternativeNames="+this.j17_1+", namingStrategy="+ce(this.k17_1)+", decodeEnumsCaseInsensitive="+this.l17_1+", ")+("allowTrailingComma="+this.m17_1+", allowComments="+this.n17_1+", classDiscriminatorMode="+this.o17_1.toString()+", ")+("exceptionsWithDebugInfo="+this.p17_1+", maxNestingDepth="+this.q17_1+")")}}class fo extends se{}class Ql{}class Om{t17(){return ct()}}class We{}class OI{}class fr extends We{toString(){return this.w17()}u17(r){r.ca(this.w17())}}class UI{}class fn extends We{constructor(r){super(),this.x17_1=r}equals(r){return P(this.x17_1,r)}hashCode(){return Sr(this.x17_1)}toString(){var r=Ws(this.x17_1.c1()+1|0,2),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(91);for(var e=!0,t=this.x17_1.x();t.y();){var i=t.z();e||r.da(44),e=!1,i.u17(r)}r.da(93)}i1(){return this.x17_1.i1()}y17(r){return this.x17_1.l1(r)}l1(r){return r instanceof We?this.y17(r instanceof We?r:g()):!1}x(){return this.x17_1.x()}d1(r){return this.x17_1.d1(r)}z17(r){return this.x17_1.n1(r)}n1(r){return r instanceof We?this.z17(r instanceof We?r:g()):-1}m1(r){return this.x17_1.m1(r)}c1(){return this.x17_1.c1()}}class Um{t17(){return nu()}}class nr extends We{constructor(r){super(),this.a18_1=r}equals(r){return P(this.a18_1,r)}hashCode(){return Sr(this.a18_1)}toString(){var r=Ws(this.a18_1.c1(),6),e=rn.fa(r);return this.u17(e),e.toString()}u17(r){r.da(123);for(var e=!0,t=this.a18_1.r2().x();t.y();){var i=t.z(),a=i.k2(),s=i.l2();e||r.da(44),e=!1,vl(r,a),r.da(58),s.u17(r)}r.da(125)}i1(){return this.a18_1.i1()}b18(r){return this.a18_1.m2(r)}m2(r){return r!=null&&typeof r=="string"?this.b18(r!=null&&typeof r=="string"?r:g()):!1}c18(r){return this.a18_1.o2(r)}o2(r){return r!=null&&typeof r=="string"?this.c18(r!=null&&typeof r=="string"?r:g()):null}c1(){return this.a18_1.c1()}p2(){return this.a18_1.p2()}q2(){return this.a18_1.q2()}r2(){return this.a18_1.r2()}}class fe extends fr{constructor(){sl=null,super(),sl=this,this.d18_1="null"}v17(){return!1}w17(){return this.d18_1}}class ut extends fr{constructor(r,e,t){if(t=t===l?null:t,super(),this.e18_1=e,this.f18_1=t,this.g18_1=b(r),this.f18_1!=null&&!this.f18_1.fo()){var i="Failed requirement.";throw U.v(b(i))}}v17(){return this.e18_1}w17(){return this.g18_1}toString(){var r;if(this.e18_1){var e=this.g18_1.length+2|0,t=rn.fa(e);vl(t,this.g18_1),r=t.toString()}else r=this.g18_1;return r}u17(r){this.e18_1?vl(r,this.g18_1):r.ca(this.g18_1)}equals(r){return this===r?!0:!(r==null||!Dr(this).equals(Dr(r))||(r instanceof ut||g(),this.e18_1!==r.e18_1)||this.g18_1!==r.g18_1)}hashCode(){var r=s_(this.e18_1);return r=Ws(31,r)+oe(this.g18_1)|0,r}}class wt{constructor(){var r=this;r.i18_1=vr.q4()}j18(r,e){return this.i18_1.s2(r,e)}x16(){return new nr(this.i18_1)}}class jm{constructor(){var r=this;r.k18_1=T.m()}l18(r){return this.k18_1.n(r),!0}x16(){return new fn(this.k18_1)}}class Nm{constructor(){tc=this;var r=this,e=zE();r.r18_1=Yl("kotlinx.serialization.json.JsonElement",e,[],$I)}dn(){return this.r18_1}s18(r,e){Da(r),e instanceof fr?r.rr(Rf(),e):e instanceof nr?r.rr(nu(),e):e instanceof fn?r.rr(Bf(),e):Os()}en(r,e){return this.s18(r,e instanceof We?e:g())}fn(r){var e=eu(r);return e.s17()}}class Dm{constructor(){ic=this,this.m18_1=Yl("kotlinx.serialization.json.JsonPrimitive",ja(),[])}dn(){return this.m18_1}t18(r,e){Da(r);var t;if(e instanceof fe)r.rr($f(),Xs()),t=or;else{var i=sy();r.rr(i,e instanceof ut?e:g()),t=or}return t}en(r,e){return this.t18(r,e instanceof fr?e:g())}fn(r){var e=eu(r),t=e.s17();if(!(t instanceof fr)){var i="Unexpected JSON element, expected JsonPrimitive, had "+b(Dr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw jr.g19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Lm{constructor(){ac=this,this.h19_1=C1(ct()).dn(),this.i19_1="kotlinx.serialization.json.JsonArray"}co(){return this.i19_1}io(r){return this.h19_1.io(r)}jo(r){return this.h19_1.jo(r)}ko(r){return this.h19_1.ko(r)}lo(r){return this.h19_1.lo(r)}mo(r){return this.h19_1.mo(r)}do(){return this.h19_1.do()}eo(){return this.h19_1.eo()}fo(){return this.h19_1.fo()}go(){return this.h19_1.go()}ho(){return this.h19_1.ho()}}class Pm{constructor(){sc=this,this.q18_1=WI()}dn(){return this.q18_1}j19(r,e){Da(r),C1(ct()).en(r,e)}en(r,e){return this.j19(r,e instanceof fn?e:g())}fn(r){return Ff(r),new fn(C1(ct()).fn(r))}}class Mm{constructor(){oc=this,this.k19_1=A1(xs(),ct()).dn(),this.l19_1="kotlinx.serialization.json.JsonObject"}co(){return this.l19_1}io(r){return this.k19_1.io(r)}jo(r){return this.k19_1.jo(r)}ko(r){return this.k19_1.ko(r)}lo(r){return this.k19_1.lo(r)}mo(r){return this.k19_1.mo(r)}do(){return this.k19_1.do()}eo(){return this.k19_1.eo()}fo(){return this.k19_1.fo()}go(){return this.k19_1.go()}ho(){return this.k19_1.ho()}}class Rm{constructor(){lc=this,this.p18_1=YI()}dn(){return this.p18_1}m19(r,e){Da(r),A1(xs(),ct()).en(r,e)}en(r,e){return this.m19(r,e instanceof nr?e:g())}fn(r){return Ff(r),new nr(A1(xs(),ct()).fn(r))}}class Bm{constructor(){uc=this,this.n18_1=Yl("kotlinx.serialization.json.JsonNull",Oi(),[])}dn(){return this.n18_1}n19(r,e){Da(r),r.wq()}en(r,e){return this.n19(r,e instanceof fe?e:g())}fn(r){if(Ff(r),r.op())throw Jf("Expected 'null' literal");return r.pp(),Xs()}}class $m{constructor(){cc=this,this.o18_1=pE("kotlinx.serialization.json.JsonLiteral",ja())}dn(){return this.o18_1}o19(r,e){if(Da(r),e.e18_1)return r.fr(e.g18_1);if(e.f18_1!=null)return r.gr(e.f18_1).fr(e.g18_1);var t=M2(e.g18_1);if(t!=null)return r.br(t);var i=F0(e.g18_1),a=i;if((a==null?null:new Qn(a))!=null){var s=i,o=(s==null?null:new Qn(s)).lm_1,u=r.gr(Wl(Rs()).dn()),c=o;return u.br(c),or}var f=Qc(e.g18_1);if(f!=null)return r.dr(f);var v=Z2(e.g18_1);if(v!=null)return r.xq(v);r.fr(e.g18_1)}en(r,e){return this.o19(r,e instanceof ut?e:g())}fn(r){var e=eu(r),t=e.s17();if(!(t instanceof ut)){var i="Unexpected JSON element, expected JsonLiteral, had "+b(Dr(t)),a;if(e.r17().h15_1.p17_1){var s=b(t);a=b(Jr(s))}else a=null;var o=a;throw jr.g19(Kr(-1,i,null,null,o),i,-1,null,o,null)}return t}}class Ys{constructor(r){this.p19_1=U_(r)}co(){return Fe(this).co()}do(){return Fe(this).do()}go(){return Fe(this).go()}io(r){return Fe(this).io(r)}jo(r){return Fe(this).jo(r)}ko(r){return Fe(this).ko(r)}lo(r){return Fe(this).lo(r)}mo(r){return Fe(this).mo(r)}}class Tf{}class qf extends $n{static w19(r){var e=this.on(r);return cn(e,e.v19_1),e.u19_1=r,delete e.message,e}ib(){return this.u19_1}get message(){return this.ib()}}class jr extends qf{constructor(r,e,t,i,a,s){return new.target.g19(r,e,t,i,a,s)}static g19(r,e,t,i,a,s){var o=this.w19(r);return cn(o,o.f19_1),o.a19_1=e,o.b19_1=t,o.c19_1=i,o.d19_1=a,o.e19_1=s,o}}class Zs extends qf{constructor(r,e,t){return new.target.h1a(r,e,t)}static h1a(r,e,t){e=e===l?null:e,t=t===l?null:t;var i=this.w19(eC(r,t));return cn(i,i.g1a_1),i.d1a_1=r,i.e1a_1=e,i.f1a_1=t,i}}class Vs{constructor(r){this.i1a_1=r,this.j1a_1=!0}k1a(){this.j1a_1=!0}l1a(){return or}m1a(){this.j1a_1=!1}n1a(){this.j1a_1=!1}o1a(){return or}p1a(r){return this.i1a_1.q1a(r)}r1a(r){return this.i1a_1.s1a(r)}t1a(r){return this.i1a_1.s1a(r.toString())}u1a(r){return this.i1a_1.s1a(r.toString())}v1a(r){return this.i1a_1.w1a(M(r))}x1a(r){return this.i1a_1.w1a(M(r))}y1a(r){return this.i1a_1.w1a(M(r))}z1a(r){return this.i1a_1.w1a(r)}a1b(r){return this.i1a_1.s1a(r.toString())}b1b(r){return this.i1a_1.c1b(r)}}class V1 extends Vs{constructor(r,e){super(r),this.f1b_1=e}y1a(r){if(this.f1b_1){var e=r;this.b1b(k1(e))}else{var t=r;this.r1a(k1(t))}}z1a(r){if(this.f1b_1){var e=r;this.b1b(S1(e))}else{var t=r;this.r1a(S1(t))}}v1a(r){if(this.f1b_1){var e=r;this.b1b(w1(e))}else{var t=r;this.r1a(w1(t))}}x1a(r){if(this.f1b_1){var e=r;this.b1b(E1(e))}else{var t=r;this.r1a(E1(t))}}}class X1 extends Vs{constructor(r,e){super(r),this.i1b_1=e}b1b(r){this.i1b_1?super.b1b(r):super.r1a(r)}}class Fm extends Vs{constructor(r,e){super(r),this.l1b_1=e,this.m1b_1=0}k1a(){this.j1a_1=!0,this.m1b_1=this.m1b_1+1|0}l1a(){this.m1b_1=this.m1b_1-1|0}m1a(){this.j1a_1=!1,this.r1a(`
`);var r=this.m1b_1,e=0;if(e<r)do e=e+1|0,this.r1a(this.l1b_1.h15_1.e17_1);while(e<r)}n1a(){this.j1a_1?this.j1a_1=!1:this.m1a()}o1a(){this.p1a(32)}}class Of{constructor(r){var e=this;e.n1b_1=new zg(r,rC(this)),this.o1b_1=!1}p1b(r){this.n1b_1.su(r)}q1b(){return this.n1b_1.tu()}}class Jm{}class Hm{}class Gm{constructor(r){this.x1b_1=r.q17_1,this.y1b_1=r.p17_1;var e=this;e.z1b_1=Array(8);for(var t=this,i=0,a=new Int32Array(8);i<8;)a[i]=-1,i=i+1|0;t.a1c_1=a,this.b1c_1=-1}c1c(r){this.b1c_1=this.b1c_1+1|0;var e=this.b1c_1;e>=this.x1b_1&&zs(this.x1b_1),e===this.z1b_1.length&&Uh(this),this.z1b_1[e]=r}d1c(r){this.a1c_1[this.b1c_1]=r}e1c(r){var e;this.a1c_1[this.b1c_1]!==-2?(this.b1c_1=this.b1c_1+1|0,e=this.b1c_1===this.z1b_1.length):e=!1,e&&Uh(this),this.z1b_1[this.b1c_1]=this.y1b_1?r:vc,this.a1c_1[this.b1c_1]=-2}f1c(){this.a1c_1[this.b1c_1]===-2&&(this.z1b_1[this.b1c_1]=fc)}g1c(){var r=this.b1c_1;this.a1c_1[r]===-2&&(this.a1c_1[r]=-1,this.b1c_1=this.b1c_1-1|0),this.b1c_1!==-1&&(this.b1c_1=this.b1c_1-1|0)}h1c(){var r=rn.f();r.ca("$");var e=this.b1c_1+1|0,t=0;if(t<e)do{var i=t;t=t+1|0;var a=this.z1b_1[i];if(a!=null&&z(a,de))if(P(a.do(),Gs()))this.a1c_1[i]!==-1&&(r.ca("["),r.ae(this.a1c_1[i]),r.ca("]"));else{var s=this.a1c_1[i];s>=0&&(r.ca("."),r.ca(a.io(s)))}else a===vc?r.ca("[<debug info disabled>]"):a!==fc&&(r.ca("["),r.ca("'"),r.ba(a),r.ca("'"),r.ca("]"))}while(t<e);return r.toString()}toString(){return this.h1c()}}class Uf{constructor(r){this.i1c_1=r.g17_1,this.j1c_1=!r.o17_1.equals(ty())}b15(r,e){}e15(r,e,t){var i=t.dn();fC(this,i,e)}f15(r,e){}g15(r,e){}}class Km{constructor(r,e){this.u1c_1=e,this.v1c_1=r.a17_1,this.w1c_1=r.m17_1,this.x1c_1=r.q17_1,this.y1c_1=this.u1c_1.z15_1.b1c_1}e1d(){var r=this.u1c_1.a1d(),e;if(r===1)e=ll(this,!0);else if(r===0)e=ll(this,!1);else if(r===6){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&zs(this.x1c_1);var t;this.y1c_1===200?(this.y1c_1=this.y1c_1-1|0,t=pC(this)):(t=hC(this),this.y1c_1=this.y1c_1-1|0),e=t}else if(r===8){this.y1c_1=this.y1c_1+1|0,this.y1c_1>=this.x1c_1&&zs(this.x1c_1);var i=vy(this);this.y1c_1=this.y1c_1-1|0,e=i}else this.u1c_1.s1b("Cannot read Json element because of unexpected "+hl(r));return e}}class es extends se{constructor(r,e,t,i){super(r,e),this.i1d_1=t,this.j1d_1=i}}class ga{}class Q1{constructor(){this.t1b_1=Mh(16)}l1d(r,e,t){var i=this.t1b_1,a=i.o2(r),s;if(a==null){var o=Mh(2);i.s2(r,o),s=o}else s=a;var u=s,c=e instanceof ga?e:g(),f=t??g();u.s2(c,f)}u1b(r,e,t){var i=this.m1d(r,e);if(i!=null)return i;var a=t();return this.l1d(r,e,a),a}m1d(r,e){var t=this.t1b_1.o2(r),i;t==null?i=null:i=t.o2(e instanceof ga?e:g());var a=i;return a??null}}class Wm{constructor(r){this.n1d_1=r}}class Ss extends Ti{constructor(r,e,t,i,a){super(),this.p15_1=r,this.q15_1=e,this.r15_1=t,this.s15_1=this.p15_1.pq(),this.t15_1=-1,this.u15_1=a,this.v15_1=this.p15_1.h15_1,this.w15_1=this.v15_1.d17_1?null:new Of(i)}r17(){return this.p15_1}pq(){return this.s15_1}s17(){return new Km(this.p15_1.h15_1,this.r15_1).e1d()}bq(r){try{var e;if(r instanceof _a?e=this.p15_1.h15_1.g17_1:e=!0,e)return r.fn(this);var t=fl(r.dn(),this.p15_1),i=this.r15_1.w1d(t,this.v15_1.a17_1),a;if(i==null){var s=z(r,sa)?r:g(),o;r:{var u;if(s instanceof _a?u=this.r17().h15_1.g17_1:u=!0,u){o=s.fn(this);break r}var c=fl(s.dn(),this.r17()),f=this.s17(),v=s.dn().co();if(!(f instanceof nr)){var h="Expected "+Nr(nr).oc()+", but had "+Dr(f).oc()+" as the serialized body of "+v,d=this.r15_1.z15_1.h1c(),_;if(this.r17().h15_1.p17_1){var m=b(f);_=b(Jr(m))}else _=null;var w=_;throw jr.g19(Kr(-1,h,d,null,w),h,-1,d,w,null)}var x=f,k=x.c18(c),S=k==null?null:An(k),E=S==null?null:Bn(S),I;try{I=I1(s,this,E)}catch(Q){var A;if(Q instanceof $n){var q=Q,j=un(q.message),F;if(this.r17().h15_1.p17_1){var O=x.toString();F=b(Jr(O))}else F=null;var L=F;throw jr.g19(Kr(-1,j,null,null,L),j,-1,null,L,null)}else throw Q}var H=I,B=z(H,sa)?H:g();o=by(this.r17(),c,x,B)}return o}else a=i;var $=a,R;try{R=I1(r,this,$)}catch(Q){var X;if(Q instanceof $n){var J=Q,er=Xi(V2(un(J.message),10),"."),Y=X2(un(J.message),10,"");this.r15_1.s1b(er,l,Y)}else throw Q;R=X}var G=R,sr=z(G,sa)?G:g();return this.u15_1=new Wm(t),sr.fn(this)}catch(Q){if(Q instanceof Fl){var ur=Q;throw ks(un(ur.message),"at path")?ur:jE(ur,Kb(ur.message," at path: ")+this.r15_1.z15_1.h1c())}else throw Q}}cq(r){var e=gy(this.p15_1,r);this.r15_1.z15_1.c1c(r),this.r15_1.o1d(e.i1d_1),SC(this);var t;switch(e.x2_1){case 1:case 2:case 3:t=new Ss(this.p15_1,e,this.r15_1,r,this.u15_1);break;default:var i;this.q15_1.equals(e)&&this.p15_1.h15_1.d17_1?i=this:i=new Ss(this.p15_1,e,this.r15_1,r,this.u15_1),t=i;break}return t}dq(r){r.go()===0&&Kf(r,this.p15_1)&&xC(this,r),this.r15_1.p1d()&&!this.p15_1.h15_1.m17_1&&Ui(this.r15_1,""),this.r15_1.o1d(this.q15_1.j1d_1),this.r15_1.z15_1.g1c()}op(){var r,e=this.w15_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=!this.r15_1.x1d(),r}pp(){return null}nq(r,e,t,i){var a=this.q15_1.equals(cl())&&(e&1)===0;a&&this.r15_1.z15_1.f1c();var s=super.nq(r,e,t,i);return a&&this.r15_1.z15_1.e1c(s),s}rq(r){var e;switch(this.q15_1.x2_1){case 0:e=IC(this,r);break;case 2:e=zC(this);break;default:e=AC(this);break}return this.q15_1.equals(cl())||this.r15_1.z15_1.d1c(e),e}qp(){return this.r15_1.y1d()}rp(){var r=this.r15_1.z1d();return ir(r,M(Ku(r)))||this.r15_1.s1b("Failed to parse byte for input '"+r.toString()+"'"),Ku(r)}sp(){var r=this.r15_1.z1d();return ir(r,M(Wu(r)))||this.r15_1.s1b("Failed to parse short for input '"+r.toString()+"'"),Wu(r)}tp(){var r=this.r15_1.z1d();return ir(r,M(Xr(r)))||this.r15_1.s1b("Failed to parse int for input '"+r.toString()+"'"),Xr(r)}up(){return this.r15_1.z1d()}vp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=So(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'float' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Yc(i))return i;Ch(this.r15_1,i)}wp(){var r=this.r15_1,e;r:{var t=r.d1d();try{e=So(t);break r}catch(s){if(s instanceof U)r.s1b("Failed to parse type 'double' for input '"+t+"'");else throw s}}var i=e,a=this.p15_1.h15_1.i17_1;if(a||Zc(i))return i;Ch(this.r15_1,i)}xp(){var r=this.r15_1.d1d();return r.length!==1&&this.r15_1.s1b("Expected single char, but got '"+r+"'"),K(r,0)}yp(){var r;return this.v15_1.a17_1?r=this.r15_1.v1d():r=this.r15_1.c1d(),r}zp(r){return Wf(r)?new jf(this.r15_1,this.p15_1):super.zp(r)}}class jf extends Ti{constructor(r,e){super(),this.a1e_1=r,this.b1e_1=e.pq()}pq(){return this.b1e_1}rq(r){var e="unsupported";throw xr.o3(b(e))}tp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=Oz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UInt' for input '"+t+"'");else throw a}}return e}up(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=Uz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'ULong' for input '"+t+"'");else throw a}}return e}rp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=jz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UByte' for input '"+t+"'");else throw a}}return e}sp(){var r=this.a1e_1,e;r:{var t=r.d1d();try{var i=Nz(t);e=i;break r}catch(a){if(a instanceof U)r.s1b("Failed to parse type 'UShort' for input '"+t+"'");else throw a}}return e}}class la extends Js{constructor(r,e,t,i){return new.target.c1e(r,e,t,i)}static c1e(r,e,t,i){var a=this.tq();a.k1c_1=r,a.l1c_1=e,a.m1c_1=t,a.n1c_1=i,a.o1c_1=a.l1c_1.pq(),a.p1c_1=a.l1c_1.h15_1,a.q1c_1=!1,a.r1c_1=null,a.s1c_1=null;var s=a.m1c_1.x2_1;return a.n1c_1!=null&&(a.n1c_1[s]!==null||a.n1c_1[s]!==a)&&(a.n1c_1[s]=a),a}r17(){return this.l1c_1}static t1c(r,e,t,i){return this.c1e(XI(r,e),e,t,i)}pq(){return this.o1c_1}rr(r,e){r:{if(this.r17().h15_1.g17_1){r.en(this,e);break r}var t=r instanceof _a,i;if(t)i=!this.r17().h15_1.o17_1.equals(ty());else{var a;switch(this.r17().h15_1.o17_1.x2_1){case 0:case 2:a=!1;break;case 1:var s=r.dn().do();a=P(s,Zl())||P(s,zf());break;default:Os();break}i=a}var o=i,u=o?fl(r.dn(),this.r17()):null,c;if(t){var f=r instanceof _a?r:g();n:if(e==null){var v="Value for serializer "+b(r.dn())+" should always be non-null. Please report issue to the kotlinx.serialization tracker.";throw U.v(b(v))}else break n;var h=Kz(f,this,e);c=z(h,$l)?h:g()}else c=r;var d=c;if(u!=null){yC(this.r17(),r,d,u),wC(d.dn().do());var _=d.dn().co();this.r1c_1=u,this.s1c_1=_}d.en(this,e)}}cq(r){var e=gy(this.l1c_1,r);e.i1d_1!==0&&(this.k1c_1.p1a(e.i1d_1),this.k1c_1.k1a());var t=this.r1c_1;if(t!=null){var i=this.s1c_1;OC(this,t,i??r.co()),this.r1c_1=null,this.s1c_1=null}if(this.m1c_1.equals(e))return this;var a=this.n1c_1,s=a==null?null:a[e.x2_1];return s??la.c1e(this.k1c_1,this.l1c_1,e,this.n1c_1)}dq(r){this.m1c_1.j1d_1!==0&&(this.k1c_1.l1a(),this.k1c_1.n1a(),this.k1c_1.p1a(this.m1c_1.j1d_1))}uq(r,e){switch(this.m1c_1.x2_1){case 1:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a();break;case 2:if(this.k1c_1.j1a_1)this.q1c_1=!0,this.k1c_1.m1a();else{var t=this,i;e%2|0?(this.k1c_1.p1a(58),this.k1c_1.o1a(),i=!1):(this.k1c_1.p1a(44),this.k1c_1.m1a(),i=!0),t.q1c_1=i}break;case 3:e===0&&(this.q1c_1=!0),e===1&&(this.k1c_1.p1a(44),this.k1c_1.o1a(),this.q1c_1=!1);break;default:this.k1c_1.j1a_1||this.k1c_1.p1a(44),this.k1c_1.m1a(),this.fr(aC(r,this.l1c_1,e)),this.k1c_1.p1a(58),this.k1c_1.o1a();break}return!0}gr(r){var e;if(Wf(r)){var t,i=this.k1c_1;if(i instanceof V1)t=this.k1c_1;else{var a=this.k1c_1.i1a_1,s=this.q1c_1;t=new V1(a,s)}var o=t;e=la.c1e(o,this.l1c_1,this.m1c_1,null)}else if(UC(r)){var u,c=this.k1c_1;if(c instanceof X1)u=this.k1c_1;else{var f=this.k1c_1.i1a_1,v=this.q1c_1;u=new X1(f,v)}var h=u;e=la.c1e(h,this.l1c_1,this.m1c_1,null)}else this.r1c_1!=null?(this.s1c_1=r.co(),e=this):e=super.gr(r);return e}wq(){this.k1c_1.r1a("null")}xq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.a1b(r)}yq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.v1a(r)}zq(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.x1a(r)}ar(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.y1a(r)}br(r){this.q1c_1?this.fr(r.toString()):this.k1c_1.z1a(r)}cr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.t1a(r),!this.p1c_1.i17_1&&!Yc(r))throw Ah(r)}dr(r){if(this.q1c_1?this.fr(r.toString()):this.k1c_1.u1a(r),!this.p1c_1.i17_1&&!Zc(r))throw Ah(r)}er(r){this.fr(yr(r))}fr(r){return this.k1c_1.b1b(r)}}class ru extends Xg{constructor(r,e,t){t=t===l?null:t,super(),this.f1e_1=r,this.g1e_1=e,this.h1e_1=t,this.i1e_1=this.r17().h15_1}r17(){return this.f1e_1}l2(){return this.g1e_1}pq(){return this.r17().pq()}k1e(){var r=this.o13(),e;r==null?e=null:e=this.l1e(r);var t=e;return t??this.l2()}j1e(r){return this.q13()+("."+r)}s17(){return this.k1e()}bq(r){var e;r:{var t;if(r instanceof _a?t=this.r17().h15_1.g17_1:t=!0,t){e=r.fn(this);break r}var i=fl(r.dn(),this.r17()),a=this.s17(),s=r.dn().co();if(!(a instanceof nr)){var o="Expected "+Nr(nr).oc()+", but had "+Dr(a).oc()+" as the serialized body of "+s,u=this.q13(),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Jr(f))}else c=null;var v=c;throw jr.g19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=a,d=h.c18(i),_=d==null?null:An(d),m=_==null?null:Bn(_),w;try{w=I1(r,this,m)}catch(j){if(j instanceof $n){var x=j,k=un(x.message),S;if(this.r17().h15_1.p17_1){var E=h.toString();S=b(Jr(E))}else S=null;var I=S;throw jr.g19(Kr(-1,k,null,null,I),k,-1,null,I,null)}else throw j}var A=w,q=z(A,sa)?A:g();e=by(this.r17(),i,h,q)}return e}p13(r,e){return e}cq(r){var e=this.k1e(),t=r.do(),i,a;if(P(t,Gs())?a=!0:a=t instanceof qa,a){var s=this.r17(),o=r.co();if(!(e instanceof fn)){var u="Expected "+Nr(fn).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+o,c=this.q13(),f;if(this.r17().h15_1.p17_1){var v=b(e);f=b(Jr(v))}else f=null;var h=f;throw jr.g19(Kr(-1,u,c,null,h),u,-1,c,h,null)}i=new rc(s,e)}else if(P(t,Vl())){var d=this.r17(),_=ul(r.lo(0),d.pq()),m=_.do(),w,x;if(m instanceof Hn?x=!0:x=P(m,Oi()),x){var k=this.r17(),S=r.co();if(!(e instanceof nr)){var E="Expected "+Nr(nr).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+S,I=this.q13(),A;if(this.r17().h15_1.p17_1){var q=b(e);A=b(Jr(q))}else A=null;var j=A;throw jr.g19(Kr(-1,E,I,null,j),E,-1,I,j,null)}w=new Zm(k,e,r)}else if(d.h15_1.b17_1){var F=this.r17(),O=r.co();if(!(e instanceof fn)){var L="Expected "+Nr(fn).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+O,H=this.q13(),B;if(this.r17().h15_1.p17_1){var $=b(e);B=b(Jr($))}else B=null;var R=B;throw jr.g19(Kr(-1,L,H,null,R),L,-1,H,R,null)}w=new rc(F,e)}else throw oy(_);i=w}else{var X=this.r17(),J=r.co();if(!(e instanceof nr)){var er="Expected "+Nr(nr).oc()+", but had "+Dr(e).oc()+" as the serialized body of "+J,Y=this.q13(),G;if(this.r17().h15_1.p17_1){var sr=b(e);G=b(Jr(sr))}else G=null;var ur=G;throw jr.g19(Kr(-1,er,Y,null,ur),er,-1,Y,ur,null)}i=new Na(X,e,r,this.h1e_1)}return i}dq(r){}op(){var r=this.k1e();return!(r instanceof fe)}m1e(r){return this.l1e(r)!==Xs()}s13(r){return this.m1e(r!=null&&typeof r=="string"?r:g())}n1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of boolean",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Pf(c),v;f==null?qn(this,c,"boolean",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"boolean",r);else throw h}}return e}t13(r){return this.n1e(r!=null&&typeof r=="string"?r:g())}o1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of byte",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Pe(-128,127);io(z(h,na)?h:g(),f)?v=Ku(f):v=null;var d=v,_;d==null?qn(this,c,"byte",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"byte",r);else throw m}}return e}u13(r){return this.o1e(r!=null&&typeof r=="string"?r:g())}p1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of short",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Pe(-32768,32767);io(z(h,na)?h:g(),f)?v=Wu(f):v=null;var d=v,_;d==null?qn(this,c,"short",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"short",r);else throw m}}return e}v13(r){return this.p1e(r!=null&&typeof r=="string"?r:g())}q1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of int",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v,h=Pe(-2147483648,2147483647);io(z(h,na)?h:g(),f)?v=Xr(f):v=null;var d=v,_;d==null?qn(this,c,"int",r):_=d,e=_;break r}catch(m){if(m instanceof U)qn(this,c,"int",r);else throw m}}return e}w13(r){return this.q1e(r!=null&&typeof r=="string"?r:g())}r1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of long",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=Qi(c),v;f==null?qn(this,c,"long",r):v=f,e=v;break r}catch(h){if(h instanceof U)qn(this,c,"long",r);else throw h}}return e}x13(r){return this.r1e(r!=null&&typeof r=="string"?r:g())}s1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of float",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=RI(c),v;f==null?qn(this,c,"float",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"float",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Yc(h))return h;var _=Th(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Jr(x))}else w=null;var k=w;throw jr.g19(Kr(-1,_,null,m,k),_,-1,null,k,m)}y13(r){return this.s1e(r!=null&&typeof r=="string"?r:g())}t1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of double",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=BI(c),v;f==null?qn(this,c,"double",r):v=f,e=v;break r}catch(S){if(S instanceof U)qn(this,c,"double",r);else throw S}}var h=e,d=this.r17().h15_1.i17_1;if(d||Zc(h))return h;var _=Th(h,r),m="It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'",w;if(this.r17().h15_1.p17_1){var x=b(this.k1e());w=b(Jr(x))}else w=null;var k=w;throw jr.g19(Kr(-1,_,null,m,k),_,-1,null,k,m)}z13(r){return this.t1e(r!=null&&typeof r=="string"?r:g())}u1e(r){var e;r:{var t=this.l1e(r);if(!(t instanceof fr)){var i="Expected "+Nr(fr).oc()+", but had "+Dr(t).oc()+" as the serialized body of char",a=this.j1e(r),s;if(this.r17().h15_1.p17_1){var o=b(t);s=b(Jr(o))}else s=null;var u=s;throw jr.g19(Kr(-1,i,a,null,u),i,-1,a,u,null)}var c=t;try{var f=new Sn(Bb(c.w17())),v;f==null?qn(this,c,"char",r):v=f,e=v.x1_1;break r}catch(h){if(h instanceof U)qn(this,c,"char",r);else throw h}}return e}a14(r){return this.u1e(r!=null&&typeof r=="string"?r:g())}v1e(r){var e=this.l1e(r);if(!(e instanceof fr)){var t="Expected "+Nr(fr).oc()+", but had "+Dr(e).oc()+" as the serialized body of string",i=this.j1e(r),a;if(this.r17().h15_1.p17_1){var s=b(e);a=b(Jr(s))}else a=null;var o=a;throw jr.g19(Kr(-1,t,i,null,o),t,-1,i,o,null)}var u=e;if(!(u instanceof ut)){var c="Expected string value for a non-null key '"+r+"', got null literal instead",f=this.j1e(r),v="Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.",h;if(this.r17().h15_1.p17_1){var d=b(this.k1e());h=b(Jr(d))}else h=null;var _=h;throw jr.g19(Kr(-1,c,f,v,_),c,-1,f,_,v)}if(!u.e18_1&&!this.r17().h15_1.a17_1){var m="String literal for value of key '"+r+"' should be quoted",w=this.j1e(r),x="Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.",k;if(this.r17().h15_1.p17_1){var S=b(this.k1e());k=b(Jr(S))}else k=null;var E=k;throw jr.g19(Kr(-1,m,w,x,E),m,-1,w,E,x)}return u.g18_1}b14(r){return this.v1e(r!=null&&typeof r=="string"?r:g())}w1e(r,e){var t;if(Wf(e)){var i=this.r17(),a=this.l1e(r),s=e.co();if(!(a instanceof fr)){var o="Expected "+Nr(fr).oc()+", but had "+Dr(a).oc()+" as the serialized body of "+s,u=this.j1e(r),c;if(this.r17().h15_1.p17_1){var f=b(a);c=b(Jr(f))}else c=null;var v=c;throw jr.g19(Kr(-1,o,u,null,v),o,-1,u,v,null)}var h=Zf(i,a.w17());t=new jf(h,this.r17())}else t=super.c14(r,e);return t}c14(r,e){return this.w1e(r!=null&&typeof r=="string"?r:g(),e)}zp(r){return this.o13()!=null?super.zp(r):new Ym(this.r17(),this.l2(),this.h1e_1).zp(r)}}class Na extends ru{constructor(r,e,t,i,a){i=i===l?null:i,a=a===l?null:a,super(r,e,i),this.d1f_1=e,this.e1f_1=a,this.f1f_1=this.l2().r2().x(),this.g1f_1=this.i1e_1.d17_1?null:new Of(t),this.h1f_1=null,this.i1f_1=null}l2(){return this.d1f_1}rq(r){var e=this.f1f_1;r:for(;e.y();){var t=e.z(),i=t.k2(),a=tu(r,this.r17(),i);if(a!==-3){if(this.i1e_1.f17_1&&NC(this,r,a,t.l2()))continue r;var s=this.g1f_1;return s==null||s.p1b(a),this.h1f_1=i,this.i1f_1=t.l2(),a}i!==this.h1e_1&&!Kf(r,this.r17())&&DC(this,i)}var o=this.g1f_1,u=o==null?null:o.q1b(),c=u??-1;return c!==-1&&(this.h1f_1=r.io(c),this.i1f_1=null),c}op(){var r,e=this.g1f_1,t=e==null?null:e.o1b_1;return t??!1?r=!1:r=super.op(),r}k13(r,e){var t=this.h1f_1;return t??r.io(e)}l1e(r){var e=this.i1f_1;return e??Se(this.l2(),r)}cq(r){if(r===this.e1f_1){var e=this.r17(),t=this.k1e(),i=this.e1f_1.co();if(!(t instanceof nr)){var a="Expected "+Nr(nr).oc()+", but had "+Dr(t).oc()+" as the serialized body of "+i,s=this.q13(),o;if(this.r17().h15_1.p17_1){var u=b(t);o=b(Jr(u))}else o=null;var c=o;throw jr.g19(Kr(-1,a,s,null,c),a,-1,s,c,null)}return new Na(e,t,r,this.h1e_1,this.e1f_1)}return super.cq(r)}}class rc extends ru{constructor(r,e){super(r,e),this.p1f_1=e,this.q1f_1=this.p1f_1.c1(),this.r1f_1=-1}l2(){return this.p1f_1}k13(r,e){return e.toString()}l1e(r){return this.p1f_1.d1(Fx(r))}rq(r){for(;this.r1f_1<(this.q1f_1-1|0);)return this.r1f_1=this.r1f_1+1|0,this.r1f_1;return-1}}class Ym extends ru{constructor(r,e,t){t=t===l?null:t,super(r,e,t),this.y1f_1=e,this.d14("primitive")}l2(){return this.y1f_1}rq(r){return 0}l1e(r){if(r!=="primitive"){var e="This input can only handle primitives with 'primitive' tag";throw U.v(b(e))}return this.y1f_1}}class Zm extends Na{constructor(r,e,t){super(r,e,t),this.l1g_1=Si(e.p2()),this.m1g_1=Ws(this.l1g_1.c1(),2),this.n1g_1=-1}k13(r,e){var t=e/2|0;return this.l1g_1.d1(t)}rq(r){for(;this.n1g_1<(this.m1g_1-1|0);)return this.n1g_1=this.n1g_1+1|0,this.n1g_1;return-1}l1e(r){return this.n1g_1%2|0?Se(this.l2(),r):re(r)}dq(r){}}class Vm{constructor(r){this.x15_1=r,this.y15_1=0,this.z15_1=new Gm(this.x15_1),this.a16_1=null,this.b16_1=rn.f()}r1g(){}p1d(){var r=this.s1g(),e=this.p1g();return r>=C(e)||r===-1?!1:rr(e,r)===44?(this.y15_1=this.y15_1+1|0,!0):!1}t1g(r){return!(r===125||r===93||r===58||r===44)}c16(){var r=this.f1d();r!==10&&this.s1b("Expected EOF after parsing, but had "+yr(rr(this.p1g(),this.y15_1-1|0))+" instead")}z1c(r){var e=this.f1d();if(e!==r){var t=hl(r),i=this.y15_1>0?this.y15_1-1|0:this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}return e}u1g(r){if(this.y15_1>0&&r===34){var e;r:{var t=this.y15_1;try{this.y15_1=this.y15_1-1|0,e=this.d1d();break r}finally{this.y15_1=t}}var i=e;i==="null"&&this.r1b("Expected string literal but 'null' literal was found",this.y15_1-1|0,"Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.")}var a=He(r),s=hl(a),o=this.y15_1>0?this.y15_1-1|0:this.y15_1,u=this.y15_1===C(this.p1g())||o<0?"EOF":yr(rr(this.p1g(),o)),c="Expected "+s+", but had '"+u+"' instead";this.s1b(c,o)}a1d(){var r=this.p1g(),e=this.y15_1;r:for(;;){if(e=this.q1g(e),e===-1)break r;var t=rr(r,e);if(t===32||t===10||t===13||t===9){e=e+1|0;continue r}return this.y15_1=e,He(t)}return this.y15_1=e,10}q1d(r){var e=this.s1g();e=this.q1g(e);var t=C(this.p1g())-e|0;if(t<4||e===-1)return!1;var i=0;if(i<=3)do{var a=i;if(i=i+1|0,K("null",a)!==rr(this.p1g(),e+a|0))return!1}while(i<=3);return t>4&&He(rr(this.p1g(),e+4|0))===0?!1:(r&&(this.y15_1=e+4|0),!0)}x1d(r,e){return r=r===l?!0:r,e===l?this.q1d(r):e.q1d.call(this,r)}r1d(r){var e=this.a1d(),t;if(r){if(e!==1&&e!==0)return null;t=this.d1d()}else{if(e!==1)return null;t=this.c1d()}var i=t;return this.a16_1=i,i}v1g(){this.a16_1=null}w1g(r,e){var t=this.p1g();return b(jn(t,r,e))}c1d(){return this.a16_1!=null?Lh(this):this.u1d()}consumeString2(r,e,t){for(var i=t,a=e,s=rr(r,i),o=!1;s!==34;)s===92?(o=!0,i=this.q1g(LC(this,a,i)),i===-1&&this.s1b("Unexpected EOF",i),a=i):(i=i+1|0,i>=C(r)&&(o=!0,this.o1g(a,i),i=this.q1g(i),i===-1&&this.s1b("Unexpected EOF",i),a=i)),s=rr(r,i);var u;o?u=Uu(this,a,i):u=this.w1g(a,i);var c=u;return this.y15_1=i+1|0,c}v1d(){var r=this.d1d();return r==="null"&&PC(this)&&this.s1b("Unexpected 'null' value instead of string literal"),r}d1d(){if(this.a16_1!=null)return Lh(this);var r=this.s1g();(r>=C(this.p1g())||r===-1)&&this.s1b("EOF",r);var e=He(rr(this.p1g(),r));if(e===1)return this.c1d();e!==0&&this.s1b("Expected beginning of the string, but got "+yr(rr(this.p1g(),r)));for(var t=!1;He(rr(this.p1g(),r))===0;)if(r=r+1|0,r>=C(this.p1g())){t=!0,this.o1g(this.y15_1,r);var i=this.q1g(r);if(i===-1)return this.y15_1=r,Uu(this,0,0);r=i}var a;t?a=Uu(this,this.y15_1,r):a=this.w1g(this.y15_1,r);var s=a;return this.y15_1=r,s}o1g(r,e){this.b16_1.yd(this.p1g(),r,e)}t1d(r){var e=T.m(),t=this.a1d();if(t!==8&&t!==6)return this.d1d(),or;r:for(;;){if(t=this.a1d(),t===1){r?this.d1d():this.u1d();continue r}var i=t;if(i===8||i===6?e.n(t):i===9?(Fu(e)!==8&&this.s1b("found ] instead of }"),th(e)):i===7?(Fu(e)!==6&&this.s1b("found } instead of ]"),th(e)):i===10&&this.s1b("Unexpected end of input due to malformed JSON during ignoring unknown keys"),this.f1d(),e.c1()===0)return or}}toString(){return"JsonReader(source='"+b(this.p1g())+"', currentPosition="+this.y15_1+")"}s1d(r){var e=this.w1g(0,this.y15_1),t=Q2(e,r);this.r1b("Encountered an unknown key '"+r+"'",t,"Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.")}r1b(r,e,t){throw nC(this,r,e,this.z15_1.h1c(),t,this.p1g())}s1b(r,e,t,i){return e=e===l?this.y15_1:e,t=t===l?null:t,i===l?this.r1b(r,e,t):i.r1b.call(this,r,e,t)}z1d(){var r=this.s1g();r=this.q1g(r),(r>=C(this.p1g())||r===-1)&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,r===C(this.p1g())&&this.s1b("EOF"),e=!0):e=!1;var t=e,i=new y(0,0),a=new y(0,0),s=!1,o=!1,u=!1,c=r;r:for(;r!==C(this.p1g());){var f=rr(this.p1g(),r);if((f===101||f===69)&&!u){r===c&&this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r),o=!0,u=!0,r=r+1|0;continue r}if(f===45&&u){r===c&&this.s1b("Unexpected symbol '-' in numeric literal",r),o=!1,r=r+1|0;continue r}if(f===43&&u){r===c&&this.s1b("Unexpected symbol '+' in numeric literal",r),o=!0,r=r+1|0;continue r}if(f===45){r!==c&&this.s1b("Unexpected symbol '-' in numeric literal",r),s=!0,r=r+1|0;continue r}var v=He(f);if(v!==0)break r;r=r+1|0;var h=ie(f,48);if(0<=h&&h<=9||this.s1b("Unexpected symbol '"+yr(f)+"' in numeric literal",r-1|0),u){var d=a,_=qr(d,M(10));a=hr(_,M(h));continue r}var m=i,w=qr(m,M(10));i=Hr(w,M(h)),tr(i,new y(0,0))>0&&this.s1b("Numeric value overflow")}var x=r!==c;if((c===r||s&&c===(r-1|0))&&this.s1b("Expected numeric literal",r),t&&(x||this.s1b("EOF"),rr(this.p1g(),r)!==34&&this.s1b("Expected closing quotation mark",r),r=r+1|0),this.y15_1=r,u){var k=Zn(i)*BC(a,o);(k>Zn(new y(-1,2147483647))||k<Zn(new y(0,-2147483648)))&&this.s1b("Numeric value overflow"),Math.floor(k)!==k&&this.s1b("Can't convert "+k+" to Long"),i=Un(k)}var S;return s?S=i:ir(i,new y(0,-2147483648))?this.s1b("Numeric value overflow"):S=tn(i),S}h18(){var r=this.z1d(),e=this.f1d();if(e!==10){var t=this.y15_1>0?this.y15_1-1|0:this.y15_1,i=this.y15_1===C(this.p1g())||t<0?"EOF":yr(rr(this.p1g(),t)),a="Expected input to contain a single valid number, but got '"+i+"' after it";this.s1b(a,t)}return r}y1d(){var r=this.s1g();r===C(this.p1g())&&this.s1b("EOF");var e;rr(this.p1g(),r)===34?(r=r+1|0,e=!0):e=!1;var t=e,i=RC(this,r);return t&&(this.y15_1===C(this.p1g())&&this.s1b("EOF"),rr(this.p1g(),this.y15_1)!==34&&this.s1b("Expected closing quotation mark"),this.y15_1=this.y15_1+1|0),i}}class Xm{constructor(){dc=this,this.x1g_1=_s(117),this.y1g_1=new Int8Array(126),FC(this),JC(this)}}class Nf extends Vm{constructor(r,e){super(e),this.k1h_1=r}p1g(){return this.k1h_1}q1g(r){return r<this.p1g().length?r:-1}f1d(){var r=this.p1g(),e=this.y15_1;r:for(;e!==-1&&e<r.length;){var t=e;e=t+1|0;var i=K(r,t);if(i===32||i===10||i===13||i===9)continue r;return this.y15_1=e,He(i)}return this.y15_1=r.length,10}b1d(){var r=this.y15_1;if(r===-1)return!1;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}return this.y15_1=r,this.t1g(t)}return this.y15_1=r,!1}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9)r=r+1|0;else break r}return this.y15_1=r,r}o1d(r){this.y15_1===-1&&this.u1g(r);var e=this.p1g(),t=this.y15_1;r:for(;t<e.length;){var i=t;t=i+1|0;var a=K(e,i);if(a===32||a===10||a===13||a===9)continue r;if(this.y15_1=t,a===r)return or;this.u1g(r)}this.y15_1=-1,this.u1g(r)}u1d(){this.o1d(34);var r=this.y15_1,e=Nl(this.p1g(),34,r);if(e===-1){this.d1d();var t=hl(1),i=this.y15_1,a=this.y15_1===C(this.p1g())||i<0?"EOF":yr(rr(this.p1g(),i)),s="Expected "+t+", but had '"+a+"' instead";this.s1b(s,i)}var o=r;if(o<e)do{var u=o;if(o=o+1|0,K(this.p1g(),u)===92)return this.consumeString2(this.p1g(),this.y15_1,u)}while(o<e);return this.y15_1=e+1|0,ae(this.p1g(),r,e)}w1d(r,e){var t=this.y15_1;try{if(this.f1d()!==6)return null;var i=this.r1d(e);return i!==r||(this.v1g(),this.f1d()!==5)?null:this.r1d(e)}finally{this.y15_1=t,this.v1g()}}}class Qm extends Nf{f1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e+1|0,He(K(r,e)))}b1d(){var r=this.s1g();return r>=this.p1g().length||r===-1?!1:this.t1g(K(this.p1g(),r))}o1d(r){var e=this.p1g(),t=this.s1g();(t>=e.length||t===-1)&&(this.y15_1=-1,this.u1g(r));var i=K(e,t);if(this.y15_1=t+1|0,i===r)return or;this.u1g(r)}a1d(){var r=this.p1g(),e=this.s1g();return e>=r.length||e===-1?10:(this.y15_1=e,He(K(r,e)))}s1g(){var r=this.y15_1;if(r===-1)return r;var e=this.p1g();r:for(;r<e.length;){var t=K(e,r);if(t===32||t===10||t===13||t===9){r=r+1|0;continue r}if(t===47&&(r+1|0)<e.length){var i=K(e,r+1|0);if(i===47){r=Nl(e,10,r+2|0),r===-1?r=e.length:r=r+1|0;continue r}else if(i===42){r=Co(e,"*/",r+2|0),r===-1?(this.y15_1=e.length,this.s1b('Expected end of the block comment: "*/", but had EOF instead')):r=r+2|0;continue r}}break r}return this.y15_1=r,r}}class nc{constructor(){this.n15_1=rn.fa(128)}w1a(r){this.n15_1.be(r)}q1a(r){this.n15_1.da(r)}s1a(r){this.n15_1.ca(r)}c1b(r){vl(this.n15_1,r)}o15(){this.n15_1.ee()}toString(){return this.n15_1.toString()}}var al;function Ie(){return al===l&&new Em,al}function jI(n,r){n=n===l?Ie():n;var e=new Im(n);r(e);var t=e.x16();return new Cm(t,e.u16_1)}function NI(n){if(P(n.pq(),Xl()))return or;var r=new Uf(n.h15_1);n.pq().s14(r)}var Eh;function Df(){if(Eh)return or;Eh=!0,ry=new fo("NONE",0),ny=new fo("ALL_JSON_OBJECTS",1),ey=new fo("POLYMORPHIC",2)}var ry,ny,ey;function ty(){return Df(),ry}function DI(){return Df(),ny}function iy(){return Df(),ey}function LI(){return _e(),ay}var ay,Lf,ec;function Ur(n){_e();var r=n instanceof nr?n:null,e;return r==null?Mf(n,"JsonObject"):e=r,e}function re(n){return _e(),n==null?Xs():new ut(n,!0)}function fs(n){_e();var r=n instanceof fn?n:null,e;return r==null?Mf(n,"JsonArray"):e=r,e}var sl;function Xs(){return sl===l&&new fe,sl}function Bn(n){_e();var r;return n instanceof fe?r=null:r=n.w17(),r}function An(n){_e();var r=n instanceof fr?n:null,e;return r==null?Mf(n,"JsonPrimitive"):e=r,e}function PI(n){_e();var r;try{r=Qi(n)}catch(t){var e;if(t instanceof jr)e=null;else throw t;r=e}return r}function MI(n){_e();var r;try{r=Qi(n)}catch(o){var e;if(o instanceof jr)e=null;else throw o;r=e}var t=r,i;if(t==null)return null;i=t;var a=i,s=Pe(-2147483648,2147483647);return io(z(s,na)?s:g(),a)?Xr(a):null}function Pf(n){return _e(),jC(n.w17())}function Mf(n,r){throw _e(),U.v("Element "+b(Dr(n))+" is not a "+r)}function Qi(n){return _e(),Zf(Ie(),n.w17()).h18()}function RI(n){_e();var r=n.w17();return So(r)}function BI(n){return _e(),So(n.w17())}var Ih;function _e(){Ih||(Ih=!0,ay=Ks("kotlinx.serialization.json.JsonUnquotedLiteral",xs()))}function ol(n,r,e){return n.j18(r,re(e))}function $I(n){return n.zo("JsonPrimitive",ns(FI)),n.zo("JsonNull",ns(JI)),n.zo("JsonLiteral",ns(HI)),n.zo("JsonObject",ns(GI)),n.zo("JsonArray",ns(KI)),or}function FI(){return Rf().m18_1}function JI(){return $f().n18_1}function HI(){return sy().o18_1}function GI(){return nu().p18_1}function KI(){return Bf().q18_1}var tc;function ct(){return tc===l&&new Nm,tc}var ic;function Rf(){return ic===l&&new Dm,ic}var ac;function WI(){return ac===l&&new Lm,ac}var sc;function Bf(){return sc===l&&new Pm,sc}var oc;function YI(){return oc===l&&new Mm,oc}var lc;function nu(){return lc===l&&new Rm,lc}var uc;function $f(){return uc===l&&new Bm,uc}function ns(n){return new Ys(n)}var cc;function sy(){return cc===l&&new $m,cc}function Da(n){ZI(n)}function eu(n){var r=z(n,Ql)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Decoder to be JsonDecoder, got "+b(Dr(n))));return e=r,e}function Ff(n){eu(n)}function ZI(n){var r=z(n,Tf)?n:null,e;if(r==null)throw xr.o3("This serializer can be used only with Json format."+("Expected Encoder to be JsonEncoder, got "+b(Dr(n))));return e=r,e}function Fe(n){var r=n.p19_1,e=xi;return ka("original",1,e,VI(),null),r.l2()}function VI(){return Be(n=>Fe(n),1,0,5)}function XI(n,r){return r.h15_1.c17_1?new Fm(n,r):new Vs(n)}function QI(n,r,e){return n.o1b_1=!r.mo(e)&&r.lo(e).eo(),n.o1b_1}function rC(n){return Be((r,e)=>{var t=n;return QI(t,r,e)},2,0,6,"readIfAbsent",[n])}function Jr(n,r){if(r=r===l?-1:r,C(n)<200)return n;if(r===-1){var e=C(n)-60|0;if(e<=0)return n;var t=C(n);return"....."+b(jn(n,e,t))}var i=r-30|0,a=r+30|0,s=i<=0?"":".....",o=a>=C(n)?"":".....",u=vn(i,0),c=Et(a,C(n));return s+b(jn(n,u,c))+o}function Kr(n,r,e,t,i){return Hf(n,r,e,t,i)}function Jf(n,r){return r=r===l?null:r,jr.g19(Hf(-1,n,null,r,null),n,-1,null,null,r)}function Ui(n,r){r=r===l?"object":r,n.r1b("Trailing comma before the end of JSON "+r,n.y15_1-1|0,"Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.")}function Ch(n,r){n.s1b(Gf(r,null),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function oy(n){return Zs.h1a("Value of type '"+n.co()+"' can't be used in JSON as a key in the map. "+("It should have either primitive or enum kind, but its kind is '"+n.do().toString()+"'"),n.co(),"Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.")}function Ah(n,r){return r=r===l?null:r,Zs.h1a(Gf(n,r),l,"It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'")}function Th(n,r){return Gf(n,r)}function Hf(n,r,e,t,i){var a=rn.f();return n>=0&&a.ca("Unexpected JSON token at offset "+n+": "),a.ca(r),e==null||lt(e)||(a.ca(" at path: "),a.ca(e)),t==null||lt(t)||a.ca(`
`+t),i!=null&&(a.ca(`
JSON input: `),a.ca(i)),a.toString()}function Gf(n,r){return"Unexpected special floating-point value "+b(n)+(r!=null?" with key "+r+". ":". ")+"By default, non-finite floating point values are prohibited because they do not conform JSON specification."}function nC(n,r,e,t,i,a){var s;n.x15_1.p17_1?s=b(Jr(a,e)):s=null;var o=s;return jr.g19(Hf(e,r,t,i,o),r,e,t,o,i)}function eC(n,r){var e;return r==null||lt(r)?e="":e=`
`+r,n+e}function tC(){return Ae(),ly}var ly;function iC(){return Ae(),uy}var uy;function Kf(n,r){Ae();var e;if(r.h15_1.z16_1)e=!0;else{var t=n.ho(),i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(o instanceof Tm){i=!0;break r}}i=!1}e=i}return e}function tu(n,r,e){if(Ae(),cy(r,n)){var t=e.toLowerCase();return Tu(n,r,t)}var i=iu(n,r);if(i!=null)return Tu(n,r,e);var a=n.jo(e);return a!==-3||!r.h15_1.j17_1?a:Tu(n,r,e)}function aC(n,r,e){Ae();var t=iu(n,r);return t==null?n.io(e):fy(n,r,t)[e]}function sC(n,r){Ae();var e=iu(n,r);return e==null?NE(n):jp(fy(n,r,e))}function cy(n,r){return Ae(),n.h15_1.l17_1&&P(r.do(),Oi())}function Tu(n,r,e){Ae();var t=oC(r,n).o2(e);return t??-3}function iu(n,r){return Ae(),P(n.do(),Zl())?r.h15_1.k17_1:null}function fy(n,r,e){Ae();var t=Sy(r),i=iC();return t.u1b(n,i,uC(n,e))}function oC(n,r){Ae();var e=Sy(n),t=tC();return e.u1b(r,t,cC(r,n))}function lC(n,r){Ae();var e=vr.q4(),t=cy(r,n),i=iu(n,r),a=0,s=n.go();if(a<s)do{var o=a;a=a+1|0;for(var u=n.ko(o),c=T.m(),f=u.x();f.y();){var v=f.z();v instanceof qm&&c.n(v)}var h=Dc(c),d=h==null?null:h.v1b_1;if(d!=null)for(var _=0,m=d.length;_<m;){var w=d[_];_=_+1|0;var x;t?x=w.toLowerCase():x=w,qh(e,n,x,o)}var k;t?k=n.io(o).toLowerCase():i!=null?k=i.w1b(n,o,n.io(o)):k=null;var S=k;S==null||qh(e,n,S,o)}while(a<s);var E;return e.i1()?E=Tr():E=e,E}function uC(n,r){return()=>{for(var e=Tn.e1(),t=0,i=n.go(),a=Array(i);t<i;){var s=t,o=n.io(s),u=r.w1b(n,s,o);if(!e.n(u))throw Zs.h1a("The transformed name '"+u+"' for property "+o+" already exists "+("in "+b(n)),n.co());a[s]=u,t=t+1|0}return a}}function cC(n,r){return()=>lC(n,r)}function qh(n,r,e,t){var i=P(r.do(),Oi())?"enum value":"property";if((z(n,mn)?n:g()).m2(e))throw Jf("The suggested name '"+e+"' for "+i+" "+r.io(t)+" is already one of the names for "+i+" "+(r.io(Se(n,e))+" in "+b(r)));n.s2(e,t)}var Oh;function Ae(){Oh||(Oh=!0,ly=new ga,uy=new ga)}var fc,vc;function Uh(n){var r=Ws(n.b1c_1,2);n.z1b_1=d_(n.z1b_1,r);for(var e=0,t=new Int32Array(r);e<r;)t[e]=-1,e=e+1|0;var i=t,a=n.a1c_1,s=a.length,o=a;Rk(o,i,0,0,s),n.a1c_1=i}function fC(n,r,e){var t=r.do(),i;if(t instanceof qa?i=!0:i=P(t,dm()),i)throw U.v("Serializer for "+e.oc()+" can't be registered as a subclass for polymorphic serialization "+("because its kind "+t.toString()+" is not concrete. To work with multiple hierarchies, register it as a base class."));if(n.i1c_1||!n.j1c_1)return or;var a,s;if(P(t,Gs())||P(t,Vl())?s=!0:s=t instanceof Hn,s?a=!0:a=t instanceof Jl,a)throw U.v("Serializer for "+e.oc()+" of kind "+t.toString()+" cannot be serialized polymorphically with class discriminator.")}function vC(n,r,e,t){var i=au(),a=mC().c1(),s=Array(a),o=la.t1c(r,n,i,s);o.rr(e,t)}function hC(n){var r=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=vr.q4();r:for(;n.u1c_1.b1d();){var t=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var i=n.e1d();e.s2(t,i),r=n.u1c_1.f1d();var a=r;if(a!==4){if(a===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return r===6?n.u1c_1.z1c(7):r===4&&(n.w1c_1||Ui(n.u1c_1),n.u1c_1.z1c(7)),new nr(e)}function*dC(n,r,e){var t=n.u1c_1.z1c(6);n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var i=vr.q4();r:for(;n.u1c_1.b1d();){var a=n.v1c_1?n.u1c_1.d1d():n.u1c_1.c1d();n.u1c_1.z1c(5);var s=yield*r.tk(or,e);i.s2(a,s),t=n.u1c_1.f1d();var o=t;if(o!==4){if(o===7)break r;n.u1c_1.s1b("Expected end of the object or comma")}}return t===6?n.u1c_1.z1c(7):t===4&&(n.w1c_1||Ui(n.u1c_1),n.u1c_1.z1c(7)),new nr(i)}function vy(n){var r=n.u1c_1.f1d();n.u1c_1.a1d()===4&&n.u1c_1.s1b("Unexpected leading comma");var e=T.m();r:for(;n.u1c_1.b1d();){var t=n.e1d();if(e.n(t),r=n.u1c_1.f1d(),r!==4){var i=n.u1c_1,a=r===9,s=i.y15_1;if(!a){var o="Expected end of the array or comma";i.s1b(o,s)}break r}}return r===8?n.u1c_1.z1c(9):r===4&&(n.w1c_1||Ui(n.u1c_1,"array"),n.u1c_1.z1c(9)),new fn(e)}function ll(n,r){var e;n.v1c_1||!r?e=n.u1c_1.d1d():e=n.u1c_1.c1d();var t=e;return!r&&t==="null"?Xs():new ut(t,r)}function pC(n){return LS(new wp(_C(n)),or)}function _C(n){return Be((r,e,t)=>_k(t,function*(i){var a=n.u1c_1.a1d(),s;if(a===1)s=ll(n,!0);else if(a===0)s=ll(n,!1);else if(a===6){var o=n;o.y1c_1=o.y1c_1+1|0,o.y1c_1>=o.x1c_1&&zs(o.x1c_1);var u=yield*dC(n,r,i);o.y1c_1=o.y1c_1-1|0,s=u}else if(a===8){var c=n;c.y1c_1=c.y1c_1+1|0,c.y1c_1>=c.x1c_1&&zs(c.x1c_1);var f=vy(n);c.y1c_1=c.y1c_1-1|0,s=f}else n.u1c_1.s1b("Can't begin reading element, unexpected token");return s}),2)}function zs(n){throw Jf("Json input is too nested and may be impossible to parse without stack overflow.","Current nesting limit is "+n+". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.")}var jh;function La(){if(jh)return or;jh=!0,hy=new es("OBJ",0,123,125),dy=new es("LIST",1,91,93),py=new es("MAP",2,123,125),_y=new es("POLY_OBJ",3,91,93)}var hy,dy,py,_y;function gC(){return La(),[au(),hc(),cl(),my()]}function mC(){return La(),qu==null&&(qu=C2(gC())),qu}var qu;function gy(n,r){var e=r.do(),t;if(e instanceof qa)t=my();else if(P(e,Gs()))t=hc();else if(P(e,Vl())){var i=ul(r.lo(0),n.pq()),a=i.do(),s,o;if(a instanceof Hn?o=!0:o=P(a,Oi()),o)s=cl();else if(n.h15_1.b17_1)s=hc();else throw oy(i);t=s}else t=au();return t}function ul(n,r){var e;if(P(n.do(),dm())){var t=fE(r,n),i=t==null?null:ul(t,r);e=i??n}else n.fo()?e=ul(n.lo(0),r):e=n;return e}function au(){return La(),hy}function hc(){return La(),dy}function cl(){return La(),py}function my(){return La(),_y}function fl(n,r){for(var e=n.ho().x();e.y();){var t=e.z();if(t instanceof Am)return t.k1d_1}return r.h15_1.h17_1}function yC(n,r,e,t){return bC(n,r,e,t)}function wC(n){if(n instanceof Jl){var r="Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(r))}if(n instanceof Hn){var e="Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";throw xr.o3(b(e))}if(n instanceof qa){var t="Actual serializer for polymorphic cannot be polymorphic itself";throw xr.o3(b(t))}}function bC(n,r,e,t){if(sC(e.dn(),n).l1(t)){var i=r.dn().co(),a=e.dn().co(),s=n.h15_1.o17_1.equals(DI())&&i===a?"in ALL_JSON_OBJECTS class discriminator mode":"as base class '"+i+"'",o="Class '"+a+"' cannot be serialized "+s+" because"+(" it has property name that conflicts with JSON class discriminator '"+t+"'."),u="You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.";throw Zs.h1a(o,a,u)}}function kC(n,r,e){return r==null?!1:r.n1d_1===e?(r.n1d_1=null,!0):!1}function xC(n,r){for(;n.rq(r)!==-1;);}function SC(n){n.r15_1.a1d()===4&&n.r15_1.s1b("Unexpected leading comma")}function zC(n){var r=!1,e=!!(n.t15_1%2|0);e?n.t15_1!==-1&&(r=n.r15_1.p1d()):n.r15_1.o1d(58);var t;if(n.r15_1.b1d()){if(e)if(n.t15_1===-1){var i=n.r15_1,a=!r,s=i.y15_1;if(!a){var o="Unexpected leading comma";i.s1b(o,s)}}else{var u=n.r15_1,c=r,f=u.y15_1;if(!c){var v="Expected comma after the key-value pair";u.s1b(v,f)}}n.t15_1=n.t15_1+1|0,t=n.t15_1}else r&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1),t=-1;return t}function EC(n,r,e){var t=n.p15_1,i;r:{var a=r.mo(e),s=r.lo(e),o;if(a&&!s.eo()?o=n.r15_1.q1d(!0):o=!1,o){i=!0;break r}if(P(s.do(),Oi())){var u;if(s.eo()?u=n.r15_1.q1d(!1):u=!1,u){i=!1;break r}var c=n.r15_1.r1d(n.v15_1.a17_1),f;if(c==null){i=!1;break r}else f=c;var v=f,h=tu(s,t,v),d=!t.h15_1.d17_1&&s.eo();if(h===-3&&(a||d)){n.r15_1.c1d(),i=!0;break r}}i=!1}return i}function IC(n,r){for(var e=n.r15_1.p1d();n.r15_1.b1d();){e=!1;var t=TC(n);n.r15_1.o1d(58);var i=tu(r,n.p15_1,t),a;if(i!==-3){var s;if(n.v15_1.f17_1&&EC(n,r,i))e=n.r15_1.p1d(),s=!1;else{var o=n.w15_1;return o==null||o.p1b(i),i}a=s}else a=!0;var u=a;u&&(e=CC(n,r,t))}e&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1);var c=n.w15_1,f=c==null?null:c.q1b();return f??-1}function CC(n,r,e){return Kf(r,n.p15_1)||kC(n,n.u15_1,e)?n.r15_1.t1d(n.v15_1.a17_1):(n.r15_1.z15_1.g1c(),n.r15_1.s1d(e)),n.r15_1.p1d()}function AC(n){var r=n.r15_1.p1d(),e;return n.r15_1.b1d()?(n.t15_1!==-1&&!r&&n.r15_1.s1b("Expected end of the array or comma"),n.t15_1=n.t15_1+1|0,e=n.t15_1):(r&&!n.p15_1.h15_1.m17_1&&Ui(n.r15_1,"array"),e=-1),e}function TC(n){var r;return n.v15_1.a17_1?r=n.r15_1.v1d():r=n.r15_1.u1d(),r}function qC(){return Yf(),yy}var yy;function OC(n,r,e){n.k1c_1.m1a(),n.fr(r),n.k1c_1.p1a(58),n.k1c_1.o1a(),n.fr(e)}function Wf(n){return Yf(),n.fo()&&qC().l1(n)}function UC(n){return Yf(),n.fo()&&P(n,LI())}var Nh;function Yf(){Nh||(Nh=!0,yy=ti([mf(Rl()).dn(),Wl(Rs()).dn(),yf(Ml()).dn(),wf(Bl()).dn()]))}function Ou(){return su(),wy}var wy;function eo(n){su();var r=n&15,e;if(r<10){var t=48,i=Z(t);e=Ke(r+i|0)}else{var a=r-10|0,s=97,o=Z(s);e=Ke(a+o|0)}return e}function vl(n,r){su(),n.da(34);var e=0,t=0,i=r.length;if(t<i)do{var a=t;t=t+1|0;var s=K(r,a),o=Z(s);o<Ou().length&&Ou()[o]!=null&&(n.yd(r,e,a),n.ca(Ou()[o]),e=a+1|0)}while(t<i);e!==0?n.yd(r,e,r.length):n.ca(r),n.da(34)}function jC(n){return su(),Yv(n,"true",!0)?!0:Yv(n,"false",!0)?!1:null}var Dh;function su(){if(!Dh){Dh=!0;var n=Array(93),r=0;if(r<=31)do{var e=r;r=r+1|0;var t=eo(e>>12),i=eo(e>>8),a=eo(e>>4),s=eo(e);n[e]="\\u"+yr(t)+yr(i)+yr(a)+yr(s)}while(r<=31);var o=34;n[Z(o)]='\\"';var u=92;n[Z(u)]="\\\\";var c=9;n[Z(c)]="\\t";var f=8;n[Z(f)]="\\b";var v=10;n[Z(v)]="\\n";var h=13;n[Z(h)]="\\r",n[12]="\\f",wy=n;var d=new Int8Array(128),_=0;if(_<=31)do{var m=_;_=_+1|0,d[m]=1}while(_<=31);var w=34,x=Z(w),k=34,S=Z(k);d[x]=Mn(S);var E=92,I=Z(E),A=92,q=Z(A);d[I]=Mn(q);var j=9,F=Z(j),O=116,L=Z(O);d[F]=Mn(L);var H=8,B=Z(H),$=98,R=Z($);d[B]=Mn(R);var X=10,J=Z(X),er=110,Y=Z(er);d[J]=Mn(Y);var G=13,sr=Z(G),ur=114,Q=Z(ur);d[sr]=Mn(Q);var zr=102,Er=Z(zr);d[12]=Mn(Er)}}function by(n,r,e,t){var i=t.dn();return new Na(n,e,i,r,i).bq(t)}function qn(n,r,e,t){var i=Ee(e,"i")?"an "+e:"a "+e,a="Failed to parse literal '"+r.toString()+"' as "+i+" value",s=n.j1e(t),o;if(n.r17().h15_1.p17_1){var u=b(n.k1e());o=b(Jr(u))}else o=null;var c=o;throw jr.g19(Kr(-1,a,s,null,c),a,-1,s,c,null)}function NC(n,r,e,t){var i=n.r17(),a;r:{var s=r.mo(e),o=r.lo(e),u;if(s&&!o.eo()?u=t instanceof fe:u=!1,u){a=!0;break r}if(P(o.do(),Oi())){var c;if(o.eo()?c=t instanceof fe:c=!1,c){a=!1;break r}var f=t instanceof fr?t:null,v=f==null?null:Bn(f),h;if(v==null){a=!1;break r}else h=v;var d=h,_=tu(o,i,d),m=!i.h15_1.d17_1&&o.eo();if(_===-3&&(s||m)){a=!0;break r}}a=!1}return a}function DC(n,r){var e="Encountered an unknown key '"+r+"'",t=n.q13(),i="Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.",a;if(n.r17().h15_1.p17_1){var s=n.l2().toString();a=b(Jr(s))}else a=null;var o=a;throw jr.g19(Kr(-1,e,t,i,o),e,-1,t,o,i)}function LC(n,r,e){return n.o1g(r,e),MC(n,e+1|0)}function Uu(n,r,e){n.o1g(r,e);var t=n.b16_1.toString();return n.b16_1.de(0),t}function Lh(n){var r=un(n.a16_1);return n.a16_1=null,r}function PC(n){return rr(n.p1g(),n.y15_1-1|0)!==34}function MC(n,r){var e=r;e=n.q1g(e),e===-1&&n.s1b("Expected escape sequence to continue, got EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i);if(a===117)return ky(n,n.p1g(),e);var s=Z(a),o=$C(s);return o===0&&n.s1b("Invalid escaped char '"+yr(a)+"'"),n.b16_1.da(o),e}function ky(n,r,e){return(e+4|0)>=C(r)?(n.y15_1=e,n.r1g(),(n.y15_1+4|0)>=C(r)&&n.s1b("Unexpected EOF during unicode escape"),ky(n,r,n.y15_1)):(n.b16_1.da(Ke((((to(n,r,e)<<12)+(to(n,r,e+1|0)<<8)|0)+(to(n,r,e+2|0)<<4)|0)+to(n,r,e+3|0)|0)),e+4|0)}function to(n,r,e){var t=rr(r,e),i;if(48<=t&&t<=57){var a=Z(t),s=48;i=a-Z(s)|0}else if(97<=t&&t<=102){var o=Z(t),u=97;i=(o-Z(u)|0)+10|0}else if(65<=t&&t<=70){var c=Z(t),f=65;i=(c-Z(f)|0)+10|0}else n.s1b("Invalid toHexChar char '"+yr(t)+"' in unicode escape");return i}function RC(n,r){var e=n.q1g(r);(e>=C(n.p1g())||e===-1)&&n.s1b("EOF");var t=n.p1g(),i=e;e=i+1|0;var a=rr(t,i),s=Z(a)|32,o,u=116;if(s===Z(u))Ph(n,"rue",e),o=!0;else{var c=102;s===Z(c)?(Ph(n,"alse",e),o=!1):n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}return o}function Ph(n,r,e){(C(n.p1g())-e|0)<r.length&&n.s1b("Unexpected end of boolean literal");var t=0,i=C(r)-1|0;if(t<=i)do{var a=t;t=t+1|0;var s=K(r,a),o=rr(n.p1g(),e+a|0),u=Z(s);u!==(Z(o)|32)&&n.s1b("Expected valid boolean literal prefix, but had '"+n.d1d()+"'")}while(t<=i);n.y15_1=e+r.length|0}function BC(n,r){var e;switch(r){case!1:var t=-Zn(n);e=Math.pow(10,t);break;case!0:var i=Zn(n);e=Math.pow(10,i);break;default:Os();break}return e}function He(n){var r;if(Z(n)<126){var e=xy().y1g_1;r=e[Z(n)]}else r=0;return r}function hl(n){return n===1?`quotation mark '"'`:n===2?"string escape sequence '\\'":n===4?"comma ','":n===5?"colon ':'":n===6?"start of the object '{'":n===7?"end of the object '}'":n===8?"start of the array '['":n===9?"end of the array ']'":n===10?"end of the input":n===127?"invalid token":"valid token"}function $C(n){return n<117?xy().x1g_1[n]:0}function FC(n){var r=0;if(r<=31)do{var e=r;r=r+1|0,ei(n,e,117)}while(r<=31);ei(n,8,98),ei(n,9,116),ei(n,10,110),ei(n,12,102),ei(n,13,114),ju(n,47,47),ju(n,34,34),ju(n,92,92)}function JC(n){var r=0;if(r<=32)do{var e=r;r=r+1|0,Yi(n,e,127)}while(r<=32);Yi(n,9,3),Yi(n,10,3),Yi(n,13,3),Yi(n,32,3),gt(n,44,4),gt(n,58,5),gt(n,123,6),gt(n,125,7),gt(n,91,8),gt(n,93,9),gt(n,34,1),gt(n,92,2)}function ei(n,r,e){if(e!==117){var t=Z(e);n.x1g_1[t]=Ke(r)}}function ju(n,r,e){var t=Z(r);return ei(n,t,e)}function Yi(n,r,e){n.y1g_1[r]=e}function gt(n,r,e){var t=Z(r);return Yi(n,t,e)}var dc;function xy(){return dc===l&&new Xm,dc}function Zf(n,r){return n.h15_1.n17_1?new Qm(r,n.h15_1):new Nf(r,n.h15_1)}function Sy(n){return n.j15_1}function Mh(n){return hs.l7(n)}p(Cf,"Json");D(Em,"Default");p(Im,"JsonBuilder");p(Cm,"JsonImpl");p(Am,"JsonClassDiscriminator");p(Tm,"JsonIgnoreUnknownKeys");p(qm,"JsonNames");p(Af,"JsonConfiguration");p(fo,"ClassDiscriminatorMode");Mr(Ql,"JsonDecoder",l,l,[Hl,Gl]);Qr(Om);p(We,"JsonElement",l,l,l,l,l,{0:ct});Qr(OI);p(fr,"JsonPrimitive",l,l,l,l,l,{0:Rf});Qr(UI);p(fn,"JsonArray",l,l,[zn],l,l,{0:Bf});Qr(Um);p(nr,"JsonObject",l,l,[mn],l,l,{0:nu});D(fe,"JsonNull",l,l,l,l,l,{0:$f});p(ut,"JsonLiteral");p(wt,"JsonObjectBuilder");p(jm,"JsonArrayBuilder");D(Nm,"JsonElementSerializer",l,l,[cr]);D(Dm,"JsonPrimitiveSerializer",l,l,[cr]);D(Lm,"JsonArrayDescriptor",l,l,[de]);D(Pm,"JsonArraySerializer",l,l,[cr]);D(Mm,"JsonObjectDescriptor",l,l,[de]);D(Rm,"JsonObjectSerializer",l,l,[cr]);D(Bm,"JsonNullSerializer",l,l,[cr]);D($m,"JsonLiteralSerializer",l,l,[cr]);Lr(Ys).eo=Ci;Lr(Ys).fo=Ai;Lr(Ys).ho=Bs;p(Ys,l,l,l,[de]);Mr(Tf,"JsonEncoder",l,l,[hf]);p(qf,"JsonException");p(jr,"JsonDecodingException");p(Zs,"JsonEncodingException");p(Vs,"Composer");p(V1,"ComposerForUnsignedNumbers");p(X1,"ComposerForUnquotedLiterals");p(Fm,"ComposerWithPrettyPrint");p(Of,"JsonElementMarker");D(Jm,"Tombstone");D(Hm,"RedactedKey");p(Gm,"JsonPath");Lr(Uf).d15=Hz;p(Uf,"JsonSerializersModuleValidator",l,l,[om]);p(Km,"JsonTreeReader",l,l,l,[1]);p(es,"LexerMode");p(ga,"Key",ga);p(Q1,"DescriptorSchemaCache",Q1);p(Wm,"DiscriminatorHolder");p(Ss,"StreamingJsonDecoder",l,l,[Ql]);p(jf,"JsonDecoderForUnsignedTypes");p(la,"StreamingJsonEncoder",l,l,[Tf]);p(ru,"AbstractJsonTreeDecoder",l,l,[Ql]);p(Na,"JsonTreeDecoder");p(rc,"JsonTreeListDecoder");p(Ym,"JsonPrimitiveDecoder");p(Zm,"JsonTreeMapDecoder");p(Vm,"AbstractJsonLexer");D(Xm,"CharMappings");p(Nf,"StringJsonLexer");p(Qm,"StringJsonLexerWithComments");p(nc,"StringJsonWriter",nc);Lf=new Om;ec=new Um;fc=new Jm;vc=new Hm;var Rh=Math.imul;class zy{constructor(r){this.v1h_1=r}zf(r,e){return this.v1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1h_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Ey{constructor(r){this.w1h_1=r}zf(r,e){return this.w1h_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1h_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class pc{constructor(r,e,t){this.l1j_1=r,this.m1j_1=e,this.n1j_1=t}}class Iy{constructor(r,e){this.d1k_1=r,this.e1k_1=e}}class Cy{constructor(r,e,t,i,a,s,o,u,c,f,v){this.f1k_1=r,this.g1k_1=e,this.h1k_1=t,this.i1k_1=i,this.j1k_1=a,this.k1k_1=s,this.l1k_1=o,this.m1k_1=u,this.n1k_1=c,this.o1k_1=f,this.p1k_1=v}}class Ay{constructor(r,e,t){this.q1k_1=r,this.r1k_1=e,this.s1k_1=t}}class Ty{constructor(r){this.t1k_1=r}zf(r,e){return this.t1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.t1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class qy{constructor(r){this.u1k_1=r}zf(r,e){return this.u1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.u1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Oy{constructor(r){this.v1k_1=r}zf(r,e){return this.v1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.v1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Uy{constructor(r){this.w1k_1=r}zf(r,e){return this.w1k_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.w1k_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class jy{constructor(r){this.c1l_1=r}r4(){return this.c1l_1.x()}d1l(r){return Rn(r.e1k_1)}s4(r){return this.d1l(r)}}class Ny{constructor(r,e,t,i,a,s,o,u,c,f,v,h,d,_,m){e=e===l?dr():e,t=t===l?null:t,i=i===l?dr():i,a=a===l?dr():a,s=s===l?dr():s,o=o===l?dr():o,u=u===l?dr():u,c=c===l?null:c,f=f===l?null:f,v=v===l?dr():v,h=h===l?dr():h,d=d===l?null:d,_=_===l?null:_,m=m===l?null:m,this.z1h_1=e,this.a1i_1=t,this.b1i_1=a,this.c1i_1=s,this.d1i_1=o,this.e1i_1=c,this.f1i_1=f,this.g1i_1=v,this.h1i_1=h,this.i1i_1=d,this.j1i_1=_,this.k1i_1=m,this.l1i_1=u;for(var w=this,x=this.e1i_1,k=x==null?null:x.e1j_1,S=this.i1i_1,E=st([this.a1i_1,k,S==null?null:S.h1j_1]),I=T.g1(Zr(E,10)),A=E.x();A.y();){var q=A.z(),j=Ie().m15(q);I.n(j)}w.m1i_1=I;for(var F=this,O=T.m(),L=u.x();L.y();){var H=L.z();H.t1h_1||O.n(H)}F.n1i_1=O,this.o1i_1=Tr();var B=this,$;if(!this.n1i_1.i1())$=!0;else{var R;r:{var X;if(z(u,W)?X=u.i1():X=!1,X){R=!1;break r}for(var J=u.x();J.y();){var er=J.z();if(er.u1h_1!=null){R=!0;break r}}R=!1}$=R}B.p1i_1=$,this.q1i_1=it(i);for(var Y=this,G=T.g1(Zr(r,10)),sr=r.x();sr.y();){var ur=sr.z(),Q="/"+l0(ur,wa([47]));G.n(Q)}Y.r1i_1=G,this.s1i_1=Tr(),this.t1i_1=!1,this.u1i_1=!1;var zr=this;zr.v1i_1=Tn.e1();var Er=this;Er.w1i_1=T.m(),this.x1i_1=Tr()}e1l(r,e){this.x1i_1=e;var t=Ur(Ie().m15(r)),i=y5(this,m5(this,g5(this,t))),a=ar(i,"components"),s=a==null?null:ar(a,"schemas"),o=s??Tr();this.o1i_1=o,this.s1i_1=L5(this,i,o);var u=this,c;if(gl(i))c=!0;else{var f=this.m1i_1,v;r:{var h;if(z(f,W)?h=f.i1():h=!1,h){v=!1;break r}for(var d=f.x();d.y();){var _=d.z();if(gl(_)){v=!0;break r}}v=!1}c=v}u.t1i_1=c;var m=this,w;if(_l(i,ho()))w=!0;else{var x=this.m1i_1,k;r:{var S;if(z(x,W)?S=x.i1():S=!1,S){k=!1;break r}for(var E=x.x();E.y();){var I=E.z();if(_l(I,ho())){k=!0;break r}}k=!1}w=k}m.u1i_1=w;var A=ze(this.t1i_1?Xy().q2():dr(),this.u1i_1?ho().q2():dr());this.v1i_1.v2(),this.w1i_1.v2();for(var q=q5(this,o)+x5(this,o)+E5(this,o)+I5(this,o),j=o.p2(),F=T.g1(Zr(j,10)),O=j.x();O.y();){var L=O.z(),H=Rn(L);F.n(H)}for(var B=F,$=ar(i,"paths"),R=($??Tr()).p2(),X=T.g1(Zr(R,10)),J=R.x();J.y();){var er=J.z(),Y=gw(this,er);X.n(Y)}var G=ze(ze(B,X),Qf());if(!(this.d1i_1.i1()||!G.l1("ErrorCode"))){var sr="errorCodes would be exported as 'ErrorCode', which a class of your API is already called. Rename that class.";throw xr.o3(b(sr))}if(!(this.e1i_1==null||!G.l1("CurrentUser")&&!G.l1("currentUser"))){var ur="currentUser exports 'currentUser' and 'CurrentUser', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(ur))}if(!(this.g1i_1.i1()||this.e1i_1!=null)){var Q="permissions needs currentUser, which says who the permissions belong to.";throw xr.o3(b(Q))}if(!(this.g1i_1.i1()||!G.l1("Permission")&&!G.l1("can"))){var zr="permissions exports 'Permission' and 'can', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(zr))}if(!(this.i1i_1==null||!G.l1("UserPreferences")&&!G.l1("preferences"))){var Er="preferences exports 'preferences' and 'UserPreferences', and the generated client already uses one of the names. Rename the class or the route that takes it.";throw xr.o3(b(Er))}if(!(this.h1i_1.i1()||this.e1i_1!=null)){var mr="guards needs currentUser, which says who is signed in.";throw xr.o3(b(mr))}var Ir;if(this.h1i_1.i1())Ir=!0;else{var br=Fh(),Cr;r:{var Pr;if(z(br,W)?Pr=br.i1():Pr=!1,Pr){Cr=!0;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(G.l1(Yr)){Cr=!1;break r}}Cr=!0}Ir=Cr}if(!Ir){var an="guards exports "+V(Fh())+", and the generated client already uses one of the names.";throw xr.o3(b(an))}if(!(this.n1i_1.i1()||!G.l1("cookies"))){var Gr="cookies(...) would be exported as 'cookies', which the generated client already uses for the routes under /cookies.";throw xr.o3(b(Gr))}if(!(By(this.l1i_1).i1()||!G.l1("cookieConsent"))){var _r="Cookies with a category export 'cookieConsent', which the generated client already uses for the routes under /cookie-consent.";throw xr.o3(b(_r))}for(var Rr=this.n1i_1,Fr=vr.q4(),nn=Rr.x();nn.y();){var Br=nn.z(),sn=_c(Br.l1h_1),on=Fr.o2(sn),pn;if(on==null){var yn=T.m();Fr.s2(sn,yn),pn=yn}else pn=on;var ge=pn;ge.n(Br)}var Ln=Fr.q2(),Gn;r:{for(var me=Ln.x();me.y();){var Pn=me.z();if(Pn.c1()>1){Gn=Pn;break r}}Gn=null}var ye=Gn;if(ye!=null){var Te="The cookies "+V(ye," and ",l,l,l,l,Q5)+" would both be called "+_c(Sb(ye).l1h_1)+" in TypeScript.";throw xr.o3(b(Te))}var je=this.c1i_1,Ne;r:{for(var we=je.x();we.y();){var En=we.z();if(G.l1(En.x1h_1)){Ne=En;break r}}Ne=null}var xn=Ne;if(xn!=null){var In="constants("+xn.x1h_1+") would be exported as '"+xn.x1h_1+"', which the generated client already uses. Rename the object.";throw xr.o3(b(In))}var Ma=Ve("client.ts")+S5(this),Nt=this.j1i_1,ft;Nt==null?ft=null:ft=`
reportErrors('`+Nt+`');
`;var vt=ft,Dt=Ma+(vt??""),Ni=this.k1i_1,ht;Ni==null?ht=null:ht=`
`+Ni+`
`;for(var Di=ht,De=N("client.ts",Dt+(Di??"")),Ra=N("form.ts",Ve("form.ts")),dt=N("form-state.svelte.ts",Ve("form-state.svelte.ts")),Lt=this.d1i_1.i1()&&this.g1i_1.i1()?q:Xi(q,`export {};
`),Li=ci(this.v1i_1),Ba=N("types.ts",Lt+V(Li,"",l,l,l,l,r7)+$5(this)+_w(this,"Permission",this.g1i_1)),Pt=ar(i,"paths"),Pi=Pt??Tr(),$a=go(o.p2(),"LucideIcon"),Mi=this.s1i_1.q2(),Ri=T.g1(Zr(Mi,10)),Bi=Mi.x();Bi.y();){var $i=Bi.z(),Mt=$i.l1j_1;Ri.n(Mt)}var Rt=N("services.ts",M5(this,Pi,bv(bv($a,Ri),A))),Fi=Ve("index.ts")+(this.c1i_1.i1()?"":`export * from './constants.js';
`)+(this.p1i_1?`export * from './cookies.js';
`:"")+(this.e1i_1!=null?"export * from './"+Xi("current-user.svelte.ts",".ts")+`.js';
`:""),pt;this.h1i_1.i1()?pt="":pt="export * from './"+Xi("guards.ts",".ts")+`.js';
`;var Ji=[De,Ra,dt,Ba,Rt,N("index.ts",Fi+pt+(this.i1i_1!=null?"export * from './"+Xi("preferences.svelte.ts",".ts")+`.js';
`:""))],Hi;this.c1i_1.i1()?Hi=[]:Hi=[N("constants.ts",i5(this.c1i_1))];var Fa=Hi,Bt;this.p1i_1?Bt=[N("cookies.ts",YC(this.l1i_1))]:Bt=[];var Ja=Bt,Ha=this.e1i_1,ee;Ha==null?ee=null:ee=[N("current-user.svelte.ts",A5(this,Ha))];var Qs=ee,Ga;Qs==null?Ga=[]:Ga=Qs;var ro=Ga,Gi;this.h1i_1.i1()?Gi=[]:Gi=[N("guards.ts",z5(this))];var vu=Gi,Ka=this.i1i_1,$t;Ka==null?$t=null:$t=[N("preferences.svelte.ts",C5(this,Ka))];var Wa=$t,Ya;return Wa==null?Ya=[]:Ya=Wa,_5(this,mk([Ji,Fa,Ja,ro,vu,Ya,[N("openapi.json",Yy().k15(Lf.t17(),i)+`
`)]]))}f1l(r,e,t){return e=e===l?Tr():e,t===l?this.e1l(r,e):t.e1l.call(this,r,e)}}class vo extends se{constructor(r,e,t){super(r,e),this.z1k_1=t}p1g(){return Ve(this.z1k_1)}}class ou{constructor(r,e,t){this.g1l_1=r,this.h1l_1=e,this.i1l_1=t}toString(){return"GeneratedOperation(name="+this.g1l_1+", method="+this.h1l_1+", path="+this.i1l_1+")"}hashCode(){var r=oe(this.g1l_1);return r=Rh(r,31)+oe(this.h1l_1)|0,r=Rh(r,31)+oe(this.i1l_1)|0,r}equals(r){return this===r?!0:!(!(r instanceof ou)||this.g1l_1!==r.g1l_1||this.h1l_1!==r.h1l_1||this.i1l_1!==r.i1l_1)}}class Dy{constructor(r){this.j1l_1=r}zf(r,e){return this.j1l_1(r,e)}compare(r,e){return this.zf(r,e)}g3(){return this.j1l_1}equals(r){var e;if(r!=null&&z(r,dn)){var t;r!=null&&z(r,bn)?t=P(this.g3(),r.g3()):t=!1,e=t}else e=!1;return e}hashCode(){return Sr(this.g3())}}class Ly{v1j(r){return"Must be at least "+Xh(this,r)+"."}w1j(r){return"Must be at most "+Xh(this,r)+"."}b1k(r,e){return"Must be "+(e?"greater than":"at least")+" "+At(r)+"."}c1k(r,e){return"Must be "+(e?"less than":"at most")+" "+At(r)+"."}x1j(r){return"Must match "+r+"."}}class Je{constructor(r,e){this.a1l_1=r,this.b1l_1=e}}class Zi{constructor(r,e,t){this.y1j_1=r,this.z1j_1=e,this.a1k_1=t}}class Py{constructor(){kc=this,this.o1j_1=new Zi("email",On(new Je("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","an email address")),"Must be an email address, such as name@example.com."),this.p1j_1=new Zi("uri",On(new Je("^https?://[^\\s/?#.]+\\.[^\\s]+$","a web address")),"Must be a web address that starts with http:// or https://."),this.q1j_1=new Zi("phone",On(new Je("^\\+?[0-9(][0-9 ()./-]{4,18}[0-9]$","a phone number")),"Must be a phone number, such as +49 30 1234567."),this.r1j_1=new Zi("slug",On(new Je("^[a-z0-9]+(-[a-z0-9]+)*$","lowercase letters, digits and single dashes")),"Must be lowercase letters and digits, with single dashes between words."),this.s1j_1=new Zi("strong-password",kt([new Je("^[\\s\\S]{10,}$","at least 10 characters"),new Je("[a-z]","a lowercase letter"),new Je("[A-Z]","an uppercase letter"),new Je("[0-9]","a digit")]),"Must have at least 10 characters, a lowercase letter, an uppercase letter and a digit."),this.t1j_1=kt([this.o1j_1,this.p1j_1,this.q1j_1,this.r1j_1,this.s1j_1])}u1j(r){var e=this.t1j_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(a.y1j_1===r){t=a;break r}}t=null}return t}}function HC(){return ne(),My}var My;function GC(){return ne(),Ry}var Ry;function te(n){return ne(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function _c(n){ne();var r=GC(),e=l0(n,wa([46,95,45])),t=r.ye(e,ZC);return HC().ue(t)?t:te(n)}function KC(n){ne();var r;switch(n.m1h_1){case"string":r="string";break;case"boolean":r="boolean";break;case"enum":r=V(n.n1h_1," | ",l,l,l,l,VC);break;default:r="number";break}return r}function WC(n){ne();var r=KC(n),e=n.m1h_1==="string"||n.m1h_1==="enum",t="kind: "+te(n.m1h_1),i;n.m1h_1==="enum"?i="values: ["+V(n.n1h_1,", ",l,l,l,l,XC)+"]":i=null;var a=i,s=n.o1h_1,o;s==null?o=null:o="default: "+(e?te(s):s);var u=o,c=n.p1h_1,f;c==null?f=null:f="maxAge: "+c.toString();var v=f,h="path: "+te(n.q1h_1),d="sameSite: "+te(n.r1h_1),_="secure: "+n.s1h_1,m=n.u1h_1,w;m==null?w=null:w="category: "+te(m);var x=st([t,a,u,v,h,d,_,w]),k=n.o1h_1==null?"<"+r+">":"<"+r+", "+r+">";return"    "+_c(n.l1h_1)+": typedCookie"+k+"("+te(n.l1h_1)+", { "+V(x,", ")+" })"}function By(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z(),i=t.u1h_1;i==null||r.n(i)}return ci(ca(r))}function YC(n){ne();for(var r=T.m(),e=n.x();e.y();){var t=e.z();t.t1h_1||r.n(t)}var i=QC,a=new zy(i),s=zi(r,a),o=By(n),u="consentStore",c;o.i1()?c=null:c=u;var f=c,v="typedCookie",h;s.i1()?h=null:h=v;for(var d=h,_=st([f,d]),m=T.m(),w=s.x();w.y();){var x=w.z();x.u1h_1!=null&&m.n(x)}var k=m,S=V(k,", ",l,l,l,l,r5),E=rn.f();return E.ca("import { "+V(_,", ")+` } from './client.js';
`),s.i1()||E.ca(`
export const cookies = {
`+V(s,`,
`,l,l,l,l,n5())+`
};
`),o.i1()||E.ca(`
export const cookieConsent = consentStore([`+V(o,", ",l,l,l,l,e5)+"] as const, ["+S+`]);
`),E.toString()}function ZC(n){return ne(),n.xf().d1(1).toUpperCase()}function VC(n){return ne(),te(n)}function XC(n){return ne(),te(n)}function QC(n,r){ne();var e=n.l1h_1,t=r.l1h_1;return Ut(e,t)}function r5(n){ne();var r=te(n.l1h_1),e=te(n.q1h_1),t=n.u1h_1,i=t??"";return"{ name: "+r+", path: "+e+", category: "+te(i)+" }"}function n5(){return Be(n=>WC(n),1,0,7,"cookieEntry")}function e5(n){return ne(),te(n)}var Bh;function ne(){Bh||(Bh=!0,My=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Ry=St.te("[._-]+([A-Za-z0-9])"))}function t5(){return Pa(),$y}var $y;function Vf(n,r){Pa();var e;if(n instanceof fr)e=n.v17()?Fy(n.w17()):n.w17();else if(n instanceof fn)e=V(n,", ","[","]",l,l,a5(r));else if(n instanceof nr){var t;if(n.i1())t="{}";else{var i=n.r2(),a=`
`+r+"}";t=V(i,`,
`,`{
`,a,l,l,s5(r))}e=t}else Os();return e}function Fy(n){return Pa(),"'"+Yn(Yn(Yn(Yn(n,"\\","\\\\"),"'","\\'"),`
`,"\\n"),"\r","\\r")+"'"}function i5(n){Pa();var r=o5,e=new Ey(r),t=zi(n,e);return V(t,`
`,l,l,l,l,l5)}function a5(n){return r=>Vf(r,n)}function s5(n){return r=>{var e=r.k2(),t=r.l2();return n+"    "+(t5().ue(e)?e:Fy(e))+": "+Vf(t,n+"    ")}}function o5(n,r){Pa();var e=n.x1h_1,t=r.x1h_1;return Ut(e,t)}function l5(n){return Pa(),"export const "+n.x1h_1+" = "+Vf(new nr(n.y1h_1),"")+` as const;
`}var $h;function Pa(){$h||($h=!0,$y=St.te("[A-Za-z_$][A-Za-z0-9_$]*"))}function Jy(){return wr(),Hy}var Hy;function Xf(){return wr(),Gy}var Gy;function Ky(){return wr(),Wy}var Wy;function Yy(){return wr(),Zy}var Zy;function Fh(){return wr(),Vy}var Vy;function Xy(){return wr(),Qy}var Qy;function ho(){return wr(),rw}var rw;function u5(){return wr(),nw}var nw;function c5(){return wr(),ew}var ew;function f5(){return wr(),tw}var tw;function Qf(){return wr(),iw}var iw;function v5(){return wr(),aw}var aw;function h5(){return wr(),sw}var sw;function d5(){return wr(),ow}var ow;function p5(){return wr(),lw}var lw;function _5(n,r){var e=Tl(r.slice());return et(e,N(".gitattributes",`# Generated by ktor-svelte. Do not edit.
`+Up(r,"",l,l,l,l,n7)))}function g5(n,r){for(var e=ar(r,"paths"),t=e??Tr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();T5(n,o)&&i.s2(s.k2(),s.l2())}var u=cu(i);return new nr(et(r,N("paths",new nr(u))))}function m5(n,r){if(n.b1i_1.i1())return r;for(var e=ar(r,"components"),t=e??new nr(Tr()),i=ar(t,"schemas"),a=i??Tr(),s=tf(a),o=n.b1i_1.x();o.y();){var u=o.z(),c=u.y1i_1,f=s.o2(c);if(f==null){var v=Ie().m15(u.z1i_1);s.s2(c,v)}}for(var h=ar(r,"paths"),d=h??Tr(),_=vr.ha(d.c1()),m=d.r2().x();m.y();){for(var w=m.z(),x=w.k2(),k=w.l2(),S=Ur(k),E=vr.ha(S.c1()),I=S.r2().x();I.y();){var A=I.z(),q=A.k2(),j=A.k2(),F=A.l2(),O,L;Jy().l1(j)?L=F instanceof nr:L=!1,L?O=k5(n,F):O=F;var H=O;E.s2(q,H)}var B=new nr(E);_.s2(x,B)}var $=_;return new nr(et(et(r,N("paths",new nr($))),N("components",new nr(et(t,N("schemas",new nr(s)))))))}function y5(n,r){var e=ar(r,"components"),t;if(e==null)return r;t=e;for(var i=t,a=ar(i,"schemas"),s=a??Tr(),o=vr.q4(),u=s.r2().x();u.y();){var c=u.z(),f=c.l2(),v;f instanceof nr?v=w5(n,f):v=!1,v&&o.s2(c.k2(),c.l2())}for(var h=vr.ha(o.c1()),d=o.r2().x();d.y();){var _=d.z(),m=_.k2(),w=_.l2(),x=new nr(et(Ur(w),N("type",re("object"))));h.s2(m,x)}var k=h;if(k.i1())return r;for(var S=vr.q4(),E=s.r2().x();E.y();){var I=E.z(),A=I.k2();(z(k,mn)?k:g()).m2(A)||S.s2(I.k2(),I.l2())}for(var q=S.r2(),j=vn(Zr(q,10),16),F=vr.ha(j),O=q.x();O.y();){var L=O.z(),H=L.k2(),B=L.l2(),$=B instanceof nr?B:null,R=N($==null?null:Jh(n,$),H);F.s2(R.ch_1,R.dh_1)}for(var X=F,J=vr.ha(k.c1()),er=k.r2().x();er.y();){var Y=er.z(),G=Y.k2(),sr=Y.k2(),ur=Y.l2(),Q=X.o2(Jh(n,ur)),zr=Q??sr;J.s2(G,zr)}for(var Er=J,mr=vr.q4(),Ir=s.r2().x();Ir.y();){var br=Ir.z(),Cr=br.k2();(Er.o2(Cr)==null||Er.o2(Cr)===Cr)&&mr.s2(br.k2(),br.l2())}for(var Pr=vr.ha(mr.c1()),pr=mr.r2().x();pr.y();){var Yr=pr.z(),an=Yr.k2(),Gr=Yr.k2(),_r=Yr.l2(),Rr=k.o2(Gr),Fr=Rr??_r;Pr.s2(an,Fr)}var nn=Pr,Br=new nr(et(i,N("schemas",new nr(nn))));return Ur(bc(Er,n,new nr(et(r,N("components",Br)))))}function w5(n,r){var e;if(P(it(ji(n,r)),ti(["object","null"]))){var t=ar(r,"properties");e=!(t??Tr()).i1()}else e=!1;return e}function Jh(n,r){return new nr(h2(r,"title"))}function b5(n,r){var e=new wt,t=new jm,i=new wt;ol(i,"$ref","#/components/schemas/"+r);var a=i.x16();t.l18(a);var s=new wt;ol(s,"type","null");var o=s.x16();t.l18(o);var u=t.x16();return e.j18("oneOf",u),e.x16()}function k5(n,r){for(var e=ar(r,"responses"),t=e??Tr(),i=tf(t),a=n.b1i_1.x();a.y();){var s=a.z(),o=new wt;ol(o,"description","");var u=new wt,c="application/json",f=new wt,v=new wt;ol(v,"$ref","#/components/schemas/"+s.y1i_1);var h=v.x16();f.j18("schema",h);var d=f.x16();u.j18(c,d);var _=u.x16();o.j18("content",_);for(var m=o.x16(),w=s.a1j_1.x();w.y();){var x=w.z(),k=x.toString(),S=i.o2(k);if(S==null){var E=m;i.s2(k,E)}}}return new nr(et(r,N("responses",new nr(i))))}function x5(n,r){var e=n.a1i_1,t;if(e==null)return"";t=e;var i=t,a=Ur(Ie().m15(i)),s=Tn.e1();return`
`+rv(n,"PublicConfig",a,s,r)}function S5(n){var r=n.f1i_1,e;if(r==null)return"";e=r;var t=e;return`
apiConfig.loginPage = '`+Yn(Yn(t,"\\","\\\\"),"'","\\'")+`';
`}function z5(n){var r=n.h1i_1,e;r:{var t;if(z(r,W)?t=r.i1():t=!1,t){e=!1;break r}for(var i=r.x();i.y();){var a=i.z();if(a.c1j_1!=null){e=!0;break r}}e=!1}var s=e,o=n.h1i_1,u=e7,c=new Ty(u),f=zi(o,c),v=V(f,"",l,l,l,l,t7),h=n.f1i_1!=null?"redirect(307, loginPath(url))":"error(401, 'Unauthorized')",d="import { error"+(n.f1i_1!=null?", redirect":"")+` } from '@sveltejs/kit';
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
`}function E5(n,r){var e=n.e1i_1,t;if(e==null)return"";t=e;var i=t;return uw(n,"CurrentUser",i.d1j_1,i.e1j_1,r)}function I5(n,r){var e=n.i1i_1,t;if(e==null)return"";t=e;var i=t;return uw(n,"UserPreferences",i.g1j_1,i.h1j_1,r)}function uw(n,r,e,t,i){var a=i.p2(),s;r:{for(var o=a.x();o.y();){var u=o.z();if(Rn(u)===e){s=u;break r}}s=null}var c=s;if(c!=null)return`
export type `+r+" = "+Rn(c)+`;
`;var f=Ur(Ie().m15(t)),v=Tn.e1();return`
`+rv(n,r,f,v,i)}function C5(n,r){for(var e=ar(Ur(Ie().m15(r.h1j_1)),"properties"),t=(e??Tr()).p2(),i=r.k1j_1,a=vr.q4(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2();t.l1(u)&&a.s2(o.k2(),o.l2())}var c=a,f=c.r2(),v=V(f,", ",l,l,l,l,i7),h=Yy().k15(Lf.t17(),Ie().m15(r.j1j_1)),d="const defaults: Required<UserPreferences> = "+h+`;

`,_=he(r.i1j_1),m;return C(v)===0?m="":m=" "+v+" ",`import { preferenceStore, type PreferenceState } from './client.js';
import type { UserPreferences } from './types.js';

`+d+`const state = $state<PreferenceState<Required<UserPreferences>>>({ value: defaults, ready: false });

export const preferences = preferenceStore<Required<UserPreferences>>(`+(_+", state, defaults, {"+m+`});
`)}function A5(n,r){var e=!n.g1i_1.i1(),t=e?"CurrentUser, Permission":"CurrentUser",i=`import { userStore, type UserState } from './client.js';
`+("import type { "+t+` } from './types.js';

`)+("const state = $state<UserState<"+t+">>(")+`{ user: null, ready: false, sessionEnds: null, sessionEnding: false, permissions: [] });

`+("export const currentUser = userStore<"+t+">('"+r.f1j_1+`', state);
`),a;return e?a=`
export const can = (permission: Permission): boolean => currentUser.can(permission);
`:a="",i+a}function T5(n,r){var e,t=n.z1h_1,i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!0;break r}for(var s=t.x();s.y();){var o=s.z();if(r===o||Ee(r,o+"/")){i=!1;break r}}i=!0}if(i){var u;if(n.r1i_1.i1())u=!0;else{var c=n.r1i_1,f;r:{var v;if(z(c,W)?v=c.i1():v=!1,v){f=!1;break r}for(var h=c.x();h.y();){var d=h.z();if(d==="/"||r===d||Ee(r,d+"/")){f=!0;break r}}f=!1}u=f}e=u}else e=!1;return e}function q5(n,r){if(r.i1()&&n.q1i_1.i1()&&n.s1i_1.i1()&&!n.t1i_1&&!n.u1i_1)return`export {};
`;for(var e=Tn.e1(),t=T.g1(r.c1()),i=r.r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=N(s,rv(n,Rn(s),Ur(o),e,r));t.n(u)}for(var c=t,f=n.s1i_1.q2(),v=T.m(),h=f.x();h.y();){var d=h.z();d.n1j_1&&v.n(d)}for(var _=T.g1(Zr(v,10)),m=v.x();m.y();){var w=m.z(),x=N(w.l1j_1,hw(n,w.l1j_1,w.m1j_1));_.n(x)}var k=_,S=ze(c,k),E=a7,I=new qy(E),A=zi(S,I),q=V(A,`
`,l,l,l,l,s7),j;e.l1("LucideIcon")?j=`import type { LucideIconName as LucideIcon } from '../ktor-svelte/icons.js';

export type { LucideIcon };

`:j="";var F=j,O=r.q2(),L;r:{var H;if(z(O,W)?H=O.i1():H=!1,H){L=!1;break r}for(var B=O.x();B.y();){var $=B.z();if(ev(n,Ur($))){L=!0;break r}}L=!1}var R=L,X=`declare const brand: unique symbol;
`,J;R||n.u1i_1?J=X:J=null;var er=J,Y=Ve("dates.ts"),G;n.t1i_1?G=Y:G=null;var sr=G,ur=Ve("quantities.ts"),Q;n.u1i_1?Q=ur:Q=null;var zr=Q,Er;C(q)===0?Er=null:Er=q;var mr=Er,Ir=V(st([er,sr,zr,mr]),`
`),br;return C(Ir)===0?br=`export {};
`:br=Ir,F+br}function rv(n,r,e,t,i){var a=pl(n,mw(n,e),""),s=lu(n,e),o;if(s!=null){var u=e.c18("enum"),c=u==null?null:fs(u),f;if(c==null)f=null;else{var v;r:{var h;if(z(c,W)?h=c.i1():h=!1,h){v=!0;break r}for(var d=c.x();d.y();){var _=d.z();if(_ instanceof fe){v=!1;break r}}v=!0}f=v}o=f===!0}else o=!1;if(o)return a+hw(n,r,s);if(ev(n,e)){var m=Fn(n,e,t);return a+("export type "+r+" = "+m+" & { readonly [brand]: '"+r+`' };

`)+("export const "+r+" = (value: "+m+"): "+r+" => value as "+r+`;
`)}if(tv(n,e))return a+("export interface "+r+" "+dw(n,e,t,"")+`

`)+("export const "+r+` = {
`)+("    empty: (): "+r+" => ("+yc(n,e,i,"    ",Ot())+`),
`)+U5(n,e)+N5(n,r,e,i)+`};
`;var w=a+("export type "+r+" = "+Fn(n,e,t)+`;
`),x=O5(n,r,e,i);return w+(x??"")}function O5(n,r,e,t){var i=ar(e,"discriminator"),a=i==null?null:$r(i,"propertyName"),s;if(a==null)return null;s=a;var o=s,u=hn(e,"oneOf"),c=u??hn(e,"anyOf"),f;if(c==null)return null;f=c;var v=f,h=ar(e,"discriminator"),d=h==null?null:ar(h,"mapping"),_=d==null?null:d.p2(),m=_==null?null:Si(_),w=m??dr(),x;if(w.i1()){for(var k=T.g1(Zr(v,10)),S=v.x();S.y();){var E=S.z(),I=dl(n,Ur(E)),A;if(I==null)A=null;else{var q=t.o2(I);A=q==null?null:Ur(q)}var j=A,F=j??Ur(E),O=ar(F,"properties"),L=O==null?null:ar(O,o),H=L==null?null:hn(L,"enum"),B=H==null?null:Dc(H),$=B instanceof fr?B:null,R=$==null?null:Bn($),X;if(R==null)return null;X=R;var J=X;k.n(J)}x=k}else x=w;var er=x;if(er.i1())return null;var Y=ve(n,re(o)),G=V(er,l,l,l,l,l,o7(n));return`
export const `+r+` = {
`+("    types: ["+G+`] as const,
`)+("    match: <R>(value: "+r+", cases: { [K in "+r+"["+Y+"]]: (value: Extract<"+r+", { "+$e(o)+`: K }>) => R }): R =>
`)+("        (cases[value["+Y+"]] as (value: "+r+`) => R)(value),
`)+`};
`}function U5(n,r){for(var e=fu(r,"required"),t=ar(r,"properties"),i=t??Tr(),a=T.m(),s=i.r2().x();s.y();){var o=s.z(),u=o.k2(),c=o.l2(),f=j5(n,Ur(c),e.l1(u)),v;if(f.i1())v=null;else{var h=$e(u);v="        "+h+": { "+V(f,l,l,l,l,l,l7)+" },"}var d=v;d==null||a.n(d)}var _=a;return _.i1()?"":`    bounds: {
`+V(_,`
`)+`
    },
`}function j5(n,r,e){var t=ji(n,r).l1("integer"),i=N("required","true"),a;cw(n,r,e)?a=i:a=null;var s=a,o=be(n,r,"minLength"),u;o==null?u=null:u=N("minlength",At(o));var c=u,f=be(n,r,"maxLength"),v;f==null?v=null:v=N("maxlength",At(f));var h=v,d=Kh(n,r,t,"minimum","exclusiveMinimum",1),_;d==null?_=null:_=N("min",d);var m=_,w=Kh(n,r,t,"maximum","exclusiveMaximum",-1),x;w==null?x=null:x=N("max",w);var k=x,S=$r(r,"pattern"),E;return S==null?E=null:E=N("pattern",ve(n,re(S))),st([s,c,h,m,k,E])}function cw(n,r,e){if(iv(n,r)||r.c18("enum")!=null)return!1;var t;if(ji(n,r).l1("string")){var i=be(n,r,"minLength");t=(i??0)>=1}else t=e&&fw(n,r);return t}function fw(n,r){var e=ji(n,r),t;r:{var i;if(z(e,W)?i=e.i1():i=!1,i){t=!1;break r}for(var a=e.x();a.y();){var s=a.z();if(s==="integer"||s==="number"){t=!0;break r}}t=!1}return t}function N5(n,r,e,t){if(!nv(n,e,t,Ot()))return"";for(var i=fu(e,"required"),a=ar(e,"properties"),s=a??Tr(),o=T.m(),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=Ur(v),d="value"+(Xf().ue(f)?"."+f:"["+ve(n,re(f))+"]"),_=ze(D5(n,f,d,h,i.l1(f)),gc(n,h,d,mc(n,f),"        ",0,t));Ea(o,_)}var m=o,w="    validate: (value: "+r+`): Record<string, string[]> => {
        const errors: Record<string, string[]> = {};
`;return w+V(m,"",l,l,l,l,u7)+`        return errors;
    },
`}function nv(n,r,e,t){var i;if(tv(n,r)){var a=ar(r,"properties"),s=(a??Tr()).q2(),o;r:{var u;if(z(s,W)?u=s.i1():u=!1,u){o=!1;break r}for(var c=s.x();c.y();){var f=c.z(),v=Ur(f),h,d,_=p5(),m;n:{var w;if(z(_,W)?w=_.i1():w=!1,w){m=!1;break n}for(var x=_.x();x.y();){var k=x.z();if(be(n,v,k)!=null||k==="pattern"&&$r(v,k)!=null){m=!0;break n}}m=!1}if(m?d=!0:d=Iw().u1j($r(v,"format"))!=null,d)h=!0;else{var S=dl(n,v),E;if(S==null)E=null;else{var I;if(t.l1(S))I=!1;else{var A=e.o2(S),q=A instanceof nr?A:null,j;q==null?j=null:j=nv(n,q,e,go(t,S)),I=j===!0}E=I}h=E===!0}if(h){o=!0;break r}}o=!1}i=o}else i=!1;return i}function dl(n,r){var e=$r(r,"$ref");if(e!=null)return Ca(e,47);var t=vw(n,r);if(t!=null)return dl(n,t);if(ji(n,r).l1("array")){var i=ar(r,"items"),a;return i==null?a=null:a=dl(n,i),a}return null}function vw(n,r){var e=hn(r,"oneOf"),t=e??hn(r,"anyOf"),i;if(t==null)i=null;else{for(var a=T.m(),s=t.x();s.y();){var o=s.z(),u=o instanceof nr?o:null;u==null||a.n(u)}i=a}var c=i,f;if(c==null)f=null;else{for(var v=T.m(),h=c.x();h.y();){var d=h.z();P(ji(n,d),On("null"))||v.n(d)}f=v}var _=f;return _==null?null:Dc(_)}function D5(n,r,e,t,i){var a=ve(n,re(r)),s=be(n,t,"minLength"),o=s==null?null:wo(s),u=be(n,t,"maxLength"),c=u==null?null:wo(u),f=t.c18("pattern"),v=f instanceof fr?f:null,h;if(v==null)h=null;else{var d;v.v17()?d=v:d=null,h=d}var _=h,m=_==null?null:_.w17(),w=Iw().u1j($r(t,"format")),x=be(n,t,"minimum"),k;x==null?k=null:k=N(x,!1);var S=k,E;if(S==null){var I=be(n,t,"exclusiveMinimum"),A;I==null?A=null:A=N(I,!0),E=A}else E=S;var q=E,j=be(n,t,"maximum"),F;j==null?F=null:F=N(j,!1);var O=F,L;if(O==null){var H=be(n,t,"exclusiveMaximum"),B;H==null?B=null:B=N(H,!0),L=B}else L=O;var $=L,R=T.m();if(cw(n,t,i)&&fw(n,t)){var X="        if (typeof "+e+" !== 'number' || Number.isNaN("+e+")) "+Ft(a,n,"Required.");R.n(X)}if(o!=null||c!=null||m!=null||w!=null){var J="        if (typeof "+e+" === 'string') {";if(R.n(J),o!=null||c!=null){var er="            const length = [..."+e+"].length;";R.n(er)}if(o!=null){var Y="            if (length < "+o+") "+Ft(a,n,Vi.v1j(o));R.n(Y)}if(c!=null){var G="            if (length > "+c+") "+Ft(a,n,Vi.w1j(c));R.n(G)}if(m!=null){var sr=n.v1i_1,ur=Zh();sr.n(ur);var Q="            if (!matches("+ve(n,re(m))+", "+e+")) "+Ft(a,n,Vi.x1j(m));R.n(Q)}if(w!=null){var zr=n.v1i_1,Er=Zh();zr.n(Er);var mr=V(w.z1j_1," && ",l,l,l,l,c7(n,e)),Ir="            if (!("+mr+")) "+Ft(a,n,w.a1k_1);R.n(Ir)}var br="        }";R.n(br)}if(q!=null||$!=null){var Cr="        if (typeof "+e+" === 'number') {";if(R.n(Cr),q!=null){var Pr=q.hh(),pr=q.ih(),Yr=pr?"<=":"<",an="            if ("+e+" "+Yr+" "+At(Pr)+") "+Ft(a,n,Vi.b1k(Pr,pr));R.n(an)}if($!=null){var Gr=$.hh(),_r=$.ih(),Rr=_r?">=":">",Fr="            if ("+e+" "+Rr+" "+At(Gr)+") "+Ft(a,n,Vi.c1k(Gr,_r));R.n(Fr)}var nn="        }";R.n(nn)}if(!R.i1()){var Br=n.v1i_1,sn=Ew();Br.n(sn)}return R}function gc(n,r,e,t,i,a,s){var o=$r(r,"$ref");if(o!=null){var u=Ca(o,47),c=s.o2(u),f=c instanceof nr?c:null,v;if(f==null)return dr();v=f;var h=v;if(!nv(n,h,s,Ot()))return dr();var d=n.v1i_1,_=kt([Ew(),H7()]);return Ea(d,_),On(i+"if ("+e+" != null) addNested(errors, `"+t+".`, "+Rn(u)+".validate("+e+"));")}var m=vw(n,r);if(m!=null)return gc(n,m,e,t,i,a,s);if(!ji(n,r).l1("array"))return dr();var w=ar(r,"items"),x;if(w==null)return dr();x=w;var k=x,S=a===0?"":""+(a+1|0),E="item"+S,I="index"+S,A=gc(n,k,E,t+"[${"+I+"}]",i+"        ",a+1|0,s);return A.i1()?dr():ze(ze(kt([i+"if (Array.isArray("+e+")) {",i+"    "+e+".forEach(("+E+", "+I+") => {"]),A),kt([i+"    });",i+"}"]))}function mc(n,r){return Yn(Yn(Yn(r,"\\","\\\\"),"`","\\`"),"$","\\$")}function be(n,r,e){var t=r.c18(e),i=t instanceof fr?t:null,a;if(i==null)a=null;else{var s;i.v17()?s=null:s=i,a=s}var o=a,u=o==null?null:Bn(o);return u==null?null:Qc(u)}function ji(n,r){var e=r.c18("type"),t;if(e instanceof fn){for(var i=T.g1(Zr(e,10)),a=e.x();a.y();){var s=a.z(),o=An(s).w17();i.n(o)}t=i}else e instanceof fr?t=On(e.w17()):t=dr();return t}function hw(n,r,e){var t=V(e,"",l,l,l,l,f7(n));return"export const "+r+` = {
`+t+`} as const;

export type `+r+" = (typeof "+r+")[keyof typeof "+r+`];
`}function L5(n,r,e){for(var t=vr.q4(),i=cu(e).r2().x();i.y();){var a=i.z(),s=a.k2(),o=a.l2(),u=lu(n,Ur(o));if(u!=null){var c=it(u),f=t.o2(c);if(f==null){var v=new pc(Rn(s),u,!1);t.s2(c,v)}}}for(var h=vr.q4(),d=vr.q4(),_=e.r2().x();_.y();){var m=_.z(),w=m.k2(),x=m.l2();ra(n,h,d,x,Rn(w),Rn(w),!0)}var k=ar(r,"paths");k==null||ra(n,h,d,k,"","",!1);for(var S=h.p2(),E=T.m(),I=S.x();I.y();){var A=I.z(),q;(z(t,mn)?t:g()).m2(A)?q=!1:q=!P(A,n.q1i_1),q&&E.n(A)}for(var j=v7(d),F=new Oy(j),O=zi(E,F),L=vr.ha(vn(Zr(O,10),16)),H=O.x();H.y();){var B=H.z(),$=Se(h,B),R=h7,X=zb($,k2([R,d7]));L.s2(B,X)}for(var J=L,er=J.q2(),Y=new jy(er),G=Ok(Y),sr=e.p2(),ur=T.g1(Zr(sr,10)),Q=sr.x();Q.y();){var zr=Q.z(),Er=Rn(zr);ur.n(Er)}for(var mr=Lc(gi(gi(ur,"LucideIcon"),"PublicConfig")),Ir=vr.ia(t),br=O.x();br.y();){var Cr=br.z(),Pr=Se(J,Cr),pr=Rn(Pr.e1k_1),Yr;if(Se(G,pr)>1||mr.l1(pr)){var an=Pr.d1k_1,Gr;C(an)===0?Gr=pr:Gr=an+pr,Yr=Gr}else Yr=pr;var _r=Yr,Rr;if(!mr.l1(_r))Rr=_r;else{var Fr=af(2,p7),nn=Ts(Fr,_7(_r)),Br;r:{for(var sn=nn.x();sn.y();){var on=sn.z();if(!mr.l1(on)){Br=on;break r}}throw Or.r("Sequence contains no element matching the predicate.")}Rr=Br}var pn=Rr;mr.n(pn);var yn=new pc(pn,Se(d,Cr),!0);Ir.s2(Cr,yn)}return Ir}function lu(n,r){var e=hn(r,"enum"),t;if(e==null)return null;t=e;for(var i=t,a=T.m(),s=i.x();s.y();){var o=s.z();o instanceof fe||a.n(o)}var u=a,c;r:{var f;if(z(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d;if(h instanceof fr?d=!h.v17():d=!0,d){c=!0;break r}}c=!1}if(c)return null;for(var _=T.g1(Zr(u,10)),m=u.x();m.y();){var w=m.z(),x=An(w).w17();_.n(x)}var k=ca(_),S;return k.c1()>1?S=k:S=null,S}function ev(n,r){var e,t,i=c5(),a=r.c18("type"),s=a instanceof fr?a:null;if(Eb(i,s==null?null:Bn(s))?t=r.c18("title")!=null:t=!1,t){var o=r.p2(),u;r:{var c;if(z(o,W)?c=o.i1():c=!1,c){u=!0;break r}for(var f=o.x();f.y();){var v=f.z();if(!(v==="type"||v==="title")){u=!1;break r}}u=!0}e=u}else e=!1;return e}function tv(n,r){return ar(r,"properties")!=null&&r.c18("allOf")==null}function yc(n,r,e,t,i){var a=ar(r,"properties"),s=a??Tr();if(s.i1())return"{}";for(var o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=t+"    "+$e(f)+": "+ai(n,Ur(v),e,t+"    ",i)+",";o.n(h)}var d=o;return V(gi(ze(On("{"),d),t+"}"),`
`)}function ai(n,r,e,t,i){if(iv(n,r))return"null";var a=$r(r,"$ref");if(a!=null){var s=Ca(a,47),o=e.o2(s),u=o instanceof nr?o:null,c;if(u==null)return"null";c=u;var f=c;return tv(n,f)?Rn(s)+".empty()":ev(n,f)?Rn(s)+"("+ai(n,f,e,t,go(i,s))+")":i.l1(s)?"null":ai(n,f,e,t,go(i,s))}var v=r.c18("enum");if(v!=null){var h=_u(fs(v)),d;h==null?d=null:d=ve(n,h);var _=d;return _??"null"}var m=r.c18("const");if(m!=null)return ve(n,m);var w=hn(r,"oneOf"),x=w??hn(r,"anyOf");if(x!=null){var k=_u(x),S;k==null?S=null:S=ai(n,Ur(k),e,t,i);var E=S;return E??"null"}var I=hn(r,"allOf");if(I!=null)return I.c1()===1?ai(n,Ur(Pp(I)),e,t,i):V(I,", ","{ "," }",l,l,g7(n,e,t,i));var A=r.c18("type"),q;if(A instanceof fn){var j=_u(A),F=j==null?null:An(j);q=F==null?null:F.w17()}else A instanceof fr?q=Bn(A):q=null;var O=q,L;switch(O){case"string":var H=ov(r),B;H==null?B=null:B="'' as "+H;var $=B,R;if($==null){var X=kw(r),J;X==null?J=null:J=Se(u5(),X)+" as "+X,R=J}else R=$;var er=R;L=er??"''";break;case"integer":case"number":L="0";break;case"boolean":L="false";break;case"array":var Y=hn(r,"prefixItems"),G;Y==null?G=null:G=V(Y,", ","[","]",l,l,m7(n,e,t,i));var sr=G;L=sr??"[]";break;case"object":L=yc(n,r,e,t,i);break;case null:L=r.c18("properties")!=null?yc(n,r,e,t,i):"null";break;default:L="null";break}return L}function iv(n,r){var e=r.c18("type"),t=hn(r,"oneOf"),i=t??dr(),a=hn(r,"anyOf"),s=a??dr(),o=ze(i,s),u,c,f,v,h;if(e instanceof fn){var d;r:{var _;if(z(e,W)?_=e.i1():_=!1,_){d=!1;break r}for(var m=e.x();m.y();){var w=m.z();if(An(w).w17()==="null"){d=!0;break r}}d=!1}h=d}else h=!1;if(h)v=!0;else{var x;e instanceof fr?x=e.w17()==="null":x=!1,v=x}if(v)f=!0;else{var k=r.c18("nullable"),S=k instanceof fr?k:null;f=(S==null?null:Bn(S))==="true"}if(f)c=!0;else{var E=hn(r,"enum"),I=E??dr(),A;r:{var q;if(z(I,W)?q=I.i1():q=!1,q){A=!1;break r}for(var j=I.x();j.y();){var F=j.z();if(F instanceof fe){A=!0;break r}}A=!1}c=A}if(c)u=!0;else{var O;r:{var L;if(z(o,W)?L=o.i1():L=!1,L){O=!1;break r}for(var H=o.x();H.y();){var B=H.z(),$=B instanceof nr?B:null,R;if($==null?R=null:R=iv(n,$),R===!0){O=!0;break r}}O=!1}u=O}return u}function dw(n,r,e,t){for(var i=fu(r,"required"),a=ar(r,"properties"),s=a??Tr(),o=T.g1(s.c1()),u=s.r2().x();u.y();){var c=u.z(),f=c.k2(),v=c.l2(),h=i.l1(f)?"":"?",d=bw(Ur(v))?"readonly ":"",_=pl(n,mw(n,Ur(v)),t+"    ")+(t+"    "+d+$e(f)+h+": "+Fn(n,Ur(v),e,t+"    ")+";");o.n(_)}var m=o;return V(gi(ze(On("{"),m),t+"}"),`
`)}function Fn(n,r,e,t){t=t===l?"":t;var i=$r(r,"$ref");if(i!=null){var a=Rn(Ca(i,47));return e.n(a),a}var s=r.c18("enum");if(s!=null){for(var o=fs(s),u=T.m(),c=o.x();c.y();){var f=c.z(),v=f instanceof fr?f:null,h=v==null?null:Bn(v);h==null||u.n(h)}var d=it(u),_;if(n.q1i_1.i1()?_=!1:_=P(d,n.q1i_1),_){var m="LucideIcon";return e.n(m),"LucideIcon"}var w=lu(n,r);if(w!=null){var x=n.s1i_1.o2(it(w));if(x!=null){var k=x.l1j_1;e.n(k);var S,E=fs(s),I;r:{var A;if(z(E,W)?A=E.i1():A=!1,A){I=!1;break r}for(var q=E.x();q.y();){var j=q.z();if(j instanceof fe){I=!0;break r}}I=!1}return I?S=x.l1j_1+" | null":S=x.l1j_1,S}}var F=fs(s),O=V(F," | ",l,l,l,l,y7(n)),L;return C(O)===0?L="never":L=O,L}var H=r.c18("const");if(H!=null)return ve(n,H);var B=hn(r,"oneOf");if(B!=null)return Gh(n,B,e,t);var $=hn(r,"anyOf");if($!=null)return Gh(n,$,e,t);var R=hn(r,"allOf");if(R!=null)return V(R," & ",l,l,l,l,w7(n,e,t));var X=r.c18("type"),J;if(X==null)J=r.c18("properties")!=null?pw(n,r,e,t):"unknown";else if(X instanceof fn){for(var er=T.g1(Zr(X,10)),Y=X.x();Y.y();){var G=Y.z(),sr=Hh(n,An(G).w17(),r,e,t);er.n(sr)}J=V(ca(er)," | ")}else J=Hh(n,An(X).w17(),r,e,t);return J}function Hh(n,r,e,t,i){var a;switch(r){case"string":var s=ov(e),o=s??kw(e),u;o==null?u=null:(t.n(o),u=o);var c=u;a=c??"string";break;case"integer":case"number":a="number";break;case"boolean":a="boolean";break;case"null":a="null";break;case"array":a=P5(n,e,t,i);break;case"object":a=pw(n,e,t,i);break;default:a="unknown";break}return a}function P5(n,r,e,t){var i=hn(r,"prefixItems");if(i!=null)return V(i,", ","[","]",l,l,b7(n,e,t));var a=r.c18("items"),s=a==null?null:Ur(a),o;if(s==null)return"unknown[]";o=s;var u=o,c=Fn(n,u,e,t);return ks(c," | ")||ks(c," & ")?"("+c+")[]":c+"[]"}function pw(n,r,e,t){var i=ar(r,"properties");if(!(i??Tr()).i1())return dw(n,r,e,t);var a=r.c18("additionalProperties"),s=a instanceof nr?a:null;return s!=null?"Record<string, "+Fn(n,s,e,t)+">":"Record<string, unknown>"}function Gh(n,r,e,t){for(var i=T.g1(Zr(r,10)),a=r.x();a.y();){var s=a.z(),o=Fn(n,Ur(s),e,t);i.n(o)}return V(ca(i)," | ")}function ve(n,r){var e;if(r instanceof fe)e="null";else{var t;r instanceof fr?t=r.v17():t=!1,t?e=he(r.w17()):r instanceof fr?e=r.w17():e="unknown"}return e}function M5(n,r,e){for(var t=Tn.e1(),i=vr.q4(),a=T.m(),s=vr.q4(),o=r.r2().x();o.y();)for(var u=o.z(),c=u.k2(),f=u.l2(),v=Ur(f),h=Jy().x();h.y();){var d=h.z(),_=ar(v,d);if(_!=null){var m=gw(n,c),w=i.o2(m),x;if(w==null){var k=T.m();i.s2(m,k),x=k}else x=w;var S=x,E=G5(n,c,d,v,_);S.n(E)}}var I=Lc(Qf());I.h1(i.p2());for(var A=I,q=cu(i),j=T.g1(q.c1()),F=q.r2().x();F.y();){var O=F.z(),L=O.k2(),H=O.l2(),B=Tn.e1(),$=rn.f(),R=V(H,`
`,l,l,l,l,k7(t,n,B,L,a,s,A,$)),X=$.toString()+`
export const `+L+` = {
`+R+`
};
`;j.n(X)}for(var J=j,er=ci(t),Y=T.m(),G=er.x();G.y();){for(var sr=G.z(),ur=T.g1(Zr(e,10)),Q=e.x();Q.y();){var zr=Q.z(),Er=Rn(zr);ur.n(Er)}ur.l1(sr)&&Y.n(sr)}var mr=Y,Ir,br=c2(i.q2()),Cr;r:{var Pr;if(z(br,W)?Pr=br.i1():Pr=!1,Pr){Cr=!1;break r}for(var pr=br.x();pr.y();){var Yr=pr.z();if(Yr.m1k_1){Cr=!0;break r}}Cr=!1}Cr?Ir="ApiError, request, stream":Ir="ApiError, request";var an=Ir,Gr=n.d1i_1.i1()?an:an+", codeMessages, errorCode",_r=rn.f();_r.ca("import { "+Gr+`, type RequestOptions } from './client.js';
`);var Rr=n.a1i_1!=null?gi(mr,"PublicConfig"):mr,Fr=n.d1i_1.i1()?Rr:ci(gi(Rr,"ErrorCode"));Fr.i1()||_r.ca("import type { "+V(Fr)+` } from './types.js';
`),_r.ca(`
`);for(var nn=J.x();nn.y();){var Br=nn.z();_r.ca(Br).ca(`
`)}if(_r.ca(F5(n,a)),n.d1i_1.i1()||_r.ca(f5()),!s.i1()){_r.ca(`export const uploadRules = {
`);for(var sn=s.r2(),on=x7,pn=new Uy(on),yn=zi(sn,pn).x();yn.y();){var ge=yn.z(),Ln=ge.k2(),Gn=ge.l2();_r.ca("    '"+Ln+"': "+Gn+`,
`)}_r.ca(`} as const;

`)}return n.a1i_1!=null&&_r.ca(Ve("public-config.ts")),_r.ca("export const api = { "+V(ci(i.p2()))+` };
`),_r.ca(Ve("api-with.ts")),_r.toString()}function R5(n,r){var e=ar(r,"properties"),t;if(e==null)t=null;else{var i;e.i1()?i=null:i=e,t=i}var a=t,s;if(a==null)return null;s=a;var o=s,u=it(fu(r,"required")),c=o.r2(),f=V(c,"; ",l,l,l,l,S7(u));return"{ "+f+" }"}function B5(n,r){var e=r.c18("maxBytes"),t=e==null?null:An(e),i=t==null?null:PI(t),a;i==null?a=null:a="maxBytes: "+i.toString();var s=a,o=hn(r,"types"),u;if(o==null)u=null;else{for(var c=T.g1(Zr(o,10)),f=o.x();f.y();){var v=f.z(),h=he(An(v).w17());c.n(h)}u=c}var d=u,_;if(d==null)_=null;else{var m;d.i1()?m=null:m=d,_=m}var w=_,x;w==null?x=null:x="types: ["+V(w)+"]";var k=x,S=r.c18("maxFiles"),E=S==null?null:An(S),I=E==null?null:MI(E),A;I==null?A=null:A="maxFiles: "+I;var q=st([s,k,A]);return"{ "+V(q)+" }"}function $5(n){return _w(n,"ErrorCode",n.d1i_1)}function _w(n,r,e){if(e.i1())return"";var t=V(e," | ",l,l,l,l,z7),i=V(e,"",l,l,l,l,E7);return`
export type `+r+" = "+t+`;

export const `+r+` = {
`+i+`} as const;
`}function F5(n,r){var e=V(r,"",l,l,l,l,I7),t=V(r,"",l,l,l,l,C7);return`export interface ApiErrors {
`+e+`}

`+(`const errorStatuses: Record<string, number[]> = {
`+t+`};

`)+`export function isApiError<K extends keyof ApiErrors>(error: unknown, operation: K): error is ApiError<ApiErrors[K]> {
    return error instanceof ApiError && error.operation === operation && (errorStatuses[operation] ?? []).includes(error.status);
}

`}function J5(n,r,e){var t=sv(r),i=af(1,A7),a=Ts(i,T7(t)),s;r:{for(var o=a.x();o.y();){var u=o.z();if(!e.l1(u)){s=u;break r}}throw Or.r("Sequence contains no element matching the predicate.")}var c=s;return e.n(c),c}function H5(n,r,e,t){var i=g2([r,r+V(e,"",l,l,l,l,q7)]),a;r:{for(var s=i.x();s.y();){var o=s.z();if(!t.l1(o)){a=o;break r}}a=null}var u=a,c;if(u==null){var f=af(2,O7),v=Ts(f,U7(r)),h;r:{for(var d=v.x();d.y();){var _=d.z();if(!t.l1(_)){h=_;break r}}throw Or.r("Sequence contains no element matching the predicate.")}c=h}else c=u;var m=c;return t.n(m),m}function G5(n,r,e,t,i){for(var a=Tn.e1(),s=hn(t,"parameters"),o=s??dr(),u=hn(i,"parameters"),c=u??dr(),f=ze(o,c),v=T.g1(Zr(f,10)),h=f.x();h.y();){var d=h.z(),_=Ur(d);v.n(_)}for(var m=v,w=Ky().xe(r),x=Bp(Ts(w,j7)),k=T.m(),S=x.x();S.y();){var E=S.z(),I;r:{for(var A=m.x();A.y();){var q=A.z();if($r(q,"name")===E&&$r(q,"in")==="path"){I=q;break r}}I=null}var j=I,F=j==null?null:ar(j,"schema"),O;F==null?O=null:O=Fn(n,F,a);var L=O,H;if(L==null)H=null;else{var B;L==="unknown"||L==="string"?B=null:B=L,H=B}var $=H,R=$??"string | number",X=yw(E)+": "+R;k.n(X)}var J=ar(i,"requestBody"),er=J==null?null:ar(J,"content"),Y=er==null?null:er.r2(),G;if(Y==null)G=null;else{var sr;r:{for(var ur=Y.x();ur.y();){var Q=ur.z();if(Ee(Q.k2(),"multipart/")){sr=Q;break r}}sr=null}G=sr}var zr=G,Er=zr==null?null:zr.l2(),mr;Er==null?mr=null:mr=Er instanceof nr?Er:null;var Ir=mr,br=Ir==null?null:ar(Ir,"schema"),Cr;br==null?Cr=null:Cr=R5(n,br);var Pr=Cr,pr;if(zr!=null)pr=Pr??"FormData";else{var Yr;er==null?Yr=null:Yr=wc(n,er);var an=Yr,Gr;an==null?Gr=null:Gr=Fn(n,an,a),pr=Gr}var _r=pr,Rr;if(zr==null){var Fr;er==null?Fr=null:Fr=wc(n,er);var nn=Fr,Br;nn==null?Br=null:Br=K5(n,nn);var sn=Br;Rr=sn??dr()}else Rr=dr();var on=Rr,pn;on.i1()?pn=_r:pn="Omit<"+_r+", "+V(on," | ",l,l,l,l,N7)+">";var yn=pn;if(J!=null){var ge="body: "+(yn??"unknown");k.n(ge)}for(var Ln=T.m(),Gn=m.x();Gn.y();){var me=Gn.z();$r(me,"in")==="query"&&Ln.n(me)}var Pn=Ln;if(!Pn.i1()){var ye=V(Pn,"; ",l,l,l,l,D7(n,a)),Te;r:{var je;if(z(Pn,W)?je=Pn.i1():je=!1,je){Te=!1;break r}for(var Ne=Pn.x();Ne.y();){var we=Ne.z(),En=we.c18("required"),xn=En==null?null:An(En);if((xn==null?null:Bn(xn))==="true"){Te=!0;break r}}Te=!1}var In=Te,Ma="query"+(In?"":"?")+": { "+ye+" }";k.n(Ma)}for(var Nt=T.m(),ft=m.x();ft.y();){var vt=ft.z(),Dt;if($r(vt,"in")==="header"){var Ni=h5(),ht=$r(vt,"name"),Di=(ht??"").toLowerCase();Dt=!Ni.l1(Di)}else Dt=!1;Dt&&Nt.n(vt)}var De=Nt;if(!De.i1()){var Ra=V(De,"; ",l,l,l,l,L7(n,a)),dt;r:{var Lt;if(z(De,W)?Lt=De.i1():Lt=!1,Lt){dt=!1;break r}for(var Li=De.x();Li.y();){var Ba=Li.z(),Pt=Ba.c18("required"),Pi=Pt==null?null:An(Pt);if((Pi==null?null:Bn(Pi))==="true"){dt=!0;break r}}dt=!1}var $a=dt,Mi="headers"+($a?"":"?")+": { "+Ra+" }";k.n(Mi)}var Ri="options?: RequestOptions";k.n(Ri);var Bi=x.i1()?he(r):W5(n,r),$i=ar(i,"x-ktor-svelte-upload"),Mt;$i==null?Mt=null:Mt=B5(n,$i);var Rt=Mt,Fi=i.c18("x-ktor-svelte-timeout"),pt=Fi==null?null:An(Fi),Ji=pt==null?null:Bn(pt),Hi=Ji==null?null:Qc(Ji),Fa=Hi==null?null:Un(Hi),Bt;if(Fa==null)Bt=null;else{var Ja;tr(Fa,new y(0,0))>0?Ja=Fa:Ja=null,Bt=Ja}var Ha=Bt,ee=T.m();Ha!=null&&ee.n("timeout: "+Ha.toString()),ee.n("...options"),Pn.i1()||ee.n("query"),De.i1()||ee.n("typedHeaders: headers"),J!=null&&ee.n("body"),on.i1()||ee.n("omit: ["+V(on,l,l,l,l,l,P7)+"]"),Rt!=null&&ee.n("upload: "+Rt),Pr!=null&&ee.n("multipart: true");var Qs=ee.j6(),Ga=Z5(n,i,a),ro=V5(n,i),Gi=Y5(n,i,a),vu=e.toUpperCase(),Ka=$r(i,"operationId"),$t;Ka==null?$t=null:$t=uu(Ka);for(var Wa=$t,Ya=Wa??X5(n,r,e),uv=st([$r(i,"summary"),$r(i,"description")]),cv=T.g1(Zr(uv,10)),fv=uv.x();fv.y();){var vv=fv.z(),Tw=b(h0(js(vv)?vv:g()));cv.n(Tw)}for(var hv=T.m(),dv=cv.x();dv.y();){var pv=dv.z();C(pv)>0&&hv.n(pv)}var qw=ca(hv),Ow="@deprecated",hu;ww(i)?hu=Ow:hu=null;var Uw=hu,jw=n.x1i_1,Nw=e.toUpperCase(),_v=jw.o2(Nw+" "+r),du;_v==null?du=null:du="@see "+_v;var Dw=ze(qw,st([Uw,du])),Lw=M7(Qs,ro,k,Ga,e,Bi),gv=V(ca(Gi.q2())," | "),pu;C(gv)===0?pu=null:pu=gv;var Pw=pu;return new Cy(vu,r,Ya,Dw,x,Lw,a,ro,Rt,Pw,Si(Gi.p2()))}function K5(n,r){var e=$r(r,"$ref"),t;if(e==null)t=null;else{var i=n.o1i_1.o2(Ca(e,47));t=i instanceof nr?i:null}for(var a=t,s=a??r,o=ar(s,"properties"),u=o??Tr(),c=vr.q4(),f=u.r2().x();f.y();){var v=f.z(),h=v.l2(),d=h instanceof nr?h:null;(d==null?null:bw(d))===!0&&c.s2(v.k2(),v.l2())}return Si(c.p2())}function W5(n,r){var e=rn.f();e.da(96);for(var t=0,i=Ky().xe(r).x();i.y();){var a=i.z();e.ca(mc(n,ae(r,t,a.ze().r1_1))),e.ca("${encodeURIComponent("+yw(a.xf().d1(1))+")}"),t=a.ze().s1_1+1|0}return e.ca(mc(n,at(r,t))),e.da(96),e.toString()}function Y5(n,r,e){for(var t=ar(r,"responses"),i=(t??Tr()).r2(),a=T.m(),s=i.x();s.y();){var o=s.z(),u;r:{var c=o.k2(),f=o.l2(),v=Ul(c),h;if(v==null)h=null;else{var d;v>=400?d=v:d=null,h=d}var _=h,m;if(_==null){u=null;break r}else m=_;var w=m,x=ar(Ur(f),"content"),k;if(x==null){u=null;break r}else k=x;var S=k,E=wc(n,S),I;if(E==null){u=null;break r}else I=E;var A=I;u=N(w,Fn(n,A,e))}var q=u;q==null||a.n(q)}return cu(W_(a))}function Z5(n,r,e){var t=ar(r,"responses"),i;if(t==null)return"unknown";i=t;for(var a=i,s=a.r2(),o=T.m(),u=s.x();u.y();){var c=u.z(),f=c.k2();Ee(f,"2")&&o.n(c)}var v;r:{var h=o.x();if(!h.y()){v=null;break r}var d=h.z();if(!h.y()){v=d;break r}var _=d.k2(),m=_;do{var w=h.z(),x=w.k2(),k=x;Ue(m,k)>0&&(d=w,m=k)}while(h.y());v=d}var S=v,E=S==null?null:S.l2(),I=E==null?null:Ur(E),A;if(I==null)return"unknown";A=I;var q=A,j=ar(q,"content"),F;if(j==null)return"void";F=j;var O=F,L=ar(O,"text/event-stream");if(L!=null){var H=ar(L,"schema"),B;H==null?B=null:B=Fn(n,H,e);var $=B;return $??"string"}var R=O.p2(),X;r:{for(var J=R.x();J.y();){var er=J.z();if(ks(er,"json")){X=er;break r}}X=null}var Y=X;if(Y!=null){var G=ar(O,Y),sr=G==null?null:ar(G,"schema"),ur;sr==null?ur=null:ur=Fn(n,sr,e);var Q=ur;return Q??"unknown"}return"string"}function V5(n,r){for(var e=ar(r,"responses"),t=e??Tr(),i=vr.q4(),a=t.r2().x();a.y();){var s=a.z(),o=s.k2();Ee(o,"2")&&i.s2(s.k2(),s.l2())}var u=i.q2(),c;r:{var f;if(z(u,W)?f=u.i1():f=!1,f){c=!1;break r}for(var v=u.x();v.y();){var h=v.z(),d=h instanceof nr?h:null,_=d==null?null:ar(d,"content");if((_==null?null:_.b18("text/event-stream"))===!0){c=!0;break r}}c=!1}return c}function wc(n,r){var e=r.p2(),t;r:{for(var i=e.x();i.y();){var a=i.z();if(ks(a,"json")){t=a;break r}}t=null}var s=t,o=s??Ib(r.p2()),u;if(o==null)u=null;else{var c=ar(r,o);u=c==null?null:ar(c,"schema")}return u}function gw(n,r){var e=n.r1i_1,t;r:{for(var i=e.x();i.y();){var a=i.z();if(r===a||Ee(r,a+"/")){t=a;break r}}t=null}var s=t,o=s??"",u=u0(c0(r,o),wa([47])),c;r:{for(var f=u.x();f.y();){var v=f.z(),h;if(C(v)>0?h=!Ee(v,"{"):h=!1,h){c=v;break r}}c=null}var d=c,_;d==null?_=null:_=sv(d,Qf());var m=_;return m??"root"}function X5(n,r,e){var t=n.r1i_1,i;r:{for(var a=t.x();a.y();){var s=a.z();if(r===s||Ee(r,s+"/")){i=s;break r}}i=null}for(var o=i,u=o??"",c=u0(c0(r,u),wa([47])),f=T.m(),v=c.x();v.y();){var h=v.z();C(h)>0&&f.n(h)}for(var d=f,_=T.m(),m=d.x();m.y();){var w=m.z();Ee(w,"{")||_.n(w)}var x=Cb(_,1);if(!x.i1()){var k=e==="post"?"":e;return uu(k+V(x,"",l,l,l,l,R7))}var S=Mp(d),E=(S==null?null:Ee(S,"{"))===!0;switch(e){case"get":return E?"get":"list";case"post":return"create";case"put":return"update";default:return e}}function mw(n,r){var e=$r(r,"description"),t;e==null?t=null:t=b(h0(js(e)?e:g()));var i=t,a;if(i==null)a=null;else{var s;C(i)===0?s=null:s=i,a=s}var o=a,u="@deprecated",c;ww(r)?c=u:c=null;var f=c;return st([o,f])}function pl(n,r,e){if(r.i1())return"";var t=f0(Yn(V(r,`

`),"*/","*\\/"));if(t.c1()===1)return e+"/** "+Pp(t)+` */
`;var i=e+`/**
`;return i+V(t,"",l,l,l,l,B7(e))+(e+` */
`)}function Q5(n){return"'"+n.l1h_1+"'"}function r7(n){return`
`+n.p1g()}function n7(n){var r=n.hh();return r+` text eol=lf linguist-generated merge=ktor-svelte
`}function bc(n,r,e){var t;if(e instanceof nr){var i=$r(e,"$ref"),a=i==null?null:Ca(i,47),s;a==null?s=null:s=n.o2(a);var o=s,u;if(o==null){for(var c=vr.ha(e.c1()),f=e.r2().x();f.y();){var v=f.z(),h=v.k2(),d=bc(n,r,v.l2());c.s2(h,d)}u=new nr(c)}else u=b5(r,o);t=u}else if(e instanceof fn){for(var _=T.g1(Zr(e,10)),m=e.x();m.y();){var w=m.z(),x=bc(n,r,w);_.n(x)}t=new fn(_)}else t=e;return t}function e7(n,r){var e=n.b1j_1,t=r.b1j_1;return Ut(e,t)}function t7(n){var r=n.c1j_1,e;r==null?e=null:e=", permission: "+he(r);var t=e,i=t??"";return"    { page: "+he(n.b1j_1)+i+` },
`}function i7(n){var r=n.k2(),e=n.l2();return $e(r)+": "+he(e)}function a7(n,r){var e=n.ch_1,t=r.ch_1;return Ut(e,t)}function s7(n){return n.dh_1}function o7(n){return r=>ve(n,re(r))}function l7(n){var r=n.hh(),e=n.ih();return r+": "+e}function Kh(n,r,e,t,i,a){var s=be(n,r,t);if(s!=null)return At(s);var o=be(n,r,i),u;if(o==null)return null;u=o;var c=u;return e?At(c+a):null}function u7(n){return n+`
`}function Ft(n,r,e){return"addError(errors, "+n+", "+ve(r,re(e))+");"}function c7(n,r){return e=>"matches("+ve(n,re(e.a1l_1))+", "+r+")"}function f7(n){return r=>"    "+$e(r)+": "+ve(n,re(r))+`,
`}function ra(n,r,e,t,i,a,s){if(t instanceof fn)for(var o=t.x();o.y();){var u=o.z();ra(n,r,e,u,i,a,!1)}else if(t instanceof nr){var c=lu(n,t),f;if(c==null)f=null;else{var v;s?v=null:v=c,f=v}var h=f;if(h!=null){var d=it(h),_=r.o2(d),m;if(_==null){var w=T.m();r.s2(d,w),m=w}else m=_;var x=m,k=new Iy(i,a);x.n(k);var S=it(h),E=e.o2(S);if(E==null){var I=h;e.s2(S,I)}}for(var A=$r(t,"in")!=null?$r(t,"name"):null,q=t.r2().x();q.y();){var j=q.z(),F=j.k2(),O=j.l2(),L;if(F==="properties"?L=O instanceof nr:L=!1,L)for(var H=O.r2().x();H.y();){var B=H.z(),$=B.k2(),R=B.l2();ra(n,r,e,R,i,$,!1)}else F==="schema"&&A!=null?ra(n,r,e,O,i,A,!1):F!=="enum"&&ra(n,r,e,O,i,a,!1)}}}function v7(n){return(r,e)=>{var t=V(ci(Se(n,r)),"\0"),i=V(ci(Se(n,e)),"\0");return Ut(t,i)}}function h7(n){return n.d1k_1}function d7(n){return n.e1k_1}function p7(n){return n+1|0}function _7(n){return r=>n+r}function g7(n,r,e,t){return i=>"..."+ai(n,Ur(i),r,e,t)}function m7(n,r,e,t){return i=>ai(n,Ur(i),r,e,t)}function y7(n){return Be(r=>{var e=n;return ve(e,r)},1,0,8,"literal",[n])}function w7(n,r,e){return t=>Fn(n,Ur(t),r,e)}function b7(n,r,e){return t=>Fn(n,Ur(t),r,e)}function k7(n,r,e,t,i,a,s,o){return u=>{var c=n,f=u.l1k_1;Ea(c,f);var v=H5(r,u.h1k_1,u.j1k_1,e),h=t+"."+v,d=r.w1i_1,_=new ou(h,u.f1k_1,u.g1k_1);d.n(_);var m=u.o1k_1;if(m!=null){var w=i,x=new Ay(h,m,u.p1k_1);w.n(x)}var k=u.n1k_1;k==null||a.s2(h,k);var S=J5(r,t+"-"+v,s);return o.ca(pl(r,u.i1k_1,"")),o.ca("export const "+S+" = "+u.k1k_1(h)+`;
`),pl(r,u.i1k_1,"    ")+("    "+$e(v)+": "+S+",")}}function x7(n,r){var e=n.k2(),t=r.k2();return Ut(e,t)}function Wh(n){return $r(n,"type")==="string"&&$r(n,"format")==="binary"}function S7(n){return r=>{var e=r.k2(),t=r.l2(),i=Ur(t),a;if(Wh(i))a="File";else{var s;if($r(i,"type")==="array"){var o=ar(i,"items"),u;o==null?u=null:u=Wh(o),s=u===!0}else s=!1;s?a="File[]":a="string"}var c=a;return $e(e)+(n.l1(e)?"":"?")+": "+c}}function z7(n){return he(n)}function E7(n){return"    "+$e(n)+": "+he(n)+`,
`}function I7(n){return"    '"+n.q1k_1+"': "+n.r1k_1+`;
`}function C7(n){return"    '"+n.q1k_1+"': ["+V(n.s1k_1)+`],
`}function A7(n){return n+1|0}function T7(n){return r=>r===1?n:n+r}function q7(n){return av(n)}function O7(n){return n+1|0}function U7(n){return r=>n+r}function j7(n){return n.xf().d1(1)}function N7(n){return he(n)}function D7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:An(t),a=(i==null?null:Bn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=Fn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=$r(e,"name"),_=d??"";return $e(_)+(a?"":"?")+": "+h}}function L7(n,r){return e=>{var t=e.c18("required"),i=t==null?null:An(t),a=(i==null?null:Bn(i))==="true",s=ar(e,"schema"),o;s==null?o=null:o=Fn(n,s,r);var u=o,c;if(u==null)c=null;else{var f;u!=="unknown"?f=u:f=null,c=f}var v=c,h=v??"string",d=$r(e,"name"),_=d??"";return he(_)+(a?"":"?")+": "+h}}function P7(n){return he(n)}function M7(n,r,e,t,i,a){return s=>{var o=V(gi(n,"operation: '"+s+"'")),u=r?"stream":"request",c=V(e),f=i.toUpperCase();return"("+c+") => "+u+"<"+t+">('"+f+"', "+a+", { "+o+" })"}}function R7(n){return av(n)}function B7(n){return r=>{var e;return C(r)===0?e="":e=" "+r,n+" *"+e+`
`}}function Rn(n){wr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}var a=e,s=V(a,"",l,l,l,l,F7),o;C(s)===0?o="Unnamed":o=s;var u=o;return Bx(Rb(u))?"_"+u:u}function av(n){wr();var r=uu(n),e;if(C(r)>0){var t=K(r,0),i=yr(t).toUpperCase();e=b(i)+at(r,1)}else e=r;return e}function uu(n){wr();for(var r=St.te("[^A-Za-z0-9]+").ff(n,0),e=T.m(),t=r.x();t.y();){var i=t.z();C(i)>0&&e.n(i)}for(var a=e,s=T.g1(Zr(a,10)),o=0,u=a.x();u.y();){var c=u.z(),f=o;o=f+1|0;var v;if(Ds(f)===0){var h;if(C(c)>0){var d=K(c,0),_=yr(d).toLowerCase();h=b(_)+at(c,1)}else h=c;v=h}else{var m;if(C(c)>0){var w=K(c,0),x=yr(w).toUpperCase();m=b(x)+at(c,1)}else m=c;v=m}var k=v;s.n(k)}return V(s,"")}function sv(n,r){r=r===l?Ot():r,wr();var e=uu(n);return Xf().ue(e)&&!d5().l1(e)&&!r.l1(e)?e:"_"+e}function yw(n){return wr(),sv(n,v5())}function $e(n){return wr(),Xf().ue(n)?n:he(n)}function he(n){wr();var r=rn.f();r.da(39);for(var e=0;e<C(n);){var t=rr(n,e);if(e=e+1|0,t===92)r.ca("\\\\");else if(t===39)r.ca("\\'");else if(t===10)r.ca("\\n");else if(t===13)r.ca("\\r");else if(gn(t,32)<0||t===8232||t===8233){var i=Z(t);r.ca("\\u"+v0($x(i,16),4,48))}else r.da(t)}return r.da(39),r.toString()}function ww(n){wr();var r=n.c18("deprecated"),e=r instanceof fr?r:null;return(e==null?null:Pf(e))===!0}function bw(n){wr();var r=n.c18("readOnly"),e=r instanceof fr?r:null;return(e==null?null:Pf(e))===!0}function ar(n,r){wr();var e=n.c18(r);return e instanceof nr?e:null}function cu(n){wr();for(var r=n.r2(),e=J7,t=new Dy(e),i=zi(r,t),a=vn(Zr(i,10),16),s=vr.ha(a),o=i.x();o.y();){var u=o.z(),c=N(u.k2(),u.l2());s.s2(c.ch_1,c.dh_1)}return s}function hn(n,r){wr();var e=n.c18(r);return e instanceof fn?e:null}function $r(n,r){wr();var e=n.c18(r),t=e instanceof fr?e:null;return t==null?null:Bn(t)}function fu(n,r){wr();for(var e=hn(n,r),t=e??dr(),i=T.g1(Zr(t,10)),a=t.x();a.y();){var s=a.z(),o=An(s).w17();i.n(o)}return i}function ov(n){wr();var r=$r(n,"format"),e;return r==null?e=null:e=Xy().o2(r),e}function kw(n){wr();var r=$r(n,"format"),e;return r==null?e=null:e=ho().o2(r),e}function _l(n,r){wr();var e;if(n instanceof nr){var t,i=$r(n,"format");if((z(r,mn)?r:g()).m2(i))t=!0;else{var a=n.q2(),s;r:{var o;if(z(a,W)?o=a.i1():o=!1,o){s=!1;break r}for(var u=a.x();u.y();){var c=u.z();if(_l(c,r)){s=!0;break r}}s=!1}t=s}e=t}else if(n instanceof fn){var f;r:{var v;if(z(n,W)?v=n.i1():v=!1,v){f=!1;break r}for(var h=n.x();h.y();){var d=h.z();if(_l(d,r)){f=!0;break r}}f=!1}e=f}else e=!1;return e}function gl(n){wr();var r;if(n instanceof nr){var e;if(ov(n)!=null)e=!0;else{var t=n.q2(),i;r:{var a;if(z(t,W)?a=t.i1():a=!1,a){i=!1;break r}for(var s=t.x();s.y();){var o=s.z();if(gl(o)){i=!0;break r}}i=!1}e=i}r=e}else if(n instanceof fn){var u;r:{var c;if(z(n,W)?c=n.i1():c=!1,c){u=!1;break r}for(var f=n.x();f.y();){var v=f.z();if(gl(v)){u=!0;break r}}u=!1}r=u}else r=!1;return r}var Yh;function lv(){if(Yh)return or;Yh=!0,xw=new vo("ADD_ERROR",0,"add-error.ts"),Sw=new vo("ADD_NESTED",1,"add-nested.ts"),zw=new vo("MATCHES",2,"matches.ts")}var xw,Sw,zw;function $7(n){return wr(),n.h16_1=!0,or}function F7(n){return wr(),av(n)}function J7(n,r){wr();var e=n.k2(),t=r.k2();return Ut(e,t)}function Ew(){return lv(),xw}function H7(){return lv(),Sw}function Zh(){return lv(),zw}var Vh;function wr(){Vh||(Vh=!0,Hy=kt(["get","post","put","patch","delete","head","options"]),Gy=St.te("[A-Za-z_$][A-Za-z0-9_$]*"),Wy=St.te("\\{([^}]+)\\}"),Zy=jI(l,$7),Vy=kt(["guardPages","signedInUser","pageGuards"]),Qy=nh([N("date","IsoDate"),N("time","IsoTime"),N("date-time","IsoDateTime")]),rw=nh([N("duration","IsoDuration"),N("decimal","Decimal")]),nw=Tl([N("IsoDuration","'PT0S'"),N("Decimal","'0'")]),ew=ti(["string","integer","number"]),tw=`export function hasErrorCode<C extends ErrorCode>(error: unknown, code: C): error is ApiError<{ message: string; code: C }> {
    return errorCode(error) === code;
}

export function setCodeMessages(messages: Partial<Record<ErrorCode, string | (() => string)>>): void {
    Object.assign(codeMessages, messages);
}

`,iw=ti(["api","request","stream","ApiError","errorStatuses","isApiError","publicConfig","loadPublicConfig","uploadRules","hasErrorCode","setCodeMessages"]),aw=ti(["body","query","headers","options","encodeURIComponent"]),sw=ti(["accept","content-type","content-length","cookie","x-request-id","idempotency-key","x-time-zone"]),ow=ti(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]),lw=kt(["minLength","maxLength","minimum","maximum","exclusiveMinimum","exclusiveMaximum","pattern"]))}function Xh(n,r){return r===1?"1 character":""+r+" characters"}var Vi;function At(n){return n%1===0?Un(n).toString():n.toString()}var kc;function Iw(){return kc===l&&new Py,kc}function G7(){return Aw(),Cw}var Cw;function Ve(n){return Aw(),Se(G7(),n)}var Qh;function Aw(){Qh||(Qh=!0,Cw=Tl([N("add-error.ts",`function addError(errors: Record<string, string[]>, field: string, message: string): void {
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
`)]))}function nA(n,r){var e;try{for(var t=new Ny(On(r)).f1l(n),i=Ie(),a=ec.t17(),s=vr.ha(t.c1()),o=t.r2().x();o.y();){var u=o.z(),c=u.k2(),f=re(u.l2());s.s2(c,f)}e=i.k15(a,new nr(bo(N("files",new nr(s)))))}catch(w){var v;if(w instanceof Error){var h=w,d=Ie(),_=ec.t17(),m=h.message;v=d.k15(_,new nr(bo(N("error",re(m??h.toString())))))}else throw w;e=v}return e}p(zy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Ey,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(pc,"EnumType");p(Iy,"EnumUsage");p(Cy,"Endpoint");p(Ay,"ErrorEntry");p(Ty,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(qy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Oy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(Uy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);p(jy);p(Ny,"TypeScriptGenerator");p(vo,"ValidationHelper");p(ou,"GeneratedOperation");p(Dy,"sam$kotlin_Comparator$0",l,l,[dn,bn]);D(Ly,"ConstraintMessages");p(Je,"RuleCheck");p(Zi,"RulePreset");D(Py,"RulePresets");Vi=new Ly;export{nA as generateTypeScript};
