function changeAttachment(ske: sp.Skeleton, attachmentName: string, spriteFrame: cc.SpriteFrame) {
    let runtimeData = ske.skeletonData.getRuntimeData(); //sp.spine.SkeletonData
    let skin = runtimeData.defaultSkin; // Skin
    let attachments = skin.attachments; // RegionAttachment[]
    let att = null;
    for (let i = 0; i < attachments.length; i++) {
        let curAtt = attachments[i];
        if (curAtt && curAtt[attachmentName]) {
            att = curAtt[attachmentName];
            break;
        }
    }

    if (!att) {
        console.log("no find attachment");
    }
    let texture = spriteFrame.getTexture();
    // @ts-ignore
    let skeletonTexture: sp.SkeletonTexture = new sp.SkeletonTexture({ width: texture.width, height: texture.height });
    // let skeletonTexture = new sp.SkeletonTexture();  //必须使用 {} 初始话，否则 Spine.Texture 初始化失败不能读取宽高
    skeletonTexture.setRealTexture(texture);

    let region = new sp.spine.TextureAtlasRegion();
    // region.page = page;
    region.width = texture.width;
    region.height = texture.height;
    region.originalWidth = texture.width;
    region.originalHeight = texture.height;

    region.rotate = false;
    region.u = 0;
    region.v = 0;
    region.u2 = 1;
    region.v2 = 1;
    region.texture = skeletonTexture;

    // @ts-ignore
    if (att instanceof sp.spine.MeshAttachment) {
        att.region = region;
        att.updateUVs();
    } else {
        att.setRegion(region);
        att.updateOffset();
    }
    // ske.invalidAnimationCache();
}