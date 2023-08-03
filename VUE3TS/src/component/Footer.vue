<template>
    <div class="bottom no_drag">
        <div class="left_bottom_corner"></div>
        <div class="middle_bottom" style="position:relative;">
            <div style="position:absolute;left:50%;transform:translate(-50%);"><img src="~@/assets/images/copyright.jpg" /></div>
            <div class="bottom_link no_drag" style="position: absolute; left: 80%; transform: translate(-50%);">Info</div>
            <div class="bottom_link no_drag" style="position: absolute; left: 90%; transform: translate(-50%);">Help</div>
        </div>
        <div class="right_bottom_corner"></div>
    </div>
</template>

<script>
    export default {
        name:'FooterView'
    }
</script>

<style lang="scss" scoped>
    $url_prefix: '../assets';

    .bottom {
        display: grid;
        width: 100%;
        grid-template-rows: 20px;
        grid-template-columns: 20px auto 20px;
    }

    .left_bottom_corner {
        background-image: url(($url_prefix)+"/images/TopImage/D-leftBottomCorner.png");
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }

    .middle_bottom {
        background-image: url(($url_prefix)+"/images/TopImage/D-bg.jpg");
        background-repeat: no-repeat;
        background-size: auto 20px;
    }

    .right_bottom_corner {
        background-image: url(($url_prefix)+"/images/TopImage/D-rightBottomCorner.png");
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }

    .bottom_link {
        text-decoration: none;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
    }

    .bottom_link:hover {
        color: #ffffff;
        cursor: default;
    }
</style>